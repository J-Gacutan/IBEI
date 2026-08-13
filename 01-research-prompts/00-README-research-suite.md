# Deep Research Suite: Ocean Accounts × Indonesia Blue Economy Index

Five separately-runnable deep research prompts, split from the single combined brief ([00-combined-brief-superseded.md](00-combined-brief-superseded.md)) so that each can be run at depth without competing for attention or token budget.

## Why split

The combined brief had a dependency inversion: the mapping question (RQ3) cannot be answered before the IBEI indicator specification (RQ1) and the ocean accounts inventory (RQ2) are established. A single agent running all eight questions will begin mapping against *assumed* indicator definitions — reproducing exactly the flaw in the provisional Annex A mapping that this research exists to correct. Splitting enforces the sequence.

## The five prompts

| # | Prompt | Question | Depends on | Status |
|---|--------|----------|-----------|--------|
| 01 | [IBEI Specification](01-ibei-specification.md) | What exactly does the IBEI measure, and how? | — | **Closed** — 36 of 44 indicators recovered; residual 8 need a data request, not more search |
| 02 | [Ocean Accounts Inventory](02-ocean-accounts-inventory.md) | What ocean account tables actually exist for Indonesia? | — | **Closed** — 15 account entries inventoried, all at maturity (b) or below; nothing is official statistics |
| 03 | [Mapping & Reconciliation](03-mapping-and-reconciliation.md) | Which indicators can be derived, at what scale, with what distortion? | 01 + 02 | **Closed** — [round 2](03-round2-mapping-and-reconciliation.md) run against the real register and verified inventory; [findings](../02-research-findings/03-mapping-and-reconciliation-findings-round2.md) supersede round 1 on mapping and normalisation |
| 04 | [Institutional Pathway](04-institutional-pathway.md) | Who would have to do what, and would they? | — (sharper after 01/02) | **Closed** — check the date warning in its §0 |
| 05 | [Precedent & Counter-Case](05-precedent-and-counter-case.md) | Has this worked elsewhere, and should it be done at all? | — | **Closed** — returned without the intended narrowing; Part A precedent survey is usable at reconnaissance depth, Part B restates six strands domestic evidence had already settled |

Each prompt now carries a **§0 Status against returned findings** giving the RQ-level detail: what
the returned findings closed, what they left open, and what changed in the prompt as a result.
Findings live in [../02-research-findings/](../02-research-findings/).

## Execution sequence

**Wave 1 (parallel):** 01, 02, 04, 05 — all four are independent and can run simultaneously.

**Wave 2:** 03 — run only after 01 and 02 return. Paste their indicator register and accounts inventory into 03's Section 2 as supplied evidence.

**Wave 3 (synthesis, not a research prompt):** consolidate into a revised concept note and Annex A. Prompt 03 produces the mapping matrix; 04 and 05 supply the feasibility and framing sections.

Prompt 04 is listed as independent because Indonesian inter-agency coordination documents can be searched without knowing the indicator list. If sequencing budget is tight, running 04 after 01/02 will let it target specific named data flows rather than general MoU discovery — a modest gain, not a blocker.

### Where the suite actually stands

**All research is now complete.** 01, 02, 04 and 05 returned in wave 1; 03 was run out of sequence and
its [round 2 correction pass](03-round2-mapping-and-reconciliation.md) has returned. Only synthesis
remains: the revised concept note and Annex A, plus the journal article specified in
[../04-manuscript/PRD-journal-article.md](../04-manuscript/PRD-journal-article.md).

### Headline results

- **Derivability, re-scored against the real 44-indicator register and the verified inventory:
  0% Full / 2.8% Partial / 8.3% Minimal / 88.9% None over 36 scoreable indicators** (the other 8 are
  unidentified and unscoreable). Exactly one indicator — G9, MPA extent — rates Partial. The
  progression 61% → 39% → 2.8% full-or-partial across three passes is itself the finding: each
  correction of the indicator set or the maturity evidence cut the figure again.
- **Two different causes of non-derivability** must not be conflated. Maturity gaps (A1, C4–C6,
  G1–G3) could be closed by compilation. Measurement-target mismatches (G4, G5 Podes village counts;
  C1–C3 freight and passengers; H, J, K) cannot — the index asks for policy outputs and pressures
  where accounts supply states and flows.
- **A fifth structural problem, not previously identified:** because the IBEI weights by three-stage
  PCA, inserting an account-derived indicator rotates the eigenvectors and **reweights every other
  indicator**, breaking comparability with published scores. Under partial coverage, mean-substitution
  imputation sets the uncompiled provinces to Z = 0, collapsing the indicator's variance so PCA
  assigns it a near-zero weight — the index mathematically suppresses the one province that has a real
  account. And because weights track variance, the environmental pillar's weight *falls* when
  provinces converge environmentally.
- **Compensability is verified, not inferred:** additive linear combination at every PCA stage, no
  geometric aggregation, no non-compensatory thresholds. Note also that sub-pillar H (renewable
  energy) carries the same ~18% as G (resource quality and conservation), so half the "environmental"
  pillar measures energy transition rather than ecosystem health.
- **Round 1's min–max normalisation argument is void.** The operative function is Z-score inside PCA;
  min–max applies only to the final 0–100 rescale. Do not cite round 1 §6.2.

**Standing constraint (added Aug 2026):** direct engagement with Indonesian government agencies is
out of scope for this project. No data request, interview, or agency correspondence is available.
Documents that are published or publishable (JDIH KKP, BPS work programme, GOAP outputs) remain fair
search targets; the unpublished BAPPENAS methodological handbook and the non-retrievable 2022 MMAF
reports are permanent limitations, not pending tasks.

**On [../03-outputs/](../03-outputs/):** the 61% full-or-partial derivability asserted in
[annex_a_oa_ibei_mapping.md](../03-outputs/annex_a_oa_ibei_mapping.md) is refuted — the verified
figure is 2.8% Partial and 0% Full. The concept note's central promise, flagging economic gains won
through natural capital depletion, is structurally defeated by the IBEI's additive, fully
compensatory three-stage PCA aggregation, confirmed independently by findings 01 and 03. Both
outputs need correction or explicit retirement so the superseded figures stop circulating.

## Conventions shared by all five prompts

Each prompt is self-contained (repeats the background it needs) and carries the same method requirements:

1. **Verify before asserting.** Citation to a locatable source for every definition, date, figure, and institutional arrangement. Unfound sources are reported as unfound, not inferred around.
2. **Four-state maturity tagging** for anything described as existing: (a) published official statistics, (b) experimental/pilot compilation, (c) methodology under development, (d) announced but not started.
3. **Flag reconstruction.** Anything inferred rather than sourced is labelled as such with a confidence level.
4. **Preserve disagreement.** Conflicting sources are presented as conflicts, not silently resolved.
5. **No fabricated specificity.** No invented formulas, weights, hectare figures, or decree numbers. Absence of evidence is a finding.
6. **Search in English and Bahasa Indonesia.** Key official documents are likely Indonesian-only. Useful terms: *indeks ekonomi biru*, *neraca laut*, *akun laut*, *neraca ekosistem*, *unit spasial dasar laut*, *peta jalan ekonomi biru*, *Satu Data Indonesia*.

## Standing framing boundary

The relationship under investigation is **statistical infrastructure feeding a policy instrument**. No prompt should propose replacing the IBEI with ocean accounts or subordinating either framework to the other. The existing concept note and Annex A are prior work to be *tested*, never authority to be cited back.
