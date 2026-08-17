# 2. Why provincial compilation is hard

A recurring statutory obligation to score every province annually sits on top of a compilation
activity that conducts no primary collection of its own. The obligation is assigned rather than
volunteered: Perpres 12/2025 carries the IBEI as an official national development indicator, and
joint circular SEB Mendagri/Bappenas No. 2/2024 distributes a 2045 target to each province for
carriage in its long-term development plan, with Papua Pegunungan carried at no baseline, achievement
or target (Juknis, Tabel 2, p. 69 [pdf 79]). That the compilation beneath it collects nothing
directly is a design decision rather than a lapse, it is recorded in Indonesia's own statistical
metadata system, and its consequences are legible as specific strains in the published output rather
than as commentary. This section establishes both from the IBEI's own documentation, and closes by
declaring the pillar structure the rest of this article computes on, since the handbook prints two.

## 2.1 Compilation without collection

SIRUSA registers the IBEI compilation as *Kompilasi Produk Administrasi* under *Statistik Sektoral*,
implemented by BAPPENAS's Directorate of Marine Affairs and Fisheries, with an empty *Identitas
Rekomendasi* (kegiatan 94936, retrieved 2026-08-13). The activity design is secondary compilation
throughout. Collection mode is *Pengumpulan data sekunder*, the instrument is *Lainnya: Publikasi KKP
dan BPS*, the unit is the province, and the register records no pilot survey, no non-response
adjustment, no staff training, zero supervisors and zero enumerators. The index's data supply is
therefore fixed to whatever KKP and BPS have already published, at the resolution and vintage they
published it. The collection capability the index draws on is real and sits with those two producers,
which is the statutory division this article's framing holds to: BAPPENAS plans, whilst MMAF and BPS
produce statistics. What the register establishes is not an absence of capability in the system but
the absence of any collection instrument inside the compilation itself, so the index can acquire
nothing that its two suppliers have not already published.

The window is narrow and is published from two directions. SIRUSA schedules collection from 1 April to
1 May 2025 and dissemination from 1 August to 1 September 2025, whilst the Juknis puts the first phase
of its monitoring and evaluation cycle, covering the circular, the timeline, the standard reporting
format and contact points, in October to December of year *n* (p. 71 [pdf 81]). Read together these
imply that an upstream figure not public by roughly April of year *n+1* cannot enter that cycle's
index. They are stated conditionally, as neither document reconciles them and only the first phase was
extracted into the corpus `[EVIDENCE GAP]`. Reference periods compound the problem in two independent
ways. Variables 12 to 14 carry T-2 where the register otherwise carries T-1, so a two-year lag sits
inside a single index vintage. Separately, the same reference periods appear twice in the source with
different renderings, as T-1 in the numbered variable table and as 2024 in the summary table, so a
prospective supplier cannot infer which vintage will be used.

## 2.2 What the published output records

Two defects carry the argument, and both are failures of provenance rather than of arithmetic.

Gaps are filled by prediction, and the prediction is not recorded. Annex 1 of the Report specifies a
machine-learning framework predicting missing values from socio-economic proxies under two scenarios,
with SUSENAS named as the proxy source (pp. 64–66 [pdf 76–78]). The framework itself is
specified in detail, and what is missing is downstream of it: the annex names no imputed indicator, no count of imputed
cells, no selected model, no achieved error, and no proxy beyond SUSENAS. Under the first scenario an
indicator absent in every province is predicted for every province. No reader of any published table
can therefore distinguish a measured provincial value from a predicted one, and which indicators were
imputed is unrecoverable from the published record, the annex naming none of them `[EVIDENCE GAP]`.
It must not be inferred from which indicators look hard to collect.

Three provinces record no value across three sub-pillars. Papua Barat Daya, Papua Selatan and Papua
Tengah, three of the four provinces created in Papua in 2022, each record 0.00 for marine-based
industry, technology and governance, and Papua Tengah's headline value of 8.51 is the lowest in the
annex (Report p. 70 [pdf 82]). Juknis Tabel 2, reproducing the SEB values, carries the same three
provinces at 2023 baselines of 49.25, 33.50 and 21.48 against 2025 achievements of 13.16, 12.25 and
8.51 (p. 69 [pdf 79]), the two documents heading those columns differently. Whether the zeros reflect
data unavailability or a measured zero is not stated in either document, so they are reported as
printed and read as consistent with a compilation discontinuity following the 2022 provincial split
rather than as proof of one `[ASSUMPTION]`. This is where a new administrative unit needs a spatially
re-aggregable source rather than a republished provincial total (Section 3).

