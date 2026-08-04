import Link from "next/link";
import { ADD_ONS, ESTIMATE_ROOMS, PACKAGE_ROOMS, usd } from "@/components/landing/pricing";

const PRICING_OPTIONS = [
  {
    href: "/landing/packages",
    tag: "P",
    title: "Packages · fixed price, three levels",
    blurb:
      "Geza's package sheet, made into the whole page. Tap a bathroom, see three prices. No form before a number, no “call for pricing”, and the designer-led tier is the hook — he brings the designer and pays them.",
    bets: [
      "Publishing every price filters harder than any qualifying form",
      "Three named levels beats one wide range",
      "“I pay for the designer” is the strongest line in his email",
    ],
  },
  {
    href: "/landing/estimate",
    tag: "E",
    title: "Estimate · starting budget + add-ons",
    blurb:
      "The budgets he actually builds at, plus the four add-ons homeowners usually pick, wired to a running total. The homeowner assembles their own number, and the lead arrives carrying that spec instead of just a name.",
    bets: [
      "A number you built yourself is one you believe",
      "Ticking add-ons self-qualifies without feeling like qualifying",
      "A lead with a spec is worth several without one",
    ],
  },
];

const STRUCTURE_OPTIONS = [
  {
    href: "/landing/a",
    tag: "A",
    title: "Owner-first · 4-question fit check",
    blurb:
      "Geza's face and voice carry the page. The lead capture is a qualifier disguised as a conversation, so unfit leads self-exit before he spends a Saturday on them.",
  },
  {
    href: "/landing/b",
    tag: "B",
    title: "Work-first · price tiers, booked walkthrough",
    blurb:
      "The headline sits on a draggable before/after. Price tiers sit high as the filter, and the ask is a booked walkthrough rather than a form.",
  },
];

/**
 * The two sheets Geza sent on 3 August 2026, side by side. They differ for the
 * same room, which is the one thing that has to be resolved before either page
 * takes paid traffic — so it is shown rather than buried.
 */
const SHEET_ROWS = PACKAGE_ROOMS.map((p, i) => ({
  room: p.short,
  pkg: p.tiers[0].price,
  budget: ESTIMATE_ROOMS[i].base,
}));

const ADD_ON_SUM = ADD_ONS.reduce((s, a) => s + a.price, 0);

const SIGN_OFF = [
  {
    item: "Which page goes to which traffic",
    detail:
      "Packages and Estimate quote the same rooms at different numbers. They read as one offer at two prices unless they are pointed at different audiences and never linked to each other. Decide the split before either runs.",
  },
  {
    item: "What the fixed package includes that the starting budget does not",
    detail:
      "The reconciliation above is inferred from the add-on list, not stated. Geza needs to write down, in one sentence, what a base package covers — otherwise the higher price has no story behind it.",
  },
  {
    item: "Materials allowance",
    detail:
      "Every number excludes finish materials. Both pages say so loudly and give no figure. A homeowner still hears “$12,500 is what my bathroom costs” — a typical allowance range would fix that.",
  },
  {
    item: "Multi-bath deal",
    detail:
      "“We need to discuss what type of deal we can provide.” No percentage is published; both pages surface it as a conversation and the form flags the lead.",
  },
  {
    item: "Review quotes",
    detail:
      "The mockup's two testimonials were written by the designer. All four pages render a bracketed prompt — paste two real Google reviews in.",
  },
  {
    item: "Review count",
    detail:
      "“47 reviews” was invented. The badge shows “5.0 on Google” with no count until the real number is confirmed.",
  },
  {
    item: "NJ HIC licence number",
    detail:
      "The mockup shipped 13VH0000000, a placeholder pattern. Currently renders “NJ HIC #[Geza to supply]”.",
  },
  {
    item: "Capacity and scarcity",
    detail:
      "“Nine bathrooms a year” and “2 build slots left” are unverified. Both render as [N] on option B until confirmed.",
  },
  {
    item: "Project provenance",
    detail:
      "The hero was captioned “Warren, NJ · 6 weeks”. Neither photo's town nor timeline is recorded anywhere, so captions are generic for now.",
  },
  {
    item: "Owner portrait",
    detail:
      "Using the only headshot in the repo — a 400×400 crop in front of a Christmas tree. Every one of these pages leans on it.",
  },
];

