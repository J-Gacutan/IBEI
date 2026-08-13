# Deep Research Prompt 03 — Round 2: Mapping and Reconciliation

**Status: run. Findings returned to
[03-mapping-and-reconciliation-findings-round2.md](../02-research-findings/03-mapping-and-reconciliation-findings-round2.md).**
All three defects addressed; derivability re-scored at 0% Full / 2.8% Partial / 8.3% Minimal /
88.9% None over 36 scoreable indicators.

**Supersedes** the mapping portions of [03-mapping-and-reconciliation.md](03-mapping-and-reconciliation.md).
Round 1's findings are at [03-mapping-and-reconciliation-findings.md](../02-research-findings/03-mapping-and-reconciliation-findings.md).
Return findings to `../02-research-findings/03-mapping-and-reconciliation-findings-round2.md`.

## 0. How to run this efficiently

This is a **correction pass, not a re-run**. Round 1 answered six of eight research questions
decisively; three specific defects remain. Budget accordingly.

**Do not:**
- Re-research the IBEI indicator set or the ocean accounts inventory. Both are supplied below as §A
  and §B and are to be treated as the evidence base.
- Re-derive or restate Round 1's closed conclusions (§C). Cite them by tag.
- Search for the unpublished BAPPENAS methodological handbook, Kepmen KP 44/2023 full text, or the
  2022 MMAF pilot reports. Prior passes established these are not publicly retrievable, and
  **direct engagement with Indonesian government agencies is out of scope for this project** — no
  data request, interview, or agency correspondence is available as a route. Work from the public
  record only; where the public record is silent, that silence is the finding.
- Produce narrative summary, executive summary, or background context. Every output below is a table
  or a bounded list.

**Do:** spend the entire search budget on the three defects in §D, and only where §A and §B are
genuinely insufficient to reason from.

**Method rules (unchanged):** maturity tags (a) published official statistics / (b) experimental or
pilot / (c) methodology under development / (d) announced not started · cite or don't assert ·
label reconstruction with a confidence level · preserve conflicts rather than resolving them · no
fabricated specificity — absence of evidence is a finding · search bilingually.

---

## A. Supplied evidence — verified IBEI register (finding 01)

Second edition, 2024–present: 44 indicators, 11 sub-pillars, 3 pillars + 2 integrated enablers.
**36 of 44 identified from BPS SIRUSA metadata; 8 remain unidentified and are not obtainable from
the public record.** Treat the 8 as permanently open, not as a research target.

| Code | Indicator | Type | Custodian | Conf. |
|---|---|---|---|---|
| A1 | Fisheries sector share of GDP (%) | ratio | BPS | High |
| A2 | Capture fisheries production volume (t) | flow | KKP | High |
| A3 | Pond aquaculture production volume (t) | flow | KKP | High |
| A4 | Total aquaculture production volume (t) | flow | KKP | High |
| A5 | Seaweed aquaculture production volume (t) | flow | KKP | High |
| B1–8 | **Marine-based industry — 8 indicators, names unpublished.** Sub-pillar defined as value-add from raw to processed products and industrial assets | flow/value | KKP/BPS | **Low** |
| C1 | Maritime freight volume (t) | flow | BPS/Kemenhub | High |
| C2 | Maritime passenger volume (count) | flow | BPS/Kemenhub | High |
| C3 | Maritime passengers at 25 strategic ports | flow | BPS/Kemenhub | High |
| C4 | Fisheries export volume (t) | flow | BPS/KKP | High |
| C5 | Fishery exports as % of total exports | ratio | BPS | High |
| C6 | Live and fresh fisheries export volume (t) | flow | BPS/KKP | High |
| D1 | Number of marine tourism sites | stock | Kemenparekraf | High |
| D2 | Number of commercial water-tourism businesses | stock | BPS/Kemenparekraf | High |
| E1 | **Technology enabler — unpublished.** Marine research capability / technical capacity | — | — | **Low** |
| F1 | **Governance enabler — unpublished.** Governance frameworks, spatial planning, legal compliance | — | — | **Low** |
| G1 | % coral reef area of good quality | condition stock | KLHK/BRIN | High |
| G2 | % seagrass area of good quality | condition stock | KLHK/BRIN | High |
| G3 | % mangrove forest area of good quality | condition stock | KLHK/BIG | High |
| G4 | Coastal villages with waste disposal sites (count) | policy output | BPS Podes | High |
| G5 | Coastal villages with sanitation facilities (count) | policy output | BPS Podes | High |
| G6 | Area of mangrove/swamp/peatland rehabilitation (ha) | flow | KLHK | High |
| G7 | Marine debris leakage volume (t) | pressure | KLHK | High |
| G8 | Total waste disposed on land (t) | pressure | KLHK/SIPSN | High |
| G9 | Marine protected area extent (ha) | policy output | KKP | High |
| H1–4 | **Renewable energy — 4 indicators, count verified, names not.** Commitment to RE and energy delivered to grid | flow/output | ESDM | Medium |
| I1–2 | **Welfare — 2 indicators, unpublished.** Social protection; secondary sources suggest coastal poverty rate, Gini | state | BPS Susenas | **Low** |
| J1–6 | **Education — 6 indicators, count verified, names not.** Maritime-sector HR infrastructure and output | stock | Kemendikbud | Medium |
| K1–4 | **Health — 4 indicators, count verified, names not.** Use of marine products for community health; secondary sources suggest stunting, maternal mortality | state | Kemenkes/BPS | Medium |

