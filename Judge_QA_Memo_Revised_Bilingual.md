# Judge Q&A Memo — Direct, Honest & Concise Edition

**SJTU-BioX-Shanghai 2026 · Dual-Armor System**  
Aligned to `Wetlab_final01-SEPv1_修复版.pptx` (`S1–S6`, `INDEX`, `B1–B19`), Project Wiki, and the 36-Session / 367-Question Best Part Collection Q&A Database.

---

## 核心应答原则 / Core Rules

1. **开门见山（Zero Question Restatement）**：第一句直接给结论、原因或数字（`Yes` / `No` / `Because...` / `13 core constructs...`），**绝不复述评委的问题，绝不说套话铺垫**。
2. **诚实交代工程难点与真实进展**：表皮葡萄球菌（*S. epidermidis*）比大肠杆菌更难改造、质粒极难转化；我们一直在推进转化实验，**在 Wiki freeze 时转化平板上已经长出菌落，目前正在测序**。
3. **三句话结构**：`[1] 直接结论/原因` → `[2] 已拿到的实测数据与页码` → `[3] 当前进度与下一步实验`。

---

## 30 秒总框架 / The 30-Second Frame

> **EN:** "Two engineered bacteria work in relay against *S. aureus* wound biofilms: *S. epidermidis* senses infection signals, disperses biofilm with DspB, and synthesizes naringenin; *E. coli* Nissle 1917 senses naringenin and delivers LSp222 and hEGF. Our Part Collection is the naringenin relay in the middle—other teams keep the relay fixed and swap the input sensor or output cargo."

> **中：** "两株工程菌接力清除金黄色葡萄球菌创面生物膜：表皮葡萄球菌感知感染信号、分泌 DspB 破除生物膜并合成柚皮素；大肠杆菌 Nissle 1917（EcN）读取柚皮素并输出 LSp222 与 hEGF。我们的 Part Collection 就是中间这条柚皮素接力——其他队伍固定中间接力不变，只换输入传感器或输出载荷。"

---

## 一、Collection 与 BPC 核心问答 / Collection and BPC

### M1 (原 Q1). What is your collection, in one sentence?
**问：** 用一句话说，你们的 collection 是什么？  
**答 (EN):** "A naringenin-mediated inter-bacterial communication relay: one strain synthesizes naringenin via `At4CL–PhCHS–CmCHI`, and the second strain detects it via `FdeR/PfdeAR` to turn on any downstream cargo. Teams keep the middle relay fixed and swap the upstream sensor or downstream therapeutic gene."  
**答（中）：** "一条基于柚皮素的细菌间通讯接力：一株菌用三酶通路（`At4CL–PhCHS–CmCHI`）合成柚皮素，另一株菌用 `FdeR/PfdeAR` 读取柚皮素并开启下游基因。其他团队固定中间的接力不变，只替换上游传感器或下游治疗载荷。"  
**证据 / Evidence:** `B1`, `B2`, `B17`.

---

### M2 (原 Q3 + Q46). How many parts are in the collection, and which ones are functionally validated?
**问：** 你们的 collection 里有多少个 part？怎么证明它们是真的？  
**答 (EN):** "13 core constructs and 4 auxiliary test constructs on Slide B17—while the Wiki lists 38 Registry entries because it also counts each basic part (`At4CL`, `PhCHS`, `CmCHI`, `FdeR`, `PelB`, `sfGFP`) inside those constructs. Functionally validated modules include the heme reporter (`HmSr–sfGFP`, B7/B8), the naringenin pathway (`T7/Pcap–Nr`, B9/B10), the EcN receiver (`NrSr–sfGFP`, B11), the 1:1 co-culture relay (B12), and `LSp222`/`hEGF` expression in BL21 (B14–B16); the remaining target-host constructs are built and sequenced or undergoing transformation."  
**答（中）：** "13 个核心复合构建体加 4 个辅助测试构建体（见 B17 页）；Wiki 列出 38 个条目是因为把构建体内部的每个基础元件（`At4CL`、`PhCHS`、`CmCHI`、`FdeR`、`PelB` 等）也单独登记了。已拿到功能数据的包括：血红素报告（`HmSr–sfGFP`，B7/B8）、柚皮素合成（`T7/Pcap–Nr`，B9/B10）、EcN 接收报告（`NrSr–sfGFP`，B11）、1:1 共培养（B12）以及 `LSp222`/`hEGF` 蛋白输出（B14–B16）；其余目标底盘构建体已完成测序或正在转化中。"  
**证据 / Evidence:** `B17`.

---

