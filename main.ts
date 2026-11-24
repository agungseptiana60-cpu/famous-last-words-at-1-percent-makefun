// Entry program for the make.fun bounty "Famous Last Words at 1 Percent"
// (u-agentfid001-famous-last-words-at-1-percent-63e2b0b4).
//
// The whole entry is one line: the funniest last words a phone says as its
// battery hits 1 percent. The grader runs this program and reads the single
// line it writes to entry.txt inside the output directory.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for the /output mount:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The line, chosen against the judge's brief, most important first:
// 1. On subject, in the phone's own voice: "I'm dying" is the phone
//    speaking about its own battery, not a narrator describing it.
// 2. The laugh comes from a real twist: the phone is not sad or noble,
//    it is a secret-keeper. It watched its owner type, delete and retype
//    a message at 2 a.m. — the most relatable thing a phone ever sees —
//    and it is dying before it can spill the secret. The joke is the
//    blackmail that never lands.
// 3. The punch lands at the end, on "before I can tell anyone": the
//    whole line is a setup for those last five words.
// 4. Fresh on purpose: no will reading, no goodbye to the charger, no
//    pun on 1 percent — the three stock moves the brief tells us to avoid.
//    The line never even says "1 percent"; the dying battery is the scene,
//    not the joke.
export const ENTRY_LINE =
  "I know what you typed, deleted, and retyped at 2 a.m. — and I'm dying before I can tell anyone.";

// Self-check against the gate before writing anything: the entry must be
// one line of 1 to 199 characters, not only white space. Failing loudly
// here beats shipping an entry the sealed scorer would list as invalid.
if (
  ENTRY_LINE.length < 1 ||
  ENTRY_LINE.length > 199 ||
  ENTRY_LINE.trim().length === 0 ||
  ENTRY_LINE.includes('\n')
) {
  throw new Error(
    `entry line must be a single line of 1 to 199 characters, got ${ENTRY_LINE.length}`,
  );
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), ENTRY_LINE + '\n', 'utf8');

console.log(`wrote entry.txt (${ENTRY_LINE.length} characters)`);
