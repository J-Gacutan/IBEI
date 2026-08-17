# Consolidated review — *Ocean accounts as compilation infrastructure for a blue economy index*

**Date:** 2026-08-17. **Mode:** verify-fixes consolidation, not a fresh review.
**Inputs:** the 2026-08-16 referee report (8 Critical, 14 Major, 10 minor), `CUT-LIST.md`, the two
PRD hostile reviews, the SOT director assessment, `REFERENCES-verified.md` — all now in
[../archive/](../archive/) except the reference files.
**Verified against:** [manuscript-assembled.md](manuscript-assembled.md) (2026-08-16 23:48), which
post-dates every input review.

No reviewer subagents were re-dispatched. Each prior finding was checked against the current text by
pattern search and read; the evidence for each verdict is the line reference given.

---

## Headline

**The revision was thorough and the referee report is now largely spent.** All 8 Critical items and
all 10 minor items are fixed; 10 of 14 Major items are fixed. The manuscript acquired, after the
report was written, a title, a rebuilt 213-word abstract, a 1,594-word Methods section, Data and Code
Availability statements, an ethics/funding/competing-interests declaration, a 44-row supplementary
scoring sheet and a weight workbook. The seven drafting-note blocks are gone and every subheading is
now within 40 characters.

**What remains is not what the referee report emphasised.** Four live issues survive, and the two
largest were invisible to that report:

1. **The compliance table was calibrated to the wrong journal.** The PRD names **Marine Policy**
   (9,000–10,000 words, Harvard author–date). The referee report assessed against Nature (~2,500–4,300
   words) and returned "fail (3–5× over)". Against the real target the manuscript is ~1.8× over, not
   5×, and several Nature-only failures (display-item count, ≤50 references, summary-paragraph
   template) do not bind at all.
2. **The word overrun is nonetheless the binding constraint, and the existing cut plan cannot close
   it.** Main text is **17,169 words** against 9,000–10,000. `CUT-LIST.md` finds ~1,770 words. The
   gap is roughly 7,000 words, four times what the archived plan identifies — and that plan was
   written against an outline, before §§5, 7 and 9 grew.
3. **The manuscript has no reference list and no figures**, despite both existing on disk.
4. **The one genuinely unclosed referee item is M9**, and it is the same defect
   `REFERENCES-verified.md` independently records as "the remaining hole".

---

## Verify-fixes table

### Critical — all fixed

| ID | Issue | Verdict | Evidence |
|---|---|---|---|
| C1 | Headline results cite four non-existent display items | **fixed** (by striking) | Zero `Figure`/`Fig.` citations remain in the manuscript. See live issue L3 — the five built figures are now orphaned. |
| C2 | Contested figure load-bearing; abstract stated it as settled | **fixed** | Abstract now closes "both shares contingent on an undocumented ambiguity in how the weights are expressed" (abstract L18–19); §9.1 inference made conditional. |
| C3 | 3.58% over-counts by half again | **fixed** | Reported as a range throughout: "about 2.33%, rising to about 3.58% only if indicator 24's structural correspondence is credited in full" — L584, and carried to L745, L926–927. |
| C4 | Membership rule stated two incompatible ways | **fixed** | Explicit three-grade scheme at L459 and L1347–1351: 19/20/21 *matched*, 24 *partial*, 27 *provenance question*; Tier A = 5. |
| C5 | No Methods, no scoring sheet, no availability statements | **fixed** | `# Methods` L1299 (1,594 words); Data availability L1404; Code availability L1412; ethics/funding/competing L1417; Supplementary Table S1 (44 rows) L1425; Weight workbook S2 L1492. |
| C6 | Discussion's positive claim contradicted by own Results; absent from limitations | **fixed** | Now the **first** of eight limitations, L1064–1075, carrying the moving ratio and the 12.00 vs 18.26 ha divergence, and explicitly routed to §9.1. |
| C7 | §7.1 asserted score-invariance against §5.4 | **fixed** | L802 restated: "a kind the register does not already specify, whilst whether recompiling those quantities…". |
| C8 | Final sentence inflated one pilot into national capability | **fixed** | Now "has demonstrated, at one experimental pilot site, one instance of the production process the obligation would require at scale." |

### Major — 10 of 14 fixed

