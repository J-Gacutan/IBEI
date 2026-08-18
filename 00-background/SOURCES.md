# 00-background — source manifest

Primary literature recurring across [02-research-findings/](../02-research-findings/), retrieved
2026-08-13. Maturity tags follow the CLAUDE.md convention: (a) published official statistics,
(b) experimental/pilot compilation, (c) methodology under development, (d) announced only.

## Folder layout

Files are sorted into four subfolders, one per section below, in this manifest's own priority
order. Filenames in the tables are relative to their section's folder.

| Folder | Section | Contents |
|---|---|---|
| [01-ocean-accounts-indonesia/](01-ocean-accounts-indonesia/) | Ocean accounts — Indonesia | Primary MMAF/BPS ocean-account reports, the GOAP country page, Kepmen KP 44/2023 |
| [02-ibei-specification/](02-ibei-specification/) | IBEI — specification | The 2025 juknis and IBEI 2024 results report, SIRUSA metadata, Rinaldi et al. (2025) and figures, the roadmap, the 2021 framework, ADB (secondary) |
| [03-method-and-scale/](03-method-and-scale/) | Peer-reviewed method and scale reconciliation | Rahayu 2024 (MBSU), Gacutan 2022, Wuwung 2024 |
| [04-standards-and-context/](04-standards-and-context/) | Standards and institutional context | SEEA-EA, Ocean Panel, IDEEA, Renstra KKP, MFAT, ASEAN Blue Wealth, Bogor Action Plan |

`SOURCES.md` stays at the folder root. The two priority tiers that matter for citation are not the
folders but CLAUDE.md's evidence precedence: [05-rag/](../05-rag/) over any deep-research finding,
and primary published documents over the (a)/(b)/(c)/(d) maturity tags recorded per row below.

## Ocean accounts — Indonesia (primary, MMAF/BPS)

Folder: `01-ocean-accounts-indonesia/`

| File | Source | Cited in | Note |
|---|---|---|---|
| `MMAF-2022-Report-Ocean-Accounts-Development-in-Indonesia.pdf` | MMAF/BPS 2022, via GOAP Google Drive (identical MD5 to the UNWTO-hosted copy) | 02, 03 | **Preliminary consultation draft** — GOAP labels it as such. Tag (b)/(c). |
| `MMAF-2022-Ocean-Accounts-of-Indonesia-Gili-Matra-Pilot-Study.pdf` | MMAF 2022 pilot report, GOAP Drive | 02, 03, 05 | Same draft status. Finding 02 listed this as **unobtained** — now obtained. |
| `MMAF-2022-Roadmap-Preparation-Indonesia-Ocean-Accounts.pdf` | MMAF 2022, GOAP Drive | 02, 04 | Same draft status. Also previously unobtained. |
| `BPS-2023-Gili-Matra-ocean-accounts-SEEA-Manila.pdf` | Tasriah, Agung, Minarmi & Dulatif, "EO 4 Ecosystem Accounting 2022" | 02, 03, 05 | Contains the coral 183.34 → 165.08 ha series verified in finding 02 §8. |
| `BPS-2023-ocean-accounts-in-Indonesia-SEEA-Manila.pdf` | Wulandari & Jannah (BPS), SEEA-EA Regional Training Workshop, Manila, 5–8 Jun 2023 | 02 | The presentation finding 02 cites; the URL in that finding resolves to an unrelated 2013 UNCEEA paper. |
| `GOAP-Ocean-Accounts-of-Indonesia-page.md` | GOAP country page snapshot | 02, 04 | Source of the three Drive links above; records the July 2025 NSDL dashboard launch. |
| `-2023kepmenkp044_1677210577.pdf` | Kepmen KP No. 44/2023, *Tim Penyusun Neraca Sumber Daya Laut*; set 16 Feb 2023, signed Sakti Wahyu Trenggono; JDIH KKP | 02 | Supplied by the user; previously unobtained. The formal mandate: five working groups chaired outside MMAF as often as inside — IGT/mapping (BIG), SDA-KP valuation (Kemenkeu DJKN), environmental-accounts implementation (**BPS**, Direktur Neraca Produksi), governance and policy adoption (Setditjen PRL, KKP), data management (Pusdatin KKP); expert group chaired by Akhmad Fauzi (IPB). Account structure named in the decree: Neraca 1 ekosystem extent/condition + monetary value, 2 flows of goods and services to the economy, 3 waste flows to ecosystems, 4 ocean economy, 5 governance. **Term expired 31 December 2023** (diktum KEEMPAT) — no renewal instrument located, so post-2023 institutional standing is unevidenced. BAPPENAS appears as a single member (Roby Fadillah) in the governance pokja, not as a co-lead. |

