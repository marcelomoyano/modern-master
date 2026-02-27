# Modern Master — Premium Homepage Build Prompt

## Project Overview

Build a complete, production-ready Next.js single-page homepage for **Modern Master** — a premium home remodeling contractor based in Central New Jersey. The site must feel high-end, modern, and confident. Think Restoration Hardware meets architectural portfolio. This is NOT a generic contractor site — this is a craftsman's showcase.

**Deploy target:** Vercel (Next.js App Router)
**Domain:** modern-master.com
**Goal:** Convert visitors into consultation requests. Every section should build trust and move toward the CTA.

---

## Tech Stack

- **Next.js 14+** (App Router, `app/` directory)
- **TypeScript**
- **Tailwind CSS** (with custom config for brand colors/fonts)
- **Framer Motion** for animations (scroll-triggered reveals, smooth transitions)
- **Single page** — all sections on `page.tsx`, no routing needed
- **Fully responsive** — mobile-first, looks incredible on iPhone and desktop
- **Images:** Reference from `/public/photos/before/` and `/public/photos/after/` directories. Use Next.js `<Image>` component with proper alt tags.

---

## Brand & Design System

### Personality
Premium, confident, understated. Geza is a master craftsman with 20+ years of experience. The site should feel like walking into a luxury showroom — not a loud contractor ad.

### Color Palette
- **Primary Background:** Deep charcoal/near-black (`#0A0A0A` or `#111111`)
- **Secondary Background:** Dark warm gray (`#1A1A1A`)
- **Accent:** Warm brass/gold (`#C9A96E`) — used sparingly for CTAs, highlights, borders
- **Text Primary:** Off-white (`#F5F5F0`)
- **Text Secondary:** Muted warm gray (`#9A9A8E`)
- **Card/Surface:** Subtle dark with slight warm undertone

### Typography
- **Headlines:** A refined serif like `"Playfair Display"` or `"Cormorant Garamond"` — elegant, architectural
- **Body:** Clean sans-serif like `"DM Sans"` or `"Outfit"` — modern, highly readable
- **Import from Google Fonts**
- Headlines should be large and confident. Generous letter-spacing on uppercase labels.

### Design Principles
- **Generous whitespace** — let the work breathe
- **Large photography** — the photos ARE the product, make them hero-sized
- **Subtle animations** — fade-in on scroll, parallax on images, smooth hover states
- **Minimal UI chrome** — no heavy borders, no busy backgrounds, no gradients. Clean lines.
- **Dark theme throughout** — the dark background makes the bright bathroom/kitchen photos POP

---

## Homepage Sections (Top to Bottom)

### 1. Navigation (Fixed/Sticky)
- Logo: "MODERN MASTER" in elegant typography, left-aligned. Add a subtle gold line underneath or use the serif font.
- Nav links (right): Services | Portfolio | About | Contact
- On mobile: hamburger menu with a clean slide-in panel
- Semi-transparent background that becomes solid on scroll
- Include phone number on desktop nav: `(908) XXX-XXXX` (placeholder)

### 2. Hero Section
- Full-viewport height
- Background: The best "after" bathroom photo (the one with the freestanding tub, glass shower, and arched window — `/photos/after/bathroom-after-3.jpg`)
- Dark overlay gradient (bottom-heavy) so text is readable
- Headline: **"Where Vision Meets Craftsmanship"**
- Subheadline: "Premium home remodeling in Central New Jersey. 20+ years of transforming spaces into something extraordinary."
- CTA Button: **"Schedule Your Free Consultation"** — brass/gold accent color, elegant hover state
- Subtle scroll indicator at bottom (animated chevron or line)

### 3. Trust Bar / Stats
- Horizontal bar, slightly different background shade
- Four stats in a row:
  - **20+** Years of Experience
  - **500+** Projects Completed
  - **5 ★** Google Rating
  - **100%** Licensed & Insured
- Clean typography, numbers large, labels small and uppercase
- Subtle fade-in animation on scroll

