# Raycast, Cursor, Notion, Arc / Dia (+ Resend): typographic hierarchy and spacing systems

*How the numbers were collected: I loaded every URL below on 2026-10-19 in headless Chromium 1440×900 (Playwright, macOS user agent, `navigator.platform` spoofed to MacIntel) and read `getComputedStyle` for each visible text element: family, size, line-height, letter-spacing, weight, `font-feature-settings`, `font-variation-settings`, colour, margins and paddings. Gaps are the distance in px from one element's border box to the next one's (`top − previous bottom`). Measure in characters per line (cpl) = paragraph width ÷ average glyph width from canvas `measureText`. Font files were downloaded and their name, fvar and GSUB tables read with fontTools. Format used throughout: size/line-height px (ratio), tracking px (em), weight.*

*Caveats. (1) Cursor swaps its brand font for `system-ui` on Linux (`html[data-os="linux"] --font-sans: var(--font-system)`), so I spoofed macOS. (2) Pages that use system stacks (the Notion editor, the Arc blog body) rendered with Linux fallback faces. Their sizes, line-heights and spacing are CSS values and don't depend on the face, but their cpl figures are only approximate. (3) Fluid sizes (Arc 45.51px, Dia 38.79px) are valid only at a 1440px viewport. (4) arc.net is still live but frozen. Its newest blog post is dated Oct 3, 2024 and the site promotes Dia, so Arc data is "live but legacy", and Dia (diabrowser.com) is the active Browser Company site. I added Resend as an extra comparator. I did not replace any of the four sites.*

## Q1. Families, weights, the full type scale, display tracking, and whether line-heights sit on a 4px grid

### Takeaway
Each brand builds hierarchy differently:
- **Raycast:** Inter only, weights 400/500/600, ratio-based line-heights off the 4px grid. Tracking is mostly slightly positive, except a few large headings.
- **Cursor:** a custom grotesque (Cursor Gothic) at **weight 400 for almost every marketing size**. Hierarchy comes from size, a strict tracking ramp (−0.03em at 72px up to +0.01em at 14px) and 60%/50% colour mixes. This is the closest analogue to litt.md's 400-only rule.
- **Notion marketing:** a tokenised scale (tatami) in NotionInter at 400–700. Every size has its own tracking token, and line-heights are spacing tokens that all fall on 4px except 30.
- **Arc and Dia:** expressive display faces (Marlin Soft SQ, Exposure, ABC Oracle) with very tight tracking (−0.04 to −0.05em) and sub-1.0 display leading. Dia even uses *light* weights (300/350) for big headings.

### Cited Findings

