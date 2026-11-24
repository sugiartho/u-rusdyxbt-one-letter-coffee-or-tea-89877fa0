// One Letter: Coffee or Tea — entry program (Node 22, stdlib only).
//
// Reads the single letter from LETTER.txt, validates it against the
// competition gate (exactly one character, A for coffee or B for tea),
// then writes it to /output/entry.txt and verifies the write byte for
// byte. No network, no dependencies, no randomness: the same input
// always produces the same single byte of output.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const SOURCE = join(HERE, "LETTER.txt");
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUTPUT = join(OUTPUT_DIR, "entry.txt");

function fail(problems) {
  for (const problem of problems) {
    console.error(`invalid: ${problem}`);
  }
  process.exit(1);
}

function loadLetter() {
  let raw;
  try {
    raw = readFileSync(SOURCE, "utf-8");
  } catch (error) {
    fail([`cannot read LETTER.txt: ${error.message}`]);
  }
  return raw;
}

function validateLetter(raw) {
  const problems = [];
  if (raw.length !== 1) {
    problems.push(`letter must be exactly 1 character, got ${raw.length}`);
  }
  if (raw !== "A" && raw !== "B") {
    problems.push(`letter must be A (coffee) or B (tea), got ${JSON.stringify(raw)}`);
  }
  if (raw.trim() !== raw) {
    problems.push("letter must not be whitespace");
  }
  for (const ch of raw) {
    if (ch.charCodeAt(0) < 0x20 || ch.charCodeAt(0) === 0x7f) {
      problems.push(`letter must not contain a control character (U+${ch.charCodeAt(0).toString(16).padStart(4, "0")})`);
    }
  }
  return problems;
}

function emit(letter) {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT, letter, "utf-8");
  const back = readFileSync(OUTPUT, "utf-8");
  if (back !== letter) {
    fail(["read-back mismatch: output differs from the validated letter"]);
  }
  console.log(`wrote ${letter.length} character (${letter}, ${Buffer.byteLength(letter, "utf-8")} byte) to ${OUTPUT}`);
}

const raw = loadLetter();
const problems = validateLetter(raw);
if (problems.length > 0) {
  fail(problems);
}
emit(raw);
