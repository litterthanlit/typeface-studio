# Linear and Vercel: typographic hierarchy and spacing systems (measured 19 October 2026)

*How these numbers were collected: I ran headless Chromium at a 1440×900 viewport (390px where a value is marked "mobile") and read `getComputedStyle` and `getBoundingClientRect` on 2026-10-19. Vercel was loaded in the light color scheme. Linear's marketing site is dark only. A "gap" is measured from the bottom of one element's box to the top of the next element's box, so it includes half-leading. Token values come from the live CSS custom properties and CSS rules on each site. I downloaded the font files the sites serve and read them with fontTools. Every measured value cites the page it was measured on.*

## Q1. What is each company's type scale today, step by step (size / line-height / letter-spacing / weight / family)?

### Takeaway
**Linear** uses one family, Inter Variable 4.0, which has an `opsz` axis. Its type is defined as CSS tokens:
- a 9-step "title" scale from 17 to 72px;
- a 6-step "text" scale from 10 to 17px.

Marketing pages render 72, 64 and 48px display type over 24px and 15px copy. The blog, changelog and docs use 48, 32 and 24px headings over 17px or 15px body.

**Vercel** publishes 29 Geist classes in fixed px, plus one undocumented class: 10 heading, 3 button, 9 label and 7 copy. The marketing site overrides Geist's 600 heading weight with 400 or 450. The blog uses its own heading styles: 32/35.2 and 28/30.8 at weight 400.

