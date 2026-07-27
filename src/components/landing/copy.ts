/**
 * Shared content for the /landing lead-page experiments.
 *
 * Everything in this file is split into two buckets:
 *
 *   VERIFIED   — pulled from the live site / real business records. Safe.
 *   UNVERIFIED — carried over from the design mockup and NOT yet confirmed by
 *                Geza. Every one of these is marked. Nothing marked UNVERIFIED
 *                may ship to a public route until he signs off.
 *
 * The site-wide rule is "real address, real phone, real email — never
 * placeholders". The mockup shipped a fake number (908-555-0100) and a
 * placeholder licence (13VH0000000); both are corrected/flagged below.
 */

/* ------------------------------------------------------------------ */
/* VERIFIED                                                            */
/* ------------------------------------------------------------------ */

export const PHONE_HREF = "tel:+17326949197";
export const PHONE_DISPLAY = "(732) 694-9197";
export const SMS_HREF = "sms:+17326949197";
export const EMAIL = "geza@modern-master.com";
export const EMAIL_HREF = `mailto:${EMAIL}`;

/** Same eight towns as ServiceAreas.tsx, in the same order. */
export const TOWNS = [
  "Hillsborough",
  "Princeton",
  "Warren",
  "Morristown",
  "Flemington",
  "Bridgewater",
  "Somerset",
  "Bernardsville",
];

/** Deep link to Modern Master's Google Business Profile review flow. */
export const GOOGLE_REVIEW_URL = "https://g.page/r/CfrEDv64xZ_FEAI/review";

export interface BeforeAfterPair {
  id: string;
  before: string;
  after: string;
  /** Short label above the slider. */
  eyebrow: string;
  /** One line under the slider. */
  caption: string;
  beforeAlt: string;
  afterAlt: string;
  /**
   * object-position for each frame. The two source photos in a pair were shot
   * on different days at different orientations, so a plain centre crop can
   * push the matching landmark out of frame. Tuned per pair.
   */
  beforePosition?: string;
  afterPosition?: string;
}

/**
 * The two before/after pairs the site already treats as verified — they are the
 * same two pairs wired into src/components/BeforeAfter.tsx on the homepage.
 *
 * Pair 1 is the strong one: identical arched window and vaulted ceiling in both
 * frames, so the transformation reads instantly. Pair 2 is a genuine pair but
 * the "before" is a cluttered handheld shot.
 */
export const BEFORE_AFTER_PAIRS: BeforeAfterPair[] = [
  {
    id: "primary-bath",
    before: "/photos/before/IMG_1023.jpg",
    after: "/photos/after/bathroom-after-2.jpg",
    eyebrow: "Primary bath · taken to the studs",
    caption:
      "Same room, same arched window. Freestanding tub, marble-look porcelain, full glass shower — set by hand.",
    beforeAlt:
      "Primary bathroom stripped to the studs and subfloor before renovation",
    afterAlt:
      "Finished primary bathroom with freestanding tub, marble-look porcelain floor and glass shower",
    beforePosition: "center 62%",
    afterPosition: "center center",
  },
  {
    id: "full-remodel",
    before: "/photos/before/IMG_9563.jpeg",
    after: "/photos/after/IMG_0134.jpeg",
    eyebrow: "Full bathroom remodel",
    caption:
      "Dated oak double vanity and a drop-in tub, replaced end to end without moving a single wall.",
    beforeAlt:
      "Dated bathroom with oak double vanity, drop-in tub and bulb vanity lighting before renovation",
    afterAlt: "Completed bathroom remodel with new vanity, tile and fixtures",
    beforePosition: "center center",
    afterPosition: "center center",
  },
];

/* ------------------------------------------------------------------ */
/* UNVERIFIED — Geza must confirm before any of this goes public       */
/* ------------------------------------------------------------------ */

/**
 * UNVERIFIED — project location and duration.
 * The mockup captioned the hero "Warren, NJ · 6 weeks". Neither photo's town
 * nor timeline is recorded anywhere in this repo, so the captions above are
 * deliberately generic. Fill these in once Geza confirms the actual jobs.
 */
export const PROJECT_PROVENANCE_CONFIRMED = false;

/**
 * UNVERIFIED — price bands.
 * These numbers came from the mockup, not from Geza. They are the entire spine
 * of Option B, so they are rendered as-is for the demo, but they must be
 * replaced with his real ranges before this page takes a single click of spend.
 */
export const PRICE_TIERS = [
  {
    name: "Full gut, refined finishes",
    range: "$38–52k",
    body: "Down to the studs, new waterproofing, porcelain, custom vanity, honest craftsmanship throughout.",
  },
  {
    name: "Custom primary bath",
    range: "$55–85k",
    body: "Curbless walk-in, heated floor, natural stone, built-in niches, glass to the ceiling.",
  },
  {
    name: "Whole-floor / multi-bath",
    range: "$95k +",
    body: "Two or more baths, layout changes, plumbing relocated. Scheduled as one continuous build.",
  },
];

/** UNVERIFIED — the headline band quoted in Option A's hero. */
export const TYPICAL_RANGE = "$38k–$85k";

