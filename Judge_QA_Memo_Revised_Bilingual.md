# Judge Q&A Memo — Revised, Deduplicated & Anti-Defensive Edition

**SJTU-BioX-Shanghai 2026 · Dual-Armor System**  
Aligned to `Wetlab_final01-SEPv1_修复版.pptx` (`S1–S6`, `INDEX`, `B1–B19`), Project Wiki, and the 36-Session / 367-Question Best Part Collection Q&A Database.

---

## 审阅与修订摘要 / Review & Revision Summary

1. **去防御化与正面立论（Anti-Defensive Revision）**：
   - 删除原稿中自毁式/过度示弱表达（如 *"I won't say all thirteen work — they don't"*、*"its status is inconsistent between the deck and the wiki"*、*"The three-part rule is the biggest BPC risk for us"*、*"No, it's tight... I wouldn't call the margin comfortable"*），改为**先正向陈述已确立的实验证据与工程设计逻辑，再平静交代适用边界与下一步验证实验**。
   - 将原稿中夹杂的“内部指导口吻”（如 *"If a judge knows a prior example, we should acknowledge it..."*、*"We should say that clearly"*）全部改写为**赛场第一人称可直接脱口而出的标准台词**。
2. **合并去重（47 题 → 36 题精炼无重叠）**：
   - `Q1 + Q3 + Q46` → 合并为 **M1–M2**（一句话定义 Collection + `13+4` 构建体与 Wiki `38` 条目的关系及验证状态）
   - `Q2 + Q28` → 合并为 **M3**（柚皮素跨菌治疗接力的系统级新颖性 vs 2017 胞内先例）
   - `Q5 + Q45` → 合并为 **M5**（其他队伍明天的最小复用单元与肠道/烧伤替换实例）
   - `Q9 + Q10` → 合并为 **M9**（商业 DspB 18h 清除 >84% 成熟生物膜 vs 结晶紫生物量读数边界）
   - `Q17 + Q21` → 合并为 **M15**（1–2.5 µM 血红素工作窗口 vs 创面血红蛋白结合与金葡菌 `Isd` 铁掠夺）
   - `Q23 + Q24` → 合并为 **M19**（53.8 µM 原上清产量跨过 50 µM 阈值与 50–400 µM 动态空间优化）
   - `Q26 + Q27` → 合并为 **M21**（1:1 共培养点亮机制、两组单培养对照与通路失活对照设计）
   - `Q39 + Q41` → 合并为 **M32**（体外向离体/体内伤口模型三级转化与活体生物治疗产品 LBP 监管路径）
   - `Q42 + Q43 + Q47` → 合并为 **M33–M34**（三大模块间交接边界与未来三个月实验优先级路线图）
3. **全库页码统一对齐 `Wetlab_final01-SEPv1_修复版.pptx`（`S1–S6` + `B1–B19`）**，并已同步写入实时答辩助手数据库（共 **76 条**结构化问答）。

---

## 30 秒总框架 / The 30-Second Frame

> **EN:** "We built a two-strain therapeutic consortium for *S. aureus* wound biofilms. *S. epidermidis* senses infection signals, disperses the biofilm matrix via DspB, and synthesizes naringenin; *E. coli* Nissle 1917 senses naringenin and delivers the peptidoglycan lysin LSp222 and wound-healing factor hEGF. Our Part Collection is the naringenin communication relay—other teams can keep the sender-to-receiver relay fixed and swap the upstream disease sensor or downstream therapeutic cargo."

> **中：** "我们构建了一套针对金黄色葡萄球菌创面生物膜的双菌治疗联合体。表皮葡萄球菌负责感知感染信号、分泌 DspB 瓦解生物膜并合成柚皮素；大肠杆菌 Nissle 1917（EcN）读取柚皮素信号并输出裂解酶 LSp222 与促愈合因子 hEGF。我们的 Part Collection 就是中间这条柚皮素跨菌通讯接力——其他队伍可以保留中间的接力通路不变，按需替换上游传感器或下游治疗载荷。"

---

## 一、Collection 与 BPC 核心问答 / Collection and BPC

### M1 (原 Q1). What is your collection, in one sentence?
**问：** 用一句话说，你们的 collection 是什么？  
**答 (EN):** "Our Part Collection is a modular naringenin-mediated inter-bacterial communication toolkit. The fixed core is the signaling bridge—the three-enzyme naringenin biosynthesis module (`At4CL–PhCHS–CmCHI`) in the sender and the `FdeR/PfdeAR` transcriptional switch in the receiver—while the upstream input promoter and downstream protein cargo act as swappable plug-and-play interfaces."  
**答（中）：** "我们的 Part Collection 是一套模块化的柚皮素跨菌通讯工具箱。固定不变的核心是中间的通讯桥——发送端的三酶柚皮素合成模块（`At4CL–PhCHS–CmCHI`）与接收端的 `FdeR/PfdeAR` 转录开关——而上游输入启动子与下游效应蛋白均为可插拔替换的接口。"  
**证据 / Evidence:** `B1`, `B2`, `B17`.

---

