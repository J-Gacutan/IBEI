> **Intermediate output** — a pre-retrieved evidence pack, not the final product.

# IBEI downstream evidence pack

Built mechanically from two files and nothing else:

- `05-rag/ibei-tier1-rag-schema.json` — 199 citation-anchored chunks over the tier-1 IBEI sources
- `05-rag/rag-parts/join-table.json` — 44 indicator rows

Every verbatim body below is copied from those files with its `chunk_id` and locator, so a
downstream agent reads this one file instead of querying the schema per indicator. Nothing here
is newly asserted: where a convenience table re-tabulates published figures, it says so, and no
value is altered, filled or rounded.

**Sources and verified ranges**

| doc | source | slices | printed ranges | chunks |
|---|---|---|---|---|
| `doc_1` | 00-background/02-ibei-specification/Juknis Pedoman IBEI_5 Agustus (DIGITAL).pdf | juknis-register; juknis-weights; juknis-method; juknis-sensitivity; juknis-cascading | pp. 11-13; pp. 93-96; pp. 63-66; pp. 101-104; pp. 67-71 | 105 |
| `doc_2` | 00-background/02-ibei-specification/Report_20IBEI_20REVISI_20(DESEMBER_202025).pdf.pdf | report-method; report-imputation; report-provincial | pp. 28-35; pp. 64-66; pp. 67-70 | 49 |
| `doc_3` | 00-background/02-ibei-specification/Rinaldi-2024-IBEI-indicators.md | rinaldi-methods | n/a (markdown source) | 15 |
| `doc_4` | 00-background/02-ibei-specification/sirusa-ibei-metadata/ | sirusa-metadata | n/a (markdown source) | 29 |

Locators are printed folio with the PDF page in brackets — `p. 11 [pdf 21]`. Offsets already
applied: Juknis +10, Report +12. Indonesian decimal commas are preserved inside verbatim text
(`36,9%` is 36.9%). Maturity tags: (a) published official statistics, (b) experimental or pilot
compilation, (c) methodology under development, (d) announced but not started.

**Two standing cautions carried into this pack.** First, the prior derivability figures moved
61% → 39% → 2.8% as the indicator set and maturity evidence were corrected, so no derivability
percentage carries argumentative weight on its own; this pack supplies the key for re-scoring,
and records no derivability judgement of its own. Second, nothing in `03-outputs/` may be cited
as a source — it predates the research and is prior work to be corrected.

---

## 1. The 44-indicator register — the join key

Juknis Pedoman IBEI, Tabel 1 *Indikator Indeks Ekonomi Biru Indonesia*, printed pp. 11-13
[pdf 21-23]. `Data Pembentuk` reproduces the `Data Pembentuk Indikator` column verbatim,
semicolon-separated where the source prints multiple bulleted items. The `chunk_id` column
anchors each row: indicator *n* is chunk `doc_1_juknis-register_chunk_%03d` (n + 5).

**Producer: stated for no indicator.** All 44 rows carry `stated_producer: not_stated`. Tabel 1
prints no producing-agency column, and the register pages are BAPPENAS guidance rather than a
statistical metadata sheet. The only producer statement anywhere in the corpus is at activity
level in the BPS SIRUSA metadata — collection instrument *"Lainnya : Publikasi KKP dan BPS"* —
which names two producers collectively for the whole compilation and attributes none of them to
a specific indicator (see section 5 and `doc_4_sirusa-metadata_chunk_007`). Per-indicator
producer attribution is therefore an evidence gap, not something to be inferred from the
indicator's subject matter.

**Rows 15-18 carry an unresolved pillar-placement conflict**, marked ‡ and set out in full in
section 5. Tabel 1 assigns them to a fourth pillar, `Enabler (teknologi & tata kelola)`; Tabel
4/5 and Gambar 11 print only three pillars and place the same material inside `Ekonomi`. The
table below propagates the Tabel 1 labels because that is the locus this register is drawn from.
Any re-scoring that aggregates by pillar must state which locus it follows.

| No | Pilar | Subpilar | Indikator | Data Pembentuk (verbatim, `;`-separated) | Stated producer | Locator | chunk_id |
|---:|---|---|---|---|---|---|---|
| 1 | Ekonomi | Perikanan tangkap dan budidaya | Peran sektor perikanan dalam PDB (%) | Nilai Produk Domestik Regional Bruto (PDRB) dari sektor perikanan suatu provinsi, dihitung Atas Dasar Harga Berlaku (ADHB).; Nilai PDRB total dari provinsi yang sama, juga dihitung Atas Dasar Harga Berlaku (ADHB). | not_stated | p. 11 [pdf 21] | `doc_1_juknis-register_chunk_006` |
| 2 | Ekonomi | Perikanan tangkap dan budidaya | Volume produksi perikanan (ton) | Volume produksi perikanan tangkap (mencakup laut dan perairan umum daratan) per provinsi.; Volume produksi perikanan budidaya pembesaran (mencakup tambak dan non-tambak) per provinsi. | not_stated | p. 11 [pdf 21] | `doc_1_juknis-register_chunk_007` |
| 3 | Ekonomi | Perikanan tangkap dan budidaya | Volume produksi budidaya tambak (ton) | Total volume produksi dari budidaya tambak (tambak intensif, tambak sederhana, dan tambak semi intensif) per provinsi. | not_stated | p. 11 [pdf 21] | `doc_1_juknis-register_chunk_008` |
| 4 | Ekonomi | Perikanan tangkap dan budidaya | Volume produksi akuakultur (ton) | Volume produksi dari setiap komoditas budidaya pembesaran per provinsi. | not_stated | p. 11 [pdf 21] | `doc_1_juknis-register_chunk_009` |
| 5 | Ekonomi | Perikanan tangkap dan budidaya | Volume produksi budidaya rumput laut (ton) | Total volume produksi dari budidaya rumput laut per provinsi. | not_stated | p. 11 [pdf 21] | `doc_1_juknis-register_chunk_010` |
| 6 | Ekonomi | Perdagangan, transportasi, dan logistik | Volume angkutan laut (ton) | Total volume (berat bersih) kegiatan ekspor yang dimuat melalui moda transportasi laut per provinsi.; Total volume (berat bersih) kegiatan impor yang dibongkar melalui moda transportasi laut per provinsi. | not_stated | p. 11 [pdf 21] | `doc_1_juknis-register_chunk_011` |
| 7 | Ekonomi | Perdagangan, transportasi, dan logistik | Jumlah penumpang angkutan laut (orang) | Jumlah penumpang kapal antar pulau (datang dan berangkat) per provinsi.; Jumlah penumpang kapal luar negeri (datang dan berangkat) per provinsi. | not_stated | p. 11 [pdf 21] | `doc_1_juknis-register_chunk_012` |
| 8 | Ekonomi | Perdagangan, transportasi, dan logistik | Jumlah penumpang angkutan laut di 25 pelabuhan strategis (orang) | Jumlah penumpang (datang dan berangkat) di setiap pelabuhan yang termasuk dalam daftar 25 pelabuhan strategis nasional, per provinsi. | not_stated | p. 11 [pdf 21] | `doc_1_juknis-register_chunk_013` |
| 9 | Ekonomi | Perdagangan, transportasi, dan logistik | Volume ekspor perikanan (ton) | Total volume ekspor hasil perikanan per provinsi. | not_stated | p. 11 [pdf 21] | `doc_1_juknis-register_chunk_014` |
| 10 | Ekonomi | Perdagangan, transportasi, dan logistik | Kontribusi ekspor produk perikanan terhadap total ekspor (%) | Nilai ekspor hasil perikanan per provinsi.; Total nilai ekspor seluruh komoditas per provinsi. | not_stated | p. 11 [pdf 21] | `doc_1_juknis-register_chunk_015` |
| 11 | Ekonomi | Perdagangan, transportasi, dan logistik | Volume ekspor perikanan hidup dan segar (ton) | Volume ekspor perikanan tangkap (kode ISIC 031) per provinsi.; Volume ekspor akuakultur (kode ISIC 032) per provinsi. | not_stated | p. 11 [pdf 21] | `doc_1_juknis-register_chunk_016` |
| 12 | Ekonomi | Perdagangan, transportasi, dan logistik | Volume ekspor ikan olahan (ton) | Total volume ekspor produk ikan, krustasea, dan moluska yang telah diproses dan/atau diawetkan, sesuai dengan kode ISIC 102. | not_stated | p. 11 [pdf 21] | `doc_1_juknis-register_chunk_017` |
| 13 | Ekonomi | Industri berbasis kelautan | Volume produksi garam (ton) | Volume produksi garam dari tambak per provinsi.; Volume produksi garam non-tambak per provinsi. | not_stated | p. 11 [pdf 21] | `doc_1_juknis-register_chunk_018` |
| 14 | Ekonomi | Industri berbasis kelautan | Jumlah perahu/kapal penangkap ikan (unit) | Jumlah perahu tanpa motor per provinsi.; Jumlah perahu motor tempel per provinsi.; Jumlah kapal motor per provinsi. | not_stated | p. 11 [pdf 21] | `doc_1_juknis-register_chunk_019` |
| 15 | Enabler (teknologi & tata kelola) ‡ | Pariwisata berbasis bahari | Jumlah wisata bahari (desa) | Jumlah desa di tepi laut yang teridentifikasi memiliki wisata bahari per provinsi. | not_stated | p. 12 [pdf 22] | `doc_1_juknis-register_chunk_020` |
| 16 | Enabler (teknologi & tata kelola) ‡ | Pariwisata berbasis bahari | Jumlah usaha/perusahaan wisata tirta komersial (unit usaha) | Jumlah usaha/perusahaan komersial yang bergerak di bidang wisata tirta per provinsi. | not_stated | p. 12 [pdf 22] | `doc_1_juknis-register_chunk_021` |
| 17 | Enabler (teknologi & tata kelola) ‡ | - | Jumlah kapal perikanan tangkap laut - kapal motor > 30 GT (unit) | Jumlah kapal motor untuk perikanan tangkap laut dengan ukuran lebih dari 30 GT per provinsi. | not_stated | p. 12 [pdf 22] | `doc_1_juknis-register_chunk_022` |
| 18 | Enabler (teknologi & tata kelola) ‡ | - | Jumlah pelabuhan perikanan dengan tempat pelelangan ikan (unit) | Jumlah pelabuhan perikanan yang dilengkapi dengan fasilitas Tempat Pelelangan Ikan (TPI) per provinsi. | not_stated | p. 12 [pdf 22] | `doc_1_juknis-register_chunk_023` |
| 19 | Lingkungan | Kualitas sumber daya dan konservasi laut | Kawasan terumbu karang berkualitas baik (%) | Persentase kawasan terumbu karang dengan tutupan karang hidup antara 50-100% per provinsi. | not_stated | p. 12 [pdf 22] | `doc_1_juknis-register_chunk_024` |
| 20 | Lingkungan | Kualitas sumber daya dan konservasi laut | Kawasan lamun berkualitas baik (%) | Persentase kawasan lamun dengan tutupan lamun hidup antara 50-100% per provinsi. | not_stated | p. 12 [pdf 22] | `doc_1_juknis-register_chunk_025` |
| 21 | Lingkungan | Kualitas sumber daya dan konservasi laut | Kawasan hutan mangrove berkualitas baik (%) | Persentase kawasan mangrove dengan kerapatan tutupan antara 50-100% per provinsi. | not_stated | p. 12 [pdf 22] | `doc_1_juknis-register_chunk_026` |
| 22 | Lingkungan | Kualitas sumber daya dan konservasi laut | Jumlah desa pesisir dengan tempat pembuangan sampah (desa) | Jumlah desa di tepi laut yang memiliki Tempat Penampungan Sampah Sementara (TPS) per provinsi. | not_stated | p. 12 [pdf 22] | `doc_1_juknis-register_chunk_027` |
| 23 | Lingkungan | Kualitas sumber daya dan konservasi laut | Jumlah desa pesisir dengan tempat buang air besar (desa) | Jumlah desa di tepi laut di mana sebagian besar keluarga memiliki jamban sendiri. | not_stated | p. 12 [pdf 22] | `doc_1_juknis-register_chunk_028` |
| 24 | Lingkungan | Kualitas sumber daya dan konservasi laut | Penanaman/rehabilitasi hutan mangrove, rawa, dan lahan gambut (hektar) | Total luas kawasan mangrove, rawa, dan lahan gambut yang direstorasi per provinsi. | not_stated | p. 12 [pdf 22] | `doc_1_juknis-register_chunk_029` |
| 25 | Lingkungan | Kualitas sumber daya dan konservasi laut | Jumlah Kebocoran Sampah Laut (Ton) | Volume kebocoran sampah laut per provinsi. | not_stated | p. 12 [pdf 22] | `doc_1_juknis-register_chunk_030` |
| 26 | Lingkungan | Kualitas sumber daya dan konservasi laut | Jumlah sampah yang dibuang di darat (ton/tahun) | Total timbunan sampah tahunan per provinsi, yang merupakan agregat dari data kabupaten/kota. | not_stated | p. 12 [pdf 22] | `doc_1_juknis-register_chunk_031` |
| 27 | Lingkungan | Kualitas sumber daya dan konservasi laut | Luas kawasan konservasi perairan (ha) | Total luas kawasan konservasi perairan yang ditetapkan oleh KKP, KLHK, dan Pemerintah Daerah per provinsi. | not_stated | p. 12 [pdf 22] | `doc_1_juknis-register_chunk_032` |
| 28 | Lingkungan | Energi terbarukan | Kapasitas terpasang Pembangkit Listrik Tenaga Surya (PLTS) (megawatt) | Kapasitas terpasang PLTS per provinsi. | not_stated | p. 12 [pdf 22] | `doc_1_juknis-register_chunk_033` |
| 29 | Lingkungan | Energi terbarukan | Listrik yang dihasilkan oleh Pembangkit Listrik Tenaga Surya (PLTS) (gigawatt/hour - GWh) | Total tenaga listrik yang dibangkitkan oleh PLTS per provinsi. | not_stated | p. 12 [pdf 22] | `doc_1_juknis-register_chunk_034` |
| 30 | Lingkungan | Energi terbarukan | Kapasitas terpasang Pembangkit Listrik Tenaga Air (PLTA) (megawatt) | Kapasitas terpasang PLTA per provinsi. | not_stated | p. 12 [pdf 22] | `doc_1_juknis-register_chunk_035` |
| 31 | Lingkungan | Energi terbarukan | Listrik yang dihasilkan oleh Pembangkit Listrik Tenaga Air (PLTA) (gigawatt/hour - GWh) | Total tenaga listrik yang dibangkitkan oleh PLTA per provinsi. | not_stated | p. 12 [pdf 22] | `doc_1_juknis-register_chunk_036` |
| 32 | Sosial | Kesejahteraan | Persentase penduduk bekerja di sektor perikanan penerima Program Keluarga Harapan (PKH) (%) | Jumlah penduduk bekerja di sektor perikanan yang menerima PKH per provinsi.; Total jumlah penduduk di provinsi yang sama yang menerima PKH. | not_stated | p. 13 [pdf 23] | `doc_1_juknis-register_chunk_037` |
| 33 | Sosial | Kesejahteraan | Jumlah pekerja perempuan di sektor perikanan (orang) | Total jumlah nelayan perikanan tangkap per provinsi.; Total jumlah pembudidaya ikan per provinsi.; Proporsi nelayan dan pembudidaya ikan perempuan per provinsi. | not_stated | p. 13 [pdf 23] | `doc_1_juknis-register_chunk_038` |
| 34 | Sosial | Kesejahteraan | Jumlah nelayan dan pembudidaya ikan (orang) | Jumlah penduduk yang berprofesi sebagai nelayan per provinsi.; Jumlah penduduk yang berprofesi sebagai pembudidaya ikan per provinsi. | not_stated | p. 13 [pdf 23] | `doc_1_juknis-register_chunk_039` |
| 35 | Sosial | Kesejahteraan | Rata-rata konsumsi kalori ikan per kapita (kkal) | Rata-rata konsumsi kalori dari ikan per kapita per hari di tingkat provinsi. | not_stated | p. 13 [pdf 23] | `doc_1_juknis-register_chunk_040` |
| 36 | Sosial | Kesejahteraan | Rata-rata konsumsi protein dari ikan per kapita (kkal) | Rata-rata konsumsi protein dari ikan per kapita per hari di tingkat provinsi. | not_stated | p. 13 [pdf 23] | `doc_1_juknis-register_chunk_041` |
| 37 | Sosial | Kesehatan | Persentase penduduk bekerja di sektor perikanan yang memiliki jaminan kesehatan (%) | Jumlah penduduk bekerja di sektor perikanan yang memiliki jaminan kesehatan per provinsi.; Total penduduk yang memiliki jaminan kesehatan di provinsi yang sama. | not_stated | p. 13 [pdf 23] | `doc_1_juknis-register_chunk_042` |
| 38 | Sosial | Kesehatan | Persentase penduduk pesisir yang hidup di bawah garis kemiskinan (%) | Jumlah penduduk miskin di setiap kabupaten/kota pesisir dalam satu provinsi.; Total penduduk miskin di provinsi tersebut. | not_stated | p. 13 [pdf 23] | `doc_1_juknis-register_chunk_043` |
| 39 | Sosial | Pendidikan | Jumlah SMK kemaritiman (unit sekolah) | Jumlah Sekolah Menengah Kejuruan (SMK) bidang kemaritiman per provinsi. | not_stated | p. 13 [pdf 23] | `doc_1_juknis-register_chunk_044` |
| 40 | Sosial | Pendidikan | Jumlah lulusan sekolah perikanan (orang) | Jumlah lulusan dari satuan pendidikan di bawah KKP per provinsi. | not_stated | p. 13 [pdf 23] | `doc_1_juknis-register_chunk_045` |
| 41 | Sosial | Pendidikan | Jumlah peserta pelatihan perikanan (orang) | Total jumlah peserta pelatihan dan penyuluhan kelautan dan perikanan per provinsi. | not_stated | p. 13 [pdf 23] | `doc_1_juknis-register_chunk_046` |
| 42 | Sosial | Pendidikan | Persentase penduduk sektor perikanan dengan pendidikan terakhir SMA atau sederajat (%) | Jumlah penduduk bekerja di sektor perikanan dengan pendidikan terakhir SMA/sederajat per provinsi.; Total penduduk dengan pendidikan terakhir SMA/sederajat di provinsi yang sama. | not_stated | p. 13 [pdf 23] | `doc_1_juknis-register_chunk_047` |
| 43 | Sosial | Pendidikan | Persentase penduduk di sektor perikanan dengan ijazah minimal SMA atau sederajat (%) | Jumlah penduduk bekerja di sektor perikanan dengan ijazah minimal SMA/sederajat per provinsi.; Total penduduk dengan ijazah minimal SMA/sederajat di provinsi yang sama. | not_stated | p. 13 [pdf 23] | `doc_1_juknis-register_chunk_048` |
| 44 | Sosial | Pendidikan | Persentase penduduk bekerja di sektor perikanan penerima Program Indonesia Pintar (PIP) (%) | Jumlah penduduk bekerja di sektor perikanan yang keluarganya menerima PIP per provinsi.; Total penduduk yang keluarganya menerima PIP di provinsi yang sama. | not_stated | p. 13 [pdf 23] | `doc_1_juknis-register_chunk_049` |

‡ pillar placement unresolved — see section 5.

### 1.1 Register structure, verbatim

The sub-pillar-to-indicator-number blocking as the Juknis prints it. Note that the sub-pillar
name for indicators 17-18 is a dash in the source, not an extraction loss.

**`doc_1_juknis-register_chunk_001`** · p. 11 [pdf 21] · Tabel 1. Indikator Indeks Ekonomi Biru Indonesia · type `context` · maturity `not_applicable`

```text
Tabel 1. Indikator Indeks Ekonomi Biru Indonesia

No | Pilar | Subpilar | Indikator | Data Pembentuk Indikator
```

*EN gloss:* Table 1. Indicators of the Indonesia Blue Economy Index. Column headings: No | Pillar | Sub-pillar | Indicator | Data Constituting the Indicator. The table runs across printed pp. 11-13 and carries indicator numbers 1-44; the table states no producing agency for any indicator.

**`doc_1_juknis-register_chunk_002`** · p. 11 [pdf 21] · Tabel 1. Indikator Indeks Ekonomi Biru Indonesia · type `context` · maturity `not_applicable`

```text
Petunjuk Teknis Pedoman Indikator Ekonomi Biru Dalam Rencana Pembangunan Jangka Panjang Nasional (RPJPN) 2025–2045 — Kementerian Perencanaan Pembangunan Nasional/Bappenas
```

*EN gloss:* Running head and imprint on the register pages: Technical Guidelines for Blue Economy Indicators within the National Long-Term Development Plan (RPJPN) 2025-2045, Ministry of National Development Planning/Bappenas. This establishes the register as a published BAPPENAS guidance document.

