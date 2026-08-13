> **Intermediate output** — not the final product.

# Standing rules brief: IBEI tier-1 extraction

Every agent in the `ibei-tier1` workflow reads this file once. Prompts point here rather than
restating it, per `COST-MODEL.md` lever 2.2. Do not re-read it after your first read.

## 1.0 What this build is for

Produce a citation-anchored RAG schema over the **tier-1 IBEI sources only**, restricted to
verified page ranges, plus a join table mapping each of the 44 IBEI indicators to its constituent
data (`Data Pembentuk Indikator`). That join table is the analytical payoff: it is the key against
which ocean-accounts derivability is re-scored.

The prior derivability figures moved 61% to 39% to 2.8% as the indicator set and maturity evidence
were corrected. **No derivability percentage carries argumentative weight on its own.** This build
supplies the evidence to re-score properly, not to defend any earlier number.

## 2.0 Page-range discipline

Never open a whole PDF. Read the pre-cut slice assigned to you in `05-rag/slices/`. All slices were
cut with `pdftotext -layout` from verified ranges; the text layer is clean and column alignment is
preserved. No OCR is required or permitted in this build.

Printed folio to PDF page offsets, already applied in `read-plan.json`:

| Document | Printed to PDF |
|---|---|
| Juknis Pedoman IBEI | +10 |
| IBEI Report 2024 (Dec 2025 revision) | +12 |

When you cite, cite the **printed folio**, with the PDF page in brackets: `p. 11 [pdf 21]`.

## 3.0 Evidence rules, inherited from the project

- **Cite or do not assert.** Every definition, date, figure and institutional arrangement needs a
  locatable source. A source you could not find is reported as unfound, never inferred around.
- **Tag maturity** whenever describing something as existing: (a) published official statistics,
  (b) experimental or pilot compilation, (c) methodology under development, (d) announced but not
  started. The distinction between (a) and (d) carries most of the argument.
- **Label reconstruction.** Where a figure is reconstructed rather than published, say so with a
  confidence level. Note that the Juknis publishes pillar weights directly but simplifies them into
  High/Medium/Low tertiles: record both the percentage and the tertile, and record that the tertile
  is the document's own simplification.
- **Preserve disagreement.** Conflicting sources are presented as conflicts, never silently resolved.
- **No fabricated specificity.** Never invent formulas, weights, hectare figures or decree numbers.
  Absence of evidence is itself a finding.
- Source text is Indonesian. Quote verbatim in Indonesian, then give an English gloss in a separate
  `content_en` field. Do not silently translate in place of quoting.

## 4.0 Framing boundary

The relationship under investigation is **statistical infrastructure feeding a policy instrument**.
Do not propose replacing the IBEI with ocean accounts, or subordinating either framework to the
other. BAPPENAS plans; MMAF and BPS produce statistics. Arguments ignoring that division are unusable.

## 5.0 Output economy

- Write your output to the file path given in your prompt. **Return only a receipt** as your result:
  the path written, the count of records, and up to three flags. Never return chunk or row bodies
  through an agent result: that charges the same text twice.
- Chunks must be self-sufficient. Carry enough surrounding sentence, plus the locator, that a
  reviewer can check the claim from the chunk alone without opening the source.
- Do not paraphrase or summarise source content in the `content` field. Verbatim only.

## 6.0 Tool-call economy

- **One short command, once.** If a shell call does not return, do not reissue variants of it.
  Report it as failed and move on.
- No iterate-to-a-number loops. Tolerances here are wide and no count is grounds for rejection on
  its own. Measure once, state the number, stop. If a count is out of band, flag it and continue.
- Answer verification questions with a one-line `grep` or `python3 -c` over the file. Never re-emit
  a JSON file to inspect it.
- Health metric: under ten tool calls per agent is healthy. Thirty means you are re-reading.

## 7.0 Content validation, mandatory

Any agent writing a file other agents consume must assert on **substance, not shape**: non-empty
bodies, a plausible size per record, and the field names actually read. Fail loudly, refuse to write
the path consumers read, and state which fields were available. A shape check passes silently when
content is missing, and a downstream agent handed an empty file proceeds unverified rather than
complaining. This has already caused a silent failure in production: coverage reported 40 of 40
records, every record was empty, and two document parts were gated against it before anyone noticed.

## 8.0 Chunk record format

```json
{
  "chunk_id": "doc_[N]_chunk_[NNN]",
  "document_id": "doc_[N]",
  "slice_id": "string",
  "section_path": "string",
  "printed_page": "string",
  "pdf_page": 0,
  "content": "verbatim Indonesian text",
  "content_en": "English gloss",
  "chunk_type": "evidence | definition | claim | context | methodology | data",
  "maturity_tag": "a | b | c | d | not_applicable",
  "is_reconstructed": false,
  "reconstruction_note": "string or null",
  "citation": {
    "type": "self",
    "title": "string",
    "author": "string",
    "year": "string",
    "document_type": "policy_document | technical_report | scientific_paper | dataset_documentation",
    "locator": "p. 11 [pdf 21]"
  },
  "tags": ["specific", "domain", "keywords"],
  "needs_web_search": false,
  "suggested_query": null
}
```

Citation type is `self` for nearly every chunk in this build: these documents are the primary
sources for their own methodology. Use `document` only where the slice cites an external source, and
`missing` where a specific factual claim carries no attribution, in which case set
`needs_web_search: true` with a concrete query.

## 9.0 Join table row format

For the indicator register slice only, emit one row per indicator to the join table file:

```json
{
  "indicator_no": 1,
  "pilar": "Ekonomi",
  "subpilar": "Perikanan tangkap dan budidaya",
  "indikator": "verbatim indicator name with unit",
  "data_pembentuk": ["verbatim constituent data item 1", "item 2"],
  "stated_producer": "BPS | KKP | other | not_stated",
  "printed_page": "p. 11",
  "pdf_page": 21
}
```

Do not score derivability. Do not speculate about which ocean account could supply a variable. This
build records what the IBEI requires; scoring happens later against the verified accounts inventory.
