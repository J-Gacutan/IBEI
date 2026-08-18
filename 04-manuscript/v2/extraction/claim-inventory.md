# Claim inventory — v1 → v2

Phase 1 deliverable (ibei-adz). One row per load-bearing claim in v1 main text. `Dest` is the v2
destination; `S` means demoted to supplementary; `Cut` requires a reason. Mechanical tag counts are
in [tag-inventory.md](tag-inventory.md): 28 `[EVIDENCE GAP]`, 19 `[ASSUMPTION]`, 6
`[CONTESTED DENOMINATOR]`, of which three EG/A/CD occurrences are the Methods' own definitions of
the flags and are not claims.

## 0. Corrections applied at extraction

Recorded here rather than silently carried, per plan §7.

| # | v1 states | Correction | Authority |
|---|---|---|---|
| C1 | Mature account route 7.64% against 18.9% compiled nowhere, an inversion of ~2.5× | Routes with a pilot-scale Indonesian compilation, tag (b), total **12.79%**; the one route with no compilation at any maturity, tag (c), is the classification-dependent social share at **13.70%**. The gap is **~1.1×**, not 2.5× | ibei-2mf; fig 2 re-check against MMAF 2022 primaries |
| C2 | Governance sub-pillar (5.15%) is tag (c), compiled nowhere | Governance is tag **(b)**: the Gili Matra pilot compiles a governance account | MMAF 2022, Tables 18–19, p. 79; Roadmap §5.5, p. 15 |
| C3 | The inversion is the finding | The maturity gap is not the finding. **Content mismatch is**: no compiled account produces the constituent data item the register asks for on any of these rows, and what the pilot does produce — monetary supply and use, zone areas, protection expenditure — carries 0.00% weight | ibei-2mf |
| C4 | National extent series opening 2018, closing 2021 | **Withdrawn.** Not found in the MMAF/BPS primaries when read at source; carried as contested, not as a produced vintage | fig 6 re-check; ibei-ojq |
| C5 | fig 1 and fig 3 print the 2.5× inversion and 18.9% | Both must be regenerated before citation. fig 2 and fig 6 are already corrected | ibei-ojq |

C1–C3 land in v2 §4.3 and change what that subsection argues. C1 also invalidates the v1 abstract's
"7.6% … roughly 19%" pairing, which is why the abstract is rewritten rather than trimmed.

## 1. Introduction (v2 §1 ← v1 §1, 991 → 900)

| v1 | Claim | Citation | Dest |
|---|---|---|---|
| §1¶2 | Composite indices are an established form; OHI scores every coastal country on ten goals | Halpern et al., 2012 | §1 |
| §1¶2 | Imputation, weighting and aggregation are the three choices that most move a ranking | Nardo et al., 2008 | §1 |
| §1¶3 | SEEA-EA adopted by the UN Statistical Commission 2021 as an international statistical standard | United Nations et al., 2024 | §1 |
| §1¶3 | A complete national ocean-account sequence has been specified | IDEEA Group, 2021 | §1 |
| §1¶3 | Ocean accounts belong in the statistical apparatus, not in analysis | Fenichel et al., 2020 | §1 |
| §1¶3 | Sub-national compilation demonstrated operationally | Gacutan et al., 2022 | §1 |
| §1¶3 | Grid size and designation rule change the extent estimate materially | Rahayu et al., 2024 | §1 |
| §1¶4 | Ocean policy lineage 2017 → BAPPENAS 2021 → BAPPENAS 2024; limited data support named as an obstacle | Wuwung et al., 2024 | §1 |
| §1¶4 | Rinaldi et al. build their own Sumatera index on an HDI template; not an analysis of the official index | Rinaldi et al., 2025 | §1 |
| §1¶5 | IBEI is an official national development indicator under Perpres 12/2025; provincial 2045 targets by SEB 2/2024 | Juknis | §1 |
| §1¶5 | SIRUSA registers the compilation as sectoral statistics, secondary collection from KKP and BPS publications | SIRUSA kegiatan 94936 | §1 |
| §1¶6 | Framing boundary: statistical infrastructure feeding a policy instrument; nothing proposes replacement | CLAUDE.md constraint | §1 |
| §1¶6 | Object bounded to the 44-indicator edition; every Indonesian account output tag (b) | §4 | §1 |
| §1¶7 | Three findings preview | — | §1, **rewritten** for C1–C3 |
| §1¶7 | Prior mapping moved 61% → 39% → 2.8% over a 36-row denominator the register does not have | CLAUDE.md; finding 03 r2 | §1 |

