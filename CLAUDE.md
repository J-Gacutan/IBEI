# IBEI × Ocean Accounts

Research project examining whether Indonesia's **Ocean Accounts** (MMAF/KKP + BPS, SEEA-EA aligned)
can serve as statistical infrastructure for the **Indonesia Blue Economy Index** (IBEI, BAPPENAS +
EU ARISE+). Not a software repo — this is a research and writing workspace producing a concept
note, a mapping annex, and (in progress) a journal article.

## Layout

| Folder | Contents | Status |
|---|---|---|
| [00-background/](00-background/) | Primary source material on the IBEI | Reference only |
| [01-research-prompts/](01-research-prompts/) | Five deep-research briefs + a round 2 pass + suite README | Complete |
| [02-research-findings/](02-research-findings/) | Returned deep-research reports, numbered to match their prompt | All 5 returned, plus 03 round 2 |
| [03-outputs/](03-outputs/) | Deliverables: concept note, Annex A mapping, HTML report + diagram | Pre-research, needs revision |
| [04-manuscript/](04-manuscript/) | Journal article: [PRD](04-manuscript/PRD-journal-article.md), then drafts | Specified (v2), not drafted |
| [05-rag/](05-rag/) | **Tier-1 citation-anchored corpus** over the IBEI's own published documentation: schema, 44-indicator join table, [evidence pack](05-rag/ibei-evidence-pack.md), standing-rules brief, read plan | Built; primary evidence base |

Findings filenames mirror prompt numbers: `01-ibei-specification-findings.md` answers
[01-ibei-specification.md](01-research-prompts/01-ibei-specification.md). Keep that convention.
A round 2 pass adds `-round2` to both names.

**Research is complete.** All five prompts returned, and prompt 03's round 2 pass has closed the
out-of-sequence defects. Only synthesis remains: correcting 03-outputs, and drafting the manuscript
per its [PRD](04-manuscript/PRD-journal-article.md). See
[00-README-research-suite.md](01-research-prompts/00-README-research-suite.md) for headline results.

**Project constraint:** direct engagement with Indonesian government agencies is out of scope. No
data request, interview, or agency correspondence. Published or publishable documents remain fair
search targets.

**Two former limitations are void.** Earlier versions of this file recorded the unpublished BAPPENAS
methodological handbook and the non-retrievable 2022 MMAF pilot reports as permanent limitations.
Both premises are false: the files are in [00-background/](00-background/).

- The **Juknis Pedoman IBEI** (BAPPENAS 2025, 120pp) *is* the methodological handbook. It carries
  the indicator register, the calculation stages, the published weights and a sensitivity analysis.
- All three **MMAF 2022 reports** are present, including the Gili Matra pilot study, and all three
  have clean text layers at roughly 1,500 characters per page. No OCR is needed anywhere in the
  workspace.

Any finding that reasons from the absence of either source is unsafe on that point and must be
re-checked against the primary document before its conclusion is carried into the manuscript.

## Evidence precedence

**[05-rag/](05-rag/) outranks every deep-research finding.** It is a 199-chunk, folio-located
extraction over the IBEI's *own published documentation* — the BAPPENAS Juknis (2025), the IBEI
Report 2024 (Dec 2025 revision), Rinaldi et al. 2024, SIRUSA metadata — plus a complete 44-row
indicator join table giving each indicator's verbatim `Data Pembentuk Indikator`. Work from the
per-slice files in [05-rag/rag-parts/](05-rag/rag-parts/), not the 473 KB assembled schema. Cite the
printed folio with the PDF page in brackets: `p. 94 [pdf 104]`. Quote the Indonesian `content` field;
`content_en` is a drafting gloss, never a quotation source.

Four findings-based claims the corpus **refutes** — do not repeat them:

1. IBEI weights and the PCA architecture are *not* reconstructed. They are published (Juknis
   pp. 63–66 and 93–96 [pdf 73–76, 103–106]): three-stage PCA, PC1 loading-factor weights, Z-score
   standardisation at every stage, and weights at pillar, sub-pillar and variable level.
2. Imputation is *not* mean substitution. The Report publishes an ML framework predicting missing
   values from socio-economic proxies (pp. 64–66 [pdf 76–78]). Any "Z = 0 variance collapse"
   argument is void.
3. Rinaldi et al. 2024 is *not* evidence about IBEI aggregation. It builds its own index with
   HDI-style min–max/arithmetic/geometric aggregation and uses PCA only against multicollinearity.
4. The register is complete at **44** indicators. Drop all "36 of 44" language.

## The central caveat

Everything in [03-outputs/](03-outputs/) predates the deep research. The concept note and Annex A
assert a provisional mapping — roughly 61% of IBEI indicators derivable from ocean accounts —
built on *assumed* indicator definitions. **That claim is refuted**, and so is the figure that
replaced it. Finding 03 round 2 re-scored derivability as 0% Full / 2.8% Partial / 8.3% Minimal /
88.9% None, but over a **36-indicator denominator that does not exist**: the register is complete at
44. Per Evidence precedence claim 4, drop all "36 of 44" language, and do not carry the 2.8% forward
as though the denominator were sound. The figure moved three times, 61% → 39% → 2.8%, each time an
artefact of a different assumed indicator set. **No derivability percentage in the findings carries
argumentative weight.** Any published re-scoring must be recomputed over all 44 register rows.

**Treat 03-outputs as prior work to be corrected, never as a source to cite.** Round 1 of finding 03
is likewise superseded on mapping and normalisation: its min–max normalisation argument is void,
because the IBEI applies Z-score standardisation at every stage of a three-stage PCA. Attribute that
to the Juknis (pp. 63–66 and 93–96 [pdf 73–76, 103–106]), **not** to Rinaldi et al. 2024, which
builds its own separate index and is not evidence about IBEI aggregation.

