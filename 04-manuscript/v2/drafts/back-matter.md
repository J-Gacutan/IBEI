# Declarations

## Highlights

- Indonesia's blue economy index scores 44 indicators with no primary collection
- Five register rows are all an ocean account touches: 7.64% of published weight
- An account would itself supply about 2.33% of the composite
- Content, not compilation maturity, separates the account routes in and out of reach
- Accounting offers such an index a production process, not indicator values

## Keywords

Ocean accounts; SEEA Ecosystem Accounting; composite indicator; blue economy; official statistics;
Indonesia

*Highlights and keywords are reproduced here so the assembled manuscript carries them; at submission
they are entered in the publisher's dedicated fields rather than in the article file.*


## Figure legends

Figures are supplied as five self-contained HTML files in `figures/`, named below. Shares of the
composite in Figures 3 and 4 are this study's arithmetic over the percentages the Juknis prints, and
are indicative rather than exact; the workings are deposited as Supplementary Data S2.

**Figure 1. The IBEI compilation chain has one point at which account-derived data could enter, and it
is upstream of everything the index controls.**
`figure-1-compilation-chain.html`. Panel (a) sets the Juknis monitoring cycle, phase 1 running October
to December of year *n* (p. 71 [pdf 81]), against the BPS SIRUSA activity schedule for *kegiatan*
94936, in which collection runs 1 April to 1 May 2025 and dissemination 1 August to 1 September 2025.
The two are separately published calendars and the sources do not state that they are the same cycle.
Panel (b) draws the thirteen-step production chain those calendars feed and marks the single step at
which account output could enter, at maturity (b). The entry point carries 7.64% of the composite,
of which about 2.33% is the share an account would itself supply. Numbered pins mark the callouts
annotated in the caption.

**Figure 2. Read against verbatim constituent data items rather than indicator titles, five of the
register's 44 rows are all an ocean account touches.**
`figure-2-mapping-matrix.html`. One cell per register row, 44 in all, each carrying its
*Data Pembentuk Indikator* items transcribed from Juknis Tabel 1, pp. 11–13 [pdf 21–23], with the
grade under the membership rule of Section 3.4 — matched, partial, provenance question, or none — and
the maturity tag of any account-side claim. Rows 15 to 18 carry Tabel 1's *Enabler* pillar label; the
weight arithmetic elsewhere follows the three-pillar structure (Section 3.5). The item-level scoring
sheet behind the grades is Supplementary Table S1.

**Figure 3. The weight the account-addressable rows carry is small, and it sits beside two
coastal-sanitation variables that outweigh all ecosystem condition by more than three to one.**
`figure-3-weight-cascade.html`. Panel (a) cascades the published weight structure from the three
pillars of Tabel 4 (p. 94 [pdf 104]) through the eleven sub-pillars of Tabel 5 (p. 94 [pdf 104]),
shading each sub-pillar by whether an ocean account bears on it. Panel (b) resolves the three
account-relevant sub-pillars to variable level from Tabel 6 (pp. 95–96 [pdf 105–106]), on one shared
scale of per cent of the composite. Hatching marks the Tier A five at 7.64%; orange dots the social
pillar, where no Indonesian account exists at any maturity; blue dots governance at 5.15%, the one
extension route with a pilot-scale Indonesian compilation behind it. Gambar 11's printed integers
(p. 93 [pdf 103]) are the independent cross-check.

**Figure 4. What separates the account routes into and out of reach is content, not compilation
maturity.**
`figure-4-route-comparison.html`. Horizontal bars on a continuous 0–15% axis giving the share of the
composite each ocean-account route bears on, grouped by whether an Indonesian compilation of that route
exists. Routes compiled at pilot scale total 12.79% — conservation area 4.06%, governance 5.15%,
ecosystem condition 2.33%, rehabilitation 1.25% — against 13.70% for the social classification route,
compiled nowhere at any maturity: a ratio of 1.07. The 12.79% wholly contains the 7.64% of Figure 3
(Section 4.3). The accompanying table gives every value with its folio and its status after the
re-check of the MMAF 2022 reports. The comparison is not the finding; the finding is that no compiled
account produces the constituent data item the register asks for at any of these rows.

