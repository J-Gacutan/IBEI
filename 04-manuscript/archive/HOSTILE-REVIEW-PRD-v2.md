# Hostile review — PRD-journal-article.md v2 (compilation infrastructure)

**Reviewed:** [PRD-journal-article.md](PRD-journal-article.md) v2, dated 2026-08-14.
**Reviewed against:** its own stated purpose — *IBEI compilation is hard, hardest at provincial scale;
ocean accounts can facilitate and streamline it; here is what already-compiled and future accounts can
supply, mapped to the 44 indicators.*
**Posture:** adversarial, and adversarial towards a specification I wrote, which is the only way this
is worth anything. Findings are ordered by severity.

**Verdict: the paper is writeable and the reframe holds, but it is not yet safe to draft.** One defect
is structural and blocking (F1); two more are load-bearing on the paper's originality (F2, F3); the
rest are fixable at drafting. The pattern across F1–F3 is the same: **the IBEI side of the mapping is
sourced to the folio, and the accounts side is deep-research hearsay.** The paper is a mapping between
two bodies of evidence of radically unequal quality, and the weaker one is the side the argument
recommends acting on.

---

## F1 — BLOCKING. The accounts side of the mapping has no tier-1 corpus, and the decisive primary sources are sitting unread in this repository.

The v2 PRD builds §4 ("What Indonesia has already compiled") and therefore all of §5 (Tier A, the
central deliverable) on **finding 02**. Finding 02 §9 ranks its unobtained documents and puts this
first:

> "**MMAF (2022) Ocean Accounts Pilot Report, Development Report, and Roadmap** (GOAP-hosted Google
> Drive links; not machine-retrievable). Would resolve whether a normalised condition index and a
> populated supply–use table exist — the decisive question for RQ2.3."

All three are in [00-background/](../00-background/), have been since 13 August, and are large enough
to be the real thing:

| File | Size |
|---|---|
| `MMAF-2022-Ocean-Accounts-of-Indonesia-Gili-Matra-Pilot-Study.pdf` | 37 MB |
| `MMAF-2022-Report-Ocean-Accounts-Development-in-Indonesia.pdf` | 17.8 MB |
| `MMAF-2022-Roadmap-Preparation-Indonesia-Ocean-Accounts.pdf` | 5.8 MB |
| `BPS-2023-Gili-Matra-ocean-accounts-SEEA-Manila.pdf` | 0.8 MB |
| `BPS-2023-ocean-accounts-in-Indonesia-SEEA-Manila.pdf` | 5.0 MB |
| `-2023kepmenkp044_1677210577.pdf` (Kepmen KP 44/2023) | 1.7 MB |
| `Rahayu-2024-e125578.pdf` (Saleh Bay MBSU) | 0.7 MB |
| `Gacutan-2022-ocean-accounting-coastal-lake-OneEcosystem.pdf` | 0.7 MB |
| `SEEA-EA-2021-final-2024ed.pdf` | 6.3 MB |
| `Bogor_Strategic_Action_Plan_2026...pdf`, `PermenKP-18-2025-Renstra-KKP...pdf`, `IDEEA-Defining-Complete-Sequence-National-Ocean-Accounts.pdf` | — |

CLAUDE.md now states the rule explicitly: *"Any finding that reasons from the absence of either source
is unsafe on that point and must be re-checked against the primary document."* Every one of the
following v2 claims reasons from that absence, and each is quoted from the PRD:

- "no normalised, reference-condition condition account was found for any Indonesian site" (§6)
- "**Extent** is the only account type with a verified opening/change/closing compilation" (§6)
- "34 dashboard-selectable provinces and one documented published compilation" (§6, mandated at every
  point of use)
- "Monetary values are **benefit-transferred**" (§6)
- "Ecosystem coverage is mangrove, seagrass and coral reef only" (§6)
- "cell-boundary nesting … is **asserted by GOAP, not evidenced**" (§6)
- the entire §4 inventory and every maturity tag in it

**Why this is blocking rather than a to-do.** The whole point of the tier-1 build was that the IBEI's
own documents replaced findings-based reconstruction, and it worked — it overturned four findings-based
claims in one pass (weights, imputation, Rinaldi, the 36/44 denominator). There is no reason to expect
the accounts side to survive the same treatment intact, and the paper's recommendation rests on it. A
reviewer does not need to spot this: the PRD's own §8 evidence table has a column that reads
"Sufficient as a research aid" against the paper's central factual base, next to eleven rows of
folio-located primary citation on the other side of the same mapping.