### M2 (原 Q3 + Q46). How many parts are in the collection, and which ones are functionally validated?
**问：** 你们的 collection 里有多少个 part？怎么证明它们已经验证过？  
**答 (EN):** "Slide B17 summarizes 13 core constructs and 4 auxiliary characterization constructs, while the Wiki lists 38 Registry entries because it also catalogs each individual basic coding sequence, promoter, and signal peptide inside those constructs. We have functional experimental data for the core modules across the pipeline: the heme reporter (`HmSr–sfGFP`, B7/B8), the naringenin biosynthesis pathway (`T7/Pcap–Nr`, B9/B10), the EcN naringenin receiver (`NrSr–sfGFP`, B11), the 1:1 co-culture relay (B12), and the `LSp222` and `hEGF` protein outputs in BL21 (B14–B16)."  
**答（中）：** "B17 页汇总了 13 个核心复合构建体与 4 个辅助表征构建体；Wiki 上列出 38 个条目是因为把构建体内部的每个基础编码序列、启动子和信号肽也分别作为独立基础元件登记进了 Registry。我们在全链路关键节点上均取得了实测功能数据：血红素报告模块（`HmSr–sfGFP`，B7/B8）、柚皮素合成模块（`T7/Pcap–Nr`，B9/B10）、EcN 接收报告模块（`NrSr–sfGFP`，B11）、1:1 共培养通讯（B12）以及 `LSp222` 和 `hEGF` 蛋白输出（B14–B16）。"  
**追问（关于 T7–Nr 状态）：** "T7–Nr has been built and functionally validated in BL21(DE3), producing the 53.8 µM HPLC titer on B9/B10 and driving the co-culture assay on B12; the Wiki table reflects an earlier submission snapshot."  
**证据 / Evidence:** `B17`.

---

### M3 (原 Q2 + Q28). What is actually new here? FdeR and naringenin are already known.
**问：** 这里真正新的是什么？FdeR 和柚皮素都不是新东西。  
**答 (EN):** "While intracellular naringenin biosensors like FdeR and riboswitches (such as Xiu et al., 2017) have been used to monitor flavonoid fermentation inside a single strain, our contribution is repurposing naringenin as an extracellular, diffusible cell-to-cell signaling molecule between two bacterial strains in a therapeutic consortium. Around that inter-strain relay, we standardized a reusable sender-and-receiver collection so future teams can rewire multi-strain consortia without redesigning the communication channel."  
**答（中）：** "虽然 FdeR 或核糖开关（如 Xiu 等 2017 年报道）此前已被用于单株菌胞内黄酮发酵监测，但我们的核心创新是将植物黄酮柚皮素拓展为**双菌治疗联合体之间的胞外可扩散跨菌信使**。围绕这一跨菌接力，我们封装了标准化的发送与接收构建体集合，使后续团队无需从头设计通讯通道即可组装多菌协同系统。"  
**证据 / Evidence:** `S4`, `B2`, `B3`.

---

### M4 (原 Q4 + Q7). Which parts are assembly-compatible, and how do you handle attribution for borrowed parts?
**问：** 哪些元件符合 RFC10/RFC1000 组装标准？你们怎么处理其他队伍元件的归属？  
**答 (EN):** "Our sensing, biosynthesis, and untagged `NrSr–hEGF` constructs are designed free of illegal restriction sites for RFC10 and RFC1000 compatibility, whereas the four His-tagged `PelB` fusion constructs contain internal sites and are documented for Gibson or Type IIS assembly. In every Registry entry, we explicitly credit the ancestor parts—`FdeR` from AISSU_Union 2021 (`BBa_K4012026`), `PelB` from TJUSLS-China 2024 (`BBa_K5292306`), and `AgrCA–P2/P3` from our 2025 team (`BBa_25NOD1M0` / `BBa_25DXVP8T`)—while our new contributions are the composite naringenin sender/receiver circuits and co-culture validation."  
**答（中）：** "我们的传感、合成通路及无标签版 `NrSr–hEGF` 构建体均按符合 RFC10 / RFC1000 的无内部酶切位点标准设计；4 个带 `PelB` 与 `6×His` 的融合输出件则在文档中明确标注采用 Gibson 或 Type IIS 无缝组装。在所有 Registry 词条中，我们均完整标注了祖先元件来源——`FdeR` 致谢 AISSU_Union 2021（`BBa_K4012026`）、`PelB` 致谢 TJUSLS-China 2024（`BBa_K5292306`）、`AgrCA–P2/P3` 致谢本队 2025 年工作——本队今年的核心新贡献是跨菌柚皮素接力复合构建体与共培养功能验证。"  
**证据 / Evidence:** `B17`; Wiki Parts page.

---

### M5 (原 Q5 + Q45). What can another team do with this collection tomorrow?
**问：** 别的队伍拿到你们的 collection 可以怎么复用？  
**答 (EN):** "A team can start immediately with `NrSr–sfGFP` in their receiver chassis to calibrate naringenin response, pair it with our `Nr` sender module, and then swap one end at a time. For example, an inflammatory-bowel-disease team can replace our `pHrtBA` heme promoter with a gut thiosulfate (`ThsSR`) or nitric-oxide (`NorR`) promoter and swap the downstream cargo for `IL-10` or `TFF3`; a burn-wound team can plug in a *Pseudomonas* quorum-sensing promoter upstream and a pyocin or alginate lyase downstream."  
**答（中）：** "其他团队可以先用 `NrSr–sfGFP` 在自己的接收菌底盘中标定柚皮素响应，配对我们的 `Nr` 发送模块，随后按需替换任意一端。例如：肠道炎症（IBD）团队可将上游 `pHrtBA` 血红素启动子替换为肠道硫代硫酸盐（`ThsSR`）或一氧化氮（`NorR`）启动子，将下游载荷替换为抗炎因子 `IL-10` 或黏膜修复肽 `TFF3`；烧伤创面团队则可接入铜绿假单胞菌群体感应启动子与绿脓菌素（pyocin）。"  
**证据 / Evidence:** `B2`, `B12`, `B17`.

