#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Database Synchronization & Build Tool for iGEM Real-Time Defense Assistant
===========================================================================
Supports editing the Reference Q&A Database in either:
  1. Markdown (`data/qa_items.md`) — easiest for teammates to read & edit in Typora / Obsidian / VS Code
  2. JSON (`data/qa_items.json`, `data/docs.json`, `data/glossary.json`, `data/slides.json`)

Usage:
  python3 scripts/sync_db.py            # Auto-detects if qa_items.md or qa_items.json is newer, syncs both, and builds data/knowledge_base.js
  python3 scripts/sync_db.py --from-md  # Parses data/qa_items.md -> updates data/qa_items.json & data/knowledge_base.js
  python3 scripts/sync_db.py --to-md    # Exports data/qa_items.json -> updates data/qa_items.md & data/knowledge_base.js
"""

import argparse
import datetime
import json
import os
import re
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT_DIR / "data"

QA_JSON_PATH = DATA_DIR / "qa_items.json"
QA_MD_PATH = DATA_DIR / "qa_items.md"
DOCS_JSON_PATH = DATA_DIR / "docs.json"
GLOSSARY_JSON_PATH = DATA_DIR / "glossary.json"
SLIDES_JSON_PATH = DATA_DIR / "slides.json"
PROMPT_MD_PATH = DATA_DIR / "system_prompt.md"
KB_JS_PATH = DATA_DIR / "knowledge_base.js"


def load_json(path: Path, default):
    if not path.exists():
        return default
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def save_json(path: Path, data):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def export_qa_to_markdown(qa_items: list) -> str:
    lines = [
        "# iGEM 实时答辩助手 · 参考回答数据库 (可直接编辑)",
        "",
        "> **编辑说明**：",
        "> 1. 每一道题以 `## [题号] 中文问题` 开头（例如 `## [S1.1] 图里的 AIP、heme 和柚皮素分别是谁给谁的信号？`）。",
        "> 2. 可自由修改任意题目的中英文分点（`### 英文分点 (1·2·3)` / `### 中文分点 (1·2·3)`）和右侧听力速记笔记（`### 答题思路速记 (中文关键词链)`），也可直接复制一段模板在末尾新增题目。",
        "> 3. 修改保存后，运行 `python3 scripts/sync_db.py --from-md`（或重启 `python3 server.py`）即可自动同步至网页。",
        "",
    ]

    for item in qa_items:
        code = item.get("code", item.get("id", "Q")).strip()
        q_zh = item.get("q_zh", "").strip()
        q_en = item.get("q_en", "").strip()
        item_id = item.get("id", code.lower().replace(".", "-"))
        slide = item.get("slide", "S1")
        slide_page = item.get("slide_page", 1)
        keywords = item.get("keywords", "")
        extra_zh = item.get("extra_zh", "").strip()

        lines.append(f"## [{code}] {q_zh}")
        lines.append(f"- **ID**: `{item_id}`")
        lines.append(f"- **Slide**: `{slide}` (Page {slide_page})")
        lines.append(f"- **English Question**: {q_en}")
        lines.append(f"- **Keywords**: {keywords}")
        lines.append("")

        lines.append("### 英文分点 (1·2·3)")
        for idx, pt in enumerate(item.get("points_en") or [], 1):
            clean_pt = re.sub(r"^\d+\.\s*", "", str(pt).strip())
            lines.append(f"{idx}. {clean_pt}")
        lines.append("")

        lines.append("### 中文分点 (1·2·3)")
        for idx, pt in enumerate(item.get("points_zh") or [], 1):
            clean_pt = re.sub(r"^\d+\.\s*", "", str(pt).strip())
            lines.append(f"{idx}. {clean_pt}")
        lines.append("")

        lines.append("### 答题思路速记 (中文关键词链)")
        notes_zh = item.get("notes_zh") or item.get("notes") or []
        for idx, nt in enumerate(notes_zh, 1):
            clean_nt = re.sub(r"^\d+\.\s*", "", str(nt).strip())
            lines.append(f"{idx}. {clean_nt}")
        lines.append("")

        if extra_zh:
            lines.append("### 补充计算与延伸说明")
            lines.append(extra_zh)
            lines.append("")

        lines.append("---")
        lines.append("")

    return "\n".join(lines)


def parse_qa_from_markdown(md_text: str, existing_items: list) -> list:
    existing_by_code = {str(x.get("code", "")).strip(): x for x in existing_items}
    existing_by_id = {str(x.get("id", "")).strip(): x for x in existing_items}

    blocks = re.split(r"(?m)^## \[([^\]]+)\]\s*(.+)$", md_text)
    if len(blocks) < 4:
        return existing_items

    parsed_items = []
    # blocks[0] is header; then groups of (code, q_zh, body)
    for i in range(1, len(blocks), 3):
        code = blocks[i].strip()
        q_zh = blocks[i + 1].strip()
        body = blocks[i + 2]

        base = dict(existing_by_code.get(code) or {})

        id_match = re.search(r"-\s*\*\*ID\*\*:\s*`?([^`\n]+)`?", body)
        item_id = id_match.group(1).strip() if id_match else base.get("id", code.lower().replace(".", "-"))
        if not base and item_id in existing_by_id:
            base = dict(existing_by_id[item_id])

        slide_match = re.search(r"-\s*\*\*Slide\*\*:\s*`?([^`\s(]+)`?(?:\s*\(Page\s*(\d+)\))?", body)
        slide = slide_match.group(1).strip() if slide_match else base.get("slide", "S1")
        slide_page = int(slide_match.group(2)) if (slide_match and slide_match.group(2)) else base.get("slide_page", 1)

        q_en_match = re.search(r"-\s*\*\*English Question\*\*:\s*(.+)", body)
        q_en = q_en_match.group(1).strip() if q_en_match else base.get("q_en", "")

        kw_match = re.search(r"-\s*\*\*Keywords\*\*:\s*(.+)", body)
        keywords = kw_match.group(1).strip() if kw_match else base.get("keywords", "")

        def extract_numbered_section(sec_title: str) -> list:
            pattern = rf"### {re.escape(sec_title)}\s*\n([\s\S]*?)(?=\n### |\n---|\Z)"
            m = re.search(pattern, body)
            if not m:
                return []
            sec_lines = []
            for line in m.group(1).strip().splitlines():
                line = line.strip()
                if not line:
                    continue
                clean = re.sub(r"^\d+\.\s*", "", line)
                sec_lines.append(f"{len(sec_lines) + 1}. {clean}")
            return sec_lines

        points_en = extract_numbered_section("英文分点 (1·2·3)") or base.get("points_en", [])
        points_zh = extract_numbered_section("中文分点 (1·2·3)") or base.get("points_zh", [])
        notes_zh = extract_numbered_section("答题思路速记 (中文关键词链)") or base.get("notes_zh", [])

        extra_match = re.search(r"### 补充计算与延伸说明\s*\n([\s\S]*?)(?=\n### |\n---|\Z)", body)
        extra_zh = extra_match.group(1).strip() if extra_match else base.get("extra_zh", "")

        a_en = " ".join(re.sub(r"^\d+\.\s*(?:\[[^\]]+\]\s*)?", "", p) for p in points_en).strip() or base.get("a_en", "")
        a_zh = "".join(re.sub(r"^\d+\.\s*(?:【[^】]+】\s*)?", "", p) for p in points_zh).strip() or base.get("a_zh", "")

        item_obj = {
            "id": item_id,
            "code": code,
            "slide": slide,
            "slides": base.get("slides", [slide]),
            "slide_page": slide_page,
            "slide_title": base.get("slide_title", slide),
            "slide_img": base.get("slide_img", ""),
            "q_zh": q_zh,
            "q_en": q_en,
            "a_zh": a_zh,
            "a_en": a_en,
            "extra_zh": extra_zh,
            "followups": base.get("followups", []),
            "keywords": keywords,
            "points_en": points_en,
            "points_zh": points_zh,
            "notes": base.get("notes", notes_zh),
            "notes_zh": notes_zh,
        }
        parsed_items.append(item_obj)

    return parsed_items


def build_knowledge_base_js():
    qa_items = load_json(QA_JSON_PATH, [])
    docs = load_json(DOCS_JSON_PATH, [])
    glossary = load_json(GLOSSARY_JSON_PATH, [])
    slides = load_json(SLIDES_JSON_PATH, [])
    system_prompt = PROMPT_MD_PATH.read_text(encoding="utf-8").strip() if PROMPT_MD_PATH.exists() else ""

    kb = {
        "generated_at": datetime.date.today().isoformat(),
        "system_prompt": system_prompt,
        "slides": slides,
        "qa_items": qa_items,
        "docs": docs,
        "glossary": glossary,
    }
    js_content = (
        "// Auto-generated by scripts/sync_db.py — Do not edit this bundle directly.\n"
        "// Edit data/qa_items.md or data/qa_items.json instead.\n"
        "window.IGEM_KB = " + json.dumps(kb, ensure_ascii=False, indent=2) + ";\n"
    )
    KB_JS_PATH.write_text(js_content, encoding="utf-8")
    return len(qa_items), len(docs), len(glossary), len(slides)


def main():
    parser = argparse.ArgumentParser(description="Sync iGEM Defense Assistant Reference Database")
    group = parser.add_mutually_exclusive_group()
    group.add_argument("--from-md", action="store_true", help="Parse data/qa_items.md and update data/qa_items.json")
    group.add_argument("--to-md", action="store_true", help="Export data/qa_items.json to data/qa_items.md")
    args = parser.parse_args()

    qa_items = load_json(QA_JSON_PATH, [])

    if args.to_md or not QA_MD_PATH.exists():
        md_text = export_qa_to_markdown(qa_items)
        QA_MD_PATH.write_text(md_text, encoding="utf-8")
        print(f"[sync_db] Exported {len(qa_items)} QA items -> {QA_MD_PATH.relative_to(ROOT_DIR)}")
    elif args.from_md or (QA_MD_PATH.exists() and QA_MD_PATH.stat().st_mtime > QA_JSON_PATH.stat().st_mtime):
        md_text = QA_MD_PATH.read_text(encoding="utf-8")
        updated_items = parse_qa_from_markdown(md_text, qa_items)
        save_json(QA_JSON_PATH, updated_items)
        print(f"[sync_db] Parsed {len(updated_items)} QA items from {QA_MD_PATH.relative_to(ROOT_DIR)} -> {QA_JSON_PATH.relative_to(ROOT_DIR)}")
    else:
        # Ensure markdown stays in sync with JSON
        md_text = export_qa_to_markdown(qa_items)
        QA_MD_PATH.write_text(md_text, encoding="utf-8")

    n_qa, n_docs, n_gloss, n_slides = build_knowledge_base_js()
    print(f"[sync_db] Built {KB_JS_PATH.relative_to(ROOT_DIR)} ({n_qa} Q&As, {n_docs} docs, {n_gloss} glossary terms, {n_slides} slides)")


if __name__ == "__main__":
    main()
