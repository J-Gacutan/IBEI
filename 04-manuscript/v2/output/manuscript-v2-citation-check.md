# Citation Check Report: manuscript-v2.md

> **Verdict: REJECTED**
> Three high-risk statements in Section 3.5 and Supplementary Data S2 contradict the corpus: the
> Juknis *does* print the technology sub-pillar weight the article says is unprinted, and the
> renormalisation sensitivity built on that omission does not hold. No headline figure is affected —
> the correction removes a caveat rather than moving a number.

RAG schema: `05-rag/ibei-tier1-rag-schema.json` (199 chunks, schema_version 1.0, generated 2026-08-14)
Date: 2026-08-18
Document: `/Users/z5238824/Documents/GitHub/3. Archive/IBEI/04-manuscript/v2/output/manuscript-v2.md`
Pass: 1

**Population.** The corpus covers four documents only — the Juknis (doc_1), the IBEI Report Dec 2025
revision (doc_2), Rinaldi et al. 2025 (doc_3) and the SIRUSA metadata (doc_4). 108 high- and
medium-risk statements draw on those four and are adjudicated here. Statements resting on MMAF 2022,
Tasriah et al. 2022, Rahayu et al. 2024, IDEEA Group 2021, United Nations et al. 2024, GOAP, Nardo,
Halpern, Ravallion or Wuwung are recorded **OUT_OF_SCHEMA** and are neither matched nor faulted: the
corpus cannot speak to them. Section 4.1 and most of Section 5.1–5.4 fall almost entirely in that
class.

---

## Score Summary

| Axis | Score | Pass/Fail |
|---|---|---|
| Citation Coverage | 97/100 | PASS |
| Citation Quality | 90/100 | PASS |
| Conflict Exposure | 40/100 | **FAIL** |
| Attribution Precision | 92/100 | PASS |

Conflict Exposure carries three CONFLICT-status statements at 20 points each. Under the rubric, a
CONFLICT on any high-risk statement forces REJECTED regardless of the other three axes. That verdict
is about one localised contradiction, not about the manuscript's argument: see *What the verdict does
not mean* below.

---

## Schema Health Warnings

- **`SCHEMA_SEMANTICS` — `citation.type == "self"` on all 199 chunks does not mean do-not-cite.**
  Every chunk carries `type: "self"`, which in this corpus marks *quoted from the source document
  itself* — the citable primary. Applying the skill's `PROHIBITED_SOURCE` rule literally would flag
  all 199 chunks and produce a meaningless verdict. Rule 9 was therefore not applied. Recommend
  retagging future builds as `document` to avoid the collision.
- **`MISSING_CITATIONS` — none.** No chunk has `citation.type == "missing"`.
- **`INACTIVE_CHUNKS` — none.** The `active` field is absent from the schema entirely; no chunk is
  suppressed.
- **`SCHEMA_STALE` — not raised.** Generated 2026-08-14, four days before this check.
- Structure conforms: all 199 chunks carry `chunk_id`, `content` and `citation`.

---

## Issues

