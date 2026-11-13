# Judge Q&A Memo — Clear Logic & Plain-Spoken Edition

**SJTU-BioX-Shanghai 2026 · Dual-Armor System**  
- **PPT 页码对齐（可直接在口播中引用）**：正片 `S1–S6`、目录 `INDEX`、备份页 `B1–B19`（对应 `Wetlab_final01-SEPv1_修复版.pptx`）。  
- **内部题库索引（仅供队内检索，切勿在口播中说成 Slide 页码）**：`X01–X14`、`THR.1–THR.8`（对应实时答辩助手数据库）。

---

## 核心应答原则 / Core Speaking Rules

1. **开门见山（第一句就给答案）**：开口直接给 `Yes` / `No` / 核心结论 / 关键数字（下文中每题**加粗首句**即为第一句定调），**绝不复述评委问题，绝不加铺垫套话**。
2. **先讲功能人话，再挂元件代号**：评委背景不同，直接报代号容易听懵。先用平实语言点明**生物学作用**（如 *a three-enzyme pathway*、*a biofilm hydrolase*），再顺带报简称（`At4CL–PhCHS–CmCHI`、`DspB`）。
3. **三步因果阶梯（`1 → 2 → 3`）**：
   - **第 1 步（结论定调）**：一句话正面回答问题核心。
   - **第 2 步（机制与实测证据）**：按“原因 → 结果”顺着讲清原理与实验数据，并报出 `S/B` 页码。
   - **第 3 步（诚实边界与下一步）**：坦诚交代当前进度（如表皮葡萄球菌极难转化，Wiki freeze 时刚长出菌落正在测序）和下一步实验。
   - *按需裁剪：遇到二合一合并题，若评委只问其中一半，只需挑对应的分点作答，不必整段背完。*

---

## 30 秒总框架 / The 30-Second Frame

**逻辑链：** 伤口生物膜难清 → 菌 1（表皮葡萄球菌）破膜并发出柚皮素信号 → 菌 2（EcN）收到柚皮素释放杀菌酶与促愈因子 → 中间这段“柚皮素接力”就是可复用的 Part Collection

> **EN:** "**We pair two engineered bacteria in relay to clear *S. aureus* wound biofilms.** First, the skin commensal *S. epidermidis* senses infection signals, breaks open the biofilm with DspB, and makes naringenin as a chemical message. Second, the probiotic *E. coli* Nissle 1917 senses that naringenin and releases the lysin LSp222 to kill *S. aureus* plus hEGF to aid healing. Our Part Collection is that naringenin link in the middle—other teams keep the link unchanged and simply swap the input sensor or output drug."

> **中：** "**我们用两株工程菌接力清除金葡菌伤口生物膜。** 第一步，皮肤共生菌表皮葡萄球菌感知感染信号，分泌 DspB 破开生物膜，并合成柚皮素作为跨菌信号；第二步，益生菌大肠杆菌 EcN 感知柚皮素，释放裂解酶 LSp222 杀菌、释放 hEGF 促愈合。我们的 Part Collection 就是中间这条柚皮素接力线——其他队伍固定中间接力不变，只需替换上游传感器或下游治疗蛋白。"

---

## 一、Collection 与 BPC 核心问答 / Collection and BPC

### M1 (原 Q1). What is your collection, in one sentence?
**问：** 用一句话说，你们的 collection 是什么？  
**逻辑链：** 一条柚皮素跨菌通讯接力线 → 发送菌用三酶合成柚皮素、接收菌用转录因子读取并开启下游 → 其他队伍固定中间接力、只换头尾

**答 (EN):**
1. **It is a plug-and-play naringenin communication link between two bacteria.**
2. A sender strain synthesizes naringenin through a three-enzyme pathway (`At4CL–PhCHS–CmCHI`), and a receiver strain senses it with a transcription factor (`FdeR/PfdeAR`) to switch on downstream genes.
3. Other teams keep this middle signaling link fixed and swap only the upstream sensor or downstream therapeutic cargo.

**答（中）：**
1. **它是一条即插即用的“柚皮素跨菌通讯接力线”。**
2. 发送菌通过三酶通路（`At4CL–PhCHS–CmCHI`）合成柚皮素，接收菌通过转录因子（`FdeR/PfdeAR`）读取柚皮素并开启下游基因。
3. 其他团队固定中间这段通讯链路不变，只需按需替换上游传感器或下游功能载荷。

**PPT 页码：** `B1`, `B2`, `B17`

---

### M2 (原 Q3 + Q46). How many parts are in the collection, and which ones are functionally validated?
**问：** 你们的 collection 里有多少个 part？哪些已经完成了功能验证？  
**逻辑链：** 13 个核心复合元件 + 4 个辅助测试元件（拆分内部基础元件后共登记 38 条） → 5 大模块已拿到实测数据 → 其余目标底盘质粒已测序或正在转化验证

