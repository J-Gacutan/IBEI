> **Intermediate output** — standing rules for the SOT build. Read once. Do not re-read.

# Standing rules — SOT build, IBEI × Ocean Accounts article

Authoritative plan: [PRD-journal-article.md](../PRD-journal-article.md). Where this file and the PRD
differ, the PRD governs. You are producing a **skeleton of thought**, not prose.

## 1.0 The article in one paragraph

Compiling the IBEI is hard, hardest at provincial scale. Ocean accounts are **compilation
infrastructure** for the index that already exists — a spatially explicit, provenance-documented,
repeatable production system that can supply several IBEI indicators from one compilation cycle at the
spatial unit the index needs. The near-term gain is in *how* the indicators it touches are produced,
not how many it replaces. The headline finding is an **inversion**: the mature account types (extent,
condition, services) address ~7.6% of the composite, while the account types that bear on the largest
share (social ~30.5%, governance ~5%) are the least developed.

## 2.0 Evidence rules

- **Tier-1 corpus outranks every deep-research finding.** [05-rag/](../../05-rag/) — 199 verbatim,
  folio-located chunks over the IBEI's own published documentation, plus a 44-row indicator join table.
  Default read: [ibei-evidence-pack.md](../../05-rag/ibei-evidence-pack.md), a pre-retrieved pack built
  mechanically from the schema and join table. Per-slice files in
  [rag-parts/](../../05-rag/rag-parts/) are the fallback for targeted checks.
- **Cite the printed folio with the PDF page in brackets:** `p. 94 [pdf 104]`. Quote the Indonesian
  `content` field where wording is load-bearing; `content_en` is a drafting gloss, never a quotation
  source. Carry each `chunk_id` in the skeleton's evidence lines.
- **Findings 01–05 are a research aid, never a citable authority.** Anything reached through them is
  read at source before it is cited.
- **Finding 02 is under specific suspicion.** It reasoned from the non-retrievability of the three MMAF
  2022 reports, which are present in [00-background/](../../00-background/). Any account-side maturity
  claim taken from it is marked `[EVIDENCE GAP]` pending a primary re-check.
- **Unpublished compilations cannot be cited or leaned on implicitly.** Their only use is to direct the
  search toward a published equivalent. If none is found, the claim goes conditional or is dropped.
- **No fabricated specificity.** No invented weights, hectares, decree numbers or costs. Compilation
  cost is absent from the public record — state that, never estimate it.

## 3.0 Maturity tagging, mandatory

Tag every claim that something exists: **(a)** published official statistics · **(b)** experimental or
pilot compilation · **(c)** methodology under development · **(d)** announced but not started.

- Every Indonesian ocean account output is **(b)**. There is no BPS ocean account, no work-programme
  entry, no revision policy.
- **Three formulations below are CONTESTED as of 2026-08-14** and must not be repeated as settled fact.
  The §4 agent read the primary MMAF and BPS documents in [00-background/](../../00-background/) — the
  re-check my hostile review said was owed — and disconfirmed each. Until adjudicated against those
  documents directly, carry them as `[EVIDENCE GAP]`, not as rules:
  1. **ADJUDICATED 2026-08-16, user ruling: the 34/1 pairing is DROPPED.** The numeral does not appear
     in the manuscript, and the pairing is no longer mandated at any point of use. What survives is the
     evidenced claim alone: one province (NTB) carries a documented published compilation located by
     this study, and the July 2025 dashboard is reported from the GOAP page as a platform, tagged as a
     programme self-statement rather than a statistical release. CLAUDE.md and PRD §6 are superseded on
     this point. The original text of the contested formulation follows, for audit only:
     **"34 provinces dashboard-selectable"** is a platform observation, not a documented compilation
     count, and using it as the national maturity anchor substitutes one unpublished demonstration for
     another. §4 recommends **dropping the numeral** and stating only that one province (NTB) carries a
     documented published compilation. Note the tension: CLAUDE.md and PRD §6 both currently mandate
     the 34/1 pair at every point of use. **Do not amend CLAUDE.md on a subagent's reading** — the
     adjudication is a human call.
  2. **The national 2018 opening / 2021 closing extent series** is not evidenced in the primary
     documents. §4 records site-level figures instead — coral 183.34 → 165.08, seagrass 56.50 → 64.93,
     mangrove 13.53 → 6.15, sourced "BIG (2020), validated…" — and a two-document discrepancy that
     needs printing in full.
  3. **"Services"** overstates what exists. What was found is **benefit-transferred monetary valuation
     of ecosystem functions at pilot scale** (coral values transferred from Bohol and the Marianas), not
     SEEA-EA services supply-and-use in physical units. **These must never be conflated**, and §7.2's
     Tier C claim that services in physical units are near depends on the distinction holding.