**`doc_1_juknis-register_chunk_003`** · p. 11 [pdf 21] · Tabel 1. Indikator Indeks Ekonomi Biru Indonesia · type `methodology` · maturity `not_applicable` · **RECONSTRUCTED**

```text
Pilar: Ekonomi — Subpilar: Perikanan tangkap dan budidaya (indikator 1–5); Perdagangan, transportasi, dan logistik (indikator 6–12); Industri berbasis kelautan (indikator 13–14).
```

*EN gloss:* Pillar Economy, with sub-pillars: capture fisheries and aquaculture (indicators 1-5); trade, transport and logistics (indicators 6-12); marine-based industry (indicators 13-14).

*Extractor note:* Pillar and sub-pillar spans are read from the vertically merged table cells in the pdftotext -layout rendering, where the label glyphs sit at the vertical centre of their row block. The label text is verbatim; the row-range attribution is inferred from cell position. Confidence: high for the Ekonomi pillar span 1-14 and for Industri berbasis kelautan 13-14; medium for the exact boundary between Perikanan tangkap dan budidaya and Perdagangan, transportasi, dan logistik at 5/6.

**`doc_1_juknis-register_chunk_004`** · p. 12 [pdf 22] · Tabel 1. Indikator Indeks Ekonomi Biru Indonesia · type `methodology` · maturity `not_applicable` · **RECONSTRUCTED**

```text
Pilar: Enabler (teknologi & tata kelola) — Subpilar: Pariwisata berbasis bahari (indikator 15–16); Subpilar “-” (indikator 17–18). Pilar: Lingkungan — Subpilar: Kualitas sumber daya dan konservasi laut (indikator 19–27); Energi terbarukan (indikator 28–31).
```

*EN gloss:* Pillar Enabler (technology and governance), with sub-pillars: marine-based tourism (indicators 15-16) and an unnamed sub-pillar printed as a dash (indicators 17-18). Pillar Environment, with sub-pillars: resource quality and marine conservation (indicators 19-27) and renewable energy (indicators 28-31). The dash is the document's own entry, not an omission in extraction.

*Extractor note:* Row spans inferred from vertical cell-label placement in the pdftotext -layout rendering; label text verbatim. Confidence high. Note the sub-pillar cell for indicators 17-18 is printed as a bare hyphen in the source, so those two indicators sit under the Enabler pillar with no named sub-pillar.

**`doc_1_juknis-register_chunk_005`** · p. 13 [pdf 23] · Tabel 1. Indikator Indeks Ekonomi Biru Indonesia · type `methodology` · maturity `not_applicable` · **RECONSTRUCTED**

```text
Pilar: Sosial — Subpilar: Kesejahteraan (indikator 32–36); Kesehatan (indikator 37–38); Pendidikan (indikator 39–44).
```

*EN gloss:* Pillar Social, with sub-pillars: welfare (indicators 32-36); health (indicators 37-38); education (indicators 39-44).

*Extractor note:* Row spans inferred from vertical cell-label placement in the pdftotext -layout rendering; label text verbatim. Confidence high. Note indicator 38 (coastal poverty) sits in the Kesehatan sub-pillar block rather than Kesejahteraan, which is the source's own placement.

---

## 2. Published weights

**These weights are published, not reconstructed.** They are printed as percentages in the
Juknis Pedoman IBEI at Tabel 4 (pillar, p. 94 [pdf 104]), Tabel 5 (sub-pillar within pillar,
p. 94 [pdf 104]) and Tabel 6 (variable within sub-pillar, pp. 95-96 [pdf 105-106]), with the
index-level shares also shown in Gambar 11 (p. 93 [pdf 103]). This corrects the workspace's
standing note that the IBEI's weights are reconstructed from fragmentary metadata: at these
three levels they are not. What *is* unpublished is the underlying PC1 loading vector and the
explained-variance figures behind these percentages (section 5).

**The High/Medium/Low tertile banding is the document's own simplification, not a weight.**
Tabel 4/5/6 print `Tinggi`, `Sedang` or `Rendah` beside each percentage. The Juknis states the
rule itself at p. 94 [pdf 104] (`doc_1_juknis-weights_chunk_105`): components are ranked within
their own group and the top third labelled Tinggi, the bottom third Rendah, the rest Sedang.
Three consequences, all visible in the verbatim records below and none of them inferred:

- With three pillars, each tertile holds exactly one pillar, so the label adds nothing to the
  rank order. The spread is narrow: 36,9% to 30,5%.
- The printed labels are not consistently a within-group tertile ordering. `si_enviro_s1` and
  `si_enviro_s2` both carry 50,0% yet are labelled Tinggi and Rendah; `econ_s4_var19` and
  `econ_s4_var20` both carry 50,0% with the same split; `social_s1_var1` and `social_s1_var2`
  both carry 8,7% and are labelled Sedang and Rendah. No tie-breaking rule is stated.
- Single-variable groups carry 100,0% yet are labelled `Sedang` (`econ_gov_var22`,
  `econ_tech_var21`).

**Always quote the percentage, and say the tertile is the document's own banding.** The label
alone is not usable as a weight.

### 2.1 Convenience re-tabulation

Re-tabulated from the verbatim records in 2.2-2.4 below. No value altered; percentages as
printed, with the Indonesian decimal comma normalised to a point for arithmetic legibility only.

Pillar level — Juknis Tabel 4, p. 94 [pdf 104] (`doc_1_juknis-weights_chunk_106`); Gambar 11
prints the same quantities rounded to integers (37 / 33 / 31):

| Code | Pillar | Published % of IBEI | Document's tertile label |
|---|---|---:|---|
| `si_enviro` | Index pilar lingkungan | 36.9 | Tinggi |
| `si_econ` | Index pilar ekonomi | 32.6 | Sedang |
| `si_social` | Index pilar sosial | 30.5 | Rendah |

Sub-pillar level — Juknis Tabel 5, p. 94 [pdf 104] (`chunk_107`, `chunk_108`). Percentages are
shares of the parent pillar. The six Economy weights sum to 100.1% on rounding.

| Code | Sub-pillar | % of parent pillar | Tertile label | Parent |
|---|---|---:|---|---|
| `si_econ_s1` | Perikanan tangkap dan budidaya | 15.2 | Rendah | Ekonomi |
| `si_econ_s2` | Industri berbasis kelautan | 23.6 | Tinggi | Ekonomi |
| `si_econ_s3` | Perdagangan, transport dan logistik | 19.3 | Sedang | Ekonomi |
| `si_econ_s4` | Pariwisata berbasis kelautan | 22.1 | Tinggi | Ekonomi |
| `si_econ_tech` | Teknologi | 4.1 | Rendah | Ekonomi |
| `si_econ_gov` | Tatakelola | 15.8 | Sedang | Ekonomi |
| `si_enviro_s1` | Kualitas sumber daya dan konservasi laut | 50.0 | Tinggi | Lingkungan |
| `si_enviro_s2` | Energi terbaharukan | 50.0 | Rendah | Lingkungan |
| `si_social_s1` | Kesejahteraan | 18.2 | Sedang | Sosial |
| `si_social_s2` | Pendidikan | 13.7 | Rendah | Sosial |
| `si_social_s3` | Kesehatan | 68.1 | Tinggi | Sosial |

Variable level — Juknis Tabel 6, pp. 95-96 [pdf 105-106] (`chunk_110` to `chunk_117`).
Percentages are shares of the parent sub-pillar. Tabel 6 prints variable *codes* whose numeric
suffixes are neither sequential nor contiguous, so codes must be matched to section 1 register
indicators **by name, not by suffix**.

| Code | Variable, as printed in Tabel 6 | % of sub-pillar | Tertile label | Sub-pillar |
|---|---|---:|---|---|
| `econ_s1_var1` | Peran sektor perikanan dalam Produk Domestik Bruto (PDB) (%) | 10.6 | Rendah | Perikanan tangkap dan budidaya |
| `econ_s1_var5` | Volume produksi akuakultur (ton) | 27.3 | Tinggi | Perikanan tangkap dan budidaya |
| `econ_s1_var6` | Volume produksi budidaya tambak (ton) | 26.3 | Sedang | Perikanan tangkap dan budidaya |
| `econ_s1_var7` | Volume produksi perikanan (ton) | 6.3 | Rendah | Perikanan tangkap dan budidaya |
| `econ_s1_var8` | Volume produksi budidaya rumput laut (ton) | 29.4 | Tinggi | Perikanan tangkap dan budidaya |
| `econ_s2_var9` | Volume ekspor ikan olahan (ton) | 33.5 | Sedang | Industri berbasis kelautan |
| `econ_s2_var10` | Volume produksi garam (ton) | 37.0 | Tinggi | Industri berbasis kelautan |
| `econ_s2_var12` | Jumlah perahu/kapal penangkap ikan (unit) | 29.5 | Rendah | Industri berbasis kelautan |
| `econ_s3_var13` | Volume angkutan laut (ton) | 1.1 | Rendah | Perdagangan, transport dan logistik |
| `econ_s3_var14` | Jumlah penumpang angkutan laut (orang) | 17.8 | Sedang | Perdagangan, transport dan logistik |
| `econ_s3_var15` | Jumlah penumpang angkutan laut di 25 pelabuhan strategis (orang) | 22.8 | Tinggi | Perdagangan, transport dan logistik |
| `econ_s3_var16` | Volume ekspor perikanan (ton) | 19.8 | Sedang | Perdagangan, transport dan logistik |
| `econ_s3_var17` | Peran ekspor produk perikanan terhadap total ekspor (%) | 15.3 | Rendah | Perdagangan, transport dan logistik |
| `econ_s3_var18` | Volume ekspor perikanan dan akuakultur (ton) | 23.2 | Tinggi | Perdagangan, transport dan logistik |
| `econ_s4_var19` | Jumlah wisata bahari (titik) | 50.0 | Tinggi | Pariwisata berbasis kelautan |
| `econ_s4_var20` | Jumlah usaha/perusahaan wisata tirta komersial (unit) | 50.0 | Rendah | Pariwisata berbasis kelautan |
| `econ_tech_var21` | Jumlah kapal perikanan tangkap laut - kapal motor > 30 GT (unit) | 100.0 | Sedang | Teknologi |
| `econ_gov_var22` | Jumlah pelabuhan perikanan dengan Tempat Pelelangan Ikan (TPI) (unit) | 100.0 | Sedang | Tatakelola |
| `enviro_s1_var1` | Kawasan terumbu karang berkualitas baik (%) | 3.7 | Rendah | Kualitas sumber daya dan konservasi laut |
| `enviro_s1_var2` | Kawasan lamun berkualitas baik (%) | 8.6 | Sedang | Kualitas sumber daya dan konservasi laut |
| `enviro_s1_var3` | Kawasan hutan mangrove berkualitas baik (%) | 0.3 | Rendah | Kualitas sumber daya dan konservasi laut |
| `enviro_s1_var4` | Jumlah desa pesisir dengan tempat pembuangan sampah (desa) | 18.7 | Tinggi | Kualitas sumber daya dan konservasi laut |
| `enviro_s1_var5` | Jumlah desa pesisir dengan tempat buang air besar (desa) | 20.8 | Tinggi | Kualitas sumber daya dan konservasi laut |
| `enviro_s1_var6` | Penanaman/rehabilitasi hutan mangrove, rawa, dan lahan gambut (Ha) | 6.8 | Sedang | Kualitas sumber daya dan konservasi laut |
| `enviro_s1_var8_r` | Reversed dr volume sampah yang bocor ke laut | 14.9 | Sedang | Kualitas sumber daya dan konservasi laut |
| `enviro_s1_var9_r` | Reversed dr jumlah sampah yang dibuang di darat | 4.2 | Rendah | Kualitas sumber daya dan konservasi laut |
| `enviro_s1_var10` | Luas kawasan konservasi perairan (Ha) | 22.0 | Tinggi | Kualitas sumber daya dan konservasi laut |
| `enviro_s2_var11` | Kapasitas terpasang PLTS (MW) | 24.5 | Sedang | Energi terbarukan |
| `enviro_s2_var12` | Listrik yang dihasilkan oleh PLTS (GWh) | 24.2 | Rendah | Energi terbarukan |
| `enviro_s2_var13` | Kapasitas terpasang PLTA (MW) | 26.5 | Tinggi | Energi terbarukan |
| `enviro_s2_var14` | Listrik yang dihasilkan oleh PLTA (GWh) | 24.8 | Sedang | Energi terbarukan |
| `social_s1_var1` | Jumlah nelayan dan petani ikan (orang) | 8.7 | Sedang | Kesejahteraan |
| `social_s1_var2` | Jumlah perempuan di sektor perikanan (orang) | 8.7 | Rendah | Kesejahteraan |
| `social_s1_var10` | Reverse dari proporsi penduduk sektor perikanan yang menjadi peserta PKH | 82.6 | Tinggi | Kesejahteraan |
| `social_s2_var4` | Jumlah lulusan sekolah perikanan (orang) | 14.8 | Rendah | Pendidikan |
| `social_s2_var5` | Jumlah peserta pelatihan perikanan (orang) | 17.3 | Sedang | Pendidikan |
| `social_s2_var6` | Jumlah SMK kemaritiman | 22.4 | Tinggi | Pendidikan |
| `social_s2_var7` | Proporsi penduduk sektor perikanan dengan jenjang pendidikan terakhir SMA (%) | 21.3 | Tinggi | Pendidikan |
| `social_s2_var8` | Proporsi penduduk sektor perikanan yang memiliki ijazah terakhir SMA (%) | 21.2 | Sedang | Pendidikan |
| `social_s2_var9` | Reverse dari proporsi penduduk sektor perikanan yang menjadi peserta PIP | 3.1 | Rendah | Pendidikan |
| `social_s3_var11` | Rata-rata konsumsi kalori ikan per kapita (kkal) | 34.6 | Tinggi | Kesehatan |
| `social_s3_var12` | Rata-rata konsumsi protein ikan per kapita (kkal) | 33.8 | Sedang | Kesehatan |
| `social_s3_var13` | Proporsi penduduk sektor perikanan yang memiliki jaminan kesehatan (%) | 30.0 | Sedang | Kesehatan |
| `social_s3_var14` | Reversed dari proporsi jumlah penduduk miskin di sektor perikanan (%) | 1.6 | Rendah | Kesehatan |

Two features of this level matter for any argument about ocean accounts and are stated in the
source, not derived here. The three ecosystem-condition variables carry the smallest weights in
the environment sub-pillar they sit in — mangrove quality 0,3%, coral quality 3,7%, seagrass
quality 8,6% — while the two village-sanitation counts carry 18,7% and 20,8% and protected-area
extent 22,0%. And the renewable-energy sub-pillar of a blue economy index contains no marine
energy variable at all: as printed, all four are solar (PLTS) and hydro (PLTA).

Composed through Tabel 4 and Tabel 5, health (68,1% of a 30,5% pillar) accounts for roughly a
fifth of the whole index, which is what legend item K = 21% in Gambar 11 records.

### 2.2 Verbatim — decomposition framing and Gambar 11

**`doc_1_juknis-weights_chunk_101`** · p. 93 [pdf 103] · 5.4. Analisa Dekomposisi · type `methodology` · maturity `not_applicable`

```text
5.4. ANALISA DEKOMPOSISI — Kekuatan dan kelemahan dari setiap provinsi tidak hanya dapat dilihat dari skor mentahnya saja, melainkan juga dapat dilihat dari bobot atau tingkat kepentingan dari setiap komponen dalam formula IBEI. Metodologi IBEI memiliki struktur hierarkis, di mana skor akhir dibentuk dari beberapa lapisan. Secara umum, bobot kontribusi tingkat indikator, subpilar, dan pilar IBEI tergambar pada Gambar 11.
```

*EN gloss:* 5.4. DECOMPOSITION ANALYSIS — The strengths and weaknesses of each province can be seen not only from its raw score but also from the weight or level of importance of each component in the IBEI formula. The IBEI methodology has a hierarchical structure in which the final score is formed from several layers. In general, the contribution weights at the indicator, sub-pillar and pillar levels of the IBEI are depicted in Figure 11.

**`doc_1_juknis-weights_chunk_102`** · p. 93 [pdf 103] · Gambar 11. Kontribusi Komponen Pembentuk IBEI 2025 · type `data` · maturity `not_applicable`

```text
Gambar 11. Kontribusi Komponen Pembentuk IBEI 2025 — 44 Indikator Indeks Ekonomi Biru / 11 Sub-pilar: A 5%, B 8%, C 6%, D 7%, E 1%, F 5%, G 18%, H 18%, I 6%, J 4%, K 21%. 3 Pilar: Pilar 1 (Ekonomi) 33%, Pilar 2 (Lingkungan) 37%, Pilar 3 (Sosial) 31%.
```

*EN gloss:* Figure 11. Contribution of the components forming the IBEI 2025 — 44 Blue Economy Index indicators / 11 sub-pillars: A 5%, B 8%, C 6%, D 7%, E 1%, F 5%, G 18%, H 18%, I 6%, J 4%, K 21%. 3 pillars: Pillar 1 (Economy) 33%, Pillar 2 (Environment) 37%, Pillar 3 (Social) 31%.

*Extractor note:* Figure 11 gives sub-pillar shares of the whole index rounded to integer percent; the pillar figures (33/37/31) are the same quantities as Tabel 4 (32.6/36.9/30.5) rounded. Sub-pillar letters A-K are decoded in the figure legend, recorded in the following chunk. No unrounded sub-pillar-of-index values are printed.

**`doc_1_juknis-weights_chunk_103`** · p. 93 [pdf 103] · Gambar 11. Legend Sub-Pilar · type `definition` · maturity `not_applicable`

```text
Legend Sub-Pilar: A Index sub pilar perikanan tangkap dan budidaya; B Index sub pilar industri berbasis kelautan; C Index sub pilar perdagangan, transport dan logistik; D Index sub pilar pariwisata berbasis kelautan; E Index sub pilar teknologi; F Index sub pilar tatakelola; G Index sub pilar kualitas sumber daya dan konservasi laut; H Index sub pilar energi terbaharukan; I Index sub pilar kesejahteraan; J Index sub pilar pendidikan; K Index sub pilar kesehatan.
```

*EN gloss:* Sub-pillar legend: A capture fisheries and aquaculture sub-pillar index; B marine-based industry; C trade, transport and logistics; D marine-based tourism; E technology; F governance; G marine resource quality and conservation; H renewable energy; I welfare; J education; K health.

**`doc_1_juknis-weights_chunk_104`** · p. 93 [pdf 103] · Gambar 11. Keterangan · type `methodology` · maturity `not_applicable`

```text
Keterangan: Besaran pembobot dihasilkan secara otomatis melalui proses PCA
```

*EN gloss:* Note: The magnitude of the weights is generated automatically through the PCA process.

**`doc_1_juknis-weights_chunk_105`** · p. 94 [pdf 104] · 5.4 Penyederhanaan peringkat bobot · type `definition` · maturity `not_applicable`

```text
Dengan penyederhanaan, tingkat kontribusi (bobot) dari setiap komponen dikategorikan dalam tiga peringkat: Tinggi, Sedang, dan Rendah. Peringkat ini ditentukan secara relatif dengan mengurutkan bobot komponen di dalam grupnya masing-masing. Komponen dengan bobot sepertiga teratas dikategorikan sebagai “Tinggi”, sepertiga terbawah sebagai “Rendah”, dan sisanya sebagai “Sedang”. Tabel-tabel berikut menyajikan resep dari perhitungan IBEI ini.
```

*EN gloss:* As a simplification, the contribution level (weight) of each component is categorised into three ranks: High, Medium and Low. These ranks are determined relatively by ordering component weights within their respective groups. Components in the top third by weight are categorised “High”, the bottom third “Low”, and the remainder “Medium”. The following tables present the recipe for this IBEI calculation.

*Extractor note:* The Tinggi/Sedang/Rendah tertile label is the document's own simplification of the published percentage, applied within each group, not an independent weight. Every tertile label recorded in this slice must be read alongside its percentage. Note that the printed labels are not always consistent with a strict within-group tertile ordering (see flags on Tabel 5 and Tabel 6 chunks).

### 2.3 Verbatim — Tabel 4 and Tabel 5

**`doc_1_juknis-weights_chunk_106`** · p. 94 [pdf 104] · Tabel 4. Bobot IBEI 2025 berdasarkan pilar · type `data` · maturity `not_applicable`

```text
Kontribusi Level Pilar pada IBEI — Tabel 4 ini menunjukkan tingkat kepentingan dari tiga pilar utama dalam menentukan skor akhir IBEI. Terlihat bahwa Pilar Lingkungan memiliki bobot tertinggi. | Tabel 4. Bobot IBEI 2025 berdasarkan pilar | Kode Pillar / Nama Pilar / Kontribusi terhadap IBEI: si_enviro | Index pilar lingkungan | Tinggi (36,9%); si_econ | Index pilar ekonomi | Sedang (32,6%); si_social | Index pilar sosial | Rendah (30,5%).
```

