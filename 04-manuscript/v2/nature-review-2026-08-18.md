# Referee report: Ocean accounts as compilation infrastructure for a blue economy index

**Manuscript:** `04-manuscript/v2/drafts/` (7 sections + 5 supplements), assembled as
`output/manuscript-v2.md`, 1,252 lines.
**Review date:** 2026-08-18.
**Regime:** dual. Target venue is **Marine Policy** (Elsevier; 9,000–10,000 words, Harvard
author–date, per `PLAN-v2.md`). Nature's standard is applied as the review's benchmark. Every
compliance row carries status under both, and no issue is reported as a failure without naming
the regime it fails under.
**Paper type:** conceptual / documentary-analytic. Randomisation, blinding, sidedness, exact P,
effect sizes, sample-size justification, multiple-comparison correction and human/animal ethics
are structurally inapplicable and are marked n/a throughout, not silently omitted.

---

## Executive summary

The paper asks whether Indonesia's ocean accounts can serve as compilation infrastructure for the
statutory Indonesia Blue Economy Index, and answers by reading two published specifications against
each other: the index's 44-row register and the SEEA-EA account structures. Its outstanding feature
is evidential discipline. It scores register rows against verbatim Indonesian constituent data items
rather than indicator titles, scopes every negative as "unfound within the named set", preserves an
unresolved four-versus-three pillar contradiction rather than adjudicating it, publicly corrects its
own authors' superseded figures, and states a falsification condition. That is better practice than
most desk studies in this literature achieve.

The decisive weaknesses are concentrated in the arithmetic chain and the deposit that is supposed to
make it auditable. The deposited weight workbook prints a false residual (`100 − 96.0 = 4.11`) that
propagates to a reported share; the numeral 4.11% denotes two different quantities on two different
bases; the paper's second headline figure, 12.79%, has no in-text derivation, no generating method,
and wholly contains the 7.64% presented beside it as though independent; the graver of the two
limitations conceded in §5.5 is absent from the abstract and conclusion; the central result is a
single-coder grading deposited only at row level; and there are no figure legends and no availability
statements at all.

**Recommendation: major revision.** Every defect is fixable without new evidence, and the argument
does not depend on the figures that are wrong. Against publication: a paper whose result *is* a
grading and an arithmetic chain cannot proceed with a demonstrably wrong residual and an
unrecomputable headline. For publication: the underlying contribution is novel, the evidence base is
primary, and the self-criticism is genuine.

---

## Hourglass analysis

```
ideal:   broad ──── narrowing ──── narrow ──── narrow ──── widening ──── broad
         Abstract   Intro (+§2)     Methods     Results     Discussion    Conclusion

actual:  7/10       6/10            6/10        6/10        6/10          4/10
         ~~~~~      ~~~~~~~~~       ~~~~~       ~~~~~       ~~~~~         ~~~
```

- **Abstract 7/10** — opens at subfield rather than field breadth; the central contribution is
  phrased as a method ("Reading data items rather than indicator names…") rather than a result; the
  close names a question instead of an advance.
- **Introduction + §2, 6/10** — the funnel itself is well built, each paragraph landing on its
  unknown. It is deformed by placement: the three-findings preview is followed by 1,070 further words
  of problem-building, and §2 carries both original computation and a methods-grade structural
  decision before Methods is reached.
- **Methods 6/10** — high specificity and unusually candid disclosure, with the best-executed
  absence-scoping convention in the paper. Marked down for the propagating residual error, an
  unspecified corpus-assembly rule, and two headline quantities with no generating method.
- **Results 6/10** — genuinely sequential, each subsection opening on its finding, negatives and
  self-adverse results reported rather than buried. Marked down because the two most-quoted numbers
  are the least auditable part of the section.
- **Discussion 6/10** — strong negative scope-setting and an honest register objection, weakened by
  one over-recovering sentence and by defusing its only compiled counter-instance definitionally.
- **Conclusion 4/10** — the closing claim is well calibrated and appropriately hedged, but roughly
  half the section restates the abstract in near-matching syntax. The widest point of the hourglass
  is doing the least new work.

The profile is a competent hourglass with a **collapsed base**: the paper narrows well and widens
poorly. The widening that does occur (abstract sentence 11, "now a general question") is *broader*
than the Discussion's own explicit disclaimer that "the evidence assembled here would not support
the wider one" — the one place where the chain inverts.

---

## Consolidated issues

Severity is the orchestrator's at synthesis. Where a section reviewer's grading was changed, the
change and its reason are stated. Line numbers are assembled-manuscript lines; source references
follow as `file:line`. Offsets: intro −25, problem −103, methods −213, results −338, discussion −674,
conclusion −846, S1 −891.

### Critical

**C1 — The deposited weight workbook prints a false residual, and 4.11% denotes two different
quantities on two different bases.**
`output/manuscript-v2.md:995, 313, 511, 565, 1155` → `drafts/supp-S2-weight-workbook.md:37`,
`drafts/section-03-methods.md:100`, `drafts/section-04-results.md:173, 227`,
`drafts/supp-S4-social-and-routes.md:31`
*Merged: methods C1, results M3, orchestrator arithmetic audit.*
S2 prints `| Technology sub-pillar | residual | 100 - 96.0 = 4.11 of economy | 32.6 x 4.11% | 1.34 |`.
The printed economy sub-pillars sum to 96.0 (15.2+23.6+19.3+22.1+15.8), so the residual is **4.0**,
not 4.11, and the composite share is **≈1.30%**, not 1.34%. S4.2 then concedes at L1155 that "the six
sub-pillars close the pillar to 100.11%" — which contradicts calling 4.11 a residual, since a true
residual closes to exactly 100. The value 4.11 is that of an unrelated quantity two rows earlier
(aquaculture within sub-pillar A, 4.96 × 83.0%), which is the likely origin. Independently confirmed
by the orchestrator: an audit of all 25 workbook rows found **this row alone** in error; 7.64%, 2.33%,
3.58%, 4.06%, 1.25%, 26.15%, 5.15%, 12.79%, 13.70% and the 1.07 ratio all recompute exactly.
Compounding it, §3.5 states 4.11% without naming its base (a share of the *economy pillar*) while
§4.3 L511 uses 4.11% as a share of the *composite* — two quantities, one numeral, no disambiguation.
**Both regimes.**

