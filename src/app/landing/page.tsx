import Link from "next/link";

const OPTIONS = [
  {
    href: "/landing/a",
    tag: "A",
    title: "Owner-first · 4-question fit check",
    blurb:
      "Geza's face and voice carry the page. The lead capture is a qualifier disguised as a conversation — budget comes second, so unfit leads self-exit before he spends a Saturday on them.",
    bets: [
      "Trust is the bottleneck, not proof of work",
      "A staged form converts better than one long one",
      "Naming the price band up front filters more than it scares off",
    ],
  },
  {
    href: "/landing/b",
    tag: "B",
    title: "Work-first · price tiers, booked walkthrough",
    blurb:
      "Craftsmanship proves itself before a word is spoken — the headline sits on a draggable before/after. Price tiers sit high as the filter, and the ask is a booked walkthrough, not a form.",
    bets: [
      "The photo does more work than the copy",
      "Published tiers pre-qualify better than a form ever will",
      "A scheduled visit is a bigger commitment than a callback — and a better lead",
    ],
  },
];

/**
 * Both options share: the same two verified before/after sliders, the real
 * phone/email/towns, and the same Web3Forms inbox (distinguished by subject
 * line, so Geza can tell A leads from B leads).
 */
const SIGN_OFF = [
  {
    item: "Price bands",
    detail:
      "$38–52k / $55–85k / $95k+ and the “$38k–$85k” hero band came from the mockup, not from Geza. Option B is built on them.",
  },
  {
    item: "Review quotes",
    detail:
      "The mockup's two testimonials were written by the designer. Both cards currently render a bracketed prompt — paste two real Google reviews in.",
  },
  {
    item: "Review count",
    detail:
      "“47 reviews” was invented. The rating badge shows “5.0 on Google” with no count until the real number is confirmed.",
  },
  {
    item: "NJ HIC licence number",
    detail:
      "The mockup shipped 13VH0000000, a placeholder pattern. Currently renders “NJ HIC #[Geza to supply]”.",
  },
  {
    item: "Capacity and scarcity",
    detail:
      "“Nine bathrooms a year” and “2 build slots left for fall 2026” are unverified. Both render as [N] until confirmed.",
  },
  {
    item: "Project provenance",
    detail:
      "The hero was captioned “Warren, NJ · 6 weeks”. Neither photo's town nor timeline is recorded anywhere, so captions are generic for now.",
  },
  {
    item: "Booking slots",
    detail:
      "The mockup offered named calendar slots. Nothing can actually be held on a static site, so B asks for a day-part preference and promises a text back.",
  },
  {
    item: "Owner portrait",
    detail:
      "Using the only headshot in the repo — a 400×400 crop in front of a Christmas tree. An owner-first page deserves a real on-site portrait.",
  },
];

const FIXED = [
  "Phone corrected from the mockup's 908-555-0100 to the real (732) 694-9197",
  "Towns matched to the eight in ServiceAreas.tsx",
  "Both forms post to the same Web3Forms inbox as the homepage, with a honeypot",
  "/landing is noindex and disallowed in robots.txt",
];

export default function LandingIndexPage() {
  return (
    <main className="min-h-screen bg-[#E7E2D9] px-6 py-14 font-grotesk text-landing-ink sm:px-10">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-wrap items-baseline gap-4">
          <h1 className="font-display text-[34px] tracking-[-0.01em]">
            Modern Master — bathroom lead page
          </h1>
          <div className="text-[13px] uppercase tracking-[0.08em] text-landing-muted">
            Two directions · internal preview
          </div>
        </div>

        <p className="mt-4 max-w-xl text-sm leading-[1.6] text-landing-muted">
          Both are built mobile-first at a 430px column — open them on a phone,
          or narrow the window. Every before/after is draggable.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {OPTIONS.map((o) => (
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
                Open option {o.tag} →
              </span>
            </Link>
          ))}
        </div>

        <section className="mt-14">
          <h2 className="font-display text-[26px]">Before this takes any spend</h2>
          <p className="mt-2 max-w-xl text-[13.5px] leading-[1.6] text-landing-muted">
            The mockup carried numbers and quotes that no record in this repo
            backs up. Nothing invented was left standing as if it were fact —
            each of these renders flagged or bracketed until Geza confirms it.
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
