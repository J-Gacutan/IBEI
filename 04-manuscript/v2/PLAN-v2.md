# v2 plan — structural restructure of the IBEI manuscript

**Status:** executed. All five phases complete; see [GATE-REPORT.md](GATE-REPORT.md).
**Scope:** predominantly structural. v2 is an *extraction* from v1, not an edit of it.
**Target:** Marine Policy, 9,000–10,000 words main text, Harvard author–date.

v1 remains frozen at [../drafts/](../drafts/) and is the evidence quarry for v2. Nothing in
`../drafts/` is edited by this plan. Every v2 claim must trace to a v1 line or to
[../../05-rag/](../../05-rag/); no new evidence is gathered.

---

## 1. Why v2 exists

Three defects, all structural rather than argumentative. The argument is sound and the evidence
base is tier-1; the container is wrong.

**1.1 Uniform overrun, so no section can simply be deleted.** Main text is 17,860 words against a
9,000–10,000 target — 1.8×. The overrun is spread evenly, not concentrated:

| v1 § | Words | PRD budget | Ratio |
|---|---|---|---|
| 1 Introduction | 991 | 900 | 1.10 |
| 2 Why compilation is hard | 1,603 | 1,300 | 1.23 |
| 3 What accounts are | 1,171 | 1,000 | 1.17 |
| 4 What Indonesia compiled | 1,795 | 1,200 | 1.50 |
| 5 Mapping: compiled accounts | 2,500 | 1,400 | 1.79 |
| 6 Conditions precedent | 1,970 | 1,200 | 1.64 |
| 7 Mapping: what could be served | 3,223 | 1,900 | 1.70 |
| 8 What supply does not fix | 1,524 | 900 | 1.69 |
| 9 Discussion | 2,216 | 800 | 2.77 |
| 10 Conclusion | 665 | 700 | 0.95 |

Cutting a whole section loses argument. The 47% reduction must come from **consolidation and
demotion to display items**, which is a structural operation.

**1.2 Four results sections where the venue expects one.** §§4–7 total 9,488 words, 53% of main
text, and share one job: reporting the mapping. They also re-state their own criteria internally
(§5.1 defines the membership test 100+ lines into the results) because the Methods sit at the end.
A reader cannot find the method before meeting the findings.

**1.3 Display items are doing none of the work.** Six tables exist, five figures are built in
[../figures/](../figures/), and **the manuscript cites none of its own figures**. Content that
belongs in a table — the conditions-precedent register, the compiled-record inventory, the
extension routes — is carried as prose instead, which is the direct cause of the overrun in §§4, 6
and 7.

A fourth defect, register (28.5-word mean sentence, 22% of sentences over 40 words, 54 appositive
`being` constructions, meta-discourse openers), is handled inside v2 drafting rather than as a
separate pass — see §6.

---

## 2. Target structure

Six sections, IMRaD with the method moved forward. Section numbers restart; v1 numbering is dead.

| v2 § | Title | Words | Sourced from |
|---|---|---|---|
| 1 | Introduction | 900 | v1 §1 |
| 2 | The compilation problem | 1,100 | v1 §2 |
| 3 | Materials and methods | 1,200 | v1 §11 + §5.1 criteria + functional half of §3 |
| 4 | Results | 3,900 | v1 §§4, 5, 6, 7 |
| 4.1 | The compiled record | 700 | v1 §4 |
| 4.2 | Indicators the existing accounts can serve | 1,100 | v1 §5 (less criteria) |
| 4.3 | Extension routes and the weight inversion | 1,300 | v1 §7 |
| 4.4 | Conditions precedent for supply | 800 | v1 §6 |
| 5 | Discussion | 1,900 | v1 §8 + §9 merged |
| 6 | Conclusion | 500 | v1 §10 |
| — | Abstract | 200 | rewritten, not extracted |
| | **Body prose, delivered** | **9,855** | |

**The three structural moves.**

- **Method to the front.** v1 §11 Methods, plus the membership test now buried at v1 §5.1, plus
  the functional argument in v1 §3 (what an account's output structure *is*, since that is what
  the membership test tests against), become one §3 the reader meets before any finding. v1 §3's
  SEEA exposition beyond that functional minimum is cut; it is a primer the venue does not need.
- **One Results section.** v1 §§4–7 become §4.1–4.4 under one heading, in the order
  inventory → matched indicators → extension routes → conditions. Each subsection states its
  finding in its first sentence and cites its display item; the derivation moves to the table or
  to supplementary.
- **One Discussion.** v1 §8 (what supply does not fix) is not a separate finding — it is the
  limitations half of the discussion. Merging §8 and §9 removes the largest single duplication in
  the draft, where §9.1 restates §5 material at length.

---

## 3. Display-item plan

**Display items are specified before prose is written.** Each one absorbs a named block of v1
prose; the drafting budget in §2 assumes that absorption has happened.