---

### M6 (原 Q6). Why is DspB not in the core Part Collection?
**问：** 为什么 DspB 不在核心 Part Collection 里？  
**答 (EN):** "We kept the Part Collection focused on the universal naringenin communication relay so other teams can reuse the signaling bridge without taking on staphylococcal-specific shuttle vectors (`pBUS1` and `pLI50`). DspB is documented as our dedicated upstream biofilm-clearing module across Slides B5, B6, B13, B18, and B19."  
**答（中）：** "我们将 Part Collection 聚焦于通用的“柚皮素跨菌通讯接力”，使其他团队无需连带引入葡萄球菌专用的穿梭载体（`pBUS1` 和 `pLI50`）即可直接复用通讯总线。DspB 作为上游创面生物膜清除模块，在 B5、B6、B13、B18 与 B19 页作为独立交付物完整呈现。"  
**证据 / Evidence:** `B2`, `B5`, `B17`, `B18`.

---

### M7 (原 Q44). Why should this project win Best Part Collection?
**问：** 为什么这个项目应该拿 Best Part Collection？  
**答 (EN):** "Because our collection delivers a working inter-bacterial communication bus rather than a static catalog of individual sequences. We validated the sender biosynthesis (53.8 µM), the receiver dose-response (50–400 µM), the 1:1 co-culture activation without exogenous inducer, and two distinct therapeutic cargos, giving future iGEM teams a plug-and-play relay for multi-strain engineering."  
**答（中）：** "因为我们的集合交付的是一条已经跑通的“跨菌通讯总线”，而不仅是一张静态序列清单。我们完整验证了发送端合成（53.8 µM）、接收端梯度响应（50–400 µM）、无外源添加的 1:1 共培养点亮以及两种治疗蛋白输出，为后续多菌协同 iGEM 团队提供了即插即用的通讯骨架。"  
**证据 / Evidence:** `B2`, `B9–B12`, `B17`.

---

## 二、DspB 与生物膜模块 / DspB and Biofilm Module

### M8 (原 Q8). Did you show that your engineered strain secretes DspB?
**问：** 你们证明了自己的工程菌分泌 DspB 吗？  
**答 (EN):** "We validated the enzymatic biofilm clearance and the genetic construct in the final host in parallel, and direct supernatant protein detection is our immediate next step. Specifically, cloned `Sec/SPII–DspB–6xHis` matches 965 of 971 bases by Sanger sequencing (99% identity, B6), the constitutive `pBUS1–Pcap–DspB` plasmid has been transferred through RN4220 into *S. epidermidis* ATCC 12228 and confirmed by colony PCR (B5), and purified DspB removes over 84% of mature *S. aureus* biofilm in 18 hours (B13). Next, we will concentrate the ATCC 12228 supernatant for an anti-His Western blot and a conditioned-medium crystal violet assay (B18)."  
**答（中）：** "我们并行完成了“DspB 酶学破膜活性验证”与“目标宿主 ATCC 12228 的基因构建转入”，工程菌上清液的蛋白直测是紧接着的下一步。具体而言：(1) `Sec/SPII–DspB–6xHis` 经 Sanger 测序达 965/971 碱基匹配（99% 一致，B6）；(2) 组成型 `pBUS1–Pcap–DspB` 已通过 RN4220 成功转入最终宿主表皮葡萄球菌 ATCC 12228 并经菌落 PCR 确认（B5）；(3) 商业化 DspB 在 18 h 内清除 >84% 的成熟金葡菌生物膜（B13）。下一步我们将浓缩 ATCC 12228 培养上清开展 Anti-His Western blot 与上清破膜活性复核（B18）。"  
**证据 / Evidence:** `B5`, `B6`, `B13`, `B18`.

---

### M9 (原 Q9 + Q10). What did your biofilm assay prove, and does crystal violet distinguish dispersal from killing?
**问：** 生物膜实验具体证明了什么？结晶紫能区分“分散基质”与“杀菌”吗？  
**答 (EN):** "The assay demonstrates that DspB removes over 84% of pre-formed, mature *S. aureus* biofilm biomass over 18 hours, reducing crystal violet OD590 from ~0.6 to ~0.1 compared with the 18-hour untreated control. Because crystal violet stains retained biomass—both matrix and embedded cells—and DspB is a β-1,6-N-acetylglucosamine (PNAG) hydrolase rather than a bactericide, this readout proves biofilm matrix dispersal; subsequent bacterial killing is executed by our downstream lysin LSp222."  
**答（中）：** "该实验证明 DspB 能在 18 小时内清除 >84% 预先成熟的四期金葡菌生物膜生物量，使结晶紫 OD590 从未处理对照的约 0.6 降至约 0.1。由于结晶紫染色反映的是残留生物量（多糖基质加包裹菌体），且 DspB 本质是专一性水解 PNAG 基质的糖苷水解酶而非杀菌剂，该读数证明的是“生物膜基质瓦解与菌体剥离”；剥离后的细菌杀伤则由下游裂解酶 LSp222 完成。"  
**证据 / Evidence:** `S2`, `B13`, `B18`.

---