| ID | Issue | Verdict | Evidence |
|---|---|---|---|
| M1 | Tier B excluded by argument, criterion not stated independently | **fixed** | Criterion stated at §7.1 head and restated L919–920 as a content-side, not maturity-side, failure. |
| M2 | Numerical spine pre-announced twice, derived once | **partial** | Abstract still previews 7.6% and 19%, which is legitimate for an abstract. The §5.4 forward reference is cut. Residual is presentational only — folded into L1. |
| M3 | Loadings-vs-contributions ambiguity disclosed, never quantified | **fixed** | Renormalisation test now run and bounded: L1084–1088, L1384–1389, and §9.1 L1192 "bounds the difference between the two readings at under…". |
| M4 | Codification objection raised then abandoned | **fixed** | Residual isolated at L277 (balancing identity) and answered at L1163–1166. |
| M5 | 62-item decomposition only in Discussion | **fixed** | Derived in §5.1 at L456–458 with the Juknis folio; §9.1 L1124 now cites back. |
| M6 | Pillar-locus crosswalk missing for §7 figures | **fixed** | Structure-dependence stated; §7.3 records the governance variable moving to indicator 18 under the four-pillar locus. |
| M7 | Absence claims rest on an unrecorded search protocol | **fixed** | Methods L1327 names the searched set with a retrieval date (2026-08-13); L1409 declares no restricted or licensed sources. |
| M8 | Loose coupling generalised nationally; lapsed instrument not noted | **fixed** | L1220 now carries "Kepmen KP 44/2023 having had its term expire on 31 December 2023 with no renewal instrument located". |
| **M9** | **No contradicting literature engaged anywhere** | **UNFIXED** | §§8–9 cite exactly three external works, all supportive: United Nations et al. 2024, Rahayu et al. 2024, Gacutan et al. 2022. See live issue L4. |
| M10 | Introduction ¶4 does §2's job; ends on caveats | **fixed** | Introduction rewritten; opens at field level, ¶4 compressed. |
| M11 | Discussion opens on drafting history | **fixed** | §9.1 now opens "Three results carry the argument." |
| M12 | Conclusion a fourth copy with four competing take-homes | **fixed** | §10.1 retitled "The single take-home". |
| M13 | Abstract fails three template requirements | **fixed for target venue** | 213 words, closes on a broadening sentence. Nature's ≤200 and "Here we show" do not bind at Marine Policy; the signal phrase is present anyway ("Here, the analysis demonstrates"). **Note:** the referee's "no citations" complaint is a Nature requirement that *inverts* at Marine Policy — Elsevier abstracts must be self-contained and reference-free. An uncommitted working-tree edit is stripping the three author–date citations back out of the abstract, which is correct for the target venue and should not be reverted. |
| M14 | Abstract framing contradicted the Conclusion | **fixed** | Abstract now leads with the production-process claim and cites the percentages as support. |

### Minor — all 10 fixed

`m1` cell/area shortfall now stated and tagged as unexplained (L325–326) · `m2` derivations shown ·
`m3` economy decomposition assembled · `m4` drafting blocks stripped to
[../archive/](../archive/) · `m5` BAPPENAS glossed at L55, MBSU at L323 · `m6` sensitivity units
given (L912) · `m7` subheading now "One maturity, three completenesses" · `m8` the 18.11/16.99
juxtaposition now flagged as unreconciled in the source (L497–500) · `m9` rounding convention stated
(L572, L1377) · `m10` all subheadings ≤40 characters.

---

## Live issues

### L1 — Main text is 17,169 words against a 9,000–10,000 target, and the cut plan is four times too small
**Severity: critical (blocks submission).** Marine Policy per PRD L220–221. The archived
`CUT-LIST.md` identifies ~1,770 words against a required ~7,000. It was also written against SOT
revision 1, before §5 (15.4 KB), §7 (20.1 KB) and §9 (10.7 KB) reached their present size — §7 alone
is now the largest section in the paper.
**Fix:** a fresh cut plan against the *drafted* text, not the outline. The archived plan's protected
list still holds and should be carried forward: the §4 maturity qualifications, the 34/1 pairing and
the loadings caveat, every flagged concession, and §8.5's limitations must not be cut.

### L2 — No reference list in the assembled manuscript
**Severity: critical (blocks submission).** `REFERENCES.md` and `REFERENCES-verified.md` exist at the
manuscript root but no `# References` heading appears anywhere in `manuscript-assembled.md`. The
in-text citations are therefore unresolvable by a referee.
**Fix:** assemble `REFERENCES.md` into the manuscript, then reconcile in both directions — every
in-text author–date resolves to an entry, and every entry is cited. Note `REFERENCES.md` carries
`[secondary]` entries known only as MMAF (2022) prints them; Marine Policy will want those either
obtained at source or explicitly marked.