**Cut:** none. §1 is the only section within budget.

## 2. The compilation problem (v2 §2 ← v1 §2, 1,603 → 1,100)

| v1 | Claim | Citation | Dest |
|---|---|---|---|
| §2.1 | *Kompilasi Produk Administrasi* under *Statistik Sektoral*, empty *Identitas Rekomendasi* | SIRUSA 94936 | §2 |
| §2.1 | *Pengumpulan data sekunder*; instrument *Lainnya: Publikasi KKP dan BPS*; no pilot, 0 supervisors, 0 enumerators | SIRUSA 94936 | §2 + Table 1 |
| §2.1 | Collection 1 Apr–1 May 2025, dissemination 1 Aug–1 Sep 2025, against Juknis Phase 1 Oct–Dec of year *n* | SIRUSA; Juknis p. 71 [pdf 81] | §2 + **Fig 6** |
| §2.1 | A figure not public by ~April of *n+1* cannot enter that cycle `[EVIDENCE GAP]` | inference, stated conditionally | §2 |
| §2.1 | Variables 12–14 carry T-2 against T-1 elsewhere; same periods rendered T-1 and 2024 | SIRUSA variable tables | Table 1 |
| §2.2 | ML imputation framework from socio-economic proxies, SUSENAS named; no imputed indicator, count, model or error `[EVIDENCE GAP]` | Report pp. 64–66 [pdf 76–78] | §2 + Table 1 |
| §2.2 | Papua Barat Daya, Papua Selatan, Papua Tengah at 0.00 across three sub-pillars; headline 8.51 `[ASSUMPTION]` | Report p. 70 [pdf 82]; Juknis p. 69 [pdf 79] | §2 + Table 1 |
| §2.2 | Normalized factor 0.6819, no derivation | Report pp. 67–70 [pdf 79–82] | Table 1 |
| §2.2 | Technology 483.43 (Jakarta), 147.45 (Bali) on tables headed *Normalized* | Report p. 68 [pdf 80] | Table 1 |
| §2.2 | Twelve provinces carry 2045 targets above the national 100.00; highest 275.29 | Juknis p. 69 [pdf 79] | Table 1 |
| §2.2 | Denominator unstable: 38 provinces, Annex 2 tabulates 37, Juknis asserts *37 provinsi* | Report; Juknis p. 71 [pdf 81] | §2, one sentence |
| §2.3 | **Four-pillar Tabel 1 against three-pillar Tabel 4/5/Gambar 11; not resolved; all weight arithmetic follows three-pillar** | Juknis | §2 **and §3** — non-negotiable |
| §2.3 | Rescale to 1–100 asserted alongside an unbounded possibly-negative PC score | Report p. 33 [pdf 45] | §2 |

**Cut:** the §2.2 "three further symptoms are recorded in Table 1 rather than argued here" bridge —
the table now carries them without narration. **S:** nothing.

## 3. Materials and methods (v2 §3 ← v1 §11 + §5.1 + functional half of §3, 1,594+~400+~350 → 1,200)

