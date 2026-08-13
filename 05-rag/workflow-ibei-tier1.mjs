export const meta = {
  name: 'ibei-tier1-rag',
  description: 'Build a citation-anchored RAG schema and 44-indicator join table from tier-1 IBEI sources, page-range restricted',
  whenToUse: 'After the SOURCES tiering is agreed and before any re-scoring of ocean-accounts derivability or manuscript drafting.',
  phases: [
    { title: 'Slice', detail: 'pdftotext the verified page ranges into 05-rag/slices/' },
    { title: 'Extract', detail: 'one agent per slice, writes rag-parts/<id>.json, returns a receipt only' },
    { title: 'Assemble', detail: 'mechanical merge and write-check in python, no model judgement' },
    { title: 'Gate', detail: 'three merged lenses on a named sample, one round plus a cap of two' },
    { title: 'Pack', detail: 'evidence pack keyed to the 44 indicators for downstream re-scoring' },
  ],
}

const ROOT = '/Users/z5238824/Documents/GitHub/3. Archive/IBEI'
const RAG = `${ROOT}/05-rag`
const BRIEF = `${RAG}/BRIEF-standing-rules.md`

// Lever 2.2: prompts are pointers. Standing rules live in the brief, read once per agent.
const POINTER = `Read the standing rules brief at ${BRIEF} once, and follow it. Read the plan at ${RAG}/read-plan.json for your slice entry. Do not restate either file back to me.`

const RECEIPT = {
  type: 'object',
  required: ['path_written', 'record_count', 'content_ok'],
  additionalProperties: false,
  properties: {
    path_written: { type: 'string' },
    record_count: { type: 'integer' },
    content_ok: { type: 'boolean', description: 'true only if bodies are non-empty and plausibly sized' },
    fields_available: { type: 'array', maxItems: 12, items: { type: 'string' } },
    flags: { type: 'array', maxItems: 3, items: { type: 'string', maxLength: 240 } },
  },
}

const GATE = {
  type: 'object',
  required: ['verdict', 'blocking', 'sample_checked', 'findings'],
  additionalProperties: false,
  properties: {
    verdict: { enum: ['APPROVED', 'REVISION REQUIRED'] },
    blocking: { type: 'integer' },
    sample_checked: { type: 'array', maxItems: 12, items: { type: 'string' }, description: 'chunk_ids actually opened; an honest sample beats an unaffordable census' },
    findings: {
      type: 'array', maxItems: 6,
      items: {
        type: 'object',
        required: ['lens', 'severity', 'chunk_id', 'problem', 'fix'],
        additionalProperties: false,
        properties: {
          lens: { enum: ['evidence', 'argument', 'mechanics'] },
          severity: { enum: ['blocking', 'advisory'] },
          chunk_id: { type: 'string' },
          problem: { type: 'string', maxLength: 400 },
          fix: { type: 'string', maxLength: 400 },
        },
      },
    },
    notes: { type: 'string', maxLength: 600 },
  },
}

// ---------------------------------------------------------------- Phase 1
phase('Slice')
log('Cutting verified page ranges. Mechanical work, cheapest tier.')

const sliced = await agent(
  `${POINTER}

Cut every entry in read-plan.json "slices" to a text file, using exactly:
  pdftotext -layout -f <pdf_from> -l <pdf_to> "<source>" "${RAG}/slices/<slice_id>.txt"
Create the slices directory first. Then assert on substance per brief section 7.0: every file
non-empty, over 500 bytes, and the register slice must contain the string "Data Pembentuk".
Report a byte count per slice. One command per slice, once. Do not open any PDF in full.`,
  { label: 'slice:pdftotext', phase: 'Slice', effort: 'low', schema: RECEIPT },
)

