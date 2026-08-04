"use client";

import { useState } from "react";
import Image from "next/image";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { DraftRibbon } from "./DraftRibbon";
import {
  BEFORE_AFTER_PAIRS,
  DIFFERENTIATORS_SHORT,
  PHONE_DISPLAY,
  REVIEWS,
  SEALS,
  SMS_HREF,
  TOWNS,
  submitLead,
} from "./copy";
import {
  MATERIALS_DETAIL,
  MATERIALS_NOTE,
  MULTI_BATH_NOTE,
  PACKAGE_ROOMS,
  usd,
} from "./pricing";

/**
 * Packages — the fixed-price direction.
 *
 * One question drives the whole page: which bathroom? Answer it and three
 * prices appear. There is no form to fill before seeing a number, no "call for
 * pricing", and no range wide enough to be meaningless.
 *
 * The materials exclusion is treated as a headline, not a disclaimer — it is
 * the difference between a price the homeowner trusts and one they feel
 * ambushed by on the first visit.
 */
export function PackagesPage() {
  const [roomId, setRoomId] = useState(PACKAGE_ROOMS[1].id);
  const [tierId, setTierId] = useState("");
  const [multi, setMulti] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [town, setTown] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const roomData = PACKAGE_ROOMS.find((r) => r.id === roomId) ?? PACKAGE_ROOMS[1];
  const tier = roomData.tiers.find((t) => t.id === tierId);

  const pickRoom = (id: string) => {
    setRoomId(id);
    // A tier only means something next to a room. Changing the room without
    // clearing the selection would leave "$52,500" attached to a half bath.
    setTierId("");
  };

  const jumpToForm = () => {
    document
      .getElementById("request")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError("Name and mobile number, then I can call you.");
      return;
    }
    setSending(true);
    setError("");
    try {
      await submitLead({
        subject: "Landing Packages — new lead",
        Name: name,
        Phone: phone,
        Town: town || "(not given)",
        Room: roomData.label,
        Package: tier ? tier.name : "(no package selected)",
        Price: tier ? usd(tier.price) : "(none)",
        More_than_one_bathroom: multi ? "Yes" : "No",
      });
      setSent(true);
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
        <DraftRibbon label="Packages · fixed price, three levels" />

        {/* Hero */}
        <div className="relative">
          <BeforeAfterSlider
            pair={BEFORE_AFTER_PAIRS[0]}
            heightClass="h-[440px]"
            roundedClass="rounded-none"
            initial={46}
            tone="dark"
            priority
            showChips={false}
            sizes="(max-width: 430px) 100vw, 430px"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(23,21,15,0.9)_0%,rgba(23,21,15,0.74)_30%,rgba(23,21,15,0.32)_52%,rgba(23,21,15,0)_70%)]" />
          <div className="pointer-events-none absolute left-6 right-6 top-[22px]">
            <div className="flex items-center justify-between">
              <div className="font-display text-xl text-landing-cream">
                Modern Master
              </div>
              <div className="text-[11px] uppercase tracking-[0.12em] text-landing-cream/70">
                20+ years
              </div>
            </div>
            <h1 className="mt-6 text-pretty font-display text-[38px] font-normal leading-[1.06] tracking-[-0.015em] text-[#FFFDF9]">
              Every price is on this page.
            </h1>
            <div className="mt-3 max-w-[310px] text-[14px] leading-[1.55] text-landing-cream/80">
              Pick your bathroom and pick how far you want to take it. You will
              know the number before you know my voice.
            </div>
          </div>
        </div>

        {/* Room selector */}
        <div className="px-6 pt-[26px]">
          <div className="text-[11px] uppercase tracking-[0.14em] text-landing-sand">
            Which bathroom?
          </div>
          <div
            role="tablist"
            aria-label="Bathroom type"
            className="mt-3 grid grid-cols-3 gap-[6px] rounded-xl border border-landing-cream/[0.16] p-[5px]"
          >
            {PACKAGE_ROOMS.map((r) => {
              const on = r.id === roomId;
              return (
                <button
                  key={r.id}
                  role="tab"
                  type="button"
                  aria-selected={on}
                  onClick={() => pickRoom(r.id)}
                  className={`min-h-[44px] rounded-[9px] px-1 text-[13px] font-bold transition-colors ${
                    on
                      ? "bg-landing-bronze text-[#FFF8EE]"
                      : "bg-transparent text-landing-cream/65 hover:text-landing-cream"
                  }`}
                >
                  {r.short}
                </button>
              );
            })}
          </div>
          <div className="mt-[10px] text-[12.5px] leading-[1.5] text-landing-cream/55">
            {roomData.qualifier}.
          </div>
        </div>

        {/* Tier cards */}
        <div className="px-6 pt-4">
          <div className="flex flex-col gap-[10px]">
            {roomData.tiers.map((t, i) => {
              const on = t.id === tierId;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTierId(on ? "" : t.id)}
                  aria-pressed={on}
                  className={`rounded-xl border p-4 text-left transition-colors ${
                    on
                      ? "border-landing-brass bg-landing-bronze/[0.14]"
                      : "border-landing-cream/[0.16] hover:border-landing-brass/60"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[14.5px] font-bold text-landing-cream">
                        {t.name}
                      </span>
                      {i === 0 && (
                        <span className="rounded-[20px] border border-landing-brass/50 px-[7px] py-[2px] text-[10px] uppercase tracking-[0.08em] text-landing-brass">
                          Most common
                        </span>
                      )}
                    </div>
                    <div className="whitespace-nowrap font-display text-[22px] text-landing-brass">
                      {usd(t.price)}
                    </div>
                  </div>
                  <div className="mt-[6px] text-pretty text-[13px] leading-[1.55] text-landing-cream/60">
                    {t.body}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Materials exclusion — deliberately loud */}
        <div className="mx-6 mt-4 rounded-xl border border-landing-brass/40 bg-landing-brass/[0.07] p-4">
          <div className="font-display text-[19px] leading-[1.25] text-landing-brass">
            {MATERIALS_NOTE}
          </div>
          <div className="mt-2 text-pretty text-[13px] leading-[1.55] text-landing-cream/70">
            {MATERIALS_DETAIL}
          </div>
        </div>

        {/* Multi-bath */}
        <div className="px-6 pt-4">
          <div className="rounded-xl border border-landing-cream/[0.16] p-4">
            <div className="text-[14px] font-bold text-landing-cream">
              More than one bathroom?
            </div>
            <div className="mt-[6px] text-pretty text-[13px] leading-[1.55] text-landing-cream/60">
              {MULTI_BATH_NOTE}
            </div>
          </div>
        </div>

        {/* Owner */}
        <div className="mt-7 bg-landing-cream px-6 py-[26px]">
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
            &ldquo;A company hides the price so a salesman can find your ceiling.
            I would rather publish it and only meet the people it suits.&rdquo;
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

        {/* Proof */}
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

        {/* Request */}
        <div id="request" className="scroll-mt-4 px-6 pt-8">
          {!sent ? (
            <form onSubmit={handleSubmit}>
              <div className="font-display text-[30px] leading-[1.12] text-landing-cream">
                Have me walk it with you.
              </div>
              <div className="mt-[10px] text-[13.5px] leading-[1.6] text-landing-cream/65">
                Thirty minutes, standing in the actual room. I confirm which
                package fits, tell you what the materials will run, and you get
                a written number before I leave.
              </div>

              <div className="mt-4 rounded-[10px] border border-landing-cream/[0.16] bg-landing-cream/[0.04] p-[14px]">
                <div className="text-[11px] uppercase tracking-[0.12em] text-landing-sand">
                  Sending with your request
                </div>
                <div className="mt-[6px] text-[14px] font-bold text-landing-cream">
                  {roomData.label}
                  {tier ? ` · ${tier.name}` : ""}
                </div>
                <div className="mt-[3px] text-[13px] text-landing-cream/60">
                  {tier ? (
                    <>
                      {usd(tier.price)}, materials on top
                    </>
                  ) : (
                    <>Tap a package above and it comes with the message.</>
                  )}
                </div>
              </div>

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
                <input
                  value={town}
                  onChange={(e) => setTown(e.target.value)}
                  placeholder="Your town"
                  aria-label="Your town"
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
                  onClick={() => setMulti((v) => !v)}
                  aria-pressed={multi}
                  className={`flex items-start gap-[10px] rounded-[10px] border px-[15px] py-[13px] text-left font-grotesk transition-colors ${
                    multi
                      ? "border-landing-brass/50 bg-landing-bronze/[0.12]"
                      : "border-landing-cream/[0.14] bg-transparent"
                  }`}
                >
                  <span
                    className={`mt-[1px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded border border-landing-cream/45 text-xs font-extrabold text-landing-ink ${
                      multi ? "bg-landing-brass" : "bg-transparent"
                    }`}
                  >
                    {multi ? "✓" : ""}
                  </span>
                  <span className="text-[12.5px] leading-[1.5] text-landing-cream/[0.78]">
                    I have more than one bathroom to do — price them together.
                  </span>
                </button>

                <button
                  type="submit"
                  disabled={sending}
                  className="min-h-[52px] rounded-xl bg-landing-bronze p-[17px] font-grotesk text-[15px] font-bold text-[#FFF8EE] transition-colors hover:bg-[#B07C3D] disabled:opacity-60"
                >
                  {sending ? "Sending…" : "Book the walkthrough"}
                </button>

                {error && (
                  <div className="text-[12.5px] leading-[1.5] text-[#E9A8A8]">
                    {error}
                  </div>
                )}
                <div className="text-[11.5px] leading-[1.5] text-landing-cream/50">
                  One call from me. Never a call center, never a list.
                </div>
              </div>
            </form>
          ) : (
            <div className="rounded-[14px] border border-landing-brass/40 p-[22px]">
              <div className="font-display text-[28px] leading-[1.15] text-landing-cream">
                Got it.
              </div>
              <div className="mt-[10px] text-[14px] leading-[1.6] text-landing-cream/70">
                {roomData.label}
                {tier ? `, ${tier.name.toLowerCase()}` : ""} — I&apos;ll call
                within one business day to set a time. Leave the bathroom
                exactly as it is; I want to see the real thing.
              </div>
            </div>
          )}
        </div>

        {/* Reviews */}
        <div className="px-6 pt-8">
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
        <div className="sticky bottom-0 flex items-center gap-[10px] bg-gradient-to-b from-landing-ink/0 via-landing-ink to-landing-ink px-4 pb-[18px] pt-3">
          <a
            href={SMS_HREF}
            className="flex min-h-[52px] flex-1 items-center justify-center rounded-xl border border-landing-cream/[0.28] text-[14.5px] font-bold text-landing-cream"
          >
            Text Geza
          </a>
          <button
            type="button"
            onClick={jumpToForm}
            className="flex min-h-[52px] flex-[1.3] flex-col items-center justify-center rounded-xl bg-landing-bronze font-grotesk text-[#FFF8EE]"
          >
            <span className="text-[14.5px] font-bold leading-tight">
              Book a walkthrough
            </span>
            {tier && (
              <span className="text-[11px] leading-tight text-[#FFF8EE]/75">
                {roomData.short} · {usd(tier.price)}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
