# Deep Research Prompt 03: Mapping, Scale Reconciliation, and Methodological Compatibility

*Dependent prompt. Run only after Prompts 01 and 02 have returned. Paste their outputs into Section 2 before running.*

---

## 0. Status against returned findings

**Run — but out of sequence, and it needs a second pass.** See
[03-mapping-and-reconciliation-findings.md](../02-research-findings/03-mapping-and-reconciliation-findings.md).

Finding 03 was produced **without** finding 01's verified register and **without** finding 02,
which did not exist. Its §2 states plainly that "twenty-three core indicators were reconstructed
from the available blue economy literature" — so it maps a reconstructed 23-indicator set, not the
44-indicator register that finding 01 subsequently recovered. Section 2 of this prompt exists
specifically to prevent that.

**What it nonetheless closed, decisively.** It corrected the more serious error — framework
capability mistaken for compiled data:

| RQ | Status | What the findings established |
|---|---|---|
| RQ3.1 / RQ3.2 Mapping and change log | **Closed on method, open on register** | Recomputed distribution: **0% Full, 39.1% Partial, 43.5% Minimal, 17.4% None**. The provisional 61% full-or-partial claim is refuted; nothing is currently derivable without supplementary processing. Every downgrade is reasoned. But the indicator set is wrong |
| RQ3.3 Scale reconciliation | **Closed** | Provincial marine authority is 0–12 nm under **Law 23/2014 Art. 27**; no aggregation rules for clipping MBSUs to that boundary exist and must be legally codified. Saleh Bay: 25×25 m grids materially increase extent error. **Partial-coverage bias is positive-selection bias** — pilots sit overwhelmingly in MPAs, so scoring from them flatters covered provinces and penalises any province with honest wall-to-wall data. Verdict: mixed-coverage scoring is statistically indefensible |
| RQ3.4 Temporal reconciliation | **Closed** | 3–5 year lag against an annual index; economic gains register immediately while their ecological cost appears years later |
| RQ3.6 Economy–environment linkage | **Closed, and negative** | The concept note's headline promise fails structurally. Compensatory aggregation lets economic gain offset environmental loss, hiding depletion in the average. Sumatra evidence shows exactly this. **A composite index is the wrong instrument**; the diagnostic belongs in a dashboard or cross-tabulated satellite table (e.g. GDP per hectare degraded) |
| RQ3.7 Gap closure | **Closed** | Four sequenced phases. Highest leverage first: KBLI↔IBEI classification cross-walk (low cost, unlocks all economic indicators) |
| RQ3.8 Classification correspondence | **Closed** | Per-sector stripping requirements tabulated; coastal tourism needs "severe" stripping (hotel coordinates against the 0–12 nm zone) |

**Why a round 2 is required — three specific defects, not general tidying:**

1. **Wrong indicator set.** Re-run against finding 01's 44-indicator register. This is not cosmetic:
   the real environmental pillar contains 4 policy-output indicators (MPA area, rehabilitation area,
   villages with waste sites, villages with sanitation) and 2 pressure indicators. Several are
   *better* served by accounts than the reconstructed set implied, and several — the Podes
   village-infrastructure counts — have no account pathway at all. The distribution will move.
2. **Wrong normalisation function.** Finding 03 §6.2 builds its signed-change-variable argument on
   **min–max** normalisation. Finding 01 established **Z-score standardisation inside multi-stage
   PCA**, with min–max applied only to rescale the final composite to 0–100. The argument must be
   redone against PCA. The likely conclusion is *worse*, not better: PCA weights are variance-derived,
   so inserting a signed near-zero change variable both attracts an unstable weight and **reweights
   every other indicator in the index** — and finding 01 notes weights already shift year to year,
   breaking longitudinal comparability.
3. **Compensability was inferred, and is now confirmed.** Finding 03 §7.1 hedged with
   "often geometric or arithmetic means". Finding 01 confirms additive linear combination with **no**
   non-compensatory thresholds. Restate RQ3.6 as verified rather than inferred — it is the strongest
   negative finding in the suite and should not rest on a hedge.

Also fold in finding 01's 37% environmental-pillar variance weight and the 80.8% weight-sum
anomaly, and re-examine whether the recovered weights change the masking analysis.

**Blocked on:** Prompt 02. RQ3.1's current-coverage ratings and RQ3.3's coverage verdict cannot be
scored properly until the provincial coverage count exists.

---

## 1. Objective