| v1 | Claim | Dest |
|---|---|---|
| §11 Design | Documentary analysis of two published specifications; no sampling, no inference | §3 |
| §11 Corpus | 199 chunks, build dated 2026-08-14, slice-by-slice provenance; 17 records flagged reconstructed; conflicts held as conflicts | §3, compressed |
| §11 Corpus | Account-side evidence read directly: MMAF 2022 series, BPS SEEA materials, Rahayu et al. 2024, Kepmen KP 44/2023, GOAP page | §3 |
| §11 Search | Bilingual terms; no BPS catalogue or SDI portal search; no agency engagement; absence claims bounded to the named set | §3 |
| §11 Rule | **Membership rule: matched / partial / provenance question; Tier A = union, n = 5; 39 rows none** | §3 |
| §11 Rule | 62 constituent data items across 44 rows; rule applied item by item, row takes the highest grade | §3 |
| §11 Rule | Two decisions fixed before scoring: titles are not evidence; a definitional match carries no compilation claim | §3 |
| §11 Rule | Not blind, no second coder, no adjudication protocol | §3, one clause |
| §11 Test | Repeatability into a dated window, not demonstrated capability | §3 |
| §11 Test | Maturity tags (a)–(d); the tag describes the datum, not the document | §3 |
| §11 Weights | Tabel 4 pillars, Tabel 5 sub-pillars, Tabel 6 variables, Gambar 11 integers as cross-check; technology recovered as residual 4.11% | §3 |
| §11 Sens. | Renormalisation test: resource-quality nine weights sum to 100.0 exactly, so 18.45/7.64/3.58/2.33 unchanged; economy five sum to 96.0, alternative 27.2%/5.37% bounded at ~1 pp and not supported by Gambar 11 | §3, condensed; workings **S2** |
| §11 Conv. | Decimal commas; Indonesian quotation; the three inline flags | §3 |
| v1 §3¶1 | Four properties: standing classification, balancing identity, re-aggregable spatial basis, documented vintage/revision — **this study's synthesis**, assembled from paras 4.14–4.17, App. A1.1 para. A1.3, para. 1.60 | §3 |
| v1 §3¶2 | Balancing identity: closing = opening + additions − reductions; managed/unmanaged split | §3 |
| v1 §3¶3 | BSUs are "a means of implementing … rather than elements in a nested hierarchy"; accounting area is compiler-delineated | §3 |
| v1 §3¶5 | **The register objection**: codification supplies two of four properties outright, spatial is intermediate, the residual is the balancing identity plus the revision rule | §5 (Discussion), **not** §3 |
| §5.1 | Membership test statement, duplicated from §11 | **Cut** — §3 now owns it; this duplication is ~400 words |
| v1 §3 Table 2 | Four SEEA account types by output and relevance | **Cut as a table**, folded into §3 prose in three sentences; its "relevance" column is superseded by Table 2 (Tier A) and Table 3 (routes) |
| v1 §3¶4 | Provenance/revision exposition | §3, compressed to two sentences |

## 4. Results (v2 §4 ← v1 §§4–7, 9,488 → 3,900)

### 4.1 The compiled record (← v1 §4, 1,795 → 700)

| v1 | Claim | Citation | Dest |
|---|---|---|---|
| §4.1 | One pilot: Gili Matra, north Lombok, plus Rahayu et al. 2024 at Saleh Bay; both in NTB | MMAF 2022 | §4.1 |
| §4.1 | 2,980.84 ha on a 25 m MBSU grid of 48,211 cells, opening 2015, closing 2021 | MMAF 2022, pp. 30, 39 [pdf 44, 53] | §4.1 |
| §4.1 | 48,211 × 625 m² = 3,013.19 ha against 2,980.84 printed, a 1.1% shortfall, unexplained `[EVIDENCE GAP]` | this study's arithmetic | §4.1, one sentence |
| §4.1 | GOAP labels the three 2022 MMAF outputs 'preliminary consultation drafts'; BPS lists scaling up among challenges | Tasriah et al., 2022, slide 9 | §4.1 |
| §4.1 | **Every Indonesian account output is tag (b)**; no BPS release, no work-programme entry, no revision policy, no published cost | — | §4.1 — non-negotiable |
| §4.1 | July 2025 national dashboard is a programme self-statement about a platform | GOAP country page | §4.1 |
| §4.2 | Complete asset account: coral 259.50→247.50, seagrass 76.75→102.50, mangrove 21.50→10.69 ha, additions/reductions itemised | MMAF 2022, tab. 5, p. 52 [pdf 66] | §4.1 + **S5** |
| §4.2 | **BPS series diverges**: coral 183.34→165.08, seagrass 56.50→64.93, mangrove 13.53→6.15 | Tasriah et al., 2022, slide 3 | §4.1 |
| §4.2 | The divergence is not a constant offset: ratios 0.707/0.667, 0.736/0.633, 0.629/0.575; MMAF coral loss 12.00 ha against BPS 18.26 ha `[EVIDENCE GAP]` | this study's arithmetic | §4.1 + §5 (counter-instance) |
| §4.2 | Condition compiled Tier 1–2, cover-based, against documented reference bands: CPCe/Muttaqin, Seagrass Watch, plot sampling | MMAF 2022, pp. 31–33 [pdf 45–47] | §4.1 |
| §4.2 | 16.99% live hard coral 2021 read against Giyanto et al. 2017 bands; mangrove good at ≥1,500 ind/ha under Decree 201/2004 | MMAF 2022, pp. 40, 47 [pdf 54, 61] | §4.1 |
| §4.2 | Mean cover by zone, not share of area by class `[ASSUMPTION]`; 16.99% classified moderate against a 19–35% band | MMAF 2022 | §4.2 |
| §4.2 | **No ecosystem services account in physical units exists**; what exists is benefit-transferred monetary valuation, IDR 45.24→64.17 bn/yr | MMAF 2022, pp. 36, 60 [pdf 50, 74] | §4.1 |
| §4.2 | Benefit transfer is not the exchange-value basis SEEA-EA requires | Tasriah et al., 2022, slide 9 | §4.1 |
| §4.3 | Kepmen KP 44/2023 constituted the team 16 Feb 2023, five working groups, BPS chairs Pokja C, BAPPENAS a member of Pokja D; term expired 31 Dec 2023, no renewal located `[EVIDENCE GAP]` | Kepmen KP 44/2023 | §4.4 + Table 4 |
| §4.3 | A standardised grid has yet to be established | Rahayu et al., 2024 | §4.4 + Table 4 |
| §4.3 | Bounded search statement, 11–16 Aug 2026, named set, bilingual terms `[EVIDENCE GAP]` | — | **§3** (methods), not results |
| §4.2 | Benefit-transfer source list (Bohol, Mariana, Mexico, Gazi Bay, Bintuni) | — | **S5** |
| §4.2 | The three-completenesses framing as a subsection | **Cut as structure**, kept as one sentence: extent complete, condition partial, valuation not an account |