*EN gloss:* Pillar-level contribution to the IBEI — Table 4 shows the level of importance of the three main pillars in determining the final IBEI score. The Environment Pillar is seen to have the highest weight. | Table 4. IBEI 2025 weights by pillar | Pillar code / Pillar name / Contribution to IBEI: si_enviro | Environment pillar index | High (36.9%); si_econ | Economy pillar index | Medium (32.6%); si_social | Social pillar index | Low (30.5%).

*Extractor note:* Percentages are published directly in Tabel 4, not reconstructed. The Tinggi/Sedang/Rendah labels are the document's own tertile simplification (p. 94 [pdf 104]); with only three pillars each tertile contains exactly one pillar, so the labels convey nothing beyond the rank order. The spread across the three pillars is narrow (36.9% to 30.5%).

**`doc_1_juknis-weights_chunk_107`** · p. 94 [pdf 104] · Tabel 5. Bobot subpilar dalam membentuk pilar IBEI — Pembentuk Pilar Ekonomi · type `data` · maturity `not_applicable`

```text
Kontribusi Level Subpilar pada Pilar — Setiap subpilar juga memiliki bobot yang menentukan kontribusi subpilar tersebut pada pilar induknya seperti terjabarkan pada Tabel 5 di bawah ini. | Tabel 5. Bobot subpilar dalam membentuk pilar IBEI | Kode Sub-Pillar / Deskripsi / Tingkat Kontribusi | Pembentuk Pilar Ekonomi: si_econ_s1 | Indeks subpilar perikanan tangkap dan budidaya | Rendah (15,2%); si_econ_s2 | Indeks subpilar industri berbasis kelautan | Tinggi (23,6%); si_econ_s3 | Indeks subpilar perdagangan, transport dan logistik | Sedang (19,3%); si_econ_s4 | Indeks subpilar pariwisata berbasis kelautan | Tinggi (22,1%); si_econ_tech | Indeks subpilar teknologi | Rendah (4,1%); si_econ_gov | Indeks subpilar tatakelola | Sedang (15,8%).
```

*EN gloss:* Sub-pillar-level contribution to the pillar — Each sub-pillar also has a weight determining its contribution to its parent pillar, as set out in Table 5. | Table 5. Sub-pillar weights forming the IBEI pillars | Sub-pillar code / Description / Contribution level | Components of the Economy Pillar: si_econ_s1 | capture fisheries and aquaculture sub-pillar index | Low (15.2%); si_econ_s2 | marine-based industry | High (23.6%); si_econ_s3 | trade, transport and logistics | Medium (19.3%); si_econ_s4 | marine-based tourism | High (22.1%); si_econ_tech | technology | Low (4.1%); si_econ_gov | governance | Medium (15.8%).

*Extractor note:* Percentages published directly; Tinggi/Sedang/Rendah are the document's own within-group tertile simplification (p. 94 [pdf 104]). The six economy sub-pillar weights sum to 100.1%, consistent with rounding to one decimal place.

**`doc_1_juknis-weights_chunk_108`** · p. 94 [pdf 104] · Tabel 5. Bobot subpilar dalam membentuk pilar IBEI — Pembentuk Pilar Lingkungan dan Pilar Sosial · type `data` · maturity `not_applicable`

```text
Tabel 5 (lanjutan) | Pembentuk Pilar Lingkungan: si_enviro_s1 | Indeks subpilar kualitas sumber daya dan konservasi laut | Tinggi (50,0%); si_enviro_s2 | Indeks subpilar energi terbaharukan | Rendah (50,0%). | Pembentuk Pilar Sosial: si_social_s1 | Indeks subpilar kesejahteraan | Sedang (18,2%); si_social_s2 | Indeks subpilar pendidikan | Rendah (13,7%); si_social_s3 | Indeks subpilar kesehatan | Tinggi (68,1%).
```

*EN gloss:* Table 5 (continued) | Components of the Environment Pillar: si_enviro_s1 | marine resource quality and conservation sub-pillar index | High (50.0%); si_enviro_s2 | renewable energy | Low (50.0%). | Components of the Social Pillar: si_social_s1 | welfare | Medium (18.2%); si_social_s2 | education | Low (13.7%); si_social_s3 | health | High (68.1%).

*Extractor note:* Percentages published directly; the tertile labels are the document's own simplification (p. 94 [pdf 104]). Internal inconsistency preserved as printed: si_enviro_s1 and si_enviro_s2 both carry 50.0% yet are labelled Tinggi and Rendah respectively, so the tertile label cannot be treated as informative at this level. Health (68.1%) dominates the social pillar, and via Tabel 4 (30.5%) accounts for roughly 21% of the whole index, matching legend item K in Gambar 11.

### 2.4 Verbatim — Tabel 6

**`doc_1_juknis-weights_chunk_109`** · p. 95 [pdf 105] · Tabel 6. Bobot IBEI 2025 berdasarkan variabel pembentuk subpilar — pengantar · type `methodology` · maturity `not_applicable`

```text
Kontribusi Indikator terhadap Sub-Pilar — Sementara Tabel 6 menunjukkan tingkat kepentingan dari setiap variabel individu di dalam subpilarnya. Ini adalah blueprint terperinci dari keseluruhan metodologi IBEI. | Tabel 6. Bobot IBEI 2025 berdasarkan variabel pembentuk subpilar | Nama Variabel / Deskripsi / Tingkat Kontribusi.
```

*EN gloss:* Indicator contribution to the sub-pillar — Table 6 shows the level of importance of each individual variable within its sub-pillar. This is the detailed blueprint of the entire IBEI methodology. | Table 6. IBEI 2025 weights by variable forming the sub-pillars | Variable name / Description / Contribution level.

*Extractor note:* Tabel 6 lists 44 named variables in total across the 11 sub-pillars, matching the 44-indicator register. Variable codes are not printed in numeric sequence within each block and the numeric suffixes are not contiguous, so codes must be matched to register indicators by name, not by suffix.

**`doc_1_juknis-weights_chunk_110`** · p. 95 [pdf 105] · Tabel 6 — Variabel Pembentuk Sub-Pilar Tatakelola; Perikanan Tangkap dan Budidaya · type `data` · maturity `not_applicable`

```text
Variabel Pembentuk Sub-Pilar Tatakelola: econ_gov_var22 | Jumlah pelabuhan perikanan dengan Tempat Pelelangan Ikan (TPI) (unit) | Sedang (100,0%). | Variabel Pembentuk Sub-Pilar Perikanan Tangkap dan Budidaya: econ_s1_var1 | Peran sektor perikanan dalam Produk Domestik Bruto (PDB) (%) | Rendah (10,6%); econ_s1_var5 | Volume produksi akuakultur (ton) | Tinggi (27,3%); econ_s1_var6 | Volume produksi budidaya tambak (ton) | Sedang (26,3%); econ_s1_var7 | Volume produksi perikanan (ton) | Rendah (6,3%); econ_s1_var8 | Volume produksi budidaya rumput laut (ton) | Tinggi (29,4%).
```

*EN gloss:* Variables forming the Governance sub-pillar: econ_gov_var22 | Number of fishing ports with a Fish Auction Place (TPI) (unit) | Medium (100.0%). | Variables forming the Capture Fisheries and Aquaculture sub-pillar: econ_s1_var1 | Share of the fisheries sector in Gross Domestic Product (GDP) (%) | Low (10.6%); econ_s1_var5 | Aquaculture production volume (tonnes) | High (27.3%); econ_s1_var6 | Brackish-water pond culture production volume (tonnes) | Medium (26.3%); econ_s1_var7 | Fisheries production volume (tonnes) | Low (6.3%); econ_s1_var8 | Seaweed culture production volume (tonnes) | High (29.4%).

*Extractor note:* Percentages published directly; tertile labels are the document's own within-sub-pillar simplification (p. 94 [pdf 104]). The governance sub-pillar has a single variable at 100.0% yet is labelled Sedang, a further sign that the tertile label is not informative for single-variable groups. The five capture-fisheries and aquaculture weights sum to 99.9% (rounding).

**`doc_1_juknis-weights_chunk_111`** · p. 95 [pdf 105] · Tabel 6 — Variabel Pembentuk Sub-Pilar Industri Berbasis Kelautan; Perdagangan, Transport dan Logistik · type `data` · maturity `not_applicable`

```text
Variabel Pembentuk Sub-Pilar Industri Berbasis Kelautan: econ_s2_var10 | Volume produksi garam (ton) | Tinggi (37,0%); econ_s2_var12 | Jumlah perahu/kapal penangkap ikan (unit) | Rendah (29,5%); econ_s2_var9 | Volume ekspor ikan olahan (ton) | Sedang (33,5%). | Variabel Pembentuk Sub-Pilar Perdagangan, Transport dan Logistik: econ_s3_var13 | Volume angkutan laut (ton) | Rendah (1,1%); econ_s3_var14 | Jumlah penumpang angkutan laut (orang) | Sedang (17,8%); econ_s3_var15 | Jumlah penumpang angkutan laut di 25 pelabuhan strategis (orang) | Tinggi (22,8%); econ_s3_var16 | Volume ekspor perikanan (ton) | Sedang (19,8%); econ_s3_var17 | Peran ekspor produk perikanan terhadap total ekspor (%) | Rendah (15,3%); econ_s3_var18 | Volume ekspor perikanan dan akuakultur (ton) | Tinggi (23,2%).
```

*EN gloss:* Variables forming the Marine-Based Industry sub-pillar: econ_s2_var10 | Salt production volume (tonnes) | High (37.0%); econ_s2_var12 | Number of fishing boats/vessels (unit) | Low (29.5%); econ_s2_var9 | Processed fish export volume (tonnes) | Medium (33.5%). | Variables forming the Trade, Transport and Logistics sub-pillar: econ_s3_var13 | Sea freight volume (tonnes) | Low (1.1%); econ_s3_var14 | Number of sea transport passengers (persons) | Medium (17.8%); econ_s3_var15 | Number of sea transport passengers at 25 strategic ports (persons) | High (22.8%); econ_s3_var16 | Fishery export volume (tonnes) | Medium (19.8%); econ_s3_var17 | Share of fishery product exports in total exports (%) | Low (15.3%); econ_s3_var18 | Fishery and aquaculture export volume (tonnes) | High (23.2%).

*Extractor note:* Percentages published directly; tertile labels are the document's own within-sub-pillar simplification (p. 94 [pdf 104]). Marine-based industry weights sum to 100.0%; trade, transport and logistics to 100.0%.

**`doc_1_juknis-weights_chunk_112`** · p. 95 [pdf 105] · Tabel 6 — Variabel Pembentuk Sub-Pilar Pariwisata Berbasis Kelautan; Teknologi · type `data` · maturity `not_applicable`

```text
Variabel Pembentuk Sub-Pilar Pariwisata Berbasis Kelautan: econ_s4_var19 | Jumlah wisata bahari (titik) | Tinggi (50,0%); econ_s4_var20 | Jumlah usaha/perusahaan wisata tirta komersial (unit) | Rendah (50,0%). | Variabel Pembentuk Sub-Pilar Teknologi: econ_tech_var21 | Jumlah kapal perikanan tangkap laut - kapal motor > 30 GT (unit) | Sedang (100,0%).
```

*EN gloss:* Variables forming the Marine-Based Tourism sub-pillar: econ_s4_var19 | Number of marine tourism sites (points) | High (50.0%); econ_s4_var20 | Number of commercial water-tourism businesses/companies (unit) | Low (50.0%). | Variables forming the Technology sub-pillar: econ_tech_var21 | Number of marine capture-fishing vessels - motorised vessels > 30 GT (unit) | Medium (100.0%).

*Extractor note:* Percentages published directly; tertile labels are the document's own simplification (p. 94 [pdf 104]). Both tourism variables carry 50.0% yet are labelled Tinggi and Rendah, and the single technology variable at 100.0% is labelled Sedang: the labels are not usable as weights.

**`doc_1_juknis-weights_chunk_113`** · pp. 95-96 [pdf 105-106] · Tabel 6 — Variabel Pembentuk Sub-Pilar Kualitas Sumber Daya dan Konservasi Laut · type `data` · maturity `not_applicable`

```text
Variabel Pembentuk Sub-Pilar Kualitas Sumber Daya dan Konservasi Laut: enviro_s1_var1 | Kawasan terumbu karang berkualitas baik (%) | Rendah (3,7%) [p. 95, pdf 105]; enviro_s1_var10 | Luas kawasan konservasi perairan (Ha) | Tinggi (22,0%); enviro_s1_var2 | Kawasan lamun berkualitas baik (%) | Sedang (8,6%); enviro_s1_var3 | Kawasan hutan mangrove berkualitas baik (%) | Rendah (0,3%); enviro_s1_var4 | Jumlah desa pesisir dengan tempat pembuangan sampah (desa) | Tinggi (18,7%); enviro_s1_var5 | Jumlah desa pesisir dengan tempat buang air besar (desa) | Tinggi (20,8%); enviro_s1_var6 | Penanaman/rehabilitasi hutan mangrove, rawa, dan lahan gambut (Ha) | Sedang (6,8%); enviro_s1_var8_r | Reversed dr volume sampah yang bocor ke laut | Sedang (14,9%); enviro_s1_var9_r | Reversed dr jumlah sampah yang dibuang di darat | Rendah (4,2%) [p. 96, pdf 106].
```

*EN gloss:* Variables forming the Marine Resource Quality and Conservation sub-pillar: enviro_s1_var1 | Good-quality coral reef area (%) | Low (3.7%); enviro_s1_var10 | Area of aquatic conservation areas (ha) | High (22.0%); enviro_s1_var2 | Good-quality seagrass area (%) | Medium (8.6%); enviro_s1_var3 | Good-quality mangrove forest area (%) | Low (0.3%); enviro_s1_var4 | Number of coastal villages with a waste disposal site (villages) | High (18.7%); enviro_s1_var5 | Number of coastal villages with a defecation facility (villages) | High (20.8%); enviro_s1_var6 | Planting/rehabilitation of mangrove forest, swamp and peatland (ha) | Medium (6.8%); enviro_s1_var8_r | Reversed from the volume of waste leaking into the sea | Medium (14.9%); enviro_s1_var9_r | Reversed from the amount of waste disposed of on land | Low (4.2%).

*Extractor note:* Percentages published directly; tertile labels are the document's own within-sub-pillar simplification (p. 94 [pdf 104]). The block spans the page break: enviro_s1_var1 appears on p. 95 [pdf 105] and the remaining eight rows on p. 96 [pdf 106]. Nine weights sum to 100.0%. Two variables (_r suffix) are described only as reversals of an underlying quantity, with no unit printed. Note the ecosystem-condition variables carry the smallest weights in the sub-pillar (mangrove quality 0.3%, coral quality 3.7%, seagrass quality 8.6%), while village sanitation variables carry 18.7% and 20.8%.

**`doc_1_juknis-weights_chunk_114`** · p. 96 [pdf 106] · Tabel 6 — Variabel Pembentuk Sub-Pilar Energi Terbarukan · type `data` · maturity `not_applicable`

```text
Variabel Pembentuk Sub-Pilar Energi Terbarukan: enviro_s2_var11 | Kapasitas terpasang Pembangkit Listrik Tenaga Surya (PLTS) (MW) | Sedang (24,5%); enviro_s2_var12 | Listrik yang dihasilkan oleh Pembangkit Listrik Tenaga Surya (PLTS) (GWh) | Rendah (24,2%); enviro_s2_var13 | Kapasitas terpasang Pembangkit Listrik Tenaga Air (PLTA) (MW) | Tinggi (26,5%); enviro_s2_var14 | Listrik yang dihasilkan oleh Pembangkit Listrik Tenaga Air (PLTA) (GWh) | Sedang (24,8%).
```

*EN gloss:* Variables forming the Renewable Energy sub-pillar: enviro_s2_var11 | Installed capacity of solar power plants (PLTS) (MW) | Medium (24.5%); enviro_s2_var12 | Electricity generated by solar power plants (PLTS) (GWh) | Low (24.2%); enviro_s2_var13 | Installed capacity of hydropower plants (PLTA) (MW) | High (26.5%); enviro_s2_var14 | Electricity generated by hydropower plants (PLTA) (GWh) | Medium (24.8%).

*Extractor note:* Percentages published directly; tertile labels are the document's own within-sub-pillar simplification (p. 94 [pdf 104]). The four weights sum to 100.0% and span only 24.2% to 26.5%, so the High/Medium/Low labels here separate near-identical weights. As printed, this sub-pillar contains no marine renewable-energy variable: both technologies named are solar and hydro.

**`doc_1_juknis-weights_chunk_115`** · p. 96 [pdf 106] · Tabel 6 — Variabel Pembentuk Sub-Pilar Kesejahteraan · type `data` · maturity `not_applicable`

```text
Variabel Pembentuk Sub-Pilar Kesejahteraan: social_s1_var1 | Jumlah nelayan dan petani ikan (orang) | Sedang (8,7%); social_s1_var10 | Reverse dari proporsi penduduk sektor perikanan yang menjadi peserta PKH | Tinggi (82,6%); social_s1_var2 | Jumlah perempuan di sektor perikanan (orang) | Rendah (8,7%).
```

*EN gloss:* Variables forming the Welfare sub-pillar: social_s1_var1 | Number of fishers and fish farmers (persons) | Medium (8.7%); social_s1_var10 | Reverse of the proportion of the fisheries-sector population enrolled in the PKH conditional cash transfer programme | High (82.6%); social_s1_var2 | Number of women in the fisheries sector (persons) | Low (8.7%).

*Extractor note:* Percentages published directly; tertile labels are the document's own within-sub-pillar simplification (p. 94 [pdf 104]). The three weights sum to 100.0%. Two variables carry identical 8.7% weights yet are labelled Sedang and Rendah, so the tie is broken by the label alone with no stated rule. A single variable (reversed PKH enrolment) carries 82.6% of the welfare sub-pillar.

**`doc_1_juknis-weights_chunk_116`** · p. 96 [pdf 106] · Tabel 6 — Variabel Pembentuk Sub-Pilar Pendidikan · type `data` · maturity `not_applicable`

```text
Variabel Pembentuk Sub-Pilar Pendidikan: social_s2_var4 | Jumlah lulusan sekolah perikanan (orang) | Rendah (14,8%); social_s2_var5 | Jumlah peserta pelatihan perikanan (orang) | Sedang (17,3%); social_s2_var6 | Jumlah SMK kemaritiman | Tinggi (22,4%); social_s2_var7 | Proporsi penduduk sektor perikanan dengan jenjang pendidikan terakhir SMA (%) | Tinggi (21,3%); social_s2_var8 | Proporsi penduduk sektor perikanan yang memiliki ijazah terakhir SMA (%) | Sedang (21,2%); social_s2_var9 | Reverse dari proporsi penduduk sektor perikanan yang menjadi peserta PIP | Rendah (3,1%).
```

*EN gloss:* Variables forming the Education sub-pillar: social_s2_var4 | Number of fisheries-school graduates (persons) | Low (14.8%); social_s2_var5 | Number of fisheries-training participants (persons) | Medium (17.3%); social_s2_var6 | Number of maritime vocational secondary schools (SMK) | High (22.4%); social_s2_var7 | Proportion of the fisheries-sector population whose highest level of education is senior secondary (SMA) (%) | High (21.3%); social_s2_var8 | Proportion of the fisheries-sector population holding a senior-secondary (SMA) certificate (%) | Medium (21.2%); social_s2_var9 | Reverse of the proportion of the fisheries-sector population enrolled in the PIP education assistance programme | Low (3.1%).

*Extractor note:* Percentages published directly; tertile labels are the document's own within-sub-pillar simplification (p. 94 [pdf 104]). The six weights sum to 100.1% (rounding). var7 (21.3%, Tinggi) and var8 (21.2%, Sedang) are near-identical in weight and near-duplicative in definition, both measuring senior-secondary attainment in the fisheries-sector population; the document does not distinguish them further in this table. No producing agency is named for any variable in Tabel 6.

**`doc_1_juknis-weights_chunk_117`** · p. 96 [pdf 106] · Tabel 6 — Variabel Pembentuk Sub-Pilar Kesehatan · type `data` · maturity `not_applicable`

```text
Variabel Pembentuk Sub-Pilar Kesehatan: social_s3_var11 | Rata-rata konsumsi kalori ikan per kapita (kkal) | Tinggi (34,6%); social_s3_var12 | Rata-rata konsumsi protein ikan per kapita (kkal) | Sedang (33,8%); social_s3_var13 | Proporsi penduduk sektor perikanan yang memiliki jaminan kesehatan (%) | Sedang (30,0%); social_s3_var14 | Reversed dari proporsi jumlah penduduk miskin di sektor perikanan (%) | Rendah (1,6%).
```

*EN gloss:* Variables forming the Health sub-pillar: social_s3_var11 | Average per-capita fish calorie consumption (kcal) | High (34.6%); social_s3_var12 | Average per-capita fish protein consumption (kcal) | Medium (33.8%); social_s3_var13 | Proportion of the fisheries-sector population with health insurance (%) | Medium (30.0%); social_s3_var14 | Reversed from the proportion of the poor population in the fisheries sector (%) | Low (1.6%).

