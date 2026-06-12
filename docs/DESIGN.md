# COAF Design System — coloradoaf.org
Condensed reference. Source of truth = `css/styles.css` (all tokens are CSS vars).

## Identity
"Alpenglow" — civic + warm. Deliberately distinct from Colorado Boom's teal/gold club look.
Signature motif: a Front Range **ridgeline** (hero base + section dividers) that draws on scroll.

## Color tokens
| Token | Hex | Role |
|---|---|---|
| `--ink` | #1c2530 | Text, dark hero, footer |
| `--ink-soft` | #46535f | Secondary text |
| `--sky` / `--sky-deep` | #2b5cad / #1e4486 | Primary, links, nav, blue bands |
| `--alpenglow` / `--alpenglow-deep` | #e0492c / #c23a20 | CTAs, accents |
| `--dawn` | #fbf6f1 | Warm section tint |
| `--mist` | #eef3fa | Cool section tint |
| `--blush` | #fdeee9 | Coral section tint |
| `--sky-tint` | #e7eefb | Light blue section tint |
Contrast: white text only on `--ink`/`--sky-deep`/gradient hero overlay (all ≥ AA).

## Type
- Display: **Bricolage Grotesque** (headings, stats, numerals) — used with restraint.
- Body/UI: **Public Sans** (the US civic typeface) — paragraphs, nav, buttons, forms.
- Scale: h1 `clamp(2.4–4rem)`, h2 `clamp(1.8–2.6rem)`, body 1.0625rem/1.65.
- Eyebrows: 0.8rem, uppercase, letter-spaced, coral.

## Section rhythm (anti-"wall of white")
Build step rotates backgrounds: dawn → white → mist → blush → white → sky-tint.
`--ink` stat bands are preserved as strong dark breaks. Every page opens on color.

## Components
Buttons (`.btn` primary/secondary/light, pill), cards (`.card` hover-lift), stat band,
3-up pillars, numbered `.flow` steps, `.levels` donation tiers, `.cta-band`,
`.check-list` (coral check bullets), `figure.photo` (image + credit), `.person` board cards.

## Motion (respects `prefers-reduced-motion`)
Scroll reveals (`.reveal` + IntersectionObserver), ridgeline draw, animated stat counters
(`data-count`), hover lifts, sticky-header shadow. All disabled under reduced-motion.

## Accessibility floor
Skip link; one `<h1>`/page; semantic headings; visible focus ring (coral, 3px);
ARIA on nav toggle + form status; descriptive alt text; keyboard-navigable;
AA contrast; decorative SVG/img marked `aria-hidden`/empty alt.

## Responsive breakpoints
860px (nav → hamburger) · 980/900px (grids → 1–2 col) · 700px (form → 1 col) ·
560px (levels/footer → 1 col). Fluid type via `clamp()`. Mobile-first safe.
