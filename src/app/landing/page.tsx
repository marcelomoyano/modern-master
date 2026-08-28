import Link from "next/link";
import {
  CAPACITY_AS_OF,
  REVIEWS,
  REVIEW_COUNT,
  TOWNS,
} from "@/components/landing/copy";

/**
 * Internal status page for the lead-page work. Not a landing page itself —
 * it exists so that whoever opens /landing next can see what is real, what is
 * still missing, and what must not happen yet.
 *
 * It replaced a four-way index (packages / estimate / option A / option B).
 * All four of those pages were built around a published price, which Geza
 * ruled out on 27 August 2026.
 */

const DONE = [
  `Prices removed from the page entirely. The only dollar figures left are the budget bands inside the form, which ask what the homeowner has set aside — not what Geza charges.`,
  `Four pages collapsed to one. /landing/packages, /landing/estimate and the A/B split are deleted, along with their components.`,
  `${REVIEWS.length} real Google reviews, quoted verbatim, each matched to a real town from the deep-links Geza sent.`,
  `Real rating and count on the page: 5.0 across ${REVIEW_COUNT} reviews, read off the Business Profile with manager access.`,
  `Service area set to the ${TOWNS.length} towns Geza named on 28 August: the original site listing minus Somerset and Morristown, plus the wealthy towns around him (Far Hills, Montgomery, Basking Ridge). All inside his own one-hour rule.`,
  `Budget bands rewritten to Geza's own numbers, with his note on what each one covers and his "accurate price calculation after a home consultation" line under them.`,
  `Real capacity: two bathrooms a month, 2-4 openings left this year, date-stamped ${CAPACITY_AS_OF} so a stale claim is visibly stale.`,
  `Differentiators rewritten around outcomes, and away from implying Geza works alone — nine of his reviews describe a crew.`,
];

const BLOCKING = [
  {
    item: "No analytics in production",
    detail:
      "NEXT_PUBLIC_GA_ID is wired but unset, and there is no Meta pixel. Nothing fires on form submit. Running Facebook ads against this page would spend Geza's money with no way to tell a working campaign from a wasted one. This is the first thing to fix.",
  },
  {
    item: "Geza has not seen the page",
    detail:
      "The content is real but the page itself is unapproved. He asked for outcomes and no pricing; this is that, and he should read it before anyone points traffic at it.",
  },
];

const ASK_GEZA = [
  {
    item: "The $7,500–$15,000 band has no label",
    detail:
      "He gave a scope for every other band — half bath at $5,500–$7,500, full bath at $15,000–$26,000, large primary at $26,000–$40,000 — and skipped straight over this one. The band has to exist so a homeowner with $10,000 has somewhere to click, but what it buys is his sentence to write, not ours.",
  },
  {
    item: "Is the townships screenshot complete?",
    detail:
      "The one he sent is cut off mid-entry after Warren Township. Far Hills, Montgomery and Basking Ridge are in from it. If there were more towns below the fold, they are not on the page.",
  },
  {
    item: "Bathrooms or bedrooms?",
    detail:
      '"20-24 bedrooms in a year can be handled." Almost certainly bathrooms — two a month for twelve months is 24 — but a capacity claim does not get inferred. The page uses only "two bathrooms a month", which he stated plainly.',
  },
  {
    item: "Sanjay Khulbe's review",
    detail:
      "He asked for it on the site. It thanks \"Geza and Bobby\" twice, and he has since said not to present Bobby as a partner. A review is quoted verbatim or not at all, so it is off the page pending his call.",
  },
  {
    item: "A name for the Concordia testimonial",
    detail:
      "The written one he forwarded is the best piece of proof we have — self-designed bathroom, repeat client, Monroe Township, where he is working next. It cannot go up unattributed.",
  },
  {
    item: "Bob Bilotta as a reference",
    detail:
      'His review ends "if anybody would like to speak to me about their service, I would be happy to give you a verbal review." That is worth more than a pull-quote. Ask before taking him up on it.',
  },
  {
    item: "Photo provenance",
    detail:
      "Neither before/after pair has a recorded town or duration, so both captions stay generic. Asked twice now.",
  },
];

