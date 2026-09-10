/**
 * Shared content for the /landing lead page.
 *
 * Two rules govern this file.
 *
 * 1. NO PRICES ON THE PAGE. Geza ruled on 27 August 2026 that what a project
 *    costs is settled in conversation, not published — a number on the page
 *    anchors the negotiation before he is in the room. The only dollar figures
 *    that survive here are BUDGET_OPTIONS, which ask the *homeowner* what they
 *    have set aside. A price he publishes anchors him; a budget they volunteer
 *    arms him. Those are different things and only the first was rejected.
 *    Money still lives in pricing.ts for a future quote page. It must not be
 *    imported into anything the lead page renders.
 *
 * 2. NOTHING IS INVENTED. Every claim below traces to a business record: the
 *    Google Business Profile, the van wrap, or something Geza wrote down.
 *    Where a fact is still missing it stays bracketed and visible rather than
 *    filled in. See docs/google-reviews.md for the sources.
 */

import { usd } from "./pricing";

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export const PHONE_HREF = "tel:+17326949197";
export const PHONE_DISPLAY = "(732) 694-9197";
export const SMS_HREF = "sms:+17326949197";
export const EMAIL = "geza@modern-master.com";
export const EMAIL_HREF = `mailto:${EMAIL}`;

/* ------------------------------------------------------------------ */
/* Service area                                                        */
/* ------------------------------------------------------------------ */

/**
 * The service area, per Geza on 28 August 2026: "the original listing without
 * Somerset and Morristown.. plus we should list the wealthy towns sounding me."
 * Restated 2 September 2026: "all the city's we have from originally just
 * taking down 2 towns and adding the screenshot ones to the rest."
 *
 * As of 2 September 2026 this is also the site-wide list. ServiceAreas.tsx and
 * the areaServed JSON-LD in layout.tsx were brought into line with it and the
 * /morristown page was retired. Change them together or they drift apart.
 *
 * So this list is three things joined:
 *   1. The old site-wide list (ServiceAreas.tsx) minus the two he cut. Warren,
 *      Flemington, Bridgewater and Bernardsville were parked pending his
 *      townships screenshot; that instruction rules them back in.
 *   2. The towns from the screenshot he sent — Far Hills, Montgomery, Basking
 *      Ridge. All are 15-30 minutes from Hillsborough, inside his own hour.
 *      The screenshot looked cut off mid-entry after Warren, so we asked.
 *      Confirmed 10 September 2026: those are all the towns it held. The
 *      list is complete; nothing is waiting below a fold.
 *   3. The towns his own reviews and last-ten list put him in. Those are the
 *      evidenced ones and they stay regardless of any wish list.
 *
 * A town on this list is a place he will drive to. It is not a claim that he
 * has worked there — only the ones marked "review" or "last-ten" are that.
 */
export const TOWNS = [
  "Hillsborough", // base; two reviews
  "Montgomery", // screenshot; borders Hillsborough
  "Branchburg", // review (Cita Ken)
  "Bridgewater", // original listing
  "Flemington", // original listing
  "Far Hills", // screenshot
  "Bernardsville", // original listing
  "Basking Ridge", // screenshot (Bernards Township)
  "Warren", // original listing; screenshot
  "Princeton", // review (Minesh Vallabh); last-ten list
  "Franklin Park", // review (Mark Berk); working there now
  "Monmouth Junction", // review (Sanjay Khulbe); last-ten list
  "Monroe Township", // review (Bob Bilotta); last-ten list; next job
];

/** Where he is actually working, as told to us on the date below. */
export const CURRENT_JOB_TOWN = "Franklin Park";
export const NEXT_JOB_TOWN = "Monroe";

/* ------------------------------------------------------------------ */
/* Google Business Profile                                             */
/* ------------------------------------------------------------------ */

/** Deep link to Modern Master's Google Business Profile review flow. */
export const GOOGLE_REVIEW_URL = "https://g.page/r/CfrEDv64xZ_FEAI/review";

/** Read off the profile on 27 August 2026 with manager access. */
export const GOOGLE_RATING = "5.0";
export const REVIEW_COUNT = 32;