**What is now verified against the primary source.** The register was extracted directly from Juknis
Tabel 1 (pp. 11–13 [pdf 21–23]) into [05-rag/](05-rag/): 44 indicators, numbered 1–44, each with its
`Data Pembentuk Indikator` constituent data preserved verbatim. Cite the register from the Juknis,
not from a finding that reconstructed it.

**One unresolved contradiction inside the source, which the register alone hides.** Tabel 1 prints
**four** pillars, with an Enabler pillar (teknologi and tata kelola) holding indicators 15–18. Tabel
4/5 and Gambar 11 print **three**, placing pariwisata, teknologi and tata kelola as Ekonomi
sub-pillars. Both are in the same handbook. Do not pick a winner, and do not describe the IBEI as
having a settled pillar count without naming which table is being followed. Recorded verbatim as
`doc_1_cross-slice-conflict_chunk_001`.

A re-scoring over all 44 rows must therefore **state which pillar structure it follows**, because
rows 15–18 move between pillars depending on the table chosen. That is a second, independent reason
the 36-row denominator cannot simply be widened to 44 and reused.

## Working conventions

Inherited from the research briefs; apply to all writing in this workspace.

- **Cite or don't assert.** Every definition, date, figure, and institutional arrangement needs a
  locatable source. A source you could not find is reported as unfound, not inferred around.
- **Tag maturity** whenever describing something as existing: (a) published official statistics,
  (b) experimental/pilot compilation, (c) methodology under development, (d) announced but not
  started. The distinction between (a) and (d) carries most of the argument.
- **Label reconstruction, and check first whether it is still needed.** The weights are **published**
  in Juknis Tabel 4–6, so treating them as reconstructed from fragmentary metadata now understates
  the evidence. Pillar contributions are stated as environment 36,9%, economy 32,6%, social 30,5%
  (p. 94 [pdf 104]). The handbook also bands them into Tinggi/Sedang/Rendah tertiles: that banding
  is the document's own simplification and must be attributed to the document, never presented as
  the underlying weight. Where a figure genuinely is reconstructed, say so with a confidence level
  every time it is used.
- **Maturity tags describe the datum, not the document.** A register row specifying a required input
  is not evidence that the input is published: tag it (c) or not applicable, and reserve (a) for a
  datum actually produced and released. Conflating the two was the main defect the 05-rag gate
  caught, and it silently implied all 44 indicators rested on published statistics.
- **Preserve disagreement.** Conflicting sources are presented as conflicts, not silently resolved.
- **No fabricated specificity.** Never invent formulas, weights, hectare figures, or decree
  numbers. Absence of evidence is itself a finding.
- **Search bilingually.** Key documents are Indonesian-only: *indeks ekonomi biru*, *neraca laut*,
  *akun laut*, *neraca ekosistem*, *unit spasial dasar laut*, *peta jalan ekonomi biru*,
  *Satu Data Indonesia*.

## Framing boundary

The relationship under investigation is **statistical infrastructure feeding a policy
instrument**. Do not propose replacing the IBEI with ocean accounts, or subordinating either
framework to the other. Two agencies with distinct statutory mandates are involved (BAPPENAS
plans; MMAF and BPS produce statistics) — arguments that ignore that division are not usable.

## Acronyms

BAPPENAS (Ministry of National Development Planning) · MMAF/KKP (Ministry of Marine Affairs and
Fisheries) · BPS (Statistics Indonesia) · IBEI (Indonesia Blue Economy Index) · OA (Ocean
Accounts) · GOAP (Global Ocean Accounts Partnership) · SEEA-EA (System of Environmental-Economic
Accounting – Ecosystem Accounting) · MBSU (Marine Basic Spatial Unit) · SDI (Satu Data Indonesia)


<!-- BEGIN BEADS INTEGRATION v:1 profile:minimal hash:ca08a54f -->
## Beads Issue Tracker

This project uses **bd (beads)** for issue tracking. Run `bd prime` to see full workflow context and commands.

### Quick Reference

```bash
bd ready              # Find available work
bd show <id>          # View issue details
bd update <id> --claim  # Claim work
bd close <id>         # Complete work
```

### Rules

- Use `bd` for ALL task tracking — do NOT use TodoWrite, TaskCreate, or markdown TODO lists
- Run `bd prime` for detailed command reference and session close protocol
- Use `bd remember` for persistent knowledge — do NOT use MEMORY.md files

## Session Completion

**When ending a work session**, you MUST complete ALL steps below. Work is NOT complete until `git push` succeeds.

**MANDATORY WORKFLOW:**

1. **File issues for remaining work** - Create issues for anything that needs follow-up
2. **Run quality gates** (if code changed) - Tests, linters, builds
3. **Update issue status** - Close finished work, update in-progress items
4. **PUSH TO REMOTE** - This is MANDATORY:
   ```bash
   git pull --rebase
   bd dolt push
   git push
   git status  # MUST show "up to date with origin"
   ```
5. **Clean up** - Clear stashes, prune remote branches
6. **Verify** - All changes committed AND pushed
7. **Hand off** - Provide context for next session

**CRITICAL RULES:**
- Work is NOT complete until `git push` succeeds
- NEVER stop before pushing - that leaves work stranded locally
- NEVER say "ready to push when you are" - YOU must push
- If push fails, resolve and retry until it succeeds
<!-- END BEADS INTEGRATION -->
