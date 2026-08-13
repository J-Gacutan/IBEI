# Deep Research Prompt 01: IBEI Specification

*Foundational. Run first or in parallel with 02. Output feeds Prompt 03.*

---

## 0. Status against returned findings

**Run. Substantially closed — do not re-run as a search task.** See
[01-ibei-specification-findings.md](../02-research-findings/01-ibei-specification-findings.md).

The breakthrough was that IBEI metadata is registered in the BPS SIRUSA database
(*Kompilasi Penyusunan Indonesia Blue Economy Index 2025*) to satisfy Satu Data Indonesia
interoperability, exposing definitions and formulas that BAPPENAS itself has not published.

| RQ | Status | What the findings established |
|---|---|---|
| RQ1.1 Indicator register | **Partial — 36 of 44** | 44 indicators across 11 sub-pillars; 36 identified with definitions, units, custodians, direction of desirability. Gap is ring-fenced to 8 indicators in sub-pillars B (Industry), E (Technology), F (Governance), I (Welfare) |
| RQ1.2 Aggregation architecture | **Closed** | Multi-stage PCA (three hierarchical stages), Z-score standardisation, additive linear combination, final min–max rescale to 0–100. **Full compensability confirmed** — no geometric aggregation or non-compensatory thresholds |
| RQ1.3 Version history | **Closed** | 35 indicators (1st edition, 2022–23) → 44 (2nd edition, post-Oct 2023 ToT). Pre-2023 scores are mathematically incomparable to post-2024 without recalculation |
| RQ1.4 Publication status | **Closed** | Top-line scores public (South Sulawesi 80.86 high, DI Yogyakarta 10.37 low, 2023; Kepri 44.60, 2024); technical documents gated in BAPPENAS Komens |
| RQ1.5 Environmental pillar | **Closed** | 37% of index variance, 13 indicators. Of the 9 in Marine Resource Quality: 3 state, 2 pressure, 4 policy-output. All point-in-time; none use change-over-time |
| RQ1.6 Data supply chain | **Closed** | Custodians mapped (BPS/Susenas/Podes, KKP, KLHK, BRIN, ESDM); temporal mismatch documented — economic data current, ecological data multi-year lagged |
| RQ1.7 Documented critique | **Closed** | PCA weight opacity; provincial aggregation masking intra-province inequality (Rinaldi et al. 2025 — most Sumatran regencies score below 20); output-proxy critique |

**Residual gaps — a data request, not a research task.** The 8 missing indicator names, the
missing-data imputation strategy, and the raw PCA loading matrices are all gated in three named
internal documents (*Laporan Penyusunan IBEI 2024*; *Petunjuk Teknis Pedoman Indikator Ekonomi
Biru RPJPN 2025-2045*; the STATA output logs). No further public-source search will recover them.

**Two cautions carried downstream.** The recovered sub-pillar weights sum to 80.8%, not 100%, and
the Social pillar's constituents sum to 12.8% against a stated 31% — the source is a presentation
slide, so treat all weights as indicative of 2024 dataset variance, never as fixed constants.
And because PCA weights are variance-derived, they shift whenever the data distribution changes:
adding any new indicator reweights the entire index.

---

## 1. Objective

Recover the **authoritative technical specification of the Indonesia Blue Economy Index (IBEI)** from primary sources. Not a description of what the IBEI is for — a reconstruction of what it actually computes, indicator by indicator.

This is a document-recovery and metadata task before it is an analytical one. The value is in the register, not the commentary.

---

## 2. Background

The IBEI was developed by **BAPPENAS** (Ministry of National Development Planning) with EU support, delivered in part through the **ARISE+ Indonesia** programme, to monitor blue economy progress across Indonesian provinces. It is structured around three pillars — economy, social, environment — with governance and technology as enablers, and is commonly described as containing 35+ indicators. It sits within the **Blue Economy Roadmap (2023–2045)** and its phased implementation, and connects to the **RPJMN** planning cycle and the **National Blue Economy Action Plan (NBAAP)**.

Downstream work in this project attempted to map IBEI indicators against ocean account outputs but had to **reconstruct the indicator list from secondary descriptions**, because official indicator metadata was not located. Every downstream conclusion is therefore provisional. Closing that gap is this prompt's entire purpose.

---

## 3. Research Questions

### RQ1.1 — The indicator register (core deliverable)
What is the complete, current, authoritative list of IBEI indicators? For each one, capture as much of the following as sources permit:
- Indicator name (English and Bahasa Indonesia)
- Pillar / enabler assignment and any sub-dimension
- Precise definition and unit of measurement
- Computation formula
- Normalisation method (min–max, z-score, distance-to-target, benchmark year, etc.)
- Weight within its sub-dimension, pillar, and the composite
- Data source and custodian agency
- Update frequency and reporting lag
- Spatial resolution (province, district, other)
- Available time series — first year, latest year, gaps
- Direction of desirability (higher-is-better / lower-is-better)

### RQ1.2 — Aggregation architecture
How are indicators combined? Specifically: the normalisation approach, the weighting scheme and how weights were determined (expert elicitation, equal weighting, PCA, AHP, participatory process), the aggregation function (arithmetic, geometric, other), whether compensability between pillars is permitted, and how missing data is handled. Is there any published sensitivity or uncertainty analysis of the composite?

