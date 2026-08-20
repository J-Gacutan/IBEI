# Referee report: Ocean accounts as compilation infrastructure for a blue economy index

Review run 2026-08-20 against `output/manuscript-v2.md` as assembled at commit f07bcb7.
Target venue **Marine Policy** (Elsevier), Harvard author-date. Nature's standard is applied as the
review bar; every Nature-only requirement is marked as such and does not count against the
manuscript. Paper type: **conceptual/documentary analysis**. Inference-shaped checklist items (exact
n, sidedness, corrections, randomisation, blinding, power, effect sizes, human and animal ethics) are
n/a and are recorded as such rather than omitted. Held at full strength: corpus assembly, the
bilingual search protocol and the scope of the absence claims it licenses, reproducibility of the
scoring rule and the weight arithmetic, and coder reliability.

## Executive summary

The paper asks whether Indonesia's ocean accounts can serve the statutory 44-indicator blue economy
index as compilation infrastructure rather than as a rival indicator source, and answers by scoring
every register row against the verbatim constituent data items that define it. Its outstanding
feature is evidential discipline under self-adverse pressure: it corrects a mapping its own authors
published, retains the BPS-versus-MMAF divergence as a disconfirming instance rather than disposing of
it, concedes that two of its four claimed account properties reduce to codification and need no
account at all, and in Section 5.5 withdraws its own four headline percentages as measures of
consequence. That last move is rare and is what makes the residual claim credible.

Two defects block submission, and both are reproducibility rather than argument. Methods states the
analysis was run in Python 3 with the scripts deposited, whilst Code availability releases one Node.js
extraction script and states no other software was used: the scoring and weight arithmetic a reader is
told is re-runnable is not deposited. And the "route" taxonomy that generates two of the four headline
percentages, 12.79% and 13.70%, is named in Section 4.3 and Table 3 but nowhere defined, enumerated or
closed in Methods, so neither figure can be recomputed or shown to be exhaustive.

**Recommendation: major revision.** For publication: the question is new, the evidence base is the
index's own documentation read at folio level, and the paper's concessions are more rigorous than most
submissions' claims. Against: as it stands a reader cannot re-run the central analysis, cannot obtain
the account-side sources, and cannot reconstruct two headline quantities. All three are fixable
without new research.

## Hourglass analysis

```
 ideal:  broad ──── narrowing ──── narrow ──── narrow ──── widening ──── broad
         Abstract   Intro          Methods     Results     Discussion    Conclusion

 actual: 7/10       7/10           7/10        8/10        8/10          8/10
         caveat     novelty-       route       four        one firm      two late
         blunts     adjacency      taxonomy    claims      opening,      entities,
         the close  uncited;       absent;     outrun      one unlabelled one now
         and the    Section 2      warrant     their       estimator     retracted
         close      no longer     asserted     folio       inference
         restates   lands
```

The waist is the strongest part of the paper and holds its shape: Results and Discussion both score 8,
and the narrowing through Sections 2 and 3 is stepwise rather than abrupt. The deviations are at the
two ends. The abstract's final sentence, though correctly labelled as the central finding, restates
the study's internal contribution instead of widening to the class of statutory composites the paper's
own framing supports, so the closing flare is thin. At the entry, the funnel is textbook
field-to-subfield-to-country-to-gap, but the novelty claim now rests on an uncited adjacency.

A structural observation about this revision specifically. Five of the eighteen Major issues below are
**regressions introduced by the 2026-08-20 pass itself** (M4, M14, M15, M16, and the pointer-granularity
minor), and four of those five trace to one cause: material demoted to the supplementary, or a hedge
converted to prose, left the main text asserting a conclusion whose warrant had moved out from under
it. The word ceiling was held, and this is what holding it cost. That is a real trade and the report
records it as one rather than as carelessness.

## Consolidated issues

### Critical

