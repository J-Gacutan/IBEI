# Verification pass 01 — nature-review 2026-08-18

**Mode:** verify-fixes. No section reviewer was re-dispatched.
**Prior artefacts:** [nature-review-2026-08-18.md](nature-review-2026-08-18.md),
[nature-review-2026-08-18-issues.json](nature-review-2026-08-18-issues.json).
**Revision under test:** working tree at 2026-08-18, i.e. commit `5c2a6b7` "Apply the citation-check
findings to the v2 drafts and figures", which rewrote `section-02-problem.md` (77 lines),
`section-03-methods.md` (160), `section-05-discussion.md` (265) and `supp-S2-weight-workbook.md` (67).
**Beads:** epic `ibei-8d4`, 44 children.

## How this pass was run

The working copy was rebuilt with `./assemble.sh`. Comment-delimiter balance was checked per draft
file (all 13 balanced, zero `<!--` and zero `-->`), and the assembled text swept for scaffolding
signatures — clean. Structure is unchanged: six sections, same subsections, 1,295 lines. Fresh
offsets: intro −25, problem −103, methods −214, results −346, discussion −682, conclusion −858,
S1 −903.

**Gates, on rebuild:** all five pass. Body prose 9,995 words; abstract 295; supplementary 6,574;
register mean 21.0 w/sentence, 5.6% over 40 words.

**One methodological note on this pass.** An initial check reported `M12` as fixed because
`grep 'No source located'` returned nothing. That was a false negative: the sentence wraps across a
line break. Every subsequent check was re-run against newline-normalised text. Four further `True`
results were then inspected individually rather than trusted, and three proved to be pattern
artefacts — "data availability" matched ordinary prose about *why survey years were chosen*, every
apparent "CRediT" hit was *credited* or *accredited*, and "script" was inside another word. None of
those three is a fix. Reporting them as fixes would have closed three live issues wrongly.

## Verification table, ordered by the original revision plan

| Step | Issue | Status | Evidence |
|---|---|---|---|
| 1 | **C1** false residual | **fixed** | The technology weight *is* printed — Juknis Tabel 5, `4,1%` — so it was never a residual. `supp-S2:40` now reads `Tabel 5 \| 4.1 of economy \| 32.6 x 4.1% \| 1.34`, and `supp-S2:93–95` explicitly withdraws the residual treatment and the 96.0 sum. `32.6 × 4.1% = 1.34` verifies. |
| 2 | **C2** 12.79 undecomposed | untouched | `results:152` still states the figure with no decomposition; the breakdown remains supplement-only at `supp-S2:46`. |
| 2 | **M5** the 1.07 ratio | **partial** | "roughly 1.1 times" is now the exact "1.07 times" and is gone from the abstract and conclusion. The objection's force is much reduced: the new 15-group census bounds movement at 0.03 pp, not ~1 pp. Remaining: still carried in the Introduction findings statement (`introduction:73`). |
| 3 | **C3** no availability statement | untouched | Verified absent by two passes. The only match was prose. |
| 3 | **C4** single-coder, row-level deposit | untouched | S1 still 44 rows, not 62 items; the boilerplate ground now appears 13 times (was 12). |
| 3 | **M1** corpus rule / reconstruction flag | untouched | No inclusion, boundary or stopping criterion; flag still undefined. |
| 3 | **M2** sensitivity test | **partial** | Substantive limb **fixed and improved**: §3.5 no longer offers renormalisation as a bound. It reports a 15-group census (largest effect 0.03 pp, 26.15%→26.12%) and *infers* the percentages are normalised contributions, flags the inference `[ASSUMPTION]`, and states the consequence at `discussion:163–167` — "the derived shares would lose their denominator rather than move". That is a stronger move than the original. Remaining: still titled "its **one** ambiguity" (`methods:95`), and the 13.7%/14.0% second ambiguity still sits only in S4. |
| 3 | **M3** 13.70 unrecomputable | **fixed** | `supp-S2:41–44` now carry full printed inputs and chains. Verified: `30.5 × 18.2% × 82.6% = 4.585 ≈ 4.59`. |
| 4 | **C5** no figure legends | untouched | Verified absent by two passes. No legend, caption, embed or filename reference. |
| 5 | **C6** nominal-vs-effective absent from abstract/conclusion | untouched | Neither passage mentions effective importance or nominal share. |
| 5 | **M4** uneven caveat inheritance | **partial** | Structure-dependence limb largely addressed: §4.3 now opens with a blanket "The arithmetic below follows the three-pillar locus declared at" §2.3, covering the derived economy figures. Remaining: §3.6 scopes the flag to "the Tier A share of 7.64% **and figures derived from it**", but Results carries it once only (`results:121`), not on 2.33%, 1.25% or 4.06%. |
| 5 | **m4** flag defined twice | **fixed** | `methods:127–129` now states the flag "carries one meaning throughout and not two … It is not a flag about the weights, which are printed." |
| 6 | **C7** counter-instance disqualified | untouched | "parallel releases of the same underlying mapping layer" still present in §5.2. |
| 6 | **M12** absence converted to support | untouched | "No source located by this study argues that accounts cannot serve as statistical infrastructure for a composite index" still closes §5.4, still unbounded by the search protocol. Wuwung is stated and still not permitted to alter the recommendation. |
| 6 | **M14** falsification rests on declined cost | untouched | "This study declines to estimate a cost" still at `conclusion:14`. |
| 7 | **M9, M10, M11, M15** structural moves | untouched | §5.1 restates none of the four load quantities; the bolded "Insertion should be phased behind coverage" is still at `results:317`; the conclusion still opens on 12.79/13.70. |
| 8 | **M8, M13** self-citation, counter-position | untouched | No reference-list entry for the prior mapping; the secondary-compilation-adequate position still unengaged. |
| 9 | **M6, M7, M16** front matter, refs, abstract | untouched | No keywords/Highlights/funding/competing interests/CRediT; `assemble.sh` still omits `references.md`; the abstract still closes on "now a general question". |
| 10 | remaining minors | untouched | m1, m2, m3, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17 all unchanged. |