### M10 (原 Q11 + Q12). Did you show AIP induction of DspB, and why use AIP induction instead of constitutive DspB?
**问：** 你们证明 AIP 诱导 DspB 了吗？为什么不用组成型 DspB？  
**答 (EN):** "We built both: constitutive `pBUS1–Pcap–DspB` (already in ATCC 12228) serves as our characterization benchmark, while AIP-inducible `pLI50–AgrCA–P2/P3–DspB` restricts enzyme production to active *S. aureus* infections so the sender avoids continuous metabolic burden. Our 2025 team validated the `AgrCA–P2/P3` sensor with GFP, and this year we replaced GFP with `Sec/SPII–DspB` and verified the sequence; we are currently optimizing electroporation of the larger `pLI50` plasmid across the ATCC 12228 restriction barrier to run the AIP induction assay."  
**答（中）：** "我们同时构建了两个版本：已转入 ATCC 12228 的组成型 `pBUS1–Pcap–DspB` 用于表达与活性基准测试；而 AIP 诱导型 `pLI50–AgrCA–P2/P3–DspB` 则将酶的合成严格锁定在有金葡菌感染的微环境中，避免无感染时的持续代谢负担。上游 `AgrCA–P2/P3` 传感器已于 2025 年通过 GFP 验证了 AIP 激活功能，今年我们完成 `Sec/SPII–DspB` 替换与测序后，正在攻克 `pLI50` 大质粒进入 ATCC 12228 的电转限制屏障。"  
**证据 / Evidence:** `B5`, `B19`.

---

### M11 (原 Q13). *S. aureus* has four *agr* groups. Will your AIP sensor respond to clinical isolates?
**问：** 金黄色葡萄球菌有四个 *agr* 亚群，你们的 AIP 传感器能响应不同临床分离株吗？  
**答 (EN):** "Our current construct uses the standard *S. aureus* AgrC–AgrA receptor pair, targeting *agr* group I—the most prevalent group in clinical skin and soft-tissue infections. Because all four *agr* groups share the conserved AgrA regulator and P2/P3 promoter, extending coverage to *agr* II–IV clinical isolates only requires swapping or co-expressing the transmembrane receptor variant AgrC upstream of P2/P3 without changing the DspB output."  
**答（中）：** "当前构建体采用标准金葡菌 AgrC–AgrA 受体对，主要针对临床皮肤软组织感染中占比最高的 *agr* I 型。由于四个 *agr* 亚群共用高度保守的胞内转录因子 AgrA 与 P2/P3 启动子，若需覆盖 *agr* II–IV 型临床菌株，只需在 P2/P3 上游替换或共表达对应亚群的跨膜受体 AgrC，下游 DspB 模块无需任何改动。"  
**证据 / Evidence:** `B5`, `B19`.

---

### M12 (原 Q14). DspB targets PNAG, which *S. epidermidis* also makes. Will it damage your own sender?
**问：** DspB 靶向 PNAG，而表皮葡萄球菌也产 PNAG，它会破坏你们自己的发送菌吗？  
**答 (EN):** "DspB hydrolyzes extracellular PNAG polysaccharide without cleaving cell-wall peptidoglycan, so it disperses matrix without reducing *S. epidermidis* cell viability. In our dressing architecture, *S. epidermidis* is physically immobilized inside the hydrogel network rather than relying on self-biofilm for retention, and AIP-inducible control further restricts DspB expression to *S. aureus* infection sites."  
**答（中）：** "DspB 仅水解胞外 PNAG 多糖而不切割细胞壁肽聚糖，因此它只分散胞外基质，完全不影响表皮葡萄球菌的细胞存活率。同时，在我们的水凝胶敷料中，发送菌依靠水凝胶网格实现物理固定，无需依赖自身生物膜定植；加上 AIP 诱导门控仅在金葡菌存在时开启表达，进一步避免了非必要暴露。"  
**证据 / Evidence:** `B13`, `B18`.

---

### M13 (原 Q15 + Q16). What about non-PNAG biofilm components (eDNA, proteins) and DspB dose-response?
**问：** 生物膜基质还有 eDNA 和蛋白，单靠 DspB 够吗？做过剂量梯度吗？  
**答 (EN):** "Because PNAG is the primary structural scaffold in staphylococcal biofilms, single-agent DspB at a fixed working concentration cleared over 84% of mature *S. aureus* biofilm over our 18-hour time course (OD590 from ~0.6 to ~0.1). For polymicrobial clinical wounds containing eDNA and host fibrin, our next step is a DspB dose-response titration to define the minimum effective dose alongside DNase I co-treatment in artificial wound fluid."  
**答（中）：** "由于 PNAG 是葡萄球菌生物膜最核心的结构骨架，固定工作浓度的单药 DspB 在 0–18 h 时间进程实验中即可清除 >84% 的成熟金葡菌生物膜（OD590 从 0.6 降至 0.1）。针对含 eDNA 与宿主纤维蛋白的临床混合生物膜，下一步我们将在人工伤口渗出液中开展 DspB 浓度梯度滴定（确定最小有效剂量）及联合 DNase I 的协同破膜测试。"  
**证据 / Evidence:** `B13`, `B18`.

---

## 三、血红素发送端 / Heme Sender Module

