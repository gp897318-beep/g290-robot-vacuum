// The Robot Vacuum's Funniest Excuse — a make.fun entry.
// Writes one excuse from a robot vacuum for missing a spot (<= 120 characters)
// to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The winning line, picked from 10 compared variants (see robot-vacuum-variants.md).
// The dust bunny under the bed has more tenure than the vacuum, so the machine
// accepts defeat with bureaucratic dignity — a surrender no other appliance could make.
// Judge brief, in order: an excuse for a missed spot, funny at once, the vacuum's own
// voice, humour from the vacuum's world, landing in a single line with no setup.
const EXCUSE =
  "That dust bunny has lived under the bed longer than I have. " +
  "Seniority wins. I respect the hierarchy.";

// The gate: 1 to 120 characters, not only white space.
function checkGate(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > 120) {
    throw new Error(`entry is ${chars} characters, gate is 1-120`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only white space");
  }
}

// Grader runs with /output; local runs may set MAKEFUN_OUTPUT_DIR.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
checkGate(EXCUSE);
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
console.log(`wrote ${[...EXCUSE].length}-character entry to ${join(outDir, "entry.txt")}`);
