#!/usr/bin/env bash
# Assemble the manuscript from its per-section drafts.
#
# The assembled files in output/ were previously built ad hoc, which meant an edit to a
# draft left them silently stale. Run this after any draft edit.
#
#   ./assemble.sh
#
# Produces output/manuscript-assembled.md and a line-numbered twin for review reference.
# Reference-list insertion is deliberately NOT done here: see beads ibei-lbe. When that
# task lands, add REFERENCES.md to ORDER between the Methods and the supplementary items.

set -euo pipefail
cd "$(dirname "$0")"

ORDER=(
  drafts/section-00-abstract.md
  drafts/section-01.md
  drafts/section-02.md
  drafts/section-03.md
  drafts/section-04.md
  drafts/section-05.md
  drafts/section-06.md
  drafts/section-07.md
  drafts/section-08.md
  drafts/section-09.md
  drafts/section-10.md
  drafts/section-11-methods.md
  drafts/supplementary-table-S1-scoring-sheet.md
  drafts/supplementary-data-S2-weight-workbook.md
)

for f in "${ORDER[@]}"; do
  [[ -f "$f" ]] || { echo "missing: $f" >&2; exit 1; }
done

mkdir -p output
: > output/manuscript-assembled.md
for f in "${ORDER[@]}"; do
  cat "$f" >> output/manuscript-assembled.md
  printf '\n\n' >> output/manuscript-assembled.md
done

# Refuse to publish drafting scaffolding. House-style tags ([ASSUMPTION] etc.) are
# permitted here and are stripped at submission instead — see beads ibei-6x9.
if grep -q '<!--\|DRAFTING NOTE' output/manuscript-assembled.md; then
  echo "ERROR: drafting scaffolding leaked into the assembled manuscript" >&2
  grep -n '<!--\|DRAFTING NOTE' output/manuscript-assembled.md >&2
  exit 1
fi

awk '{printf "%d\t%s\n", NR, $0}' output/manuscript-assembled.md \
  > output/manuscript-assembled-linenumbered.md

main=$(awk '/^# Methods/{exit} {print}' output/manuscript-assembled.md | wc -w | tr -d ' ')
total=$(wc -w < output/manuscript-assembled.md | tr -d ' ')
echo "assembled ${#ORDER[@]} files"
echo "main text (to Methods): ${main} words   [Marine Policy target 9,000-10,000]"
echo "whole file:             ${total} words"
