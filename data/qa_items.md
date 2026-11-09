# iGEM 实时答辩助手 · 参考回答数据库 (可直接编辑)

> **编辑说明**：
> 1. 每一道题以 `## [题号] 中文问题` 开头（例如 `## [S1.1] 图里的 AIP、heme 和柚皮素分别是谁给谁的信号？`）。
> 2. 可自由修改任意题目的中英文分点（`### 英文分点 (1·2·3)` / `### 中文分点 (1·2·3)`）和右侧听力速记笔记（`### 答题思路速记 (中文关键词链)`），也可直接复制一段模板在末尾新增题目。
> 3. 修改保存后，运行 `python3 scripts/sync_db.py --from-md`（或重启 `python3 server.py`）即可自动同步至网页。

## [S1.1] 图里的 AIP、heme 和柚皮素分别是谁给谁的信号？
- **ID**: `s1-1`
- **Slide**: `S1` (Page 1)
- **English Question**: Who produces each of the three signals on this slide, and which cells respond?
- **Keywords**: AIP heme naringenin signal source sender receiver who produces 信号来源 谁给谁 金葡菌 表皮葡萄球菌 EcN

### 英文分点 (1·2·3)
1. [Direct Conclusion] In our design, the three molecules act at two sequential stages.
2. [Experimental Evidence] First, in the wound environment, *S. aureus* secretes the quorum-sensing peptide AIP, which our *S. epidermidis* sender senses to trigger DspB secretion and break down the biofilm. Second, once the biofilm is disrupted and red blood cells lyse, free heme activates the heme-sensing pathway in *S. epidermidis* to synthesize naringenin.
3. [Boundary & Next Step] Naringenin then acts as the cell-to-cell signal that diffuses to our receiver strain, *E. coli* Nissle 1917 (EcN), to drive therapeutic protein expression.

### 中文分点 (1·2·3)
1. 【核心结论】在我们的设计中，这三个分子分前后两个阶段发挥作用。
2. 【实验证据与数据】第一步，创面中的金黄色葡萄球菌分泌群体感应自诱导肽 AIP，由发送菌表皮葡萄球菌感知并启动 `P2P3–DspB` 支路，分泌 DspB 水解生物膜基质。第二步，生物膜被破坏且红细胞裂解后，释放出的游离血红素（heme）激活表皮葡萄球菌的内源血红素感应通路合成柚皮素。
3. 【边界与下一步】随后，柚皮素作为跨菌信号分子扩散至接收菌大肠杆菌 Nissle 1917（EcN），启动下游治疗蛋白表达。

### 答题思路速记 (中文关键词链)
1. 阶段一（破膜）：金葡菌分泌 AIP → 表皮葡萄球菌感知（P2P3–DspB）→ 分泌 DspB 降解生物膜
2. 阶段二（感应）：红细胞裂解 → 释放游离血红素（Heme）→ 表皮葡萄球菌（HssRS）→ 合成柚皮素
3. 阶段三（接力）：柚皮素跨菌扩散 → 大肠杆菌 EcN（NrSr）→ 表达 LSp222 + hEGF

---

## [S1.2] 图上这对菌已经从识别信号一路做到治疗输出了吗？
- **ID**: `s1-2`
- **Slide**: `S1` (Page 1)
- **English Question**: Has that pair of strains carried the signal all the way through to a therapeutic protein?
- **Keywords**: end-to-end full system therapeutic protein co-culture sfGFP 全程联动 治疗输出 从头到尾 串联

### 英文分点 (1·2·3)
1. [Direct Conclusion] Not yet as a single end-to-end experiment.
2. [Experimental Evidence] Instead, we validated each module and the inter-strain handoff step by step: we verified hemin sensing directly in our target sender, *S. epidermidis*, and we demonstrated cell-to-cell naringenin signaling in a co-culture pairing a BL21 sender with an EcN receiver expressing sfGFP.
3. [Boundary & Next Step] Coupling heme sensing in *S. epidermidis* all the way to therapeutic protein secretion in EcN is our next integration step.

### 中文分点 (1·2·3)
1. 【核心结论】目前还没有在单次实验中把目标菌对从头到尾串联跑通，而是采取了分步模块验证与跨菌接力验证：我们在目标发送菌表皮葡萄球菌中直接验证了血红素（hemin）感知响应，并在 BL21 发送菌与 EcN 接收菌（表达 sfGFP）的 1:1 共培养体系中走通了柚皮素跨菌通讯。
2. 【证据与边界】下一步集成工作是将 `Nr` 合成簇转入表皮葡萄球菌，并在 EcN 中将报告基因替换为 LSp222 与 hEGF 完成端到端联动。

### 答题思路速记 (中文关键词链)
1. 尚未单次全链路跑通 → 采用分步模块 + 跨菌接力验证
2. 已验证：表皮葡萄球菌血红素传感（HmSr） | BL21 → EcN（sfGFP）1:1 共培养跨菌通讯
3. 下一步：Nr 合成簇转入表皮葡萄球菌 + EcN 报告基因替换为 LSp222 / hEGF

---

## [S2.1] 你们说去除了约 84%，实际测量了什么？
- **ID**: `s2-1`
- **Slide**: `S2` (Page 2)
- **English Question**: When you say you removed about 84% of the biofilm, what exactly did you measure?
- **Keywords**: 84% biofilm crystal violet OD590 biomass remove clear 生物膜 结晶紫 去除率 活菌 实际测量

### 英文分点 (1·2·3)
1. [Direct Conclusion] We measured the surface-attached biofilm biomass using crystal violet staining.
2. [Experimental Evidence] Specifically, we treated mature *S. aureus* biofilms with commercial DspB and tracked OD₅₉₀ over 18 hours, which dropped from about 0.6 at baseline to about 0.1.
3. [Boundary & Next Step] So the 84% figure reflects the removal of attached biofilm matrix rather than bacterial cell killing, which is handled downstream by our lysin LSp222.

### 中文分点 (1·2·3)
1. 【核心结论】我们采用结晶紫染色法测定了固着在板底表面的生物膜生物量。
2. 【实验证据与数据】具体而言，我们用商业化纯化 DspB 处理成熟的金黄色葡萄球菌生物膜并追踪 18 小时内的 OD₅₉₀ 变化，读数从 0 小时基线的约 0.6 降至约 0.1。因此，84% 反映的是附着生物膜基质的清除率；
3. 【边界与下一步】而针对细菌本身的裂解杀灭则由下游的治疗蛋白 LSp222 完成。

### 答题思路速记 (中文关键词链)
1. 测量对象：孔板表面附着的生物膜生物量（结晶紫染色法）
2. 核心数据：商业化纯化 DspB 处理成熟金葡菌生物膜 → OD590 在 18 h 内从 ~0.6 降至 ~0.1（清除 84%）
3. 指标边界：84% 为生物膜基质（PNAG）清除率 ≠ 杀菌率（裂解杀菌由下游 LSp222 负责）

---

## [S2.2] 能把这 84% 归到你们工程菌产生的 DspB 上吗？
- **ID**: `s2-2`
- **Slide**: `S2` (Page 2)
- **English Question**: Did DspB produced by your engineered strain achieve that 84% reduction?
- **Keywords**: commercial DspB engineered strain 84% 商业酶 工程菌 归因 构建

### 英文分点 (1·2·3)
1. [Direct Conclusion] No, that 84% reduction was measured using purified commercial DspB to validate our enzymatic target and quantify how effectively DspB clears mature *S. aureus* biofilm.
2. [Experimental Evidence] In parallel, we built the constitutive and AIP-inducible *dspB* plasmids, confirmed the coding sequence by Sanger sequencing, and verified plasmid transfer into our host strains.
3. [Boundary & Next Step] Testing biofilm dispersal directly with the engineered *S. epidermidis* culture is the next step on that branch.

### 中文分点 (1·2·3)
1. 【核心结论】不能直接归到工程菌上。
2. 【实验证据与数据】84% 的清除率是用纯化的商业 DspB 测得的，目的是先验证酶学靶点并定量 DspB 对成熟金葡菌生物膜的清除能力。与此同时，我们构建了组成型（`pCap–DspB`）与 AIP 诱导型（`P2P3–DspB`）质粒，完成了编码区 Sanger 测序核验与宿主转化菌落 PCR 验证。
3. 【边界与下一步】直接用工程化表皮葡萄球菌培养液测试生物膜清除率是该支路的下一步实验。

### 答题思路速记 (中文关键词链)
1. 不能归因于工程菌 → 84% 清除率由纯化商业酶 DspB 测得（用于验证靶点与酶活上限）
2. 工程菌进展：已构建组成型 pCap–DspB 与诱导型 P2P3–DspB → 完成 Sanger 测序与菌落 PCR
3. 下一步：收集工程化表皮葡萄球菌上清液 → 直接测定生物膜清除率

---

## [S3.1] 你们怎么知道预定的发送菌真的读到了这个输入？
- **ID**: `s3-1`
- **Slide**: `S3` (Page 3)
- **English Question**: How do you know your intended sender detected the input?
- **Keywords**: heme sensing HmSr pHrtBA HssRS 1.7 hours hemin 血红素感知 发送菌 峰值 1.7小时

### 英文分点 (1·2·3)
1. [Direct Conclusion] We tested the HmSr sensor directly in *S. epidermidis* by placing sfGFP downstream of the heme-regulated promoter pHrtBA and inducing the cells with hemin.
2. [Evidence & Scope] At 1 µM hemin, OD₆₀₀-normalized fluorescence rose rapidly above the 0 µM baseline and peaked at about 1.7 hours, confirming that the native HssRS two-component system in *S. epidermidis* activates our synthetic promoter in response to hemin.

### 中文分点 (1·2·3)
1. 【核心结论】我们在目标发送菌表皮葡萄球菌中直接测试了 `HmSr` 传感模块：将报告基因 `sfGFP` 置于血红素响应启动子 `pHrtBA` 下游，并外加氯化血红素（hemin）进行诱导。
2. 【证据与边界】在 1 µM hemin 下，按 OD₆₀₀ 归一化的荧光强度迅速升高并显著高于 0 µM 对照，在约 1.7 小时达到峰值，证实表皮葡萄球菌内源的 `HssRS` 双组分系统能够识别 hemin 并激活我们的合成启动子。

### 答题思路速记 (中文关键词链)
1. 直接在目标发送菌（表皮葡萄球菌）内测试 HmSr（pHrtBA–sfGFP）
2. 核心数据：1 µM hemin 诱导 → OD600 归一化荧光在 ~1.7 h 达峰（显著高于 0 µM 基线）
3. 机制结论：证实表皮葡萄球菌内源 HssRS 能识别血红素并激活合成启动子 pHrtBA

---

## [S3.2] 1.7 小时时，接收菌就收到柚皮素了吗？
- **ID**: `s3-2`
- **Slide**: `S3` (Page 3)
- **English Question**: Does that mean the receiver had already detected naringenin at 1.7 hours?
- **Keywords**: 1.7 hours receiver naringenin kinetics delay 1.7小时 接收菌 收到 柚皮素 动力学

### 英文分点 (1·2·3)
1. [Direct Conclusion] No, 1.7 hours is when transcriptional activation of the heme sensor peaks inside the *S. epidermidis* sender.
2. [Experimental Evidence] In the full relay, the sender still has to express the three Nr enzymes, convert *p*-coumaric acid into naringenin, and allow naringenin to diffuse to EcN.
3. [Boundary & Next Step] We characterized that downstream reception kinetics separately in our EcN dose-response time course over 24 hours.

### 中文分点 (1·2·3)
1. 【核心结论】不是的，1.7 小时是表皮葡萄球菌发送端内部血红素传感器的转录激活峰值时间。
2. 【实验证据与数据】在完整的接力链路中，发送菌还需要表达三酶级联（`Nr`）将对香豆酸转化为柚皮素，并分泌扩散至接收菌 EcN。
3. 【边界与下一步】接收端的响应动力学是在后续 24 小时 EcN 浓度梯度时间曲线中独立表征的。

### 答题思路速记 (中文关键词链)
1. 并非接收菌收到信号 → 1.7 h 仅是发送菌内部血红素传感器的转录激活峰值
2. 完整链路延时：表达三酶（At4CL–PhCHS–CmCHI）→ 转化对香豆酸 → 柚皮素扩散至 EcN
3. 接收端动力学：在 EcN 24 h 浓度梯度时间曲线（B8）中独立表征

---

## [S4.1] 你们怎么判断共培养的荧光和柚皮素有关？
- **ID**: `s4-1`
- **Slide**: `S4` (Page 4)
- **English Question**: What connects the fluorescence in co-culture to naringenin?
- **Keywords**: co-culture fluorescence naringenin HPLC dose response microscopy 共培养 荧光 柚皮素 证据 菌间通讯

### 英文分点 (1·2·3)
1. [Direct Conclusion] We connect them through three complementary pieces of evidence.
2. [Experimental Evidence] First, by HPLC, our induced BL21 sender supplemented with *p*-coumaric acid produces a peak at 17.1 minutes matching the naringenin standard. Second, when we add exogenous naringenin to the EcN receiver alone, its NrSr–sfGFP fluorescence increases in a dose-dependent manner.
3. [Boundary & Next Step] Third, when we co-culture the BL21 sender and EcN receiver together with *p*-coumaric acid but no exogenous naringenin, fluorescence microscopy shows a clear increase in green cells compared with either monoculture control.

### 中文分点 (1·2·3)
1. 【核心结论】我们通过三项相互印证的实验证据建立这一联系：第一，HPLC 检测表明，添加底物对香豆酸并诱导的 BL21 发送菌在 17.1 分钟处产生与柚皮素标准品保留时间一致的特征峰；
2. 【实验证据与数据】第二，向 EcN 接收菌单独外加柚皮素时，`NrSr–sfGFP` 荧光呈清晰的浓度依赖性上升；
3. 【边界与下一步】第三，将 BL21 发送菌与 EcN 接收菌在不外加柚皮素、仅提供前体对香豆酸的条件下 1:1 共培养时，荧光显微镜下绿色荧光细胞显著强于任一单培养对照。

### 答题思路速记 (中文关键词链)
1. 三步证据链（B7 + B8 + B9）锁定柚皮素跨菌通讯
2. 证据 ①②：HPLC 证实 BL21 产柚皮素（B7，17.1 min，53.8 µM） | EcN 对外源柚皮素剂量依赖激活（B8）
3. 证据 ③：1:1 共培养（仅加对香豆酸 + IPTG，不加外源柚皮素）→ 强绿色荧光（单菌对照无荧光，B9）

---

## [S4.2] 标题写了 “First”，此前真的没人用过柚皮素做菌间信号吗？
- **ID**: `s4-2`
- **Slide**: `S4` (Page 4)
- **English Question**: Your title says “first.” Has anyone previously used naringenin to signal between bacteria?
- **Keywords**: First naringenin communication precedent Xiu 2017 riboswitch FdeR 首次 先例 第一 核糖开关

### 英文分点 (1·2·3)
1. [Direct Conclusion] Naringenin has been used in co-culture screening before: in 2017, Xiu and colleagues paired a naringenin-producing *E. coli* strain with a riboswitch-based reporter strain to screen pathway variants.
2. [Experimental Evidence] What is new in our work is adapting naringenin as a targeted inter-strain relay into probiotic EcN using the FdeR/PfdeAR transcriptional switch, and characterizing both the sender production and receiver response for a wound-therapy consortium.
3. [Boundary & Next Step] So we state our contribution specifically around this FdeR-based sender–EcN relay rather than claiming the first naringenin co-culture in general.

### 中文分点 (1·2·3)
1. 【核心结论】此前已有利用柚皮素进行共培养筛选的先例：Xiu 等人在 2017 年将柚皮素生产菌与携带核糖开关（riboswitch）的报告菌共培养，用于高通量筛选高产菌株。
2. 【实验证据与数据】我们工作的具体创新点在于：首次利用 `FdeR / PfdeAR` 转录开关将柚皮素改造为面向益生菌 EcN 的定向跨菌通讯通道，并围绕创面双菌协同治疗场景系统表征了发送端合成与接收端响应动力学。
3. 【边界与下一步】因此我们在汇报时聚焦于这一 `FdeR` 介导的发送菌–EcN 接力体系，而不作泛化的“首次柚皮素共培养”宣称。

### 答题思路速记 (中文关键词链)
1. 发送菌底盘不同：S3 为目标发送菌（表皮葡萄球菌），S4 共培养使用概念验证底盘 BL21(DE3)
2. 原因：三酶合成簇（Nr）率先在成熟底盘 BL21 中走通表达与发酵产率验证
3. 下一步：将验证完毕的 Nr 操纵子组装入表皮葡萄球菌 → 替换共培养中的 BL21