**C2 — 12.79% has no in-text derivation, no generating method, and wholly contains the 7.64%
presented beside it.**
`output/manuscript-v2.md:490, 1001, 17, 96, 854` → `drafts/section-04-results.md:152`,
`drafts/supp-S2-weight-workbook.md:43`
*Merged: results C1, methods M1, methods m4, orchestrator cross-section check 3.*
The paper's second headline is asserted at L490 and decomposed nowhere in the main text. S2 L1001
shows 12.79 = 4.06 + 5.15 + 2.33 + 1.25 (+ two unlabelled 0.00 addends) — that is the whole of §4.2's
Tier A 7.64% plus governance 5.15%. Three consequences, none disclosed: (i) roughly 60% of the figure
is rows the paper has itself disqualified as supply routes; (ii) the 5.15% governance component is not
established until L554, 64 lines *after* the headline that depends on it; (iii) the abstract,
introduction and conclusion all present 7.64% and 12.79% as though independent quantities, when one
wholly contains the other. Methods defines no extension-route taxonomy and no rule assigning maturity
tags to routes, so the figure has no generating method either. **Both regimes.**

**C3 — Repeated deposit claims with no availability statement of any kind.**
`output/manuscript-v2.md:251–252, 297, 327` → `drafts/section-03-methods.md:38, 84, 114`
*From: methods C2. Verified by the orchestrator with two differently-worded pattern passes.*
§3.3 states the 199-chunk corpus "is released with this article"; S1 and S2 are "deposited". There is
no Data Availability statement, no Code Availability statement, no repository, no accession, no DOI,
no licence and no version anywhere in the manuscript. No software, script or spreadsheet is named. A
deposit claim without a deposit fails Marine Policy's mandatory DAS and Nature item 6, and every
locator-based claim in the paper rests on materials a reader cannot obtain.

**C4 — The central result is a single-coder grading, deposited only at row level, and the reliability
threat is absent from Limitations.**
`output/manuscript-v2.md:295–296, 292, 840–841, 892–956` → `drafts/section-03-methods.md:82–83, 79`,
`drafts/section-05-discussion.md:166–167`, `drafts/supp-S1-scoring-sheet.md`
*Merged: methods C3, discussion M2.*
§3.4 concedes grading was "not blind, with no second coder and no adjudication protocol". §3.4 L292
states the 62 constituent data items, not the 44 rows, are the tested population — yet S1 records one
grade per row (44 rows; orchestrator confirmed 46 table lines = 44 + header + rule), so the item-level
decisions that determine each row's grade are nowhere visible. Worse, S1's "ground" column is
identical boilerplate across rows 33–44 — twelve consecutive rows carrying the same sentence, "A
social indicator whose computation requires, or does not require, a fisheries-sector survey domain"
(orchestrator verified verbatim). §5.5 concedes the mapping is "an assessment against stated criteria
rather than an independently verifiable quantity", but deposit secures *auditability*, not
*reliability*: the same team's prior mapping moved 61% → 39% → 2.8%, and neither single-coder scoring
nor that instability is named anywhere as a threat to the present scores. **Both regimes.**
*Remedy short of re-running the study:* deposit S1 at item level (62 rows), have an
author-independent coder re-grade a stratified subsample (all 5 Tier A rows plus a random 15 of the
39), and report raw disagreements and κ.

**C5 — No figure legends exist anywhere; four load-bearing figure claims are uncheckable.**
`output/manuscript-v2.md:136, 396, 459, 495, 630` → `drafts/section-02-problem.md:33`,
`drafts/section-04-results.md:58, 121, 157, 292`
*From: results C2. Verified by the orchestrator with two differently-worded pattern passes, plus a
direct inspection of the five figure files.*
All five figures are cited, in correct numerical order — that part passes. But no legend, caption,
axis description, unit, source line, panel description, image embed or even filename reference exists
for any figure anywhere in the manuscript. Each first mention names the subject in a single clause
and states no construction. The orchestrator confirmed the five HTML files exist in `figures/` and do
carry the relevant content — Figure 4 carries the 12.79%/13.70% comparison and a value-and-locator
table, Figure 3 the weight cascade — but a reader of the manuscript has no path to them. This is
acute at Figure 4, the sole display item for the C2 comparison. **Both regimes; fatal under Nature's
formatting guide.**

**C6 — The graver of the two conceded limitations is absent from the abstract and the conclusion, and
§5.5's escape sentence over-recovers.**
`output/manuscript-v2.md:830–831, 15–18, 849–855` → `drafts/section-05-discussion.md:156–157`,
`drafts/section-00-abstract.md:13–16`, `drafts/section-06-conclusion.md:3–9`
*Merged: discussion C1, orchestrator cross-section checks 5 and 6.*
§5.5 sets out, at length and creditably, that under PCA weighting nominal shares need not track
effective importance (Nardo 2008 §6.1; Paruolo 2013), that the IBEI is precisely the configuration in
which that divergence was found, and that the Becker (2017) test settling it cannot be run because the
provincial variable matrix is unpublished. It then escapes in one sentence: "What survives the
objection is the production-process case, which never rested on the shares." That names what survives
and never names what does not. What does not survive is the interpretation of 7.64%, 2.33%, 12.79% and
13.70% as measures of consequence — i.e. the paper's own second headline finding.
The orchestrator's limitation-consistency check makes this worse: the abstract's only hedge (sentence
9, "contingent on an undocumented ambiguity in how the published weights are expressed") addresses the
*denominator* ambiguity, the lesser caveat. The nominal-versus-effective objection is conceded
**nowhere** in the abstract or the conclusion, both of which restate the shares. **Both regimes.**

