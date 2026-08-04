"use client";

import { useState } from "react";
import Image from "next/image";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { DraftRibbon } from "./DraftRibbon";
import {
  BEFORE_AFTER_PAIRS,
  BUDGET_FLOOR,
  CAPACITY_CLAIM,
  DIFFERENTIATORS_SHORT,
  PHONE_DISPLAY,
  PRICE_TIERS,
  REVIEWS,
  SCARCITY_CLAIM,
  SEALS,
  SLOT_PREFERENCES,
  SMS_HREF,
  TOWNS,
  submitLead,
} from "./copy";
import { MATERIALS_NOTE } from "./pricing";

/**
 * Option B — work-first.
 *
 * Craftsmanship proves itself in the hero before a word is spoken: the H1 sits
 * on top of a draggable before/after. Price tiers sit high on the page as the
 * filter, and the CTA is a booked walkthrough rather than a generic form.
 *
 * Note the mockup booked named calendar slots ("Thu, Jul 30 · 8:30am"). This is
 * a static site with no calendar behind it, so nothing can actually be held —
 * the slots are day-part preferences and the confirmation copy says Geza will
 * text to confirm rather than pretending the time is reserved.
 */
export function OptionB() {
  const [slot, setSlot] = useState("");
  const [acked, setAcked] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [booked, setBooked] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const ready = Boolean(slot) && acked;

  const jumpToBooking = () => {
    document
      .getElementById("book")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!ready) return;
    if (!name.trim() || !phone.trim()) {
      setError("Name and mobile number, then I can confirm.");
      return;
    }
    setSending(true);
    setError("");
    try {
      const preference =
        SLOT_PREFERENCES.find((s) => s.id === slot)?.label ?? slot;
      await submitLead({
        subject: "Landing B (walkthrough request) — new lead",
        Name: name,
        Phone: phone,
        Preferred_time: preference,
        Budget_acknowledged: `Yes — has seen the package prices (from ${BUDGET_FLOOR}, materials excluded)`,
      });
      setBooked(true);
    } catch {
      setError(
        `Something went wrong sending that. Call or text me at ${PHONE_DISPLAY}.`,
      );
    } finally {
      setSending(false);
    }
  };

  const field =
    "w-full rounded-[10px] border border-landing-cream/20 bg-landing-cream/5 p-[15px] font-grotesk text-[15px] text-landing-cream outline-none placeholder:text-landing-cream/40 focus:border-landing-brass";

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto min-h-screen max-w-[430px] bg-landing-ink font-grotesk antialiased">
        <DraftRibbon label="Option B · work-first, price tiers" />

        {/* Hero — the proof IS the hero */}
        <div className="relative">
          <BeforeAfterSlider
            pair={BEFORE_AFTER_PAIRS[0]}
            heightClass="h-[520px]"
            roundedClass="rounded-none"
            initial={46}
            tone="dark"
            priority
            showChips={false}
            sizes="(max-width: 430px) 100vw, 430px"
          />
          {/* Scrim + headline sit above the slider but must not eat its drags.
              The stops are explicit rather than from/via/to because the type
              runs to ~40% of the frame and needs cover the whole way down. */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(23,21,15,0.88)_0%,rgba(23,21,15,0.72)_28%,rgba(23,21,15,0.3)_48%,rgba(23,21,15,0)_66%)]" />
          <div className="pointer-events-none absolute left-6 right-6 top-[22px]">
            <div className="flex items-center justify-between">
              <div className="font-display text-xl text-landing-cream">
                Modern Master
              </div>
              <div className="text-[11px] uppercase tracking-[0.12em] text-landing-cream/70">
                20+ years
              </div>
            </div>
            <h1 className="mt-7 text-pretty font-display text-[40px] font-normal leading-[1.05] tracking-[-0.015em] text-[#FFFDF9]">
              Drag it. That&apos;s what one craftsman did.
            </h1>
            <div className="mt-3 max-w-[300px] text-[14px] leading-[1.55] text-landing-cream/80">
              A primary bath taken to the studs — demo to final caulk by the same
              pair of hands.
            </div>
          </div>
        </div>

        {/* Price tiers — the filter */}
        <div className="px-6 pt-[26px]">
          <div className="text-[11px] uppercase tracking-[0.14em] text-landing-sand">
            What this costs, plainly
          </div>
          <div className="mt-[14px] flex flex-col gap-[10px]">
            {PRICE_TIERS.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-landing-cream/[0.16] p-4"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <div className="text-[14.5px] font-bold text-landing-cream">
                    {t.name}
                  </div>
                  <div className="whitespace-nowrap font-display text-xl text-landing-brass">
                    {t.range}
                  </div>
                </div>
                <div className="mt-[6px] text-pretty text-[13px] leading-[1.55] text-landing-cream/60">
                  {t.body}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-[10px] border border-landing-brass/40 bg-landing-brass/[0.07] px-[14px] py-3">
            <div className="text-[13px] font-bold text-landing-brass">
              {MATERIALS_NOTE}
            </div>
            <div className="mt-[5px] text-[12.5px] leading-[1.5] text-landing-cream/65">
              Tile, stone, vanity, fixtures — you buy those and you own the
              choice. What is priced here is the build.
            </div>
          </div>
          <div className="mt-3 text-[12.5px] leading-[1.6] text-landing-cream/50">
            If your number is below that first band I&apos;ll say so on the
            phone and save us both the visit. No hard feelings, and I&apos;ll
            name someone who can help.
          </div>
        </div>

        {/* Owner credibility */}
        <div className="mt-[30px] bg-landing-cream px-6 py-[26px]">
          <div className="flex items-center gap-[14px]">
            <Image
              src="/photos/geza-portrait.jpg"
              alt="Geza, owner and lead craftsman at Modern Master"
              width={72}
              height={72}
              className="h-[72px] w-[72px] shrink-0 rounded-full object-cover"
            />
            <div>
              <div className="text-[15px] font-bold text-landing-ink">
                Geza, owner
              </div>
              <div className="text-[12.5px] leading-[1.4] text-landing-muted">
                The man who quotes it is the man who tiles it
              </div>
            </div>
          </div>
          <p className="mt-4 text-pretty font-display text-[22px] leading-[1.3] text-landing-ink">
            &ldquo;A big company sends a closer, then a subcontractor. I show up
            both times.&rdquo;
          </p>
          <div className="mt-[18px] flex flex-col gap-4">
            {DIFFERENTIATORS_SHORT.map((d) => (
              <div key={d.t} className="flex gap-3">
                <div className="w-[5px] shrink-0 rounded-[3px] bg-landing-bronze" />
                <div>
                  <div className="text-sm font-bold text-landing-ink">
                    {d.t}
                  </div>
                  <div className="mt-[3px] text-pretty text-[13.5px] leading-[1.55] text-landing-body">
                    {d.b}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* More proof */}
        <div className="px-6 pt-7">
          <div className="text-[11px] uppercase tracking-[0.14em] text-landing-sand">
            {BEFORE_AFTER_PAIRS[1].eyebrow}
          </div>
          <div className="mt-[10px]">
            <BeforeAfterSlider
              pair={BEFORE_AFTER_PAIRS[1]}
              heightClass="h-[300px]"
              initial={55}
              tone="dark"
            />
          </div>
          <div className="mt-[10px] text-[12.5px] leading-[1.5] text-landing-cream/55">
            {BEFORE_AFTER_PAIRS[1].caption}
          </div>
        </div>

        {/* Booking */}
        <div id="book" className="scroll-mt-4 px-6 pt-7">
          {!booked ? (
            <div>
              <div className="flex items-center gap-2">
                <div className="h-[7px] w-[7px] rounded-full bg-landing-brass" />
                <div className="text-[11.5px] uppercase tracking-[0.1em] text-landing-brass">
                  {SCARCITY_CLAIM}
                </div>
              </div>
              <div className="mt-3 font-display text-[30px] leading-[1.12] text-landing-cream">
                Book a 30-minute walkthrough with me.
              </div>
              <div className="mt-[10px] text-[13.5px] leading-[1.6] text-landing-cream/65">
                I take {CAPACITY_CLAIM}. We stand in the room, I tell you what it
                really takes, and you get a written range before I leave.
              </div>

              <form onSubmit={handleSubmit}>
                <fieldset className="mt-[18px]">
                  <legend className="sr-only">
                    Preferred walkthrough time
                  </legend>
                  <div className="flex flex-col gap-2">
                    {SLOT_PREFERENCES.map((s) => {
                      const on = slot === s.id;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setSlot(s.id)}
                          aria-pressed={on}
                          className={`flex min-h-[48px] items-center justify-between gap-[10px] rounded-[10px] border p-[15px] text-left font-grotesk text-sm font-semibold text-landing-cream transition-colors ${
                            on
                              ? "border-landing-brass bg-landing-bronze/20"
                              : "border-landing-cream/20 bg-transparent hover:border-landing-brass/60"
                          }`}
                        >
                          <span>{s.label}</span>
                          <span className="text-[12px] font-medium text-landing-cream/60">
                            {s.note}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="mt-3 flex flex-col gap-[10px]">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="First name"
                    aria-label="First name"
                    autoComplete="given-name"
                    className={field}
                  />
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Mobile number"
                    aria-label="Mobile number"
                    type="tel"
                    autoComplete="tel"
                    className={field}
                  />
                  {/* Honeypot — mirrors the homepage form. */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    style={{ display: "none" }}
                  />

                  <button
                    type="button"
                    onClick={() => setAcked((v) => !v)}
                    aria-pressed={acked}
                    className={`flex items-start gap-[10px] rounded-[10px] border px-[15px] py-[13px] text-left font-grotesk transition-colors ${
                      acked
                        ? "border-landing-brass/50 bg-landing-bronze/[0.12]"
                        : "border-landing-cream/[0.14] bg-transparent"
                    }`}
                  >
                    <span
                      className={`mt-[1px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded border border-landing-cream/45 text-xs font-extrabold text-landing-ink ${
                        acked ? "bg-landing-brass" : "bg-transparent"
                      }`}
                    >
                      {acked ? "✓" : ""}
                    </span>
                    <span className="text-[12.5px] leading-[1.5] text-landing-cream/[0.78]">
                      I&apos;ve read the prices above, I know finish materials
                      are on top, and I&apos;m planning at that level.
                    </span>
                  </button>

                  <button
                    type="submit"
                    disabled={!ready || sending}
                    className={`min-h-[52px] rounded-xl p-[17px] font-grotesk text-[15px] font-bold text-[#FFF8EE] transition-colors ${
                      ready
                        ? "bg-landing-bronze hover:bg-[#B07C3D]"
                        : "cursor-not-allowed bg-landing-bronze/40"
                    }`}
                  >
                    {sending
                      ? "Sending…"
                      : !slot
                        ? "Pick a time above"
                        : !acked
                          ? "Confirm the budget note"
                          : "Request this walkthrough"}
                  </button>

                  {error && (
                    <div className="text-[12.5px] leading-[1.5] text-[#E9A8A8]">
                      {error}
                    </div>
                  )}
                </div>
              </form>
            </div>
          ) : (
            <div className="rounded-[14px] border border-landing-brass/40 p-[22px]">
              <div className="font-display text-[28px] leading-[1.15] text-landing-cream">
                Request received.
              </div>
              <div className="mt-[10px] text-[14px] leading-[1.6] text-landing-cream/70">
                {SLOT_PREFERENCES.find((s) => s.id === slot)?.label} works —
                I&apos;ll text you to lock the exact time. Leave the bathroom
                exactly as it is; I want to see the real thing.
              </div>
            </div>
          )}
        </div>

        {/* Reviews */}
        <div className="px-6 pt-7">
          <div className="flex items-center gap-2">
            <div className="text-sm tracking-[0.1em] text-landing-brass">
              ★★★★★
            </div>
            <div className="text-[12.5px] text-landing-cream/60">
              5.0 on Google
            </div>
          </div>
          <div className="mt-[14px] flex flex-col gap-3">
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                className="rounded-xl border border-landing-cream/[0.14] p-4"
              >
                <div className="font-display text-[17px] italic leading-[1.35] text-landing-cream">
                  &ldquo;{r.quote}&rdquo;
                </div>
                <div className="mt-2 text-[12px] text-landing-cream/55">
                  {r.who}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage */}
        <div className="px-6 pt-6">
          <div className="flex flex-wrap gap-[6px]">
            {TOWNS.map((t) => (
              <div
                key={t}
                className="rounded-[20px] border border-landing-cream/[0.16] px-[10px] py-[6px] text-[12px] text-landing-cream/70"
              >
                {t}
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-[14px]">
            {SEALS.map((s) => (
              <div
                key={s}
                className="text-[11.5px] font-semibold text-landing-cream/55"
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        <div className="h-[120px]" />

        {/* Sticky action bar */}
        <div className="sticky bottom-0 flex gap-[10px] bg-gradient-to-b from-landing-ink/0 via-landing-ink to-landing-ink px-4 pb-[18px] pt-3">
          <a
            href={SMS_HREF}
            className="flex min-h-[52px] flex-1 items-center justify-center rounded-xl border border-landing-cream/[0.28] text-[14.5px] font-bold text-landing-cream"
          >
            Text Geza
          </a>
          <button
            type="button"
            onClick={jumpToBooking}
            className="min-h-[52px] flex-[1.2] rounded-xl bg-landing-bronze font-grotesk text-[14.5px] font-bold text-[#FFF8EE]"
          >
            Book walkthrough
          </button>
        </div>
      </div>
    </div>
  );
}
