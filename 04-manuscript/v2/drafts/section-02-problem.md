# 2. The compilation problem

The obligation set out above is assigned rather than volunteered, and the instrument that distributes it
names the figure each province must reach: joint circular SEB Mendagri/Bappenas No. 2/2024 carries a
2045 target per province into its long-term development plan (Juknis, Tabel 2, p. 69 [pdf 79]). That
the compilation beneath it collects nothing directly is a design decision recorded in Indonesia's own
statistical metadata system, and its consequences are legible as specific strains in the published
output. This section establishes both from the IBEI's own documentation, and closes on two
contradictions the handbook does not resolve.

## 2.1 Compilation without collection

SIRUSA registers the IBEI compilation as *Kompilasi Produk Administrasi* under *Statistik Sektoral*,
implemented by BAPPENAS's Directorate of Marine Affairs and Fisheries, with an empty *Identitas
Rekomendasi* (kegiatan 94936, retrieved 2026-08-13). The design is secondary compilation throughout.
Collection mode is *Pengumpulan data sekunder*, the instrument is *Lainnya: Publikasi KKP dan BPS*,
and the unit is the province. The register records no pilot survey, no non-response adjustment, no
staff training, zero supervisors and zero enumerators. The index's supply is therefore fixed to
whatever KKP and BPS have already published, at the resolution and vintage they published it.

The collection capability the index draws on is real, and it sits with those two producers. That is
the statutory division this article holds to: BAPPENAS plans, whilst MMAF and BPS produce
statistics. What the register establishes is not an absence of capability in the system. It is the
absence of any collection instrument inside the compilation itself.

The reporting window is narrow and is published from two directions. SIRUSA schedules collection
from 1 April to 1 May 2025 and dissemination from 1 August to 1 September 2025. The Juknis puts the
first phase of its monitoring and evaluation cycle in October to December of year *n* (p. 71 [pdf
81]). Read together, these imply that an upstream figure not public by roughly April of year *n+1*
cannot enter that cycle's index. Neither document reconciles them, and only the first phase was
extracted into the corpus, so the implication is stated conditionally `[EVIDENCE GAP]`. Figure 1
draws the two calendars against the thirteen-step production chain they feed, and marks the single
step at which account-derived data could enter.

## 2.2 What the published output records

Two defects carry the argument, and both are failures of provenance rather than of arithmetic.

Gaps are filled by prediction, and the prediction is not recorded. Annex 1 of the Report specifies a
machine-learning framework predicting missing values from socio-economic proxies under two scenarios,
with SUSENAS named as the proxy source (pp. 64–66 [pdf 76–78]). The framework itself is specified in
detail. What is missing sits downstream of it: the annex names no imputed indicator, no count of
imputed cells, no selected model, no achieved error, and no proxy beyond SUSENAS. Under the first
scenario an indicator absent in every province is predicted for every province. No reader of any
published table can therefore distinguish a measured provincial value from a predicted one
`[EVIDENCE GAP]`. Which indicators were imputed must not be inferred from which look hard to collect.

Three provinces record no value across three sub-pillars. Papua Barat Daya, Papua Selatan and Papua
Tengah each record 0.00 for marine-based industry, technology and governance, and Papua Tengah's
headline value of 8.51 is the lowest in the annex (Report p. 70 [pdf 82]). All three were created in
the 2022 provincial split. Juknis Tabel 2 carries the same three provinces at 2023 baselines of 49.25,
33.50 and 21.48 against 2025 achievements of 13.16, 12.25 and 8.51 (p. 69 [pdf 79]), and the two
documents head those columns differently. Whether the zeros reflect unavailability or a measured zero
is not stated in either document. They are reported as printed, and read as consistent with a
compilation discontinuity rather than as proof of one `[ASSUMPTION]`. This is where a new
administrative unit needs a spatially re-aggregable source rather than a republished provincial total.

Table 1 records four further symptoms without arguing them here. Each is uninterrogable from the
published record.

The denominator of the obligation is itself unstable inside the guidance that creates it. Indonesia
has 38 provinces. The Report's Annex 2 tabulates 37, Juknis Tabel 2 lists 38 rows plus a national
row with Papua Pegunungan carrying a dash in all three columns, the monitoring chapter asserts
comparability over *37 provinsi* (p. 71 [pdf 81]), and the sensitivity chapter thirty pages later
recomputes the index *untuk 38 provinsi* across 59 scenarios (p. 101 [pdf 111]). Two of the four are
in the same handbook. The number used in any sentence here is the number that sentence is about.

