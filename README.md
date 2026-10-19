# typeface-studio

Type trials for litt.md. Each trial is a single HTML page, published as a Claude artifact.

## Trials

### `trials/body-face.html`, body face trial

Follows litt.md PR 19. Proposed setup: Hanken Grotesk for display and h1–h4, Inter for reading, body, small and captions. Inter is checked at weight 400 or below and compared with 16 other body faces.

- **Pairing**: pick a body face, a body weight (300–400) and a width, for faces that have a width axis. The preview shows litt.md's real type scale, a settings panel and a table. Press `A` to switch back to the current setup, and `[` / `]` to step through faces.
- **Scales**: the preview switches between three scales with `1`, `2` and `3`.
  - **Today**: litt.md v0.5.
  - **Report**: 40 / 30 / 22 with whole-pixel line heights and the spacing ladder from `reports/Product typography hierarchy and spacing.md`.
  - **One size**: everything 16px with hierarchy from space and ink, after `references/emilkowal.ski.md`.

  Each scale can be marked Love / Maybe / No (`scales/<id>`). A side-by-side section shows the same article in any two scales.
- **Compare**: 17 sans and 6 mono faces at one size and weight. Width, ink and x-height are measured in the browser against Hanken Grotesk 400 (or Geist Mono 400 for monos).
- **Picks**: Love / Maybe / No verdicts with notes, plus a saved pairing. These are stored in the artifact's database (`verdicts/<face-id>`, `pairing/current`). The page also gives a CSS snippet for `tokens.css` and the Google Fonts link.

Width is the advance of one sentence at 17px. Ink is the share of that line's area the glyphs cover.

First measurements (Chromium): Inter at 400 is ink 107 and width 1.05× against Hanken Grotesk 400. Inter matches Hanken's darkness at about 370 and reads lighter at 350. The extra width stays at about 4% at every weight.

### `split-test/`: the real litt.md gallery in six type versions

`split-test/build.sh <litt.md checkout> <work dir>` builds the litt.md gallery from source with relative paths. It then injects the type lab (`typelab-head.html`, `typelab-body.html`) through `inject.mjs`, producing an artifact page plus `dist/assets`.

The type lab overrides litt.md's type tokens, which the gallery's `text-*` utilities read, and a few shared layout gaps. A floating switcher (keys `1`–`6`, `H` to hide) flips between:

| Version | Headings | Text | Hierarchy from |
|---|---|---|---|
| Today | Hanken Grotesk 40 / 32 / 28 / 24 / 20 | Hanken 17 / 15 / 13 / 12 | litt.md v0.5 as it ships |
| Report | Hanken 40 / 30 / 22 | Inter 17 / 15 / 13 / 12, whole-pixel leading | size steps of about 1.33× and the spacing ladder |
| One size | Inter 16 | Inter 16 / 16 / 14 / 12 | space and ink only (`references/emilkowal.ski.md`) |
| Quartz | Hanken 40 / 32 / 24 / 20 | Inter 16 / 14 / 13 / 12 at 340 / 340 / 380 / 400 | weight by size and tight leading (`references/quartz.md`) |
| Portfolio | Inter 18, then 14 at 500 | Inter 14 / 13 / 12, grey body, labels at 600 | weight, two inks and tight lockups, as on litt.design (`references/litt.design.md`); breaks P9 |
| Portfolio 400 | Inter 18, then 14 at 400 | Inter 14 at 350, 13 at 370, labels at 400 | the same layout inside P9, with the weight step made by lighter body text |

Verdicts per version are saved to the artifact's database (`versions/<id>`).