**答 (EN):**
1. **Our collection has 13 core composite constructs and 4 auxiliary test constructs on Slide B17.** The Wiki lists 38 Registry entries because each basic part inside those constructs (`At4CL`, `PhCHS`, `CmCHI`, `FdeR`, `PelB`, `sfGFP`) is also registered individually.
2. **Five functional modules have wet-lab data:** heme sensing in *S. epidermidis* (B7/B8), naringenin synthesis in BL21 (B9/B10), naringenin sensing in EcN (B11), 1:1 co-culture signaling (B12), and `LSp222`/`hEGF` protein expression (B14–B16).
3. The remaining target-host constructs are sequence-verified and either already in EcN/*S. epidermidis* or completing *S. epidermidis* transformation.

**答（中）：**
1. **Collection 包含 13 个核心复合构建体和 4 个辅助测试构建体（见 B17 页）。** Wiki 共列出 38 个词条，是因为把复合构建体内部的基础元件（`At4CL`、`PhCHS`、`CmCHI`、`FdeR`、`PelB`、`sfGFP`）也逐一单独登记了。
2. **已有 5 块拿到湿实验功能数据：** 表皮葡萄球菌血红素传感（B7/B8）、BL21 柚皮素合成（B9/B10）、EcN 柚皮素响应（B11）、1:1 共培养通讯（B12），以及 `LSp222`/`hEGF` 蛋白表达与活性（B14–B16）。
3. 其余目标底盘构建体均已完成测序，部分已转入目标菌株，剩余正处于表皮葡萄球菌转化验证阶段。

**PPT 页码：** `B17`

---

### M3 (原 Q2 + Q28). What is actually new here? FdeR and naringenin are already known.
**问：** 这里真正新的是什么？FdeR 和柚皮素都不是新东西。  
**逻辑链：** 创新在于把柚皮素从“单菌胞内探针”变成“跨菌种胞外信使” → 前人只在产菌内部测产量，我们让发送菌分泌到胞外去激活另一株益生菌 → 并封装成可换头尾的双菌工具箱

**答 (EN):**
1. **What is new is using naringenin as an exported cell-to-cell signal between two bacterial species.**
2. Earlier work—such as Xiu et al. (2017)—only sensed naringenin inside the same cell that made it to screen metabolic yield. We export naringenin into the medium so one bacterium can switch on a second probiotic species (B12).
3. By pairing this link with modular input promoters and output cargos, we turned a known metabolic pathway into a reusable two-strain communication toolkit (B2).

**答（中）：**
1. **核心创新在于把柚皮素用作两种细菌之间的“胞外跨菌通讯信号”。**
2. 前人工作（如 Xiu 等，2017）只在产菌内部检测柚皮素来筛选高产菌株；我们则让发送菌把柚皮素分泌到胞外，去激活另一株益生菌执行下游功能（B12）。
3. 再配上两端可替换的输入启动子与输出基因，就把已知代谢通路升级成了通用的双菌协作工具箱（B2）。

**PPT 页码：** `S4`, `B2`, `B3`

---

### M4 (原 Q4 + Q7). Which parts are assembly-compatible, and how do you handle attribution for borrowed parts?
**问：** 哪些元件符合组装标准？你们怎么处理其他队伍元件的归属？  
**逻辑链：** 无标签版符合 RFC10、合成通路符合 RFC1000 → 4 个带 PelB–6×His 的分泌元件因内部酶切位点采用 Gibson/Type IIS 组装 → 所有借用元件均标明原始团队与编号

**答 (EN):**
1. **Untagged `NrSr–hEGF` is RFC10-compatible, and `T7–Nr` is RFC1000-compatible.**
2. The four `PelB`–`6xHis` secretion constructs contain internal restriction sites, so we assemble them by Gibson or Type IIS cloning and flag those sites on Slide B17.
3. **Every borrowed part credits its original Registry ID:** `FdeR` from AISSU_Union 2021 (`BBa_K4012026`), `PelB` from TJUSLS-China 2024 (`BBa_K5292306`), and `AgrCA–P2/P3` from our 2025 team (`BBa_25NOD1M0` / `BBa_25DXVP8T`).

**答（中）：**
1. **无标签版 `NrSr–hEGF` 符合 RFC10 标准，`T7–Nr` 符合 RFC1000 标准。**
2. 另外 4 个带 `PelB` 信号肽与 `6×His` 标签的分泌构建体因含内部酶切位点，采用 Gibson 或 Type IIS 组装，并在 B17 页明确注明。
3. **所有借用元件均在 Registry 标明原始团队与编号：** `FdeR` 引自 AISSU_Union 2021（`BBa_K4012026`），`PelB` 引自 TJUSLS-China 2024（`BBa_K5292306`），`AgrCA–P2/P3` 引自本队 2025 年元件（`BBa_25NOD1M0` / `BBa_25DXVP8T`）。

**PPT 页码：** `B17`（及 Wiki Parts 页面）

---

### M5 (原 Q5 + Q45). What can another team do with this collection tomorrow?
**问：** 别的队伍拿到你们的 collection 可以怎么复用？  
**逻辑链：** 第 1 步先用荧光版验证接收菌能响应 → 第 2 步配对发送端并只换上游传感器或下游药物 → 举例：肠道团队换炎症传感器+抗炎因子，烧伤团队换假单胞菌传感器+绿脓菌素

**答 (EN):**
1. **First, they put `NrSr–sfGFP` into their receiver strain and verify fluorescence response with added naringenin (B11).**
2. Second, they pair that receiver with our `Nr` sender and swap only the upstream disease-sensing promoter or the downstream therapeutic gene (B2).
3. For example, a gut team can plug in an inflammation promoter (`ThsSR` or `NorR`) upstream and `IL-10` downstream, while a burn-wound team can swap in a *Pseudomonas* sensor and a pyocin.

**答（中）：**
1. **第一步，先把报告载体 `NrSr–sfGFP` 转入他们的接收菌，外加柚皮素确认荧光响应正常（B11）。**
2. 第二步，配对我们的 `Nr` 发送模块，保持中间柚皮素链路不动，只替换上游疾病传感启动子或下游治疗基因（B2）。
3. 例如：肠道团队可在上游换入炎症启动子（`ThsSR` 或 `NorR`）、在下游换入抗炎因子 `IL-10`；烧伤团队则可换入铜绿假单胞菌传感器与绿脓菌素。

**PPT 页码：** `B2`, `B12`, `B17`

---

### M6 (原 Q6). Why is DspB not in the core Part Collection?
**问：** 为什么 DspB 不在核心 Part Collection 里？  
**逻辑链：** 核心 Collection 聚焦“通用跨菌通讯” → DspB 装在葡萄球菌专用穿梭质粒上，拆开可避免其他队伍被迫引入葡萄球菌载体 → DspB 独立作为破膜模块完整归档

**答 (EN):**
1. **We kept the core Collection focused strictly on the general-purpose naringenin communication link (B2, B17).**
2. Our `DspB` constructs sit on *Staphylococcus*-specific shuttle plasmids (`pBUS1` and `pLI50`). Keeping `DspB` separate lets teams working in gut or Gram-negative bacteria reuse the signaling link without importing staphylococcal vectors.
3. All `DspB` constructs and biofilm data are documented separately as Module 1 on Slides B5, B6, B13, B18, and B19.

**答（中）：**
1. **因为我们将核心 Collection 严格聚焦在通用的“柚皮素跨菌通讯链路”上（B2、B17）。**
2. 破膜酶 `DspB` 搭载在葡萄球菌专用穿梭质粒（`pBUS1` 和 `pLI50`）上；将两者分开后，做肠道或革兰氏阴性菌的团队复用通讯链路时，就不必连带引入葡萄球菌载体。
3. `DspB` 相关元件与破膜数据已作为独立的模块一，在 B5、B6、B13、B18、B19 页完整展示。

**PPT 页码：** `B2`, `B5`, `B17`, `B18`

---

### M7 (原 Q44). Why should this project win Best Part Collection?
**问：** 为什么这个项目应该拿 Best Part Collection？  
**逻辑链：** 给出的是一整条跑通的双菌通讯链路而非零散元件 → 两端定量参数严密咬合（合成 53.8 µM 对齐激活阈值 ≥50 µM，1:1 共培养直接点亮，双蛋白输出验证） → 阈值和替换接口清晰、拿来即用

**答 (EN):**
1. **Because it gives future teams a tested inter-bacterial communication link, not just a list of standalone parts (B2).**
2. Both ends of the link are quantitatively matched: 53.8 µM sender output (B9/B10) clears the 50 µM receiver threshold across a 50–400 µM range (B11), activates 1:1 co-culture without added inducer (B12), and pairs with two validated protein cargos (B14–B16).
3. With clear thresholds and modular swap sites on Slide B17, other teams can wire new two-strain systems right away.

**答（中）：**
1. **因为它为后续团队提供了一条已经跑通的双菌通讯链路，而不是孤立零散的元件列表（B2）。**
2. 链路两端的定量参数是互相咬合的：发送端产出 53.8 µM（B9/B10），跨过接收端 50 µM 门槛并覆盖 50–400 µM 响应区间（B11），在无外源诱导下跑通 1:1 共培养点亮（B12），且配套验证了两个治疗蛋白输出（B14–B16）。
3. 配合 B17 页清晰的阈值说明与模块化替换接口，其他队伍拿来就能快速搭建新的双菌系统。

**PPT 页码：** `B2`, `B9–B12`, `B17`

---

## 二、DspB 与生物膜模块 / DspB and Biofilm Module

### M8 (原 Q8). Did you show that your engineered strain secretes DspB?
**问：** 你们证明了自己的工程菌分泌 DspB 吗？  
**逻辑链：** 还没测到工程菌上清里的 DspB 蛋白 → 已走通三步前置证据：测序 99% 一致、组成型质粒已转入表皮葡萄球菌、商业纯酶 18 h 清除 >84% 成熟生物膜 → 下一步浓缩上清做 Western 与破膜活性

**答 (EN):**
1. **No—we have not yet detected DspB protein directly in our engineered strain's supernatant.**
2. Three building blocks are in place: cloned `Sec/SPII–DspB–6xHis` matches 965/971 bp by Sanger sequencing (99% identity, B6), constitutive `pBUS1–Pcap–DspB` is transformed into *S. epidermidis* ATCC 12228 (colony PCR, B5), and commercial DspB clears >84% of mature *S. aureus* biofilm in 18 hours (B13).
3. Next, we will concentrate that engineered ATCC 12228 supernatant for an anti-His Western blot and a conditioned-medium biofilm assay (B18).

**答（中）：**
1. **还没有——我们尚未在工程菌上清中直接检出分泌的 DspB 蛋白。**
2. 目前已完成三项前置验证：克隆的 `Sec/SPII–DspB–6xHis` 测序匹配 965/971 bp（99% 一致，B6）、组成型 `pBUS1–Pcap–DspB` 已转入表皮葡萄球菌 ATCC 12228 并经菌落 PCR 确认（B5）、商业 DspB 在 18 小时内可清除 >84% 成熟金葡菌生物膜（B13）。
3. 下一步我们将超滤浓缩这株工程菌的上清，完成 Anti-His Western blot 与上清破膜实验（B18）。

**PPT 页码：** `B5`, `B6`, `B13`, `B18`

---

### M9 (原 Q9 + Q10). What did your biofilm assay prove, and does crystal violet distinguish dispersal from killing?
**问：** 生物膜实验具体证明了什么？结晶紫能区分“分散基质”与“杀菌”吗？  
**逻辑链：** 证明商业 DspB 18 h 剥离 >84% 成熟生物膜（OD590 从 0.6 降到 0.1） → 结晶紫测附着总残留量，DspB 只水解多糖“拆护盾”不杀菌 → 裸露后的杀菌任务交给下游 LSp222

**答 (EN):**
1. **It proves that DspB detaches >84% of pre-formed, mature *S. aureus* biofilm within 18 hours, dropping crystal-violet $\text{OD}_{590}$ from ~0.6 to ~0.1 (B13).**
2. **Crystal violet measures attached biomass, not bacterial death.** Because DspB is a glycoside hydrolase that cleaves PNAG polysaccharides, its role is stripping away the biofilm matrix rather than lysing cells.
3. Once the biofilm shield is removed, bactericidal killing is carried out downstream by our lysin `LSp222` (S2, B15–B16).

**答（中）：**
1. **它证明 DspB 能在 18 小时内剥离 >84% 预先成熟的金葡菌生物膜，使结晶紫 $\text{OD}_{590}$ 从 ~0.6 降至 ~0.1（B13）。**
2. **结晶紫染的是附着总生物量，不能区分分散与杀菌。** DspB 作为切割 PNAG 多糖的水解酶，任务是“拆掉生物膜护盾”，本身不杀灭细菌。
3. 护盾拆开、细菌裸露后，真正的杀菌由下游释放的裂解酶 `LSp222` 完成（S2、B15–B16）。

**PPT 页码：** `S2`, `B13`, `B18`

---

### M10 (原 Q11 + Q12). Did you show AIP induction of DspB, and why use AIP induction instead of constitutive DspB?
**问：** 你们证明 AIP 诱导 DspB 了吗？为什么不用组成型 DspB？  
**逻辑链：** 尚未测完诱导（质粒已测序，表皮葡萄球菌转化平板在 Wiki freeze 刚出菌落正测序） → 用 AIP 诱导是为了只在有金葡菌时按需产酶省能耗 → 组成型菌株已转入底盘，留作分泌测定阳性对照

**答 (EN):**
1. **Not yet—the inducible plasmid is sequence-verified, and our *S. epidermidis* transformant colonies are now being sequenced.** Our 2025 team validated the `AgrCA–P2/P3` sensor with GFP, and this year we swapped in secreted `DspB`; transforming this large `pLI50` plasmid into *S. epidermidis* is hard, and colonies just appeared at Wiki freeze (B19).
2. **We use AIP induction so the sender makes DspB only when *S. aureus* is present, saving metabolic energy.**
3. Meanwhile, constitutive `pBUS1–Pcap–DspB` is already in *S. epidermidis* ATCC 12228 (B5) as our positive control for secretion assays.

**答（中）：**
1. **还没有完成诱导测试——诱导型质粒已测序正确，转化菌落正在测序确认。** 上游 `AgrCA–P2/P3` 传感器去年已用 GFP 验证，今年我们换上了分泌型 `DspB`；大质粒 `pLI50` 转入表皮葡萄球菌难度很大，Wiki freeze 时平板刚长出菌落（B19）。
2. **采用 AIP 诱导是为了只在检测到金葡菌信号时才按需产酶，减轻底盘日常代谢负担。**
3. 同时，组成型 `pBUS1–Pcap–DspB` 已成功转入 ATCC 12228（B5），将作为上清分泌实验的阳性对照。

**PPT 页码：** `B5`, `B19`

---

### M11 (原 Q13). *S. aureus* has four *agr* groups. Will your AIP sensor respond to clinical isolates?
**问：** 金黄色葡萄球菌有四个 *agr* 亚群，你们的 AIP 传感器能响应不同临床分离株吗？  
**逻辑链：** 目前受体针对皮肤感染最常见的 agr I 型（尚未测 II–IV 型临床株） → 四个亚群共用下游 AgrA 与 P2/P3 启动子 → 扩展其他亚群只需替换跨膜受体 AgrC

**答 (EN):**
1. **Our current receptor is specific to *S. aureus* *agr* group I—the dominant group in skin infections—and we have not yet tested clinical isolates from *agr* groups II–IV.**
2. All four *agr* groups share the same intracellular `AgrA` regulator and `P2/P3` promoter, differing mainly in the transmembrane receptor `AgrC`.
3. Covering additional clinical groups only requires swapping or co-expressing the matching `AgrC` receptor variants upstream of `P2/P3`.

**答（中）：**
1. **当前受体针对皮肤感染最常见的金葡菌 *agr* I 型，尚未测试覆盖 *agr* II–IV 型的临床分离株。**
2. 四个亚群共用保守的胞内调控蛋白 `AgrA` 与 `P2/P3` 启动子，差异主要在跨膜受体 `AgrC`。
3. 后续若要覆盖其他临床亚群，只需在 `P2/P3` 上游替换或并联对应的 `AgrC` 受体。

**PPT 页码：** `B5`, `B19`

---

### M12 (原 Q14). DspB targets PNAG, which *S. epidermidis* also makes. Will it damage your own sender?
**问：** DspB 靶向 PNAG，而表皮葡萄球菌也产 PNAG，它会破坏你们自己的发送菌吗？  
**逻辑链：** 会切表皮葡萄球菌胞外多糖但不会杀菌（不伤细胞壁肽聚糖） → 发送菌靠水凝胶物理固定，不靠自身生物膜留存 → 下一步补测同剂量 DspB 对发送菌活菌数的影响

**答 (EN):**
1. **DspB can cleave extracellular PNAG around *S. epidermidis*, but it does not kill the cells because it only digests extracellular polysaccharide, not cell-wall peptidoglycan.**
2. Moreover, our sender is physically immobilized inside the hydrogel layer rather than relying on self-biofilm to stay on the wound, and AIP induction limits DspB production to infection sites.
3. Because we have not measured this directly yet, we will test *S. epidermidis* viability and biofilm retention under the same DspB dose next (B18).

**答（中）：**
1. **DspB 可能会水解表皮葡萄球菌胞外的 PNAG 多糖，但不会杀死发送菌，因为它只切胞外多糖基质，不破坏细胞壁肽聚糖。**
2. 此外，发送菌靠水凝胶网格物理固定，不需要依赖自身生物膜来定植，且 AIP 诱导能将产酶限制在感染期。
3. 这一点尚未单独实测，下一步我们会补测同剂量 DspB 对表皮葡萄球菌活菌数与生物膜的影响（B18）。

**PPT 页码：** `B13`, `B18`

---

### M13 (原 Q15 + Q16). What about non-PNAG biofilm components (eDNA, proteins) and DspB dose-response?
**问：** 生物膜基质还有 eDNA 和蛋白，单靠 DspB 够吗？做过剂量梯度吗？  
**逻辑链：** 真实多菌伤口含 eDNA/蛋白，单靠 DspB 可能需联用核酸酶或蛋白酶 → 我们的 >84% 数据来自单菌成熟生物膜与单一固定浓度 → 下一步做浓度梯度确定最小有效剂量

**答 (EN):**
1. **In polymicrobial clinical wounds rich in eDNA and matrix proteins, DspB alone may not be enough and could be paired with DNase or a protease.**
2. Our >84% clearance on Slide B13 was measured on a single-species mature *S. aureus* biofilm using one fixed concentration of commercial DspB over 18 hours.
3. **We have not run a DspB dose-response titration yet, which is our next step to find the minimum effective dose (B18).**

**答（中）：**
1. **在富含 eDNA 和基质蛋白的真实多菌创面中，单靠 DspB 可能不够，往往需要联用 DNase 或蛋白酶。**
2. B13 页 >84% 的清除率，是在实验室单菌种成熟金葡菌生物膜、单一固定酶浓度、处理 18 小时条件下测得的。
3. **目前还没有做 DspB 浓度梯度滴定，下一步将通过梯度实验确定最小有效剂量（B18）。**

**PPT 页码：** `B13`, `B18`

---

## 三、血红素发送端 / Heme Sender Module

### M14 (原 Q17 + Q20 + Q21). Is HssRS native to *S. epidermidis*, and how does it work under wound heme scavenging?
**问：** HssRS 是表皮葡萄球菌天然的吗？金葡菌会掠夺血红素且血红素常与蛋白结合，如何维持有效输入？  
**逻辑链：** HssRS 是底盘自带系统（只需引入 pHrtBA 启动子） → 纯血红素 1–2.5 µM 在 1.7–2.3 h 灵敏达峰且生长良好 → 真实伤口有血红蛋白结合与金葡菌抢夺，下一步在含血红蛋白模拟创面液中实测

**答 (EN):**
1. **Yes—`HssRS` is native to *S. epidermidis*, so we only introduced its target promoter `pHrtBA` (`HmSr`) to drive downstream expression (S3).**
2. In pure hemin titration, 1 µM peaks at ~1.7 hours and 2.5 µM peaks at ~2.3 hours while keeping *S. epidermidis* growth healthy (B7, B8).
3. **In real wounds, however, heme is mostly bound to hemoglobin and competed for by *S. aureus* Isd proteins;** we have not measured free wound-fluid heme yet, so testing hemoglobin-spiked simulated wound fluid is our next step.

**答（中）：**
1. **是的，`HssRS` 是表皮葡萄球菌天然自带的双组分系统，我们只需引入下游 `pHrtBA` 启动子（`HmSr`）即可接入信号（S3）。**
2. 在纯血红素测试中，1 µM 在 ~1.7 小时达峰、2.5 µM 在 ~2.3 小时达峰，同时发送菌生长良好（B7、B8）。
3. **但真实创面中血红素多与血红蛋白结合，且金葡菌会通过 Isd 蛋白抢夺；** 我们尚未测定渗出液游离血红素，下一步将在含血红蛋白的人工模拟伤口液中补测。

**PPT 页码：** `S3`, `B7`, `B8`

---

### M15 (原 Q18). The heme response is transient (~1.7–2.3 h peak). Is that a problem for a therapeutic relay?
**问：** 血红素响应是瞬时的（1.7–2.3 小时达峰），这对治疗接力是问题吗？  
**逻辑链：** 不是问题，反而是发送菌的自保机制 → 外排泵排空血红素后自动关停，防止发送菌中毒过载 → 脉冲期分泌出去的柚皮素化学稳定，可持续激活接收菌 24 小时

**答 (EN):**
1. **No—a brief activation pulse is actually helpful for a two-strain relay.**
2. Once *S. epidermidis*'s native `HrtBA` efflux pump clears excess intracellular heme, transcription turns back off, protecting the sender from heme toxicity and metabolic overload (B7, B8).
3. Meanwhile, the naringenin secreted during that pulse stays chemically stable in the medium and continues activating the EcN receiver over 24 hours (B11).

**答（中）：**
1. **不是问题——短暂脉冲反而有利于双菌接力系统的稳定运行。**
2. 当表皮葡萄球菌天然的 `HrtBA` 外排泵排空胞内过量血红素后，转录自动回落，能防止发送菌发生血红素中毒与代谢过载（B7、B8）。
3. 与此同时，脉冲期合成并分泌到胞外的柚皮素化学性质稳定，可在随后 24 小时内持续激活 EcN 接收端（B11）。

**PPT 页码：** `B7`, `B11`

---

### M16 (原 Q19). Did hemin affect growth? Could the fluorescence signal be a growth artifact?
**问：** 血红素影响细菌生长吗？荧光升高会不会只是生长假象？  
**逻辑链：** 不是生长假象（单独测了 OD600 并做单位菌浓归一化） → 1–2.5 µM 下表皮葡萄球菌生长良好且单菌荧光显著冲高（金葡菌反而受抑） → ≥10 µM 高浓度下生长受阻，归一化荧光贴近零线无假阳性

**答 (EN):**
1. **No—we tracked $\text{OD}_{600}$ growth curves separately on Slide B8 and normalized all fluorescence readings by $\text{OD}_{600}$ against the 0 µM control.**
2. At 1–2.5 µM hemin, *S. epidermidis* grows slightly above the untreated control while showing a clear per-cell fluorescence peak, whereas *S. aureus* growth is reduced (B7, B8).
3. At toxic doses (≥10 µM), growth drops and normalized fluorescence stays flat near zero rather than creating a false-positive spike.

**答（中）：**
1. **不是生长假象——我们在 B8 页单独测定了 $\text{OD}_{600}$ 生长曲线，并将所有荧光值按 $\text{OD}_{600}$ 归一化、扣除 0 µM 对照。**
2. 在 1–2.5 µM 低浓度下，表皮葡萄球菌生长略优于未处理对照，同时单位菌量荧光清晰达峰，而同浓度下金葡菌生长受抑（B7、B8）。
3. 在 ≥10 µM 高浓度毒性区间，细菌生长受阻，归一化荧光平贴在零线附近，并未因分母变小而产生假阳性冲高。

**PPT 页码：** `B7`, `B8` · **题库索引：** `X02`, `X03`

---

## 四、柚皮素跨菌通讯接力 / Naringenin Relay Module

### M17 (原 Q22). Why choose naringenin over known quorum-sensing molecules or other plant metabolites?
**问：** 为什么选柚皮素，而不用常见群体感应分子或其他候选物？  
**逻辑链：** 本底干净（人体与皮肤菌不产） → 受体正交不与金葡菌串扰，且自带抗炎促愈合作用 → 横向淘汰了伤宿主的 DAPG、干扰炎症信号的水杨酸和细菌自产的 IAA

**答 (EN):**
1. **First, clean background:** naringenin is a plant flavonoid absent from human tissue and skin bacteria, giving near-zero background noise (B3).
2. **Second, orthogonal reception plus bioactivity:** its `FdeR/PfdeAR` sensor does not cross-react with staphylococcal AIP, and naringenin itself has anti-inflammatory and pro-healing properties.
3. **Third, other candidates failed our screen:** DAPG inhibits our bacterial hosts, salicylic acid interferes with host inflammatory pathways, and IAA is made endogenously by bacteria (B3).

**答（中）：**
1. **第一，本底干净：** 柚皮素是植物黄酮，人体组织与皮肤菌群天然都不合成，背景噪声极低（B3）。
2. **第二，信号正交且自带疗效：** 专用受体 `FdeR/PfdeAR` 不与金葡菌 AIP 串扰，而且柚皮素本身兼具抗炎与促创面愈合作用。
3. **第三，其他候选分子存在明显短板：** DAPG 会抑制宿主菌生长，水杨酸会干扰人体炎症信号，而 IAA 细菌自身就会副产（B3）。

**PPT 页码：** `B3` · **题库索引：** `X14`, `THR.5`

---

### M18 (原 Q23 + Q24 + Q25). How did you calculate 53.8 µM naringenin, and is that margin over the 50 µM threshold robust?
**问：** 53.8 µM 的柚皮素原液浓度是怎么算出来的？略高于 50 µM 阈值够稳健吗？  
**逻辑链：** 算术链：17.1 min 峰面积 400 → 代入 g/L 标曲得萃取液 7.32 mg/L（26.9 µM） → 乘 2 倍萃取稀释得原液 53.8 µM → 余量评估：跨过 50 µM 门槛点亮共培养但余量偏薄 → 优化：接收端上限 400 µM，下一步强化发送端 PhCHS 扩宽余量

**答 (EN):**
1. **From our HPLC standard curve, the original culture broth contains 53.8 µM naringenin.** Specifically, the 17.1-minute peak (area ≈ 400, B9) plugs into $\text{Area} = 44052.04 \times C_{\text{g/L}} + 77.42$ ($R^2 = 0.99998$, B10) to give $0.00732\text{ g/L}$ ($7.32\text{ mg/L}$, $26.9\text{ µM}$) in the 1:1 ethanol extract, which doubles to $14.65\text{ mg/L}$ ($53.8\text{ µM}$) in the unextracted broth.
2. **That 53.8 µM clears EcN's 50 µM threshold (B11) and activates our 1:1 co-culture (B12), though the ~4 µM margin is narrow.**
3. Because EcN responds up to 400 µM (B11), sender synthesis is the rate-limiting step—we will widen this margin with a stronger promoter or higher expression of `PhCHS`.

**答（中）：**
1. **通过 HPLC 标准曲线换算，发酵原液中的柚皮素浓度为 53.8 µM。** 具体而言，将 B9 页 17.1 min 峰面积（约 400）代入 B10 页标曲 $\text{Area} = 44052.04 \times C_{\text{g/L}} + 77.42$（$R^2 = 0.99998$，$C$ 单位为 $\text{g/L}$），得 1:1 等体积乙醇萃取液浓度为 $0.00732\text{ g/L}$（$7.32\text{ mg/L}$，$26.9\text{ µM}$），再乘以 2 倍萃取稀释系数即为原液 $14.65\text{ mg/L}$（$53.8\text{ µM}$）。
2. **53.8 µM 跨过了 EcN 的 50 µM 激活阈值（B11），也成功点亮了 1:1 共培养（B12），但约 4 µM 的安全余量确实偏薄。**
3. 由于接收端响应上限高达 400 µM（B11），系统瓶颈在发送端合成量，下一步我们会换用更强启动子或提高限速酶 `PhCHS` 通量来拓宽余量。

**PPT 页码：** `B9`, `B10`, `B11`, `B12` · **题库索引：** `X05`

---

### M19 (原 Q26 + Q27). Did you measure naringenin in the co-culture, and what controls did you run?
**问：** 共培养里直接测柚皮素了吗？做了哪些对照（前体对香豆酸在敷料里怎么给）？  
**逻辑链：** 靠功能对照推断，未直接测共培养上清 HPLC → 相同 IPTG+对香豆酸（敷料内可预载）条件下两株单菌均不亮、仅 1:1 共培养发亮 → 下一步补“通路失活突变发送菌 + EcN”最严阴性对照

**答 (EN):**
1. **We demonstrated signaling functionally through controls rather than running HPLC directly on the co-culture supernatant.**
2. Under identical IPTG and *p*-coumaric acid conditions—with no added naringenin—neither BL21 alone nor EcN alone lit up, whereas the 1:1 co-culture fluoresced strongly (B12); in a real dressing, *p*-coumaric acid can be pre-loaded directly in the hydrogel.
3. Our strictest next control is co-culturing a pathway-inactivated sender mutant with EcN to rule out any non-naringenin cross-feeding.

**答（中）：**
1. **共培养中我们是通过平行对照功能验证的，没有直接对共培养上清做 HPLC。**
2. 在完全相同的 IPTG 和前体对香豆酸条件下（不外加柚皮素），BL21 单培养和 EcN 单培养都不发光，只有 1:1 共培养组显著发亮（B12）；在实际敷料中，对香豆酸可直接预载在水凝胶基质内。
3. 最严谨的补充阴性对照是“通路失活突变发送菌 + EcN”共培养，这是我们的下一步实验。

**PPT 页码：** `S4`, `B12` · **题库索引：** `X06`, `X07`

---

### M20 (原 Q29 + Q30). How does hydrophobic naringenin diffuse between strains, and how clean is FdeR's baseline and specificity?
**问：** 柚皮素偏疏水怎么在菌间扩散？B11 的本底（含 0 h 负值与 24 h 泄漏）和黄酮特异性如何？  
**逻辑链：** 50–400 µM 下水溶性够用，跨 40 µm 水凝胶仅需 ~3.2 s 即可穿膜激活 FdeR → B11 起点略负源于扣空菌自发荧光，24 h 0 µM 有基底泄漏需调 RBS 压低 → 创面白蛋白结合率与其他植物黄酮交叉反应待补测

**答 (EN):**
1. **At 50–400 µM, naringenin dissolves well enough in medium and hydrogel pores—crossing 40 µm in ~3.2 seconds in our diffusion model—and passively enters EcN to activate `FdeR` (B11, B12).**
2. **On Slide B11, the slightly negative 0 h value (`-1.94 RFU/OD600`) comes simply from subtracting wild-type EcN autofluorescence,** while the 24 h 0 µM readout reflects basal `PfdeAR` leakiness that we will tighten via RBS tuning.
3. We have not yet tested serum albumin binding in wound fluid or cross-activation by other flavonoids like apigenin and kaempferol—both are planned next.

**答（中）：**
1. **在 50–400 µM 工作区间内，柚皮素在培养基和水凝胶微孔中可顺畅扩散——模型计算穿过 40 µm 层间距仅需约 3.2 秒，随后被动穿膜进入 EcN 激活 `FdeR`（B11、B12）。**
2. **B11 页 0 小时出现轻微负值（`-1.94 RFU/OD600`），只是因为扣除了野生型 EcN 空菌自发荧光；** 而 24 小时 0 µM 组的读数属于 `PfdeAR` 的基底泄漏，下一轮将通过调低 RBS 强度压低本底。
3. 我们尚未测定创面血清白蛋白结合损耗，也还没测芹菜素、山奈酚等其他植物黄酮的交叉反应面板，这两项均在下一步测试计划中。

**PPT 页码：** `B3`, `B11`, `B12` · **题库索引：** `X01`, `X08`, `X12`

---

## 五、治疗输出模块 / Therapeutic Output Module

### M21 (原 Q31 + Q32). LSp222 kills 61% of *S. aureus* but also 25% of your sender—isn't that a problem, and how do you rule out LPS in crude extract?
**问：** LSp222 杀伤 61% 金葡菌但也使发送菌下降 25%，这不是问题吗？怎么排除粗提物里的 LPS 或杂蛋白？  
**逻辑链：** 61% vs 25% 是 >2.4 倍选择性窗口而非绝对免疫 → 正因有 25% 敏感度，才用双层水凝胶把两株菌物理隔开保护发送菌 → 已做 Ni-NTA 纯化（~30 kDa 纯酶），10.94 µg/mL 15 min 杀灭 64% 金葡菌，排除粗提物杂蛋白/LPS 干扰

**答 (EN):**
1. **Yes, that 25% drop in *S. epidermidis* is a real design constraint:** LSp222 provides a >2.4-fold selectivity window (61% *S. aureus* reduction vs. 25% *S. epidermidis* reduction in 30 minutes against matched buffer controls, B15), not complete immunity.
2. That 25% sensitivity is why our dressing places *S. epidermidis* and EcN in separate hydrogel layers, protecting the sender from high local LSp222 levels.
3. **To rule out crude-lysate proteins and LPS, we purified His-tagged LSp222 (~30 kDa) by Ni-NTA on Slide B16,** where 10.94 µg/mL of pure enzyme cleared 64% of *S. aureus* in 15 minutes.

**答（中）：**
1. **是的，表皮葡萄球菌下降 25% 确实是真实的设计约束：** LSp222 提供的是 >2.4 倍的选择性窗口（30 分钟内金葡菌降 61% vs 表皮葡萄球菌降 25%，均含同菌种缓冲液对照，B15），而非绝对免疫。
2. 正因为有这 25% 的敏感度，我们在敷料设计中才用双层水凝胶把两株菌物理隔开，防止发送菌直接暴露在高浓度裂解酶下。
3. **为排除粗提物杂蛋白和 LPS 干扰，我们在 B16 页用 Ni-NTA 纯化出了 ~30 kDa 的 LSp222 纯酶，** 10.94 µg/mL 低浓度在 15 分钟内即可清除 64% 金葡菌。

**PPT 页码：** `S5`, `B15`, `B16`

---

### M22 (原 Q33 + Q34). Why does hEGF show two bands (11.10 and 8.89 kDa), and did you show it is active on mammalian cells?
**问：** 为什么 hEGF 有两条带（11.10 和 8.89 kDa，比天然 6.2 kDa 大）？证明它对哺乳动物细胞有活性了吗？  
**逻辑链：** 两条带都带 Linker–6×His 标签：8.89 kDa 是切掉 PelB 信号肽的成熟体，11.10 kDa 是未切信号肽的前体（空载全无） → 目前仅 SDS-PAGE 证实胞外分泌与分子量，未测二硫键折叠与细胞活性 → 下一步补 His-tag Western 与角质细胞划痕实验

**答 (EN):**
1. **Both bands carry a `Linker–6xHis` tag: the lower 8.89 kDa band is mature cleaved `hEGF–Linker–6xHis`, and the upper 11.10 kDa band is the uncleaved `PelB–hEGF–Linker–6xHis` precursor.** Neither band appears in empty-vector controls (`V1/V2`) on 5× concentrated supernatant SDS-PAGE (B14).
2. **We have not yet tested mammalian cell bioactivity or disulfide-bond folding**—SDS-PAGE only confirms extracellular release and expected size.
3. Next, we will run an anti-His Western blot to confirm band identity and a HaCaT keratinocyte scratch assay to verify pro-healing activity.

**答（中）：**
1. **两条带末端都连有 `Linker–6×His` 标签（所以比天然 6.2 kDa 大）：下方 8.89 kDa 是切掉 `PelB` 信号肽后的成熟体 `hEGF–Linker–6×His`，上方 11.10 kDa 是未切信号肽的前体 `PelB–hEGF–Linker–6×His`。** 在 5 倍浓缩上清胶图（B14）中，空载对照（`V1/V2`）两条带全无。
2. **目前还没有测哺乳动物细胞活性与二硫键折叠**——SDS-PAGE 只证明了胞外分泌和分子量符合预期。
3. 下一步我们将补做 Anti-His Western blot 鉴定身份，并通过 HaCaT 角质形成细胞划痕/增殖实验验证修复活性。

**PPT 页码：** `S5`, `B14` · **题库索引：** `X10`

---

### M23 (原 Q35). Why use BL21(DE3) for naringenin and protein tests when the final chassis are *S. epidermidis* and EcN?
**问：** 最终底盘是表皮葡萄球菌和 EcN，为什么你们用 BL21 测柚皮素合成和治疗蛋白？  
**逻辑链：** 表皮葡萄球菌限制修饰屏障极强、大质粒极难转（Wiki freeze 时刚长出菌落正测序） → 不干等转化，并行用 BL21 先把合成通路和蛋白活性跑通 → 同时最终底盘也在推进（表皮葡萄球菌已跑通血红素传感和组成型 DspB 转入，EcN 已跑通柚皮素传感与 hEGF 载体构建）

**答 (EN):**
1. **Because *S. epidermidis* has a strong restriction barrier that makes plasmid transformation slow and difficult**—we worked on that transformation continuously, and colonies just appeared on our plates at Wiki freeze for sequencing (B19).
2. Rather than waiting idle on transformation, we used `BL21(DE3)` in parallel to verify that the genetic modules themselves work: confirming 53.8 µM naringenin synthesis (B9/B10), 1:1 co-culture activation of EcN (B12), and active `LSp222`/`hEGF` expression (B14–B16).
3. Meanwhile, in our final hosts, we have already validated heme sensing (`HmSr–sfGFP`) and `pBUS1–Pcap–DspB` delivery in *S. epidermidis* ATCC 12228 (B5, B7), plus naringenin sensing (`NrSr–sfGFP`) and `NrSr–PelB–hEGF` construction in EcN (B11, B17).

**答（中）：**
1. **因为表皮葡萄球菌具有严格的限制修饰屏障，大质粒极难转化进去**——我们一直在推进这项转化，在 Wiki freeze 时平板上刚长出菌落，目前正在测序（B19）。
2. 为了不在攻克底盘转化时干等，我们并行用易表达的 `BL21(DE3)` 先验证功能模块本身是通的：测通了 53.8 µM 柚皮素合成（B9/B10）、1:1 共培养点亮 EcN（B12）以及 `LSp222`/`hEGF` 蛋白活性（B14–B16）。
3. 同时最终底盘也取得了进展：表皮葡萄球菌 ATCC 12228 已跑通血红素传感与 `pBUS1–Pcap–DspB` 转入（B5、B7），EcN 已跑通柚皮素响应与 `NrSr–PelB–hEGF` 构建测序（B11、B17）。

**PPT 页码：** `B4`, `B5`, `B17`, `B19`

---

## 六、宿主选择、生物安全与临床转化 / Hosts, Biosafety, and Clinical Translation

### M24 (原 Q36 + Q37). Why use two strains instead of one, and will *S. epidermidis* and EcN coexist in a wound?
**问：** 为什么用两株菌分工而不是合在一株菌里？它们在伤口里能稳定共存吗？  
**逻辑链：** 单菌塞满四条回路代谢负担过重，拆成“皮肤菌感知破膜 + EcN 产蛋白”各展所长 → 敷料中分层水凝胶隔开（间距 ~40 µm），只通柚皮素不争地盘 → 液体短期 1:1 共培养已走通，水凝胶长期共存是下一步

**答 (EN):**
1. **Splitting the workload prevents metabolic overload:** *S. epidermidis* handles skin sensing and biofilm dispersal while EcN produces the therapeutic proteins, matching our metabolic burden model (B4).
2. **To keep one species from outcompeting the other, our dressing houses them in separate hydrogel layers (~40 µm apart)** so they exchange naringenin without competing directly for space.
3. So far we have verified short-term 1:1 BL21–EcN co-culture in liquid medium (B12); multi-day *S. epidermidis*–EcN coexistence inside layered hydrogel is our next test.

**答（中）：**
1. **双菌分工是为了避免单菌代谢过载：** 表皮葡萄球菌负责皮肤信号感知与破生物膜，EcN 负责高产治疗蛋白，这与我们的代谢负担模型结论一致（B4）。
2. **为防止两株菌互相竞争排斥，敷料设计将它们安置在上下独立的水凝胶层中（层间距约 40 µm），** 只互通柚皮素信号而不直接争抢空间。
3. 目前我们已在液体培养基中验证了短期 BL21–EcN 1:1 共培养（B12）；表皮葡萄球菌与 EcN 在分层水凝胶中的多日稳定共存是下一步实验。

**PPT 页码：** `S1`, `B4`, `B12` · **题库索引：** `THR.3`, `THR.6`

---

### M25 (原 Q38 + Q39 + Q41). How do you ensure the biosafety of using engineered live bacteria on a wound?
**问：** 你们如何保证工程活菌用于伤口时的生物安全性？  
**逻辑链：** 第一重物理隔离（分层水凝胶 + 半透膜放行蛋白、拦住活菌） → 第二重安全底盘（天然皮肤共生菌 ATCC 12228 + 临床益生菌 EcN，均为 BSL-1） → 第三重基因锁设计（D-丙氨酸营养缺陷自杀开关，目前处于设计阶段）

**答 (EN):**
1. **First, physical containment:** our dressing seals the bacteria inside layered hydrogels behind a semi-permeable membrane, allowing secreted proteins and small molecules to pass into the wound while blocking live cells.
2. **Second, safe BSL-1 hosts:** *S. epidermidis* ATCC 12228 is a non-pathogenic native human skin commensal, and *E. coli* Nissle 1917 is a clinically established probiotic (B4).
3. **Third, genetic kill-switch design:** for clinical translation, we designed a D-alanine auxotrophy kill-switch (`alr/dadX` and `dal/dat` knockouts, currently at the design stage) so any escaped cell outside the D-alanine hydrogel cannot build its cell wall and self-lyses.

**答（中）：**
1. **第一重，物理封装隔离：** 敷料用分层水凝胶和底部半透膜将工程菌封存在内部，只允许分泌蛋白和小分子透过半透膜进入创面，活菌无法逸出。
2. **第二重，安全 BSL-1 底盘：** 表皮葡萄球菌 ATCC 12228 是非致病的人体天然皮肤共生菌，EcN 是临床广泛使用的安全益生菌（B4）。
3. **第三重，基因自杀开关设计：** 面向临床转化，我们设计了 D-丙氨酸营养缺陷型自杀开关（敲除 `alr/dadX` 与 `dal/dat`，目前处于设计阶段），一旦细菌脱离含 D-丙氨酸的敷料基质便无法合成细胞壁而自溶。

**PPT 页码：** `S1`, `S6`, `B4` · **题库索引：** `X13`, `THR.6`, `THR.8`

---

### M26 (原 Q40). How many biological replicates and what statistical definitions did you use?
**问：** 实验包含多少次独立生物学重复？误差棒和拟合曲线代表什么？  
**逻辑链：** EcN 剂量响应（B11）与 LSp222 杀菌（B15）为 n=3 独立生物学重复（每组含 2 个技术复孔，mean ± SD） → 血红素传感与生长（B7/B8）为 n=2–3 独立重复，虚线为样条平滑趋势线 → 共培养（B12）为定性显微荧光对比

**答 (EN):**
1. **The EcN dose-response (B11) and LSp222 lysis assays (B15) use $n = 3$ independent biological cultures**—each averaging 2 technical duplicate wells—plotted as mean ± SD.
2. **The hemin sensing and growth curves (B7, B8) use $n = 2\text{–}3$ biological replicates,** with shaded bands showing replicate spread and dashed lines showing spline-interpolated trends.
3. The 1:1 co-culture on Slide B12 is qualitative fluorescence microscopy across matched controls rather than a quantitative plate-reader time course.

**答（中）：**
1. **EcN 剂量响应（B11）与 LSp222 裂解实验（B15）均采用 $n = 3$ 次独立生物学重复**（每次含 2 个技术复孔取均值），误差棒代表标准差（mean ± SD）。
2. **血红素传感与生长曲线（B7、B8）采用 $n = 2\text{–}3$ 次独立生物学重复，** 阴影带表示重复间波动，虚线为辅助观察峰值的样条插值趋势线。
3. B12 页的 1:1 共培养目前为平行对照条件下的定性荧光显微成像，尚未做酶标仪连续定量曲线。

**PPT 页码：** `B7`, `B8`, `B11`, `B12`, `B15` · **题库索引：** `X04`

---

## 七、收尾综合与下一步路线图 / Closing & Three-Month Roadmap

### M27 (原 Q42 + Q43 + Q47). What is the biggest weakness / most feared question, and what would you do with three more months?
**问：** 项目目前最大的弱点（或最怕被问的问题）是什么？如果多三个月会按什么顺序推进？  
**逻辑链：** 最大短板在表皮葡萄球菌发送端的两处交接（上清 DspB 蛋白未直接检出 + 大质粒刚出转化菌落正测序） → 前两步先完成转化菌落测序诱导与上清 DspB Western → 第三步带失活对照跑通“表皮葡萄球菌→EcN”最终双菌全链路

**答 (EN):**
1. **Our biggest gap is completing the final handoffs in *S. epidermidis*:** we have not yet detected secreted DspB protein in *S. epidermidis* supernatant (B18), and our inducible/naringenin sender plasmids just yielded transformant colonies at Wiki freeze for sequencing (B19).
2. **With three more months, we will first finish sequencing and AIP-induction tests on those *S. epidermidis* colonies,** and run an anti-His Western blot plus biofilm assay on concentrated ATCC 12228 supernatant.
3. **Finally, we will pair the completed *S. epidermidis* sender with our EcN receiver**—alongside a pathway-dead sender control—to test the full heme-to-therapy relay end to end.

**答（中）：**
1. **目前最大的短板在于表皮葡萄球菌发送端的最后两处交接：** 一是还没在表皮葡萄球菌上清里直接检出分泌的 DspB 蛋白（B18），二是诱导型与柚皮素合成大质粒在 Wiki freeze 时刚长出转化菌落、正在测序（B19）。
2. **如果再有三个月，前两步优先完成 Wiki freeze 转化菌落的测序与 AIP 诱导验证，** 同时浓缩 ATCC 12228 上清补齐 Anti-His Western blot 和上清破膜实验。
3. **第三步，加入通路失活突变对照，将表皮葡萄球菌发送菌与 EcN 接收菌正式配对，** 跑通从血红素输入到治疗蛋白输出的完整双菌接力。

**PPT 页码：** `S6`, `B17`, `B18`, `B19`
