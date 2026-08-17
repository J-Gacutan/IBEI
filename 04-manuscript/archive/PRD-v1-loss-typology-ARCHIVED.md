# PRD — Journal Article: Scale Reconciliation Between Ocean Accounts and Composite Blue Economy Indices

**Status:** Draft specification, not yet written. **No section is now blocked** — prompt 03 round 2
has returned and the normalisation defect is resolved. Drafting order per §4.
**Date:** 2026-08-14 (revised: the 05-rag tier-1 corpus is now the primary evidence base; see §7A)
**Primary evidence base — read §7A before drafting any section.** The
[05-rag tier-1 corpus](../05-rag/) is a citation-anchored extraction over the IBEI's *own published
documentation*: the BAPPENAS Juknis (2025), the IBEI Report 2024 (December 2025 revision), the
Rinaldi et al. Sumatra paper, and the SIRUSA metadata — 199 verbatim chunks with printed-folio
locators plus a complete 44-row indicator join table. **It outranks every deep-research finding.**
Where a finding and a tier-1 chunk conflict, the chunk governs and the finding is cited only for
context. Several PRD premises below were written before this corpus existed and are corrected in
place; the corrections are marked **[tier-1]**.

**Secondary evidence base (research aid, not citable authority):** all five findings returned —
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
- **[tier-1 — this corollary is rewritten.]** Round 2 reconstructed mean substitution and derived a
  Z = 0 variance collapse from it. The Report's Annex 1 publishes the actual rule and it is not mean
  substitution: unavailable values are **predicted by machine-learning models trained on
  socio-economic proxy variables** (SUSENAS named), with two scenarios, ensemble prediction and
  k-fold cross-validation ([report-imputation.json](../05-rag/rag-parts/report-imputation.json),
  Report pp. 64–66 [pdf 76–78]). The argument survives in a **stronger and now documented** form:
  for provinces without an account, an account-derived environmental indicator would be *synthesised
  from socio-economic covariates*, so the environmental variable becomes partly a function of
  economic and social data — inflating its correlation with those pillars and therefore its PC1
  loading, which is the weight. The account-bearing province supplies signal; the rest supply
  regression on proxies; PCA cannot distinguish them. Add the Scenario 1 consequence: an indicator
  unavailable in *all* provinces is trained on **the previous cycle's historical data**, which a
  newly introduced account-derived indicator does not have — so on first insertion it is not
  imputable at all under the published framework. Do not restate the Z = 0 mechanism anywhere.
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
  the **published** imputation rule, where the imputed provinces' values are predicted from
  socio-economic proxies and the new indicator's loading is therefore partly inherited from the
  economic pillar. Synthetic and clearly labelled as illustrative — a mathematical property, not an
  empirical claim, and it must not be presented as observed data or as a reconstruction of any
  published IBEI iteration. **[tier-1]** The second panel's mechanism changed with the imputation
  correction (§2); do not draw the Z = 0 collapse.
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

