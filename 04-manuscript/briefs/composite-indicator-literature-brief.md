# Composite-indicator methodology literature — evidence brief

**Task:** `ibei-0vx`. **Date:** 2026-08-17.
**Purpose:** close the hole recorded in [../REFERENCES-verified.md](../REFERENCES-verified.md) ("The
remaining hole") and referee item M9, by sourcing composite-indicator methodology literature from
outside the project folder and identifying which works can be read *against* the manuscript's
conclusion.

All six entries below were verified at source this session — bibliographic details taken from the
publisher record or the document's own imprint, not from a filename or a secondary listing, per the
project's citation convention. Quoted passages are verbatim from the extracted text.

---

## The six works

### 1. Nardo et al. 2008 — the canonical handbook *(anchor; also cuts against)*

> Nardo, M., Saisana, M., Saltelli, A., Tarantola, S., Hoffman, A., Giovannini, E., 2008. *Handbook
> on Constructing Composite Indicators: Methodology and User Guide*. Paris: OECD Publishing,
> jointly with the European Commission Joint Research Centre. Print ISBN 978-92-64-04345-9;
> doi:10.1787/9789264043466-en.

This is the work whose absence the project recorded. It supplies the seven-step framework — theoretical
framework, variable selection, imputation of missing data, multivariate analysis, normalisation,
weighting and aggregation, presentation — against which the IBEI's published method can be situated as
an instance rather than an idiosyncrasy.

**Two passages bear directly on this manuscript.** §6.1, on weights derived from principal components:

> "According to PCA/FA, weighting intervenes only to correct for overlapping information between two
> or more correlated indicators and is not a measure of the theoretical importance of the associated
> indicator. If no correlation between indicators is found, then weights cannot be estimated with this
> method."

And a footnote to the weighting chapter (p. 31, note 4):

> "With both linear and geometric aggregations weights are trade-offs and not 'importance'
> coefficients."

**Why this matters here.** The IBEI derives its weights from PC1 loading factors and aggregates
linearly over Z-scores. On the handbook's own account, such weights therefore measure information
overlap and embody trade-offs; they are *not* measures of the importance of the associated indicator.
The manuscript prices its tiers with exactly those numbers — 7.64%, 18.9%, 26.1% — and reads them as
shares of the composite that a route "bears on". That reading needs qualifying against the standard
reference in the field.

**It also supports §8.3.** The second sentence of the quoted passage — weights cannot be estimated
where no correlation is found — is methodological support for the manuscript's argument that a
near-zero-variance signed net-extent-change variable cannot simply be inserted. §8.3 currently rests
that argument on the index's own statement of the mechanism with no literature behind it, which
`REFERENCES-verified.md` flags as an exposure.

### 2. Paruolo, Saisana & Saltelli 2013 — nominal weights are not effective importance *(against)*

> Paruolo, P., Saisana, M., Saltelli, A., 2013. Ratings and rankings: voodoo or science? *Journal of
> the Royal Statistical Society: Series A (Statistics in Society)* 176(3): 609–634.
> doi:10.1111/j.1467-985X.2012.01059.x.

Measures each variable's actual influence on a composite via Pearson's correlation ratio (the "main
effect") and compares it to the variable's nominal weight, across five composite indicators including
the HDI. Finding: because socio-economic variables are heteroscedastic and correlated, relative nominal
weights *hardly ever* match relative main effects, and in many cases declared importance and main
effect diverge sharply.

**Why this is the sharpest challenge in the set.** The IBEI is a composite over correlated provincial
socio-economic variables with data-derived weights — precisely the configuration in which this paper
finds divergence. The manuscript's headline inversion is a comparison of two *nominal* weight sums. If
nominal and effective importance diverge here as they do in the five indices examined, the inversion
may not survive translation into effective influence, and the direction of the divergence is not
predictable from the published record.

### 3. Becker et al. 2017 — closing the gap *(against; also the constructive remedy)*

> Becker, W., Saisana, M., Paruolo, P., Vandecasteele, I., 2017. Weights and importance in composite
> indicators: closing the gap. *Ecological Indicators* 80: 12–22. doi:10.1016/j.ecolind.2017.03.056.

The follow-on to Paruolo et al. It rejects the assumption that nominal weights equal importance and
supplies three tools: a correlation-ratio measure of each indicator's importance with confidence
intervals, a decomposition separating correlation-driven from structure-driven influence, and a
numerical optimisation that solves for the weights which would deliver an intended importance.

**Use.** This is what makes the objection actionable rather than merely deflating. It names the test a
future study would run on the IBEI, which suits a paper that already ends on follow-on studies
(§10.3). It cannot be run here — it needs the underlying provincial variable matrix, which is
unpublished — and saying so is a bounded, checkable statement of what the published record will not
support.

### 4. Ravallion 2012 — mashup indices and the dashboard alternative *(against, at the framing level)*

> Ravallion, M., 2012. Mashup indices of development. *The World Bank Research Observer* 27(1): 1–32.
> doi:10.1093/wbro/lkr009.

Defines a "mashup index" as a composite "for which existing theory and practice provides little or no
guidance for its design", so that "the index has an unusually large number of moving parts, which the
producer is essentially free to set". Poses four demands — conceptual foundations, the trade-offs
embodied, contextual factors, and sensitivity of rankings to changes in data and weights — and closes:

> "nagging doubts remain about the value-added of mashup indices, and their policy relevance, relative
> to the 'dashboard' alternative of monitoring the components separately."

**Why it is an objection to this manuscript specifically.** The paper's project is to improve the
*inputs* to a composite. Ravallion's argument is that the composite may not be worth the aggregation in
the first place, and that the components are better monitored separately. On that reading, ocean
accounts should feed a dashboard directly and the index is the wrong target — an argument sharpened by
the manuscript's own concession at §10.1 that the contribution "is not that they can supply a
meaningful fraction of it".

**The manuscript has a strong answer and should give it.** The IBEI is a statutory obligation under
Perpres 12/2025, scored annually for every province. The dashboard alternative is not available to
BAPPENAS, so the composite exists whether or not the literature approves of composites, and the
question of what feeds it is live regardless. That answer is available from evidence already in the
paper and costs two sentences. It is also the paper's framing boundary restated, so it does not open
new scope.

### 5. Halpern et al. 2012 — the ocean composite comparator *(anchor)*

> Halpern, B.S., Longo, C., Hardy, D., McLeod, K.L., Samhouri, J.F., Katona, S.K., et al., 2012. An
> index to assess the health and benefits of the global ocean. *Nature* 488(7413): 615–620.
> doi:10.1038/nature11397.

The Ocean Health Index: ten goals for a coupled human–ocean system, computed for every coastal
country, global score 60 of 100 across a 36–86 range. The manuscript currently has no comparator index
in the marine domain at all, which is part of why its novelty claim is hard to situate: the IBEI reads
as *sui generis* when it belongs to a recognised family of ocean composites.

### 6. Frazier, Longo & Halpern 2016 — gapfilling, disclosed *(the precedent the paper most needs)*

> Frazier, M., Longo, C., Halpern, B.S., 2016. Mapping uncertainty due to missing data in the global
> Ocean Health Index. *PLOS ONE* 11(8): e0160377. doi:10.1371/journal.pone.0160377.

Quantifies how much of the OHI rests on gapfilled rather than observed data: **18.5% of the overall
global score**, varying from **1% to 43% across the ten goals**, and reaching **60% or more for ten
regions**, which are predominantly small, isolated island territories — roughly 65% of the variation in
gapfilling across regional scores being explained by region size and territorial status. The authors
recommend tracking gapfilling from the start of index development, selecting gapfilling methods by
analytical test such as cross-validation, and **presenting gapfilling information in the same framework
as the index scores themselves**.

**Why this is the most valuable of the six.** The manuscript's sharpest primary finding is the IBEI's
own disclosure that an indicator observed in no province can still be predicted for every province, and
that the per-indicator application of the imputation framework is unpublished. At present that finding
rests on the index's own admission and reads as an Indonesian documentation failure. Frazier et al.
converts it into an instance of a known problem in ocean composites *with a published remedy already
demonstrated on a comparable index* — and one that is a reporting reform, not a data-collection
programme, so it sits inside the manuscript's own no-new-collection framing and inside the
no-agency-engagement constraint.

It also supplies the missing quantitative comparator: the OHI states its gapfilled share and where it
falls; the IBEI publishes a framework and no per-indicator record. That is a like-for-like comparison
the paper can make without asking anyone for anything.

---

## What this does to the argument

**It licenses the novelty claim, which is the point of the exercise.** `REFERENCES-verified.md`
identified the consequence of the hole precisely: without this literature the Introduction "cannot
establish that the IBEI's construction is a recognised class of problem rather than an idiosyncratic
Indonesian one, which is the move that licenses the novelty claim." Nardo et al. supplies the class,
and Frazier et al. supplies a same-domain instance with a remedy.

**It does not damage the paper's thesis, and it strengthens two concessions the paper already makes.**
The manuscript already concedes at §5.4 that PCA weights are re-estimated from data so a substitution
is not weight-invariant, and at §8.5 that whether Tabel 4–6's percentages are raw loadings or
normalised contributions is unstated. Both are currently framed as *Indonesian documentation gaps*.
Nardo et al. §6.1 and Paruolo et al. reframe them as generic properties of PCA-weighted linear
composites. That is a better argument, not a worse one: it means the manuscript's caution was
principled rather than local.

**What must change, honestly.** §9.2 lines 126–129 currently states that "No source located by this
study argues the contrary position directly … and the position advanced here should be read as adjacent
to those two rather than as contested by a settled literature." That statement was accurate when
written. It is no longer accurate: Ravallion 2012 contests the value of the composite the paper
proposes to supply, and Nardo et al., Paruolo et al. and Becker et al. contest whether the nominal
weights the paper prices with mean what the pricing takes them to mean. The sentence must be replaced,
not merely supplemented.

**Word cost.** Roughly 300–350 words of new prose across §§9.1–9.2, plus six reference entries. This
worsens the overrun tracked as `ibei-3s4`, which is why that task is sequenced after this one.

---

## Placement

| Where | What | Words |
|---|---|---|
| §9.1, after the "Everything downstream of the input is untouched" paragraph (line 87) | The weights-versus-importance objection: Nardo et al. §6.1 and Paruolo et al. against the pricing; Becker et al. as the test a future study would run; state that it cannot be run on the published record. | ~180 |
| §9.1, at the imputation paragraph (lines 67–72) | Frazier et al. as precedent and named remedy — the OHI's disclosed 18.5% gapfilled share against the IBEI's unpublished per-indicator record. | ~90 |
| §9.2, replacing lines 126–129 | Ravallion's dashboard objection and the statutory answer; retract the "no source argues the contrary" concession. | ~110 |
| §8.3 | One clause citing Nardo et al. §6.1 for the no-correlation-no-weights point. | ~25 |
| §1 or §2 | One sentence placing the IBEI in the ocean-composite family (Halpern et al.) so the novelty claim has a frame. | ~30 |
| `REFERENCES.md` | Six entries, all primary. | — |
