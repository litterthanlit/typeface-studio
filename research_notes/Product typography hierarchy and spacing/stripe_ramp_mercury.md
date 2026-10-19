# Typographic hierarchy and spacing at Stripe, Ramp and Mercury (measured October 2026)

Method: on 2026-10-19 I loaded each site in headless Chromium (Playwright) at a 1440×900 viewport, and at 390px wide for the mobile values. I read `getComputedStyle` for every visible text element and measured the gaps between elements with `getBoundingClientRect`. I also downloaded each site's CSS bundles to read the design tokens themselves (custom properties and class rules, including their media queries). Each "computed" value cites the page it came from, and each "token" value cites the CSS file. Three things affect the numbers:
- **CPL estimates.** Characters per line come from the column width divided by the average glyph width of the real loaded font, measured with canvas `measureText`.
- **System-font pages.** Stripe Docs and the Stripe Dashboard use a system font stack. Headless Linux has no SF Pro, so measure estimates on those pages use fallback metrics.
- **Box gaps, not baselines.** Gaps are box-to-box. Ramp trims leading on most text, so its gaps run close to cap-height to baseline. Stripe and Mercury do not trim, so their gaps include half-leading.

## Stripe: typefaces, weights, scale, tracking, line heights, and hero and section spacing

### Takeaway
Stripe's April 2026 homepage uses a new token system, prefixed `hds-`. It sets almost everything in Söhne Leicht (weight 300) through the variable font `sohne-var`. That covers display text, every heading from 22px to 56px, and body text. Weight 400 is kept for small functional text: buttons, nav, 14–16px card titles and labels. Headlines have tight leading (1.03–1.15) and −0.01em to −0.025em tracking. Hierarchy comes from size and from a navy-to-slate ink ramp, including two-tone headlines. Bold is not used. Product pages and the blog still use the 2020-era system: Söhne 300 body with +0.2px tracking and 425/500 headings. Docs and the Dashboard use the system UI font at 400/600/700.