---

## [S5.1] 61% 和 25% 的差别说明什么？表皮葡萄球菌也会受影响吗？
- **ID**: `s5-1`
- **Slide**: `S5` (Page 5)
- **English Question**: What does 61% versus 25% tell us? Was your intended sender affected as well?
- **Keywords**: 61% 25% LSp222 S. aureus S. epidermidis selectivity specificity OD600 turbidity 表皮葡萄球菌 裂解 选择性 偏好 杀伤

### 英文分点 (1·2·3)
1. [Direct Conclusion] Yes, our sender is affected to a lesser degree, which is exactly why we ran this side-by-side comparison.
2. [Experimental Evidence] Over 30 minutes with the LSp222 crude extract, OD₆₀₀ dropped by 61% in *S. aureus* compared with 25% in *S. epidermidis*, each normalized to its own starting turbidity.
3. [Boundary & Next Step] This shows that LSp222 lyses our target pathogen much more strongly than the commensal sender, although it is a relative selectivity in turbidity rather than complete immunity for *S. epidermidis*.

### 中文分点 (1·2·3)
1. 【核心结论】会受到一定影响，这正是我们开展双菌平行对比的原因。
2. 【实验证据与数据】在 30 分钟粗提物裂解实验中，金黄色葡萄球菌的 OD₆₀₀ 相对自身初始值下降了 61%，而表皮葡萄球菌仅下降 25%。这表明 LSp222 对目标致病菌金葡菌的裂解活性远强于对共生发送菌的作用，具有明显的相对选择性；
3. 【边界与下一步】后续我们还将通过平板菌落计数（CFU）进一步定量活菌存活率。

### 答题思路速记 (中文关键词链)
1. 双组分分工：LSp222（选择性杀灭金葡菌）+ hEGF（促进创面表皮修复）
2. LSp222 数据：处理 30 min → 金葡菌 OD600 下降 61%，表皮葡萄球菌仅下降 25%（保护发送菌）
3. hEGF 数据：BL21 上清液 SDS-PAGE 检出目标双条带（11.10 kDa 前体 / 8.89 kDa 成熟体）→ 下一步划痕实验

---

## [S5.2] hEGF 已经证明有修复活性了吗？
- **ID**: `s5-2`
- **Slide**: `S5` (Page 5)
- **English Question**: Have you shown that your hEGF promotes wound repair?
- **Keywords**: hEGF healing activity functional assay scratch wound Supernatant gel 修复活性 功能验证 划痕实验 上清条带

### 英文分点 (1·2·3)
1. [Direct Conclusion] Not yet at the cellular repair level.
2. [Experimental Evidence] At this stage, we have verified extracellular hEGF production by SDS-PAGE: in fivefold-concentrated culture supernatants, our induced hEGF strain shows two distinct bands between 8 and 15 kDa matching the expected sizes of the PelB-precursor and mature hEGF, which are absent in the empty-vector controls.
3. [Boundary & Next Step] Confirming protein identity by Western blot and testing keratinocyte migration in a scratch-wound assay are our next steps.

### 中文分点 (1·2·3)
1. 【核心结论】目前尚未推进到细胞划痕修复实验阶段。
2. 【实验证据与数据】现阶段我们通过 SDS-PAGE 验证了胞外 hEGF 的诱导产生：在 5 倍浓缩的培养上清中，`hEGF-pET22b` 诱导组在 8–15 kDa 区间呈现出对应未切信号肽前体与成熟 hEGF 的清晰双条带，而空载体对照无此条带。
3. 【边界与下一步】下一步我们将通过 Anti-His Western blot 确证蛋白身份，并通过角质形成细胞划痕迁移实验验证其促修复活性。

### 答题思路速记 (中文关键词链)
1. 选择性体现：LSp222 处理 30 min → 靶标金葡菌裂解 61% vs 发送菌表皮葡萄球菌 25%
2. 生物学意义：清除致病金葡菌的同时，保留本方表皮葡萄球菌发送底盘
3. 下一步：活菌 CFU 计数 + 创面相关多菌种共培养验证

---

## [S6.1] 如果只说你们真正看到的结果，三个模块各做到了什么？
- **ID**: `s6-1`
- **Slide**: `S6` (Page 6)
- **English Question**: What did you actually observe for each of the three modules?
- **Keywords**: summary three modules what did you actually observe 成果总结 三个模块 真正看到的结果

### 英文分点 (1·2·3)
1. [Direct Conclusion] In the biofilm module, we confirmed that DspB removes 84% of attached *S. aureus* biofilm biomass and verified our *dspB* plasmid constructs.
2. [Experimental Evidence] In the communication module, we demonstrated hemin sensing in *S. epidermidis*, naringenin synthesis in BL21, dose-dependent naringenin sensing in EcN, and reporter activation in BL21–EcN co-culture.
3. [Boundary & Next Step] In the therapeutic module, we demonstrated inducible LSp222 expression with preferential lytic activity against *S. aureus* over *S. epidermidis*, and extracellular hEGF accumulation in the culture supernatant.

### 中文分点 (1·2·3)
1. 【核心结论】在破膜模块中，我们证实 DspB 在 18 小时内可清除 84% 的金葡菌附着生物膜，并完成了 `dspB` 质粒构建与转化验证；
2. 【实验证据与数据】在双菌通讯模块中，我们依次验证了表皮葡萄球菌的 hemin 感知、BL21 的柚皮素合成、EcN 对柚皮素的浓度梯度响应，以及 BL21–EcN 共培养下的跨菌荧光激活；
3. 【边界与下一步】在治疗模块中，我们验证了 LSp222 的诱导表达、纯化及其对金葡菌优于表皮葡萄球菌的选择性裂解活性，并在培养上清中检测到胞外 hEGF 候选条带。

### 答题思路速记 (中文关键词链)
1. 已完成实验验证：商业酶 DspB 破膜（84%） | 表皮葡萄球菌血红素传感（1.7 h 达峰） | BL21 产柚皮素（53.8 µM）+ BL21→EcN 共培养通讯 | LSp222 选择性裂解（61% vs 25%）+ hEGF 上清分泌
2. 仅完成构建/设计：工程化 DspB 质粒（已测序与转化，待测酶活） | 双层水凝胶与营养缺陷安全锁（设计阶段）
3. 待集成闭环：表皮葡萄球菌（HmSr–Nr）→ EcN（LSp222 + hEGF）全链路联动

---

## [S6.2] 离你们第一页画的完整系统，最关键还差哪一步？
- **ID**: `s6-2`
- **Slide**: `S6` (Page 6)
- **English Question**: What is the main gap between those results and the system on your first slide?
- **Keywords**: missing step bottleneck full system integration 差哪一步 最关键 完整系统

### 英文分点 (1·2·3)
1. [Direct Conclusion] The main gap is integrating the complete pathway into the final *S. epidermidis*–EcN pair from start to finish.
2. [Evidence & Scope] Right now, our co-culture proof of concept connects a BL21 sender to an EcN sfGFP receiver; the next milestone is moving the Nr biosynthetic operon into *S. epidermidis* so that heme directly triggers naringenin synthesis, and swapping sfGFP in EcN for active LSp222 and hEGF secretion in co-culture.

### 中文分点 (1·2·3)
1. 【核心结论】最关键的一步是在最终的目标菌对（表皮葡萄球菌 + EcN）中完成全链路端到端整合。
2. 【实验证据与数据】目前的共培养概念验证连接的是 BL21 发送菌与表达 `sfGFP` 的 EcN 接收菌；
3. 【边界与下一步】下一阶段里程碑是将 `Nr` 三酶合成簇转入表皮葡萄球菌实现“血红素触发柚皮素合成”，同时在 EcN 中将报告基因替换为 `LSp222` 与 `hEGF` 实现共培养条件下的治疗蛋白分泌。

### 答题思路速记 (中文关键词链)
1. 首要关键实验：目标菌对端到端共培养（表皮葡萄球菌 HmSr–Nr + 接收菌 EcN）
2. 实验设计：仅添加 hemin 与对香豆酸（不加外源柚皮素）→ 检测 EcN 荧光激活与治疗蛋白分泌
3. 核心意义：在目标皮肤共生发送菌与益生接收菌之间闭环整条信号接力链

---

## [B1.1] 能直接给我看最能支持“两株菌之间有通讯”的那张图吗？
- **ID**: `b1-1`
- **Slide**: `B1` (Page 7)
- **English Question**: Can you show us the most direct evidence of communication between the strains?
- **Keywords**: best slide communication evidence B9 B7 B8 最能支持 两株菌通讯 哪张图 索引

### 英文分点 (1·2·3)
1. [Direct Conclusion] Certainly.
2. [Experimental Evidence] Slide B9 shows our most direct visual evidence: it places the BL21 sender monoculture, the EcN receiver monoculture, and the 1:1 co-culture side by side, showing a clear rise in green fluorescence only when both strains are cultured together.
3. [Boundary & Next Step] To back that up quantitatively, Slide B7 shows naringenin production by the sender on HPLC, and Slide B8 shows the dose-response curve of the EcN receiver to exogenous naringenin.

### 中文分点 (1·2·3)
1. 【核心结论】请直接看 B9 页。
2. 【实验证据与数据】该页将 BL21 发送菌单培养、EcN 接收菌单培养以及 1:1 双菌共培养的荧光显微图并列对比，可以直观看到只有在双菌共培养时才出现大面积亮绿色荧光细胞。
3. 【边界与下一步】如果要进一步核实定量证据，B7 页展示了发送端合成柚皮素的 HPLC 色谱峰，B8 页展示了接收菌 EcN 对不同浓度柚皮素的剂量响应曲线。

### 答题思路速记 (中文关键词链)
1. 完整通讯证据链（4 页）：B6 → B7 / B13 → B8 → B9
2. B6（表皮葡萄球菌血红素输入）→ B7 & B13（HPLC 定性 17.1 min + 标曲定量 53.8 µM）
3. B8（EcN 接收端 0–400 µM 剂量响应）→ B9（1:1 BL21–EcN 共培养跨菌激活与单菌对照）

---

## [B1.2] 哪里可以看到哪些是设计、哪些已经在相应菌株里测过？
- **ID**: `b1-2`
- **Slide**: `B1` (Page 7)
- **English Question**: Where can we see which parts of the design were tested in which strain?
- **Keywords**: design vs tested host strains B15 B5 哪些是设计 哪些测过 菌株对照

### 英文分点 (1·2·3)
1. [Direct Conclusion] Slide B15 lays out all four genetic circuits in our complete design, while Slide B5 maps each experimental validation onto the three host strains we used: *S. epidermidis*, EcN, and BL21(DE3).
2. [Evidence & Scope] Looking at B15 and B5 together shows how each module was tested.

### 中文分点 (1·2·3)
1. 【核心结论】B15 页展示了我们完整设计中的全部四条基因回路架构，B5 页则逐行对应列出了我们在表皮葡萄球菌、EcN 和 BL21(DE3) 三种宿主中分别完成的实验验证。
2. 【证据与边界】将 B15 与 B5 对照，就能清晰看到每个子模块的设计与实测归属。

### 答题思路速记 (中文关键词链)
1. 翻页至 B15（Complete Genetic Circuits）
2. 展示全套 4 条基因回路：P2P3–DspB、HmSr–Nr、NrSr–LSp222、NrSr–hEGF（含启动子/信号肽/底盘分工）

---

## [B2.1] 另一支队伍拿到你们的元件集合，具体能复用什么？能举一个具体输入与输出的应用情景吗？
- **ID**: `b2-1`
- **Slide**: `B2` (Page 8)
- **English Question**: What can another team reuse? Can you give an example with a different input and output?
- **Keywords**: Best Part Collection reusability scenario IBD gut inflammation ThsSR NorR IL-10 TFF3 可复用性 另一支队伍 应用情景 肠道炎症

### 英文分点 (1·2·3)
1. [Direct Conclusion] Another team can reuse our inter-bacterial naringenin relay (the Nr biosynthetic module in the sender paired with the NrSr FdeR/PfdeAR receiver in EcN) as a plug-and-play communication channel while swapping the upstream sensor and downstream effector for their own disease setting.
2. [Evidence & Scope] For instance, in an inflammatory bowel disease (IBD) consortium, a team could replace our heme sensor HmSr with a gut inflammation sensor such as the thiosulfate sensor ThsSR or nitric oxide sensor NorR to drive Nr, keep the naringenin relay into probiotic EcN, and swap the output to an anti-inflammatory cytokine like IL-10 or mucosal repair factor TFF3.

### 中文分点 (1·2·3)
1. 【核心结论】其他队伍可以直接复用我们中间固定的跨菌柚皮素接力通道（发送端的 `Nr` 合成模块 + 接收端 EcN 的 `NrSr` / `FdeR–PfdeAR` 转录响应模块），并根据自身疾病场景自由替换上游感应器与下游效应蛋白。
2. 【实验证据与数据】例如在**肠道炎症（IBD）双菌群落**场景中，可将上游的血红素传感器 `HmSr` 替换为肠道炎症标志物传感器——如硫代硫酸盐双组分传感器 `ThsSR` 或一氧化氮传感器 `NorR` 来驱动共生菌表达 `Nr`；中间保持柚皮素向益生菌 EcN 的跨菌传递不变；
3. 【边界与下一步】下游则将输出替换为抗炎细胞因子 `IL-10` 或黏膜修复因子 `TFF3`。

### 答题思路速记 (中文关键词链)
1. 固定通讯中继（无需改动）：Nr 三酶合成簇 → 柚皮素扩散 → NrSr（FdeR / PfdeAR）接收模块
2. 可自由替换模块：上游环境传感启动子 + 下游治疗/报告输出基因
3. 复用场景（肠道 IBD 菌群）：上游换为硫代硫酸盐（ThsSR）或 NO（NorR）传感器 → 保留柚皮素接力 → 下游换为抗炎因子 IL-10 或黏膜修复肽 TFF3

---

## [B2.2] 图中列出的 sfGFP、LSp222 和 hEGF，都由同一套接收回路驱动并验证过吗？
- **ID**: `b2-2`
- **Slide**: `B2` (Page 8)
- **English Question**: Did you validate sfGFP, LSp222 and hEGF as outputs of the same receiver circuit?
- **Keywords**: sfGFP LSp222 hEGF same receiver circuit NrSr validated 同一套接收回路 驱动 验证

### 英文分点 (1·2·3)
1. [Direct Conclusion] All three share the same FdeR/PfdeAR receiver architecture in our plasmid designs (`NrSr–sfGFP`, `NrSr–PelB–LSp222`, and `NrSr–PelB–hEGF`).
2. [Experimental Evidence] Experimentally, we used `NrSr–sfGFP` in EcN to characterize dose-response kinetics and co-culture activation, while we validated the expression and lytic activity of LSp222 and the extracellular production of hEGF in BL21(DE3) expression assays.
3. [Boundary & Next Step] Measuring naringenin-induced LSp222 and hEGF secretion directly in EcN is our next step.

### 中文分点 (1·2·3)
1. 【核心结论】在质粒回路设计上，三者共用完全相同的 `FdeR / PfdeAR` 接收架构（即 `NrSr–sfGFP`、`NrSr–PelB–LSp222` 和 `NrSr–PelB–hEGF`）。
2. 【实验证据与数据】在湿实验推进上，我们先在 EcN 中用 `NrSr–sfGFP` 完成了柚皮素剂量响应动力学和双菌共培养激活验证；同时在 BL21(DE3) 概念验证底盘中独立验证了 LSp222 的表达与裂菌活性以及 hEGF 的胞外上清表达。
3. 【边界与下一步】下一步是在 EcN 中直接测定柚皮素诱导下的 LSp222 与 hEGF 分泌及活性。

### 答题思路速记 (中文关键词链)
1. 核心优势：无宿主与菌群背景干扰（天然正交）
2. 对比传统分子：IAA（细菌内源普遍产生，串扰高） | 水杨酸（干扰宿主信号） | DAPG（抑制工程菌生长）
3. 柚皮素亮点：植物黄酮（人体与微生物组零本底）+ 兼具天然抗炎与促创面修复活性

---

## [B3.1] 84% 的分母是什么？是和 18 小时未处理组相比吗？
- **ID**: `b3-1`
- **Slide**: `B3` (Page 9)
- **English Question**: What is the denominator for 84%? Is it an untreated biofilm at 18 hours?
- **Keywords**: 84% denominator formula 0h vs 18h untreated control 分母 计算公式 未处理对照 结晶紫