**Fix.** Build a **tier-2 corpus over the accounts side** before drafting §§4–5, on the same standing
rules as [BRIEF-standing-rules.md](../05-rag/BRIEF-standing-rules.md): verified page ranges, verbatim
`content`, maturity tag per datum, folio locators, conflicts preserved. Minimum read plan, in priority
order, and the first two are the ones that decide the paper:

1. **Gili Matra Pilot Study** — does it tabulate extent by *cover class* (the 50–100% threshold the
   IBEI asks for), or extent in hectares by ecosystem type only? Is there a condition account, and is
   it normalised or raw? Is there a supply–use table?
2. **Ocean Accounts Development Report** — account types actually compiled, spatial units, vintages,
   and whether the national 2018/2021 extent series is documented there.
3. **BPS 2023 Manila presentations** ×2 — the only BPS-authored account material; bears directly on
   §6's custodianship condition and on whether anything is on a path to (a).
4. **Kepmen KP 44/2023** — the institutional claim in §6 (institutionalised at MMAF, not BPS) is
   currently second-hand from a finding, and the decree is on disk.
5. **Rahayu et al. 2024** — the 10 m vs 25 m MBSU comparison, already required reading in §12.
6. **Roadmap** — for §6's conditions precedent and §7's forward register.

Do not draft §4 or §5 until items 1–2 are read. Everything else in the PRD can proceed in parallel.

## F2 — Claim 3, the paper's originality, is verified on one side only.

Claim 3 says indicators 19–21 are *definitionally matched* to account output because the IBEI asks for
"the percentage of area with 50–100% live cover or canopy density per province", not for a normalised
reference-condition index. **The IBEI half of that is solid** — join table rows 19–21 and SIRUSA vars
19–21, both tier-1. **The account half is unverified.** Whether any Indonesian ocean-account output
tabulates cover-class percentages by province is exactly what F1's item 1 answers, and the PRD asserts
the match as a contribution claim rather than as a hypothesis with a verification gate.

Three outcomes, and the paper is different in each:

| If the Gili Matra pilot reports… | Claim 3 becomes | Consequence for the paper |
|---|---|---|
| Extent by cover class (e.g. 0–25 / 25–50 / 50–75 / 75–100) | **A direct match.** Rebinning to a 50–100% threshold is arithmetic | Claim 3 stands as written; strongest version of the paper |
| Extent by ecosystem type, condition mapped as a continuous density or index | A **derivable** match requiring reclassification | Claim 3 survives but weakens to "one processing step away", and §5 must specify the step |
| Presence/absence or ecosystem-type extent only | **Refuted** | Tier A loses indicators 19–21, which is most of it, and the paper's near-term mapping shrinks to indicator 24 and possibly 27 |

**Fix.** Restate claim 3 as conditional until item 1 is read, and add a DoD gate: *"claim 3 verified
against the Gili Matra pilot's own condition tabulation, or restated at the derivable/refuted level it
supports."* Also check the reverse direction, which the PRD does not mention at all: **whether the
IBEI's current published values for 19–21 come from an account-compatible source or from something
else entirely.** If BAPPENAS already sources coral cover from KKP's reef monitoring at a different
threshold, the "match" is to a slot that is already filled, and the argument shifts from supply to
*improvement of provenance* — still a good argument, and the paper's actual thesis, but a different
sentence.

## F3 — "Facilitate and streamline" is the title claim and the PRD offers no evidence for it.

§9 asserts four operational gains: five data requests become one production run; provincial figures
become reproducible and revisable; district figures come free; imputation load falls. **None is
evidenced anywhere in the PRD**, and §11 concedes that compilation cost is absent from the public
record at any site, so the efficiency claim cannot be costed either.

A hostile reviewer will put it bluntly: this is a paper about streamlining a process, containing no
measurement of that process before or after.

Two honest responses, and the paper needs both:

1. **Reclassify the claim.** It is an *architectural* claim, not an efficiency measurement: one
   production run with one provenance chain replaces five independent sourcing decisions. Say
   "structural" and drop any implication of measured effort saving. The word "streamline" can stay in
   the framing but not in a results sentence.
