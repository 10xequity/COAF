# Colorado Athletics Foundation — coloradoaf.org

Static HTML/CSS/JS charity site built for Google Ad Grants compliance.
Deploy target: GitHub Pages + Cloudflare. See docs/DEPLOY.md.

Structure: 12 HTML pages (shared header/footer pattern), css/styles.css,
js/main.js, sitemap.xml, robots.txt, CNAME, 404.html.
Pages are generated from build.py — edit page content there and re-run
`python3 build.py`, or edit the HTML directly (build.py then becomes stale).

Before launch: work through docs/NEEDS-REAL-DATA.md.
Hard content rule: "Boomtown Athletics / BTA / FieldhouseUSA" and any
rent/tenant language must never appear in site copy (private-benefit /
Ad Grants risk). A grep guard: 
  grep -riw -E "boomtown|bta|fieldhouse|tenant|landlord" --include="*.html" .
must return nothing.