**Totals: 3 fixed, 3 partial, 35 untouched.**

## New defects introduced by the revision

Listed separately with new numbers, not folded into the old issues.

**N1 (critical) — `ibei-8d4.42`. The abstract and conclusion contradict the rewritten Methods on the
denominator.** The revision resolved the loadings-versus-contributions ambiguity: §3.5 reads the
percentages as normalised contributions and states the derived shares "are carried without a
denominator caveat", and §3.6 states the flag "is not a flag about the weights, which are printed."
But `abstract:19` still asserts "All shares are contingent on an undocumented ambiguity in how the
published weights are expressed", and `conclusion:6` still says the 2.33% "rests in part on a
denominator the source documents do not settle." Methods and Discussion were updated; the abstract
and conclusion were not. Four passages, two incompatible positions.

**N2 (major) — `ibei-8d4.43`. Five words of gate headroom, and every outstanding fix adds prose.**
Body prose is 9,995 against a hard 10,000 ceiling that `assemble.sh` enforces by exit code. C2, C6, M1
and M13 each require added prose. The gate will hard-fail on the first substantive fix, so a
compensating cut has to be planned before the revision starts, not discovered after it. Candidates
already identified: the §2 regulatory repetition (M10) and further demotion to S2.

**N3 (minor) — `ibei-8d4.44`. The abstract grew from 282 to 295 words**, further over Marine Policy's
~250-word convention. Supersedes m5.

## Assessment

The citation-check pass was a genuine improvement on exactly the ground it covered. It closed the
review's single hardest arithmetic finding, and it closed it *better* than the report proposed: rather
than recomputing the residual as 4.0, it established that the weight was printed all along and the
residual treatment was itself the error — then withdrew it on the record. The renormalisation rewrite
likewise replaced a test that could not bound what it claimed with a fifteen-group census that
supports a stated, flagged inference. Both are the right kind of correction.

What it did not touch is the larger part of the report: the five missing figure legends, every
availability statement, the item-level deposit and independent re-grade, the undecomposed 12.79%, and
the abstract-and-conclusion end of the caveat chain. And by fixing Methods without fixing the abstract
and conclusion, it opened N1 — a four-passage contradiction on the very ambiguity it resolved.

**Recommendation unchanged: major revision.** Six of seven criticals stand, and one new critical has
been added.
