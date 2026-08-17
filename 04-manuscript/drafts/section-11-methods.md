# Methods

**Design.** The study is a documentary analysis of two published specifications read against each
other: the Indonesia Blue Economy Index register as printed by its custodian, and the account
structures of the SEEA Ecosystem Accounting standard together with the specified sequence of national
ocean accounts. No sampling, no statistical inference and no hypothesis test is involved, and no
result reported here is an estimate with a sampling distribution. The equivalent burden is
reproducibility of a scoring rule and of an arithmetic chain, which the deposited materials discharge.

**Corpus.** A citation-anchored corpus of 199 chunks was built over the index's own published
documentation and released with this article, so that every quotation and every figure in the analysis
resolves to a numbered record rather than to a page range. Extraction was purposive rather than
exhaustive: the passages carrying the register, the weights, the calculation method, the sensitivity
analysis, the imputation framework, the provincial output and the cascading obligation were sliced from
each source at stated printed-page ranges, and nothing outside those ranges was chunked. The build,
dated 2026-08-14, comprises 106 chunks from the Juknis (BAPPENAS 2025a) over pp. 11–13, 63–66, 67–71,
93–96 and 101–104, 49 from the IBEI Report 2024 in its December 2025 revision (BAPPENAS 2025b) over
pp. 28–35, 64–66 and 67–70, 15 from Rinaldi et al. (2025) and 29 from the SIRUSA metadata for the
compilation activity and its indicator record (kegiatan 94936 and indikator 105371, both retrieved
2026-08-13). Each record carries a chunk identifier, its document and slice, the verbatim Indonesian
text, an English drafting gloss used nowhere as a quotation source, the printed page with the PDF page
in brackets, a content type, a maturity tag and a flag marking whether any part of the record was
reconstructed rather than read directly, which 17 of the 199 records carry. Chunks in conflict with one
another are recorded as conflicts rather than reconciled, and the four-against-three pillar contradiction
is held as one such record.

Account-side evidence sits outside that corpus and was read directly: the three MMAF 2022 reports
including the Gili Matra pilot study, the BPS materials prepared for the SEEA workshops, Rahayu et al.
(2024), Kepmen KP 44/2023 and the GOAP country page (retrieved 2026-08-13). All source documents carry
clean text layers and no optical character recognition was applied anywhere, so the two passages
recorded as illegible (Section 8.5) are defects of the published files rather than of extraction.
Retrieval and assembly ran from 11 to 16 August 2026. Alongside the corpus, a join table reproduces all
44 register rows with each row's *Data Pembentuk Indikator* constituent data items verbatim,
transcribed from Juknis Tabel 1, pp. 11–13 [pdf 21–23], and totalling 62 constituent data items. That
join table, and not the running text of the handbook, is the object the membership rule was applied to,
which is what makes the scoring reproducible from the deposit alone.

**Search protocol.** Searching was bilingual and was run over the document set named above rather than
over a statistical catalogue. The Indonesian terms used were *indeks ekonomi biru*, *neraca laut*,
*akun laut*, *neraca ekosistem*, *unit spasial dasar laut*, *peta jalan ekonomi biru* and *Satu Data
Indonesia*, together with their English equivalents, with no date restriction. No dedicated search of
the BPS statistical catalogue or of the Satu Data Indonesia portal was undertaken, and by project
constraint no Indonesian agency was approached for data, interview or correspondence. Every absence
claim in the article is therefore stated as unfound within the named set and is not a claim about the
Indonesian statistical system.

**Unit of analysis and the membership rule.** The unit is the register row, of which there are 44, and
the object tested is the row's constituent data items rather than its title, on the Indonesian wording.
Each row was graded on one of three grounds: *matched*, where a constituent data item names a quantity
that a defined SEEA Ecosystem Accounting output contains, *partial*, where account output supplies a
component of the quantity but not the quantity itself, and *provenance question*, where account output
bears on the row without supplying it. Tier A is the union of the three grades and has five members,
being indicators 19, 20 and 21 matched, 24 partial and 27 a provenance question. All remaining 39 rows
are graded none. The grade and the ground for every row, with the constituent data items reproduced,
are deposited as Supplementary Table S1 so that a reader may reject a row and recompute. The rule was
applied item by item rather than row by row, so a row carrying several constituent data items takes the
highest grade any one of its items attains, which is why the 62 items and not the 44 rows are the
tested population. Two decisions were fixed before scoring and held throughout: that indicator titles
are not evidence of what a row requires, titles having produced the predecessor figures the analysis
rejects, and that a definitional match carries no claim about whether anything has been compiled, the
two axes being reported separately at every use. Grading was performed by the authors against those
criteria, not blind, with no second coder and no adjudication protocol, which bounds what the exercise
can claim and is recorded among the limitations (Section 8.5). Replication of the scoring therefore
requires the deposited join table, the rule above and the SEEA Ecosystem Accounting output structures,
and requires nothing this study holds privately.