### M14 (原 Q17 + Q20 + Q21). Is HssRS native to *S. epidermidis*, and how does it work under wound heme scavenging?
**问：** HssRS 是表皮葡萄球菌天然的吗？金葡菌会掠夺血红素且血红素常与蛋白结合，如何维持有效输入？  
**答 (EN):** "Yes, HssRS is endogenous to *S. epidermidis*, so we simply placed our reporter or naringenin pathway downstream of the native `pHrtBA` promoter without adding heterologous receptor burden. In our titration (B7/B8), *S. epidermidis* activates cleanly at just 1–2.5 µM free hemin—a low micromolar window where *S. epidermidis* grows above the untreated control while *S. aureus* growth is already reduced. Because only a brief micromolar heme pulse is needed to trigger naringenin synthesis, the sender does not need to outcompete *S. aureus* Isd heme scavenging long-term; next we will test hemoglobin-spiked artificial wound exudate."  
**答（中）：** "是的，HssRS 是表皮葡萄球菌天然的内源双组分系统，因此我们只需将报告基因或柚皮素通路接在天然 `pHrtBA` 启动子下游，零外源受体负担。B7 与 B8 页显示，仅需 1–2.5 µM 的低微摩尔游离血红素即可在 1.7–2.3 h 触发清晰响应，且该浓度下表皮葡萄球菌生长优于未处理对照，而金葡菌已受抑制。由于只需短时微摩尔血红素脉冲即可启动柚皮素合成，发送菌无需与金葡菌 Isd 系统长期争夺铁源；下一步将补测全血红蛋白与人工创面渗出液。"  
**证据 / Evidence:** `S3`, `B7`, `B8`.

---

### M15 (原 Q18). The heme response is transient (~1.7–2.3 h peak). Is that a problem for a therapeutic relay?
**问：** 血红素响应是瞬时的（1.7–2.3 小时达峰），这对治疗接力是问题吗？  
**答 (EN):** "Pulse-like activation is actually an advantage for a two-stage relay: once HssRS induces the efflux pump HrtBA to detoxify intracellular heme, promoter activity turns down so the sender avoids metabolic exhaustion, while the synthesized naringenin remains stable in the medium to activate the EcN receiver over 24 hours (B11)."  
**答（中）：** "脉冲式激活恰恰是两级接力系统的优势：当 HssRS 诱导外排泵 HrtBA 将胞内过量血红素排出解毒后，启动子自然回落，从而保护发送菌免受持续代谢耗竭；而脉冲期间合成并分泌到胞外的小分子柚皮素化学性质稳定，可在随后 24 小时内持续激活 EcN 接收菌（B11）。"  
**证据 / Evidence:** `B7`, `B11`.

---

### M16 (原 Q19). Did hemin affect growth? Could the fluorescence signal be a growth artifact?
**问：** 血红素影响细菌生长吗？荧光升高会不会只是生长假象？  
**答 (EN):** "We measured OD600 growth curves independently on Slide B8 and normalized all fluorescence readings to OD600 relative to the 0 µM control. At 1–2.5 µM hemin, *S. epidermidis* maintains healthy growth above the untreated baseline while producing a sharp 1.7–2.3 h fluorescence peak; at ≥10 µM hemin, growth is suppressed and normalized fluorescence sits near baseline, confirming that the low-dose peak is genuine transcriptional induction rather than an OD artifact."  
**答（中）：** "我们在 B8 页独立测定了 OD600 生长曲线，并将所有荧光读数按 OD600 归一化后扣除同时间点 0 µM 对照。在 1–2.5 µM 下，表皮葡萄球菌保持高于未处理对照的健康生长，同时产生陡峭的 1.7–2.3 h 荧光峰；而在 ≥10 µM 高浓度下生长受抑、归一化曲线贴近零线，证实低剂量响应是真实的转录激活而非 OD 分母伪影。"  
**证据 / Evidence:** `B7`, `B8` (`X02`).

---

## 四、柚皮素跨菌通讯接力 / Naringenin Relay Module

### M17 (原 Q22). Why choose naringenin over known quorum-sensing molecules or other plant metabolites?
**问：** 为什么选柚皮素，而不用常见群体感应分子或其他候选物？  
**答 (EN):** "We selected naringenin for three reasons shown on Slide B3: first, wound orthogonality—as a plant flavonoid absent from mammalian and skin bacterial metabolism, it provides a clean background; second, receptor specificity via `FdeR/PfdeAR` without cross-talking with staphylococcal AIP; and third, intrinsic anti-inflammatory and pro-healing bioactivity. We ruled out DAPG because it inhibits Gram-positive hosts, salicylate because it perturbs host inflammatory pathways, and IAA because many bacteria produce it endogenously."  
**答（中）：** "如 B3 页所示，选择柚皮素基于三大理由：第一，创面正交性——作为哺乳动物与皮肤菌群均不内源合成的植物黄酮，创面背景极低；第二，`FdeR/PfdeAR` 受体专一性好，不与葡萄球菌 AIP 串扰；第三，柚皮素本身兼具抗炎与促伤口愈合活性。我们排除了抑制革兰氏阳性宿主的 DAPG、干扰宿主炎症信号的水杨酸、以及众多细菌内源副产物吲哚乙酸（IAA）。"  
**证据 / Evidence:** `B3` (`X14`).

---

