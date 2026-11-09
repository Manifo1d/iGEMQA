/**
 * iGEM Real-Time Defense Assistant — Global Configuration & Provider Interface
 * ============================================================================
 * Edit this file to customize:
 *   1. LLM API Providers (`providers` & `defaultProvider`)
 *   2. Speech Recognition & Judge-Question Detection parameters (`speech`)
 *   3. Domain Synonym Expansion Table (`synonymGroups`) for local millisecond search
 *   4. Optional System Prompt override (`systemPromptOverride`)
 */
window.DefenseConfig = {
  // Default selected LLM provider key in the top bar
  defaultProvider: "deepseek_flash",

  // OpenAI-compatible Chat Completion Providers
  providers: {
    deepseek_flash: {
      name: "DeepSeek V4.1 Flash",
      keyGroup: "DEEPSEEK",
      url: "https://api.deepseek.com/chat/completions",
      model: "deepseek-flash",
      fastModel: "deepseek-flash",
      extra: { thinking: { type: "disabled" } }
    },
    deepseek_pro: {
      name: "DeepSeek V4 Pro",
      keyGroup: "DEEPSEEK",
      url: "https://api.deepseek.com/chat/completions",
      model: "deepseek-v4-pro",
      fastModel: "deepseek-flash",
      extra: { thinking: { type: "disabled" } }
    },
    siliconflow_qwen72b: {
      name: "SiliconFlow Qwen2.5-72B",
      keyGroup: "SILICONFLOW",
      url: "https://api.siliconflow.cn/v1/chat/completions",
      model: "Qwen/Qwen2.5-72B-Instruct",
      fastModel: "Qwen/Qwen2.5-7B-Instruct",
      extra: {}
    },
    siliconflow_qwen7b: {
      name: "SiliconFlow Qwen2.5-7B",
      keyGroup: "SILICONFLOW",
      url: "https://api.siliconflow.cn/v1/chat/completions",
      model: "Qwen/Qwen2.5-7B-Instruct",
      fastModel: "Qwen/Qwen2.5-7B-Instruct",
      extra: {}
    },
    siliconflow_dsv3: {
      name: "SiliconFlow DeepSeek-V3",
      keyGroup: "SILICONFLOW",
      url: "https://api.siliconflow.cn/v1/chat/completions",
      model: "deepseek-ai/DeepSeek-V3",
      fastModel: "Qwen/Qwen2.5-7B-Instruct",
      extra: {}
    },
    aliyun_turbo: {
      name: "Aliyun qwen-turbo",
      keyGroup: "ALIYUN",
      url: "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions",
      model: "qwen-turbo-latest",
      fastModel: "qwen-turbo-latest",
      extra: { enable_thinking: false }
    },
    zhipu_flash: {
      name: "Zhipu glm-4-flash",
      keyGroup: "ZHIPU",
      url: "https://open.bigmodel.cn/api/paas/v4/chat/completions",
      model: "glm-4-flash",
      fastModel: "glm-4-flash",
      extra: {}
    },
    groq_llama70b: {
      name: "Groq Llama-3.3-70B",
      keyGroup: "GROQ",
      url: "https://api.groq.com/openai/v1/chat/completions",
      model: "llama-3.3-70b-versatile",
      fastModel: "llama-3.1-8b-instant",
      extra: {}
    },
    gemini_flash: {
      name: "Gemini 2.5 Flash",
      keyGroup: "GEMINI",
      url: "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
      model: "gemini-2.5-flash",
      fastModel: "gemini-2.5-flash",
      extra: {}
    },
    custom: {
      name: "Custom Endpoint",
      keyGroup: "CUSTOM",
      url: "https://ark.cn-beijing.volces.com/api/v3/chat/completions",
      model: "gpt-4o-mini",
      fastModel: "gpt-4o-mini",
      extra: {}
    }
  },

  // Speech recognition & multi-turn context parameters
  speech: {
    lang: "en-US",
    defaultMode: "auto_detect", // "auto_detect" | "manual_grab"
    silenceFinalizeMs: 1150,    // Wait time (ms) before locking a detected Judge Question
    contextWindowMs: 150000,    // Keep recent spoken segments within 2.5 minutes for pronoun resolution
    maxHistoryTurns: 2          // Number of previous Q&A turns injected into follow-up LLM prompt
  },

  // Domain synonym expansion groups for local retrieval
  synonymGroups: [
    ["naringenin", "柚皮素", "nrsr", "nr", "fder", "pfdear", "flavanone", "黄酮"],
    ["p-coumaric", "coumaric", "对香豆酸", "香豆酸", "precursor", "前体", "4cl", "at4cl", "chs", "chi"],
    ["supernatant", "broth", "yield", "concentration", "amount", "titer", "400", "7.32", "14.65", "53.8", "产量", "上清", "上清液", "发酵液", "浓度", "峰面积"],
    ["two bands", "doublet", "bands", "hegf", "pelb", "11.10", "8.89", "8-15", "cleavage", "precursor", "两个条带", "两条带", "双条带", "条带", "信号肽", "切除", "前体"],
    ["negative", "below zero", "minus", "-2.29", "-1.94", "background", "subtract", "负荧光", "负数", "低于零", "扣背景", "背景"],
    ["zero line", "flat", "clipped", "1.7", "1.7h", "2.3h", "transient", "hemin", "heme", "hmsr", "hssrs", "phrtba", "贴着零", "零线", "短暂", "回落", "血红素", "峰值"],
    ["biofilm", "84%", "crystal violet", "od590", "dspb", "dispersin", "pnag", "commercial", "生物膜", "破膜", "结晶紫", "商业酶", "分母"],
    ["lsp222", "61%", "25%", "64%", "selectivity", "specificity", "turbidity", "lysis", "lysin", "10.94", "裂解酶", "选择性", "偏好", "杀伤", "表皮葡萄球菌", "粗提物", "纯化"],
    ["three hosts", "three strains", "chassis", "bl21", "ecn", "nissle", "epidermidis", "why three", "三种宿主", "三株菌", "三种菌", "选择理由", "职责", "分工", "底盘"],
    ["co-culture", "coculture", "monoculture", "1:1", "microscopy", "fold change", "crosstalk", "共培养", "单培养", "混培", "显微图", "倍数", "1比1"],
    ["first", "precedent", "novelty", "xiu", "2017", "riboswitch", "首次", "先例", "第一", "核糖开关"],
    ["reusability", "collection", "ibd", "gut", "inflammation", "thssr", "norr", "il-10", "tff3", "可复用", "复用", "肠道", "情景", "另一支队伍"],
    ["genetic circuit", "four circuits", "p2p3", "agrc", "agra", "aip", "基因回路", "四条回路", "完整回路"],
    ["leakage", "basal", "leak", "0 um", "uninduced", "toxicity", "rbs", "泄漏", "基底", "未诱导", "本底"],
    ["hydrogel", "40 um", "40 µm", "diffusion", "physical separation", "membrane", "水凝胶", "敷料", "穿膜", "40微米", "隔开"],
    ["escape", "biosafety", "safety", "d-alanine", "auxotrophy", "alr", "dadx", "open wound", "逃逸", "生物安全", "d-丙氨酸", "营养缺陷", "安全性"],
    ["sanger", "sequencing", "alignment", "965", "971", "mismatch", "gap", "测序", "比对", "全长"],
    ["standard curve", "hplc", "r2", "0.99998", "44052", "retention time", "17.1", "标准曲线", "标曲", "保留时间", "色谱"],
    ["error bar", "replicate", "biological", "technical", "n=3", "n=2", "confidence interval", "shaded", "误差棒", "重复", "独立样本", "阴影", "置信区间"],
    ["orthogonality", "iaa", "salicylic", "dapg", "anti-inflammatory", "synergy", "正交", "水杨酸", "抗炎", "促愈合", "协同"]
  ],

  // Optional override for system prompt (if empty, uses data/system_prompt.md bundled in knowledge_base.js)
  systemPromptOverride: ""
};
