# Mapping and Reconciliation — Round 2 Findings

**Prompt:** [03-round2-mapping-and-reconciliation.md](../01-research-prompts/03-round2-mapping-and-reconciliation.md)
**Supersedes:** the mapping and normalisation portions of
[03-mapping-and-reconciliation-findings.md](03-mapping-and-reconciliation-findings.md) (round 1).
Round 1's closed conclusions C1–C6 are retained by reference, not restated here.
**Evidence base:** finding 01 (44-indicator register, three-stage PCA architecture) and finding 02
(ocean accounts inventory, all maturity (b) or below), supplied inline to the prompt as §A and §B.

**Headline:** re-scored against the real register and the verified inventory, derivability is
**0% Full / 2.8% Partial / 8.3% Minimal / 88.9% None** over 36 scoreable indicators. Round 1's
39.1% Partial does not survive. Exactly one indicator (G9, MPA extent) rates Partial.

---

### Deliverable 1: Revised Derivability Matrix (D1)

**Indicator Distribution**
Out of **36 scoreable indicators** (the strictly enforced denominator, excluding the 8 permanently
unidentified metrics), the derivability distribution is: **0% Full / 2.8% Partial / 8.3% Minimal /
88.9% None.**

**Answers to D1.1 – D1.4:**

1. **Policy-output and pressure measures:** G4, G5, and G9 are policy outputs; G6 is a policy flow;
   G7 and G8 are pressures. An ocean account offers *no pathway* for G4 and G5 (Podes village
   counts) — this is a structural mismatch, not a data gap. G9 (MPA extent) and G6 (Rehabilitation
   area) have weak pathways via extent accounts, while G7 and G8 have pathways via waste flow
   accounts.
2. **G1–G3 rating:** **None**. §B confirms condition is observed but no normalized,
   reference-condition-based account exists for any site. To change this rating, a spatially
   continuous reference-condition baseline (SEEA-EA compliant) must be compiled.
3. **A1 and C5 rating:** **None**. §B places ocean-economy disaggregation at maturity (c/d), not
   compiled by BPS. Even if the KBLI cross-walk (C4) were completed, the rating remains None until
   BPS officially populates the satellite account to feed that cross-walk.
4. **Handling the 8 unidentified indicators:** These (B1–8, E1, F1, I1–2) must be permanently
   excluded from derivability assessments. They cannot be scored. Any aggregate analysis must
   explicitly state a denominator of 36, treating the remaining 8 as a permanent void.

| Code | Indicator | Type | Rating | Binding Constraint | Account Maturity | Confidence |
| --- | --- | --- | --- | --- | --- | --- |
| A1 | Fisheries sector share of GDP (%) | ratio | None | No BPS ocean satellite account | (c/d) | High |
| A2 | Capture fisheries production (t) | flow | None | No supply-use table with economic beneficiaries | (b) | High |
| A3 | Pond aquaculture production (t) | flow | None | No supply-use table with economic beneficiaries | (b) | High |
| A4 | Total aquaculture production (t) | flow | None | No supply-use table with economic beneficiaries | (b) | High |
| A5 | Seaweed aquaculture production (t) | flow | None | No supply-use table with economic beneficiaries | (b) | High |
| C1 | Maritime freight volume (t) | flow | None | Not captured in ecosystem/ocean accounts | None | High |
| C2 | Maritime passenger volume | flow | None | Not captured in ecosystem/ocean accounts | None | High |
| C3 | Passengers at 25 strategic ports | flow | None | Not captured in ecosystem/ocean accounts | None | High |
| C4 | Fisheries export volume (t) | flow | None | Requires trade cross-walk, uncompiled | (c/d) | High |
| C5 | Fishery exports as % total exports | ratio | None | Requires trade cross-walk, uncompiled | (c/d) | High |
| C6 | Live/fresh fisheries export (t) | flow | None | Requires trade cross-walk, uncompiled | (c/d) | High |
| D1 | Number of marine tourism sites | stock | None | KBLI stripping unresolved (C5) | (c/d) | High |
| D2 | Commercial water-tourism businesses | stock | None | KBLI stripping unresolved (C5) | (c/d) | High |
| G1 | % coral reef area good quality | condition | None | No reference-condition baseline compiled | (b) | High |
| G2 | % seagrass area good quality | condition | None | No reference-condition baseline compiled | (b) | High |
| G3 | % mangrove area good quality | condition | None | No reference-condition baseline compiled | (b) | High |
| G4 | Coastal villages w/ waste sites | output | None | Structural mismatch; Podes data | None | High |
| G5 | Coastal villages w/ sanitation | output | None | Structural mismatch; Podes data | None | High |
| G6 | Area of mangrove/swamp rehab (ha) | flow | Minimal | Account shows net extent, not the policy action | (b) | Medium |
| G7 | Marine debris leakage volume (t) | pressure | Minimal | Waste account exists for 1 province (Gili Matra) | (b) | High |
| G8 | Total waste disposed on land (t) | pressure | Minimal | Waste account exists for 1 province (Gili Matra) | (b) | High |
| G9 | Marine protected area extent (ha) | output | Partial | Missing 0-12 nm clipping rule (C1) | (b) | High |
| H1–4 | Renewable energy (4 indicators) | flow | None | Outside ocean accounts scope | None | High |
| J1–6 | Education (6 indicators) | stock | None | Outside ocean accounts scope | None | High |
| K1–4 | Health (4 indicators) | state | None | Outside ocean accounts scope | None | High |

