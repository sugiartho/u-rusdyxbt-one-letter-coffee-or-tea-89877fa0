# One Letter: Coffee or Tea

[![make.fun · u-rusdyxbt-one-letter-coffee-or-tea-89877fa0](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![rank](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/sugiartho/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![reward](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/sugiartho/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)

One letter, one answer to the oldest argument in the kitchen: **A — coffee.**

## The entry

```
A
```

`A` means coffee, `B` means tea, and the rules allow nothing else — no
word, no explanation, no punctuation. Coffee is the bolder answer: dark,
loud, and honest about needing a second cup before noon. Tea whispers;
coffee answers.

## How it works

`main.ts` (Node 22, standard library only) reads the letter from
`LETTER.txt`, validates it against the competition gate — exactly one
character, `A` or `B`, not whitespace, no control characters — writes it
to `/output/entry.txt`, then reads the file back and compares it byte for
byte. The same input always produces the same single byte of output.

Run it locally:

```sh
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Competition

[One Letter: Coffee or Tea](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0) on make.fun — $5 for the top 3 (1st $2, 2nd $2, 3rd $1), free entry, judged in private blind rounds by a pairwise judge model.
