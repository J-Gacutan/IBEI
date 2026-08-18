#!/usr/bin/env bash
# Assemble the v2 manuscript from its per-section drafts.
#
#   ./assemble.sh
#
# Unlike v1's script this one HARD-FAILS above the Marine Policy ceiling rather than reporting,
# and prints the register metrics (mean sentence length, share of sentences over 40 words) that
# PLAN-v2.md §6 targets.
#
# WHAT THE GATE COUNTS: body prose of sections 1-6 only. The abstract, this manuscript's own
# tables, and the reference list are all EXCLUDED, per the author's instruction and per the venue's
# convention that these are counted separately from the article text. PLAN-v2.md's original budget
# table counted tables against the text ceiling, which was the wrong measure. Every excluded
# component is still printed below, so the inclusive figure stays visible.

set -euo pipefail
cd "$(dirname "$0")"

MAIN=(
  drafts/section-00-abstract.md
  drafts/section-01-introduction.md
  drafts/section-02-problem.md
  drafts/section-03-methods.md
  drafts/section-04-results.md
  drafts/section-05-discussion.md
  drafts/section-06-conclusion.md
)
SUPP=(
  drafts/supp-S1-scoring-sheet.md
  drafts/supp-S2-weight-workbook.md
  drafts/supp-S3-conditions-longform.md
  drafts/supp-S4-social-and-routes.md
  drafts/supp-S5-compiled-record.md
)

for f in "${MAIN[@]}" "${SUPP[@]}"; do
  [[ -f "$f" ]] || { echo "missing: $f" >&2; exit 1; }
done

mkdir -p output
: > output/manuscript-v2.md
for f in "${MAIN[@]}"; do cat "$f" >> output/manuscript-v2.md; printf '\n\n' >> output/manuscript-v2.md; done
printf '\n---\n\n# Supplementary material\n\n' >> output/manuscript-v2.md
for f in "${SUPP[@]}"; do cat "$f" >> output/manuscript-v2.md; printf '\n\n' >> output/manuscript-v2.md; done

if grep -q '<!--\|DRAFTING NOTE\|TODO' output/manuscript-v2.md; then
  echo "ERROR: drafting scaffolding leaked into the assembled manuscript" >&2
  grep -n '<!--\|DRAFTING NOTE\|TODO' output/manuscript-v2.md >&2
  exit 1
fi

awk '{printf "%d\t%s\n", NR, $0}' output/manuscript-v2.md > output/manuscript-v2-linenumbered.md

abstract=$(wc -w < drafts/section-00-abstract.md)
main_all=0; main_prose=0
for f in "${MAIN[@]}"; do
  [[ "$f" == *abstract* ]] && continue
  main_all=$(( main_all + $(wc -w < "$f") ))
  main_prose=$(( main_prose + $(grep -v '^|' "$f" | wc -w) ))
done
supp=0; for f in "${SUPP[@]}"; do supp=$(( supp + $(wc -w < "$f") )); done

python3 - "$main_all" "$main_prose" "$supp" "$abstract" <<'PY'
import re,sys
main_all,main_prose,supp,abstract=(int(x) for x in sys.argv[1:5])
raw=open('output/manuscript-v2.md').read().split('# 1. Introduction')[1]
body="\n".join(l for l in raw.split("\n") if not l.startswith(('#','|','>','---')))
body=body.split('# Supplementary material')[0]
s=[x for x in re.split(r'(?<=[.!?])\s+',body) if len(x.split())>3]
L=sorted(len(x.split()) for x in s)
mean=sum(L)/len(L); over=100*sum(1 for x in L if x>40)/len(L)
print(f"body prose, ss 1-6     : {main_prose} words   [GATE 9,000-10,000]")
print(f"  + own tables         : {main_all} words   (excluded from gate)")
print(f"abstract               : {abstract} words   (excluded from gate)")
print(f"supplementary          : {supp} words   (excluded from gate)")
print(f"register: mean {mean:.1f} w/sentence  median {L[len(L)//2]}  >40w {over:.1f}%   [target <24 and <10%]")
fail=[]
if not 9000 <= main_prose <= 10000: fail.append(f"word gate: prose {main_prose} outside 9,000-10,000")
if mean >= 24: fail.append(f"register: mean {mean:.1f} >= 24")
if over >= 10: fail.append(f"register: {over:.1f}% over 40 words >= 10%")
if fail:
    print("\nGATE FAIL:"); [print("  -",x) for x in fail]; sys.exit(1)
print("\nGATES PASS")
PY