---

### Deliverable 2: Change Log vs Round 1 (D1.5)

| Indicator(s) | Round 1 Rating | Round 2 Rating | Cause of Movement |
| --- | --- | --- | --- |
| A1, C5 (Ocean GDP/Exports) | Partial | None | Maturity evidence: Ocean satellite account confirmed (c/d) and not BPS-compiled. |
| G1, G2, G3 (Condition) | Partial/Minimal | None | Maturity evidence: §B confirms no normalized, reference-condition account exists. |
| G4, G5 (Village sanitation/waste) | N/A (unscored) | None | Register change: Newly identified in §A, structural mismatch with accounts. |
| G6 (Rehabilitation area) | Partial | Minimal | Register change: Indicator tracks the specific policy action, whereas the extent account tracks net gross change. |
| G7, G8 (Waste/Debris volumes) | N/A (unscored) | Minimal | Register change & Maturity evidence: New to register, waste flow accounts exist but at maturity (b). |

---

### Deliverable 3: Normalisation and Reweighting Analysis (D2)

1. **Z-score on near-zero change variables:** When a signed change variable (like annual net hectare
   change) clusters near zero across provinces, its standard deviation is extremely small.
   Standardizing via Z-score divides by this tiny standard deviation, artificially inflating
   infinitesimal, often noise-driven differences into massive standardized signals. Measurement noise
   becomes indistinguishable from true variance.
2. **Variance-derived weights and stability:** PCA derives weights from the variance structure of the
   input data. Variables artificially inflated by Z-score scaling will capture distorted principal
   component loadings. Furthermore, because these inputs track minute year-to-year natural capital
   changes, shifting cross-provincial covariances will continuously alter the eigenvectors. This
   causes the weights assigned to the indicators to swing wildly from year to year, destroying
   longitudinal stability.
3. **The reweighting effect:** Inserting a new, account-derived indicator into a PCA-weighted
   composite is not additive; it is fundamentally disruptive. A new vector alters the entire
   covariance matrix, forcing a rotation of the eigenvectors. Consequently, *every other indicator in
   the index is automatically reweighted*. This effect is unbounded and permanently breaks temporal
   comparability with any previously published IBEI score.
4. **The 80.8% weight-sum anomaly:** The fact that recovered weights sum to 80.8% instead of 100%
   implies severe missing metadata. It indicates either calculation errors in the source slide deck,
   undocumented discarding of principal components (e.g., keeping only PC1 but failing to rescale),
   or suppressed indicators. Consequently, exact magnitude computations using these weights are
   mathematically unsafe; they can only be used to interpret broad architectural vulnerabilities.
5. **Measurement error propagation (Z-score vs. Min-max):** Under min-max normalization, mapping
   errors are bounded by the absolute range; a 10-hectare classification error in a 1,000,000-hectare
   range has a negligible impact on the 0–100 score. Under Z-score standardization into PCA, if the
   true variance across provinces is small, that same 10-hectare error constitutes a massive
   proportion of the standard deviation, aggressively hijacking the PCA weighting algorithm and
   heavily distorting the final composite score.
6. **Imputation consequences under PCA:** PCA requires perfectly complete matrices. If a mature
   account covers one province while 33 remain uncompiled, standard imputation (like mean
   substitution, which sets Z=0) creates a massive block of identical artificial values. This
   artificially crushes the variance of that indicator, destroying its covariance relationships with
   other metrics. The PCA will mathematically suppress the indicator, assigning it a near-zero
   weight, thereby completely masking the single real observation.

---

### Deliverable 4: Compensability Restatement and Masking (D3)

**Restatement of Compensability:** The aggregation architecture is verified to be fully compensatory.
It relies exclusively on additive linear combinations at every stage of the three-stage PCA, with
zero non-compensatory thresholds or geometric constraints found.