**The repeatability test.** Membership in Tier A is a definitional property and carries no claim about
compilation. The separate operative test applied to the account side is repeatability into a dated
window rather than demonstrated capability, since the obligation is annual and can receive only what an
upstream producer has already released at the required vintage (Section 6.1). Maturity is tagged on
every claim that something exists, as (a) published official statistics, (b) experimental or pilot
compilation, (c) methodology under development, or (d) announced but not started, and the tag describes
the datum rather than the document reporting it.

**Weight arithmetic.** Weights are taken from the Juknis as printed: pillar weights from Tabel 4, p. 94
[pdf 104], the environment pillar's sub-pillar split from Tabel 5, p. 94 [pdf 104], variable weights
from Tabel 6, pp. 95–96 [pdf 105–106], and the sub-pillar shares of Gambar 11, p. 93 [pdf 103], used as
an independent integer cross-check. Shares of the composite are products of those published
percentages, carried to two decimal places from one-decimal inputs and reported in prose to one decimal
with 'about'. The technology sub-pillar's weight is not printed and is recovered as the residual of the
economy pillar, at 4.11%. All weight arithmetic follows the three-pillar structure of Tabel 4, Tabel 5
and Gambar 11, on the ground that weights are published only there, whilst register rows keep their
Tabel 1 labels. The two structures disagree over indicators 15 to 18, and figures computed over the
pillars across which those rows move are identified as structure-dependent at each use (Section 2.3).

**Sensitivity to the weight ambiguity.** The handbook does not state whether the percentages in Tabel 4
to Tabel 6 are raw first-principal-component loadings or normalised contributions. The test applied is
to renormalise each sub-pillar's printed variable weights to sum to 100 and recompute. In the
resource-quality sub-pillar the nine printed weights already sum to exactly 100.0, so the renormalised
and printed readings coincide and 18.45%, 7.64%, 3.58% and 2.33% are unchanged to the precision
printed, with a residual half-unit rounding uncertainty moving 7.64% by under 0.1 percentage points. In
the economy pillar the five printed sub-pillar weights sum to 96.0, and renormalising over those five
alone would give about 27.2% for the four Tier B sub-pillars and about 5.37% for governance against the
26.1% and 5.15% adopted here, an upper bound of roughly one percentage point which Gambar 11's printed
integers of 26 and 5 do not support. The test cannot be run on the pillar weights themselves, which
already sum to 100.0 as printed.

**Reporting conventions.** Indonesian decimal commas are preserved inside quotation and rendered as
points in prose. Quotations are from the Indonesian source text. Three inline flags mark the evidential
status of statements: `[EVIDENCE GAP]` where a required source was not found, `[ASSUMPTION]` where the
argument depends on something unconfirmed, and `[CONTESTED DENOMINATOR]` on the mature-route share of
7.64% and on figures derived from it, recording that the share measures what these account types bear
on rather than what an account would supply (Section 5.4). Conflicting sources are reported as
conflicts and are not averaged or adjudicated.

## Data availability

The register join table, the 44-row scoring sheet (Supplementary Table S1) and the weight workbook
reproducing every published share from the printed percentages are deposited with this article. The
primary documents analysed are the published Juknis and IBEI Report of BAPPENAS, the MMAF 2022 pilot
reports, Kepmen KP 44/2023 and the SIRUSA metadata records cited above. No restricted, licensed or
unpublished data were used, and no microdata were accessed. No new observational data were generated.

## Code availability

No modelling or statistical code underlies the results. The arithmetic is the multiplication of
published percentages and is reproduced in full in the deposited weight workbook.

## Ethics, funding and competing interests

The study involved no human participants, no personal data and no fieldwork, so no ethical approval was
required. By project constraint, no Indonesian government agency was engaged for data, interview or
correspondence at any point, and this bounds every absence claim reported here. Funding and competing
interests are declared in the submission's declarations.
