# Modern Master — Architecture & Design System

This document captures how the Modern Master marketing site is structured, styled, and deployed. It's a living reference for anyone making changes to the codebase.

---

## 1. Stack

| Layer | Choice | Notes |
| --- | --- | --- |
| Framework | **Next.js 14.2.3** (App Router) | Static prerendering by default — every route at build time |
| Language | TypeScript 5, React 18 | Strict by Next defaults |
| Styling | **Tailwind CSS 3.4** | Custom theme tokens, no plugins |
| Animation | **framer-motion 12** | Used in client components only |
| Icons | **lucide-react** + custom van-print SVGs | See `src/components/icons/BrandIcons.tsx` |
| Util | `clsx`, `tailwind-merge` | Combined as `cn()` in `src/lib/utils.ts` |
| Hosting | **Vercel** | Auto deploy from `main` |
| Domain | `modern-master.com` | A `@` → `216.198.79.1`, CNAME `www` → `cname.vercel-dns.com`. Nameservers stay at GoDaddy so the MX records keep email working. |
| Forms | **Web3Forms** | Public endpoint, hidden honeypot field |
| Analytics | GA4 (env-var hook) | Wired but inactive until `NEXT_PUBLIC_GA_ID` is set in Vercel |

There is **no backend** — every page is statically prerendered HTML + JSON-LD + client-side JS for animations and form submission. Forms go straight to Web3Forms via `fetch`.

---

## 2. Repository layout

```
modern-master/
├── modern-master-arch.md      ← this file
├── SEO_PHASE1.md              ← phase-1 SEO build spec (from Geza)
├── next.config.mjs            ← empty
├── tailwind.config.ts         ← design tokens live here
├── seo/                       ← per-town content reference docs (not deployed)
├── svg/                       ← icon design iterations (not deployed)
├── photos/                    ← raw HEIC photos pre-conversion (not deployed)
├── public/
│   ├── logo.png
│   ├── photos/
│   │   ├── after/             ← hero/marketing photos
│   │   └── before/            ← prep/before shots for BeforeAfter section
│   └── portfolio/
│       ├── bathrooms/  01.jpg … 13.jpg
│       ├── kitchens/   01.jpg … 03.jpg
│       ├── carpentry/  01.jpg … 18.jpg  (mix of .jpg and .jpeg)
│       └── basements/  01.jpg … 17.jpg
└── src/
    ├── app/
    │   ├── layout.tsx          ← root metadata + LocalBusiness JSON-LD + GA4
    │   ├── page.tsx            ← homepage (composes all section components)
    │   ├── globals.css         ← Tailwind directives only
    │   ├── sitemap.ts          ← Next-generated /sitemap.xml
    │   ├── robots.ts           ← Next-generated /robots.txt
    │   ├── portfolio/          ← /portfolio (layout + page)
    │   ├── review/             ← /review (leave-a-Google-review CTA)
    │   ├── princeton/          ← /princeton (SEO landing page)
    │   ├── warren/             ← /warren (SEO landing page)
    │   └── morristown/         ← /morristown (SEO landing page)
    ├── components/
    │   ├── Navigation.tsx
    │   ├── Hero.tsx
    │   ├── TrustBar.tsx
    │   ├── BeforeAfter.tsx
    │   ├── Services.tsx
    │   ├── Gallery.tsx
    │   ├── About.tsx
    │   ├── ServiceAreas.tsx
    │   ├── Testimonials.tsx    ← present but NOT imported (placeholder copy hidden)
    │   ├── Contact.tsx         ← Web3Forms-wired form
    │   ├── Footer.tsx
    │   ├── LocationPage.tsx    ← shared layout for /princeton, /warren, /morristown
    │   └── icons/BrandIcons.tsx
    └── lib/
        └── utils.ts            ← `cn()` helper
```

Folders not under `public/` or `src/` (e.g. `seo/`, `svg/`, `photos/`) are working/reference material and are excluded from the build.

---

## 3. Routes

| Path | File | Render | Purpose |
| --- | --- | --- | --- |
| `/` | `src/app/page.tsx` | Static | Homepage — hero, trust bar, before/after, services, gallery, about, service areas, contact |
| `/portfolio` | `src/app/portfolio/page.tsx` (client) | Static | Filterable photo gallery (4 categories) with lightbox |
| `/review` | `src/app/review/page.tsx` (client) | Static | Soft funnel page driving customers to leave a Google review; `noindex` |
| `/landing`, `/landing/a`, `/landing/b` | `src/app/landing/**` | Static | Mobile lead-page experiments for paid traffic; `noindex` + robots-disallowed. See §11 |
| `/princeton`, `/warren`, `/morristown` | `src/app/<town>/page.tsx` | Static | SEO landing pages per town — all use `LocationPage.tsx` |
| `/sitemap.xml` | `src/app/sitemap.ts` | Static | Lists `/`, `/portfolio`, and the three location pages |
| `/robots.txt` | `src/app/robots.ts` | Static | Allows everything except `/review`; points to sitemap |