## IBEI — specification (primary, BAPPENAS/BPS)

Folder: `02-ibei-specification/`

| File | Source | Cited in | Note |
|---|---|---|---|
| `Juknis Pedoman IBEI_5 Agustus (DIGITAL).pdf` | BAPPENAS 2025, *Petunjuk Teknis Pedoman Indikator Ekonomi Biru dalam RPJPN 2025–2045*; ISBN 978-634-7023-16-2 (PDF); authored with EU-ICF; forewords dated Aug 2025. Cite as: Bappenas, 2025. *Pedoman Indikator Ekonomi Biru*. Jakarta. | — (post-dates all findings) | **The primary IBEI specification. Tag (a).** Supplied by the user; previously listed as not retrieved. Supersedes reconstruction on three fronts: **Tabel 1** (pp. 11–13) is the verified **44-indicator** register with constituent data series per indicator; **p. 10** states the method (multi-*stage* PCA — standardise, iterate PCA at sub-pilar then pilar level, weights generated automatically, no subjective weighting, negatively-correlated indicators reversed first); **Tabel 4–6** (pp. 94–96) publish weights at pillar, sub-pillar and variable level. Also carries IBEI 2025 provincial scores against SEB baseline (Tabel 2, p. 69) and a sensitivity simulation (Tabel 7, p. 101). See *Structural notes* below before using. |
| `Report_20IBEI_20REVISI_20(DESEMBER_202025).pdf.pdf` | BAPPENAS 2025, *Indeks Ekonomi Biru Indonesia 2024 / Indonesia Blue Economy Index (IBEI)*, 86 pp.; supported by EU-Indonesia Cooperation Facilities; forewords dated Aug 2025, filename marks a Dec 2025 revision. No ISBN printed. | — (post-dates all findings) | **The IBEI results report. Tag (a).** Supplied by the user; not previously on the manifest. Companion to the juknis: that one specifies the index, this one reports it. **National IBEI 2024 = 35.59**; provincial range **8.51 (Papua Tengah) to 66.51 (Sulawesi Selatan)**; Pilar Sosial highest at 48.66. Carries Tabel 2.4.1 (p. 17, pillar/sub-pillar/indicator list), Tabel 3.2.1 (p. 35, national by pillar and sub-pillar), quadrant typology (p. 52), and three annexes: **Lampiran 1 ML imputation methodology (pp. 64–66)**, Lampiran 2 provincial sub-pillar scores (p. 67), Lampiran 3 spiderweb (p. 71). **Carries an explicit reuse restriction — see notes below before quoting.** |
| `sirusa-ibei-metadata/` | BPS SIRUSA metadata, indicators 105371 + 105709–105718, kegiatan 94936 (HTML + markdown) | 01 (30 mentions) | The recovered technical metadata underpinning finding 01, incl. the published IBEI aggregation formula and PCA description. Activity is registered as *Kompilasi Penyusunan Indonesia Blue Economy Index (IBEI) 2025*. **Now corroborated by primary source** — the juknis states the same PCA stack in BAPPENAS's own words, so the PCA description is no longer inference. |
| `EBOOK ENG 17102024_Indonesia Blue Economy Roadmap-2nd Edition.pdf` | BAPPENAS 2024, 2nd ed. (rev. Dec 2023) | 01, 02, 03, 04, 05 | Supplied by the user; Bappenas e-library is Cloudflare-blocked. |
| `Rinaldi-2024-IBEI-indicators.pdf` | Rinaldi, Christina, Rachmawati & Muslim (2025), *Malaysian J. Math. Sci.* 19(4): 1471–1506 | 01, 03, 05 | Already present. Most-cited single source across findings. |
| `Blue Economy Development Framework for Indonesias Economic Transformation.pdf` | BAPPENAS 2021, with OECD support; ISBN 978-623-98276-1-8 | — | Supplied by the user; Bappenas e-library is Cloudflare-blocked. Predates the roadmap and the IBEI — the framework the 2023/24 roadmap builds on, not an indicator source. Not cited in any finding to date. |
| `Overview of Indonesia Blue Economy Index.md` | pre-existing note | — | |
| `ADB-Indonesia-blue-economy-key-policies.pdf` | Artha (Danareksa Research Institute), ADB event presentation | 01 | Secondary. |