/** UNVERIFIED — the floor used by Option B's budget acknowledgement gate. */
export const BUDGET_FLOOR = "$35,000";

/**
 * UNVERIFIED — review count.
 * The site's TrustBar claims "5 ★ Google Rating" but no count. The mockup's
 * "47 reviews" is invented. Pull the real number off the GBP before shipping.
 */
export const REVIEW_COUNT: number | null = null;

/**
 * UNVERIFIED — testimonial quotes.
 * The mockup's quotes ("Karen D. · Warren", "Michael R. · Princeton") were
 * written by the designer, not by customers. src/components/Testimonials.tsx is
 * hidden from the homepage for exactly this reason. Rather than fabricate
 * social proof, the cards render this bracketed prompt so Geza can paste real
 * Google reviews straight in.
 */
export const REVIEWS: { quote: string; who: string }[] = [
  {
    quote:
      "[Paste a real Google review here — Geza to pick two from the Business Profile]",
    who: "[Reviewer first name + last initial · town]",
  },
  {
    quote: "[Paste a second real Google review here]",
    who: "[Reviewer first name + last initial · town]",
  },
];

/**
 * UNVERIFIED — credentials.
 * "NJ HIC #13VH0000000" in the mockup is a placeholder pattern, not a licence.
 * "Schluter-certified" was invented. Only the first three are backed by the
 * live site (TrustBar + Footer BBB seal).
 */
export const SEALS = [
  "20+ years", // verified — About.tsx
  "Licensed & insured", // verified — TrustBar.tsx
  "BBB accredited", // verified — Footer.tsx seal
  "NJ HIC #[Geza to supply]", // UNVERIFIED
];

/** UNVERIFIED — capacity and scarcity claims used by Option B. */
export const CAPACITY_CLAIM = "[N] bathrooms a year";
export const SCARCITY_CLAIM = "[N] build slots left this season";

/**
 * UNVERIFIED — consult slots.
 * The mockup hard-coded three dates. A static site has no calendar, so these
 * are day-part preferences instead of real appointments: nothing is actually
 * held, and the copy says so.
 */
export const SLOT_PREFERENCES = [
  { id: "weekday-morning", label: "Weekday morning", note: "before 11am" },
  { id: "weekend", label: "Saturday", note: "weekend" },
  { id: "weekday-evening", label: "Weekday evening", note: "after work" },
];

/* ------------------------------------------------------------------ */
/* Copy blocks carried from the mockup (voice, not claims)             */
/* ------------------------------------------------------------------ */

export const DIFFERENTIATORS = [
  {
    n: "01",
    t: "One project at a time",
    b: "Your bathroom isn't job number seven this month. It's the only one on my calendar.",
  },
  {
    n: "02",
    t: "No commission, no showroom",
    b: "A company adds for salespeople and overhead. That money goes into your stone and your waterproofing instead.",
  },
  {
    n: "03",
    t: "My phone, not a portal",
    b: "Text me at 7am about the niche placement. You get an answer, not a ticket number.",
  },
  {
    n: "04",
    t: "I sign the work",
    b: "20 years in Central New Jersey and every referral is a neighbor. That is the whole business plan.",
  },
];

export const DIFFERENTIATORS_SHORT = [
  {
    t: "The same hands, start to finish",
    b: "No rotating subs. Demo, waterproofing, tile, trim — me.",
  },
  {
    t: "Overhead you never pay for",
    b: "No showroom, no closers. That budget goes into materials you can touch.",
  },
  {
    t: "Deliberate capacity",
    b: "A limited number of bathrooms a year. It is why the last detail gets the same attention as the first.",
  },
];

export const SCOPE_OPTIONS = [
  "Full gut renovation",
  "Primary bath, taken to the studs",
  "Two or more bathrooms",
  "Not sure yet — I want your read",
];

export const BUDGET_OPTIONS = [
  { label: "$38k – $55k", note: "most common" },
  { label: "$55k – $85k", note: "full custom" },
  { label: "$85k +", note: "no limits" },
  { label: "Under $38k", note: "I'll be honest with you" },
];

export const TIMING_OPTIONS = ["ASAP", "3–6 months", "Just planning"];

/* ------------------------------------------------------------------ */
/* Web3Forms                                                           */
/* ------------------------------------------------------------------ */

/**
 * Same public access key as src/components/Contact.tsx — submissions land in
 * the same inbox. The `subject` line is what distinguishes a landing-page lead
 * from a homepage one, so Geza can tell which page produced it.
 */
export const WEB3FORMS_ACCESS_KEY = "86b676a7-df89-4186-89d6-55e58261288d";
export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

/** Shared submit path — mirrors the handler in src/components/Contact.tsx. */
export async function submitLead(payload: Record<string, string>) {
  const body = new FormData();
  body.append("access_key", WEB3FORMS_ACCESS_KEY);
  body.append("from_name", "Modern Master Landing Page");
  Object.entries(payload).forEach(([k, v]) => body.append(k, v));

  const response = await fetch(WEB3FORMS_ENDPOINT, { method: "POST", body });
  const data = await response.json();
  if (!data.success) throw new Error(data.message ?? "Submission failed");
}