const ELSEWHERE = [
  "ServiceAreas.tsx and the areaServed schema in layout.tsx still list Morristown and Somerset, and neither carries the new towns. Geza's 28 August instruction applies to these too — but they are live public pages, so making the edit is a decision, not a chore.",
  "src/app/morristown/ is a full location page, /morristown is in sitemap.ts, and ServiceAreas.tsx links to it. Deleting a live indexed page is not reversible for free. With no analytics installed we cannot see what it currently earns, which is one more reason the GA4 tag comes first.",
  "Testimonials.tsx still carries three testimonials of unknown origin (Sarah & Mark T., Emily R., James P.), placed in Somerset and Bridgewater. Hidden from the homepage, but still in the repo.",
  "Both social icons in Footer.tsx are href=\"#\" — dead links on the live site. Fix once we have the real Facebook page URL, and add it to sameAs in the JSON-LD.",
];

function Section({
  title,
  tone,
  children,
}: {
  title: string;
  tone?: "warn";
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2
        className={`font-display text-[22px] ${
          tone === "warn" ? "text-[#7A2E2E]" : "text-landing-ink"
        }`}
      >
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function LandingIndexPage() {
  return (
    <main className="min-h-screen bg-[#E7E2D9] px-6 py-14 font-grotesk text-landing-ink sm:px-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-[34px] tracking-[-0.01em]">
          Bathroom lead page — status
        </h1>
        <p className="mt-3 max-w-xl text-[14px] leading-[1.6] text-landing-body">
          One page, built around outcomes and Geza&apos;s own customers rather
          than a published price. Everything on it is sourced; see{" "}
          <span className="font-mono text-[13px]">docs/google-reviews.md</span>{" "}
          for where each fact came from.
        </p>

        <Link
          href="/landing/bathroom"
          className="mt-7 inline-flex min-h-[48px] items-center rounded-[10px] bg-landing-ink px-5 font-grotesk text-[15px] font-bold text-landing-cream transition-colors hover:bg-landing-bronze"
        >
          Open the page →
        </Link>

        <Section title="Blocking — do not run traffic yet" tone="warn">
          <div className="flex flex-col gap-4">
            {BLOCKING.map((b) => (
              <div
                key={b.item}
                className="rounded-[10px] border border-[#7A2E2E]/30 bg-[#7A2E2E]/[0.06] p-4"
              >
                <div className="text-[14px] font-bold">{b.item}</div>
                <div className="mt-1 text-[13.5px] leading-[1.55] text-landing-body">
                  {b.detail}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Still to ask Geza">
          <div className="flex flex-col gap-4">
            {ASK_GEZA.map((a) => (
              <div key={a.item}>
                <div className="text-[14px] font-bold">{a.item}</div>
                <div className="mt-1 text-[13.5px] leading-[1.55] text-landing-body">
                  {a.detail}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Done in this pass">
          <ul className="flex flex-col gap-[10px]">
            {DONE.map((d) => (
              <li
                key={d}
                className="flex gap-3 text-[13.5px] leading-[1.55] text-landing-body"
              >
                <span className="text-landing-bronze">✓</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Knock-on effects elsewhere in the site">
          <ul className="flex flex-col gap-[10px]">
            {ELSEWHERE.map((e) => (
              <li
                key={e}
                className="flex gap-3 text-[13.5px] leading-[1.55] text-landing-body"
              >
                <span className="text-landing-muted">·</span>
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </Section>

        <p className="mt-14 border-t border-landing-ink/15 pt-5 text-[12.5px] leading-[1.6] text-landing-muted">
          /landing is noindex and disallowed in robots.txt. Money still lives in{" "}
          <span className="font-mono">pricing.ts</span> for the quote page that
          comes later — it must not be imported into anything this page renders.
        </p>
      </div>
    </main>
  );
}