### RQ1.3 — Version history
Does the indicator set differ between the **1st and 2nd editions of the Blue Economy Roadmap**? Has there been a post-2024 revision, refresh, or expansion? What drove any changes? Is there a scheduled indicator refresh cycle, and if so, when is the next one and who governs it?

### RQ1.4 — Publication and access status
Is there a published IBEI metadata handbook, technical annex, methodological guideline (*pedoman*), or public dashboard? Have index results actually been published for provinces — if so, which years, which provinces, and what scores? Is the index operational, pilot-stage, or still in design? Is any of it restricted to internal BAPPENAS use?

### RQ1.5 — The environmental pillar in detail
Because this pillar is the focus of downstream integration work, treat it with extra depth. For each environmental indicator: is it a **stock** measure, a **flow** measure, a **pressure/response** measure, or a **policy-output** measure? Does any environmental indicator currently use change-over-time rather than point-in-time values? Which agency supplies each one?

### RQ1.6 — Data supply chain
Which agencies currently supply IBEI data (BPS, MMAF/KKP, BIG, KLHK, provincial governments, others)? Is data supply governed by any formal protocol, *Satu Data Indonesia* arrangement, or ad hoc request? Where do current data gaps or provincial coverage failures sit?

### RQ1.7 — Documented critique
What published critique exists of the IBEI's construction — in academic literature, evaluation reports, EU/ARISE+ programme reviews, or Indonesian policy commentary? Are known weaknesses in the environmental pillar already documented by others?

---

## 4. Sources to Prioritise

**Tier 1**
- BAPPENAS: *Peta Jalan Ekonomi Biru* / Blue Economy Roadmap, 1st and 2nd editions, both language versions, **including all annexes** — indicator specifications are typically annexed rather than in the body
- BAPPENAS technical guidelines, *pedoman*, metadata handbooks, and any IBEI dashboard or portal
- RPJMN 2025–2029 and its indicator annexes; RKP annual work plans; NBAAP documents
- ARISE+ Indonesia: project outputs, capacity-building materials, training decks, final reports on IBEI enhancement — workshop materials often carry indicator tables that formal publications omit
- EU Delegation to Indonesia project documentation and evaluations
- BPS metadata for any dataset feeding the index (SUSENAS, SAKERNAS, marine/coastal statistics)

**Tier 2**
- *Frontiers in Marine Science* (2024) on blue economy governance and the IBEI, and its supplementary materials
- Indonesian academic literature and theses on *indeks ekonomi biru* — university repositories (IPB, UI, ITB, UNDIP) frequently reproduce official indicator tables
- Composite indicator methodology literature for assessing the aggregation design

**Tier 3**
- Conference presentations, webinars, and slide decks by BAPPENAS staff — often the only public source of indicator-level detail
- News coverage for launch dates and institutional signals only

**Search strategy notes:** search Bahasa Indonesia first for official documents. Try *indeks ekonomi biru Indonesia*, *IBEI Bappenas*, *peta jalan ekonomi biru lampiran*, *indikator ekonomi biru provinsi*. Check document repositories directly (bappenas.go.id, ariseplus-indonesia.org) rather than relying on search indexing. Look for PDFs of workshop and *bimtek* materials.

---

## 5. Method Requirements

1. **The register is the deliverable.** Prioritise completeness and precision of the indicator table over narrative analysis.
2. **Per-indicator sourcing.** Every row carries a citation. Where a field is unavailable, write "not published" — never fill it by inference.
3. **Flag every reconstruction** explicitly, with a confidence level (high / medium / low) and the basis for the inference.
4. **Reconcile counts.** If sources disagree on how many indicators exist, present each figure with its source and edition, and do not average or pick silently.
5. **Preserve original language.** Give Bahasa Indonesia indicator names alongside English; translation drift is a real source of mapping error downstream.
6. **Report the search.** Note which Tier 1 documents you looked for and could not obtain — that list is itself a finding, and determines whether a data request to BAPPENAS is necessary.

---

## 6. Required Outputs

1. **Verified IBEI indicator register** — one row per indicator, columns per RQ1.1, with a `sourced` / `reconstructed` flag and citation on each.
2. **Aggregation methodology note** — normalisation, weighting, aggregation, missing-data handling, with the source for each element.
3. **Version comparison table** — indicator set by Roadmap edition, showing additions, removals, and redefinitions.
4. **Environmental pillar deep-dive** — each environmental indicator classified as stock / flow / pressure / policy-output, with its data custodian.
5. **Data supply chain map** — indicator → supplying agency → governing protocol → known gaps.
6. **Publication status assessment** — what is public, what is internal, what appears not to exist.
7. **Documented critique summary** — existing published criticism of IBEI construction.
8. **Unobtained-documents list** — Tier 1 sources sought but not found, with what each would have resolved, ranked by importance. This becomes the data-request agenda.
9. **Source list** with access dates, language, and reliability note.

---

## 7. Constraints

- Do **not** design an improved IBEI. This prompt documents what exists.
- Do **not** map to ocean accounts here — that is Prompt 03's job, and doing it early biases the register toward account-shaped descriptions.
- A short, rigorously sourced register beats a long speculative one. If only 12 of 35+ indicators can be verified, deliver 12 verified rows and name the gap.

---

## 8. Success Criteria

A BAPPENAS technical officer reads the register and recognises their own index — correct indicator names, correct units, correct weights — or the output states plainly and specifically which parts could not be verified from public sources and what must be requested to complete them.