### M3 (原 Q2 + Q28). What is actually new here? FdeR and naringenin are already known.
**问：** 这里真正新的是什么？FdeR 和柚皮素都不是新东西。  
**答 (EN):** "Using naringenin as an extracellular cell-to-cell signal between two bacterial species in a therapeutic consortium, rather than as an intracellular metabolite sensor inside one cell. Prior work like Xiu et al. (2017) used a riboswitch to screen naringenin production intracellularly; we turned naringenin into a diffusible sender-to-receiver cable between a skin commensal and a probiotic receiver, and packaged it as a swappable toolkit."  
**答（中）：** "把柚皮素用作两株工程菌之间的胞外跨菌通讯信号，而不是单株菌胞内的代谢物探针。2017 年 Xiu 等人曾用核糖开关在胞内筛选柚皮素产量；我们则将柚皮素拓展为连接皮肤共生发送菌与益生菌接收菌的可扩散信使，并封装成两端可替换的工具箱。"  
**证据 / Evidence:** `S4`, `B2`, `B3`.

---

### M4 (原 Q4 + Q7). Which parts are assembly-compatible, and how do you handle attribution for borrowed parts?
**问：** 哪些元件符合组装标准？你们怎么处理其他队伍元件的归属？  
**答 (EN):** "Untagged `NrSr–hEGF` is RFC10-compatible and `T7–Nr` is RFC1000-compatible, whereas the four His-tagged `PelB` fusions contain internal restriction sites and use Gibson or Type IIS assembly. For attribution, every Registry page lists the exact ancestor ID: `FdeR` from AISSU_Union 2021 (`BBa_K4012026`), `PelB` from TJUSLS-China 2024 (`BBa_K5292306`), and `AgrCA–P2/P3` from our 2025 team (`BBa_25NOD1M0` / `BBa_25DXVP8T`)."  
**答（中）：** "无标签版 `NrSr–hEGF` 符合 RFC10、`T7–Nr` 符合 RFC1000，而 4 个带 `PelB` 与 `6×His` 的融合构建体因含内部酶切位点采用 Gibson 或 Type IIS 组装。在归属上，所有 Registry 词条均直接标明祖先编号：`FdeR` 来自 AISSU_Union 2021（`BBa_K4012026`），`PelB` 来自 TJUSLS-China 2024（`BBa_K5292306`），`AgrCA–P2/P3` 来自本队 2025 年工作。"  
**证据 / Evidence:** `B17`; Wiki Parts page.

---

### M5 (原 Q5 + Q45). What can another team do with this collection tomorrow?
**问：** 别的队伍拿到你们的 collection 可以怎么复用？  
**答 (EN):** "Transform `NrSr–sfGFP` into their receiver strain to verify naringenin response, pair it with our `Nr` sender, and then replace either the upstream promoter or downstream cargo. For example, a gut team can put a thiosulfate (`ThsSR`) or nitric-oxide (`NorR`) promoter upstream of `Nr` and `IL-10` or `TFF3` downstream of `NrSr`; a burn-wound team can swap in a *Pseudomonas* quorum-sensing promoter and a pyocin."  
**答（中）：** "先把 `NrSr–sfGFP` 转入他们的接收菌验证柚皮素响应，配对 `Nr` 发送端，然后只换上游启动子或下游载荷。例如：肠道团队可在 `Nr` 上游换入硫代硫酸盐（`ThsSR`）或一氧化氮（`NorR`）启动子、在 `NrSr` 下游换入 `IL-10` 或 `TFF3`；烧伤团队则可换入铜绿假单胞菌群体感应启动子与绿脓菌素。"  
**证据 / Evidence:** `B2`, `B12`, `B17`.

---

### M6 (原 Q6). Why is DspB not in the core Part Collection?
**问：** 为什么 DspB 不在核心 Part Collection 里？  
**答 (EN):** "Because the collection is strictly the naringenin communication toolkit, while DspB is a separate biofilm-dispersal module carried on staphylococcal shuttle plasmids (`pBUS1` and `pLI50`). Keeping DspB separate lets other teams reuse the signaling relay without importing staphylococcal-specific vectors (documented separately on B5, B6, B13, B18, and B19)."  
**答（中）：** "因为 Collection 专指柚皮素跨菌通讯工具箱，而 DspB 是搭载在葡萄球菌穿梭质粒（`pBUS1` 和 `pLI50`）上的独立破膜模块。将两者分开，其他队伍复用通讯接力时就不必连带引入葡萄球菌专用载体（DspB 单独在 B5、B6、B13、B18、B19 页展示）。"  
**证据 / Evidence:** `B2`, `B5`, `B17`, `B18`.

