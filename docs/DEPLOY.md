# Deploy — GitHub Pages + Cloudflare

## 1. GitHub
1. Create repo (e.g. `coaf-site`), push the contents of this folder to `main`.
2. Settings → Pages → Source: Deploy from branch → `main` / root.
3. `CNAME` file (www.coloradoaf.org) is already included.

## 2. DNS (Cloudflare, coloradoaf.org zone)
1. CNAME record: `www` → `<username>.github.io` (proxied or DNS-only; GitHub Pages needs DNS-only during cert issuance, can proxy after).
2. Apex redirect: Cloudflare Rule — `coloradoaf.org/*` → `https://www.coloradoaf.org/$1` (301).
3. In GitHub Pages settings, set custom domain `www.coloradoaf.org` and check **Enforce HTTPS** once the cert issues.

## 3. Alternate domain
Cloudflare zone for `coathleticsfoundation.org`:
- Redirect Rule: `*coathleticsfoundation.org/*` → `https://www.coloradoaf.org/${2}` (301, preserve path).

## 4. Post-launch checklist (Ad Grants)
- [ ] HTTPS lock resolves on www.coloradoaf.org
- [ ] Replace GA4 placeholder ID; verify pageviews in GA4 realtime
- [ ] Crawl with a link checker (zero 404s)
- [ ] Submit sitemap.xml in Google Search Console
- [ ] Verify EIN 93-1548121 on IRS TEOS → register via Goodstack → Google for Nonprofits → Ad Grants
- [ ] Build first campaign: ≥2 ad groups, ≥2 ads each, ≥2 sitelinks, geo-target Denver metro
- [ ] Set a GA4 conversion (donation click + application submit) — Ad Grants requires ≥1 meaningful conversion/month
