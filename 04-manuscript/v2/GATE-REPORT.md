# v2 acceptance gates — report

Run against `output/manuscript-v2.md`. Reproduce with `./assemble.sh` plus the checks below.

## Gate 1 — word count · PASS

| Component | Words | Gated |
|---|---|---|
| Body prose, sections 1–6 | 9,855 | **yes, 9,000–10,000** |
| Own tables (Tables 1–4) | 1,459 | no |
| Abstract | 295 | no |
| Supplementary S1–S5 | 6,136 | no |
| References | — | no |

**The gate measure changed during execution, on instruction.** `PLAN-v2.md` §2 budgeted 9,000–10,000
against a count that included this manuscript's own tables, which is the wrong measure for the venue:
Marine Policy's guidance is for article text, with tables, abstract and references counted separately.
`assemble.sh` now gates body prose alone and prints every excluded component, so the inclusive figure
stays visible rather than being quietly dropped. v1's comparable figure was 17,860.

## Gate 2 — citation parity · PASS

Fifteen distinct cited works appear in the main text; all fifteen resolve in `REFERENCES.md`, carried
into `drafts/references.md`. No claim carried from v1 arrives uncited. A full `/citation-checker` pass
against [05-rag/](../../05-rag/) has **not** been run and remains open — this gate confirms
reference-list resolution only, not chunk-level attribution.

## Gate 3 — caveat parity · PASS

| Flag | v1 | v2 |
|---|---|---|
| `[EVIDENCE GAP]` | 28 | 27 |
| `[ASSUMPTION]` | 19 | 17 |
| `[CONTESTED DENOMINATOR]` | 6 | 4 |

Every delta is accounted for. Two caveats were genuinely lost in first drafting and were restored: the
bounded-search finding that no Indonesian statistical register supplying provenance, spatial unit,
vintage and revision policy was encountered (now §3.3, and it strengthens §5.2's register objection),
and the assumption on what a governance account would contain (now §4.3).

The remaining deltas are correct behaviour, not caveat loss:

- **`[CONTESTED DENOMINATOR]` 6 → 4.** v1 re-tagged the 7.64% figure at five separate restatements
  across §§5.4, 6.5, 7.3 and 9.1. v2 states the figure once in results, once in methods as the general
  ambiguity, and once in limitations. The two dropped uses correspond to restatements that no longer
  exist.
- **`[EVIDENCE GAP]` −1, `[ASSUMPTION]` −2.** Three claims were cut with their passages: Annex 3's
  per-province analysis behind a short link, the conditional imputation-gain claim with no baseline,
  and one duplicated 7.64% restatement. Each was verified absent from v2 as a *claim*, not merely as a
  tag — a surviving claim stripped of its flag would have failed this gate.

## Gate 4 — non-negotiables · PASS

- Four-against-three pillar conflict stated, unresolved, with the adopted locus declared (§2.3) and
  every dependent figure marked structure-dependent at use (§4.3).
- No derivability percentage carried forward: the 61% → 39% → 2.8% sequence appears only as corrected
  prior work, and the 36-indicator denominator is named as one the register does not have.
- Every Indonesian account output carries maturity tag (b).
- Every share is stated as a nominal share of printed weight, not effective influence (§5.5).
- Falsification condition stated (§6).
- No-agency-engagement constraint stated in both methods and limitations.
- **The refuted 2.5× inversion is gone.** 12.79% (b) against 13.70% (c) replaces it, and the finding
  is content mismatch rather than a maturity gap.

## Gate 5 — display items · PASS

Figures cited in numerical order at first mention: **1, 2, 3, 4, 5**. Tables likewise: **1, 2, 3, 4**.

v1 cited none of its own figures. The v1 numbering had no fig4; v2 renumbers to a contiguous 1–5, and
figures 2 and 3 were swapped after the first gate run so that numbering follows first mention.

| v2 | File | Was | First cited |
|---|---|---|---|
| 1 | `figure-1-compilation-chain.html` | fig1 | §2.1 |
| 2 | `figure-2-mapping-matrix.html` | fig5 | §4.2 |
| 3 | `figure-3-weight-cascade.html` | fig3 | §4.2 |
| 4 | `figure-4-route-comparison.html` | fig2 | §4.3 |
| 5 | `figure-5-reporting-calendar.html` | fig6 | §4.4 |

All five were corrected before citation. Figures 1 and 3 printed the refuted 2.5× inversion and the
18.9% aspirational share; both now print the corrected comparison and record the superseded figure as
superseded. Drafting scaffolding referring to superseded findings ("pending primary re-check", "SOT
standing rules §3.0", "finding 02") was resolved across all five, since the re-check it referred to has
been completed.

## Register metric — PASS, and not a gate

| | v1 | v2 | target |
|---|---|---|---|
| Mean sentence length | 28.5 | **21.0** | <24 |
| Median | 27 | 19 | — |
| Sentences over 40 words | 22.0% | **5.6%** | <10% |
| Appositive `being` | 54 | 16 | — |

Measured by `assemble.sh` at every run, so the register cannot silently drift back.

## Open after this pass

1. **`/citation-checker` has not been run.** Gate 2 is reference-list resolution only.
2. **Figure HTML was corrected by targeted surgery, not regenerated.** The numbers and status notes are
   right; the underlying SVG geometry in Figures 1 and 3 was drawn for the superseded grouping and its
   proportions were not redrawn.
3. **Venue choice remains formally open** between Marine Policy and Ocean & Coastal Management.