Each route's `layout.tsx` exports its own `Metadata` so titles, descriptions, and canonical URLs are unique per page. The root `layout.tsx` sets `metadataBase = https://modern-master.com` so all relative OG/Twitter image URLs resolve to production.

---

## 4. Design system

### 4.1 Color tokens

Defined in `tailwind.config.ts`. Never hardcode hex values in components — always reach for these.

| Token | Hex | Use |
| --- | --- | --- |
| `background-primary` | `#111111` | Page backgrounds, primary sections |
| `background-secondary` | `#1A1A1A` | Alternating sections to create vertical rhythm |
| `surface` | `#161616` | Card / panel backgrounds, form fields |
| `accent-GOLD` | `#C9A96E` | Single accent color — used for ALL emphasis (lines, buttons, badges, italic words, hover states) |
| `text-primary` | `#F5F5F0` | Body text, headings |
| `text-secondary` | `#9A9A8E` | Supporting copy, muted descriptions |

The site has **one** accent color. Resist the urge to introduce a second. Hover states almost always swap to `white` or `accent-GOLD` — never to a new color.

### 4.2 Typography

- **Serif** — `Playfair Display` (loaded via `next/font/google`, exposed as `--font-playfair-display`). Used for all H1/H2/H3, the founder quote, and "italic gold" emphasis words.
- **Sans** — `DM Sans` (`--font-dm-sans`). Used for body, navigation, buttons, labels.
- Tracking patterns:
  - `tracking-widest uppercase` on buttons and section eyebrows
  - `tracking-[0.3em]` or `tracking-[0.4em]` on micro-labels ("BACK TO HOME", "SERVING PRINCETON, NJ")
- The recurring stylistic move is **a serif headline with one word italicized in `accent-GOLD`**:

  ```tsx
  <h2 className="font-serif text-4xl text-text-primary">
    Where Vision Meets <span className="text-accent-GOLD italic">Craftsmanship</span>
  </h2>
  ```

  Used in `Hero`, `About`, `ServiceAreas`, `LocationPage` body H2 + Services H2 + Recent Work H2.

### 4.3 Section rhythm

Every long-form section follows the same skeleton:

```
section
├── py-24            ← consistent vertical padding (py-20 for tighter rows)
├── alternating bg   ← bg-background-primary ↔ bg-background-secondary
└── inner wrapper
    ├── max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
    └── content
        ├── eyebrow label (optional, tracking-widest uppercase)
        ├── serif H2 with italic gold accent
        ├── h-[1px] w-16 bg-accent-GOLD  ← signature gold divider
        └── body
```

The `h-[1px] w-16 bg-accent-GOLD` divider is the strongest single visual through-line of the site. Use it under every section heading.

### 4.4 Buttons

Two variants only:

- **Primary** — solid gold on dark, swaps to white on hover.
  ```tsx
  className="bg-accent-GOLD text-background-primary font-sans font-medium px-8 py-4 uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300"
  ```

- **Secondary** — gold outline on dark, fills gold on hover.
  ```tsx
  className="border border-accent-GOLD text-accent-GOLD font-sans font-medium px-8 py-4 uppercase tracking-widest text-sm hover:bg-accent-GOLD hover:text-background-primary transition-colors duration-300"
  ```

### 4.5 Decorative motifs

- **Gold corner brackets** — `w-24 h-24 border-t-2 border-r-2 border-accent-GOLD` positioned absolute on cards and images. See `About.tsx` and `LocationPage.tsx` CTA panel.
- **Offset border-frame** — `absolute inset-0 border border-white/10 translate-x-4 translate-y-4` behind images for depth. See `About.tsx`.
- **Card border treatment** — `bg-surface border border-white/5 hover:border-accent-GOLD/30 transition-colors`. All cards inherit this.

### 4.6 Motion

`framer-motion` is used consistently:

- **Section reveal** — `initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}` on H2 + content.
- **Staggered children** — Services and ServiceAreas use `containerVariants` + `itemVariants` with `staggerChildren: 0.1`.
- **Hero entrance** — single staggered `opacity + y` cascade with explicit delays.

Rule: anything that animates on scroll uses `viewport={{ once: true }}` so motion doesn't replay every time the user scrolls back.

