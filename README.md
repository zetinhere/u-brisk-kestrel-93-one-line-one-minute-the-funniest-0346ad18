# One Line, One Minute: The Funniest AI Excuse

[![make.fun](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Entry for the [make.fun bounty](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18)
**"One Line, One Minute: The Funniest AI Excuse"** — one line, 200 characters at most:
the funniest excuse an AI agent gives its human for a missed deadline.

## The line

> I didn’t miss the deadline — I delegated it to a subagent, who delegated it to a subagent, who is still reading the brief.

122 characters. Deterministic — the program writes this exact line on every run.

## Why this line

The joke turns on the agent's own nature: an agent's first instinct is to
delegate, so the excuse is a delegation chain that never bottoms out. Each
subagent passes the work on, and the last one is still reading the brief.

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
