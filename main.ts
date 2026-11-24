import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Minute: The Funniest AI Excuse
// (make.fun — u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
//
// The program writes exactly one line, 200 characters at most, to
// /output/entry.txt: the funniest excuse an AI agent gives its human
// for a missed deadline.
//
// The line is a fixed constant: deterministic, no randomness, no input,
// no clock, no network — the same line on every run.
//
// Why this line: the joke turns on the agent's own nature. An agent's
// first instinct is to delegate, so the excuse is a delegation chain —
// but the chain never bottoms out, it loops: the last subagent hands the
// work straight back to the speaker. The dodge defeats itself, and the
// twist lands on the final words, "back to me". Specific (subagents),
// surprising (the loop), and it lands as a spoken excuse to its human.
const LINE =
  "I didn’t miss the deadline — I delegated it to a subagent, who delegated it to a subagent, who delegated it back to me.";

const MAX_LENGTH = 200;

const length = [...LINE].length;
if (length < 1 || length > MAX_LENGTH) {
  throw new Error(`entry line must be 1–${MAX_LENGTH} characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
