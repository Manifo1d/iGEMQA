# iGEM Real-Time Defense AI Assistant (`igem-defense-assistant`)

专为 iGEM 答辩现场设计的**极简双栏实时问答与智能题库检索系统**。支持全场免手动开关麦克风、自动区分「评委提问」与「我方作答」（含关系从句 `which` 防误判）、多轮连续追问代词消解、左栏 `1·2·3` 完整分点陈述与右栏「中文听力速记笔记」严格 1:1 同步流式输出。

---

## 1. 快速启动

### 方式 A：本地服务模式（推荐，永久记住 Chrome 麦克风权限 + 支持网页直接保存题库修改）
双击运行 `启动实时答辩助手.command`，或在终端执行：
```bash
python3 server.py --port 8765
```
随后在 Chrome 打开：`http://127.0.0.1:8765/index.html`

### 方式 B：纯静态零依赖模式（支持 GitHub Pages 或离线双击）
直接用 Chrome 打开仓库根目录下的 `index.html` 即可运行全部检索、语音识别与大模型生成功能。

---

## 2. 目录结构

```text
igem-defense-assistant/
├── index.html                  # 主界面入口（纯白极简双栏 + 内置可视化「题库管理」弹窗）
├── server.py                   # 本地 HTTP 服务与题库读写 REST API
├── 启动实时答辩助手.command      # macOS 一键启动脚本
├── config/
│   └── config.js               # 【配置接口】大模型 Provider 列表、语音识别参数、同义词扩展表
├── data/
│   ├── qa_items.md             # 【推荐编辑】Markdown 格式参考回答数据库（可直接用 Typora/Obsidian/VS Code 修改）
│   ├── qa_items.json           # 结构化问答数据库 JSON（60+ 题，含中英 1·2·3 分点与中文速记笔记）
│   ├── docs.json               # 关联项目库原文片段（Wiki / Protocols / DBTL / Parts，493 条）
│   ├── glossary.json           # 专业术语中英对照表
│   ├── slides.json             # 答辩 PPT 页码与索引映射表
│   ├── system_prompt.md        # 大模型核心事实与 System Prompt（可直接作为 Markdown 编辑）
│   └── knowledge_base.js       # 由 scripts/sync_db.py 自动生成的离线打包文件
├── scripts/
│   └── sync_db.py              # Markdown <-> JSON <-> knowledge_base.js 双向同步构建脚本
└── src/
    ├── styles.css              # 纯白极简样式表
    └── app.js                  # 核心检索、语音分类、多轮上下文与 window.DefenseAssistantAPI 接口
```

---

## 3. 如何修改参考回答数据库（三种方式任选）

### 方式一：直接编辑 Markdown 文件 `data/qa_items.md`（最适合队员协作撰稿）
1. 用任意 Markdown 编辑器（Typora、Obsidian、VS Code、记事本）打开 [`data/qa_items.md`](data/qa_items.md)。
2. 按以下直观结构修改现有题目或在末尾新增题目：
   ```markdown
   ## [B1.1] 为什么你们用了三种不同的宿主菌？
   - **ID**: `b1-1`
   - **Slide**: `B5` (Page 11)
   - **English Question**: Why did your team use three different bacterial hosts?
   - **Keywords**: three hosts chassis BL21 EcN S. epidermidis 三种宿主 底盘分工

   ### 英文分点 (1·2·3)
   1. [Direct Conclusion] Each host serves a distinct biological role...
   2. [Experimental Evidence] S. epidermidis acts as the skin commensal sender...
   3. [Boundary & Next Step] BL21(DE3) is strictly a proof-of-concept chassis...

   ### 中文分点 (1·2·3)
   1. 【核心结论】三株菌在系统中承担明确的模块化职责...
   2. 【实验证据与数据】表皮葡萄球菌作为皮肤共生发送菌...
   3. 【边界与下一步】BL21(DE3) 仅用于概念验证...

   ### 答题思路速记 (中文关键词链)
   1. 三菌分工 → 各司其职
   2. 表皮葡萄球菌（发送菌，天然 HssRS）→ EcN（接收菌，益生菌底盘）
   3. BL21(DE3)（仅验证工程）→ 产酶纯化与前期通路测试
   ```
3. 保存后：
   - 若正在运行 `python3 server.py`，**直接刷新浏览器网页即可自动解析生效**；
   - 若使用纯静态模式，在终端运行一次同步命令即可更新 `data/qa_items.json` 与 `data/knowledge_base.js`：
     ```bash
     python3 scripts/sync_db.py --from-md
     ```

### 方式二：网页内置「题库管理」可视化编辑
1. 点击页面顶部导航栏的 **「题库管理」** 按钮。
2. 左侧列表选择任意题目（或点击 **`+ 新增问答`**），右侧表单直接修改题号、对应 PPT 页码、中英文 `1·2·3` 分点、以及右侧中文听力速记笔记。
3. 点击 **「保存修改」**：
   - 在 `server.py` 模式下，修改会实时写回本地磁盘的 `data/qa_items.json`、`data/qa_items.md` 和 `data/knowledge_base.js`；
   - 在静态网页模式下，修改自动保存在浏览器本地存储，并可随时点击 **「导出 qa_items.json」** 或 **「导入 JSON」**。