### Structural notes on the 2025 juknis

Read before citing the IBEI structure. Verified against pp. 9–13 and 93–96 of the juknis on
2026-08-13; percentages are as printed.

**Operative structure: 3 pillars / 11 sub-pillars / 44 indicators.**

| Pillar | Weight (Tabel 4) | Sub-pillars, share within pillar (Tabel 5) |
|---|---|---|
| Lingkungan | 36.9% | kualitas SDA & konservasi laut 50.0 · energi terbarukan 50.0 |
| Ekonomi | 32.6% | pariwisata bahari 22.1 · industri berbasis kelautan 23.6 · perdagangan/transport/logistik 19.3 · tatakelola 15.8 · perikanan tangkap & budidaya 15.2 · teknologi 4.1 |
| Sosial | 30.5% | kesehatan 68.1 · kesejahteraan 18.2 · pendidikan 13.7 |

Tabel 4 × Tabel 5 reconciles with the whole-index shares in Gambar 11 (p. 93) for all eleven
sub-pillars, to within rounding — e.g. kesehatan 68.1% × 30.5% = 20.8% against the 21% shown;
teknologi 4.1% × 32.6% = 1.3% against 1%. The two presentations are consistent.

Three internal discrepancies, recorded as conflicts rather than resolved:

1. **Pillar count, 3 vs 4.** The p. 9 narrative presents *Pilar Enabler* as a fourth pillar, and
   Tabel 1 gives Enabler its own `Pilar` column (rows 17–18, sub-pilar "–"). Gambar 11, Tabel 4
   and the contents page (§2.2.5) all place Enabler *inside* Pilar Ekonomi, split into
   `si_econ_tech` and `si_econ_gov`. The weighted structure is the three-pillar one; the
   four-pillar text appears presentational.
2. **Sub-pillar count, 10 vs 11.** The contents page merges "Enabler (Teknologi dan Tata Kelola)"
   into a single heading; the weights tables split it in two.
3. **Wording drift between Tabel 1 and Tabel 6** on the same indicator, implying different source
   series: #15 *jumlah wisata bahari* is "(desa)" in Tabel 1 and "(titik)" in Tabel 6; #34 is
   "nelayan dan pembudidaya ikan" in Tabel 1 and "nelayan dan petani ikan" in Tabel 6. Tabel 6
   also uses its own variable numbering, which does not align with Tabel 1's indicator numbers.

Two features that bear directly on re-scoring derivability:

- **Two single-indicator sub-pillars.** `econ_tech` is 100% indicator #17 (kapal motor > 30 GT) and
  `econ_gov` is 100% indicator #18 (pelabuhan perikanan with TPI). One series carries an entire
  sub-pillar in each case.
- **Five reversed indicators**, flagged `_r` or *Reverse* in Tabel 6: marine plastic leakage,
  land-disposed waste, PKH participation, PIP participation, and coastal poverty.

### Notes on the IBEI 2024 results report

Verified against pp. i–v, 64–67 on 2026-08-13.

**Reuse restriction.** Page i states *"Dilarang mengutip tanpa ijin/persetujuan dari Kementerian
PPN/Bappenas"* — quotation prohibited without BAPPENAS permission. This is a publisher's notice on
a document the user holds, not a retrieval blocker, and normal scholarly citation of a published
government report is a separate question from the notice's wording. But seeking the permission it
asks for would be agency correspondence, which the CLAUDE.md project constraint puts out of scope.
**Decision needed before the manuscript quotes this source**; paraphrase-and-cite avoids the issue,
verbatim quotation does not.

