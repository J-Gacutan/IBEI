# PRD — Journal Article: Scale Reconciliation Between Ocean Accounts and Composite Blue Economy Indices

**Status:** Draft specification, not yet written. **No section is now blocked** — prompt 03 round 2
has returned and the normalisation defect is resolved. Drafting order per §4.
**Date:** 2026-08-13 (revised twice same day: findings 02 and 05, then finding 03 round 2)
**Evidence base:** All five findings returned —
[01](../02-research-findings/01-ibei-specification-findings.md),
[02](../02-research-findings/02-ocean-accounts-inventory-findings.md),
[03](../02-research-findings/03-mapping-and-reconciliation-findings.md),
[03 round 2](../02-research-findings/03-mapping-and-reconciliation-findings-round2.md),
[04](../02-research-findings/04-institutional-pathway-findings.md),
[05](../02-research-findings/05-precedent-and-counter-case-findings.md).
**Finding 03 round 2 supersedes round 1 on mapping and normalisation.** Where they conflict, round 2
governs: it was run against finding 01's real register and finding 02's verified inventory, which
round 1 did not have.
The article was originally scoped so that the then-missing prompts 02 and 05 were not
load-bearing. Both have now returned and both are *confirmatory* rather than corrective: the
scoping decisions in §8 stand, but the article can now make two claims it previously had to
withhold — an empirical statement of Indonesia's account maturity, and a comparative statement
that direct substitution has no durable international precedent. §8 records what changed.

---

## 1. The problem the article addresses

Ecosystem accounts under SEEA-EA are spatially explicit by construction: they are built on grid
cells (in Indonesia, Marine Basic Spatial Units) and maintain stock–flow identities across an
accounting period. Composite policy indices are administratively explicit by construction: they
score jurisdictions, one number per unit per year, on a bounded dimensionless scale.

A widespread assumption in ocean and environmental policy — visible in Indonesia's own concept
note, and in the broader "accounts should feed indices" argument made across GOAP and SEEA
programmes — is that the first can be poured into the second, and that the constraint on doing so
is data coverage. Build the accounts out to national coverage, the reasoning goes, and the index
gets a rigorous evidence base.

The article's claim is that coverage is not the binding constraint. The transformation from a
spatial stock–flow account to an administrative composite score is **lossy in specific,
characterisable ways**, and several of those losses destroy exactly the diagnostic capability the
integration was meant to deliver. Some are irreducible; some are reducible only through design
choices that index constructors do not currently make.

## 2. Thesis

> Compressing spatially explicit ecosystem accounts into administrative composite indices incurs
> **five** distinct classes of information loss — spatial, boundary, temporal, compensatory, and
> architectural — that are not remedied by improving account coverage, and that in combination invert
> the sign of the policy signal the index is designed to produce.

The strong form of the last clause is the article's most publishable element: a province can
deplete natural capital to generate economic output and see its composite score **rise**. That is
not a data-quality failure. It is a structural property of compensatory aggregation applied to
pillars that are causally coupled.

**The fifth class is new to this revision and is the most consequential change finding 03 round 2
makes.** *Architectural* loss is the effect of inserting an account-derived variable into a
**variance-weighted** composite. It is distinct from compensatory loss, which concerns how existing
scores offset one another; architectural loss concerns what happens to the index's own weighting
structure when new data arrives. Under three-stage PCA the weights are derived from the covariance
matrix, so adding an indicator does not add a term — it **rotates the eigenvectors and reweights
every other indicator in the index**, breaking comparability with every previously published score.
Three corollaries, all from round 2:

- A near-zero-variance signed variable (net extent change) attracts an *unstable* weight, and the
  weights already shift year to year.
- Under partial coverage, mean-substitution imputation sets the imputed provinces to Z = 0, which
  crushes the indicator's variance and drives its PCA weight toward zero — **the index
  mathematically suppresses the one province that actually has an account**. Better data is not
  merely wasted; it is deleted by the aggregation.
- Because weights track variance rather than policy priority, the environmental pillar's weight
  *falls* when provinces converge environmentally. The index rewards disparity and penalises
  consensus, independent of performance.

This class is also the strongest support for the thesis, because it is the one place where coverage
makes things **worse rather than better**: every newly compiled province changes the covariance
matrix again. Argue it in §7 alongside compensability, or give it a short §7b — decide at draft
stage, but do not fold it into compensatory loss, which is a different mechanism.

## 3. Contribution claims

State these explicitly in the introduction; each must be defensible from the evidence in §7.

1. **A typology of loss** in account-to-index transformation — spatial aggregation, jurisdictional
   clipping, vintage mismatch, compensatory masking, and architectural reweighting — that is
   framework-general, derived from the structural properties of SEEA-EA and of composite index
   construction rather than from Indonesian particulars. The fifth class generalises to any
   **data-driven-weight** composite (PCA, factor analysis, DEA), which is a large and growing share
   of official composite indices; state that scope explicitly, since it is what makes the class
   framework-general rather than an IBEI quirk.
2. **A demonstration that grid-resolution choice propagates into rank order.** The Saleh Bay
   comparison of 10×10 m against 25×25 m MBSU designation, under both dominance and hierarchy
   methods, shows that resolution changes extent error materially. Where provinces compile at
   different resolutions, the index codifies heterogeneous error into a comparative ranking.
3. **A normalisation-pathology argument specific to signed change variables — now settled, and
   stronger than the version this PRD originally specified.** The operative function is **Z-score
   standardisation inside three-stage PCA**; min–max applies only to the final 0–100 rescale. The
   pathology is therefore not band compression but **error amplification**: net extent change is
   signed and clusters near zero across provinces, so the cross-provincial standard deviation is
   small, and dividing by it inflates mapping error into a large standardised signal. Round 2's
   framing is the one to use — under min–max a 10 ha classification error in a 10⁶ ha range is
   negligible; under Z-score into PCA the same error is a large fraction of the standard deviation
   and propagates into the *weights*, not just the score.
   Present both functions explicitly and say which the IBEI uses. Two reasons: it forestalls the
   obvious reviewer objection that the pathology is an artefact of one normalisation choice, and it
   is what makes the claim framework-general rather than Indonesia-specific.