### 4.2 Indicators the existing accounts can serve (← v1 §5 less criteria, 2,500−400 → 1,100)

| v1 | Claim | Citation | Dest |
|---|---|---|---|
| §5¶1 | Five of 44 rows: 19, 20, 21 matched; 24 partial; 27 provenance question | Juknis Tabel 1 | §4.2 + **Table 2** |
| §5.1 | Both axes conceded: none of the five values has been published for any province or site `[EVIDENCE GAP]` | — | §4.2 — non-negotiable |
| §5.1 | All five sit in the environment pillar under both loci, so the pillar conflict does not reach this arithmetic | — | §4.2 |
| §5.2 | The three verbatim constituent data items, each *antara 50-100% per provinsi* | Juknis Tabel 1, p. 12 [pdf 22] | **Table 2** (verbatim) |
| §5.2 | Each is a tabulation of extent by class, not an index against reference condition — **the correction** | — | §4.2 |
| §5.2 | Input layer exists: MBSU surface plus station cover, coral 18.11% (2016), 16.99% (2021), seagrass mean 32.28%, max 82.01% | MMAF 2022, pp. 40, 45 [pdf 54, 59] | §4.2 |
| §5.2 | 16.99% narrative against 18.36% in the report's own tab. 3, same page | MMAF 2022 | §4.2 + §5 |
| §5.2 | The 50% threshold matches no Indonesian class boundary in use; Giyanto moderate runs 19–<35% `[EVIDENCE GAP]` `[ASSUMPTION]` | Giyanto et al., 2017 | §4.2 |
| §5.2 | Mangrove unit mismatch: % density asked, m²/ha and ind/ha reported, no documented conversion `[EVIDENCE GAP]` | MMAF 2022, p. 47 [pdf 61] | §4.2 + Table 2 |
| §5.2 | Minimum mapping unit and denominator unfixed `[ASSUMPTION]` | — | §4.2 |
| §5.2 | Mangrove error 44.06% under 25 m hierarchy against 1.59% under 25 m dominance | Rahayu et al., 2024 | §4.2 |
| §5.3 | Indicator 24: hectares planted, an activity input; pilot's managed-expansion line unpopulated, only 11.19 ha managed mangrove regression; scope mismatch (swamp, peatland) | MMAF 2022, tab. 5 | §4.2 + Table 2 |
| §5.3 | Seagrass ledger: 51.50 ha gained (8.25 from reef, 43.25 from other substrate) against 25.75 ha lost | MMAF 2022 | **S5** |
| §5.3 | Indicator 27: designated area, an administrative datum; 22.0% of the sub-pillar, ~4.06% of the composite; the account's contribution is reconciliation, not supply | Juknis Tabel 6; SIRUSA | §4.2 + Table 2 |
| §5.4 | Gap sort: 19, 20 coverage/vintage; 21, 24 definition; 27 provenance; spatial standard cross-cutting | — | §4.2 + Table 2 (Gap type column) |
| §5.4 | Weight chain 36.9% × 50.0% = 18.45%, of which the five sum to ~7.64% `[CONTESTED DENOMINATOR]` | Juknis Tabel 4, 5, 6 | §4.2 + **Fig 3** |
| §5.4 | Decomposition: ~2.33% matched, ~1.25% partial, ~4.06% not supplied; the supply share is **~2.33%**, outer bound ~3.58% | this study's arithmetic | §4.2 — non-negotiable |
| §5.4 | No producing agency is stated for any of the 44 rows `[EVIDENCE GAP]` | Juknis Tabel 1 | §4.2 |
| §5.4 | "Neither reading is the finding … what changes is how the numbers are made" | — | **§5** (Discussion), not results |

