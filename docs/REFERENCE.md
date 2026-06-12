# COAF — Condensed Reference Sheet (source of truth)
Keep this current. Terse by design.

## Entity
- Colorado Athletics Foundation — 501(c)(3) / 509(a)(2) public charity.
- EIN **93-1548121** (verify on IRS TEOS before Goodstack / Google for Nonprofits).
- Address: 14200 E Alameda Ave, Aurora, CO 80012.
- Tagline: "Everyone is Welcome." Mission pillars: Accessibility, Diversity, Opportunity.
- Mission framing (non-negotiable): athletics are a **vehicle**; COAF **funds access across
  multiple programs** — never "exists to fund one club/company."

## Domains
- Canonical: **www.coloradoaf.org** (CNAME set). Ads + rel=canonical point here only.
- Alternate: coathleticsfoundation.org → 301 to canonical (Cloudflare rule, TODO).

## Programs (framing on-site)
| Program | Audience | Sport | Framing | Outbound |
|---|---|---|---|---|
| Colorado Boom | Youth | Volleyball | Partner / separate entity | coloradoboom.com |
| Team EVO | Youth | Basketball | Supported program | teamevo.org |
| COAF Community Fitness | Adults (women/minority) | Fitness | COAF's own program | — |

## HARD CONSTRAINTS (build fails if violated)
1. "Boomtown Athletics / BTA / FieldhouseUSA" + any rent/tenant/landlord language: **nowhere**.
2. Reads as "funds multiple programs," never one club/company.
3. No broken links, no thin/placeholder pages, no third-party ads.
4. Canonical = coloradoaf.org only.
5. Free/licensed images only, with recorded licenses + alt text.
Guard: `grep -riw -E "boomtown|bta|fieldhouse|tenant|landlord" --include="*.html" .` → empty.

## Verified facts
- After-school stat: 7.7M unsupervised; 24.6M would enroll if available.
  Source: Afterschool Alliance, *America After 3PM*. (Cited + linked on Home/Impact.)

## Open legal items (counsel before publishing changes)
- Colorado Boom: confirm "partner program" matches actual legal/financial relationship.
- Adult program identity stays "COAF Community Fitness" (no company attribution).

## Tech / deploy
- Static HTML/CSS/JS → GitHub Pages + Cloudflare. Files: 12 pages, css/, js/, docs/,
  sitemap.xml, robots.txt, CNAME, .nojekyll, 404.html.
- External runtime deps: Google Fonts, Unsplash CDN (images), Google Maps embed, GA4.

## NEEDS REAL DATA (see NEEDS-REAL-DATA.md for full table)
GA4 ID · confirm info@coloradoaf.org inbox · final donation URL · board names/bios (both
boards) · scholarship income threshold · application backend (mailto vs hosted form) ·
self-host images · Cloudflare 301 · first-season impact numbers.