2. **Supply the one quantification that is available.** SIRUSA gives each of the 44 variables its own
   definition and source pattern; the join table gives each its constituent data items. Count them:
   how many *distinct* publications or producers does the current environmental sub-pillar draw on,
   versus one account compilation? That is checkable from tier-1 today and it is the minimum
   quantitative content the claim needs. Note the constraint the evidence pack records: **all 44 rows
   carry `stated_producer: not_stated`** — Tabel 1 prints no producing-agency column, and SIRUSA names
   producers only collectively for the whole activity ("Publikasi KKP dan BPS"). So the count must be
   over *constituent data items and their named source publications*, not over inferred producers, and
   the PRD must stop implying per-indicator agency attribution it cannot support.

## F4 — Tier A is called "can serve now" and by the PRD's own §6 rules nothing can serve now.

§5's title is "indicators the existing accounts can serve **now**". §6 mandates that every Indonesian
account output is tag (b), that exactly **one** province has a documented published compilation, that
the sole closing year is 2021, that there is no revision policy and no BPS work-programme entry, and
that "overstating account maturity is the fatal error for this paper".

Both cannot be true. A tag (b) pilot in one province cannot serve an annually reported official
statistic for 38 provinces, and a reviewer who reads §6 before §5 will say so on the first page.

**Fix.** Rename and re-scope Tier A to what the evidence supports: **demonstrated at pilot scale**, not
available now. Then the tier structure becomes honest and, incidentally, better:

- **Tier A — demonstrated:** compiled at one or two sites, with the method shown to work and the output
  shown to be IBEI-compatible (subject to F2).
- **Tier B — compilable:** reachable with existing TG method and existing Indonesian capability, not
  yet done at national scale.
- **Tier C — additive:** what accounts could let the index measure that it currently cannot.

That also removes the §5/§6 contradiction without losing anything the paper wants to say.

## F5 — The 7.6% figure is honest and the PRD never answers the question it invites.

§4 tells the reader that the account-addressable share of the composite is ~7.6%, and ecosystem
condition ~2.3%. Good — burying it would be worse. But the obvious next question is never answered:
**why would anyone compile national ocean accounts to improve the production of 7.6% of one index?**

The answer is available and the PRD half-states it as a framing constraint rather than as an argument:
accounts are compiled for their own statutory and analytical purposes, so IBEI supply is a **marginal
co-benefit at near-zero marginal cost**, not a business case in itself. That is a defensible and
genuinely useful claim — and it is the paper's real thesis. It should be the thesis's second sentence,
not a constraint in §6. As written, §2's thesis reads as though better IBEI compilation justifies the
accounts, which is both weaker and closer to the subordination CLAUDE.md's framing boundary forbids.

## F6 — Claim 6 is index-design critique in a paper that promised not to do that.

Claim 6 has two parts. **Keep the first:** sub-pillar H is solar and hydropower, 50.0% of the
environment pillar, therefore not marine and therefore not an account target. That is necessary — it
explains an exclusion in the mapping, which is the paper's job.

**Cut or footnote the second:** the observation that two coastal-village sanitation counts outweigh all
three ecosystem-condition variables roughly three to one. It is true, it is from published weights, and
it is rhetorically satisfying — which is the problem. It does no work in the mapping, and in a paper
whose §6 says "not an attack on either institution", a three-to-one comparison inside a sub-pillar
named for marine resource quality will read as one. The archived v1 existed to make points like this;
v2 does not need it. If it stays, it stays as a footnote with no adjective.

## F7 — The PRD's two central quantitative artefacts sit on opposite sides of the unresolved pillar conflict.

§6 requires the article to declare its pillar locus. §4's weight arithmetic then uses the **three-pillar**
Tabel 4/5/Gambar 11 figures, while the join table the mapping is built on propagates the **four-pillar**
Tabel 1 labels (the evidence pack says so explicitly, and marks rows 15–18 with ‡).

This is benign but must be stated, not left for a reviewer: **the conflict is confined to indicators
15–18**, which sit in the Economy pillar under one locus and an Enabler pillar under the other. Every
Tier A indicator (19–21, 24, 27) is in the Environment pillar under both loci, so the §4 arithmetic is
unaffected. Say exactly that, once, in §2 — it converts a latent inconsistency into a demonstration of
care.