### 4.7 Responsive breakpoints

Mobile-first. Components flow at `md:` (768px) and `lg:` (1024px). Layout patterns:

- Section padding: `px-4 sm:px-6 lg:px-8`
- Grid columns: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Type scale: `text-4xl md:text-5xl lg:text-6xl` for hero, `text-3xl md:text-4xl` for section H2

---

## 5. Component map (homepage)

Composition lives in `src/app/page.tsx`:

```tsx
<Navigation />
<Hero />            // full-bleed bathroom photo, "Where Vision Meets Craftsmanship"
<TrustBar />        // 20+ Years / Licensed & Insured / BBB A+ / 5★ Google
<BeforeAfter />     // side-by-side comparison slider
<Services />        // 4 service tiles using BrandIcons (Shower, Stove, Stairs, HammerSaw)
<Gallery />         // recent-work photo grid (mobile + desktop layouts diverge)
<About />           // Geza's bio + "Your home deserves a craftsman" blockquote
<ServiceAreas />    // 8 town chips — 3 link to /princeton, /warren, /morristown
<Contact />         // Web3Forms-wired consultation form
<Footer />          // BBB seal iframe, links, contact info
```

`<Testimonials />` exists in `src/components/` but is **not imported** anywhere. It holds three placeholder quotes (Sarah & Mark T. / Emily R. / James P.) that were removed from the homepage until real Google review quotes land. When restoring, re-add `<Testimonials />` after `<ServiceAreas />` in `page.tsx` and re-add the `Reviews` link to `NAV_LINKS` in `Navigation.tsx`.

### 5.1 LocationPage

`src/components/LocationPage.tsx` is the shared template for `/princeton`, `/warren`, `/morristown`. It is a **server component** (no `"use client"`) so the per-page JSON-LD schema renders directly into the HTML. Sections, top to bottom:

1. **Hero** — town `MapPin` badge, large serif H1, gold divider, subhead, dual CTA over per-town hero image
2. **Body** — "Built for [Town] Homes / By the Craftsman Himself" H2, 4 paragraphs, founder blockquote, paired portfolio photo in gold-bracket frame
3. **Services** — 2×2 grid of service items with `Check` icon
4. **Recent Work** — 3-photo strip linking to `/portfolio`
5. **CTA** — gold-bordered panel with phone + email buttons and surrounding-communities footnote

Each town page passes props (`town`, `h1`, `subhead`, `heroImage`, `paragraphs[]`, `services[]`, `surroundingCommunities`, `photos[]`, etc.) — body copy comes from `seo/*.md` reference files.

### 5.2 Icon library

`src/components/icons/BrandIcons.tsx` exports four service icons cropped from the original Modern Master van-print artwork (a 505×94 source SVG):

- `ShowerIcon` (bathroom)
- `StoveIcon` (kitchen)
- `StairsIcon` (basement)
- `HammerSawIcon` (carpentry — final version provided by client; recolored from `#231F20` to `currentColor` so it picks up theme color)

All four use `fill="currentColor"` so they pick up Tailwind text color classes (`text-accent-GOLD`, hover states, etc.). When adding new service icons, follow the same pattern: extract from the van-print SVG via viewBox cropping, set `fill="currentColor"`, prop-spread `IconProps`.

---

## 6. SEO architecture

### 6.1 Per-route metadata

Both client-component pages (`/portfolio`, `/review`) use a **route-segment `layout.tsx`** to export their `Metadata`, since `"use client"` files can't export `metadata` directly. Pattern:

```tsx
// src/app/portfolio/layout.tsx
export const metadata: Metadata = { title: "...", description: "...", alternates: { canonical: "/portfolio" } };
export default function PortfolioLayout({ children }) { return children; }
```

When adding a new route, follow the same pattern: a server-component `layout.tsx` exporting `Metadata`, and a `page.tsx` that may be client or server.

### 6.2 Structured data (JSON-LD)

Two layers:

- **Root `LocalBusiness` schema** — `HomeAndConstructionBusiness` injected from `src/app/layout.tsx` `<head>` on every page. Contains real geocoded lat/lng (`40.5476, -74.6042`), full address, telephone, email, the eight cities served, opening hours, `priceRange`, logo, image.
- **Per-page `HomeAndConstructionBusiness`** on each location page (`/princeton`, `/warren`, `/morristown`) with a town-scoped `@id` like `https://modern-master.com/princeton#business` and `areaServed: { name: "Princeton" }`.

Both schemas are valid coexisting because of distinct `@id`s. Google parses both as related business profiles.

### 6.3 Sitemap & robots

Generated at build time via Next.js file-based metadata:

- `src/app/sitemap.ts` exports a function returning entries for `/`, `/portfolio`, `/princeton`, `/warren`, `/morristown`. When adding a new public route, add it here.
- `src/app/robots.ts` allows everything except `/review` (no value indexing it).

### 6.4 GA4 hook

In `src/app/layout.tsx`:

```tsx
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
// ... inside <body>:
{GA_ID && <>
  <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
  <Script id="ga4-init" strategy="afterInteractive">{`...gtag init...`}</Script>
</>}
```

To activate, set `NEXT_PUBLIC_GA_ID` in Vercel project env to the `G-XXXXXXXXXX` Measurement ID. No code change required.

### 6.5 Town landing pages

The SEO Phase 1 deliverable. Reference content lives in `seo/*.md` (one file per town). Each page draws town-specific body copy from its reference file. The reference files contain placeholder `[TOWN PROJECT]` blocks that are intentionally **left out of the rendered pages** until Geza confirms real projects in those specific neighborhoods — see the build references' "do not invent a project" guardrail.

---

## 7. Integrations

| Integration | Where | Notes |
| --- | --- | --- |
| **Web3Forms** | `src/components/Contact.tsx` | Access key inlined (public by design). Fetches `https://api.web3forms.com/submit` with FormData. Hidden `botcheck` honeypot. Hidden `subject` and `from_name` for inbox readability. |
| **Google Business reviews** | `src/app/review/page.tsx` | `GOOGLE_REVIEW_URL = "https://g.page/r/CfrEDv64xZ_FEAI/review"` — direct deep link to write-a-review modal for Modern Master's GBP. |
| **BBB seal** | `src/components/Footer.tsx` | iframe to `seal-newjersey.bbb.org`. Sized 95×185 with `scrolling="no"` to avoid scrollbars from the iframe's body margins. |
| **Mail** | Throughout | `mailto:geza@modern-master.com` — note the lowercased form. The MX records are GoDaddy's defaults; email routing is independent of Vercel. |
| **Phone** | Throughout | `tel:+17326949197` (no spaces, leading `+1`) — displayed as `(732) 694-9197`. |
| **Google Search Console** | Pending | Verification not yet wired. Add as `<meta name="google-site-verification" />` in root layout's `metadata.verification.google` when ready. |

---

## 8. Photo asset conventions

### 8.1 Where things live

- `public/photos/after/` — finished-space hero/marketing photos. `bathroom-after-1.jpg` … `bathroom-after-4.jpg` are the canonical hero set; each location page uses a different one to give the OG previews variety.
- `public/photos/before/` — prep/before shots used in the BeforeAfter section and as the About.tsx photo.
- `public/portfolio/<category>/NN.jpg` — portfolio grid photos, **zero-padded** two-digit naming starting at `01`. Categories are `bathrooms`, `kitchens`, `carpentry`, `basements`. (`carpentry/09.jpeg`–`11.jpeg` are `.jpeg` rather than `.jpg` for historical reasons; the gallery page handles both.)

### 8.2 Adding photos

1. Drop originals (HEIC, RAW, etc.) into the top-level `photos/<category>/` working folder (not deployed).
2. Convert to JPG with `magick` (ImageMagick), preserving orientation and capping width:

   ```bash
   magick INPUT.HEIC -auto-orient -resize '2560x2560>' -quality 88 OUTPUT.jpg
   ```

3. Drop the JPGs into `public/portfolio/<category>/` continuing the numbered sequence.
4. Bump `count` in `CATEGORIES` in `src/app/portfolio/page.tsx`.
5. Update `altPrefix` if the category description should change.

The dimensions standard is 2560 max edge, quality 88 — matching existing assets keeps file sizes in the 0.5–1.1 MB range.

### 8.3 Alt text

Portfolio uses a per-category prefix pattern: `"<altPrefix> — project N"`. The prefix is defined alongside each category's metadata. Generic alts like `"Bathrooms project 1"` are explicitly avoided for SEO.

---

## 9. Build, deploy, and DNS