**Aggregation architecture (finding 01 §4), all of which is binding on §D2 and §D3:**
- **Normalisation: Z-score standardisation**, reconstructed at high confidence from SIRUSA
  computation formulas and from the fact that PCA requires centred and scaled inputs. Min–max is
  applied **only** to rescale the final composite to 0–100 for communication.
- **Weighting: three-stage PCA.** Indicator weights from first-principal-component loadings within
  sub-pillar; sub-pillar scores restandardised and re-PCA'd within pillar; pillars PCA'd into the
  composite. Executed in STATA; BAPPENAS states weights are "generated automatically".
- **Weights are variance-derived, not policy-set, and shift year to year** — an acknowledged
  longitudinal-comparability problem.
- **2023/24 recovered weights:** Economy 33%, Environment 37%, Social 31%. Sub-pillars: A 5, B 8,
  C 6, D 7, E 1, F 5, G 18, H 18, I 6.7, J 4, K 2.1. **These sum to 80.8%, not 100%**, and the
  Social sub-pillars sum to 12.8% against a stated 31% pillar weight. Source is a slide deck. Treat
  as indicative of variance magnitude only; do not compute with them as exact constants.
- **Compensability: additive linear combination at every stage; no geometric aggregation and no
  non-compensatory thresholds found.** Full compensability confirmed, not inferred.
- **Missing-data handling: not documented.** Standard PCA requires complete matrices; imputation
  strategy unknown. Flag as (c)/unknown wherever it bears on a conclusion.

## B. Supplied evidence — ocean accounts inventory (finding 02)

**Every Indonesian ocean account output is at maturity (b) or below. Nothing is official statistics:
no BPS ocean or marine ecosystem account, no statistical work-programme entry, no revision policy.**

- **Extent** — the only account type with a verified full opening/change/closing structure. Gili
  Matra MPA, 25×25 m MBSU, 48,211 cells, 2015 open / 2021 close. National dashboard layer exists at
  **2018 open / 2021 close** with undocumented compilation method. *(Correction to round 1: there
  is no national 2015 baseline.)*
- **Condition** — observed and mapped (photo transect, Seagrass-Watch, plot sampling) but presented
  as maps and variable panels. **No normalised, reference-condition-based condition account was
  found for any Indonesian site.** A "Full" rating for condition is not supportable.
- **Service flows** — service categories asserted; **no supply–use table with named economic
  beneficiaries by sector was obtained.**
- **Monetary** — Gili Matra values derived by **benefit transfer** from Bohol, the Marianas, Mexico,
  Gazi Bay, Bintuni Bay. Not the exchange-value basis SEEA-EA requires; not SNA-consistent.
- **Ocean economy satellite account** — **(c/d), not compiled by BPS.** No KBLI correspondence
  table and no provincial ocean-GDP disaggregation found in any published BPS output. Nearest
  outputs: the annual *Statistik Sumber Daya Laut dan Pesisir* compendium (not account-structured),
  fisheries GDP inside standard national accounts, and the dashboard's Neraca Ekonomi Kelautan
  module.