*Extractor note:* Percentages published directly; tertile labels are the document's own within-sub-pillar simplification (p. 94 [pdf 104]). The four weights sum to 100.0%. Preserved as printed: social_s3_var12 is described as protein consumption yet carries the calorie unit (kkal), a unit inconsistency in the source that is not resolved here. Because health carries 68.1% of the social pillar (Tabel 5) and the social pillar 30.5% of the index (Tabel 4), these four variables together account for roughly a fifth of the whole IBEI.

---

## 3. Normalisation and aggregation, as actually documented

Three independent loci in the corpus document the same procedure, and they agree:

1. **Juknis Pedoman IBEI, 2.5 Metodologi Perhitungan**, printed pp. 63-66 [pdf 73-76].
2. **IBEI Report 2024 (Dec 2025 revision), 3.1 Metodologi Perhitungan**, printed pp. 29-33
   [pdf 41-45], including the flow figure Gambar 3.1.1 and a limitations section.
3. **BPS SIRUSA indicator metadata**, `indikator/105371` and `105709`-`105718`, retrieved
   2026-08-13 — the identical *Metode Perhitungan* sentence on all nine sub-pillar pages.

**The documented procedure.** Indicators are standardised, then aggregated by PCA in three
stages: indicators → sub-pillar (PC1 loadings as weights), sub-pillar scores re-standardised →
pillar, pillar scores re-standardised → IBEI. The standardisation is stated as **Z-score**: the
symbol-definition list beneath the sub-pillar formula reads `I ijk std = Nilai standar (Z-score)
indikator j dalam subpilar k untuk provinsi i` in both the Juknis (p. 64 [pdf 74]) and the
Report (p. 31 [pdf 43]). The resulting score is a principal component score: unbounded, capable
of being negative, with a cross-province mean near zero, so it is purely relative between
provinces. The Report's Gambar 3.1.1 adds one step the prose does not: after the first
sub-pillar PCA, an indicator showing a negative relation is reversed or dropped and the
sub-pillar PCA is re-run — which is why Tabel 6 carries `_r` reversed variables.

**This voids the min-max normalisation argument in finding 03 round 1.** That round argued from
min-max normalisation of IBEI inputs. The IBEI does not use min-max at the input stage. It uses
Z-score standardisation inside a three-stage PCA, and the weights are data-driven PC1 loadings
rather than fixed normative weights. Anything in round 1 resting on min-max — bounded 0-100
indicator scales, additive comparability of normalised inputs, a substitution argument that
depends on an indicator's floor and ceiling — is void and must not be carried into the
manuscript. Two further consequences follow from Z-score-plus-PCA and should be stated wherever
substitution is discussed: a weight is a property of the inter-provincial covariance structure
in a given year, not a policy judgement, so **swapping the data source for one indicator changes
the weights of the others**; and the Report itself notes the weights are cross-sectional, so
weights fitted on 2024 data may not hold in later years (p. 34 [pdf 46]).