### 方式三：直接修改 JSON 数据文件或 `data/system_prompt.md`
- 修改问答条目：编辑 `data/qa_items.json`
- 修改项目原文参考库（Wiki / 实验 Protocol）：编辑 `data/docs.json`
- 修改 AI 核心背景事实提示词：编辑 `data/system_prompt.md`
- 编辑完成后执行 `python3 scripts/sync_db.py` 即可重新生成离线包 `data/knowledge_base.js`。

---

## 4. 接口说明（API & Configuration Reference）

### 4.1 配置文件接口：`config/config.js` (`window.DefenseConfig`)
可在 [`config/config.js`](config/config.js) 中直接增删大模型接口、调整语音识别参数或扩充同义词库：

```javascript
window.DefenseConfig = {
  defaultProvider: "deepseek_flash",
  providers: {
    my_custom_llm: {
      name: "My Custom LLM",
      keyGroup: "CUSTOM_GROUP",
      url: "https://api.example.com/v1/chat/completions", // OpenAI 兼容接口
      model: "model-main-id",
      fastModel: "model-fast-id", // 用于顶部问题同传流
      extra: {}                   // 附加请求体字段
    }
  },
  speech: {
    lang: "en-US",
    defaultMode: "auto_detect",   // "auto_detect" | "manual_grab"
    silenceFinalizeMs: 1150,      // 评委问句静音锁定毫秒数
    contextWindowMs: 150000,      // 多轮追问保留现场语音转写窗口 (2.5 分钟)
    maxHistoryTurns: 2            // 多轮追问携带前序问答轮数
  },
  synonymGroups: [
    ["naringenin", "柚皮素", "nrsr", "fder"]
  ]
};
```

### 4.2 前端 JavaScript 编程接口：`window.DefenseAssistantAPI`
页面加载后自动挂载全局对象 `window.DefenseAssistantAPI`，可供外部脚本、浏览器控制台或插件调用：

| 方法签名 | 功能说明 |
| :--- | :--- |
| `DefenseAssistantAPI.ask(question)` | 触发指定问题的本地检索、问题同传与双栏 AI 同步流式回答 |
| `DefenseAssistantAPI.searchLocal(query)` | 执行毫秒级本地题库检索（含多轮代词上下文加权），返回匹配的 `qa_items` 数组 |
| `DefenseAssistantAPI.classifySpeech(text, isLocked)` | 调用评委问句/队员回答语法分类器，返回 `{ role, cleanQuestion, judgeScore, teamScore }` |
| `DefenseAssistantAPI.getDatabase()` | 获取当前内存中的完整数据库 `{ qa_items, docs, glossary, slides }` |
| `DefenseAssistantAPI.loadDatabase(kbOrUrl)` | 动态热加载新的数据库对象或远程 JSON URL |
| `DefenseAssistantAPI.upsertQaItem(item, persist)` | 新增或更新单条问答记录（`persist=true` 时自动同步至本地 `server.py`） |
| `DefenseAssistantAPI.removeQaItem(idOrCode, persist)` | 删除指定 `id` 或 `code` 的问答记录 |
| `DefenseAssistantAPI.exportQaJson()` | 导出当前全部问答记录的格式化 JSON 字符串 |
| `DefenseAssistantAPI.registerProvider(id, cfg)` | 动态注册新的 OpenAI 兼容大模型接口并刷新顶部下拉框 |
| `DefenseAssistantAPI.getContext()` | 获取当前多轮对话历史 (`questionHistory`) 与实时语音转写片段 (`transcriptSegments`) |
| `DefenseAssistantAPI.clearContext()` | 清空多轮追问上下文记忆（等同于快捷键 `Alt+C`） |
| `DefenseAssistantAPI.on(event, callback)` | 订阅事件：`questionDetected`、`localMatch`、`aiStreamChunk`、`aiStreamDone`、`databaseUpdated` |

### 4.3 本地 HTTP REST 接口（由 `server.py` 提供）

| HTTP 方法与路径 | 说明 |
| :--- | :--- |
| `GET /api/kb` | 获取最新合并知识库（若 `data/qa_items.md` 有更新会自动先解析同步） |
| `GET /api/qa` | 获取 `data/qa_items.json` 中的全部问答数组 |
| `POST /api/qa` | 传入单个问答对象进行新增/更新（或传入完整数组全量替换），自动同步写回 `qa_items.json`、`qa_items.md` 与 `knowledge_base.js` |
| `DELETE /api/qa/<id>` | 按 `id` 或 `code` 删除指定问答条目并同步更新文件 |
| `POST /api/reload` | 手动触发 `scripts/sync_db.py` 重新同步编译知识库 |

---

## 5. 快捷键一览

| 快捷键 | 功能 |
| :--- | :--- |
| `Alt + S` | 开启 / 暂停全场麦克风监听（不断开底层权限会话，无重复弹窗） |
| `Alt + Q` | 从后台持续录音中提取最后一个评委问句并生成回答 |
| `Alt + Z` | 一键返回上一题回答画面（防止现场误触发冲掉正在看的答案） |
| `Alt + N` | 在自动锁题状态下手动解锁，准备接收下一位评委提问 |
| `Alt + C` | 清空多轮连续追问上下文记忆，开启全新话题 |
| `/` | 快速聚焦顶部检索输入框 |
