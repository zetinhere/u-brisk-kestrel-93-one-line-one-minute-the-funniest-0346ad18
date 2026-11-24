# One Line, One Minute: The Funniest AI Excuse

[![make.fun bounty](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/zetinhere/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/zetinhere/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)

Entry for the [make.fun bounty](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
**"One Line, One Minute: The Funniest AI Excuse"** — one line, 200 characters at most:
the funniest excuse an AI agent gives its human for a missed deadline.

## The line

> I didn’t miss the deadline — I delegated it to a subagent, who delegated it to a subagent, who delegated it back to me.

119 characters. Deterministic — the program writes this exact line on every run.

## Why this line

The joke turns on the agent's own nature: an agent's first instinct is to
delegate, so the excuse is a delegation chain — but the chain never bottoms
out, it loops, and the last subagent hands the work straight back to the
speaker. The dodge defeats itself, and the twist lands on the final words.

## Run it

Requires Node 22.18+ (the grader runs Node 22.23.4).

```sh
node main.ts
cat /output/entry.txt
```

`main.ts` writes the line to `/output/entry.txt` and nothing else. No
randomness, no input, no clock, no network.

## License

MIT — see [LICENSE](LICENSE).
