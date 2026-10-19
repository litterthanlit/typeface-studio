# Product typography hierarchy and vertical spacing: how mature design systems structure type scales and the space around text

Method note: most values below were read from the systems' own published token or source files (npm packages served via unpkg, Apple's HIG JSON data feed, the Android/Compose source), not from blog summaries. Package versions are pinned in the URLs (@carbon/type 11.40.0, @material/web 2.3.0 tokens v0_192, @primer/primitives 10.7.0, @atlaskit/tokens 20.6.1, @shopify/polaris-tokens 9.4.2, @radix-ui/themes 3.2.1, tailwindcss 4.1.11, @tailwindcss/typography 0.5.16). Some of these may be one or more minor releases behind the newest, but these type tokens have stayed the same for a long time. Carbon's typography page shows "Last updated Sep 29, 2026", and the newest entry in Apple HIG Typography's change log is December 16, 2025. Unless stated otherwise, px values are computed as size × unitless line-height.

## 1. Type scale construction: modular ratios vs hand-tuned steps, step counts, adjacent-heading gaps, largest-heading-to-body jump

### Takeaway
None of the systems surveyed uses a pure geometric ("modular") ratio. Carbon uses an additive formula. Material 3, Apple, Atlassian, Polaris, Primer, Radix and Tailwind ship hand-tuned, mostly even-pixel steps. Several systems have adjacent heading tokens of 32/28/24 (Material 3 headline L/M/S, Atlassian heading xxlarge/xlarge/large, Radix steps 7/6). But the long-form heading sets, where h1/h2/h3 actually sit next to each other on a page (Tailwind prose, GitHub markdown, Carbon productive headings, Primer), use bigger jumps of about 1.2–1.5×, and most of them add bold on top. The largest product heading is usually about 2.0–2.3× body, and display/marketing sizes go to roughly 2.5–3.6× body or more.