- Where the formulations are used pending adjudication: extent remains the only type with any
  opening/change/closing structure; condition is cover-based Tier 1–2 against documented reference
  levels, not a full multi-indicator composite.
- Monetary values are **benefit-transferred**, therefore not the exchange-value basis SEEA-EA requires.
- Ecosystems covered: **mangrove, seagrass, coral reef only.**
- National extent series is **2018 opening / 2021 closing**. No implied national 2015 baseline.
- Social and governance accounts do **not** exist in Indonesia at any maturity above (c).
- TG-3.5 and TG-3.7 carry the **Emerging** badge and say so themselves. Quote badge and status wherever
  a circular is invoked.
- Maturity tags describe **the datum, not the document**. A register row specifying a required input is
  not evidence the input is published.

## 4.0 Published figures you may rely on

All from the Juknis (BAPPENAS 2025) and the IBEI Report 2024 (Dec 2025 revision), via the tier-1 corpus.

| Figure | Value | Locator |
|---|---|---|
| Pillar weights | enviro 36.9%, econ 32.6%, social 30.5% | Tabel 4, p. 94 [pdf 104] |
| Sub-pillar shares (Gambar 11) | A 5, B 8, C 6, D 7, E 1, F 5, G 18, H 18, I 6, J 4, K 21 | p. 93 [pdf 103] |
| Environment pillar split | si_enviro_s1 50.0%, si_enviro_s2 50.0% | Tabel 5, p. 94 [pdf 104] |
| Resource-quality variables | coral 3.7%, seagrass 8.6%, mangrove 0.3%, rehabilitation 6.8%, conservation area 22.0%, waste-disposal villages 18.7%, sanitation villages 20.8%, waste leakage 14.9%, land waste 4.2% | Tabel 6, pp. 95–96 [pdf 105–106] |
| Governance sub-pillar | one variable, `econ_gov_var22` (ports with TPI) at 100.0% | Tabel 6, p. 95 [pdf 105] |
| Renewable energy sub-pillar | solar and **hydropower** capacity and generation | Tabel 6, p. 96 [pdf 106] |
| Sensitivity (10% shock) | enviro pillar +6.37%, econ +5.62%, social +5.27%; resource quality +4.50; conservation area +2.45; hydropower +2.39; **coral condition +0.41** | Tabel 7, pp. 101–104 [pdf 111–114] |
| Derived, own arithmetic | 36.9% × 50.0% = **18.45%** of composite is resource quality; ecosystem condition ~2.3%; account-addressable ~7.6%; village sanitation ~7.3% | multiplication of the above |

### 4.1 Adopted conventions — binding on every section and figure

Added 2026-08-14 after the SOT director gate found the headline pair carried two numerators and two
denominators (recorded disagreements D1 and D2, chain break C4). These conventions are now settled.
Any section, brief or figure using a different one is defective, not merely inconsistent.

**D1 — the mature-route share is `7.64%`, and it means the Tier A five.** Indicators 19, 20, 21
(condition ≈2.33%), 24 (rehabilitation ≈1.25%) and 27 (conservation area ≈4.06%). Round to ~7.6% in
prose, print 7.64% in tables and figures. **Waste flows (25, 26) are reported separately at ≈3.5%**,
never folded into the headline. The wider "account-addressable ≈11.2%" reading may appear once, named
as the wider reading, and never as the headline.

**D2 — the social share is `13.7%`, and it means the classification-dependent share.** Derived from the
verbatim constituent data items: welfare 5.55% + education domain-cuts 1.91% + health insurance 6.23%
= ≈13.7% of the composite. These are the social indicators whose computation *requires* a
fisheries-sector domain cut. The remainder of the pillar does not: per-capita fish consumption
(≈14.21%) is not sector-conditioned, KKP education counts (≈2.28%) are administrative, coastal poverty
(≈0.33%) is geographic. The four components sum to 30.5% ✓.
**`30.5%` may be used only in the explicitly wider production-bearing reading, and never as the
classification claim.** An earlier PRD §7.3 drafting used 30.5% as the classification claim; that was
too loose and is superseded here.