### 4.3 Extension routes and what separates them (← v1 §7, 3,223 → 1,300)

**This is where C1–C3 land.** The subsection's spine changes from a maturity inversion to a content
mismatch.

| v1 | Claim | Citation | Dest |
|---|---|---|---|
| §7.1 | Four economy sub-pillars = 80.2% of the economy pillar = ~26.1% of the composite; Gambar 11 confirms 5+8+6+7=26 | Juknis Tabel 5, Gambar 11, pp. 93–94 | §4.3 + Table 3 |
| §7.1 | Structure-dependent: under Tabel 1, indicators 15–18 leave the economy pillar; no equivalent figure publishable | — | §4.3 — non-negotiable |
| §7.1 | **Tier B adds no quantity the register lacks**; what it adds is an industry boundary | IDEEA Group, 2021; Fenichel et al., 2020 | §4.3 |
| §7.1 | Sub-pillar A is 83.0% aquaculture by weight against 6.3% capture volume, so stock assessment bears on ~0.31% and an aquaculture boundary on ~4.11% | Juknis Tabel 6, p. 95 [pdf 105] | §4.3 |
| §7.1 | Waste flows ~2.75% and ~0.77%, reported separately, never folded into the headline | Juknis Tabel 6 | Table 3 |
| §7.2 | No constituent data item names a service flow, an asset value or a depletion term | Juknis Tabel 1 | §4.3 |
| §7.2 | Indicators 2–5 are unsigned production volumes; depletion defined at para. A1.25; sustainable yield by province and stock unpublished | SEEA | §4.3 + Table 3 |
| §7.2 | Sub-pillar H is 50.0% of the environment pillar and is solar and hydropower throughout `[EVIDENCE GAP]` on marine capacity | Juknis Tabel 6, p. 96 [pdf 106] | §4.3 + **§5** |
| §7.2 | Combined presentations are the one immediately available row | SEEA paras 14.56–14.57 | §4.3 + Table 3 |
| §7.3 | Seven social indicators (32, 33, 34, 37, 42, 43, 44) need a fisheries-sector survey domain; none computable without it | Juknis Tabel 1, p. 13 [pdf 23] | §4.3 + **Table 6→S** |
| §7.3 | Decomposition to ~13.7%: PKH 4.59%, counts 0.97%, education 1.91%, health insurance 6.23% | Juknis Tabel 5, 6 | Table 3 + **S4** |
| §7.3 | Indicator 38 disagrees with itself between Tabel 1 and Tabel 6; 13.7% on the Tabel 1 wording, ~14.0% on Tabel 6 | Juknis p. 96 [pdf 106] | §4.3, one sentence |
| §7.3 | The 30.5% wider reading is not interchangeable with 13.7% | — | §4.3 |
| §7.3 | Ocean employment and human capital named but not specified; SEEA specifies no social account `[ASSUMPTION]` `[EVIDENCE GAP]` | IDEEA Group, 2021 | §4.3 |
| §7.3 | Governance = one variable, TPI count, 100.0% of a sub-pillar at ~5.15% of the composite, matching Gambar 11's F at 5% | Juknis Tabel 6, p. 95 [pdf 105] | §4.3 + Table 3 |
| §7.3 | **Governance is tag (b), not (c)** — the pilot compiles a governance account | MMAF 2022, Tables 18–19, p. 79; Roadmap §5.5 p. 15 | §4.3 — **C2** |
| §7.3 | Technology has the identical one-variable shape, ~1.34% | Juknis Tabel 6 | §4.3 |
| §7.3 | Indicator 27's ~4.06% exceeds all three condition variables combined (~2.33%); Tabel 7 makes it the environment pillar's largest sensitivity contributor, +2.45 against +0.41 `[EVIDENCE GAP]` on units | Juknis pp. 101–104 [pdf 111–114] | §4.3 |
| §7.3 | Qualifying designated area by management effectiveness is a governance contribution to the environment pillar | — | §4.3 |
| §7.3 | ~2.5× inversion, 7.64% against 18.9% | **CUT — C1.** Replaced by 12.79% (b) against 13.70% (c), ~1.1×, and by the content-mismatch finding C3 | — |
| §7.3 | Three guard rails: not achievable score improvement; social indicators remain BPS outputs; the 30.5% reading must be named | — | §4.3 — non-negotiable |
| §7.3 | An ocean-sector classification standard needs no new survey **if** SUSENAS/SAKERNAS carry the detail, unverified `[EVIDENCE GAP]` | — | §4.3 |
| §7.1 | "One correction … is worth stating in prose" framing | **Cut** — meta-discourse |