- **[tier-1 — substantially relaxed. Do not repeat the old formulation.]** The PRD previously held
  that weights, the PCA architecture and several indicator definitions were reconstructed and
  permanently unverifiable. **They are published.** The Juknis states the three-stage PCA, the PC1
  loading-factor weighting rule and Z-score standardisation at every stage (pp. 63–66 [pdf 73–76]),
  and prints weights at all three levels (pp. 93–96 [pdf 103–106]); SIRUSA carries official variable
  definitions with reference periods; the Report publishes the imputation framework and the index's
  own methodological limitations. The article should therefore claim *more* than this PRD originally
  allowed, and the weight-independent / weight-dependent hedge is no longer the organising caution.
  What remains genuinely unavailable, and is what §3 must now state as the standing limitation:
  - **The printed formulae are illegible in the PDF text layer** at Juknis pp. 64–65 and Report p. 31
    — the three aggregation formulae are recorded from their *variable definitions*, not their
    glyphs. Three chunks carry `is_reconstructed: true` for exactly this reason. The variable
    definitions are unambiguous about Z-score inputs and loading-factor weights, so the substance
    holds; say that the glyph layer was unrecoverable and that the reconstruction is of notation only.
  - **Whether Tabel 4–6's percentages are raw PC1 loadings or normalised contributions** is not
    stated. Report both the percentage and the document's own High/Medium/Low tertile, and record
    that the tertile is the document's simplification — including where it labels a 50.0 / 50.0 tie
    as High and Low.
  - **Which indicators were imputed, for which provinces, by which model, at what error** — Annex 1
    documents the framework in the abstract and none of the specifics
    ([report-imputation.json](../05-rag/rag-parts/report-imputation.json) chunk 016). This is now the
    single most consequential undocumented item, because it determines how much of any published
    provincial value is measurement and how much is prediction.
  - **The off-document material:** Annex 3's per-province spiderweb analysis sits behind
    `link.bappenas.go.id/LampiranJuknisIBEI`, and the "normalized factor of 0.6819" applied under all
    four provincial tables is stated without formula or derivation.
  **Direct engagement with Indonesian government agencies remains out of scope**, so these four are
  limitations, not pending tasks. That is a far narrower and more defensible limitations paragraph
  than the one §3 was originally specified to carry.
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
  - It describes the IBEI as **additive with an arithmetic mean**. **[tier-1 — the conflict is now
    resolved, and §7 must stop presenting it as open.]** The Juknis and the Report both state
    multi-stage PCA with PC1 loading weights, in the index's own published documentation; finding
    05's equal-weight characterisation is simply wrong and should be dropped, not preserved as a
    disagreement. Note the likely source of the error: the *Rinaldi et al. Sumatra index* does use an
    HDI-style arithmetic-then-geometric aggregation — but it is a different index (§7 below). The
    published documents agree on what the article needs — additive linear combination at every stage, no geometric aggregation,
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
    of a mathematical law. **[tier-1 — check before repeating.]** Gambar 11's own published figures
    sum to ~98% across eleven sub-pillars and 101% across three pillars, which is rounding; round 2's
    19.2% shortfall was computed on a reconstructed sub-pillar set that omitted at least one
    sub-pillar. Reconcile against Tabel 5 and Tabel 6 first
    ([juknis-weights.json](../05-rag/rag-parts/juknis-weights.json)) and drop the anomaly claim if it
    resolves — which, on the published numbers, is the likely outcome.
  - **"This effect is unbounded"** (deliverable 3, item 3) overstates the reweighting result. The
    rotation's magnitude depends on the new variable's variance and its correlation with existing
    indicators; it is not bounded by anything the constructor controls, which is the defensible
    claim. Say "not bounded by design", not "unbounded".
  - **The imputation analysis is refuted as written. [tier-1]** Round 2 assumed the rule was
    undocumented and reconstructed mean substitution. The rule is published — ML prediction from
    socio-economic proxies (§2). Neither the Z = 0 collapse nor the k-NN/LOCF robustness argument
    should appear anywhere in the manuscript. Rewrite per §2's replacement corollary, which is
    documented rather than reconstructed and is the better argument.
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

## 7A. The 05-rag tier-1 corpus — section-by-section evidence index

**Build:** [05-rag/](../05-rag/), per [BRIEF-standing-rules.md](../05-rag/BRIEF-standing-rules.md).
**Assembled schema:** [ibei-tier1-rag-schema.json](../05-rag/ibei-tier1-rag-schema.json) — 199 chunks,
all `citation.type: self`, 44-row `indicator_join_table`, 1 recorded conflict, 3 web-search
candidates. **Per-slice files** in [rag-parts/](../05-rag/rag-parts/) are the working unit: read the
one part your section needs, not the 473 KB assembled file.
**Page ranges and offsets** in [read-plan.json](../05-rag/read-plan.json); raw text in
[slices/](../05-rag/slices/).

Sources: `doc_1` Juknis Pedoman IBEI (BAPPENAS, 2025, policy document, offset +10) · `doc_2` Report
IBEI 2024, December 2025 revision (offset +12) · `doc_3` Rinaldi et al. 2024, Sumatra (scientific
paper, printed = pdf + 1470) · `doc_4` SIRUSA metadata (dataset documentation).