/**
 * Real Google reviews, quoted from the profile, each matched to a town by the
 * deep-links Geza sent. Excerpted for length but never reworded.
 *
 * Sanjay Khulbe's was held back because it thanks "Geza and Bobby" twice and
 * Geza had said not to present Bobby as a partner. He ruled on 2 September
 * 2026: "You can use Sanjay's review.., You can also keep Bobby's name on the
 * reviews.., but please don't list additionally as a business partner." So the
 * line is ours to hold, not the reviewer's: a customer may thank Bobby, our own
 * copy still must not call him one. The excerpt below is cut for length at the
 * same place every other review here is cut.
 *
 * Bob Bilotta offered in his review to give a verbal reference by phone. Geza
 * cleared that on 2 September 2026 — "Bob is a nice person.., we did a lot of
 * jobs from him in the past years.. bathroom remodeling, molding / wood work,
 * complete house renovation" — so he can be offered to a hesitant lead. That
 * is a sales tool, not page content; his number goes nowhere near this file.
 *
 * Also excluded: Marcelo's own review. The agency cannot be its own proof.
 */
export const REVIEWS: { quote: string; who: string }[] = [
  {
    quote:
      "Geza Papp did an excellent job of giving our primary bathroom a beautiful spa-like feel with expertly installed tiles and glass door in the shower. His workmanship and attention to detail are top notch and we will definitely use him again for future projects.",
    who: "Sally Williams · Hillsborough",
  },
  {
    quote:
      "They kept everything clean, showed up on time, and communicated clearly every step of the way. I would definitely recommend them to anyone looking for honest, high-quality work.",
    who: "Cita Ken · Branchburg",
  },
  {
    quote:
      "From start to finish, the team was professional, responsive, and detail-oriented. They took the time to understand my requirements, explained options clearly, and delivered exactly what they promised. The quality of workmanship is outstanding — from plumbing and tiling to fixtures and finishing touches, everything was done with precision and care.",
    who: "Sanjay Khulbe · Monmouth Junction",
  },
  {
    quote:
      "Quality and coordination excellent. Used them for 3 projects. Trust them for all of our renovations. There is not much he hasn't upgraded in our townhouse.",
    who: "Mark Berk · Franklin Park",
  },
  {
    quote:
      "They were always professional and helped to plan everything with meticulous attention to detail. I really appreciated the timeous nature of the entire project. I would definitely hire them again.",
    who: "Minesh Vallabh · Princeton",
  },
  {
    quote:
      "Prompt, clean and provided quality and impeccable service. I would recommend them for any home construction project, no matter how big or small.",
    who: "Bob Bilotta · Monroe Township",
  },
];

/**
 * The long one, used on its own. Venkatraman describes the daily routine in
 * more detail than any marketing copy could, which is exactly why it carries
 * the "your house stays livable" claim instead of us asserting it.
 */
export const ANCHOR_REVIEW = {
  quote:
    "He and his team mate coming to our place without fail every day at 8 am and laying out all the covers for the job on the stairs etc and doing a clean job every day, making incredible progress. And at the end of each day, they would clean up, vacuum all the dust and leave the place clean. They kept to the timeline as well.",
  who: "Venkatraman B. · repeat client since 2021",
};

/**
 * Not a Google review — Geza forwarded this one by text with permission to
 * use it. It sat unattributed for a week because we had no name. He supplied it
 * on 2 September 2026: Robin Mandel, in Concordia, a 55+ community in Monroe
 * Township. "That's a fresh comment.. we just finished her 2 bathrooms."
 *
 * Excerpted hard. The full text runs seven paragraphs and finishes with her
 * chihuahua, which is charming and does not sell a bathroom.
 */
export const WRITTEN_TESTIMONIAL = {
  quote:
    "Last year, I designed our master bathroom myself, and Geza brought my vision to life with incredible craftsmanship and attention to detail. We were so impressed that we had him return this year to complete the labor for my other personally designed bathrooms.",
  who: "Robin Mandel · Monroe Township",
};

/* ------------------------------------------------------------------ */
/* Capacity                                                            */
/* ------------------------------------------------------------------ */