### 英文分点 (1·2·3)
1. [Direct Conclusion] The denominator is the initial pre-treatment biofilm biomass at 0 hours, using the formula $[1 - \text{OD}_{590}(18\text{ h}) / \text{OD}_{590}(0\text{ h})] \times 100\%$.
2. [Evidence & Scope] Because we started with pre-formed mature *S. aureus* biofilms and tracked their clearance over time, this 84% value measures the reduction relative to the 0-hour baseline rather than against a parallel 18-hour untreated control.

### 中文分点 (1·2·3)
1. 【核心结论】分母是 0 小时处理前的初始生物膜生物量，计算公式为 $[1 - \text{OD}_{590}(18\text{ h}) / \text{OD}_{590}(0\text{ h})] \times 100\%$。
2. 【证据与边界】因为实验是以预先培养成熟的金葡菌生物膜为起点、考察加入 DspB 后随时间的清除过程，所以 84% 衡量的是相对 0 小时初始基线的生物膜清除比例，而非与平行 18 小时未处理组的比值。

### 答题思路速记 (中文关键词链)
1. 计算公式：[1 − OD590(t) / OD590(0)] × 100%
2. 分母基准：0 h 初始成熟生物膜的结晶紫染色读数 OD590(0) ≈ 0.6
3. 18 h 终点：OD590(18 h) 降至 ≈ 0.1 → 相对基质清除率 ≈ 84%

---

## [B3.2] 为什么标题是“超过 84%”，旁边的大数字却是“84%”？
- **ID**: `b3-2`
- **Slide**: `B3` (Page 9)
- **English Question**: Why does the title say “over 84%” while the large number says “84%”?
- **Keywords**: more than 84% vs 84% rounding 0.61 0.097 超过84% 约84% 四舍五入

### 英文分点 (1·2·3)
1. [Direct Conclusion] Both refer to the same 18-hour time point, where average OD₅₉₀ dropped from roughly 0.6 at 0 hours to below 0.1 at 18 hours (an ~84% drop, or slightly above 84% from the raw unrounded means).
2. [Evidence & Scope] On the slide callout we rounded the headline number to 84% for simplicity, so in our presentation we describe it as an approximately 84% reduction from baseline.

### 中文分点 (1·2·3)
1. 【核心结论】两处指向同一个 18 小时实验结果：平均 OD₅₉₀ 从 0 小时的约 0.6 降至 18 小时的 0.1 以下（按未取整的原始均值计算略高于 84%）。
2. 【证据与边界】在大字号数据卡片上为了视觉简洁取整写为 `84%`，因此在口头汇报中我们统一表述为“相对初始基线下降约 84%”。

### 答题思路速记 (中文关键词链)
1. 结晶紫染色法机制：结合带负电的胞外基质（PNAG 多糖）与附着菌体 → 定量固着生物膜总量
2. 局限性：测定的是物理瓦解/剥离程度，无法区分活菌与死菌
3. 下一步补充：活菌 CFU 平板计数 + 共聚焦活死染色（SYTO9 / PI）

---

## [B4.1] 为什么有两个 DspB 构建？右边的胶图支持哪一步？
- **ID**: `b4-1`
- **Slide**: `B4` (Page 10)
- **English Question**: Why do you have two DspB constructs, and what does the gel establish?
- **Keywords**: two DspB constructs pCap-DspB P2P3-DspB colony PCR gel 两个DspB构建 组成型 诱导型 胶图

### 英文分点 (1·2·3)
1. [Direct Conclusion] We designed two constructs so we could decouple enzyme expression from quorum-sensing regulation: `pCap–DspB` uses a constitutive promoter to test baseline DspB secretion, while `P2P3–DspB` places *dspB* under the *agr* P2/P3 promoter so it is triggered only by *S. aureus* AIP.
2. [Evidence & Scope] The colony PCR gel on the right confirms successful transformation of the `pCap–DspB` construct into our host strains, and Slide B14 shows the Sanger sequencing verification of the *dspB* coding region.

### 中文分点 (1·2·3)
1. 【核心结论】设计两个构建是为了将“酶本身的功能表达”与“群体感应调控”解耦验证：`pCap–DspB` 采用组成型启动子，用于直接测试 DspB 的基础表达与外泌；
2. 【实验证据与数据】`P2P3–DspB` 则将 `dspB` 置于 `agr` 系统的 `P2/P3` 启动子下游，使其仅在金葡菌 AIP 存在时启动。
3. 【边界与下一步】右图的菌落 PCR 电泳证实组成型 `pCap–DspB` 质粒已成功转入目标宿主，而 B14 页则给出了 `dspB` 编码区的 Sanger 测序比对证据。

### 答题思路速记 (中文关键词链)
1. 模块解耦验证策略：拆分为「下游酶活独立表征」与「上游感应调控」
2. pBUS1–Pcap–DspB（组成型）：无须诱导剂，直接测试表皮葡萄球菌分泌 DspB 的基线活性
3. pLI50–AgrCA–P2/P3–DspB（诱导型）：测试金葡菌 AIP 触发的条件性表达

---

## [B4.2] 有这张胶图，就能说金葡菌的 AIP 已经触发工程菌破膜了吗？
- **ID**: `b4-2`
- **Slide**: `B4` (Page 10)
- **English Question**: Does the gel establish that AIP from S. aureus triggered biofilm removal?
- **Keywords**: AIP triggered engineered biofilm dispersal proof 触发 工程菌破膜 连续验证

### 英文分点 (1·2·3)
1. [Direct Conclusion] Not yet.
2. [Experimental Evidence] The gel on B4 verifies plasmid construction and host transformation, while the crystal violet assay on B3 validates the enzymatic efficacy of purified DspB against *S. aureus* biofilms.
3. [Boundary & Next Step] Connecting AIP induction of the engineered strain directly to biofilm dispersal in a single assay is the next experimental step for this module.

### 中文分点 (1·2·3)
1. 【核心结论】目前还不能。
2. 【实验证据与数据】B4 页的电泳胶证实了质粒构建与宿主转化成功，而 B3 页的结晶紫实验用商业化纯酶验证了 DspB 水解金葡菌生物膜的酶学有效性。
3. 【边界与下一步】将金葡菌 AIP 诱导工程菌表达 DspB 并直接引起生物膜下降串联在同一次实验中测定，是破膜模块的下一步工作。

### 答题思路速记 (中文关键词链)
1. B4 电泳图证明：菌落 PCR 条带大小正确 → 证实重组质粒已成功转入 RN4220 与表皮葡萄球菌
2. 尚未证明：DspB 蛋白的胞外分泌量与实际破膜酶活
3. 序列核验：见 B14（Sanger 测序 965 / 971 bp 匹配，99% 一致性）

---

## [B5.1] 你们为什么选择表皮葡萄球菌、EcN 和 BL21 这三种宿主？各自的选择理由和职责是什么？
- **ID**: `b5-1`
- **Slide**: `B5` (Page 11)
- **English Question**: Why did you use three hosts? What did each one contribute?
- **Keywords**: three hosts S. epidermidis EcN BL21(DE3) rationale role why three strains 三种宿主 选择理由 职责 为什么用BL21

### 英文分点 (1·2·3)
1. [Direct Conclusion] Each host was chosen for a specific role, separating our final therapeutic pair from our proof-of-concept chassis:
1.
2. [Experimental Evidence] ***S. epidermidis* (Target Sender)**: We chose it because it is a natural human skin commensal with high biosafety and possesses an endogenous heme-sensing system (`HssRS`). Its assigned duties are dispersing the *S. aureus* biofilm (`DspB`) and sensing heme to synthesize naringenin (`HmSr + Nr`). 2. **EcN (*E. coli* Nissle 1917, Target Receiver)**: We chose it for its established probiotic biosafety and tractable genetics. Its duty is to sense naringenin (`NrSr`) and produce the therapeutic proteins `LSp222` and `hEGF`. 3.
3. [Boundary & Next Step] ***E. coli* BL21(DE3) (Proof-of-Concept Only)**: Because genetic manipulation in *S. epidermidis* takes longer, we used BL21 strictly as a mature proof-of-concept host to validate *E. coli* expression of `LSp222` and `hEGF` and to verify naringenin biosynthesis via the `Nr` pathway.

### 中文分点 (1·2·3)
1. 【核心结论】我们将最终治疗双菌体系与概念验证底盘明确区分，三株宿主各有清晰的选择理由与职责分工：
1. **表皮葡萄球菌（*S. epidermidis*，目标发送菌）**：选择理由是其为天然人体皮肤共生菌（生物安全性高），且拥有内源性血红素双组分感应系统（`HssRS`）；
2. 【实验证据与数据】职责是表达分泌 `DspB` 破坏金葡菌生物膜，并通过 `HmSr + Nr` 响应血红素合成柚皮素。2. **大肠杆菌 Nissle 1917（*EcN*，目标接收菌）**：选择理由是其具备成熟的益生菌生物安全性，且遗传操作便捷、易于验证回路；职责是通过 `NrSr` 响应柚皮素，合成抗菌裂解酶 `LSp222` 与促修复因子 `hEGF`。
3. 【边界与下一步】3. **大肠杆菌 BL21(DE3)（仅用于概念验证）**：由于革兰氏阳性表皮葡萄球菌的工程改造周期较长，我们选用成熟的 BL21 底盘**仅用于概念验证（strictly for proof-of-concept validation）**，负责验证 `LSp222` 与 `hEGF` 的大肠杆菌表达可行性，以及 `Nr` 途径合成柚皮素的能力。

### 答题思路速记 (中文关键词链)
1. 最终治疗菌群（2 株）：表皮葡萄球菌（发送菌）+ 大肠杆菌 EcN（接收菌）
2. 概念验证底盘（1 株）：大肠杆菌 BL21(DE3) → 仅用于快速验证三酶产柚皮素与治疗蛋白表达
3. 选择理由：表皮葡萄球菌（皮肤共生安全 + 内源 HssRS 感知血红素） | EcN（益生菌安全 + 遗传操作成熟）

---

## [B5.2] 能把 BL21 的柚皮素生产结果直接算到表皮葡萄球菌头上吗？
- **ID**: `b5-2`
- **Slide**: `B5` (Page 11)
- **English Question**: Can you attribute BL21’s naringenin production to S. epidermidis?
- **Keywords**: BL21 naringenin production equate to S. epidermidis 算到表皮葡萄球菌 替代 等同

### 英文分点 (1·2·3)
1. [Direct Conclusion] No, we keep those claims strictly separate.
2. [Experimental Evidence] Our HPLC naringenin yield and co-culture sender data come from BL21(DE3), which proves that the three-enzyme `Nr` pathway produces enough naringenin to activate EcN. In *S. epidermidis*, what we have experimentally verified so far is the upstream `HmSr` heme-sensing response (Slide B6).
3. [Boundary & Next Step] Quantifying naringenin titers directly from engineered *S. epidermidis* is our next step.

### 中文分点 (1·2·3)
1. 【核心结论】不能直接算到表皮葡萄球菌头上，我们对两者的实验结论做了严格区分。
2. 【实验证据与数据】HPLC 测得的柚皮素产量以及双菌共培养中的发送端数据均来自概念验证底盘 BL21(DE3)，这证明了 `Nr` 三酶途径合成的柚皮素足以跨菌激活 EcN。在表皮葡萄球菌中，我们目前已实测验证的是上游 `HmSr` 对血红素的感知响应（B6 页）；
3. 【边界与下一步】将 `Nr` 整合进表皮葡萄球菌并直接测定其柚皮素产量是下一步工作。

### 答题思路速记 (中文关键词链)
1. 双层水凝胶在创面外表面原位快速通讯：两层间距仅 40 µm → 柚皮素扩散仅需数秒至数分钟
2. 厌氧与营养限制应对：EcN 为兼性厌氧菌（适应创面低氧环境）+ 水凝胶预载基础营养与对香豆酸前体
3. 下一步：在与创面微环境匹配的离体皮肤模型中验证双菌存活与信号转导

---

## [B6.1] 为什么说这是一次短暂响应？不同剂量有什么区别？
- **ID**: `b6-1`
- **Slide**: `B6` (Page 12)
- **English Question**: Why call the hemin response transient? How did the two low doses differ?
- **Keywords**: transient response peak 1 uM 1.7h 2.5 uM 2.3h hemin toxicity HrtBA efflux 短暂响应 先升后降 回落 不同剂量 峰值

### 英文分点 (1·2·3)
1. [Direct Conclusion] We call it transient because, relative to the 0 µM baseline, OD₆₀₀-normalized fluorescence rises sharply after hemin addition, reaches a distinct peak, and then gradually returns toward baseline as the cells detoxify hemin and continue dividing.
2. [Evidence & Scope] Between the two low doses, 1 µM triggered an earlier and higher peak (around 1.7 hours) than 2.5 µM (around 2.3 hours), likely because higher hemin concentrations begin to impose mild physiological stress on the cells.

### 中文分点 (1·2·3)
1. 【核心结论】称之为“短暂响应”是因为相对于 0 µM 对照组，加入 hemin 后按 OD₆₀₀ 归一化的荧光强度迅速上升并达到清晰峰值，随后随着细菌启动内源血红素解毒外排机制并继续分裂增殖，单位菌体的荧光信号逐渐回落。
2. 【证据与边界】在两个低剂量组之间，1 µM 组比 2.5 µM 组达峰更早（约 1.7 小时 vs. 约 2.3 小时）且峰值更高，原因在于更高浓度的 hemin 开始对细胞产生轻微的生理胁迫。

### 答题思路速记 (中文关键词链)
1. 低浓度 hemin（1 µM / 2.5 µM）在 1.7–2.3 h 瞬时达峰后回落 → 由生理解毒与细胞分裂稀释共同导致
2. 解毒负反馈：HssRS 激活内源 HrtBA 外排泵 → 主动排出胞内游离 hemin → 启动子关闭
3. 生长稀释：细菌进入指数生长期（OD600 上升，见 B16）→ 存量 sfGFP 被子代细胞稀释（ΔRFU / OD600 下降）

---

## [B6.2] 这就说明 1 µM 是整个系统的最佳工作浓度吗？
- **ID**: `b6-2`
- **Slide**: `B6` (Page 12)
- **English Question**: Does that make 1 µM the best operating concentration for the whole system?
- **Keywords**: 1 uM optimal working concentration whole system 最佳工作浓度 1微摩

### 英文分点 (1·2·3)
1. [Direct Conclusion] 1 µM is the optimal concentration for activating the `HmSr–sfGFP` transcriptional reporter in *S. epidermidis* without slowing growth, as shown together with the growth curves on Slide B16.
2. [Evidence & Scope] Determining the optimal heme range for the full consortium will require measuring downstream naringenin titers and therapeutic output once the `Nr` pathway is coupled in *S. epidermidis*.

### 中文分点 (1·2·3)
1. 【核心结论】结合 B16 页的生长曲线来看，1 µM 是在不影响表皮葡萄球菌正常生长的前提下、激活 `HmSr–sfGFP` 转录报告元件的最佳诱导浓度。
2. 【证据与边界】至于整套双菌系统在真实创面中的最佳工作浓度区间，还需要在表皮葡萄球菌中接通下游 `Nr` 通路后，结合柚皮素产量与治疗蛋白输出水平综合标定。

### 答题思路速记 (中文关键词链)
1. 10 µM 曲线接近零线原因：并非坐标轴截断，而是高浓度血红素毒性抑制
2. 机制：10 µM hemin 超出外排解毒能力 → 引发活性氧（ROS）与膜损伤 → 抑制生长与蛋白质合成
3. 对照证据：见 B16 生长曲线（10 µM 组 OD600 明显受抑），生理创面游离血红素处于微摩尔低浓度区间

---

## [B7.1] 图里最高的峰是柚皮素吗？你们依据什么认峰？
- **ID**: `b7-1`
- **Slide**: `B7` (Page 13)
- **English Question**: Is the tallest HPLC peak naringenin? How did you assign the peak?
- **Keywords**: tallest peak p-coumaric acid 17.1 min retention time standard 最高峰 对香豆酸 保留时间 认峰

### 英文分点 (1·2·3)
1. [Direct Conclusion] No, the tallest peak near 9.5 minutes is the unreacted substrate, *p*-coumaric acid, which we supplied in excess.
2. [Experimental Evidence] The naringenin peak is the one at 17.1 minutes, zoomed in on the right panel.
3. [Boundary & Next Step] We assigned it by matching its retention time at 280 nm against an authentic naringenin chemical standard run under the exact same chromatographic method (Slide B13).

### 中文分点 (1·2·3)
1. 【核心结论】不是的，约 9.5 分钟处最高的峰是我们过量添加的反应底物对香豆酸（*p*-coumaric acid）。
2. 【实验证据与数据】我们关注的柚皮素产物峰位于 17.1 分钟处（右侧为局部放大图）。
3. 【边界与下一步】我们在完全相同的色谱条件与 280 nm 检测波长下比对了柚皮素化学标准品（见 B13 页），通过保留时间一致确认了 BL21 发送菌样品中产生了柚皮素。