## 2.3 Two contradictions inside the handbook

The handbook prints two pillar structures. Tabel 1 prints four, with an *Enabler (teknologi & tata
kelola)* pillar holding indicators 15 to 18. Tabel 4, Tabel 5 and Gambar 11 print three, placing
tourism, technology and governance as economy sub-pillars. Both are in the same document and this
article does not resolve the conflict; which structure the weight arithmetic follows, and where the
choice is material, is settled in Methods (Section 3.5).

A second contradiction bears on how any published value should be read. One printed page asserts
both a rescaling into a 1 to 100 range and an unbounded principal component score that may be
negative (Report p. 33 [pdf 45]). That is what makes a technology sub-pillar value of 483.43 a
traceability failure rather than a large number.

The symptoms in Table 1 are properties of the compilation design rather than of the institutions
operating it. Each is addressable upstream, in what the compilation is able to draw on, rather than
in how BAPPENAS compiles from the supply it has.

---

**Table 1.** The compilation-difficulty register. Statements are quoted verbatim where italicised
and rendered faithfully otherwise, with Indonesian decimal commas preserved inside quotation. The
final column names the account property that bears on each symptom, which Section 3 specifies and
Section 4 maps.

| Symptom | As printed | Locator | Bearing account property |
|---|---|---|---|
| No primary collection of its own | *Pengumpulan data sekunder*, instrument *Lainnya: Publikasi KKP dan BPS*, no pilot survey, 0 supervisors, 0 enumerators, no training | SIRUSA kegiatan 94936 | A standing production cycle with its own primary observation |
| Imputation unrecorded per indicator | A published ML framework naming no imputed indicator, count, model or achieved error | Report pp. 64–66 [pdf 76–78] | Provenance: accuracy tier and method attached to each cell |
| New provinces unscored | 0,00 across three sub-pillars for Papua Barat Daya, Papua Selatan and Papua Tengah, with a headline of 8,51 | Report p. 70 [pdf 82] | A spatial basis re-aggregable to new administrative boundaries |
| Underived rescaling | *Notes: normalized factor sebesar 0,6819*, printed identically beneath all four regional tables with no formula, derivation or stated point of application | Report pp. 67–70 [pdf 79–82] | A balancing identity in which an unexplained adjustment fails to balance |
| Values beyond the nominal scale | Technology sub-pillar 483,43 for Jakarta and 147,45 for Bali, on tables headed *Normalized* | Report p. 68 [pdf 80] | Physical units against a stated reference, rather than a province-relative score |
| Targets above the national target | Provincial 2045 targets run above the national 100,00, the highest Sulawesi Selatan at 275,29 | Juknis p. 69 [pdf 79] | A documented revision and restatement rule |
| Reference period inconsistent | T-2 for variables 12 to 14 against T-1 elsewhere, and the same periods rendered T-1 in the numbered variable table and 2024 in the summary table | SIRUSA variable tables | Documented vintage, held constant across a compilation |

Three findings follow from the mapping this compilation problem sets up, and they are previewed here
because the Methods that produce them are best read knowing what they produce. First, read against verbatim constituent data items rather than indicator
names, the three ecosystem condition indicators are definitionally matched to account output rather
than category-mismatched. That corrects a judgement in earlier work, including a provisional mapping by
the present authors (Gacutan and Vandenbergh, 2025) that scored account-derivable shares at figures
moving from 61% to 39% to 2.8% as the assumed indicator set changed, the last over a 36-indicator
denominator the register does not have (Section 4.2). Second, what separates the account routes into and out of reach is not compilation
maturity but content. The routes Indonesia has compiled at pilot scale bear on 12.79% of the
composite's published weight and the one route compiled nowhere on a comparable 13.70%, the first
wholly containing the Tier A share above it; yet no compiled account produces the constituent data
item the register asks for at any of these rows (Section 4.3). Third, the share an account would itself supply is about 2.33%, and
what the mature account types offer at those rows is a production process rather than a stock of
substitutable values (Section 5).
