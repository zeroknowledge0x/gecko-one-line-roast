// One-Line Roast: The Gadget You Use Every Day
// A single deterministic text is written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST: string =
  "My password manager generated a 32-character password, then asked me to remember it. I'll keep in my head the one thing it exists to remember for me.";

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST + "\n", "utf8");