/**
 * Geza, 27 August 2026: "We can handle 2 regular sized bathrooms in a month..
 * Large luxury bathroom would take a month for two of us.. This year we have
 * still 2-4 openings.. otherwise we booked for this year."
 *
 * A scarcity claim rots. CAPACITY_AS_OF is rendered on the page so a stale
 * number is visibly stale rather than quietly false — and so whoever reads
 * this next knows when to go ask again.
 *
 * His "20-24 bedrooms in a year" line was held here as an unconfirmed typo
 * rather than assumed. Confirmed 2 September 2026: "My spelling was incorrect..
 * my mistake.. 20-24 bathrooms what I was trying to mention." Which is what two
 * a month for a year comes to, so the two claims agree.
 *
 * AVAILABILITY_CLAIM is the line with a real expiry date on it. He gave those
 * dates on 2 September 2026 and by January they are false. Whoever is reading
 * this in November: go ask him again, or take the line off the page.
 */
export const CAPACITY_AS_OF = "September 2026";
export const CAPACITY_CLAIM = "Two bathrooms a month";
export const OPENINGS_CLAIM = "2 to 4 openings left this year";
export const AVAILABILITY_CLAIM =
  "the next starts are mid-November, late November and December";

/* ------------------------------------------------------------------ */
/* Credentials                                                         */
/* ------------------------------------------------------------------ */

/**
 * The licence number was read off the van wrap (photographed 17 August 2026):
 * "NJ LIC. #13VH08744800". Fixed at four — don't add a fifth without asking.
 */
export const SEALS = [
  "20+ years", // About.tsx
  "Licensed & insured", // TrustBar.tsx
  "BBB accredited", // Footer.tsx seal + van wrap badge
  "NJ HIC #13VH08744800", // van wrap
];

/* ------------------------------------------------------------------ */
/* Before / after                                                      */
/* ------------------------------------------------------------------ */

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
 * Provenance confirmed by Geza on 2 September 2026, third time of asking:
 * "The gray tiles with the freestanding tub located is in Monmouth junction.
 * This big project was completed in four weeks! The second pictures is also in
 * the same town, this was also taken about a month."
 *
 * Pair 1 is the only pair with a freestanding tub, so that match is
 * unambiguous. Pair 2 rides on his "same town" sentence. Both durations are
 * his, quoted, not rounded.
 *
 * The four weeks is the most useful sentence anyone has given us for this page.
 * A homeowner who has been remodelled before is braced for three months.
 */
export const PROJECT_PROVENANCE_CONFIRMED = true;

/**
 * The two pairs the site already treats as verified — the same two wired into
 * src/components/BeforeAfter.tsx on the homepage.
 *
 * Pair 1 is the strong one: identical arched window and vaulted ceiling in
 * both frames, so the transformation reads instantly. Pair 2 is a genuine pair
 * but the "before" is a cluttered handheld shot.
 */
