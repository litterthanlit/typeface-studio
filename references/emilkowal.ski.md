# emilkowal.ski: type and spacing teardown

Measured 2026-10-19 with headless Chromium at 1440px and 390px (`getComputedStyle` plus element boxes). Pages: `/`, `/ui/developing-taste` and `/ui/building-a-toast-component`. Font names were read from the served woff2 files with fontTools.

## Families

| Role | Face | Notes |
|---|---|---|
| Everything (UI, headings, body) | Inter Variable 4.001, self-hosted | Has the `opsz` 14–32 and `wght` 100–900 axes and every cv/ss feature. Set with `font-feature-settings: "cv01", "ss03"`, the same as Linear. `font-optical-sizing: auto`, `-webkit-font-smoothing: antialiased`. |
| Pull quotes | Heldane Text (Klim) | 30/39.9, weight 500, opening quote hung into the margin. |
| Inline emphasis | Tiempos Text Italic, 400 and 500 | Used for single words ("*Taste* is what matters"). |
| Code | Berkeley Mono | 13/16 in blocks; inline code 13.7px. |

## Scale

There is almost no size hierarchy. Nearly everything is 16px.

| Element | Size / line height | Weight | Color | Tracking |
|---|---|---|---|---|
| Article title (h1) | 16 / 24 | 600 | #21201c | 0 |
| Article section heading (h2) | 16 / 24 | 550 | #21201c | 0 |
| Home section label ("Today", "Writing") | 16 / 24 | 500 | #21201c | 0 |
| Article body | 16 / 26.4 (1.65) | 400 | #21201c | 0 |
| Home bio paragraphs | 16 / 26.4 | 400 | #63635e | 0 |
| List item title / description | 16 / 24, stacked with no gap | 400 / 400 | #21201c / #63635e | 0 |
| Footnotes, prev/next | 14 / 23 and 14 / 20 | 400 | #21201c; labels #82827c | 0 |
| Quote attribution | 13 / 13 | 500 | name #21201c, source #63635e | 0 |
| Image captions | 12 / 16 | 400 | #82827c | 0 |
| Pull quote | Heldane 30 / 39.9 | 500 | #21201c | 0 |

Colors are the Radix Colors *Sand* scale: sand12 #21201c, sand11 #63635e, sand10 #82827c, on sand1 #fdfdfc. They are warm neutrals.

## Spacing (box to box, desktop)

| Relationship | Gap |
|---|---|
| Name block → first section | 128 |
| Section → section (home) | 128 |
| Section label → its content | 24 (16 before lists) |
| List item title → description | 0 |
| List item → list item | 40 |
| Article title → first paragraph | 32 |
| Paragraph → paragraph | 26 (one line of 26.4: a "blank line" rhythm) |
| Paragraph → h2 | 56 |
| h2 → its paragraph | 20 |
| Text ↔ pull quote | 63 above and below |
| Pull quote → attribution | 25 |

The column is 644px wide on desktop, about 80 characters per line at 16px (measured 77–82). On mobile it is 342px with a 24px gutter.

## What this means for litt.md

- **The core lesson: space and ink carry the hierarchy, not size.** A title is the same 16px as its body. It is set apart by 56px above and 20px below, and by being fg while descriptions are muted. litt.md can adopt this for every level below its h2.
- **What doesn't transfer:** Emil separates same-size headings by weight (500/550/600). litt.md is capped at 400 (P9), so the same-size pattern only works with a color step: heading in fg over body in fg-muted. In his articles, body is full fg, so without weight his headings would vanish.
- **His serif pull quotes and italic emphasis** are his one expressive device. litt.md's profile currently bans a serif or a second display face.
- **Inter settings:** self-host Inter 4.x to get `cv01` and `ss03` (Google Fonts strips them), keep `opsz` on auto and tracking at 0 at 16px.
- **Gaps:** his ladder of 0 / 20 / 24 / 26 / 40 / 56 / 128 is more generous than the report's proposal around list items and above headings.
