# Modern Master — SEO implementation brief (Claude Code)

Implement on the existing Next.js site. Do **not** invent services, towns, licenses, years in business, warranties, prices, or review counts. If a fact is not already in the repo or the connected Google Business Profile, mark it `[CONFIRM]` and leave a clearly marked placeholder for Geza / Marcelo. Do not publish claims in title, meta, body, or JSON-LD that have not been confirmed.

Source: Google Search Console URL-prefix property `https://modern-master.com/`, last 12 months (Chart.csv: 2025-11-23 to 2026-11-22). Query numbers below are from the top 1,000 queries export. Page numbers are from Pages.csv. Do not edit this brief’s numbers.

---

## 1. Context

The 12-month property totals are about **2,684 clicks, 177K impressions, 1.5% CTR, avg position 11.2**. That headline is misleading.

- **Junk / gambling traffic** dominates the export: `betsmove`, `trwin`, `ktp789`, `na777`, and variants account for **149,256 impressions and 2,365 clicks** in the top 1,000 queries, almost all on the homepage. Turkey alone is 2,196 clicks / 145,819 impressions vs the **United States at 237 clicks / 26,375 impressions / 0.9% CTR / position 22.12**. The spike is mid-February 2026 (Feb 14: 1,837 clicks; Feb 15: 432; Feb 17: 141,271 impressions, 47 clicks). Treat this as a spam/security issue (Priority 6), not as remodeling demand.
- **Legitimate remodeling demand in the top 1,000 queries:** 885 queries, **21,680 impressions, 54 clicks**. The strongest opportunities are bathroom, kitchen, Hillsborough, basement, and floor installation.
- **The Nov 20, 2026 redesign 404’d the pages that were earning that demand.** Sitemap lastmod is 2026-11-20. The live sitemap has only eight URLs: `/`, `/portfolio`, `/princeton`, `/warren`, `/franklin-park`, `/monmouth-junction`, `/monroe-township`, `/privacy`. Services are homepage H3s (`#services`); contact and about are homepage anchors. **46 historical paths in GSC now 404** (after a trailing-slash 308), totaling **212 clicks and 10,665 impressions**. The worst loss is `/floor-installation` (118 clicks, 583 impressions, position 3.06, 20.24% CTR). `/bathroom-remodeling-princeton` had 37 clicks and 637 impressions; the new `/princeton` page has 1 impression in this export because the old slug was not redirected.
- Hillsborough is Geza’s base and is listed first in the service-area copy, but it has **no town page**. It is the strongest local query set: **2,155 impressions, 12 clicks, weighted avg position 24.62**.

Live town pages already exist for Princeton, Warren, Franklin Park, Monmouth Junction, and Monroe Township. New town pages in this brief are only **Hillsborough, Flemington, and Bridgewater** — towns already named on the homepage. **Morristown still appears in GSC** (and had old pages) but is **not** on the current service-area list. Confirm with Geza before building anything for Morristown. Until then, Morristown 404s redirect to service pages or `/` per `redirects.csv`.

---

## 2. Priority 1 — 301 redirects + AMP leftovers

Implement every row in **`redirects.csv`** (46 source paths, same folder as this brief). Columns: `source path`, `destination path`, `old clicks`, `old impressions`.

Rules:

- Use **permanent 301s** in `next.config.js` `redirects` (or middleware if that is the existing pattern): `permanent: true`.
- The live site already **308s trailing slashes to the no-slash path, then 404s**. Match **both `/path` and `/path/`** so the chain becomes a single 301 to the destination (no slash, to match current canonical style).
- Rows where source equals destination (`/bathroom-remodeling`, `/kitchen-remodeling`, `/floor-installation`, `/finish-basement`) mean **restore that page** at the same slug. Still 301 the trailing-slash variant to the canonical no-slash URL.
- `/contact` (5 clicks, 736 impressions, many `?rwg_token=` variants) and `/contact-us` (3 clicks, 176 impressions) go to `/`. The homepage already has `#contact`. Do not try to 301 to a hash (clients drop it). Optional later: a `/contact` alias that renders the contact section — out of scope unless it is trivial.
- `/about` (7 clicks, 180 impressions) → `/` (about is already a homepage section).
- `/blog` (4 clicks, 118 impressions, position 3.47) → `/` **unless** old post files still exist in the repo. If they do, restore or map those slugs individually instead of a blanket drop.
- Morristown sources go to the matching **service** page or `/`. Do **not** create `/morristown` in this pass.
- Highest-equity mappings to test first: `/floor-installation` (118 clicks), `/floor-installation-morristown` (19 clicks, 313 impressions, position 14.63) → `/floor-installation`; `/bathroom-remodeling-princeton` (37 clicks, 637 impressions) → `/princeton`; `/finish-basement` (5 clicks, 1,617 impressions) restored in place; `/bathroom-remodeling-flemington` (1,151 impressions) → `/flemington`.

**AMP leftovers.** GSC reports **AMP non-rich results: 163 clicks, 814 impressions, position 5.51** on what is now a Next.js site. Search the repo for `amp`, `amphtml`, `/amp`, and any AMP plugin or alternate URL. 301 leftover AMP URLs to the canonical non-AMP page. Remove any `rel="amphtml"` tags. Do not add new AMP pages.

---

## 3. Priority 2 — Homepage title, H1, and meta

Current:

- Title: `Modern Master | Premium Home Remodeling in New Jersey`
- H1: `Where Vision Meets Craftsmanship` (matches no queries)
- Meta (186 characters, already over a typical 155-character cap): `Transform your home with Modern Master — Central New Jersey's premier remodeling contractor. Specializing in luxury bathrooms, kitchens, and full renovations. 25+ years of craftsmanship.`

The homepage is the only live URL with real remodeling impressions, but the snippet does not name bathrooms, kitchens, Hillsborough, or Somerset County.

- `home remodeling` — 801 impressions, 1 click, **0.12% CTR, position 1.06**
- `bathroom remodeling` — 1,210 impressions, 0 clicks, position 14.36
- `modern bathroom remodeling nj` — 218 impressions, 0 clicks, position 10.97
- Somerset County bathroom queries sit at **position 1.04–1.33 with 391 + 49 + 49 impressions and 0 clicks**
- Hillsborough contractor queries already in the 8–20 band, e.g. `remodeling contractor hillsborough nj` (137 impressions, position 11.24)

**Use these exact strings:**

- **Title:** `Bathroom & Kitchen Remodeling in Central NJ | Modern Master`
- **H1:** `Bathroom & Kitchen Remodeling in Central New Jersey`
- **Meta (136 characters):** `Bathroom and kitchen remodeling in Hillsborough and Somerset County. Owner-operated craftsmanship from Modern Master. Free consultation.`

Do not put `[CONFIRM]` facts (years, license number, BBB, star rating) into the title or meta. Keep any of those in the body only if they already exist in the repo or Business Profile, still marked `[CONFIRM]` if you cannot verify them.

Also in this pass (copy only, same homepage):

- Turn the **“Our Expertise” service H3s into links**: Bathroom → `/bathroom-remodeling`, Kitchen → `/kitchen-remodeling`, Finish Basement → `/finish-basement`, Carpentry & Trim Work → `/` for now (no new carpentry page in this brief). Flooring is already in the contact form; link that label to `/floor-installation` once the page exists.
- Turn the **service-area town names into links** only where a page exists or is built in this brief: `/hillsborough`, `/bridgewater`, `/flemington`, `/warren`, `/princeton`, `/franklin-park`, `/monmouth-junction`, `/monroe-township`. Leave Montgomery, Branchburg, Far Hills, Bernardsville, and Basking Ridge as text. Do not build pages for those text-only towns.

---

## 4. Priority 3 — New pages and the Princeton basement section

