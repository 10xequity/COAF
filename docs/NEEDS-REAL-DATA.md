# NEEDS REAL DATA — replace before / shortly after launch

| # | Item | Where | Current placeholder | Action |
|---|------|-------|--------------------|--------|
| 1 | GA4 measurement ID | every page `<head>` | `G-XXXXXXXXXX` | Create GA4 property → replace in all 12 HTML files (find/replace) |
| 2 | Contact email | footer, contact.html, scholarships form (js/main.js) | `info@coloradoaf.org` | Confirm this inbox exists & is monitored; update if different |
| 3 | Donation URL | donate.html, header CTA target | `colorado-athletics-foundation.square.site` | Confirm final donation URL; consider on-domain embed later |
| 4 | Board bios + names | board.html | 3 generic role cards | Replace with real names, photos, bios |
| 5 | Scholarship form backend | scholarships.html + js/main.js | mailto-composed email (works, no backend) | Replace with Google Form or Formspree endpoint for reliability |
| 6 | Photos | all `.photo-slot` blocks | gradient placeholders | Source per docs/IMAGES.md; record licenses |
| 7 | Impact figures | impact.html | "figures being compiled" notice | Publish first-season numbers (athletes supported, $ to access) |
| 8 | EIN verification | (pre-launch task) | EIN 93-1548121 shown in footer/about/donate | Verify against IRS TEOS before Goodstack / Google for Nonprofits |
| 9 | Team Evo program details | youth-basketball.html | summarized from teamevo.org (June 2026) | Confirm copy with Team EVO; get registration/funding-flow specifics |
| 10 | Alternate domain redirect | Cloudflare | n/a | Add 301 redirect rule: coathleticsfoundation.org/* → https://www.coloradoaf.org/$1 |

## Legal items still open (from project brief — do NOT change copy until resolved)
- COBO relationship: site says "partner program / independent organization." Confirm with counsel this matches the actual legal/financial relationship.
- Adult program: site uses "COAF Community Fitness" only. Keep all Boomtown/BTA/FieldhouseUSA references out of donor-facing copy permanently.

## Added this round (June 2026)
- **Scholarship income threshold** — the eligibility page references an income limit "the board sets each program year." Set the actual number (e.g. a multiple of the Federal Poverty Level) and replace the flagged placeholder on scholarships.html.
- **Board members** — two boards now exist: Operations board (President / Treasurer / Secretary) and Fundraising board (Chair / Partnerships / Events). All are placeholder cards — add real names, photos, bios.
- **Images are hotlinked** from Unsplash. Optional but recommended: download + self-host before launch (see docs/IMAGES.md).
- **Application backend** — form still composes a mailto email. For a more formal pipeline, wire to a hosted form (see options in chat) and confirm destination inbox.