| Issue ID | Statement | Section | Severity | Issue Type | Description | Recommended Fix |
|---|---|---|---|---|---|---|
| cc_issue_001 | "The technology sub-pillar's weight is not printed and is recovered as the residual of the economy pillar, at 4.11%" | 3.5 | blocking | CONFLICT | Juknis Tabel 5 prints it. `doc_1_juknis-weights_chunk_107` (p. 94 [pdf 104], not reconstructed) reads `si_econ_tech \| Indeks subpilar teknologi \| Rendah (4,1%)`. Corroborated verbatim by `doc_1_cross-slice-conflict_chunk_001`, and independently by Gambar 11 (`doc_1_juknis-weights_chunk_102`) printing E = 1% of the composite, which 32.6 × 4.1% = 1.34 reproduces. | Replace with the printed value: "The technology sub-pillar carries 4.1% of the economy pillar (Tabel 5, p. 94 [pdf 104])." Delete the residual derivation. Downstream 1.34% is unchanged. |
| cc_issue_002 | "In the economy pillar the five printed sub-pillar weights sum to 96.0, and renormalising over those five alone would give about 27.2% ... and about 5.37% for governance ... reported as an upper bound of roughly one percentage point" | 3.5; S2 Renormalisation test | blocking | CONFLICT | Six sub-pillar weights are printed, not five, and they sum to **100.1**. Renormalising over the actual printed set gives 26.12% for Tier B four and 5.15% for governance, against 26.15% and 5.15% adopted — deviations of 0.03 pp and 0.00 pp. The "~1 pp upper bound" is an artefact of dropping the printed technology weight. | Restate: the economy sub-pillars already sum to 100.1 as printed, so the renormalisation test is null there as it is for the pillars and the resource-quality variables. This *removes* a caveat from 26.1% and 5.15%. |
| cc_issue_003 | S2 row: "Technology sub-pillar \| residual \| 100 - 96.0 = 4.11 of economy \| 32.6 x 4.11% \| 1.34" | S2 | blocking | CONFLICT | The stated identity is false: 100 − 96.0 = 4.0, not 4.11. 4.11 is the value of a different row of the same table (aquaculture within sub-pillar A). The final 1.34 survives either way — 32.6 × 4.1% = 1.337. | Replace the row source with "Tabel 5, p. 94 [pdf 104]", printed input 4.1, arithmetic 32.6 × 4.1%, value 1.34. |
| cc_issue_004 | "The handbook does not state whether the percentages in Tabel 4 to Tabel 6 are raw first-principal-component loadings or normalised contributions" | 3.5 | advisory | PARTIAL_CONTENT | Literally supported — `doc_1_juknis-weights_chunk_104` says only *Besaran pembobot dihasilkan secara otomatis melalui proses PCA*. But **all fourteen printed weight groups in the corpus sum to 100.0 ± 0.1** (pillars 100.0; economy sub-pillars 100.1; environment 100.0; social 100.0; and all ten variable groups 99.9–100.1). The article does not report that pattern, which is the strongest internal evidence available on the question and points to normalised contributions. | Report the sum-to-100 pattern and narrow the caveat accordingly. The `[CONTESTED DENOMINATOR]` flag becomes more defensible for being tied to what the corpus actually shows. |
| cc_issue_005 | `[CONTESTED DENOMINATOR]` defined twice | 3.5 vs 3.6 | advisory | AMBIGUOUS_MATCH | §3.5 defines the flag as the loading-versus-normalised-contribution ambiguity ("Every derived figure here inherits that ambiguity"). §3.6 defines it as the bears-on-versus-supplies distinction ("recording that the share measures what these account types bear on rather than what an account would supply"). One token carries two unrelated objections. | Split into two flags, or fix one definition and cross-reference it at the other site. |
| cc_issue_006 | Assembled output has no reference list | whole document | blocking | SCHEMA_HEALTH | `drafts/references.md` exists and resolves, but `assemble.sh` lists it in neither `MAIN` nor `SUPP`, so `manuscript-v2.md` ends at Supplementary S5. Every in-text citation in the assembled file is unresolvable within that file. | Append `drafts/references.md` in `assemble.sh` after the main sections, excluded from the word gate alongside the abstract and tables. |
| cc_issue_007 | "the SIRUSA metadata (kegiatan 94936 and indikator 105371, both retrieved 2026-08-13)" | 3.3 | advisory | IMPRECISE_ATTRIBUTION | The corpus draws on **eleven** SIRUSA indicator pages: 105371 plus 105709–105718. `doc_4_sirusa-metadata_chunk_025` cites indikator/105712; `chunk_026` cites 105709–105718; `chunk_028` cites "105371, 105709-105718, common fields". Naming one under-reports the corpus's own scope. | "…kegiatan 94936 and indikator 105371 and 105709–105718, all retrieved 2026-08-13". |
| cc_issue_008 | "That is a difference of roughly 1.1 times" | 4.3 | advisory | IMPRECISE_ATTRIBUTION | S2 computes the maturity gap ratio as 1.07 (13.70 / 12.79 = 1.0703). Rounding 1.07 to "roughly 1.1" reads as a different figure from the one deposited, in the sentence that carries the corrected finding. | Use "roughly 1.07 times", or "within 10%". |
| cc_issue_009 | S2 social rows 32, 33–34, 42–44 and 37 leave "Printed input" blank | S2 | advisory | PARTIAL_CONTENT | The four rows producing 13.70% — one of the abstract's two headline figures — state "30.5 x weight" with no weight given, breaking the workbook's own convention. All four *do* reconstruct exactly from the corpus (see Per-Statement Detail), so this is an audit-trail gap, not an error. | Fill in: 32 → 18.2 × 82.6; 33–34 → 18.2 × 17.4; 42–44 → 13.7 × 45.6; 37 → 68.1 × 30.0, all of the social pillar's 30.5. |
| cc_issue_010 | S2 mixes two rounding routes without saying which applies | S2 | advisory | CITATION_QUALITY_DEFECT | Three totals are route-sensitive at the second decimal. Summing rounded components gives 2.33, 13.70 and 14.03; the exact products stated in the same rows give 2.32, 13.69 and 14.02. Tier A five (7.64), the upper bound (3.58) and route (b) (12.79) agree on both routes. | State the convention once — sum-of-rounded-components — and apply it consistently, or carry four decimals internally. |
| cc_issue_011 | "the monitoring chapter asserts comparability over *37 provinsi*" — three denominators named | 2.2 | advisory | PARTIAL_CONTENT | The instability claim is true and under-evidenced. A fourth locus sits in the corpus: `doc_1_juknis-sensitivity_chunk_401` (p. 101 [pdf 111]) recomputes the index "untuk 38 provinsi" across 59 scenarios, in the same handbook that asserts 37 thirty pages earlier. | Add the sensitivity chapter as a fourth instance. It strengthens the point at no cost. |