### Cited Findings
**Typeface and features**
- stripe.com loads one text family, `sohne-var`, declared with weight range "1 1000", plus SourceCodePro 500 for code. The token stack is `--hds-font-family:"sohne-var","SF Pro Display",sans-serif` and `--hds-font-family-code:"SourceCodePro","SFMono-Regular",monospace` — [stripe.com computed fonts](https://stripe.com/); [Stripe hds CSS bundle](https://b.stripecdn.com/mkt-ssr-statics/assets/_next/static/css/cb5b90bbb161653c.css)
- Söhne is Klim Type Foundry's "reinterpretation of Akzidenz-Grotesk as seen through Helvetica". Its weights are Extraleicht 200, Leicht 300, Buch 400, Kräftig 500, Halbfett 600, Dreiviertelfett 700, Fett 800 and Extrafett 900. The variable version has a `wght` axis from 200 to 900. OpenType features include ss01 (alternate a), ss02 (alternate g), tnum, zero, frac, sups/sinf and case. Klim lists Stripe as a Söhne project — [Klim: Söhne](https://klim.co.nz/retail-fonts/soehne/)
- Stripe turns on `html{font-feature-settings:"ss01" on}` site-wide, so every glyph uses Söhne's alternate "a". It also sets `.tabular-nums,.tabular-nums--tight{font-feature-settings:"tnum";font-variant-numeric:tabular-nums}` and `sup{font-feature-settings:"sups" 1}` — [Stripe hds CSS](https://b.stripecdn.com/mkt-ssr-statics/assets/_next/static/css/cb5b90bbb161653c.css)
- Both hero layers are actual H1s: a visible background H1 and an aria-hidden foreground copy laid over it (the two-tone section below covers the layering). The hero H1, `hero-section__title`, computes to 48px / 55.2px (1.15) / −0.96px (−0.02em) / weight 300, with `text-wrap: pretty`, and wraps to 4 lines at 1018px wide. At 390px wide it computes to 34px / 35.02px (1.03) / −0.34px (−0.01em) / 300 — [stripe.com computed](https://stripe.com/)

**hds type tokens (current homepage), desktop values at min-width 940px**
Format: size / line height / letter-spacing / weight.
- **heading-xxl:** 3.5rem (56px) / 1.03 / −0.025em / 300
- **heading-xl:** 3rem (48) / 1.03 / −0.02em / 300
- **heading-lg:** 2rem (32) / 1.1 / −0.02em / 300
- **heading-md:** 1.625rem (26) / 1.12 / −0.01em / 300
- **heading-sm:** 1.375rem (22) / 1.1 / −0.01em / 300
- **heading-xs:** 1rem (16) / 1.2 / 0 / 400
- **heading-xxs:** 0.875rem (14) / 1.2 / 0 / 400
- **hero-lg:** 2.5rem (40) / 1.2 / −0.02em / 300
- **hero-md:** 2.25rem (36) / 1.05 / −0.02em
- **hero-sm:** 2rem (32) / 1.1 / −0.02em
- **text-xxl** (stat numbers): 3rem (48) / 1.0 / −0.02em
- **text-xl:** 1.25rem (20) / 1.4 / −0.01em / 300, colored text-soft by default
- **text-lg:** 1.125rem (18) / 1.4 / 0 / 300
- **text-md:** 1rem (16) / 1.4 / 0 / 300
- **text-sm:** 0.875rem (14) / 1.4 / 0 / 300
- **text-xs:** 0.875rem (14) / 1.4 / 300
- **text-xxs:** 0.75rem (12) / 1.45
- **quote-md:** 1.625rem (26) / 1.12 / −0.01em / 300
- **Input tokens:** label 14–16px at 400, text 12–16px at 300

Source: [Stripe hds CSS](https://b.stripecdn.com/mkt-ssr-statics/assets/_next/static/css/cb5b90bbb161653c.css)

**Mobile (base) and 640px values, same source**
- Base: heading-xxl 2.125rem (34) / 1.03 / −0.02em, heading-xl 1.75rem (28) / 1.07 / −0.01em, heading-lg 1.375rem (22) / 1.2, heading-md 1.25rem (20) / 1.2, heading-sm 1.125rem (18) / 1.25.
- At 640px: heading-xxl 3rem (48), heading-xl 2.125rem (34) / 1.05, heading-lg 1.75rem (28) / 1.07.
- Display sizes therefore grow roughly 1.6× from mobile to desktop, while body sizes stay at 16–18px — [Stripe hds CSS](https://b.stripecdn.com/mkt-ssr-statics/assets/_next/static/css/cb5b90bbb161653c.css)

**Weight and locale overrides**
- Class rules hard-set `.hds-heading--xxl/--xl/--lg/--md{font-weight:300}`.
- Under `:where(:lang(zh))` the same headings move to 400. Emphasized text and xs/xxs headings move to 500 for zh and 600 for ja.
- `.hds-text--emphasized` is 400 in the Latin base. One rule pairs `font-weight:600` with `font-variation-settings:"wght" 400`.

Source: [Stripe hds CSS](https://b.stripecdn.com/mkt-ssr-statics/assets/_next/static/css/cb5b90bbb161653c.css)

**Measured homepage instances at 1440px**
- 56/57.68/−1.4px/300: "The backbone of global commerce"
- 32/35.2/−0.64px/300: section H2s
- 26/29.12/−0.26px/300: H3 bento titles, also testimonial quotes in #64748d
- 22/24.2/−0.22px/300: customer-story H3s
- 20/28/−0.2px/300: footer CTA description, #50617a
- 18/25.2/0/300: section-header description, #50617a, max-width 608px. Rendered 504px wide, about 61–63 CPL.
- 16/22.4/0/300: body, #50617a
- 16/22.4/0/400: H4 card titles
- 16/20/300: footer links
- 14/19.6/300: footnotes, #64748d
- Buttons 16/16/400; nav 14/14/400, #061b31
- Money in product graphics: 26/29.9 at weight 400 with tnum and −0.78px (−0.03em) tracking

Source: [stripe.com computed](https://stripe.com/)

**Color ramp (light mode)**
- Text tokens:
  - `--hds-color-text-solid` = neutral-990 #061b31
  - `text-soft` = neutral-600 #50617a
  - `text-subdued` and `heading-subdued` = neutral-500 #64748d
  - `text-quiet` = neutral-400 #7d8ba4
  - `util-text-inactive` = neutral-300 #95a4ba
- The neutral ramp is blue-tinted: 25 #f8fafd, 50 #e5edf5, 100 #d4dee9, 200 #bac8da, 300 #95a4ba, 400 #7d8ba4, 500 #64748d, 600 #50617a, 700 #3c4f69, 800 #273951, 900 #1a2c44, 950 #11273e, 975 #0d253d, 990 #061b31.
- Dark mode uses the neutralDark ramp: subdued neutralDark-400 #839bc8, soft neutralDark-300 #a3b5d6, background neutralDark-990 #0d1738.

Source: [Stripe hds CSS](https://b.stripecdn.com/mkt-ssr-statics/assets/_next/static/css/cb5b90bbb161653c.css)

**How much text each color sets, by characters on the homepage**
- #061b31: 4,183 characters
- #50617a: 4,023 characters, mostly 16px body
- #64748d: 2,971 characters, mostly subdued heading clauses and 22px descriptions
- Accent #533afd: links and buttons only

Source: [stripe.com computed](https://stripe.com/)

**Hero spacing at 1440px**
- Eyebrow: label "Global GDP running on Stripe:" is 14px at 400 in #061b31. The live value is 14px at 300 in #64748d, tabular, with −0.42px (−0.03em) tracking.
- Eyebrow box bottom is at y=218 and the H1 top at y=258, a 40px gap.
- H1 bottom is at y=479 and the buttons start at y=519, another 40px gap.
- Buttons are 48px tall with 15.5/24/16.5px padding and a 4px radius. Primary is #533afd with white text; secondary is white at 65% opacity with #533afd text.
- The logo strip starts 141px below the buttons. Nav buttons are 40px tall at 14px.

Source: [stripe.com computed](https://stripe.com/)

**Section spacing**
- On the homepage, the first content in each `<section>` sits 93–96px below the section top, and the last content sits 94–97px above its bottom. Sections are divided by hairline grid rules, giving about 192px of space between content blocks.
- The space tokens run 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 56, 64, 72, 80, 88, 96 … up to 200px. They are named `--hds-space-core-50` (4px) through `-2500` (200px), with `-1200` = 96px.
- Section-row gaps measured 40, 48, 64 and 96px.
- Inside components: H3 (26px) to CTA 24px, H4 (16px) to link 16px, H3 (22px) to image 24px, H2 (26px) to subtitle 8px.

Sources: [stripe.com computed](https://stripe.com/); [Stripe hds CSS](https://b.stripecdn.com/mkt-ssr-statics/assets/_next/static/css/cb5b90bbb161653c.css)

**2020-era system still live on stripe.com/payments**
- H1 56/68 (1.21) / −1.12px (−0.02em) / 500
- 38/48 / −0.2px / 500
- 26/36 / 500
- Eyebrow captions 18/28 / 500 in accent colors
- Body 18/28 (1.56) / +0.2px (+0.011em) / 300
- Small body 15/24 (1.6) / +0.2px (+0.013em) / 300
- Links and CTAs at weight 425, a variable instance between Buch and Kräftig
- Ink: #0a2540 headings, #425466 body, on a #f6f9fc page background

Source: [stripe.com/payments computed](https://stripe.com/payments)

**Long-form pages**
- The blog uses the 2020 system: title 56/67.2 at 425 with −0.25px tracking; H2 34/48 at 500 with −0.2px; body P 18/28 at 300 with +0.2px, #425466. The column is 810px, about 99–104 CPL.
- Blog rhythm: P→P 24px; P→H2 72px (24 + H2 margin-top 48); H2→figure 40px (figure margins 16px). No `max-width` sets the measure.

Source: [Stripe blog post computed](https://stripe.com/blog/new-ways-for-fintechs-to-move-money-and-expand-globally)
- Stripe Atlas guides follow the same pattern: H2 34/44 at 500 with −0.1px; H3 24/32 at 500 with +0.1px; P 18/28 at 300 with +0.2px. P→P is 24px; space above H2 is 72px and above H3 56px (margin-top 32 + 24). The column is 810px, about 97–104 CPL — [Stripe Atlas guide computed](https://stripe.com/guides/atlas/business-of-saas)

**Docs (docs.stripe.com)**
- System stack, `-apple-system, BlinkMacSystemFont…`, with the html root at 14px. No webfont loads.
- H1 32/40 at 700, #1a1f36. Subtitle H2 24/32 at 400.
- Section H2 21px at 700 with padding-top 32px. H3 16px at 700 with margin-top 18 and padding-top 16.
- Body P 16/26 (1.625) at 400, #3c4257. Paragraph spacing comes from padding-top 12px on each P; list items have 4px margins.
- Code 13/19 in Menlo; inline code 14.4px. Callout labels 12/16 at 600; the TOC header is 13px at 500, uppercase.
- The content column is 799px, about 100–108 CPL with fallback metrics.

Source: [Stripe docs computed](https://docs.stripe.com/payments/payment-intents)

**Dashboard (Sail tokens, read from the login page)**
- `--sail-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", "Ubuntu", sans-serif`
- Sizes 11, 12, 13, 14, 15, 16, 20, 24, 28, 32, 48, 56px
- Line heights 16, 20, 24, 28, 32, 36, 40, 56, 64px
- Weights regular 400, medium 500 (also the link weight), bold 700
- Text colors: text #3c4257, emphasized #1a1f36, gray #697386, disabled #a3acb9-ish rgb(163,172,185), link #5469d4
- The login page itself is set in `sohne-var`

Source: [dashboard.stripe.com/login computed and tokens](https://dashboard.stripe.com/login)

**Stripe Apps UI toolkit (styled to "match the Dashboard")**
- Typography tokens render as `heading` 16/24 at 700, `subheading` 11/20 at 600, `body` 14/20 at 400, `caption` 12/16 at 400, all in the system stack.
- Text colors: primary #30313d, secondary #6a7383, disabled #a3acba.
- Spacing tokens: xxsmall 2, xsmall 4, small 8, medium 16, large 24, xlarge 32, xxlarge 48px.

Source: [Stripe Apps: Style your app](https://docs.stripe.com/stripe-apps/style)

**Published write-ups**
- A YC "Design Review" summary dated 2026-04-22, featuring Katie Dill (Head of Design), says the previous homepage dated from 2020. The new one adds a bento grid with hover modals and a live GDP counter. It lists "ensure text is readable and interacts well with background elements" as a takeaway. The summary contains no type specs — [Summify summary of "How Stripe built their new website"](https://summify.io/discover/how-stripe-built-their-new-website-ypzNhw/)
- Secondary sources say Söhne replaced Camphor in the 2020 redesign — [madegooddesigns](https://madegooddesigns.com/?p=6754). Third-party reverse-engineering reports weight 300 and −1.4px/−0.96px tracking at 56/48px — [fontalternatives](https://fontalternatives.com/inspiration/stripe-sohne/); [webdesignhot](https://webdesignhot.com/design.md/stripe/). This matches the live CSS above.

### Inferences
- Stripe uses an inverse weight–size rule. Large text (22–56px) is set at 300; small functional text (14–16px labels, buttons, card titles, nav) is set at 400. A light stroke at display sizes still looks dense, while small sizes need 400 to hold up on screen. This is the main transferable pattern for a 400-only system, because hierarchy is carried by size and ink rather than by weight.
- Stripe tightens tracking only as size grows: 0 at ≤18px, −0.01em at 20–26px, −0.02em at 32–48px, −0.025em only at 56px. litt.md's −0.025em at 40px matches Stripe's heaviest setting, used only at 56px. For 32–40px, Stripe uses −0.02em.
- Leading falls steeply with size: 1.4 for body, 1.1–1.12 for 22–32px, 1.03 for 48–56px. litt.md's display is 1.1 at 40px, close to Stripe's hero-lg (1.2) and hero-md (1.05), but looser than Stripe's 48–56px headings at 1.03.
- On the 2020 pages, light 300 body text gets +0.2px tracking (+0.011–0.013em) and dark, high-contrast ink (#425466, 7.8:1). On the 2026 hds pages, body stays at 0 tracking and #50617a (6.3:1). Both keep light body text above about 6:1.
- Docs and the Dashboard do the opposite of marketing. They use the system UI font at 400 body with 600/700 headings, a 16/26 docs body and 14/20 UI body, all on a 4px line-height grid. The light, premium look is a marketing-surface choice and does not carry into product UI.

### Gaps
- The logged-in Stripe Dashboard could not be inspected; Dashboard values come from Sail tokens on the login page and from Stripe Apps docs.
- I found no official Stripe write-up giving the hds type rationale; the 2026 design-review summary has no typography specifics.
- Docs CPL uses fallback metrics, because SF Pro is unavailable headless. Real SF Pro measure on macOS may differ by about 5–10%.

## Ramp: typeface and weights, two-tone headlines, scale and spacing

### Takeaway
Ramp marketing loads only TWK Lausanne 400 (plus italic). Hierarchy comes entirely from size, with near-zero tracking, very tight display leading (1.0–1.05), leading-trimmed boxes, and a single ink at 100% or 60% alpha. Two-tone headlines put the second clause in the same size and weight at 60% alpha, in a `text-hushed` span. The product's Ryu design system uses Lausanne 300 for body and 400 for headings, with −0.02em heading tracking.

### Cited Findings
- **Fonts and color tokens (marketing).** `ramp.com`, `/corporate-cards`, `/pricing` and the blog load only `Lausanne|400|normal` and `Lausanne|400|italic`, with `ss01` on for body text — [ramp.com computed](https://ramp.com/); [ramp.com/corporate-cards computed](https://ramp.com/corporate-cards)
  - The same CSS also declares TWK Lausanne 300 and 350 font files (`TWKLausanne-300.woff2`, `TWKLausanne-350.woff2`).
  - Fallback stack: `--font-sans:"Lausanne", Arial, sans-serif`; mono `--font-mono:"IBM Plex Mono"`.
  - Ink: `--text-primary:#0c0a08`, `--text-hushed:#0c0a0899` (60%), `--text-primaryReverse:#fff`, `--text-hushedReverse:#fff9`, `--border-primary:#d2cecb`.

  Source: [Ramp CSS bundle](https://ramp.com/_next/static/immutable/chunks/2s7hjk6iwxrkd.css)
- **Typeface origin.** Lausanne is a sans by Nizar Kazan, released by Weltkern in 2017 — [maxibestof.one: Lausanne](https://maxibestof.one/typefaces/lausanne). A designer who worked on Ramp's brand system calls "the typeface Lausanne" core brand equity, alongside solar yellow and the logo. That claim is secondhand — [LinkedIn post](https://pt.linkedin.com/in/henriquemeyrelles)
- **Marketing scale.** Each step below gives desktop size/line-height at min-width 992px, with tablet (768px) and mobile values in parentheses:
  - `headline-xl` 64/64 (48/50, 40/42), tracking −0.01px
  - `headline-l` 48/50 (40/42, 34/38), −0.01px
  - `headline-m` 40/42 (32/35, 28/32), −0.005px
  - `headline-s` 28/32 (25/30, 22/26), 0
  - `headline-xs` 24/28 (22/26, 20/24)
  - `body-xl` 20/26 (19/24, 18/22)
  - `body-l` 18/24 (mobile 17/23)
  - `body-m` 16/22 (15/21)
  - `body-s` 14/20
  - `body-xs` 13/19 (12/18)
  - All tracking is 0px except the headline values above.

  Source: [Ramp CSS bundle](https://ramp.com/_next/static/immutable/chunks/2s7hjk6iwxrkd.css)
- **Leading trim.** The `.leading-trim` rule computes `--trim-space` from `(--tw-leading − ((--lausanne-ascent + --lausanne-descent)/--lausanne-units-per-em) × font-size)/2`. It applies the result as negative margins on `::before` and `::after`. A 64px H1 therefore renders in a 46px box — [Ramp CSS bundle](https://ramp.com/_next/static/immutable/chunks/2s7hjk6iwxrkd.css); [ramp.com computed](https://ramp.com/)
- **Two-tone headlines.** Headings wrap the second clause in `SPAN.text-hushed`, at the same size and weight 400, computing to `lab(2.84 0.37 0.97 / 0.6)`. Examples — [ramp.com computed](https://ramp.com/):
  - H2 40/42: "One platform for all of finance. **Agents for every workflow, working 24/7.**" (bold marks the hushed part)
  - H3 24/28: "Cards & Expenses / that handle themselves", "Procure to pay / without chasing approvals"
  - H2 48/50: "Scale the team. / Shrink the paperwork.", with the hushed clause as a block on its own line
  - H2 28/32: "Introducing Stack by Ramp. / The AI operating system built for…"
- **Hero spacing at 1440px.** Eyebrow 10px uppercase, +0.18px (+0.018em), 60% ink, with a tabular live counter. The rest of the stack — [ramp.com computed](https://ramp.com/):
  - Eyebrow to H1: 38px
  - H1: `headline-xl` 64/64, `text-wrap: balance`, max-width 1050px
  - H1 to subhead: 24px (`mt-6`)
  - Subhead: `body-l` 18/24 at 60% ink, max-width 531px
  - Subhead to form: 37px. Email field and CTA are 52px tall; the CTA is 16px on lime #e4f222 (lab(92.14 −20.5 84.77)) with an 8px radius.
  - Nav buttons: 34px tall, 14px, padding 12/16, radius 6px
- **Section and heading spacing.** The `.spacer-t-l` utility sets margin-top from `--spacer-l`, which is 80px at mobile, 96px at ≥768 and 128px at ≥992. `--spacer-m` is 40/48/64px. Some sections add 128px or 64px padding. H2-to-body gaps measured 24–32px (`mb-6`/`mb-8`), H2-to-CTA 48px, and 28px H2 to link 20–32px — [Ramp CSS bundle](https://ramp.com/_next/static/immutable/chunks/2s7hjk6iwxrkd.css); [ramp.com computed](https://ramp.com/)
- **Long-form.** Body P is 18/30 (1.67) at 60% ink with margin-bottom 24px — [Ramp blog computed](https://ramp.com/blog/introducing-glass)
  - The column is 753px, about 86–98 CPL.
  - In-article H3 is 24/28 at 100% ink, with margin-top 64px and margin-bottom 24px.
  - On a second post, the article H1 is `headline-m` 40/42 with margin-top 16px. The body uses the same 18/30 hushed P in a 753px column. Pull quotes are 24/28 at 100% ink, 501px wide (about 47 CPL) — [Ramp blog: Ramp at $60B computed](https://ramp.com/blog/ramp-at-60-billion)
- **Pricing.** Plan prices such as "$0/mo/user" and "$15/mo/user" are 28/32 at 400, in hushed ink. No `tnum` was detected on marketing pricing, but the CSS defines a `.tabular-nums` utility — [ramp.com/pricing computed](https://ramp.com/pricing); [Ramp CSS bundle](https://ramp.com/_next/static/immutable/chunks/2s7hjk6iwxrkd.css)
- **Product (Ryu design system, app.ramp.com sign-in).** Loads Lausanne 300 and 400. Stack `--font-family-stack-sans: Lausanne, Inter, Roboto, Arial, sans-serif` — [app.ramp.com/sign-in computed tokens](https://app.ramp.com/sign-in)
  - Weight tokens: `--font-weight-body:300`, `--font-weight-sans-normal:300`, `--font-weight-headings:400`, `--font-weight-interactive:400`
  - Tracking: `--letter-spacing-heading:-0.02em`, `--letter-spacing-body:0`
  - Body styles: `--text-xs/label` 300 12/16, `--text-s` 300 14/20, `--text-m` 300 16/24, `--text-l` 300 20/28, `--text-xl` 300 28/32, `--text-xxl` 300 36/40
  - Heading styles: `--text-heading-xs` 400 16/24, `-s` 400 20/28, `-m` 400 28/32, `-l` 400 36/40, `-xl` 400 44/44, `-xxl` 400 56/56
  - Accessibility "increase" sizes: 13/17, 15/21, 17/25, 22/30, 28/32
  - Ink: `--pane-text-primary:#1a1919`, `--pane-text-hushed:#6e6a68`
  - Computed: H1 "Welcome to Ramp" 28/32, −0.56px (−0.02em), 400, #1a1919. Body 16/24 at 300 in #6e6a68; labels 12/16 at 300. Most text has `font-feature-settings:"case"`.

### Inferences
- Ramp marketing is the closest analogue to litt.md: one weight, 400. Its hierarchy recipe has five parts:
  - Large size jumps (64 → 48 → 40 → 28 → 24, with body at 18/16/14).
  - Display leading near 1.0, with box gaps controlled by leading-trim.
  - One ink at two opacities, 100% and 60%, for both two-tone headlines and secondary body.
  - Uppercase 10px micro-labels with +0.018em tracking.
  - Large section margins of 128px.
- Ramp sets essentially no negative tracking at display sizes (−0.01px at 64px is effectively 0). Lausanne's tight default spacing allows this. Hanken Grotesk at 40px would likely still want litt.md's negative tracking.
- The product's 300 body against 400 headings reproduces Stripe's light-body pattern in a UI context. A light weight is acceptable at 14–16px there because the ink is #1a1919 (17.5:1) or #6e6a68 (5.35:1), never lighter.
- Ramp's 60% alpha ink tracks any background tint. It composites to about #6d6c6b on white (5.24:1) and stays at 5.04:1 on the #f4f2f0 page tint. An alpha-based secondary color is a robust way to keep two-tone headlines consistent across white and tinted sections.

### Gaps
- Logged-in Ramp product screens beyond the sign-in page were not accessible; the Ryu tokens come from the sign-in shell.
- No official Ramp or Weltkern case study on Ramp typography was found. The source on Lausanne's role is a designer's LinkedIn post.

## Mercury: faces, weights, scale, spacing, light weights and color

### Takeaway
Mercury uses a proprietary two-member sans: `arcadiaDisplay` for headings and `arcadia` for text and UI. Both are variable fonts set at odd intermediate weights: 480 for headings, 360 for body, 420 for UI, 400 for small text. Unusually, display text has positive tracking (+0.01–0.02em) and leading set in percent (110–140%). Hierarchy comes from paired heading/subheading styles at the same size: the subheading drops to 360 and to a subdued ink. Long-form articles switch to the Tiempos serif family. The product uses "Arcadia Text"/"Arcadia Display" with tabular, tightly tracked money and superscript cents.

### Cited Findings
- **Fonts loaded.** Marketing pages load `arcadia|360 500` and `arcadiaDisplay|320 480`, both variable — [mercury.com computed](https://mercury.com/). Blog articles add tiempos 400/500, tiemposHeadline 400, tiemposFine 500 and IBM Plex Mono 400 — [Mercury blog computed](https://mercury.com/blog/introducing-mercury-books)
- **Weight, tracking and leading tokens.**
  - Weights: `--font-weight-300/360/400/420/480/500`, plus `--font-weight-medium:530`
  - Tracking: `--tracking-0.5%:.005em`, `1%:.01em`, `1.5%:.015em`, `2%:.02em`, `3%:.03em`
  - Leading: `--leading-105%` through `--leading-140%`

  Source: [Mercury CSS bundle](https://mercury.com/_next/static/chunks/0ib1hde0arvxv.css)
- **Size tokens:** xxs .625rem (10px), xs .75 (12), sm .875 (14), base 1 (16), md 1.125 (18), lg 1.313 (21), xl 1.5 (24), 2xl 1.75 (28), 3xl 2 (32), 4xl 2.25 (36), 5xl 2.625 (42), 6xl 3 (48), 7xl 3.438rem (55) — [Mercury CSS bundle](https://mercury.com/_next/static/chunks/0ib1hde0arvxv.css)
- **Paired classes.**
  - `arcadia-heading-1…5` (480) and `arcadia-subheading-1…5` (360) share size, leading and tracking. For example, heading-1 is 28px / 120% / +1.5% on mobile, rising through 32/36/42/48 to 55px at ≥122rem, with tracking easing to +0.5% at large widths.
  - `arcadia-display-1…4` (480) and `display-5…8` (360) use the same fluid clamps: `clamp(2.625rem,.979rem+4.116vw,6rem)`, `clamp(2.25rem,.79rem+3.66vw,5.25rem)`, `clamp(2rem,.75rem+3.126vw,4.563rem)` and `clamp(1.75rem,.683rem+2.668vw,3.938rem)`. All have line-height 110% and tracking 0.
  - Body classes: `arcadia-body-1` base 16 → 18 → 21px, 135%, 360. `body-2` 14 → 16 → 18px, 135%, 360. `body-3` 14 → 16px, 140%, 400, tracking +1% then 0. `body-4` 12 → 14px, 140%, 400, +2%/+1%. `body-5` 10 → 12px, 140%, 400, +3%/+2%.
  - UI: `arcadia-ui-4` 14px, line-height 1, 500, +2%, with `"liga" off,"clig" off`.

  Source: [Mercury CSS bundle](https://mercury.com/_next/static/chunks/0ib1hde0arvxv.css)
- **Measured at 1440px** — [mercury.com computed](https://mercury.com/):
  - Hero H1: 49.35/54.28 (1.1), tracking 0, 480, #ededf3 on a dark photographic background (the display-4 clamp)
  - Stat numerals: 65.34/71.88 at 480 (display-2)
  - Section H2s: 42/48.3 (1.15), +0.42px (+0.01em), 480, #272735
  - Further headings: 32/36.8 at +0.48px (+0.015em); 28/33.6 at +0.42px (+0.015em); 24/28.8 at +0.48px (+0.02em), all 480
  - Body: 18/24.3 (1.35) at 360 in #535461; feature titles 18/24.3 at 480 in #272735; 16/22.4 at 400
  - Nav and buttons: 16/16 at 420
  - Legal text: 12/16.8 at 400, +0.24px (+0.02em)
- **Mobile (390px).** H1 28/30.8, 480; H2 28/33.6, +0.42px — [mercury.com computed at 390px](https://mercury.com/)
- **Colors.** `--text-default` = neutral-800 #272735, `--text-subdued` = neutral-600 #535461, `--text-emphasized` = neutral-900 #1e1e2a, `--text-disabled` = neutral-500 #70707d. Inverted: default #ededf3, subdued #c3c3cc, emphasized #f4f5f9. The neutral ramp is violet-tinted (#fbfcfd … #10101a). Primary #5266eb fills the CTA pills — [Mercury CSS bundle](https://mercury.com/_next/static/chunks/0ib1hde0arvxv.css)
- **Two-tone.** Testimonial quotes keep the emphasized fragment at 28px, 480, #272735. The rest is `SPAN.arcadia-subheading-5 text-text-subdued` at 28/33.6, 360, #535461, so weight and ink drop together while size stays fixed — [mercury.com computed](https://mercury.com/)
- **Hero spacing** — [mercury.com computed](https://mercury.com/):
  - H1 occupies y=144–198; the subhead starts 14px below at y=212.
  - Subhead: 21.01/28.36 (1.35), 360, #ededf3, 2 lines, centered.
  - Subhead to CTA row: 43px.
  - CTA row: email input plus "Open account", a 40px pill with radius 32px at 16px/420, and a "Launch demo" ghost pill.
  - Legal microcopy (12px) starts 23px below the CTA row.
  - The hero container has 72px top padding.
- **Spacing tokens and section padding.** The scale is 1, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 96, 112, 128, 144, 160, 192, 224, 240px. Gap tokens run xs 8/12, sm 16/24, md 16/32, lg 24/32, xl 32/40, 2xl 56/64, 3xl 80/96px (base/override) — [Mercury CSS bundle](https://mercury.com/_next/static/chunks/0ib1hde0arvxv.css). Measured section top offsets to first content are 97, 112, 152 and 161px — [mercury.com computed](https://mercury.com/)
- **Long-form (blog).** Body is `tiempos-body` 18/25.2 (1.4) at 400, #272735, in a 672px column (about 79–82 CPL). P→P is 20px (margin-top). Heading spacing — [Mercury blog computed](https://mercury.com/blog/introducing-mercury-books):
  - H2 is arcadiaDisplay 28/33.6, 480, +0.42px.
  - The space above an H2 is 72px; H2 to its first paragraph is 8px.
  - Figures sit 32px below text; H3 is 21/25.2, 480, with margin-top 72px.
- **Product (demo.mercury.com/dashboard).** Loads "Arcadia Text" 400–500 and "Arcadia Display" 380–500 — [Mercury demo dashboard computed and tokens](https://demo.mercury.com/dashboard):
  - `_bodyDefault` 15/24 at 400 in #363644 (the most common style); `_bodySecondary` 14/20 in #535461; `_bodyLarge` 17/28; 13/20 at +0.1px; `_tiny` 12/20 at +0.2px; sortable table headers 12px in #70707d
  - Money uses `tnum` with −0.03em tracking: −0.45px at 15px, −0.39px at 13px, −0.57px at 19px
  - Cents render as a superscript at 10.95px (0.73×)
  - The account balance is Arcadia Display 28/36, weight 380, tnum, −0.84px (−0.03em), #1e1e2a
  - Ink tokens: `--ds-text-emphasized:#1e1e2a`, `--ds-text-default:#363644`, `--ds-text-secondary:#535461`, `--ds-text-tertiary:#70707d`, `--ds-text-placeholder/disabled:#9d9da8`, `--ds-text-link:#465bd1`
  - Money tokens: `--ds-text-money:#363644`, `--ds-text-money-in:#036e43`, `--ds-text-money-out:#b0175f`, `--ds-text-money-pending-or-null:#70707d`
  - Inline gaps: 4, 6, 16, 24px
  - The login page uses H1 19/28 at 400, labels 13/20 at +0.1px in #535461, and buttons 15/24 at 480 ("bodyDefaultDemi") — [app.mercury.com/login computed](https://app.mercury.com/login)
- **Provenance of Arcadia.** Third-party analyses describe Arcadia/ArcadiaDisplay as a custom Mercury family set at 480 for display — [blakecrosley.com Mercury guide](https://blakecrosley.com/guides/design/mercury); [shadcn.io Mercury design](https://www.shadcn.io/design/mercury)

### Inferences
- Mercury's light-weight device works differently from Stripe's. It uses a quasi-regular 360 for body and 480 (between regular and medium) for headings, and it reuses the same size for a heading/subheading pair separated only by weight (480/360) and ink (#272735/#535461). This gives soft emphasis without bold. A 400-only system cannot copy the weight split, but it can copy the ink split at constant size.
- Positive display tracking (+1–2%) with 110–120% leading reads airy rather than tight. It is a deliberate contrast to Stripe's −2% and is probably tuned to Arcadia's metrics. It shows that the right tracking value depends on the typeface rather than following a universal rule.
- Serif body on the blog (Tiempos 18/1.4 at about 80 CPL) separates editorial reading from product marketing. Its 1.4 leading is tighter than litt.md's reading leading (1.65), and the serif probably carries that better than a grotesque would.
- The product uses 15/24 at 400 rather than marketing's 360. Mercury raises the weight in the dense UI and saves sub-400 weights for large or marketing text, applying the same principle as Stripe's Dashboard.

### Gaps
- No official source names Arcadia's designer or foundry. The only sources are unofficial design write-ups.
- Mercury's marketing pricing pages showed no `tnum`, so tabular money is confirmed only in the product demo.

## Cross-cutting: line heights, 4px grid, text color steps, font features, measure

### Takeaway
All three marketing sites set leading as unitless or percent ratios that produce fractional px values, so their type sits off a 4px grid. Their spacing tokens are 4px- or 8px-based, and their product UIs (Sail, Ryu, Mercury's ds) use 4px-multiple line heights. Each brand uses a single tinted near-black for primary text: navy for Stripe, warm black for Ramp, blue-violet for Mercury. Secondary steps stay at 4.75–7.5:1. Tabular figures are switched on only where money is shown in UI, and long-form measure runs long, about 80–105 CPL.

### Cited Findings
**Line heights and the 4px grid**
- Stripe hds line heights are ratios: 1.03, 1.1, 1.12, 1.2, 1.4, 1.45. They compute to fractional px values such as 57.68, 55.2, 35.2, 29.12, 24.2, 25.2 and 22.4. Stripe space tokens are 4px multiples from 4 to 200 — [Stripe hds CSS](https://b.stripecdn.com/mkt-ssr-statics/assets/_next/static/css/cb5b90bbb161653c.css)
- Stripe's 2020 pages use px leading: 68, 48, 36, 28, 24. Docs use 40, 32, 26 and 20, so the 16/26 body sits off a 4px grid. Sail tokens are all 4px multiples, 16–64 — [stripe.com/payments](https://stripe.com/payments); [Stripe docs](https://docs.stripe.com/payments/payment-intents); [Stripe Dashboard login tokens](https://dashboard.stripe.com/login)
- Ramp marketing leading is px but mixed: 64, 50, 42, 32, 28, 26, 24, 22, 20, 19. Values like 50, 42, 26, 22 and 19 are not 4px multiples. Spacers are 40/48/64/80/96/128. Ryu leading is all 4px multiples: 16, 20, 24, 28, 32, 40, 44, 56 — [Ramp CSS bundle](https://ramp.com/_next/static/immutable/chunks/2s7hjk6iwxrkd.css); [app.ramp.com tokens](https://app.ramp.com/sign-in)
- Mercury marketing leading is 105–140% (54.28, 48.3, 33.6, 28.8, 24.3, 22.4px). Its spacing is 4px-based. Product leading is 20, 24, 28, 36px — [Mercury CSS bundle](https://mercury.com/_next/static/chunks/0ib1hde0arvxv.css); [Mercury demo](https://demo.mercury.com/dashboard)

**WCAG contrast of text steps on white** (my calculations from the hex values cited above)
- Stripe: #061b31 17.4:1, #50617a 6.3:1, #64748d 4.75:1, #7d8ba4 3.44:1. The rendered hero second clause, #40668d, is 6.0:1.
- Stripe 2020-era: #425466 7.8:1, #0a2540 15.5:1. Docs: #3c4257 10.0:1, #1a1f36 16.2:1. Apps secondary #6a7383 4.78:1, disabled #a3acba 2.29:1.
- Stripe dark sections on #0d1738: #839bc8 6.3:1, #a3b5d6 8.5:1.
- Ramp: #0c0a08 19.8:1. The 60% hushed ink is 5.24:1 on white and 5.04:1 on #f4f2f0. Ryu: #1a1919 17.5:1, #6e6a68 5.35:1.
- Mercury: #272735 14.7:1, #535461 7.5:1, #70707d 4.9:1, #9d9da8 2.7:1 (placeholder/disabled only), #363644 11.9:1, #1e1e2a 16.5:1. Inverted on #171721: #ededf3 15.3:1, #c3c3cc 10.2:1.

**Where the lowest-contrast step is used**
- Stripe's quiet #7d8ba4 (3.44:1) sets inactive stat values at 48px and inactive stat descriptions at 16/22.4, weight 300, in the homepage stats menu — [stripe.com computed](https://stripe.com/)

**Font features**
- **Stripe:** global `ss01`, with `tnum` only via `.tabular-nums` (GDP counter, prices in product graphics). Pricing-table rates like "2.9% + 30¢" set at 15/19, weight 425, without tnum — [Stripe hds CSS](https://b.stripecdn.com/mkt-ssr-statics/assets/_next/static/css/cb5b90bbb161653c.css); [stripe.com/pricing computed](https://stripe.com/pricing)
- **Ramp:** global `ss01` on marketing; `case` in Ryu — [ramp.com computed](https://ramp.com/); [app.ramp.com computed](https://app.ramp.com/sign-in)
- **Mercury:** `tnum` with −0.03em tracking on all product money, and ligatures off on 14px UI labels — [Mercury demo](https://demo.mercury.com/dashboard); [Mercury CSS bundle](https://mercury.com/_next/static/chunks/0ib1hde0arvxv.css)

**Measure (column width / estimated CPL)**
- Stripe blog and guides: 810px / about 100 CPL at 18px Söhne 300 — [Stripe blog](https://stripe.com/blog/new-ways-for-fintechs-to-move-money-and-expand-globally); [Stripe Atlas guide](https://stripe.com/guides/atlas/business-of-saas)
- Stripe docs: 799px / about 100–108 CPL at 16px (fallback metrics) — [Stripe docs](https://docs.stripe.com/payments/payment-intents)
- Stripe homepage descriptions: max-width 608px, rendered 504px / about 61–63 CPL — [stripe.com](https://stripe.com/)
- Ramp blog: 753px / about 86–98 CPL at 18px — [Ramp blog](https://ramp.com/blog/introducing-glass)
- Ramp hero subhead: 531px max — [ramp.com](https://ramp.com/)
- Mercury blog: 672px / about 79–82 CPL at 18px Tiempos — [Mercury blog](https://mercury.com/blog/introducing-mercury-books)

**Paragraph spacing relative to line height**
- Stripe blog: 24px on 28px leading (0.86 lines)
- Stripe docs: 12px on 26px (0.46)
- Ramp blog: 24px on 30px (0.8)
- Mercury blog: 20px on 25.2px (0.79)

Sources: [Stripe blog](https://stripe.com/blog/new-ways-for-fintechs-to-move-money-and-expand-globally); [Stripe docs](https://docs.stripe.com/payments/payment-intents); [Ramp blog](https://ramp.com/blog/introducing-glass); [Mercury blog](https://mercury.com/blog/introducing-mercury-books)

**Space above vs below headings (proximity)**
- Stripe blog H2: 72px above, 24–40px below
- Stripe docs H2: 32px above, 12px below
- Ramp blog H3: 64px above, 24px below
- Mercury blog H2: 72px above, 8px below

Sources: same pages as above.

**Comparison data against litt.md**
Format: size / line height / tracking / weight. litt.md values come from the brief; brand values come from the sources above.

| Role | litt.md | Stripe hds 2026 (desktop) | Ramp marketing (desktop) | Mercury marketing (1440px) |
|---|---|---|---|---|
| Display | 40 / 1.1 / −0.025em / 400 | 48–56 / 1.03–1.15 / −0.02 to −0.025em / 300 | 64 / 1.0 / ≈0 / 400 | 49.35 (fluid) / 1.1 / 0 / 480 |
| H1-level | 32 / 1.15 / −0.022em | 32 / 1.1 / −0.02em / 300 | 48 / 1.04 / ≈0 / 400 | 42 / 1.15 / +0.01em / 480 |
| H2-level | 28 / 1.2 / −0.02em | 26 / 1.12 / −0.01em / 300 | 40 / 1.05 / ≈0 / 400 | 32 / 1.15 / +0.015em / 480 |
| H3-level | 24 / 1.25 / −0.018em | 22 / 1.1 / −0.01em / 300 | 28 / 1.14 / 0 / 400 | 28 / 1.2 / +0.015em / 480 (+360 twin) |
| H4-level | 20 / 1.3 / −0.012em | 16 / 1.2 / 0 / 400 | 24 / 1.17 / 0 / 400 | 24 / 1.2 / +0.02em / 480 |
| Lead / large body | — | 18–20 / 1.4 / 0 to −0.01em / 300 | 18–20 / 1.3–1.33 / 0 / 400 | 21 / 1.35 / 0 / 360 |
| Reading (long-form) | 17 / 1.65 / −0.006em | 18 / 1.56 / +0.011em / 300 (2020 blog); docs 16 / 1.625 / 0 / 400 | 18 / 1.67 / 0 / 400 at 60% ink | 18 / 1.4 / 0 / 400 (Tiempos serif) |
| Body | 15 / 1.55 / −0.003em | 16 / 1.4 / 0 / 300 | 16 / 1.375 / 0 / 400 | 18 / 1.35 / 360; 16 / 1.4 / 400 |
| Small | 13 / 1.5 / 0 | 14 / 1.4 / 0 / 300 | 14 / 1.43; 13 / 1.46 | 14 / 1.4 / +0.01em / 400 |
| Caption / micro | 12 / 1.4 / +0.01em | 12 / 1.45 / 0 | 10 uppercase / +0.018em | 12 / 1.4 / +0.02em / 400 |
| Section spacing | 64 / 96 / 128 | ~96 top + ~96 bottom per section | 128 margin (96 at tablet, 80 at mobile) | ~96–160 top offsets |

### Inferences
- **Size steps.** Stripe's desktop steps run 56 → 48 → 32 → 26 → 22 → 16 (ratios 1.17, 1.5, 1.23, 1.18, 1.375). Ramp's run 64 → 48 → 40 → 28 → 24 (1.33, 1.2, 1.43, 1.17). litt.md's 40 → 32 → 28 → 24 → 20 is evenly stepped at 1.14–1.25. The brands put one large jump between display/section headings and card-level headings: Stripe 48 → 32, Ramp 40 → 28. That makes hierarchy legible without weight. litt.md's evenly stepped scale may need one deliberate jump, or color steps, to separate tiers when everything is 400.
- **Display-to-body ratio.** Stripe 56:16 = 3.5×, Ramp 64:16 = 4×, Mercury 49:18 = 2.7×, litt.md 40:15 = 2.67×. litt.md's display is at the conservative end, comparable to Mercury, which compensates with weight 480.
- **Leading.** All three brands set body leading tighter (1.35–1.4) than litt.md's 1.55. Long-form leading varies: Ramp at 1.67 matches litt.md's 1.65; Stripe's 2020 blog uses 1.56; Mercury's serif uses 1.4.
- **Measure.** None of the three caps long-form near 65ch; they accept about 80–105 CPL. This is a pattern seen in the data, not evidence that long lines read better. litt.md's own measure rules should be judged on their merits.

### Gaps
- CPL is an estimate (width ÷ average glyph width); exact characters per line vary with copy.
- Stripe Docs and Dashboard metrics use fallback fonts headless.
- I did not measure baseline-to-baseline rhythm, so off-grid line heights were judged from computed px values only.

## Techniques that make light type look premium and calm, and pitfalls avoided or not

### Takeaway
Across all three brands, the calm comes from six devices:
1. Large size jumps instead of weight changes.
2. A single tinted near-black ink plus one or two mid-value steps for secondary clauses, including two-tone headlines at constant size.
3. Tight display leading.
4. Tracking tuned to the typeface.
5. Very generous section spacing against compact intra-block spacing.
6. Light weights reserved for large sizes or marketing, with heavier weights (400–480) at small sizes and in dense product UI.

They avoid too-light body text by keeping body ink at 5.2:1 or above, usually 6.3:1 or above. The main lapse is Stripe's 3.44:1 "quiet" ink on 16px light-weight inactive labels.

### Cited Findings
**Two-tone headline mechanics**
- **Stripe hero.** Two stacked H1 layers. The visible layer has the main clause `EM.hero-section__title-main` in #061b31 and the second clause `SPAN.hero-section__title-copy` in rgb(129,184,26). An aria-hidden foreground copy uses `mix-blend-mode: hard-light` with rgb(45,37,100) for the main clause and rgba(0,14,255,0.5) for the copy.
  - The rendered pixels are about #030827 for the main clause and #40668d for the second.
  - The second clause shifts toward purple where it overlaps the gradient ribbon.

  Source: [stripe.com computed and screenshot sampling](https://stripe.com/)
- **Stripe section headers.** The pattern is H2 (32px, 300, #061b31) followed by an inline `P.hds-heading` at the same 32px in heading-subdued #64748d. In dark sections the subdued clause is #839bc8 — [stripe.com computed](https://stripe.com/); [Stripe hds CSS](https://b.stripecdn.com/mkt-ssr-statics/assets/_next/static/css/cb5b90bbb161653c.css)
- **Ramp:** same size, same 400 weight, the same ink at 60% alpha (`text-hushed`) — [ramp.com computed](https://ramp.com/)
- **Mercury:** same size, weight 480 → 360, ink #272735 → #535461 — [mercury.com computed](https://mercury.com/)

**Weight allocation by size and surface**
- Stripe hds: 300 for 18–56px and for body; 400 for 14–16px labels, buttons and nav — [Stripe hds CSS](https://b.stripecdn.com/mkt-ssr-statics/assets/_next/static/css/cb5b90bbb161653c.css)
- Ramp marketing: 400 only. Ryu: 300 body, 400 headings and interactive — [Ramp CSS bundle](https://ramp.com/_next/static/immutable/chunks/2s7hjk6iwxrkd.css); [app.ramp.com tokens](https://app.ramp.com/sign-in)
- Mercury marketing: 480 headings, 360 body, 420 UI. Product: 400 body, 480 buttons — [Mercury CSS bundle](https://mercury.com/_next/static/chunks/0ib1hde0arvxv.css); [Mercury demo](https://demo.mercury.com/dashboard)
- Stripe Dashboard/Sail and docs: 400 body with 500/600/700 emphasis, no 300 — [Stripe Dashboard login tokens](https://dashboard.stripe.com/login); [Stripe Apps style](https://docs.stripe.com/stripe-apps/style)

**Ink choices**
- Every brand uses a tinted near-black rather than #000: Stripe #061b31 (navy), Ramp #0c0a08 (warm), Mercury #272735 (violet). The neutral ramps share the tint (Stripe's blue-gray ramp, Ramp's warm #d2cecb borders and #f4f2f0 page tint, Mercury's violet-gray ramp) — [Stripe hds CSS](https://b.stripecdn.com/mkt-ssr-statics/assets/_next/static/css/cb5b90bbb161653c.css); [Ramp CSS bundle](https://ramp.com/_next/static/immutable/chunks/2s7hjk6iwxrkd.css); [Mercury CSS bundle](https://mercury.com/_next/static/chunks/0ib1hde0arvxv.css)

**Wrapping and spacing devices**
- Headings use `text-wrap: balance` or `pretty`: Stripe H2/H3 pretty and balance, Ramp H1 balance, Mercury H1/H2 balance — [stripe.com](https://stripe.com/); [ramp.com](https://ramp.com/); [mercury.com](https://mercury.com/)
- Ramp's metric-based leading trim makes heading-to-body gaps (24px, 32px) visually exact — [Ramp CSS bundle](https://ramp.com/_next/static/immutable/chunks/2s7hjk6iwxrkd.css)
- Proximity: tight heading-to-text gaps (8–24px) against large pre-heading and section gaps (64–128px). Mercury's blog H2 has 72px above and 8px below; Ramp sections use 128px margins with 24px heading-to-body gaps; Stripe sections pad about 96px with 24–40px gaps inside components — [Mercury blog](https://mercury.com/blog/introducing-mercury-books); [ramp.com](https://ramp.com/); [stripe.com](https://stripe.com/)

**Locale safety**
- Stripe raises heading weights from 300 to 400 for `:lang(zh)`, and emphasis to 500/600 for zh/ja, so light weights do not fall back to thin system CJK fonts — [Stripe hds CSS](https://b.stripecdn.com/mkt-ssr-statics/assets/_next/static/css/cb5b90bbb161653c.css)

**Money typography**
- Mercury sets money at tnum −0.03em with superscript cents at 0.73× and color-coded semantic inks for money in, out and pending. Stripe's in-graphic prices are 400 tnum at −0.03em even inside an otherwise 300 page — [Mercury demo](https://demo.mercury.com/dashboard); [stripe.com computed](https://stripe.com/)

**Lapse**
- Stripe's `text-quiet` #7d8ba4 (3.44:1) appears on 16px weight-300 inactive stat descriptions. That is below WCAG AA's 4.5:1 for normal-size text and is an inactive-state dimming choice — [stripe.com computed](https://stripe.com/); contrast computed from [Stripe hds CSS](https://b.stripecdn.com/mkt-ssr-statics/assets/_next/static/css/cb5b90bbb161653c.css) values

### Inferences
**Transferable to a 400-only system like litt.md**
1. Two-tone headlines at constant size and weight, using Ramp's alpha approach or Stripe's solid-subdued approach (a 4.75–6:1 mid-tone for the second clause).
2. One larger jump between display/section headings and card-level headings.
3. Tighter display leading (1.0–1.1).
4. Tracking that tightens only above about 20px.
5. Uppercase micro-labels with positive tracking, as Ramp sets its 10px labels at +0.018em.
6. Section gaps around 96–128px against heading-to-text gaps of 8–24px.
7. A tinted near-black ink instead of #000, with secondary steps no lighter than about 5:1.

**Pitfalls to avoid, from the data**
- Light (300) body text below about 6:1 contrast; every brand keeps body at 5.2:1 or above.
- 3.4:1 ink at 16px, as in Stripe's inactive stats.
- Light weights in CJK fallbacks.
- Light weights in dense product UI; all three products use 400 body, except Ramp Ryu, whose 300 body sits on 17.5:1 or 5.35:1 ink.
- Uncapped long-form measure (80–105 CPL). This is common in all three, but it stretches beyond classic guidance.

**On litt.md's choices**
- Inter is the documented fallback in Ramp's product stack (`Lausanne, Inter, Roboto, Arial`), so Inter at 300–400 body sizes sits in the same visual family as Ramp's product. That is supporting context only.
- litt.md's negative body tracking (−0.003em/−0.006em) differs from all three brands. They use 0 at 16–18px; Stripe's 2020 pages use +0.011em on light body; Mercury uses +0.01–0.03em at 10–14px.

### Gaps
- The relative contribution of each device to perceived "premium" quality is not measurable from CSS. These inferences are design judgment based on the measured values.
- No published rationale from Stripe, Ramp or Mercury designers explains the weight-300 or 60%-alpha choices.