- **Waste / flows to environment** — (b). Gili Matra 2021: 4.45 kt generated, 56.38% organic,
  25.86% recycled, 35.34% to landfill. Dashboard Neraca Limbah module exists, method undocumented.
- **Governance** — (b) but a qualitative zoning register, not a stock–flow account.
- **Social accounts** — (c). GOAP working group founded 2024; no Indonesian compilation found.
- **Ecosystem types covered: mangrove, seagrass, coral reef only.**
- **Provincial coverage:** 34 of 38 provinces are **dashboard-selectable**; provinces with a
  **documented published compilation: 1** (Nusa Tenggara Barat — Gili Matra, Saleh Bay). Absent
  entirely: Papua Selatan, Papua Tengah, Papua Pegunungan, Papua Barat Daya.
- **MBSU:** rectangular cells; **no national standard resolution adopted** in any obtained
  document. Saleh Bay tested 10 m (36.3 M cells) against 25 m (5.8 M cells), dominance against
  hierarchy designation; dominance more accurate, larger-grid-plus-hierarchy far cheaper. Nesting
  across administrative / WPP / PKKPRL frames is **asserted by GOAP, not evidenced**.
- **Lag:** 2021 closing stock → dashboard July 2025 ≈ **4 years**; the extent module remains at 2021
  as of Aug 2026. **No compilation cost of any kind exists in the public record** — no staff-days,
  budget line, imagery or survey cost.
- **Institutional locus: MMAF (Kepmen KP 44/2023 cross-agency team), not BPS.** GOAP Secretariat
  faces a funding gap from March 2026.

## C. Round 1 conclusions that stand — do not revisit

Cite these by tag; do not re-argue or re-summarise them.

| Tag | Conclusion |
|---|---|
| **C1** | Provincial marine authority is 0–12 nm (Law 23/2014 Art. 27). No aggregation or clipping rule for MBSUs at that boundary exists; it would have to be legally codified. |
| **C2** | Partial coverage produces **positive selection bias** — pilots sit overwhelmingly inside MPAs, flattering covered provinces and penalising any province with honest wall-to-wall data. Mixed-coverage scoring is statistically indefensible. |
| **C3** | 3–5 year compilation lag against an annual index; economic gain registers immediately, its ecological cost years later. |
| **C4** | The gap-closure sequence, highest leverage first: a KBLI↔IBEI classification cross-walk. |
| **C5** | Per-sector classification stripping requirements; coastal tourism requires severe stripping (hotel coordinates against the 0–12 nm zone). |
| **C6** | The diagnostic the concept note promises belongs in a dashboard or cross-tabulated satellite table (e.g. value added per hectare degraded), not inside a composite. |

---

## D. The three defects to fix

### D1 — Re-score derivability against the real 44-indicator register

Round 1 scored a **reconstructed 23-indicator set** and returned 0% Full / 39.1% Partial / 43.5%
Minimal / 17.4% None. The register in §A is materially different in ways that cut both directions:
the environmental pillar contains four **policy-output** indicators (G4, G5, G6, G9) and two
**pressure** indicators (G7, G8), some of which accounts serve better than the reconstructed set
implied, while the Podes village counts (G4, G5) have no account pathway at all.

Score every row in §A on Full / Partial / Minimal / None against §B, and additionally answer:

1. Which indicators are **policy-output or pressure** measures rather than state measures? For each,
   does an ocean account offer any pathway at all, and if not, say so plainly — this is a structural
   mismatch of measurement target, not a data gap.
2. G1–G3 ask for **percentage of area in good quality**. §B says no normalised condition account
   exists. State the rating this forces and what specifically would have to be compiled to change
   it.
3. A1 and C5 need ocean-economy disaggregation that §B places at (c/d). Do these fall to None or
   Minimal, and does the answer change if the KBLI cross-walk (C4) were completed?
4. How are the **8 unidentified indicators** (B1–8, E1, F1, I1–2 — note the overlap in codes) to be
   handled in any aggregate figure? Give the denominator explicitly. Do not score them.