### 答题思路速记 (中文关键词链)
1. 检测方法：反相 HPLC（C18 色谱柱，UV 280 nm 检测）
2. 定性依据：化学标准品主峰保留时间 17.1 min → 诱导组（BL21 + IPTG + 对香豆酸）在 17.1 min 出现一致特征峰
3. 阴性对照：未诱导对照（无 IPTG）在 17.1 min 处无峰 → 排除培养基与底物本底干扰

---

## [B7.2] 图上标的 400 是什么？能推算出哪份样品的浓度？
- **ID**: `b7-2`
- **Slide**: `B7` (Page 13)
- **English Question**: What does 400 on the chromatogram mean, and what concentration can you infer?
- **Keywords**: 400 peak area actual naringenin yield concentration supernatant 7.32 14.65 mg/L 53.8 uM 实际产量 换算到上清液 发酵液 峰面积400

### 英文分点 (1·2·3)
1. [Direct Conclusion] The number 400 is the integrated peak area of naringenin at 17.1 minutes.
2. [Experimental Evidence] Plugging $\text{Area} = 400$ into our external standard curve on Slide B13 ($\text{Area} = 44{,}052.04 \times C + 77.42$) gives a concentration of **7.32 mg/L (26.9 µM)** in the HPLC sample vial. Because our sample preparation mixes 500 µL of fermentation broth 1:1 with 500 µL of anhydrous ethanol before centrifugation (a twofold dilution), converting back gives an actual yield of **14.65 mg/L, or about 53.8 µM**, in the fermentation broth.
3. [Boundary & Next Step] Notably, ~53.8 µM falls right into the active sensing range (50–400 µM) of our EcN receiver on Slide B8.

### 中文分点 (1·2·3)
1. 【核心结论】`400` 是 17.1 分钟处柚皮素峰的积分峰面积。
2. 【实验证据与数据】将 $\text{Area} = 400$ 代入 B13 页的外标标准曲线（$\text{Area} = 44{,}052.04 \times C + 77.42$），可算出 HPLC 进样小瓶中的柚皮素浓度为 **7.32 mg/L（26.9 µM）**。由于我们的样品前处理（实验方案 Dual P-04）是将 500 µL 发酵液与 500 µL 无水乙醇按 1:1 等体积混合提取后再离心取上清（即 2 倍稀释），乘以稀释倍数换算回原发酵液的实际产量为 **14.65 mg/L（约 53.8 µM）**。
3. 【边界与下一步】值得强调的是，53.8 µM 恰好落入 B8 页中 EcN 接收菌的有效激活区间（50–400 µM）。

### 答题思路速记 (中文关键词链)
1. 色谱峰读数（B7）：保留时间 17.1 min 处峰面积 Area ≈ 400
2. 进样瓶浓度（B13 标曲 Area = 44,052.04 × C + 77.42）：C_vial = 7.32 mg/L（26.9 µM）
3. 原发酵液上清产量（×2，因 1:1 等体积无水乙醇提取稀释）：14.65 mg/L（53.8 µM）→ 达到 EcN 激活阈值（≥50 µM）

---

## [B8.1] 怎么知道接收菌能识别柚皮素？阴性对照也有荧光吗？
- **ID**: `b8-1`
- **Slide**: `B8` (Page 14)
- **English Question**: How do you know EcN responds to naringenin when the uninduced cells also fluoresce?
- **Keywords**: EcN dose response negative control 0 uM background fluorescence 0-400 uM 阴性对照 识别柚皮素 梯度响应

### 英文分点 (1·2·3)
1. [Direct Conclusion] Yes, the 0 µM group shows some leaky baseline expression as the culture grows into stationary phase, which is common for transcriptional switches on multi-copy plasmids.
2. [Evidence & Scope] To evaluate true induction, we compare `RFU/OD₆₀₀` across all doses at matched time points: from 50 µM up to 400 µM naringenin, the normalized fluorescence rises well above the 0 µM baseline in a clear dose-dependent manner, which is also confirmed visually by the fluorescence micrographs on the right.

### 中文分点 (1·2·3)
1. 【核心结论】是的，0 µM 未诱导组在进入稳定期后会出现一定的基础泄漏荧光，这在多拷贝质粒搭载的转录开关中较为常见。
2. 【实验证据与数据】为了准确评估柚皮素的诱导效应，我们在相同时间点横向对比各浓度组的 `RFU/OD₆₀₀`：在 50 µM 至 400 µM 范围内，加药组的归一化荧光均显著高于同一时间的 0 µM 对照组，且呈现出清晰的浓度梯度依赖性；
3. 【边界与下一步】右侧的荧光显微图也直观印证了加与不加柚皮素的显著差异。

### 答题思路速记 (中文关键词链)
1. 低浓度（0 / 50 µM）重叠原因：FdeR–PfdeAR 具有激活阈值，≤50 µM 处于基底区，≥100–400 µM 显著拉开梯度
2. 0 h 出现负值原因：扣除了空载 EcN 固定背景均值（11.44 RFU），并非仪器读数为负
3. 原始数据验证：0 h 0 µM 原始荧光为正值（10.46 RFU），略低于背景均值 → 归一化后为 −1.94 RFU/OD600；24 h 400 µM 升至 +30.92

---

## [B8.2] 这些曲线能告诉我们两株菌共培养时实际有多少柚皮素吗？
- **ID**: `b8-2`
- **Slide**: `B8` (Page 14)
- **English Question**: Can you read the actual co-culture naringenin concentration from these curves?
- **Keywords**: co-culture actual naringenin concentration from dose curve 共培养实际浓度 外加浓度 推算

### 英文分点 (1·2·3)
1. [Direct Conclusion] Not directly from B8 alone, because B8 is a calibration of the EcN receiver using known exogenous doses of naringenin (0 to 400 µM).
2. [Evidence & Scope] However, when we combine B8 with our sender HPLC yield from B7 and B13 (~53.8 µM naringenin produced by the BL21 sender), we can see that the sender's output reaches the ≥50 µM active range on these B8 curves, which explains why the co-culture on Slide B9 turns on.

### 中文分点 (1·2·3)
1. 【核心结论】仅靠 B8 页自身不能直接读出共培养浓度，因为 B8 是用已知浓度的外源柚皮素（0–400 µM）对 EcN 接收菌进行的独立标定。
2. 【证据与边界】但将 B8 与发送端的 HPLC 定量结果（B7 与 B13 页测得 BL21 发送菌产生约 53.8 µM 柚皮素）结合起来看，发送菌的产量刚好跨过 B8 曲线中 $\ge 50\text{ }\mu\text{M}$ 的有效响应区间，从定量上解释了为什么 B9 页的共培养体系能够被成功激活。

### 答题思路速记 (中文关键词链)
1. 统计含义：曲线代表生物重复均值，彩色阴影带代表 95% 置信区间（误差范围）
2. 重复数：高浓度组（100 / 200 / 400 µM）阴影带与 0 µM 基线完全分离 → 证实 12–24 h 具有显著剂量依赖响应
3. 显微图印证：右侧荧光显微图像同步证实高浓度下细胞群体普遍激活

---

## [B9.1] 三张图从左到右是什么？你们实际观察到了什么？
- **ID**: `b9-1`
- **Slide**: `B9` (Page 15)
- **English Question**: What do the three micrographs show, from left to right?
- **Keywords**: three microscopy panels monoculture co-culture sender receiver 1:1 三张显微图 单培养 共培养 从左到右

### 英文分点 (1·2·3)
1. [Direct Conclusion] From left to right, the three panels show the BL21 sender monoculture (which carries no GFP and is completely dark), the uninduced EcN receiver monoculture (which shows only faint basal green fluorescence), and the 1:1 BL21–EcN co-culture supplemented with IPTG and *p*-coumaric acid but no exogenous naringenin.
2. [Evidence & Scope] In the co-culture panel, we observe a much brighter and denser population of green-fluorescent EcN cells, showing that the sender activates the receiver in co-culture.

### 中文分点 (1·2·3)
1. 【核心结论】从左到右依次为：BL21 发送菌单培养对照组（不含 GFP 基因，视野全暗）、未诱导的 EcN 接收菌单培养对照组（仅有微弱的基础绿色背景荧光），以及添加了诱导剂 IPTG 和底物对香豆酸、但未外加柚皮素的 1:1 BL21–EcN 共培养组。
2. 【证据与边界】在右侧共培养视野中，我们观察到亮度显著增强、密度更高的绿色荧光菌体，直接证实发送菌在共培养体系中激活了接收菌。

### 答题思路速记 (中文关键词链)
1. 实验设置：1:1 共培养（BL21 发送菌 + EcN 接收菌）+ 对香豆酸 + IPTG，全程不加外源柚皮素
2. 双单菌阴性对照：单独 BL21（产柚皮素但无 GFP）无荧光 | 单独 EcN（有 NrSr–sfGFP 但无柚皮素合成能力）无荧光
3. 结论：唯有两菌共培养才亮起强绿色荧光 → 证实 BL21 从头合成的柚皮素跨菌激活了 EcN

---

## [B9.2] 能报一个荧光提高倍数吗？能排除其他共培养效应吗？
- **ID**: `b9-2`
- **Slide**: `B9` (Page 15)
- **English Question**: Can you give a fold change or rule out other co-culture effects?
- **Keywords**: fold change fluorescence crosstalk other metabolites 倍数 提高几倍 排除其他共培养效应

### 英文分点 (1·2·3)
1. [Direct Conclusion] Because Slide B9 is a qualitative microscopy readout of a mixed two-strain population (where total OD₆₀₀ includes both non-fluorescent BL21 and fluorescent EcN), we did not report a bulk microplate fold change here.
2. [Experimental Evidence] Instead, we pair this microscopy result with the HPLC proof of naringenin synthesis (B7) and the EcN dose-response curves (B8).
3. [Boundary & Next Step] To quantify the exact fold change per receiver cell and rule out any minor cross-activation by *p*-coumaric acid, flow cytometry gating specifically on EcN is the ideal follow-up.

### 中文分点 (1·2·3)
1. 【核心结论】由于 B9 页是对双菌混合群体（总 OD₆₀₀ 中同时包含不发光的 BL21 和发光的 EcN）进行的定性显微成像，我们没有直接用酶标仪总读数报告倍数变化，而是将显微图像与发送端 HPLC 产峰证据（B7）及接收端梯度响应曲线（B8）联立构成证据链。
2. 【证据与边界】若要进一步精确测定单个接收菌细胞的荧光提升倍数并彻底排除底物对香豆酸的微弱交叉激活，下一步最理想的方法是采用流式细胞术（Flow Cytometry）圈门分析 EcN 群体。

### 答题思路速记 (中文关键词链)
1. 当前验证方式：荧光显微镜定性对比（共培养组强荧光 vs 单培养对照组暗背景）
2. 定量对标：HPLC 测得发送菌上清柚皮素达 53.8 µM（B7/B13），正处 EcN 定量激活窗口（≥50 µM，B8）
3. 下一步定量：流式细胞术（FACS）区分双菌群并直接测定共培养中 EcN 的单细胞荧光倍数

---

## [B10.1] 左边 hEGF 胶图该比较哪几条泳道？为什么 hEGF 诱导表达后在 8–15 kDa 之间会出现两个条带？
- **ID**: `b10-1`
- **Slide**: `B10` (Page 16)
- **English Question**: Which hEGF lanes should we compare, and why might the expression group show two bands?
- **Keywords**: hEGF two bands doublet 8-15 kDa 11.10 kDa 8.89 kDa PelB signal peptide cleavage V1 V2 H1 H2 为什么有两个条带 双条带 前体 切除 浓缩上清

### 英文分点 (1·2·3)
1. [Direct Conclusion] On the left gel, we compare the empty-vector control supernatants (`V1` and `V2`) against the induced `hEGF-pET22b` supernatants (`H1` and `H2`), all concentrated fivefold.
2. [Experimental Evidence] In `H1` and `H2`, a clear doublet appears between 8 and 15 kDa because our construct fuses an N-terminal PelB periplasmic signal peptide (~2.2 kDa) and a C-terminal 6×His tag to hEGF:
- The **upper band (~11.10 kDa)** matches the uncleaved precursor (`PelB–hEGF–Linker–6×His`);
- The **lower band (~8.89 kDa)** matches the mature secreted protein (`hEGF–Linker–6×His`) after signal peptidase cleaves off PelB. Under strong T7/IPTG induction for 24 hours, high translation rates partially saturate the inner-membrane Sec translocon and signal peptidase, while outer-membrane leakage or partial lysis over 24 hours releases both the mature 8.89 kDa form and a fraction of the 11.10 kDa precursor into the supernatant.
3. [Boundary & Next Step] To confirm both bands definitively, our next step is an anti-His Western blot.

### 中文分点 (1·2·3)
1. 【核心结论】左图应对比空载体对照上清（`V1`、`V2`）与 `hEGF-pET22b` 诱导组上清（`H1`、`H2`），所有样品均经 5 倍超滤浓缩。
2. 【实验证据与数据】在 `H1` 和 `H2` 的 8–15 kDa 区间出现了空载体没有的清晰双条带（doublet），原因在于我们在 hEGF 的 N 端融合了约 2.2 kDa 的 PelB 周质信号肽、C 端融合了 6×His 标签：
- **上方条带（理论分子量约 11.10 kDa）**：对应尚未切除 PelB 信号肽的前体蛋白（`PelB–hEGF–Linker–6×His`）；- **下方条带（理论分子量约 8.89 kDa）**：对应经信号肽酶切除 PelB 后的成熟分泌蛋白（`hEGF–Linker–6×His`）。在 T7/IPTG 强诱导 24 小时条件下，高速翻译部分饱和了大肠杆菌内膜 Sec 转运通道与信号肽酶，伴随 24 小时培养过程中的外膜通透性增加或少量裂解，使 8.89 kDa 成熟蛋白与部分 11.10 kDa 前体共同进入上清。
3. 【边界与下一步】下一步我们将通过 Anti-His Western blot 对两条带进行定性确证。

### 答题思路速记 (中文关键词链)
1. 样品来源差异：左图 hEGF 取自 5× 浓缩培养上清液（验证胞外分泌）；右图 LSp222 取自全菌裂解液（验证诱导表达量）
2. 截断原因：两组蛋白分子量跨度不同（hEGF 8–15 kDa vs LSp222 ~28 kDa），分别截取目标分子量区间放大展示
3. 对照设置：hEGF 设空载体对照（V1/V2 均无条带）；LSp222 设 0 / 0.5 / 1 mM IPTG 诱导对照（仅诱导组出现 ~28 kDa 条带）

---

## [B10.2] 右边 LSp222 的条带就能证明它有活性吗？
- **ID**: `b10-2`
- **Slide**: `B10` (Page 16)
- **English Question**: Does the LSp222 band on the right demonstrate activity?
- **Keywords**: LSp222 SDS-PAGE 27-28 kDa band activity proof 右边条带 证明活性 可溶性组分

### 英文分点 (1·2·3)
1. [Direct Conclusion] The gel on the right demonstrates inducible soluble expression: compared with the uninduced lane, both the 0.5 mM and 1 mM IPTG lanes show a clear induced band around 28.0 kDa matching the theoretical mass of `PelB–LSp222–6×His` (28.02 kDa).
2. [Evidence & Scope] The proof of antibacterial lytic activity comes on the next two slides: Slide B11 for the crude lysate and Slide B12 for the Ni-NTA purified protein.

### 中文分点 (1·2·3)
1. 【核心结论】右图的 SDS-PAGE 证明的是可溶性诱导表达：与未诱导泳道相比，0.5 mM 和 1 mM IPTG 诱导泳道在约 28.0 kDa 处均出现明显的诱导增强条带，与 `PelB–LSp222–6×His` 的理论分子量（28.02 kDa）高度吻合。
2. 【证据与边界】至于抗菌裂解活性的直接证据，则展示在随后的两页中：B11 页为粗提物裂解曲线，B12 页为 Ni-NTA 纯化蛋白的裂解曲线。

### 答题思路速记 (中文关键词链)
1. 双条带成因（8–15 kDa）：N 端融合了 PelB 信号肽（~2.2 kDa），高表达下发生部分信号肽切除
2. 上条带（11.10 kDa）：未切除 PelB 的前体（PelB–hEGF–Linker–6×His） | 下条带（8.89 kDa）：切除 PelB 后的成熟分泌态（hEGF–Linker–6×His）
3. 机制与下一步：T7 强诱导使 Sec 转运通道部分饱和 + 24 h 培养外膜渗漏 → 下一步做 Anti-His Western blot 与角质形成细胞划痕实验

---