if (!sliced || !sliced.content_ok) {
  log('Slicing failed its content assertion. Stopping rather than extracting from empty files.')
  return { stopped_at: 'Slice', receipt: sliced }
}
log(`Slices written: ${sliced.record_count}. Flags: ${(sliced.flags || []).join('; ') || 'none'}`)

// ---------------------------------------------------------------- Phase 2
// Pipeline, not parallel: no stage here needs cross-slice context, so nothing waits on a barrier.
phase('Extract')

const PDF_SLICES = [
  'juknis-register', 'juknis-weights', 'juknis-method', 'juknis-sensitivity',
  'juknis-cascading', 'report-method', 'report-imputation', 'report-provincial',
]
const MD_SLICES = ['rinaldi-methods', 'sirusa-metadata']

const extractPrompt = (id, isMd) => `${POINTER}

You are extracting slice "${id}". Read ${isMd ? 'the markdown source named in the plan (target only the sections the plan names)' : `the pre-cut text at ${RAG}/slices/${id}.txt`}. Nothing else.

Emit chunks in the brief section 8.0 format to ${RAG}/rag-parts/${id}.json as a JSON array.
Quote Indonesian verbatim in content, gloss in content_en. Tag maturity (a/b/c/d) on every chunk
describing something as existing. Cite the printed folio with the pdf page bracketed.
${id === 'juknis-register' ? `
This slice is the indicator register and is the highest-value target in the build. ALSO write
${RAG}/rag-parts/join-table.json: one row per indicator in brief section 9.0 format, covering all
44 indicators. Preserve the Data Pembentuk Indikator bullets verbatim as separate array items. Do
not score derivability and do not mention ocean accounts.` : ''}
Return a receipt only. Never return chunk bodies.`

const receipts = await pipeline(
  [...PDF_SLICES.map(id => ({ id, isMd: false })), ...MD_SLICES.map(id => ({ id, isMd: true }))],
  item => agent(extractPrompt(item.id, item.isMd), {
    label: `extract:${item.id}`,
    phase: 'Extract',
    schema: RECEIPT,
  }),
)

const good = receipts.filter(Boolean).filter(r => r.content_ok)
const empty = receipts.filter(Boolean).filter(r => !r.content_ok)
log(`Extracted ${good.length} slices, ${good.reduce((n, r) => n + r.record_count, 0)} records. ${empty.length} failed content assertion.`)
if (empty.length) log(`Failed, not silently dropped: ${empty.map(r => r.path_written).join(', ')}`)

// ---------------------------------------------------------------- Phase 3
// Mechanical. Counts are computed in code, never self-reported by a model.
phase('Assemble')

const assembled = await agent(
  `${POINTER}

Merge every file in ${RAG}/rag-parts/ into ${RAG}/ibei-tier1-rag-schema.json with one python3
heredoc. Do not read the parts into your own context and do not re-emit the schema to inspect it.

Schema shape: schema_version "1.0", generated "2026-08-14", source_files[], chunks[],
web_search_candidates[], summary{total_chunks, chunks_by_document, chunks_by_type, citation_types,
maturity_tags, web_search_candidates}. Compute every count in python from the data.

Then run a write-check in the same script and print it: file exists, chunks array non-empty, no
chunk with an empty content field, join-table row count (expect 44, wide tolerance, flag but do not
fail), and count of chunks whose citation.locator lacks a "pdf" reference. Report the numbers you
printed. If the join table is absent, say so plainly rather than substituting an estimate.`,
  { label: 'assemble:merge+check', phase: 'Assemble', effort: 'low', schema: RECEIPT },
)

if (!assembled || !assembled.content_ok) {
  log('Assembly failed its write-check. Stopping before the gate: a gate pass over an unwritten file is the most expensive failure available.')
  return { stopped_at: 'Assemble', receipt: assembled }
}

// ---------------------------------------------------------------- Phase 4
// Lever 2.5: three complementary lenses, merged into one agent. Lever 2.4: one round, cap of two.
phase('Gate')