**Figure 5. The one compiled Indonesian account closes three reference years before the reporting
window can accept it.**
`figure-5-reporting-calendar.html`. A timeline from 2015 to 2027 setting the IBEI reporting window and
its T-1 reference-period requirement (SIRUSA *kegiatan* 94936) against the vintages Indonesian ocean
accounts have produced: the Gili Matra pilot opening in 2015 and closing in 2021, drafted 2022 and
presented June 2023 (MMAF, 2022a, p. 39 [pdf 53]). Account-side elements are hatched with a dashed
outline and carry maturity tag (b), experimental or pilot compilation. No repeat compilation of the
pilot sites was located, so no second vintage is drawn.

## Data availability

All data underlying this article are documentary and are derived from published sources. Four
deposited items are released with the article:

1. **The Tier-1 citation-anchored corpus.** 199 chunks extracted from four published documents — the
   BAPPENAS *Juknis Pedoman IBEI* (2025), the IBEI Report 2024 in its December 2025 revision, Rinaldi
   et al. (2025), and the BPS SIRUSA metadata for *kegiatan* 94936 and *indikator* 105371 and
   105709–105718. Each record carries its source document, slice, verbatim Indonesian text, an English
   gloss, the printed page with the PDF page in brackets, a maturity tag and a reconstruction flag.
   Released as JSON with a per-slice breakdown. Build dated 2026-08-14.
2. **The indicator join table.** All 44 register rows with each row's *Data Pembentuk Indikator*
   constituent data items transcribed verbatim from Juknis Tabel 1, pp. 11–13 [pdf 21–23], totalling
   62 items. Released as JSON and reproduced as Supplementary Table S1.
3. **Supplementary Table S1**, the item-level scoring sheet: one row per constituent data item, 62 in
   all across the 44 register rows, each carrying its row's grade, the ground on which that grade was
   reached, the tier assignment and the source folio. Where a row carries several items the deciding
   item is marked, so the per-item decisions behind each row's grade are visible (Section 3.4).
4. **Supplementary Data S2**, the weight workbook: every share of the composite reported here, with
   its printed input, its source folio and the multiplication that produces it, together with the
   fifteen-group renormalisation census.

The four source documents are third-party publications and are not redistributed. The Juknis and the
IBEI Report are published by BAPPENAS, the SIRUSA metadata is a public web record retrieved
2026-08-13, and Rinaldi et al. (2025) is available from its publisher. The three MMAF 2022 reports and
the BPS workshop materials read for the account-side evidence are likewise third-party documents,
circulated as preliminary consultation drafts and conference presentations respectively; they are cited
but not redeposited.

## Code availability

One script is released: the extraction and assembly workflow that builds the corpus and the join table
from the source PDFs (`workflow-ibei-tier1.mjs`, Node.js, no external services). It is deterministic
given the same inputs. No statistical software was used, because no estimation was performed; all
arithmetic reported here is the multiplication of published percentages and is reproducible by hand
from Supplementary Data S2.

## Deposit

Archive, persistent identifier, licence and version are to be assigned on acceptance, and the
statement above will be completed with them. Until then the deposited items are held in the authors'
working repository. Every locator-based claim in this article resolves to a numbered record in the
corpus, so a reader who obtains the four source documents can verify each claim independently of the
deposit.

## Author contributions

To be completed by the authors in CRediT taxonomy terms before submission.

## Funding

To be completed by the authors before submission.

## Competing interests

The authors declare one interest material to the reading of this article. An earlier mapping by the
present authors, cited here as prior work, reported account-derivable shares of the IBEI register that
this study corrects. Sections 1 and 4.2 identify that work as the authors' own and state the
correction. No financial or non-financial competing interests are declared.

## Acknowledgements

To be completed by the authors before submission.