Determine, indicator by indicator, whether verified IBEI indicators can be sourced from verified Indonesian ocean account tables — and where they can, whether the transfer survives the **scale mismatch** (MBSU to province) and the **methodological compression** (accounting structure to composite index score) intact.

This is the analytical core of the research programme. It is deliberately sequenced last among the evidence-gathering prompts because doing it against assumed indicator definitions is the specific error it exists to correct.

---

## 2. Supplied Evidence

> **Before running this prompt, paste in:**
> - **[A] The verified IBEI indicator register** from Prompt 01 (with its `sourced` / `reconstructed` flags and aggregation methodology note)
> - **[B] The ocean accounts inventory** from Prompt 02 (with maturity tags, provincial coverage matrix, and MBSU methodology note)
>
> Treat A and B as the evidence base. Do not re-research them from scratch, but **do** flag any point where a claim in A or B looks unsupported, and treat any indicator flagged `reconstructed` in A as carrying reduced confidence into every conclusion drawn from it.

### Prior work being tested

A provisional mapping (`annex_a_oa_ibei_mapping.md`) rated 23 **reconstructed** IBEI indicators for derivability from ocean accounts using a four-point scale — Full / Partial / Minimal / None — arriving at ~22% Full, ~39% Partial, ~17% Minimal, ~22% None, or ~61% full-or-partial overall. Its strongest claims were:

| Provisional claim | Rating asserted | Why it needs testing |
|---|---|---|
| Blue carbon extent (mangrove, seagrass) | Full | Depends on extent accounts existing beyond pilot sites |
| Coral reef extent | Full | Same |
| Habitat quality / condition index | Full | Depends on **compiled** condition accounts, which may not exist |
| Capture fisheries production value | Full | Depends on supply–use tables *and* an ocean economy satellite account |
| Fisheries sector GDP contribution | Full | Depends on a published BPS ocean economy satellite account |
| Marine debris / waste | Minimal | May change if SEEA residual-flow accounts exist in Indonesia |
| Ocean literacy; coastal poverty | Partial | Rests on GOAP social accounts maturity — verify against Prompt 02 |
| Governance enabler indicators | Minimal | Rests on GOAP governance accounts, described as under development |

Every rating is a hypothesis. Confirm, revise, or refute each on the evidence in A and B.

---

## 3. Research Questions

### RQ3.1 — Verified derivability mapping (core deliverable)
For each indicator in register A, rate derivability from the accounts inventoried in B using the four-point scale, with these definitions tightened to require **compiled** data rather than framework capability:

- **Full** — derivable directly from a compiled account table with negligible additional processing, at the IBEI's required spatial resolution and periodicity
- **Partial** — the account provides the primary input, but derivation requires further processing, aggregation, or supplementary non-account data. Specify exactly what is missing
- **Minimal** — accounts produce related data that does not correspond to the indicator as specified
- **None** — outside the scope of ocean accounting as practised

Where a rating depends on account data that exists only at pilot scale, rate it against the **current** coverage and state the counterfactual rating under full national coverage separately. Do not conflate the two.

### RQ3.2 — Change log against the provisional mapping
Which of the provisional ratings changed, in which direction, and on what evidence? Where a rating was overstated because framework capability was mistaken for compiled data, say so explicitly. Recompute the summary distribution and compare it to the ~61% full-or-partial headline.

### RQ3.3 — Scale reconciliation
Ocean accounts are compiled on MBSUs; the IBEI reports by province. Address:
- What aggregation rules apply, and are they documented anywhere or would they need to be invented?
- How do MBSU boundaries relate to provincial marine jurisdiction (the 0–12 nautical mile provincial waters limit, and beyond)?
- What happens to indicators for provinces whose marine area is only partially covered by compiled accounts — and does partial coverage produce a *biased* score rather than merely a noisy one?
- Given the Saleh Bay grid-size findings, how sensitive are aggregated extent and condition figures to MBSU resolution? Would two provinces compiled at different grid resolutions be comparable?
- Is there any defensible way to score covered and uncovered provinces in the same index, or does account-derived indicator adoption require national coverage first?

### RQ3.4 — Temporal reconciliation
What is the account compilation lag (from B) against the IBEI's reporting periodicity (from A)? Can accounts feed the index on its actual cycle, or would the index carry indicators several years stale relative to its others? Does mixing vintages across indicators within one composite create an interpretation problem?

