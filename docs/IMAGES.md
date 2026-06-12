# Image sourcing & license record

The site uses free-license Unsplash photos, **hotlinked** from the Unsplash CDN
(images.unsplash.com). Unsplash permits hotlinking and the Unsplash License allows
commercial use with no attribution required (we credit anyway, as good practice).

## ⚠️ Pre-launch hardening (recommended)
Hotlinking means the images load from Unsplash, not your server. For a charity site
you want control + speed, so before final launch:
1. Download each photo (links below) at ~1600px.
2. Compress (squoosh.app) and save to /images/.
3. Replace each `https://images.unsplash.com/...` src with `images/FILE.jpg`.
The build already sets descriptive alt text, lazy loading, and width/height.

## Images in use (Unsplash License — free, commercial OK)
| Page(s) | Photo ID / URL | Photographer | Use |
|---|---|---|---|
| Home hero | photo-1547347298-4074fc3086f0 | Vince Fleming | Volleyball action (hero bg) |
| Youth volleyball | photo-1547347298-4074fc3086f0 | Vince Fleming | Volleyball |
| Youth basketball | photo-1518614368389-5160c0b0de72 | Nik Shuliahin | Group basketball |
| About | photo-1520399636535-24741e71b160 | jesse orrico | Youth team, hands in |
| Community fitness | photo-1607962837359-5e7e89f86776 | Gabin Vallet | Athletic movement |
| (spare/accent) | photo-1659468551117-8255d708e197 | Meg Jenson | Basketball on court |

Full page for any photo: https://unsplash.com/photos/<slug>  (search the ID on unsplash.com)

## Notes / swaps to consider
- Community fitness photo is a solo running shot used as a stand-in. For best fit, swap
  for a diverse **group** fitness/class image (keep it inclusive, women-forward per the program).
- No team/league/brand logos appear; nothing implies endorsement. Keep it that way on swaps.
- No identifiable minors in close-up; prefer action/crowd framing on any replacement.

## Round 4 usage
The same 6 verified Unsplash photos are now reused across page-hero backgrounds (faded), section banners, and card photos. Still hotlinked — self-host before final launch. No new image IDs introduced.