5. Produce a **change log against round 1**: every rating that moved, and why. Movements caused by
   the register change must be distinguished from movements caused by finding 02's maturity
   evidence.

Report the distribution over **scoreable indicators only**, with the denominator stated in the same
sentence. Do not produce a single headline percentage without it.

### D2 — Redo the normalisation argument for Z-score inside PCA

Round 1 §6.2 built its signed-change-variable argument on **min–max** normalisation. §A establishes
min–max applies only to the final 0–100 rescale; the operative function is **Z-score inside
three-stage PCA**. The argument must be rebuilt. Address specifically:

1. What happens to a **signed change variable clustering near zero** (e.g. annual net extent change
   in hectares) under Z-score standardisation, given a small cross-provincial standard deviation?
2. Because PCA weights derive from **variance**, what weight does such a variable attract — and
   what is the effect on the **stability** of that weight across annual iterations, given that §A
   records weights already shifting year to year?
3. **The reweighting effect.** Inserting a new indicator into a PCA-weighted composite does not
   simply add a term; it changes the covariance matrix and therefore **reweights every other
   indicator in the index**. Characterise this. Is it bounded? Does it break comparability with
   previously published IBEI scores? This is the most important question in D2 and is a stronger
   result than round 1's min–max argument if it holds.
4. What does the **80.8% weight-sum anomaly** imply about how confidently any of this can be
   quantified? Do not compute precise magnitudes from those weights.
5. Does an account-derived variable's **measurement error** (mapping error, mixed vintages, grid
   heterogeneity) propagate differently under Z-score-into-PCA than under min–max? Note where the
   two diverge, since downstream writing needs both stated separately.
6. Given **undocumented missing-data handling** and PCA's requirement for complete matrices: what
   happens when one province has an account-derived value and 33 do not? Enumerate the plausible
   imputation choices and their consequence for rank order, flagged as reconstruction.

### D3 — Restate compensability as verified, and re-examine masking under the recovered weights

Round 1 §7.1 hedged with "often geometric or arithmetic means". §A removes the hedge: additive
linear combination at every stage, no non-compensatory thresholds. Restate the RQ3.6 conclusion as
**verified rather than inferred** — it is the strongest negative result in the suite and should not
rest on a hedge. Then:

1. With Environment at ~37% and Economy at ~33% of variance weight, and G at 18% within
   Environment, does the masking result **survive the recovered weights**? Show the reasoning at the
   level of sign and order of magnitude, not false precision.
2. Note that **H (renewable energy) carries the same 18% as G** — half the environmental pillar is
   an energy-transition sub-pillar, not an ecosystem one. What does that do to the pillar's capacity
   to register natural-capital depletion at all?
3. Because PCA weights track **variance rather than policy priority**, can the environmental
   pillar's weight *fall* precisely when provinces converge environmentally, independent of
   performance? State the direction of the effect.
4. Give the **minimum conditions** under which an account-derived indicator could legitimately enter
   this index, as a bounded list. Constrain to what is verifiable from the public record — no
   costing, since §B establishes no cost data exists.

---

## E. Output format and budget

Five deliverables, nothing else. No executive summary, no background section, no restatement of §§A–C.

| # | Deliverable | Form | Cap |
|---|---|---|---|
| 1 | Revised derivability matrix (D1) | Table: code, indicator, measurement type, rating, binding constraint, maturity tag of the account relied on, confidence | one row per scoreable indicator |
| 2 | Change log vs round 1 (D1.5) | Table: indicator, round-1 rating, round-2 rating, cause (register change / maturity evidence / both) | rating movements only |
| 3 | Normalisation and reweighting analysis (D2) | Prose, six numbered answers | 1,200 words |
| 4 | Compensability restatement and masking under recovered weights (D3) | Prose, four numbered answers | 900 words |
| 5 | Conflicts, unresolved items, and public-record silences | Bounded list | 15 items |

Deliverable 5 is not optional. Include every point where §A and §B disagree with each other or with
round 1, every figure you were unable to verify, and every question that the public record cannot
answer — explicitly marking those that would require agency access, since that route is unavailable
to this project and such items are therefore permanent limitations rather than pending tasks.