### RQ3.5 — Methodological compatibility and information loss
Accounts preserve stock–flow identities, the biophysical/monetary distinction, and spatial explicitness. Composite indices normalise, weight, aggregate, and permit compensation between components. Address:
- What is destroyed in the compression, and does any of it matter for the decisions the IBEI informs?
- Given the specific normalisation and weighting scheme documented in A, how would extent-*change* values behave? Change data is signed and often near-zero — does the index's normalisation method handle that sensibly, or would it produce unstable or perverse scores?
- Does substituting extent-change for point-in-time coverage proxies plausibly change provincial rankings? Is there any published empirical evidence, in Indonesia or elsewhere?
- What does the composite-indicator methodology literature (OECD/JRC handbook practice and successors) say about embedding accounting-derived variables, mixing stock and flow measures in one index, and handling signed change variables?

### RQ3.6 — The economy–environment linkage claim
The concept note argues that supply–use tables would let the IBEI flag provinces achieving high economic scores through natural capital depletion. Test the mechanics: does this require the two pillars to be jointly analysed rather than separately scored, and would the IBEI's current aggregation architecture (from A) actually surface such a signal, or would compensatory aggregation hide it? Is a composite index the right instrument for this diagnostic at all, or is it a satellite-table or dashboard function?

### RQ3.7 — Gap closure sequencing
For each Partial rating, what specifically must be built to reach Full — a new account table, extended coverage, a supplementary dataset, an agreed aggregation rule, a classification correspondence? Sequence these by dependency and by effort, identifying which single investments unlock the most indicators.

### RQ3.8 — Classification correspondence
Where economic indicators are involved, do the account sector classifications (KBLI-based, ISIC-based) correspond to the IBEI's sector boundaries? Is "marine-based manufacturing" or "coastal tourism" bounded the same way in both systems? Unreconciled classification boundaries silently break apparently-Full mappings.

---

## 4. Method Requirements

1. **Compiled data only.** Every Full rating must name a specific existing table, its spatial coverage, and its years. Framework capability is not evidence.
2. **Confidence propagation.** An indicator flagged `reconstructed` in register A cannot support a high-confidence rating. State confidence per row.
3. **Two-column ratings where they differ:** current-coverage rating and full-national-coverage rating. Never blend them into one optimistic figure.
4. **Show the arithmetic** for any recomputed summary distribution, and state how many indicators were excluded for insufficient evidence.
5. **Preserve disagreement** with the provisional mapping rather than quietly overwriting it — the change log is a deliverable.
6. **New search is permitted but bounded.** Additional literature search is appropriate for RQ3.5 (composite indicator methodology) and RQ3.3 (aggregation practice). Do not re-run Prompts 01 or 02.

---

## 5. Required Outputs

1. **Revised mapping matrix** — indicator × rating (current and full-coverage) × specific account table × rationale × confidence × citation.
2. **Change log** against the provisional Annex A: every rating that moved, its direction, and the evidence that moved it.
3. **Recomputed summary distribution** with arithmetic shown and exclusions stated, set against the provisional ~61% figure.
4. **Scale reconciliation note** — aggregation rules, jurisdictional boundary treatment, partial-coverage bias, grid-resolution sensitivity, and a verdict on whether mixed-coverage scoring is defensible.
5. **Temporal reconciliation note** — lag versus periodicity, and the mixed-vintage problem.
6. **Information-loss assessment** — what compression destroys, with specific attention to how signed change variables behave under the IBEI's documented normalisation.
7. **Economy–environment linkage verdict** — whether the concept note's central analytical promise is deliverable through the index, or requires a different instrument.
8. **Gap closure roadmap** — dependency-sequenced, with the highest-leverage investments named.
9. **Classification correspondence table** for economic indicators.
10. **Residual unknowns** — what could not be resolved and what evidence would resolve it.

---

## 6. Constraints

- The framing is statistical infrastructure feeding a policy instrument. Do not propose replacing or subordinating either framework.
- Do not preserve the provisional mapping's conclusions out of deference. If the honest verified figure is materially lower than 61%, that is the finding, and it is more useful than the original.
- Where the answer is "not yet, because the accounts do not exist at that coverage," say it plainly and specify what coverage would be needed.

---

## 7. Success Criteria

A BAPPENAS or MMAF technical officer can read the matrix and identify precisely which of their indicators could be sourced from an existing account table in the next reporting cycle, which would require new compilation, and which will never come from accounts — and can see the scale and vintage caveats attached to each.