**Citation convention, mandatory and inherited:** cite the printed folio with the PDF page in
brackets — `p. 94 [pdf 104]`. Quote the Indonesian `content` field verbatim where the wording
carries the argument; `content_en` is a gloss for the drafter, **never** a quotation source. Every
manuscript claim traceable to this corpus carries its `chunk_id` in the drafting notes so the
[citation-checker](../05-rag/) pass can verify it.

| Article § | Slice / part file | Locator | What it supplies |
|---|---|---|---|
| §2 two logics; §3 method | [juknis-method.json](../05-rag/rag-parts/juknis-method.json) (15) | Juknis pp. 63–66 [pdf 73–76] | **Published** three-stage PCA: PC1 loading factors as weights at all three levels, Z-score standardisation before each stage, and §2.5.2's statement that the IBEI is a principal component score, unbounded, mean ≈ 0. This is the architecture the whole article argues about, now from the primary source |
| §2; §7; §7b | [report-method.json](../05-rag/rag-parts/report-method.json) (22) | Report pp. 28–35 [pdf 40–47] | Applied methodology; Gambar 3.1.1's full computation flow, including *"reverse indicator values (or drop the indicator) if a negative relation is found"* — a documented non-monotonicity handling step the article must engage; final rescale `Standardize(index) = (index / Max(index)) × 100`; **the IBEI's own limitations section §3.1.1** (linearity, outliers, cross-sectional weights becoming irrelevant, regional heterogeneity) |
| §3 register; Table 2 | `indicator_join_table` (44 rows) + [juknis-register.json](../05-rag/rag-parts/juknis-register.json) (49) | Juknis pp. 11–13 [pdf 21–23] | All 44 indicators with their verbatim `Data Pembentuk Indikator`. **This is the join key.** Derivability is re-scored against constituent data items, not against indicator names — which is what every prior scoring pass lacked |
| §7; §7b; claim 4 | [juknis-weights.json](../05-rag/rag-parts/juknis-weights.json) (17) | Juknis pp. 93–96 [pdf 103–106] | **Published weights at all three levels.** Gambar 11: pillars 33 / 37 / 31; sub-pillars A 5, B 8, C 6, D 7, E 1, F 5, G 18, H 18, I 6, J 4, K 21. Tabel 4: si_enviro 36.9%, si_econ 32.6%, si_social 30.5%. Tabel 5: si_enviro_s1 50.0%, si_enviro_s2 50.0%. Tabel 6: variable weights — coral reef 3.7%, seagrass 8.6%, conservation area (ha) 22.0% |
| §6 temporal; §9 | [juknis-cascading.json](../05-rag/rag-parts/juknis-cascading.json) (12) | Juknis pp. 67–71 [pdf 77–81] | Perpres 12/2025 designating the IBEI an official national development indicator; SEB Mendagri/Bappenas No. 2/2024 provincial targets; Tabel 2 provincial 2023 baseline / 2025 achievement / 2045 target; **Chapter 4's annual monitoring cycle** — the reporting periodicity any account must meet |
| §7; §9; new Table | [juknis-sensitivity.json](../05-rag/rag-parts/juknis-sensitivity.json) (12) | Juknis pp. 101–104 [pdf 111–114] | Tabel 7's 10%-increase simulation over 58 rows: environmental pillar +6.37%, marine resource quality sub-pillar +4.50, conservation area (ha) +2.45, **good-condition coral reef area +0.41 — near the bottom of the table**. Published elasticities, from the index's own custodian |
| §7b; Figure 2 | [report-imputation.json](../05-rag/rag-parts/report-imputation.json) (16) | Report pp. 64–66 [pdf 76–78] | **The imputation rule is published and it is not mean substitution.** Machine-learning prediction from socio-economic proxies (SUSENAS named), two scenarios, ensemble prediction, k-fold CV, domain constraints, inverse indicators computed post hoc. Chunk 016 records what the annex does *not* state |
| §7b; §8 | [report-provincial.json](../05-rag/rag-parts/report-provincial.json) (11) | Report pp. 67–71 [pdf 79–82] | Published per-province sub-pillar and pillar values, 37 provinces. Jakarta technology 483.43 against a nominal 1–100 scale; three new Papuan provinces at 0.00 across three sub-pillars; an unexplained "normalized factor of 0.6819" under all four tables; Annex 3 held off-document behind a BAPPENAS short link |
| §7 Sumatra case | [rinaldi-methods.json](../05-rag/rag-parts/rinaldi-methods.json) (15) | Rinaldi et al. 2024, pp. 1477–1487 | **Correction, load-bearing.** This paper builds its *own* index, borrowing only the IBEI's three-pillar structure. Its aggregation is HDI-style — min–max, arithmetic mean within dimension, **geometric mean across dimensions** — and its PCA is a multicollinearity step before a Bayesian spatio-temporal regression, with **no weighting role**. Its environmental dimension contains no extent, condition or ecosystem-services variable |
| §3; §4 definitions; §6 | [sirusa-metadata.json](../05-rag/rag-parts/sirusa-metadata.json) (29) | SIRUSA kegiatan/94936; indikator/105371, 105709–105718 | Official variable definitions with reference periods (**T-1 throughout**); activity design — annual, cross-sectional, secondary compilation from KKP and BPS publications, no pilot survey, no field staff, descriptive analysis, province-level estimation; 13 registered indicators |
| §6; whole article | [cross-slice-conflict.json](../05-rag/rag-parts/cross-slice-conflict.json) (1) | Juknis pp. 11–13 and pp. 93–94 | **Unresolved structural conflict:** Tabel 1 prints a four-pillar structure with an *Enabler* pillar holding indicators 15–18; Tabel 4/5 and Gambar 11 print three pillars with tourism, technology and governance as sub-pillars of Economy. Any pillar-level aggregation must state which locus it follows |