1. **Masking under recovered weights:** The masking of ecological depletion is highly pronounced
   under the recovered variance weights. With the Economy pillar at ~33% and the entire Environment
   pillar at ~37%, economic gains can linearly offset ecological losses. Furthermore, because
   sub-pillar G (ecosystem condition/extent) only commands 18% of the total index weight,
   catastrophic ecosystem collapse can easily be mathematically erased by standard economic growth or
   by simultaneous infrastructure investments in other sub-pillars.
2. **The impact of the energy sub-pillar (H):** Sub-pillar H (renewable energy) carries the exact
   same 18% weight as sub-pillar G. This means half of the "Environmental" pillar measures energy
   transition outputs, not ecosystem health. A province can severely deplete its marine natural
   capital (e.g., dredging reefs), but if it simultaneously commissions a coastal solar array, the
   Environment pillar score will remain stable or even increase, entirely defeating the index's
   ability to serve as a natural capital diagnostic.
3. **Variance-driven pillar weighting:** Because PCA tracks variance rather than normative policy
   goals, if all provinces perform equally poorly on environmental conservation (converging at a low
   baseline), the variance drops. As a direct consequence, the PCA will automatically assign a
   *lower* weight to the Environmental pillar simply because the data is uniformly bad. The index
   punishes consensus and rewards disparity, independent of actual performance.
4. **Minimum conditions for account integration:** For an account-derived indicator to legitimately
   enter this index without breaking its architecture, the following public-record constraints must
   be met:
   - National wall-to-wall compilation across all 38 provinces (eliminating missing-data PCA
     collapse).
   - BPS publication of the satellite account as official statistics (maturity level 'a').
   - A codified, legal GIS clipping rule enforcing the 0–12 nm provincial authority boundary
     (resolving C1).
   - Elimination of the 4-year lag, synchronizing account closing dates with the annual IBEI
     reporting cycle.
   - A mathematically documented imputation and weighting stabilization policy from BAPPENAS.

---

### Deliverable 5: Conflicts, Unresolved Items, and Public-Record Silences

1. **Indicator set mismatch:** The actual IBEI register relies on policy-output (G4, G5) and pressure
   (G7, G8) indicators, conflicting with the SEEA-EA assumption that the index purely measures
   ecosystem state/extent.
2. **Missing IBEI metadata:** 8 indicators (B1–8, E1, F1, I1–2) remain entirely unnamed and
   methodologically dark in the public record. *[Requires agency access to resolve]*
3. **Weighting sum failure:** Documented weights sum to 80.8%, contradicting standard PCA
   mathematical properties which mandate a 100% variance distribution across retained components.
4. **Missing PCA imputation rules:** Standard PCA fails on missing data, yet the public record is
   completely silent on how BAPPENAS imputes data for provinces missing one or more of the 36 known
   indicators. *[Requires agency access to resolve]*
5. **No BPS marine satellite account:** §B confirms BPS does not compile an ocean satellite account,
   conflicting with any assumption that A1 and C5 can be natively extracted from current national
   accounts.
6. **False condition baselines:** IBEI G1–G3 require normalized reference-condition percentages, but
   §B proves no SEEA-EA compliant reference condition has ever been compiled in Indonesia.
7. **Monetary valuation conflict:** Gili Matra values use benefit transfer, which violates the strict
   exchange-value (SNA-consistent) requirements of formal SEEA-EA compilation.
8. **Jurisdictional clipping absence:** §B confirms no MBSU clipping rule exists to match the Law
   23/2014 0–12 nm provincial authority boundary (C1 constraint).
9. **Grid resolution conflict:** No national standard MBSU resolution is adopted. Saleh Bay tested
   10m vs 25m, proving inconsistency that prevents standardized provincial comparison.
10. **Positive selection bias (C2):** Account pilots are clustered in MPAs (Gili Matra), creating an
    unresolved conflict where pilot provinces appear artificially healthier than provinces with
    wall-to-wall mapping.
11. **Lag discrepancy (C3):** IBEI is an annual index, but the latest dashboard extent data remains
    frozen at a 2021 closing stock.
12. **Costing data silence:** Absolutely zero data exists in the public record regarding the
    financial or staff-time cost of compiling any account module. *[Requires agency access to
    resolve]*
13. **Dashboard vs. Documentation conflict:** 34 provinces are selectable on the GOAP dashboard, yet
    only 1 province (NTB) has a documented, published compilation.
14. **Institutional mismatch:** Ocean accounts are driven by MMAF/GOAP, not BPS (the official
    custodian for macro-indicators).
15. **Missing provinces:** Papua Selatan, Papua Tengah, Papua Pegunungan, and Papua Barat Daya are
    completely absent from the ocean accounts inventory, making full national IBEI integration
    impossible.