const FIXED = [
  "All pricing replaced with Geza's real figures — the mockup's $38–52k / $55–85k / $95k+ bands are deleted",
  "“Finish materials are not included” promoted from fine print to a bordered callout on all four pages",
  "Phone corrected from the mockup's 908-555-0100 to the real (732) 694-9197",
  "Every number lives in one file (pricing.ts), so a price can only be wrong in one place",
  "All four forms post to the same Web3Forms inbox as the homepage, with a honeypot and a distinct subject line",
  "/landing is noindex and disallowed in robots.txt",
];

export default function LandingIndexPage() {
  return (
    <main className="min-h-screen bg-[#E7E2D9] px-6 py-14 font-grotesk text-landing-ink sm:px-10">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-wrap items-baseline gap-4">
          <h1 className="font-display text-[34px] tracking-[-0.01em]">
            Modern Master — bathroom lead pages
          </h1>
          <div className="text-[13px] uppercase tracking-[0.08em] text-landing-muted">
            Four directions · internal preview
          </div>
        </div>

        <p className="mt-4 max-w-xl text-sm leading-[1.6] text-landing-muted">
          All four are built mobile-first at a 430px column — open them on a
          phone, or narrow the window. Every before/after is draggable.
        </p>

        <h2 className="mt-12 font-display text-[26px]">
          Built on Geza&apos;s pricing
        </h2>
        <p className="mt-2 max-w-xl text-[13.5px] leading-[1.6] text-landing-muted">
          One page per sheet he sent. Neither invents a number.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {PRICING_OPTIONS.map((o) => (
            <Link
              key={o.href}
              href={o.href}
              className="group flex flex-col rounded-2xl border border-landing-ink/[0.14] bg-landing-paper p-6 transition-colors hover:border-landing-bronze"
            >
              <div className="flex items-center gap-[10px]">
                <span className="rounded bg-landing-bronze px-[10px] py-[5px] text-xs font-bold tracking-[0.1em] text-landing-cream">
                  {o.tag}
                </span>
                <span className="text-[15px] font-semibold">{o.title}</span>
              </div>
              <p className="mt-3 text-[13.5px] leading-[1.55] text-landing-muted">
                {o.blurb}
              </p>
              <div className="mt-4 text-[11px] uppercase tracking-[0.14em] text-landing-muted">
                What it bets on
              </div>
              <ul className="mt-2 flex flex-col gap-[6px]">
                {o.bets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-2 text-[13px] leading-[1.5] text-landing-body"
                  >
                    <span className="text-landing-bronze">·</span>
                    {b}
                  </li>
                ))}
              </ul>
              <span className="mt-5 text-sm font-bold text-landing-bronze group-hover:underline">
                Open →
              </span>
            </Link>
          ))}
        </div>

        {/* The conflict, stated plainly */}
        <section className="mt-12 rounded-2xl border border-[#7A2E2E]/30 bg-[#7A2E2E]/[0.05] p-6">
          <h2 className="font-display text-[24px] text-[#7A2E2E]">
            The two sheets disagree — here is how they reconcile
          </h2>
          <p className="mt-2 text-[13.5px] leading-[1.6] text-landing-body">
            Geza sent fixed package prices and, separately, the budgets he works
            at today. For the same room they are 23–30% apart.
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[380px] border-collapse text-left text-[13.5px]">
              <thead>
                <tr className="border-b border-landing-ink/15 text-[11px] uppercase tracking-[0.1em] text-landing-muted">
                  <th className="py-2 pr-4 font-semibold">Room</th>
                  <th className="py-2 pr-4 font-semibold">Package (base)</th>
                  <th className="py-2 pr-4 font-semibold">Starting budget</th>
                  <th className="py-2 font-semibold">Gap</th>
                </tr>
              </thead>
              <tbody>
                {SHEET_ROWS.map((r) => (
                  <tr key={r.room} className="border-b border-landing-ink/10">
                    <td className="py-[10px] pr-4 font-semibold">{r.room}</td>
                    <td className="py-[10px] pr-4 tabular-nums">
                      {usd(r.pkg)}
                    </td>
                    <td className="py-[10px] pr-4 tabular-nums">
                      {usd(r.budget)}
                    </td>
                    <td className="py-[10px] tabular-nums text-landing-muted">
                      +{usd(r.pkg - r.budget)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-[13.5px] leading-[1.6] text-landing-body">
            His own add-on list closes the gap. The four extras homeowners
            usually pick come to {usd(ADD_ON_SUM)}, so a full bathroom at{" "}
            {usd(ESTIMATE_ROOMS[1].base)} plus the usual extras is{" "}
            {usd(ESTIMATE_ROOMS[1].base + ADD_ON_SUM)} — effectively the{" "}
            {usd(PACKAGE_ROOMS[1].tiers[0].price)} package. They are not two
            prices for one thing; they are a fixed price and a starting point
            that lands in the same place.
          </p>
          <p className="mt-3 text-[13.5px] leading-[1.6] text-landing-body">
            That story only holds if a visitor never sees both pages in one
            sitting. Neither links to the other, and they should be pointed at
            different traffic.
          </p>
        </section>

        <h2 className="mt-14 font-display text-[26px]">Earlier directions</h2>
        <p className="mt-2 max-w-xl text-[13.5px] leading-[1.6] text-landing-muted">
          The two structural experiments from the first round. Their pricing has
          been swapped over to the real package sheet, so nothing invented is
          left standing.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {STRUCTURE_OPTIONS.map((o) => (
            <Link
              key={o.href}
              href={o.href}
              className="group flex flex-col rounded-2xl border border-landing-ink/[0.14] bg-landing-paper p-6 transition-colors hover:border-landing-bronze"
            >
              <div className="flex items-center gap-[10px]">
                <span className="rounded bg-landing-ink px-[10px] py-[5px] text-xs font-bold tracking-[0.1em] text-landing-cream">
                  {o.tag}
                </span>
                <span className="text-[15px] font-semibold">{o.title}</span>
              </div>
              <p className="mt-3 text-[13.5px] leading-[1.55] text-landing-muted">
                {o.blurb}
              </p>
              <span className="mt-5 text-sm font-bold text-landing-bronze group-hover:underline">
                Open option {o.tag} →
              </span>
            </Link>
          ))}
        </div>

        <section className="mt-14">
          <h2 className="font-display text-[26px]">
            Before this takes any spend
          </h2>
          <p className="mt-2 max-w-xl text-[13.5px] leading-[1.6] text-landing-muted">
            The money is settled. These are what is left — nothing unconfirmed
            renders as if it were fact.
          </p>
          <ol className="mt-6 flex flex-col gap-4">
            {SIGN_OFF.map((s, i) => (
              <li key={s.item} className="flex gap-4">
                <span className="w-5 shrink-0 pt-[2px] font-display text-base text-landing-bronze">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="text-[14px] font-bold">{s.item}</div>
                  <div className="mt-1 text-[13.5px] leading-[1.55] text-landing-body">
                    {s.detail}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12 rounded-2xl border border-landing-ink/[0.14] bg-landing-paper p-6">
          <h2 className="text-[11px] uppercase tracking-[0.14em] text-landing-muted">
            Already corrected
          </h2>
          <ul className="mt-3 flex flex-col gap-2">
            {FIXED.map((f) => (
              <li
                key={f}
                className="flex gap-2 text-[13.5px] leading-[1.55] text-landing-body"
              >
                <span className="text-landing-bronze">✓</span>
                {f}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 text-[13px] text-landing-muted">
          <Link href="/" className="underline underline-offset-2">
            ← Back to the live site
          </Link>
        </div>
      </div>
    </main>
  );
}