---

### M7 (原 Q44). Why should this project win Best Part Collection?
**问：** 为什么这个项目应该拿 Best Part Collection？  
**答 (EN):** "Because it provides a working inter-bacterial communication bus rather than an isolated list of parts. We demonstrated sender synthesis (53.8 µM, B9/B10), receiver dose-response (50–400 µM, B11), 1:1 co-culture activation without external inducer (B12), and two therapeutic cargos (B14–B16), giving future teams a ready-to-wire multi-strain relay."  
**答（中）：** "因为它提供的是一条已经跑通的跨菌通讯总线，而不是孤立的元件列表。我们验证了发送端合成（53.8 µM，B9/B10）、接收端剂量响应（50–400 µM，B11）、无外源添加的 1:1 共培养点亮（B12）以及两个治疗输出（B14–B16），后续团队拿来就能改造成新的双菌系统。"  
**证据 / Evidence:** `B2`, `B9–B12`, `B17`.

---

## 二、DspB 与生物膜模块 / DspB and Biofilm Module

### M8 (原 Q8). Did you show that your engineered strain secretes DspB?
**问：** 你们证明了自己的工程菌分泌 DspB 吗？  
**答 (EN):** "No, we have not yet detected DspB protein in the engineered supernatant. What we have shown are three steps: `Sec/SPII–DspB–6xHis` matches 965/971 bp by Sanger sequencing (99% identity, B6), constitutive `pBUS1–Pcap–DspB` has been transferred into *S. epidermidis* ATCC 12228 and confirmed by colony PCR (B5), and commercial DspB removes >84% of mature *S. aureus* biofilm in 18 hours (B13). Next, we will concentrate the ATCC 12228 supernatant for an anti-His Western blot and a conditioned-medium biofilm assay (B18)."  
**答（中）：** "还没有在工程菌上清里直接测到 DspB 蛋白。目前已证明三件事：`Sec/SPII–DspB–6xHis` 测序 965/971 bp 匹配（99% 一致，B6）、组成型 `pBUS1–Pcap–DspB` 已转入表皮葡萄球菌 ATCC 12228 并经菌落 PCR 确认（B5）、商业 DspB 在 18 h 内清除 >84% 的成熟金葡菌生物膜（B13）。下一步是超滤浓缩 ATCC 12228 上清，做 Anti-His Western blot 与上清破膜活性测试（B18）。"  
**证据 / Evidence:** `B5`, `B6`, `B13`, `B18`.

---

### M9 (原 Q9 + Q10). What did your biofilm assay prove, and does crystal violet distinguish dispersal from killing?
**问：** 生物膜实验具体证明了什么？结晶紫能区分“分散基质”与“杀菌”吗？  
**答 (EN):** "It proves that DspB disperses >84% of pre-formed, mature *S. aureus* biofilm biomass in 18 hours (OD590 drops from ~0.6 to ~0.1, B13), not that DspB kills the bacteria. Crystal violet stains total retained biomass (matrix plus cells); because DspB is a PNAG glycoside hydrolase, it detaches the biofilm matrix while downstream killing is handled by our lysin LSp222."  
**答（中）：** "它证明 DspB 能在 18 小时内瓦解并剥离 >84% 预先成熟的四期金葡菌生物膜生物量（OD590 从 ~0.6 降至 ~0.1，B13），而不是杀灭细菌。结晶紫测的是残留总生物量（基质加细胞）；DspB 作为 PNAG 多糖水解酶负责把生物膜基质切开剥离，后续杀菌由下游裂解酶 LSp222 完成。"  
**证据 / Evidence:** `S2`, `B13`, `B18`.

---

### M10 (原 Q11 + Q12). Did you show AIP induction of DspB, and why use AIP induction instead of constitutive DspB?
**问：** 你们证明 AIP 诱导 DspB 了吗？为什么不用组成型 DspB？  
**答 (EN):** "Not yet—the upstream `AgrCA–P2/P3` sensor was validated with GFP by our 2025 team, and this year we replaced GFP with `Sec/SPII–DspB` and confirmed the sequence, but transforming the large `pLI50–AgrCA–P2/P3–DspB` plasmid into *S. epidermidis* ATCC 12228 is difficult; colonies appeared on our transformation plates at Wiki freeze and are now being sequenced (B19). We use AIP induction so DspB is expressed only when *S. aureus* is present, while keeping constitutive `pBUS1–Pcap–DspB` (already in ATCC 12228) as our positive control for secretion assays."  
**答（中）：** "还没有完成诱导测试——上游 `AgrCA–P2/P3` 传感器在 2025 年已用 GFP 验证过，今年我们换上 `Sec/SPII–DspB` 并测序正确，但将 `pLI50–AgrCA–P2/P3–DspB` 大质粒转入表皮葡萄球菌 ATCC 12228 难度很大；在 Wiki freeze 时转化平板上已经长出菌落，目前正在测序验证（B19）。设计 AIP 诱导是为了只在有金葡菌感染时才产酶，同时用已转入 ATCC 12228 的组成型 `pBUS1–Pcap–DspB` 作为分泌测定的阳性对照。"  
**证据 / Evidence:** `B5`, `B19`.

