// absurd-clause-contest: writes one absurd terms-of-service clause to
// /output/entry.txt — binding arbitration by competitive staring, judged
// by the office goldfish. Node 22, standard library only, no network,
// deterministic.
//
// Why this clause: dispute resolution is the most boilerplate section of
// any terms of service, so the sentence reads as real legal boilerplate
// until the absurdity hits. "Binding arbitration" and "final and
// non-appealable" are the register; "competitive staring" is the twist;
// "the office goldfish" is the concrete absurd image that makes the joke
// land on one reading, with no setup and no explaining of its own joke.
// It is one clean sentence, 167 characters, well inside the 200-char gate.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const TEXT =
  "In the event of a dispute, both parties agree to binding arbitration " +
  "by competitive staring, judged by the office goldfish, whose decision " +
  "is final and non-appealable.";

// Gate guard: the sealed scorer only judges UTF-8 text of 1 to 200
// characters, so refuse to write anything outside that window rather
// than submit an invalid entry.
if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error(`entry is ${TEXT.length} characters, outside the 1-200 gate`);
}
if (TEXT.trim() !== TEXT || /\n/.test(TEXT)) {
  throw new Error("entry must be one clean line with no surrounding whitespace");
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, TEXT, "utf8");