**C1. Methods names Python 3 and deposited scripts; Code availability releases neither.**
Sections: methods, availability. `drafts/section-03-methods.md:137-138` (working copy 337-338) states
the arithmetic was "carried out in Python 3 over the deposited corpus and join table, with the scripts
deposited as part of the replication materials". `drafts/back-matter.md` (working copy 994-998)
releases "One script ... (`workflow-ibei-tier1.mjs`, Node.js, no external services)" and states "No
statistical software was used". Orchestrator-verified by reading both passages: the contradiction is
real, and the scoring and weight scripts the Methods sentence promises are not in the deposit. For a
paper whose entire reproducibility burden is a scoring rule and an arithmetic chain, this is the
single most damaging defect in the manuscript.
*Fix:* either deposit the actual scoring and weight scripts and name the real toolchain, or delete the
claim that scripts exist and state that the arithmetic was performed by hand against the deposited
sheets, which Code availability already asserts is possible.

**C2. The route taxonomy carrying 12.79% and 13.70% is never defined.**
Sections: methods, results. Section 4.3 and Table 3 work throughout with "account routes", and Figure
4's legend reports "the share of the composite each ocean-account route bears on", but no Methods
subsection defines what a route is, enumerates the set, or states the rule by which the set was
closed. Orchestrator-verified: the word "route" appears in Section 3 once, at
`section-03-methods.md:110`, in an unrelated sense ("either route is reproducible"). Two of the
paper's four headline quantities therefore cannot be recomputed, and their exhaustiveness cannot be
checked.
*Fix:* add a short subsection to Section 3 defining "ocean-account route", listing every route
considered, and stating that Figure 4's grouping is exhaustive over that set.

### Major

**M1. Legends call the shares indicative; Methods and Limitations call them printed and exact.**
`drafts/back-matter.md:24` says the shares "are indicative rather than exact", `section-04-results.md:224`
repeats it, whilst `section-03-methods.md` states "Every weight used here is printed, and none is
reconstructed" and Section 5.5 calls the percentages "exact statements of what the handbook prints".
The methods-reviewer graded this Critical. Downgraded here on the orchestrator's reading that the two
formulations attach to different objects, the printed inputs being exact and the derived products
rounded, but the manuscript nowhere says so, and a referee reading the legend first will conclude the
paper hedges its own arithmetic.
*Fix:* harmonise on one formulation in both places, distinguishing printed inputs from rounded
products explicitly.

**M2. The account-side evidence base is not obtainable.** The Deposit statement records the MMAF 2022
reports and BPS workshop decks as "circulated as preliminary consultation drafts and conference
presentations ... cited but not redeposited". They carry Figure 5, every maturity tag and every
pilot-scale claim. Graded Critical by the methods-reviewer, downgraded here because these are
third-party documents the authors may have no right to redeposit.
*Fix:* state for each how it was obtained and where a reader may request it, and mark any claim
resting solely on a non-obtainable draft.

**M3. The novelty claim's adjacent literature is named and not cited.**
`section-01-introduction.md:34-37`: "The nearest adjacent class of work is the statistical
quality-assurance audit, which assesses a national production system against a general quality
framework." Nothing in that class is cited anywhere in the manuscript. This sentence was added on
2026-08-20 to answer the prior report's m16, and as written it restates the referee's point rather
than discharging it. The introduction-reviewer graded it Critical; recorded as Major because it
damages novelty framing rather than validity, and the disagreement is preserved here.
*Fix:* cite at least one named quality-assurance framework and state in one clause what it assesses
that this analysis does not, or drop the sentence and let the Rinaldi et al. (2025) distinction carry
the closest-prior-work burden alone, which it does properly.

**M4. The 16.99%/18.36% same-page conflict now appears first in the Discussion. REGRESSION.**
`section-05-discussion.md:38` reports the pilot's narrative giving 16.99% live hard coral cover
against 18.36% in its own table on the same page. Orchestrator-verified: after the 2026-08-20
demotion, 16.99% survives in Section 4 only inside Table 2's cell, and the conflict between the two
figures appears in the main text first in Section 5.2. The datum is in S5.3, but a Discussion-first
appearance of a source conflict is the defect the prior report's m10 fixed for the 6.26 ha figure.
*Fix:* restore one clause to Section 4.2 reporting the conflict, paid for by a compensating cut.