**C7 — The only compiled Indonesian instance is disqualified by definitional fiat at the point where
it disconfirms.**
`output/manuscript-v2.md:721–722, 729–730` → `drafts/section-05-discussion.md:47–48, 55–56`
*From: discussion C2.*
§5.2 meets the divergence between the MMAF and BPS extent series by reclassifying it — "The two series
are parallel releases of the same underlying mapping layer… Publishing account-shaped tables is not
the same as running an account." The single compiled instance in existence is thereby removed from the
evidence base exactly where it tests the provenance claim, leaving that claim untestable on the record
the paper has. L729–730 concedes this ("an argument from the account form rather than a demonstration,
since no Indonesian compilation has yet been revised under such a rule"), yet the subsection's framing
presents the claim as having survived. **Both regimes.**

### Major

**M1 — Corpus-assembly rule unspecified; reconstruction flag undefined.**
`output/manuscript-v2.md:253, 258–259` → `drafts/section-03-methods.md:40, 45–46`
*From: methods C4. **Demoted** from Critical: every chunk carries a printed folio and PDF page, so any
individual claim remains independently verifiable even though the corpus cannot be rebuilt.*
"Extraction was purposive" with no inclusion criterion, chunk-boundary rule or stopping criterion; 17
records carry a "reconstruction flag" whose meaning, confidence scale and downstream effect are never
defined.

**M2 — The declared sensitivity test does not bound the ambiguity it is offered against, and §3.5
calls that ambiguity singular when it is not.**
`output/manuscript-v2.md:306, 318–320, 326, 1141–1142` → `drafts/section-03-methods.md:93, 105–107, 113`
*Merged: methods M3, methods M4.*
Renormalising printed weights to sum to 100 tests *closure*, not whether the percentages are raw PC1
loadings or normalised contributions — a transformation nonlinear in the loadings. The test is
uninformative by construction wherever weights already sum to 100.0, i.e. at two of three levels. And
S4.1 supplies a second, independent source of movement in a headline figure (13.7% vs 14.0% on the
indicator-38 wording) that §3.5's "one ambiguity" does not carry.

**M3 — 13.70% is not recomputable from the deposit.**
`output/manuscript-v2.md:996–999` → `drafts/supp-S2-weight-workbook.md:38–41`
*From: methods M2.* All four social components give arithmetic as "30.5 × weight" with the "Printed
input" cell **blank**, unlike every other workbook row. The deposit therefore discharges the
reproducibility burden §3.1 claims for it for 7.64%/2.33%/3.58% but not for the paper's largest share.

**M4 — Caveat inheritance is carried unevenly across derived figures.**
`output/manuscript-v2.md:451, 459, 465, 490, 491, 495–496, 498, 511, 556, 565–567, 602–604`
→ `drafts/section-04-results.md` various
*Merged: results M1, results M2.*
§3.6 scopes `[CONTESTED DENOMINATOR]` to "the Tier A share of 7.64% **and figures derived from it**",
but L459 is the only such flag in the whole of Section 4 — 2.33%, 4.06%, 12.79%, 13.70%, 5.15% and
26.1% all inherit it and none carries it at its point of claim. Separately, structure-dependence under
the four-versus-three pillar conflict is flagged at governance and technology (L565–567) but not at
26.1%, 4.11%, 0.31%, 6.29% or 7.20%, all of which are computed on the three-pillar economy weight and
move under the Tabel 1 reading.

**M5 — The 1.07 ratio cannot bear the comparability argument built on it.**
`output/manuscript-v2.md:492, 1003, 963–966` → `drafts/section-04-results.md:154`
*From: results C3. **Demoted** from Critical: the paper disowns the ratio in the same sentence that
states it ("and it is not the finding"), and the definitional claim beside it stands independently.*
A 0.91-percentage-point gap between two figures the workbook itself calls "indicative rather than
exact", carried to two decimals from one-decimal inputs of unknown loading-versus-contribution status,
is asserted as "roughly 1.1 times" in the abstract, introduction and conclusion. State the two shares,
state that they differ by under a percentage point and that the precision does not support comparison
at that resolution, and let the definitional finding carry the paragraph.

**M6 — Front and back matter absent in full.**
*Orchestrator, verified with two pattern passes.* No keywords, no Highlights (Marine Policy requires
3–5, ≤85 characters each), no funding statement, no declaration of competing interests, no CRediT
author-contribution statement, no acknowledgements. **Submission-blocking at Marine Policy.**

**M7 — The reference list is not in the manuscript.**
`assemble.sh:20–27` — the `MAIN` array omits `drafts/references.md`, so the assembled manuscript
contains no reference section at all. The file itself is in good order (≈25 published works plus legal
instruments and statistical metadata, 11 entries properly tagged `[secondary]`), and all 15 distinct
author–date works cited in the main text resolve within it. This is a build defect, not a scholarship
defect, but the manuscript as assembled cannot be submitted.

**M8 — The self-correction has no citable reference entry and is undisclosed in the abstract.**
`output/manuscript-v2.md:92–95, 15` → `drafts/section-01-introduction.md:67–70`
*Merged: introduction M4, abstract M4, orchestrator lookup.*
The Introduction corrects "a provisional mapping by the present authors" whose figures moved
61% → 39% → 2.8%. The orchestrator confirmed this work has **no entry in `references.md`** — Gacutan
et al. 2022 is a different paper — so a reader cannot locate what is being corrected. The abstract's
"corrects prior assessments" (sentence 5) does not disclose that the corrected work is the authors'
own.

**M9 — The Discussion does not restate the advance in the Introduction's terms; gap closure is
partial.**
`output/manuscript-v2.md:679–681 vs 49–51` → `drafts/section-05-discussion.md:5–7`,
`drafts/section-01-introduction.md:24–26`
*Merged: discussion M1, orchestrator cross-section check 2.*
The gap asks a capacity question — "whether an account compiled to those specifications can carry the
reporting load of a statutory index… a question about production capacity". §5.1 answers a
character-of-contribution question — "What an account offers this index at the rows it touches is a
production process, not a stock of substitutable values." Neither "reporting load" nor "production
capacity" is answered in the Introduction's own terms anywhere in §5, and **none** of the four
quantities constituting the load answer is restated in the Discussion at all.

**M10 — Upper-cone placement: original computation and a methods-grade decision sit inside the
background section, and the findings preview lands too early.**
`output/manuscript-v2.md:90–101, 172–186, 205–211` → `drafts/section-01-introduction.md:65–76`,
`drafts/section-02-problem.md:69–83, 102–108`
*Merged: introduction C1, C2, M2, M3, M1. **Demoted** from Critical: these concern placement, not
validity, and Marine Policy explicitly tolerates a longer two-part upper cone.*
Four limbs. (i) Table 1's targets-above-national row is the authors' own count of printed rows —
original computation inside a section framed as problem-establishment. (ii) The three-findings preview
closes Section 1, then 1,070 further words of gap-building follow before Methods. (iii) §2.3 fixes the
three-pillar locus — a decision determining what §§4.2–4.3 can claim — before Methods is reached.
(iv) The stated contribution is a list of four; the findings preview delivers three, leaving two
contributions un-previewed. A fifth, minor limb: §2's opening re-states Perpres 12/2025 and the joint
circular already given at L62–65.

**M11 — Recommendations and evaluative claims leak into Results.**
`output/manuscript-v2.md:655, 382, 511–512, 516–517, 575–576` → `drafts/section-04-results.md:317, 44, 173–174, 178–179, 237–238`
*From: results M4.* A bolded design recommendation ("**Insertion should be phased behind coverage:
compile first, insert second.**") sits in Results and duplicates §5. L516–517's "a province raises its
score by producing more" is a mechanism claim requiring a normalisation polarity the paper does not
evidence. **Nature: containment breach. Marine Policy: L516–517 still needs evidence and L655 still
duplicates §5.**

**M12 — A conceded objection is not permitted to alter the recommendation, and an absence is converted
into support.**
`output/manuscript-v2.md:807–817` → `drafts/section-05-discussion.md:133–143`
*From: discussion M3.* Wuwung et al. (2024) locate the constraint institutionally, which would make an
inter-agency supply arrangement the *hardest* rather than the cheapest condition precedent — and
L802–803 corroborates it (the Kepmen KP 44/2023 team's term expired with no renewal instrument
located) — yet the loose-coupling recommendation is unchanged. "No source located by this study argues
that accounts cannot serve as statistical infrastructure for a composite index" (L816–817) converts an
absence into support without restating the search bound.

**M13 — The "secondary compilation is adequate" position is never tested.**
`output/manuscript-v2.md:787, 816–817`
*From: discussion M4.* The paper's central premise is that provenance is what the index lacks and
accounts supply. The class of work arguing that secondary compilation plus uncertainty analysis is
sufficient for a policy composite — so that account-grade provenance is not a precondition — is not
engaged. Exemplars in that class, **verify before use, none is cited in the manuscript and none was
checked by this review**: Saisana, Saltelli & Tarantola (2005) on sensitivity analysis as the accepted
remedy for composite fragility; Freudenberg (2003, OECD) on composites built wholly from secondary
statistics; and the SEEA-EA cost-critique literature on whether ecosystem accounts repay compilation
cost at policy scale.

**M14 — The falsification condition rests on a quantity the paper declines to estimate.**
`output/manuscript-v2.md:857–861, 877–880` → `drafts/section-06-conclusion.md:11–15, 31–34`
*From: conclusion M1.* Both arms are undefined — "no better than" by what metric, "cannot bear"
against what budget — and the cost arm is unfalsifiable in practice because L860–861 states "This
study declines to estimate a cost" while L857 names cost as "the binding constraint". Declining to
bound the binding constraint is a defensible stance against false precision, but the falsification
condition cannot then do the work the section claims for it.

**M15 — The Conclusion substantially restates the abstract rather than synthesising.**
`output/manuscript-v2.md:849–855` → `drafts/section-06-conclusion.md:3–9`
*From: conclusion C1. **Demoted** from Critical: a structural and stylistic defect, not a threat to
validity.* The section's first sentences reproduce abstract sentences 7–8 in near-identical clause
order and wording, and duplicate the Introduction's findings statement. Two of four paragraphs are
recap, which sets the register for the whole conclusion.

**M16 — The abstract's central contribution is phrased as a method, and its close is broader than the
Discussion permits.**
`output/manuscript-v2.md:11, 23–24` → `drafts/section-00-abstract.md:9, 21–22`
*Merged: abstract M1, abstract M3, orchestrator cross-section check 5.*
Sentence 5, "Reading data items rather than indicator names corrects prior assessments", states a
method action, not a result, and gives no indication of what the correction found. Sentence 11, "What
an accounting system can carry for a statutory composite is now a general question", names a question
rather than an advance — and generalises further than §5.1's own disclaimer that "the evidence
assembled here would not support the wider one". This is the single point where the proportionality
chain inverts: abstract significance exceeds Discussion significance.

**M17 — The one-pilot evidential base is stretched in the closing claim.**
`output/manuscript-v2.md:882–884, 867–869` → `drafts/section-06-conclusion.md:36–38, 21–23`
*From: conclusion M3.* "one instance of the production process the obligation would require at scale"
generalises from a single 2,980.84 ha pilot — whose limits the conclusion itself names two paragraphs
earlier (station-surveyed rather than mapped-per-cell cover; an undocumented mangrove unit conversion)
— to a 38-province annual obligation. The hedge is real and partially controls this, but the phrase
assumes the pilot's method is representative of national-scale compilation, which those limitations do
not establish.

### Minor

- **m1** — 13.70% (abstract, intro, conclusion) is rendered 13.7% at L537/540/541/587/612. Same value
  (S2 L1000 confirms 4.59+0.97+1.91+6.23 = 13.70); cosmetic, but two-decimal precision is unwarranted
  on a quantity with a documented ±0.33 pp branch. *(results m1)*
- **m2** — 2,980.84 ha carried at 0.01-ha precision in the same paragraph showing it fails to reconcile
  by 32.35 ha; "an area smaller than many single districts" (L360–361) gives no district area and no
  source. *(results m2)*
- **m3** — 27 `[EVIDENCE GAP]`, 17 `[ASSUMPTION]` and 4 `[CONTESTED DENOMINATOR]` inline bracketed
  flags in finished main-text prose (13 evidence gaps in Results alone). These are deliberate authorial
  apparatus, not scaffolding, and the discipline behind them is a strength — but most journals,
  Marine Policy included, will ask for them as footnotes or a caveat table before typesetting.
  *(discussion m4, methods m1)*
- **m4** — `[CONTESTED DENOMINATOR]` is defined twice and differently: L318 marks the
  loadings-versus-contributions ambiguity, L334 marks "what these account types bear on rather than
  what an account would supply". One flag, one meaning. *(methods m1)*
- **m5** — Abstract is 282 words: within Nature's 300 ceiling given a broader-perspective close,
  ~13% over Marine Policy's conventional 250. *(abstract m2)*
- **m6** — Abstract opens at subfield breadth; *register*, *constituent data items*, *reference
  condition*, *compilation maturity* and *published weight* are unglossed. Major under Nature's "any
  scientist" standard; minor for Marine Policy's specialist readership. *(abstract M2, demoted with
  regime noted)*
- **m7** — Six subheadings exceed 40 characters (L172, 392, 487, 677, 709, 785). **Nature only**;
  Marine Policy imposes no limit. *(orchestrator)*
- **m8** — Supplementary S1 cites "Section 7" and "Section 8.5" (L904, L906 →
  `drafts/supp-S1-scoring-sheet.md:13, 15`). v2 has six sections; `PLAN-v2.md` §2 declares v1
  numbering dead. These are stale cross-references to the superseded scheme — the only two in the
  manuscript; the other sixteen all resolve. *(orchestrator)*
- **m9** — The English gloss's provenance (human, machine, model-assisted) is unstated, and no
  software, script or spreadsheet is named anywhere. *(methods m2)*
- **m10** — 6.26 ha (L728) makes its first main-text appearance in the Discussion; its derivation is in
  S5.2 (L1225) but nowhere in §4. *(discussion m1, partially confirmed — see reviewer artefacts)*
- **m11** — L569 "Indicator 27 belongs here as well as in Table 2" returns to a topic settled at
  L449–467. Zig-zag under Nature; ordinary cross-referencing under Marine Policy. *(results m3)*
- **m12** — L558 "at tables 18–19 (p. 79)" omits the `[pdf N]` locator used at every other citation.
  *(results m4)*
- **m13** — L797's loose-coupling property is asserted of an arrangement never instantiated, and is not
  `[ASSUMPTION]`-flagged unlike the section's otherwise scrupulous practice. *(discussion m2)*
- **m14** — The objection vitiating the headline quantities (L821–831) sits *after* the policy
  recommendation (L787–803), so the practitioner reader meets the recommendation before the caveat on
  its evidential base. Nature regime; tolerable under Marine Policy. *(discussion m3)*
- **m15** — The second follow-on study is close to a generic call for guidance; the cost trade-off is
  justified but not owned as a limitation. *(conclusion m1, m2)*
- **m16** — The novelty claim would be strengthened by naming the adjacent class of national
  statistical quality-assurance-framework production audits (**verify before use** — not cited in the
  manuscript, not checked by this review). The gap claim survives against the manuscript's own
  reference list. *(introduction m2)*
- **m17** — The three quantitative findings in the abstract are presented as a list with no signal of
  which is central; the sentence-9 caveat sits between the results and the significance claim,
  slightly disrupting the widening close. *(abstract m1, m3)*

---

### Not defects — reviewer artefacts

Three findings were retracted or corrected at synthesis. Two arose from errors in the orchestrator's
own fact sheet.

1. **Introduction m1 — claimed line offset in the gap statement.** The reviewer was right and the
   fact sheet was wrong: the gap statement is at **L49–51**, not L46–48 as the fact sheet recorded.
   A fact-sheet error, not a manuscript defect. Corrected in this report.
2. **Discussion m1, first limb — "16.99% and 18.36% may be new results in the Discussion."** Retracted.
   The orchestrator verified both appear in §4.1 at L415 and L418, so the Discussion's use at L715 is a
   legitimate back-reference. The second limb (6.26 ha) was confirmed and is retained as m10.
3. **Results M3's observation that the fact sheet mis-assigned L511.** Correct, and the orchestrator's
   error: the fact sheet listed L511 under "4.11% (technology sub-pillar)" when L511 is the aquaculture
   share. The reviewer's point that the numeral collision "bites" is thereby strengthened, not
   weakened — the collision misled the review apparatus itself. The underlying finding stands as C1.

One further artefact was **pre-empted** and correctly not reported: the manuscript's use of English
"Table N" for its own display items alongside Indonesian "Tabel N" for tables inside the cited Juknis
reads as a figure-citation-order violation on first inspection and is not one. The fact sheet warned
all six reviewers; none reported it.

---

## Prioritised revision plan

**Step 1 — Fix the arithmetic before anything else.** Recompute the technology sub-pillar as
100 − 96.0 = 4.0% of the economy pillar (≈1.30% of the composite); correct S2 L995 and S4.2's closure
statement; tag it "reconstructed as a residual, medium confidence" at all three uses; and spell the
base with the aquaculture figure everywhere so two quantities stop sharing "4.11%". *(C1)*

**Step 2 — Make the second headline auditable, or retire it.** Decompose 12.79% in the sentence that
first states it, naming the 7.64% Tier A and 5.15% governance components and stating plainly that the
total re-uses rows §4.2 disqualified as supply routes; move the governance paragraph (L554–557) ahead
of L489; add a Methods subsection defining routes (a)–(f) and the maturity-assignment rule; and label
S2's two zero addends. Then demote the 1.07 ratio out of headline position in the abstract,
introduction and conclusion. *(C2, M5)*

**Step 3 — Close the reproducibility gap.** Add Data and Code Availability statements naming
repository, DOI, licence and version for the corpus, join table, S1 and S2. Deposit S1 at item level
(62 rows) and replace the boilerplate ground on rows 33–44. Commission an independent re-grade of all
5 Tier A rows plus a random 15 of the 39, reporting disagreements and κ. Fill S2's blank "Printed
input" cells so 13.70% is recomputable. State the corpus inclusion, boundary and stopping criteria and
define the reconstruction flag. *(C3, C4, M1, M3)*

**Step 4 — Write five figure legends and embed the figures.** Each legend states the conclusion in its
title, the construction, the source folios and the arithmetic basis. Figure 4 matters most: it is the
sole display item for the C2 comparison. *(C5)*

**Step 5 — Repair the caveat chain across sections.** Add one sentence at the head of §4.2 stating
that every share in §§4.2–4.4 inherits `[CONTESTED DENOMINATOR]`; extend the structure-dependence
caveat to 26.1%, 4.11%, 0.31%, 6.29% and 7.20%; give the flag one definition; and — most
importantly — carry the nominal-versus-effective concession into the abstract and the conclusion, and
rewrite §5.5's escape sentence to name what does *not* survive as well as what does. *(C6, M4, m4)*

**Step 6 — Let the counter-instance and the conceded objection bite.** Retain the MMAF/BPS divergence
as an unresolved disconfirming instance rather than reclassifying it, and state that the provenance
property is asserted from account form and untested. Rank the conditions precedent by institutional
difficulty per Wuwung, and bound the "no source located" sentence with the search protocol's limits.
*(C7, M12)*

**Step 7 — Structural moves.** Move Table 1's computed row and L655's recommendation into Results/§5
respectively; move the §2.3 pillar decision into Methods with a forward pointer in §1; relocate the
three-findings preview to sit immediately before Methods; open §5.1 by restating the load answer in
the Introduction's terms; and rewrite the Conclusion's opening as synthesis rather than recap.
*(M9, M10, M11, M15)*

**Step 8 — Engage the missing counter-position and fix the self-citation.** Add a paragraph testing
the "secondary compilation plus uncertainty analysis is adequate" position, and make the authors'
superseded mapping a citable reference-list entry disclosed in the abstract. *(M8, M13)*

**Step 9 — Submission mechanics.** Add `drafts/references.md` to `assemble.sh`'s `MAIN` array. Add
keywords, 3–5 Highlights, funding, competing interests and CRediT. Rewrite abstract sentences 5 and 11
as a result and an advance. Convert inline flags to footnotes or a caveat table. Fix the two stale
"Section 7"/"Section 8.5" references in S1. *(M6, M7, M16, m3, m8)*

**Step 10 — Polish.** Precision harmonisation (13.7/13.70, 2,980.84 ha), the missing `[pdf N]` locator,
subheading lengths if Nature is ever the target, and the remaining minors.

---

## Pre-submission compliance table

Dual status: **MP** = Marine Policy (target venue), **Nat** = Nature (benchmark). Counts computed
mechanically once and not recounted.

| Item | Requirement | Manuscript | Status |
|---|---|---|---|
| Abstract | MP: unstructured, ~250 w, no citations. Nat: ≤200 w (≤300 with broader-perspective close); "Here we show"; no citations | 282 words, 11 sentences, **zero citations** | MP **fail** (13% over) · Nat **pass** (close present; no "Here we show", but see M16) |
| Main text | MP: 9,000–10,000 excl. abstract, tables, refs. Nat: ~2,500 or ~4,300 | **9,701** prose words, ss. 1–6 (11,314 incl. own tables and headings) | MP **pass** · Nat **fail** (2.3–3.9×) |
| Display items | MP: no fixed limit; cited in order. Nat: 4 (6-page) or 5–6 (8-page); legends <300 w defining error bars/statistics | 5 figures + 4 tables = **9**; all cited in strict numerical order | order **pass** both · count MP **pass**, Nat **fail** |
| Figure legends | Both: required | **None anywhere** (verified ×2) | **fail** both — see C5 |
| Table legends | Both: required, <300 w | 4 present: 42, 65, 75, 50 words | **pass** both |
| References | MP: Harvard author–date. Nat: ≤~50, numbered sequentially | ≈25 published works + legal instruments + metadata, Harvard, 11 tagged `[secondary]`; all 15 main-text author–date works resolve — **but the list is not assembled into the manuscript** | content **pass** · assembly **fail** both — see M7 |
| Subheadings | Nat: ≤40 characters. MP: no limit | 6 of 18 exceed 40 | MP **pass** · Nat **fail** |
| Title | Both: ≤75 characters; no numbers/acronyms/abbreviations/punctuation | 69 characters, none present | **pass** both |
| Methods position & length | MP: IMRaD position, no ceiling. Nat: after main text, ≤~3,000 w, bold subheadings, statistics subsection | §3, IMRaD position, 1,441 words, numbered subheadings, §3.5 is the arithmetic equivalent of a statistics subsection | MP **pass** · Nat **fail** on position only |
| Data Availability | MP: mandatory. Nat: mandatory, repository + accession | **Absent**, despite "is released with this article" and "deposited" ×3 | **fail** both — see C3 |
| Code Availability | Nat: mandatory. MP: expected where code exists | **Absent**; no software named | **fail** both |
| Highlights | MP: 3–5, ≤85 chars. Nat: n/a | **Absent** | MP **fail** · Nat n/a |
| Keywords | MP: required. Nat: n/a | **Absent** | MP **fail** · Nat n/a |
| Funding statement | Both required | **Absent** | **fail** both |
| Competing interests | Both required | **Absent** | **fail** both |
| CRediT contributions | MP required. Nat: contributions statement | **Absent** | **fail** both |
| Acknowledgements | Both: as applicable | **Absent** | n/a to **fail** |
| Reporting summary statistics | exact n; test + sidedness; corrections; randomisation; blinding; exact P; effect sizes | exact n **pass** (44 rows, 62 items, 199 chunks, 5 Tier A, 39 none); all others **n/a** — documentary census of a closed register, no sample, no inference (§3.1 L220–221) | **pass** on the applicable item |
| Exclusions / inclusion criteria | Both: required | "Extraction was purposive", no criterion stated | **fail** both — see M1 |
| Ethics | As applicable | n/a — no human or animal subjects, no cell lines; no-agency-engagement constraint stated in Methods and Limitations | **n/a** |
| Sensitivity / uncertainty | Expected where derived figures carry ambiguity | Renormalisation test present but does not bound the declared ambiguity | **partial** both — see M2 |

---

## Section reports

Issues already merged into Consolidated issues are cross-referenced by number, not restated.

**Abstract** — verdict: minor revision. Scope-alignment 7/10. Sentence-role map: S1 basic
introduction; S2 aim (no standalone gap sentence — the general-problem role is folded in); S3–S4
detailed background/methods; S5 intended "Here we show" equivalent; S6–S8 results versus prior
knowledge; S9 caveat; S10 general context; S11 broader-perspective close. No Critical issues; no
citations present, gap precedes results, no unsupported quantity. Issues → **M16** (S5 phrased as
method; S11 gestures rather than states), **M8** (self-correction undisclosed), **m5**, **m6**,
**m17**. Claim list of 13 supplied and used in the traceability check below.

**Introduction (§§1–2, assessed as one funnel)** — verdict: major revision. Scope-alignment 6/10.
Funnel map: ¶1 field, ¶2 field→subfield, ¶3 subfield with gap, ¶4 subfield→specific with second gap,
¶5 institutional specifics, ¶6 approach and four contributions, ¶7 boundaries, ¶8 three findings; then
§2.0 repeats ¶5's regulatory facts, §2.1–2.2 genuine gap-building plus original computation, §2.3 a
methodological decision. Issues → **M10** (all five placement limbs), **M8**, **m16**, **m18**
(signpost close, folded into M10). Retraction → artefact 1.

**Methods** — verdict: major revision. Scope-alignment 6/10. Claim–method traceability table returned
15 rows: 5 covered, 4 partial, 4 missing (Table 1's construction rule, the route taxonomy, the
conditions-precedent selection rule, figure construction), 1 failed (the residual), 1 nil ("method
described but unused: none found"). Statistics compliance: exact n pass; test/sidedness, corrections,
randomisation, blinding, replication, sample size, ethics all n/a with reasons; exclusions fail;
software fail; availability fail. Issues → **C1**, **C3**, **C4**, **M1**, **M2**, **M3**, **m4**,
**m9**. Assessed as adequate and not raised as defects: the §3.2 four-property construct (each
anchored to a specific SEEA-EA provision and independently checkable; synthesis disclosed at
L230–231) and the §3.3 absence-scoping convention, which the reviewer called "the best-executed part
of the section" — with one asymmetry noted, that the bounded search cannot support the load-bearing
negative at L276–279 precisely because the excluded BPS catalogue and Satu Data portal are where such
a register would sit. That asymmetry deserves a sentence in §5.

**Results** — verdict: major revision. Scope-alignment 6/10. A 15-step logic-chain map found 11 steps
sound, 1 sound-but-overprecise, 1 broken (step 9, the 12.79% forward dependency), 2 unsupported
inference or misplaced recommendation. A 75-row claim-to-display-item map was returned and used in the
traceability check below; it records 24 claims resting on no display item, most of them legitimately
prose-borne negatives. Issues → **C2**, **C5**, **M4**, **M5**, **M11**, **m1**, **m2**, **m11**,
**m12**. Unverifiable, resolved by the orchestrator → see Review provenance. Credited: each subsection
opens with a declarative finding; the self-adverse results (BPS/MMAF divergence, the 16.99%/18.36%
source conflict, the authors' own superseded figures) are reported rather than buried; single-site
scope is stated at the section's first sentence and again at L360.

**Discussion** — verdict: major revision. Scope-alignment 6/10. A 12-paragraph function map found 8
proportional, 1 proportional-but-a-priori, 1 under-conceded, 1 partly rhetorical, 1 over-recovering.
Gap-closure assessed **partial**. Issues → **C6**, **C7**, **M9**, **M12**, **M13**, **m3**, **m10**,
**m13**, **m14**. Credited as the strongest passage: §5.2 ¶3's register objection, which concedes two
of the four properties outright, and §5.3's four negative sub-claims — "The residual is thin, and
saying so is more useful than defending a wider claim" (L741–742) is exactly the calibration the venue
should reward. The reviewer's list of ten limitations conceded, and four not conceded (single-coder
scoring; the 61%→39%→2.8% instability; the one-pilot base; the pillar conflict), fed C4 and C6.

**Conclusion** — verdict: major revision. Scope-alignment 4/10, the lowest in the paper, on
restatement rather than on the quality of the closing claim. Issues → **M15**, **M14**, **M17**,
**m15**, plus the four-take-home diffusion folded into M15. Credited: the closing sentence's
proportionality is well judged and closer to understatement than inflation, and the falsification
condition — however loose its terms — is unusual discipline for a documentary paper. No entity
invoked in the conclusion lacks an evidential bridge.

---

## Review provenance

**Working-copy preparation.** The manuscript was reviewed from `output/manuscript-v2.md`, assembled by
`assemble.sh` from 12 draft files and verified newer than all of them. Comment-delimiter balance was
checked per file: all 13 files carry zero `<!--` and zero `-->`, so no stripping was required and the
mis-pairing failure mode the skill warns of could not arise. The assembled text was grepped for
scaffolding signatures (`<!--`, `-->`, `TODO`, `FIXME`, `DRAFTING NOTE`, `assert`, `journal_config`,
`XXX`, placeholders); four `assert` hits were inspected and are ordinary prose ("the monitoring chapter
asserts comparability"). `assemble.sh` independently hard-fails on scaffolding. Line numbering is
`awk NR`. The reference list is **not** part of the assembled text and was reviewed separately from
`drafts/references.md` (this is itself finding M7).

**Segmentation and source map.** Boundaries: abstract 3–25, intro 26–103, problem 104–213, methods
214–338, results 339–674, discussion 675–846, conclusion 847–884, supplementary 890–1252. Offsets to
source files: intro −25, problem −103, methods −213, results −338, discussion −674, conclusion −846,
S1 −891. Every offset was verified against file line counts.

**What reviewers received.** Each received only its own section as a line-numbered cut, plus the
cross-section fact sheet and the dual-regime, paper-type calibration. None received the manuscript
path or the full text — six full reads were thereby avoided. Section §2 went to the
introduction-reviewer alone, as the continuation of the upper cone, with an explicit instruction to
judge whether its Table 1 material is problem-establishment or smuggled results; it was not sent to
the results-reviewer, per the single-ownership rule. Supplementary S1–S5 went to the methods- and
results-reviewers only. All six reviewer definitions carry a `model:` field and are correctly tiered:
methods, results and discussion on the strongest tier, abstract, introduction and conclusion a tier
down. No drift to report.

**Fact-sheet negatives, each verified by two differently-worded pattern passes before dispatch:**
absence of figure legends (also checked for image embeds, filename references and `**Fig`); absence of
Data Availability, Code Availability, funding, competing interests, CRediT, acknowledgements, keywords
and Highlights; and figure citation order. All held.

**Fact-sheet corrections made during synthesis.** Two, both the orchestrator's:
1. The gap statement is at L49–51, not L46–48 (raised by the introduction-reviewer; artefact 1).
2. L511's "4.11%" was listed under the technology sub-pillar; it is the aquaculture share (raised by
   the results-reviewer; artefact 3). The error demonstrates the numeral collision reported as C1.

**Unverifiables resolved by the orchestrator, one lookup each:**
- *Discussion, whether 16.99%/18.36%/6.26 ha appear in §4.1.* The first two do (L415, L418) — that
  limb retracted. 6.26 ha does not (it appears at L728 and S5.2 L1225) — retained as m10.
- *Introduction, whether the authors' prior mapping is a citable entry.* It is not; `references.md`
  carries no such entry, and Gacutan et al. 2022 is a different work. Confirmed as M8.
- *Results, the panel content of Figures 2–5 and whether any display item shows the 12.79%
  decomposition.* The five files exist in `figures/`. Figure 4 ("Route comparison") carries the
  12.79%/13.70% comparison and a value-and-locator table; Figure 3 ("Where the Weight Sits") carries
  12.79, 13.70 and 7.64; Figure 2 ("Indicator Mapping Matrix") is HTML rather than SVG and carries
  7.64 and 2.33; Figure 5 carries no shares. So the decomposition partially exists **in the figure**
  and nowhere in the text — which sharpens C2 and C5 rather than retracting either.

**Orchestrator-run cross-section checks.** (1) Abstract traceability: all 13 abstract claims trace to
a stated result except sentence 11, which traces to nothing — folded into M16. Sentence 8's derivation
exists only in the supplement — C2. (2) Gap symmetry: partial — M9. (3) Numerical consistency: all 25
S2 workbook rows recomputed independently; one error found (C1); 13.70/13.7 precision variance found
(m1); the 12.79 ⊃ 7.64 containment found (C2). (4) Figure citation order: 1, 2, 3, 4, 5 at L136, 396,
459, 495, 630 — **passes**, and correctly not reported by any reviewer. Tables 1–4 likewise in order.
(5) Proportionality chain: inverts at the abstract — M16. (6) Limitation-claim consistency: the
nominal-versus-effective concession is absent from abstract and conclusion — C6. Additionally, a
cross-reference sweep found the only two stale "Section N" references in the manuscript (m8).

**Literature pointers named by reviewers that remain unverified — verify before use.** None is cited
in the manuscript and none was checked by this review: Saisana, Saltelli & Tarantola (2005);
Freudenberg (2003, OECD); the SEEA-EA cost-critique literature; national statistical
quality-assurance-framework production audits; and documentary-coding reliability practice for
single-coder desk studies.

**Not run.** Field calibration by web retrieval was skipped; the venue specification in `PLAN-v2.md`
was used instead, which fixes word budget, citation style and register directly. `/citation-checker`
against `05-rag/` has not been run and remains open per the project's own Gate 2 — this review checked
reference-list resolution, not chunk-level attribution.