Follow the existing town-page pattern (owner-operated voice, services list, reviews, recent work, CTA). Do not add Morristown, Montgomery, Branchburg, or other unlisted towns as new routes. Reuse existing photos from `/portfolio` with accurate captions; do not invent project locations.

Shared internal-link rules for every new page:

- Header/footer as in Priority 4.
- Link to `/`, `/portfolio`, `#contact` or the homepage contact section, and the relevant sister service or town pages.
- Service pages should link out to the town pages for Hillsborough, Princeton, Warren, Flemington, Bridgewater, Franklin Park, Monmouth Junction, and Monroe Township where the service is actually offered on those pages.
- Town pages should link to `/bathroom-remodeling`, `/kitchen-remodeling`, `/finish-basement`, `/floor-installation` when that service is listed.

Shared schema notes:

- Reuse the site’s existing `LocalBusiness` / `HomeAndConstructionBusiness` entity as `provider`. Do not mint a second organization.
- Service pages: `Service` with `name`, `areaServed` limited to towns already listed on the site, `url` = the new slug.
- Town pages: same pattern as `/princeton` and `/warren`; `areaServed` = that town only.
- **Do not** output `aggregateRating`, `reviewCount`, `priceRange`, license numbers, or `foundingDate` in JSON-LD unless `[CONFIRM]` / already present as a verified Business Profile field.

### 4.1 `/bathroom-remodeling`

- **Title:** `Bathroom Remodeling in Central New Jersey | Modern Master`
- **H1:** `Bathroom Remodeling in Central New Jersey`
- **Meta (131 characters):** `Bathroom remodeling in Hillsborough, Somerset County, and Central NJ. Walk-in showers and full baths, built by the person you hire.`
- **Targets (Queries.csv):** combined general + New Jersey bathroom cluster — **7,393 impressions, 29 clicks, weighted avg position 10.90** (253 queries). Lead queries: `bathroom remodeling` (1,210 impr, pos 14.36, 0 clicks); `bathroom remodel near me` (387, 7.26, 4 clicks); `bathroom remodeling near me` (366, 6.67, 1 click); `bathroom remodeling nj` (345, 2.08, 1 click); `bathroom remodel` (308, 2.24, 6 clicks). Also absorb shower-remodel demand on this page (359 impressions, weighted pos 2.32, 0 clicks), including `shower remodel near me` (302 impr, pos 1.63, 0 clicks).
- **Old URL:** restore in place (199 impressions, 1 click, pos 16.08). 301 `/how-long-does-it-take-to-remodel-a-bathroom` here.
- **Suggested H2s:** Bathroom remodeling in Central NJ; Walk-in showers and tile; Primary / master baths; What to expect on a Modern Master bathroom job; Towns we serve (links); Recent bathroom work (portfolio); Questions homeowners ask (duration, process — no prices unless `[CONFIRM]`); Start a bathroom project (CTA).
- **Schema:** `Service` name “Bathroom Remodeling”.

### 4.2 `/hillsborough`

- **Title:** `Bathroom & Kitchen Remodeling in Hillsborough, NJ | Modern Master`
- **H1:** `Bathroom & Kitchen Remodeling in Hillsborough, NJ`
- **Meta (137 characters):** `Bathroom and kitchen remodeling in Hillsborough, NJ, Geza's hometown. Owner-operated craftsmanship from Modern Master. Free consultation.`
- **Targets:** all Hillsborough queries — **2,155 impressions, 12 clicks, weighted avg position 24.62** (60 queries). Lead queries: `bathroom remodeling hillsborough` (459 impr, pos 36.11); `kitchen remodeling hillsborough` (237, 23.39); `remodeling contractor hillsborough nj` (137, 11.24); `bathroom remodel hillsborough nj` (114 impr, **11 clicks**, 9.65% CTR, pos 7.25) — the strongest legit clicking query in the export; `house remodeling hillsborough nj` (63, 18.60); `basement remodel hillsborough nj` (40, 11.93).
- **301 here:** `/bathroom-remodeling-hillsborough` (329 impr, 1 click), `/kitchen-remodeling-hillsborough` (256 impr, 3 clicks), `/finish-basement-hillsborough` (148 impr, 4 clicks), `/remodeling-contractors-hillsborough` (118 impr, pos 9.18, 1 click), plus carpentry and railings Hillsborough slugs per `redirects.csv`.
- **Suggested H2s:** Built for Hillsborough homes by the craftsman himself (Geza lives here — already stated on the live site); Services offered in Hillsborough (bathroom, kitchen, basement, carpentry, flooring); Somerset County context (do not imply a standalone county page); What Hillsborough homeowners say (`[CONFIRM]` review attribution); Recent work; Transform your Hillsborough home (CTA).
- **Schema:** town-page pattern, `areaServed` Hillsborough NJ.