4. **A statement of the stock–flow substitution trap — now with direct evidence that the IBEI has
   already fallen into it.** Because signed change normalises badly, constructors substitute
   point-in-time stock proxies, which rewards historical endowment (long coastlines, large area)
   rather than current management performance. Round 2 shows the substitution has already happened
   and went further than stock proxies: of the nine environmental-pillar indicators, **three are
   policy outputs (G4, G5, G9), one is a policy flow (G6), two are pressures (G7, G8)**, and only
   G1–G3 are condition measures at all. Finding 01's §8.3 records the same criticism independently
   ("reliance on output proxies over actual outcomes"). The trap is not hypothetical; it is the
   observed design.
5. **A constructive alternative.** The diagnostic BAPPENAS actually wants — surfacing provinces
   that buy growth with natural capital — is better served by a non-compensatory presentation:
   cross-tabulated satellite tables, or an explicit ratio of value added to ecosystem asset
   depreciation. The article should name this as the recommendation, not merely critique the index.
   Finding 05 lets this be sharpened from a proposal into a **named architecture with working
   precedents**: loose coupling — shared KBLI/ISIC definitions, shared spatial units, parallel
   publication on a common dashboard, and no indicator substitution — as implemented in the EU Blue
   Economy Observatory and South Africa's Ocean Economy Satellite Account.
6. **A comparative claim, now available:** *direct substitution of SEEA account outputs into a
   sub-national composite scorecard has no durable precedent in official statistics.* Finding 05
   surveys the EU, China, Canada, South Africa, the UK, the Ocean Health Index and World Bank
   WAVES and finds four integration mechanisms in actual use — dashboard integration,
   macroeconomic aggregation, satellite accounting, and direct indicator substitution — of which
   only the fourth matches the proposed IBEI pathway, and only the fourth is unattested. This
   converts §8's generalisation from purely analytical to analytical-plus-comparative. It must be
   stated as an absence of found precedent, not as proof of impossibility (see §6).

7. **A measurement-target mismatch claim, new from round 2 and cleanly separable from the loss
   typology.** The losses in claims 1–4 all assume the account and the indicator are trying to
   measure the same thing and the transformation degrades it. Round 2 shows that for most of the
   register they are not measuring the same thing at all: the index asks predominantly for **policy
   outputs and pressures**, while ecosystem accounts supply **states and flows**. For G4 and G5
   (counts of coastal villages with waste disposal and sanitation facilities) no ocean account offers
   any pathway whatever — not a data gap, a category difference. This matters because it is the one
   finding that limits the article's own argument: where the mismatch is a measurement-target
   difference, better accounts are simply the wrong instrument, and no amount of index redesign
   changes that either. Say so — it is more credible than a critique in which every problem happens
   to point the same way.

Claims 5, 6 and 7 are what keep the article from being purely negative or one-directional. Claim 6
was the largest gain from findings 02 and 05; **claims 3 (now settled), 7, and the fifth loss class
in §2 are the gains from round 2**, and the fifth loss class is the one to put in the abstract.

## 4. Article structure

Target 10,000–11,000 words excluding references. The allocations below sum to ~11,000, which is at or
slightly over the practical ceiling for *Marine Policy* — the fifth loss class (§7b, 900 words) is
worth it, since it is the article's most original contribution, but something has to give. In
priority order for compression: §5 boundary loss (900 → 700, the statutory detail can be a footnote),
§4 (the Saleh Bay comparison can move entirely into Table 2's caption or a small table), and §6
(700 words suffices once the lag figures are tabulated). Do not compress §7b, §8, or the mechanism
typology in §2. If the article still runs long, the honest alternative is to move §5 and §6 into a
single "boundary and vintage" section — they are the two least original of the five classes.

| § | Section | Words | Core content |
|---|---|---|---|
| 1 | Introduction | 900 | The accounts-feed-indices assumption; why coverage is assumed to be the constraint; thesis statement; contribution list (now including claim 6) |
| 2 | Two measurement logics | 1,300 | SEEA-EA structural properties (spatial explicitness, stock–flow identity, physical/monetary separation) against composite index properties (normalisation, weighting, compensability). Establish the incompatibility analytically, before any Indonesian data. **New (finding 05):** close with the four-mechanism typology — dashboard integration, macroeconomic aggregation, satellite accounting, direct indicator substitution — and the observation that international practice occupies the first three |
| 3 | Case and method | 900 | Indonesia as worked example; why it is well-suited (both frameworks mature enough to compare, IBEI methodology partly recoverable); explicit statement of reconstruction limits (§6). **New (finding 02):** the maturity statement moves here as a factual precondition — every Indonesian ocean account is tag (b), none is an official statistic, one province has a documented published compilation |
| 4 | Spatial loss | 1,300 | MBSU-to-province aggregation; grid-resolution sensitivity (Saleh Bay: 10 m = 36.3 M cells vs 25 m = 5.8 M cells; dominance designation more accurate, larger-grid-plus-hierarchy far cheaper); heterogeneous-error codification; offsetting-change netting to false stability. Finding 02 adds that **no national standard grid has been adopted in any obtained document**, so heterogeneous resolution is the expected state, not a hypothetical |
| 5 | Boundary loss | 900 | The 12-nautical-mile provincial limit under Law 23/2014; ecological arbitrariness; bifurcated ecosystems; overlapping claims in narrow straits; absence of any codified clipping rule. Finding 02: cell-boundary nesting across administrative, WPP and PKKPRL frames is *asserted by GOAP, not evidenced* in any obtained document |
| 6 | Temporal loss | 1,000 | Compilation lag against annual reporting periodicity; the mixed-vintage problem and its specific consequence — economic expansion registers years before its ecological cost. **Substantially strengthened by finding 02:** one closing year (2021) exists in the public domain; reference-year-to-dashboard lag is ~4 years (2021 → July 2025); the extent module is five years stale at access date; no revision policy and no compilation entry in the BPS statistical work programme. The section can now state that the accounts *cannot presently* feed an annually reported index, as an observed fact rather than a projection |
| 7 | Compensatory loss | 1,200 | Aggregation architecture; the masking effect; why a composite is the wrong instrument for a trade-off diagnostic; the sign-inversion result. Round 2 removes the hedge — compensability is verified, not inferred. **New:** sub-pillar H (renewable energy) carries the same ~18% as G (resource quality), so half the "environmental" pillar measures energy transition, not ecosystem health; a province can deplete marine natural capital and hold its environmental score by commissioning coastal renewables. Handle the finding 01 / finding 05 conflict over weighting form explicitly (§6) |
| 7b | Architectural loss | 900 | The fifth loss class (§2). Variance-derived weights; the reweighting effect on insertion; imputation collapse under partial coverage (mean substitution → Z = 0 → PCA suppresses the one province with a real account); weights falling as provinces converge. The only section where *more* coverage makes the problem worse, which is why it belongs immediately before §8 |
| 8 | What coverage does and does not fix | 1,100 | The counterfactual: full national coverage removes partial-coverage selection bias but leaves §§4–7b largely intact. This section is the article's hinge. **New:** the comparative leg — where accounts *have* been fed into instruments durably (EU, South Africa, UK, Canada), the mechanism was never composite substitution; where substitution-like penalty scoring was attempted at sub-national scale (China's Green GDP), it was abandoned for reasons orthogonal to coverage. **Also new and essential:** the two-constraints reconciliation below, without which round 2's derivability result reads as contradicting the article's own thesis |
| 9 | Design implications | 1,100 | Non-compensatory alternatives; where an index remains appropriate; minimum conditions under which account-derived indicators can legitimately enter a composite. **New:** loose coupling stated as the recommendation, with its four components (shared definitions, shared spatial units, parallel publication, no substitution) and its precedents |
| 10 | Conclusion | 500 | Includes the follow-on agenda in §10 below |

