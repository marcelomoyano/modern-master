"use client";

import { useState } from "react";
import Image from "next/image";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { DraftRibbon } from "./DraftRibbon";
import {
  BEFORE_AFTER_PAIRS,
  DIFFERENTIATORS_SHORT,
  PHONE_DISPLAY,
  PHONE_HREF,
  REVIEWS,
  SEALS,
  TOWNS,
  submitLead,
} from "./copy";
import {
  ADD_ONS,
  ADD_ONS_PARTIAL_NOTE,
  ESTIMATE_ROOMS,
  MATERIALS_DETAIL,
  MATERIALS_NOTE,
  MULTI_BATH_NOTE,
  usd,
} from "./pricing";

/**
 * Estimate — the starting-budget direction.
 *
 * Geza's second sheet is a floor plus à-la-carte extras, so the page is built
 * as the arithmetic he does in someone's kitchen: pick the room, tick what you
 * want, watch the number move. The homeowner builds their own figure, which
 * means they arrive at the call already believing it.
 *
 * The lead this produces carries a spec, not just a name — Geza can see the
 * room, the add-ons and the total before he picks up the phone.
 */
export function EstimatePage() {
  const [roomId, setRoomId] = useState("");
  const [picked, setPicked] = useState<string[]>([]);
  const [multi, setMulti] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [town, setTown] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const room = ESTIMATE_ROOMS.find((r) => r.id === roomId);
  const chosen = ADD_ONS.filter((a) => picked.includes(a.id));
  const addOnTotal = chosen.reduce((sum, a) => sum + a.price, 0);
  const total = (room?.base ?? 0) + addOnTotal;

  const toggle = (id: string) =>
    setPicked((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );

  const jumpTo = (id: string) => {
    document
      .getElementById(id)
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
        subject: "Landing Estimate — new lead",
        Name: name,
        Phone: phone,
        Town: town || "(not given)",
        Room: room ? room.label : "(not selected)",
        Starting_budget: room ? usd(room.base) : "(none)",
        Add_ons: chosen.length
          ? chosen.map((a) => `${a.label} ${usd(a.price)}`).join(", ")
          : "None selected",
        Their_total: room ? usd(total) : "(none)",
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
    "w-full rounded-[10px] border border-landing-ink/[0.18] bg-landing-paper p-[15px] font-grotesk text-[15px] text-landing-ink outline-none placeholder:text-landing-muted/70 focus:border-landing-bronze";

  return (
    <div className="min-h-screen bg-landing-ink/95">
      <div className="mx-auto min-h-screen max-w-[430px] bg-landing-cream font-grotesk antialiased">
        <DraftRibbon label="Estimate · starting budget + add-ons" />

        {/* Masthead */}
        <div className="flex items-center justify-between px-6 pt-[22px]">
          <div className="font-display text-xl text-landing-ink">
            Modern Master
          </div>
          <div className="text-[11px] uppercase tracking-[0.12em] text-landing-muted">
            Hillsborough, NJ
          </div>
        </div>

        {/* Hero */}
        <div className="px-6 pt-6">
          <h1 className="text-pretty font-display text-[40px] font-normal leading-[1.06] tracking-[-0.015em] text-landing-ink">
            Work out your number before you call me.
          </h1>
          <p className="mt-4 text-pretty text-[15px] leading-[1.6] text-landing-body">
            These are the budgets I actually build at right now — not a teaser
            rate that grows once I am in your hallway. Pick the room, add what
            you want, and watch it total up.
          </p>
        </div>

        {/* Compact proof */}
        <div className="mt-6 px-6">
          <BeforeAfterSlider
            pair={BEFORE_AFTER_PAIRS[1]}
            heightClass="h-[210px]"
            initial={55}
          />
          <div className="mt-[10px] text-[12.5px] leading-[1.5] text-landing-muted">
            Drag it. {BEFORE_AFTER_PAIRS[1].caption}
          </div>
        </div>

        {/* Step 1 — the room */}
        <div id="build" className="scroll-mt-4 px-6 pt-8">
          <div className="flex items-baseline gap-[10px]">
            <span className="font-display text-base text-landing-bronze">
              01
            </span>
            <span className="text-[11px] uppercase tracking-[0.14em] text-landing-muted">
              Which bathroom
            </span>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            {ESTIMATE_ROOMS.map((r) => {
              const on = r.id === roomId;
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setRoomId(r.id)}
                  aria-pressed={on}
                  className={`flex min-h-[60px] items-center justify-between gap-3 rounded-xl border p-4 text-left transition-colors ${
                    on
                      ? "border-landing-bronze bg-landing-bronze/[0.09]"
                      : "border-landing-ink/[0.14] bg-landing-paper hover:border-landing-bronze/60"
                  }`}
                >
                  <span>
                    <span className="block text-[14.5px] font-bold text-landing-ink">
                      {r.label}
                    </span>
                    <span className="mt-[2px] block text-[12.5px] leading-[1.4] text-landing-muted">
                      {r.qualifier}
                    </span>
                  </span>
                  <span className="shrink-0 text-right">
                    <span className="block text-[10px] uppercase tracking-[0.08em] text-landing-muted">
                      From
                    </span>
                    <span className="block whitespace-nowrap font-display text-[21px] text-landing-bronze">
                      {usd(r.base)}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2 — add-ons */}
        <div className="px-6 pt-7">
          <div className="flex items-baseline gap-[10px]">
            <span className="font-display text-base text-landing-bronze">
              02
            </span>
            <span className="text-[11px] uppercase tracking-[0.14em] text-landing-muted">
              What you would add
            </span>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            {ADD_ONS.map((a) => {
              const on = picked.includes(a.id);
              return (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => toggle(a.id)}
                  aria-pressed={on}
                  className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-colors ${
                    on
                      ? "border-landing-bronze bg-landing-bronze/[0.09]"
                      : "border-landing-ink/[0.14] bg-landing-paper hover:border-landing-bronze/60"
                  }`}
                >
                  <span
                    className={`mt-[2px] flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded border text-[11px] font-extrabold ${
                      on
                        ? "border-landing-bronze bg-landing-bronze text-[#FFF8EE]"
                        : "border-landing-ink/30 bg-transparent text-transparent"
                    }`}
                  >
                    ✓
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline justify-between gap-3">
                      <span className="text-[14.5px] font-bold text-landing-ink">
                        {a.label}
                      </span>
                      <span className="whitespace-nowrap font-display text-[17px] text-landing-bronze">
                        + {usd(a.price)}
                      </span>
                    </span>
                    <span className="mt-[3px] block text-pretty text-[12.5px] leading-[1.5] text-landing-muted">
                      {a.note}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
          <div className="mt-3 text-[12.5px] leading-[1.55] text-landing-muted">
            {ADD_ONS_PARTIAL_NOTE}
          </div>
        </div>

        {/* Running total */}
        <div className="mx-6 mt-6 rounded-[16px] bg-landing-ink p-5">
          <div className="text-[11px] uppercase tracking-[0.14em] text-landing-sand">
            Your estimate
          </div>
          {room ? (
            <>
              <div className="mt-3 flex flex-col gap-[7px]">
                <div className="flex items-baseline justify-between gap-3 text-[13.5px]">
                  <span className="text-landing-cream/75">{room.label}</span>
                  <span className="whitespace-nowrap font-semibold text-landing-cream">
                    {usd(room.base)}
                  </span>
                </div>
                {chosen.map((a) => (
                  <div
                    key={a.id}
                    className="flex items-baseline justify-between gap-3 text-[13.5px]"
                  >
                    <span className="text-landing-cream/75">{a.label}</span>
                    <span className="whitespace-nowrap font-semibold text-landing-cream">
                      {usd(a.price)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 border-t border-landing-cream/20 pt-4">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-[13px] uppercase tracking-[0.1em] text-landing-cream/70">
                    Build total
                  </span>
                  <span
                    aria-live="polite"
                    className="whitespace-nowrap font-display text-[32px] leading-none text-landing-brass"
                  >
                    {usd(total)}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <div className="mt-3 text-[13.5px] leading-[1.6] text-landing-cream/65">
              Pick a bathroom above and the number appears here — no form, no
              email address first.
            </div>
          )}
        </div>

        {/* Materials exclusion — deliberately loud */}
        <div className="mx-6 mt-3 rounded-xl border border-landing-bronze/40 bg-landing-bronze/[0.07] p-4">
          <div className="font-display text-[19px] leading-[1.25] text-landing-bronze">
            {MATERIALS_NOTE}
          </div>
          <div className="mt-2 text-pretty text-[13px] leading-[1.55] text-landing-body">
            {MATERIALS_DETAIL}
          </div>
        </div>

        <div className="px-6 pt-3">
          <div className="text-[12.5px] leading-[1.55] text-landing-muted">
            This is an estimate, not a quote. It is honest arithmetic on the
            figures I work at — the number I stand behind comes after I have
            stood in your bathroom.
          </div>
        </div>

        {/* Owner */}
        <div className="mt-7 bg-landing-paper px-6 py-[26px]">
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
            &ldquo;I still work for ordinary families. That is why the number
            above is the real one and not an opening bid.&rdquo;
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

        {/* Bigger proof */}
        <div className="px-6 pt-8">
          <div className="text-[11px] uppercase tracking-[0.14em] text-landing-muted">
            {BEFORE_AFTER_PAIRS[0].eyebrow}
          </div>
          <div className="mt-[10px]">
            <BeforeAfterSlider pair={BEFORE_AFTER_PAIRS[0]} initial={45} />
          </div>
          <div className="mt-[10px] text-[12.5px] leading-[1.5] text-landing-muted">
            {BEFORE_AFTER_PAIRS[0].caption}
          </div>
        </div>

        {/* Send it */}
        <div id="send" className="scroll-mt-4 px-6 pt-8">
          {!sent ? (
            <form onSubmit={handleSubmit}>
              <div className="flex items-baseline gap-[10px]">
                <span className="font-display text-base text-landing-bronze">
                  03
                </span>
                <span className="text-[11px] uppercase tracking-[0.14em] text-landing-muted">
                  Send it to me
                </span>
              </div>
              <div className="mt-3 font-display text-[28px] leading-[1.15] text-landing-ink">
                {room
                  ? `Send me your ${usd(total)} and I will tell you the truth about it.`
                  : "Send me the room and I will tell you what it really takes."}
              </div>
              <div className="mt-[10px] text-[13.5px] leading-[1.6] text-landing-body">
                Your list comes through with the message, so I already know what
                we are talking about when I call.
              </div>

              <div className="mt-4 flex flex-col gap-[10px]">
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
                      ? "border-landing-bronze/60 bg-landing-bronze/[0.09]"
                      : "border-landing-ink/[0.14] bg-landing-paper"
                  }`}
                >
                  <span
                    className={`mt-[1px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded border text-xs font-extrabold ${
                      multi
                        ? "border-landing-bronze bg-landing-bronze text-[#FFF8EE]"
                        : "border-landing-ink/30 bg-transparent text-transparent"
                    }`}
                  >
                    ✓
                  </span>
                  <span className="text-[12.5px] leading-[1.5] text-landing-body">
                    I have more than one bathroom to do.
                  </span>
                </button>

                {multi && (
                  <div className="rounded-[10px] border border-landing-ink/[0.12] bg-landing-paper p-[14px] text-[12.5px] leading-[1.55] text-landing-muted">
                    {MULTI_BATH_NOTE}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="min-h-[52px] rounded-xl bg-landing-bronze p-[17px] font-grotesk text-[15px] font-bold text-[#FFF8EE] transition-colors hover:bg-[#B07C3D] disabled:opacity-60"
                >
                  {sending ? "Sending…" : "Send my estimate to Geza"}
                </button>

                {error && (
                  <div className="text-[12.5px] leading-[1.5] text-[#9B3B3B]">
                    {error}
                  </div>
                )}
                <div className="text-[11.5px] leading-[1.5] text-landing-muted">
                  One call from me. Never a call center, never a list.
                </div>
              </div>
            </form>
          ) : (
            <div className="rounded-[16px] bg-landing-ink p-[22px]">
              <div className="font-display text-[28px] leading-[1.15] text-landing-cream">
                On its way.
              </div>
              <div className="mt-[10px] text-[14px] leading-[1.6] text-landing-cream/70">
                {room ? `${room.label} at ${usd(total)}` : "Your message"} — I
                will call within one business day. If anything on that list is
                going to move the number, I would rather tell you on the phone
                than in your driveway.
              </div>
            </div>
          )}
        </div>

        {/* Reviews */}
        <div className="px-6 pt-8">
          <div className="flex items-center gap-2">
            <div className="text-sm tracking-[0.1em] text-landing-bronze">
              ★★★★★
            </div>
            <div className="text-[12.5px] text-landing-muted">5.0 on Google</div>
          </div>
          <div className="mt-4 flex flex-col gap-[14px]">
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                className="rounded-xl border border-landing-ink/[0.12] bg-landing-paper p-4"
              >
                <div className="font-display text-[17px] italic leading-[1.35] text-landing-ink">
                  &ldquo;{r.quote}&rdquo;
                </div>
                <div className="mt-2 text-[12px] text-landing-muted">
                  {r.who}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage */}
        <div className="px-6 pt-[26px]">
          <div className="text-[11px] uppercase tracking-[0.14em] text-landing-muted">
            Where I work
          </div>
          <div className="mt-[10px] flex flex-wrap gap-[6px]">
            {TOWNS.map((t) => (
              <div
                key={t}
                className="rounded-[20px] border border-landing-ink/[0.14] px-[10px] py-[6px] text-[12px] text-landing-body"
              >
                {t}
              </div>
            ))}
          </div>
          <div className="mt-[18px] flex flex-wrap items-center gap-[14px]">
            {SEALS.map((s) => (
              <div
                key={s}
                className="text-[11.5px] font-semibold tracking-[0.03em] text-landing-muted"
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        <div className="h-[120px]" />

        {/* Sticky action bar — carries the running total once there is one */}
        <div className="sticky bottom-0 flex items-center gap-[10px] bg-gradient-to-b from-landing-cream/0 via-landing-cream to-landing-cream px-4 pb-[18px] pt-3">
          {room ? (
            <>
              <div className="flex min-h-[52px] flex-1 flex-col justify-center rounded-xl border border-landing-ink/20 bg-landing-paper px-[14px]">
                <span className="text-[10px] uppercase tracking-[0.08em] text-landing-muted">
                  Your build total
                </span>
                <span className="whitespace-nowrap font-display text-[21px] leading-tight text-landing-bronze">
                  {usd(total)}
                </span>
              </div>
              <button
                type="button"
                onClick={() => jumpTo("send")}
                className="min-h-[52px] flex-[1.1] rounded-xl bg-landing-ink font-grotesk text-[14.5px] font-bold text-landing-cream"
              >
                Send it to Geza
              </button>
            </>
          ) : (
            <>
              <a
                href={PHONE_HREF}
                className="flex min-h-[52px] flex-1 items-center justify-center rounded-xl border border-landing-ink/25 bg-landing-paper text-[14.5px] font-bold text-landing-ink"
              >
                Call Geza
              </a>
              <button
                type="button"
                onClick={() => jumpTo("build")}
                className="min-h-[52px] flex-[1.2] rounded-xl bg-landing-ink font-grotesk text-[14.5px] font-bold text-landing-cream"
              >
                Build my estimate →
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