const gatePrompt = round => `${POINTER}

Gate the schema at ${RAG}/ibei-tier1-rag-schema.json. Round ${round} of at most 2.

Apply three lenses in one pass:
- Evidence: does each sampled chunk say what its locator claims? Is content verbatim, not paraphrased?
- Argument: are maturity tags honest, is any derivability claim smuggled in, is the BAPPENAS/MMAF-BPS
  division of mandate respected, are published weights distinguished from reconstructed ones?
- Mechanics: locator format, empty fields, join-table coverage, counts stated once.

Spot-check at most 10 chunks. Name them in sample_checked and report that as your basis: do not
attempt a census. Query the file with grep or python3 one-liners, not by loading it.
An APPROVED with two findings is a legitimate result. Do not manufacture findings to look thorough.`

let gate = await agent(gatePrompt(1), { label: 'gate:round1', phase: 'Gate', schema: GATE })

if (gate && gate.verdict === 'REVISION REQUIRED' && gate.blocking > 0) {
  const blocking = gate.findings.filter(f => f.severity === 'blocking')
  log(`Gate round 1: ${blocking.length} blocking. Applying fixes, then one final round.`)
  await agent(
    `${POINTER}

Apply these blocking fixes to ${RAG}/ibei-tier1-rag-schema.json in place, and to the matching file
in rag-parts/ so the correction survives a rebuild. Fix only what is listed. Advisory findings pass
through unchanged.

${JSON.stringify(blocking, null, 1)}`,
    { label: 'gate:apply-fixes', phase: 'Gate', effort: 'low', schema: RECEIPT },
  )
  gate = await agent(gatePrompt(2), { label: 'gate:round2', phase: 'Gate', schema: GATE })
  if (gate && gate.verdict === 'REVISION REQUIRED') {
    log('Gate still failing at the cap of 2. Surfacing rather than looping a third round.')
  }
}

// ---------------------------------------------------------------- Phase 5
// Lever 2.3: pre-retrieve once, so downstream drafting does not re-query per indicator.
phase('Pack')

const pack = await agent(
  `${POINTER}

Build the downstream evidence pack at ${RAG}/ibei-evidence-pack.md from the schema and join table.
Read those two files only.

Contents, in this order:
1. The 44 indicators as one markdown table: No, Pilar, Subpilar, Indikator, Data Pembentuk
   (semicolon-separated, verbatim), stated producer, locator. This is the join key for re-scoring.
2. Published weights: pillar percentages with their High/Medium/Low tertiles, sub-pillar and
   variable weights. State plainly that these are published in Juknis Tabel 4-6, and that the
   tertile banding is the document's own simplification.
3. Normalisation and aggregation as actually documented, with locators. Note explicitly that
   Z-score standardisation inside three-stage PCA voids the min-max argument in finding 03 round 1.
4. The imputation finding: what Lampiran 1 states about machine-learning imputation against
   socio-economic proxies, and which indicators depend on it.
5. Evidence gaps, as gaps. Do not fill them by inference.

Reproduce each anchored record verbatim with its chunk_id and locator, so a downstream agent reads
this one file instead of querying the schema per indicator. Assert non-empty bodies before writing.`,
  { label: 'pack:evidence', phase: 'Pack', schema: RECEIPT },
)

return {
  schema: `${RAG}/ibei-tier1-rag-schema.json`,
  evidence_pack: pack ? pack.path_written : null,
  chunks: assembled.record_count,
  join_table_rows: (assembled.flags || []).join('; '),
  slices_extracted: `${good.length} of ${PDF_SLICES.length + MD_SLICES.length}`,
  failed_slices: empty.map(r => r.path_written),
  gate: gate ? { verdict: gate.verdict, blocking: gate.blocking, sample: gate.sample_checked, notes: gate.notes } : 'gate did not return',
  advisory: gate ? gate.findings.filter(f => f.severity === 'advisory') : [],
}