### The five internal conflicts the corpus records — preserve every one

Per CLAUDE.md, these are presented as conflicts, never resolved silently. They are also, collectively,
better evidence for the article's thesis than any derivability percentage, because they are defects
in the index's *own* published specification:

1. **Four pillars vs three** (above). The article must declare its locus in §3.
2. **Bounded vs unbounded score**, on one printed page: Report p. 33 [pdf 45] states both a 1–100
   rescale by `index / Max(index) × 100` *and* an unbounded PC score that may be negative with a
   cross-provincial mean near zero.
3. **Targets above the stated maximum.** Juknis Tabel 2 sets 2045 targets of 243.87 (Jawa Timur),
   222.31 (Jawa Tengah), 233.21 (Nusa Tenggara Timur) against a national 2045 target of 100.00.
4. **58 rows against 59 stated scenarios** in the sensitivity table.
5. **Tie labelled as a tertile split:** Tabel 5 gives si_enviro_s1 and si_enviro_s2 both 50.0% while
   labelling one High and the other Low. The tertile labelling is the document's own simplification
   and must be reported alongside the percentage, never instead of it.

### What tier-1 closes, and what it costs the article

**Closed.** The weights are published (not reconstructed); the imputation framework is published;
all 44 indicators and their constituent data are recovered. Three of §12's gaps go with them.

**Cost.** Two of the article's arguments were built on reconstructions that the published documents
contradict, and both must be rewritten rather than softened: the mean-substitution imputation
collapse (§2, §5 Figure 2, §6) and the use of the Sumatra paper as evidence about IBEI aggregation
(§7). A third — round 2's "19.2% variance shortfall" — is probably explained by rounding in Gambar
11, whose eleven sub-pillar percentages sum to ~98% and whose three pillar percentages sum to 101%;
check this arithmetic against Tabel 5 and Tabel 6 before repeating any anomaly claim.

**The new arithmetic the article should do, labelled as its own computation over published weights**
(not a reconstruction — every input is printed): 36.9% × 50.0% = **18.45%** of the index is the
marine-resource-quality sub-pillar, and within it good-condition coral reef area carries 3.7%, so the
coral variable is worth roughly **0.7% of the composite**. Seagrass is ~1.6%. The single largest
variable in that sub-pillar is conservation *area* in hectares at 22.0% — a designation count, not a
condition measure. State the multiplication explicitly so a reader can check it.

## 7. Evidence map