## [B11.1] 为什么要选表皮葡萄球菌来比？图里的百分数怎么算？
- **ID**: `b11-1`
- **Slide**: `B11` (Page 17)
- **English Question**: Why test S. epidermidis too, and how did you calculate the percentages?
- **Keywords**: why S. epidermidis comparison 61% 25% 0.393 0.751 TBS control 为什么选表皮葡萄球菌 百分数怎么算

### 英文分点 (1·2·3)
1. [Direct Conclusion] Because *S. epidermidis* is our own sender strain living in the same wound environment, we needed to check whether LSp222 lyses our target pathogen *S. aureus* more strongly than our engineered commensal.
2. [Experimental Evidence] We normalized each strain's turbidity to its own time-zero OD₆₀₀ (`Relative OD₆₀₀ = OD(t) / OD(0)`) alongside a TBS buffer control.
3. [Boundary & Next Step] After 30 minutes, relative OD₆₀₀ dropped to 0.393 in *S. aureus* (a **61% reduction**) versus 0.751 in *S. epidermidis* (a **25% reduction**), confirming a strong lytic preference toward *S. aureus*.

### 中文分点 (1·2·3)
1. 【核心结论】因为表皮葡萄球菌正是我们体系自身的发送菌，与目标致病菌金黄色葡萄球菌处于同一创面环境中，所以我们必须检验 LSp222 是否对目标金葡菌具有更强的裂解偏好。
2. 【实验证据与数据】实验将两种菌各自的浊度按 0 小时初始 OD₆₀₀ 归一化（`Relative OD₆₀₀ = OD(t) / OD(0)`），并设平行的 TBS 缓冲液对照。
3. 【边界与下一步】处理 30 分钟后，金葡菌的相对 OD₆₀₀ 降至 0.393（**下降 61%**），而表皮葡萄球菌仅降至 0.751（**下降 25%**），证实 LSp222 对金葡菌具有显著的优先裂解活性。

### 答题思路速记 (中文关键词链)
1. 相对比较结论成立：两菌种在完全相同的蛋白剂量、温度与缓冲液下平行测定（金葡菌下降 61% vs 表皮葡萄球菌 25%）
2. 缓冲液漂移说明：金葡菌 TBS 对照基本平稳，表皮葡萄球菌 TBS 对照有约 23% 自然沉降漂移
3. 扣除背景后净效应：金葡菌净裂解率（~55–60%）依然远高于表皮葡萄球菌（<3%）→ 选择性更为显著

---

## [B11.2] 可以说 LSp222 杀死了 61% 的金葡菌，而且不伤发送菌吗？
- **ID**: `b11-2`
- **Slide**: `B11` (Page 17)
- **English Question**: Can you say you killed 61% of S. aureus and spared the sender?
- **Keywords**: killed 61% S. aureus without harming sender CFU vs OD600 杀死61% 不伤发送菌 浊度 活菌数

### 英文分点 (1·2·3)
1. [Direct Conclusion] More precisely, we state that LSp222 reduced *S. aureus* suspension turbidity by 61% in 30 minutes while showing a much smaller 25% reduction on *S. epidermidis*.
2. [Evidence & Scope] Because both species are staphylococci that share peptidoglycan cross-bridge features, some cross-activity on *S. epidermidis* is expected; this is also why our spatial hydrogel dressing separates the bacterial layers from the wound bed and why CFU plating would be used to quantify exact viable cell counts.

### 中文分点 (1·2·3)
1. 【核心结论】更严谨的表述是：在相同测试条件下，LSp222 粗提物在 30 分钟内使金葡菌悬液浊度下降了 61%，而对表皮葡萄球菌的浊度影响要小得多（下降 25%）。
2. 【实验证据与数据】由于两者同属葡萄球菌属、细胞壁肽聚糖五甘氨酸交联桥结构存在一定相似性，对表皮葡萄球菌产生一定交叉裂解是符合生化预期的；
3. 【边界与下一步】这也正是我们在硬件设计上采用水凝胶分层隔离保护工程菌的原因，后续还可通过平板 CFU 计数进一步定量活菌杀灭率。

### 答题思路速记 (中文关键词链)
1. 浊度下降法（OD600 减少率）：肽聚糖水解酶（裂解酶）行业的标准快速定量方法（直接反映细胞壁破裂溶解）
2. 区分抑菌与杀菌：30 min 内现有菌体悬液 OD600 骤降 61% → 只能由物理裂解引起，而非生长抑制
3. 下一步补充：活菌平板 CFU 计数测定对数杀灭率（log-reduction）

---

## [B12.1] 纯化以后还有活性吗？如何把胶图和右边的曲线联系起来？
- **ID**: `b12-1`
- **Slide**: `B12` (Page 18)
- **English Question**: Did purified LSp222 retain activity? How do the gel and the curve support that?
- **Keywords**: purified LSp222 30 kDa 10.94 ug/mL 64% 15 min Ni-NTA 纯化后活性 15分钟 64%

### 英文分点 (1·2·3)
1. [Direct Conclusion] Yes, Ni-NTA purified LSp222 retained strong lytic activity.
2. [Experimental Evidence] On the left SDS-PAGE gel, the eluted fraction shows a clean predominant band near 28–30 kDa confirming that LSp222 is the main protein species after purification.
3. [Boundary & Next Step] When we applied that purified fraction to *S. aureus* on the right panel, just 10.94 µg/mL of purified LSp222 reduced OD₆₀₀ by 64% within 15 minutes, proving that the lytic activity observed in B11 comes directly from LSp222 rather than background *E. coli* lysate components.

### 中文分点 (1·2·3)
1. 【核心结论】是的，经 Ni-NTA 亲和纯化后的 LSp222 保持了强劲的裂菌活性。
2. 【实验证据与数据】左图 SDS-PAGE 显示洗脱组分在 28–30 kDa 处呈现单一主条带，证实 LSp222 是纯化后的主要蛋白成分；
3. 【边界与下一步】右图将该纯化蛋白作用于金黄色葡萄球菌，仅需 10.94 µg/mL 的纯化 LSp222 即可在 15 分钟内使金葡菌 OD₆₀₀ 下降约 64%，证明 B11 中观察到的快速裂菌活性确实来自 LSp222 蛋白本身，而非大肠杆菌裂解液背景成分。

### 答题思路速记 (中文关键词链)
1. 两页角色互补：B11（粗提物）侧重「双菌种选择性对比」；B12（Ni-NTA 纯化蛋白）侧重「单一纯酶活性归因」
2. B12 核心数据：纯化获得 ~30 kDa 主条带 → 仅需 10.94 µg/mL 纯化酶，15 min 内即可使金葡菌 OD600 下降 64%
3. 结论：排除大肠杆菌裂解液杂蛋白干扰，证实裂解活性直接来自 LSp222 本身

---

## [B12.2] 上一页是 61%，这页是 64%。能据此说纯化提高了活性吗？
- **ID**: `b12-2`
- **Slide**: `B12` (Page 18)
- **English Question**: You report 61% on B11 and 64% here. Does that show purification improved activity?
- **Keywords**: 61% vs 64% purification improved activity comparison 提高了活性 粗提物与纯化对比

### 英文分点 (1·2·3)
1. [Direct Conclusion] We don't compare 61% and 64% directly as a fold-improvement from purification because the two assays used different time windows and dosing formats: B11 measured an unquantified crude lysate over 30 minutes, whereas B12 tested defined concentrations of purified LSp222 (such as 10.94 µg/mL) over 15 minutes.
2. [Evidence & Scope] Rather than a head-to-head potency ratio, B12's role is to confirm that purified LSp222 alone drives rapid *S. aureus* lysis within 15 minutes.

### 中文分点 (1·2·3)
1. 【核心结论】我们不会直接拿 61% 和 64% 的差值来宣称纯化带来的活性提升倍数，因为两项实验的测定时间窗和给药形式不同：B11 测的是未定量的粗提物作用 30 分钟的结果，而 B12 测的是明确质量浓度的纯化蛋白（如 10.94 µg/mL）在 15 分钟内的快速裂解效果。
2. 【证据与边界】B12 的核心作用是证实纯化后的 LSp222 蛋白单独即可在 15 分钟内高效裂解金葡菌。

### 答题思路速记 (中文关键词链)
1. 剂量曲线特征：10.94 µg/mL 已达到酶对金葡菌细胞壁底物结合位点的饱和平台期（15 min 裂解 64%）
2. 更高浓度（21.9 / 43.8 µg/mL）表现：受限于底物位点饱和或高浓度下轻度自聚集，裂解速率不再继续升高
3. 工程优势：低剂量（~11 µg/mL）即可发挥最大杀菌活性 → 降低了工程菌的代谢表达负担

---

## [B13.1] 标准曲线怎么读？R² 很高，具体说明什么？
- **ID**: `b13-1`
- **Slide**: `B13` (Page 19)
- **English Question**: How do you use the calibration curve, and what does the high R² tell you?
- **Keywords**: HPLC standard curve R2 0.999980 equation 44052.04 77.42 标曲 线性拟合 方程

### 英文分点 (1·2·3)
1. [Direct Conclusion] We ran five serial dilutions of an authentic naringenin standard at 280 nm and plotted integrated peak area at 17.1 minutes against concentration in g/L, yielding the linear equation $\text{Area} = 44{,}052.04 \times C + 77.42$ with $R^2 = 0.999980$.
2. [Evidence & Scope] The high $R^2$ confirms that UV detector response is strictly linear across our calibration range, allowing us to convert the integrated peak area of our fermentation extract on Slide B7 into an exact concentration.

### 中文分点 (1·2·3)
1. 【核心结论】我们在 280 nm 波长下测定了五个梯度浓度的柚皮素化学标准品，以 17.1 分钟处的积分峰面积对质量浓度 $C$（单位：g/L）作线性回归，得到标准曲线方程 $\text{Area} = 44{,}052.04 \times C + 77.42$，相关系数达 $R^2 = 0.999980$。
2. 【证据与边界】极高的 $R^2$ 说明紫外检测器在该浓度区间内响应严格线性，使我们能够将 B7 页发酵提取物的积分峰面积准确换算为柚皮素质量浓度。

### 答题思路速记 (中文关键词链)
1. 标曲方程：Area = 44,052.04 × C(g/L) + 77.42（R² = 0.99998，5 点外标法，280 nm）
2. 进样瓶浓度计算：代入 B7 样品峰面积 Area ≈ 400 → C_vial = (400 − 77.42) / 44,052.04 = 7.32 mg/L（26.9 µM）
3. 发酵液上清浓度（×2 稀释因子）：前处理采用 500 µL 发酵液 + 500 µL 无水乙醇 1:1 萃取 → 原上清浓度 = 14.65 mg/L（53.8 µM）

---

## [B13.2] 结合 B7 的样品峰面积和 B13 的标曲，怎样估算原发酵样品的柚皮素浓度？
- **ID**: `b13-2`
- **Slide**: `B13` (Page 19)
- **English Question**: How do you get from peak area to an estimated concentration in the original sample?
- **Keywords**: calculate fermentation broth concentration from Area 400 and B13 7.32 14.65 mg/L 53.8 uM 标曲折算 发酵液浓度 计算过程

### 英文分点 (1·2·3)
1. [Direct Conclusion] It is a two-step calculation.
2. [Experimental Evidence] First, substituting the sample peak area from Slide B7 ($\text{Area} \approx 400$) into the calibration equation gives $C_{\text{vial}} = (400 - 77.4206) / 44{,}052.0432 = 0.007323\text{ g/L}$, or **7.32 mg/L (26.9 µM)** in the HPLC vial. Second, because our extraction protocol mixes 500 µL of fermentation broth with an equal 500 µL volume of anhydrous ethanol (a 1:1 dilution), multiplying by 2 gives **14.65 mg/L, or 53.8 µM**, in the original fermentation broth.
3. [Boundary & Next Step] This shows our sender produces naringenin in the 50+ µM range where EcN responds on Slide B8.

### 中文分点 (1·2·3)
1. 【核心结论】换算分两步完成：第一步，将 B7 页测得的 17.1 分钟样品峰面积（$\text{Area} pprox 400$）代入标准曲线方程，求得 HPLC 进样小瓶中的浓度 $C_{\text{vial}} = (400 - 77.4206) / 44{,}052.0432 = 0.007323\text{ g/L}$，即 **7.32 mg/L（26.9 µM）**。
2. 【实验证据与数据】第二步，根据我们的提取方案（500 µL 发酵液与 500 µL 无水乙醇 1:1 等体积混合，即 2 倍稀释），乘以稀释倍数 2 得到原发酵液中的柚皮素实际浓度为 **14.65 mg/L（约 53.8 µM）**。
3. 【边界与下一步】这表明发送菌合成的柚皮素浓度恰好达到 B8 页中 EcN 接收菌 50 µM 以上的有效激活区间。

### 答题思路速记 (中文关键词链)
1. 样品点位置：Area ≈ 400 位于整条宽范围标曲（最高至 2.0 g/L）的低浓度端，故单独放大展示
2. 定量可靠性：① 远高于非诱导空白基线（Area = 0） ② 位于标曲正截距（77.42）之上 ③ 保留时间（17.1 min）严格吻合
3. 生物活性佐证：换算出的 53.8 µM 恰好处在 EcN 接收端激活窗口（≥50 µM），与 B9 共培养发光结果互相印证

---

## [B14.1] 你们说做过测序，测到的是全长完全一致吗？
- **ID**: `b14-1`
- **Slide**: `B14` (Page 20)
- **English Question**: Did your full construct match the reference base for base?
- **Keywords**: dspB Sanger sequencing alignment 965/971 99% 1 gap full length 测序比对 全长一致 965 971

### 英文分点 (1·2·3)
1. [Direct Conclusion] In this single-read Sanger sequencing alignment covering 971 bp of the *dspB* region, 965 positions matched the reference (99.4% identity, with 5 mismatches and 1 gap located near the noisy ends of the Sanger read).
2. [Evidence & Scope] So this read confirms that the *dspB* insert was correctly cloned into the vector, while full base-by-base verification across the entire plasmid requires overlapping forward and reverse reads.

### 中文分点 (1·2·3)
1. 【核心结论】在覆盖 `dspB` 编码区 971 bp 的单向 Sanger 测序比对中，有 965 个碱基与参考序列完全一致（一致性达 99.4%，其余 5 个错配和 1 个 gap 位于 Sanger 测序读长首尾的信号衰减区）。
2. 【实验证据与数据】这一结果证实 `dspB` 片段已正确插入载体；
3. 【边界与下一步】若要对全质粒实现逐碱基 100% 确证，只需补充反向引物测序（双向测序拼接）即可。

### 答题思路速记 (中文关键词链)
1. 测序比对结果：克隆 dspB 片段与参考序列在 971 bp 比对区段内有 965 bp 完全匹配（99% 一致性）
2. 零散差异原因：6 处差异集中在 Sanger 测序信号末端读长衰减区（base-calling 噪音），核心催化结构域无移码或无义突变
3. 覆盖范围：引物覆盖完整 dspB 编码区，质粒转化入宿主证据同步见 B4 菌落 PCR

---

## [B14.2] 剩下的差异会影响蛋白功能吗？
- **ID**: `b14-2`
- **Slide**: `B14` (Page 20)
- **English Question**: Could any of those differences alter protein function?
- **Keywords**: 6 mismatches 1 gap affect DspB protein function end-trimming 差异影响蛋白功能 末端低质量峰

### 英文分点 (1·2·3)
1. [Conclusion] In Sanger sequencing, a few base-call discrepancies near the 5' start or 3' tail of a ~1 kb read are typically chromatogram trace artifacts rather than true mutations, but we would need to inspect the raw `.ab1` trace peaks or run a reverse primer read to confirm that the coding frame is 100% mutation-free before assaying enzyme activity from this specific clone.
2. [Evidence] Validated in our modular wet-lab characterization.
3. [Scope] See the corresponding slide and protocol details below.

### 中文分点 (1·2·3)
1. 【核心结论】在约 1 kb 的单向 Sanger 测序中，靠近 5' 起始端或 3' 末端的个别碱基差异通常源于测序峰图两端的基线噪点而非真实突变；
2. 【证据与边界】为了确保编码框 100% 无突变，在进行工程菌破膜活性定量前，我们会核对原始 `.ab1` 峰图并用反向引物补测重叠区域。

### 答题思路速记 (中文关键词链)
1. 证据边界：Sanger 测序（B14）+ 菌落 PCR（B4）证明了「DNA 序列正确 + 质粒已进入宿主菌」
2. 尚未证明：工程化表皮葡萄球菌对 DspB 蛋白的实际胞外分泌量与生物膜清除率
3. 下一步实验：收集工程化表皮葡萄球菌上清 → SDS-PAGE / Western blot 验蛋白 + 结晶紫染色测破膜率

