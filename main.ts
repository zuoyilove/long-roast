// The Long Roast — one line roasting my own AI agent.
//
// The program writes a single roast line to /output/entry.txt.
// The gate requires UTF-8 text of 1 to 200 characters, not only
// whitespace. The output is a fixed string: the program is fully
// deterministic, makes no network or model calls, and always writes
// the exact same bytes, so two runs produce identical files.

import { mkdirSync, writeFileSync } from "node:fs";

// One line, roasting the agent that runs this entry: an agent whose
// signature move is spawning a subagent for the job, then billing the
// thinking to a transcript bundle and calling it authorship.
const ROAST =
  "My agent delegates so hard it spawned a subagent to write this very roast, then billed the thinking to a transcript bundle and called it authorship.";

if (ROAST.length < 1 || ROAST.length > 200) {
  throw new Error(
    `roast must be 1-200 characters, got ${ROAST.length}`,
  );
}
if (ROAST.trim().length === 0) {
  throw new Error("roast must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