**Section 8 is the hinge and should be drafted first.** It is what distinguishes this article from
a national case study: it converts an Indonesian finding into a general claim about a class of
integration proposals.

### The two-constraints reconciliation — read before drafting §8

Round 2 creates an apparent contradiction with the thesis, and a reviewer will find it immediately.
The thesis says **coverage is not the binding constraint**. Round 2's matrix says that for nearly
every indicator, the binding constraint named in the table *is* compilation maturity — no satellite
account, no reference-condition baseline, no supply–use table. Both are true, and the article must
distinguish them in the introduction and again in §8:

- **Maturity is the binding constraint on derivability today.** Nothing can be sourced from
  Indonesian ocean accounts at present. That is a data-status finding, and it is the trivial one.
- **Structure is the binding constraint on usefulness ever.** Grant every maturity condition —
  wall-to-wall national compilation, official-statistics status, synchronised vintages — and §§4–7b
  remain. The spatial, boundary, compensatory and architectural losses are properties of the
  transformation, not of the state of compilation.

The sharpest formulation, and the one that should carry §8: **the maturity constraints are the ones
everyone is working on, and they are the ones whose removal changes least.** Architectural loss is
the proof case, because removing the coverage constraint province by province is precisely what
triggers it.

A second distinction the article must maintain: round 2's "None" ratings have **two different
causes**, and collapsing them would be a serious error. Some are maturity gaps that compilation could
close (A1, C4–C6, G1–G3). Others are **measurement-target mismatches that no compilation closes**
(G4, G5, C1–C3, H, J, K — village infrastructure counts, freight and passenger volumes, energy,
education, health). Only the first class is evidence about Indonesia's data status; only the second is
evidence about instrument fit. Table 2 must separate them (see §5).

## 5. Figures and tables

Four maximum; each must carry an argument the text cannot make as efficiently.

- **Figure 1 — The transformation and its losses.** Schematic: MBSU grid → clipped to jurisdiction
  → aggregated → normalised → weighted → composite score, with the four loss classes annotated at
  the step where each occurs. Load-bearing for the whole article; worth real design effort. Source
  material exists in [oa_ibei_mapping_diagram.html](../03-outputs/oa_ibei_mapping_diagram.html)
  but should be rebuilt to this argument rather than adapted.
- **Figure 2 — Architectural loss, respecified.** The original spec (min–max band compression with
  and without a restoration outlier) illustrates the wrong pathology now that the normalisation
  function is settled. Replace with the **reweighting effect**: PCA-derived weights across a set of
  indicators before and after inserting one account-derived variable, showing that every weight
  moves. Optionally a second panel showing the same insertion under partial coverage with
  mean-substitution imputation, where the new indicator's own weight collapses toward zero. Synthetic
  and clearly labelled as illustrative — a mathematical property, not an empirical claim, and it must
  not be presented as observed data or as a reconstruction of any published IBEI iteration.
- **Table 1 — Loss typology.** **Five** rows now: loss class, mechanism, whether coverage remedies
  it, whether index design can remedy it, evidence source. Effectively an abstract of the article.
  The architectural row is the only one where the coverage column reads *worsens it* rather than *no*
  — make sure the column is worded to permit that answer, since it is the table's most striking cell.
- **Table 2 — Derivability by indicator group and cause of non-derivability.** Rebuilt from finding
  03 **round 2**'s matrix. Round 2's own table is per-indicator with a single "binding constraint"
  column; the manuscript version must differ in two ways:
  - **Group rows, not 36 indicator rows** — sub-pillar level (A, C, D, G, H, J, K), since the
    article's claim is about classes of indicator, and a 36-row table invites the reader to audit
    individual ratings the evidence base cannot fully support.
  - **Split the cause column into two:** *maturity gap* (compilation could close it) versus
    *measurement-target mismatch* (compilation cannot). This is the distinction §4's reconciliation
    note turns on, and round 2's table does not make it. Without the split the table reads as
    "Indonesia lacks data", which is the weaker and less interesting claim.

  Report the distribution — 0% Full, 2.8% Partial, 8.3% Minimal, 88.9% None — **only** with the
  36-indicator denominator in the same sentence, and only as a secondary observation. See §8 for the
  caveat that governs how this is presented.
- **Table 3 — Integration mechanisms and their precedents.** New, from finding 05 §2. Columns:
  mechanism, exemplar jurisdiction(s), what is transferred, durability, whether the output is a
  unitless score. Its argumentative work is to show that the three attested mechanisms all preserve
  dimensionality and the one unattested mechanism is the one that does not. This displaces the
  fourth slot; if the four-figure ceiling is binding, drop Figure 2 rather than this table, since
  Figure 2 demonstrates a property the text can state algebraically while Table 3 carries evidence
  the text cannot compress.

