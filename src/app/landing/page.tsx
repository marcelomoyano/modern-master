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
  `Service area set to the ${TOWNS.length} towns Geza named: the original site listing minus Somerset and Morristown, plus the wealthy towns around him (Far Hills, Montgomery, Basking Ridge), plus the towns his own reviews put him in. All inside his one-hour rule.`,
  `The same ${TOWNS.length} towns applied site-wide — ServiceAreas.tsx and the areaServed schema in layout.tsx both now match, instead of listing two towns he refuses to drive to.`,
  `/morristown deleted and 301-redirected to the homepage. It was a full location page for a town outside his radius; every lead it produced was a lead he turned down. The redirect keeps whatever ranking the URL earned.`,
  `Budget bands rewritten to Geza's own numbers, each with his own note on what it covers, and his "accurate price calculation after a home consultation" line under them.`,
  `The $7,500–$15,000 band now carries his label — "a partial renovation, not a complete bathroom". It was the one band shipped blank rather than guessed at.`,
  `Real capacity: two bathrooms a month, 2-4 openings left, and his actual next start dates — date-stamped ${CAPACITY_AS_OF} so a stale claim is visibly stale.`,
  `Both before/after pairs now carry a real town and a real duration: Monmouth Junction, four weeks and about a month. "Four weeks" is the single most persuasive fact on the page.`,
  `Three invented testimonials in Testimonials.tsx replaced with three named, sourced ones. The component is not rendered anywhere, so it was never public — but it was one import away.`,
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
    item: "Robin Mandel's Google review",
    detail:
      "He calls it \"a fresh comment\" — posted after the profile was pulled on 27 August, so it is not in our records. The written testimonial she gave is on the site; if she also left a Google review, it should be quoted from the profile rather than paraphrased.",
  },
  {
    item: "Where the Facebook page lives",
    detail:
      "Still running under Sam's personal account. It needs moving into a Meta Business Portfolio in Geza's name — not replacing with a new page, which would throw away the followers and the page's age. Nothing else can start until this is settled.",
  },
];

/**
 * Answered on 2 September 2026, kept here because the answers are the sourcing
 * record for what is now on the page.
 */
const ANSWERED = [
  "The townships screenshot was complete (confirmed 10 September). It looked cut off after Warren, but Far Hills, Montgomery, Basking Ridge and Warren are every town it held, so the service area has no gaps.",
  "The $7,500–$15,000 band: \"that's not working because I won't be able to serve them.. Base full size bathroom price is 12,500.. Or we can have an option as (partial bath renovation maybe...)\" — his phrase is now the band's label. The $12,500 stays in the source and off the page.",
  "Bathrooms, not bedrooms: \"My spelling was incorrect.. 20-24 bathrooms what I was trying to mention.\" Which is what two a month for a year comes to, so the two claims agree.",
  "Sanjay Khulbe's review is cleared, and Bobby's name may stay in a customer's own words — but our copy still must not call him a partner. The review is now on the page.",
  "The Concordia testimonial is Robin Mandel, Monroe Township. \"We just finished her 2 bathrooms.\"",
  "Bob Bilotta can be offered as a live phone reference — multiple jobs over several years, bathrooms through to a complete house renovation.",
  "Photo provenance: both pairs are Monmouth Junction. The freestanding-tub project took four weeks, the second about a month.",
  "Availability: mid-November, late November and December. That line expires — someone has to re-ask him in the autumn or take it down.",
];

const ELSEWHERE = [
  "Testimonials.tsx now holds real, named quotes but is still not imported by any page. Worth putting back on the homepage — that is a design call, not a content one.",
  "Both social icons in Footer.tsx are href=\"#\" — dead links on the live site. Fix once we have the real Facebook page URL, and add it to sameAs in the JSON-LD.",
  "/princeton and /warren survive and are the right shape. The location-page set now matches the service area for the first time, which is the foundation any SEO work builds on.",
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

        <Section title="Answered by Geza — 2 September">
          <ul className="flex flex-col gap-[10px]">
            {ANSWERED.map((a) => (
              <li
                key={a}
                className="flex gap-3 text-[13.5px] leading-[1.55] text-landing-body"
              >
                <span className="text-landing-bronze">✓</span>
                <span>{a}</span>
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