**Citation mismatch.** The cover and running heads say *2024*; the required-citation block on p. i
says *"Bappenas. 2025. Indeks Ekonomi Biru Indonesia 2025. Jakarta."* The reference year of the
data is 2024. Cite with care and note the discrepancy rather than silently picking one.

**Lampiran 1 is the most consequential passage in either document for this study.** BAPPENAS
states that IBEI data availability is uneven (*"ketersediaan data tidak merata"*) and that gaps are
filled by **machine-learning imputation** trained on socio-economic proxy variables, chiefly
SUSENAS. Two scenarios are declared:

- **Scenario 1 — indicator unavailable in *every* province** in the reference year: the model is
  trained on complete historical data from a previous IBEI cycle and used to predict values for all
  provinces.
- **Scenario 2 — indicator unavailable in some provinces**: a hybrid of historical and actual
  reference-year data trains the model; prediction is applied only to the missing provinces.

Method: feature engineering and scaling, a spectrum of linear, tree-based and neural-network
models, *k*-fold cross-validation, selection on RMSE/MAE/R², ensemble prediction, domain
constraints, then reversal of negatively-correlated indicators computed mathematically
post-imputation. QA claims fixed seeds and reproducibility.

Bearing on the argument: under Scenario 1 an indicator with **no observation in any province** still
receives a score, generated from proxy correlation rather than measurement. This is direct primary
evidence for the study's premise that the IBEI rests on thin statistical foundations — and it is
BAPPENAS's own disclosure, not an external critique. It should be read as strengthening the case
for accounts as infrastructure **without** being overstated: the report frames imputation as a
transparency and quality measure, and that framing must be presented alongside the finding.
**Which indicators were imputed, and under which scenario, is not disclosed** — the annex gives the
method, not the per-indicator inventory. That gap is a limitation to state, not to fill by
inference.

**Scores exceed the stated 0–100 range.** The juknis (p. 9) says IBEI runs zero to one hundred, but
Lampiran 2 reports sub-pillar values well above 100 — teknologi 190.37 (Aceh), perdagangan/
transport/logistik 111.50 (Kepulauan Riau) — under a note reading *"normalized factor sebesar
0,6819"*. The 0–100 bound evidently applies to the composite after that factor is applied, not to
sub-pillar indices. Preserve as a conflict; do not assume sub-pillar scores are bounded.

**Pillar-count ambiguity recurs here.** The executive summary again describes three pillars
"supported by one *enabler* pillar", while Lampiran 2 lists teknologi and tatakelola as sub-pillars
inside Pilar Ekonomi. Same pattern as the juknis — the narrative says four, the arithmetic says
three.

## Peer-reviewed method and scale reconciliation

Folder: `03-method-and-scale/`

| File | Source | Cited in | Note |
|---|---|---|---|
| `Rahayu-2024-e125578.pdf` | Rahayu, Arhatin, Gacutan, Agung, Pingkan, Rosdiana & Yulianto (2024), *One Ecosystem* 9: e125578 — MBSU optimisation, Saleh Bay | 02, 03, 05 | The MBSU grid-resolution evidence behind finding 03 §4.2. |
| `Gacutan-2022-ocean-accounting-coastal-lake-OneEcosystem.pdf` | Gacutan et al. (2022), *One Ecosystem* 7: e81855 | 02 (via UTS OPUS link) | The UTS bitstream cited in finding 02 is this paper, not e125578. |
| `Wuwung-2024-sustainable-ocean-development-policies-Indonesia.pdf` | Wuwung, McIlgorm & Voyer (2024), *Front. Mar. Sci.* 11: 1401332 | 03, 05 | |

## Standards and institutional context

Folder: `04-standards-and-context/`