**Raycast (dark only; bg #07080A; everything Inter plus GeistMono/JetBrains Mono)**
- Fonts that loaded: Inter (variable 100–900), GeistMono, JetBrains Mono. `body` is 16px/18.4px (1.15) with `font-feature-settings: "calt","kern","liga","ss03"` and antialiased smoothing — [raycast.com](https://www.raycast.com/)
- Home scale (largest to smallest) — [raycast.com](https://www.raycast.com/):
  - h1: 64/70.4 (1.1), tracking 0, weight 600, `"liga" 0, "ss02", "ss08"`.
  - Section display h3 ("Build the perfect tools."): 56/65.52 (1.17), +0.2px, 400.
  - h2 ("Meet your new virtual assistant"): 32/38.4 (1.2), −0.8px (−0.025em), 500.
  - Feature list: 24/38.4 (1.6), +0.2px, 500. The inactive item is #434345 and the active item is white.
  - Section kicker h2s: 20px, line-height normal, +0.2px (0.01em), 500, white. Each one is followed by a p at the **same 20px/500** in #6A6B6C. The step is made by colour alone.
  - Body: 16/25.6 (1.6), 500.
  - Paragraph: 18/27 (1.5), +0.18px, 400, rgba(255,255,255,.5).
  - Nav links: 14px, +0.2px (0.0143em), 500, #9C9C9D.
  - Card text: 14/22.4 (1.6), +0.2px, 500.
  - GeistMono captions: 12/19.2 (1.6), +0.2px (0.0167em), 400.
- AI page — [raycast.com/core-features/ai](https://www.raycast.com/core-features/ai):
  - h1: 48/50.4 (1.05), −1.92px (−0.04em), 500, max-width 450px.
  - h2: 32/38.4 (1.2), −0.025em, 500, margin-bottom 15px.
  - h3: 16/24 (1.5), 500, tracking 0 or −0.25px.
  - Pricing numerals: 64/64, 600.
  - FAQ questions: 16/24, 600.
  - Body p: 18/27 or 16/24, 400, rgba(255,255,255,.5).
- Blog article — [raycast.com/blog/a-technical-deep-dive-into-the-new-raycast](https://www.raycast.com/blog/a-technical-deep-dive-into-the-new-raycast):
  - h1: 48/62.4 (1.3), +0.2px (0.004em), 600.
  - Dek: 18/28.8 (1.6), +0.2px, 400, #9C9C9D.
  - h2: 24/27.6 (1.15), 0, 600. h3: 18/20.7 (1.15), 600.
  - Body p: 16/25.6 (1.6), **+0.32px (+0.02em)**, 400.
  - List items: 16/24 (1.5). Strong: 600.
  - Figcaption: 14/18.9 (1.35), 400.
  - Code: JetBrains Mono 14/20, #FF6363.
  - Date: GeistMono 12/20, uppercase, +0.12px (0.01em).
  - Fine print: 12/18, +0.4px (0.033em).
- Changelog — [raycast.com/changelog/macos/2-8](https://www.raycast.com/changelog/macos/2-8):
  - h1 "Changelog": 52/55.25 (1.063), +0.52px (0.01em), 600.
  - h2 ("✨ New"): 24/27.6, 600.
  - List items: 16/24, 400. Strong lead-ins: 600.
  - Version link: 16px, #FF6161.
- Spacing tokens on `:root`: 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 112, 168 and 224px (`--spacing-0-5` … `--spacing-13`). Grey ramp: `--grey-50` #E6E6E6 … `--grey-900` #07080A — [raycast.com](https://www.raycast.com/)
- Measured line-heights are ratio-derived and mostly fall off the 4px grid: 70.4, 62.4, 55.25, 50.4, 38.4, 27.6, 25.6, 22.4, 20.7 and 18.4px. Only 24, 32, 20 and 16 land on it — [raycast.com](https://www.raycast.com/), [blog](https://www.raycast.com/blog/a-technical-deep-dive-into-the-new-raycast)

**Cursor (light #F7F7F4 / dark #14120B; Cursor Gothic for everything on marketing)**
- `body` font-family: `CursorGothic, "CursorGothic Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif`, 16/24 — [cursor.com](https://cursor.com/)
- The font file reads "Cursor Gothic", version 1.108, designer Michael Clasen, manufacturer "kimera". It is a static font (Regular/Italic/Bold/BoldItalic files) with GSUB ss01–ss14, tnum, zero and case — [CursorGothic_Regular.woff2](https://cursor.com/marketing-static/_next/static/immutable/media/CursorGothic_Regular-s.p.33lgp-j65tbsf.woff2)
- The home page also downloads a `CursorDisplay_Medium` file, Berkeley Mono and cursorMono. No measured text element resolved to CursorDisplay — [cursor.com](https://cursor.com/)
- Home scale, **all weight 400** — [cursor.com](https://cursor.com/):

  | Size/LH (ratio) | Tracking | Use |
  |---|---|---|
  | 72/79.2 (1.1) | −2.16px (−0.03em) | "Try Cursor now." |
  | 36/43.2 (1.2) | −0.72px (−0.02em) | section h2 |
  | 26/32.5 (1.25) | −0.325px (−0.0125em) | hero h1 |
  | 22/28.6 (1.3) | −0.11px (−0.005em) | feature h3, and the descriptions under them at the same size in 60% colour |
  | 16/24 (1.5) | +0.08px (+0.005em) | body |
  | 14/21 (1.5) | +0.14px (+0.01em) | nav, small text, footer headings at 60% |
  | 12/18 (1.5) | +0.12px (+0.01em) | legal |

- Typography tokens — [cursor.com](https://cursor.com/):
  - Sizes: `--text-md-sm` 1.125rem, `--text-md` 1.375rem (22), `--text-md-lg` 1.625rem (26), `--text-lg` 2.25rem (36), `--text-xl` 3.25rem (52), `--text-2xl` 4.5rem (72).
  - Tracking: `--tracking-2xl` −.03em, `-xl` −.025em, `-lg` −.02em, `-md-lg` −.0125em, `-md` −.005em, `-base` .005em, `-sm` .01em.
  - Leading: 1.1, 1.15, 1.2, 1.25, 1.3, 1.4, 1.5, 1.625.
  - Product UI: `--text-product-sm` .6875rem (11px), `-base` .75rem (12), `-lg` .8125rem (13); leading 1.27273 and 1.33333; `--tracking-product-sm` .0044em.
- Bold is used only inside articles: blog/changelog h2 22/28.6, **700**; h4 16/24, 700; strong 700. Article h1s stay at 36/43.2, 400, −0.02em — [cursor.com/blog/git-at-any-scale](https://cursor.com/blog/git-at-any-scale), [changelog](https://cursor.com/changelog/cloud-agent-canvases-and-environments)
- Line-heights 79.2, 43.2, 32.5, 28.6, 24, 21 and 18 are ratio-based rather than on a 4px grid. Vertical spacing uses `--v: 1rem * 1.4` (22.4px), and the gutter is `--g: calc(10rem / 16)` (10px) — [cursor.com](https://cursor.com/)

**Notion marketing (NotionInter + Lyon Text; "tatami" tokens)**
- Fonts loaded: NotionInter 400/500/600/700 and Lyon Text 400 (the blog adds italics, Lyon 600 and iA Writer Mono). `body` is 16/24 in rgba(0,0,0,.95) — [notion.com](https://www.notion.com/), [blog](https://www.notion.com/blog/how-notion-handles-concurrent-editing-with-crdts)
- tatami size tokens: 50 = .75rem, 100 = .875, 150 = .9375, 200 = 1, 300 = 1.125, 350 = 1.25, 400 = 1.375, 500 = 1.625, 600 = 2, 700 = 2.625, 800 = 3.375, 900 = 4, 1000 = 4.75 and 1100 = 6rem. Matching line-height tokens: 16, 20, 20, 24, 28, 28, 28, (450 = 30), 32, 40, 48, 56, 64, 80 and 100px. Weights 400/500/600/700, plus "variable" tokens 420/520/620/680 — [notion.com](https://www.notion.com/)
- tatami tracking tokens, sans:
  - 50: +.0078rem. 100–200: 0. 300 and 350: −.0078rem. 400: −.0156rem. 500: −.039rem.
  - 600: −.0625rem regular, −.0469rem semibold/bold. 700: −.125rem regular, −.094rem semibold/bold.
  - 800: −.219rem regular, −.117rem bold. 1100 semibold: −.2875rem.
  - Feature settings: `"lnum" 1, "locl" 0` for sans; the serif adds `"liga" 1` — [notion.com](https://www.notion.com/)
- Measured steps:
  - h1: 96/100 (1.042), −4.6px (−0.048em), 600 — [home](https://www.notion.com/)
  - h1: 64/64 (1.0), −2.125px (−0.033em), 700 — [AI](https://www.notion.com/product/ai), [releases](https://www.notion.com/releases)
  - h2: 54/56 (1.037), −1.875px (−0.035em), 700, also the blog h1 — [home](https://www.notion.com/)
  - h2: 42/48 (1.143), −1.5px (−0.036em), 700 — [home](https://www.notion.com/)
  - Blog h2: 32/40 (1.25), −0.75px (−0.023em), 700 — [blog](https://www.notion.com/blog/how-notion-handles-concurrent-editing-with-crdts)
  - h3: 26/32 (1.231), −0.625px (−0.024em), 600 — [releases](https://www.notion.com/releases)
  - h2/h3: 22/28 (1.273), −0.25px (−0.011em), 700 — [home](https://www.notion.com/)
  - Subhead: 20/28 (1.4), −0.125px (−0.006em), 400 — [home](https://www.notion.com/)
  - 18/28 (1.556) at 400/600/700 — [AI](https://www.notion.com/product/ai), [releases](https://www.notion.com/releases)
  - Body and buttons: 16/24 (1.5) at 400/500/700 — [home](https://www.notion.com/)
  - Small: 14/20 (1.429) at 400/500 — [home](https://www.notion.com/)
  - Label: 12/16 (1.333), +0.125px (+0.0104em), 500 — [home](https://www.notion.com/)
  - Eyebrow "SHARE THIS POST": 11/11, uppercase, +0.66px (+0.06em), 500 — [blog](https://www.notion.com/blog/how-notion-handles-concurrent-editing-with-crdts)
- Serif: blog body is Lyon Text 20/31 (1.55), 400. Quotes are Lyon 32/40 or 18/28 — [blog](https://www.notion.com/blog/how-notion-handles-concurrent-editing-with-crdts), [AI](https://www.notion.com/product/ai)

**Arc (legacy) and Dia (current Browser Company site)**
- Arc home — [arc.net](https://arc.net/):
  - Display face is Marlin Soft SQ at 700. h1: 45.51/42.25 (**0.928**), −1.82px (−0.04em), max-width 700px.
  - Big statements: 40/39 (0.975), −0.04em, #3139FB. Quotes: 28/30 (1.07), −0.05em.
  - Nav: Marlin Soft SQ 14px, −0.02em, 500.
  - Body: InterVariable 17/25.5 (1.5), **500**, #696969, with 700 for strong.
  - Labels: ABC Favorit Mono 12px, uppercase, 700, +0.6px (0.05em). "MORE DETAILS" is 400 at +0.15em.
  - CTAs: -apple-system 14/29, 600, −0.01em.
  - Footer: Inter 12px, 600, +0.4px.
- Arc tokens: `--fontSizes-*` 10, 12, 14, 16, 20, 24, 32, 36, 40, 48; `--space-*` 4, 8, 12, 16, 24, 32, 40, 48, 56, 64, 72; weights 400–800. Font roles: `--fonts-body` "InterVariable","Inter"; `--fonts-softSans` Marlin Soft SQ; `--fonts-oracle` ABC Oracle; `--fonts-exposure` Exposure VAR — [arc.net](https://arc.net/)
- The Marlin Soft SQ file names Michael Hagemann as designer — [MarlinSoftSQ-ExtraBold.woff2](https://arc.net/fonts/MarlinSoftSQ-ExtraBold.woff2)
- Arc blog article (published Oct 3, 2024) — [arc.net/blog/school-of-browser](https://arc.net/blog/school-of-browser):
  - h1: Marlin Soft SQ **90/72 (0.8)**, −3.6px (−0.04em), 700.
  - Subheads (marked up as h1): -apple-system 30/32 (1.067), 600, #171717.
  - Body: -apple-system 16/24, 400, #717171.
  - Meta: ABC Favorit Mono 12px, uppercase.
- Dia home — [diabrowser.com](https://www.diabrowser.com/):
  - `html` font-size is 10px.
  - Display h1/h2: Exposure VAR at 500 with `font-variation-settings: "EXPO" -25`. h2 is 48/56 (1.167), −2.4px (−0.05em). The hero h1 is 38.79/42.67 (1.1), −0.04em.
  - Spans: 24/30 (1.25), −0.03em.
  - Large sans headings: ABC Oracle 54/60 (1.111), **weight 300**, −2.16px (−0.04em).
  - h3: ABC Oracle 20/30 (1.5), **350**, −0.4px (−0.02em). Lead p: 22/30 (1.364), 400. Small p: 14/20.
  - Section labels: ABC Oracle 12/30, uppercase, +0.72px (0.06em).
  - Nav/footer: ABC Favorit Mono 13/16, uppercase, +1.3px (**+0.1em**).
- Dia changelog — [diabrowser.com/changelog](https://www.diabrowser.com/changelog):
  - h1: Exposure 82/87 (1.061), −4.1px (−0.05em), 400, `"EXPO" -10`.
  - Month h2: ABC Oracle 54/60, 300, −0.04em.
  - Release titles: Exposure 44/50 (1.136), −0.05em, 400.
  - Feature h3: ABC Oracle 18/23 (1.278), 400, −0.36px (−0.02em).
  - Body: ABC Oracle **18/26 (1.444), 350, −0.02em**.
  - Signatures: Ammer Handwriting 36px.
- Font files: Exposure is by Federico Parra Barrios / 205TF and ships as static per-"exposure" cuts, e.g. `Exposure[0]`. ABC Oracle is by Johannes Breyer, Andree Paat and Robert Janes / Dinamo, v1.204 — [Exposure[0].woff2](https://www.diabrowser.com/fonts/205TF-Exposure-[0].woff2), [ABCOracle-Regular.woff2](https://www.diabrowser.com/fonts/ABCOracle-Regular.woff2)

**Resend (substitute comparator; dark #000)**
- Display faces — [resend.com](https://resend.com/), [blog](https://resend.com/blog/design-email-for-humans-and-agents):
  - "domaine" serif: h1 96/96 (1.0), −0.96px (−0.01em), **400**, `"ss01","ss04","ss05","ss11"`, filled with a linear-gradient text fill. Blog h1: 76.8/76.8.
  - ABC Favorit: section h2 56/67.2 (1.2), −2.8px (**−0.05em**), 400; 20/26; 16/24 at −0.05em.
- Inter body: 18/27 (1.5); 16/28 (1.75) in the blog; 14/22.4 (1.6); 14/20 (1.43).
- Buttons: Inter 16/24, **600**. Blog h2: Inter 24/32, 600. Code: commitMono.

### Inferences
- **Weight for hierarchy.** Only Cursor's marketing pages and Resend's display faces come close to litt.md's 400-only rule. Cursor keeps 400 from 12px to 72px and makes steps with size, tracking and a 60%/50%/40% colour mix. Raycast, Notion and Arc all rely on 500–700. Dia runs the other way and puts its biggest sans headings at 300/350.
- **Tracking.** Cursor's ramp (−0.03 / −0.02 / −0.0125 / −0.005 / +0.005 / +0.01em for 72 / 36 / 26 / 22 / 16 / 14px) has the same shape as litt.md's (−0.025 / −0.022 / −0.02 / −0.018 / −0.012 / −0.006 / −0.003 / 0 / +0.01em). Two differences: Cursor goes **positive at body size**, while litt.md stays slightly negative through 15–17px, and Cursor's display end (−0.03em at 72px) is tighter than litt.md's display (−0.025em at 40px). Notion's ramp is steeper at the top (−0.048em at 96px) and reaches 0 at 16px.
- **Same-size, colour-only steps.** Raycast (20px white over 20px #6A6B6C) and Cursor (22px fg over 22px fg at 60%) both pair a heading and its description at the same size and weight and separate them by colour alone. This is a ready-made device for a 400-only system like litt.md.
- **Display leading.** Notion (1.0–1.04), Arc (0.8–0.98) and Resend (1.0) set display text tighter than litt.md's display 1.1. Raycast's home h1 at 1.1 and Cursor's 72px at 1.1 match it.
- **4px grid.** Notion is the only site whose line-heights are tokens that sit on 4px (except 30px). Raycast and Cursor use ratio leading and land on 4px only at 16/24px. litt.md's ratio leading would behave like Raycast's and Cursor's: 40×1.1 = 44 and 17×1.65 = 28.05 fall on or near 4px, but 32×1.15 = 36.8, 28×1.2 = 33.6 and 15×1.55 = 23.25 do not.

### Gaps
- Raycast's desktop app UI (as opposed to the web mocks) was not measured.
- Cursor's `CursorDisplay_Medium` file is downloaded on the home page, but I could not tie it to any element.
- Cursor's docs (cursor.com/docs) loaded without CSS in headless Chromium (the page fell back to Times New Roman), so I have no docs typography for Cursor.
- No mobile breakpoints were measured. All values are at 1440px.

## Q2. Who uses Inter for body text, what they pair it with, and how Inter is configured

### Takeaway
- **Use and pairing:**
  - Raycast uses Inter for everything, headings included.
  - Notion marketing uses NotionInter, a customised Inter 3.019, for headings and UI, and pairs it with the Lyon Text serif for blog body copy.
  - Arc pairs InterVariable 3.012 body text with Marlin Soft SQ display.
  - Resend pairs Inter Variable 4.001 with domaine and ABC Favorit for display.
  - Cursor, Dia and the Notion editor don't use Inter at all.
- **Feature settings mostly don't take effect.** Raycast's and Notion's served files lack the GSUB features their CSS asks for, so the `ss02`/`ss03`/`ss08` and `lnum` settings do nothing.
- **Optical sizing.** Only Resend serves Inter with an `opsz` axis (14–32), and it gets automatic optical sizing through the default `font-optical-sizing: auto`.

### Cited Findings
- Raycast (Inter for all text, no separate headline face):
  - Inter is served as Inter v4.001 variable with `wght` 100–900 and **no opsz axis**.
  - The latin subset's GSUB has only calt, ccmp, dnom, frac, locl, numr, pnum and tnum. A second subset has only ccmp, locl, pnum and tnum — [Inter subset](https://www.raycast.com/_next/static/immutable/media/83afe278b6a6bb3c-s.p.45535valc9rzk.woff2), [second subset](https://www.raycast.com/_next/static/immutable/media/1bffadaabf893a1e-s.0szrwpqb9mkwe.woff2)
  - Raycast's CSS asks for `"calt","kern","liga","ss03"` on body and `"liga" 0,"ss02","ss08"` on the home h1 — [raycast.com](https://www.raycast.com/)
  - The home page also downloads VT323 and Instrument Serif subsets — [VT323 file](https://www.raycast.com/_next/static/immutable/media/0c8c4ded07fff55c-s.p.0bh8ttrlmx6iv.woff2), [Instrument Serif file](https://www.raycast.com/_next/static/immutable/media/e41d5df559864f9e-s.p.2rlzm4mj5kw8e.woff2)
- What the requested Inter features are: ss02 "Disambiguation", ss03 "Round quotes & comma", ss08 "Square quotes", cv11 "Single-story a", tnum "Tabular numbers", zero "Slashed zero", case "Case alternates" — [rsms.me/inter](https://rsms.me/inter/)
- Raycast's Inter tracking:
  - Home and AI pages: +0.2px on 14–24px text (≈+0.008 to +0.014em); 0 on the 64px h1; −0.04em on the 48px AI h1; −0.025em on 32px h2s — [raycast.com](https://www.raycast.com/), [AI](https://www.raycast.com/core-features/ai)
  - Blog: +0.32px (+0.02em) on 16px body — [blog](https://www.raycast.com/blog/a-technical-deep-dive-into-the-new-raycast)
- Notion (NotionInter for headings and UI, Lyon Text for blog body):
  - NotionInter-Regular is Inter v3.019, **static** (separate Regular/Medium/SemiBold/Bold files), with **no GSUB table** — [NotionInter-Regular.woff2](https://www.notion.com/front-static/fonts/NotionInter-Regular.woff2)
  - The CSS still sets `"lnum" 1, "locl" 0` — [notion.com](https://www.notion.com/)
  - Blog body is Lyon Text 20/31; headings and UI stay NotionInter — [blog](https://www.notion.com/blog/how-notion-handles-concurrent-editing-with-crdts)
  - The releases page sets its body in NotionInter 18/28 instead — [releases](https://www.notion.com/releases)
- Arc:
  - `inter-var-latin.woff2` is Inter v3.012 variable, `wght` axis only, GSUB calt/dnom/frac/locl/numr — [inter-var-latin.woff2](https://arc.net/fonts/inter-var-latin.woff2)
  - Arc sets Inter body at 17/25.5, **weight 500**, #696969, tracking 0 — [arc.net](https://arc.net/)
- Resend:
  - `inter_variable` is "Inter Variable" v4.001 (designer Rasmus Andersson). It has axes **opsz 14–32** and wght 100–900, and the full feature set: cv01–cv14, ss01–ss08, tnum, zero, case and more — [inter_variable.woff2](https://resend.com/_next/static/immutable/media/inter_variable.p.2v4uvb3i5caxn.woff2)
  - Resend's Inter elements have `font-feature-settings: normal` and the default `font-optical-sizing: auto`, at sizes 14–24px — [Resend blog](https://resend.com/blog/design-email-for-humans-and-agents)
- No site applies cv11 or tnum to Inter in any computed style I collected — [raycast.com](https://www.raycast.com/), [notion.com](https://www.notion.com/), [arc.net](https://arc.net/), [resend.com](https://resend.com/)

### Inferences
- **Two of the three Inter users effectively ship plain Inter.** Raycast's (Next.js / Google) subset and Notion's stripped static files mean their `ss03`, `ss02`, `ss08` and `lnum` declarations render nothing. If litt.md wants features like cv11 or tnum, it has to self-host a full Inter build. Declaring them in CSS is not enough.
- **Resend is the only case of real optical sizing.** With `opsz` 14–32 and `font-optical-sizing: auto`, Chromium matches opsz to the px size. Text at 14–16px uses Inter's text cut, and 24px+ moves toward Display. None of the sites uses Inter for large display text with Inter Display, so none offers a precedent for litt.md's Hanken Grotesk + Inter split. The closest analogues are Arc (display face + Inter body) and Resend (display faces + Inter body).
- **Weight and tracking at body size.** Arc sets Inter body at weight 500 and Raycast's home body at 500 too: a "medium-body" look on cream or dark backgrounds. litt.md's 400 is lighter than both. Raycast's positive tracking on dark-mode Inter (+0.01 to +0.02em) is the opposite of litt.md's −0.003 to −0.006em at 15–17px.

### Gaps
- I could not confirm Raycast's or Notion's exact subsetting pipelines. The no-op reading of their feature settings rests on the font files that loaded, but a different file could be served to other locales or scripts.

## Q3. Hero composition: headline size, subhead size, colour and width, and the gaps to the CTA

### Takeaway
- **Headline–subhead gaps cluster tightly at 8–16px:** Resend 8, Notion 12, Raycast AI 16. Raycast home is the outlier at 32.
- **Subhead–CTA gaps are 20–32px:** Notion 20, Raycast AI 24, Resend 32.
- **Subheads are 16–20px**, set in a 50–90% alpha of the text colour or a mid grey, and capped at 320–500px wide.
- **Cursor has no subhead.** Its h1 is a 26px sentence with the CTAs 22.4px below.

### Cited Findings
- Raycast home — [raycast.com](https://www.raycast.com/):
  - h1: 64/70.4, 600, white, max-width 540px, centred.
  - Hero text box: `display:flex`, `gap:32px`, max-width 818px.
  - Subhead (p): 18px, 400, +0.2px, computed colour rgb(255,255,255), 786px wide, **32px** below the h1.
  - The next text element, the "Download for Mac" button (14/16, 500, h36, bg #E6E6E6, text #2F3031, radius 8, padding 8/12), is 212px below the subhead and sits outside the text box.
  - A GeistMono 12px note at 40% opacity sits 16px below the button.
- Raycast AI page — [raycast.com/core-features/ai](https://www.raycast.com/core-features/ai):
  - h1: 48/50.4, 500, −0.04em, max-width 450px.
  - Subhead: 16/24, 400, rgba(255,255,255,.5), **max-width 320px**, `margin-top:16px` → gap 16.
  - CTA row: `margin-top:24px` → gap 24.
  - Small print "macOS Tahoe and Apple Silicon required": 14/20, rgba(255,255,255,.4), 16px below the CTA.
- Cursor home — [cursor.com](https://cursor.com/):
  - Hero section: `padding-top:112px` (5v).
  - h1: 26/32.5, 400, −0.0125em, `text-wrap:balance`, in a `max-w-prose` box 658px wide.
  - h1 `margin-bottom:22.4px` (1v) → two pill CTAs (16/16, 400, h43, padding 12.48/21.6, fully rounded). The primary is bg #26251E with text #F7F7F4.
  - No subhead.
- Cursor article heads — [cursor.com/blog/git-at-any-scale](https://cursor.com/blog/git-at-any-scale):
  - h1: 36/43.2.
  - Meta line (author, read time): 16px, 50% colour, 24px below.
- Notion home — [notion.com](https://www.notion.com/):
  - h1: 96/100, 600, −0.048em, centred, balanced wrap, `margin-bottom:12px`.
  - Subhead: 20/28, 400, −0.125px, rgba(0,0,0,.898), `margin-bottom:20px`.
  - CTAs: 16/24, 500, h38, radius 8, padding 6/15, primary bg #0075DE.
  - Gaps: **12 then 20**.
- Notion AI page — [notion.com/product/ai](https://www.notion.com/product/ai):
  - h1: 64/64, 700, −0.033em, in a 500px column.
  - Subhead: 20/28, 3 lines in 500px, 12px below the h1.
  - CTAs: h48, 20px below the subhead.
- Notion releases — [notion.com/releases](https://www.notion.com/releases):
  - h1: 64/64, then subhead 20/28 at 12px, then a link at 16px.
- Resend home — [resend.com](https://resend.com/):
  - Eyebrow link sits directly above the h1.
  - h1: domaine 96/96, 400, gradient fill, 480px wide.
  - Subhead: Inter 18/27, #A1A4A5, **max-width 480px**, `margin-top:8px`, `margin-bottom:32px`.
  - CTAs: Inter 16/24, 600.
  - Gaps: **8 then 32**.
- Resend blog post — [resend.com/blog/design-email-for-humans-and-agents](https://resend.com/blog/design-email-for-humans-and-agents):
  - h1: 76.8/76.8.
  - Dek: 18/27, #A1A4A5, max-width 768px, 8px below.
  - Author: 32px below the dek.
- Arc home — [arc.net](https://arc.net/):
  - h1: Marlin Soft SQ 45.51/42.25, max-width 700px.
  - Download links: 32px below the h1 (the hero was caught mid-animation at opacity 0.4).
  - Note "FYI: Arc receives Chromium updates only": Marlin 13px, max-width 440px.
- Dia home — [diabrowser.com](https://www.diabrowser.com/):
  - Full-bleed 900px video hero.
  - h1: Exposure 38.79/42.67, 500, white, centred.
  - Download button (h56, fully rounded) about 630px lower, near the bottom of the hero.
- Raycast blog post head — [raycast blog](https://www.raycast.com/blog/a-technical-deep-dive-into-the-new-raycast):
  - h1: 48/62.4, `margin-bottom:12px`.
  - Dek: 18/28.8, #9C9C9D.
  - Date: 24px below the dek.

### Inferences
- **Headline-to-subhead ratios:**
  - Notion home: 96 → 20 (4.8×).
  - Resend: 96 → 18 (5.3×).
  - Raycast home: 64 → 18 (3.6×).
  - Raycast AI: 48 → 16 (3×).
  - litt.md: display 40 over body 15 (2.67×), or over reading 17 (2.35×). That is flatter than every comparator except Cursor's 26px h1, where there is no subhead at all.
- **Gaps against litt.md's 8px grid.** The headline → subhead → CTA gaps fit it: Resend 8/32, Notion 12/20 (12 and 20 are 4px steps), Raycast AI 16/24, Cursor 22.4 (off-grid). A litt.md hero at 8–16 / 24–32 would sit in the middle of the field.
- **Subhead width.** Caps of 320–500px (Raycast 320, Resend 480, Notion 500) hold an 18–20px subhead to roughly 30–55 characters per line.

### Gaps
- The Raycast home subhead's visual colour may differ from its computed white. There may be a gradient or masking effect I did not capture.
- Dia's and Arc's heroes are animated or video-driven, so their gaps are snapshots.

## Q4. Long-form reading: body size and leading, paragraph spacing, heading margins above vs below, measure

### Takeaway
Body text is 16px on every site except Notion's blog (20px serif) and releases page (18px), and Dia's changelog (18px). Leading runs 1.44–1.75, and measures are long: about 78–93 cpl at 645–720px columns.

Paragraph spacing varies widely, from 0.65em (Notion) through 1.25–1.4em (Resend, Cursor) and 2em (Raycast) to 3em (Arc).

The clearest proximity ratios come from Cursor (44.8px above / 11.2px below, 4:1) and Notion's blog (about 77 / 13). Arc's legacy blog has none: 48 above and 48 below.

### Cited Findings
- Raycast blog — [raycast.com/blog/a-technical-deep-dive-into-the-new-raycast](https://www.raycast.com/blog/a-technical-deep-dive-into-the-new-raycast):
  - Body: 16/25.6 (1.6), +0.02em, rgba(255,255,255,.85).
  - Paragraphs: `margin-bottom:32px`, so a **32px** (2em) gap.
  - h2: 24/27.6, 600, `padding-top:48px`, `margin-bottom:32px`. With the previous paragraph's 32px that is **80px above / 32px below** (2.5:1).
  - h3: 18/20.7, `padding-top:48px`, `margin-bottom:16px` → **80 above / 16 below** (5:1).
  - Lists: `margin-bottom:32px`; items 16/24.
  - Figures: margin 64px above and below, and break out to 1200px wide.
  - Text column 714px (container max-width 746px) → **90–93 cpl**.
- Raycast changelog — [raycast.com/changelog/macos/2-8](https://www.raycast.com/changelog/macos/2-8):
  - Intro p: 16/25.6.
  - h2: 24/27.6, `margin-bottom:32px`.
  - List items: 16/24, about 13px apart.
  - Column: 760px.
- Cursor blog — [cursor.com/blog/git-at-any-scale](https://cursor.com/blog/git-at-any-scale):
  - Body: 16/24 (1.5), +0.005em, #26251E.
  - Paragraph gap **22.4px** (1v, 1.4em).
  - h2: 22/28.6, 700, `margin-top:44.8px` (2v), `margin-bottom:11.2px` (0.5v) → **44.8 above / 11.2 below** (4:1).
  - h4: 16/24, 700, 22.4 above / 11.2 below.
  - Headings are prefixed with a "# " anchor glyph.
  - Column 645px (header box max-width 768px) → **89–92 cpl**.
- Cursor changelog — [cursor.com/changelog/cloud-agent-canvases-and-environments](https://cursor.com/changelog/cloud-agent-canvases-and-environments): same rules; h1 36/43.2 sits 44.8px above the first h2; figures take 4px margins plus the paragraphs' 22.4px.
- Notion blog — [notion.com/blog/how-notion-handles-concurrent-editing-with-crdts](https://www.notion.com/blog/how-notion-handles-concurrent-editing-with-crdts):
  - Body: Lyon Text **20/31 (1.55)**, rgba(0,0,0,.898).
  - Paragraph gap **13px** (0.65em). Inline figures get 24px.
  - h2: NotionInter 32/40, 700. Measured about **77px above** (previous paragraph bottom to h2 top) and **13px below**.
  - Column 700px → **81–84 cpl**.
- Notion releases — [notion.com/releases](https://www.notion.com/releases):
  - Body: NotionInter 18/28 (1.556), paragraph margins 11.7px (0.65em).
  - h3: 26/32, 600; 32px above, 24px to the following figure.
  - Release h2: 42/48, 32px below.
  - Column 667px → **76–81 cpl**.
- Resend blog — [resend.com/blog/design-email-for-humans-and-agents](https://resend.com/blog/design-email-for-humans-and-agents):
  - Body: Inter **16/28 (1.75)**, rgba(241,247,254,.71).
  - Paragraph margin **20px** (1.25em).
  - h2: 24/32, 600, white, `margin-top:48px`, `margin-bottom:8px`. The paragraph's 20px wins the margin collapse below, so **48 above / 20 below**.
  - h3: 18/28, 600, same margins.
  - Images: margin 32px, 806px wide.
  - Column 672px (`max-w-2xl`) → **87–91 cpl**.
- Arc blog (2024, legacy) — [arc.net/blog/school-of-browser](https://arc.net/blog/school-of-browser):
  - Body: system 16/24, #717171, paragraph margins **48px** (3em).
  - Subheads: 30/32, 600, `margin-top:48px`, `margin-bottom:8px`. The paragraph's 48px wins below, so **48 / 48**.
  - Column 550px → about 72 cpl (measured with a Linux fallback face).
- Dia changelog — [diabrowser.com/changelog](https://www.diabrowser.com/changelog):
  - Entries: ABC Oracle 18/26, 350, −0.02em.
  - The expanded release-note template (which was hidden, opacity 0, when measured) uses p 16/24 with 8px between paragraphs, and h2 24/26, 550, with `margin-top:30px` / `margin-bottom:24px`.

### Inferences
- **Paragraph spacing.** Converted to em of body size, the comparators run 0.65em (Notion), 1em (Notion editor, see Q5), 1.25em (Resend), 1.4em (Cursor), 2em (Raycast) and 3em (Arc). litt.md's reading style is 17/1.65 (28.05px line). On an 8px grid, 16px (≈0.94em) or 24px (≈1.4em, the same proportion as Cursor) would be the matching choices.
- **Heading proximity.** Ratios of space above to space below run 2.4:1 (Resend) to 6:1 (Notion blog). Cursor's 2v / 0.5v (4:1) is the cleanest scheme to borrow. On litt.md's grid that would be 48 / 12 or 48 / 16. Without proximity, a 400-only scale would lose a key cue, as Arc's 48/48 shows.
- **Measure.** These sites run long lines: 76–93 cpl. That is beyond the classic 66ch. Only Arc (~72) and Notion's releases page (~78) come close to that classic figure.
- **Leading.** litt.md's 1.65 sits between Raycast's 1.6 and Resend's 1.75. Cursor and Notion's sans body use 1.5–1.56. Only Dia tracks body text negatively (−0.02em); Raycast and Cursor track it positively.

### Gaps
- No docs pages were measured: Cursor's docs failed to style in headless, and Raycast's, Notion's and Arc's docs were out of scope for this pass.
- Dia's visible changelog cards weren't fully measured; their template values come from hidden markup.

## Q5. UI text in the product and in product screenshots, including the Notion editor's defaults

### Takeaway
Notion's editor today (published-page view) uses a **system UI stack, not Inter**, and has no letter-spacing. Its steps:
- Page title: 40/48, weight 700.
- H1: 30/39, 600. H2: 24/31.2, 600. H3: 20/26, 600 — all at line-height 1.3.
- Body: 16/24, 400.

Block spacing is built from padding: 2px on the line plus 6px on the block. That gives 16px between body paragraphs. Headings add 30, 26 or 22px of top padding.

Product mock UIs on the marketing sites run 11–13px: Cursor uses system-ui, Raycast uses Inter and SF Pro.

### Cited Findings
- Notion editor font stack, on both title and body: `ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", "Noto Sans Arabic", "Noto Sans Hebrew", Arial, sans-serif, …`. Letter-spacing is `normal` everywhere — [Code Reviews template page](https://notion-templates.notion.site/Code-Reviews-47dabe7212594636be46a2838aaeb882)
- Page title: **40px/48px (1.2), 700**, #2C2C2B (rgb 44,44,43) — [Responsible Disclosure Policy](https://notion.notion.site/Responsible-Disclosure-Policy-5f18bb6b86804eaf989c006131778b9c), [Code Reviews](https://notion-templates.notion.site/Code-Reviews-47dabe7212594636be46a2838aaeb882)
- H1 ("header" block): **30px/39px (1.3), 600**. The h2 element has 2px top and bottom padding; the block wrapper has `padding-top:30px` and `padding-bottom:6px`. Block height for one line: 79px — [Code Reviews](https://notion-templates.notion.site/Code-Reviews-47dabe7212594636be46a2838aaeb882)
- H2 ("sub_header"): **24px/31.2px (1.3), 600**. Wrapper padding 26px top / 6px bottom; line padding 2/2. Block height 67px — [Engineering Guidelines](https://notion-templates.notion.site/Engineering-Guidelines-cba0bbc5ebea4e719c91702d1c9029c5)
- H3 ("sub_sub_header"): **20px/26px (1.3), 600**. Wrapper padding 22px top / 6px bottom; line padding 2/2. Block height 58px — [Code Reviews](https://notion-templates.notion.site/Code-Reviews-47dabe7212594636be46a2838aaeb882)
- Text block: **16px/24px (1.5), 400**. Line padding 2/2; wrapper padding 6/6. Block height 40px for one line, 64px for two — [Responsible Disclosure Policy](https://notion.notion.site/Responsible-Disclosure-Policy-5f18bb6b86804eaf989c006131778b9c)
- Bulleted lists: top-level item wrappers have 6px top / 1px bottom padding (first item) or 1/6 (last item); nested items 2/1 and 1/0. Line padding 2/2 — [Code Reviews](https://notion-templates.notion.site/Code-Reviews-47dabe7212594636be46a2838aaeb882), [Engineering Guidelines](https://notion-templates.notion.site/Engineering-Guidelines-cba0bbc5ebea4e719c91702d1c9029c5)
- Other blocks — [Code Reviews](https://notion-templates.notion.site/Code-Reviews-47dabe7212594636be46a2838aaeb882), [Engineering Guidelines](https://notion-templates.notion.site/Engineering-Guidelines-cba0bbc5ebea4e719c91702d1c9029c5):
  - Table of contents: 14px/18.2px in #7D7A75.
  - Code block: 14px/20px, inner padding 12 and 24px.
  - Callout: padding 12px inside an 8px block padding.
- Content width: **720px** by default and **1248px** for full-width pages at a 1440px viewport. The "small text" option gives 14px/21px body with a 32px/38.4px title — [Responsible Disclosure Policy](https://notion.notion.site/Responsible-Disclosure-Policy-5f18bb6b86804eaf989c006131778b9c), [What's New (small text, full width)](https://notion.notion.site/What-s-New-157765353f2c4705bd45474e5ba8b46c)
- Cursor's product mock UI on the home page — [cursor.com](https://cursor.com/):
  - system-ui at 11/14 (500, +0.0044em, uppercase group labels like "IN PROGRESS"), 12/16, 13/17.33 and 13/20.15. Mock headings: 20/31, 700.
  - Matches the `--text-product-*` tokens (11/12/13px).
- Raycast's launcher mocks — [raycast.com](https://www.raycast.com/), [AI](https://www.raycast.com/core-features/ai):
  - Inter 13/16 buttons (padding 8/12, radius 10), 14/20 list rows, 15/22.5 descriptions at rgba(255,255,255,.4).
  - Search placeholder: 16/18.4 at rgba(255,255,255,.4).
  - "SF Pro Text" for keycaps; `kbd` 11–14px.

### Inferences
- **Effective gaps in the Notion editor:**
  - Body to body: 2 + 6 + 6 + 2 = **16px** (1em).
  - Above an H1: previous block 8 + 30 + 2 = **40px**; below it: 2 + 6 + next block 8 = **16px** (2.5:1).
  - Above an H2: 36px; above an H3: 32px; below either: 16px.
- **Steps compared with litt.md.** Notion's editor steps are 40 / 30 / 24 / 20 / 16, ratios ≈1.33 / 1.25 / 1.2 / 1.25, all at 1.3 heading leading and 600 weight. litt.md runs 40 / 32 / 28 / 24 / 20 / 17, flatter steps of 1.14–1.25. With a single weight, litt.md has to carry hierarchy through size, tracking and spacing, whereas Notion adds the 600-vs-400 contrast.
- **Spacing grid.** Notion's block system is effectively on a 4px grid with 2px and 6px parts. litt.md's 8px grid would need 16px between paragraphs and 32–40px above headings to match it.

### Gaps
- Measurements are from public notion.site pages (the published read view). The logged-in app and the "Serif" / "Mono" page fonts were not measured.
- Historical editor values circulated in older write-ups (for example the older body colour rgb(55,53,47)) could not be verified from a citable source in this pass. The current light text colour is #2C2C2B.
- Raycast's and Cursor's native apps were not inspected directly.

## Q6. Text colour steps: primary, secondary, tertiary, light and dark

### Takeaway
- **Raycast** (dark) mixes alpha whites (.9 / .85 / .8 / .5 / .4) with an opaque grey ramp: #9C9C9D secondary, #6A6B6C tertiary, #434345 inactive.
- **Cursor** derives every step from one foreground colour through `color-mix` at 92 / 60 / 50 / 40%: #26251E on #F7F7F4 in light, #EDECEC on #14120B in dark.
- **Notion marketing** uses black at .95 / .898 / .6 / .54 alpha plus warm greys. **Notion's editor** uses #2C2C2B and #7D7A75 in light, and #F0EFED on #191919 in dark.
- **Dia** uses black alphas .85 / .7 / .6 / .55 / .5 / .45 / .424 / .4 / .2 on #FBFAF6.
- **Resend** uses .937 / .71 alpha off-whites plus #A1A4A5.

### Cited Findings
- Raycast — [raycast.com](https://www.raycast.com/), [blog](https://www.raycast.com/blog/a-technical-deep-dive-into-the-new-raycast), [changelog](https://www.raycast.com/changelog/macos/2-8):
  - Background #07080A.
  - Headings: white.
  - Blog body: rgba(255,255,255,.85). List items: .8. Strong: .9. Figcaptions: .5. Muted: .4.
  - Nav and secondary: #9C9C9D. Tertiary: #6A6B6C. Inactive list items: #434345.
  - Tokens: `--color-fg` #F4F4F6, `--color-fg-200` #C2C7CA (used for dates), `--color-fg-300` #78787C, `--color-fg-400` #5E6366.
  - Accent: #FF6363 / #FF6161.
- Cursor:
  - Light: `--color-theme-fg` #26251E on bg #F7F7F4. `--color-theme-text-sec` is a 60% oklab mix, `-text-mid` 50%, `-text-tertiary` 40%, `--color-theme-product-text` 92%. Links/accent: #F54E00 — [cursor.com](https://cursor.com/)
  - Dark (`[data-theme="dark"]`, used under `prefers-color-scheme: dark`): fg #EDECEC on bg #14120B, with the same 60% and 50% mixes — [cursor.com/blog/git-at-any-scale (dark)](https://cursor.com/blog/git-at-any-scale)
- Notion marketing — [notion.com](https://www.notion.com/), [blog](https://www.notion.com/blog/how-notion-handles-concurrent-editing-with-crdts):
  - Headings: rgba(0,0,0,.95). Body: rgba(0,0,0,.898). Dates: .6. Tertiary/footer: .54.
  - Stat text: #615D59 (`--tatami-color-gray-600`). Grey ramp: #F9F9F8 → #191918.
  - CTA blue: #0075DE. Secondary CTA text: #005BAB.
- Notion editor:
  - Light: text #2C2C2B; grey text and TOC #7D7A75; bg #FFFFFF.
  - Dark: text #F0EFED on #191919; grey #7D7A75 unchanged.
  - [Code Reviews light/dark](https://notion-templates.notion.site/Code-Reviews-47dabe7212594636be46a2838aaeb882)
- Arc — [arc.net](https://arc.net/), [blog](https://arc.net/blog/school-of-browser):
  - Cream #FFFCEC. Body grey #696969. Blog body #717171. Blog headings #171717. Meta #8B8B8B.
  - Display blue #3139FB. Button #2702C2.
- Dia — [diabrowser.com](https://www.diabrowser.com/), [changelog](https://www.diabrowser.com/changelog):
  - Background #FBFAF6. Text rgba(0,0,0,.85).
  - Further steps: .7 (h3), .6 (body), .55 (labels), .5, .45, .424 (mono nav), .4 (changelog meta), .2 (inactive numerals).
- Resend — [resend.com](https://resend.com/), [blog](https://resend.com/blog/design-email-for-humans-and-agents):
  - Background #000. Base text #F0F0F0.
  - Headings: rgba(252,253,255,.937). Body: rgba(241,247,254,.71). Secondary: #A1A4A5. Muted code: #6C6C6C.

### Inferences
- **Common practice.** Every site builds secondary and tertiary text as an alpha or mix of the primary colour rather than as unrelated hex values. The 60% / 40% pair (Cursor) and .6 / .54 pair (Notion) are the most common secondary/tertiary steps.
- **Body vs headings on dark.** Body copy in dark mode is deliberately not full-strength: Raycast .85 and Resend .71, with headings at 1.0 / .94. This is how they add heading/body contrast without changing weight. It's directly reusable for litt.md's 400-only scale.

### Gaps
- I ran dark-mode (`prefers-color-scheme: dark`) passes only for Cursor, the Notion editor and Resend. Arc, Dia and Notion marketing were measured in light only, so I can't say whether they have dark themes. Raycast's marketing site rendered dark only and Resend's dark only, so verified light/dark pairs exist only for Cursor and the Notion editor.

## Q7. Vertical rhythm and section spacing systems

### Takeaway
Section spacing is much larger than litt.md's 64/96/128 at Raycast (224px paddings) and Dia (80–150px margins). It is comparable at Notion and Resend (80–96px paddings). Cursor uses a non-8px unit: 22.4px "v", giving 67.2 / 112 / 134.4px sections. The spacing tokens of Raycast, Notion, Arc and Resend are all 4px-based.

### Cited Findings
- Raycast: home content blocks use `padding-top/bottom: 224px` (`--spacing-13`), and the hero block has `margin-bottom: 224px` — [raycast.com](https://www.raycast.com/). AI page blocks use `margin: 180px 0` (collapsing to 180px between blocks); the footer starts with `padding-top: 200px` — [AI](https://www.raycast.com/core-features/ai)
- Cursor — [cursor.com](https://cursor.com/):
  - Hero section: `padding-top:112px` (5v), `padding-bottom:67.2px` (3v).
  - Content sections: 67.2px top and bottom, so 134.4px between section contents.
  - Logo strip: `padding-bottom:33.6px` (1.5v). Final CTA section: `padding-bottom:134.4px` (6v).
  - `--v: 1rem * 1.4`, plus fractional tokens `--spacing-v1/12` … `v10/12`, and `--spacing-prose-narrow/medium-wide/wide` = 48ch / 80ch / 96ch.
- Notion: home sections use `padding: 96px 0` — [notion.com](https://www.notion.com/); product/AI sections use `padding: 80px 0` — [AI](https://www.notion.com/product/ai). tatami spacing tokens: 0, 4, 8, 12, 16, 20, 24, 28, 30, 32, 40, 48, 56, 64, 72, 80, 96, 100, 128, 160px — [notion.com](https://www.notion.com/)
- Resend: sections use `padding: 96px 0` (192px between contents), and the first section sits 80px below the hero (`margin-top:80px`) — [resend.com](https://resend.com/)
- Dia: sections use `margin-top:80px` / `margin-bottom:100px`, then 120/120. The closing CTA h2 has `margin-top:150px` / `margin-bottom:100px` — [diabrowser.com](https://www.diabrowser.com/)
- Arc: `--space-*` tokens 4–72px. The home page stacks full-height 920–1080px panels with no section padding — [arc.net](https://arc.net/)

### Inferences
- **Mapping litt.md's tiers.** litt.md's 64/96/128 map closely onto Notion (80–96) and Resend (96, with 80 after the hero). Raycast's 224px and Cursor's 134.4px between contents point to a fourth, larger tier (≈160–224px) for marketing pages, if litt.md is ever used for them.
- **Grid choice.** Cursor shows a body-line-height-based unit (1.4 × 16px) as an alternative to an 8px grid. litt.md's 8px grid matches the token systems of Raycast, Notion, Arc and Resend.

### Gaps
- Section spacing at mobile and tablet breakpoints was not captured.
- Raycast's section markup uses unnamed CSS-module divs, so which token a given padding comes from is inferred from matching values (224px = `--spacing-13`).
