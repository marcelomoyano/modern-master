# Build spec for Claude Code — Phase 1 SEO

## 1. LocalBusiness schema (highest priority)

Add JSON-LD to the root layout so it's on every page:

- `@type`: `HomeAndConstructionBusiness`
- `name`: Modern Master
- `telephone`: +1-732-694-9197
- `email`: geza@modern-master.com
- `address`: 69 Nostrand Rd, Hillsborough, NJ 08844
- `geo`: real lat/lng for that address
- `areaServed`: Hillsborough, Princeton, Warren, Morristown, Flemington, Bridgewater, Somerset, Bernardsville
- `openingHours`: Mo-Fr 08:00–18:00
- `url`, `logo`, `sameAs` (IG/FB once live), `priceRange`

## 2. Per-page meta tags

Right now homepage and `/portfolio` share identical title + description. Give each route its own. Fix the OG/Twitter image URLs too — they currently point to the old preview deployment (`modern-master-8j7dqm7k1-...vercel.app`); repoint all to `https://modern-master.com`.

## 3. Three location pages — /princeton, /warren, /morristown

This is the biggest unbuilt deliverable in the proposal. Must be **unique content** (the proposal explicitly criticizes the old site's 35+ duplicate location pages, so thin copies recreate the problem). Each page needs:

- a unique H1 ("Bathroom & Kitchen Remodeling in Princeton, NJ")
- 300+ words of genuinely town-specific copy
- 2–3 relevant project photos
- local trust signals
- its own meta tags
- its own LocalBusiness schema with that town in `areaServed`

## 4. Technical hygiene

- Generate `sitemap.xml` and `robots.txt` (include the new location pages)
- Descriptive alt text on portfolio images (not "Bathrooms project 1")
- Verify each portfolio category filter actually works
- Remove Flooring + Railings portfolio categories per Geza
- Set up Google Search Console + GA4 (Marcelo does verification; Claude Code adds the GA4 tag)

## 5. Replace placeholder testimonials

Pull real quotes/first names from the live Google reviews to replace Sarah & Mark T. / Emily R. / James P.