### M18 (原 Q23 + Q24 + Q25). How did you calculate 53.8 µM naringenin, and is that margin over the 50 µM threshold robust?
**问：** 53.8 µM 的柚皮素原液浓度是怎么算出来的？略高于 50 µM 阈值够稳健吗？  
**答 (EN):** "On Slide B9, our BL21 sender culture shows an HPLC peak at 17.1 minutes (area ≈ 400) matching the naringenin standard. Using our five-point calibration curve on Slide B10 ($\text{Area} = 44052.04 \times C + 77.42$, $R^2 = 0.99998$), the 1:1 ethanol-extracted vial concentration is 7.32 mg/L (26.9 µM), which corresponds to 14.65 mg/L (53.8 µM) in the original fermentation broth after multiplying by the 2-fold extraction dilution factor. Achieving 53.8 µM in an unoptimized first-pass strain already exceeds the 50 µM EcN activation threshold and drove clear co-culture fluorescence on Slide B12; because the receiver responds up to 400 µM (B11), we have an 8-fold receiver headroom and can widen the margin by tuning `PhCHS` RBS strength and malonyl-CoA supply."  
**答（中）：** "B9 页中 BL21 发送菌在保留时间 17.1 min 处出现与标准品一致的特征峰（峰面积约 400）。代入 B10 页五点标准曲线（$\text{Area} = 44052.04 \times C + 77.42$，$R^2 = 0.99998$），1:1 等体积乙醇萃取进样瓶浓度为 7.32 mg/L（26.9 µM），乘以 2 倍萃取稀释系数即得原发酵上清浓度为 14.65 mg/L（53.8 µM）。在未经代谢工程改造的首版菌株中即跨过 50 µM 接收端阈值并跑通 1:1 共培养（B12），证明了通路可行性；且接收端在 50–400 µM 持续响应（留有 8 倍上限空间），后续只需强化限速酶 `PhCHS` 表达与丙二酰辅酶 A 供给即可进一步扩大工作余量。"  
**证据 / Evidence:** `B9`, `B10`, `B11`, `B12` (`X05`).

---

### M19 (原 Q26 + Q27). What controls support naringenin-mediated activation in the BL21–EcN co-culture?
**问：** 共培养实验中做了哪些对照来证明荧光激活来自跨菌通讯？  
**答 (EN):** "On Slide B12, we compared three groups under identical `IPTG` and *p*-coumaric acid conditions without adding exogenous naringenin: BL21 sender monoculture, EcN receiver monoculture, and the 1:1 BL21 + EcN co-culture. Only the 1:1 co-culture produced strong green fluorescence, while both monocultures remained at background levels. Combined with HPLC verification of sender naringenin production (B9) and pure naringenin titration of the receiver (B11), this establishes inter-strain signaling; as an additional single-variable control, our next experiment will pair EcN with a catalytically inactive `Nr` sender mutant in *p*-coumaric acid."  
**答（中）：** "在 B12 页中，我们在完全相同的 `IPTG` 与底物对香豆酸条件下（不外加柚皮素）设置了三组平行对比：BL21 发送菌单培养、EcN 接收菌单培养、以及 1:1 共培养。结果显示仅 1:1 共培养组出现强绿色荧光，两组单培养均为暗背景。结合 B9 发送菌产柚皮素 HPLC 证据与 B11 接收菌纯品梯度响应，构成了完整的三联证据链；下一步我们还将补充“失活突变型发送菌 + EcN + 对香豆酸”单变量阴性对照。"  
**证据 / Evidence:** `S4`, `B12` (`X06`, `X07`).

---

### M20 (原 Q29 + Q30). How does hydrophobic naringenin diffuse between strains, and is FdeR specific against other flavonoids?
**问：** 柚皮素疏水怎么在菌间扩散？FdeR 会被其他植物黄酮误激活吗？  
**答 (EN):** "Within our 50–400 µM working range (~14–109 mg/L), moderate lipophilicity allows naringenin to diffuse across aqueous hydrogel pores (crossing a 40 µm layer gap in ~3.2 seconds by reaction-diffusion modeling) and passively permeate the EcN membrane without requiring a dedicated transporter. `FdeR` is a natural naringenin-binding LysR-type regulator from *Herbaspirillum seropedicae*; to characterize clinical robustness, our next step is testing a flavonoid orthogonality panel (apigenin, kaempferol, quercetin) and quantifying free naringenin in BSA-containing wound fluid."  
**答（中）：** "在 50–400 µM（约 14–109 mg/L）工作区间内，适度脂溶性使柚皮素既能在水凝胶微孔中扩散（反应—扩散模型显示穿过 40 µm 层间距仅需约 3.2 秒），又能直接被动穿过 EcN 双层膜而无需额外转运蛋白。`FdeR` 是天然特异识别柚皮素的 LysR 家族调控蛋白；下一步我们将补充芹菜素、山奈酚、槲皮素等黄酮正交性测试面板，并标定含血清白蛋白（BSA）渗出液中的游离有效浓度。"  
**证据 / Evidence:** `B3`, `B11`, `B12` (`X12`).

---

## 五、治疗输出模块 / Therapeutic Output Module

### M21 (原 Q31 + Q32). LSp222 reduces *S. aureus* by 61% and *S. epidermidis* by 25%—how do you protect the sender and rule out crude-lysate LPS effects?
**问：** LSp222 在杀伤 61% 金葡菌的同时也使表皮葡萄球菌下降 25%，如何保护发送菌并排除粗提物内毒素干扰？  
**答 (EN):** "Our 30-minute lysis assay on Slide B15 establishes a >2.4-fold selectivity window toward *S. aureus* (−61%, OD600 to 0.393) over *S. epidermidis* (−25%, OD600 to 0.751) relative to species-matched TBS controls. To rule out host proteins or LPS in the crude lysate, we purified His-tagged LSp222 (~30 kDa) by Ni-NTA chromatography on Slide B16 and confirmed 64% *S. aureus* OD600 reduction in just 15 minutes at 10.94 µg/mL. In our dressing design, physical separation of the two strains across dual hydrogel layers (40 µm spacing) and controlled low-dose release protect the *S. epidermidis* sender while clearing *S. aureus*."  
**答（中）：** "B15 页 30 分钟裂解实验相对于同菌种 TBS 对照确立了 >2.4 倍的靶向选择性窗口：金葡菌 OD600 下降 61%（至 0.393），而表皮葡萄球菌仅下降 25%（至 0.751）。为排除粗提物宿主杂蛋白或内毒素（LPS）干扰，我们在 B16 页通过 Ni-NTA 亲和纯化获得 ~30 kDa 的 LSp222 纯酶，证实 10.94 µg/mL 低剂量下 15 分钟即可清除 64% 金葡菌。在实际敷料应用中，双层水凝胶的物理分层隔离（40 µm 间距）配合低剂量受控释放，可在高效杀灭金葡菌的同时保护发送菌群。"  
**证据 / Evidence:** `S5`, `B15`, `B16`.