---

### M11 (原 Q13). *S. aureus* has four *agr* groups. Will your AIP sensor respond to clinical isolates?
**问：** 金黄色葡萄球菌有四个 *agr* 亚群，你们的 AIP 传感器能响应不同临床分离株吗？  
**答 (EN):** "Our current receptor is specific to *S. aureus* *agr* group I, the most common group in skin infections, and we have not yet tested a clinical isolate panel across *agr* II–IV. Because all four groups share the same AgrA regulator and P2/P3 promoter, covering other *agr* groups only requires swapping the transmembrane receptor AgrC upstream of P2/P3."  
**答（中）：** "当前受体针对皮肤感染最常见的金葡菌 *agr* I 型，尚未测试覆盖 *agr* II–IV 的临床分离株面板。由于四个亚群共用保守的 AgrA 转录因子与 P2/P3 启动子，针对其他流行亚群只需在 P2/P3 上游替换对应的跨膜受体 AgrC。"  
**证据 / Evidence:** `B5`, `B19`.

---

### M12 (原 Q14). DspB targets PNAG, which *S. epidermidis* also makes. Will it damage your own sender?
**问：** DspB 靶向 PNAG，而表皮葡萄球菌也产 PNAG，它会破坏你们自己的发送菌吗？  
**答 (EN):** "It may disperse *S. epidermidis* extracellular PNAG matrix, which we have not yet assayed directly, but it does not kill the cells because DspB only cleaves β-1,6-GlcNAc polysaccharides rather than cell-wall peptidoglycan. In addition, our sender is physically immobilized inside the hydrogel layer rather than relying on self-biofilm to stay in place, and AIP induction restricts DspB production to infection sites."  
**答（中）：** "它可能会分散表皮葡萄球菌的胞外 PNAG 基质（这一点我们尚未单独实测），但不会杀死发送菌，因为 DspB 只水解胞外多糖而不破坏细胞壁肽聚糖。此外，发送菌靠水凝胶网格物理固定，不需要靠自身生物膜定植，且 AIP 诱导能将产酶限制在感染期；下一步我们会补测同剂量 DspB 对表皮葡萄球菌生物膜与活菌数的影响。"  
**证据 / Evidence:** `B13`, `B18`.

---

### M13 (原 Q15 + Q16). What about non-PNAG biofilm components (eDNA, proteins) and DspB dose-response?
**问：** 生物膜基质还有 eDNA 和蛋白，单靠 DspB 够吗？做过剂量梯度吗？  
**答 (EN):** "In a polymicrobial clinical wound, DspB alone may not be enough and may need DNase or a protease partner; our >84% clearance was measured on a single-species mature *S. aureus* biofilm at a fixed DspB concentration over 18 hours (B13). We have not yet run a DspB dose-response titration to find the minimum effective dose, which is our next experiment."  
**答（中）：** "在真实临床混合生物膜中，单靠 DspB 可能不够，常需搭配 DNase 或蛋白酶；我们的 >84% 清除率是在实验室成熟金葡菌单菌生物膜、固定 DspB 浓度、18 小时条件下测得的（B13）。我们还没有做 DspB 浓度梯度滴定来确定最小有效剂量，这是下一步实验。"  
**证据 / Evidence:** `B13`, `B18`.

---

## 三、血红素发送端 / Heme Sender Module

### M14 (原 Q17 + Q20 + Q21). Is HssRS native to *S. epidermidis*, and how does it work under wound heme scavenging?
**问：** HssRS 是表皮葡萄球菌天然的吗？金葡菌会掠夺血红素且血红素常与蛋白结合，如何维持有效输入？  
**答 (EN):** "Yes, HssRS is native to *S. epidermidis*—we only introduced the `pHrtBA` promoter. In pure hemin titration, it peaks at ~1.7 hours at 1 µM and ~2.3 hours at 2.5 µM while maintaining healthy sender growth (B7/B8), but we have not yet measured free heme in wound exudate where hemoglobin binding and *S. aureus* Isd scavenging occur; testing hemoglobin-spiked wound fluid is our next step."  
**答（中）：** "是的，HssRS 是表皮葡萄球菌天然的内源双组分系统，我们只引入了 `pHrtBA` 启动子。在纯血红素测试中，1 µM 在 ~1.7 h 达峰、2.5 µM 在 ~2.3 h 达峰且发送菌生长良好（B7/B8）；但我们还没测真实伤口渗出液中的游离血红素（存在血红蛋白结合与金葡菌 Isd 蛋白抢夺），下一步将在含血红蛋白的人工伤口液中补测。"  
**证据 / Evidence:** `S3`, `B7`, `B8`.