### 4.3 `/kitchen-remodeling`

- **Title:** `Kitchen Remodeling in Central New Jersey | Modern Master`
- **H1:** `Kitchen Remodeling in Central New Jersey`
- **Meta (139 characters):** `Kitchen remodeling in Hillsborough, Somerset County, and Central NJ. Owner-operated design and build from Modern Master. Free consultation.`
- **Targets:** combined general + New Jersey kitchen cluster — **2,087 impressions, 4 clicks, weighted avg position 8.35**. Lead queries: `kitchen remodeling` (574 impr, pos 1.10, 0 clicks); `kitchen remodelers near me` (208, 1.17, 0); `kitchen remodeling near me` (186, 1.04, 0); `kitchen remodel near me` (184, 1.16, 1 click). Somerset County kitchen queries already sit near position 2 (169 impressions, 0 clicks) — name Somerset County in the body.
- **Old URL:** restore in place (140 impressions, 1 click, pos 12.02).
- **Suggested H2s:** Kitchen remodeling in Central NJ; How a Modern Master kitchen job runs (coordination with outside cabinet suppliers is already described on `/franklin-park` — reuse that idea only if still accurate); Towns we serve; Recent kitchen work; Questions homeowners ask; Start a kitchen project.
- **Schema:** `Service` name “Kitchen Remodeling”.

### 4.4 `/floor-installation` (restore first among 404s)

- **Title:** `Floor Installation in Central New Jersey | Modern Master`
- **H1:** `Floor Installation in Central New Jersey`
- **Meta (138 characters):** `Floor installation in Central New Jersey, including Hillsborough and Princeton. Owner-operated work from Modern Master. Free consultation.`
- **Targets:** query cluster is modest — **230 impressions, 0 clicks, avg position 20.82** (plus 43 impressions on town variants). **The page history is not modest:** `/floor-installation` had **118 clicks, 583 impressions, position 3.06, 20.24% CTR**. All floor URLs together: **137 clicks, 1,146 impressions**. This was the best-converting service page in the 12-month export. Flooring is still offered (homepage contact form: “Flooring Installation”).
- **301 here:** `/floor-installation-morristown` (19 clicks, 313 impressions, pos 14.63) and the Princeton, Hillsborough, Warren, and Flemington floor slugs.
- **Suggested H2s:** Floor installation in Central NJ; Materials we install (`[CONFIRM]` — hardwood, tile, LVP, etc.; do not list what they do not offer); How installation is handled on a live job site; Towns we serve; Recent floor work (only if portfolio items are actually floors); Start a flooring project.
- **Schema:** `Service` name “Floor Installation”.

### 4.5 `/finish-basement` (restore)

- **Title:** `Basement Finishing in Central New Jersey | Modern Master`
- **H1:** `Basement Finishing in Central New Jersey`
- **Meta (127 characters):** `Basement finishing in Princeton, Hillsborough, and Central NJ. Turn unused space into finished living space with Modern Master.`
- **Targets:** combined general + New Jersey basement cluster — **1,889 impressions, 1 click, weighted avg position 70.71**. This is a demand page, not a short-term striking-distance play. Old `/finish-basement`: **1,617 impressions, 5 clicks, position 69.29**.
- **301 here:** `/finish-basement-morristown` (303 impressions). Princeton and Warren basement slugs go to those town pages (see 4.8 and `redirects.csv`).
- **Suggested H2s:** Basement finishing in Central NJ; What a finished basement can become (no invented examples); Towns we serve, with a prominent link to the new Princeton basement section; Recent basement work; Questions homeowners ask; Start a basement project.
- **Schema:** `Service` name “Basement Finishing”.