**A caution on the printed formulas.** The four formula bodies (sub-pillar, pillar, index, and
the Report's equivalents) are *not* transcribed anywhere in this corpus: the embedded maths font
renders as corrupted glyphs under `pdftotext -layout`. Only the symbol-definition lists beneath
them are legible, and those are what is quoted. The functional form is a weighted sum, inferable
with high confidence from the variable lists, but no symbol string has been read. Do not quote a
formula from the Juknis or the Report. The SIRUSA metadata does publish LaTeX formula strings
(`chunk_016`, and the sub-pillar pages), and those may be quoted — noting that the published
IBEI string is unbalanced, missing a closing parenthesis.

**One unresolved conflict on the final scale, inside a single printed page.** Report p. 33
[pdf 45] says both that the final score is rescaled to 1-100 by `Standardize(index) =
(index / Max(index)) * 100` against a theoretical maximum from base-year 2023, and that the
score is unbounded, can be negative, and averages near zero. Both cannot hold. The document does
not state which scale the published figures are on. Preserved as a conflict; it bears directly
on whether reported IBEI values are comparable across editions.

**Rinaldi et al. does not support the three-stage PCA reading, and must not be cited for it.**
The read plan expected Rinaldi to confirm three-stage PCA with Z-score standardisation. It does
not. Rinaldi et al. build *their own* Sumatera BEI by an HDI-style procedure — min-max
normalisation, arithmetic mean within dimension, geometric mean across three dimensions — and
run a single PCA pass **after** the index is formed, purely to avoid multicollinearity in a
Bayesian GRDP regression. The only multi-stage procedure in that paper is the Laplace
approximation inside INLA. The three-stage-PCA finding rests on the Juknis, the Report and the
SIRUSA metadata; Rinaldi is a separate construction that borrows only the three-pillar framing.
Its min-max is *its own*, and quoting it as evidence about IBEI normalisation would reintroduce
exactly the error round 1 made.

### 3.1 Verbatim — Juknis 2.5, pp. 63-66 [pdf 73-76]

**`doc_1_juknis-method_chunk_102`** · p. 63 [pdf 73] · 2.5 Metodologi Perhitungan · type `methodology` · maturity `a`

```text
Pendekatan yang digunakan adalah Analisis Komponen Utama Bertahap (Multi-stage Principal Component Analysis - PCA). Metode ini dipilih karena keunggulannya dalam menentukan bobot setiap komponen secara objektif berdasarkan struktur data itu sendiri, sehingga menghindari subjektivitas dalam pembobotan manual. Berbeda dengan metode pembobotan setara (equal weighting) yang mengasumsikan semua indikator memiliki kontribusi yang sama, atau pembobotan ahli (expert weighting) yang rentan terhadap bias individu, PCA secara statistik mengidentifikasi pola korelasi dan varians dalam data.
```

*EN gloss:* The approach used is Multi-stage Principal Component Analysis (PCA). This method was chosen for its advantage in determining each component's weight objectively on the basis of the data structure itself, thereby avoiding the subjectivity of manual weighting. Unlike equal weighting, which assumes all indicators contribute equally, or expert weighting, which is vulnerable to individual bias, PCA statistically identifies patterns of correlation and variance in the data.

**`doc_1_juknis-method_chunk_104`** · p. 63 [pdf 73] · 2.5.1 Prinsip Dasar dan Tahapan Perhitungan · type `methodology` · maturity `a`

```text
Proses perhitungan IBEI dilakukan melalui serangkaian tahapan yang terstruktur secara hirarkis, mengikuti kerangka konseptual indeks itu sendiri. Pendekatan hirarkis ini tidak hanya memudahkan proses perhitungan, tetapi juga memungkinkan analisis yang lebih mendalam pada setiap tingkatan—sub-pilar dan pilar—sehingga pembuat kebijakan dapat mengidentifikasi kekuatan dan kelemahan spesifik suatu wilayah dengan lebih presisi.
```

*EN gloss:* The IBEI calculation process is carried out through a series of hierarchically structured stages, following the conceptual framework of the index itself. This hierarchical approach not only eases the calculation process but also permits deeper analysis at each level — sub-pillar and pillar — so that policymakers can identify a region's specific strengths and weaknesses with greater precision.

**`doc_1_juknis-method_chunk_105`** · p. 63 [pdf 73] · 2.5.1 Prinsip Dasar dan Tahapan Perhitungan — Alur perhitungan (figure) · type `methodology` · maturity `a`

```text
1 Agregasi Tingkat Sub-Pilar: Menggabungkan indikator-indikator yang telah distandardisasi menjadi skor sub-pilar menggunakan PCA tahap pertama. 2 Agregasi Tingkat Pilar: Menggabungkan skor-skor sub-pilar menjadi skor pilar menggunakan PCA tahap kedua. 3 Agregasi Indeks Komposit IBEI: Menggabungkan ketiga skor pilar (Ekonomi, Lingkungan, Sosial) menjadi skor IBEI akhir menggunakan PCA tahap final. [...] Penggunaan PCA yang konsisten di setiap tahapan memastikan bahwa prinsip objektivitas dan pembobotan berbasis data diterapkan secara menyeluruh, dari level mikro (indikator) hingga makro (indeks komposit).
```

*EN gloss:* 1 Sub-Pillar Level Aggregation: combining standardised indicators into a sub-pillar score using first-stage PCA. 2 Pillar Level Aggregation: combining sub-pillar scores into a pillar score using second-stage PCA. 3 IBEI Composite Index Aggregation: combining the three pillar scores (Economy, Environment, Social) into the final IBEI score using the final-stage PCA. [...] The consistent use of PCA at every stage ensures that the principles of objectivity and data-based weighting are applied throughout, from the micro level (indicator) to the macro level (composite index).

**`doc_1_juknis-method_chunk_106`** · p. 64 [pdf 74] · 2.5.1.1 Tahap 1: Agregasi Tingkat Sub-Pilar (PCA Tahap Pertama) · type `methodology` · maturity `a`

```text
Setelah semua indikator distandardisasi, proses agregasi dimulai pada tingkat sub-pilar. Standardisasi, adalah langkah pra-pemrosesan yang esensial. Langkah ini mengubah semua data indikator ke dalam skala yang kompatibel, sehingga memastikan bahwa indikator dengan satuan atau rentang nilai yang besar tidak secara tidak adil mendominasi proses analisis. Untuk setiap subpilar, skor komposit dihitung dengan menerapkan PCA pada set indikator standar yang relevan. PCA akan mengekstrak komponen utama pertama (PC1), yaitu kombinasi linear dari indikator-indikator yang mampu menjelaskan varians terbesar dalam data. PC1 dapat diinterpretasikan sebagai dimensi laten atau faktor mendasar yang paling merepresentasikan kinerja sub-pilar tersebut.
```

*EN gloss:* Once all indicators have been standardised, aggregation begins at the sub-pillar level. Standardisation is an essential pre-processing step. It converts all indicator data onto a compatible scale, ensuring that indicators with large units or value ranges do not unfairly dominate the analysis. For each sub-pillar, the composite score is computed by applying PCA to the relevant set of standardised indicators. PCA extracts the first principal component (PC1), the linear combination of indicators explaining the greatest variance in the data. PC1 can be interpreted as the latent dimension or underlying factor that best represents that sub-pillar's performance.

**`doc_1_juknis-method_chunk_107`** · p. 64 [pdf 74] · 2.5.1.1 Tahap 1: Agregasi Tingkat Sub-Pilar (PCA Tahap Pertama) · type `definition` · maturity `a`

```text
Bobot untuk setiap indikator ditentukan oleh loading factor (koefisien eigenvector) dari PC1. Loading factor ini menunjukkan seberapa kuat korelasi antara setiap indikator asli dengan komponen utama pertama, yang sekaligus berfungsi sebagai bobotnya dalam pembentukan skor sub-pilar.
```

*EN gloss:* The weight for each indicator is determined by the loading factor (eigenvector coefficient) of PC1. This loading factor shows how strongly each original indicator correlates with the first principal component, and simultaneously serves as its weight in forming the sub-pillar score.

**`doc_1_juknis-method_chunk_108`** · p. 64 [pdf 74] · 2.5.1.1 Tahap 1 — Formula skor subpilar · type `data` · maturity `a` · **RECONSTRUCTED**

```text
Skor untuk setiap subpilar dihitung dengan formula: [rumus tercetak; glif matematis tidak terbaca pada lapisan teks PDF] di mana: Sik = Skor subpilar k untuk provinsi i; Wkj = Bobot (loading factor dari PC1) untuk indikator j dalam subpilar k; I ijk std = Nilai standar (Z-score) indikator j dalam subpilar k untuk provinsi i; nk = Jumlah indikator dalam subpilar k
```

*EN gloss:* The score for each sub-pillar is computed with the formula [printed formula; the mathematical glyphs are not legible in the PDF text layer], where: Sik = sub-pillar k score for province i; Wkj = weight (PC1 loading factor) for indicator j within sub-pillar k; I ijk std = the standardised value (Z-score) of indicator j within sub-pillar k for province i; nk = the number of indicators in sub-pillar k. The variable definitions establish that standardisation is by Z-score, not min-max normalisation.

*Extractor note:* The formula's symbolic body is unrecoverable from the pdftotext text layer (glyph corruption, e.g. '𝑆𝑆!" = # %𝑤𝑤"$ ⋅ 𝐼𝐼!$" )'). Only the variable-definition list beneath it is verbatim-legible, and it is quoted here. The functional form — a weighted sum over j=1..nk of Wkj times the Z-score of indicator j — is inferable from the legible variable list with high confidence, but the printed expression itself has NOT been read and must not be quoted as such. Confidence: high on Z-score standardisation and on the identity of each variable; medium-high on the exact summation form; no confidence in any transcribed symbol string.

**`doc_1_juknis-method_chunk_109`** · p. 64 [pdf 74] · 2.5.1.2 Tahap 2: Agregasi Tingkat Pilar (PCA Tahap Kedua) · type `methodology` · maturity `a`

```text
Langkah selanjutnya adalah menggabungkan skor-skor sub-pilar yang telah diperoleh menjadi skor pilar. Proses ini kembali menggunakan PCA, namun kali ini inputnya adalah skor sub-pilar yang juga telah distandardisasi terlebih dahulu. Sama seperti pada tahap pertama, standardisasi skor sub-pilar diperlukan untuk menormalkan skala sebelum diagregasi lebih lanjut, memastikan bahwa setiap sub-pilar memiliki kesempatan yang setara untuk berkontribusi pada skor pilar. Dengan menerapkan logika yang sama, PCA tahap kedua ini akan mengidentifikasi kombinasi linear dari skor-skor sub-pilar yang paling baik dalam menjelaskan variasi kinerja di tingkat pilar.
```

*EN gloss:* The next step combines the obtained sub-pillar scores into a pillar score. This process again uses PCA, but the inputs are sub-pillar scores that have themselves first been standardised. As in the first stage, standardisation of sub-pillar scores is required to normalise the scale before further aggregation, ensuring each sub-pillar has an equal opportunity to contribute to the pillar score. Applying the same logic, this second-stage PCA identifies the linear combination of sub-pillar scores that best explains variation in performance at the pillar level.

**`doc_1_juknis-method_chunk_110`** · p. 65 [pdf 75] · 2.5.1.2 Tahap 2 — Formula skor pilar · type `data` · maturity `a` · **RECONSTRUCTED**

```text
Skor untuk setiap pilar dihitung dengan formula: [rumus tercetak; glif matematis tidak terbaca pada lapisan teks PDF] di mana: Pip = Skor pilar p (Ekonomi, Lingkungan, atau Sosial) untuk provinsi i; W pk = Bobot (loading factor dari PC1) untuk subpilar k dalam pilar p; Sikp std = Skor standar dari subpilar k dalam pilar p untuk provinsi i; mp = Jumlah subpilar dalam pilar p
```

*EN gloss:* The score for each pillar is computed with the formula [printed formula; mathematical glyphs not legible in the PDF text layer], where: Pip = pillar p score (Economy, Environment or Social) for province i; Wpk = weight (PC1 loading factor) for sub-pillar k within pillar p; Sikp std = the standardised score of sub-pillar k within pillar p for province i; mp = the number of sub-pillars in pillar p.

*Extractor note:* As with the stage-1 formula, the symbolic expression is glyph-corrupted in the text layer ('𝑃𝑃!* = # %𝑤𝑤*" ⋅ 𝑆𝑆!"* )') and is not transcribed. Only the variable-definition list is quoted verbatim. Confidence: high on variable identities; medium-high on the weighted-sum form over k=1..mp; no confidence in any symbol string.

**`doc_1_juknis-method_chunk_111`** · p. 65 [pdf 75] · 2.5.1.3 Tahap 3: Agregasi Indeks Komposit IBEI (PCA Tahap Akhir) · type `methodology` · maturity `a`

```text
Pada tahap final, ketiga skor pilar tersebut digabungkan untuk membentuk skor IBEI akhir. Tahap ini merupakan puncak dari proses agregasi, di mana kinerja multidimensional dari pilar Ekonomi, Lingkungan, dan Sosial diintegrasikan menjadi satu ukuran tunggal yang holistik. PCA diterapkan untuk terakhir kalinya pada tiga skor pilar (yang juga telah distandardisasi).
```

*EN gloss:* At the final stage, the three pillar scores are combined to form the final IBEI score. This stage is the culmination of the aggregation process, in which the multidimensional performance of the Economy, Environment and Social pillars is integrated into a single holistic measure. PCA is applied for the last time to the three pillar scores (which have also been standardised).

**`doc_1_juknis-method_chunk_112`** · p. 65 [pdf 75] · 2.5.1.3 Tahap 3 — Formula skor IBEI akhir · type `data` · maturity `a` · **RECONSTRUCTED**

```text
Skor IBEI akhir dihitung sebagai berikut: [rumus tercetak; glif matematis tidak terbaca pada lapisan teks PDF] di mana: IBEI i = Skor Indeks Ekonomi Biru Indonesia untuk provinsi i; Pi,Ekonomi std , Pi,Lingkungan std , Pi,Sosial std = Skor standar dari masing-masing pilar; wE , wL , wS = Bobot (loading factor dari PC1) untuk masing-masing pilar
```

*EN gloss:* The final IBEI score is computed as follows: [printed formula; mathematical glyphs not legible in the PDF text layer], where: IBEI i = the Indonesia Blue Economy Index score for province i; Pi,Economy std, Pi,Environment std, Pi,Social std = the standardised score of each pillar; wE, wL, wS = the weight (PC1 loading factor) for each pillar.

*Extractor note:* The printed expression is glyph-corrupted in the text layer ('𝐼𝐼𝐼𝐼𝐼𝐼𝐼𝐼! = %𝑤𝑤, ⋅ 𝑃𝑃!,...') and is not transcribed. The variable-definition list is quoted verbatim. The legible fragments show three additive terms, one per pillar, each a weight times a standardised pillar score. Confidence: high on the three-term additive structure and on variable identities; no confidence in any symbol string. The wE/wL/wS values themselves are not given here — see slice juknis-weights (Tabel 4).

**`doc_1_juknis-method_chunk_114`** · p. 66 [pdf 76] · 2.5.2 Interpretasi Skor Akhir IBEI · type `definition` · maturity `a`

```text
Skor IBEI yang dihasilkan dari metodologi ini adalah skor komponen utama (principal component score). Skor ini merupakan ukuran relatif yang tidak memiliki batas atas atau bawah yang pasti dan dapat bernilai positif maupun negatif. Secara teknis, rata-rata dari skor IBEI di seluruh provinsi akan mendekati nol. Oleh karena itu, skor positif mengindikasikan kinerja di atas rata-rata nasional, sementara skor negatif mengindikasikan kinerja di bawah rata-rata. • Nilai yang lebih tinggi menunjukkan kinerja ekonomi biru yang secara keseluruhan lebih baik dibandingkan provinsi lain. • Nilai yang lebih rendah (termasuk nilai negatif) menunjukkan kinerja yang relatif lebih tertinggal.
```

*EN gloss:* The IBEI score produced by this methodology is a principal component score. It is a relative measure with no definite upper or lower bound and may be positive or negative. Technically, the mean IBEI score across all provinces will approach zero. A positive score therefore indicates performance above the national average, while a negative score indicates below-average performance. • A higher value indicates overall better blue economy performance relative to other provinces. • A lower value (including a negative value) indicates relatively lagging performance.

### 3.2 Verbatim — Report 3.1, pp. 29-35 [pdf 41-47]

**`doc_2_report-method_chunk_003`** · p. 29 [pdf 41] · 3.1. Metodologi Perhitungan > struktur hirarkis tiga tingkatan · type `methodology` · maturity `a`

```text
Proses perhitungan IBEI dilakukan melalui serangkaian tahapan yang terstruktur dan hirarkis, mengikuti kerangka konseptual indeks itu sendiri. Pendekatan hirarkis ini tidak hanya memudahkan proses perhitungan, tetapi juga memungkinkan analisis yang lebih mendalam pada setiap tingkatan—subpilar dan pilar—sehingga pembuat kebijakan dapat mengidentifikasi kekuatan dan kelemahan spesifik suatu wilayah dengan lebih presisi. IBEI menerapkan metodologi PCA secara bertahap dalam tiga tingkatan untuk membangun indeks dari level paling spesifik hingga level komposit. Alur hirarkis ini memungkinkan analisis yang lebih mendalam di setiap tingkatan.
```

*EN gloss:* The IBEI calculation proceeds through a structured, hierarchical series of stages following the conceptual framework of the index itself. This hierarchical approach not only eases the calculation but also permits deeper analysis at each level — sub-pillar and pillar — so that policymakers can identify a region's specific strengths and weaknesses with more precision. The IBEI applies the PCA methodology in stages across three levels, building the index from the most specific level up to the composite. This hierarchical flow permits deeper analysis at each level.

**`doc_2_report-method_chunk_004`** · p. 29 [pdf 41] · 3.1. Metodologi Perhitungan > PCA Tahap Pertama (Level Subpilar) · type `methodology` · maturity `a`

```text
PCA Tahap Pertama (Level Subpilar). PCA diterapkan pada setiap kelompok indikator yang telah distandardisasi di dalam masing-masing subpilar. Dari proses ini, dihasilkan skor untuk setiap subpilar. Bobot untuk setiap indikator dalam pembentukan skor subpilar ditentukan secara objektif oleh loading factor dari komponen utama pertama (PC1) yang diekstrak.
```

*EN gloss:* First-stage PCA (sub-pillar level). PCA is applied to each group of standardised indicators within each sub-pillar. This produces a score for every sub-pillar. The weight of each indicator in forming the sub-pillar score is determined objectively by the loading factor of the first principal component (PC1) extracted.

**`doc_2_report-method_chunk_005`** · p. 29 [pdf 41] · 3.1. Metodologi Perhitungan > PCA Tahap Kedua (Level Pilar) · type `methodology` · maturity `a`

```text
PCA Tahap Kedua (Level Pilar). Skor subpilar yang telah diperoleh kemudian distandarisasi kembali dan diagregasi menggunakan PCA untuk membentuk skor pilar (Ekonomi, Lingkungan, dan Sosial). Sama seperti tahap sebelumnya, bobot setiap subpilar ditentukan oleh loading factor yang dihasilkan dari analisis ini.
```

*EN gloss:* Second-stage PCA (pillar level). The sub-pillar scores obtained are then re-standardised and aggregated using PCA to form the pillar scores (Economy, Environment and Social). As in the previous stage, the weight of each sub-pillar is determined by the loading factor produced by this analysis.

**`doc_2_report-method_chunk_006`** · p. 30 [pdf 42] · 3.1. Metodologi Perhitungan > PCA Tahap Akhir (Level Indeks Komposit) · type `methodology` · maturity `a`

```text
PCA Tahap Akhir (Level Indeks Komposit). Pada tahap final, ketiga skor pilar yang telah distandardisasi digabungkan sekali lagi menggunakan PCA. Proses ini menghasilkan skor IBEI akhir untuk setiap provinsi, dengan bobot untuk masing-masing pilar (Ekonomi, Lingkungan, Sosial) ditentukan oleh kontribusi relatifnya terhadap variasi total kinerja ekonomi biru antarprovinsi. Penggunaan PCA yang konsisten di setiap tahapan memastikan bahwa prinsip objektivitas dan pembobotan berbasis data diterapkan secara menyeluruh, dari level mikro (indikator) hingga makro (indeks komposit).
```

*EN gloss:* Final-stage PCA (composite index level). At the final stage the three standardised pillar scores are combined once more using PCA. This produces the final IBEI score for each province, with the weight of each pillar (Economy, Environment, Social) determined by its relative contribution to the total variation in blue economy performance across provinces. Consistent use of PCA at every stage ensures that the principles of objectivity and data-based weighting are applied throughout, from the micro level (indicator) to the macro level (composite index).

**`doc_2_report-method_chunk_007`** · p. 30 [pdf 42] · 3.1. Metodologi Perhitungan > Gambar 3.1.1. Alur perhitungan IBEI dengan metode Multi-stage PCA · type `methodology` · maturity `a` · **RECONSTRUCTED**

```text
Gambar 3.1.1. Alur perhitungan IBEI dengan metode Multi-stage PCA. [Kotak alur, verbatim:] "Standarisasi nilai indikator" — "Run - PCA Subpilar" — "Reversi nilai indikator (atau drop indikator) jika ditemukan relasi negatif" — "Run kembali - PCA Subpilar" — "Standarisasi indeks subpilar" — "Run - PCA Pilar" — "Standarisasi indeks pilar" — "Run - PCA IBEI" — "Standarisasi indeks IBEI". Sumber: Tim Penyusun IBEI, 2024.
```

*EN gloss:* Figure 3.1.1. Flow of IBEI calculation using the Multi-stage PCA method. Flow boxes, verbatim: "Standardise indicator values" — "Run sub-pillar PCA" — "Reverse indicator values (or drop the indicator) if a negative relation is found" — "Re-run sub-pillar PCA" — "Standardise sub-pillar index" — "Run pillar PCA" — "Standardise pillar index" — "Run IBEI PCA" — "Standardise IBEI index". Source: IBEI Drafting Team, 2024.

*Extractor note:* The figure is a boxed flow diagram; pdftotext -layout returns the box labels but not the arrow topology. Box labels are verbatim; the reading order presented here follows the figure's left-to-right, top-to-bottom column layout and is the extractor's ordering, not printed sequence numbering. Confidence: medium on ordering, high on the label set. No step was added or invented.

**`doc_2_report-method_chunk_008`** · p. 31 [pdf 43] · 3.1. Metodologi Perhitungan > Tahap 1: Agregasi Tingkat Subpilar (PCA Tahap Pertama) · type `methodology` · maturity `a`

```text
Tahap 1: Agregasi Tingkat Subpilar (PCA Tahap Pertama). Setelah semua indikator distandardisasi, proses agregasi dimulai pada tingkat subpilar. Standardisasi, adalah langkah pra-pemrosesan yang penting. Langkah ini mengubah semua data indikator ke dalam skala yang kompatibel, sehingga memastikan bahwa indikator dengan satuan atau rentang nilai yang besar tidak secara timpang mendominasi proses analisis. Untuk setiap subpilar, skor komposit dihitung dengan menerapkan PCA pada set indikator standar yang relevan. PCA akan mengekstrak komponen utama pertama (PC1), yaitu kombinasi linear dari indikator-indikator yang mampu menjelaskan varians terbesar dalam data. PC1 dapat diinterpretasikan sebagai dimensi laten atau faktor mendasar yang paling merepresentasikan kinerja subpilar tersebut. Bobot untuk setiap indikator ditentukan oleh loading factor (koefisien eigenvector) dari PC1. Loading factor ini menunjukkan seberapa kuat korelasi antara setiap indikator asli dengan komponen utama pertama, yang sekaligus berfungsi sebagai bobotnya dalam pembentukan skor subpilar.
```

*EN gloss:* Stage 1: sub-pillar level aggregation (first-stage PCA). Once all indicators are standardised, aggregation begins at the sub-pillar level. Standardisation is an important pre-processing step: it converts all indicator data onto a compatible scale, ensuring that indicators with large units or value ranges do not disproportionately dominate the analysis. For each sub-pillar a composite score is computed by applying PCA to the relevant set of standardised indicators. PCA extracts the first principal component (PC1), the linear combination of indicators explaining the largest variance in the data. PC1 can be interpreted as the latent dimension or underlying factor that best represents that sub-pillar's performance. The weight of each indicator is determined by the loading factor (eigenvector coefficient) of PC1. This loading factor shows how strongly each original indicator correlates with the first principal component, and simultaneously serves as its weight in forming the sub-pillar score.

**`doc_2_report-method_chunk_009`** · p. 31 [pdf 43] · 3.1. Metodologi Perhitungan > Tahap 1 > formula skor subpilar · type `definition` · maturity `a`

```text
Skor untuk setiap subpilar dihitung dengan formula: [formula matematis, lapisan glif rusak pada ekstraksi teks] di mana: Sik = Skor subpilar k untuk provinsi i; Wkj = Bobot (loading factor dari PC1) untuk indikator j dalam subpilar k; I ijk std = Nilai standar (Z-score) indikator j dalam subpilar k untuk provinsi i; nk = Jumlah indikator dalam subpilar k.
```

*EN gloss:* The score for each sub-pillar is computed with the formula [mathematical formula; the glyph layer is corrupted in text extraction] where: Sik = score of sub-pillar k for province i; Wkj = weight (PC1 loading factor) for indicator j in sub-pillar k; I ijk std = standardised value (Z-score) of indicator j in sub-pillar k for province i; nk = number of indicators in sub-pillar k. The symbol definitions confirm Z-score standardisation as the stated normalisation, not min-max.

*Extractor note:* The equation body itself is NOT transcribed: the embedded math font renders as corrupted glyphs under pdftotext -layout (e.g. "𝑆𝑆!\" = # %𝑤𝑤\"$ ⋅ 𝐼𝐼!$\" )"). Only the printed symbol-definition list is quoted, which is clean text. Per the no-fabricated-specificity rule the formula is reported as unreadable rather than reconstructed; recovering it requires reading the rendered page image.

**`doc_2_report-method_chunk_010`** · pp. 31-32 [pdf 43-44] · 3.1. Metodologi Perhitungan > Tahap 2: Agregasi Tingkat Pilar (PCA Tahap Kedua) · type `methodology` · maturity `a`

```text
Tahap 2: Agregasi Tingkat Pilar (PCA Tahap Kedua). Langkah selanjutnya adalah menggabungkan skor-skor subpilar yang telah diperoleh menjadi skor pilar. Proses ini kembali menggunakan PCA, namun kali ini inputnya adalah skor subpilar yang juga telah distandardisasi terlebih dahulu. Sama seperti pada tahap pertama, standardisasi skor subpilar diperlukan untuk menormalkan skala sebelum diagregasi lebih lanjut, memastikan bahwa setiap subpilar memiliki kesempatan yang setara untuk berkontribusi pada skor pilar. Dengan menerapkan logika yang sama, PCA tahap kedua ini akan mengidentifikasi kombinasi linear dari skor-skor subpilar yang paling baik dalam menjelaskan variasi kinerja di tingkat pilar. [Formula skor pilar, p. 32:] di mana: Pip = Skor pilar p (Ekonomi, Lingkungan, atau Sosial) untuk provinsi i; Wpk = Bobot (loading factor dari PC1) untuk subpilar k dalam pilar p; Sikp std = Skor standar dari subpilar k dalam pilar p untuk provinsi i; mp = Jumlah subpilar dalam pilar p.
```

*EN gloss:* Stage 2: pillar level aggregation (second-stage PCA). The next step combines the sub-pillar scores obtained into pillar scores. This again uses PCA, but here the inputs are sub-pillar scores that have themselves first been standardised. As at the first stage, standardisation of sub-pillar scores is needed to normalise scale before further aggregation, ensuring each sub-pillar has an equal opportunity to contribute to the pillar score. Applying the same logic, this second-stage PCA identifies the linear combination of sub-pillar scores that best explains performance variation at the pillar level. Pillar score formula (p. 32), where: Pip = score of pillar p (Economy, Environment or Social) for province i; Wpk = weight (PC1 loading factor) for sub-pillar k in pillar p; Sikp std = standardised score of sub-pillar k in pillar p for province i; mp = number of sub-pillars in pillar p.

*Extractor note:* Equation body not transcribed: math glyph layer corrupted under pdftotext -layout. Only the printed prose and symbol-definition list are quoted. The definition list appears on printed p. 32 [pdf 44]; the prose on printed p. 31 [pdf 43].

**`doc_2_report-method_chunk_011`** · p. 32 [pdf 44] · 3.1. Metodologi Perhitungan > Tahap 3: Agregasi Indeks Komposit IBEI (PCA Tahap Akhir) · type `methodology` · maturity `a`

```text
Tahap 3: Agregasi Indeks Komposit IBEI (PCA Tahap Akhir). Pada tahap final, ketiga skor pilar tersebut digabungkan untuk membentuk skor IBEI akhir. Tahap ini merupakan puncak dari proses agregasi, di mana kinerja multidimensional dari pilar ekonomi, lingkungan, dan sosial diintegrasikan menjadi satu ukuran tunggal yang holistik. PCA diterapkan untuk terakhir kalinya pada tiga skor pilar (yang juga telah distandardisasi). [Formula skor IBEI akhir:] di mana: IBEI i = Skor Indeks Ekonomi Biru Indonesia untuk provinsi i; Pi,Ekonomi std, Pi,Lingkungan std, Pi,Sosial std = Skor standar dari masing-masing pilar; wE, wL, wS = Bobot (loading factor dari PC1) untuk masing-masing pilar.
```

*EN gloss:* Stage 3: aggregation of the composite IBEI index (final-stage PCA). At the final stage the three pillar scores are combined to form the final IBEI score. This stage is the culmination of the aggregation process, in which the multidimensional performance of the economic, environmental and social pillars is integrated into a single holistic measure. PCA is applied for the last time to the three pillar scores (which have also been standardised). Final IBEI score formula, where: IBEI i = Indonesia Blue Economy Index score for province i; Pi,Economy std, Pi,Environment std, Pi,Social std = standardised score of each pillar; wE, wL, wS = weight (PC1 loading factor) for each pillar.

*Extractor note:* Equation body not transcribed: math glyph layer corrupted under pdftotext -layout. Only printed prose and the symbol-definition list are quoted. Note the report does not print numeric values of wE, wL, wS at this location; pillar weight percentages are published elsewhere (Juknis Tabel 4) and must not be back-filled here.

**`doc_2_report-method_chunk_013`** · p. 33 [pdf 45] · 3.1. Metodologi Perhitungan > Standardisasi Skor Akhir · type `methodology` · maturity `a`

```text
Standardisasi Skor Akhir. Skor mentah yang dihasilkan dari proses PCA (di masing-masing level) bersifat relatif, dengan rata-rata di seluruh provinsi mendekati nol. Untuk mempermudah interpretasi dan perbandingan, skor IBEI akhir perlu distandarisasi ke dalam rentang nilai yang lebih intuitif, yaitu 1 hingga 100. Standardisasi ini dilakukan dengan membagi skor indeks setiap provinsi dengan nilai indeks maksimum teoretis yang dihitung berdasarkan nilai tertinggi dari setiap indikator pada tahun dasar (IBEI, 2023). Formula yang digunakan adalah sebagai berikut: Standardize(index) = (index / Max(index)) * 100. Dengan metodologi yang sistematis dan objektif ini, skor IBEI yang dihasilkan dapat menjadi alat ukur yang andal untuk memetakan posisi dan memandu arah pembangunan ekonomi biru di tingkat nasional dan daerah.
```

*EN gloss:* Standardisation of the final score. The raw scores produced by the PCA process (at each level) are relative, with a mean across all provinces close to zero. To ease interpretation and comparison, the final IBEI score needs to be standardised into a more intuitive value range, namely 1 to 100. This standardisation is done by dividing each province's index score by the theoretical maximum index value, computed from the highest value of each indicator in the base year (IBEI, 2023). The formula used is: Standardize(index) = (index / Max(index)) * 100. With this systematic and objective methodology, the resulting IBEI score can be a reliable measuring tool for mapping position and guiding the direction of blue economy development at national and regional level.

**`doc_2_report-method_chunk_014`** · p. 33 [pdf 45] · 3.1. Metodologi Perhitungan > Interpretasi Skor Akhir IBEI · type `definition` · maturity `a`

```text
Interpretasi Skor Akhir IBEI. Skor IBEI yang dihasilkan dari metodologi ini adalah skor komponen utama (principal component score). Skor ini merupakan ukuran relatif yang tidak memiliki batas atas atau bawah yang pasti dan dapat bernilai positif maupun negatif. Secara teknis, rata-rata dari skor IBEI di seluruh provinsi akan mendekati nol. Oleh karena itu, skor positif mengindikasikan kinerja di atas rata-rata nasional, sementara skor negatif mengindikasikan kinerja di bawah rata-rata. [Kotak:] "Nilai yang lebih tinggi menunjukkan kinerja ekonomi biru yang secara keseluruhan lebih baik dibandingkan provinsi lain." "Nilai yang lebih rendah (termasuk nilai negatif) menunjukkan kinerja yang relatif lebih tertinggal."
```

*EN gloss:* Interpretation of the final IBEI score. The IBEI score produced by this methodology is a principal component score. It is a relative measure with no definite upper or lower bound and can be positive or negative. Technically, the mean IBEI score across all provinces will be close to zero. A positive score therefore indicates above-national-average performance, while a negative score indicates below-average performance. Boxes: "A higher value indicates overall better blue economy performance compared with other provinces." "A lower value (including a negative value) indicates relatively lagging performance."

**`doc_2_report-method_chunk_015`** · p. 33 [pdf 45] · 3.1. Metodologi Perhitungan > konflik internal: skala skor akhir · type `evidence` · maturity `not_applicable`

```text
Konflik internal dalam satu halaman yang sama, dikutip verbatim dari kedua sisi. (i) "skor IBEI akhir perlu distandarisasi ke dalam rentang nilai yang lebih intuitif, yaitu 1 hingga 100" — dengan formula "Standardize(index) = (index / Max(index)) * 100". (ii) "Skor ini merupakan ukuran relatif yang tidak memiliki batas atas atau bawah yang pasti dan dapat bernilai positif maupun negatif... rata-rata dari skor IBEI di seluruh provinsi akan mendekati nol" dan "Nilai yang lebih rendah (termasuk nilai negatif) menunjukkan kinerja yang relatif lebih tertinggal."
```

*EN gloss:* An internal conflict on the same printed page, quoted verbatim from both sides. (i) The final IBEI score is said to be standardised into a 1-to-100 range, using Standardize(index) = (index / Max(index)) * 100. (ii) The score is said to be a relative measure with no definite upper or lower bound, able to be positive or negative, with a cross-province mean near zero, and lower values 'including negative values' indicating lagging performance. A 1-to-100 rescaled index cannot simultaneously be unbounded and negative-valued; the document does not state which scale the published figures are on, nor whether the rescaling is applied to the reported values. Presented as a conflict, not resolved. Bears directly on whether reported IBEI values are comparable across editions.

*Extractor note:* No reconstruction. Both limbs are verbatim quotations from printed p. 33 [pdf 45]; the observation that they are mutually inconsistent is the extractor's, flagged rather than adjudicated per the preserve-disagreement rule.

### 3.3 Verbatim — BPS SIRUSA metadata

**`doc_4_sirusa-metadata_chunk_016`** · SIRUSA metadata/indikator/105371 (retrieved 2026-08-13) · indikator-105371 > Indeks Ekonomi Biru Indonesia · type `definition` · maturity `a`

```text
Nama Indikator: Indeks Ekonomi Biru Indonesia. Konsep: Ekonomi Biru. Definisi: Skor komposit yang menghitung kontribusi multidimensional sektor kelautan terhadap pembangunan berkelanjutan. Metode Perhitungan: Skor tiga pilar (Ekonomi, Lingkungan, Sosial) yang telah distandardisasi digabungkan sekali lagi menggunakan PCA. Proses ini menghasilkan skor IBEI akhir untuk setiap provinsi, dengan bobot untuk masing-masing pilar ditentukan oleh kontribusi relatifnya terhadap variasi total kinerja ekonomi biru antarprovinsi. Rumus: $IBEI_i=(w_E\cdot P^{std}_{i,Ekonomi})+(w_L\cdot P^{std}_{i,Lingkungan})+(w_S\cdot P^{std}_{i,Sosial}$. Ukuran: Indeks. Satuan: -. Apakah Indikator Komposit: Ya. Indikator Pembangun: Indeks Ekonomi Biru Indonesia Pilar Ekonomi; Indeks Ekonomi Indonesia Biru Pilar Lingkungan; Indeks Ekonomi Biru Indonesia Pilar Sosial. Level Estimasi: Provinsi.
```

*EN gloss:* Indicator: Indonesia Blue Economy Index. Concept: blue economy. Definition: a composite score computing the multidimensional contribution of the marine sector to sustainable development. Calculation method: the three standardised pillar scores (Economy, Environment, Social) are combined once more using PCA, producing the final provincial IBEI score, with each pillar's weight determined by its relative contribution to the total variance in inter-provincial blue economy performance. Formula as quoted. Measure: index; unit: none. Composite: yes. Constituent indicators: the three pillar indices. Estimation level: province.

*Extractor note:* Confirms that pillar weights are PCA-derived from inter-provincial variance, not normative. Note the published formula string is unbalanced (a closing parenthesis is missing after P^std_{i,Sosial}); quoted exactly as published.

**`doc_4_sirusa-metadata_chunk_017`** · SIRUSA metadata/indikator/105371, Interpretasi (retrieved 2026-08-13) · indikator-105371 > Interpretasi · type `definition` · maturity `a`

```text
Interpretasi: Nilai yang lebih tinggi menunjukkan kinerja ekonomi biru yang secara keseluruhan lebih baik dibandingkan provinsi lain. Nilai yang lebih rendah (termasuk nilai negatif) menunjukkan kinerja yang relatif lebih tertinggal. Skor yang tinggi mengindikasikan bahwa sebuah provinsi telah berhasil menyeimbangkan pemanfaatan ekonomi sumber daya lautnya dengan pelestarian lingkungan dan peningkatan kesejahteraan sosial, yang merupakan cerminan dari tata kelola yang baik dan efektif.
```

*EN gloss:* Interpretation: a higher value indicates overall better blue economy performance relative to other provinces. A lower value (including negative values) indicates relatively lagging performance. A high score indicates that a province has succeeded in balancing economic use of its marine resources with environmental conservation and improved social welfare, reflecting good and effective governance.

*Extractor note:* The explicit admission that scores can be negative confirms Z-score standardisation rather than 0-100 min-max normalisation, and confirms the index is purely relative between provinces — it has no absolute scale and no fixed reference point across years.

**`doc_4_sirusa-metadata_chunk_029`** · SIRUSA metadata/indikator/105709-105717, Metode Perhitungan (retrieved 2026-08-13) · cross-file: indikator-105709 to 105718, Metode Perhitungan boilerplate · type `methodology` · maturity `a`

```text
Semua indikator distandarisasi, kemudian skor komposit dihitung dengan menerapkan PCA pada set indikator standar yang relevan. Bobot untuk setiap indikator ditentukan oleh loading factor komponen utama pertama.
```

*EN gloss:* All indicators are standardised, then the composite score is computed by applying PCA to the relevant standardised indicator set. The weight for each indicator is determined by the loading factor of the first principal component.

*Extractor note:* This identical sentence appears on all nine sub-pillar metadata pages (105709-105717). It is the load-bearing statement that IBEI weights at the variable level are data-driven first-principal-component loadings, not published normative weights, and that the transformation is standardisation (Z-score), not min-max rescaling. Any argument premised on min-max normalisation of IBEI inputs is void.

### 3.4 Verbatim — Rinaldi et al. 2025, for contrast

**`doc_3_rinaldi-methods_chunk_002`** · p. 1477 [pdf 7], equation (1) · 3 Methods > 3.1 Development of Blue Economy Index (BEI) for Sumatera Island · type `methodology` · maturity `b`

```text
After obtaining complete data, the preparation of the blue economy index was carried out by adopting the calculation concept issued by the United Nations Development Program (UNDP) in compiling the Human Development Index (HDI) [17]. The steps for preparing the index include: 1. Data standardization with min-max normalization. 2. Calculating the index of constituent dimensions (I) with the arithmetic average method. 3. Aggregating dimensional indices to generate BEI by geometric mean method: BEI = cube_root(I_environment x I_economy x I_social) x 100. (1)
```

*EN gloss:* Source text is English. Gloss: Rinaldi et al.'s BEI aggregation is an HDI-style three-step procedure — min-max standardisation, arithmetic mean within each dimension, geometric mean (cube root of the product) across the three dimensions, scaled by 100. This is min-max normalisation with geometric aggregation, NOT Z-score standardisation and NOT a PCA-weighted index. This chunk is the direct textual basis for the flag that the plan's premise for this slice is unsupported.

**`doc_3_rinaldi-methods_chunk_011`** · p. 1484 [pdf 14] · 4 Results and Discussion > 4.2 PCA dimensionality reduction analysis · type `evidence` · maturity `not_applicable`

```text
After forming an index to measure the potential of the blue economy on the Island of Sumatera, spatio-temporal regression modeling was conducted to determine the factors of the blue economy that affect economic growth on the Island of Sumatera. Economic growth is seen through the GRDP at current prices value of each regency and city on the Island of Sumatera. Dimensional reduction with PCA is done before spatio-temporal regression modeling with the aim of preventing multicollinearity in regression modeling involving many predictor variables. This study conducted spatio-temporal modeling for each province. The aim is to understand the distribution pattern of GRDP at current prices in each province based on the variables used to construct the BEI. Therefore, dimension reduction with PCA was conducted for each province showing the following results.
```

*EN gloss:* Source text is English. Gloss: the PCA is run AFTER the index is already formed, separately for each of the ten provinces, solely to prevent multicollinearity in the GRDP regression. This sequencing is decisive: PCA plays no part in constructing the BEI. Any claim that this paper evidences a PCA-based index construction is unsupported by its own text.

---

## 4. The imputation finding

Source: IBEI Report 2024 (Dec 2025 revision), **Lampiran 1: Metodologi Imputasi Data Untuk
Kelengkapan Indeks**, printed pp. 64-66 [pdf 76-78]. Maturity tag (b), experimental or pilot
compilation: the annex documents a framework that was applied, but publishes no applied result.

**What Lampiran 1 states.** Data gaps in the IBEI are filled by machine-learning imputation
against socio-economic proxy variables. The stated premise is that the IBEI's macro indicators
correlate measurably with micro variables collected routinely through national surveys, *"seperti
Survei Sosial Ekonomi Nasional (SUSENAS)"*. Two scenarios: where an indicator is missing for
**all** provinces, the model is trained on the previous IBEI cycle's complete historical data and
then predicts **every province** for the reference year; where it is missing for **some**
provinces, a hybrid of historical and available current data trains the model and prediction is
applied only to the missing provinces. Six stages follow: identification, feature engineering and
scaling, model fitting across linear, tree-based and neural-network families with k-fold
cross-validation, selection on RMSE / MAE / R², ensemble prediction with domain constraints
(e.g. a percentage forced into 0-100), then post-processing in which reversed variables are
computed mathematically and the imputed values are merged with observed values for the IBEI
calculator. Four quality-assurance claims are made: reproducibility via fixed seeds, separate
treatment of inverse-signed variables, external configuration management, and objective
validation.

**Which indicators depend on it: not stated.** This is the load-bearing gap and it must be
reported as a gap. Lampiran 1 names **no** individual IBEI indicator as imputed, gives no count
of imputed cells, indicators or provinces, names no selected model for any indicator, reports no
achieved RMSE, MAE or R² value, does not give the value of *k*, and names no proxy variable
beyond SUSENAS. No code, seed value, environment specification or repository location is
published, and the SIRUSA metadata records that microdata are **not** released
(`Data Mikro: Tidak`). So the set of imputed indicators cannot be recovered from the corpus, and
must not be guessed from which indicators look hard to collect.

**Why this matters for the re-scoring, stated without overreach.** Scenario 1 means an indicator
can carry a value for all 34 provinces while having been observed in none of them for that year,
and the printed register gives no marker distinguishing such a value from a measured one. Two
directions follow, and both are open questions rather than findings: an imputed indicator is one
where an ocean account could in principle substitute observation for prediction, which is a
stronger claim than mere derivability; and conversely, an imputed value is not independent
evidence that the IBEI's stated data requirement is currently met by any producer. Neither can be
resolved without knowing which indicators were imputed, and that information is not in the
corpus.

### 4.1 Verbatim — Lampiran 1 in full

**`doc_2_report-imputation_chunk_001`** · p. 64 [pdf 76] · Lampiran 1: Metodologi Imputasi Data Untuk Kelengkapan Indeks > 1.1 Latar Belakang dan Rasional · type `methodology` · maturity `b`

```text
1.1. LATAR BELAKANG DAN RASIONAL — Penyusunan Indeks Ekonomi Biru Indonesia (IBEI) yang komprehensif menuntut kelengkapan data di seluruh indikator dan wilayah cakupan. Dalam siklus pengumpulan data, dapat terjadi tantangan yang menyebabkan ketersediaan data tidak merata. Untuk mengatasi kekosongan data tersebut secara objektif, ilmiah, dan dapat dipertanggungjawabkan, sebuah metodologi imputasi berbasis pembelajaran mesin (machine learning) diterapkan.
```

*EN gloss:* 1.1 Background and rationale — Compiling a comprehensive Indonesia Blue Economy Index (IBEI) requires complete data across all indicators and areas of coverage. In the data collection cycle, challenges can arise that cause data availability to be uneven. To address those data gaps objectively, scientifically and accountably, a machine-learning-based imputation methodology is applied.

**`doc_2_report-imputation_chunk_002`** · p. 64 [pdf 76] · Lampiran 1 > 1.1 Latar Belakang dan Rasional · type `methodology` · maturity `b`

```text
Tujuan dari pendekatan ini adalah untuk mengestimasi nilai-nilai yang tidak tersedia dengan memanfaatkan hubungan statistik antara indikator IBEI dan serangkaian variabel proksi sosio-ekonomi yang relevan. Lampiran ini menyajikan dokumentasi teknis yang transparan mengenai kerangka kerja, tahapan proses, dan protokol validasi yang digunakan untuk memastikan integritas data yang menjadi pondasi perhitungan IBEI.
```

*EN gloss:* The purpose of this approach is to estimate unavailable values by exploiting the statistical relationship between IBEI indicators and a set of relevant socio-economic proxy variables. This annex presents transparent technical documentation of the framework, the process stages, and the validation protocol used to ensure the integrity of the data underpinning the IBEI calculation.

**`doc_2_report-imputation_chunk_003`** · p. 64 [pdf 76] · Lampiran 1 > 1.2 Kerangka Konseptual Imputasi · type `definition` · maturity `a`

```text
1.2. KERANGKA KONSEPTUAL IMPUTASI — Pendekatan imputasi didasarkan pada hipotesis bahwa indikator-indikator makro IBEI memiliki korelasi yang dapat diukur dengan variabel-variabel mikro yang dikumpulkan secara rutin melalui survei berskala nasional, seperti Survei Sosial Ekonomi Nasional (SUSENAS). Dengan memanfaatkan kekayaan informasi dari data proksi tersebut, model prediktif yang andal dapat dibangun untuk setiap indikator IBEI yang memerlukan estimasi.
```

*EN gloss:* 1.2 Conceptual framework of imputation — The imputation approach rests on the hypothesis that the IBEI's macro indicators are measurably correlated with micro variables collected routinely through national-scale surveys, such as the National Socio-Economic Survey (SUSENAS). By exploiting the informational richness of those proxy data, a reliable predictive model can be built for each IBEI indicator requiring estimation.

**`doc_2_report-imputation_chunk_004`** · p. 64 [pdf 76] · Lampiran 1 > 1.2 Kerangka Konseptual Imputasi > Skenario 1 · type `methodology` · maturity `b`

```text
Strategi imputasi dirancang secara adaptif berdasarkan pola ketersediaan data, yang terbagi menjadi dua skenario utama: Skenario 1: Indikator Tidak Tersedia di Seluruh Wilayah — Untuk indikator yang datanya tidak tersedia di semua provinsi pada tahun referensi, model dilatih menggunakan data historis yang lengkap dari siklus IBEI sebelumnya sebagai variabel target. Model yang telah terlatih ini kemudian digunakan untuk menghasilkan prediksi untuk seluruh provinsi pada tahun referensi saat ini, dengan menggunakan data proksi dari tahun yang bersesuaian.
```

*EN gloss:* The imputation strategy is designed adaptively according to the pattern of data availability, divided into two main scenarios. Scenario 1: Indicator unavailable across all regions — For indicators whose data are unavailable in all provinces in the reference year, the model is trained using complete historical data from the previous IBEI cycle as the target variable. The trained model is then used to generate predictions for all provinces in the current reference year, using proxy data from the corresponding year.

**`doc_2_report-imputation_chunk_005`** · p. 64 [pdf 76] · Lampiran 1 > 1.2 Kerangka Konseptual Imputasi > Skenario 2 · type `methodology` · maturity `b`

```text
Skenario 2: Indikator Tidak Tersedia di Sebagian Wilayah — Untuk indikator yang datanya tersedia di sebagian provinsi, model dilatih menggunakan gabungan data (hybrid dataset) yang terdiri dari data historis yang lengkap dan data aktual yang tersedia pada tahun referensi. Pendekatan ini bertujuan untuk meningkatkan robustness dan daya generalisasi model. Prediksi kemudian hanya diterapkan pada provinsi-provinsi di mana data tidak tersedia. Kerangka kerja bertingkat ini memastikan bahwa setiap proses estimasi memanfaatkan informasi yang paling relevan dan kaya, baik dari tren historis maupun kondisi aktual.
```

*EN gloss:* Scenario 2: Indicator unavailable in some regions — For indicators whose data are available in some provinces, the model is trained on a hybrid dataset comprising complete historical data plus the actual data available in the reference year. This approach aims to improve the model's robustness and generalisability. Predictions are then applied only to provinces where data are unavailable. This tiered framework ensures that each estimation process draws on the most relevant and richest information, from both historical trends and actual conditions.

**`doc_2_report-imputation_chunk_006`** · p. 65 [pdf 77] · Lampiran 1 > 1.3 Metodologi dan Tahapan Proses > 1. Persiapan dan Analisis Awal · type `methodology` · maturity `b`

```text
1.3 METODOLOGI DAN TAHAPAN PROSES — Proses imputasi data dilaksanakan melalui serangkaian tahapan yang terstruktur dan sistematis untuk menjamin konsistensi dan keandalan hasil. 1 Persiapan dan Analisis Awal — Proses diawali dengan identifikasi sistematis terhadap indikator yang memerlukan imputasi dan pengkategoriannya berdasarkan skenario ketersediaan data. Data target (IBEI) dan data fitur (proksi sosio-ekonomi) kemudian disiapkan dan diselaraskan untuk pemodelan.
```

*EN gloss:* 1.3 Methodology and process stages — The data imputation process is carried out through a series of structured and systematic stages to guarantee consistency and reliability of results. Stage 1, Preparation and initial analysis — The process begins with systematic identification of the indicators requiring imputation and their categorisation according to the data-availability scenario. Target data (IBEI) and feature data (socio-economic proxies) are then prepared and aligned for modelling.

**`doc_2_report-imputation_chunk_007`** · p. 65 [pdf 77] · Lampiran 1 > 1.3 Metodologi dan Tahapan Proses > 2. Rekayasa Fitur dan Pra-pemrosesan · type `methodology` · maturity `b`

```text
2 Rekayasa Fitur dan Pra-pemrosesan — Variabel-variabel proksi yang digunakan sebagai fitur prediktor melalui tahap pra-pemrosesan. Ini mencakup penanganan nilai yang hilang pada data fitur dan penerapan beberapa strategi standardisasi (penskalaan) untuk mengoptimalkan kinerja model. Pengujian beberapa teknik penskalaan memastikan bahwa kombinasi terbaik dipilih untuk setiap model.
```

*EN gloss:* Stage 2, Feature engineering and pre-processing — The proxy variables used as predictor features pass through a pre-processing stage. This covers treatment of missing values in the feature data and the application of several standardisation (scaling) strategies to optimise model performance. Testing several scaling techniques ensures the best combination is selected for each model.

**`doc_2_report-imputation_chunk_008`** · p. 65 [pdf 77] · Lampiran 1 > 1.3 Metodologi dan Tahapan Proses > 3. Pemodelan dan Validasi Silang · type `methodology` · maturity `b`

```text
3 Pemodelan dan Validasi Silang — Spektrum luas model statistik dan pembelajaran mesin diuji untuk setiap indikator. Ini mencakup model linear, model berbasis pohon keputusan (tree-based), jaringan saraf tiruan, dan lainnya. Untuk memastikan objektivitas dan mencegah overfitting (ketika model terlalu sesuai dengan data latih dan tidak dapat digeneralisasi), setiap model divalidasi menggunakan teknik validasi silang (k-fold cross-validation). Teknik ini secara berulang membagi data menjadi set pelatihan dan set validasi, sehingga memberikan estimasi kinerja model yang lebih andal.
```

*EN gloss:* Stage 3, Modelling and cross-validation — A broad spectrum of statistical and machine-learning models is tested for each indicator, including linear models, decision-tree-based models, artificial neural networks and others. To ensure objectivity and prevent overfitting (where a model fits the training data too closely and cannot generalise), each model is validated using k-fold cross-validation, which repeatedly splits the data into training and validation sets, giving a more reliable estimate of model performance.

**`doc_2_report-imputation_chunk_009`** · p. 65 [pdf 77] · Lampiran 1 > 1.3 Metodologi dan Tahapan Proses > 4. Evaluasi dan Seleksi Model · type `methodology` · maturity `b`

```text
4 Evaluasi dan Seleksi Model — Kinerja dari setiap model dievaluasi berdasarkan serangkaian metrik statistik standar, seperti Root Mean Squared Error (RMSE), Mean Absolute Error (MAE), dan R-squared (R). Model-model dengan kinerja terbaik berdasarkan kriteria evaluasi tersebut kemudian diseleksi untuk tahap selanjutnya.
```

*EN gloss:* Stage 4, Model evaluation and selection — The performance of each model is evaluated against a set of standard statistical metrics such as Root Mean Squared Error (RMSE), Mean Absolute Error (MAE) and R-squared (printed in the source as bare 'R', the superscript 2 lost in the document's typesetting). The best-performing models on those evaluation criteria are then selected for the next stage. No threshold values, fitted metric values, or per-indicator model choices are reported anywhere in the annex.

**`doc_2_report-imputation_chunk_010`** · p. 65 [pdf 77] · Lampiran 1 > 1.3 Metodologi dan Tahapan Proses > 5. Generasi Prediksi dan Penerapan Batasan · type `methodology` · maturity `b`

```text
5 Generasi Prediksi dan Penerapan Batasan — Model-model terpilih digunakan untuk menghasilkan nilai prediksi. Untuk meningkatkan stabilitas, teknik prediksi ensemble—yang menggabungkan hasil dari beberapa model terbaik—diterapkan. Langkah krusial berikutnya adalah penerapan batasan domain (domain constraints), di mana hasil prediksi disesuaikan untuk memastikan nilainya tetap logis dan sesuai dengan sifat indikator (misalnya, nilai persentase harus berada di antara 0 dan 100).
```

*EN gloss:* Stage 5, Prediction generation and constraint application — The selected models are used to generate predicted values. To improve stability, an ensemble prediction technique combining the results of several best models is applied. The next crucial step is the application of domain constraints, where predictions are adjusted to keep values logical and consistent with the nature of the indicator (for example, a percentage value must lie between 0 and 100).

**`doc_2_report-imputation_chunk_011`** · p. 65 [pdf 77] · Lampiran 1 > 1.3 Metodologi dan Tahapan Proses > 6. Pasca-pemrosesan dan Integrasi · type `methodology` · maturity `b`

```text
6 Pasca-pemrosesan dan Integrasi — Tahap akhir meliputi penggabungan data hasil imputasi dengan data asli yang telah tersedia. Pada tahap ini pula, variabel-variabel turunan (misalnya, indikator yang memiliki hubungan terbalik) dihitung secara matematis. Hasilnya adalah sebuah set data yang lengkap dan telah diformat sesuai standar untuk diintegrasikan ke dalam kalkulator IBEI.
```

*EN gloss:* Stage 6, Post-processing and integration — The final stage covers merging the imputed data with the original available data. At this stage derived variables (for example, indicators with an inverse relationship) are also computed mathematically. The result is a complete dataset, formatted to standard, for integration into the IBEI calculator.

**`doc_2_report-imputation_chunk_012`** · p. 66 [pdf 78] · Lampiran 1 > 1.4 Protokol Validasi dan Jaminan Kualitas > 1. Reproduktibilitas · type `claim` · maturity `b`

```text
1.4. PROTOKOL VALIDASI DAN JAMINAN KUALITAS — Integritas metodologi ini dijaga melalui beberapa protokol jaminan kualitas yang ketat: 1 Reproduktibilitas — Seluruh alur kerja dirancang untuk dapat direproduksi sepenuhnya. Penggunaan parameter acak yang terkontrol (fixed seeds) dan lingkungan komputasi yang terdefinisi memastikan bahwa hasil yang sama dapat diperoleh kembali jika proses dijalankan ulang.
```

*EN gloss:* 1.4 Validation protocol and quality assurance — The integrity of this methodology is safeguarded through several strict quality-assurance protocols. (1) Reproducibility — The entire workflow is designed to be fully reproducible. The use of controlled random parameters (fixed seeds) and a defined computing environment ensures the same results can be obtained again if the process is re-run. Note: the annex asserts reproducibility in principle; no code, seed value, environment specification, or repository location is published in the document.

**`doc_2_report-imputation_chunk_013`** · p. 66 [pdf 78] · Lampiran 1 > 1.4 Protokol Validasi dan Jaminan Kualitas > 2. Perlakuan Variabel Turunan · type `methodology` · maturity `b`

```text
2 Perlakuan Variabel Turunan — Indikator dengan korelasi negatif terhadap tujuan indeks (misalnya, tingkat polusi) diperlakukan secara terpisah. Nilai-nilai ini tidak diprediksi secara langsung oleh model, melainkan dihitung melalui transformasi matematis pada tahap pasca-pemrosesan untuk menjaga konsistensi logis.
```

*EN gloss:* (2) Treatment of derived variables — Indicators negatively correlated with the index objective (for example, pollution levels) are treated separately. These values are not predicted directly by the model but computed through a mathematical transformation at the post-processing stage to maintain logical consistency. The transformation itself is not specified in the annex.

**`doc_2_report-imputation_chunk_014`** · p. 66 [pdf 78] · Lampiran 1 > 1.4 Protokol Validasi dan Jaminan Kualitas > 3. Manajemen Konfigurasi; 4. Validasi Objektif · type `claim` · maturity `b`

```text
3 Manajemen Konfigurasi — Seluruh parameter pemodelan dan spesifikasi dikelola secara eksternal, memungkinkan audit dan peninjauan yang transparan tanpa mengubah logika inti dari proses. 4 Validasi Objektif — Penggunaan teknik validasi silang dan evaluasi multi-metrik menjadi dasar dari proses seleksi model, memastikan bahwa model yang dipilih terbukti andal secara statistik.
```

*EN gloss:* (3) Configuration management — All modelling parameters and specifications are managed externally, permitting transparent audit and review without altering the core logic of the process. (4) Objective validation — The use of cross-validation and multi-metric evaluation forms the basis of model selection, ensuring the selected model is statistically demonstrated to be reliable. Neither the external configuration files nor any audit output is published with the report.

**`doc_2_report-imputation_chunk_015`** · p. 66 [pdf 78] · Lampiran 1 > 1.5 Implikasi Metodologis · type `claim` · maturity `b`

```text
1.5. IMPLIKASI METODOLOGIS — Penerapan metodologi imputasi yang terstruktur ini memastikan bahwa setiap kekosongan data ditangani dengan pendekatan yang berbasis bukti, objektif, dan transparan. Dengan demikian, metodologi ini tidak hanya berfungsi sebagai solusi teknis untuk melengkapi data, tetapi juga sebagai pilar yang memperkuat kredibilitas dan keandalan Indeks Ekonomi Biru Indonesia sebagai instrumen kebijakan yang valid dan dapat diandalkan.
```

*EN gloss:* 1.5 Methodological implications — Applying this structured imputation methodology ensures that every data gap is handled through an evidence-based, objective and transparent approach. The methodology therefore serves not only as a technical solution for completing the data but as a pillar reinforcing the credibility and reliability of the Indonesia Blue Economy Index as a valid and dependable policy instrument.

**`doc_2_report-imputation_chunk_016`** · pp. 64-66 [pdf 76-78] · Lampiran 1 — coverage note on what the annex does not state · type `context` · maturity `not_applicable`

```text
[No verbatim text available: this chunk records an absence.] Lampiran 1 (pp. 64-66 [pdf 76-78]) names no individual IBEI indicator as imputed, gives no count of imputed cells, provinces or indicators, names no selected model per indicator, reports no fitted RMSE/MAE/R-squared value, names no proxy variable beyond "survei berskala nasional, seperti Survei Sosial Ekonomi Nasional (SUSENAS)", and specifies no k for the k-fold cross-validation. The annex documents the imputation framework only, not its applied results.
```

*EN gloss:* Coverage note: Annex 1 documents the imputation framework in the abstract. It does not identify which of the 44 indicators were imputed, how many values were imputed, for which provinces, which model was chosen for any indicator, or any achieved error metric; SUSENAS is the only proxy source named, and the value of k in k-fold cross-validation is not given. Absence of these specifics is itself a finding for any later assessment of whether ocean accounts could substitute for imputed values.

---

## 5. Evidence gaps

Recorded as gaps. None is filled by inference here, and a later agent that fills one must do so
with a locatable source rather than a plausible reading.

**G1. Producer stated for no indicator.** All 44 register rows carry `stated_producer: not_stated`; Tabel 1 prints no producer column. The only producer statement in the corpus is at activity level in SIRUSA — collection instrument *"Lainnya : Publikasi KKP dan BPS"* — naming two agencies collectively for the whole compilation. Per-indicator attribution to BPS, KKP, KLHK, ESDM, Kemendikbudristek or any other body is therefore unfound, however obvious a given indicator's home looks.

**G2. Pillar structure: three pillars or four.** Unresolved conflict inside the Juknis. Tabel 1 (pp. 11-13 [pdf 21-23]) prints a fourth pillar `Enabler (teknologi & tata kelola)` holding indicators 15-18; Tabel 4/5 and Gambar 11 (pp. 93-94 [pdf 103-104]) print three pillars and place tourism, technology and governance as sub-pillars of Ekonomi. Neither locus is adopted. Verbatim record below.

**G3. Final-score scale: 1-100 or unbounded.** Report p. 33 [pdf 45] asserts both, on the same page. Not resolved; bears on cross-edition comparability. Verbatim record in section 3.2 (`doc_2_report-method_chunk_015`).

**G4. The printed formulas have not been read.** All formula bodies in the Juknis and Report are glyph-corrupted in the text layer; only the symbol-definition lists are legible. Recovering the printed expressions requires reading the rendered page images, which this build did not do (no OCR permitted). The functional form is labelled medium-high-confidence inference throughout and no symbol string is quoted.

**G5. PC1 loadings and explained variance are unpublished.** The percentages in Tabel 4/5/6 are published, but the underlying eigenvector loadings, the explained-variance share of PC1 at any stage, the correlation matrix and the number of provinces entering each PCA are not printed anywhere in the corpus. Any recomputation or sensitivity test on the weights is therefore not reproducible from published material.

**G6. Which indicators were imputed.** Not stated in Lampiran 1 or anywhere else; see section 4. No count, no per-indicator model, no error metric, no value of k, no proxy beyond SUSENAS, and microdata are not released.

**G7. Tabel 6 codes cannot be matched to register numbers by suffix.** Variable-code numeric suffixes in Tabel 6 are neither sequential nor contiguous within a block. Matching Tabel 6 codes to section 1 register indicators must be done by name. Two `_r` variables are described only as reversals of an underlying quantity, with no unit printed.

**G8. Two registered variables have no sub-pillar home in the retrieved metadata.** SIRUSA register variables 17 (motor vessels > 30 GT) and 18 (fishing ports with TPI) appear in no `Variabel Pembangun` list on any of the eleven retrieved indicator pages; the nine sub-pillar pages account for 42 constituent variables against a 44-variable register. Whether they are collected but unused, or used in an Economy sub-pillar whose page was not retrieved, is not determinable. The `Pilar Ekonomi` and `Pilar Lingkungan` metadata pages are absent from the local corpus, so their formulas and composition are unverified. Flagged for web search.

**G9. Internal defects in the published sources, preserved not corrected.** `social_s3_var12` is described as protein consumption but carries the calorie unit `kkal`. The renewable-energy sub-pillar metadata states four indicators and lists four, but its formula sums to j=6. `social_s2_var7` and `social_s2_var8` are near-duplicate senior-secondary attainment measures both entering the same PCA set, as are SIRUSA variables 42 and 43. SIRUSA typos `Kamun` for `Lamun`, `Wiayah` for `Wilayah`, `tiga indikato`; Report typos `kearangka`, `merupakah`. The published IBEI formula string in SIRUSA is unbalanced. Reference periods for the same variables are rendered `T-1` in one SIRUSA table and `2024` in another; variables 12, 13 and 14 carry `T-2`, a two-year lag inside one index vintage.

**G10. Direction of two welfare/health variables is not stated.** PKH receipt and the coastal poverty rate both rise with deprivation. Tabel 6 shows both as reversed (`social_s1_var10`, `social_s3_var14`), but the SIRUSA metadata for those sub-pillars does not state whether inversion occurs before standardisation. Not resolved.

**G11. Registration status of the IBEI as a statistic.** SIRUSA records the IBEI as `Statistik Sektoral` with an empty `Identitas Rekomendasi`, implementing agency BAPPENAS, analysis method recorded only as `DESKRIPTIF` despite the PCA-based method on the indicator pages, zero enumerators, no pilot, and no microdata release. Recorded as published; the tension between `DESKRIPTIF` and the PCA documentation is not resolved.

**G12. National IBEI 2024 headline figure is outside the slice.** Report Tabel 3.2.1 is truncated at the slice boundary (printed p. 35 [pdf 47]). The social pillar index, the remaining environment sub-pillars and the composite national IBEI 2024 figure are not in this corpus and must not be inferred from the rows that are.

**G13. Out of this build by design.** The Juknis per-indicator narrative (pdf 24-72), the Report per-province spiderweb annex (pdf 84-87), tier-2 policy documents (Blue Economy Roadmap, Development Framework, PermenKP-18-2025 Renstra), the tier-3 accounts material (MMAF 2022 trio, BPS Manila decks, the Gili Matra pilot) and SEEA-EA 2021 were deliberately not ingested. The sensitivity (Tabel 7) and cascading (3.1, Gambar 1 / Tabel 2) slices were extracted into the schema but are not reproduced in this pack; query them by `slice_id` if a provincial-baseline or sensitivity-ranking question arises.

**G14. Permanent limitations, per the project constraint.** No engagement with Indonesian government agencies: no data request, interview or correspondence. Unpublished loadings, unreleased microdata and unretrieved internal configuration files are therefore permanent limitations of this analysis, not pending tasks. Note two premise corrections that go the other way: the BAPPENAS methodological handbook is *not* unpublished — the Juknis Pedoman IBEI is that handbook and it is in the corpus — and the 2022 MMAF pilot reports are present locally, contrary to the standing note that they are non-retrievable.

Three chunks in the schema are flagged `needs_web_search` and are the only sanctioned
retrieval targets arising from this build:

| chunk_id | locator | suggested query |
|---|---|---|
| `doc_2_report-provincial_chunk_111` | p. 71 [pdf 83] | link.bappenas.go.id LampiranJuknisIBEI lampiran analisis spiderweb IBEI provinsi |
| `doc_4_sirusa-metadata_chunk_026` | SIRUSA metadata/kegiatan/94936, Variabel nos. 17-18, cross-checked against metadata/indikator/105709-105718 (retrieved 2026-08-13) | SIRUSA metadata indikator "Indeks Ekonomi Biru Indonesia Pilar Ekonomi" subpilar variabel pembangun sirusa.web.bps.go.id |
| `doc_4_sirusa-metadata_chunk_027` | SIRUSA metadata/kegiatan/94936, Indikator Kegiatan (retrieved 2026-08-13) | sirusa.web.bps.go.id metadata indikator "Indeks Ekonomi Biru Indonesia Pilar Lingkungan" metode perhitungan rumus |

### 5.1 Verbatim — the pillar-structure conflict

**`doc_1_cross-slice-conflict_chunk_001`** · pp. 11-13 [pdf 21-23]; pp. 93-94 [pdf 103-104] · Konflik internal: Tabel 1 (empat pilar) vs Tabel 4/5 dan Gambar 11 (tiga pilar) · type `evidence` · maturity `not_applicable`

```text
[Locus A — Tabel 1, Indikator Indeks Ekonomi Biru Indonesia, hlm. 11-13 (pdf 21-23):] "Pilar: Enabler (teknologi & tata kelola) — Subpilar: Pariwisata berbasis bahari (indikator 15-16); Subpilar “-” (indikator 17-18)." [Locus B — Tabel 4, Bobot IBEI 2025 berdasarkan pilar, hlm. 94 (pdf 104):] "Kode Pillar / Nama Pilar / Kontribusi terhadap IBEI: si_enviro | Index pilar lingkungan | Tinggi (36,9%); si_econ | Index pilar ekonomi | Sedang (32,6%); si_social | Index pilar sosial | Rendah (30,5%)." [Locus B — Tabel 5, Bobot subpilar dalam membentuk pilar IBEI, hlm. 94 (pdf 104):] "Pembentuk Pilar Ekonomi: ... si_econ_s4 | Indeks subpilar pariwisata berbasis kelautan | Tinggi (22,1%); si_econ_tech | Indeks subpilar teknologi | Rendah (4,1%); si_econ_gov | Indeks subpilar tatakelola | Sedang (15,8%)."
```

*EN gloss:* Recorded conflict, not resolved. Locus A (Tabel 1, pp. 11-13 [pdf 21-23]) prints a FOUR-pillar structure in which a pillar 'Enabler (teknologi & tata kelola)' holds indicators 15-18, with marine tourism as its sub-pillar (15-16) and an unnamed sub-pillar printed as a dash (17-18). Locus B (Tabel 4 and Tabel 5, p. 94 [pdf 104], consistent with Gambar 11) prints a THREE-pillar structure — si_enviro 36.9%, si_econ 32.6%, si_social 30.5% — with no Enabler pillar, and places marine tourism (22.1%), technology (4.1%) and governance (15.8%) as sub-pillars OF the Economy pillar. The two loci are incompatible on both the number of pillars and the parent of indicators 15-18. Neither is adopted here. The indicator_join_table propagates the Tabel 1 (four-pillar) labels for rows 15-18; those rows carry pillar_placement_conflict recording the alternative Ekonomi placement. Any re-scoring that aggregates by pillar must state which locus it follows.

### 5.2 Verbatim — institutional and coverage records behind G1, G8, G11, G12

**`doc_4_sirusa-metadata_chunk_001`** · SIRUSA metadata/kegiatan/94936, Informasi Umum (retrieved 2026-08-13) · kegiatan-94936 > Informasi Umum · type `context` · maturity `a`

```text
Judul Kegiatan: Kompilasi Penyusunan Indonesia Blue Economy Index (IBEI). Tahun Kegiatan: 2025. Cara Pengumpulan Data: Kompilasi Produk Administrasi. Sektor Kegiatan: Pertanian dan Perikanan. Jenis Kegiatan Statistik: Statistik Sektoral. Identitas Rekomendasi: -
```

*EN gloss:* Activity title: Compilation and construction of the Indonesia Blue Economy Index (IBEI). Activity year: 2025. Data collection mode: compilation of administrative products. Sector: agriculture and fisheries. Type of statistical activity: sectoral statistics. Recommendation identity (i.e. BPS statistical-activity recommendation number): none given.

*Extractor note:* The IBEI is registered as sectoral statistics (statistik sektoral), not as BPS official basic statistics, and the 'Identitas Rekomendasi' field is empty. Both facts are verbatim; no inference added.

**`doc_4_sirusa-metadata_chunk_007`** · SIRUSA metadata/kegiatan/94936, Desain Kegiatan (retrieved 2026-08-13) · kegiatan-94936 > Desain Kegiatan · type `methodology` · maturity `a`

```text
Kegiatan ini dilakukan BERULANG. Frekuensi Penyelenggaraan: TAHUNAN. Tipe Pengumpulan Data: CROSS_SECTIONAL. Cakupan Wilayah Pengumpulan Data: SELURUH_WILAYAH_INDONESIA. Metode Pengumpulan Data: Pengumpulan data sekunder. Sarana Pengumpulan Data: Lainnya : Publikasi KKP dan BPS. Unit Pengumpulan Data: Lainnya : Provinsi.
```

*EN gloss:* The activity is recurrent, conducted annually, cross-sectional in type, covering the whole territory of Indonesia. Data collection method: secondary data collection. Collection instrument: other — MMAF (KKP) and BPS publications. Collection unit: other — province.

*Extractor note:* The stated collection instrument — existing KKP and BPS publications — establishes that the IBEI collects no primary data of its own and is entirely dependent on upstream statistical production.

**`doc_4_sirusa-metadata_chunk_009`** · SIRUSA metadata/kegiatan/94936, Pengolahan dan Analisis & Diseminasi Hasil (retrieved 2026-08-13) · kegiatan-94936 > Pengolahan dan Analisis; Diseminasi Hasil · type `methodology` · maturity `a`

```text
Tahapan Pengolahan Data: Editing, Coding, Data Entry, Validasi. Metode Analisis: DESKRIPTIF. Unit Analisis: Lainnya : Provinsi. Tingkat Penyajian Hasil Analisis: Nasional, Provinsi. Produk Kegiatan yang Tersedia untuk Umum — Tercetak (hardcopy): Ya; Digital (softcopy): Ya; Data Mikro: Tidak. Rencana Rilis Produk Kegiatan — Tercetak (hardcopy): 2025-08-06; Digital (softcopy): 2025-08-06; Data Mikro: -.
```

*EN gloss:* Processing stages: editing, coding, data entry, validation. Analysis method: descriptive. Unit of analysis: other — province. Presentation levels: national and provincial. Publicly available products: hardcopy yes, softcopy yes, microdata no. Planned release: hardcopy 6 Aug 2025, softcopy 6 Aug 2025, microdata none.

*Extractor note:* Microdata are explicitly not released, which bears on external replication of the index. Note the tension with the PCA-based method described in the indicator pages: the activity metadata records the analysis method only as DESKRIPTIF.

**`doc_4_sirusa-metadata_chunk_026`** · SIRUSA metadata/kegiatan/94936, Variabel nos. 17-18, cross-checked against metadata/indikator/105709-105718 (retrieved 2026-08-13) · cross-file: kegiatan-94936 Variabel Kegiatan vs. indikator-* Variabel Pembangun · type `evidence` · maturity `a` · **RECONSTRUCTED**

```text
Register entries with no sub-pillar home on any retrieved indicator page — 17. Jumlah kapal perikanan tangkap laut – kapal motor > 30 GT — Jumlah kapal motor perikanan tangkap laut berukuran lebih dari 30 GT — T-1. 18. Jumlah pelabuhan perikanan dengan tempat pelelangan ikan — Jumlah pelabuhan perikanan yang memiliki TPI menurut provinsi dan kategori pelabuhan — T-1.
```

*EN gloss:* Two of the 44 registered variables (no. 17, marine capture-fishery motor vessels over 30 GT; no. 18, fishing ports with a fish auction place) appear in the activity's collected-variable register but appear in the 'Variabel Pembangun' list of none of the eleven retrieved indicator metadata pages. The nine sub-pillar pages account for 2+3+6+6+5+4+9+4+3 = 42 constituent variables; the register lists 44. Whether variables 17 and 18 are collected but unused, or are used in an Economy sub-pillar whose metadata page was not retrieved, is not determinable from the retrieved files.

*Extractor note:* The 42-versus-44 tally is reconstructed by the extracting agent from the nine sub-pillar 'Variabel Pembangun' lists; it is not printed in any source file. Confidence: high on the arithmetic (the lists are explicit and short), low on the explanation for the gap, since the Pilar Ekonomi and Pilar Lingkungan metadata pages were not among the retrieved files.

*Unattributed; suggested query:* SIRUSA metadata indikator "Indeks Ekonomi Biru Indonesia Pilar Ekonomi" subpilar variabel pembangun sirusa.web.bps.go.id

**`doc_4_sirusa-metadata_chunk_027`** · SIRUSA metadata/kegiatan/94936, Indikator Kegiatan (retrieved 2026-08-13) · kegiatan-94936 > Indikator Kegiatan · type `evidence` · maturity `a`

```text
Indikator Kegiatan — Indeks Ekonomi Biru Indonesia Pilar Sosial; Indeks Ekonomi Biru Indonesia Subpilar Industri Berbasis Kelautan; Indeks Ekonomi Biru Indonesia Subpilar Energi Terbarukan; Indeks Ekonomi Biru Indonesia Subpilar Kualitas Sumber Daya dan Konservasi Laut; Indeks Ekonomi Biru Indonesia Subpilar Kesehatan; Indeks Ekonomi Biru Indonesia Subpilar Perikanan Tangkap dan Budidaya; Indeks Ekonomi Biru Indonesia Subpilar Pendidikan; Indeks Ekonomi Biru Indonesia Subpilar Perdagangan, Transportasi dan Logistik; Indeks Ekonomi Biru Indonesia Subpilar Kesejahteraan; Indeks Ekonomi Biru Indonesia Subpilar Pariwisata Berbasis Bahari; Indeks Ekonomi Biru Indonesia Pilar Lingkungan; Indeks Ekonomi Biru Indonesia; Indeks Ekonomi Biru Indonesia Pilar Ekonomi. Pilar Lingkungan mengukur kualitas ekosistem pesisir dan laut, upaya mitigasi dampak lingkungan, serta pemanfaatan energi terbarukan. Pilar Ekonomi mengukur vitalitas dan kontribusi langsung sektor kelautan terhadap perekonomian nasional dan regional. Pilar ini tidak hanya menilai volume produksi mentah, tetapi secara komprehensif memotret seluruh rantai nilai ekonomi biru—mulai dari ekstraksi sumber daya, pengolahan, perdagangan,....
```

*EN gloss:* The activity registers thirteen indicators: the IBEI itself, its three pillars (Economy, Environment, Social) and nine sub-pillars (marine-based industry, renewable energy, marine resource quality and conservation, health, capture fisheries and aquaculture, education, trade/transport/logistics, welfare, marine-based tourism). Environment pillar: measures coastal and marine ecosystem quality, environmental-impact mitigation efforts and renewable energy use. Economy pillar: measures the vitality and direct contribution of the marine sector to the national and regional economy, capturing not only raw production volume but the whole blue economy value chain — from resource extraction, processing, trade,... (truncated in source).

*Extractor note:* This field establishes the full published indicator hierarchy: 1 index + 3 pillars + 9 sub-pillars = 13 registered indicators. Individual metadata pages were retrieved for 11 of the 13; the Pilar Ekonomi and Pilar Lingkungan pages are absent from the local corpus, so their formulas, sub-pillar composition and loading-factor statements remain unverified. The Economy pillar definition is truncated in the source page itself.

*Unattributed; suggested query:* sirusa.web.bps.go.id metadata indikator "Indeks Ekonomi Biru Indonesia Pilar Lingkungan" metode perhitungan rumus

**`doc_4_sirusa-metadata_chunk_028`** · SIRUSA metadata/indikator/105371, 105709-105718, common fields (retrieved 2026-08-13) · cross-file: indikator-105709 to 105718, Apakah Indikator Komposit / Level Estimasi / akses umum · type `evidence` · maturity `a` · **RECONSTRUCTED**

```text
Ukuran: Indeks. Satuan: -. Variabel Disaggregasi/ Klasifikasi Penyajian: Wilayah. Level Estimasi: Provinsi. Apakah indikator dapat diakses umum: Ya. Kegiatan Statistik: Kompilasi Penyusunan Indonesia Blue Economy Index (IBEI) 2025. Apakah Indikator Komposit: Tidak [pada sembilan halaman subpilar]; Ya [pada Indeks Ekonomi Biru Indonesia dan Pilar Sosial].
```

*EN gloss:* Every one of the eleven retrieved indicator pages records: measure = index; unit = none; disaggregation = region; estimation level = province; publicly accessible = yes; parent statistical activity = the IBEI 2025 compilation. The 'Apakah Indikator Komposit' (is this a composite indicator) flag is set to 'Tidak' (no) on all nine sub-pillar pages even though each is explicitly built from multiple standardised variables by PCA, and to 'Ya' (yes) only on the headline IBEI and Pilar Sosial pages.

*Extractor note:* The uniformity across the eleven pages is a cross-file observation by the extracting agent; each individual field value is verbatim. Confidence: high — the fields are identical strings on every page. The composite-flag inconsistency is recorded as published; SIRUSA appears to reserve 'komposit' for indicators built from other indicators rather than from variables.

**`doc_2_report-method_chunk_022`** · p. 35 [pdf 47] · 3.2. Analisa Distribusi IBEI (Keseluruhan) > Tabel 3.2.1. IBEI 2024 berdasarkan Pilar dan Subpilar, Nasional · type `data` · maturity `a`

```text
Tabel 3.2.1. IBEI 2024 berdasarkan Pilar dan Subpilar, Nasional. Kolom: "Pilar dan subpilar" / "Nasional". Indeks pilar ekonomi 25,40. Indeks subpilar perikanan tangkap dan budidaya 12,86. Indeks subpilar industri berbasis kelautan 19,08. Indeks subpilar perdagangan, transport dan logistik 17,67. Indeks subpilar pariwisata berbasis kelautan 31,38. Indeks subpilar teknologi 54,42. Indeks subpilar tatakelola 18,20. Indeks pilar lingkungan 26,25. Indeks subpilar kualitas sumber daya dan konservasi laut 21,96. Indeks subpilar energi terbarukan 11,96.
```

*EN gloss:* Table 3.2.1. IBEI 2024 by pillar and sub-pillar, national. Columns: 'Pillar and sub-pillar' / 'National'. Economic pillar index 25.40. Capture fisheries and aquaculture sub-pillar index 12.86. Marine-based industry sub-pillar index 19.08. Trade, transport and logistics sub-pillar index 17.67. Marine-based tourism sub-pillar index 31.38. Technology sub-pillar index 54.42. Governance sub-pillar index 18.20. Environment pillar index 26.25. Marine resource quality and conservation sub-pillar index 21.96. Renewable energy sub-pillar index 11.96. Note the decimal comma is the Indonesian convention: 25,40 is 25.40.

*Extractor note:* The table is TRUNCATED at the slice boundary: this slice ends at printed p. 35 [pdf 47] with the renewable energy row, and the table continues beyond the assigned range. The social pillar index, the remaining environment sub-pillars and the headline composite IBEI 2024 national figure are NOT present in this slice and must not be inferred. Values recorded exactly as printed, including the Indonesian decimal comma.

---

## Annex A. Official SIRUSA definitions of the 44 collected variables

BPS SIRUSA `metadata/kegiatan/94936`, *Variabel (Karakteristik) yang Dikumpulkan*, retrieved
2026-08-13. Included because re-scoring needs the official definition and reference period of
each variable, not only the Juknis `Data Pembentuk` wording in section 1. The SIRUSA numbering
runs 1-44 but is **not** identical in order to the Juknis register numbering, so match by name.
Sub-pillar composition statements (`indikator/105709`-`105718`) are in the schema under
`slice_id: sirusa-metadata` and are not duplicated here.

**`doc_4_sirusa-metadata_chunk_010`** · SIRUSA metadata/kegiatan/94936, Variabel yang Dikumpulkan nos. 1-8 (retrieved 2026-08-13) · kegiatan-94936 > Variabel (Karakteristik) yang Dikumpulkan, nos. 1-8 · type `data` · maturity `a`

```text
1. Peran sektor perikanan dalam PDB — Kontribusi PDRB sektor perikanan provinsi terhadap PDRB provinsi (ADHB) — T-1. 2. Volume produksi perikanan — Total produksi perikanan yang dihasilkan dalam setahun, yang merupakan penjumlahan dari perikanan tangkap dan budidaya pembesaran (mencakup tambak dan non tambak). Dalam perikanan tangkap termasuk perikanan tangkap laut dan perikanan tangkap perairan umum daratan (PUD) seperti gabus, lele, ikan nila, mujaer, mas, dan lain-lain — T-1. 3. Volume produksi budidaya tambak — Produksi total yang bersumber dari budidaya tambak melalui kolam buatan yang dimanfaatkan sebagai sarana budidaya. Adapun biota yang dibudidayakan antara lain ikan, udang dan kerang. Secara umum, media air yang digunakan dapat berupa air tawar, air payau, dan air laut — T-1. 4. Volume produksi akuakultur — Jumlah volume produksi perikanan budidaya pembesaran. Perikanan budidaya mencakup jenis-jenis ikan air tawar, ikan air laut, dan rumput laut — T-1. 5. Volume produksi budidaya rumput laut — Jumlah total rumput laut yang diproduksi melalui metode budidaya di lingkungan yang terkontrol, seperti tambak, kolam, atau laut terbuka yang dipersiapkan secara khusus untuk budidaya — T-1. 6. Volume angkutan laut — Volume ekspor dan impor muat dengan moda transportasi laut — T-1. 7. Jumlah penumpang angkutan laut — Jumlah penumpang angkutan laut yang meliputi aktivitas kedatangan dan kepulangan penumpang antar pulau dan luar negeri di seluruh pelabuhan komersial maupun non-komersial — T-1. 8. Jumlah penumpang angkutan laut di 25 pelabuhan strategis — Jumlah penumpang angkutan laut di 25 pelabuhan strategis mencakup penumpang di Pelabuhan Lhokseumawe, Belawan, Teluk Bayur, Dumai, Pekanbaru, Palembang, Panjang, Tanjung Pinang, Batam, Tanjung Priok, Tanjung Emas, Tanjung Perak, Banten, Benoa, Tenau, Pontianak, Banjarmasin, Balikpapan, Samarinda, Bitung, Makassar, Ambon, Sorong, Jayapura, dan Biak — T-1.
```

*EN gloss:* Variables 1-8 with official definitions and reference periods: (1) fisheries share of GDP — provincial fisheries GRDP as a share of provincial GRDP at current prices, T-1; (2) fisheries production volume — annual total of capture fisheries plus grow-out aquaculture (pond and non-pond), capture including marine and inland open-water capture such as snakehead, catfish, tilapia, mujair and carp, T-1; (3) brackishwater/pond aquaculture production volume — total from artificial ponds, species including fish, shrimp and shellfish, in fresh, brackish or marine water, T-1; (4) aquaculture production volume — grow-out aquaculture production covering freshwater fish, marine fish and seaweed, T-1; (5) seaweed aquaculture production volume — total seaweed produced under controlled cultivation in ponds, tanks or prepared open sea, T-1; (6) sea transport volume — export and import loading volume by sea mode, T-1; (7) sea transport passengers — arrivals and departures, inter-island and international, at all commercial and non-commercial ports, T-1; (8) sea transport passengers at 25 strategic ports — named ports Lhokseumawe through Biak, T-1.

*Extractor note:* Reference periods appear twice in the source with different renderings: 'T-1' in the numbered variable table and '2024' in the summary table for the same variables. Both are recorded; the conflict is not resolved here.

**`doc_4_sirusa-metadata_chunk_011`** · SIRUSA metadata/kegiatan/94936, Variabel yang Dikumpulkan nos. 9-18 (retrieved 2026-08-13) · kegiatan-94936 > Variabel (Karakteristik) yang Dikumpulkan, nos. 9-18 · type `data` · maturity `a`

```text
9. Volume ekspor perikanan — Jumlah total produk perikanan yang diekspor dari suatu provinsi. Komoditas perikanan mencakup komoditas yang tercantum pada website KKP pada tabel Volume Ekspor Hasil Perikanan Menurut Komoditas — T-1. 10. Kontribusi ekspor produk perikanan terhadap total ekspor — Nilai ekspor produk perikanan terhadap total nilai ekspor di provinsi dimaksud. Komoditas perikanan mencakup komoditas yang tercantum pada website KKP pada tabel Data Nilai Ekspor Hasil Perikanan Menurut Komoditas — T-1. 11. Volume ekspor perikanan hidup dan segar — Total ekspor perikanan tangkap (ISIC 031) dan akuakultur (ISIC 032), untuk ikan hidup dan segar — T-1. 12. Volume ekspor ikan olahan — Total berat bersih volume ikan, krustasea, dan moluska (ISIC 102) yang sudah diproses dan/atau diawetkan — T-2. 13. Volume produksi garam — Total produksi garam dari tambak dan non-tambak nasional — T-2. 14. Jumlah perahu/kapal penangkap ikan — Jumlah perahu yang digunakan nelayan untuk menangkap ikan yang mencakup perahu tanpa motor, perahu motor tempel, dan kapal motor — T-2. 15. Jumlah wisata bahari — Jumlah desa tepi laut yang memiliki wisata bahari — T-1. 16. Jumlah usaha/perusahaan wisata tirta komersial — Jumlah usaha yang bergerak di wisata tirta yang mencakup arung jeram, wisata selam, dermaga marina, selancar, selancar angin, para layar, motor air, dan aktivitas tirta lainnya — T-1. 17. Jumlah kapal perikanan tangkap laut – kapal motor > 30 GT — Jumlah kapal motor perikanan tangkap laut berukuran lebih dari 30 GT — T-1. 18. Jumlah pelabuhan perikanan dengan tempat pelelangan ikan — Jumlah pelabuhan perikanan yang memiliki TPI menurut provinsi dan kategori pelabuhan — T-1.
```

*EN gloss:* Variables 9-18: (9) fisheries export volume, commodities as listed on the KKP website table of export volume by commodity, T-1; (10) fisheries export contribution to total export value, per the KKP export-value-by-commodity table, T-1; (11) live and fresh fisheries export volume, capture (ISIC 031) and aquaculture (ISIC 032), T-1; (12) processed fish export volume, net weight of processed and/or preserved fish, crustaceans and molluscs (ISIC 102), T-2; (13) salt production volume, pond and non-pond national total, T-2; (14) number of fishing boats/vessels, including non-powered boats, outboard-motor boats and motorised vessels, T-2; (15) number of marine tourism sites, coastal villages having marine tourism, T-1; (16) number of commercial water-tourism businesses, covering rafting, diving, marina, surfing, windsurfing, parasailing, jet-ski and other water activities, T-1; (17) number of marine capture-fishery motor vessels over 30 GT, T-1; (18) number of fishing ports with a fish auction place (TPI), by province and port category, T-1.

*Extractor note:* Variables 12, 13 and 14 carry reference period T-2 rather than T-1 — a two-year lag inside a single index vintage. Variables 17 and 18 appear in this register but appear in no sub-pillar 'Variabel Pembangun' list on any of the 11 retrieved indicator pages; see chunk doc_4_chunk_026.

**`doc_4_sirusa-metadata_chunk_012`** · SIRUSA metadata/kegiatan/94936, Variabel yang Dikumpulkan nos. 19-27 (retrieved 2026-08-13) · kegiatan-94936 > Variabel (Karakteristik) yang Dikumpulkan, nos. 19-27 · type `data` · maturity `a`

```text
19. Kawasan terumbu karang berkualitas baik — Persentase kawasan terumbu karang dengan tutupan karang hidup antara 50 - 100% — T-1. 20. Kawasan lamun berkualitas baik — Persentase kawasan lamun dengan tutupan lamun hidup antara 50 - 100% — T-1. 21. Kawasan hutan mangrove berkualitas baik — Persentase mangrove dengan kerapatan tutupan antara 50%-100% — T-1. 22. Jumlah desa pesisir dengan tempat pembuangan sampah — Jumlah desa tepi laut dengan tempat penampungan sampah sementara (TPS) — T-1. 23. Jumlah desa pesisir dengan tempat buang air besar — Jumlah desa tepi laut dengan tempat buang air besar yang sebagian besar masyarakatnya memiliki jamban sendiri — T-1. 24. Penanaman/rehabilitasi hutan mangrove, rawa, dan lahan gambut — Total luas kawasan mangrove, rawa, dan lahan gambut yang rusak kemudian ditanami kembali (direstorasi) — T-1. 25. Jumlah Kebocoran Sampah Laut — Volume sampah, termasuk plastik dan limbah rumah tangga, yang terbuang ke laut dan dihitung jumlahnya per meter persegi di area laut — T-1. 26. Jumlah sampah yang dibuang di darat — Timbunan sampah dalam setahun — T-1. 27. Luas kawasan konservasi perairan — Jumlah kawasan yang mempunyai ciri khas tertentu sebagai satu kesatuan ekosistem yang dilindungi, dilestarikan, dan dimanfaatkan secara berkelanjutan. Kawasan konservasi perairan dibagi menjadi kawasan konservasi nasional (KKN), kawasan konservasi daerah (KKD), dan kawasan konservasi yang dikelola oleh Kementerian Lingkungan Hidup dan Kehutanan (KLHK) — T-1.
```

*EN gloss:* Variables 19-27: (19) good-quality coral reef area — percentage of reef area with 50-100% live coral cover; (20) good-quality seagrass area — percentage with 50-100% live seagrass cover; (21) good-quality mangrove forest area — percentage of mangrove with 50-100% canopy density; (22) coastal villages with a temporary waste collection point (TPS); (23) coastal villages with defecation facilities where most households own a latrine; (24) mangrove, swamp and peatland planting/rehabilitation — total degraded area replanted or restored; (25) marine litter leakage volume — waste including plastic and household waste discharged to sea, counted per square metre of sea area; (26) land-disposed waste — annual waste accumulation; (27) aquatic conservation area extent — protected, conserved and sustainably used ecosystem units, divided into national (KKN), regional (KKD) and KLHK-managed conservation areas. All T-1.

*Extractor note:* These nine environmental variables are the register's principal point of contact with ecosystem-extent and condition accounting; the definitions are condition-threshold percentages and restoration areas, not SEEA-EA extent or condition accounts. Recorded as definitions only; no derivability judgement made here.

**`doc_4_sirusa-metadata_chunk_013`** · SIRUSA metadata/kegiatan/94936, Variabel yang Dikumpulkan nos. 28-31 (retrieved 2026-08-13) · kegiatan-94936 > Variabel (Karakteristik) yang Dikumpulkan, nos. 28-31 · type `data` · maturity `a`

```text
28. Kapasitas terpasang Pembangkit Listrik Tenaga Surya (PLTS) — Kapasitas terpasang Pembangkit Listrik Tenaga Surya (PLTS) — T-1. 29. Listrik yang dihasilkan oleh Pembangkit Listrik Tenaga Surya (PLTS) — Tenaga listrik yang dihasilkan oleh pembangkit listrik tenaga surya (PLTS) — T-1. 30. Kapasitas terpasang Pembangkit Listrik Tenaga Air (PLTA) — Kapasitas terpasang Pembangkit Listrik Tenaga Air (PLTA) — T-1. 31. Listrik yang dihasilkan oleh Pembangkit Listrik Tenaga Air (PLTA) — Tenaga Listrik yang dihasilkan oleh Pembangkit Listrik Tenaga Air (PLTA) — T-1.
```

*EN gloss:* Variables 28-31: installed solar PV (PLTS) capacity; electricity generated by solar PV; installed hydropower (PLTA) capacity; electricity generated by hydropower. All T-1.

*Extractor note:* The renewable-energy sub-pillar of a blue economy index is populated entirely by solar and hydropower variables; no ocean-energy variable (tidal, wave, OTEC) appears in the register. The definitions here are circular restatements of the variable names, giving no measurement detail.

**`doc_4_sirusa-metadata_chunk_014`** · SIRUSA metadata/kegiatan/94936, Variabel yang Dikumpulkan nos. 32-38 (retrieved 2026-08-13) · kegiatan-94936 > Variabel (Karakteristik) yang Dikumpulkan, nos. 32-38 · type `data` · maturity `a`

```text
32. Persentase penduduk bekerja di sektor perikanan penerima Program Keluarga Harapan (PKH) — Persentase dari total penduduk yang bekerja di sektor perikanan dan menerima Program Keluarga Harapan — T-1. 33. Jumlah pekerja perempuan di sektor perikanan — Jumlah penduduk perempuan yang ikut terlibat dalam sektor perikanan yang terdiri dari total nelayan perempuan dan pembudidaya ikan perempuan — T-1. 34. Jumlah nelayan dan pembudidaya ikan — Jumlah penduduk yang berprofesi sebagai nelayan dan pembudidaya ikan — T-1. 35. Rata-rata konsumsi kalori ikan per kapita — Rata-rata konsumsi kalori dari ikan oleh setiap individu per hari — T-1. 36. Rata-rata konsumsi protein dari ikan per kapita — Rata-rata konsumsi protein dari ikan oleh setiap individu per hari — T-1. 37. Persentase penduduk bekerja di sektor perikanan yang memiliki jaminan kesehatan — Persentase penduduk yang bekerja di sektor perikanan yang memiliki akses atau kepemilikan jaminan kesehatan, seperti BPJS Kesehatan atau asuransi kesehatan lainnya — T-1. 38. Persentase penduduk pesisir yang hidup di bawah garis kemiskinan — Persentase penduduk yang tinggal di kabupaten atau kota pesisir yang berada di bawah garis kemiskinan terhadap penduduk miskin — T-1.
```

*EN gloss:* Variables 32-38: (32) share of fisheries-sector workers receiving the PKH conditional cash transfer; (33) number of women workers in fisheries, comprising women fishers and women fish farmers; (34) number of fishers and fish farmers; (35) average per-capita daily calorie intake from fish; (36) average per-capita protein intake from fish; (37) share of fisheries-sector workers holding health insurance such as BPJS Kesehatan; (38) share of coastal population below the poverty line, defined as residents of coastal regencies/cities below the poverty line relative to the poor population. All T-1.

*Extractor note:* Variable 38's definition is internally odd — a percentage of coastal poor 'terhadap penduduk miskin' (against the poor population) rather than against total coastal population. Quoted as published; not corrected.

**`doc_4_sirusa-metadata_chunk_015`** · SIRUSA metadata/kegiatan/94936, Variabel yang Dikumpulkan nos. 39-44 (retrieved 2026-08-13) · kegiatan-94936 > Variabel (Karakteristik) yang Dikumpulkan, nos. 39-44 · type `data` · maturity `a`

```text
39. Jumlah SMK kemaritiman — Jumlah Sekolah Menengah Kejuruan (SMK) Kemaritiman (Perikanan dan Kelautan) yang berada di bawah koordinasi Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbudristek) — T-1. 40. Jumlah lulusan sekolah perikanan — Jumlah lulusan satuan pendidikan Kelautan dan Perikanan (Kemaritiman) yang berada di bawah koordinasi Kementerian Kelautan dan Perikanan — T-1. 41. Jumlah peserta pelatihan perikanan — Total jumlah peserta yang mengikuti pelatihan dan penyuluhan kelautan dan perikanan yang mencakup kompetensi Perikanan Tangkap, kompetensi Pembudidayaan Ikan, kompetensi Pengolahan Hasil Perikanan, kompetensi Permesinan Perikanan, Kompetensi Pengelolaan Sumberdaya KP, Kompetensi Pengelolaan Usaha KP, Kompetensi Garam, dan Kompetensi Penyuluh Perikanan — T-1. 42. Persentase penduduk sektor perikanan dengan pendidikan terakhir SMA atau sederajat — Persentase penduduk di sektor perikanan yang memiliki tingkat pendidikan terakhir Sekolah Menengah Atas (SMA) atau sederajat — T-1. 43. Persentase penduduk di sektor perikanan dengan ijazah minimal SMA atau sederajat — Persentase penduduk di sektor perikanan yang memiliki ijazah minimal Sekolah Menengah Atas (SMA)/Sederajat — T-1. 44. Persentase penduduk bekerja di sektor perikanan penerima Program Indonesia Pintar (PIP) — Persentase dari total penduduk di sektor perikanan yang menerima Program Indonesia Pintar — T-1.
```

*EN gloss:* Variables 39-44: (39) number of maritime vocational secondary schools (SMK) under Kemendikbudristek; (40) number of graduates of marine and fisheries education units under MMAF; (41) total participants in marine and fisheries training and extension across the listed competencies (capture fisheries, aquaculture, fish processing, fisheries machinery, marine resource management, marine business management, salt, and fisheries extension); (42) share of fisheries-sector population whose highest attainment is upper-secondary or equivalent; (43) share of fisheries-sector population holding at least an upper-secondary certificate; (44) share of fisheries-sector population receiving the Program Indonesia Pintar education assistance. All T-1.

*Extractor note:* Variables 42 and 43 are near-duplicates ('highest attainment is SMA' versus 'holds at least an SMA certificate') and both are retained in the register and in the Pendidikan sub-pillar variable list. Recorded as a published duplication, not resolved.