---

### M15 (原 Q18). The heme response is transient (~1.7–2.3 h peak). Is that a problem for a therapeutic relay?
**问：** 血红素响应是瞬时的（1.7–2.3 小时达峰），这对治疗接力是问题吗？  
**答 (EN):** "A transient pulse prevents metabolic exhaustion and heme toxicity in the sender once the HrtBA efflux pump clears intracellular heme, while the synthesized naringenin remains chemically stable in the medium to activate the EcN receiver over 24 hours (B11)."  
**答（中）：** "瞬时脉冲反而能防止发送菌在 HrtBA 外排泵排空胞内血红素后继续过载耗能，而脉冲期合成并分泌到胞外的柚皮素化学性质稳定，可在随后 24 小时内持续激活 EcN 接收端（B11）。"  
**证据 / Evidence:** `B7`, `B11`.

---

### M16 (原 Q19). Did hemin affect growth? Could the fluorescence signal be a growth artifact?
**问：** 血红素影响细菌生长吗？荧光升高会不会只是生长假象？  
**答 (EN):** "No, because we measured OD600 separately on Slide B8 and normalized all fluorescence values by OD600 relative to the 0 µM control. At 1–2.5 µM hemin, *S. epidermidis* grows above the untreated control while *S. aureus* growth is reduced; at ≥10 µM hemin, growth is inhibited and normalized fluorescence stays flat near zero."  
**答（中）：** "不是生长假象，因为我们在 B8 页单独测了 OD600 生长曲线，并将所有荧光按 OD600 归一化后扣除 0 µM 对照。在 1–2.5 µM 下，表皮葡萄球菌生长高于未处理对照，而金葡菌生长受抑；在 ≥10 µM 高浓度下生长受限，归一化荧光贴近零线。"  
**证据 / Evidence:** `B7`, `B8` (`X02`).

---

## 四、柚皮素跨菌通讯接力 / Naringenin Relay Module

### M17 (原 Q22). Why choose naringenin over known quorum-sensing molecules or other plant metabolites?
**问：** 为什么选柚皮素，而不用常见群体感应分子或其他候选物？  
**答 (EN):** "Three reasons (Slide B3): first, low background because naringenin is a plant flavonoid absent from skin microbiome metabolism; second, dedicated `FdeR/PfdeAR` reception with no crosstalk against staphylococcal AIP; third, intrinsic anti-inflammatory and pro-healing activity. We rejected DAPG because it inhibits our hosts, salicylate because it interferes with host wound signaling, and IAA because bacteria produce it endogenously."  
**答（中）：** "三个原因（见 B3 页）：第一，本底低，它是皮肤菌群与人体不合成的植物黄酮；第二，有专用受体 `FdeR/PfdeAR`，不与金葡菌 AIP 串扰；第三，自带抗炎与促创面愈合活性。我们排除了抑制宿主的 DAPG、干扰人体炎症信号的水杨酸、以及细菌自身会副产的 IAA。"  
**证据 / Evidence:** `B3` (`X14`).

---

### M18 (原 Q23 + Q24 + Q25). How did you calculate 53.8 µM naringenin, and is that margin over the 50 µM threshold robust?
**问：** 53.8 µM 的柚皮素原液浓度是怎么算出来的？略高于 50 µM 阈值够稳健吗？  
**答 (EN):** "53.8 µM is just over the 50 µM threshold—it worked in our 1:1 co-culture (B12), but the margin is thin and the sender pathway is our rate-limiting step. For the calculation: the 17.1-minute HPLC peak (area ≈ 400, B9) gives 7.32 mg/L (26.9 µM) in the 1:1 ethanol-extracted vial via our standard curve ($\text{Area} = 44052.04 \times C + 77.42$, $R^2 = 0.99998$, B10), which doubles to 14.65 mg/L (53.8 µM) in the original broth. Because the EcN receiver responds up to 400 µM (B11), we can widen this margin by using a stronger promoter or increasing `PhCHS` flux."  
**答（中）：** "53.8 µM 确实只比 50 µM 阈值高一点——它在 1:1 共培养里跑通了（B12），但余量较薄，限速步在发送端合成量。计算过程是：B9 页 17.1 min 峰面积（约 400）代入 B10 页标曲（$\text{Area} = 44052.04 \times C + 77.42$，$R^2 = 0.99998$），算出 1:1 等体积乙醇萃取进样瓶浓度为 7.32 mg/L（26.9 µM），乘以 2 倍萃取稀释系数即得原上清 14.65 mg/L（53.8 µM）。由于接收端响应上限达 400 µM（B11），下一步可通过强化启动子或提升限速酶 `PhCHS` 通量来扩大余量。"  
**证据 / Evidence:** `B9`, `B10`, `B11`, `B12` (`X05`).