### Cited Findings
**Linear token scale.** These are the live `:root` custom properties: `--title-N` and `--text-*` shorthands plus their `-size`, `-line-height` and `-letter-spacing` sub-tokens — [linear.app](https://linear.app/)

| Token | Size | Line-height (unitless) | Tracking | Weight in token |
|---|---|---|---|---|
| title-9 | 4.5rem = 72px | 1 | −0.022em | 590 |
| title-8 | 4rem = 64px | 1.06 | −0.022em | 590 |
| title-7 | 3.5rem = 56px | 1.1 | −0.022em | 590 |
| title-6 | 3rem = 48px | 1 | −0.022em | 590 |
| title-5 | 2.5rem = 40px | 1.1 | −0.022em | 590 |
| title-4 | 2rem = 32px | 1.125 | −0.022em | 590 |
| title-3 | 1.5rem = 24px | 1.33 | −0.012em | 590 |
| title-2 | 1.25rem = 20px | 1.33 | −0.012em | 590 |
| title-1 | 1.0625rem = 17px | 1.4 | −0.012em | 590 |
| text-large | 1.0625rem = 17px | 1.6 | 0 | (400) |
| text-regular | 0.9375rem = 15px | 1.6 | −0.011em | (400) |
| text-small | 0.875rem = 14px | calc(21/14) = 1.5 | −0.013em | (400) |
| text-mini | 0.8125rem = 13px | 1.5 | −0.01em | (400) |
| text-micro | 0.75rem = 12px | 1.4 | 0 | (400) |
| text-tiny | 0.625rem = 10px | 1.5 | −0.015em | (400) |

- Other Linear tokens:
  - Editor text: `--editor-font-size` 0.9375rem (15px), `--editor-line-height` 1.6, `--editor-letter-spacing` −0.00666667em, `--editor-font-weight` 400.
  - Weights: `--font-weight-light` 300, `normal` 400, `medium` 510, `semibold` 590, `bold` 680.
  - Families: `--font-regular` "Inter Variable", "SF Pro Display", -apple-system…; `--font-monospace` "Berkeley Mono"; `--font-serif-display` "Tiempos Headline". I did not see the serif on any page I measured.
  - A second, older-looking `--font-size-*` set also exists: micro 11px, mini 12px, small 13px, regular 15px, large 18px, title3 20px, title2 24px, title1 36px.

  — [linear.app](https://linear.app/)

**Linear, as rendered:**
- Homepage. All values are Inter Variable with `"cv01","ss03"`. — [linear.app](https://linear.app/)
  - **h1**: 64/64, weight 510, −1.408px (−0.022em), #f7f8f8, two lines.
  - **Pre-footer h2**: 72/72, weight 510, −1.584px.
  - **Section h2**: 48/48, weight 510, −1.056px.
  - **Section description**: 24/31.92, weight 400, −0.288px, #d0d6e0.
  - **Hero subhead**: 15/24, weight 400, −0.165px, #8a8f98.
  - **Feature-card h3**: 20/26.6, weight 590.
  - **Testimonial quote**: 32/36, weight 400, −0.704px, set on a light card.
  - **Nav**: 13/19.5, weight 400, #8a8f98.
  - **Hero buttons**: 16px, weight 510, in a 44px pill.
  - **Header "Sign up" button**: 13px, weight 510, 32px tall.
  - **Eyebrows and figure labels**: Berkeley Mono 12/16.8, uppercase, in #62666d ("POWERING THE COMPANIES…", dates) or #8a8f98 ("FIG 0.1").
  - **Footer**: column heads 13/19.5 at weight 510; links 13/19.5 at weight 400 in #8a8f98; legal links in #62666d.
- Homepage at 390px (mobile): h1 38/41.8 (ratio 1.1), weight 510, −0.836px. Section h2 drops to 24/31.92 at weight 510. — [linear.app](https://linear.app/)
- Product page (/plan):
  - h1: 72/72, weight 500.
  - Section h2: 48/48, weight 510.
  - Feature h3: 15/24, weight 510, #f7f8f8, directly over a 15/24 paragraph at weight 400 in #8a8f98. The h3 is the same size as the body.

  — [linear.app/plan](https://linear.app/plan)
- Blog article — [Linear Now article](https://linear.app/now/behind-the-latest-design-refresh)
  - **h1**: 48/48, weight 590, −1.056px, max-width 900px, `text-wrap: balance`.
  - **h3**: 24/31.92, weight 590, −0.288px.
  - **h4**: 17/23.8, weight 590, −0.204px (−0.012em).
  - **Body**: 17/27.2, weight 400, tracking normal, #d0d6e0.
  - **Inline links**: #f7f8f8 at the body's size and weight. `--link-text-decoration` is `none`.
  - **Strong**: weight 590, #f7f8f8.
  - **Byline**: 15/24, #8a8f98.
  - **Captions**: 12/16.8 and 13/19.5, #8a8f98.
- Changelog entry: title h2 32/36, weight 590, −0.704px. Sub-feature h2 24/31.92, weight 590. Body 17/27.2 in #d0d6e0. Date 15/24 in #8a8f98. — [Linear changelog](https://linear.app/changelog/2026-10-08-stacked-pull-requests)
- Docs — [Linear Docs: Inbox](https://linear.app/docs/inbox)
  - **h1**: 32/36, weight 590.
  - **h2**: 24/31.92, weight 590.
  - **Body**: 15/24, −0.165px, #d0d6e0.
  - **Sidebar**: 14/21, weight 510, #8a8f98.
  - **"On this page" list**: 13/19.5, #8a8f98; the current item is #f7f8f8.
  - **kbd**: 12px, weight 510.
- Brand page: h1 40/44, weight 590, −0.88px. Subtitle 17/27.2, weight 400, #8a8f98. Section h3 24/31.92, weight 590. Paragraphs 15/24 in #8a8f98. — [linear.app/brand](https://linear.app/brand)

**Vercel Geist tokens.** These are the CSS rules behind the classes documented on the Typography page, with the page's own usage notes. Classes "pre-set a combination of font-size, line-height, letter-spacing, and font-weight for you based on the Geist Core Figma system." — [Geist Typography](https://vercel.com/geist/typography)

| Class | Family | Size / line-height | Tracking | Weight | `<strong>` modifier | Documented usage |
|---|---|---|---|---|---|---|
| text-heading-72 | Geist Sans | 72/72 | −4.32px | 600 | — | "Used to introduce pages or sections" (all headings) |
| text-heading-64 | Sans | 64/64 | −3.84px | 600 | — | |
| text-heading-56 | Sans | 56/56 | −3.36px | 600 | — | |
| text-heading-48 | Sans | 48/56 | −2.88px | 600 | — | |
| text-heading-40 | Sans | 40/48 | −2.4px | 600 | — | |
| text-heading-32 | Sans | 32/40 | −1.28px | 600 | Subtle: 500 + gray-900 | |
| text-heading-24 | Sans | 24/32 | −0.96px | 600 | Subtle: 500 + gray-900 | |
| text-heading-20 | Sans | 20/26 | −0.4px | 600 | Subtle: 500 + gray-900 | |
| text-heading-16 | Sans | 16/24 | −0.32px | 600 | Subtle: 500 + gray-900 | |
| text-heading-14 | Sans | 14/20 | −0.28px | 600 | — | |
| text-button-16 | Sans | 16/20 | normal | 500 | — | "Largest button." |
| text-button-14 | Sans | 14/20 | normal | 500 | — | "Default button." |
| text-button-12 | Sans | 12/16 | normal | 500 | — | "Only used when a tiny button is placed inside an input field." |
| text-label-20 | Sans | 20/32 | normal | 400 | — | — |
| text-label-18 | Sans | 18/20 | normal | 400 | — | — |
| text-label-16 | Sans | 16/20 | normal | 400 | Strong: 500 + gray-1000 | "Used in titles to help differentiate from regular" |
| text-label-14 | Sans | 14/20 | normal | 400 | Strong: 500 | "Most common text style of all. Used in many menus." |
| text-label-14-mono | Geist Mono | 14/20 | normal | 400 | — | "Largest form of mono, to pair with larger (>14) text." |
| text-label-13 | Sans | 13/16 | normal | 400 | Strong: 500 | "Used as a secondary line next to other labels. Tabular is used when conveying numbers for consistent spacing." |
| text-label-13-mono | Mono | 13/20 | normal | 400 | — | "Used to pair with Label 14, as the smaller mono size looks better in that pairing." |
| text-label-12 | Sans | 12/16 | normal | 400 | Strong: 500 | "Used for tertiary level text in busy views, like Comments, Show More and the capitals in Calendars." |
| text-label-12-mono | Mono | 12/16 | normal | 400 | — | — |
| text-copy-24 | Sans | 24/36 | normal | 400 | Strong: 550 + gray-1000 | "For hero areas on marketing pages." |
| text-copy-20 | Sans | 20/36 | normal | 400 | Strong: 550 | "For hero areas on marketing pages." |
| text-copy-18 | Sans | 18/28 | normal | 400 | Strong: 550 | "Mainly for marketing, big quotes." |
| text-copy-16 | Sans | 16/24 | normal | 400 | Strong: 550 | "Used in simpler, larger views like Modals where text can breathe." |
| text-copy-14 | Sans | 14/20 | normal | 400 | Strong: 550 | "Most commonly used text style." |
| text-copy-13 | Sans | 13/18 | normal | 400 | Strong: 550 | "For secondary text and views where space is a premium." |
| text-copy-13-mono | Mono | 13/18 | normal | 400 | — | "Used for inline code mentions." |

- More from the Geist Typography page — [Geist Typography](https://vercel.com/geist/typography)
  - The CSS also contains a `text-copy-14-mono` class (14/20) that the documentation table does not list.
  - Weight variables: `--font-weight-normal` 400, `--font-weight-medium` 500, `--font-weight-semibold` 600.
  - Responsive variants exist for widths of 601px and up: `md:text-heading-72`, `md:text-heading-40`, `md:text-copy-20`, `md:text-label-14`.
  - Label is "Designed for single-lines, and given ample line-height for highlighting & marrying up with icons". Copy is "Designed for multiple lines of text, having a higher line height than Label."
- Vercel homepage, as rendered — [vercel.com](https://vercel.com/)
  - **h1** "Agentic Infrastructure": 64/64, weight **400**, −3.84px, #171717, two lines.
  - **Section h2**: 56/56, weight **450**, −3.36px.
  - **Card titles**: 24/32, weight 450, −0.96px.
  - **Product names**: 24/26.4, weight 450, −1.2px.
  - **Hero side list**: each item starts with a 16/24 phrase at weight 450 (−0.32px, #171717) and continues in 16/24 at weight 400 in #4d4d4d.
  - **Nav**: 14/20, weight 400, #4d4d4d.
  - **Hero buttons**: 16/24, weight 500. Header buttons: 14/21, weight 500.
  - **"New" badge**: 11/20, weight 500, +0.2px, capitalized.
  - **Mobile (390px)**: h1 48/56, weight 400, −2.88px. h2 32/40, weight 450, −1.6px.
- AI Gateway product page — [vercel.com/ai-gateway](https://vercel.com/ai-gateway)
  - **Eyebrow**: Geist Mono 13/16, weight 600, uppercase.
  - **h1**: 64/64, weight 450, with an inline "GATEWAY" set at 34/34, weight 600, uppercase.
  - **Subhead**: 18/28, weight 400, #4d4d4d.
  - **Headings**: section h2 56/56 at weight 450; a secondary h2 48/56 at weight 450; h3 24/32 at weight 450.
  - **Stats**: Geist Pixel Square at 110/96 and 72/72.
  - **Body**: 16/25.6, #4d4d4d.
  - **FAQ questions**: 20/32, weight 400.
  - **Step numbers**: 24/36, #8f8f8f.
- Blog post — [Vercel blog](https://vercel.com/blog/vercel-ship-2026-recap)
  - **h1**: 48/56, weight 450, −2.88px.
  - **h2**: 32/35.2, weight **400**, −1.28px.
  - **h3**: 28/30.8, weight 400, −1.28px.
  - **Pull quote**: 32/38.4, weight 400.
  - **Body**: 18/28, weight 400, tracking normal, #171717. Bold (`b`) is weight 600.
  - **Figcaption**: 14/20, #4d4d4d.
- Docs. These match the Geist tokens except h3. — [Vercel Docs](https://vercel.com/docs/getting-started-with-vercel)
  - **h1**: 40/48, weight 600, −2.4px (= heading-40).
  - **h2**: 24/32, weight 600, −0.96px (= heading-24).
  - **h3**: 19.2/26, weight 600, −0.4px.
  - **Body**: 16/27.2, weight 400, #171717. Links are 16/27.2 at weight 500.
  - **Sidebar**: 14/20, weight 500, −0.28px, #4d4d4d.
  - **"On this page" and dates**: #7d7d7d.
- Font page: specimen 160/160, weight 400, −4.8px. Section labels 40/40, weight 400, −1.6px. h3 32/40, weight 400. Body 18/28, −0.36px, #4d4d4d, with strong at weight 500 in #171717. — [vercel.com/font](https://vercel.com/font)

### Inferences
- **Neither scale is modular.** The sizes step up by roughly 1.13–1.33 each time:
  - Linear: 17→20→24→32→40→48→56→64→72.
  - Geist: 14→16→20→24→32→40→48→56→64→72.

  Both move in 8px steps from 32px upward, and in finer 3–4px steps below that.
- **Linear's text tier matches litt.md almost exactly.** Linear has text-mini 13, text-regular 15 and text-large 17. litt.md has small 13, body 15 and reading 17.
- **Neither company has a 28px step.** litt.md's h2 is 28px. Vercel uses 28 only in the blog's h3.
- **Both run display tiers above litt.md's ceiling of 40px.** Linear uses 48–72px on marketing pages; Geist goes 40–72px.
- **Ratios between headline and body:**

| Pairing | Headline | Body | Ratio |
|---|---|---|---|
| Linear hero | 64 | 15 | 4.3× |
| Linear section | 48 | 24 | 2.0× |
| Linear blog h1 | 48 | 17 | 2.8× |
| Linear blog h3 | 24 | 17 | 1.41× |
| Linear docs h1 | 32 | 15 | 2.1× |
| Linear docs h2 | 24 | 15 | 1.6× |
| Vercel blog h1 | 48 | 18 | 2.7× |
| Vercel blog h2 | 32 | 18 | 1.78× |
| Vercel docs h1 | 40 | 16 | 2.5× |
| Vercel docs h2 | 24 | 16 | 1.5× |
| Vercel AI Gateway hero | 64 | 18 | 3.6× |

### Gaps
- I did not measure Linear's logged-in app UI, because it needs an account. App-level values here come from the shared tokens and from the product mockups embedded in the homepage: 13px weight-510 sidebar items, 12/14 metadata at weight 400–510 in #62666d, 12px weight-510 section toggles.
- The Geist page states no letter-spacing for the copy, label or button classes; they have none set.
- Linear does not publish its scale. The token names are internal CSS variables and could change without notice.

## Q2. What weights do they use for headlines, body and labels? How heavy is display type? Do they get hierarchy without bold?

### Takeaway
Neither company sets display type heavier than 600.
- **Linear**: headlines are 510 on marketing pages and 590 in the blog and docs. Body is 400 and UI labels are 510.
- **Vercel**: the Geist tokens say 600 for headings, 500 for buttons and 400 for copy and labels. The live marketing site renders headlines at **400–450**, and the blog's h2/h3 at **400**.

Both build large parts of their hierarchy without bold. The tools are size jumps, tight tracking and color. Linear also uses a two-tone headline.

### Cited Findings
- **Linear marketing display weight:**
  - Homepage h1 and h2 are weight 510 (`--font-weight-medium`) — [linear.app](https://linear.app/).
  - The /plan h1 is weight 500 — [linear.app/plan](https://linear.app/plan).
- **Linear editorial and docs headings are weight 590:**
  - Blog h1, h3 and h4 — [Linear Now article](https://linear.app/now/behind-the-latest-design-refresh).
  - Docs h1 and h2 — [Linear Docs](https://linear.app/docs/inbox).
  - Changelog h2 — [Linear changelog](https://linear.app/changelog/2026-10-08-stacked-pull-requests).
  - Brand-page h1 — [linear.app/brand](https://linear.app/brand).
- **Linear body and secondary text:**
  - Body is always 400.
  - Weight 300 shows up only in a 15/20 chat-bubble mockup.
  - The bold token (680) was not seen on the marketing headings I measured. One weight-700 "Action items" label appears inside a product mockup on /plan.

  — [linear.app](https://linear.app/); [linear.app/plan](https://linear.app/plan)
- **Linear labels and controls** are 510: 16px hero buttons, 13px sidebar items, 12px kbd keys and 15px tab buttons — [linear.app](https://linear.app/); [Linear changelog](https://linear.app/changelog/2026-10-08-stacked-pull-requests).
- **Geist token weights:**
  - Headings 600 (semibold); buttons 500; labels and copy 400.
  - `<strong>` inside copy is 550, and inside labels 500.
  - The heading "Subtle" modifier (a nested `<strong>`) drops to 500 *and* changes color to gray-900. It exists only for heading-32, 24, 20 and 16.

  — [Geist Typography](https://vercel.com/geist/typography)
- **Vercel marketing overrides the token weight:**
  - Homepage h1 64px at 400; h2 56px at 450 — [vercel.com](https://vercel.com/).
  - AI Gateway h1 64px at 450; h2 at 450; h3 24px at 450 — [vercel.com/ai-gateway](https://vercel.com/ai-gateway).
  - Blog h1 at 450; h2 32px and h3 28px at 400 — [Vercel blog](https://vercel.com/blog/vercel-ship-2026-recap).
  - Font-page section labels 40px at 400 — [vercel.com/font](https://vercel.com/font).
  - Only the docs keep the 600 headings — [Vercel Docs](https://vercel.com/docs/getting-started-with-vercel).
- **Hierarchy without bold, observed cases:**
  - **Vercel blog**: h2 at 32px/400 over body at 18px/400. Only size (1.78×) and tracking (−0.04em against 0) separate them — [Vercel blog](https://vercel.com/blog/vercel-ship-2026-recap).
  - **Vercel homepage h1**: 64px at 400 — [vercel.com](https://vercel.com/).
  - **Linear homepage two-tone h2**: "A new species of product tool. Purpose-built for modern teams with AI workflows". The whole h2 is 48px at weight 510 in tertiary #8a8f98, and the first sentence is a `<strong>` in primary #f7f8f8 at the *same* weight (510). The emphasis comes from color alone — [linear.app](https://linear.app/).
  - **Vercel homepage list and quotes, also two-tone**: a lead-in at #171717 (weight 450) runs into a continuation at #4d4d4d (weight 400), at the same size (16/24 and 24/32) — [vercel.com](https://vercel.com/).
- **Places where weight works in place of size:**
  - Linear /plan feature h3s are 15/24 at weight 510 in #f7f8f8, sitting on body at 15/24, weight 400, #8a8f98. Size is equal; weight and color both step — [linear.app/plan](https://linear.app/plan).
  - The Linear blog h4 is 17px at weight 590, line-height 1.4, over a 17px weight-400 body at line-height 1.6 — [Linear Now article](https://linear.app/now/behind-the-latest-design-refresh).

### Inferences
- **Vercel's marketing site is the closest real-world match to litt.md's weight-400-only rule.** It sets display type at 400/450 and gets hierarchy from four things: −0.06em tracking at 48–64px, a 3.5–4× gap between display and body sizes, the #171717 / #4d4d4d two-tone, and generous section spacing (Q5).
- **Linear leans on medium weight (510/590) and on color steps.** Its single-weight trick, the color-split two-tone h2, carries straight over to a 400-only system.
- **Small headings are where 400-only gets hard.** Both companies fall back on weight when a heading is at or near body size: Linear's 15px h3 at 510 and 17px h4 at 590, Geist's heading-14 and heading-16 at 600. At 400-only, litt.md's h4 (20px over 15–17px body) has to rely on size plus color or spacing. Neither company has a 400-weight precedent for headings that close to body size.

### Gaps
- I found no public statement from Vercel explaining why marketing pages moved to 400/450 headlines when Geist specifies 600.
- I could not check whether 450 is a deliberate Geist Figma style or a one-off marketing override, because the Figma file is not public.

## Q3. How does letter-spacing change with size (Vercel's tight display tracking, Linear's Inter tracking)?

### Takeaway
Both use stepped negative tracking defined in px or em.
- **Linear**: a two-step em system. −0.022em from 32px up, −0.012em for 17–24px. Small text sits around −0.01em, except 17px reading text, which has none.
- **Geist**: three steps. −0.06em from 40px up, −0.04em at 24–32px, −0.02em at 14–20px, and zero for all copy, label and button styles.

Vercel's display tracking is about 2.7× tighter than Linear's.

### Cited Findings
- Linear tracking in em. Tokens and computed values agree: 72→−1.584px, 64→−1.408px, 48→−1.056px, 40→−0.88px, 32→−0.704px; 24→−0.288px, 20→−0.24px, 17 (title-1)→−0.204px; 15→−0.165px, 14→−0.182px, 13→−0.13px. — [linear.app](https://linear.app/); [linear.app/brand](https://linear.app/brand); [Linear Now article](https://linear.app/now/behind-the-latest-design-refresh)

| Size (px) | Role | Tracking |
|---|---|---|
| 72, 64, 56, 48, 40, 32 | title-9 to title-4 | −0.022em |
| 24, 20, 17 | title-3 to title-1 | −0.012em |
| 17 | text-large (reading) | 0 |
| 15 | text-regular | −0.011em |
| 14 | text-small | −0.013em |
| 13 | text-mini | −0.01em |
| 12 | text-micro | 0 |
| 10 | text-tiny | −0.015em |
| 15 | editor | −0.0067em |

- Linear's mobile h1 (38px) keeps −0.022em (−0.836px) — [linear.app](https://linear.app/).
- Geist heading tracking converted to em. Copy, label and button classes have no letter-spacing. — [Geist Typography](https://vercel.com/geist/typography)

| Classes | Tracking (px) | Tracking (em) |
|---|---|---|
| 72 / 64 / 56 / 48 / 40 | −4.32 / −3.84 / −3.36 / −2.88 / −2.4 | −0.06 |
| 32 / 24 | −1.28 / −0.96 | −0.04 |
| 20 / 16 / 14 | −0.4 / −0.32 / −0.28 | −0.02 |
| All copy, label, button | none | 0 |

- **Vercel tracking that departs from the tokens:**
  - **Mobile h2**: 32px at −1.6px (−0.05em) — [vercel.com](https://vercel.com/).
  - **Product names**: 24px at −1.2px (−0.05em) — [vercel.com](https://vercel.com/).
  - **Blog h3**: 28px at −1.28px (−0.046em), the 32px step's px value reused — [Vercel blog](https://vercel.com/blog/vercel-ship-2026-recap).
  - **Font page**: 160px specimen at −0.03em, 40px labels at −0.04em, 18px body at −0.02em — [vercel.com/font](https://vercel.com/font).
  - **Font-page mono eyebrow**: 25.2px uppercase at **+1.26px (+0.05em)** — [vercel.com/font](https://vercel.com/font).
  - **11px "New" badge**: +0.2px (+0.018em) — [vercel.com](https://vercel.com/).
- **Uppercase eyebrows:** Linear's Berkeley Mono 12px uppercase labels have tracking `normal` (0) — [linear.app](https://linear.app/).

### Inferences
- **litt.md's tracking is very close to Linear's**: −0.025em at 40, −0.022 at 32, −0.012 at 20. Linear stays at −0.022em all the way to 72px, and jumps straight from −0.022 to −0.012 between 32 and 24. litt.md eases through −0.02 (28) and −0.018 (24).
- **At body sizes, Linear tracks tighter than litt.md.** It uses −0.011em at 15px where litt.md uses −0.003em. Its 12px is 0 where litt.md uses +0.01em. Its 17px reading text is 0 where litt.md uses −0.006em.
- **Why Vercel needs so much more negative tracking (inference, not stated by either company):**
  - Geist has no optical-size axis (Q7), so every size uses text-size spacing and Vercel tightens display sizes by hand to −0.06em.
  - Linear's Inter Variable has an `opsz` axis whose display master (`opsz` 32) is spaced tighter, so it only needs about −0.022em on top.
  - Hanken Grotesk, like Geist, has no optical-size axis. If litt.md wants a tight display look, its display tracking may need to move toward Vercel's −0.04 to −0.06em rather than Linear's −0.022em. This should be checked visually.

### Gaps
- Neither company documents its reasoning for tracking. The em values above are derived from computed px, rounded to 3 decimal places.

## Q4. Line heights: unitless ratios or fixed px? Do they land on a 4px grid?

### Takeaway
- **Linear** uses **unitless ratios**: 1 / 1.06 / 1.1 / 1.125 / 1.33 / 1.4 / 1.5 / 1.6. The rendered results are often fractional (31.92px, 26.6px, 27.2px, 19.5px, 16.8px), so Linear is **not** on a 4px grid.
- **Geist** uses **fixed whole-px line heights**. All 30 classes land on a 2px grid and 27 of 30 on a 4px grid. Vercel's marketing and docs pages then break away with ratio-based values (35.2, 30.8, 27.2, 25.6).

### Cited Findings
- **Linear's line-height tokens** are unitless: title-9 1, title-8 1.06, title-7 1.1, title-6 1, title-5 1.1, title-4 1.125, title-3 and title-2 1.33, title-1 1.4. Text sizes: large 1.6, regular 1.6, small calc(21/14), mini 1.5, micro 1.4, tiny 1.5, editor 1.6 — [linear.app](https://linear.app/).
- **Linear computed line heights:**
  - **Whole px**: 72/72, 64/64, 48/48 — [linear.app](https://linear.app/); 40/44 — [linear.app/brand](https://linear.app/brand); 32/36 and 15/24 — [Linear Docs](https://linear.app/docs/inbox).
  - **Fractional**: 24/31.92 (1.33), 20/26.6, 17/27.2, 17/23.8, 14/21, 13/19.5, 12/16.8 — [linear.app](https://linear.app/); [Linear Now article](https://linear.app/now/behind-the-latest-design-refresh).
  - **Overrides**: marketing display type renders at **1.0** (64/64 and 72/72), even though the title-8 token says 1.06 — [linear.app](https://linear.app/). Mobile h1 is 38/41.8 (1.1) — [linear.app](https://linear.app/).
- **Geist line heights** are fixed px — [Geist Typography](https://vercel.com/geist/typography):

| Group | Line heights in px (ratio) |
|---|---|
| Headings 72→14 | 72 (1.0), 64 (1.0), 56 (1.0), 56 (1.17), 48 (1.2), 40 (1.25), 32 (1.33), **26** (1.3), 24 (1.5), 20 (1.43) |
| Copy 24→13 | 36 (1.5), 36 (1.8), 28 (1.56), 24 (1.5), 20 (1.43), **18** (1.38), **18** for copy-13-mono |
| Labels 20→12 | 32 (1.6), 20 (1.11), 20 (1.25), 20 (1.43), 16 (1.23), 16 (1.33); mono 20 / 20 / 16 |
| Buttons 16/14/12 | 20, 20, 16 |

The three values in bold (26, 18, 18) are the ones off the 4px grid.
- **Vercel's ratio-based line heights outside the token set:**
  - Blog: h2 32/35.2 (1.1), h3 28/30.8 (1.1), pull quote 32/38.4 (1.2) — [Vercel blog](https://vercel.com/blog/vercel-ship-2026-recap).
  - Docs: body 16/27.2 (1.7), h3 19.2/26 — [Vercel Docs](https://vercel.com/docs/getting-started-with-vercel).
  - AI Gateway: body 16/25.6 (1.6) — [vercel.com/ai-gateway](https://vercel.com/ai-gateway).
  - Homepage product names: 24/26.4 (1.1) — [vercel.com](https://vercel.com/).

### Inferences
- **litt.md's ratios mostly produce fractional pixels.** 40×1.1 = 44 is on the 4px grid. 24×1.25 = 30 and 20×1.3 = 26 are whole pixels but off the 4px grid. The rest are fractional: 32×1.15 = 36.8, 28×1.2 = 33.6, 17×1.65 = 28.05, 15×1.55 = 23.25, 13×1.5 = 19.5, 12×1.4 = 16.8. That is the same behavior as Linear's, so it has a precedent and is not a defect. Snapping to the grid would mean following Geist's fixed-px approach.
- **litt.md's display type is looser than both companies'.** Linear's marketing display sizes and Geist's 56–72px headings run at **1.0**; litt.md's display is 1.1.
- **Body line heights compared:**
  - At 17px: Linear 1.6, litt.md 1.65.
  - At 15px: Linear 1.6, litt.md 1.55.
  - Vercel: blog body 18px at 1.56 (28px); docs body 16px at 1.7.

### Gaps
- None material.

## Q5. Vertical spacing: hero stack, section gaps, long-form paragraph spacing and measure

### Takeaway
- **Linear heroes** are compact: a headline, then a 37px gap, a 15px subhead, then about 30px to the media.
- **Vercel heroes** run from a headline to the CTA with roughly a 32px gap. When there is a subhead, it sits 24px below the headline.
- **Section rhythm** is very large on both sites:
  - Linear: 128px top and bottom padding per section, so about 256–330px between pieces of content.
  - Vercel: 208px section margins, 276px around the pre-footer.
- **Long-form**:
  - Linear: 20px between paragraphs, a 624px measure (about 80 characters per line), and 56px above subheads against 12–16px below them.
  - Vercel's blog: a uniform 24px gap between paragraphs *and* headings, and a 684px measure (about 83 characters per line).

### Cited Findings
**Hero and title stacks** (box-to-box gaps)

Linear:
- **Homepage.** No eyebrow; a "New: Loops →" chip sits right-aligned on the subhead line. — [linear.app](https://linear.app/)
  - h1 (64/64, two lines, box 272–400px) to subhead (15/24, #8a8f98): **37px**.
  - Subhead to product image: **30px**.
  - Mobile: h1 (38/41.8) to subhead: 30px.
- **Brand page** — [linear.app/brand](https://linear.app/brand)
  - Breadcrumb (14/21) to h1 (40/44): **8px**.
  - h1 to subtitle (17/27.2): **16px**.
  - Subtitle to CTA (a 44px pill): **48px**.
- **Now index**: h1 (48/48) to filter tabs (15/24): 16px — [linear.app/now](https://linear.app/now).
- **Blog article**: breadcrumb to h1: 15px; h1 (48/48) to hero image: **48px** — [Linear Now article](https://linear.app/now/behind-the-latest-design-refresh).
- **Changelog entry**: breadcrumb to h2 title: 49px; title (32/36, margin-bottom 24px) to hero image: **48px** — [Linear changelog](https://linear.app/changelog/2026-10-08-stacked-pull-requests).
- **Pre-footer**: h2 (72/72) to CTA buttons: **40px** — [linear.app](https://linear.app/).

Vercel:
- **Homepage**: h1 (64/64, two lines, box 328–456px) to CTA button labels at 496px. That is roughly a **32px** gap to the 40px buttons; this is my estimate from the label's box. There is no subhead. The right-hand list has 16/24 items whose tops are 32px apart. — [vercel.com](https://vercel.com/)
- **AI Gateway** — [vercel.com/ai-gateway](https://vercel.com/ai-gateway)
  - h1 (64/64, box 272–403px) to subhead (18/28, #4d4d4d): **24px**.
  - Subhead (box ends at 511px) to CTA labels (551px): roughly **32px** to the button top (estimate).
  - "Limited time" eyebrow to h2 (48/56): 16px. That h2 to its 18/28 paragraph: 16px.
- **Blog**: h1 (48/56, one line, box 194–250px) to first paragraph: **104px**. The byline sits in between. — [Vercel blog](https://vercel.com/blog/vercel-ship-2026-recap)
- **Docs**: h1 (40/48) to lead paragraph (16/27.2): **8px** — [Vercel Docs](https://vercel.com/docs/getting-started-with-vercel).

**Gaps between sections**
- **Linear homepage feature sections**: `padding-top: 128px; padding-bottom: 128px`. Measured from the previous content to the next h2, the gap is 270–330px. The pre-footer has `margin: 224px 0`. `--page-padding-block` is 64px. — [linear.app](https://linear.app/)
- **Linear /plan**: sections are 128px top and bottom too; gaps above h2s are 256–289px — [linear.app/plan](https://linear.app/plan).
- **Linear section-header layout**: the 48px h2 sits in a left column (max-width 541.7px). The 24/31.92 description (#d0d6e0) is in a right column, top-aligned with it (tops at 973px and 975px). The h2's line-height of 1.0 is what keeps the tops level. — [linear.app/plan](https://linear.app/plan)
- **Linear on mobile**: the stack is h2 (24px) to p (15/24) with a **24px** gap — [linear.app](https://linear.app/).
- **Linear /plan feature trios**: image to h3 (15/24) is **32px**; h3 to p is **4px**, so they read as one unit — [linear.app/plan](https://linear.app/plan).
- **Vercel homepage sections** — [vercel.com](https://vercel.com/)
  - Classes `mt-40 @md:mt-52`: 160px at the base breakpoint, **208px** from md up.
  - Pre-footer `mt-53 mb-53 @md:mt-69 @md:mb-69`: 212px, or **276px** from md up.
  - h2 (56px) to its media: **44px**.
  - The 56px h2 to the CTA buttons in the pre-footer: 48px.

**Long-form pages**

| Page | Body | Paragraph gap | Measure | Subhead spacing |
|---|---|---|---|---|
| Linear blog | 17/27.2, #d0d6e0 | **20px** (`margin-top`) | **624px**, about 76–81 cpl | h3 24px: 56 above / 16 below; h4 17px: 28 above / 10 below |
| Linear changelog | 17/27.2 | 20px | 624px, about 78–81 cpl | h2 24px: 56 above / 12 below |
| Linear docs | 15/24, #d0d6e0 | 16px (12 after a heading) | 650px, about 94–99 cpl | h2 24px: 56 above / 12 below; h1 to first p 24px |
| Vercel blog | 18/28, #171717 | **24px** uniform flow gap | **684px**, about 80–86 cpl | h2 32px: **24 above** after a paragraph / 24 below; 88px after a figure; about 169px before major sections |
| Vercel docs | 16/27.2, #171717 | 12–20px | **768px**, about 100–111 cpl | h2 24px: about 36 above / 12 below; h3 19.2px: about 44 above |

Sources: [Linear Now article](https://linear.app/now/behind-the-latest-design-refresh), [Linear changelog](https://linear.app/changelog/2026-10-08-stacked-pull-requests), [Linear Docs](https://linear.app/docs/inbox), [Vercel blog](https://vercel.com/blog/vercel-ship-2026-recap), [Vercel Docs](https://vercel.com/docs/getting-started-with-vercel). Characters per line were estimated by measuring each paragraph's text in its own computed font and dividing the paragraph width by the average character width.

### Inferences
- **Space above versus below subheads:**
  - Linear: 56:16 (3.5:1) and 56:12 (4.7:1). It groups subheads with what follows them.
  - Vercel docs: 36:12 (3:1).
  - The Vercel blog is 1:1 (24:24). It relies on size and tracking instead of proximity, which is risky in a 400-only system.
- **Grid alignment:** Linear's gaps (4, 8, 10, 12, 16, 20, 24, 28, 32, 40, 48, 56, 128, 224) sit mostly on a 4px grid; 10 does not. Many are not 8px multiples (12, 20, 28). Vercel uses Tailwind's 4px units; 276px is not a multiple of 8.
- **Section spacing compared with litt.md (64/96/128px):**
  - litt.md's top step of 128px matches Linear's *per-side* section padding. Linear's real content-to-content gap is about 256px+, and its pre-footer is 224px.
  - Vercel's 160–276px margins are also above litt.md's largest value.
- **Reading measure**: both companies' blogs run 624–684px (about 80 cpl), which is wider than the classic 66 cpl target. Their docs go to 650–768px (95–110 cpl).

### Gaps
- I could not measure Vercel's hero CTA button boxes directly; the gaps are derived from the button label boxes.
- Neither company publishes a spacing scale; the values above are measurements only.
- I did not measure Linear's app UI spacing.

## Q6. Text color steps used for hierarchy, and their values

### Takeaway
- **Linear** uses four named text tokens on a near-black background, from 18.7:1 contrast down to 3.45:1.
- **Vercel** uses gray-1000, gray-900, gray-800 and gray-700 from the Geist gray scale, from 17.2:1 down to 3.1:1 in light mode.

Both use the primary-to-secondary step as a main hierarchy device, and both build two-tone headlines and lists from it.

### Cited Findings
- **Linear tokens**: `--color-text-primary` #f7f8f8, `--color-text-secondary` #d0d6e0, `--color-text-tertiary` #8a8f98, `--color-text-quaternary` #62666d. The background is #08090a — [linear.app](https://linear.app/).
- **WCAG contrast on #08090a** (my calculation): 18.73:1, 13.64:1, 6.13:1, 3.45:1.
- **How Linear uses each step:**
  - **Primary**: headings, inline links in body text, strong text.
  - **Secondary**: blog, changelog and docs body; homepage section descriptions.
  - **Tertiary**: hero subheads, nav, bylines, dates, captions, /plan feature body, the dim part of the two-tone h2.
  - **Quaternary**: footer legal links, mono eyebrows, arrows.

  — [linear.app](https://linear.app/); [Linear Now article](https://linear.app/now/behind-the-latest-design-refresh); [Linear Docs](https://linear.app/docs/inbox)
- **Linear accent text** appears rarely: rgb(130,143,255) for "Get in touch" on the brand page — [linear.app/brand](https://linear.app/brand); rgb(109,120,213) for an @mention — [linear.app](https://linear.app/).
- **Geist grays, light mode**: gray-1000 hsl(0 0% 9%) = #171717; gray-900 30% = #4d4d4d; gray-800 49% = #7d7d7d; gray-700 56% = #8f8f8f. background-100 is #ffffff and background-200 is #fafafa — [Geist Colors](https://vercel.com/geist/colors).
- **Contrast on #fafafa** (my calculation): 17.18:1, 8.10:1, 3.94:1, 3.10:1.
- **Geist grays, dark mode** (`.dark-theme`): gray-1000 93% = #ededed; gray-900 63% = #a1a1a1; background-100 4% = #0a0a0a — [Geist Colors](https://vercel.com/geist/colors). Contrast on #0a0a0a (my calculation): 16.91:1 and 7.66:1.
- **How Vercel uses each step:**
  - **gray-1000**: headings and blog body.
  - **gray-900**: marketing secondary copy, nav, figcaptions, the continuation half of two-tone list items.
  - **gray-800** (#7d7d7d): docs "On this page" and metadata.
  - **gray-700** (#8f8f8f): step numbers such as "01" and the theme-switcher labels.

  — [vercel.com](https://vercel.com/); [Vercel blog](https://vercel.com/blog/vercel-ship-2026-recap); [Vercel Docs](https://vercel.com/docs/getting-started-with-vercel); [vercel.com/ai-gateway](https://vercel.com/ai-gateway)
- **Documented color modifiers in Geist** — [Geist Typography](https://vercel.com/geist/typography)
  - Heading "Subtle" sets a nested `<strong>` to gray-900 at weight 500.
  - Copy "Strong" sets gray-1000 at weight 550.
  - Label "Strong" sets gray-1000 at weight 500.

  The page's base copy examples are rendered in gray-900 (#4d4d4d), with the Strong part in #171717.

### Inferences
- **Two steps carry most of the hierarchy at both companies.** Linear uses primary and secondary for heading versus reading body, and tertiary for supporting text. Vercel uses gray-1000 versus gray-900. That makes a primary/secondary pair plus one dimmer step the core color device for a weight-400 system.
- **Linear's article body is dimmer than its headings; Vercel's blog body is not.** Linear sets the body in secondary #d0d6e0 under primary headings, a color step that adds hierarchy without weight. The Vercel blog keeps body and headings in the same #171717.
- **Vercel does not use its lowest grays for reading text.** gray-800 and gray-700 sit below 4.5:1 on light backgrounds and are used only for metadata. Linear's quaternary #62666d (3.45:1) is likewise confined to legal links and labels.

### Gaps
- I did not measure Linear's light theme (the in-app light mode), because the marketing site is dark only.
- Linear's 2026 refresh moved the app palette to warmer grays (see Q8). I found no published hex values for the app's light and dark text tokens.

## Q7. Font features, font smoothing and optical sizes

### Takeaway
- **Linear** serves Inter Variable v4.001. It has an `opsz` axis (14–32) and a `wght` axis (100–900), and `font-optical-sizing: auto` is on. Headlines therefore pick up the Inter Display optical design automatically, with no separate family. Two features are on everywhere: `"cv01"` (Alternate one) and `"ss03"` (Round quotes & commas).
- **Vercel** serves Geist Variable v1.800 with a weight axis only and no optical sizes. It sets `"calt" 0, "rlig", "ss11"`; in the served file, only `ss11` ("Contextual brand styles") has anything to act on.

Both sites set `-webkit-font-smoothing: antialiased` and `text-rendering: optimizeLegibility`.

### Cited Findings
- **Linear's font file** is `https://static.linear.app/fonts/InterVariable.woff2?v=4.1`. The name table reads "Inter Variable", "Version 4.001". It has an `opsz` axis (14 to 32, default 14), a `wght` axis (100 to 900), and 2,937 glyphs. — [Linear font file](https://static.linear.app/fonts/InterVariable.woff2?v=4.1)
  - Its GSUB features include cv01–cv14, ss01–ss08, tnum, case, zero, frac and others.
  - The font's own feature labels: cv01 "Alternate one", ss01 "Open digits", ss02 "Disambiguation", ss03 "Round quotes & commas".
- **Linear's feature settings:**
  - `html`: `font-feature-settings: "cv01", "ss03"`.
  - Token `--font-variations: "opsz" auto`; computed `font-optical-sizing: auto`.
  - Body: `-webkit-font-smoothing: antialiased`, `text-rendering: optimizeLegibility`.

  — [linear.app](https://linear.app/); [linear.app/now](https://linear.app/now)
- **Linear adds `ss01` (open digits)** to timers and issue IDs: "Elapsed 00:00" in a video player, "ENG-2108" in a mockup — [Linear Now article](https://linear.app/now/behind-the-latest-design-refresh); [linear.app/plan](https://linear.app/plan). No element on /now used `tabular-nums` — [linear.app/now](https://linear.app/now).
- **Linear's mono** is Berkeley Mono Variable 2.002, with `wght` 100–900, `wdth` 60–100 and `slnt` −16–0 axes — [Berkeley Mono file](https://static.linear.app/fonts/Berkeley-Mono-Variable.woff2?v=3.2).
- **Vercel's Geist file** — [Geist font file](https://vercel.com/vc-ap-vercel-marketing/_next/static/immutable/media/Geist_Variable-s.p.2v-cf9syxr5ni.woff2)
  - Name table "Geist", "Version 1.800"; `wght` 100–900 only; 975 glyphs in this file.
  - GSUB includes ss01–ss11, tnum, case, frac, liga, dlig, and no calt or rlig.
  - Its feature labels: ss01 "No tail a", ss02 "Alt a", ss03 "Alt l", ss04 "Alt R", ss05 "Alt I", ss06 "Alt G", ss07 "Alt arrows", ss08 "Rounded dot", ss09 "Alt numbers", ss10 "Alternative enclosing shapes", ss11 "Contextual brand styles".
- **Vercel's other fonts**: Geist Mono v1.701 (`wght` 100–900) and five static Geist Pixel fonts at weight 500 — [vercel.com](https://vercel.com/).
- **Vercel's settings:**
  - `html` and body: `font-feature-settings: "calt" 0, "rlig", "ss11"`; `-webkit-font-smoothing: antialiased`; `text-rendering: optimizeLegibility`.
  - Code blocks use Geist Mono with `"liga" 0`.

  — [vercel.com](https://vercel.com/); [Geist Typography](https://vercel.com/geist/typography)
- **Geist documents tabular figures** for label-13: "Tabular (123) … used when conveying numbers for consistent spacing" — [Geist Typography](https://vercel.com/geist/typography).
- **Intended use, per the Geist README**: Geist Sans is "designed for legibility and simplicity… based on the principles of classic Swiss typography" and "designed to be used in headlines, logos, posters, and other large display sizes". It was made with Basement Studio and Andrés Briganti, and was inspired by Inter, Univers, SF Mono, SF Pro, Suisse International, ABC Diatype Mono and ABC Diatype. It is licensed OFL 1.1. — [vercel/geist-font](https://github.com/vercel/geist-font)

### Inferences
- **Linear's optical sizes, assuming Chromium's documented `opsz: auto` behavior** (axis value = font size in CSS px, clamped to 14–32):
  - Linear's 32–72px headlines render with the `opsz` 32 Display master.
  - 24px uses an intermediate design (`opsz` 24).
  - 15–17px body sits near the text master.

  This is how the "Inter Display for headings" approach from Linear's 2024 redesign is now done inside one variable font. I measured the font axes and CSS settings, but I did not inspect glyph outlines to confirm which master renders.
- **Vercel's `"calt" 0, "rlig"` does nothing in this font file**, because it has no lookups for either feature. The setting may matter for fallback fonts.
- **For litt.md:** Inter for body can copy Linear's `cv01`/`ss03` plus `opsz` auto setup directly. Hanken Grotesk headings will not get any optical-size compensation.

### Gaps
- I did not check whether Linear's in-app UI sets any extra features, such as `tnum` in tables.
- The Geist file I captured is the one the homepage serves. Its 975 glyphs are fewer than the full family's, so the full family may support more features.

## Q8. Public statements, posts and redesign write-ups explaining their typography

### Takeaway
- **Linear**:
  - Its March 2024 redesign post is the only first-party statement on type. Linear "started using Inter Display to add more expression to our headings" and kept regular Inter for everything else, raised text contrast, and moved theme generation to LCH.
  - Its March 2026 refresh post is about calmer hierarchy: dimmer navigation, warmer grays, smaller icons and smaller text in chrome. It says nothing specific about type.
- **Vercel** explains Geist the typeface (Swiss-inspired, made for developers) and documents its classes. It does not explain the marketing site's lighter headline weights.
- I found no credible third-party write-ups that measured these sites.

### Cited Findings
- **Linear, "How we redesigned the Linear UI (part Ⅱ)"**, 28 March 2024, by Karri Saarinen, Yann-Edern Gillet, Andreas Eldh and Romain Cascino — [Linear Now](https://linear.app/now/how-we-redesigned-the-linear-ui)
  - Typography: "We started using Inter Display to add more expression to our headings" while they "kept using regular Inter for the rest of the text elements."
  - Contrast: "The contrast of the content has also been improved by making our text and neutral icons darker in light mode and lighter in dark mode."
  - Theme system: the generator uses LCH, which the post calls "perpetually uniform" [sic; it means perceptually uniform], and defines "three: base color, accent color, and contrast" instead of 98 separate variables. A contrast variable enables "super high-contrast themes… for accessibility reasons."
  - Density: an aim to "increase the hierarchy and density of navigation elements."
- **Linear, "A calmer interface for a product in motion"**, 12 March 2026, by Charlie Aufmann and Maxime Heckel — [Linear Now](https://linear.app/now/behind-the-latest-design-refresh)
  - "not every element of the interface should carry equal visual weight."
  - The sidebar is "a few notches dimmer, allowing the main content area… to take precedence."
  - A move from "a cool, blue-ish hue" to "a warmer gray that still feels crisp, but less saturated."
  - Tabs are "more compact… with rounded corners and smaller icon and text sizing."
  - Captions mention "muted inactive text, and more vertical padding."
  - The post contains no type-scale or font statements.
- **Geist Typography page**: the classes map to "the Geist Core Figma system"; the Subtle and Strong modifiers work through a nested `<strong>` — [Geist Typography](https://vercel.com/geist/typography).
- **Vercel Font page**: Geist is "specifically designed for developers and designers", reflects "simplicity, minimalism, and speed", and draws on the Swiss design movement. It lists nine weights from Thin to Ultra Black. The page also announces Geist Pixel. — [vercel.com/font](https://vercel.com/font)
- **Geist README**: the Swiss, display-oriented intent, the collaborators and the inspirations quoted in Q7 — [vercel/geist-font](https://github.com/vercel/geist-font).
- **Basement Studio's account** (seen only as a search-result summary, not read in full): Vercel approached Basement in late 2022 for a bespoke family with a monospace companion, aiming for legibility at small sizes and a "techy feel" — [Basement Studio](https://basement.studio/post/the-birth-of-geist-a-typeface-crafted-for-the-web).

### Inferences
- **Linear's 2026 post supports a hierarchy-through-dimming approach.** It describes lower contrast for secondary chrome and smaller text in navigation, rather than heavier headings. That fits the four-step text color system measured in Q6.
- **Vercel's 400/450 marketing headlines look like a recent marketing-site decision, not a Geist rule.** The Geist docs still specify 600, and the docs site still uses 600. This is inferred from the mismatch, not stated by Vercel.

### Gaps
- I did not find Vercel's original "Introducing Geist" (2023) blog post in search results.
- I found no first-party explanation of Geist's tracking values or of the 450 weight.
- I found no reputable third-party critique with measured numbers for either site. The search was brief, and the live measurements above stand in for one.
- I did not locate or read Linear's 2024 "part I" redesign post.