**M5. "Earlier assessments" are refuted without being named.**
`section-04-results.md:73-75`: "Earlier assessments judged that Indonesia lacks the condition account
these indicators require. They do not require one." The abstract makes this correction a headline
contribution, and the refuted position carries no citation, so a reader cannot check it is a real
prior claim rather than a strawman. Note that the authors' own superseded mapping is exactly such an
assessment and is cited elsewhere.
*Fix:* name the assessments, the present authors' own among them.

**M6. A score-direction claim asserts a sign the paper says is unrecoverable.**
`section-04-results.md:512` (working copy): "indicators 2 to 5 are unsigned production volumes, so a
province raises its score by producing more", presented as "an identity rather than an aspiration".
The sign requires the direction of the first-component loading, which Section 5.5 records as
unrecoverable from the published record.
*Fix:* recast as a statement about the register's specification only, that no term records drawdown
and the direction of any score effect cannot be established from the published weights.

**M7. The 6.26 ha counter-instance carries no folio and no provenance mark.**
`section-04-results.md:383` (working copy) gives "MMAF recording a coral loss of 12.00 ha against a
BPS loss of 18.26 ha, a 6.26 ha disagreement" with no locator at the point of claim and no statement
of whether the losses are printed or are this study's subtraction. The 2026-08-20 pass moved this
figure forward to its first mention, correctly, but moved it without its attribution.
*Fix:* append the folio for each figure and mark any subtraction as this study's arithmetic, with the
S5.2 pointer in the same sentence.

**M8. "The register would be refuted by ..." names the wrong object.**
`section-04-results.md:592` (working copy). "The register" has denoted the 44-indicator register
throughout 4.2 and 4.3; here it means the conditions-precedent finding, so the falsification test
reads as applying to the indicator register.
*Fix:* "The conditions-precedent finding would be refuted by ...".

**M9. Section 5.1 opens firmer than Section 5.5 permits.**
`section-05-discussion.md` (working copy 641): "The load is now quantified and it is small." Section
5.5 withdraws precisely this reading of the shares 160 lines later, with no forward pointer at first
use.
*Fix:* qualify at first use as a share of nominal published weight, with a forward reference to 5.5.

**M10. An estimator-behaviour inference rests on formulae the paper concedes it could not read.**
`section-05-discussion.md` (working copy 730-732): a signed annual difference "would attract a small
and unstable weight". Section 5.5 records the printed aggregation formulae as illegible in the PDF
text layer and reconstructed in notation only.
*Fix:* label it an inference explicitly, on the model already used twelve lines later, and state that
it cannot be checked.

**M11. The Conclusion asserts what BAPPENAS privately holds.**
`section-06-conclusion.md` (working copy 875): "a quantity BAPPENAS holds and has not released."
Section 5.5 claims only that compilation cost is absent from the public record at every site, which is
a claim about the public record and not about an agency's private holdings. Given the project's
standing constraint that no Indonesian agency was engaged, the stronger claim is not available.
*Fix:* soften to match the Limitations wording already on record.

**M12. The abstract's caveat still sits immediately before the widening close.**
Working copy 18-19. The prior report's m17 asked that the caveat stop interrupting the close; the
2026-08-20 rewrite moved it to precede the close, where it still blunts the build from result to
significance.
*Fix:* fold the nominal-versus-effective concession into the percentage sentences that precede it, so
the closing sentence runs uninterrupted.

**M13. The abstract's close restates rather than widens.** Working copy 18-21. The closing sentence
lists the four things accounting offers but does not extend to the class of statutory composites built
by re-aggregating published sectoral statistics, which the paper's own framing supports.
*Fix:* one clause naming that class.

**M14. Section 2 no longer synthesises its own contribution. REGRESSION.**
Working copy 187-190. The 2026-08-20 pass cut the section's closing preview to two sentences that
pivot straight to Section 4's corrected percentage, leaving no sentence stating what Section 2 itself
established, namely the seven-symptom compilation register that the Introduction lists as the paper's
first contribution.
*Fix:* restore one synthesising sentence before the pivot.