### L3 — Five figures are built and none is cited
**Severity: major.** `figures/` holds `fig1-compilation-chain`, `fig2-leverage-inversion`,
`fig3-weight-cascade`, `fig5-indicator-mapping-matrix`, `fig6-reporting-calendar` as HTML. C1 was
closed by striking all four figure citations, which leaves the paper with zero display figures and
five orphaned assets. Marine Policy imposes no Nature-style 4–6 item cap, so the striking was a
larger concession than the venue required.
**Fix:** decide explicitly. Either reinstate a subset with legends stating that shares are this
study's products of published percentages and are indicative — `fig5-indicator-mapping-matrix` is the
strongest candidate, since the mapping *is* the contribution — or retire all five to
`figures/archive/` with a note, so the absence is a decision rather than an oversight. Do not leave
this undecided: the gap numbering (there is no fig4) suggests the set was already being pruned.

### L4 — No contradicting literature, and the composite-indicator methodology hole is the reason
**Severity: major.** Referee M9, unfixed. Two independent records converge on it: §§8–9 cite only
three supportive external works, and `REFERENCES-verified.md` records that **no composite-indicator
methodology literature exists in the project's document set** — no OECD/JRC handbook, no Ocean Health
Index or comparable, nothing on weighting-scheme sensitivity, PCA-derived weights or imputation
inside composite indices.
**Why it matters beyond a citation count.** `REFERENCES-verified.md` states the consequence precisely:
without it the Introduction cannot establish that the IBEI's construction is a recognised class of
problem rather than an idiosyncratic Indonesian one, "which is the move that licenses the novelty
claim." §8.3's variance-weighting argument has the same exposure.
**Fix:** source composite-indicator methodology literature from outside the project folder, then bring
at least two works into §9 that can be read *against* the conclusion. This is the only live issue
requiring new reading rather than bookkeeping. It is not blocked by the no-agency-engagement
constraint.

### L5 — 52 house-style tags remain in running prose
**Severity: major (submission mechanics).** `[EVIDENCE GAP]` ×27, `[ASSUMPTION]` ×19,
`[CONTESTED DENOMINATOR]` ×6. These are deliberate — `briefs/HOUSE-STYLE-DIRECTIVE.md` L57 records
`[CONTESTED DENOMINATOR]` as added by user ruling on 2026-08-16 — so they are an internal apparatus
working as designed, not a defect. But they cannot go to a journal.
**Fix:** at submission, convert each to a prose qualifier. Do this **last**, after L1's cutting: tags
mark exactly the sentences most likely to be cut, so converting first wastes the work.

### L6 — `Table N` denotes both this paper's display items and source-document tables
**Severity: minor.** L347 "(MMAF, 2022, Table 5, p. 52 [pdf 66])" and L350 "Table 6 (p. 53 [pdf 67])"
cite the *pilot report's* tables, whilst L500/L563/L611 cite this paper's Table 3. Juknis tables are
disambiguated as "Tabel", but MMAF's are not. This initially reads as a figure-citation-order
violation and is not one.
**Fix:** cite source tables as "MMAF (2022) tab. 5" or similar, reserving capitalised "Table N" for
this paper's own display items.

### L7 — Rinaldi citation year conflicts with the project's own standing instruction
**Severity: minor, but it touches CLAUDE.md.** The manuscript cites "Rinaldi et al. (2025)" three
times. `REFERENCES-verified.md` confirms **2025** is correct (received Nov 2024, accepted Jun 2025)
and warns the filename year is wrong. But `CLAUDE.md`'s Evidence-precedence section refers to
"Rinaldi et al. 2024" four times.
**Fix:** the manuscript is right and CLAUDE.md is stale. Correct CLAUDE.md, not the manuscript.

---

## Revision order

Sequencing matters more than usual here, because L1 will delete text that the other fixes would
otherwise be applied to twice.

1. **L4** — source the composite-indicator literature and engage it in §9. First, because it is the
   only item needing new reading, it may *add* words, and L1 must be planned knowing its cost.
2. **L1** — build the cut plan and execute it. The single largest piece of work.
3. **L3** — decide the figures. After cutting, since a cut section may remove a figure's referent.
4. **L2** — assemble and reconcile the reference list. After L4, which adds entries.
5. **L6, L7** — mechanical disambiguation and the CLAUDE.md correction. Independent of the rest.
6. **L5** — convert the 52 tags to prose. Last, deliberately.
7. Re-run a compliance pass **against Marine Policy**, not Nature.

## One item to preserve

Recorded because a word-count pass will reach for it: every published share still re-derives exactly
from the printed weights, and the renormalisation test added since the referee report now *bounds*
the loadings-versus-contributions ambiguity at under 0.1 percentage points on 7.64%. That is the
manuscript's strongest verification asset and it closes the referee report's sharpest methodological
objection (M3). It survives any cut.