### 4. Before & After Showcase (KEY SECTION)
- Section title: **"The Transformation"** with a thin gold accent line
- Subtitle: "Every project begins with care and ends with perfection."
- **Interactive before/after slider** — use a horizontal drag slider where the user can slide between the before and after image. The before image shows the workspace (protective coverings, prep work) and the after shows the stunning finished bathroom.
- Show 2 before/after pairs:
  - **Pair 1:** `/photos/before/house-before-1.jpg` → `/photos/after/bathroom-after-1.jpg`
  - **Pair 2:** `/photos/before/house-before-2.jpg` → `/photos/after/bathroom-after-2.jpg`
- Below the slider, a brief note: "We protect your home during every phase of construction — because attention to detail starts before the first tile is laid."
- This section tells the STORY: care → craftsmanship → stunning result

### 5. Services Grid
- Section title: **"Our Expertise"**
- 6 services in a 3x2 grid (2x3 on mobile):
  1. **Bathroom Remodeling** — "Spa-worthy bathrooms designed for daily luxury."
  2. **Kitchen Remodeling** — "The heart of your home, reimagined."
  3. **Finish Basement** — "Unlock your home's hidden potential."
  4. **Floor Installation** — "From hardwood to tile, installed with precision."
  5. **Carpentry & Trim Work** — "Handcrafted details that elevate every room."
  6. **Railings & Balusters** — "Elegant staircases that make an entrance."
- Each card: dark surface with subtle border, icon or small image, title, one-line description
- Hover effect: subtle lift + gold accent border
- Cards should feel minimal and premium, not busy

### 6. Portfolio / Gallery
- Section title: **"Recent Work"**
- Masonry or grid layout showing the 4 "after" photos:
  - `/photos/after/bathroom-after-1.jpg`
  - `/photos/after/bathroom-after-2.jpg`
  - `/photos/after/bathroom-after-3.jpg`
  - `/photos/after/bathroom-after-4.jpg`