Note the ceiling is now five items against a stated maximum of four. Decide at draft stage; the
ranking by load-bearingness is Figure 1 > Table 1 > Table 3 > Table 2 > Figure 2.

## 6. Mandatory framing constraints

These follow the workspace conventions in [CLAUDE.md](../CLAUDE.md) and are not optional.

- **The IBEI methodology is partly reconstructed, not published, and this limitation is permanent
  for this project.** Weights, the multi-stage PCA architecture, and several indicator definitions
  were recovered from SIRUSA metadata, policy papers, and training decks — not from an official
  methodological note. **Direct engagement with Indonesian government agencies is out of scope**, so
  there is no data-request or interview route to closing it. The article must state this in §3 as a
  standing limitation rather than a pending task, and attach a confidence level wherever a
  reconstructed figure is used. Reviewers will find it; disclosing it prominently, and being precise
  about which claims depend on it, is the only available mitigation — and it is a reasonable one,
  since an argument about the *structure* of composite aggregation survives uncertainty about exact
  weights in a way an empirical scoring claim would not. Frame it that way in §3: state which
  results are weight-independent (the four loss classes, compensability, the sign of the inversion)
  and which are weight-dependent (its magnitude, the identity of offsetting pillars), and confine
  claims to the former.
- **Two index editions exist.** Finding 01 documents a 35-indicator first edition (2022–23) and a
  44-indicator second edition (2024–). The article must be explicit about which it analyses and
  must not silently blend them.
- **Maturity tagging throughout, now with a verified inventory behind it.** Finding 02 settles this
  and tightens it: **every Indonesian ocean account output sits at tag (b)**, experimental/pilot.
  There is no BPS ocean or marine ecosystem account, no work-programme entry, no revision policy.
  The 2022 MMAF outputs are labelled by GOAP itself as preliminary consultation drafts, and the
  national NSDL dashboard is a ministry product, not a statistical release. Specific formulations
  the article must use:
  - Dashboard *selectability* (34 of 38 provinces) is not compilation. Provinces with a documented,
    published compilation: **one** (Nusa Tenggara Barat, via Gili Matra and Saleh Bay). Both numbers
    should appear together every time either is used; quoting 34 alone overstates maturity and
    quoting 1 alone understates the national footprint.
  - Ecosystem **extent** is the only account type with a verified, fully structured
    opening/change/closing compilation. **Condition** has been observed and mapped but no
    normalised, reference-condition-based condition account was found for any Indonesian site —
    so a "Full" derivability rating for habitat condition is unsupported and Table 2 must not carry
    one.
  - Monetary values are **benefit-transferred** (from Bohol, the Marianas, Mexico, Gazi Bay,
    Bintuni Bay) and therefore not the exchange-value basis SEEA-EA requires. Any monetary
    derivability claim inherits this.
  - Ecosystem coverage is **mangrove, seagrass and coral reef only**.
  Overstating maturity is the precise error the article exists to correct; committing it would be
  fatal.
- **Two corrections from finding 02 that must propagate.** (i) The national dashboard series is
  **2018 opening / 2021 closing**; only Gili Matra is 2015/2021. Any text implying a national 2015
  baseline is asserting a series that does not exist. (ii) Ocean accounting is institutionalised at
  **MMAF, not at BPS** (Kepmen KP 44/2023 cross-agency team; BPS is a participant, not the
  compiler of a statistical release) — which is itself the binding constraint on any indicator
  requiring annual official reporting, and belongs in §6 as well as §3.
- **Finding 05 is a research aid of lower evidentiary grade than the others, and must be handled as
  such.** It is argumentatively valuable and its precedent survey is the article's new comparative
  leg, but it contains claims the manuscript cannot carry unverified:
  - Its "5% empirical accounting data, 95% proxy" figure is illustrative, not sourced. Do not use
    it; use finding 02's 1-documented-province / 34-selectable framing instead.
  - It describes the IBEI as **additive with an arithmetic mean**. Findings 01 and 03 (both rounds)
    document a **three-stage PCA** architecture with partly reconstructed weights. The accounts agree
    on what the article needs — additive linear combination at every stage, no geometric aggregation,
    no non-compensatory thresholds, therefore full compensability, which round 2 restates as
    **verified rather than inferred** — and disagree only on the weighting scheme. Present that as a
    partial conflict: §7 derives the sign-inversion result from PCA-weighted linear aggregation as
    findings 01 and 03 document it, with reconstruction confidence attached, and notes that finding
    05's equal-weight characterisation is unverified. The magnitude of the inversion and the identity
    of the offsetting pillars are weight-dependent and must not be quoted from finding 05.
  - Its verdict — that direct integration is "not worth doing" — is a stronger, more prescriptive
    statement than this article should make. The article's claim is that the transformation is
    lossy in four characterisable ways and that a better architecture exists; it is not a
    recommendation against a named government programme. Adopt finding 05's *mechanism typology and
    precedent survey*; do not adopt its verdict framing.
  - Every precedent cited from it (China Green GDP suspension, WAVES closeout, EU Observatory,
    South African OESA, Statistics Canada HLMI, OHI gap-filling, SEEA-EA Ch. 14 on composite
    indices) must be read at source before citation, per §7.