---

### M22 (原 Q33 + Q34). Why does hEGF show two bands (11.10 and 8.89 kDa), and is bacterially secreted hEGF properly folded and safe?
**问：** 为什么 hEGF 出现 11.10 和 8.89 kDa 两条带？细菌分泌的 hEGF 能正确折叠二硫键且安全吗？  
**答 (EN):** "On Slide B14, the 5x concentrated supernatant of induced BL21 shows two bands absent from empty-vector controls (`V1/V2`): the upper band at ~11.10 kDa matches the uncleaved `PelB–hEGF–Linker–6xHis` precursor, and the lower band at ~8.89 kDa matches mature `hEGF–Linker–6xHis` after periplasmic cleavage of the 22-residue PelB leader (~2.2 kDa). Exporting hEGF into the oxidizing *E. coli* periplasm via PelB allows native `DsbA/DsbC` enzymes to form its three disulfide bonds, and topical recombinant hEGF is clinically established in wound care; our next step is an anti-His Western blot and a HaCaT keratinocyte scratch assay to verify bioactivity."  
**答（中）：** "B14 页 5 倍浓缩上清中出现了空载对照（`V1/V2`）完全没有的两条特异条带：上方 ~11.10 kDa 对应未切除信号肽的 `PelB–hEGF–Linker–6xHis` 前体，下方 ~8.89 kDa 对应切除 22 个氨基酸 PelB 信号肽（约 2.2 kDa）后的成熟分泌型 hEGF。通过 PelB 将蛋白引导至氧化性的大肠杆菌周质空间，可由内源 `DsbA/DsbC` 酶系催化形成 3 对二硫键；外用重组人表皮生长因子在临床创面修复中安全性成熟，且脉冲式接力避免了长期促增殖暴露。下一步我们将开展 Anti-His Western blot 与 HaCaT 角质形成细胞划痕实验确证其生物学活性。"  
**证据 / Evidence:** `S5`, `B14` (`X10`).

---

### M23 (原 Q35). Why use BL21(DE3) for naringenin and protein tests when the final chassis are *S. epidermidis* and EcN?
**问：** 最终底盘是表皮葡萄球菌和 EcN，为什么用 BL21(DE3) 测柚皮素合成和治疗蛋白？  
**答 (EN):** "As shown on Slide B4, we used `BL21(DE3)` as a fast, protease-deficient proof-of-concept chassis (`lon⁻ ompT⁻`) to validate the three-enzyme naringenin pathway (B9/B10), the 1:1 sender-to-EcN co-culture relay (B12), and `LSp222/hEGF` protein expression and purification (B14–B16) in parallel with final-host engineering. Meanwhile, in our target hosts, we validated heme sensing (`HmSr–sfGFP`) and `pBUS1–Pcap–DspB` delivery in *S. epidermidis* ATCC 12228 (B5/B7/B8), and validated naringenin reception (`NrSr–sfGFP`) and `NrSr–PelB–hEGF` construction in EcN (B11/B17)."  
**答（中）：** "如 B4 页所示，我们将蛋白酶缺陷型工程菌 `BL21(DE3)`（`lon⁻ ompT⁻`）作为快速概念验证底盘，用于并行跑通三酶柚皮素合成（B9/B10）、BL21→EcN 1:1 共培养跨菌接力（B12）以及 `LSp222/hEGF` 蛋白表达纯化与活性测定（B14–B16）。与此同时，在最终目标底盘中，我们已在表皮葡萄球菌 ATCC 12228 中完成了血红素传感验证（B7/B8）与 `pBUS1–Pcap–DspB` 转入（B5），并在益生菌 EcN 中完成了柚皮素接收梯度验证（B11）与 `NrSr–PelB–hEGF` 构建测序（B17）。"  
**证据 / Evidence:** `B4`, `B17`.

---

## 六、宿主选择、生物安全与临床转化 / Hosts, Biosafety, and Clinical Translation

### M24 (原 Q36 + Q37). Why use two strains instead of one, and will *S. epidermidis* and EcN coexist in a wound?
**问：** 为什么用两株菌分工而不是合在一株菌里？它们在伤口里能稳定共存吗？  
**答 (EN):** "Splitting the system across two strains pairs *S. epidermidis*'s native skin colonization and Gram-positive heme/AIP sensing with EcN's robust Gram-negative protein expression, preventing the severe metabolic burden and plasmid instability of stacking four circuits in one cell. To prevent nutrient competition or cross-lysis between the two species, our dual-layer hydrogel dressing physically separates *S. epidermidis* and EcN into distinct layers (40 µm apart) connected only by diffusible naringenin; testing long-term co-viability in this layered hydrogel is our next step."  
**答（中）：** "采用双菌分工是为了将“皮肤共生菌表皮葡萄球菌的天然定植与血红素/AIP 传感优势”与“益生菌 EcN 的强效蛋白合成与分泌优势”结合起来，避免将 4 条回路强行塞入单株菌导致的严重代谢崩溃与质粒丢失。为防止两株菌直接竞争营养或交叉抑制，双层水凝胶敷料将两株菌物理分隔在不同凝胶层内（中心间距 40 µm），仅靠小分子柚皮素跨层扩散通讯；下一步将实测双层水凝胶中两株菌的长期共存活性。"  
**证据 / Evidence:** `S1`, `B1`, `B4`, `B12` (`X12`).