export const BEFORE_AFTER_PAIRS: BeforeAfterPair[] = [
  {
    id: "primary-bath",
    before: "/photos/before/IMG_1023.jpg",
    after: "/photos/after/bathroom-after-2.jpg",
    eyebrow: "Primary bath · Monmouth Junction · four weeks",
    caption:
      "Same room, same arched window. Freestanding tub, marble-look porcelain, full glass shower — set by hand, start to finish in four weeks.",
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
    eyebrow: "Full bathroom remodel · Monmouth Junction · about a month",
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
/* Voice                                                               */
/* ------------------------------------------------------------------ */

/**
 * Reframed 27 August 2026 around outcomes rather than price, and away from the
 * lone-operator framing. Nine of his Google reviews describe a crew arriving
 * together; owner-operator is true and is the pitch, "works alone" is not.
 * Bobby is not named here — Geza's instruction, since Bobby holds no share of
 * the business.
 */
export const DIFFERENTIATORS = [
  {
    n: "01",
    t: "Your house, not a job site",
    b: "Covers down on the stairs before the first tool comes out. Dust vacuumed before we leave. It is the thing customers mention first, and it is the reason they let us back in.",
  },
  {
    n: "02",
    t: "Two bathrooms a month, on purpose",
    b: "Yours is not waiting behind six other jobs. That is why the finish date I give you is a date I can actually keep.",
  },
  {
    n: "03",
    t: "You deal with me",
    b: "Text me at 7am about where the niche goes. You get an answer from the person setting the tile, not a ticket number.",
  },
  {
    n: "04",
    t: "Twenty years of neighbours",
    b: "Every job is within an hour of my own house in Hillsborough. Referrals are the whole business plan — you cannot outrun a bad one locally.",
  },
];

export const DIFFERENTIATORS_SHORT = [
  {
    t: "The same hands, start to finish",
    b: "No rotating subs. Demo, waterproofing, tile, trim.",
  },
  {
    t: "Clean at the end of every day",
    b: "Covers on the stairs, dust vacuumed, tools out of your way.",
  },
  {
    t: "Deliberate capacity",
    b: "Two bathrooms a month. It is why the last detail gets the same attention as the first.",
  },
];

/* ------------------------------------------------------------------ */
/* Fit check                                                           */
/* ------------------------------------------------------------------ */

export const SCOPE_OPTIONS = [
  "Half bathroom",
  "Full bathroom — tub or shower",
  "Primary bathroom — shower and tub",
  "Two or more bathrooms",
  "Not sure yet — I want your read",
];

/**
 * What the homeowner has set aside. Geza rewrote these himself on 28 August
 * 2026 and attached, in his own words, what each band actually buys.
 *
 * That is a reversal of a kind, and a deliberate one: he ruled out publishing
 * prices on the page, then chose to put a rough map of them inside the form.
 * The difference is who is being anchored. A price in the hero anchors him
 * before he is in the room; a band the reader self-selects against tells a
 * $6,000 homeowner in one second that they are shopping for a half bath, and
 * saves them both a phone call. CONSULT_NOTE, also his line, is the hedge.
 *
 * Index 0 is the below-floor answer and the page keys its honest-exit copy off
 * it — keep it first. Index 5 is the escape hatch; it is a weaker lead but a
 * truer one than a guessed number.
 *
 * GAP — CLOSED 2 September 2026. He gave no scope for $7,500-$15,000 first
 * time round, so the band shipped unlabelled rather than guessed at. His
 * answer: "I think 7,500-15,000 that's not working because I won't be able to
 * serve them.. Base full size bathroom price is 12,500 so we won't be able to
 * do anything under.. just the half bathroom.. no tub or shower.. just toilet
 * and sink.. Or we can have an option as (partial bath renovation maybe...)"
 * And on a $10,000 job: "would be partially finished only.. not a complete
 * renovation."
 *
 * So the band keeps its boundaries and takes his own phrase as its note. His
 * $12,500 floor for a full bathroom stays in this comment and out of the UI:
 * rule 1 above says his prices are not published, and the band already does the
 * work without it. It tells a homeowner what their money buys. It does not tell
 * them what he charges.
 */
export const BUDGET_FLOOR_BAND = usd(5500);

/** Geza's line, kept close to verbatim. It is what makes the bands safe. */
export const CONSULT_NOTE =
  "Accurate price calculation after a home consultation.";

export const BUDGET_OPTIONS = [
  { label: `Under ${usd(5500)}`, note: "" },
  {
    label: `${usd(5500)} – ${usd(7500)}`,
    note: "A half bath — toilet and sink, no tub or shower",
  },
  {
    label: `${usd(7500)} – ${usd(15000)}`,
    note: "A partial renovation, not a complete bathroom",
  },
  {
    label: `${usd(15000)} – ${usd(26000)}`,
    note: "Full bath, shower or tub installed",
  },
  {
    label: `${usd(26000)} – ${usd(40000)}`,
    note: "Large primary bath, shower and tub",
  },
  { label: "Still working that out", note: "" },
];

export const TIMING_OPTIONS = ["ASAP", "3–6 months", "Just planning"];

/**
 * UNVERIFIED — consult slots.
 * A static site has no calendar, so these are day-part preferences rather than
 * real appointments: nothing is held, and the copy says so.
 */
export const SLOT_PREFERENCES = [
  { id: "weekday-morning", label: "Weekday morning", note: "before 11am" },
  { id: "weekend", label: "Saturday", note: "weekend" },
  { id: "weekday-evening", label: "Weekday evening", note: "after work" },
];

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