**M15. Section 3.5 now asserts the warrant it used to show. REGRESSION.**
Working copy 316-318. After the renormalisation arithmetic was demoted to S2, the main-text warrant
for reading the printed percentages as normalised contributions is one unnamed sum plus "fifteen
independent groups of raw loadings would not sum to 100 by accident", with the groups unnamed and the
tolerance unquantified.
*Fix:* return a one-sentence census summary giving the number of groups, their printed sums and the
tolerance, citing S2 for the table.

**M16. The three evidential distinctions are no longer locatable, and one has dropped out. REGRESSION.**
Working copy 330-331. Section 3.6 states the distinctions are "marked in prose wherever they bear on a
claim", but with the 47 inline flags stripped there is no marker a reader can find, and the
contested-denominator distinction has disappeared from the three even though Section 3.5 still makes
Section 4.3's figures structure-dependent.
*Fix:* name the three distinctions with the exact wording used to signal each in prose, and either
reinstate the denominator distinction as a fourth or state plainly that it is now handled only locally.

**M17. The corpus stopping rule is terminal on a single unproductive page.**
Working copy 237-239. Neither the slice definition nor the per-slice page ranges appear in the
article, so the corpus census claim cannot be checked without opening the deposit.
*Fix:* define "slice", state the rule as two consecutive unproductive pages or equivalent, and
reproduce the per-slice ranges.

**M18. Data availability names no archive, identifier, licence or version.** Recorded once. Marine
Policy's DAS is mandatory and a reviewer cannot currently obtain the materials. Author-blocked:
requires a repository account and a licensing decision. Tracked as `ibei-ku6`.

### Minor

- **m1.** En-dash in prose: "coupled human–ocean system", `section-01-introduction.md:9`. Breaches the
  binding house-style prohibition. Orchestrator-verified as the only surviving instance in Sections 1-6.
- **m2.** Nine em-dashes or en-dashes remain in `drafts/back-matter.md`, which carries the figure
  legends and the availability statements. Sections 1-6 were swept; the back matter was not.
- **m3.** Supplementary pointers demoted on 2026-08-20 are inconsistent in granularity: "row by row in
  S4.1" against "decomposed row by row in Supplementary S4", and "Supplementary S5" where the valuation
  series sits at S5.4. REGRESSION.
- **m4.** Anthropomorphised account: "The account can tell a provincial planner which reef complex is
  driving a change" (working copy 720-721).
- **m5.** No paragraph break in 5.5 between "...as plainly as what does." and "What does not survive is
  the reading of 7.64%...", so the retraction runs into the preceding argument.
- **m6.** Self-appraisal inside Results: "the divergence is this article's strongest internal
  counter-instance" (working copy 377), which also pre-empts Section 5.2.
- **m7.** Evaluative framing inside Results: "One item in the register is cheap" (working copy 553),
  withdrawn by a conditional in the next clause.
- **m8.** "and is in the tier for a different reason" (working copy 442) precedes the first Results use
  of "Tier A".
- **m9.** Three naming variants for the standard: "System of Environmental-Economic Accounting Ecosystem
  Accounting framework", "SEEA Ecosystem Accounting" (keywords), and SEEA-EA.
- **m10.** Eight reference entries are cited only by short form, so the in-text key does not match the
  entry's sort key: Perpres 12/2025, SEB No. 2/2024, Kepmen KP 44/2023, Law 23/2014, SIRUSA kegiatan
  94936, SIRUSA indikator 105371, the GOAP country page, and Badan Informasi Geospasial. Every one
  resolves; none is an orphan. The mismatch is a copy-editing matter, not a missing reference.
- **m11.** "Both assume continued external technical assistance" (working copy 865-867): the antecedent
  is separated from the two follow-on studies by a long intervening sentence.
- **m12.** "has been demonstrated at that scale elsewhere (Gacutan et al., 2022)" carries the
  sub-national feasibility claim on a single self-citation, which the text does not note.