- On hover: subtle zoom + overlay with project type label
- Clicking could open a lightbox (optional, nice to have)
- All images from `/photos/after/` directory (bathroom-after-1.jpg through bathroom-after-4.jpg)
- CTA at bottom: "View Full Portfolio" (can link to #contact for now)

### 7. About / Why Modern Master
- Two-column layout: text left, image right (or photo of work in progress)
- Headline: **"Craftsmanship Is Personal"**
- Copy (write this in a warm, confident, first-person tone):
  - Geza has been remodeling homes in New Jersey for over 20 years
  - He's not a sales guy who subs everything out — he's on the job site, hands-on
  - Every project gets personal attention from start to finish
  - Licensed, insured, and trusted by homeowners across Central NJ
  - "Your home deserves a craftsman, not a contractor."
- Keep it to 3-4 short paragraphs max. Confident, not salesy.

### 8. Service Areas
- Section title: **"Proudly Serving Central New Jersey"**
- Clean list or subtle map graphic showing coverage area
- Towns: Hillsborough, Princeton, Warren, Morristown, Flemington, Bridgewater, Somerset, Bernardsville
- Style: minimal, perhaps a subtle dark map background with gold pins, or just an elegant typographic list
- This section also helps with local SEO

### 9. Testimonials
- Section title: **"What Homeowners Say"**
- 2-3 testimonial cards in a horizontal layout (carousel on mobile)
- Use real-sounding testimonials (we'll replace with actual Google reviews):
  - "Geza and his team transformed our master bathroom beyond what we imagined. The attention to detail is unmatched." — *Homeowner, Princeton NJ*
  - "From day one, they protected our home like it was their own. The finished kitchen is absolutely stunning." — *Homeowner, Hillsborough NJ*
  - "After two bad experiences with other contractors, Modern Master restored our faith. True professionals." — *Homeowner, Warren NJ*
- Large quotation mark as decorative element (in gold accent)
- Stars shown for each review

### 10. CTA / Contact Section
- Full-width section with a darker background
- Headline: **"Ready to Transform Your Space?"**
- Subheadline: "Schedule your free consultation today. Let's discuss your vision."
- **Two columns:**
  - Left: Contact form (Name, Email, Phone, Project Type dropdown, Message, Submit button)
  - Right: Contact info (Phone, Email: info@modern-master.com, Service area, Business hours)
- Submit button: brass/gold accent, prominent
- Form should use a simple `mailto:` action or a Formspree/Netlify Forms endpoint placeholder

### 11. Footer
- Dark, minimal
- Logo + tagline: "Premium Home Remodeling in New Jersey"
- Quick links: Services | Portfolio | About | Contact
- Contact info: phone, email
- Social links (Instagram, Facebook) — placeholder hrefs
- "© 2026 Modern Master. All Rights Reserved."
- NJ License number placeholder

---

## SEO Requirements

In the `<head>` / metadata:

- **Title:** "Modern Master | Premium Home Remodeling in New Jersey"
- **Description:** "Transform your home with Modern Master — Central New Jersey's premier remodeling contractor. Specializing in luxury bathrooms, kitchens, and full renovations. 20+ years of craftsmanship."
- **Open Graph tags** with hero image
- **Structured Data (JSON-LD):** LocalBusiness schema with:
  - name, description, address (Hillsborough, NJ), telephone, url, service area, rating
- **Semantic HTML** throughout (proper heading hierarchy, landmarks, alt text)

---

## Animation Guidelines

Use **Framer Motion** for:
- **Scroll-triggered reveals:** Sections fade up with slight Y-translate as they enter viewport. Stagger children elements.
- **Hero:** Text fades in with a slight delay cascade (headline → subheadline → CTA)
- **Before/After slider:** Smooth drag interaction
- **Stats:** Number count-up animation when section enters viewport
- **Gallery:** Subtle scale on hover
- **Nav:** Background opacity transition on scroll

Keep animations elegant and restrained. No bouncing, no excessive spring physics. Ease-out curves, ~0.6-0.8s duration. The vibe is "luxury brand" not "tech startup."

---

## File Structure Expected

```
modern-master/
├── app/
│   ├── layout.tsx          (root layout with fonts, metadata)
│   ├── page.tsx            (homepage with all sections)
│   └── globals.css         (Tailwind base + custom styles)
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── TrustBar.tsx
│   ├── BeforeAfter.tsx     (interactive slider component)
│   ├── Services.tsx
│   ├── Gallery.tsx
│   ├── About.tsx
│   ├── ServiceAreas.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
│   └── photos/
│       ├── before/         (before photos from Geza)
│       └── after/          (after photos from Geza)
├── tailwind.config.ts
├── package.json
└── next.config.js
```

---

## Critical Notes

1. **This must be a COMPLETE, working codebase** — not snippets. Every file, every import, every config. Ready to `npm install && npm run dev`.
2. **The before/after slider is the hero feature** — make it buttery smooth and satisfying to use. This is what differentiates the site.
3. **Photos are everything** — the layout should be designed around showcasing large, beautiful photography. The dark theme exists to make the photos pop.
4. **Mobile experience matters** — most leads will come from social media on phones. The mobile version needs to be just as premium.
5. **Performance** — optimize images with Next.js Image component, lazy load below-fold sections, keep bundle size minimal.
6. **No stock photos, no placeholder illustrations** — only real project photos. Available photos:
   - **Before (process/prep):** `house-before-1.jpg`, `house-before-2.jpg`, `house-before-3.jpg`, `house-before-4.jpg` — these show the team protecting the home with coverings, prepping spaces, workers on site
   - **After (finished work):** `bathroom-after-1.jpg`, `bathroom-after-2.jpg`, `bathroom-after-3.jpg`, `bathroom-after-4.jpg` — these show stunning finished bathrooms with glass shower enclosures, freestanding tubs, marble tile, blue/green double vanities, arched windows
   - All referenced as `/photos/before/filename.jpg` and `/photos/after/filename.jpg` (Next.js serves from `/public`)
7. **The copy tone is confident and premium** — short sentences, no fluff, no "we pride ourselves" corporate speak. Direct, warm, and professional.