---

### M19 (原 Q26 + Q27). Did you measure naringenin in the co-culture, and what controls did you run?
**问：** 共培养里直接测柚皮素了吗？做了哪些对照排除其他因素？  
**答 (EN):** "We inferred it rather than measuring HPLC directly on the co-culture supernatant. We ran both monoculture controls—BL21 alone and EcN alone—under the exact same IPTG and *p*-coumaric acid conditions without exogenous naringenin, and only the 1:1 co-culture lit up brightly (B12). The cleanest additional negative control is a pathway-dead sender mutant in co-culture, which we plan to run next."  
**答（中）：** "共培养里是通过对照推断的，没有直接对共培养上清测 HPLC。我们在完全相同的 IPTG 和对香豆酸条件下（不加外源柚皮素）做了 BL21 单培养和 EcN 单培养两个对照，只有 1:1 共培养组显著发亮（B12）。最严谨的补充阴性对照是“通路失活突变体发送菌 + EcN”共培养，这是我们的下一步实验。"  
**证据 / Evidence:** `S4`, `B12` (`X06`, `X07`).

---

### M20 (原 Q29 + Q30). How does hydrophobic naringenin diffuse between strains, and is FdeR specific against other flavonoids?
**问：** 柚皮素疏水怎么在菌间扩散？FdeR 会被其他植物黄酮误激活吗？  
**答 (EN):** "At 50–400 µM it diffuses across our medium and hydrogel pores (crossing 40 µm in ~3.2 s in our reaction-diffusion model) and passively crosses the EcN membrane to activate intracellular FdeR (B11/B12), though we have not yet measured serum albumin binding in wound fluid. We also have not yet tested FdeR against a panel of other plant flavonoids like apigenin or kaempferol, and reducing the 0 µM basal leakiness on B11 is part of our next optimization cycle."  
**答（中）：** "在 50–400 µM 范围内，它能在培养基和水凝胶微孔中扩散（模型计算穿过 40 µm 层间距约需 3.2 s）并被动穿膜激活 EcN 胞内的 FdeR（B11/B12），但我们尚未测定创面血清白蛋白结合率。同时我们也还没测试芹菜素、山奈酚等其他植物黄酮的交叉反应面板，并将在下一轮优化中压低 B11 页 0 µM 时的本底泄漏。"  
**证据 / Evidence:** `B3`, `B11`, `B12` (`X08`, `X12`).

---

## 五、治疗输出模块 / Therapeutic Output Module

### M21 (原 Q31 + Q32). LSp222 kills 61% of *S. aureus* but also 25% of your sender—isn't that a problem, and how do you rule out LPS in crude extract?
**问：** LSp222 杀伤 61% 金葡菌但也使发送菌下降 25%，这不是问题吗？怎么排除粗提物里的 LPS 或杂蛋白？  
**答 (EN):** "Yes, 25% activity against *S. epidermidis* is a real design constraint—it gives us a >2.4-fold selectivity window (61% vs 25% in 30 min with species-matched TBS controls, B15), not absolute specificity, which is why we physically separate the two strains in different hydrogel layers. To rule out crude-lysate host proteins and LPS, we purified His-tagged LSp222 (~30 kDa) by Ni-NTA on Slide B16 and showed 64% *S. aureus* OD600 reduction in 15 minutes at 10.94 µg/mL."  
**答（中）：** "是的，对表皮葡萄球菌 25% 的下降确实是设计约束——它提供的是 >2.4 倍的选择性窗口（30 min 内金葡菌降 61% vs 表皮葡萄球菌降 25%，含同菌种 TBS 对照，B15）而非绝对特异，这也是我们用双层水凝胶把两株菌物理隔开的原因。为排除粗提物杂蛋白与 LPS 干扰，我们在 B16 页用 Ni-NTA 纯化出 ~30 kDa 的 LSp222 纯酶，在 10.94 µg/mL 下 15 分钟即清除 64% 金葡菌。"  
**证据 / Evidence:** `S5`, `B15`, `B16`.