## F8 — §8's evidence map routes the drafter to eleven part files when a purpose-built pack exists.

[05-rag/ibei-evidence-pack.md](../05-rag/ibei-evidence-pack.md) — 158 KB, built mechanically from the
schema and join table, verbatim bodies with `chunk_id` and locator, explicitly designed so "a
downstream agent reads this one file instead of querying the schema per indicator". The PRD does not
mention it. §8's per-slice routing is still right for targeted checks, but the pack should be named as
the default drafting source, with the part files as the fallback for verification. It also carries the
`stated_producer` finding in F3 and the ‡ marking in F7, both of which the PRD currently lacks.

## F9 — Smaller findings

- **Word budget is optimistic.** 9,000–10,000 total, with §2 at 1,300 carrying eight documented
  symptoms, §3 at 1,000 establishing both SEEA-EA structure *and* "compilation infrastructure" as a
  concept, and §§5+7 at 2,900 carrying two mapping tables. Expect 11,000. Pre-commit the compression
  order now: §3 down to 800 by assuming SEEA literacy, §8 down to 700, and §2's symptom list moved
  partly into Table 1's rows.
- **Venue and deliverable are mismatched.** A paper whose payload is two mapping tables and a
  conditions register fits Ocean & Coastal Management or Environmental and Sustainability Indicators
  better than Marine Policy, whose fit is with the statutory framing. Deferring the choice is fine, but
  the PRD should record that the table-heavy structure needs trimming for Marine Policy specifically.
- **DoD item is too blunt.** "No surviving 36/44 language" is right for register coverage and wrong if
  the article ever touches finding 03 round 2's scored set, which was 36 of 44 *scoreable*. Make it:
  the register is 44; any 36 refers only to round 2's scoreable subset and must say so.
- **No verification gate is specified as a gate.** The workspace has `citation-checker` and
  `claim-ledger`; §8 mentions a citation-checker pass in passing. Make it a DoD line with the skill
  named and the input files stated, or it will not happen.
- **§7.1's social-pillar row is the right call and should be louder.** Stating that TG-3.5/3.12/3.13 are
  Emerging or Planned and that BPS household statistics already serve 31% of the index better than any
  account would is the single most credibility-buying sentence in the PRD. Put it in the abstract.

## What is right and should not be touched

- The reframe itself. Compilation infrastructure is the correct frame, it matches CLAUDE.md's own
  framing boundary, and it survives every finding above.
- §2. Entirely tier-1 sourced, assembled nowhere else in the record, and the strongest section in the
  paper. Nothing in this review touches it.
- §4's arithmetic, with its loadings-vs-normalised caveat, and the decision to state the ~2.3% / ~7.6%
  figures early.
- The Tabel 7 engagement in two sentences, and the coral +0.41 reconciliation.
- §7's TG mapping with badge and status quoted, and the TG-5.1 reciprocal route.
- §13's carried/not-carried ledger, and archiving v1 rather than deleting it.

## Required sequence before drafting

1. Build the **tier-2 accounts corpus** (F1), minimum items 1–2, on the tier-1 standing rules.
2. Resolve **claim 3** against the pilot's own condition tabulation, and restate it at whatever level
   survives (F2).
3. Apply the **cheap textual fixes**: Tier A renamed (F4), marginal-co-benefit thesis sentence (F5),
   claim 6 part two footnoted (F6), pillar-locus scope stated (F7), evidence pack named (F8), DoD lines
   corrected (F9).
4. Then draft §5 and §7.

Items 1 and 2 are the whole risk. Item 3 is an hour.

## What I did not verify in this review

- I did not open any file in `00-background/`. F1's severity rests on the files' presence, names and
  sizes, plus finding 02 §9's own statement of what they would resolve — not on their contents. It is
  possible they do not answer item 1; that would itself be a finding, and it would still have to be
  established by reading them.
- I have not re-read finding 02 in full, only grepped it for absence-reasoning. Other claims in it may
  rest on the same gap.
- The word-count estimate in F9 is judgement, not measurement.
- I did not assess whether the tier-2 build is feasible within this project's constraints beyond noting
  that every file named is on disk and that CLAUDE.md records clean text layers at ~1,500 characters
  per page across the MMAF reports, so no OCR is required.