- **m13.** "on its own registration" (working copy 6) is opaque on first reading for a non-specialist,
  though it is doing real work.
- **m14.** Class of literature not engaged: SEEA-EA compilation actually feeding official indicator
  reporting outside Indonesia, which would test the production-process claim on a second record.
  Exemplars named by the reviewer are **unverified — verify before use**.
- **m15.** "moves three totals by 0.01" (working copy 301-302) does not name which three.

## Not defects — reviewer artefacts

Five findings were retracted at synthesis after orchestrator verification. Four trace to the fact
sheet rather than to the manuscript, and the fifth to the orchestrator's own first mechanical pass.

1. **Conclusion M1, "38 provinces" as an unbridged entity.** Retracted. The count is established at
   `section-02-problem.md:60`, "Indonesia has 38 provinces". The fact sheet carried Section 2's line
   range but not its content, so the conclusion-reviewer could not see it. The reviewer flagged the
   risk itself and asked for verification, correctly.
2. **Abstract M3, sentences 3 and 5 untraceable.** Retracted. Sentence 5's condition-indicator claim
   traces to `section-04-results.md:71-75`, and sentence 4's self-correction to
   `section-02-problem.md:187-190` and Section 5.5. The fact sheet carried no Results claim list at
   dispatch, by design, since the results-reviewer produces it.
3. **Discussion, gap symmetry unverifiable.** Not a manuscript defect but an orchestrator omission:
   the fact sheet gave the Introduction's paragraph count and not its gap sentence. Resolved in the
   cross-section checks below.
4. **Reference-list integrity, 27 orphan entries and 2 unresolved citations.** Retracted in full.
   The orchestrator's first pass keyed entries on the first capitalised token of each wrapped line and
   mis-parsed multi-author entries. A second pass over blank-line-delimited entries within each
   reference subsection resolves every in-text citation to exactly one entry and finds every entry
   cited. Recorded because the skill requires that a corrected fact-sheet or orchestrator error be
   stated, not silently fixed.
5. **Lower-case source-table citations.** Not reported by any reviewer, having been pre-empted in the
   dispatch brief, and recorded here so it is not re-raised: "MMAF, 2022a, tab. 5, p. 52 [pdf 66]" is
   correct house style for a table inside a cited source, and capitalised "Table N" is reserved for
   this article's own display items. This reads as a figure-citation-order violation on first
   inspection and is not one.

## Cross-section checks (orchestrator)

| Check | Result |
|---|---|
| Abstract traceability | **Pass.** All seven abstract claims trace to a Results statement or a display item. Both required concessions survive verbatim in substance: the containment disclosure against Section 4.3, and the nominal-versus-effective concession against Section 5.5. |
| Gap symmetry | **Pass.** Introduction gap, `section-01-introduction.md:60`: "The production system beneath the official index has not been examined." Discussion advance: "What an account offers at the rows it touches is a production process rather than a stock of substitutable values." The advance closes the gap and does not exceed it. |
| Numerical consistency | **Pass.** 7.64, 2.33, 12.79, 13.70, 3.58, 18.45, 36.9, 5.15, 4.06, 1.25, 26.1, 6.26, 2,980.84 and 48,211 are identical at every occurrence across text, legends and supplementary. Swept mechanically. |
| Figure citation order | **Pass.** Figures 1-5 first cited at working-copy lines 119, 390, 454, 492, 599; Tables 1-4 at 144, 390, 498, 588. Both strictly ascending. |
| Proportionality chain | **Pass.** Abstract ("the central finding concerns production rather than coverage") ≤ Discussion ≤ Conclusion ("Whether that process scales to 38 provinces annually is not shown here and cannot be shown from one site"). The conclusion is the most conservative of the three, which is the right direction. |
| Limitation-claim consistency | **Two breaches**, recorded as M9 and M11. The nominal-weight limitation is otherwise carried consistently in the abstract, Section 4.2 and Section 5.5. |
| Reference-list integrity | **Pass**, with m10. Every in-text citation resolves to exactly one entry; every entry is cited; alphabetical order holds within each reference subsection; no schema document IDs, chunk anchors, bead IDs or drafting scaffolding survive anywhere in the manuscript. |