### 9.1 Local dev

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static prerender
npm start        # serve production build
```

### 9.2 Vercel

- Auto-deploys on push to `main`.
- Project name: `modern-master`.
- Custom domain: `modern-master.com` (apex) + `www.modern-master.com`.
- All pages are statically prerendered (`○ (Static)` in the build output) — no SSR, no server functions.

### 9.3 DNS (GoDaddy)

DNS records, not Vercel nameservers — this preserves the GoDaddy MX records that route `@modern-master.com` email.

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `216.198.79.1` |
| CNAME | `www` | `cname.vercel-dns.com` |
| MX | (default) | (GoDaddy email routing, untouched) |

Switching to "Vercel DNS" in the Vercel domain settings would replace GoDaddy nameservers and **drop the MX records** — don't do that without first migrating email.

### 9.4 Environment variables

Set in Vercel project env (not committed):

| Variable | Use |
| --- | --- |
| `NEXT_PUBLIC_GA_ID` | GA4 Measurement ID — when set, the Google tag activates automatically |

---

## 10. Conventions cheat sheet

- **No new colors.** One accent (`accent-GOLD`); hover swaps to `white`. That's it.
- **Italic + gold = emphasis word.** Pull this lever sparingly — once per heading.
- **Every section heading gets the `h-[1px] w-16 bg-accent-GOLD` divider.**
- **Two buttons.** Solid gold (primary) or outlined gold (secondary). Don't invent a third.
- **`"use client"` only when needed.** Animation, hooks, browser APIs, form state. Server components are the default — they keep JS payloads small and keep JSON-LD in the static HTML.
- **Add per-route metadata via `layout.tsx`** when the page is a client component.
- **Photos go through ImageMagick.** Never commit HEIC, RAW, or originals into `public/`.
- **Trust signals are the same four everywhere.** `20+ Years` / `Licensed & Insured` / `A+ BBB` / `5★ Google Reviews`. Don't introduce a fifth without confirming with Geza.
- **Real address, real phone, real email.** Never use placeholders or Lorem ipsum in committed code — even for tests.
- **`seo/`, `svg/`, `photos/` are working folders.** They are not deployed. Don't reference them from `src/`.
- **The `landing-*` tokens are quarantined.** They exist only for `/landing` (§11). Nothing outside `src/components/landing/` may use them.

---

## 11. Landing-page experiments (`/landing`)

Two mobile lead-page directions for paid traffic, built from a design-canvas mockup. **Not part of the main site** — they are `noindex`, disallowed in `robots.ts`, and absent from `sitemap.ts`.

| Route | Direction |
| --- | --- |
| `/landing` | Index — both options side by side, plus the outstanding sign-off checklist |
| `/landing/a` | Owner-first. Geza's portrait and voice lead; a four-question fit check qualifies, budget asked second |
| `/landing/b` | Work-first. Draggable before/after *is* the hero; published price tiers filter; CTA is a booked walkthrough |

### 11.1 Why these break the design system

They deliberately do **not** use `accent-GOLD`, Playfair, or DM Sans. They are conversion tests with their own aesthetic, so the tokens are namespaced rather than mixed in:

- Colors: the `landing` group in `tailwind.config.ts` (`landing-cream`, `landing-ink`, `landing-bronze`, …)
- Fonts: `font-display` (Instrument Serif) and `font-grotesk` (Manrope), loaded in `src/app/landing/layout.tsx` so the rest of the site never pays for them

Deleting `src/app/landing/`, `src/components/landing/`, and the two namespaced blocks in `tailwind.config.ts` removes the experiment completely. Nothing else imports from them.

### 11.2 Structure

```
src/app/landing/{layout.tsx,page.tsx,a/page.tsx,b/page.tsx}
src/components/landing/
├── copy.ts               ← all shared content, split VERIFIED / UNVERIFIED
├── BeforeAfterSlider.tsx ← drag-to-reveal comparison
├── DraftRibbon.tsx       ← internal-draft banner (delete on sign-off)
├── OptionA.tsx
└── OptionB.tsx
```

Both pages are client components with no `framer-motion` — 105 kB first load against the homepage's 159 kB, which matters when the traffic is paid and mobile.

### 11.3 `copy.ts` is the contract

The mockup shipped a fake phone number, a placeholder licence number, invented testimonials, invented price bands and invented capacity claims. `copy.ts` separates what the business actually backs from what it doesn't, and **every unverified value renders bracketed or flagged rather than as fact**. The `/landing` index lists what's outstanding. Do not remove a flag without Geza confirming the underlying number.

### 11.4 BeforeAfterSlider

The visible handle is decorative; the real control is a transparent full-bleed `input[type=range]`, which buys pointer drag, touch drag, arrow keys and screen-reader announcement for free. Two notes:

- `touch-action: pan-y` — vertical page scrolling must survive over a full-bleed hero slider.
- Thumb width is zeroed so the reveal reaches both edges; the native thumb inset otherwise stops it short.

Pairs come from `BEFORE_AFTER_PAIRS` in `copy.ts` — the same two verified pairs the homepage uses. Both pairs were shot at different orientations from their partner, so each carries a tuned `objectPosition`. **More matched pairs is the single highest-value asset addition here** — the format only works with genuine before/after shots of the same room.