---

## Adjudications

None. This is pass 1.

---

## Per-Statement Detail

Per the skill's token discipline, full detail is given for defective statements; matched groups are
recorded one line each.

### Section 2.1 Compilation without collection — 15 statements, all MATCHED

Every claim resolves to `doc_4_sirusa-metadata` chunks 001, 002, 006, 007, 008 (kegiatan/94936,
retrieved 2026-08-13), verbatim: *Kompilasi Produk Administrasi*; *Statistik Sektoral*; *Identitas
Rekomendasi: -*; Eselon 2 *Direktorat Kelautan dan Perikanan*; *Metode Pengumpulan Data: Pengumpulan
data sekunder*; *Sarana: Lainnya : Publikasi KKP dan BPS*; *Unit: Lainnya : Provinsi*; *Uji Coba
(Pilot Survey): Tidak*; *Penyesuaian Nonrespon: Tidak*; *Pelatihan Petugas: Tidak*; *Supervisor 0;
Enumerator 0*; *Pengumpulan Data: 2025-04-01 s.d. 2025-05-01*; *Diseminasi Hasil: 2025-08-01 s.d.
2025-09-01*. No defects. This is the most cleanly sourced section of the article.

### Section 2.2 What the published output records — 12 statements, MATCHED except cc_issue_011

Verified: Papua Tengah 8,51 lowest in the annex, with Papua Barat Daya 13,16 and Papua Selatan 12,25
(`doc_2_report-provincial_chunk_108`, p. 70 [pdf 82]); 0,00 across marine industry, technology and
governance for the same three (`chunk_107`); Juknis Tabel 2 baselines 49,25 / 33,50 / 21,48
(`doc_1_juknis-cascading_chunk_108`, p. 69 [pdf 79]); national target 100,00 and Sulawesi Selatan
275,29 (same chunk); *normalized factor sebesar 0,6819* printed identically beneath all four regional
tables (`doc_2_report-provincial_chunk_109`, which records exactly that fact); technology sub-pillar
483,43 Jakarta and 147,45 Bali (`chunk_103`, p. 68 [pdf 80]); *37 provinsi* in the monitoring chapter
(`doc_1_juknis-cascading_chunk_111`, p. 71 [pdf 81]).

The imputation row of Table 1 — "A published ML framework naming no imputed indicator, count, model or
achieved error" — matches `doc_2_report-imputation_chunk_016` almost word for word: that chunk exists
precisely to record the absence, and states the framework "names no individual IBEI indicator as
imputed, gives no count of imputed cells, provinces or indicators, names no selected model per
indicator, reports no fitted RMSE/MAE/R-squared value". Exemplary attribution of a negative.

### Section 2.3 The pillar conflict — 3 statements, all MATCHED

Tabel 1's four-pillar *Enabler (teknologi & tata kelola)* against Tabel 4/5/Gambar 11's three both
resolve to `doc_1_cross-slice-conflict_chunk_001`, the record built to hold the contradiction. The
article's refusal to resolve it, and its declaration of the three-pillar locus for weight arithmetic
with register rows keeping Tabel 1 labels, is consistent with the corpus and with the standing rule
in CLAUDE.md.

### Section 3.3 Corpus — 11 statements, MATCHED except cc_issue_007

199 chunks; 106 Juknis / 49 Report / 15 Rinaldi / 29 SIRUSA; build dated 2026-08-14; 17 reconstruction
flags; one recorded conflict; 44 join rows — all reproduce exactly from the schema's `summary` block.
**"totalling 62 items"** reproduces exactly: the 44 `data_pembentuk` arrays hold 62 entries (28 rows
with one item, 14 with two, 2 with three). Defect: cc_issue_007.

### Section 3.5 Weight arithmetic — 6 statements, 3 CONFLICT

- **CONFLICT** (cc_issue_001): technology weight stated unprinted. Refuting chunks
  `doc_1_juknis-weights_chunk_107`, `doc_1_cross-slice-conflict_chunk_001`, corroborated by
  `doc_1_juknis-weights_chunk_102`. Both refuting chunks carry `is_reconstructed: false`.
