# Changelog — COAF website build

## v0.4 — 2026-06-12  (imagery + partners + testimonials)
Added
- Faded hero background photos on all interior pages (matching the home hero treatment).
- Image banners on About, Programs, Scholarships, Donate, Impact.
- Photos inside program cards (home + programs) and Impact "why athletics" cards.
- Donate page EIN badge (93-1548121) prominently for donor records.
- Scholarships "Partner resources": Achieve Sports + My Spark Scholarship, with outbound links.
- Impact testimonials (4, illustrative — flagged for real quotes) + an impact stat trio
  (300+ families / 3 programs / multiple seasons).
- Maturity framing: site now reflects several years of operation and hundreds of families
  served (home, about, impact).
Changed
- Header sub-line "Everyone is welcome" -> "Welcome Everyone".
- Transparency copy reframed: COAF reports how DONATED dollars are used, not the full
  operating books (about, donate, impact).
New CSS: .section-banner, .card-photo, .testimonials/.quote, .ein-badge, page-hero media.


## v0.3 — 2026-06-12  (content + media + polish)
Added
- Real free-license images (Unsplash, hotlinked): home hero bg, volleyball, basketball,
  About team shot, community-fitness shot. Alt text + credits + lazy-load + width/height.
- Second board: **Fundraising board** (Chair / Partnerships / Events) alongside the
  renamed **Operations board** (President / Treasurer / Secretary).
- Formal scholarship eligibility: residency, eligible program, age/guardian rule,
  need basis (means-tested proxies / income threshold), selection priority, documentation
  policy, 10-business-day rolling review. Form gained household size, need-basis, and a
  required accuracy acknowledgement.
- Section color rhythm (dawn/white/mist/blush/sky-tint) so no long white runs.
- New tokens: `--blush`, `--sky-tint`; `figure.photo` + hero-media overlay CSS.
- `.nojekyll` for clean GitHub Pages serving.
Changed
- Board hero copy → "two boards, one mission."
Removed
- Board "Conflict of interest" card → replaced with "Two boards, one mission."
- Board "Interested in serving" notice → replaced with fundraising-board CTA band.

## v0.2 — 2026-06-11  (design + preview)
- Confirmed palette **A (Alpenglow)**; saved B (Highlands) / C (Sunrise) for future sites.
- Built single-file click-through `coaf-preview.html`.

## v0.1 — 2026-06-11  (initial build)
- 12 static pages, shared header/footer, css/js, sitemap.xml, robots.txt, CNAME, 404.
- Ad-Grants-oriented: canonical tags, meta, one h1/page, alt text, GA4 placeholder.
- Verified the "7.7M / 24.6M after-school" stat (Afterschool Alliance) before use.
- Hard constraints enforced: no Boomtown/BTA/FieldhouseUSA; "funds multiple programs";
  dead `tbd` Apply link replaced with a working application.
