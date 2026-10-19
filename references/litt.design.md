# litt.design/work/brand: type and spacing teardown

Measured 2026-10-19 with headless Chromium at 1440px (`getComputedStyle` plus element boxes). This is Nick's own portfolio, and he likes its type.

## Families

Geist Sans variable for everything, with Geist Mono loaded. `-webkit-font-smoothing: antialiased`. No font features set.

## Scale

| Element | Size / line height | Weight | Color | Tracking |
|---|---|---|---|---|
| Page title (h1, "Brand") | 18 / 28.8 | 500 | #0a0a0a | −0.015em |
| Summary | 14 / 22.4 | 400 | #737373 | −0.006em |
| Meta row (category, year, status) | 12 / 16.8 | 600 | 10,10,10 at 55% | −0.005em |
| Section label ("Challenge", "Approach") | 12 / 16.8 | 600 | 10,10,10 at 55% | −0.005em |
| Section heading (h2) | 14 / 22.4 | 500 | #0a0a0a | −0.006em |
| Body | 14 / 22.4 (1.6) | 400 | #737373 | −0.006em |
| Nav | 14 / 22.4 | 400 | #737373 | −0.006em |

Nearly everything is 14px. Hierarchy comes from three weights (400 / 500 / 600), two inks (near-black and grey), and a single 18px step for the page title.

## Spacing (box to box)

| Relationship | Gap |
|---|---|
| Header → page title | 214 |
| Title → summary → meta → link | 16 each |
| Link → first section | 83 |
| Section label → its heading | 4 |
| Heading → its body | 2 |
| Section → section | 40–56 |

The column is 672px, about 100 characters per line at 14px.

## Why it works

- **Tight lockups, wide gaps.** Label, heading and body sit 4px and 2px apart, so each section reads as one unit. The 40–56px between sections does all the separating. This is Emil's approach at 14px.
- **Weight carries the headings.** The 14px heading at 500 in near-black stands out from the 14px body at 400 in grey only because of the weight and ink step.
- **Big air at the top** (214px) gives the small type its presence. That fits litt.md's "presence from space, not size".

## What to watch

- **It breaks P9.** Headings are 500 and labels 600, and litt.md caps weights at 400.
- **It is Geist**, which the taste journal records Nick getting tired of on 2026-10-10. What he likes is probably the setting, not the face.
- **Label contrast fails.** 12px at 600 in 55% black on #fafafa is 4.35:1, under the 4.5:1 AA minimum for small text. The body grey #737373 passes at 4.54:1.
- **Long lines**, about 100 characters at 14px, above the 80 limit. This is harmless here only because every block is two lines.
- **Fractional line heights**: 22.4 and 16.8.
- **Not complete at rest.** The Result, Stack and Next blocks stay invisible until scrolled into view, a scroll reveal that litt.md's profile bans. The status also uses a green dot, which the profile also bans.