| Article section | Evidence | Source | Sufficiency |
|---|---|---|---|
| §2 two logics | SEEA-EA structure; OECD/JRC composite indicator handbook; SEEA-EA Ch. 14 warning on condensing indicators | Finding 03 §6; Finding 05 §2.6; external literature | Sufficient — needs direct reading of the OECD/JRC handbook and SEEA-EA Ch. 14, not citation via findings |
| §2 mechanism typology | Four mechanisms; EU Observatory, China GEP, South Africa OESA, UK ONS, StatCan HLMI, WAVES ANS, OHI | Finding 05 §§2.1–2.2, Table 1 | Adequate — each exemplar needs one primary source read directly; do not cite finding 05's table as the authority |
| §3 case/method | 44-indicator register with constituent data; three-stage PCA; official variable definitions and T-1 reference periods; activity design (annual, secondary compilation, no field collection); Perpres 12/2025 and SEB 2/2024 status | **[tier-1]** `indicator_join_table` + juknis-register, juknis-method, sirusa-metadata, juknis-cascading | **Now primary and near-complete.** Supersedes finding 01 §§3–5 for the register and the architecture; finding 01 is cited only for the two-edition history |
| Table 2 derivability, rebuilt | The join key: each of the 44 indicators against its verbatim `Data Pembentuk Indikator` | **[tier-1]** `indicator_join_table` (44 rows) | **This replaces the basis of every prior scoring pass.** Earlier passes scored against indicator *names*; scoring now runs against named constituent data items. Expect the distribution to move a third time — which is why the article does not rest on it (§8) |
| §3 maturity precondition | Full account inventory; 34-selectable vs 1-documented; tag (b) throughout; no BPS release | Finding 02 §§1–4, 11 | **Now sufficient — this is what prompt 02 supplied.** Gili Matra extent/value/waste figures verified against the BPS Manila presentation |
| §4 spatial | Saleh Bay grid comparison; MBSU designation methods; netting-out; no adopted national grid | Finding 03 §§4.2, 6.1; Finding 02 §5; Rahayu et al. 2024 | Sufficient — the *One Ecosystem* paper is peer-reviewed and directly obtainable |
| §4 normalisation | Z-score into three-stage PCA, not min–max; error amplification on near-zero-variance signed variables | Finding 01 §4.1; Finding 03 round 2 D2.1, D2.5 | **Defect resolved.** Cite finding 01 for the function and the OECD/JRC handbook for the property; do not cite round 1's min–max argument anywhere |
| Table 2 derivability | 36-indicator re-score; 0/2.8/8.3/88.9 distribution; per-indicator binding constraints; maturity-gap vs measurement-target-mismatch split | Finding 03 round 2 D1, D2 change log | Adequate as an assessment, not as a verifiable measurement — present at group level with stated criteria (§5, §6) |
| §5 boundary | Law 23/2014 Art. 27; strait overlap cases; nesting asserted not evidenced | Finding 03 §4.1; Finding 02 §5 | Sufficient — verify the statute text directly |
| §6 temporal | Anambas vintages (2015–17 opening, 2020/21 closing, 2022 economic); Sentinel-2/SPOT 2018 & 2021; 2021-only closing year; ~4-year lag to dashboard; no revision policy; no BPS work-programme entry | Finding 03 §5; Finding 02 §§6–7 | **Upgraded from sufficient to strong.** Finding 02 turns a projected lag problem into an observed one |
| §7 compensatory | Aggregation architecture; published pillar/sub-pillar/variable weights; si_enviro_s1 and si_enviro_s2 both 50.0%; sensitivity elasticities | **[tier-1]** juknis-weights (Juknis pp. 93–96), juknis-sensitivity (pp. 101–104), juknis-method, report-method | **Strong, and now primary.** Compensability is read off the published architecture, not inferred. The Sumatra paper is **not** evidence here — it is a different index (row below). Finding 05's equal-weight claim is dropped, not preserved as a conflict (§6) |
| §7 Sumatra paper | Its own three-pillar index; min–max + arithmetic + **geometric** aggregation; PCA used only against multicollinearity before a Bayesian GRDP regression; environmental dimension holds no ecosystem variable | **[tier-1]** rinaldi-methods (pp. 1477–1487) | **Repurposed.** It cannot support any claim about IBEI aggregation. It is useful for two other things: an independent Indonesian index whose "environmental" dimension is waste and pond area, and a worked case of partly non-compensatory aggregation (§9) |
| §7b architectural | Reweighting on insertion; weight instability year to year; imputation via proxy-trained ML models; variance-weight fall on convergence; **the index's own stated limitations** | **[tier-1]** report-method §3.1.1 (Report p. 34 [pdf 46]), report-imputation, juknis-method; plus OECD/JRC handbook and the PCA-weighting literature | **The strongest section, and its footing has changed for the better.** The Report itself states that PCA is cross-sectional, that weights fixed on 2024 data "may become irrelevant" if structure changes, and that outliers and non-linearity are unhandled — so the core of architectural loss can be cited to the index's own documentation rather than to a deep-research finding. Cite the handbook for the general property, the Report for the admission. The 80.8% anomaly and the Z = 0 collapse are withdrawn (§6) |
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
- [x] ~~The 36/44 register denominator stated wherever register coverage is characterised~~ — retired;
      the register is complete at 44 (§7A). Any surviving 36/44 language is a defect