### 4.6 `/flemington`

- **Title:** `Bathroom & Kitchen Remodeling in Flemington, NJ | Modern Master`
- **H1:** `Bathroom & Kitchen Remodeling in Flemington, NJ`
- **Meta (155 characters):** `Bathroom and kitchen remodeling in Flemington, NJ. Owner-operated craftsmanship from Modern Master, serving Hunterdon County. Schedule a free consultation.`
- **Targets:** Flemington query clusters — **450 impressions, 0 clicks, weighted avg position 49.52**. Old `/bathroom-remodeling-flemington` had **1,151 impressions** (pos 42.12); `/kitchen-remodeling-flemington` had 312; `/remodeling-contractors-flemington` had 92 impressions at position 9.16.
- **301 here:** the six Flemington slugs in `redirects.csv` (bathroom, kitchen, basement, contractors, carpentry, railings). Floor Flemington goes to `/floor-installation`.
- **Suggested H2s:** Built for Flemington / Hunterdon County homes; Services offered (bathroom, kitchen, basement, carpentry); What homeowners say (`[CONFIRM]`); Recent work; Transform your Flemington home.
- **Schema:** town-page pattern, `areaServed` Flemington NJ. Hunterdon County is already named on the live homepage — safe to mention.

### 4.7 `/bridgewater`

- **Title:** `Bathroom & Kitchen Remodeling in Bridgewater, NJ | Modern Master`
- **H1:** `Bathroom & Kitchen Remodeling in Bridgewater, NJ`
- **Meta (149 characters):** `Bathroom and kitchen remodeling in Bridgewater, NJ. Owner-operated craftsmanship from Modern Master in Somerset County. Schedule a free consultation.`
- **Targets:** **261 impressions, 0 clicks, weighted avg position 21.64** — already in the 8–30 band. Bathroom in Bridgewater: 141 impressions, pos 19.54; kitchen: 74 impressions, pos 17.15. Bridgewater is listed in the homepage service area and on `/warren` / `/franklin-park` “also working in” copy. No historical Bridgewater slugs were in Pages.csv.
- **Suggested H2s:** Same town-page outline as `/warren`. Services: bathroom, kitchen, plus any services already implied for neighboring Somerset towns (basement / carpentry only if consistent with current town pages). Do not invent Bridgewater-specific project stories; use portfolio items only if they are actually in Bridgewater or keep them labeled as regional work.
- **Schema:** town-page pattern, `areaServed` Bridgewater NJ.

### 4.8 Princeton basement section (update `/princeton`, do not add a new slug)

The live page title/H1 are bathroom & kitchen only; basement is a service bullet. Basement + Princeton queries: **478 impressions, 0 clicks, avg position 42.78**. Old `/finish-basement-princeton` had **578 impressions**. `/bathroom-remodeling-princeton` (37 clicks, 637 impressions) and `/kitchen-remodeling-princeton` (176 impressions) must 301 to `/princeton`.

**Change title, H1, and meta to these exact strings:**

- **Title:** `Bathroom, Kitchen & Basement Remodeling in Princeton, NJ | Modern Master`
- **H1:** `Bathroom, Kitchen & Basement Remodeling in Princeton, NJ`
- **Meta (151 characters):** `Bathroom, kitchen, and basement remodeling for Princeton, NJ homeowners. Owner-operated craftsmanship from Modern Master. Schedule a free consultation.`

Add a substantial **Basement finishing in Princeton** H2 (not a one-line bullet): what they do, link to `/finish-basement`, and any real Princeton basement photos from the portfolio. Keep the existing bathroom/kitchen content. Leave review quotes as they are unless `[CONFIRM]` they should be updated.