## Prioritised revision plan

1. **C1.** Reconcile Methods with the deposit. One edit, and nothing else in the paper can be trusted
   until it is made.
2. **C2.** Define and close the route taxonomy in Methods. Two of four headline quantities depend on it.
3. **M1, M2, M18** together: one pass over the back matter fixing the exactness formulation, the
   account-side provenance statement, and, on acceptance, the DAS identifiers. M18 is author-blocked.
4. **M5, M6, M7, M8** together: four sentence-level provenance and scope fixes in Section 4, all in the
   same register, all cheap.
5. **M4, M14, M15, M16, m3** together: the five regressions from the 2026-08-20 pass. Each restores a
   warrant that the demotion removed. Budget roughly 120 words against a 10-word ceiling headroom, so
   this step needs a compensating cut identified before it starts, exactly as the prior report's N2 warned.
6. **M3.** Cite the quality-assurance-audit class, or drop the sentence.
7. **M9, M10, M11** together: three hedge-calibration edits in the Discussion and Conclusion.
8. **M12, M13** together: one abstract edit, moving the caveat into the percentage sentences and adding
   a widening clause. The abstract is at 249 words against a ~250 convention, so the widening clause
   must be paid for.
9. **M17.** Define the slice and restate the stopping rule.
10. **m1 through m15**, polish, m2 and m10 being mechanical sweeps of the back matter.

## Pre-submission compliance table

Calibrated to Marine Policy. Nature's requirement is given where it differs, with dual status.

| Item | Marine Policy | Nature | Manuscript | Status |
|---|---|---|---|---|
| Abstract | Unstructured, ~250 words, no citations | ≤200 (≤300 with broader-perspective close), "Here we show" | 249 words, unstructured, no citations | **pass** / Nature: pass on length, no "Here we show" (n/a at this venue) |
| Main text | 9,000–10,000 words target | ~2,500 or ~4,300 | 9,990 words, Sections 1–6 prose | **pass** / Nature: fail by ~2.3x (Nature-only) |
| Register metrics (project gate) | mean <24 w/sentence, <10% of sentences >40 words | — | 21.6, 6.6% | **pass** |
| Highlights | 3–5 bullets, ≤85 characters | n/a | 5 bullets, longest 82 characters | **pass** |
| Keywords | Present | n/a | 6, semicolon-separated | **pass** |
| Display items | No fixed limit; cited in order; legends self-contained | 4–6; legends <300 words | 5 figures, 4 tables, all cited in ascending order; legends 101–145 words | **pass** / Nature: fail on count (9 items) |
| Citation style | Harvard author-date | Numbered sequentially | Harvard author-date throughout | **pass** / Nature: fail (Nature-only) |
| Reference-list integrity | Every citation resolves; every entry cited; alphabetical on the in-text key | same | 48 entries, all resolve both directions; alphabetical within subsections; no scaffolding | **pass**, with m10 on eight short-form keys |
| Subheadings | No limit | ≤40 characters | All Sections 1–6 subheadings ≤40 characters | **pass** / Nature: **pass** |
| Title | No limit | ≤75 characters, no numbers or acronyms | 69 characters, no numerals or acronyms | **pass** / Nature: **pass** |
| Methods position | IMRaD, Section 3 | After figure legends | Section 3 | **pass** / Nature: n/a by venue |
| Methods length | No limit | ≤~3,000 words | 1,822 words | **pass** / Nature: **pass** |
| Data availability | **Mandatory** | Mandatory | Present; archive, DOI, licence and version marked to be assigned on acceptance | **fail** (M18, author-blocked) |
| Code availability | Expected where code exists | Mandatory | Present, and contradicts Methods | **fail** (C1) |
| Software named | Expected | Expected | Python 3 in Methods, Node.js in the deposit | **fail** (C1) |
| Reproducibility of the analysis | Scoring rule and arithmetic chain re-runnable | same | Scoring rule specified; scoring and weight scripts not deposited; route taxonomy undefined | **fail** (C1, C2) |
| Reliability of the central grading | Disclosed | Disclosed | Single coder, not blind, no adjudication, conceded in 5.5; re-grade named as the check not run | **pass as disclosure**, fail as a check (author-blocked, `ibei-8d4.4`) |
| Declarations | Author contributions, funding, competing interests | Similar | All present | **pass** |
| Statistical reporting | n/a for this paper type | Reporting Summary | No sampling, inference or hypothesis test, stated at 3.1 | **n/a**, correctly declared |
| Ethics | n/a | As applicable | No human, animal or biological materials | **n/a** |