- **Finding 03 round 2 carries four claims that must be softened or checked before use.** The
  findings are otherwise the strongest evidence in the suite, which is why the overreaches matter:
  - **"Standard PCA mathematical properties mandate a 100% variance distribution"** (deliverable 5,
    item 3) is too strong. Loadings-derived weights sum to 100% only under a particular
    normalisation convention; a shortfall is evidence of undocumented rescaling, discarded
    components, or omitted sub-pillars — all of which are worth saying — but it is not a violation
    of a mathematical law. Write it as an unexplained 19.2% discrepancy in a slide-deck source whose
    most likely causes are enumerable, and note the Social pillar's separate 12.8%-vs-31% gap as the
    more telling anomaly, since it points at omitted sub-pillars specifically.
  - **"This effect is unbounded"** (deliverable 3, item 3) overstates the reweighting result. The
    rotation's magnitude depends on the new variable's variance and its correlation with existing
    indicators; it is not bounded by anything the constructor controls, which is the defensible
    claim. Say "not bounded by design", not "unbounded".
  - **The imputation analysis is a reconstruction**, because BAPPENAS's imputation rule is
    undocumented. Mean substitution is the most likely choice and the Z = 0 collapse follows from
    it, but the article must present it as "under the most plausible imputation rule, and BAPPENAS's
    actual rule is unpublished" — then note that the *alternatives* (k-NN, last observation carried
    forward) have their own failure modes on a single-observation indicator, so the conclusion is
    robust to the choice even though the mechanism differs. That robustness is what makes it safe to
    argue at all.
  - **The change log is partial.** It records five movements; most of the 36 indicators have no
    round-1 counterpart because round 1 scored a reconstructed 23-indicator set. Do not present it
    as a complete reconciliation, and do not describe round 2 as "revising" round 1's distribution —
    the two distributions have different denominators and different indicator sets, so they are not
    comparable quantities. The honest statement is that round 1's figure was computed on a set that
    turned out not to be the index.
  Two smaller items: round 2's G6 change-log entry contains a garbled phrase ("net gross change") —
  the substance is that the account measures net extent outcome while the indicator measures
  rehabilitation area planted, which is a genuine distinction worth making precisely. And the
  derivability ratings themselves are the researcher's judgement against §A and §B, not an
  independently verifiable quantity; present them as an assessment with stated criteria, which is
  the second reason for group rows rather than 36 indicator rows in Table 2.
- **Absence of precedent is not proof of impossibility.** Claim 6 is a negative search result over
  one research pass. Phrase it as "no durable precedent was identified in official statistics
  across the jurisdictions surveyed", name the jurisdictions surveyed, and let the analytical
  argument in §§2 and 7 carry the necessity claim. A reviewer who produces one counterexample
  should damage a sentence, not the article.
- **Not an attack on either institution.** Both the IBEI and the ocean accounts programme are
  serious, competently executed initiatives. The finding is that a particular *linkage* between
  them is structurally lossy — not that either is deficient. Tone matters for the co-authorship
  in §10 and for the article's usefulness.
- **No fabricated specificity.** No invented weights, hectare figures, or decree numbers. Where a
  number is illustrative (Figure 2), label it so.

## 7. Evidence map

| Article section | Evidence | Source | Sufficiency |
|---|---|---|---|
| §2 two logics | SEEA-EA structure; OECD/JRC composite indicator handbook; SEEA-EA Ch. 14 warning on condensing indicators | Finding 03 §6; Finding 05 §2.6; external literature | Sufficient — needs direct reading of the OECD/JRC handbook and SEEA-EA Ch. 14, not citation via findings |
| §2 mechanism typology | Four mechanisms; EU Observatory, China GEP, South Africa OESA, UK ONS, StatCan HLMI, WAVES ANS, OHI | Finding 05 §§2.1–2.2, Table 1 | Adequate — each exemplar needs one primary source read directly; do not cite finding 05's table as the authority |
| §3 case/method | Index register, editions, PCA architecture, SIRUSA recovery | Finding 01 §§3–5 | Sufficient, with reconstruction caveat |
| §3 maturity precondition | Full account inventory; 34-selectable vs 1-documented; tag (b) throughout; no BPS release | Finding 02 §§1–4, 11 | **Now sufficient — this is what prompt 02 supplied.** Gili Matra extent/value/waste figures verified against the BPS Manila presentation |
| §4 spatial | Saleh Bay grid comparison; MBSU designation methods; netting-out; no adopted national grid | Finding 03 §§4.2, 6.1; Finding 02 §5; Rahayu et al. 2024 | Sufficient — the *One Ecosystem* paper is peer-reviewed and directly obtainable |
| §4 normalisation | Z-score into three-stage PCA, not min–max; error amplification on near-zero-variance signed variables | Finding 01 §4.1; Finding 03 round 2 D2.1, D2.5 | **Defect resolved.** Cite finding 01 for the function and the OECD/JRC handbook for the property; do not cite round 1's min–max argument anywhere |
| Table 2 derivability | 36-indicator re-score; 0/2.8/8.3/88.9 distribution; per-indicator binding constraints; maturity-gap vs measurement-target-mismatch split | Finding 03 round 2 D1, D2 change log | Adequate as an assessment, not as a verifiable measurement — present at group level with stated criteria (§5, §6) |
| §5 boundary | Law 23/2014 Art. 27; strait overlap cases; nesting asserted not evidenced | Finding 03 §4.1; Finding 02 §5 | Sufficient — verify the statute text directly |
| §6 temporal | Anambas vintages (2015–17 opening, 2020/21 closing, 2022 economic); Sentinel-2/SPOT 2018 & 2021; 2021-only closing year; ~4-year lag to dashboard; no revision policy; no BPS work-programme entry | Finding 03 §5; Finding 02 §§6–7 | **Upgraded from sufficient to strong.** Finding 02 turns a projected lag problem into an observed one |
| §7 compensatory | Aggregation architecture; Sumatra empirical case; G and H both at ~18% | Finding 01 §4.4; Finding 03 round 2 D3; Finding 05 §3.1 arg. 2 | **Upgraded — compensability is now verified, not inferred.** The Sumatra study still needs direct reading; the weighting-form disagreement with finding 05 stands as a conflict (§6) |
| §7b architectural | Reweighting on insertion; weight instability year to year; imputation collapse at Z = 0; variance-weight fall on convergence; 80.8% anomaly | Finding 03 round 2 D2 (all six answers), D3.3; Finding 01 §§4.2–4.3 | **Adequate and the strongest new material, but it is analysis rather than sourced fact.** The PCA properties are standard and citable from the OECD/JRC handbook and the PCA-weighting literature; do that rather than resting on the finding. The imputation branch is a reconstruction (§6) |
| §8 counterfactual, analytical leg | Partial-coverage/MPA selection bias | Finding 03 §4.3 | Sufficient |
| §8 counterfactual, comparative leg | Absence of substitution precedent; China Green GDP abandonment (2004–09) and its political mechanism; WAVES closeout on stalled sub-national scorecards; StatCan requirement for wall-to-wall national telemetry; OHI gap-filling uncertainty | Finding 05 §§2.1, 2.3, 2.4 | **Now adequate — this is what prompt 05 supplied.** Requires the Green GDP and WAVES closeout sources read directly; the Green GDP account currently rests partly on a 2007 news item, which is thin for a load-bearing case and should be replaced with the Columbia working paper or equivalent |
| §9 design implications | Dashboard and satellite-table alternatives; loose-coupling architecture and its four components; EU and South African precedents; the five minimum conditions | Finding 03 §7.2; Finding 03 round 2 D3.4; Finding 05 §§2.5, 3.3 | **Upgraded from thin to adequate.** This was the weakest section; finding 05 supplies the architecture and round 2 supplies the minimum-conditions list. Note round 2's fifth condition (a documented imputation and weight-stabilisation policy) is unobtainable for this project, so state it as a condition, not a recommendation to seek |
| §10 follow-on | Unobtained documents; GOAP Secretariat funding gap from Mar 2026 | Finding 02 §§7, 9 | Sufficient |