### Cited Findings
**IBM Carbon**
- Carbon's type scale comes from a single formula, `Xn = Xn-1 + {INT[(n-2)/4] + 1} * 2`, with y₀ = 12px. The increment grows by 2px every four steps. That gives 12, 14, 16, 18, 20 (+2), then 24, 28, 32, 36 (+4), then 42, 48, 54, 60 (+6), then 68, 76, 84, 92 (+8), and so on up to 156. The source ships 23 steps — [Carbon typography overview](https://carbondesignsystem.com/elements/typography/overview/); [@carbon/type scale.js](https://unpkg.com/@carbon/type@11.40.0/src/scale.js)
- Carbon has two type sets. The productive set has a base size of 14px and the expressive set 16px. Productive style names end in -01 and expressive in -02 — [Carbon type sets](https://carbondesignsystem.com/elements/typography/type-sets/)
- Carbon's productive headings, size/line-height/weight, from source:
  - heading-01: 14/20, semibold, +0.16px
  - heading-compact-01: 14/18, semibold
  - heading-02: 16/24, semibold
  - heading-compact-02: 16/22, semibold
  - heading-03: 20/28, **regular**
  - heading-04: 28/36, **regular**
  - heading-05: 32/40, **regular**
  - heading-06: 42/≈50 (lh 1.199), **light**
  - heading-07: 54/≈64 (lh 1.199; docs state 64px), **light**
  
  The productive heading set skips 24px, so it runs 20 → 28 → 32 → 42 → 54 — [@carbon/type styles.js](https://unpkg.com/@carbon/type@11.40.0/src/styles.js); [Carbon type sets](https://carbondesignsystem.com/elements/typography/type-sets/)
- Carbon's fluid/expressive styles change size at each breakpoint:
  - fluid-heading-05: 32/1.25 → md 36/1.22 (light) → lg 42/1.19 → xlg 48/1.17 → max 60
  - fluid-display-01: 42/1.19 → lg 54 → xlg 60/1.17 → max 76/1.13
  - fluid-display-04: 42/1.19 → md 68/1.15 → lg 92/1.11 → xlg 122/1.07 → max 156/1.05
  - fluid-paragraph-01: 24/1.334 light → lg 28 → max 32
  
  Carbon says the fluid styles are "primarily used in web pages" and should not be used inside a container — [@carbon/type styles.js](https://unpkg.com/@carbon/type@11.40.0/src/styles.js); [Carbon type sets](https://carbondesignsystem.com/elements/typography/type-sets/)

**Material 3**
- Material 3 baseline typescale tokens (size/line-height px, tracking px, weight):

  | Style | Size/line-height | Tracking | Weight |
  |---|---|---|---|
  | display-large | 57/64 | −0.25 | 400 |
  | display-medium | 45/52 | 0 | 400 |
  | display-small | 36/44 | 0 | 400 |
  | headline-large | 32/40 | 0 | 400 |
  | headline-medium | 28/36 | 0 | 400 |
  | headline-small | 24/32 | 0 | 400 |
  | title-large | 22/28 | 0 | 400 |
  | title-medium | 16/24 | +0.15 | 500 |
  | title-small | 14/20 | +0.1 | 500 |
  | body-large | 16/24 | +0.5 | 400 |
  | body-medium | 14/20 | +0.25 | 400 |
  | body-small | 12/16 | +0.4 | 400 |
  | label-large | 14/20 | +0.1 | 500 |
  | label-medium | 12/16 | +0.5 | 500 |
  | label-small | 11/16 | +0.5 | 500 |

  That is 15 styles (5 roles × 3 sizes). Regular = 400 and medium = 500 — [@material/web md-sys-typescale tokens](https://unpkg.com/@material/web@2.3.0/tokens/v0_192/_md-sys-typescale.scss); [md-ref-typeface weights](https://unpkg.com/@material/web@2.3.0/tokens/v0_192/_md-ref-typeface.scss)
- Material 3 Expressive adds an "Emphasized" twin for each style, with the same size and line height but a heavier weight:
  - Display, headline, title and body Emphasized move to Medium (500). Label-large Emphasized is Bold.
  - display-large-emphasized tracking is 0, where the baseline is −0.25px.
  - body-large-emphasized tracking is +0.15sp.
  
  — [Compose Material3 TypeScaleTokens.kt (androidx-main)](https://android.googlesource.com/platform/frameworks/support/+/refs/heads/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/tokens/TypeScaleTokens.kt)

**Apple HIG**
- iOS/iPadOS Dynamic Type at the "Large (default)" size, size/leading in pt:

  | Style | Size/leading | Weight | Emphasized weight |
  |---|---|---|---|
  | Large Title | 34/41 | Regular | Bold |
  | Title 1 | 28/34 | Regular | Bold |
  | Title 2 | 22/28 | Regular | Bold |
  | Title 3 | 20/25 | Regular | Semibold |
  | Headline | 17/22 | **Semibold** | Semibold |
  | Body | 17/22 | Regular | Semibold |
  | Callout | 16/21 | Regular | Semibold |
  | Subhead | 15/20 | Regular | Semibold |
  | Footnote | 13/18 | Regular | Semibold |
  | Caption 1 | 12/16 | Regular | Semibold |
  | Caption 2 | 11/13 | Regular | Semibold |

  That is 11 styles — [Apple HIG Typography](https://developer.apple.com/design/human-interface-guidelines/typography)
- macOS built-in styles, size/line-height in pt:
  - Large Title 26/32
  - Title 1 22/26
  - Title 2 17/22
  - Title 3 15/20
  - Headline 13/16 (Bold)
  - Body 13/16
  - Callout 12/15
  - Subheadline 11/14
  - Footnote 10/13
  - Caption 1 10/13
  - Caption 2 10/13 (Medium)
  
  Apple's default/minimum text sizes are: iOS 17/11pt, macOS 13/10pt, visionOS 17/12pt, watchOS 16/12pt, tvOS 29/23pt — [Apple HIG Typography](https://developer.apple.com/design/human-interface-guidelines/typography)

**GitHub Primer**
- Primer functional typography tokens, with px computed:

  | Token | Size/line-height | Weight | Primer's description |
  |---|---|---|---|
  | display | 40/1.4 (56) | medium 500 | "Hero-style text for brand to product transition pages. Utilize Title (large) styles on narrow viewports." |
  | title-large | 32/1.5 (48) | semibold | |
  | title-medium | 20/1.6 (32) | semibold | "Default page title. The 32px-equivalent line-height matches with button and other medium control heights." |
  | title-small | 16/1.5 (24) | semibold | |
  | subtitle | 20/1.6 (32) | regular | |
  | body-large | 16/1.5 (24) | | "User-generated content, markdown rendering" |
  | body-medium | 14/1.4285 (20) | | "Default UI font" |
  | body-small | 12/1.6666 (20) | | |
  | caption | 12/1.3333 (16) | | "...single-line scenarios, as the small sizing doesn't pass accessibility requirements" |
  | codeBlock | 13/1.5385 (20) | | |

  — [@primer/primitives typography.css](https://unpkg.com/@primer/primitives@10.7.0/dist/css/functional/typography/typography.css)

**Atlassian**
- Atlassian typography tokens. All headings are weight 653 and all body/code are 400:
  - Headings: xxlarge 32/36, xlarge 28/32, large 24/28, medium 20/24, small 16/20, xsmall 14/20, xxsmall 12/16
  - Body: large 16/24, body 14/20, small 12/16
  - Metric: large 28/32, medium 24/28, small 16/20
  - Code: 0.875em/1
  
  — [@atlaskit/tokens atlassian-typography (raw tokens)](https://unpkg.com/@atlaskit/tokens@20.6.1/dist/esm/artifacts/tokens-raw/atlassian-typography.js)

**Shopify Polaris**
- Polaris text tokens (font Inter), size/line-height px, weight, tracking:

  | Token | Size/line-height | Weight | Tracking |
  |---|---|---|---|
  | heading-3xl | 36/48 | bold 700 | −0.54px |
  | heading-2xl | 30/40 | bold | −0.3px |
  | heading-xl | 24/32 | bold | −0.2px |
  | heading-lg | 20/24 | semibold 650 | −0.2px |
  | heading-md | 14/20 | semibold | 0 |
  | heading-sm | 13/20 | semibold | 0 |
  | heading-xs | 12/16 | semibold | 0 |
  | body-lg | 14/20 | regular **450** | 0 |
  | body-md | 13/20 | regular 450 | 0 |
  | body-sm | 12/16 | regular 450 | 0 |
  | body-xs | 11/12 | regular 450 | 0 |

  Polaris names its weights regular 450, medium 550, semibold 650, bold 700 — [Polaris text.js](https://unpkg.com/@shopify/polaris-tokens@9.4.2/dist/cjs/src/themes/base/text.js); [Polaris font.js](https://unpkg.com/@shopify/polaris-tokens@9.4.2/dist/cjs/src/themes/base/font.js); [Polaris size.js](https://unpkg.com/@shopify/polaris-tokens@9.4.2/dist/cjs/src/size.js)

**Radix Themes**
- Radix Themes has a 9-step scale. Radix says: "Every step has a corresponding font size, line height and letter spacing value which are all designed to be used in combination."

  | Step | Size | Text line-height | Heading line-height | Tracking |
  |---|---|---|---|---|
  | 1 | 12 | 16 | 16 | +0.0025em |
  | 2 | 14 | 20 | 18 | 0 |
  | 3 | 16 | 24 | 22 | 0 |
  | 4 | 18 | 26 | 24 | −0.0025em |
  | 5 | 20 | 28 | 26 | −0.005em |
  | 6 | 24 | 30 | 30 | −0.00625em |
  | 7 | 28 | 36 | 36 | −0.0075em |
  | 8 | 35 | 40 | 40 | −0.01em |
  | 9 | 60 | 60 | 60 | −0.025em |

  Body default is step 3 with line-height 1.5 — [Radix Themes typography docs](https://www.radix-ui.com/themes/docs/theme/typography); [Radix tokens base.css](https://unpkg.com/@radix-ui/themes@3.2.1/tokens/base.css)

**Tailwind**
- Tailwind v4 default font sizes (13 steps), size/line-height px:
  - xs 12/16, sm 14/20, base 16/24, lg 18/28, xl 20/28
  - 2xl 24/32, 3xl 30/36, 4xl 36/40
  - 5xl 48/1, 6xl 60/1, 7xl 72/1, 8xl 96/1, 9xl 128/1
  
  No ratio is declared in the source; the values are listed one by one — [tailwindcss theme.css](https://unpkg.com/tailwindcss@4.1.11/theme.css)
- Tailwind Typography "prose" (base 16px) heading sizes are h1 36, h2 24, h3 20, h4 16 (= body), with weights h1 800, h2 700, h3 600, h4 600. In prose-lg (18px body) the sizes are h1 48, h2 30, h3 24, h4 18 — [@tailwindcss/typography styles.js](https://unpkg.com/@tailwindcss/typography@0.5.16/src/styles.js)

**GitHub markdown**
- In GitHub markdown CSS the body is 16px/1.5. Headings are h1 2em (32px), h2 1.5em (24px), h3 1.25em (20px), h4 1em, h6 .85em in `fgColor-muted`. All headings are semibold 600 with line-height 1.25, and h1/h2 also get a bottom border — [github-markdown-css](https://unpkg.com/github-markdown-css@5.8.1/github-markdown.css)

**Modular scales (secondary sources)**
- Common modular-scale ratio names are minor third 1.2, major third 1.25 and perfect fourth 1.333. I found these only in secondary sources and calculators, not in any of the surveyed systems' documentation — [Cieden: type scale types](https://cieden.com/book/sub-atomic/typography/different-type-scale-types)

### Inferences
- **Adjacent-step ratios I computed:**

  | System | Heading sizes | Adjacent ratios |
  |---|---|---|
  | Material 3 headline L→M→S | 32→28→24 | 1.143, 1.167 |
  | Material 3 display L→M→S | 57→45→36 | 1.267, 1.25 |
  | Apple iOS titles | 34→28→22→20 | 1.214, 1.273, 1.10 (Title 3 → body 1.176) |
  | Carbon productive | 54→42→32→28→20 | 1.286, 1.312, 1.143, 1.40 |
  | Primer | 40→32→20 | 1.25, 1.60 |
  | Tailwind prose | 36→24→20→16 | 1.50, 1.20, 1.25 |
  | GitHub markdown | 32→24→20→16 | 1.333, 1.20, 1.25 |
  | Polaris | 36→30→24→20 | 1.20, 1.25, 1.20 |
  | Atlassian | 32→28→24→20 | 1.143, 1.167, 1.20 |
  | litt.md | 40→32→28→24→20 | 1.25, 1.143, 1.167, 1.20 |

- **Where 32/28/24 appears and how it is used.** Atlassian uses 32/28/24 at weight 653 (bold). Material 3 uses it at 400 as size variants inside one "headline" role. The sets where the levels share a page (prose, markdown) don't step by 1.14–1.17 at all, and they also add bold. So litt.md's h1→h2 (32→28, 1.143) and h2→h3 (28→24, 1.167) are the closest steps in its heading set, and they have no weight change to back them up. This is the weakest point of the scale for single-weight hierarchy.
- **Largest heading vs body:**
  - Apple Large Title:Body = 34/17 = 2.0, and macOS 26/13 = 2.0.
  - Material 3 headline-large:body-large = 2.0, and display-large:body-large = 3.56.
  - Carbon heading-05 (32):body-01 (14) = 2.29.
  - Primer title-large (32):body-medium (14) = 2.29, and display:body-medium = 2.86.
  - Tailwind prose h1:body = 2.25, and GitHub markdown h1:body = 2.0.
  - litt.md h1:body = 32/15 = 2.13 and display:body = 2.67. Both are inside the normal range, and h1:reading (32/17) = 1.88.
- **Step counts.** Systems ship between 9 steps (Radix) and 15 styles (Material 3), or 30 with Material 3's Emphasized twins. Carbon's additive scale keeps even-pixel steps of +2 up to 20px, then +4 up to 36px. That is close to litt.md's 4px gaps between 20 and 32, but Carbon skips 24 in its productive heading set.

### Gaps
- I did not find any surveyed system's documentation explaining *why* it chose specific heading steps, or giving a perceptual threshold for "distinct level". Material 3's prose guidance on when to use headline L vs M vs S (m3.material.io is JS-rendered) was not retrieved, so I can't confirm whether Material 3 intends 32/28/24 to appear together on one screen.
- I did not verify whether Shopify's 2025 move to Polaris web components changed these tokens. The values above come from the polaris-tokens 9.4.2 package.

## 2. Line height rules: tightening with size, whole-pixel / 4px-grid line heights, UI vs long-form

### Takeaway
Every system tightens the line-height *ratio* as size grows. Typical values are about 1.33 at 12px, 1.43 at 14px, 1.5 at 16px, around 1.33 at 24px, around 1.25 at 32px, about 1.1–1.2 at 40–57px, and 1.0–1.05 for very large display text. Almost all of them express line heights as whole pixels, usually on a 4px grid. Ratios like 1.28572 or 1.4285 are just whole pixels written as a ratio (18/14, 20/14). Long-form reading text runs looser than UI text: about 1.65–1.78 in Tailwind prose, compared with 1.29–1.5 for UI text.

### Cited Findings
- **Material 3** line heights are all whole px on a 4px grid: 16/24, 14/20, 12/16, 11/16, 22/28, 24/32, 28/36, 32/40, 36/44, 45/52, 57/64. The ratio falls from 1.5 at 16px to 1.25 at 32px and 1.12 at 57px — [Material 3 typescale tokens](https://unpkg.com/@material/web@2.3.0/tokens/v0_192/_md-sys-typescale.scss)
- **Tailwind v4** pairs each size with a whole-px line height, written as `calc(px/size)`: 12/16, 14/20, 16/24, 18/28, 20/28, 24/32, 30/36, 36/40. From 48px upward the line height is 1. Its leading utilities are tight 1.25, snug 1.375, normal 1.5, relaxed 1.625, loose 2 — [tailwindcss theme.css](https://unpkg.com/tailwindcss@4.1.11/theme.css)
- **Carbon** writes unitless ratios that resolve to whole px:
  - 1.33333 → 12/16
  - 1.28572 → 14/18 (compact)
  - 1.42857 → 14/20
  - 1.375 → 16/22 (compact)
  - 1.5 → 16/24
  - 1.4 → 20/28
  - 1.25 → 32/40
  
  Light display styles use 1.199/1.19 → 1.05 as size grows to 156px. heading-07's 54 × 1.199 = 64.7px is documented as 64px — [@carbon/type styles.js](https://unpkg.com/@carbon/type@11.40.0/src/styles.js); [Carbon type sets](https://carbondesignsystem.com/elements/typography/type-sets/)
- **Carbon's UI vs long-form split** is explicit: body-compact-01 is 14/18 and body-01 is 14/20; body-compact-02 is 16/22 and body-02 is 16/24 — [@carbon/type styles.js](https://unpkg.com/@carbon/type@11.40.0/src/styles.js)
- **Atlassian headings use line-height = size + 4px**: 32/36 (1.125), 28/32 (1.143), 24/28 (1.167), 20/24 (1.2), 16/20 (1.25). Body is 16/24, 14/20, 12/16 — [@atlaskit/tokens](https://unpkg.com/@atlaskit/tokens@20.6.1/dist/esm/artifacts/tokens-raw/atlassian-typography.js)
- **Radix uses even, not always 4px-grid, line heights**: text 18/26, 24/30, and headings 16/22, 20/26, 24/30, 28/36, 35/40, 60/60. Headings get tighter line heights than text at the same step (14/18 vs 14/20, 16/22 vs 16/24) — [Radix tokens base.css](https://unpkg.com/@radix-ui/themes@3.2.1/tokens/base.css)
- **Primer** picks ratios so line heights land on whole px tied to control heights: 14/20, 16/24, 20/32, 32/48, 40/56. Title-medium's "32px-equivalent line-height matches with button and other medium control heights", and body-small's "line-height matches Body (medium) at 20px". Primer does *not* tighten much at large sizes (32/1.5, 40/1.4) — [@primer/primitives typography.css](https://unpkg.com/@primer/primitives@10.7.0/dist/css/functional/typography/typography.css)
- **Polaris** line heights are whole px: 11/12, 12/16, 13/20, 14/20, 20/24, 24/32, 30/40, 36/48 — [Polaris text.js](https://unpkg.com/@shopify/polaris-tokens@9.4.2/dist/cjs/src/themes/base/text.js)
- **Apple** uses whole-pt leading but not a 4pt grid: 34/41, 28/34, 22/28, 20/25, 17/22, 16/21, 15/20, 13/18, 12/16, 11/13. Apple also says: "when you display text in wide columns or long passages, more space between lines (loose leading) can make it easier for people to keep their place". Tight leading suits height-constrained list rows, but "If you need to display three or more lines of text, avoid tight leading even in areas where height is limited" — [Apple HIG Typography](https://developer.apple.com/design/human-interface-guidelines/typography)
- **Long-form reading line heights.** Tailwind Typography prose body is 16/28 (1.75), prose-lg body is 18/32 (1.78), and lead text is 20/32 (1.6). Prose headings tighten: h1 36/40 (1.11), h2 24/32 (1.33), h3 20/32 (1.6), h4 16/24 (1.5). Tailwind's UI `text-base` is 16/24 (1.5) — [@tailwindcss/typography styles.js](https://unpkg.com/@tailwindcss/typography@0.5.16/src/styles.js); [tailwindcss theme.css](https://unpkg.com/tailwindcss@4.1.11/theme.css)
- **GitHub markdown** body is 16px/1.5 and headings are 1.25 — [github-markdown-css](https://unpkg.com/github-markdown-css@5.8.1/github-markdown.css)
- **Butterick:** "For most text, the optimal line spacing is between 120% and 145% of the point size" — [Butterick, Line spacing](https://practicaltypography.com/line-spacing.html)
- **WCAG 2.2 SC 1.4.12 Text Spacing (AA)** requires that content still works when users set line height to at least 1.5× font size, spacing after paragraphs to 2×, letter spacing to 0.12×, and word spacing to 0.16× — [W3C Understanding 1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)
- **WCAG 1.4.8 (AAA)** requires a mechanism for "line spacing (leading) … at least space-and-a-half within paragraphs, and paragraph spacing … at least 1.5 times larger than the line spacing" — [W3C Understanding 1.4.8](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html)
- **Inter's historical guidance (v3).** Inter's "Dynamic Metrics" set line height = 1.4 × size. That page has been removed from rsms.me ("This page used to exist, but is no longer") and survives only in the v3 website archive — [Inter v3 Dynamic Metrics (archived)](https://d.rsms.me/inter-website/v3/dynmetrics/); [rsms.me/inter/dynmetrics (404)](https://rsms.me/inter/dynmetrics/)

### Inferences
- **Ratio by size across systems** (line-height/size):

  | Size | Ratio | Systems |
  |---|---|---|
  | 12 | 1.33 | Material 3, Carbon, Tailwind, Radix, Atlassian, Polaris |
  | 13 | 1.54 | Polaris (20px) |
  | 14 | 1.43 | Material 3, Carbon, Tailwind, Radix, Atlassian, Polaris |
  | 14 (compact) | 1.29 | Carbon |
  | 16 | 1.5 | all |
  | 20 | 1.4 | Tailwind, Carbon, Radix text |
  | 20 | 1.3 | Radix heading |
  | 20 | 1.2 | Atlassian, Polaris |
  | 24 | 1.33 | Material 3, Tailwind, Polaris |
  | 24 | 1.25 | Radix |
  | 24 | 1.17 | Atlassian |
  | 28 | 1.29 | Material 3, Carbon, Radix |
  | 28 | 1.14 | Atlassian |
  | 32 | 1.25 | Material 3, Carbon |
  | 32 | 1.125 | Atlassian |
  | 36 | 1.22 | Material 3 |
  | 36 | 1.11 | Tailwind |
  | 40–60 | ~1.0–1.16 | |

- **litt.md's ratios compared:**
  - display 40/1.1, h3 24/1.25 and h4 20/1.3 are inside the observed bands. h3 24/30 and h4 20/26 exactly match Radix heading steps 6 and 5.
  - h1 32/1.15 is tighter than Material 3/Carbon (1.25) and close to Atlassian (1.125).
  - reading 17/1.65 sits between UI (1.5) and Tailwind prose (1.75).
- **Whole-pixel check for litt.md**, computed as size × ratio:

  | Style | Line height (px) | Whole px? |
  |---|---|---|
  | display | 44.0 | yes, 4px grid |
  | h1 | 36.8 | no |
  | h2 | 33.6 | no |
  | h3 | 30.0 | yes, not 4px grid |
  | h4 | 26.0 | yes, not 4px grid |
  | reading | 28.05 | no (≈28) |
  | body | 23.25 | no |
  | small | 19.5 | no |
  | caption | 16.8 | no |

  So 6 of 9 styles give fractional line boxes. The surveyed systems that specify line height as a unitless ratio (Carbon, Primer, Tailwind) choose ratios that resolve to whole px, such as 1.4285 = 20/14. The nearest whole-px or 4px-grid pairs using the conventions above:
  - h1 32/36 (1.125, Atlassian-like) or 32/40 (1.25, Material 3/Carbon)
  - h2 28/32 (1.143) or 28/36 (1.286, Material 3/Carbon/Radix)
  - reading 17/28 (1.647)
  - body 15/24 (1.6) or 15/22 (1.467)
  - small 13/20 (1.538, Polaris uses 13/20)
  - caption 12/16 (1.333, the near-universal pairing)
- **Fixed px offset as a rule.** Many systems effectively use line height = size + a constant: Atlassian +4 for headings, Material 3 +8 at 16–32px. This tightens the ratio automatically as size grows and keeps values on the grid.

### Gaps
- I found no primary source that measures whether fractional line heights cause visible rendering problems such as baseline drift or sub-pixel blur in current browsers. The case for whole px rests on convention and grid alignment, not on documented rendering defects.
- I found no Hanken Grotesk–specific line-height guidance.

## 3. Tracking rules by size: Apple SF tables, Material 3, and when positive tracking is used

### Takeaway
Tracking tables are tied to a specific font. Apple's SF Pro table goes positive below 12pt, most negative around 17–20pt, then positive again from 24pt. That pattern comes from SF switching to its Display optical size, so it does not transfer to other fonts. Material 3/Roboto adds positive tracking to body and labels (+0.25 to +0.5px at 11–16px) and is roughly neutral for headlines. Carbon, Radix, Polaris and Tailwind follow the more general pattern: slightly positive at 12px or below, zero around 14–16px, and progressively negative at display sizes, around −0.01 to −0.025em. Inter's own historical formula gives about −0.009em at 15px and −0.013em at 17px, and stays negative up to −0.022em at 40px.

### Cited Findings
- **Apple SF Pro tracking (iOS/iPadOS/visionOS)**, size pt → 1/1000 em:

  | Size (pt) | Tracking (1/1000 em) |
  |---|---|
  | 6 | +41 |
  | 8 | +26 |
  | 10 | +12 |
  | 11 | +6 |
  | 12 | 0 |
  | 13 | −6 |
  | 14 | −11 |
  | 15 | −16 |
  | 16 | −20 |
  | 17 | −26 |
  | 18 | −25 |
  | 20 | −23 |
  | 22 | −12 |
  | 23 | −4 |
  | 24 | +3 |
  | 28 | +14 |
  | 32 | +13 |
  | 34 | +12 |
  | 40 | +10 |
  | 48 | +8 |
  | 60 | +4 |
  | 72 | +2 |
  | 80+ | 0 |

  Apple notes: "In a running app, the system font dynamically adjusts tracking at every point size", and says tracking may need manual adjustment in mockups — [Apple HIG Typography](https://developer.apple.com/design/human-interface-guidelines/typography)
- **Apple's fonts** support "dynamic optical sizes, which merge discrete optical sizes (like Text and Display) and weights into a single, continuous design" — [Apple HIG Typography](https://developer.apple.com/design/human-interface-guidelines/typography)
- **Material 3 tracking:**
  - display-large −0.25px (≈ −0.0044em)
  - display-medium/small, headline and title-large 0
  - title-medium +0.15px; title-small and label-large +0.1px
  - body-large +0.5px (0.03125em); body-medium +0.25px (≈0.018em); body-small +0.4px (≈0.033em)
  - label-medium/small +0.5px (≈0.042/0.045em)
  
  — [Material 3 typescale tokens](https://unpkg.com/@material/web@2.3.0/tokens/v0_192/_md-sys-typescale.scss)
- **Carbon tracking** is +0.32px at 12px (≈0.027em), +0.16px at 14px (≈0.011em), and 0 at 16px and up. Negative tracking appears only on very large displays: −0.64px at 60–92px and −0.96px at 84–156px — [@carbon/type styles.js](https://unpkg.com/@carbon/type@11.40.0/src/styles.js)
- **Radix tracking:** 12px +0.0025em; 14–16px 0; 18px −0.0025em; 20px −0.005em; 24px −0.00625em; 28px −0.0075em; 35px −0.01em; 60px −0.025em. The docs show a heading customisation with `--heading-letter-spacing: -0.01em` — [Radix tokens base.css](https://unpkg.com/@radix-ui/themes@3.2.1/tokens/base.css); [Radix typography docs](https://www.radix-ui.com/themes/docs/theme/typography)
- **Polaris tracking (font Inter):** 0 at 14px and below; −0.2px at 20px and 24px; −0.3px at 30px; −0.54px at 36px (≈ −0.015em) — [Polaris text.js](https://unpkg.com/@shopify/polaris-tokens@9.4.2/dist/cjs/src/themes/base/text.js); [Polaris font.js](https://unpkg.com/@shopify/polaris-tokens@9.4.2/dist/cjs/src/themes/base/font.js)
- **Tailwind tracking utilities:** tighter −0.05em, tight −0.025em, normal 0, wide 0.025em, wider 0.05em, widest 0.1em — [tailwindcss theme.css](https://unpkg.com/tailwindcss@4.1.11/theme.css)
- **Inter v3 "Dynamic Metrics" (historical):** tracking = a + b × e^(c × z), with a = −0.0223, b = 0.185, c = −0.1745, z = font size in px — [Inter v3 Dynamic Metrics (archived)](https://d.rsms.me/inter-website/v3/dynmetrics/)
- **Butterick on caps and small text:**
  - "always add 5–12% extra letterspacing to text in all caps or small caps … particularly important at small sizes" (CSS 0.05–0.12em)
  - "Lowercase letters don't ordinarily need letterspacing"
  - typographers "add letterspacing to lowercase text smaller than 9 point" and "remove letterspacing from lowercase text used at larger sizes (e.g., headlines)"
  
  — [Butterick, Letterspacing](https://practicaltypography.com/letterspacing.html)

### Inferences
- **Inter v3 formula values I computed:**

  | Size (px) | Tracking (em) |
  |---|---|
  | 11 | +0.0048 |
  | 12 | +0.0005 |
  | 13 | −0.0032 |
  | 15 | −0.0088 |
  | 16 | −0.011 |
  | 17 | −0.0128 |
  | 20 | −0.0167 |
  | 24 | −0.0195 |
  | 32 | −0.0216 |
  | 40 | −0.0221 |

- **litt.md's Inter text styles compared with that formula:**

  | Style | litt.md | Inter v3 formula | Difference |
  |---|---|---|---|
  | body 15px | −0.003em | ≈ −0.009em | litt.md is ~0.006em looser |
  | reading 17px | −0.006em | ≈ −0.013em | litt.md is ~0.007em looser |
  | small 13px | 0 | −0.003em | about the same |
  | caption 12px | +0.01em | ≈0 | litt.md is slightly looser, in the direction Carbon and Material 3 take at 12px |

  Polaris, which also uses Inter, applies 0 tracking at 11–14px. So litt.md's text tracking falls between Polaris (0) and Inter's historical formula, and is defensible. This assumes the formula still applies to Inter 4, which is unverified.
- **litt.md's heading tracking (Hanken Grotesk)** runs from −0.012em at 20px to −0.025em at 40px. That is tighter than Radix (−0.005 at 20, −0.01 at 35) and Polaris (≈ −0.01 at 20–30). It matches Tailwind `tracking-tight` (−0.025em) at display, and Radix's 60px value (−0.025em) but at 40px.
- **Tracking as a hierarchy cue.** At a single weight, tracking adds texture rather than rank. The systems surveyed treat tracking as size compensation, not as a hierarchy device. The exception is wide-tracked caps for labels and eyebrows (Butterick's 5–12%).
- **Apple's positive tracking from 24pt up** is an artifact of SF's Display cut being set tight by design. It should not be copied to Hanken Grotesk.

### Gaps
- I found no published tracking table for Hanken Grotesk.
- I did not verify whether Inter 4.x (with its opsz/Display optical size) changed its recommended tracking. The Dynamic Metrics formula is labelled historical because its page was removed.
- Material 3's per-size tracking rationale (m3.material.io) was not retrieved.

## 4. Vertical spacing and proximity: heading margins, paragraph spacing, section rhythm, card/hero gap ratios

### Takeaway
The rule is documented explicitly: space above a heading should be larger than space below, because the heading belongs to what follows. Tailwind prose puts 2–3× more space above than below: h2 48/24, h3 32/12, h4 24/8 at 16px body, with 20px paragraph spacing. GitHub markdown uses 24/16 for all heading levels with 16px paragraph spacing. Butterick adds that heading space must exceed paragraph spacing, and that paragraph spacing should be 50–100% of the body size. I found no documented system values for hero/card stacks (eyebrow → headline → subhead → CTA).

### Cited Findings
- **Butterick on space around headings:** "Semantically, headings relate to the text that follows, not the text before. Thus you'll probably want the space below to be smaller than the space above so the heading is visually closer to the text it introduces." Also: "If you're already using space between paragraphs, the space you add around a heading should be larger, to create a distinction" — [Butterick, Space above & below](https://practicaltypography.com/space-above-and-below.html)
- **Butterick on headings and paragraph spacing:**
  - "The best way to emphasize a heading is by putting space above and below, because it's both subtle and effective" — [Butterick, Headings](https://practicaltypography.com/headings.html)
  - Paragraph spacing: "A space equal to 50–100% of the body text size will usually suffice. The larger the point size, the more space you'll need between paragraphs" — [Butterick, Space between paragraphs](https://practicaltypography.com/space-between-paragraphs.html)
- **Tailwind Typography prose (base, 16/28 body)**, in px at 16px root (em values relative to each element's own size):

  | Element | Size | margin-top | margin-bottom | Notes |
  |---|---|---|---|---|
  | p | | 20 | 20 | |
  | lead | 20/32 | 24 | 24 | |
  | h1 | 36/40 | 0 | 32 | |
  | h2 | 24/32 | 48 | 24 | |
  | h3 | 20/32 | 32 | 12 | |
  | h4 | 16/24 | 24 | 8 | |
  | ul/ol | | 20 | 20 | li 8/8; nested lists 12 |
  | blockquote | | 32 | 32 | |
  | img/figure/video | | 32 | 32 | |
  | pre | | 24 | 24 | |
  | hr | | 48 | 48 | |
  | figcaption | 14/20 | 12 | | |

  `h2 + *`, `h3 + *`, `h4 + *` and `hr + *` get margin-top 0, and first/last children have their outer margin set to 0.

  prose-lg (18/32 body): p 24; h1 48/48 with mb 40; h2 30/40 at 56 above / 32 below; h3 24/36 at 40 / 16; h4 18/28 at 32 / 8; hr 56; li 12 — [@tailwindcss/typography styles.js](https://unpkg.com/@tailwindcss/typography@0.5.16/src/styles.js)
- **GitHub markdown:** h1–h6 have margin-top 24px and margin-bottom 16px. p, blockquote, ul, ol, dl, table, pre and details have margin-top 0 and margin-bottom 16px. h1/h2 have padding-bottom .3em plus a 1px bottom border — [github-markdown-css](https://unpkg.com/github-markdown-css@5.8.1/github-markdown.css)
- **WCAG paragraph spacing:**
  - 1.4.8 (AAA): paragraph spacing at least 1.5× the line spacing, available via a mechanism — [W3C Understanding 1.4.8](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html)
  - 1.4.12 (AA): layouts must survive users setting spacing after paragraphs to 2× font size — [W3C Understanding 1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)
- **Spacing scales relevant to section rhythm:**
  - Carbon: 2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 160px (spacing-01…13 = 0.25…20 × 8px mini-units) — [@carbon/layout](https://unpkg.com/@carbon/layout@11.40.0/src/index.js)
  - Polaris: …, 48, 64, 80, 96, 112, 128px — [Polaris size.js](https://unpkg.com/@shopify/polaris-tokens@9.4.2/dist/cjs/src/size.js)
  - Tailwind v4: `--spacing: 0.25rem` multiplier, so 16/24/32 units = 64/96/128px — [tailwindcss theme.css](https://unpkg.com/tailwindcss@4.1.11/theme.css)
- **Chrome on trimmed text and gap:** with text-box trimming "you can even get closer to proper leading, where something like gap can be used between contents" — [Chrome for Developers, CSS text-box-trim](https://developer.chrome.com/blog/css-text-box-trim)
- **Secondary only:** a design-skill write-up suggests "about 2–3× more space above than below" for headings. I treat this as a rule of thumb that the Tailwind prose ratios happen to match — [search result summary; non-authoritative](https://clawhub.ai/monikazapisekstudio/vertical-spacing)

### Inferences
- **Above:below ratios.** Prose uses 2:1 (h2), 2.67:1 (h3) and 3:1 (h4). The ratio increases for lower levels, and the space below shrinks to 8–12px for h3/h4, so minor headings almost touch their text. GitHub markdown uses a flatter 1.5:1 at every level.
- **Heading space vs paragraph space.** Prose h2's top space (48) is 2.4× paragraph spacing (20). GitHub's (24) is 1.5× (16). Both follow Butterick's "heading space > paragraph space".
- **Margin collapsing.** In both systems the visible gap above a heading is max(p margin-bottom, heading margin-top) = the heading's margin-top. The gap below is the heading's margin-bottom, because the next sibling's top margin is zeroed or absent.
- **Translating to litt.md's 8px grid.** Matching prose ratios at 17/28 reading text: p ≈ 16–24 (Butterick's 50–100% of 17px = 8.5–17px; prose uses 1.25em ≈ 21px). h2 above ≈ 48, below ≈ 16–24. h3 above ≈ 32, below ≈ 8–16. h4 above ≈ 24, below ≈ 8. litt.md's 64/96/128 section spacing equals Carbon spacing-10/-12 (64/96) and Polaris 1600/2400/3200 (64/96/128).
- **Proximity can stand in for weight.** For single-weight hierarchy, the space ratio does part of the work bold normally does. Butterick explicitly endorses non-bold headings set apart by space.

### Gaps
- **Hero and card gaps.** I found no design-system documentation that specifies gaps for marketing hero stacks (eyebrow→headline→subhead→CTA) or card internals as ratios. None of Carbon, Material 3, Primer, Polaris, Atlassian, Radix or Tailwind publishes them in the sources I retrieved. The only principle available is proximity: the eyebrow is closest to the headline, the subhead next, and the CTA furthest. Any specific ratio would be my own inference, not a documented rule.
- I did not retrieve Material 3 or Carbon guidance on margins above and below headings in product layouts.

## 5. Hierarchy without bold: size, color/contrast steps, tracking, case, space; minimum jump; number of color steps; WCAG

### Takeaway
Single-weight hierarchy has strong precedent at the top of mature scales:
- Apple's Large Title, Title 1, Title 2 and Title 3 are all Regular.
- Material 3's display, headline and title-large are all 400.
- Carbon's headings from 20 to 32px are regular, and 42 and 54px are light.

These systems switch to semibold or medium only near body size (Apple Headline 17 semibold, Carbon heading-01/02, Material 3 title-M/S and labels), where size alone can't separate a heading from body text. Long-form sets use 4–5 color steps (Tailwind prose). Color contrast is constrained by WCAG: 4.5:1 for all text under 24px when the weight is regular, and 3:1 is allowed only from 24px (18pt) for regular text. Primer explicitly cautions against using color as the *primary* means of emphasis.

### Cited Findings
- **Apple** iOS Large Title (34), Title 1 (28), Title 2 (22) and Title 3 (20) all have weight Regular. Headline is the same size as Body (17) and is distinguished only by Semibold. The Emphasized (bold/semibold) variants are optional symbolic traits — [Apple HIG Typography](https://developer.apple.com/design/human-interface-guidelines/typography)
- **Apple on hierarchy and weight:** "Adjust font weight, size, and color as needed to emphasize important information and help people visualize hierarchy". It also says "In general, avoid light font weights … prefer Regular, Medium, Semibold, or Bold" — [Apple HIG Typography](https://developer.apple.com/design/human-interface-guidelines/typography)
- **Material 3** baseline display-L/M/S (57/45/36), headline-L/M/S (32/28/24) and title-large (22) are all weight 400. Medium (500) is used only for title-medium/small (16/14) and labels — [Material 3 typescale tokens](https://unpkg.com/@material/web@2.3.0/tokens/v0_192/_md-sys-typescale.scss)
- **Carbon on size vs weight:** "A bold weight will always have more emphasis than a lighter weight font of the same size. However, a lighter weight font can rank hierarchically higher than a bold font if the lighter weight type size is significantly larger than the bold one." In Carbon's productive set, heading-03/04/05 (20/28/32) are regular and only heading-01/02 (14/16) are semibold — [Carbon typography overview](https://carbondesignsystem.com/elements/typography/overview/); [@carbon/type styles.js](https://unpkg.com/@carbon/type@11.40.0/src/styles.js)
- **Butterick on non-bold headings:** "Non-bold headings work too"; "It's fine to make the point size bigger, but just a little. Use the smallest increment necessary to make a visible difference"; "Limit yourself to three levels of headings. Two is better"; and avoid all caps for headings — [Butterick, Headings](https://practicaltypography.com/headings.html)
- **Primer cautions against color-led emphasis:** "When establishing hierarchy for GitHub products … Refrain from utilizing color as a primary method of emphasis." In GitHub markdown, color is used only for the lowest heading: h6 is .85em in `fgColor-muted` — [Primer typography](https://primer.style/product/getting-started/foundations/typography/); [github-markdown-css](https://unpkg.com/github-markdown-css@5.8.1/github-markdown.css)
- **Tailwind prose color roles** (gray palette):
  - headings gray-900
  - body gray-700
  - lead gray-600
  - counters and captions gray-500
  - bullets gray-300
  
  That is five text-ish tiers, with headings one step darker than body — [@tailwindcss/typography styles.js](https://unpkg.com/@tailwindcss/typography@0.5.16/src/styles.js)
- **Carbon on color:** "Keep type color neutral in running text" — [Carbon typography overview](https://carbondesignsystem.com/elements/typography/overview/)
- **Refactoring UI (secondary summary only):** hierarchy from size, weight and color; a three-tier text color system (dark primary, grey secondary, lighter grey tertiary); and de-emphasising secondary content rather than over-emphasising primary. This comes from a third-party summary, not the book — [Refactoring UI summary (secondary)](https://cdn.jsdelivr.net/npm/claude-code-skills@0.5.0/data/skills/ux-ui-design-system/references/refactoring-ui.md)
- **WCAG 2.2 SC 1.4.3 (AA):** 4.5:1 minimum, and 3:1 for large-scale text. Large scale means "at least 18 point or 14 point bold". "1pt = 1.333px, therefore 14pt and 18pt are equivalent to approximately 18.5px and 24px." Note 1 adds that "Fonts with extraordinarily thin strokes … are harder to read, especially at lower contrast levels" — [W3C Understanding 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- **Carbon on font size vs weight:** Carbon's light weights appear only at 42px and above. Apple advises against light weights for small text — [@carbon/type styles.js](https://unpkg.com/@carbon/type@11.40.0/src/styles.js); [Apple HIG Typography](https://developer.apple.com/design/human-interface-guidelines/typography)

### Inferences
- **Where size alone carries hierarchy.** In the regular-weight top ranges of Apple, Material 3 and Carbon, adjacent steps run 1.10–1.31. The smallest is Apple Title 2→Title 3 (22/20 = 1.10), but Title 3 is rarely next to Title 2. These systems add weight exactly where heading and body sizes converge, below about 1.2× body.
- **litt.md's h4 risk.** litt.md's h4 (20) over reading (17) is only 1.176×, and over body (15) is 1.33×. Without weight, h4 over reading text is the level most at risk. Apple distinguishes Headline from Body (both 17) only by Semibold, which litt.md can't use. Space (Butterick), color step (heading fg vs body fg-muted, as in Tailwind's 900/700) and the font change (Hanken Grotesk vs Inter) are the remaining levers.
- **Using litt.md's three colors.** fg, fg-muted and fg-subtle match the Refactoring UI three-tier model and the core of Tailwind prose (900/700/500). A common pattern is headings in fg and body in fg or slightly muted, which Tailwind does by setting body one step lighter than headings. Using color to rank heading levels themselves conflicts with Primer's caution.
- **Contrast limits for litt.md's styles.** Because litt.md is weight 400 only, the WCAG "large text" 3:1 allowance applies only to display (40), h1 (32), h2 (28) and h3 (24). h4 (20), reading, body, small (13) and caption (12) in fg-subtle must still reach 4.5:1. There is no "14pt bold" path at 18.5px.
- **How many levels the scale implies.** litt.md defines five heading levels (display, h1–h4). Butterick recommends at most three levels in a document, and two is better. Single-weight systems keep closely spaced sizes as alternatives (Material 3 L/M/S), not as levels used together on one page.

### Gaps
- I found no primary, empirical source for the minimum font-size ratio that readers perceive as a distinct heading level, such as a just-noticeable-difference study. Butterick's "smallest increment necessary to make a visible difference" is given in the context of bold headings. The 1.2–1.25 "safe" ratios in modular-scale tools are rules of thumb ([Cieden](https://cieden.com/book/sub-atomic/typography/different-type-scale-types)).
- The Refactoring UI book itself was not accessible (Medium blocked the fetch). Its claims are reported only through a secondary summary.

## 6. Measure, and text-box trimming / leading trim

### Takeaway
**Measure.** Recommended line length is 45–90 characters (Butterick). WCAG AAA caps it at 80 characters, and Primer points to about 80 or fewer. Tailwind prose enforces `max-width: 65ch`.

**Trimming.** CSS `text-box: trim-both cap alphabetic` is now supported in all major engines: Chrome/Edge 133, Safari 18.2 and, per MDN's compatibility data, Firefox 154. It removes half-leading above the cap height and below the baseline, so a margin or gap value equals the visible cap-to-baseline distance. Radix Themes achieves the same result with a pseudo-element negative-margin technique, using per-font trim constants of 0.42em and 0.36em.

### Cited Findings
- **Butterick:** "Aim for an average line length of 45–90 characters, including spaces", or "between two and three alphabets on a line"; "The major flaw in many responsive web layouts? Insufficient attention to line length" — [Butterick, Line length](https://practicaltypography.com/line-length.html)
- **WCAG 1.4.8 (AAA)** requires a mechanism so that "Width is no more than 80 characters or glyphs (40 if CJK)", text is not justified, and text can be resized to 200% without horizontal scrolling — [W3C Understanding 1.4.8](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html)
- **Primer:** "It's considered a good practice to keep lines around 80 characters or less" — [Primer typography](https://primer.style/product/getting-started/foundations/typography/)
- **Tailwind Typography** sets `maxWidth: '65ch'` on prose — [@tailwindcss/typography styles.js](https://unpkg.com/@tailwindcss/typography@0.5.16/src/styles.js)
- **Radix's typography principle:** "relate font size, line height, and line width in a proportional way" — [Radix typography docs](https://www.radix-ui.com/themes/docs/theme/typography)
- **text-box-trim** takes the values none | trim-start | trim-end | trim-both. It works together with `text-box-edge`, which sets how much to trim: the over edge at cap, ex or text, and the under edge at alphabetic or text. Both are set by the `text-box` shorthand. MDN's rationale: "Vertical spacing differs between fonts, making consistent typesetting historically challenging on the web" — [MDN text-box-trim](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-box-trim)
- **Browser support for text-box-trim**, per MDN browser-compat-data: Chrome 133, Edge (mirror), Firefox 154, Safari 18.2 / iOS (mirror). It is not experimental and is standards-track — [MDN browser-compat-data: text-box-trim](https://github.com/mdn/browser-compat-data/blob/main/css/properties/text-box-trim.json)
- **Chrome for Developers (Adam Argyle, Jan 14, 2025):**
  - Shorthand `text-box: trim-both cap alphabetic`. "Trimming both to cap alphabetic will be the most common use"; `ex alphabetic` is "useful for optical balance".
  - The space comes from "half-leading", where the web "splits the lead into two pieces and distributes a piece above and a piece below".
  - With trimming, equal padding such as `padding: 10px` on a button becomes optically centered, instead of needing `padding-block: 5px; padding-inline: 10px` to compensate.
  - Figma's "vertical trim" is the designer-side equivalent.
  
  — [Chrome for Developers, CSS text-box-trim](https://developer.chrome.com/blog/css-text-box-trim)
- **Radix Themes leading trim:**
  - Defaults are `--default-leading-trim-start: 0.42em` and `--default-leading-trim-end: 0.36em`, with heading equivalents.
  - The `trim` prop adds `::before`/`::after { content:''; display:table }` with `margin-bottom: calc(var(--leading-trim-start) - var(--line-height)/2)` (and the mirror rule for the end).
  - The docs show per-font customisation, e.g. `--heading-leading-trim-start: 0.42em; --heading-leading-trim-end: 0.38em` for a custom heading font.
  
  — [Radix tokens base.css](https://unpkg.com/@radix-ui/themes@3.2.1/tokens/base.css); [Radix styles.css](https://unpkg.com/@radix-ui/themes@3.2.1/styles.css); [Radix typography docs](https://www.radix-ui.com/themes/docs/theme/typography)

### Inferences
- **What `ch` measures.** `ch` is the advance width of the "0" glyph. In most proportional sans fonts the average lowercase glyph is narrower than "0", so `65ch` usually holds somewhat more than 65 average characters. Systems pick 65ch as a practical proxy for the middle of the 45–90 range. For litt.md's 17px Inter reading text, a max-width in ch (about 60–70ch) or px would sit inside Butterick's range and under WCAG's 80. I did not measure Inter's real characters-per-line at that width.
- **How trimming changes spacing math.** Without trimming, the visible distance between a heading's baseline and the next paragraph's cap top is the CSS margin *plus* the heading's half-leading and descender area *plus* the paragraph's half-leading and ascender-above-cap area. Those extras grow with line-height, so looser reading text (1.65) adds more invisible space than UI text.

  With `text-box: trim-both cap alphabetic`, an 8px-grid margin such as 24px is exactly the visible baseline-to-cap gap. The proximity ratios in section 4 (e.g. 48 above / 16 below) then hold optically instead of being diluted by leading. A trimmed system usually needs *smaller* nominal margins than a prose stylesheet written for untrimmed boxes, because Tailwind/GitHub values were tuned with half-leading included.
- **Radix's trim in numbers.** With Radix's formula at 16px/24px text, the ::before margin is 0.42 × 16 − 12 ≈ −5.3px, and the ::after margin is 0.36 × 16 − 12 ≈ −6.2px. That is how much half-leading Radix removes from body text by default.
- **Font-specific constants.** Trim constants depend on the font: Radix exposes separate heading values for exactly this reason. A system with two families (Hanken Grotesk headings, Inter body) would need separate cap-height trims if it used the pseudo-element fallback rather than native `text-box-edge: cap`, which reads metrics from the font.

### Gaps
- Firefox 154 support comes from MDN's browser-compat-data main branch. I did not confirm that version's release date.
- I did not retrieve the Inter or Hanken Grotesk cap-height/ascender metrics needed to compute exact trimmed vs untrimmed gaps for litt.md's styles.
- I did not retrieve Capsize (Seek), the main JS precursor library, or Material 3 and Carbon measure recommendations.