---

## [B15.1] 能沿着设计图把四条回路从信号识别讲到两个预期输出吗？
- **ID**: `b15-1`
- **Slide**: `B15` (Page 21)
- **English Question**: Can you walk us through the four circuits, from target detection to the two intended outputs?
- **Keywords**: full genetic circuits four circuits P2P3-DspB HmSr-Nr NrSr-PelB-LSp222 NrSr-PelB-hEGF AgrC AgrA HssRS At4CL PhCHS CmCHI FdeR PfdeAR 全套具体基因回路 四条回路 完整讲一遍

### 英文分点 (1·2·3)
1. [Direct Conclusion] Our complete system consists of four genetic circuits split across two hosts:
1.
2. [Experimental Evidence] **Biofilm Disruption in *S. epidermidis* (`P2P3–DspB`)**: *S. aureus* AIP activates the membrane sensor AgrC and response regulator AgrA, turning on the P2/P3 promoter to express Sec/SPII-tagged DspB, which hydrolyzes the PNAG biofilm matrix. 2. **Signal Relay Sender in *S. epidermidis* (`HmSr–Nr`)**: Wound-released heme activates endogenous HssS/HssR, inducing the pHrtBA promoter to express the three-enzyme `Nr` cascade (`At4CL`, `PhCHS`, and `CmCHI`) that converts *p*-coumaric acid into diffusible naringenin. 3. **Antibacterial Receiver in EcN (`NrSr–PelB–LSp222`)**: Naringenin binds the transcription factor FdeR in EcN and activates the PfdeAR promoter to express PelB-tagged chimeric lysin LSp222, lysing exposed *S. aureus*. 4.
3. [Boundary & Next Step] **Wound-Healing Receiver in EcN (`NrSr–PelB–hEGF`)**: Using the same FdeR/PfdeAR switch, naringenin drives PelB-directed secretion of hEGF to promote tissue repair (with `sfGFP` swapped in as the reporter during our communication assays).

### 中文分点 (1·2·3)
1. 【核心结论】我们的完整系统由分布在两株工程底盘中的 **4 条核心基因回路**组成：
1. **生物膜破坏回路（表皮葡萄球菌 · `P2P3–DspB`）**：金黄色葡萄球菌分泌的群体感应肽 AIP 激活跨膜受体 AgrC 与响应调节蛋白 AgrA，启动 `P2/P3` 启动子驱动带 `Sec/SPII` 分泌信号肽的 `dspB` 表达外泌，特异性水解 PNAG 生物膜基质。
2. 【实验证据与数据】2. **信号接力发送回路（表皮葡萄球菌 · `HmSr–Nr`）**：创面释放的血红素（Heme）激活内源 `HssS/HssR` 双组分系统，开启 `pHrtBA` 启动子表达三酶级联（`At4CL`、`PhCHS`、`CmCHI`），将对香豆酸转化为可扩散信号分子柚皮素。3. **抗菌接收回路（EcN · `NrSr–PelB–LSp222`）**：柚皮素进入 EcN 后结合转录因子 FdeR 并激活 `PfdeAR` 启动子，驱动 `pelB` 信号肽引导的嵌合裂解酶 `LSp222–6×His` 表达，杀灭暴露出来的金葡菌。
3. 【边界与下一步】4. **促愈合接收回路（EcN · `NrSr–PelB–hEGF`）**：同样利用 `FdeR / PfdeAR` 开关，在柚皮素诱导下驱动 `pelB–hEGF–6×His` 分泌人表皮生长因子促进伤口修复（在通讯表征实验中则将输出基因替换为报告基因 `sfGFP`）。

### 答题思路速记 (中文关键词链)
1. 四条回路分驻两株底盘（表皮葡萄球菌发送端 + 大肠杆菌 EcN 接收端）
2. 表皮葡萄球菌（2 条）：① P2P3–DspB（感知金葡菌 AIP → 分泌 DspB 破生物膜） ② HmSr–Nr（感知血红素 → 表达三酶合成柚皮素）
3. EcN 接收端（2 条）：NrSr（FdeR / PfdeAR）感知柚皮素 → 分别驱动 PelB–LSp222（裂解金葡菌）与 PelB–hEGF（促进表皮修复）

---

## [B15.2] 这四条回路是在同一次实验里串联测通的吗？
- **ID**: `b15-2`
- **Slide**: `B15` (Page 21)
- **English Question**: Did you run all four circuits together in one experiment?
- **Keywords**: four circuits tested together in one experiment modular validation 四条回路同一次实验串联 分模块验证

### 英文分点 (1·2·3)
1. [Direct Conclusion] No, we validated the system modularly rather than in a single four-circuit pot.
2. [Experimental Evidence] Specifically, we tested DspB biofilm dispersal (B3), *S. epidermidis* hemin sensing (B6), BL21 naringenin synthesis (B7), EcN naringenin sensing (B8), BL21–EcN co-culture signaling (B9), and LSp222/hEGF protein production and lysis (B10–B12) in dedicated experiments.
3. [Boundary & Next Step] This modular approach let us verify each genetic switch and enzyme function quantitatively before full consortium assembly.

### 中文分点 (1·2·3)
1. 【核心结论】不是在单次四回路混合实验中测的，我们采取了分模块定量验证的策略：分别通过独立实验验证了 DspB 生物膜清除（B3）、表皮葡萄球菌血红素感知（B6）、BL21 柚皮素合成（B7）、EcN 柚皮素梯度响应（B8）、BL21–EcN 双菌共培养通讯激活（B9），以及 LSp222 和 hEGF 的蛋白表达与裂菌功能（B10–B12）。
2. 【证据与边界】这种模块化验证让我们在组装完整双菌群落前，先把每一级遗传开关和效应蛋白的功能参数摸清楚。

### 答题思路速记 (中文关键词链)
1. 已闭环模块：表皮葡萄球菌 HmSr 血红素传感（B6） | BL21 Nr 合成柚皮素（B7） | EcN NrSr 感知响应（B8） | BL21→EcN 共培养跨菌接力（B9） | LSp222 与 hEGF 表达及功能初筛（B10–B12）
2. 待收尾节点：① 工程化表皮葡萄球菌 DspB 分泌酶活测定 ② Nr 三酶簇从 BL21 迁移至表皮葡萄球菌 ③ EcN 端由 sfGFP 切换为治疗蛋白共培养输出

---

## [B16.1] 荧光变强会不会只是因为细菌长得更多？
- **ID**: `b16-1`
- **Slide**: `B16` (Page 22)
- **English Question**: Could the hemin fluorescence signal simply mean that more bacteria grew?
- **Keywords**: growth change interfere fluorescence normalization OD600 B6 vs B16 生长变化干扰荧光 细菌长得更多

### 英文分点 (1·2·3)
1. [Direct Conclusion] No, for two reasons.
2. [Experimental Evidence] First, every fluorescence curve on Slide B6 is already normalized to cell density (`RFU/OD₆₀₀`) and referenced against the time-matched 0 µM control. Second, when you compare Slide B16 and Slide B6 at 1 µM hemin, cell density (`OD₆₀₀`) increases steadily over 5 hours on B16, whereas normalized fluorescence (`RFU/OD₆₀₀`) rises to a sharp peak at 1.7 hours on B6 and then comes back down.
3. [Boundary & Next Step] That distinct kinetic peak proves specific promoter activation rather than simple bacterial growth.

### 中文分点 (1·2·3)
1. 【核心结论】不是因为细菌长得更多，原因有两点：第一，B6 页的所有荧光曲线均已除以同一时间点的菌体密度（`RFU/OD₆₀₀`），并扣除了同时间点 0 µM 对照组的基线；
2. 【实验证据与数据】第二，将 B16 页与 B6 页的 1 µM hemin 组对照来看，B16 上的菌体密度 `OD₆₀₀` 在 5 小时内持续平稳上升，而 B6 上的单位菌体荧光 `RFU/OD₆₀₀` 却在 1.7 小时处出现尖锐峰值并随后回落。
3. 【边界与下一步】这种截然不同的动力学波形证明信号来自启动子特异性激活，而非菌体数量增长。

### 答题思路速记 (中文关键词链)
1. 双图联读目的：排除「细菌生长量差异」或「血红素毒性」对荧光读数的干扰
2. 低浓度区（1 µM / 2.5 µM）：OD600 生长曲线与 0 µM 正常对照几乎完全重合 → 证实 1.7 h 荧光峰是真实的基因转录激活，而非生长假象
3. 高浓度区（10 µM）：OD600 显著受抑 → 解释了 B6 中 10 µM 组荧光贴近零线源于高浓度血红素的生长毒性

---

## [B16.2] 生长图的阴影是什么？能据此说低剂量完全不影响生长吗？
- **ID**: `b16-2`
- **Slide**: `B16` (Page 22)
- **English Question**: What does the shaded region mean? Does low-dose hemin have no effect on growth?
- **Keywords**: shaded band 95% confidence interval two wells n=2 low dose growth 阴影 置信区间 两个孔 不影响生长

### 英文分点 (1·2·3)
1. [Direct Conclusion] The shaded band is the 95% pointwise confidence interval around the smoothed curve fitted to the blank-corrected mean of two duplicate wells.
2. [Evidence & Scope] What the curves show is that at low hemin doses (1 and 2.5 µM), *S. epidermidis* continues to grow actively alongside the 0 µM control, whereas high concentrations (5 and 10 µM) noticeably slow growth, which explains why our sensor operates best in the low-micromolar heme range.

### 中文分点 (1·2·3)
1. 【核心结论】阴影带是对两个平行孔空白校正均值拟合平滑曲线的 95% 逐点置信区间。
2. 【实验证据与数据】这组生长曲线表明：在低剂量 hemin（1 µM 和 2.5 µM）下，表皮葡萄球菌与 0 µM 对照组一样保持活跃生长；
3. 【边界与下一步】而在高浓度（5 µM 和 10 µM）下生长明显受抑，这也解释了为什么我们的血红素传感器最适合工作在低微摩尔浓度区间。

### 答题思路速记 (中文关键词链)
1. 数据呈现形式：B16 与 B6 展示的是多孔板连续动力学监测的均值轨迹，旨在清晰对比多浓度组趋势
2. 统计支撑：底层实验包含独立复孔测定（B8 等关键定量页已展示完整 95% 置信区间阴影带）
3. 后续完善：将在补充材料中统一附上所有时间点的标准差（SD）误差棒

---

## [B17.1] 为什么在候选信号分子里最终选择柚皮素？它相比其他分子的核心优势是什么？
- **ID**: `b17-1`
- **Slide**: `B17` (Page 23)
- **English Question**: Why did you choose naringenin over the other candidates?
- **Keywords**: why choose naringenin over IAA salicylic acid DAPG wound orthogonality anti-inflammatory pro-healing 为什么选柚皮素 候选信号分子 正交性 抗炎促愈合 优势

### 英文分点 (1·2·3)
1. [Direct Conclusion] We chose naringenin because it combines **wound orthogonality** with **intrinsic anti-inflammatory bioactivity**, while pairing with a well-characterized transcriptional receiver (`FdeR / PfdeAR`):
1.
2. [Experimental Evidence] **Wound orthogonality**: Unlike IAA (which many bacteria produce endogenously, creating high background crosstalk), salicylate (which interferes with bacterial quorum sensing and biofilm pathways), or DAPG (which can inhibit bacterial host growth), naringenin is a plant flavonoid absent from human tissue and the wound microbiome. 2.
3. [Boundary & Next Step] **Intrinsic anti-inflammatory & pro-healing bioactivity**: Naringenin itself has documented antioxidant, anti-inflammatory, and pro-repair properties in skin wounds, meaning our signaling molecule also aligns directly with our therapeutic goal.

### 中文分点 (1·2·3)
1. 【核心结论】我们选择柚皮素是因为它兼具**创面正交性**与**内源抗炎促修复生物活性**两大核心优势，且拥有成熟的转录响应元件（`FdeR / PfdeAR`）：
1. **创面正交性（Wound orthogonality）**：相比于多种细菌可内源合成、容易产生背景串扰的吲哚乙酸（IAA），会干扰细菌群体感应与生物膜通路的水杨酸（Salicylate），以及对工程宿主有潜在生长抑制作用的 DAPG，柚皮素是植物源黄酮类分子，人体组织与皮肤创面菌群均不产生柚皮素，通讯背景干净。
2. 【证据与边界】2. **内源抗炎与促修复活性（Anti-inflammatory bioactivity）**：文献已广泛证实柚皮素自身具有抗氧化、抗炎及促进伤口修复的生物活性，作为跨菌通讯信号的同时与我们的创面治疗目标高度协同。

### 答题思路速记 (中文关键词链)
1. 四种候选分子横向评估（正交性 / 底盘相容性 / 创面生物活性），本队重点实验验证了胜出的柚皮素
2. 淘汰其余三种的原因：DAPG（具广谱抗菌性，抑制工程菌） | 水杨酸（干扰宿主与菌群信号） | IAA（多种细菌内源产生，背景串扰高）
3. 柚皮素实测表现：零背景正交激活 EcN（B8）+ 1:1 共培养成功通讯（B9）

---

## [B17.2] 你们自己的实验验证了柚皮素的哪一部分功能？
- **ID**: `b17-2`
- **Slide**: `B17` (Page 23)
- **English Question**: Which of those properties did your own experiments test?
- **Keywords**: which naringenin function validated by your own wet lab experiments 实验验证了哪一部分功能

### 英文分点 (1·2·3)
1. [Direct Conclusion] In the wet lab, we focused on validating naringenin's function as an inter-strain communication signal: we demonstrated its enzymatic synthesis in the sender by HPLC (Slide B7), characterized its dose-dependent transcriptional activation of the EcN receiver (Slide B8), and confirmed cell-to-cell signal relay in sender–receiver co-culture (Slide B9).
2. [Evidence & Scope] Its low wound background and anti-inflammatory properties came from our literature-based design screening across the four candidate molecules.

### 中文分点 (1·2·3)
1. 【核心结论】在湿实验部分，我们重点验证了柚皮素作为跨菌通讯信号的核心功能：包括通过 HPLC 验证发送菌的酶促合成（B7 页）、在接收菌 EcN 中标定其剂量依赖性转录激活曲线（B8 页），以及在双菌共培养中证实跨菌信号传递（B9 页）。
2. 【证据与边界】而“创面低背景正交性”与“内源抗炎活性”则是我们在立项设计阶段对四类候选信号分子进行文献与机制筛选的核心依据。

### 答题思路速记 (中文关键词链)
1. 双重定位：在本项目中以「跨菌通讯信使分子」为主，同时具备「天然抗炎促修复」的附加协同价值
2. 浓度对比：实测发酵上清产量达 53.8 µM（14.65 mg/L）→ 完全达到激活 EcN 基因回路的阈值（≥50 µM）
3. 文献协同区间：50 µM 同样处于文献报道的黄酮局部抗炎与抗氧化活性浓度范围（10–100 µM）

---

## [X01] B8
- **ID**: `x01`
- **Slide**: `B8` (Page 14)
- **English Question**: Why are some fluorescence values negative? Which background did you subtract?
- **Keywords**: negative fluorescence below zero B8 -2.29 -1.94 background subtraction 10.455 11.4367 为什么会测出负荧光 负数 扣了谁的背景 低于零

### 英文分点 (1·2·3)
1. [Direct Conclusion] All raw fluorescence readings from the plate reader were positive.
2. [Experimental Evidence] The slightly negative values at early time points on Slide B8 happen because we subtracted the autofluorescence of wild-type EcN (lacking *sfGFP*) before dividing by blank-corrected OD₆₀₀. At 0 hours, before any sfGFP accumulates, a few uninduced wells had slightly lower raw fluorescence than that wild-type reference average, producing a small negative number after subtraction.
3. [Boundary & Next Step] So a negative value simply means the sample was slightly dimmer than the wild-type background reference at time zero.

### 中文分点 (1·2·3)
1. 【核心结论】酶标仪测得的原始荧光读数全部是正值。
2. 【实验证据与数据】B8 页早期时间点之所以出现轻微负值，是因为我们在除以空白校正后的 `OD₆₀₀` 之前，先扣除了同宿主野生型 EcN（不带 `sfGFP` 质粒）的自发荧光背景均值。在 0 小时刚接种、sfGFP 尚未表达积累时，个别未诱导孔的原始荧光读数略低于这份野生型背景参照均值，相减后就会呈现微小的负数。
3. 【边界与下一步】因此，负值仅代表该样品在初始时刻的亮度略低于野生型背景参照，并不意味着“负发光”。