- [ ] **Every tier-1 claim carries its `chunk_id` in the drafting notes and its printed folio in the
      manuscript**, in `p. 94 [pdf 104]` form; Indonesian quoted verbatim where wording is load-bearing,
      `content_en` never quoted
- [ ] All five recorded internal conflicts (§7A) preserved, and the article's pillar locus declared in §3
- [ ] The Z = 0 imputation collapse absent; the published ML-imputation mechanism used instead
- [ ] The Rinaldi Sumatra paper never cited as evidence about IBEI aggregation
- [ ] Finding 05's arithmetic-mean characterisation absent, not preserved as a conflict
- [ ] The 80.8% / 19.2% variance anomaly reconciled against Gambar 11 and Tabel 5–6, and dropped if it resolves
- [ ] The coral-at-~0.7%-of-composite arithmetic shown as an explicit multiplication of published weights
- [ ] Table 2 re-scored against the join table's constituent data items, not indicator names
- [x] Prompt 03 round 2 returned and the normalisation function settled
- [x] Tier-1 corpus built and indexed to article sections (§7A)
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

1. ~~**Eight IBEI indicators unrecovered.**~~ **Closed by tier-1.** The join table carries all 44
   indicators with their verbatim constituent data (Juknis pp. 11–13 [pdf 21–23]). Drop the 36/44
   denominator caveat wherever it appears; the register is complete. Retain one narrower caveat: two
   of the 44 registered variables (no. 17, motor vessels over 30 GT; no. 18, ports with a fish auction
   place) appear in SIRUSA's collected-variable register but not in its constituent-variable lists.
2. ~~**The unpublished IBEI methodological note.**~~ **Largely closed by tier-1** — the Juknis *is* the
   methodological note, and it publishes staging, weighting rule and weights. What remains is the four
   narrow items in §6: illegible formula glyphs, loading-vs-normalised ambiguity in Tabel 4–6, the
   undocumented per-indicator imputation record, and the off-document Annex 3 and 0.6819 factor.
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
- **Provincial dashboard values.** ~~Unverifiable~~ **— superseded by tier-1.** Published provincial
  values now exist and are citable: Report Annex 2 gives sub-pillar, pillar and headline values for 37
  provinces (pp. 67–70 [pdf 79–82]), and Juknis Tabel 2 gives 2023 baseline / 2025 achievement / 2045
  target per province (p. 69 [pdf 79]). The article still does not *argue* from scores, but it can now
  point at specific published values where they demonstrate a structural property — Jakarta's
  technology sub-pillar at 483.43 on a nominal 1–100 scale, and the three new Papuan provinces at 0.00
  across three sub-pillars, which is what missing data looks like after it passes through the index.
  (Finding 02's client-side NSDL rendering note concerns the ocean-accounts dashboard, a different
  product; it stands.)
- **The Gili Matra 2015 opening stock derivation** from a 2020 BIG dataset, unexplained in obtained
  material. Note it as a provenance caveat where the figures are used; it does not affect the
  argument.
