# PRD — Journal Article: Ocean Accounts as Compilation Infrastructure for a Provincial Blue Economy Index

**Status:** Specification, v2. Not yet drafted. Nothing blocks drafting.
**Date:** 2026-08-14.
**Supersedes:** [PRD-v1-loss-typology-ARCHIVED.md](PRD-v1-loss-typology-ARCHIVED.md), which specified a
critique paper ("five classes of information loss; coverage is not the binding constraint; do not
substitute"). That paper is still writeable and its analysis is retained where it survives — see §13
— but it is not this paper. The reasons for the change are in
[HOSTILE-REVIEW-PRD-reporting-question.md](HOSTILE-REVIEW-PRD-reporting-question.md).

**Purpose in one sentence.** Compiling the IBEI is hard, and hardest at provincial scale; ocean
accounts can facilitate and streamline that compilation; this article shows what already-compiled
accounts can supply today, what future compilation could supply, and maps both to the 44 indicators.

**Primary evidence base:** the [05-rag tier-1 corpus](../05-rag/) — 199 verbatim, folio-located chunks
over the IBEI's own published documentation plus a complete 44-row indicator join table. **It outranks
every deep-research finding**; where they conflict, the corpus governs. Section-by-section index in §8.
**Secondary (research aid, never a citable authority):** findings
[01](../02-research-findings/01-ibei-specification-findings.md),
[02](../02-research-findings/02-ocean-accounts-inventory-findings.md),
[03](../02-research-findings/03-mapping-and-reconciliation-findings.md),
[03 round 2](../02-research-findings/03-mapping-and-reconciliation-findings-round2.md),
[04](../02-research-findings/04-institutional-pathway-findings.md),
[05](../02-research-findings/05-precedent-and-counter-case-findings.md).
**Forward-extension scaffold:** the GOAP Technical Guidance,
[oa-technical-guidance](/Users/z5238824/Documents/GitHub/oa-technical-guidance) — 70 circulars in 7
sections. Mapping in §7.

---

## 1. The problem the article addresses

The IBEI is not a research index. Presidential Regulation 12/2025 makes it an official national
development indicator, and the Joint Circular Letter of the Minister of Home Affairs and BAPPENAS
(SEB No. 2/2024) assigns every province a 2045 target against a 2023 baseline, to be carried in its
RPJPD ([juknis-cascading.json](../05-rag/rag-parts/juknis-cascading.json), Juknis pp. 68–69
[pdf 78–79]). Thirty-eight provinces must therefore be scored, annually, on 44 indicators, in
perpetuity.

The compilation machinery for that obligation is thin, and the index's own documentation says so.
SIRUSA records the IBEI compilation as annual, cross-sectional, whole-of-Indonesia, **secondary data
collection**, instrument "other — MMAF and BPS publications", **no pilot survey, zero supervisors,
zero enumerators**, descriptive analysis, province-level estimation, reference period **T-1**
throughout ([sirusa-metadata.json](../05-rag/rag-parts/sirusa-metadata.json), kegiatan/94936). The
index conducts no primary collection of its own. It is a compilation that draws on what other
agencies publish, at the resolution they publish it.

The strain shows in the published output, and every symptom below is quoted from BAPPENAS's own
documents rather than inferred:

- **Gaps are filled by prediction.** Annex 1 of the IBEI Report publishes a machine-learning
  imputation framework: unavailable values are predicted from socio-economic proxy variables (SUSENAS
  named), under two scenarios, with ensemble models and k-fold cross-validation
  ([report-imputation.json](../05-rag/rag-parts/report-imputation.json), Report pp. 64–66 [pdf 76–78]).
  The annex does not state which of the 44 indicators were imputed, for which provinces, by which
  model, or at what error (chunk 016).
- **Some provinces are effectively unscored.** Three of the four provinces created in Papua in 2022
  record 0.00 across the marine-based industry, technology and governance sub-pillars; Central Papua
  returns the lowest headline value in the annex, 8.51
  ([report-provincial.json](../05-rag/rag-parts/report-provincial.json), Report pp. 67–70 [pdf 79–82]).
- **Scale discipline has broken down.** Jakarta's technology sub-pillar reads 483.43 on a nominal
  1–100 scale; an unexplained "normalized factor of 0.6819" sits under all four regional tables with
  no formula or derivation; 2045 provincial targets of 243.87, 233.21 and 222.31 stand against a
  national 2045 target of 100.00 (Juknis Tabel 2).
- **The specification itself is internally inconsistent.** Tabel 1 prints four pillars, including an
  *Enabler* pillar holding indicators 15–18; Tabel 4/5 and Gambar 11 print three, with tourism,
  technology and governance as sub-pillars of Economy
  ([cross-slice-conflict.json](../05-rag/rag-parts/cross-slice-conflict.json)). The same printed page
  of the Report describes the final score both as rescaled to 1–100 and as an unbounded principal
  component score that may be negative.

None of this is incompetence. It is what happens when an annually reported, 44-indicator,
38-province composite is assembled from secondary publications without a compilation infrastructure
underneath it. **That infrastructure is what ocean accounts are.** The article's subject is the
supply chain, not the index's arithmetic.

## 2. Thesis

> Indonesia's ocean accounts should be understood not as an alternative source of blue economy
> indicators but as **compilation infrastructure** for the index that already exists: a spatially
> explicit, provenance-documented, repeatable production system that can supply several IBEI
> indicators from a single compilation cycle, at the spatial unit the index requires, with the audit
> trail the index currently lacks. The near-term gain is not in the number of indicators an account
> can replace — which is small and computable — but in **how** the indicators it touches are produced:
> measured rather than predicted, provenanced rather than asserted, and repeatable rather than
> re-negotiated each cycle.

Three properties do the work, and each is a property of accounting rather than of any particular
dataset:

1. **One compilation, many indicators.** An extent-and-condition account over mangrove, seagrass and
   coral, cross-classified by province, addresses indicators 19, 20, 21 and 24 from a single
   production run, and constrains 27. The index currently treats these as five unrelated data
   requests to different publications.
2. **Provenance and repeatability.** An account carries opening stock, additions, reductions and
   closing stock for a defined period over a defined spatial unit. That is exactly the audit trail
   that lets a provincial figure be reproduced, revised, and defended — and its absence is why the
   0.6819 factor and the imputation record cannot presently be interrogated.
3. **The spatial unit is the province's own.** Accounts built on Marine Basic Spatial Units aggregate
   to any administrative boundary by design. The index needs provincial numbers; the account produces
   the grid they can be summed from, and can produce district figures for the RPJPD cascade at the
   same time.

**What the thesis explicitly does not claim.** That accounts should replace the index, or that account
compilation exists to serve it. Account compilation has independent statutory and analytical purposes
under MMAF's mandate (Kepmen KP 44/2023) and index supply is one downstream use among several. The
relationship argued is statistical infrastructure feeding a policy instrument — BAPPENAS plans; MMAF
and BPS produce statistics — and the article must state that division early and hold it (§6).

## 3. Contribution claims

Each must be defensible from §8's evidence and each is stated in the introduction.

1. **A documented account of why provincial IBEI compilation is hard**, assembled from the index's own
   published documentation rather than from commentary: no primary collection, T-1 secondary
   dependence, published ML imputation with no per-indicator record, unscored new provinces, an
   undocumented rescaling factor, and a four-versus-three-pillar conflict in the guidance itself. As
   far as the record shows this has not been assembled anywhere, and it is the article's factual base.
2. **A three-tier indicator mapping** — what already-compiled accounts can supply, what could be
   compiled with existing methods, and what accounts could add that the index does not currently
   measure — at indicator level, against the *verbatim constituent data items* the Juknis specifies
   rather than against indicator names. This is the article's central deliverable (§5, Table 2).
3. **A correction with practical consequence: three condition indicators are definitionally matched
   to account output, not category-mismatched.** Indicators 19–21 ask for *the percentage of area with
   50–100% live cover or canopy density per province* (join table rows 19–21; SIRUSA vars 19–21). That
   is an extent-by-condition-class tabulation — what a SEEA-EA extent account cross-classified by a
   condition variable produces. The index does **not** ask for a normalised, reference-condition
   condition index, which is what prior assessments (finding 02) established was missing. The barrier
   is compilation and coverage, not measurement target. This single correction is what makes the
   article constructive rather than another derivability audit.
4. **An honest quantification of leverage, from published weights, with its inversion.** The three
   ecosystems Indonesian accounts cover are worth ~2.3% of the composite and the whole mature
   account-addressable set ~7.6% (§4) — while the social pillar (30.5%) and governance sub-pillar
   (~5%) bear on account types that are Emerging and uncompiled (§7.3). **The mature account types
   address the smallest share of the index; the account types that address the largest share are the
   least developed.** State both figures plainly and early. The argument for accounts is a
   production-process argument, not a weight argument, and pretending otherwise would be the easiest
   thing for a reviewer to dismantle.
5. **A forward register of future indicators, mapped to the GOAP Technical Guidance** (§7): which TG
   circulars supply method for which IBEI sub-pillar, which IBEI sub-pillars no account should be
   asked to serve, and — the more valuable half — which account outputs would let the index measure
   things it currently cannot: ecosystem services in physical units, marine ecosystem asset
   depreciation against sectoral value added, and net extent change as a stock–flow identity rather
   than a rehabilitation-area proxy.
6. **A design finding the index's custodian can act on:** half the environmental pillar measures
   non-marine energy. Sub-pillar H (renewable energy, 50.0% of the environment pillar per Tabel 5) is
   solar PV and **hydropower** capacity and generation (Tabel 6; join table rows 28–31). Meanwhile the
   sub-pillar named *marine resource quality and conservation* is dominated by two coastal-village
   sanitation counts at 18.7% and 20.8%, together outweighing all three ecosystem-condition variables
   by roughly three to one. Neither observation requires any claim about ocean accounts; both follow
   from the published weights, and both are directly relevant to what a future indicator set should
   ask accounts for.
7. **A conditions-precedent register** (§6 of the article): what must be true — spatial standard,
   clipping rule, periodicity, revision policy, metadata compliance, custodianship — for account
   output to enter an annually reported official index, with each condition tied to its TG circular
   and to the observed state of Indonesian practice.

Claims 3 and 5 are the article's originality. Claim 4 is what makes it credible. Claim 6 is what makes
it useful to BAPPENAS.

## 4. The arithmetic the article must show

Do this openly, as a multiplication of published percentages, so a reader can check it. It is not a
reconstruction — every input is printed in the Juknis (Tabel 4, 5, 6, pp. 93–96 [pdf 103–106]).

Environment pillar **36.9%** × marine-resource-quality sub-pillar **50.0%** = **18.45%** of the
composite. Within that sub-pillar:

| Variable (Tabel 6) | Weight in sub-pillar | Share of composite | Account relationship |
|---|---|---|---|
| Good-quality coral reef area (%) | 3.7% | ~0.68% | Extent × condition class |
| Good-quality seagrass area (%) | 8.6% | ~1.59% | Extent × condition class |
| Good-quality mangrove forest area (%) | 0.3% | ~0.06% | Extent × condition class |
| Mangrove/swamp/peatland rehabilitation (ha) | 6.8% | ~1.25% | Extent-account addition term |
| Aquatic conservation area (ha) | 22.0% | ~4.06% | Designation; MMAF administrative, account-compatible |
| Coastal villages with waste disposal site | 18.7% | ~3.45% | No account pathway (PODES) |
| Coastal villages with defecation facility | 20.8% | ~3.84% | No account pathway (PODES) |
| Reversed marine waste leakage (t) | 14.9% | ~2.75% | Flow economy→environment |
| Reversed waste disposed on land (t) | 4.2% | ~0.78% | Flow; terrestrial |

Read off it, and say all four out loud in the paper:

- Ecosystem condition, all three ecosystems: **~2.3% of the composite.** Mangrove condition alone is
  ~0.06%, which is a rounding error in the index.
- Account-addressable including rehabilitation, conservation area and waste leakage: **~7.6%.**
- The two village sanitation counts: **~7.3%**, i.e. more than three times the ecosystem-condition
  weight, inside a sub-pillar named for marine resource quality.
- Therefore: **inserting account-derived values into these slots perturbs the index very little.**
  That cuts against the fear that account insertion would destabilise a variance-weighted composite,
  and equally against any claim that it would transform the index's environmental signal. Both
  conclusions favour the article's actual argument, which is about production process.

**Then immediately give the counterpart figure, because on its own the 7.6% understates the case.**
The social pillar is 30.5% of the index and the governance sub-pillar ~5%, and both bear on account
types that do not yet exist anywhere (§7.3). The two numbers must always travel together, because the
finding is the **inversion between them**: the mature account types address the smallest share of the
index, and the account types that address the largest share are the least developed. Presenting 7.6%
alone makes the paper look like a small-gains argument; presenting ~35% alone would overstate a
capability that is Emerging on both the TG side and the Indonesian side.

**Caveat that must travel with every one of these figures.** Whether Tabel 4–6's percentages are raw
PC1 loadings or normalised contributions is not stated in the Juknis. If they are raw loadings the
products are indicative rather than exact. State this at first use and once more in the limitations.
Report the document's own High/Medium/Low tertile alongside each percentage, and record that the
tertile is BAPPENAS's simplification — including where Tabel 5 labels a 50.0 / 50.0 tie as High and
Low.

**Engage the sensitivity table rather than avoiding it.** Juknis Tabel 7 simulates a uniform 10% score
increase per component and reports the environmental pillar producing the *largest* national gain,
+6.37%, ahead of economy (+5.62%) and social (+5.27%)
([juknis-sensitivity.json](../05-rag/rag-parts/juknis-sensitivity.json), pp. 101–104 [pdf 111–114]).
A reader will otherwise use this against §4's leverage argument. The reconciliation is on the same
pages and is straightforward: the pillar's leverage sits in conservation *area* (+2.45) and hydropower
capacity (+2.39), while **good-condition coral reef area returns +0.41, near the bottom of all 58
rows.** A uniform proportional shock is also not the same as a change in a single measured stock.
Make the point in two sentences and cite the table; do not build a section on it.

## 5. Article structure

Target **9,000–10,000 words** excluding references — shorter than v1, because the deliverable is a
mapping and the argument no longer needs five mechanism sections. Marine Policy register.

| § | Section | Words | Core content |
|---|---|---|---|
| 1 | Introduction | 900 | The statutory obligation (Perpres 12/2025, SEB 2/2024); 44 indicators × 38 provinces annually; the compilation-capacity gap; thesis (accounts as compilation infrastructure); contribution list; explicit statement that account compilation has independent purposes |
| 2 | Why provincial IBEI compilation is hard | 1,300 | §1's documented account, in full, from tier-1 sources only: SIRUSA activity design; published ML imputation with no per-indicator record; Papua at 0.00; Jakarta at 483.43; the 0.6819 factor; targets above the stated maximum; the four-vs-three-pillar conflict; the annual MEP cycle's Oct–Dec calendar as the window any supplier must hit |
| 3 | What ocean accounts are, and what makes them compilation infrastructure | 1,000 | SEEA-EA extent/condition/services/asset structure; stock–flow identity; MBSU spatial basis and aggregation to administrative units; provenance and revision as properties of accounting. Kept short and functional — this is not a SEEA primer, it is an argument about production |
| 4 | What Indonesia has already compiled | 1,200 | The verified inventory, every claim maturity-tagged and **re-checked against the primary MMAF and BPS documents in [00-background/](../00-background/), not taken from finding 02**. Indonesian practice now extends across **extent, condition and ecosystem services** — the services module is the material change since the deep-research pass and it moves several Tier C lines forward. Still to be stated every time: national extent series 2018 opening / 2021 closing; **34 provinces dashboard-selectable, one province with a documented published compilation** (NTB); condition measured on cover-based, Tier 1–2 indices rather than full multi-indicator composites, which is exactly the resolution indicators 19–21 ask for; monetary values benefit-transferred; ecosystems limited to mangrove, seagrass, coral; institutionalised at MMAF (Kepmen KP 44/2023), not as a BPS statistical release |
| 5 | Mapping: indicators the existing accounts can serve now | 1,400 | **Tier A.** Indicators 19, 20, 21 (cover-class percentages — claim 3's definitional match), 24 (rehabilitation area as an extent-account addition term), 27 (conservation area, with the provenance caveat that it is a designation). For each: the verbatim constituent data item, what the account already produces, the gap that remains (coverage, vintage, cover-class thresholds), and whether it is a coverage gap or a definitional one. Carries Table 2 |
| 6 | Conditions precedent for continued supply | 1,200 | What must be true for account output to enter an annually reported official index: an adopted national spatial standard (none found in any obtained document); a codified clipping rule at the 12-nm provincial limit under Law 23/2014; compilation inside the T-1 window against an observed ~4-year lag to public platform and a single 2021 closing year; a revision policy (none); a BPS statistical work-programme entry (none); Satu Data Indonesia metadata compliance; and a documented per-indicator imputation record so measured and predicted values can be told apart. Each tied to its TG circular (§7) |
| 7 | Mapping: what future compilation could serve | 1,900 | **Tier B, Tier C and the aspirational route.** Tier B — indicators reachable with existing TG method: fisheries and aquaculture, tourism, transport and ports, marine litter. Tier C — what accounts could let the index measure that it cannot now: services in physical units, asset depreciation against sectoral value added, net extent change as a stock–flow identity. **Then §7.3's social and governance material, which is the section's largest claim and needs ~600 words of its own:** the social pillar as an embryonic social account waiting on an ocean-sector classification standard; governance measured by a single count of fish auction places; the leverage inversion. Emerging status stated throughout. Carries Table 3 |
| 8 | What account supply does not fix | 900 | The bounded caveat, and the article's honesty test. Spatial aggregation to provinces discards the within-province distribution the account was built to show; the 12-nm clip is ecologically arbitrary; a variance-weighted composite assigns a near-zero-variance signed variable an unstable weight, so net extent change cannot simply be inserted; and where the index asks for village sanitation counts or hydropower capacity, no account is the right instrument and none should be built to try. Cite the Report's own §3.1.1 limitations here — BAPPENAS has already published the linearity, outlier, cross-sectional-weight and heterogeneity caveats, and the article extends rather than exposes them |
| 9 | Discussion: streamlining, not substituting | 800 | What changes operationally if Tier A is compiled: five data requests become one production run; provincial figures become reproducible and revisable; district figures for the RPJPD cascade come free; the imputation load falls for the indicators covered. What does not change: the weights, the aggregation, the index's own limits. Loose coupling — shared definitions, shared spatial units, parallel publication — as the interim architecture where substitution is not yet warranted |
| 10 | Conclusion and follow-on | 700 | Including the cost gap (§12) and the TG-5.1 Indonesia case study route (§11) |

**Draft §5 and §7 first.** They are the deliverables; everything else is framing that can be written
once the mapping is fixed. §2 second, because it is the factual base and is entirely tier-1 sourced.

## 6. Mandatory framing constraints

Inherited from [CLAUDE.md](../CLAUDE.md) and from the tier-1 brief. Not optional.

- **Cite or do not assert.** Every definition, date, figure and institutional arrangement carries a
  locatable source. Tier-1 claims cite the printed folio with the PDF page in brackets — `p. 94
  [pdf 104]`. Quote the Indonesian `content` field verbatim where the wording is load-bearing;
  `content_en` is a gloss for the drafter and is **never** a quotation source. Carry each `chunk_id`
  in the drafting notes so a citation-checker pass can verify it.
- **Maturity tags (a)–(d) on every claim that something exists.** Every Indonesian ocean account
  output is **tag (b)**, experimental or pilot. There is no BPS ocean or marine ecosystem account, no
  work-programme entry, no revision policy. The 2022 MMAF outputs are labelled by GOAP itself as
  preliminary consultation drafts; the national dashboard is a ministry product, not a statistical
  release. Specific formulations that must be used:
  - **34 dashboard-selectable provinces and one documented published compilation, always stated
    together.** Selectability is not compilation. Quoting 34 alone overstates maturity; quoting 1
    alone understates the national footprint.
  - **Account coverage now extends to extent, condition and services** — a change since the
    deep-research pass, and one the article must state from primary documents rather than from finding
    02, which reasoned from sources it could not open. **Extent** remains the only type with a verified
    opening/change/closing series. **Condition** is compiled on cover-based, Tier 1–2 indices — a
    measured value against a documented reference level — rather than full multi-indicator composites;
    say so precisely, because it is both a limitation of the account *and* the reason claim 3 works,
    the index asking for a cover-class percentage rather than a normalised composite. **Services** are
    the newest and least consolidated, and any claim about them must name the specific service and its
    valuation route.
  - **Unpublished compilations cannot be cited, and cannot be leaned on implicitly.** Where a fuller
    or more recent Indonesian compilation exists but is unpublished, its only legitimate use is to
    direct the search toward a published equivalent. No claim in the manuscript may rest on it —
    including by asserting a capability whose only demonstration is unpublished. If no published
    equivalent is found, the claim is made conditionally or dropped. This applies with particular force
    to §5, where the temptation is greatest.
  - **Monetary values are benefit-transferred** (Bohol, the Marianas, Mexico, Gazi Bay, Bintuni Bay)
    and are therefore not the exchange-value basis SEEA-EA requires. Any monetary claim inherits this.
  - **Ecosystem coverage is mangrove, seagrass and coral reef only.**
  - **National series is 2018 opening / 2021 closing**; only Gili Matra is 2015/2021. No text may imply
    a national 2015 baseline.
  - Cell-boundary nesting across administrative, WPP and PKKPRL frames is **asserted by GOAP, not
    evidenced** in any obtained document. Do not rely on it; list it as a condition precedent (§6).
  - **Overstating account maturity is the fatal error for this paper.** It is an article recommending
    that a national statistical process lean on pilot output. If the pilot status is soft-pedalled
    anywhere, the recommendation becomes irresponsible rather than merely optimistic.
- **What is and is not reconstructed, stated precisely.** The IBEI's methodology is **published** —
  three-stage PCA, PC1 loading-factor weights, Z-score standardisation at every stage (Juknis
  pp. 63–66 [pdf 73–76]), weights at all three levels (pp. 93–96), imputation framework (Report
  pp. 64–66), official variable definitions with T-1 reference periods (SIRUSA). Do not repeat the
  archived PRD's claim that weights and architecture are reconstructed. Four things genuinely are not
  available, and these are §8's limitations paragraph:
  1. The printed **formulae are illegible in the PDF text layer** at Juknis pp. 64–65 and Report p. 31;
     the three aggregation formulae are recorded from their variable definitions, not their glyphs.
     Notation only is reconstructed; the substance (Z-score inputs, loading-factor weights) is
     unambiguous.
  2. Whether **Tabel 4–6's percentages are loadings or normalised contributions** is unstated (§4).
  3. **Which indicators were imputed, for which provinces, by which model, at what error.**
  4. **Off-document material:** Annex 3's per-province spiderweb analysis behind
     `link.bappenas.go.id/LampiranJuknisIBEI`, and the 0.6819 factor.
- **Preserve all five recorded conflicts** (§8), and declare the article's pillar locus in §2: the
  four-pillar Tabel 1 structure or the three-pillar Tabel 4/5 structure. Any weight arithmetic depends
  on the choice, so say which and why.
- **No fabricated specificity.** No invented weights, hectare figures, decree numbers or costs. Where
  a figure is illustrative, label it. Compilation cost per site or per unit is **absent from the public
  record** (finding 02) — state that; never estimate it.
- **Two index editions exist** — a 35-indicator first edition (2022–23) and the 44-indicator edition
  analysed here (IBEI 2025 in the Juknis; the Report is IBEI 2024, December 2025 revision). Be explicit
  about which is in play and never blend them silently.
- **Do not engage Indonesian government agencies.** No data request, interview or correspondence. The
  four items above are therefore permanent limitations, not pending tasks. Published or publishable
  documents remain fair search targets.
- **Two prior claims are withdrawn and must appear nowhere.** (i) The mean-substitution / Z = 0
  imputation collapse: the published rule is ML prediction from socio-economic proxies. (ii) The
  Rinaldi et al. Sumatra paper as evidence about IBEI aggregation: it builds its *own* index with
  HDI-style min–max, arithmetic-then-geometric aggregation, and uses PCA only against multicollinearity
  before a Bayesian regression ([rinaldi-methods.json](../05-rag/rag-parts/rinaldi-methods.json)). Its
  legitimate uses are as an independent Indonesian index whose environmental dimension contains no
  ecosystem variable, and as a worked case of partly non-compensatory aggregation. Finding 05's
  arithmetic-mean characterisation of the IBEI is simply wrong; drop it rather than preserving it as a
  conflict.
- **One argument the article must make about its own imputation finding, carefully.** Where a province
  lacks an account, an account-derived indicator would be imputed from socio-economic proxies under the
  published framework — so the environmental value becomes partly a function of economic and social
  covariates. Under Scenario 1 (indicator unavailable in all provinces) the model trains on the
  previous cycle's historical data, which a newly introduced indicator does not have. State both as
  reasons to phase insertion behind coverage, which is a *design recommendation*, and resist the
  temptation to inflate it into a critique of the index. It belongs in §6 and §8, not in the thesis.
- **Not an attack on either institution.** Both programmes are serious and competently executed. §2 is
  a description of a capacity gap under a statutory obligation, not a fault-finding exercise, and its
  tone determines whether the paper is usable by the people who would have to act on it.

## 7. Future extension mapped to the GOAP Technical Guidance

The TG is the article's answer to "what could be compiled". It is 70 circulars in 7 sections —
Front Matter (TG-0.x), Decision-Making (1.x), Indicators (2.x), Accounts Compilation (3.x), Data
Methods (4.x), Case Studies (5.x), Thematic Methods (6.x) — at badges Core / Applied / Emerging and
statuses Planned / Draft / Completed. **Cite the badge and status wherever a circular is invoked**;
recommending an Emerging, Planned circular as a compilation route without saying so would be the same
maturity error §6 forbids on the Indonesian side.

### 7.1 Tier B — IBEI sub-pillars reachable with existing TG method

| IBEI sub-pillar (indicators) | TG route | Badge/status | What it would supply |
|---|---|---|---|
| G — resource quality: 19–21 condition | TG-6.1 Coral Reef Ecosystem Accounting; TG-6.2 Coastal Wetland and Seagrass; TG-6.3 Seagrass; TG-4.9 Biological Condition Measurement; TG-4.8 Physical Condition | Applied/Draft | Cover-class tabulation by province — the direct Tier A extension to national coverage |
| G — 24 rehabilitation, 27 conservation area | TG-3.1 Asset Accounts; TG-1.3 OA and Marine Spatial Management (incl. MPAs); TG-1.2 Marine Spatial Planning | Applied/Draft | Rehabilitation as an extent-account addition term; conservation designation reconciled to mapped extent |
| G — 25, 26 waste flows | TG-3.4 Flows from Economy to Environment; TG-6.12 Marine Litter and Plastics Accounting | Applied/Draft | Waste leakage as an accounted flow rather than a modelled estimate |
| A — capture fisheries and aquaculture: 1–8 | TG-6.7 Fisheries Accounting: Integrating Stock Assessment; TG-3.9 Aquaculture Accounts; TG-6.8 Aquaculture Thematic Methods; TG-4.10 Extending Fisheries Statistics | Applied/Draft | Production and value tied to stock status — the point where a production volume stops being a pure output measure |
| B — marine industry; C — trade, transport, logistics | TG-3.3 Economic Activity Relevant to the Ocean; TG-2.5 Structure and Function of the Ocean Economy; TG-6.10 Maritime Transport and Ports | Applied/Draft | Ocean-economy satellite structure; KBLI/ISIC-consistent industry boundaries |
| D — marine tourism | TG-6.14 Marine and Coastal Tourism Accounting | Applied/Draft | Tourism activity on a consistent industry definition rather than site counts |
| F — governance (indicator 18) | TG-3.7 Governance Accounts; TG-2.13 Governance and Institutional Indicators; TG-1.3 Marine Spatial Management | Emerging/Draft | **See §7.3** — the whole sub-pillar is one variable carrying 100% of its weight |
| I, J, K — welfare, education, health (indicators 32–44) | TG-3.5 Social Accounts; TG-3.12 Accounting for People; TG-3.13 GESI; TG-2.3 Social and Livelihood Dependencies | Emerging/Draft and Planned | **See §7.3.** An earlier draft of this PRD dismissed this row as "not an account route, BPS serves it better". That was wrong, and the register shows why |

### 7.2 Tier C — what accounts could let the index measure that it currently cannot

This is the more valuable half of claim 5, and the register is short and specific. None of these
appears anywhere in the 44-indicator set: the environmental pillar contains no ecosystem-services
variable, no asset value and no depletion term.

| Candidate addition | TG route | What it would let the IBEI say | Known obstacle |
|---|---|---|---|
| Ecosystem services in physical units | TG-2.4 Environmental (incl. Ecosystem) Goods and Services; TG-3.2 Flows from Environment to Economy | That a province's economy draws on a measured service flow, not just that it holds area | Services accounts are not compiled anywhere in Indonesia (tag c/d) |
| Marine ecosystem asset depreciation against sectoral value added | TG-3.1 Asset Accounts; TG-1.9 Safe Usage of Monetary Valuation | The trade-off diagnostic BAPPENAS actually wants — growth bought with natural capital | Monetary values are benefit-transferred, so this cannot yet be done credibly. TG-1.9 is the constraint, not the enabler |
| Net ecosystem extent change as a stock–flow identity | TG-3.1; TG-6.1/6.2/6.3 | Whether extent is being maintained, rather than how much rehabilitation was planted | A signed, near-zero-variance variable attracts an unstable PCA weight (§8). Recommend it as a *reported companion series*, not a 45th indicator |
| Offshore and marine renewable energy | TG-3.10 Offshore Energy Accounts; TG-6.9 Offshore Energy Thematic Methods | That sub-pillar H measures something marine. It currently measures solar PV and **hydropower** (Tabel 6; join rows 28–31), at 50.0% of the environment pillar | Indonesia's installed marine renewables are minimal; this is a forward recommendation, flagged as such |
| Combined presentations instead of a single score | TG-3.8 Combined Presentations | Environmental and economic series side by side, non-compensatory | Presentation choice, not a data gap. The realistic near-term win |

### 7.3 Social and governance accounting — the largest opportunity in the register

**This subsection reverses an earlier judgement in this PRD.** §7.1 previously dismissed the social
pillar as "not an account route; BPS household statistics serve it better". Reading the register's
constituent data items rather than its indicator names shows the opposite, and the consequence is the
most important quantitative finding in the paper.

**Aspirational framing is accepted and must be labelled.** TG-3.5 and TG-3.7 both carry the **Emerging**
badge and both state in their own text that standardised classifications and compilation approaches are
still under development and that the guidance is provisional. Say exactly that wherever this subsection
is used. What makes the aspiration legitimate rather than speculative is that a national ocean accounts
programme is underway in Indonesia — so the question is what a live programme should be asked to
produce next, not whether accounts might one day exist.

#### The social pillar is already a social account in all but name

All thirteen social indicators (32–44) are **fisheries-sector cuts of standard household statistics**.
Read the constituent data items:

| Indicator | Constituent data (verbatim, abbreviated) | TG-3.5 section it corresponds to |
|---|---|---|
| 32 — fisheries workers receiving PKH (%) | fisheries-sector population receiving PKH ÷ provincial PKH recipients | §3.2.3 decent work; social protection coverage |
| 33 — women workers in fisheries | capture fishers + fish farmers; proportion female | §4.5.4 employment characteristics by gender and formality; TG-3.13 |
| 34 — fishers and fish farmers | population whose occupation is fisher; population whose occupation is fish farmer | §3.2.2 **measuring ocean sector employment** |
| 35, 36 — fish calorie and protein consumption per capita | mean daily per-capita calorie/protein intake from fish, provincial | §4.5.5 **food security and nutrition** |
| 37 — fisheries workers with health insurance (%) | insured fisheries-sector population ÷ provincial insured population | §3.2.3 decent work |
| 38 — coastal population below the poverty line (%) | poor population of coastal regencies ÷ provincial poor population | §3.3.1, §4.5.3 income distribution by ocean dependency |
| 39–43 — maritime SMKs, fisheries graduates, training participants, education attainment | counts and sector shares | §3.2.2–3.2.3 (human capital); weakest correspondence |
| 44 — fisheries workers whose families receive PIP | recipient fisheries households ÷ provincial recipients | §3.2.3 social protection |

Every one of these requires the same thing to be computable: **a consistent, reproducible definition of
"the population working in the fisheries sector" as a survey domain**, joined to SUSENAS, SAKERNAS and
poverty statistics. That definition is not a household-survey problem — BPS already runs the surveys —
it is an **ocean-sector classification problem**, and it is precisely what TG-3.5 §3.2.2 operationalises
on the ISIC/KBLI-consistent industry boundary established in TG-3.3 and TG-1.1.

State the consequence plainly: **the social pillar is 30.5% of the index and its reproducibility rests
on an ocean-economy classification standard, which is an ocean-accounting deliverable.** No new survey
is required. This is the cheapest large improvement available anywhere in the register, and it is
invisible if the mapping is done against indicator names.

#### Governance: the entire sub-pillar is one count of fish auction places

Tabel 6 lists a single variable forming the governance sub-pillar — `econ_gov_var22`, *number of fishing
ports with a Fish Auction Place (TPI)*, at **100.0%** of the sub-pillar. Tabel 5 puts the sub-pillar at
15.8% of the Economy pillar, and Gambar 11 puts F at 5% of the index. So roughly **5% of Indonesia's
official blue economy index measures governance by counting auction halls.** The technology sub-pillar
is the same shape: one variable (marine capture vessels over 30 GT), ~1% of the index.

TG-3.7 supplies what a governance measure could be instead, and it is compilable rather than notional:
an institutional inventory (§3.1.3), legal-framework and policy-instrument accounts (§3.2.3, §3.3.4),
**compilable governance account tables** and a **spatial classification of designated marine uses**
(§3.3.5–3.3.6), COFOG-classified ocean expenditure (§3.6.2), MPA effectiveness (§3.4.2) and a governance
coverage index (§3.6.4), with data sources, classification challenges and update frequency treated
explicitly (§3.5). Note that TG-3.7 §3.5.4 addresses minimum viable accounts in low-capacity contexts,
which is the realistic entry point for a provincial rollout.

**One consequence for indicator 27 that belongs here rather than in §5.** Conservation area in hectares
is the single largest environmental variable at 22.0% of its sub-pillar (~4.06% of the index) and it
measures *designation*, not management. TG-3.7 §3.4.2 and TG-1.3 would let designated area be
qualified by management effectiveness — converting the index's largest environmental variable from an
area that has been gazetted into an area that is being managed. That is a governance-account
contribution to the environmental pillar, and it is the clearest single illustration of why the account
types should not be mapped pillar by pillar.

#### The leverage arithmetic, restated

This changes the paper's headline proportion and §4 must carry both figures together:

| Route | Share of the composite | Maturity |
|---|---|---|
| Extent, condition, services — the mature route | **~7.6%** (of which ecosystem condition ~2.3%) | Pilot compilation exists; TG circulars are Applied |
| Social pillar via an ocean-sector classification standard | **~30.5%** | TG-3.5 Emerging; no compilation anywhere |
| Governance sub-pillar | **~5%** | TG-3.7 Emerging; no compilation anywhere |
| Combined aspirational route | **~35%** | Emerging throughout |

**The inversion is the finding:** the account types that are mature address the smallest share of the
index, and the account types that address the largest share are the least developed. Say it in the
abstract. It reframes the paper from "accounts can supply a few environmental indicators" to "the
account development agenda and the index's own weak points point at the same place", which is a
materially more useful statement for a national programme deciding what to compile next.

**Guard rails, non-negotiable.** (i) Do not imply that social or governance accounts exist in Indonesia
— they do not, at any maturity above (c). (ii) Do not present the ~35% as achievable; present it as the
share of the index whose *production* these account types would bear on, which is a different and
smaller claim than improving 35% of the score. (iii) The social pillar's indicators are BPS outputs and
must stay BPS outputs — the account contribution is a classification standard and a compilation
architecture, not a substitute data source. Getting this wrong would breach the framing boundary in the
most direct way available.

#### One evidence caveat specific to this subsection

Where a fuller Indonesian compilation exists but is **unpublished**, it cannot be cited, and the article
must not rest any claim on it — including implicitly, by asserting a capability whose only demonstration
is unpublished. The forward register in §7.2 and §7.3 is therefore argued from **published pilot
material and the TG's stated method**, both of which are citable, and is labelled aspirational. Where an
unpublished compilation is known to exist, its only legitimate use is to direct the search toward a
published equivalent. If none is found, the claim is made conditionally or not at all.

### 7.4 TG circulars that carry the conditions precedent (§6 of the article)

TG-3.11 **Sub-National Ocean Accounts** (Emerging/Draft) is the single most relevant circular and its
sections map almost one-to-one onto this article's problem — sub-national spatial delineation,
regionalisation of national supply–use tables, provincial asset and extent/condition accounts, linking
to local planning, dashboards for local decision-makers. Read it in full before drafting §6, and cite
its Emerging status. Alongside it: TG-2.12 **Spatial Data Frameworks** (minimum mapping units, ocean
boundary definitions, temporal consistency, spatial uncertainty metadata) for the spatial standard and
clipping rule; TG-4.3 **Administrative Data Sources** and TG-4.6 **Data Harmonisation and
Interoperability** for the secondary-compilation dependency; TG-4.7 **National Data Coordination
Architectures** for Satu Data Indonesia and custodianship; TG-4.1 **Remote Sensing and Geospatial
Data** for the imagery basis; TG-0.7 **Quality Assurance Principles** and TG-0.8 **Implementation
Readiness Assessment** for the register's form; TG-1.10 **OA and National Planning Integration** for
the RPJPN/RPJPD cascade; TG-4.11 **Aligning Research Statistical Modelling with Official Statistical
Methods**, which is the natural place to situate the index's ML imputation.

**Reciprocal opportunity worth one paragraph in §10.** TG-5.1 **Case Study: Indonesia** is Applied and
**Planned** — unwritten. This article's §§2, 4 and 5 are most of what that case study needs. Name the
route: the article is the analytical basis, TG-5.1 is the guidance-facing output, and the two should
cite each other rather than duplicate.

## 8. Evidence map — tier-1 corpus, section by section

**Build:** [05-rag/](../05-rag/) per [BRIEF-standing-rules.md](../05-rag/BRIEF-standing-rules.md).
**Assembled schema:** [ibei-tier1-rag-schema.json](../05-rag/ibei-tier1-rag-schema.json) — 199 chunks,
all `citation.type: self`; 44-row `indicator_join_table`; 1 recorded conflict; 3 web-search candidates.
Work from the **per-slice files** in [rag-parts/](../05-rag/rag-parts/), not the 473 KB assembled file.
Page ranges and offsets in [read-plan.json](../05-rag/read-plan.json); raw text in
[slices/](../05-rag/slices/). Sources: `doc_1` Juknis Pedoman IBEI (BAPPENAS 2025, offset +10) ·
`doc_2` IBEI Report 2024, December 2025 revision (offset +12) · `doc_3` Rinaldi et al. 2024 (printed =
pdf + 1470) · `doc_4` SIRUSA metadata.

| Article § | Part file | Locator | What it supplies |
|---|---|---|---|
| §1, §2 | [sirusa-metadata.json](../05-rag/rag-parts/sirusa-metadata.json) (29) | kegiatan/94936; indikator/105371, 105709–105718 | The compilation-capacity case: annual, cross-sectional, secondary collection from KKP/BPS publications, no pilot, zero field staff, descriptive analysis, province-level estimation, T-1 reference periods; official variable definitions for indicators 19–21; 13 registered indicators |
| §2, §6 | [juknis-cascading.json](../05-rag/rag-parts/juknis-cascading.json) (12) | Juknis pp. 67–71 [pdf 77–81] | Perpres 12/2025; SEB Mendagri/Bappenas 2/2024; Tabel 2 provincial 2023 baseline / 2025 achievement / 2045 target; Chapter 4's annual MEP cycle with Phase 1 running Oct–Dec of year *n* — **the reporting window any supplier must hit** |
| §2 | [report-imputation.json](../05-rag/rag-parts/report-imputation.json) (16) | Report pp. 64–66 [pdf 76–78] | The published ML imputation framework: two scenarios, SUSENAS proxies, ensemble prediction, k-fold CV, domain constraints, inverse indicators computed post hoc; chunk 016 records what the annex omits |
| §2, §8 | [report-provincial.json](../05-rag/rag-parts/report-provincial.json) (11) | Report pp. 67–71 [pdf 79–82] | Published per-province sub-pillar, pillar and headline values, 37 provinces; Jakarta technology 483.43; three new Papuan provinces at 0.00; the 0.6819 factor; Annex 3 held off-document |
| §2, §4 arithmetic, §7 | [juknis-weights.json](../05-rag/rag-parts/juknis-weights.json) (17) | Juknis pp. 93–96 [pdf 103–106] | Gambar 11 (pillars 33/37/31; sub-pillars A 5, B 8, C 6, D 7, E 1, F 5, G 18, H 18, I 6, J 4, K 21); Tabel 4 (36.9 / 32.6 / 30.5); Tabel 5 (si_enviro_s1 50.0, si_enviro_s2 50.0); Tabel 6 variable weights and the sub-pillar-H composition |
| §4, §8 | [juknis-sensitivity.json](../05-rag/rag-parts/juknis-sensitivity.json) (12) | Juknis pp. 101–104 [pdf 111–114] | Tabel 7's 58 rows: environmental pillar +6.37%, resource-quality sub-pillar +4.50, conservation area +2.45, hydropower +2.39, **good-condition coral reef +0.41** |
| §3, §8 | [juknis-method.json](../05-rag/rag-parts/juknis-method.json) (15) | Juknis pp. 63–66 [pdf 73–76] | Published three-stage PCA; PC1 loading factors as weights; Z-score standardisation before each stage; §2.5.2 on the score as an unbounded principal component with mean ≈ 0 |
| §8 | [report-method.json](../05-rag/rag-parts/report-method.json) (22) | Report pp. 28–35 [pdf 40–47] | Gambar 3.1.1's full computation flow, including *"reverse indicator values (or drop the indicator) if a negative relation is found"*; the `index / Max(index) × 100` rescale and its conflict with the unbounded-score statement; **§3.1.1, the index's own limitations** — linearity, outliers, cross-sectional weights that "may become irrelevant", regional heterogeneity, and the recommendation to use sensitivity analysis |
| §5, §7, Table 2 | `indicator_join_table` (44 rows) + [juknis-register.json](../05-rag/rag-parts/juknis-register.json) (49) | Juknis pp. 11–13 [pdf 21–23] | **The join key.** All 44 indicators with verbatim `Data Pembentuk Indikator`. Every mapping row is scored against a constituent data item, never against an indicator name |
| §7, §8 | [rinaldi-methods.json](../05-rag/rag-parts/rinaldi-methods.json) (15) | Rinaldi et al. 2024, pp. 1477–1487 | An independent Indonesian blue economy index: HDI-style min–max + arithmetic + geometric aggregation; PCA only against multicollinearity before a Bayesian GRDP regression; environmental dimension holds no ecosystem variable. **Not** evidence about IBEI aggregation |
| §2, §6 | [cross-slice-conflict.json](../05-rag/rag-parts/cross-slice-conflict.json) (1) | Juknis pp. 11–13 and 93–94 | The four-pillar vs three-pillar conflict, unresolved |

**Five internal conflicts, all preserved, never silently resolved.** (1) Four pillars (Tabel 1, with an
*Enabler* pillar holding indicators 15–18) against three (Tabel 4/5, Gambar 11). (2) Bounded 1–100
rescale against an unbounded PC score, on one printed page (Report p. 33 [pdf 45]). (3) 2045 provincial
targets of 243.87 / 233.21 / 222.31 against a national target of 100.00. (4) 58 printed sensitivity
rows against 59 stated scenarios. (5) A 50.0 / 50.0 tie labelled High and Low. Collectively these are
better evidence for the article's compilation-capacity argument than any derivability percentage,
because they are traceability defects in the index's own published specification — exactly what
account provenance addresses.

**Non-tier-1 evidence, and what it is for.**

| Need | Source | Status |
|---|---|---|
| §4's account inventory, maturity tags, vintages, the 34/1 pair, benefit-transfer basis, institutional home | Finding 02 §§1–7, 11 | Sufficient as a research aid; the underlying documents (Kepmen KP 44/2023 via JDIH KKP, the BPS work programme) should each get one retrieval attempt |
| §5's grid and MBSU basis; Saleh Bay 10 m vs 25 m; no adopted national grid | Rahayu et al. 2024 (peer-reviewed, directly obtainable); Finding 02 §5 | Read the paper directly; it is the article's only peer-reviewed Indonesian account source |
| §6's statutory clip | Law 23/2014 Art. 27 | Verify against the statute text |
| §7's TG routes | oa-technical-guidance `src/circulars/` | Read each cited circular; quote badge and status |
| §8's PCA properties | OECD/JRC composite indicator handbook; PCA-weighting literature; **Report §3.1.1** | Cite the handbook for the general property and the Report for BAPPENAS's own admission. Never rest a methodological claim on a deep-research finding |
| §9's loose-coupling precedents (EU Blue Economy Observatory, South Africa OESA) | Finding 05 §§2.5, 3.3 | Reconnaissance-grade. One primary source read per precedent before citation. Do not use finding 05's unsourced 5%/95% figure, and do not adopt its verdict framing |

**Verification obligation.** Every source reached through a deep-research finding is read directly
before citation. The findings are a research aid; the same standard the workspace applies to
[03-outputs/](../03-outputs/) applies to them.

## 9. Figures and tables

Four, and each must carry an argument the text cannot make as efficiently.

- **Figure 1 — The IBEI compilation chain and where accounts enter.** From published sources
  (KKP/BPS publications, PODES, SIRUSA-registered variables) through imputation, standardisation,
  three-stage PCA and rescaling to the provincial score and the RPJPD target, with the annual MEP
  calendar along the top and the Tier A entry points marked. This replaces the archived PRD's
  loss-annotated schematic and is the paper's most load-bearing graphic. The existing
  [oa_ibei_mapping_diagram.html](../03-outputs/oa_ibei_mapping_diagram.html) is pre-research and should
  be rebuilt, not adapted.
- **Table 1 — The compilation-difficulty register.** One row per documented symptom from §2: symptom,
  what the published source says, locator, and which account property (spatial unit, provenance,
  stock–flow identity, periodicity) bears on it. Effectively an abstract of the article's problem
  statement.
- **Table 2 — Tier A mapping, indicator level.** Columns: indicator no. · pillar/sub-pillar ·
  constituent data item (verbatim, Indonesian) · published variable weight and tertile · share of
  composite · account type that would supply it · what already exists (with maturity tag) · what is
  missing, classified as *coverage*, *vintage*, *definition* or *spatial standard*. **Indicator rows,
  not group rows** — the archived PRD's objection to per-indicator rows was that ratings were
  researcher judgement, and the join table's constituent data items remove it. Keep it to the ~10 rows
  Tier A and Tier B-adjacent actually reach; a 44-row version belongs in a supplementary annex.
- **Table 3 — Future extension against the Technical Guidance.** §7.1 and §7.2 combined: IBEI
  sub-pillar or candidate addition · TG circular · badge and status · what it would supply · known
  obstacle. The badge/status column is not decoration — it is what keeps the recommendation honest.

Dropped from v1: the PCA reweighting figure. It illustrates a property §8 can state in three sentences,
and the space is better spent on Figure 1. If a reviewer asks for it, the published weights in Tabel 6
make an empirical version possible, which is a better answer than the synthetic one.

## 10. Venue

| Venue | Fit | Would require |
|---|---|---|
| **Marine Policy** (recommended) | Strong. Rewards institutional and implementation analysis, takes the statutory framing, and the length target matches | Nothing beyond the current evidence base |
| **Ocean & Coastal Management** | Also strong, and arguably the better home for a streamlining argument | Foregrounding the institutional pathway from finding 04 |
| **Environmental and Sustainability Indicators** | Direct topical fit for the mapping | Likely an empirical demonstration on provincial data, which cannot be supported without account compilation |
| **Ecological Economics** | Weaker for this version — it suited the loss-typology paper | A formalised loss metric; that is the archived PRD's paper, not this one |

Draft to Marine Policy length and register. Decide between it and Ocean & Coastal Management once §§5
and 7 exist, since the balance between institutional and methodological weight will be clear then.

## 11. Authorship and follow-on

**No engagement with Indonesian government agencies.** Co-authorship is therefore not an access route,
and the archived PRD's strongest argument for it — access to unpublished IBEI methodology — is void
anyway now that the Juknis is in hand.

Two reasons remain, and both are stronger for this paper than for the critique paper:

1. **Language and source access.** Key material is Indonesian-only (*indeks ekonomi biru*, *neraca
   laut*, *unit spasial dasar laut*, *peta jalan ekonomi biru*, *Satu Data Indonesia*), and every
   tier-1 quotation is Indonesian.
2. **Standing and usability.** A paper recommending how a national statistical process could be
   streamlined is received very differently with Indonesian authorship, and is more likely to be acted
   on. This paper wants to be used, which the critique paper did not need in the same way.

Candidates are academic and non-government research institutions, not agencies: IPB; Indonesian marine
policy and statistics researchers; non-government technical partners in the accounts programme such as
Rekam Nusantara. **Rahayu et al. 2024 (the Saleh Bay MBSU paper) already has Indonesian and UNSW
co-authors and is the natural existing connection** — and its content sits directly in §5. Approach
during drafting of §4.

**Follow-on, in descending order of value.**

1. **A cost study.** No per-site or per-unit compilation cost exists in the public record for Indonesian
   ocean accounts (finding 02 §7). Without it nobody can price national coverage, which is the decision
   BAPPENAS and MMAF actually face, and which this article's recommendation implies. This is now the
   most policy-useful gap in the whole record, and the article must state its conditions precedent
   without costing them.
2. **TG-5.1 Case Study: Indonesia**, per §7.3 — the guidance-facing output of the same material.
3. **A Tier A pilot on one province.** NTB is the only province with a documented published
   compilation; compiling its indicators 19–21 to the IBEI's own cover-class definition and comparing
   against the published provincial value would test this article's central claim empirically. Not
   available to this project, but it is the obvious next study and should be named as such.
4. **The archived loss-typology paper** (§13), if the analysis is to be published at all.

**Sustainability risk for §10 of the article:** the 2025 independent GOAP evaluation records a funding
gap from March 2026 for the Secretariat that has provided Indonesia's technical support (finding 02
§7). Any recommendation assuming continued external technical assistance must note it.

## 12. Definition of done

Evidence and citation

- [ ] Every tier-1 claim carries its `chunk_id` in drafting notes and its printed folio in the
      manuscript, as `p. 94 [pdf 104]`; Indonesian quoted verbatim where load-bearing; `content_en`
      never quoted
- [ ] Every source reached via a deep-research finding read directly before citation
- [ ] TG-3.11, TG-2.12, TG-4.8, TG-4.9, TG-4.3, TG-4.7 and every circular cited in Table 3 read in
      full, with badge and status quoted
- [ ] Rahayu et al. 2024, Law 23/2014 Art. 27, the OECD/JRC handbook and Report §3.1.1 read in full
- [ ] One retrieval attempt each on Kepmen KP 44/2023 (JDIH KKP), the BPS statistical work programme,
      the Bogor Strategic Action Plan and the Statistics Norway workplan

Accuracy

- [ ] All five internal conflicts preserved; the article's pillar locus declared in §2
- [ ] Every account-maturity claim tagged (a)–(d); every Indonesian account output stated as tag (b)
- [ ] The 34-selectable / 1-documented pair stated together at every point of use
- [ ] No claim that a normalised condition account exists; claim 3 shown not to depend on one
- [ ] National series stated as 2018/2021; no implied national 2015 baseline
- [ ] Monetary claims carry the benefit-transfer caveat; no monetary derivability asserted
- [ ] The Z = 0 / mean-substitution imputation argument absent; the published ML mechanism used
- [ ] The Rinaldi paper never cited as evidence about IBEI aggregation; finding 05's arithmetic-mean
      characterisation absent
- [ ] Finding 05's 5%/95% figure and verdict framing absent
- [ ] Compilation cost stated as absent from the public record, never estimated
- [ ] Both index editions distinguished; no silent blending
- [ ] No surviving "36/44" language — the register is complete at 44

Argument

- [ ] §4's weight arithmetic shown as an explicit multiplication, with the loadings-vs-normalised
      caveat attached at first use and in the limitations
- [ ] The ~2.3% ecosystem-condition and ~7.6% account-addressable figures stated early and not
      oversold, and **never without the ~30.5% social / ~5% governance counterpart in the same
      passage**; the leverage inversion stated as such
- [ ] Social and governance material (§7.3) labelled Emerging on both sides — TG-3.5 and TG-3.7 carry
      the badge and say so themselves; no Indonesian social or governance account implied to exist
- [ ] The social-pillar claim confined to what it supports: an ocean-sector **classification standard**
      and compilation architecture, with the indicators remaining BPS outputs. No implication that
      accounts would supply household statistics
- [ ] The ~35% combined figure presented as the share of the index whose *production* these account
      types bear on, never as achievable improvement
- [ ] Governance sub-pillar's single-variable composition (indicator 18 at 100.0%) stated from Tabel 6,
      with the pillar-locus caveat: under the four-pillar locus indicator 18 sits in Enabler, under the
      three-pillar locus in Economy/governance
- [ ] Indicator 27's designation-versus-management point made once, in §7, tied to TG-3.7 §3.4.2 and
      TG-1.3 — not repeated in §5
- [ ] No claim rests on an unpublished compilation, explicitly or implicitly; every §5 capability claim
      traced to a published source or stated conditionally
- [ ] §4 re-checked against the primary MMAF and BPS documents in [00-background/](../00-background/);
      no maturity claim carried over from finding 02 unverified
- [ ] Tabel 7's +6.37% environmental-pillar result engaged in §4, in two sentences, with the coral
      +0.41 reconciliation
- [ ] Table 2 built at indicator level against verbatim constituent data items, with the missing-element
      column classified as coverage / vintage / definition / spatial standard
- [ ] Tier C register states, for each candidate, what it would let the index say **and** its known
      obstacle
- [ ] §8 written before §9, and states plainly what account supply does not fix
- [ ] Sub-pillar H's non-marine composition and the village-sanitation weight comparison both stated
      from published weights, without editorialising
- [ ] The independent-purposes statement (accounts are not compiled to serve the index) present in §1
      and §9
- [ ] Institutional division held throughout: BAPPENAS plans, MMAF and BPS produce statistics

Close-out

- [ ] Indonesian co-author secured from an academic or non-government institution, or a documented
      decision to proceed without one
- [ ] Full draft within 9,000–10,000 words
- [ ] Venue selected between Marine Policy and Ocean & Coastal Management, and formatted to it
- [ ] [03-outputs/](../03-outputs/) concept note and Annex A updated or explicitly retired, so the
      superseded 61% derivability claim stops circulating
- [x] Tier-1 corpus built and indexed to article sections (§8)
- [x] v1 archived rather than deleted, with the surviving analysis identified (§13)

## 13. What was carried over from v1, and what was not

**Carried, repurposed.** The spatial-aggregation and boundary analysis (v1 §§4–5) becomes §6's spatial
standard and clipping rule — the same evidence, read as a requirement rather than an objection. The
temporal analysis (v1 §6) becomes §6's periodicity condition and is the most directly relevant material
in the archived PRD. The compensability and variance-weighting analysis (v1 §§7, 7b) becomes §8's
bounded caveat and the Tier C obstacle column. The loose-coupling architecture (v1 §9) becomes §9's
interim recommendation. All framing constraints, maturity conventions and the tier-1 index carry over
unchanged.

**Not carried.** The five-class loss typology as a thesis; the sign-inversion headline; "coverage is
not the binding constraint" and the two-constraints reconciliation built on it; the §8 counterfactual
hinge; the derivability-percentage narrative (61 → 39 → 2.8) other than as a one-line caution that no
such figure carries weight on its own; the comparative precedent leg from finding 05, which belongs to
the critique paper; and the PCA reweighting figure.

**If both papers are eventually written, publish this one first.** Publishing "do not substitute" ahead
of "here is how to supply it" makes the second look like a retraction; in the other order the critique
reads as the limitation section the enabling paper honestly flags.