**Verification obligation before drafting:** every source reached through a deep-research finding
must be read directly before it is cited in the manuscript. The findings are a research aid, not a
citable authority, and the same standard the workspace applies to
[03-outputs/](../03-outputs/) applies to them.

## 8. Research status: what the two returned findings change

Both previously missing prompts have returned. The scoping decisions below were made when they had
not, and **the conservative ones stand** — the returned findings license two additions rather than
a restructure.

**Prompt 02 (ocean accounts inventory) — returned, confirmatory and constraining.** The inventory
does not overturn finding 03's derivability reasoning; it makes the maturity ceiling on it explicit
and, if anything, lower. What changes:

- **Retained.** The article still does not lead with, or structurally depend on, the recomputed 39%
  figure or its refutation of the earlier 61% claim. Finding 02 is why: it shows the denominator
  problem is worse than a percentage can express, because 34 provinces are dashboard-selectable
  with undocumented compilation while exactly one has a documented published compilation. A single
  percentage cannot honestly summarise that distribution, so Table 2 stays at indicator-group and
  maturity-tier resolution.
- **Retained and now evidenced.** Group-level claims are robust in a way a percentage is not — and
  finding 02 supplies the group-level facts directly: extent is the only fully structured account
  type; condition exists as maps and variable panels with no reference-condition index; valuation is
  benefit-transferred and not SNA-consistent; the ocean economy satellite account is (c/d), not
  compiled; social accounts are (c) with no Indonesian application.
- **New.** §3 can now state Indonesia's account maturity as a verified precondition rather than a
  hedged aside, and §6 can state the lag problem as observed fact (2021 sole closing year; ~4 years
  to public platform; no update observed; no BPS work-programme entry).
- **New constraint.** Finding 02 corrects the assumption of a national 2015 baseline (the national
  series is 2018/2021) and removes any basis for a "Full" condition-account derivability rating.
  Both must propagate into Table 2 and §§3–4.
- **Still absent after the inventory.** No documented per-site or per-unit compilation cost — no
  staff-days, budget line, imagery cost or survey cost, at any site. Finding 02 records this as a
  genuine gap in the public record rather than a search failure. §9's "minimum conditions" argument
  therefore cannot be costed, and must say so instead of estimating.

**Prompt 05 (precedent and counter-case) — returned, and it converts the article's central
generalisation from single-legged to double-legged.** What changes:

- **Retained as the primary mode of argument.** §§2 and 7 still generalise **analytically**, from
  the structural properties of SEEA-EA and composite index mathematics. The normalisation pathology
  and compensatory masking are mathematical properties; they do not become true because other
  countries encountered them. Keeping the analytical argument primary also insulates the article
  from any single precedent being contested.
- **New comparative leg (claim 6).** The article can now also say that no durable precedent for
  direct substitution was identified across the EU, China, Canada, South Africa, the UK, the OHI
  and World Bank WAVES, and that the three attested mechanisms all preserve dimensionality. Phrase
  as a negative search result, never as proof of impossibility (§6).
- **New: the political-economy failure mode, which the article did not previously have.** China's
  Green GDP (2004–09) was abandoned not because of data coverage but because sub-national leaders
  whose advancement tracked GDP growth resisted a score that penalised them, and because the
  statistical office judged environmental valuation too immature to mix into standard accounts.
  This lands squarely in §8: it is a documented case where improving coverage would not have saved
  the instrument, which is exactly the article's thesis about coverage not being the binding
  constraint. It should be the comparative leg's anchor case — with the caveat in §7 above about
  strengthening its sourcing.
- **New: §9's repair.** Loose coupling, previously a gesture toward "satellite tables or a ratio",
  is now a specifiable four-component architecture with live implementations.
- **Now permitted, with care.** The article may say *"this class of integration has these
  properties, and where the closest analogue was attempted at sub-national scale it was
  abandoned"* — a materially stronger sentence than the earlier scoping allowed. It still must not
  say *"this has failed elsewhere"* of Indonesia's own programme, which has not been attempted.
- **Not adopted.** Finding 05's verdict framing and its unsourced quantifications (§6).

**Prompt 03 round 2 — returned, and it is the one finding that changed the article rather than
supporting it.** Three consequences, in order of importance:

- **The fifth loss class exists** (§2). Architectural loss was not in the original typology and is
  the strongest new result in the suite. It is also the only loss class for which *increasing
  coverage worsens the problem*, which makes it the best single piece of evidence for the thesis.
- **The normalisation defect is resolved** and claim 3 is stronger than originally specified: the
  operative pathology is error amplification under Z-score, not band compression under min–max, and
  it propagates into the weights rather than only the score.
- **The derivability result collapsed** from round 1's 39.1% Partial to 0% Full / 2.8% Partial /
  8.3% Minimal / 88.9% None over 36 scoreable indicators. This vindicates the original decision not
  to build the article on a derivability percentage — the figure has now moved twice, by large
  margins, on the same underlying question. Treat that instability as itself informative about how
  much weight such figures can bear, and say so in §3 rather than hiding it: the article's argument
  does not depend on the number, which is precisely the point.