### 答题思路速记 (中文关键词链)
1. 并非仪器读数为负 → 0 h、0 µM 原始荧光读数为正值（10.455 RFU）
2. 负值计算成因：公式 (RFU_sample − RFU_bg) / (OD_sample − OD_bg) 扣除了空载 EcN 的固定背景均值（11.4367 RFU）
3. 数值还原：(10.455 − 11.4367) / (0.52525 − 0.09738) = −2.29 RFU/OD600（三重复均值 −1.94）；24 h 400 µM 组升至 +30.92

---

## [X02] B6
- **ID**: `x02`
- **Slide**: `B6` (Page 12)
- **English Question**: Why do some B6 curves sit on zero? Did you discard negative values?
- **Keywords**: flat at zero line B6 negative values deleted clipped zero-hemin control 贴着零 负值删了吗 零线

### 英文分点 (1·2·3)
1. [Direct Conclusion] We did not discard any data points during calculation or curve fitting.
2. [Experimental Evidence] On Slide B6, the y-axis plots the net increase in normalized fluorescence above the time-matched 0 µM control ($\Delta\text{RFU/OD}_{600}$).
3. [Boundary & Next Step] At higher hemin concentrations (5 and 10 µM), hemin toxicity and inner-filter absorbance quenching pulled the normalized signal slightly below the 0 µM control; we retained those negative differences when fitting the curves and clamped the plotted baseline at zero so the graph focuses on positive sensor activation.

### 中文分点 (1·2·3)
1. 【核心结论】我们在数值计算和曲线拟合过程中完整保留了所有正负数据，没有删点。
2. 【实验证据与数据】B6 页纵轴绘制的是加 hemin 组相对于同一时间点 0 µM 对照组的归一化荧光净增量（$\Delta\text{RFU/OD}_{600}$）。在高浓度 hemin（5 µM 和 10 µM）下，受血红素生理毒性及内滤光吸收淬灭影响，处理组的归一化荧光略低于 0 µM 对照（差值为负）；
3. 【边界与下一步】我们在拟合时保留了全部负差值，仅在作图显示时将基线截断在 0 轴上，以便聚焦展示正向传感器激活。

### 答题思路速记 (中文关键词链)
1. 双重生理机制导致 1.7–2.3 h 达峰后回落：① 内源外排解毒负反馈 ② 指数期细胞分裂稀释
2. 解毒负反馈：HssRS 同步激活内源 HrtBA 外排泵 → 将胞内游离 hemin 排出 → 启动子 pHrtBA 迅速关闭
3. 生长稀释：细菌继续分裂（OD600 上升，见 B16），存量 sfGFP 不再新增但分母 OD600 增大 → 单位菌体荧光回落

---

## [X03] B8 / B16
- **ID**: `x03`
- **Slide**: `B8` (Page 14)
- **English Question**: A smaller OD alone could increase the ratio. Did raw fluorescence actually increase?
- **Keywords**: OD600 drop artifact raw fluorescence 17.78 vs 28.61 RFU 0.926 vs 0.846 24h BNDS-China 原始荧光升了没有 OD变小 比值升高

### 英文分点 (1·2·3)
1. [Direct Conclusion] Yes, raw fluorescence genuinely increased; it is not an artifact of a smaller OD denominator.
2. [Experimental Evidence] In our 24-hour EcN receiver data on Slide B8, mean raw fluorescence rose from **17.78 RFU at 0 µM to 28.61 RFU at 400 µM**, while blank-corrected OD₆₀₀ changed only slightly (from **0.926 to 0.846**).
3. [Boundary & Next Step] So the nearly threefold increase in normalized signal (from 6.87 to 20.29 RFU/OD₆₀₀) is driven primarily by higher GFP expression rather than growth inhibition.

### 中文分点 (1·2·3)
1. 【核心结论】原始荧光确实显著升高了，并非由分母 OD₆₀₀ 变小造成的假象。
2. 【实验证据与数据】直接对比 B8 页 EcN 接收端 24 小时的原始实测值：0 µM 对照组的原始荧光均值为 **17.78 RFU**，而 400 µM 诱导组上升至 **28.61 RFU**；与此同时，两组扣培养基空白后的 `OD₆₀₀` 均值仅从 **0.926** 轻微变为 **0.846**。
3. 【边界与下一步】因此，归一化信号从 6.87 到 20.29 $\text{RFU/OD}_{600}$ 的近 3 倍增长，主要由真实的 GFP 表达升高驱动。

### 答题思路速记 (中文关键词链)
1. 三步换算（B7 峰面积 → B13 标曲 → P-04 萃取稀释倍数）
2. 进样瓶浓度：B7 在 17.1 min 峰面积 ≈ 400 → 代入标曲 Area = 44,052.04 × C + 77.42 → C_vial = 7.32 mg/L（26.9 µM）
3. 原发酵上清浓度：样品前处理为 500 µL 发酵液 + 500 µL 无水乙醇（1:1 等体积萃取，稀释 2 倍）→ 乘以 2 得 14.65 mg/L（53.8 µM，达 EcN ≥50 µM 阈值）

---

## [X04] B6 / B8 / B11 / B16
- **ID**: `x04`
- **Slide**: `B8` (Page 14)
- **English Question**: How many independent observations does an error bar represent? How much confidence should we place in the dashed curves and peak times?
- **Keywords**: error bars n=3 biological vs technical replicates dashed curve plateau 1.72h 误差棒 几个独立样本 虚线平台 生物学重复

### 英文分点 (1·2·3)
1. [Direct Conclusion] Let me break that down by figure:
- On **Slide B8 (EcN receiver)**, each data point represents $n = 3$ independent biological cultures (each averaged across 2 technical duplicate wells), and error bars show the standard deviation across the 3 biological replicates.
2. [Evidence & Scope] We plotted the 0, 50, and 100 µM kinetic fits as dashed curves because their lower amplitudes don't reach a sharp saturation plateau within 24 hours, whereas 200 and 400 µM show well-constrained sigmoidal fits.
- On **Slide B11 (LSp222 lysis)**, error bars represent $n = 3$ replicate wells per group.
- On **Slide B6 and B16 (*S. epidermidis* hemin assays)**, curves are fitted to duplicate wells ($n = 2$), which is why we report the peak time on B6 as "about 1.7 hours" rather than over-interpreting the second decimal place.

### 中文分点 (1·2·3)
1. 【核心结论】各图的样本量与统计定义如下：
- **B8 页（EcN 接收端曲线）**：每个条件包含 $n = 3$ 个独立生物学培养物（每个培养物取 2 个技术复孔均值），误差棒代表 3 个独立培养物之间的标准差（SD）。
2. 【实验证据与数据】0、50 和 100 µM 组采用虚线绘制，是因为低浓度下响应幅值较低、24 小时内尚未进入明显的饱和平台期；而 200 和 400 µM 组则呈现约束良好的 S 型动力学曲线。- **B11 页（LSp222 裂菌曲线）**：每组误差棒代表 $n = 3$ 个平行实验孔的标准差。
3. 【边界与下一步】- **B6 与 B16 页（表皮葡萄球菌 hemin 实验）**：曲线拟合自两个平行孔（$n = 2$）的均值，因此我们在汇报 B6 峰值时间时统一表述为“约 1.7 小时”，不过度解读小数点后第二位。

### 答题思路速记 (中文关键词链)
1. 完整四条回路（B15）：表皮葡萄球菌 2 条 + 大肠杆菌 EcN 2 条
2. 表皮葡萄球菌：① P2P3–DspB（AIP → AgrC/AgrA → P2/P3 → 分泌 DspB 破膜） ② HmSr–Nr（Heme → HssS/HssR → pHrtBA → At4CL–PhCHS–CmCHI 产柚皮素）
3. EcN 接收端：NrSr（柚皮素 → FdeR / PfdeAR）→ 分别驱动 PelB–LSp222–6×His（杀菌）与 PelB–hEGF–6×His（修复）

---

## [X05] B7 / B13
- **ID**: `x05`
- **Slide**: `B7` (Page 13)
- **English Question**: Why does Results call it a candidate peak while Engineering assigns it to naringenin? Which sample gave 53.8 µM?
- **Keywords**: candidate peak vs confirmed peak Wiki Results vs Engineering 53.8 uM free extracellular 候选峰 已认峰 53.8微摩 哪份样品

### 英文分点 (1·2·3)
1. [Direct Conclusion] The wording difference reflects two stages of our analysis: when we first drafted the Results section (Fig.
2. [Experimental Evidence] 12), we cautiously called the 17.1-minute peak a "candidate peak" because HPLC retention time alone is a chromatographic match rather than mass spectrometry (LC-MS). In the Engineering section (Fig. 2.5) and on Slides B7 and B13, we paired that chromatogram with the five-point authentic naringenin standard curve run under the exact same method, confirming the retention-time match at 17.1 minutes.
3. [Boundary & Next Step] As for the **53.8 µM (14.65 mg/L)** value, that is the concentration in the induced BL21 fermentation broth calculated from the 17.1-minute peak area ($\text{Area} \approx 400$) after accounting for the 1:1 ethanol extraction dilution.

### 中文分点 (1·2·3)
1. 【核心结论】两处措辞差异对应我们数据分析的两个阶段：撰写 Wiki Results（图 12）初稿时，由于单凭 HPLC 保留时间属于色谱比对而非质谱（LC-MS）分子量确证，我们谨慎地将其表述为“约 17 min 的候选峰”；
2. 【实验证据与数据】而在 Wiki Engineering（图 2.5）及答辩 PPT 的 B7、B13 页中，我们将样品色谱图与完全相同条件下测定的五点柚皮素化学标准品标曲（17.1 min）并列比对，确认了保留时间匹配。
3. 【边界与下一步】至于 **53.8 µM（14.65 mg/L）**，则是根据 B7 中 17.1 分钟样品峰面积（$\text{Area} pprox 400$）代入标曲求得进样瓶浓度（7.32 mg/L），再乘以 1:1 无水乙醇等体积提取的 2 倍稀释系数后，推算出的 BL21 原发酵液中的柚皮素浓度。

### 答题思路速记 (中文关键词链)
1. 历史文献区分：2017 年发表过基于「人工核糖开关（riboswitch）」的柚皮素大肠杆菌种内回路
2. 本项目创新点：采用天然转录因子模块 FdeR / PfdeAR（NrSr），将三酶从头合成端（Nr）与接收端分置两株菌，实现无外源柚皮素的跨菌株共培养通讯
3. 严谨表述：答辩中统一表述为「据我们所知，这是首个经实验验证的基于 FdeR/PfdeAR 转录调控的柚皮素跨菌株通讯系统」

---

## [X06] B9
- **ID**: `x06`
- **Slide**: `B9` (Page 15)
- **English Question**: Does omitting naringenin rule out other causes of reporter activation in co-culture?
- **Keywords**: p-coumaric acid precursor IPTG cross-activation receiver without naringenin 前体交叉激活 其他共培养成分 点亮信号

### 英文分点 (1·2·3)
1. [Direct Conclusion] Omitting exogenous naringenin shows that the co-culture doesn't need externally supplied naringenin to turn on, and our monoculture controls rule out autofluorescence from BL21 or uninduced EcN alone.
2. [Experimental Evidence] However, because the co-culture medium still contains the substrate *p*-coumaric acid and IPTG, the most rigorous additional control is incubating the EcN receiver with *p*-coumaric acid plus an empty-vector BL21 strain (lacking the `Nr` pathway) to verify zero cross-activation by the precursor itself.
3. [Boundary & Next Step] We noted that control in our Wiki discussion as a key next check.

### 中文分点 (1·2·3)
1. 【核心结论】共培养不外加柚皮素，证明了体系无需外源添加柚皮素即可激活接收菌；
2. 【实验证据与数据】同时两组单培养对照排除了 BL21 自身荧光和 EcN 未诱导背景荧光的干扰。
3. 【边界与下一步】考虑到共培养体系中仍含有底物对香豆酸和诱导剂 IPTG，为了在单变量上彻底排除前体对香豆酸本身对 `NrSr` 的微弱交叉激活，最严格的补充对照是“将 EcN 接收菌与携带空载体的 BL21（不含 `Nr` 通路）在含有对香豆酸和 IPTG 的条件下共培养”，这一点我们也已写入 Wiki 讨论中作为下一步核验项。

### 答题思路速记 (中文关键词链)
1. 基底泄漏原因：FdeR 为结合于启动子区的转录激活蛋白，未结合配体时 PfdeAR 仍存在低水平本底转录；24 h 培养后高稳定性 sfGFP 缓慢累积
2. 对照验证：400 µM 诱导组荧光始终显著高于 0 µM 基底线，动态窗口清晰
3. 治疗端防泄漏改造：将 sfGFP 换为 LSp222 时，采用弱化 RBS + 降解标签（ssrA）压低基底表达，防止提前伤及宿主

---

## [X07] B9
- **ID**: `x07`
- **Slide**: `B9` (Page 15)
- **English Question**: You mixed the strains 1:1. Were they still 1:1 when you took the image? Could there simply have been more receiver cells in that field?
- **Keywords**: 1:1 initial ratio endpoint ratio cell count vs per-cell brightness flow cytometry 起始1比1 拍照还是1比1 接收菌更多 流式

### 英文分点 (1·2·3)
1. [Direct Conclusion] The 1:1 ratio is our initial inoculation ratio.
2. [Experimental Evidence] Because both BL21 and EcN are *E. coli* strains with similar growth rates, neither strain completely overgrows the other, and the co-culture field actually starts with half as many EcN receiver cells per unit volume as the 100% EcN monoculture control. Even so, individual cells in the co-culture field are visibly much brighter green than in the EcN monoculture.
3. [Boundary & Next Step] To quantify both the final strain ratio and the single-cell fluorescence distribution simultaneously, flow cytometry with a constitutive secondary marker is our planned follow-up.

### 中文分点 (1·2·3)
1. 【核心结论】1∶1 是接种时的初始混合比例。
2. 【实验证据与数据】由于 BL21 与 EcN 同属大肠杆菌、生长速率接近，共培养过程中不会出现一株菌完全吞噬另一株菌的情况；而且从单位体积来看，1∶1 共培养组起始的 EcN 接收菌密度其实只有 100% EcN 单培养对照组的一半，但共培养视野中单个菌体的绿色荧光亮度依然显著强于单培养对照。
3. 【边界与下一步】下一步我们计划引入组成型第二荧光标记并通过流式细胞术（Flow Cytometry），同时定量终点的双菌比例与单细胞荧光强度分布。

### 答题思路速记 (中文关键词链)
1. 体外发酵验证方式：直接向培养基外源添加 3 mM 对香豆酸（证实三酶级联可将对香豆酸高效转化为 53.8 µM 柚皮素）
2. 实际创面应用方案：由于人体创面渗出液不含游离对香豆酸，在双层水凝胶敷料中预载对香豆酸缓释前体（安全植物多酚）
3. 远期升级：在发送菌中引入酪氨酸解氨酶（TAL），直接利用创面内源 L-酪氨酸从头合成对香豆酸

---

## [X08] B2 / B8 / B10
- **ID**: `x08`
- **Slide**: `B8` (Page 14)
- **English Question**: The receiver fluoresces even at 0 µM. Could it release a therapeutic protein without the signal?
- **Keywords**: 0 uM basal leakage FdeR PfdeAR therapeutic protein premature lysis RBS tuning 基底泄漏 没有信号也输出 0uM发绿 毒性

### 英文分点 (1·2·3)
1. [Direct Conclusion] That is an important engineering point.
2. [Experimental Evidence] We do see some basal promoter leakiness in the 0 µM `NrSr–sfGFP` curve on Slide B8, largely because sfGFP is a very stable protein that accumulates over 24 hours on a multi-copy plasmid.
3. [Boundary & Next Step] In a therapeutic context, low-level baseline expression of hEGF is benign for wound repair, and LSp222 selectively targets *S. aureus* rather than human cells; however, to tighten the switch and minimize leaky expression, we can tune down the RBS strength upstream of LSp222 or move the `NrSr` circuit onto a lower-copy backbone.

### 中文分点 (1·2·3)
1. 【核心结论】这是一个非常关键的工程优化点。
2. 【实验证据与数据】在 B8 页 0 µM 对照曲线中确实能看到一定的基础泄漏表达，一方面是因为 `sfGFP` 蛋白稳定性极高，在多拷贝质粒上培养 24 小时后会逐步累积。在治疗场景下，微量的基础 hEGF 对创面修复是温和有益的，且 LSp222 选择性针对金葡菌而不作用于人体细胞；
3. 【边界与下一步】但为了进一步收紧开关、降低未诱导泄漏，下一步我们可以通过调低 `LSp222` 上游的 RBS 强度或将 `NrSr` 回路转移至低拷贝质粒骨架来拓宽安全窗口。