### 4.4 Conditions precedent (← v1 §6, 1,970 → 800)

Most of this subsection becomes Table 4. Prose keeps only the one-off/recurring split, the two
conditions that decide the case, and the sequencing recommendation.

| v1 | Claim | Dest |
|---|---|---|
| §6¶1 | Five conditions, none satisfied, not equally binding; three one-off codification, two recurring | §4.4 |
| §6¶1 | **Falsification test**: an adopted national spatial standard, a BPS work-programme entry, or an extent compilation beyond the pilot sites closing after 2021 would refute the register | §4.4 |
| §6.1 | Repeatability into a dated window is the operative test | **§3** (methods) |
| §6.2 | No adopted national marine grid or MMU found `[EVIDENCE GAP]`; pilot literature records different resolutions | Table 4 |
| §6.2 | 12-nm limit under Law 23/2014, cited at second hand `[EVIDENCE GAP]`; allocation convention is this study's specification `[ASSUMPTION]` | Table 4 + §4.4 |
| §6.2 | **Condition is not additive**: an area-weighted mean over assets (para. 5.54), so a provincial ratio cannot be recovered from district values without the denominator | §4.4 — keep, it is a standard-derived constraint |
| §6.2 | Clean nesting across frames is asserted, not evidenced `[ASSUMPTION]` | Table 4 |
| §6.3 | T-1 for all five; the pilot closes 2021, published 2022; **the second vintage is what is absent** `[EVIDENCE GAP]` | §4.4 + **Fig 6** |
| §6.3 | No revision policy found `[EVIDENCE GAP]`; consequence — a silently improved account moves a province's value with no ecosystem change behind it | §4.4 + Table 4 |
| §6.4 | Two sectoral products feeding one another is not an accredited statistical input; supply arrangement content is this study's specification `[ASSUMPTION]` | Table 4 + one sentence |
| §6.4 | No microdata released, so a compliant supplier could not verify its value survived | §4.4 |
| §6.5 | **Compile first, insert second**: in a province without an account the indicator would itself be predicted from socio-economic proxies | §4.4 — non-negotiable |
| §6.5 | Proportion paragraph rehearsing 7.64/2.33/3.58/18.9 | **Cut** — C1 voids the 18.9, and §4.2 already prints the rest |

## 5. Discussion (v2 §5 ← v1 §8 + §9, 3,740 → 1,900)