**The inversion, restated on the adopted convention:** mature route ≈7.64%; aspirational route ≈13.7%
social-classification + ≈5.15% governance ≈ **18.9%**. The inversion holds — roughly 2.5×, not the
4.6× that the earlier 7.6-against-35 framing implied. **Use 2.5×. Do not use ~35%.** The finding
survives the correction and is more defensible for it; overstating it would hand a reviewer the easiest
possible rebuttal.

**Caveat that travels with every derived figure:** whether Tabel 4–6's percentages are raw PC1 loadings
or normalised contributions is not stated. Report the document's own High/Medium/Low tertile alongside
the percentage, and record that the tertile is BAPPENAS's simplification — including where Tabel 5
labels a 50.0/50.0 tie as High and Low.

## 5.0 The five internal conflicts — preserve, never resolve

1. **Four pillars** (Tabel 1, *Enabler* holding indicators 15–18) against **three** (Tabel 4/5, Gambar
   11). Confined to indicators 15–18; every Tier A indicator (19–21, 24, 27) is in Environment under
   both loci, so the §4 arithmetic is unaffected. Governance (indicator 18) *is* affected — say so.
2. Bounded 1–100 rescale against an unbounded PC score, on one printed page (Report p. 33 [pdf 45]).
3. 2045 provincial targets of 243.87 / 233.21 / 222.31 against a national target of 100.00.
4. 58 printed sensitivity rows against 59 stated scenarios.
5. A 50.0/50.0 tie labelled High and Low.

## 6.0 Withdrawn claims — must appear nowhere

- The mean-substitution / Z = 0 imputation collapse. The published rule is ML prediction from
  socio-economic proxies (Report pp. 64–66 [pdf 76–78]).
- Rinaldi et al. 2024 as evidence about IBEI aggregation. It builds its own index (min–max, arithmetic,
  then geometric) and uses PCA only against multicollinearity before a Bayesian regression.
- Finding 05's arithmetic-mean characterisation of the IBEI, and its unsourced 5%/95% split.
- Any "36 of 44" register language. The register is complete at 44. A 36 refers only to finding 03
  round 2's scoreable subset and must say so.
- The v1 five-class loss typology as a thesis, and the sign-inversion headline.

## 7.0 Framing boundary

Statistical infrastructure feeding a policy instrument. BAPPENAS plans; MMAF and BPS produce
statistics. Do **not** propose replacing the IBEI with accounts, subordinating either framework, or
treating index supply as the purpose of account compilation — accounts have independent statutory
purposes and index supply is one downstream use. Neither institution is under attack: the finding is
about a capacity gap under a statutory obligation. The social pillar's indicators stay BPS outputs; the
account contribution there is a **classification standard and compilation architecture**, not a
substitute data source.

## 8.0 Output format for your section

Return the skeleton for your assigned section only, as structured output. Per section and subsection:

- **Purpose** — one sentence, what it must accomplish for the reader.
- **Core claim** — the single argument it advances. A section without a claim is a placeholder, not an
  argument; say so if that is genuinely the case.
- **Key points** — specific and arguable, never topic placeholders.
- **Evidence needed** — what must be cited, quantified or demonstrated, with `chunk_id` and folio
  locator where the tier-1 corpus supplies it.
- **Logical connection** — how it depends on the previous section and sets up the next. The reader's
  question at the end of your section must be answered by the next one.
- **Flags** — `[EVIDENCE GAP]` where evidence is weak, missing or speculative; `[ASSUMPTION]` where the
  argument depends on something unconfirmed. Flag honestly; an unflagged weak section is worse than a
  flagged one.

Hierarchical numbering: your section is `N.0`, subsections `N.1`, `N.2`.

## 9.0 Word allocation discipline

Your allocation is from the PRD §5 table, **plus or minus twenty per cent**. Reconciliation across
sections happens in a single global pass after all sections are drafted, never during drafting. If your
section must carry several concessions, limits or separations, say so in your flags rather than
compressing them away — a wrong allocation cannot be fixed by better drafting.

## 10.0 Also write your per-section brief

Write `04-manuscript/briefs/section-<N>-brief.md`: your section's plan verbatim, plus only the
cross-cutting rules from this file that bear on it — the figures you use, the conflicts you touch, the
withdrawn claims you might otherwise repeat, the maturity tags you must carry. State in the brief that
it is a faithful extract and that the SOT and the PRD remain authoritative. Return only the skeleton
as your structured result; do not echo the brief's contents back.