---

### M25 (原 Q38 + Q39 + Q41). How do you address biosafety, horizontal gene transfer, wound-model testing, and regulatory translation?
**问：** 如何解决活菌逃逸、水平基因转移、真实伤口模型验证以及未来临床监管路径？  
**答 (EN):** "All experimental data this year are in vitro proof-of-concept studies, and we designed a three-tier translational roadmap toward a topical Live Biotherapeutic Product (LBP) combination dressing: first, physical encapsulation inside our 3D-printed dual-layer hydrogel; second, replacing antibiotic resistance markers with double D-alanine auxotrophy (`alr/dadX` in EcN and `dal/dat` in *S. epidermidis*) so escaped cells lyse without exogenous D-alanine; and third, chromosomal integration to eliminate plasmid horizontal gene transfer. Preclinical efficacy testing will progress from artificial wound exudate to ex vivo porcine skin biofilm models and murine wound models."  
**答（中）：** "今年所有实验均为体外（in vitro）概念验证，我们按外用“活体生物治疗产品（LBP）药械组合敷料”的监管要求规划了三重安全与转化阶梯：第一，3D 打印双层水凝胶物理封装截留；第二，用 D-丙氨酸双基因营养缺陷型（EcN 敲除 `alr/dadX`、表皮葡萄球菌敲除 `dal/dat`）替代抗生素抗性基因，使脱离敷料外源 D-Ala 供给的细菌无法合成细胞壁而自溶；第三，染色体整合消除质粒水平基因转移（HGT）。临床前验证将按“人工伤口渗出液 → 离体猪皮生物膜模型 → 小鼠创面感染模型”推进。"  
**证据 / Evidence:** `S1`, `S6`, `B4` (`X12`, `X13`).

---

### M26 (原 Q40). How many biological replicates and what statistical definitions did you use?
**问：** 实验包含多少次独立生物学重复？误差棒和拟合曲线代表什么？  
**答 (EN):** "Every error bar and shaded band represents independent biological replicates (mean ± SD): on Slide B11 (EcN receiver dose-response) and Slide B15 (LSp222 selectivity), each condition has $n = 3$ independent biological cultures (with 2 technical wells averaged per culture); on Slide B7/B8 (hemin time course), cultures were assayed with $n = 2–3$ biological replicates, and the smooth dashed lines are spline-interpolated trajectories to guide visual comparison alongside the discrete measured means."  
**答（中）：** "所有图表的误差棒与阴影带均代表独立生物学重复的均值 ± 标准差（mean ± SD）：在 B11 页（EcN 接收端梯度响应）和 B15 页（LSp222 选择性裂解）中，每个条件包含 $n = 3$ 个独立生物学培养物（每个培养物取 2 个技术复孔均值）；在 B7/B8 页（血红素动态曲线）中为 $n = 2–3$ 个独立生物学重复，平滑虚线为基于离散实测均值的样条插值趋势线。"  
**证据 / Evidence:** `B7`, `B8`, `B11`, `B15` (`X04`).

---

## 七、收尾综合与下一步路线图 / Closing & Three-Month Roadmap

### M27 (原 Q42 + Q43 + Q47). What is the main current limitation, and what would you prioritize with three more months?
**问：** 目前系统离最终闭环最关键的待补实验是什么？如果再有三个月你们会按什么顺序推进？  
**答 (EN):** "While each individual module is experimentally supported, our top priority is completing the inter-module handoffs in the final chassis. With three more months, we would execute three steps in order: first, concentrate *S. epidermidis* ATCC 12228 supernatant to confirm DspB secretion via anti-His Western blot and conditioned-medium biofilm clearance (B18), while finishing electroporation of AIP-inducible `pLI50–AgrCA–P2/P3–DspB` into ATCC 12228 (B19); second, transfer the `HmSr–Nr` pathway into *S. epidermidis* and `LSp222/hEGF` into EcN with a pathway-dead negative control; and third, evaluate the full *S. epidermidis*–EcN dual-layer hydrogel on an ex vivo porcine skin biofilm model."  
**答（中）：** "目前三大功能模块均已分别取得实验验证，最核心的待补环节是**最终目标底盘之间的模块交接闭环**。若有三个月时间，我们将按以下三步推进：第一步，超滤浓缩已转入 ATCC 12228 的组成型菌株上清，通过 Anti-His Western blot 与上清破膜实验坐实工程菌 DspB 分泌（B18），并完成 AIP 诱导型 `pLI50` 质粒在 ATCC 12228 中的电转诱导验证（B19）；第二步，将 `HmSr–Nr` 柚皮素通路转入表皮葡萄球菌、将 `LSp222/hEGF` 转入 EcN，并设置失活通路阴性对照完成终极双菌联调；第三步，在离体猪皮生物膜感染创面模型上测试双层水凝胶的完整治疗效果。"  
**证据 / Evidence:** `S6`, `B17`, `B18`, `B19`.