| v1 | Claim | Dest |
|---|---|---|
| §9.1 | The production-process case: what changes at the matched rows is how the numbers are made, not the score | §5 — **the spine** |
| §9.1 | 62 items, resource-quality 9, the five mapped 5; consolidation is three items into one production run | §5, compressed |
| §9.1 | **The counter-instance**: two official series, two closing stocks, two deltas for one site; publishing account-shaped tables is not running an account `[ASSUMPTION]` | §5 — non-negotiable |
| §9.1 | The register objection conceded in part; the residual is the balancing identity plus the revision rule, and it is thin | §5 |
| §9.1 | OHI reports 18.5% of its global score gapfilled, 1–43% across goals, >60% for ten regions; recommends tracking gapfilling from the outset | Frazier et al., 2016 | §5 |
| §9.1 | Nardo: PCA weighting corrects for overlap and is not importance | Nardo et al., 2008, §6.1 | §5 |
| §9.1 | Paruolo et al.: nominal weights hardly ever match effective importance | Paruolo et al., 2013 | §5 |
| §9.1 | Becker et al. supply the test; it cannot be run without the provincial variable matrix `[EVIDENCE GAP]` | Becker et al., 2017 | §5 |
| §9.1 | Every share reported is a nominal share of printed weight, not effective influence | — | §5 — non-negotiable |
| §9.2 | Loose coupling: shared definitions, shared spatial unit, parallel publication; requires no institutional transfer | SEEA paras 14.56–14.57, 2.12; Gacutan et al., 2022 | §5 |
| §9.2 | A compilation cycle missing the window fails without the index failing with it | — | §5 |
| §9.2 | Three counter-readings: Rinaldi (index design), Wuwung (fragmentation), Ravallion (mashup index) | Rinaldi et al., 2025; Wuwung et al., 2024; Ravallion, 2012 | §5 |
| §9.2 | The statutory answer to Ravallion: the dashboard alternative is not in BAPPENAS's gift | — | §5 |
| §8.1 | Four published limitations: linearity, outliers, 2024 weights *tidak relevan*, heterogeneity — properties of the estimator, which an account does not reach | Report §3.1.1, p. 34 [pdf 46] | §5 |
| §8.2 | Aggregation discards the within-province distribution; the loss is asymmetric `[ASSUMPTION]` | Juknis Tabel 1 | §5 |
| §8.2 | The provincial boundary is administrative, not ecological; accounting area left to the compiler (para. 2.12) | SEEA | §5 |
| §8.3 | **Net extent change cannot enter**: low-variance signed series, unstable weight, *Reversi nilai indikator … jika ditemukan relasi negatif*; belongs beside the composite | Report pp. 29–30 [pdf 41–42]; Nardo §6.1 | §5 + Table 3 |
| §8.4 | No account should supply the renewable-energy sub-pillar; building one would be an instrument error | Juknis Tabel 5 | §5 |
| §8.5 | Eight limitations | §5, condensed to a limitations paragraph; the renormalisation workings to **S2** |
| §8.5 | Formulae illegible at Juknis pp. 64–65 and Report pp. 31–32; notation reconstructed at medium-high confidence | §5 |
| §8.5 | Loadings-against-contributions ambiguity, inherited by every derived figure `[CONTESTED DENOMINATOR]` | §5 — non-negotiable |
| §8.5 | Not blind, no second coder | **§3** |
| §8.5 | No agency engaged, by project constraint | §5 |
| §8.1 | The BAPPENAS remedies paragraph | **Cut to one clause** — it restates §5's combined-presentation point |

## 6. Conclusion (v2 §6 ← v1 §10, 665 → 500)

| v1 | Claim | Dest |
|---|---|---|
| §10.1 | Accounts are worth building for how the touched indicators would be produced, not how many they fill | §6 |
| §10.2 | **No compilation cost anywhere in the record** `[EVIDENCE GAP]`; this study declines to estimate one | §6 |
| §10.3 | Follow-on 1: re-tabulate Gili Matra to the 50–100% cut; testable at exactly one site | §6 |
| §10.3 | Follow-on 2: compilation guidance as a practitioner output | §6, one clause |
| §10.3 | **Falsification**: if a single-province compilation reproduces the published value no better than the secondary route, or at unbearable cost, the case fails | §6 — non-negotiable |
| §10.3 | Continued external technical assistance is an assumption `[EVIDENCE GAP]` | §6, one clause |

## 7. Supplementary

| Item | Content | Source |
|---|---|---|
| S1 | 44-row scoring sheet | carried over unchanged |
| S2 | Weight workbook + the renormalisation test workings | carried over, extended from v1 §8.5/§11 |
| S3 | Conditions-precedent long form | v1 §6.2–6.4 derivations |
| S4 | Social-pillar decomposition (v1 Table 6) + extension-route derivations | v1 §7.1–7.3 |
| S5 | Compiled-record inventory: asset account, conversion matrix, seagrass ledger, benefit-transfer sources | v1 §4.2, §5.3 |
