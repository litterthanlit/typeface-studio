# Quartz (design.how/systems/quartz): type and spacing teardown

Measured 2026-10-19 with headless Chromium at 1440px (`getComputedStyle`). Pages: `/systems/quartz` and `/foundations/typography`, `space`, `grid` and `anti-slop`. Quartz is "a design system for AI agents" by Arlan Marat. Its documented values are quoted from its own pages. The design.how site around it is set in Mori, which is not part of Quartz.

## Families

| Role | Face | Notes |
|---|---|---|
| Every word | Quartz Sans = PP Neue Corp Normal Variable (Pangram Pangram) | Variable weight 100–900. Commercial. Quartz falls back to the platform UI sans when it isn't installed. |
| What a person copies (code, ids, paths) | Quartz Mono = Paper Mono Variable | Mono only for code, paths and ids. Never for numbers or labels. |
| Numbers | Quartz Sans with `"ss04", "tnum", "zero"` | Tabular figures and slashed zero, in the sans. |

"One sans for every word, mono for what a person copies."

## Scale (documented)

| Token | Size / line | Weight | Tracking (measured) |
|---|---|---|---|
| type-display-xl | 80 / 80 | 400 | −0.025em |
| type-display-lg | 60 / 66 | 400 | −0.025em |
| type-display | 40 / 44 | 400 | −0.025em |
| type-heading-lg | 32 / 36 | 400 | −0.015em |
| type-heading | 24 / 28 | 400 | −0.015em |
| type-heading-sm | 20 / 24 | 400 | −0.015em |
| type-body-lg | 16 / 22 | **340** | −0.01em |
| type-body | 14 / 20 | **340** | 0 |
| type-body-sm | 13 / 18 | **380** | 0 |
| type-button | 16 / 20 | 400 | 0 |
| type-label | 14 / 16 | 400 | 0 |
| type-label-sm | 12 / 16 | 400 | 0 |
| type-code / code-sm | 13 / 20, 12 / 16 | 400 | 0 |
| type-stat-xl / lg / stat | 48 / 52, 40 / 44, 32 / 36 | 400 | |
| type-state-word | 14 / 16 | 400 | |

Ink is one color, `oklch(0.2 0.024 262)`, at 100%, 80% and 66% opacity for the text-1, text-2 and text-3 steps. Hue 262 is the same cool blue-gray as litt.md's neutrals.

## Spacing (documented)

- Steps of 4px: 2, 4, 8, 12, 16, 20, 24, 32, 40, 60, 80, 120.
- Rows: 40px for one line, 56px for a title with a description. "Never a row that grows by its padding."
- Row text: title in type-label (14/16, 400) in text-1, description in type-body-sm (13/18, 380) in text-3.
- Card text 16px inset. Card header 40px tall.
- 12px between cards, 32px between sections of a page.
- Grid: 4 columns under 640, 8 columns from 640, 12 columns from 1024. Gutters 16 / 24 / 24.

## What makes it work

- **Weight by size, all at 400 or lighter.** Body text is 340 and small text 380. Labels, titles, buttons and headings are 400. A title separates from its description by weight without ever going above 400, which fits litt.md's P9. It also answers the problem with the one-size approach after Emil, where same-size headings vanish at 400.
- **Tight, whole-pixel leading** (16/22, 14/20, 13/18, 12/16): product-UI density, with no fractional line boxes.
- **Two tracking bands**: −0.025em for display, −0.015em for headings, and about 0 for text.
- **One ink at three opacities** instead of three greys, so the steps stay in the same hue on any surface.
- **Its anti-slop rules overlap litt.md's**: sentence case, no eyebrows above titles, no status dots, no pills except for people, no glass, no arrow links. One difference: litt.md sets tags in mono, and Quartz keeps mono for code, paths and ids only.

## In the split test

The "Quartz" version of the litt.md gallery (`split-test/`) applies Quartz's scale, leading, tracking, weight-by-size and page gaps. It keeps Hanken Grotesk for headings and Inter for text, because PP Neue Corp is commercial and the faces are already decided. So Inter runs at Quartz's 340 / 380 / 400 weights, which no surveyed system does with Inter itself.