| File | Source | Cited in |
|---|---|---|
| `SEEA-EA-2021-final-2024ed.pdf` | UN SEEA Ecosystem Accounting, final 2021 (Dec 2024 web ed.) | 03, 05 |
| `OceanPanel-2022-National-Accounting-for-the-Ocean.pdf` | High Level Panel for a Sustainable Ocean Economy | 05 |
| `IDEEA-Defining-Complete-Sequence-National-Ocean-Accounts.pdf` | IDEEA Group | 03 |
| `PermenKP-18-2025-Renstra-KKP-2025-2029.pdf` | MMAF strategic plan 2025–2029 | 04 (Renstra window) |
| `MFAT-2024-Indonesia-Green-Economy.pdf` | NZ MFAT market report, Sept 2024 | 01, 04 |
| `ASEAN-Blue-Wealth-Indonesia-snapshot.md` | ASEAN Blue Wealth national snapshot | 03, 04, 05 (3 of 5 findings) |
| `Bogor_Strategic_Action_Plan_2026-b157b2eb (2).pdf` | *Bogor Strategic Action Plan: South–South Collaboration to Accelerate Ocean Accounting*, published by MMAF Directorate of Ecosystem Conservation on behalf of GOAP, 1 Apr 2026; outcomes of the South–South Ocean Accounting Exchange, IPB Bogor, 30 Mar – 1 Apr 2026 | 02, 04 |

## Not retrieved

| Source | URL | Blocker |
|---|---|---|
| *Panduan dan Pemutakhiran IBEI* (2024) — the IBEI compilation guideline | https://www.scribd.com/document/765211500/030624-Panduan-Dan-Pemutakhiran-IBEI-4 | Scribd paywall/login. Cited in findings 01 and 04. **Closed — superseded**: it was wanted to resolve the 44-indicator register, which Tabel 1 of the 2025 juknis now does, from a later and citable source. |
| *Indonesia Blue Economy Roadmap 2nd Edition* (official BAPPENAS host) | https://perpustakaan.bappenas.go.id/e-library/file_upload/koleksi/dokumenbappenas/konten/Upload%20Terbaru/EBOOK%20ENG%2017102024_Indonesia%20Blue%20Economy%20Roadmap-2nd%20Edition.pdf | Cloudflare 403. **Resolved** — user supplied the file directly. |
| *Blue Economy Development Framework for Indonesia's Economic Transformation* | https://perpustakaan.bappenas.go.id/e-library/file_upload/koleksi/dokumenbappenas/file/Blue%20Economy%20Development%20Framework%20for%20Indonesias%20Economic%20Transformation.pdf | Cloudflare 403. **Resolved** — user supplied the file directly; now listed above. |
| *Peta Jalan Ekonomi Biru Indonesia Edisi 2* (Indonesian) via Bappenas short link | https://link.bappenas.go.id/B.5.Peta_Jalan_Ekonomi_Biru_Indonesia_Edisi_2 | Cloudflare 403. **Closed — not needed**: Indonesian edition of the roadmap already held in English (`EBOOK ENG 17102024_...pdf`). |
| Gili Matra presentation, as cited in finding 02 | https://seea.un.org/sites/default/files/18_3.pdf | **Misattribution** — resolves to a 2013 UNCEEA consultation draft, not the Gili Matra material. Correct files are the two `BPS-2023-*` PDFs above. |
| *Petunjuk Teknis Pedoman Indikator Ekonomi Biru dalam RPJPN 2025–2045* | komens.bappenas.go.id (encrypted path) | Session-scoped URL; finding 01 Priority 2 request. **Resolved** — user supplied the file; now listed above as the primary IBEI specification. |
| *Laporan Penyusunan IBEI 2024* | not public | Finding 01 Priority 1 request — internal BAPPENAS policy paper. **Downgraded to Priority 3, not closed.** The weights and methodology it was wanted for are now published in the juknis (Tabel 4–6, p. 10), and the 2024 results it was wanted for are in `Report_20IBEI_20REVISI_...` above — whose own foreword calls it "Laporan IBEI 2024", so the two may be the same document or supersede it. Titles do not match exactly, so this is not asserted. Residual value: indicator *selection* rationale and the per-indicator imputation inventory, neither of which either published document gives. |
| Kepmen KP No. 44/2023 full text | JDIH KKP | Finding 02 unobtained item 3. **Resolved** — user supplied the file; now listed above. |
| Bogor Strategic Action Plan full text | — | Findings 02 and 04 unobtained. **Resolved** — user supplied the file; now listed above. |
| NSDL dashboard values | sidako.kkp.go.id/oceanaccounts | Rendered client-side; not retrievable by fetch. |