- **CONFLICT** (cc_issue_002): the 96.0 sum and the ~1 pp upper bound.
- **CONFLICT** (cc_issue_003): the S2 residual row's arithmetic.
- MATCHED: pillar weights from Tabel 4, sub-pillar splits from Tabel 5, variable weights from Tabel 6,
  Gambar 11 integers as cross-check — all four locators correct as printed.
- PARTIAL (cc_issue_004): the loading-versus-normalised ambiguity.
- MATCHED: "the nine printed weights already sum to exactly 100.0" for resource quality — confirmed,
  3.7 + 22.0 + 8.6 + 0.3 + 18.7 + 20.8 + 6.8 + 14.9 + 4.2 = 100.0.

### Section 4.2, Table 2, and Supplementary Data S2 — 32 arithmetic statements

**28 of 32 reproduce exactly** from the printed weights. The Tier A chain is sound end to end:
36.9 × 50.0% = 18.45; the five Tier A variables at 3.7 + 8.6 + 0.3 + 6.8 + 22.0 = 41.4% of the
sub-pillar give 7.64%; the per-indicator shares 0.68, 1.59, 0.06, 1.25 and 4.06 each reproduce and sum
to 7.64; the matched-rows figure 2.33 and the upper bound 3.58 both reproduce. Governance
32.6 × 15.8% = 5.15 and Tier B four 32.6 × 80.2% = 26.15 reproduce, and Gambar 11's integers
5 + 8 + 6 + 7 = 26 and F = 5 independently confirm them.

**The 13.70% social share reconstructs in full** from chunks 108, 115, 116 and 117, which the
workbook itself does not show (cc_issue_009): social 30.5% × welfare 18.2% × PKH 82.6% = 4.59;
× counts 17.4% = 0.97; social × education 13.7% × (21.3 + 21.2 + 3.1)% = 1.91; social × health 68.1%
× insurance 30.0% = 6.23. Sum 13.70. Coastal poverty at 68.1% × 1.6% = 0.33 and the Tabel 6 variant
total of 14.03 likewise reproduce.

The 4 route-sensitive totals are cc_issue_010, all at the second decimal.

### Section 4.1, and Sections 5.1–5.4 — OUT_OF_SCHEMA

The compiled record rests on MMAF 2022, Tasriah et al. 2022, Rahayu et al. 2024 and the GOAP country
page; the discussion adds IDEEA Group 2021, United Nations et al. 2024, Nardo et al. 2008, Halpern et
al. 2012, Ravallion 2012 and Wuwung et al. 2024. None is in the corpus. These statements are **not**
faulted here and remain unverified at chunk level — a citation check against this schema cannot reach
them.

One internal check was possible and passes: 48,211 cells at 625 m² give 3,013.19 ha against the
2,980.84 ha printed, a shortfall of 32.35 ha, which is 1.07% — the article's "1.1%" holds.

**Rinaldi et al. (2025) is handled correctly.** Both uses (Sections 1 and 5.4) describe it as
constructing its own sub-national index on a human development index template and explicitly deny it
is an analysis of the official index. That matches doc_3 and satisfies the standing rule that Rinaldi
is not evidence about IBEI aggregation. No PCA or Z-score claim anywhere in the manuscript is
attributed to Rinaldi.

---

## What the verdict does not mean

The rubric returns REJECTED on the presence of any high-risk CONFLICT. Three qualifications belong
with that:

1. **No headline figure moves.** 7.64%, 2.33%, 3.58%, 26.1%, 5.15%, 12.79%, 13.70% and the 1.07 ratio
   all survive untouched. The technology sub-pillar's own share, 1.34%, is identical under the printed
   weight and the erroneous residual.
2. **The correction strengthens the article.** cc_issue_002 removes a stated ~1 pp uncertainty from
   26.1% and 5.15%, and cc_issue_004 lets the `[CONTESTED DENOMINATOR]` caveat rest on evidence rather
   than on silence.
3. **The defects are concentrated.** All three conflicts are the same error — one printed value
   overlooked — surfacing in one Methods paragraph and one supplementary row. Everything else the
   corpus can adjudicate matches.

---

## Summary Counts

| Metric | Count |
|---|---|
| Statements adjudicable against this corpus | 108 |
| High-risk | 95 |
| Medium-risk | 13 |
| MATCHED | 97 |
| PARTIAL_MATCH | 8 |
| UNMATCHED | 0 |
| CONFLICT | 3 |
| OUT_OF_SCHEMA (not adjudicated) | see Section 4.1 / 5.1–5.4 above |
| Blocking issues | 4 |
| Advisory issues | 7 |