---

## 5. Priority 4 — Sitemap, navigation, GSC submit

- Update `https://modern-master.com/sitemap.xml` (currently a single `urlset` of eight URLs) to include `/bathroom-remodeling`, `/kitchen-remodeling`, `/floor-installation`, `/finish-basement`, `/hillsborough`, `/flemington`, and `/bridgewater`. Keep existing URLs. Use lastmod dates for the new/updated pages.
- Header nav: do not leave “Services” as a dead `#services` jump only. Link the four service pages (and keep a Services overview jump on the homepage if useful). Portfolio, About, Contact can stay as they are.
- Footer / “Proudly Serving” / “Also working in”: every town with a page must be a real internal link (existing five + Hillsborough, Flemington, Bridgewater).
- After deploy, **Marcelo submits the sitemap in Google Search Console** and requests indexing on the restored high-equity URLs (`/floor-installation`, `/princeton`, `/bathroom-remodeling`, `/hillsborough`). Do not expect Claude Code to submit in GSC.

---

## 6. Separate flag — investigate only (do not “fix” in this pass)

Two GSC anomalies for Marcelo / Geza; investigation only. Do not buy disavow tools, publish a new security post, or change DNS in this pass. Report findings; do not apply a disavow file unless Marcelo explicitly asks after review.

1. **February 2026 gambling-spam spike.** Homepage absorbed almost all of `betsmove` / `trwin` / `ktp789` traffic (Turkey 145,819 impressions; Feb 17 alone 141,271 impressions). Check the repo history, leftover public paths, injected scripts, odd `robots.txt` or sitemap entries, AMP/old WordPress remnants, and Search Console remediations / backlinks for spammy gambling domains. If you find injected pages or still-live junk URLs, list them and 301 or remove only after showing Marcelo. Disavow candidates are a list, not an upload.
2. **October 2026 data gap.** `Chart.csv` has only **3 days in October 2026, 0 clicks, 137 impressions**, then November resumes. Check property/domain moves, robots/noindex accidents, outages, and whether the Next.js cutover briefly dropped the site from coverage.

**Morristown reminder:** query volume exists (kitchen 443, bathroom 309, basement 259 impressions; positions ~48–58) and old pages existed. It is not on the current service-area list. Confirm with Geza before any `/morristown` page. Redirects in this brief already point those 404s at service pages.

---

## 7. Acceptance checklist

- [ ] All 46 `redirects.csv` sources return **301** to the listed destination (test with and without trailing slash). No 308→404 chains on those slugs.
- [ ] `/bathroom-remodeling`, `/kitchen-remodeling`, `/floor-installation`, and `/finish-basement` are **200** (restored), not redirects to `/`.
- [ ] `/hillsborough`, `/flemington`, and `/bridgewater` are **200**.
- [ ] No `/morristown` route was added.
- [ ] Homepage title, H1, and meta match the Priority 2 strings exactly.
- [ ] `/princeton` title, H1, and meta match the Priority 3.8 strings and the page has a real basement section.
- [ ] No new title/meta exceeds 155 characters. No unconfirmed license, year, warranty, price, or review-count claims in titles, metas, or JSON-LD.
- [ ] Sitemap lists all new service and town slugs. Nav and footer link to service pages and to every town that has a page.
- [ ] Service H3s on the homepage link to the new service pages. Flooring in the contact form links to `/floor-installation`.
- [ ] AMP leftovers searched; any found are 301’d to canonical and `amphtml` tags removed.
- [ ] Feb 2026 spam and October 2026 gap are documented as findings only, not silently “fixed.”
- [ ] Marcelo has the sitemap URL to submit in GSC and a short list of URLs to request indexing: `/floor-installation`, `/bathroom-remodeling`, `/kitchen-remodeling`, `/finish-basement`, `/hillsborough`, `/princeton`, `/flemington`, `/bridgewater`.