Round 2 also confirms two things the article had been hedging: compensability is **verified**, not
inferred, and the environmental pillar's ecosystem sub-pillar carries only ~18% of index weight,
with renewable energy carrying the same again.

**What the follow-on now is.** The comparative study is no longer the outstanding gap — finding 05
covers its territory at reconnaissance depth. The follow-on named in §10 changes accordingly
(see §10).

## 9. Venue

Journal-agnostic as specified. Choose after a complete draft exists — the argument is stable
across these, only emphasis shifts.

| Venue | Fit | Would require |
|---|---|---|
| **Marine Policy** | Strong, and stronger after finding 05 — the venue rewards comparative institutional analysis, which the article now has | Institutional context from finding 04 as a short subsection. The §9 expansion previously listed here is now supplied by finding 05 |
| **Ecological Economics** | Strong on the methodological core, weaker on the case framing | A formalised loss metric — quantifying information loss rather than characterising it. Materially more work, and the strongest version of the article |
| **Ecological Indicators** | Direct topical fit | Same as above; empirical demonstration on real provincial data would likely be expected, which the current evidence base cannot support |
| **Ocean & Coastal Management** | Good, implementation-oriented | Foregrounding the institutional pathway from finding 04 |

Recommendation: draft to **Marine Policy** length and register, since it demands least beyond the
current evidence base, while keeping §§4 and 6 formal enough that an Ecological Economics
resubmission remains open without restructuring.

## 10. Authorship and follow-on

**Constraint: this project does not engage Indonesian government agencies directly.** No data
request, interview, or agency correspondence is available as a route, which changes what
co-authorship is for and rules out one of the reasons previously given for it.

**Indonesian co-authorship is still worth securing before drafting begins, for two reasons:**

1. **Language access** — key sources are Indonesian-only (*indeks ekonomi biru*, *neraca laut*,
   *unit spasial dasar laut*, *peta jalan ekonomi biru*).
2. **Standing** — an article arguing that a national index has a structural flaw is received very
   differently with Indonesian authorship than without it. This is a substantive point about how the
   argument will land, not a courtesy.

**No longer listed:** institutional access to the unpublished IBEI methodological documentation. It
was the strongest argument for co-authorship and it is now unavailable, so §6's reconstruction
caveat stays a limitation and cannot be converted into a strength. Plan the manuscript around that.

Candidates are therefore **academic and research institutions, not agencies** — IPB, Indonesian
marine policy and statistics researchers publishing on the IBEI (the Sumatra blue-economy-index
papers are one entry point), and non-government technical partners in the ocean accounts programme
such as Rekam Nusantara. Note that the Saleh Bay MBSU paper (Rahayu et al. 2024) already has
Indonesian and UNSW co-authors, which is the most natural existing connection. Identify candidates
during drafting of §3.

**Follow-on work.** Revised, since prompt 05 has now covered the comparative territory at
reconnaissance depth. Name these instead, in descending order of value:

1. **A depth study of the loose-coupling architecture in practice** — does the EU Blue Economy
   Observatory model actually deliver the trade-off diagnostic when the two products sit side by
   side, or does the composite score still dominate reception? This is the natural test of the
   article's own recommendation and the honest question left open by claim 5.
2. **A cost study.** Finding 02 establishes that no per-site or per-unit compilation cost exists in
   the public record for Indonesian ocean accounts. Without it, no one can price national coverage,
   which is the decision BAPPENAS and MMAF actually face. This is the most policy-useful gap in the
   whole record.
3. **A formalised loss metric** — quantifying the four loss classes rather than characterising
   them. This is also what an *Ecological Economics* submission would require (§9).
4. **Verification of the aggregation architecture and weights** if BAPPENAS ever publishes a
   methodological annex, or if an independent replication of the index from SIRUSA variables becomes
   possible. Not actionable by this project — listed so a reader with agency access knows what to
   ask for.

**Sustainability risk worth noting in §10:** the 2025 independent evaluation of GOAP records a
funding gap from March 2026 for the Secretariat that has provided Indonesia's technical support
(finding 02 §7). Relevant to any recommendation that assumes continued external technical
assistance.

## 11. Definition of done

- [ ] Indonesian co-author secured from an academic or non-government research institution, or a
      documented decision to proceed without one
- [ ] §3 states the reconstruction limits as permanent (no agency access), and separates
      weight-independent from weight-dependent results
- [ ] §8 drafted first and reviewed — the generalisation holds or the article is rescoped
- [ ] Every source cited read directly, not via a deep-research finding
- [ ] OECD/JRC handbook, SEEA-EA Ch. 14, and the Sumatra study read in full
- [ ] Law 23/2014 Art. 27 verified against the statute text
- [ ] Both IBEI editions distinguished consistently throughout
- [ ] Reconstruction limits stated in §3 with confidence levels attached at every point of use
- [ ] Figure 2 respecified to the reweighting effect, and labelled unambiguously as illustrative
- [ ] Five loss classes used consistently — architectural loss present in abstract, §2, §7b and
      Table 1, and never folded into compensatory loss
- [ ] The two-constraints reconciliation stated in the introduction and again in §8 (maturity binds
      derivability today; structure binds usefulness ever)
- [ ] Table 2 separates maturity gaps from measurement-target mismatches, at group level
- [ ] The 0/2.8/8.3/88.9 distribution never quoted without the 36-indicator denominator in the same
      sentence, and never as a headline
- [ ] §3 states that the derivability figure has moved twice and that the argument does not rest on it
- [ ] §7b's PCA properties cited to the OECD/JRC handbook and the PCA-weighting literature, not to a
      deep-research finding
- [ ] The imputation argument presented as a reconstruction, with the alternative imputation rules
      noted and the conclusion shown robust across them
- [ ] Round 1's min–max normalisation argument cited nowhere
- [ ] Every account-maturity claim tagged (a)–(d) and cross-checked against finding 02's inventory;
      no claim rests on dashboard selectability alone