### 答题思路速记 (中文关键词链)
1. 相对选择性成立：金葡菌与表皮葡萄球菌在完全相同的裂解液剂量与温度下平行测试（30 min 内金葡菌下降 61% vs 表皮葡萄球菌 25%）
2. TBS 对照漂移分析：表皮葡萄球菌 TBS 空白对照自身即有 ~23% 沉降漂移，而加酶组为 25%（净裂解不到 3%）
3. 结论强化：扣除各自 TBS 背景漂移后，LSp222 对金葡菌的净裂解率（~55–60%）远高于表皮葡萄球菌（<3%），选择性更加突出

---

## [X09] S1–S3 / B3 / B6
- **ID**: `x09`
- **Slide**: `S1` (Page 1)
- **English Question**: Did biofilm removal actually make heme more accessible? How would you distinguish an infected wound from an ordinary bleeding wound?
- **Keywords**: biofilm dispersal heme mass transfer false positive bleeding wound AND gate AIP 破膜后血红素到达 普通出血 误触发 传质模型

### 英文分点 (1·2·3)
1. [Direct Conclusion] That is why our design uses two distinct sensory inputs, AIP and heme, working together:
1.
2. [Experimental Evidence] **Pathogen specificity comes from AIP**: *S. aureus* quorum-sensing peptide AIP is what triggers `P2P3–DspB` to disperse the biofilm. An uninfected wound has no *S. aureus* AIP, so the biofilm-disruption module stays off. 2. **How biofilm dispersal affects heme**: In a chronic *S. aureus* wound, the dense PNAG biofilm acts as a physical barrier and sequesters iron/heme, while *S. aureus* hemolysins lyse red blood cells to release free heme.
3. [Boundary & Next Step] Our reaction-diffusion model shows that dispersing the biofilm facilitates signal transport across the wound interface, and our wet-lab assays validated the two steps individually (84% biofilm clearance on B3 and micromolar hemin sensing on B6).

### 中文分点 (1·2·3)
1. 【核心结论】这正是我们在设计上引入 **AIP 与血红素（heme）双输入协同机制**的原因：
1. **致病菌特异性来自 AIP 支路**：只有当创面存在金黄色葡萄球菌感染并分泌群体感应肽 AIP 时，才会触发 `P2P3–DspB` 分泌破膜酶；
2. 【实验证据与数据】普通无菌出血创面没有金葡菌 AIP，破膜支路不会启动。2. **破膜如何促进血红素感知**：在慢性金葡菌感染创面中，致密的 PNAG 生物膜既是物理扩散屏障，又会截留铁与血红素，而金葡菌分泌的溶血素会裂解红细胞释放血红素。我们的反应–扩散模型表明，降解生物膜有助于信号分子跨越创面界面传输；
3. 【边界与下一步】湿实验中我们也已分别验证了 84% 生物膜清除（B3）与微摩尔级血红素感知（B6）这两个关键环节。

### 答题思路速记 (中文关键词链)
1. 明确进展边界：目前已完成分模块验证与 BL21→EcN 跨菌共培养接力，尚未在单次实验中跑通表皮葡萄球菌→EcN 全链路
2. 已实测节点：商业 DspB 破膜（84%） | 表皮葡萄球菌血红素传感（1.7 h 达峰） | BL21 产柚皮素（53.8 µM）+ 激活 EcN 共培养 | LSp222 与 hEGF 表达
3. 剩余两步集成：① Nr 三酶簇转入表皮葡萄球菌 ② EcN 端将 sfGFP 替换为 LSp222 与 hEGF 进行共培养验证

---

## [X10] B10
- **ID**: `x10`
- **Slide**: `B10` (Page 16)
- **English Question**: How can you tell whether the two bands are precursor and processed hEGF rather than unrelated proteins of similar size?
- **Keywords**: distinguish two hEGF bands uncleaved precursor vs mature vs host protein Western blot 区分两条带 未切前体 已切产物 杂蛋白 Western

### 英文分点 (1·2·3)
1. [Direct Conclusion] We have two strong reasons to assign those bands to our construct, plus a clear follow-up test to confirm them definitively.
2. [Experimental Evidence] First, `V1` and `V2` are empty-vector BL21 controls induced under the exact same IPTG conditions, and neither shows those bands, which rules out general IPTG-induced host background. Second, the two bands migrate right at the exact theoretical masses calculated from our sequence: **11.10 kDa** for the uncleaved `PelB–hEGF–6×His` precursor and **8.89 kDa** for the cleaved `hEGF–6×His` mature form.
3. [Boundary & Next Step] Because Coomassie SDS-PAGE separates by size alone, our next step is an **anti-His Western blot** (and N-terminal sequencing), which will directly confirm that both bands carry our C-terminal 6×His tag.

### 中文分点 (1·2·3)
1. 【核心结论】我们有两条直接依据支持这两条带来自目标构建，并有明确的下一步定性手段：第一，`V1`、`V2` 是在完全相同 IPTG 诱导条件下处理的空载体 BL21 上清对照，在 8–15 kDa 区间完全没有这两条带，排除了 IPTG 诱导产生宿主背景杂带的可能；
2. 【实验证据与数据】第二，两条带的迁移位置与根据序列严格计算的理论分子量高度吻合——上方 **11.10 kDa** 对应未切信号肽前体（`PelB–hEGF–6×His`），下方 **8.89 kDa** 对应切除 PelB 后的成熟蛋白（`hEGF–6×His`）。
3. 【边界与下一步】由于考马斯亮蓝 SDS-PAGE 仅按分子量分离，下一步我们将通过 **Anti-His Western blot**（及 N 端测序）直接确认两条带均带有 C 端 6×His 标签。

### 答题思路速记 (中文关键词链)
1. 双条带原因（B10 左图 8–15 kDa）：PelB 信号肽（~2.2 kDa）在强诱导表达下发生部分切除
2. 分子量精准对应：上条带 11.10 kDa = 未切信号肽前体（PelB–hEGF–Linker–6×His）；下条带 8.89 kDa = 切除 PelB 后的成熟分泌蛋白（hEGF–Linker–6×His）
3. 机制与下一步：T7/IPTG 过表达使 Sec 转运通道部分饱和 + 24 h 培养外膜渗漏（空载 V1/V2 无条带）→ 下一步做 Anti-His WB 与角质形成细胞划痕实验

---

## [X11] B4 / B14
- **ID**: `x11`
- **Slide**: `B4` (Page 10)
- **English Question**: Last year’s team had already demonstrated AIP sensing. What evidence did you add this year?
- **Keywords**: last year 2025 QURES AIP sensor vs this year new evidence DspB 上一届 去年今年新增证据 区别

### 英文分点 (1·2·3)
1. [Direct Conclusion] Last year's team validated the upstream sensor by showing that *S. aureus* AIP activates the *agr* P2/P3 promoter to drive GFP.
2. [Evidence & Scope] This year, we replaced the GFP reporter with a functional biofilm-degrading enzyme, **Sec/SPII–DspB**: we constructed both the constitutive `pCap–DspB` and AIP-inducible `P2P3–DspB` plasmids, verified the cloned *dspB* sequence by Sanger sequencing (B14) and host transformation by PCR (B4), and demonstrated that DspB clears 84% of mature *S. aureus* biofilm biomass within 18 hours (B3).

### 中文分点 (1·2·3)
1. 【核心结论】上一届团队验证的是上游传感部分，即金葡菌 AIP 能够激活 `agr` `P2/P3` 启动子并驱动报告基因 GFP 表达。
2. 【证据与边界】今年我们在此基础上将报告基因替换为了真正执行破膜功能的效应酶 **`Sec/SPII–DspB`**：完成了组成型 `pCap–DspB` 与 AIP 诱导型 `P2P3–DspB` 质粒的构建，通过 Sanger 测序（B14）和宿主转化 PCR（B4）验证了序列与转入，并通过结晶紫定量实验证实 DspB 在 18 小时内可清除 84% 的金葡菌成熟生物膜（B3）。

### 答题思路速记 (中文关键词链)
1. 双层水凝胶参数：两层中心间距 L = 40 µm（表皮葡萄球菌在内层接触创面，EcN 在外层）
2. 扩散时间估算（t ≈ L² / 2D）：小分子柚皮素（272 Da）穿膜仅需 ~2 s；治疗蛋白 LSp222（28 kDa）/ hEGF（8.9 kDa）穿膜仅需 15–30 s
3. 结论：数秒至半分钟的物理扩散延迟相比数小时的转录翻译动力学完全可忽略，同时实现了双菌物理隔离与防竞争

---

## [X12] S1 / S6 / B9
- **ID**: `x12`
- **Slide**: `S1` (Page 1)
- **English Question**: Your co-culture shared a vessel, but your dressing separates the strains. Did you measure transport across the membrane? What time does 40 µm represent?
- **Keywords**: co-culture in one tube vs hydrogel physical separation 40 um diffusion time 穿膜 敷料隔开 40微米 多久 扩散时间

### 英文分点 (1·2·3)
1. [Direct Conclusion] In our hardware and modeling work, 40 µm is the center-to-center spacing between the sender and receiver hydrogel layers that our reaction-diffusion simulation identified for efficient signal transfer.
2. [Experimental Evidence] For a small molecule like naringenin (MW 272 Da, $D \sim 5 \times 10^{-10}\text{ m}^2/\text{s}$ in hydrogel), pure diffusion across 40 µm takes only seconds ($t \sim L^2 / 2D \approx 1.6\text{ s}$), meaning the rate-limiting step is enzymatic synthesis and transcriptional activation (hours) rather than physical diffusion across the 40 µm gap.
3. [Boundary & Next Step] Experimentally, we validated signaling in liquid co-culture (B9) and 3D-printed the layered dressing prototype; measuring naringenin diffusion and reporter activation across the hydrogel layers is our next hardware–wetlab integration test.

### 中文分点 (1·2·3)
1. 【核心结论】在我们的硬件与建模设计中，40 µm 是反应–扩散模型优化出的发送菌层与接收菌层之间的中心间距。
2. 【实验证据与数据】对于柚皮素这样的小分子（分子量 272 Da，水凝胶中扩散系数 $D \sim 5 \times 10^{-10}\text{ m}^2/\text{s}$），跨越 40 µm 的纯物理扩散特征时间仅需数秒（$t \sim L^2 / 2D pprox 1.6\text{ s}$），因此整个系统的限速步骤在于酶促合成与转录激活（小时级），而非 40 µm 水凝胶间距的物理扩散。实验上我们已经验证了液体共培养下的跨菌激活（B9）并完成了分层水凝胶敷料的 3D 打印原型；
3. 【边界与下一步】下一步湿实验与硬件联调就是直接测定信号穿透水凝胶隔层的激活曲线。

### 答题思路速记 (中文关键词链)
1. 三重生物安全防护设计：① 益生/共生安全底盘 ② 双层水凝胶物理封装 ③ D-丙氨酸营养缺陷型基因锁
2. 营养缺陷机制：敲除大肠杆菌 alr/dadX 与表皮葡萄球菌 dal/dat（D-丙氨酸消旋酶基因）→ 细菌离开预载 D-丙氨酸的水凝胶敷料后因无法合成细胞壁肽聚糖而自溶
3. 当前状态：底盘安全性已落实，营养缺陷敲除与水凝胶逃逸率测试是走向体内验证前的下一步工作

---

## [X13] S6 / B5
- **ID**: `x13`
- **Slide**: `S6` (Page 6)
- **English Question**: Did you measure live-cell escape from the dressing or show that both strains stop growing when supplementation ends?
- **Keywords**: biosafety live bacteria escape rate D-alanine auxotrophy alr dadX open wound 活菌逃逸率 生物安全 D-丙氨酸 营养缺陷 停止增殖

### 英文分点 (1·2·3)
1. [Direct Conclusion] We designed three layers of biosafety, and we distinguish what is already built from what is planned for preclinical testing:
1.
2. [Experimental Evidence] **Chassis biosafety**: Both *S. epidermidis* (a native skin commensal) and EcN (a clinically used probiotic) are BSL-1 organisms. 2. **Physical containment**: Our 3D-printed hydrogel dressing encapsulates the bacteria inside an inner hydrogel matrix separated from the wound surface by a semi-permeable membrane. 3. **Genetic auxotrophy (designed)**: We designed a D-alanine auxotrophy (deleting *alr*/*dadX* and *dat*) so neither strain can synthesize cell-wall peptidoglycan outside the D-alanine-supplemented dressing.
3. [Boundary & Next Step] Constructing those knockout strains and running membrane bacterial-escape assays are our next biosafety validation steps before any *in vivo* testing.

### 中文分点 (1·2·3)
1. 【核心结论】我们设计了三层生物安全屏障，并明确区分已完成的设计原型与临床前待测指标：
1. **底盘生物安全性**：表皮葡萄球菌（天然皮肤共生菌）与 EcN（临床广泛使用的益生菌）均属于 BSL-1 安全等级菌株。
2. 【实验证据与数据】2. **物理隔离封装**：3D 打印分层水凝胶敷料将工程菌封装在内部水凝胶基质中，并通过半透膜与创面隔离，允许小分子与分泌蛋白穿过而阻拦菌体。3. **遗传营养缺陷型控制（设计方案）**：我们在 Safety 中设计了 D-丙氨酸营养缺陷型（敲除 `alr`/`dadX` 与 `dat`），使工程菌离开富含 D-丙氨酸的敷料后无法合成细胞壁肽聚糖而停止增殖。
3. 【边界与下一步】构建该营养缺陷型敲除株并测定组装敷料的活菌逃逸率，是我们开展体内实验前的下一步安全验证工作。

### 答题思路速记 (中文关键词链)
1. 关键图表统计说明：B8（EcN 柚皮素响应）等核心曲线包含 n = 3 独立生物重复，彩色阴影带代表 95% 置信区间
2. 其余曲线说明：B3（DspB 时间曲线）与 B11（LSp222 裂解曲线）展示的是平行复孔均值轨迹
3. 规范化承诺：将在最终版补充数据中统一标注每张图的生物重复数（n）与技术重复数，并补齐误差棒

---

## [X14] B17
- **ID**: `x14`
- **Slide**: `B17` (Page 23)
- **English Question**: Do you have your own evidence for low background in wounds and a healing effect? Would those claims hold in real wound samples?
- **Keywords**: real wound exudate background naringenin synergy with hEGF Boston-BOSLab 真实创面样本 协同疗效 假阳性率

### 英文分点 (1·2·3)
1. [Direct Conclusion] Those two properties come from literature-guided design selection, whereas our wet-lab experiments tested the signaling pathway in defined media.
2. [Experimental Evidence] Specifically, biochemical literature establishes that naringenin is a plant-specific flavanone not synthesized by mammalian cells or skin bacteria (giving it low background in wounds) and that it reduces pro-inflammatory cytokines in rodent wound models. In our lab, we verified that naringenin cleanly activates the FdeR receiver in EcN and mediates co-culture signaling.
3. [Boundary & Next Step] To verify that wound exudate does not cause false-positive FdeR activation, the next test is spiking simulated wound fluid or clinical exudate samples into our EcN `NrSr–sfGFP` assay.

### 中文分点 (1·2·3)
1. 【核心结论】“创面低背景正交性”与“内源抗炎促愈合”来自我们立项阶段的文献机制筛选，而本队的湿实验则聚焦于在标准培养体系中验证柚皮素的跨菌通讯链路。
2. 【实验证据与数据】具体而言，生化学文献已证实柚皮素是植物特有的二氢黄酮，哺乳动物细胞与皮肤细菌均不具备其合成通路（因此在创面中无内源背景干扰），且多项啮齿类动物创面模型已证实柚皮素可下调促炎因子、加速伤口闭合。在此基础上，我们在实验室里验证了柚皮素对 EcN `FdeR` 接收器的梯度激活及双菌共培养通讯。
3. 【边界与下一步】下一步向临床场景推进时，我们会将模拟伤口渗出液（SWF）或真实创面渗出液样本加标至 EcN `NrSr–sfGFP` 体系中，直接实测其在复杂创面基质中的信噪比与假阳性率。

### 答题思路速记 (中文关键词链)
1. 通用跨菌通讯骨架：固定「Nr 三酶合成 → 柚皮素扩散 → NrSr（FdeR/PfdeAR）接收」，上下游模块均可插拔替换
2. 具体复用方案（肠道炎症 IBD 工程菌群）：上游将血红素传感器替换为肠道炎症标志物传感器 —— 硫代硫酸盐（ThsSR）或一氧化氮（NorR）启动子
3. 下游替换：保留柚皮素跨菌接力至益生菌 EcN，将下游输出替换为抗炎细胞因子 IL-10 或黏膜修复肽 TFF3

---