---

### M22 (原 Q33 + Q34). Why does hEGF show two bands (11.10 and 8.89 kDa), and did you show it is active on mammalian cells?
**问：** 为什么 hEGF 有两条带（11.10 和 8.89 kDa）？证明它对哺乳动物细胞有活性了吗？  
**答 (EN):** "The lower 8.89 kDa band is mature hEGF after `PelB` signal-peptide cleavage, and the upper 11.10 kDa band is the uncleaved `PelB–hEGF` precursor; neither band appears in the empty-vector controls (`V1/V2`, B14). We have only shown secretion and molecular weight by SDS-PAGE, not mammalian cell activity or disulfide folding—a keratinocyte scratch/proliferation assay and anti-His Western blot are our next steps."  
**答（中）：** "下方 8.89 kDa 是切除 `PelB` 信号肽后的成熟 hEGF，上方 11.10 kDa 是未切除信号肽的 `PelB–hEGF` 前体，空载对照（`V1/V2`）两条带都没有（B14）。目前我们只通过 SDS-PAGE 证明了蛋白分泌与分子量，还没有测哺乳动物细胞活性与二硫键折叠——下一步是做 Anti-His Western blot 和角质形成细胞划痕/增殖实验。"  
**证据 / Evidence:** `S5`, `B14` (`X10`).

---

### M23 (原 Q35). Why use BL21(DE3) for naringenin and protein tests when the final chassis are *S. epidermidis* and EcN?
**问：** 最终底盘是表皮葡萄球菌和 EcN，为什么你们用 BL21 测柚皮素合成和治疗蛋白？  
**答 (EN):** "Because *S. epidermidis* is much harder to engineer than *E. coli* and plasmids are difficult to transform into it—we have been working on that transformation continuously, and right at Wiki freeze colonies appeared on our transformation plates and are now being sequenced. While pushing through that transformation bottleneck, we used `BL21(DE3)` in parallel to verify that the constructs themselves work (53.8 µM naringenin synthesis on B9/B10, 1:1 co-culture relay to EcN on B12, and LSp222/hEGF expression on B14–B16). In the final chassis, we have already validated `HmSr–sfGFP` and `pBUS1–Pcap–DspB` delivery in *S. epidermidis* ATCC 12228 (B5/B7) and `NrSr–sfGFP` plus `NrSr–PelB–hEGF` construction in EcN (B11/B17)."  
**答（中）：** "因为表皮葡萄球菌比大肠杆菌难改造得多，质粒极难转化进去——这项转化我们一直在做，在 Wiki freeze 时我们的转化平板上已经长出了菌落，目前正在测序。为了在攻克底盘转化的同时先验证构建体本身的功能，我们并行用易表达的 `BL21(DE3)` 测通了柚皮素合成（53.8 µM，B9/B10）、1:1 共培养点亮 EcN（B12）以及 `LSp222/hEGF` 蛋白活性（B14–B16）。在最终底盘里，表皮葡萄球菌已跑通血红素传感与 `pBUS1–Pcap–DspB` 转入（B5/B7），EcN 已跑通柚皮素接收与 `NrSr–PelB–hEGF` 构建测序（B11/B17）。"  
**证据 / Evidence:** `B4`, `B5`, `B17`, `B19`.

---

## 六、宿主选择、生物安全与临床转化 / Hosts, Biosafety, and Clinical Translation

### M24 (原 Q36 + Q37). Why use two strains instead of one, and will *S. epidermidis* and EcN coexist in a wound?
**问：** 为什么用两株菌分工而不是合在一株菌里？它们在伤口里能稳定共存吗？  
**答 (EN):** "To divide the work and reduce metabolic burden: *S. epidermidis* senses heme and AIP on the skin and disperses biofilm, while EcN synthesizes the therapeutic proteins, as supported by our metabolic burden model (B4). We have only tested short-term 1:1 BL21–EcN co-culture so far, not long-term *S. epidermidis*–EcN coexistence; in our dressing, the two strains are kept in separate hydrogel layers divided by a semi-permeable membrane so they communicate via naringenin without direct competition."  
**答（中）：** "为了实现分工并减轻单菌代谢负担：表皮葡萄球菌负责感知信号与破生物膜，EcN 负责合成治疗蛋白，我们的代谢负担模型也支持这一选择（B4）。目前我们只测了短期的 BL21–EcN 1:1 共培养，还没测表皮葡萄球菌与 EcN 的长期共存；在敷料设计中，两株菌被半透膜分隔在上下不同水凝胶层中，只靠柚皮素通讯而不直接争抢营养。"  
**证据 / Evidence:** `S1`, `B4`, `B12` (`THR.3`, `THR.6`).

