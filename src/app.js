/**
 * iGEM Real-Time Defense Assistant — Core Application & Public SDK
 * =================================================================
 * Exposes `window.DefenseAssistantAPI` for programmatic control, custom provider
 * registration, and live Reference Answer Database manipulation.
 */
(function () {
  const CFG = window.DefenseConfig || {};
  let KB = window.IGEM_KB || { slides: [], qa_items: [], docs: [], glossary: [], system_prompt: "" };
  let QA_ITEMS = (KB.qa_items || []).slice();
  let SLIDES = (KB.slides || []).slice();
  let DOCS = (KB.docs || []).slice();
  let GLOSSARY = (KB.glossary || []).slice();

  const SYNONYM_GROUPS = CFG.synonymGroups || [];

  // Event emitter for external integrations via window.DefenseAssistantAPI.on(...)
  const eventListeners = {
    questionDetected: [],
    localMatch: [],
    aiStreamChunk: [],
    aiStreamDone: [],
    databaseUpdated: []
  };

  function emitEvent(eventName, payload) {
    const list = eventListeners[eventName];
    if (Array.isArray(list)) {
      list.forEach(fn => {
        try { fn(payload); } catch (e) { console.error(e); }
      });
    }
  }

  let qaMap = {};

  function rebuildSearchIndex() {
    qaMap = {};
    QA_ITEMS.forEach(item => {
      qaMap[item.id] = item;
      item._searchText = [
        item.id, item.code, item.slide, (item.slides || []).join(" "),
        item.q_zh, item.q_en, item.a_zh, item.a_en, item.extra_zh, item.keywords,
        (item.notes_zh || []).join(" "), (item.notes || []).join(" ")
      ].join(" ").toLowerCase();
    });

    DOCS.forEach(doc => {
      doc._searchText = [doc.source, doc.title, doc.content, doc.tags || ""].join(" ").toLowerCase();
    });
  }

  // Restore local overrides if running via file:// and user edited QA items in browser
  try {
    const localQaOverride = localStorage.getItem("IGEM_CUSTOM_QA_ITEMS");
    if (localQaOverride && location.protocol === "file:") {
      const parsed = JSON.parse(localQaOverride);
      if (Array.isArray(parsed) && parsed.length > 0) {
        QA_ITEMS = parsed;
      }
    }
  } catch (e) {}

  rebuildSearchIndex();

  function expandTokens(rawQuery) {
    const qLower = (rawQuery || "").toLowerCase().trim();
    if (!qLower) return { qLower: "", rawTokens: [], expandedTokens: [] };

    const enNumTokens = qLower.match(/[a-z0-9.%+-]{2,}/g) || [];
    const zhRuns = qLower.match(/[\u4e00-\u9fa5]{2,}/g) || [];
    const zhTokens = [];
    zhRuns.forEach(run => {
      zhTokens.push(run);
      if (run.length >= 3) {
        for (let i = 0; i <= run.length - 2; i++) {
          zhTokens.push(run.slice(i, i + 2));
        }
      }
    });

    const baseTokens = Array.from(new Set([...enNumTokens, ...zhTokens]));
    const expanded = new Set(baseTokens);

    SYNONYM_GROUPS.forEach(group => {
      if (group.some(term => qLower.includes(term))) {
        group.forEach(term => expanded.add(term));
      }
    });

    return { qLower, rawTokens: baseTokens, expandedTokens: Array.from(expanded) };
  }

  let currentActiveQa = QA_ITEMS[0];
  let currentQaHits = QA_ITEMS;
  let currentDocHits = DOCS.slice(0, 5);
  const questionHistory = [];
  let activeHistoryIdx = -1;
  const transcriptSegments = [];

  /**
   * Detects whether a query relies on multi-turn context (anaphoric pronouns like
   * "it", "that", "this", "they", "those", "there", "the two bands", or short follow-ups)
   * and returns context keywords + previous slide affinity from recent dialogue history.
   */
  function getFollowUpContext(currentQuery) {
    const q = String(currentQuery || "").trim();
    const hasAnaphora = /\b(it|its|that|this|they|them|their|those|these|there|such|same|both|either|former|latter|other\s+one|first\s+one|second\s+one|for\s+it|for\s+that|with\s+it|with\s+that|about\s+that|in\s+that|from\s+that|at\s+that)\b|(它|它们|这|那|这个|那个|这些|那些|该|上述|刚才|前面|第二种|第一种|另一个|后面那个)/i.test(q);
    const wordCount = q ? q.split(/\s+/).length : 0;
    const isShortFollowUp = wordCount > 0 && wordCount <= 9;

    const recentHist = questionHistory
      .filter(h => h.q.toLowerCase() !== q.toLowerCase())
      .slice(-2);

    const now = Date.now();
    const windowMs = (CFG.speech && CFG.speech.contextWindowMs) || 150000;
    const recentSpoken = transcriptSegments
      .filter(s => now - s.ts < windowMs && s.text.toLowerCase() !== q.toLowerCase())
      .slice(-4);

    let contextSeedText = "";
    let prevSlideCode = "";
    if (recentHist.length > 0) {
      const lastEntry = recentHist[recentHist.length - 1];
      const prevQa = QA_ITEMS.find(x => x.id === lastEntry.activeQaId);
      prevSlideCode = prevQa ? prevQa.slide : "";
      contextSeedText += recentHist.map(h => {
        const qa = QA_ITEMS.find(x => x.id === h.activeQaId);
        return `${h.q} ${h.trans || ""} ${qa ? (qa.keywords + " " + qa.q_en + " " + qa.slide) : ""}`;
      }).join(" ");
    }
    if (recentSpoken.length > 0) {
      contextSeedText += " " + recentSpoken.map(s => s.text).join(" ");
    }

    return {
      needsContextBoost: Boolean(q && (hasAnaphora || isShortFollowUp) && contextSeedText.trim()),
      hasHistory: recentHist.length > 0 || recentSpoken.length > 0,
      contextSeedText: contextSeedText.trim(),
      prevSlideCode
    };
  }

  function retrieveDocsForContext(userQuery, activeQa) {
    const ctx = getFollowUpContext(userQuery);
    const seed = [
      userQuery || "",
      ctx.needsContextBoost ? ctx.contextSeedText : "",
      activeQa ? `${activeQa.code} ${activeQa.slide} ${(activeQa.slides || []).join(" ")} ${activeQa.keywords} ${activeQa.q_en} ${activeQa.q_zh}` : ""
    ].join(" ");
    const { rawTokens, expandedTokens } = expandTokens(seed);
    const { rawTokens: userTokens } = expandTokens(userQuery || "");

    const scored = [];
    DOCS.forEach(doc => {
      let s = 0;
      const st = doc._searchText;

      if (activeQa) {
        if (st.includes(activeQa.code.toLowerCase())) s += 25;
        (activeQa.slides || []).forEach(sl => {
          if (st.includes(sl.toLowerCase())) s += 8;
        });
      }
      userTokens.forEach(t => {
        if (st.includes(t)) s += 15;
      });
      expandedTokens.forEach(t => {
        if (st.includes(t)) s += 3;
      });

      if (s > 0) scored.push({ doc, score: s });
    });

    scored.sort((a, b) => b.score - a.score);
    const finalDocs = scored.length > 0 ? scored.map(x => x.doc) : DOCS.slice(0, 5);
    return {
      totalMatched: scored.length || DOCS.length,
      topDocs: finalDocs.slice(0, 5),
      highlightTokens: userTokens.length ? userTokens : rawTokens.slice(0, 5)
    };
  }

  function searchQaItems(query) {
    const t0 = performance.now();
    const { qLower, rawTokens, expandedTokens } = expandTokens(query);
    const ctx = getFollowUpContext(query);
    const { rawTokens: ctxRawTokens, expandedTokens: ctxExpTokens } = expandTokens(
      ctx.needsContextBoost ? ctx.contextSeedText : ""
    );

    const scoredQA = QA_ITEMS.map(item => {
      if (!qLower) return { item, score: 1 };
      let score = 0;
      const st = item._searchText;
      const qText = (item.q_zh + " " + item.q_en + " " + item.keywords + " " + item.code).toLowerCase();

      if (qLower.length >= 3 && qText.includes(qLower)) score += 60;
      else if (qLower.length >= 3 && st.includes(qLower)) score += 30;

      rawTokens.forEach(tok => {
        if (tok.length < 2) return;
        if (item.code.toLowerCase() === tok || item.slide.toLowerCase() === tok) score += 45;
        if (qText.includes(tok)) score += 16;
        else if (st.includes(tok)) score += 7;
      });

      expandedTokens.forEach(tok => {
        if (qText.includes(tok)) score += 6;
        else if (st.includes(tok)) score += 2.5;
      });

      if (ctx.needsContextBoost && ctx.hasHistory) {
        if (ctx.prevSlideCode && item.slide === ctx.prevSlideCode) {
          score += 14;
        }
        ctxRawTokens.forEach(tok => {
          if (tok.length < 3) return;
          if (qText.includes(tok)) score += 5.5;
          else if (st.includes(tok)) score += 2.2;
        });
        ctxExpTokens.forEach(tok => {
          if (qText.includes(tok)) score += 2.0;
        });
      }

      return { item, score };
    }).filter(x => x.score > 0);

    if (qLower) scoredQA.sort((a, b) => b.score - a.score);

    const hits = scoredQA.length ? scoredQA.map(x => x.item) : QA_ITEMS.slice(0, 8);
    const ms = (performance.now() - t0).toFixed(1);
    const ctxTag = (qLower && ctx.needsContextBoost && ctx.hasHistory) ? " · 已关联上文指代" : "";
    const statusEl = document.getElementById("leftStatusText");
    if (statusEl) statusEl.textContent = `检索耗时 ${ms} ms${ctxTag}`;
    emitEvent("localMatch", { query, hits });
    return hits;
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function cleanText(safeHtml) {
    return safeHtml
      .replace(/\\text\{([^}]+)\}/g, "$1")
      .replace(/\\times/g, "×")
      .replace(/\\approx/g, "≈")
      .replace(/\\ge/g, "≥")
      .replace(/\\le/g, "≤")
      .replace(/\{,\}/g, ",")
      .replace(/\$([^$]+)\$/g, "$1")
      .replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>")
      .replace(/`([^`]+)`/g, "$1");
  }

  function highlightNumbers(safeHtml) {
    const cleaned = cleanText(safeHtml);
    return cleaned.replace(
      /(\b\d+(?:\.\d+)?(?:\s*(?:%|µM|uM|mM|mg\/L|g\/L|µg\/mL|kDa|h|hours|min|minutes|RFU|OD₆₀₀|OD₅₉₀|µm))?)/g,
      '<span class="num-hi">$1</span>'
    );
  }

  function formatPointItem(rawPoint, idx) {
    const body = String(rawPoint || "")
      .replace(/^\d+\.\s*(?:\[[^\]]+\]|【[^】]+】)?\s*/, "")
      .trim();
    return `
      <div class="point-item">
        <span class="point-num">${idx + 1}.</span>
        <div class="point-text">${highlightNumbers(escapeHtml(body))}</div>
      </div>
    `;
  }

  function formatNoteItem(rawNote, idx) {
    const body = String(rawNote || "")
      .replace(/^\d+\.\s*(?:\[[^\]]+\]|【[^】]+】)?\s*/, "")
      .trim();
    const styled = highlightNumbers(escapeHtml(body))
      .replace(/\s*(?:→|-&gt;)\s*/g, '<span class="note-arrow">→</span>')
      .replace(/\s*\|\s*/g, '<span class="note-sep">|</span>');
    return `
      <div class="note-item">
        <span class="note-num">${idx + 1}.</span>
        <div class="note-text">${styled}</div>
      </div>
    `;
  }

  function renderRefs(userQuery, activeQa) {
    const { totalMatched, topDocs, highlightTokens } = retrieveDocsForContext(userQuery, activeQa);
    currentDocHits = topDocs;
    document.getElementById("refSectionLabel").textContent =
      `关联项目库原文 (匹配 ${totalMatched} 条 · 展示前 ${topDocs.length} 条)`;

    const container = document.getElementById("refListContainer");
    container.innerHTML = "";
    topDocs.forEach(doc => {
      let bodyHtml = escapeHtml(doc.content);
      highlightTokens.slice(0, 4).forEach(tok => {
        if (tok.length < 2) return;
        const escapedTok = tok.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        try {
          bodyHtml = bodyHtml.replace(new RegExp("(" + escapedTok + ")", "gi"), "<mark>$1</mark>");
        } catch (e) {}
      });
      const div = document.createElement("div");
      div.className = "ref-item";
      div.innerHTML = `
        <div class="ref-title">
          <span>${escapeHtml(doc.title)}</span>
          <span style="font-weight:400;color:#9ca3af;">${escapeHtml(doc.source)}</span>
        </div>
        <div>${bodyHtml}</div>
      `;
      container.appendChild(div);
    });
  }

  let lastAiQuestionText = "";

  function renderActiveQa(item, fromUserTabClick = false) {
    if (!item) return;
    currentActiveQa = item;

    if (fromUserTabClick) {
      document.getElementById("aiPointsBlock").classList.remove("visible");
      document.getElementById("aiNotesBlock").classList.remove("visible");
    }

    document.querySelectorAll(".hit-tab").forEach(el => {
      el.classList.toggle("active", el.dataset.id === item.id);
    });

    const slideObj = SLIDES.find(s => s.code === item.slide) || SLIDES[0];
    document.getElementById("slideTag").textContent =
      slideObj ? `对应页: ${slideObj.code} (第 ${slideObj.page} 页)` : item.slide;

    document.getElementById("qZhText").textContent = `${item.code} · ${item.q_zh}`;
    document.getElementById("qEnText").textContent = item.q_en;

    document.getElementById("stdPointsEn").innerHTML =
      (item.points_en || []).map((p, i) => formatPointItem(p, i)).join("");
    document.getElementById("stdPointsZh").innerHTML =
      (item.points_zh || []).map((p, i) => formatPointItem(p, i)).join("");

    const notesArr = (item.notes_zh && item.notes_zh.length) ? item.notes_zh : (item.notes || []);
    document.getElementById("stdNotesContainer").innerHTML =
      notesArr.map((n, i) => formatNoteItem(n, i)).join("");

    const extraEl = document.getElementById("stdExtraZh");
    if (item.extra_zh) {
      extraEl.style.display = "block";
      extraEl.innerHTML = highlightNumbers(escapeHtml(item.extra_zh));
    } else {
      extraEl.style.display = "none";
    }

    renderRefs(document.getElementById("queryInput").value, item);
  }

  function renderHitTabs(qaHits) {
    const container = document.getElementById("hitTabs");
    container.innerHTML = "";
    qaHits.slice(0, 10).forEach((item, idx) => {
      const btn = document.createElement("button");
      btn.className = "hit-tab" + (idx === 0 ? " active" : "");
      btn.dataset.id = item.id;
      btn.textContent = `${item.code} ${item.q_zh.slice(0, 12)}`;
      btn.onclick = () => renderActiveQa(item, true);
      container.appendChild(btn);
    });
    if (qaHits.length > 0) {
      renderActiveQa(qaHits[0], false);
    }
  }

  function updateTransLine(query, topQa, customBadgeHtml = "") {
    const line = document.getElementById("liveTransLine");
    const q = (query || "").trim();
    if (!q && !customBadgeHtml) {
      const fileTip = location.protocol === "file:"
        ? "（提示：运行 python3 server.py 或双击启动脚本通过 127.0.0.1 打开，可永久记住麦克风权限并支持网页直接保存题库）"
        : "";
      line.innerHTML = `就绪 · 开启全场监听后无需反复开关，系统自动锁定评委提问并过滤我方作答 ${fileTip}`;
      return;
    }
    const qLower = q.toLowerCase();
    const terms = GLOSSARY.filter(g => {
      const parts = g.en.toLowerCase().split(/[\/\s]+/);
      return parts.some(p => p.length >= 2 && qLower.includes(p)) || qLower.includes(g.zh.slice(0, 3));
    }).slice(0, 2).map(g => `${g.en}: ${g.zh.split("(")[0].trim()}`);

    const termStr = terms.length ? ` ｜ 术语: ${escapeHtml(terms.join("；"))}` : "";
    if (customBadgeHtml) {
      line.innerHTML = `${customBadgeHtml}${termStr}`;
    } else if (topQa) {
      line.innerHTML = `<strong>匹配问题 (${escapeHtml(topQa.code)})：</strong>${escapeHtml(topQa.q_zh)}${termStr}`;
    } else {
      line.innerHTML = `<strong>当前输入：</strong>${escapeHtml(q)}${termStr}`;
    }
  }

  function handleQueryChange(fromManualTyping = false) {
    const q = document.getElementById("queryInput").value;
    if (fromManualTyping && q.trim() !== lastAiQuestionText) {
      document.getElementById("aiPointsBlock").classList.remove("visible");
      document.getElementById("aiNotesBlock").classList.remove("visible");
    }
    const hits = searchQaItems(q);
    currentQaHits = hits;
    renderHitTabs(hits);
    updateTransLine(q, hits[0]);
  }

  // Provider Config from window.DefenseConfig
  const PROVIDERS = Object.assign({}, CFG.providers || {});
  const providerSelect = document.getElementById("providerSelect");
  const customUrlInput = document.getElementById("customUrlInput");
  const customModelInput = document.getElementById("customModelInput");
  const apiKeyInput = document.getElementById("apiKeyInput");

  function rebuildProviderSelectOptions() {
    const currentVal = providerSelect.value || CFG.defaultProvider || "deepseek_flash";
    providerSelect.innerHTML = "";
    Object.keys(PROVIDERS).forEach(key => {
      const opt = document.createElement("option");
      opt.value = key;
      opt.textContent = PROVIDERS[key].name || key;
      providerSelect.appendChild(opt);
    });
    if (PROVIDERS[currentVal]) {
      providerSelect.value = currentVal;
    }
  }

  function getActiveProviderConfig() {
    const pKey = providerSelect.value || CFG.defaultProvider || "deepseek_flash";
    const base = PROVIDERS[pKey] || Object.values(PROVIDERS)[0];
    if (pKey === "custom") {
      let rawUrl = customUrlInput.value.trim() || base.url || "https://ark.cn-beijing.volces.com/api/v3/chat/completions";
      if (!rawUrl.endsWith("/chat/completions")) {
        rawUrl = rawUrl.replace(/\/+$/, "") + "/chat/completions";
      }
      const m = customModelInput.value.trim() || base.model || "gpt-4o-mini";
      return { name: "Custom", keyGroup: "CUSTOM", url: rawUrl, model: m, fastModel: m, extra: {} };
    }
    return base;
  }

  function loadProviderInputs() {
    const pKey = providerSelect.value;
    const cfg = PROVIDERS[pKey] || Object.values(PROVIDERS)[0];
    customUrlInput.style.display = pKey === "custom" ? "inline-block" : "none";
    customModelInput.style.display = pKey === "custom" ? "inline-block" : "none";
    let savedKey = localStorage.getItem("IGEM_KEY_" + cfg.keyGroup) || "";
    if (!savedKey && cfg.keyGroup === "DEEPSEEK") {
      savedKey = localStorage.getItem("IGEM_DEEPSEEK_API_KEY") || "";
    }
    apiKeyInput.value = savedKey;
    apiKeyInput.placeholder = `${cfg.keyGroup} API Key`;
  }

  rebuildProviderSelectOptions();
  loadProviderInputs();

  providerSelect.addEventListener("change", loadProviderInputs);
  apiKeyInput.addEventListener("input", () => {
    const cfg = getActiveProviderConfig();
    localStorage.setItem("IGEM_KEY_" + cfg.keyGroup, apiKeyInput.value.trim());
    if (cfg.keyGroup === "DEEPSEEK") {
      localStorage.setItem("IGEM_DEEPSEEK_API_KEY", apiKeyInput.value.trim());
    }
  });

  function getSystemPrompt() {
    return (CFG.systemPromptOverride && CFG.systemPromptOverride.trim())
      || (KB.system_prompt && KB.system_prompt.trim())
      || "You are a real-time iGEM Defense Q&A assistant. Output 3 points [1], [2], [3], each with EN:, ZH:, and NOTE: lines.";
  }

  let activeAbortController = null;

  function parseAiStructuredOutput(rawText) {
    const enList = [];
    const zhList = [];
    const noteList = [];

    const blockRegex = /\[([123])\]\s*([\s\S]*?)(?=\[[123]\]|$)/g;
    let m;
    while ((m = blockRegex.exec(rawText)) !== null) {
      const body = m[2];
      const enMatch = body.match(/EN:\s*(.+)/i);
      const zhMatch = body.match(/ZH:\s*(.+)/i);
      const noteMatch = body.match(/NOTE:\s*(.+)/i);
      if (enMatch) enList.push(enMatch[1].trim());
      if (zhMatch) zhList.push(zhMatch[1].trim());
      if (noteMatch) noteList.push(noteMatch[1].trim());
    }

    if (!enList.length && !zhList.length && !noteList.length) {
      const enMatches = [...rawText.matchAll(/EN:\s*(.+)/gi)];
      const zhMatches = [...rawText.matchAll(/ZH:\s*(.+)/gi)];
      const noteMatches = [...rawText.matchAll(/NOTE:\s*(.+)/gi)];
      enMatches.forEach(x => enList.push(x[1].trim()));
      zhMatches.forEach(x => zhList.push(x[1].trim()));
      noteMatches.forEach(x => noteList.push(x[1].trim()));
    }

    return { enList, zhList, noteList };
  }

  function renderStreamingOutput(rawText) {
    const { enList, zhList, noteList } = parseAiStructuredOutput(rawText);

    if (enList.length) {
      document.getElementById("aiPointsEnContainer").innerHTML =
        enList.map((line, i) => formatPointItem(line, i)).join("");
    }
    if (zhList.length) {
      document.getElementById("aiPointsZhContainer").innerHTML =
        zhList.map((line, i) => formatPointItem(line, i)).join("");
    }
    if (noteList.length) {
      document.getElementById("aiNotesContainer").innerHTML =
        noteList.map((line, i) => formatNoteItem(line, i)).join("");
    }
    return { enList, zhList, noteList };
  }

  const prevAnswerBtn = document.getElementById("prevAnswerBtn");
  const clearContextBtn = document.getElementById("clearContextBtn");

  function updatePrevAnswerBtn() {
    if (!prevAnswerBtn) return;
    const canGoBack = activeHistoryIdx > 0;
    prevAnswerBtn.disabled = !canGoBack;
    prevAnswerBtn.textContent = canGoBack
      ? `← 上一回答 (Q${activeHistoryIdx})`
      : "← 上一回答";
  }

  function clearConversationContext() {
    questionHistory.length = 0;
    activeHistoryIdx = -1;
    transcriptSegments.length = 0;
    lastDetectedJudgeQ = "";
    renderQuestionHistoryBar();
    document.getElementById("liveTransLine").innerHTML =
      `<span class="role-badge">上下文已清空</span>已重置多轮追问记忆，当前将作为全新独立话题处理`;
  }

  if (clearContextBtn) {
    clearContextBtn.addEventListener("click", clearConversationContext);
  }

  function renderQuestionHistoryBar() {
    const bar = document.getElementById("qHistBar");
    const list = document.getElementById("qHistList");
    updatePrevAnswerBtn();
    if (!questionHistory.length) {
      bar.classList.remove("visible");
      return;
    }
    bar.classList.add("visible");
    list.innerHTML = "";
    questionHistory.forEach((entry, idx) => {
      const btn = document.createElement("button");
      btn.className = "q-hist-pill" + (idx === activeHistoryIdx ? " active" : "");
      const shortQ = entry.q.length > 28 ? entry.q.slice(0, 28) + "..." : entry.q;
      btn.textContent = `Q${idx + 1}: ${shortQ}`;
      btn.title = entry.q;
      btn.onclick = () => restoreHistoryEntry(idx);
      list.appendChild(btn);
    });
  }

  function restoreHistoryEntry(idx) {
    const entry = questionHistory[idx];
    if (!entry) return;
    if (activeAbortController) activeAbortController.abort();
    if (silenceFinalizeTimer) clearTimeout(silenceFinalizeTimer);

    activeHistoryIdx = idx;
    isQuestionLocked = true;
    updateMicUi();

    document.getElementById("queryInput").value = entry.q;
    lastAiQuestionText = entry.q;
    const hits = searchQaItems(entry.q);
    currentQaHits = hits;
    renderHitTabs(hits);
    if (entry.activeQaId) {
      const matchedItem = QA_ITEMS.find(x => x.id === entry.activeQaId);
      if (matchedItem) renderActiveQa(matchedItem, false);
    }
    if (entry.trans) {
      document.getElementById("qZhText").textContent = `评委提问 Q${idx + 1}：${entry.trans}`;
      document.getElementById("qEnText").textContent = entry.q;
    } else {
      document.getElementById("qEnText").textContent = entry.q;
    }
    if (entry.rawAiOut) {
      document.getElementById("aiPointsBlock").classList.add("visible");
      document.getElementById("aiNotesBlock").classList.add("visible");
      renderStreamingOutput(entry.rawAiOut);
      document.getElementById("rightStatusText").textContent = `已恢复 Q${idx + 1} 回答`;
    } else {
      document.getElementById("aiPointsBlock").classList.remove("visible");
      document.getElementById("aiNotesBlock").classList.remove("visible");
    }
    document.getElementById("liveTransLine").innerHTML =
      `<span class="role-badge locked">已恢复 Q${idx + 1}</span><strong>${escapeHtml(entry.trans || entry.q)}</strong>`;
    renderQuestionHistoryBar();
  }

  function goBackToPreviousAnswer() {
    if (activeHistoryIdx > 0) {
      restoreHistoryEntry(activeHistoryIdx - 1);
    }
  }

  if (prevAnswerBtn) {
    prevAnswerBtn.addEventListener("click", goBackToPreviousAnswer);
  }

  function buildDialogueContextForAi(currentQ) {
    const qLower = String(currentQ || "").trim().toLowerCase();
    const maxTurns = (CFG.speech && CFG.speech.maxHistoryTurns) || 2;
    const priorQuestions = questionHistory
      .filter(h => h.q.toLowerCase() !== qLower)
      .slice(-maxTurns);

    const priorLines = priorQuestions.map((entry, idx) => {
      const qaObj = QA_ITEMS.find(x => x.id === entry.activeQaId);
      let ansSummary = "";
      if (entry.rawAiOut) {
        const parsed = parseAiStructuredOutput(entry.rawAiOut);
        ansSummary = parsed.noteList.length
          ? parsed.noteList.join(" | ")
          : parsed.enList.slice(0, 2).join(" ");
      } else if (qaObj) {
        ansSummary = (qaObj.notes_zh || qaObj.notes || []).join(" | ");
      }
      const slideInfo = qaObj ? ` [Slide ${qaObj.slide}: ${qaObj.slide_title}]` : "";
      return `Prior Turn ${idx + 1}${slideInfo}:\n- Judge Asked: "${entry.q}" (${entry.trans || ""})\n- Our Answer Key Points: ${ansSummary || "N/A"}`;
    });

    const now = Date.now();
    const windowMs = (CFG.speech && CFG.speech.contextWindowMs) || 150000;
    const recentTeamUtterances = transcriptSegments
      .filter(s => now - s.ts < windowMs && s.text.toLowerCase() !== qLower)
      .slice(-4)
      .map(s => `[${s.role === "TEAM_ANSWER" ? "Our Team Spoke" : "Live Speech"}]: "${s.text}"`);

    const fullContextBlock = [
      ...priorLines,
      ...(recentTeamUtterances.length ? [`Recent Live Microphone Transcript:\n${recentTeamUtterances.join("\n")}`] : [])
    ].join("\n\n");

    const shortTransContext = priorQuestions.length > 0
      ? (() => {
          const last = priorQuestions[priorQuestions.length - 1];
          const lastQa = QA_ITEMS.find(x => x.id === last.activeQaId);
          return `上一题: "${last.q}" (${last.trans || (lastQa ? lastQa.q_zh : "")}，对应页 ${lastQa ? lastQa.slide : ""})`;
        })()
      : (recentTeamUtterances.length > 0 ? `刚刚现场发言: ${recentTeamUtterances[recentTeamUtterances.length - 1]}` : "");

    return {
      hasContext: Boolean(fullContextBlock),
      fullContextBlock,
      shortTransContext,
      priorCount: priorQuestions.length
    };
  }

  async function triggerAiStream(rawQuestion) {
    const cfg = getActiveProviderConfig();
    const apiKey = apiKeyInput.value.trim();
    const q = (rawQuestion || document.getElementById("queryInput").value).trim();
    if (!q) return;

    const dialogueCtx = buildDialogueContextForAi(q);

    lastAiQuestionText = q;
    document.getElementById("queryInput").value = q;
    const hits = searchQaItems(q);
    currentQaHits = hits;
    renderHitTabs(hits);
    document.getElementById("qEnText").textContent = q;
    ensureQuestionInFeed(q, hits[0]);

    let histEntry = questionHistory.find(h => h.q.toLowerCase() === q.toLowerCase());
    if (!histEntry) {
      histEntry = {
        q,
        trans: "",
        rawAiOut: "",
        activeQaId: currentActiveQa ? currentActiveQa.id : ""
      };
      questionHistory.push(histEntry);
      if (questionHistory.length > 12) questionHistory.shift();
    }
    activeHistoryIdx = questionHistory.indexOf(histEntry);
    renderQuestionHistoryBar();

    if (!apiKey) {
      apiKeyInput.focus();
      document.getElementById("rightStatusText").textContent = "请先填入 API Key（当前展示题库标准答案）";
      return;
    }

    if (activeAbortController) activeAbortController.abort();
    activeAbortController = new AbortController();
    const signal = activeAbortController.signal;

    const aiPointsBlock = document.getElementById("aiPointsBlock");
    const aiNotesBlock = document.getElementById("aiNotesBlock");
    aiPointsBlock.classList.add("visible");
    aiNotesBlock.classList.add("visible");
    document.getElementById("aiNotesContainer").innerHTML = `<div class="note-item"><span class="note-num">1.</span><div class="note-text">同步生成第 1·2·3 点速记中...</div></div>`;
    document.getElementById("aiPointsEnContainer").innerHTML = `<div class="point-item"><span class="point-num">1.</span><div class="point-text">Generating synchronized 1·2·3 points...</div></div>`;
    document.getElementById("aiPointsZhContainer").innerHTML = "";
    const ctxStatusLabel = dialogueCtx.hasContext ? "（已携带上文追问上下文）" : "";
    document.getElementById("rightStatusText").textContent = `${cfg.name} 生成中${ctxStatusLabel}...`;

    const topQaContext = currentQaHits.slice(0, 3).map(item =>
      `[${item.code} | Slide ${(item.slides || [item.slide]).join("/")}] Q: ${item.q_en}\n中文速记: ${(item.notes_zh || item.notes || []).join(" | ")}\nEN: ${item.a_en}`
    ).join("\n---\n");

    const topDocContext = currentDocHits.slice(0, 3).map(doc =>
      `[${doc.source} - ${doc.title}] ${doc.content.slice(0, 340)}`
    ).join("\n---\n");

    const contextSection = dialogueCtx.hasContext
      ? `Recent Multi-Turn Dialogue Context (use this to resolve pronouns like "it", "that", "this", "they", "there" in the Judge's current follow-up question):\n${dialogueCtx.fullContextBlock}\n\n`
      : "";

    const userPrompt = `${contextSection}Judge Current Question: "${q}"\n\nMatched Q&As:\n${topQaContext}\n\nMatched Project Docs:\n${topDocContext}`;
    const tStart = performance.now();

    // 1. Parallel Translation Stream
    const transUserContent = dialogueCtx.shortTransContext
      ? `【${dialogueCtx.shortTransContext}】\n当前评委追问：${q}`
      : q;

    fetch(cfg.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: cfg.fastModel,
        ...cfg.extra,
        temperature: 0.0,
        max_tokens: 90,
        stream: true,
        messages: [
          {
            role: "system",
            content: "将当前评委提问用1句简明中文直译；若问题中含有 it/that/this/they/there 等代词或省略了主语，请结合提供的【上一题】上下文在括号内自动补全其具体指代对象（例如：它[DspB商业酶] / 那个浓度[1 µM hemin]）。术语：naringenin=柚皮素, DspB=生物膜降解酶, EcN=大肠杆菌Nissle 1917, S. epidermidis=表皮葡萄球菌, PelB=信号肽, supernatant=上清液。只输出当前问题的中文译文。"
          },
          { role: "user", content: transUserContent }
        ]
      }),
      signal
    }).then(async res => {
      if (!res.ok || !res.body) return;
      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let transText = "";
      let buf = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });
        const lines = buf.split("\n");
        buf = lines.pop();
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const dataStr = line.slice(6).trim();
          if (dataStr === "[DONE]") break;
          try {
            const j = JSON.parse(dataStr);
            const delta = j.choices?.[0]?.delta?.content || "";
            if (delta) {
              transText += delta;
              histEntry.trans = transText;
              document.getElementById("qZhText").textContent = `评委提问 Q${activeHistoryIdx + 1}：${transText}`;
              const lockBadge = isQuestionLocked
                ? `<span class="role-badge locked">已锁定 Q${activeHistoryIdx + 1}${dialogueCtx.hasContext ? " · 关联上文" : ""}</span>`
                : `<span class="role-badge">问题同传</span>`;
              document.getElementById("liveTransLine").innerHTML =
                `${lockBadge}<strong>${escapeHtml(transText)}</strong>`;
              syncTranslationToFeed(q, transText);
            }
          } catch (e) {}
        }
      }
    }).catch(() => {});

    // 2. Main Synchronized Answer Stream
    try {
      const response = await fetch(cfg.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: cfg.model,
          ...cfg.extra,
          temperature: 0.12,
          max_tokens: 560,
          stream: true,
          messages: [
            { role: "system", content: getSystemPrompt() },
            { role: "user", content: userPrompt }
          ]
        }),
        signal
      });

      if (!response.ok) {
        const errTxt = await response.text();
        throw new Error(`HTTP ${response.status}: ${errTxt}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let fullOut = "";
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop();

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const payload = line.slice(6).trim();
          if (payload === "[DONE]") break;
          try {
            const parsed = JSON.parse(payload);
            const delta = parsed.choices?.[0]?.delta?.content || "";
            if (delta) {
              fullOut += delta;
              histEntry.rawAiOut = fullOut;
              const structured = renderStreamingOutput(fullOut);
              emitEvent("aiStreamChunk", { question: q, rawText: fullOut, structured });
            }
          } catch (e) {}
        }
      }

      const sec = ((performance.now() - tStart) / 1000).toFixed(2);
      document.getElementById("rightStatusText").textContent = `左右同步生成完成 (${sec} s${dialogueCtx.hasContext ? " · 含追问上下文" : ""})`;
      emitEvent("aiStreamDone", { question: q, rawText: fullOut, structured: parseAiStructuredOutput(fullOut) });
    } catch (err) {
      if (err.name !== "AbortError") {
        document.getElementById("aiNotesContainer").innerHTML = `<div class="note-item"><span class="note-num">!</span><div class="note-text">请求失败: ${escapeHtml(err.message)}</div></div>`;
        document.getElementById("rightStatusText").textContent = "请求异常";
      }
    }
  }

  // ============================================================================
  // Persistent Voice Input + Judge Question Classifier
  // ============================================================================
  let recognition = null;
  let micSessionStarted = false;
  let micPaused = true;
  let voiceMode = "manual_grab";
  let isQuestionLocked = false;
  let speechLang = (CFG.speech && CFG.speech.lang) || "en-US";
  let silenceFinalizeTimer = null;
  let processedResultCount = 0;
  let liveOngoingUtterance = "";
  let lastDetectedJudgeQ = "";

  const micBtn = document.getElementById("micBtn");
  const langBtn = document.getElementById("langBtn");
  const voiceModeSelect = document.getElementById("voiceModeSelect");
  const grabLastQBtn = document.getElementById("grabLastQBtn");
  const unlockNextBtn = document.getElementById("unlockNextBtn");

  function classifyAndExtractQuestion(rawUtterance, strictLockCheck = false) {
    const text = String(rawUtterance || "").replace(/\s+/g, " ").trim();
    if (!text) return { role: "EMPTY", cleanQuestion: "", judgeScore: 0, teamScore: 0 };

    const lower = text.toLowerCase();
    let judgeScore = 0;
    let teamScore = 0;

    const teamPatterns = [
      /\b(thank you|thanks for|that's a great question|to answer your question|good question)\b/i,
      /\bwe\s+(used|use|tested|test|constructed|measured|chose|choose|selected|designed|performed|observed|found|built|cloned|verified|purified|calculated|normalized|compared|co-cultured|engineered|applied|extracted|diluted|incubated|stained|plan|will|have|had|are|were|did|can|could|would|also|first|then|already)\b/i,
      /\b(in our|our project|our experiment|our design|our system|our assay|our study|our team|our sender|our receiver|our strain|our plasmid|our circuit|our data|our results|our hydrogel|our part|our construct|our control|our gel|our curve)\b/i,
      /\b(as shown on|on slide|backup slide|let me|if we look at|here we show|this slide shows|this figure shows)\b/i,
      /\b(in|by|for|to|from|of|with|at|on)\s+which\b/i,
      /\bwhich\s+(we|our|it|this|they|is\s+(?:a|an|the|why|because|used|shown|located|able|sufficient|consistent|absent|present|also|not)|was|were|has|have|had|can|could|will|would|may|might|also|then|directly|specifically|activates|activated|drives|drove|produces|produced|allows|allowed|means|meant|shows|showed|indicates|indicated|demonstrates|demonstrated|degrades|degraded|hydrolyzes|hydrolyzed|cleaves|cleaved|converts|converted|reduces|reduced|removes|removed|senses|sensed|binds|bound|triggers|triggered|expresses|expressed|secretes|secreted|leads|led|causes|caused|results|resulted|gives|gave|provides|provided|corresponds|matches|matched|explains|explained|prevents|prevented|inhibits|inhibited|lyses|lysed|supports|supported|confirms|confirmed|proves|proved|enables|enabled|reaches|reached|peaks|peaked|separates|separated)\b/i,
      /(?:^\S+\s+\S+.*?,?\s+)\bwhich\b/i,
      /\b(where|when)\s+(we|our|the|it|they|this|there\s+is\s+no|heme|hemin|naringenin|aip|dspb|cells|bacteria|biofilm)\b/i,
      /\b(this|that|it|which)\s+(shows|showed|explains|explained|demonstrates|demonstrated|means|meant|indicates|indicated|confirms|confirmed|proves|proved|is|was)\s+(how|why|what|where|when)\b/i,
      /\b(because|since|therefore|thus|however|moreover|furthermore|firstly|secondly|finally|specifically|for example)\b/i,
      /(我们|我方|在实验中|在设计中|发送菌|接收菌|感谢评委|如第.*页|所以|因此|这说明|之所以)/
    ];
    teamPatterns.forEach(re => {
      if (re.test(lower)) teamScore += 4.0;
    });

    const weCount = (lower.match(/\b(we|our|us|ours)\b/g) || []).length;
    if (weCount >= 1) teamScore += weCount * 2.5;

    const realQuestionPatterns = [
      /\b(could|can|would|will|did|do|does|have|has|had|are|is|was|were|should|may|might)\s+(you|your|there)\b/i,
      /(?:^|[.!?]\s+|\b(?:okay|so|and|but|wait|thank you)\s*,?\s+)(could|can|would|will|did|do|does|have|has|had|are|is|was|were|should)\s+(it|this|that|they|the\s+\w+)\b/i,
      /\b(doesn't|isn't|aren't|won't|didn't|don't|haven't|can't|couldn't|wouldn't)\s+(you|your|it|this|that|they|there)\b/i,
      /\b(how|why|what|where|when|who)\s+(do|does|did|is|are|was|were|can|could|will|would|should|have|has|had|might)\b/i,
      /(?:^|[.!?]\s+|\b(?:okay|so|and|but|wait|thank you|tell me|tell us)\s*,?\s+)which\s+(?:of\s+(?:the|these|those|your)\b|[a-z0-9_-]+\s+(?:do|does|did|is|are|was|were|can|could|will|would|should|have|has|had|gave|showed|shows|works|drives|activates|produces)\b)/i,
      /\b(what|how\s+much|how\s+many|how\s+long|how\s+fast|how\s+often|what\s+kind\s+of|what\s+type\s+of)\s+(?:[a-z0-9_-]+\s+){0,3}(do|does|did|is|are|was|were|can|could|will|would|should|have|has|had)\b/i,
      /\b(what\s+happens\s+(if|when)|what\s+if|how\s+about|what\s+about|why\s+not|how\s+come)\b/i,
      /\b(tell\s+me|tell\s+us|walk\s+us\s+through|walk\s+me\s+through|could\s+you\s+explain|can\s+you\s+explain|please\s+explain|could\s+you\s+clarify|can\s+you\s+clarify|can\s+you\s+show|could\s+you\s+show|i\s+was\s+wondering|i'm\s+curious|i\s+am\s+curious|my\s+question\s+is|i\s+have\s+a\s+question|another\s+question|follow-up\s+question)\b/i,
      /^(?:okay\s+|so\s+|and\s+|but\s+|wait\s+|well\s+|thank\s+you\s+)*(how|why|what)\s+(?!we\b|our\b|i\b)/i
    ];

    realQuestionPatterns.forEach(re => {
      if (re.test(lower)) judgeScore += 4.0;
    });

    const zhJudge = /(为什么|怎么|如何|多少|哪些|哪个|是否|有没有|能不能|可不可以|请问|难道|什么原因|怎么算|怎么测|吗|呢|\?|？)/;
    if (zhJudge.test(lower) && !/(之所以|是因为|说明了如何|展示了如何|这就是为什么)/.test(lower)) {
      judgeScore += 4.0;
    }
    if (/[?？]$/.test(text)) judgeScore += 2.5;

    const youCount = (lower.match(/\b(you|your)\b/g) || []).length;
    if (youCount >= 1) judgeScore += Math.min(3.6, youCount * 1.5);

    let cleanQuestion = text;
    const trueQStartRegex = /(?:^|[.!?]\s+|\b(?:thank you|okay|alright|great|i see|got it|so)\s*,?\s+)((?:how|why|what|which\s+(?:of\b|[a-z0-9_-]+\s+(?:do|does|did|is|are|was|were|can|could|will|would))|where\s+(?:do|does|did|is|are|was|were|can|could)|when\s+(?:do|does|did|is|are|was|were|can|could)|could you|can you|would you|did you|do you|have you|is there|are there|is it|are you|will it|does it|does your|tell me|tell us|explain|clarify|i was wondering|i'm curious|my question is|what if|how about|what about)\b[\s\S]*)$/i;
    const qMatch = text.match(trueQStartRegex);
    if (qMatch && qMatch[1] && qMatch[1].split(/\s+/).length >= 4) {
      const candidate = qMatch[1].trim();
      const candWeCount = (candidate.toLowerCase().match(/\b(we|our|us)\b/g) || []).length;
      if (candWeCount === 0) {
        cleanQuestion = candidate.charAt(0).toUpperCase() + candidate.slice(1);
      }
    }

    let role = "NEUTRAL";
    if (strictLockCheck) {
      if (judgeScore >= 4.0 && judgeScore > teamScore + 1.0) {
        role = "JUDGE_QUESTION";
      } else {
        role = "TEAM_ANSWER";
      }
    } else {
      if (teamScore >= 3.0 && teamScore >= judgeScore) {
        role = "TEAM_ANSWER";
      } else if (judgeScore >= 3.5 && judgeScore > teamScore) {
        role = "JUDGE_QUESTION";
      } else if (text.split(/\s+/).length >= 4 && teamScore === 0 && judgeScore > 0) {
        role = "JUDGE_QUESTION";
      }
    }

    return { role, cleanQuestion, judgeScore, teamScore };
  }

  // ============================================================================
  // Right 1/3 Panel: Real-Time Transcription & Simultaneous Translation Engine
  // ============================================================================
  let hideTeamSpeechInFeed = false;
  let interimTranslateTimer = null;
  let interimTranslateAbort = null;
  let lastInterimTranslatedText = "";

  const toggleTeamSpeechBtn = document.getElementById("toggleTeamSpeechBtn");
  const clearTranscriptBtn = document.getElementById("clearTranscriptBtn");
  const transLiveDot = document.getElementById("transLiveDot");
  const liveUtteranceBox = document.getElementById("liveUtteranceBox");
  const liveUtteranceRoleBadge = document.getElementById("liveUtteranceRoleBadge");
  const liveUtteranceHint = document.getElementById("liveUtteranceHint");
  const liveInterimEn = document.getElementById("liveInterimEn");
  const liveInterimZh = document.getElementById("liveInterimZh");
  const liveTranscriptFeed = document.getElementById("liveTranscriptFeed");

  const QUICK_TERM_DICT = [
    { re: /\bnaringenin\b/i, zh: "naringenin (柚皮素)" },
    { re: /\bs\.?\s*epidermidis\b/i, zh: "S. epidermidis (表皮葡萄球菌)" },
    { re: /\bs\.?\s*aureus\b/i, zh: "S. aureus (金黄色葡萄球菌)" },
    { re: /\becn\b|\bnissle\b/i, zh: "EcN (大肠杆菌Nissle 1917)" },
    { re: /\bbl21\b/i, zh: "BL21(DE3) (概念验证工程菌)" },
    { re: /\bdspb\b|\bdispersin\b/i, zh: "DspB (生物膜解聚酶)" },
    { re: /\blsp222\b/i, zh: "LSp222 (金葡菌噬菌体裂解酶)" },
    { re: /\bhegf\b/i, zh: "hEGF (人表皮生长因子)" },
    { re: /\bhemin\b|\bheme\b/i, zh: "heme/hemin (游离血红素)" },
    { re: /\bhssrs\b|\bphrtba\b/i, zh: "HssRS/pHrtBA (血红素双组分传感)" },
    { re: /\bfder\b|\bpfdear\b|\bnrsr\b/i, zh: "FdeR/PfdeAR (柚皮素转录激活系统)" },
    { re: /\bpelb\b/i, zh: "PelB (周质空间分泌信号肽)" },
    { re: /\bpnag\b|\bbiofilm\b/i, zh: "PNAG biofilm (多聚N-乙酰葡糖胺生物膜)" },
    { re: /\bsupernatant\b/i, zh: "supernatant (培养上清液)" },
    { re: /\bco-?culture\b/i, zh: "co-culture (双菌共培养)" },
    { re: /\bauxotroph|\bkill\s*switch\b|\bd-?alanine\b/i, zh: "D-Ala auxotrophy (营养缺陷型自杀开关)" },
    { re: /\bhydrogel\b|\bsemi-?permeable\b/i, zh: "hydrogel/membrane (水凝胶与半透膜隔离)" },
    { re: /\bhplc\b|\bcalibration\b|\bpeak\s*area\b/i, zh: "HPLC/标曲定量" }
  ];

  function extractMatchedTerms(text) {
    const qLower = String(text || "").toLowerCase();
    if (!qLower) return [];
    const found = [];
    QUICK_TERM_DICT.forEach(item => {
      if (item.re.test(qLower)) found.push(item.zh);
    });
    GLOSSARY.forEach(g => {
      if (found.length >= 4) return;
      const parts = g.en.toLowerCase().split(/[\/\s]+/);
      if (parts.some(p => p.length >= 3 && qLower.includes(p))) {
        const label = `${g.en}: ${g.zh.split("(")[0].trim()}`;
        if (!found.includes(label)) found.push(label);
      }
    });
    return found.slice(0, 4);
  }

  function buildInstantLocalZhPreview(text, matchedQa) {
    const clean = String(text || "").trim();
    if (!clean) return "";
    if (/[\u4e00-\u9fa5]{4,}/.test(clean)) {
      return clean;
    }
    const terms = extractMatchedTerms(clean);
    if (matchedQa && matchedQa.q_zh) {
      return `【关联 ${matchedQa.code}】${matchedQa.q_zh}`;
    }
    if (terms.length > 0) {
      return `关键词同传：${terms.join(" ｜ ")}`;
    }
    return "同传解析中...";
  }

  function formatTimeHMS(ts) {
    const d = new Date(ts || Date.now());
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");
    return `${hh}:${mm}:${ss}`;
  }

  function renderTranscriptFeed() {
    if (!liveTranscriptFeed) return;
    const visibleSegments = hideTeamSpeechInFeed
      ? transcriptSegments.filter(s => s.role !== "TEAM_ANSWER")
      : transcriptSegments;

    if (!visibleSegments.length) {
      liveTranscriptFeed.innerHTML = `
        <div class="trans-empty" id="transEmptyState">
          <div style="font-weight:600;color:var(--text);margin-bottom:4px;">实时语音转写与中文同传流</div>
          <div>1. 开启顶部「开启全场监听」后，评委与现场的每一句话都会在此处实时转写并自动翻译为中文。</div>
          <div>2. 在平板或电脑上<strong>直接点击任意一条转写卡片</strong>，即可立刻将该句作为评委问题锁定并在左侧生成回答。</div>
        </div>
      `;
      return;
    }

    const activeQNorm = (lastAiQuestionText || "").trim().toLowerCase();
    liveTranscriptFeed.innerHTML = "";

    visibleSegments.forEach((seg) => {
      const card = document.createElement("div");
      const isJudge = seg.role === "JUDGE_QUESTION";
      const isTeam = seg.role === "TEAM_ANSWER";
      const segQNorm = (seg.cleanQuestion || seg.text || "").trim().toLowerCase();
      const isLockedActive = activeQNorm && (segQNorm === activeQNorm || seg.text.toLowerCase() === activeQNorm);

      card.className = [
        "trans-card",
        isJudge ? "judge-card" : "",
        isTeam ? "team-card" : "",
        isLockedActive ? "active-locked" : ""
      ].filter(Boolean).join(" ");

      const roleBadgeHtml = isJudge
        ? `<span class="role-badge judge">评委提问</span>`
        : (isTeam
            ? `<span class="role-badge ignored">我方发言</span>`
            : `<span class="role-badge">现场语音</span>`);

      const codeBadgeHtml = seg.matchedCode
        ? `<span class="role-badge" style="font-family:ui-monospace,monospace;">${escapeHtml(seg.matchedCode)}</span>`
        : "";

      const zhText = seg.zhTrans || seg.localZhPreview || "等待同传...";
      const terms = seg.terms || [];
      const termsHtml = terms.length
        ? `<div class="trans-card-terms">术语: ${escapeHtml(terms.join(" · "))}</div>`
        : "";

      card.innerHTML = `
        <div class="trans-card-top">
          <div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap;">
            ${roleBadgeHtml}
            ${codeBadgeHtml}
            <span class="trans-card-time">${formatTimeHMS(seg.ts)}</span>
          </div>
          <span class="trans-card-action">${isLockedActive ? "当前作答中" : "点击作答 →"}</span>
        </div>
        <div class="trans-card-en">${highlightNumbers(escapeHtml(seg.text))}</div>
        <div class="trans-card-zh">${highlightNumbers(escapeHtml(zhText))}</div>
        ${termsHtml}
      `;

      card.addEventListener("click", () => {
        const targetQ = seg.cleanQuestion || seg.text;
        if (!targetQ) return;
        isQuestionLocked = true;
        updateMicUi();
        document.getElementById("queryInput").value = targetQ;
        triggerAiStream(targetQ);
      });

      liveTranscriptFeed.appendChild(card);
    });

    liveTranscriptFeed.scrollTop = liveTranscriptFeed.scrollHeight;
  }

  function updateLiveInterimBox(rawText, role) {
    if (!liveUtteranceBox || !liveInterimEn || !liveInterimZh) return;
    const clean = String(rawText || "").trim();
    liveUtteranceBox.classList.remove("active-speaking", "active-judge");

    if (!clean) {
      if (micSessionStarted && !micPaused) {
        liveUtteranceRoleBadge.className = "role-badge";
        liveUtteranceRoleBadge.textContent = "持续监听中";
        liveUtteranceHint.textContent = "正在实时捕捉评委提问与现场语音...";
        liveInterimEn.textContent = "等待说话...";
        liveInterimZh.textContent = "";
      } else {
        liveUtteranceRoleBadge.className = "role-badge";
        liveUtteranceRoleBadge.textContent = micPaused && micSessionStarted ? "已暂停" : "收音待命";
        liveUtteranceHint.textContent = "点击左上角「开启全场监听」启动实时转写与同传";
        liveInterimEn.textContent = "等待麦克风语音输入...";
        liveInterimZh.textContent = "";
      }
      return;
    }

    if (role === "JUDGE_QUESTION") {
      liveUtteranceBox.classList.add("active-judge");
      liveUtteranceRoleBadge.className = "role-badge judge";
      liveUtteranceRoleBadge.textContent = "评委正在提问";
    } else if (role === "TEAM_ANSWER") {
      liveUtteranceBox.classList.add("active-speaking");
      liveUtteranceRoleBadge.className = "role-badge ignored";
      liveUtteranceRoleBadge.textContent = "我方正在回答";
    } else {
      liveUtteranceBox.classList.add("active-speaking");
      liveUtteranceRoleBadge.className = "role-badge";
      liveUtteranceRoleBadge.textContent = "正在收音转写";
    }

    const hits = searchQaItems(clean);
    const topHit = hits && hits[0];
    liveUtteranceHint.textContent = topHit ? `实时匹配: ${topHit.code}` : "实时语音流";
    liveInterimEn.innerHTML = highlightNumbers(escapeHtml(clean));

    const instantZh = buildInstantLocalZhPreview(clean, role === "JUDGE_QUESTION" ? topHit : null);
    if (!liveInterimZh.dataset.streamingFor || !clean.startsWith(liveInterimZh.dataset.streamingFor)) {
      liveInterimZh.textContent = instantZh;
    }

    streamTranslateInterim(clean);
  }

  function streamTranslateInterim(rawText) {
    const apiKey = apiKeyInput.value.trim();
    if (!apiKey) return;
    const clean = String(rawText || "").trim();
    if (clean.split(/\s+/).length < 5 || clean === lastInterimTranslatedText) return;

    if (interimTranslateTimer) clearTimeout(interimTranslateTimer);
    interimTranslateTimer = setTimeout(async () => {
      if (clean === lastInterimTranslatedText) return;
      lastInterimTranslatedText = clean;
      if (interimTranslateAbort) interimTranslateAbort.abort();
      interimTranslateAbort = new AbortController();
      const cfg = getActiveProviderConfig();

      try {
        const res = await fetch(cfg.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: cfg.fastModel,
            ...cfg.extra,
            temperature: 0.0,
            max_tokens: 80,
            stream: true,
            messages: [
              {
                role: "system",
                content: "你是iGEM答辩同声传译员。将输入的英文语音片段实时直译为简明中文（只输出中文译文，不要解释）。术语：naringenin=柚皮素, S. epidermidis=表皮葡萄球菌, S. aureus=金葡菌, EcN=大肠杆菌Nissle 1917, DspB=生物膜解聚酶, LSp222=裂解酶, hemin/heme=血红素。"
              },
              { role: "user", content: clean }
            ]
          }),
          signal: interimTranslateAbort.signal
        });
        if (!res.ok || !res.body) return;
        const reader = res.body.getReader();
        const decoder = new TextDecoder("utf-8");
        let zhOut = "";
        let buf = "";
        liveInterimZh.dataset.streamingFor = clean.slice(0, 18);
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buf += decoder.decode(value, { stream: true });
          const lines = buf.split("\n");
          buf = lines.pop();
          for (const line of lines) {
            if (!line.startsWith("data: ")) continue;
            const dStr = line.slice(6).trim();
            if (dStr === "[DONE]") break;
            try {
              const j = JSON.parse(dStr);
              const delta = j.choices?.[0]?.delta?.content || "";
              if (delta) {
                zhOut += delta;
                if (liveOngoingUtterance && liveInterimZh) {
                  liveInterimZh.textContent = `同传: ${zhOut}`;
                }
              }
            } catch (e) {}
          }
        }
      } catch (e) {}
    }, 520);
  }

  async function streamTranslateSegment(segObj) {
    const apiKey = apiKeyInput.value.trim();
    if (!apiKey || !segObj || !segObj.text) return;
    if (/^[\u4e00-\u9fa5，。？！、；：“”‘’（）\s0-9a-zA-Z.-]+$/.test(segObj.text) && /[\u4e00-\u9fa5]{5,}/.test(segObj.text)) {
      segObj.zhTrans = segObj.text;
      renderTranscriptFeed();
      return;
    }

    const cfg = getActiveProviderConfig();
    const dialogueCtx = buildDialogueContextForAi(segObj.cleanQuestion || segObj.text);
    const userContent = dialogueCtx.shortTransContext
      ? `【${dialogueCtx.shortTransContext}】\n当前现场语音：${segObj.text}`
      : segObj.text;

    try {
      const res = await fetch(cfg.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: cfg.fastModel,
          ...cfg.extra,
          temperature: 0.0,
          max_tokens: 110,
          stream: true,
          messages: [
            {
              role: "system",
              content: "你是iGEM答辩实时同声传译员。将当前英文语音用1句自然、准确的中文同传译出；若含有it/that/this/they等代词，结合【上一题】在括号内补全指代。术语：naringenin=柚皮素, DspB=生物膜解聚酶, EcN=大肠杆菌Nissle 1917, S. epidermidis=表皮葡萄球菌, S. aureus=金葡菌, PelB=信号肽, supernatant=上清液。只输出中文译文。"
            },
            { role: "user", content: userContent }
          ]
        })
      });
      if (!res.ok || !res.body) return;
      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let transText = "";
      let buf = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });
        const lines = buf.split("\n");
        buf = lines.pop();
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const dataStr = line.slice(6).trim();
          if (dataStr === "[DONE]") break;
          try {
            const j = JSON.parse(dataStr);
            const delta = j.choices?.[0]?.delta?.content || "";
            if (delta) {
              transText += delta;
              segObj.zhTrans = transText;
              renderTranscriptFeed();
            }
          } catch (e) {}
        }
      }
    } catch (e) {}
  }

  function ensureQuestionInFeed(qText, topHit) {
    const clean = String(qText || "").trim();
    if (!clean) return;
    const norm = clean.toLowerCase();
    let existing = transcriptSegments.find(
      s => s.text.toLowerCase() === norm || (s.cleanQuestion && s.cleanQuestion.toLowerCase() === norm)
    );
    if (!existing) {
      existing = {
        text: clean,
        cleanQuestion: clean,
        role: "JUDGE_QUESTION",
        judgeScore: 6,
        teamScore: 0,
        matchedCode: topHit ? topHit.code : "",
        terms: extractMatchedTerms(clean),
        localZhPreview: buildInstantLocalZhPreview(clean, topHit),
        zhTrans: "",
        ts: Date.now()
      };
      transcriptSegments.push(existing);
      if (transcriptSegments.length > 60) transcriptSegments.shift();
    }
    renderTranscriptFeed();
  }

  function syncTranslationToFeed(qText, zhTrans) {
    const norm = String(qText || "").trim().toLowerCase();
    for (let i = transcriptSegments.length - 1; i >= 0; i--) {
      const s = transcriptSegments[i];
      if (s.text.toLowerCase() === norm || (s.cleanQuestion && s.cleanQuestion.toLowerCase() === norm)) {
        s.zhTrans = zhTrans;
        break;
      }
    }
    renderTranscriptFeed();
  }

  if (toggleTeamSpeechBtn) {
    toggleTeamSpeechBtn.addEventListener("click", () => {
      hideTeamSpeechInFeed = !hideTeamSpeechInFeed;
      toggleTeamSpeechBtn.textContent = hideTeamSpeechInFeed ? "仅看评委" : "全部语音";
      toggleTeamSpeechBtn.classList.toggle("btn-mode", hideTeamSpeechInFeed);
      toggleTeamSpeechBtn.classList.toggle("active", hideTeamSpeechInFeed);
      renderTranscriptFeed();
    });
  }

  if (clearTranscriptBtn) {
    clearTranscriptBtn.addEventListener("click", () => {
      transcriptSegments.length = 0;
      liveOngoingUtterance = "";
      updateLiveInterimBox("", "EMPTY");
      renderTranscriptFeed();
    });
  }

  function recordFinalizedSegment(rawSegText) {
    const clean = String(rawSegText || "").replace(/\s+/g, " ").trim();
    if (!clean || clean.length < 3) return;
    const analysis = classifyAndExtractQuestion(clean, false);
    const hits = searchQaItems(analysis.cleanQuestion || clean);
    const topHit = hits && hits[0];
    const segObj = {
      text: clean,
      cleanQuestion: analysis.cleanQuestion || clean,
      role: analysis.role,
      judgeScore: analysis.judgeScore,
      teamScore: analysis.teamScore,
      matchedCode: (analysis.role === "JUDGE_QUESTION" && topHit) ? topHit.code : "",
      terms: extractMatchedTerms(clean),
      localZhPreview: buildInstantLocalZhPreview(clean, analysis.role === "JUDGE_QUESTION" ? topHit : null),
      zhTrans: "",
      ts: Date.now()
    };
    transcriptSegments.push(segObj);
    if (transcriptSegments.length > 60) transcriptSegments.shift();
    renderTranscriptFeed();
    streamTranslateSegment(segObj);
    if (analysis.role === "JUDGE_QUESTION") {
      lastDetectedJudgeQ = segObj.cleanQuestion;
      emitEvent("questionDetected", segObj);
    }
  }

  function grabLastJudgeQuestion() {
    const candidates = [...transcriptSegments];
    if (liveOngoingUtterance && liveOngoingUtterance.trim().length >= 4) {
      const liveAnalysis = classifyAndExtractQuestion(liveOngoingUtterance, false);
      candidates.push({
        text: liveOngoingUtterance.trim(),
        cleanQuestion: liveAnalysis.cleanQuestion || liveOngoingUtterance.trim(),
        role: liveAnalysis.role,
        judgeScore: liveAnalysis.judgeScore,
        teamScore: liveAnalysis.teamScore,
        ts: Date.now()
      });
    }

    let chosenQ = "";

    for (let i = candidates.length - 1; i >= 0; i--) {
      if (candidates[i].role === "JUDGE_QUESTION") {
        chosenQ = candidates[i].cleanQuestion || candidates[i].text;
        if (
          i > 0 &&
          candidates[i - 1].role !== "TEAM_ANSWER" &&
          candidates[i].ts - candidates[i - 1].ts < 8000 &&
          candidates[i - 1].text.split(/\s+/).length <= 18 &&
          !chosenQ.toLowerCase().includes(candidates[i - 1].text.toLowerCase())
        ) {
          chosenQ = `${candidates[i - 1].text} ${chosenQ}`.trim();
        }
        break;
      }
    }

    if (!chosenQ) {
      for (let i = candidates.length - 1; i >= 0; i--) {
        if (candidates[i].role !== "TEAM_ANSWER" && candidates[i].text.split(/\s+/).length >= 3) {
          chosenQ = candidates[i].cleanQuestion || candidates[i].text;
          break;
        }
      }
    }

    if (!chosenQ) {
      if (lastDetectedJudgeQ) {
        chosenQ = lastDetectedJudgeQ;
      } else if (candidates.length > 0) {
        chosenQ = candidates[candidates.length - 1].text;
      } else {
        chosenQ = document.getElementById("queryInput").value.trim();
      }
    }

    if (!chosenQ) {
      document.getElementById("liveTransLine").innerHTML =
        `<span class="role-badge">提示</span>后台暂未录到语音，请先开启全场监听或直接在输入框输入问题`;
      return;
    }

    if (recognition && recognition._lastResultsLen) {
      processedResultCount = recognition._lastResultsLen;
    }
    liveOngoingUtterance = "";
    isQuestionLocked = true;
    updateMicUi();
    triggerAiStream(chosenQ);
  }

  grabLastQBtn.addEventListener("click", grabLastJudgeQuestion);

  function updateMicUi() {
    micBtn.classList.remove("listening", "paused");
    if (transLiveDot) transLiveDot.classList.remove("listening", "paused");
    if (!micSessionStarted || micPaused) {
      if (micSessionStarted && micPaused) {
        micBtn.classList.add("paused");
        if (transLiveDot) transLiveDot.classList.add("paused");
        micBtn.textContent = `已暂停收音 · 点击恢复 (${speechLang === "en-US" ? "EN" : "ZH"})`;
      } else {
        micBtn.textContent = `开启全场监听 (${speechLang === "en-US" ? "EN" : "ZH"})`;
      }
    } else {
      micBtn.classList.add("listening");
      if (transLiveDot) transLiveDot.classList.add("listening");
      if (voiceMode === "manual_grab") {
        micBtn.textContent = "后台持续转写中 (点击提取)";
      } else if (voiceMode === "auto_trigger") {
        micBtn.textContent = isQuestionLocked ? "监听中 · 已锁题防覆盖" : "全场监听中 · 待评委提问";
      } else {
        micBtn.textContent = "聆听中...";
      }
    }
    unlockNextBtn.style.display = (voiceMode === "auto_trigger" && isQuestionLocked) ? "inline-block" : "none";
    if (!liveOngoingUtterance) {
      updateLiveInterimBox("", "EMPTY");
    }
  }

  function unlockForNextQuestion() {
    isQuestionLocked = false;
    liveOngoingUtterance = "";
    if (recognition && recognition._lastResultsLen) {
      processedResultCount = recognition._lastResultsLen;
    }
    updateMicUi();
    document.getElementById("liveTransLine").innerHTML =
      `<span class="role-badge">已就绪</span>等待下一位评委提问（队员回答将自动跳过）`;
  }

  unlockNextBtn.addEventListener("click", unlockForNextQuestion);

  function syncVoiceModeUi() {
    const val = voiceModeSelect.value;
    if (val === "manual_grab") {
      voiceMode = "manual_grab";
      grabLastQBtn.style.display = "inline-block";
    } else if (val === "auto_detect") {
      voiceMode = "auto_trigger";
      grabLastQBtn.style.display = "inline-block";
    } else {
      voiceMode = "raw";
      grabLastQBtn.style.display = "none";
    }
    isQuestionLocked = false;
    updateMicUi();
  }

  voiceModeSelect.addEventListener("change", syncVoiceModeUi);
  syncVoiceModeUi();

  langBtn.addEventListener("click", () => {
    speechLang = speechLang === "en-US" ? "zh-CN" : "en-US";
    langBtn.textContent = speechLang === "en-US" ? "EN" : "ZH";
    updateMicUi();
    if (recognition && micSessionStarted) {
      recognition.lang = speechLang;
      try { recognition.stop(); } catch (e) {}
    }
  });

  function toggleMic() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("当前浏览器不支持 Web Speech API，请使用 Chrome 或 Edge 浏览器。");
      return;
    }

    if (micSessionStarted) {
      micPaused = !micPaused;
      if (!micPaused) {
        isQuestionLocked = false;
        if (recognition && recognition._lastResultsLen) {
          processedResultCount = recognition._lastResultsLen;
        }
      }
      updateMicUi();
      return;
    }

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia && !window._persistentMicStream) {
      navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
        window._persistentMicStream = stream;
      }).catch(() => {});
    }

    recognition = new SpeechRecognition();
    recognition.lang = speechLang;
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = () => {
      micSessionStarted = true;
      micPaused = false;
      processedResultCount = 0;
      updateMicUi();
    };

    let lastLoggedResultIdx = -1;

    recognition.onresult = (event) => {
      recognition._lastResultsLen = event.results.length;
      if (micPaused) {
        processedResultCount = event.results.length;
        lastLoggedResultIdx = event.results.length - 1;
        return;
      }

      for (let i = Math.max(0, lastLoggedResultIdx + 1); i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          recordFinalizedSegment(event.results[i][0].transcript);
          lastLoggedResultIdx = i;
        }
      }

      let currentTurnText = "";
      let turnFinal = false;
      const startIdx = Math.min(processedResultCount, event.results.length - 1);
      for (let i = Math.max(0, startIdx); i < event.results.length; i++) {
        currentTurnText += event.results[i][0].transcript + " ";
        if (event.results[i].isFinal) turnFinal = true;
      }
      const rawCombined = currentTurnText.trim();
      liveOngoingUtterance = rawCombined;
      if (!rawCombined) {
        updateLiveInterimBox("", "EMPTY");
        return;
      }

      const { role, cleanQuestion } = classifyAndExtractQuestion(rawCombined, isQuestionLocked);
      updateLiveInterimBox(rawCombined, role);

      if (voiceMode === "raw") {
        document.getElementById("queryInput").value = rawCombined;
        handleQueryChange(false);
        if (silenceFinalizeTimer) clearTimeout(silenceFinalizeTimer);
        silenceFinalizeTimer = setTimeout(() => {
          processedResultCount = event.results.length;
          triggerAiStream(rawCombined);
        }, 1150);
        return;
      }

      if (voiceMode === "manual_grab") {
        const snippet = rawCombined.length > 56 ? "..." + rawCombined.slice(-56) : rawCombined;
        const roleTag = role === "JUDGE_QUESTION"
          ? `<span class="role-badge">检测到问句 · 按 Alt+Q 提取</span>`
          : (role === "TEAM_ANSWER"
              ? `<span class="role-badge ignored">静默转写 · 我方发言</span>`
              : `<span class="role-badge">静默持续转写中</span>`);
        const cachedHint = lastDetectedJudgeQ
          ? ` ｜ 最近问句: <strong>${escapeHtml(lastDetectedJudgeQ.slice(0, 42))}${lastDetectedJudgeQ.length > 42 ? "..." : ""}</strong>`
          : "";
        document.getElementById("liveTransLine").innerHTML =
          `${roleTag}<span style="color:var(--text-secondary)">"${escapeHtml(snippet)}"</span>${cachedHint}`;
        if (turnFinal) {
          processedResultCount = event.results.length;
          liveOngoingUtterance = "";
          updateLiveInterimBox("", "EMPTY");
        }
        return;
      }

      if (role === "TEAM_ANSWER") {
        const snippet = rawCombined.length > 48 ? rawCombined.slice(0, 48) + "..." : rawCombined;
        const backHint = activeHistoryIdx > 0 ? "（若误触发可按 Alt+Z 返回上一回答）" : "";
        document.getElementById("liveTransLine").innerHTML =
          `<span class="role-badge ignored">已过滤我方作答</span><span style="color:var(--text-muted)">"${escapeHtml(snippet)}" ${backHint}</span>`;
        if (turnFinal) {
          processedResultCount = event.results.length;
          liveOngoingUtterance = "";
          updateLiveInterimBox("", "EMPTY");
        }
        return;
      }

      if (isQuestionLocked && role !== "JUDGE_QUESTION") {
        const snippet = rawCombined.length > 48 ? rawCombined.slice(0, 48) + "..." : rawCombined;
        document.getElementById("liveTransLine").innerHTML =
          `<span class="role-badge locked">锁题保护中</span><span style="color:var(--text-muted)">忽略非问句语音: "${escapeHtml(snippet)}"（Alt+N 下一题 / Alt+Z 上一回答）</span>`;
        if (turnFinal) {
          processedResultCount = event.results.length;
          liveOngoingUtterance = "";
          updateLiveInterimBox("", "EMPTY");
        }
        return;
      }

      const activeQ = cleanQuestion || rawCombined;
      document.getElementById("queryInput").value = activeQ;
      const hits = searchQaItems(activeQ);
      currentQaHits = hits;
      renderHitTabs(hits);
      updateTransLine(
        activeQ,
        hits[0],
        `<span class="role-badge">识别到评委提问中...</span><strong>${escapeHtml(activeQ)}</strong>`
      );

      if (silenceFinalizeTimer) clearTimeout(silenceFinalizeTimer);
      const waitMs = (CFG.speech && CFG.speech.silenceFinalizeMs) || 1150;
      if (activeQ.length >= 8) {
        silenceFinalizeTimer = setTimeout(() => {
          const finalCheck = classifyAndExtractQuestion(activeQ, isQuestionLocked);
          if (finalCheck.role === "TEAM_ANSWER") return;
          const lockedQ = finalCheck.cleanQuestion || activeQ;
          isQuestionLocked = true;
          liveOngoingUtterance = "";
          processedResultCount = event.results.length;
          updateMicUi();
          document.getElementById("queryInput").value = lockedQ;
          triggerAiStream(lockedQ);
        }, waitMs);
      }
    };

    recognition.onerror = (e) => {
      if (e.error === "not-allowed" || e.error === "service-not-allowed") {
        micSessionStarted = false;
        micPaused = true;
        updateMicUi();
      }
    };

    recognition.onend = () => {
      if (micSessionStarted) {
        processedResultCount = 0;
        lastLoggedResultIdx = -1;
        try { recognition.start(); } catch (e) {}
      }
    };

    try {
      recognition.start();
    } catch (e) {}
  }

  micBtn.addEventListener("click", toggleMic);

  // ============================================================================
  // Visual Reference Database Manager (#dbModal)
  // ============================================================================
  const dbModal = document.getElementById("dbModal");
  const openDbBtn = document.getElementById("openDbBtn");
  const closeDbBtn = document.getElementById("closeDbBtn");
  const dbSidebarList = document.getElementById("dbSidebarList");
  const dbNewItemBtn = document.getElementById("dbNewItemBtn");
  const dbSaveItemBtn = document.getElementById("dbSaveItemBtn");
  const dbDeleteItemBtn = document.getElementById("dbDeleteItemBtn");
  const dbExportJsonBtn = document.getElementById("dbExportJsonBtn");
  const dbImportJsonInput = document.getElementById("dbImportJsonInput");
  const dbStatusMsg = document.getElementById("dbStatusMsg");

  let editingQaId = QA_ITEMS[0] ? QA_ITEMS[0].id : "";

  function renderDbSidebar() {
    if (!dbSidebarList) return;
    dbSidebarList.innerHTML = "";
    QA_ITEMS.forEach(item => {
      const btn = document.createElement("button");
      btn.className = "db-item-btn" + (item.id === editingQaId ? " active" : "");
      btn.textContent = `[${item.code}] ${item.q_zh}`;
      btn.onclick = () => selectDbItemForEdit(item.id);
      dbSidebarList.appendChild(btn);
    });
  }

  function selectDbItemForEdit(id) {
    editingQaId = id;
    renderDbSidebar();
    const item = QA_ITEMS.find(x => x.id === id);
    if (!item) return;
    document.getElementById("dbCodeInput").value = item.code || "";
    document.getElementById("dbSlideInput").value = item.slide || "S1";
    document.getElementById("dbQZhInput").value = item.q_zh || "";
    document.getElementById("dbQEnInput").value = item.q_en || "";
    document.getElementById("dbKeywordsInput").value = item.keywords || "";
    document.getElementById("dbPointsEnInput").value = (item.points_en || []).join("\n");
    document.getElementById("dbPointsZhInput").value = (item.points_zh || []).join("\n");
    document.getElementById("dbNotesZhInput").value = (item.notes_zh || item.notes || []).join("\n");
    document.getElementById("dbExtraZhInput").value = item.extra_zh || "";
    if (dbStatusMsg) dbStatusMsg.textContent = `当前编辑: ${item.code} (${item.id})`;
  }

  function createNewDbItem() {
    const newIdx = QA_ITEMS.length + 1;
    const newCode = `C${newIdx}`;
    const newItem = {
      id: `custom-${Date.now()}`,
      code: newCode,
      slide: "B1",
      slides: ["B1"],
      slide_page: 8,
      slide_title: "Custom Q&A",
      slide_img: "",
      q_zh: "新增自定义问题（请修改）",
      q_en: "New custom question (please edit)?",
      a_zh: "",
      a_en: "",
      extra_zh: "",
      followups: [],
      keywords: "custom keyword",
      points_en: [
        "1. [Direct Conclusion] ...",
        "2. [Experimental Evidence] ...",
        "3. [Boundary & Next Step] ..."
      ],
      points_zh: [
        "1. 【核心结论】...",
        "2. 【实验证据与数据】...",
        "3. 【边界与下一步】..."
      ],
      notes: [
        "1. 核心结论 → 关键机制",
        "2. 实验数据 → 关键数值",
        "3. 适用边界 → 下一步验证"
      ],
      notes_zh: [
        "1. 核心结论 → 关键机制",
        "2. 实验数据 → 关键数值",
        "3. 适用边界 → 下一步验证"
      ]
    };
    QA_ITEMS.unshift(newItem);
    rebuildSearchIndex();
    selectDbItemForEdit(newItem.id);
    handleQueryChange(false);
  }

  async function saveCurrentDbItem() {
    const item = QA_ITEMS.find(x => x.id === editingQaId);
    if (!item) return;

    item.code = document.getElementById("dbCodeInput").value.trim() || item.code;
    item.slide = document.getElementById("dbSlideInput").value.trim() || "S1";
    item.slides = [item.slide];
    item.q_zh = document.getElementById("dbQZhInput").value.trim();
    item.q_en = document.getElementById("dbQEnInput").value.trim();
    item.keywords = document.getElementById("dbKeywordsInput").value.trim();
    item.points_en = document.getElementById("dbPointsEnInput").value.split("\n").map(s => s.trim()).filter(Boolean);
    item.points_zh = document.getElementById("dbPointsZhInput").value.split("\n").map(s => s.trim()).filter(Boolean);
    item.notes_zh = document.getElementById("dbNotesZhInput").value.split("\n").map(s => s.trim()).filter(Boolean);
    item.notes = item.notes_zh.slice();
    item.extra_zh = document.getElementById("dbExtraZhInput").value.trim();
    item.a_en = item.points_en.map(p => p.replace(/^\d+\.\s*(?:\[[^\]]+\]\s*)?/, "")).join(" ");
    item.a_zh = item.points_zh.map(p => p.replace(/^\d+\.\s*(?:【[^】]+】\s*)?/, "")).join("");

    await upsertQaItem(item, true);
    renderDbSidebar();
    renderActiveQa(item, false);
  }

  async function deleteCurrentDbItem() {
    if (!editingQaId) return;
    await removeQaItem(editingQaId, true);
    editingQaId = QA_ITEMS[0] ? QA_ITEMS[0].id : "";
    renderDbSidebar();
    if (editingQaId) selectDbItemForEdit(editingQaId);
    handleQueryChange(false);
  }

  if (openDbBtn) {
    openDbBtn.addEventListener("click", () => {
      dbModal.classList.add("visible");
      if (!editingQaId && QA_ITEMS[0]) editingQaId = QA_ITEMS[0].id;
      renderDbSidebar();
      if (editingQaId) selectDbItemForEdit(editingQaId);
    });
  }
  if (closeDbBtn) {
    closeDbBtn.addEventListener("click", () => dbModal.classList.remove("visible"));
  }
  if (dbNewItemBtn) dbNewItemBtn.addEventListener("click", createNewDbItem);
  if (dbSaveItemBtn) dbSaveItemBtn.addEventListener("click", saveCurrentDbItem);
  if (dbDeleteItemBtn) dbDeleteItemBtn.addEventListener("click", deleteCurrentDbItem);
  if (dbExportJsonBtn) {
    dbExportJsonBtn.addEventListener("click", () => {
      const blob = new Blob([JSON.stringify(QA_ITEMS, null, 2)], { type: "application/json;charset=utf-8" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "qa_items.json";
      a.click();
    });
  }
  if (dbImportJsonInput) {
    dbImportJsonInput.addEventListener("change", (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const parsed = JSON.parse(reader.result);
          const list = Array.isArray(parsed) ? parsed : (parsed.qa_items || []);
          if (list.length > 0) {
            QA_ITEMS = list;
            rebuildSearchIndex();
            localStorage.setItem("IGEM_CUSTOM_QA_ITEMS", JSON.stringify(QA_ITEMS));
            if (location.protocol.startsWith("http")) {
              await fetch("/api/qa", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(QA_ITEMS)
              }).catch(() => {});
            }
            editingQaId = QA_ITEMS[0].id;
            renderDbSidebar();
            selectDbItemForEdit(editingQaId);
            handleQueryChange(false);
            if (dbStatusMsg) dbStatusMsg.textContent = `成功导入 ${QA_ITEMS.length} 条问答记录`;
          }
        } catch (err) {
          alert("JSON 格式错误: " + err.message);
        }
      };
      reader.readAsText(file);
    });
  }

  // ============================================================================
  // Public Database & API Methods (window.DefenseAssistantAPI)
  // ============================================================================
  async function upsertQaItem(item, persistToServer = true) {
    const targetId = item.id || item.code;
    const idx = QA_ITEMS.findIndex(x => x.id === targetId || x.code === targetId);
    if (idx >= 0) {
      QA_ITEMS[idx] = Object.assign({}, QA_ITEMS[idx], item);
    } else {
      QA_ITEMS.push(item);
    }
    rebuildSearchIndex();
    localStorage.setItem("IGEM_CUSTOM_QA_ITEMS", JSON.stringify(QA_ITEMS));
    emitEvent("databaseUpdated", { qa_items: QA_ITEMS });

    if (persistToServer && location.protocol.startsWith("http")) {
      try {
        const res = await fetch("/api/qa", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(item)
        });
        if (res.ok && dbStatusMsg) {
          dbStatusMsg.textContent = `已同步保存至 data/qa_items.json 与 data/qa_items.md (${QA_ITEMS.length} 题)`;
          return true;
        }
      } catch (e) {}
    }
    if (dbStatusMsg) {
      dbStatusMsg.textContent = "已保存至浏览器本地缓存（也可点击「导出 JSON」替换 data/qa_items.json）";
    }
    return true;
  }

  async function removeQaItem(idOrCode, persistToServer = true) {
    QA_ITEMS = QA_ITEMS.filter(x => x.id !== idOrCode && x.code !== idOrCode);
    rebuildSearchIndex();
    localStorage.setItem("IGEM_CUSTOM_QA_ITEMS", JSON.stringify(QA_ITEMS));
    emitEvent("databaseUpdated", { qa_items: QA_ITEMS });

    if (persistToServer && location.protocol.startsWith("http")) {
      try {
        await fetch(`/api/qa/${encodeURIComponent(idOrCode)}`, { method: "DELETE" });
      } catch (e) {}
    }
    return true;
  }

  async function loadDatabase(kbOrUrl) {
    let data = kbOrUrl;
    if (typeof kbOrUrl === "string") {
      const res = await fetch(kbOrUrl);
      data = await res.json();
    }
    if (Array.isArray(data)) {
      QA_ITEMS = data;
    } else if (data && typeof data === "object") {
      if (Array.isArray(data.qa_items)) QA_ITEMS = data.qa_items;
      if (Array.isArray(data.docs)) DOCS = data.docs;
      if (Array.isArray(data.glossary)) GLOSSARY = data.glossary;
      if (Array.isArray(data.slides)) SLIDES = data.slides;
      if (data.system_prompt) KB.system_prompt = data.system_prompt;
    }
    rebuildSearchIndex();
    handleQueryChange(false);
    emitEvent("databaseUpdated", { qa_items: QA_ITEMS, docs: DOCS });
    return { qaCount: QA_ITEMS.length, docCount: DOCS.length };
  }

  window.DefenseAssistantAPI = {
    version: "2.0.0",
    ask: (question) => triggerAiStream(question),
    searchLocal: (query) => searchQaItems(query),
    classifySpeech: (utterance, strictLockCheck = false) => classifyAndExtractQuestion(utterance, strictLockCheck),
    getDatabase: () => ({ qa_items: QA_ITEMS, docs: DOCS, glossary: GLOSSARY, slides: SLIDES }),
    loadDatabase,
    upsertQaItem,
    removeQaItem,
    exportQaJson: () => JSON.stringify(QA_ITEMS, null, 2),
    registerProvider: (id, providerConfig) => {
      PROVIDERS[id] = providerConfig;
      rebuildProviderSelectOptions();
    },
    getContext: () => ({
      questionHistory: questionHistory.slice(),
      transcriptSegments: transcriptSegments.slice()
    }),
    clearContext: clearConversationContext,
    on: (eventName, callback) => {
      if (eventListeners[eventName]) eventListeners[eventName].push(callback);
    }
  };

  // Auto-fetch live database from /api/kb or data/qa_items.json when served over HTTP(S)
  if (location.protocol.startsWith("http")) {
    fetch("/api/kb")
      .then(r => (r.ok ? r.json() : fetch("data/qa_items.json").then(r2 => r2.json())))
      .then(data => {
        if (data) loadDatabase(data);
      })
      .catch(() => {});
  }

  // Keyboard & Input bindings
  const queryInput = document.getElementById("queryInput");
  queryInput.addEventListener("input", () => handleQueryChange(true));
  queryInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      isQuestionLocked = true;
      updateMicUi();
      triggerAiStream();
    } else if (e.key === "Escape") {
      queryInput.value = "";
      isQuestionLocked = false;
      updateMicUi();
      document.getElementById("aiPointsBlock").classList.remove("visible");
      document.getElementById("aiNotesBlock").classList.remove("visible");
      handleQueryChange(true);
    }
  });

  document.getElementById("askBtn").addEventListener("click", () => {
    isQuestionLocked = true;
    updateMicUi();
    triggerAiStream();
  });

  document.getElementById("copyBtn").addEventListener("click", () => {
    const aiBlockVisible = document.getElementById("aiPointsBlock").classList.contains("visible");
    const textToCopy = aiBlockVisible
      ? document.getElementById("aiPointsEnContainer").innerText
      : (currentActiveQa ? currentActiveQa.a_en : "");
    if (!textToCopy) return;
    navigator.clipboard.writeText(textToCopy);
    const btn = document.getElementById("copyBtn");
    btn.textContent = "已复制";
    setTimeout(() => { btn.textContent = "复制英文"; }, 1200);
  });

  window.addEventListener("keydown", (e) => {
    const activeTag = document.activeElement ? document.activeElement.tagName : "";
    const inInput = activeTag === "INPUT" || activeTag === "TEXTAREA" || activeTag === "SELECT";
    if (e.key === "/" && !inInput) {
      e.preventDefault();
      queryInput.focus();
      queryInput.select();
    } else if (e.altKey && e.key.toLowerCase() === "s") {
      e.preventDefault();
      toggleMic();
    } else if (e.altKey && e.key.toLowerCase() === "q") {
      e.preventDefault();
      grabLastJudgeQuestion();
    } else if (e.altKey && e.key.toLowerCase() === "z") {
      e.preventDefault();
      goBackToPreviousAnswer();
    } else if (e.altKey && e.key.toLowerCase() === "n") {
      e.preventDefault();
      unlockForNextQuestion();
    } else if (e.altKey && e.key.toLowerCase() === "c") {
      e.preventDefault();
      clearConversationContext();
    }
  });

  handleQueryChange(false);
})();