| Item | Content | Absorbs from v1 | Status |
|---|---|---|---|
| Table 1 | Compilation-difficulty register | §2 body | exists (§2 L102), extend |
| Table 2 | Tier A at indicator level — verbatim constituent data, account output, gap type | §5 body | exists (§5 L169), keep |
| Table 3 | Extension routes by tier, with weight borne and maturity tag | §7 body | exists (§7 L182), merge with §7 L208 |
| Table 4 | Conditions-precedent register | §6 body — most of it | exists (§6 L129), promote |
| Figure 1 | Compilation chain | §2, §3 prose | built, **uncited** |
| Figure 2 | Leverage inversion | §7.3 prose | built, **uncited** |
| Figure 3 | Weight cascade | §7.1 arithmetic | built, **uncited** |
| Figure 4 | *(absent — number unused in v1)* | — | resolved: renumbered to a contiguous 1–5 |
| Figure 5 | Indicator mapping matrix | §5, §7 | built, **uncited** |
| Figure 6 | Reporting calendar | §6.3 | built, **uncited** |

**Rule:** every figure carried into v2 is cited at first mention in numerical order, or it is cut.
Five built figures with zero citations is a submission-blocking defect, and it is cheaper to fix
during restructure than after. The v1 SEEA account-types table (§3 L77) is cut with §3's primer
material unless §3 needs it as the membership test's reference structure — decide at drafting.

**Supplementary.** S1 (44-row scoring sheet) and S2 (weight workbook) carry over unchanged. Three
new items absorb demoted prose: S3 conditions-precedent long form (v1 §6.2–6.4 derivations), S4
extension-route derivations (v1 §7.1–7.2 arithmetic), S5 compiled-record inventory (v1 §4.2's
three-completenesses treatment).

---

## 4. Extraction method

The 47% cut is where citations and caveats get lost. The defence is to extract claims before
writing prose, not to trim finished paragraphs.

**Phase 1 — claim inventory.** Build [extraction/claim-inventory.md](extraction/claim-inventory.md):
one row per load-bearing claim in v1 main text, carrying its v1 location, its citation (folio +
pdf page), its maturity tag, and a disposition of `keep` / `table` / `supplementary` / `cut`. A
`cut` disposition requires a stated reason. This is the extraction step; §5's gates test against
it.

**Phase 2 — display items.** Build the four tables and settle the figure set against §3 above,
before any v2 prose. Prose is then written to point at them rather than to reproduce them.

**Phase 3 — drafting order.** §3 methods → §4 results → §2 problem → §1 introduction → §5
discussion → §6 conclusion → abstract last. Method first because §4's subsections stop
re-deriving their own criteria only once §3 owns them; abstract last because it must report the
paper that exists.

**Phase 4 — assembly and gates.** A v2 `assemble.sh` mirroring [../assemble.sh](../assemble.sh),
with the word gate hard-failing above 10,000 rather than merely reporting.

---

## 5. Gates

v2 is not accepted until all five pass.

1. **Word count** — body prose of sections 1–6, 9,000–10,000, enforced by `assemble.sh`. The abstract,
   this manuscript's own tables and the reference list are excluded: the venue counts them separately,
   and the budget table above originally counted tables against the text ceiling in error.
2. **Citation parity** — `/citation-checker` over the v2 assembled text against
   [../../05-rag/](../../05-rag/). No claim carried from v1 may arrive uncited.
3. **Caveat parity** — v1 carries 28 `[EVIDENCE GAP]` and 19 `[ASSUMPTION]` tags. Each must appear
   in v2, or in supplementary, or be explicitly retired in the inventory with a reason. Silent
   loss of a caveat during a 47% cut is the main risk this plan exists to prevent.
4. **Non-negotiable claims survive** — the four/three pillar conflict is stated with its locus
   declared wherever weights are computed; no derivability percentage is re-derived or carried
   forward from the findings; every Indonesian account output stays maturity-tagged (b).
5. **Figure citation order** — every figure cited, in order, at first mention.

---

## 6. Register, handled during drafting

Not a separate pass. The measured v1 baseline is mean 28.5 words per sentence, median 27, 22% of
sentences over 40 words, 54 appositive `being` constructions, 192 `, and` splices. v2 targets a
mean under 24 and under 10% over 40 words, measured by the same script at assembly.

Three rules applied while drafting, not retrofitted:

- No appositive `being`. Use a colon, a dash, or a new sentence.
- One claim per sentence where the claim carries a citation.
- Every subsection opens with its finding, not with a description of its own argument.

The v1 house-style directive at [../briefs/HOUSE-STYLE-DIRECTIVE.md](../briefs/HOUSE-STYLE-DIRECTIVE.md)
otherwise governs unchanged.

---

## 7. Out of scope

- No new evidence gathering, and no Indonesian government engagement (project constraint).
- No change to the argument, the tier scoring, or any published weight figure.
- No venue change. Marine Policy register throughout; the Nature-style abstract move in v1 is
  replaced, which is a rewrite and is budgeted as one.
- v1 drafts are not edited. If v1 is found wrong during extraction, the correction is recorded in
  the claim inventory and made in v2 only.