Three further symptoms are recorded in Table 1 rather than argued here, being an underived rescaling
factor printed beneath all four regional tables, sub-pillar values far above the nominal scale on
tables headed *Normalized*, and provincial 2045 targets above the national target. Each is
uninterrogable from the published record, and none can be resolved without documents this study could
not obtain.

The denominator of the obligation is itself unstable inside the guidance that creates it. Indonesia
has 38 provinces, whilst the Report's Annex 2 tabulates 37, Tabel 2 of the Juknis lists 38 rows plus a
national row with Papua Pegunungan carrying a dash in all three columns, and the monitoring chapter
asserts comparability over *37 provinsi* (p. 71 [pdf 81]). The number used in any sentence here is the
number that sentence is about.

## 2.3 Inconsistencies and pillar locus

The handbook prints two pillar structures, four in Tabel 1 with an *Enabler (teknologi & tata kelola)*
pillar holding indicators 15 to 18 and three in Tabel 4, Tabel 5 and Gambar 11, and this article does
not resolve it: all weight arithmetic here follows the three-pillar structure, for the stated reason
that weights are published only there, whilst register rows keep their Tabel 1 labels. The choice is
material to indicators 15 to 18, of which only indicator 18 bears on any figure computed here
(Section 7.3), and immaterial to every indicator in the Tier A mapping, which sits in the environment
pillar under both loci `[ASSUMPTION]`. The declaration is therefore immaterial to the Tier A
arithmetic of Section 5 and material to Section 7, where the economy pillar's account-relevant share
of about 26.1% and the governance share of about 5.15% are computed over precisely the pillars across
which indicators 15 to 18 move, so both are structure-dependent figures for which no four-pillar
equivalent can be given from the published weights. A second contradiction bears on how any published value should
be read, as one printed page asserts both a rescaling into a 1 to 100 range and an unbounded principal
component score that may be negative (Report p. 33 [pdf 45]), which is what makes a technology
sub-pillar of 483.43 a traceability failure rather than a large number.

What the section describes is a property of the compilation design rather than of the institutions
operating it. The symptoms in Table 1 are what an inherited coverage, resolution and vintage look like
in print, and each is therefore addressable upstream, in what the compilation is able to draw on,
rather than in how BAPPENAS compiles from the supply it currently has.

---

**Table 1.** The compilation-difficulty register. Statements are quoted verbatim where italicised and
rendered faithfully otherwise, with Indonesian decimal commas preserved inside quotation. The final
column names the account property that bears on each symptom, which Section 3 specifies and Sections 5
to 7 map.

| Symptom | As printed | Locator | Bearing account property |
|---|---|---|---|
| No primary collection of its own | *Pengumpulan data sekunder*, instrument *Lainnya: Publikasi KKP dan BPS*, no pilot survey, 0 supervisors, 0 enumerators, no training | SIRUSA kegiatan 94936 | A standing production cycle with its own primary observation |
| Imputation unrecorded per indicator | A published ML framework naming no imputed indicator, count, model or achieved error | Report pp. 64–66 [pdf 76–78] | Provenance: accuracy tier and method attached to each cell |
| New provinces unscored | 0,00 across three sub-pillars for Papua Barat Daya, Papua Selatan and Papua Tengah, with a headline of 8,51 | Report p. 70 [pdf 82] | A spatial basis re-aggregable to new administrative boundaries |
| Underived rescaling | *Notes: normalized factor sebesar 0,6819*, printed identically beneath all four regional tables with no formula, derivation or stated point of application | Report pp. 67–70 [pdf 79–82], no explanation present in the annex | A balancing identity in which an unexplained adjustment fails to balance |
| Values beyond the nominal scale | Technology sub-pillar 483,43 for Jakarta and 147,45 for Bali, on tables headed *Normalized* | Report p. 68 [pdf 80] | Physical units against a stated reference, rather than a province-relative score |
| Targets above the national target | Twelve provinces carry 2045 targets above the national 100,00, the highest Sulawesi Selatan at 275,29 | Juknis p. 69 [pdf 79], authors' own count of printed rows | A documented revision and restatement rule |
| Reference period inconsistent | T-2 for variables 12 to 14 against T-1 elsewhere, and the same periods rendered T-1 in the numbered variable table and 2024 in the summary table | SIRUSA variable tables | Documented vintage, held constant across a compilation |