## Section reports

The six section reports are held in the reviewers' returns and are not restated here: every issue they
raised appears above under its consolidated number, and every finding they raised that did not survive
verification appears under "Not defects". Scope-alignment scores, which are the reports' one output not
carried into the issue list, are in the hourglass diagram. Reviewer verdicts as returned: abstract
minor revision, introduction minor revision, methods **major revision**, results minor revision,
discussion minor revision, conclusion minor revision. The orchestrator's overall recommendation of
major revision follows the methods verdict, because C1 and C2 are both reproducibility defects and
neither is section-local.

## Review provenance

**Working copy.** Assembled by `assemble.sh` from fourteen source drafts into
`output/manuscript-v2.md`, 1,665 lines, then line-numbered. The assembly script itself refuses to
emit a manuscript containing `<!--`, `DRAFTING NOTE` or `TODO`, and a further grep for `<!--`, `-->`,
`assert`, `FIXME`, internal filenames, RAG document IDs (`doc_N`), chunk anchors and bead IDs returned
no hits. Six hits on the string `assert` were verified as the English word "asserted" in running
prose, and one hit on an internal-looking filename as the legitimate script name in Code
availability. No scaffolding reached any reviewer.

**Section boundaries** (working-copy lines): title 1; abstract 3–22; introduction 24–88; problem
89–192; methods 193–339; results 340–635; discussion 636–834; conclusion 835–886; declarations,
highlights, keywords, legends and availability 887–1028; references 1029–1217; supplementary
1218–1665.

**What reviewers received.** A per-section line-numbered extract and the cross-section fact sheet, and
nothing else. The manuscript path was withheld. Methods and results additionally received the figure
legends and the availability statements as context, because both own checks that span them. Section 2
was sent to the introduction-reviewer as extended background, with its function stated. No section was
sent to two reviewers.

**Fact-sheet defects found during synthesis**, all four recorded above under "Not defects": the fact
sheet carried Section 2's line range without its content, which cost two false findings; it carried
the Introduction's paragraph count without its gap sentence, which cost one unverifiable; and it
carried no Results claim list, by design, which cost one traceability flag. Every negative the fact
sheet asserted was verified before dispatch, and none of the four is a wrong negative.

**Orchestrator error.** The first reference-integrity pass reported 27 orphan entries and 2 unresolved
citations. All 29 were artefacts of keying wrapped reference entries on their first capitalised token.
A second pass over blank-line-delimited entries within each reference subsection found no orphans and
no unresolved citations, and eight entries cited by short form. The corrected result is what the
compliance table records.

**Unverified literature pointers**, restated as **verify before use**: the IMF Data Quality Assessment
Framework and the Eurostat/ESS quality framework, named by the introduction-reviewer as candidate
citations for M3; and work by Hein et al. on SEEA-EA policy uptake and the UN SEEA-EA country
compilation reviews, named by the discussion-reviewer under m14. None is in the manuscript's reference
list or the fact sheet, and none was checked. Do not cite any of them without retrieving the work.

**Prior reports.** `nature-review-2026-08-18.md` and its verify pass
`nature-review-2026-08-18-verify-01.md` are the immediately preceding round, whose sixteen closed
beads this manuscript carries. `archive/REFEREE-REPORT-nature-review.md` is the v1 report and was
assessed against Nature; its compliance table is mis-calibrated for this venue and must not be reused.