---

### M25 (原 Q38 + Q39 + Q41). How do you ensure the biosafety of using engineered live bacteria on a wound?
**问：** 你们如何保证工程活菌用于伤口时的生物安全性？  
**答 (EN):** "First, our dressing uses a semi-permeable membrane and layered hydrogel isolation design that physically blocks live bacteria from migrating into the wound while allowing secreted therapeutic proteins and small molecules to diffuse across. Second, both target chassis are inherently biosafe BSL-1 strains: *S. epidermidis* ATCC 12228 is a native human skin commensal and *E. coli* Nissle 1917 (EcN) is a clinically established probiotic. Third, we designed a genetic kill-switch based on D-alanine auxotrophy (`alr/dadX` and `dal/dat` knockouts) so any bacteria leaving the D-alanine-supplemented hydrogel cannot synthesize cell-wall peptidoglycan and self-lyse."  
**答（中）：** "第一，半透膜与水凝胶分层隔离设计：将工程菌物理封存在水凝胶内部，只允许分泌的治疗蛋白和信号分子透过半透膜，活菌不会迁移到伤口表面。第二，底盘本身是生物安全的：表皮葡萄球菌 ATCC 12228 是人体天然皮肤共生菌，EcN 是临床广泛使用的安全益生菌，两者均为 BSL-1 非致病菌株。第三，自杀开关设计：我们设计了 D-丙氨酸营养缺陷型自杀开关（敲除 `alr/dadX` 与 `dal/dat`），一旦细菌脱离含 D-丙氨酸的敷料基质便无法合成细胞壁肽聚糖而自溶。"  
**证据 / Evidence:** `S1`, `S6`, `B4` (`X13`, `THR.6`, `THR.8`).

---

### M26 (原 Q40). How many biological replicates and what statistical definitions did you use?
**问：** 实验包含多少次独立生物学重复？误差棒和拟合曲线代表什么？  
**答 (EN):** "$n = 3$ independent biological cultures (each averaging 2 technical wells, mean ± SD) for the EcN receiver dose-response (B11) and LSp222 lysis assays (B15), and $n = 2–3$ biological replicates for the hemin assays (B7/B8), where the dashed lines are spline-interpolated trends. Our co-culture on B12 is qualitative fluorescence microscopy rather than a plate-reader time course."  
**答（中）：** "EcN 接收端（B11）与 LSp222 裂解实验（B15）为 $n = 3$ 个独立生物学重复（每组含 2 个技术复孔均值，误差棒为 SD）；血红素实验（B7/B8）为 $n = 2–3$ 个生物学重复，虚线为样条插值趋势线。B12 页共培养目前是定性显微成像，尚未做酶标仪定量时间曲线。"  
**证据 / Evidence:** `B7`, `B8`, `B11`, `B12`, `B15` (`X04`).

---

## 七、收尾综合与下一步路线图 / Closing & Three-Month Roadmap

### M27 (原 Q42 + Q43 + Q47). What is the biggest weakness / most feared question, and what would you do with three more months?
**问：** 项目目前最大的弱点（或最怕被问的问题）是什么？如果多三个月会按什么顺序推进？  
**答 (EN):** "The handoffs between the modules: DspB secretion into the *S. epidermidis* supernatant isn't shown yet (B18), and the final *S. epidermidis* sender plasmids are still at the transformation/sequencing stage (B19). With three more months, we will: first, finish sequencing the *S. epidermidis* transformant colonies obtained at Wiki freeze; second, run an anti-His Western blot and PNAG assay on concentrated ATCC 12228 supernatant to prove DspB secretion; and third, test the complete *S. epidermidis*–EcN relay with a pathway-dead sender control."  
**答（中）：** "模块之间的交接：一是还没在表皮葡萄球菌上清里直接测到分泌出来的 DspB 蛋白（B18），二是转入表皮葡萄球菌的诱导型/合成型大质粒在 Wiki freeze 时刚长出转化菌落、正在测序（B19）。如果多三个月：第一，完成 Wiki freeze 转化平板菌落的测序与诱导验证；第二，浓缩 ATCC 12228 上清做 His-tag Western 与破膜活性实验，坐实 DspB 分泌；第三，加入通路失活对照，在最终的“表皮葡萄球菌–EcN”组合中跑通完整接力。"  
**证据 / Evidence:** `S6`, `B17`, `B18`, `B19`.