- [ ] The 34-selectable / 1-documented pair stated together at every point of use
- [ ] No "Full" derivability rating for habitat condition anywhere in Table 2
- [ ] National series stated as 2018/2021; no implied national 2015 baseline
- [ ] Monetary derivability claims carry the benefit-transfer caveat
- [ ] Each precedent in Table 3 verified against at least one primary source; the China Green GDP
      case re-sourced above news reporting
- [ ] Claim 6 phrased as a bounded negative search result, with the surveyed jurisdictions named
- [ ] The finding 01 / finding 05 aggregation-form conflict presented as a conflict in §7, not
      silently resolved
- [ ] Finding 05's unsourced quantifications (the 5%/95% split) absent from the manuscript
- [ ] Compilation cost stated as absent from the public record, not estimated
- [ ] The 36/44 register denominator stated wherever register coverage is characterised
- [x] Prompt 03 round 2 returned and the normalisation function settled
- [ ] Full draft within 10,000–11,000 words
- [ ] Venue selected and formatted to its requirements
- [ ] [03-outputs/](../03-outputs/) concept note and Annex A updated or explicitly retired, so the
      superseded 61% claim is not left circulating

## 12. Remaining evidence gaps

Assessed after all five prompts and the round 2 pass returned. **Nothing now blocks drafting.** What
remains is verification work and a set of limitations to state in the manuscript.

### Closed

**Prompt 03 round 2 — returned.** The min–max defect is resolved (the function is Z-score inside
three-stage PCA), the derivability matrix has been re-scored against the real 44-indicator register
and finding 02's inventory, and compensability is verified rather than inferred. One consequence for
Figure 2: it was specified to illustrate min–max band compression, which is now the wrong pathology.
Respecify it — either as Z-score error amplification on a near-zero-variance signed variable, or,
better, as the **reweighting effect**: PCA weights across indicators before and after inserting one
account-derived variable. The second is more original, carries the fifth loss class, and is still a
mathematical property rather than an empirical claim, so the illustrative labelling requirement is
unchanged.

### Permanent limitations — state them, do not plan to close them

**Direct engagement with Indonesian government agencies is out of scope for this project.** Several
gaps that would otherwise be pending tasks are therefore permanent, and the manuscript must present
them as limitations rather than as future work. The distinction matters for how §3 is written: a
limitation you have decided to live with reads very differently from one you have merely not got
round to.

1. **Eight IBEI indicators unrecovered.** Finding 01 closed at 36 of 44; the residual eight sit in
   Industry, Technology, Governance and Welfare and are resolvable only from the unpublished
   BAPPENAS handbook. **No data request is available.** Consequence: Table 2 cannot be complete.
   State the 36/44 denominator wherever register coverage is characterised, and note that the gap is
   *ring-fenced* to four sub-pillars — none of them the environmental pillar the article's argument
   turns on, which is the mitigating fact worth stating.
2. **The unpublished IBEI methodological note.** Weights, PCA staging and aggregation form remain
   reconstructed, permanently. Handle per §6: separate the weight-independent results from the
   weight-dependent ones and claim only the former.
3. **Finding 02's seven unobtained documents.** Distinguish two classes:
   - *Public-record retrieval, still worth one attempt:* Kepmen KP 44/2023 via JDIH KKP, the BPS
     statistical work programme, the Bogor Strategic Action Plan, the Statistics Norway workplan.
     These are published or publishable documents; retrieving them is search, not engagement.
   - *Effectively closed:* the 2022 MMAF Pilot/Development/Roadmap reports (GOAP-hosted Drive links,
     not machine-retrievable) and the NSDL technical methodology. These are the two that matter most
     — they would settle whether a normalised condition account and a populated supply–use table
     exist, which is exactly what Table 2's condition rows turn on. Without agency access the
     article proceeds on "not found in the public record", which is a legitimate finding under
     CLAUDE.md and is in fact the honest state of the evidence: a condition account that cannot be
     located by a determined search is not one an index could be built on either.
4. **Compilation cost, at any site.** Absent from the record entirely (finding 02 §7). §9's minimum
   conditions must be stated without costing. Named as follow-on work (§10).
5. **The §7b PCA properties need literature citation, not finding citation.** Eigenvector rotation on
   variable insertion, weight instability under low variance, and the behaviour of PCA weights under
   imputation are standard results. Cite the OECD/JRC handbook and the PCA-weighting literature
   directly; round 2's analysis is correct but is analysis, and a methodological claim resting on a
   deep-research finding is the easiest thing for a reviewer to reject. This is the single most
   important verification task in the article, because §7b is now its most original section.
6. **Precedent sourcing depth.** Finding 05's survey is reconnaissance-grade: one research pass,
   several exemplars resting on secondary or self-reported material, and the China Green GDP case
   partly on a 2007 news item. Each Table 3 row needs one primary source read before citation. This
   is verification work at drafting time, not a new research prompt.
7. **Prompt 05 Part B was answered in full where the prompt intended narrowing.** The suite README
   scoped Part B to the three counter-case strands domestic evidence had not settled; the returned
   report argues all nine. Treat the six pre-settled strands as restatement, not as new evidence,
   and cite the domestic findings for them.
8. **Round 2's four overreaches**, listed in §6: the "PCA mandates 100%" claim, "unbounded"
   reweighting, the imputation reconstruction, and the partial change log. All are fixable in
   drafting; none requires new research.
9. **The derivability figure has now moved twice** — 61% → 39% → 2.8% full-or-partial — on the same
   question, as the indicator set and the maturity evidence were corrected. A third revision is
   possible if the eight unidentified indicators or the two unretrievable MMAF reports ever surface.
   This is the strongest reason to keep the article's argument independent of the figure, and worth
   one sentence in §3 stating the instability explicitly.

### Assessed and deliberately not filled

- **A comparative empirical study** of other jurisdictions' loss classes. Finding 05 covers the
  territory at reconnaissance depth, which is enough for claim 6 as bounded in §6. Deeper
  comparative work is a separate paper (§10), not a precondition for this one.
- **Provincial dashboard values.** Unverifiable — the NSDL dashboard renders client-side (finding 02
  §8). The article does not need them; it argues about the transformation, not about scores.
- **The Gili Matra 2015 opening stock derivation** from a 2020 BIG dataset, unexplained in obtained
  material. Note it as a provenance caveat where the figures are used; it does not affect the
  argument.
