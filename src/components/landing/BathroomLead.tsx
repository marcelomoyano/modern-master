"use client";

import { useState } from "react";
import Image from "next/image";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { DraftRibbon } from "./DraftRibbon";
import {
  ANCHOR_REVIEW,
  BEFORE_AFTER_PAIRS,
  BUDGET_OPTIONS,
  CONSULT_NOTE,
  CAPACITY_AS_OF,
  CAPACITY_CLAIM,
  CURRENT_JOB_TOWN,
  DIFFERENTIATORS,
  GOOGLE_RATING,
  NEXT_JOB_TOWN,
  OPENINGS_CLAIM,
  PHONE_DISPLAY,
  PHONE_HREF,
  REVIEWS,
  REVIEW_COUNT,
  SCOPE_OPTIONS,
  SEALS,
  TIMING_OPTIONS,
  TOWNS,
  submitLead,
} from "./copy";

type Step = 0 | 1 | 2 | 3 | 4 | 5;

const STEP_LABELS: Record<number, string> = {
  1: "Question 1 of 4",
  2: "Question 2 of 4",
  3: "Question 3 of 4",
  4: "Last one",
};

/**
 * The bathroom lead page.
 *
 * Replaces the four-page A/B/packages/estimate experiment, all of which were
 * built around a published price. Geza killed that on 27 August 2026, so the
 * page now argues from outcomes and from his own customers' words instead.
 *
 * The one thing that survived the rewrite is the fit check, because it does
 * the job price used to do: it qualifies. Budget is asked *inside* the form,
 * where the homeowner volunteers it, rather than quoted on the page where it
 * would anchor him before he is in the room.
 *
 * Written for a 430px phone — Meta traffic is where this is going.
 */
export function BathroomLead() {
  const [step, setStep] = useState<Step>(0);
  const [scope, setScope] = useState("");
  const [budget, setBudget] = useState("");
  const [town, setTown] = useState("");
  const [timing, setTiming] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const start = () => {
    setStep(1);
    document
      .getElementById("fit-check")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  /** Index 0 is the below-floor band — see the comment on BUDGET_OPTIONS. */
  const underBudget = budget === BUDGET_OPTIONS[0].label;

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
        subject: "Bathroom lead page — new enquiry",
        Name: name,
        Phone: phone,
        Scope: scope,
        Budget: budget,
        Town: town || "(not given)",
        Timing: timing,
      });
      setStep(5);
    } catch {
      setError(
        `Something went wrong sending that. Call or text me at ${PHONE_DISPLAY}.`,
      );
    } finally {
      setSending(false);
    }
  };

  const optionButton =
    "min-h-[48px] rounded-[10px] border border-landing-cream/20 bg-transparent p-[14px] text-left font-grotesk text-sm text-landing-cream transition-colors hover:border-landing-bronze hover:bg-landing-bronze/[0.16]";
  const field =
    "w-full rounded-[10px] border border-landing-cream/20 bg-landing-cream/5 p-[15px] font-grotesk text-[15px] text-landing-cream outline-none placeholder:text-landing-cream/40 focus:border-landing-brass";
  const eyebrow = "text-[11px] uppercase tracking-[0.14em] text-landing-muted";

  const reviewCard = (r: { quote: string; who: string }, key: string) => (
    <div
      key={key}
      className="rounded-xl border border-landing-ink/[0.12] bg-landing-paper p-4"
    >
      <div className="font-display text-[17px] italic leading-[1.35] text-landing-ink">
        &ldquo;{r.quote}&rdquo;
      </div>
      <div className="mt-2 text-[12px] text-landing-muted">{r.who}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-landing-ink/95">
      <div className="mx-auto min-h-screen max-w-[430px] bg-landing-cream font-grotesk antialiased">
        <DraftRibbon label="Bathroom lead page" />

        {/* Masthead */}
        <div className="flex items-center justify-between px-6 pt-[22px]">
          <div className="font-display text-xl text-landing-ink">
            Modern Master
          </div>
          <div className="text-[11px] uppercase tracking-[0.12em] text-landing-muted">
            Hillsborough, NJ
          </div>
        </div>

        {/* Owner */}
        <div className="flex items-center gap-[14px] px-6 pt-[26px]">
          <Image
            src="/photos/geza-portrait.jpg"
            alt="Geza, owner and lead craftsman at Modern Master"
            width={76}
            height={76}
            className="h-[76px] w-[76px] shrink-0 rounded-full object-cover"
            priority
          />
          <div className="flex flex-col gap-[3px]">
            <div className="text-[15px] font-bold text-landing-ink">Geza</div>
            <div className="text-[12.5px] leading-[1.4] text-landing-muted">
              Owner &amp; lead craftsman
              <br />
              Every bathroom, 20 years
            </div>
          </div>
        </div>

        {/* Hero */}
        <div className="px-6 pt-5">
          <h1 className="text-pretty font-display text-[41px] font-normal leading-[1.06] tracking-[-0.015em] text-landing-ink">
            The bathroom gets finished. Your house stays livable.
          </h1>
          <p className="mt-4 text-pretty text-[15px] leading-[1.6] text-landing-body">
            Twenty years of bathrooms in Central New Jersey. No salesman in your
            kitchen, no crew you&apos;ve never met — you hire me, you get me, and
            you get your house back clean at the end of every day.
          </p>
        </div>

        {/* Proof band — this is where the price block used to be. */}
        <div className="mx-6 mt-5 rounded-[10px] border border-landing-ink/[0.14] bg-landing-paper px-[14px] py-3">
          <div className="flex items-center gap-[10px]">
            <div className="whitespace-nowrap font-display text-[19px] text-landing-bronze">
              {GOOGLE_RATING} ★
            </div>
            <div className="text-[12px] leading-[1.4] text-landing-muted">
              across {REVIEW_COUNT} Google reviews — every one of them from a
              homeowner within an hour of here.
            </div>
          </div>
          <div className="mt-2 border-t border-landing-ink/[0.1] pt-2 text-[11.5px] leading-[1.45] text-landing-muted">
            <span className="font-bold text-landing-bronze">
              {CAPACITY_CLAIM}.
            </span>{" "}
            {OPENINGS_CLAIM} — as of {CAPACITY_AS_OF}. Currently building in{" "}
            {CURRENT_JOB_TOWN}, {NEXT_JOB_TOWN} after that.
          </div>
        </div>

        {/* Fit check */}
        <div
          id="fit-check"
          className="mx-6 mt-[22px] scroll-mt-6 rounded-[16px] bg-landing-ink p-5"
        >
          {step > 0 && step < 5 && (
            <div className="text-[11px] uppercase tracking-[0.14em] text-landing-sand">
              {STEP_LABELS[step]}
            </div>
          )}

          {step === 0 && (
            <div>
              <div className="text-[11px] uppercase tracking-[0.14em] text-landing-sand">
                Fit check · 4 questions
              </div>
              <div className="mt-2 font-display text-[26px] leading-[1.15] text-landing-cream">
                Let&apos;s see if we&apos;re right for each other.
              </div>
              <div className="mt-2 text-[13px] leading-[1.55] text-landing-cream/70">
                Takes 40 seconds. If it&apos;s a fit, I call you myself within
                one business day.
              </div>
              <button
                type="button"
                onClick={start}
                className="mt-4 min-h-[48px] w-full rounded-[10px] bg-landing-bronze p-4 font-grotesk text-[15px] font-bold text-[#FFF8EE] transition-colors hover:bg-[#B07C3D]"
              >
                Start the fit check
              </button>
            </div>
          )}

          {step === 1 && (
            <div>
              <div className="mt-[10px] font-display text-2xl leading-[1.2] text-landing-cream">
                What are we building?
              </div>
              <div className="mt-[14px] flex flex-col gap-2">
                {SCOPE_OPTIONS.map((label) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => {
                      setScope(label);
                      setStep(2);
                    }}
                    className={`${optionButton} font-medium`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="mt-[10px] font-display text-2xl leading-[1.2] text-landing-cream">
                What have you set aside for it?
              </div>
              <div className="mt-[6px] text-[12.5px] leading-[1.5] text-landing-cream/60">
                Every bathroom is different, so the number for yours comes after
                I&apos;ve stood in it. These are the ranges the work lands in —
                pick the one that matches what you&apos;ve put aside.
              </div>
              <div className="mt-[14px] flex flex-col gap-2">
                {BUDGET_OPTIONS.map((opt) => (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => {
                      setBudget(opt.label);
                      setStep(3);
                    }}
                    className={`${optionButton} flex flex-col items-start gap-[3px]`}
                  >
                    <span className="font-semibold">{opt.label}</span>
                    {opt.note && (
                      <span className="text-[11.5px] font-normal text-landing-cream/55">
                        {opt.note}
                      </span>
                    )}
                  </button>
                ))}
              </div>
              <div className="mt-[10px] text-[11.5px] leading-[1.5] text-landing-cream/45">
                {CONSULT_NOTE}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div className="mt-[10px] font-display text-2xl leading-[1.2] text-landing-cream">
                Where, and when?
              </div>
              <div className="mt-[14px] flex flex-col gap-[10px]">
                <input
                  value={town}
                  onChange={(e) => setTown(e.target.value)}
                  placeholder="Your town"
                  aria-label="Your town"
                  className={field}
                />
                <div className="flex gap-2">
                  {TIMING_OPTIONS.map((label) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => {
                        setTiming(label);
                        setStep(4);
                      }}
                      className={`${optionButton} flex-1 px-[6px] py-[13px] text-center text-[12.5px] font-semibold`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <form onSubmit={handleSubmit}>
              <div className="mt-[10px] font-display text-2xl leading-[1.2] text-landing-cream">
                How do I reach you?
              </div>
              <div className="mt-[14px] flex flex-col gap-[10px]">
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
                  type="submit"
                  disabled={sending}
                  className="min-h-[48px] rounded-[10px] bg-landing-bronze p-4 font-grotesk text-[15px] font-bold text-[#FFF8EE] transition-colors hover:bg-[#B07C3D] disabled:opacity-60"
                >
                  {sending ? "Sending…" : "Send to Geza"}
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
          )}

          {step === 5 && (
            <div>
              <div className="font-display text-[26px] leading-[1.2] text-landing-cream">
                Got it — talk soon.
              </div>
              <div className="mt-[10px] text-[13.5px] leading-[1.6] text-landing-cream/70">
                {underBudget
                  ? "That budget sits below where I can do this work properly — I'll still call, and I'll point you to someone good."
                  : `${scope}${town ? ` in ${town}` : ""}, ${timing.toLowerCase()}.`}
              </div>
              <div className="mt-[14px] text-[13.5px] leading-[1.6] text-landing-cream/70">
                I&apos;ll call within one business day, and we&apos;ll walk your
                bathroom together before anyone talks numbers.
              </div>
            </div>
          )}
        </div>

        {/* Outcome — before/after */}
        <div className="mt-[34px] px-6">
          <div className={eyebrow}>{BEFORE_AFTER_PAIRS[0].eyebrow}</div>
          <div className="mt-[10px]">
            <BeforeAfterSlider pair={BEFORE_AFTER_PAIRS[0]} initial={45} />
          </div>
          <div className="mt-[10px] text-[12.5px] leading-[1.5] text-landing-muted">
            Drag to see it. {BEFORE_AFTER_PAIRS[0].caption}
          </div>
        </div>

        {/* Two reviews, straight after the proof they describe */}
        <div className="mt-6 flex flex-col gap-[14px] px-6">
          {REVIEWS.slice(0, 2).map((r, i) => reviewCard(r, `early-${i}`))}
        </div>

        {/* Differentiators */}
        <div className="mt-9 bg-landing-paper px-6 py-7">
          <div className="font-display text-[28px] leading-[1.15] text-landing-ink">
            What a company can&apos;t give you
          </div>
          <div className="mt-[18px] flex flex-col gap-[18px]">
            {DIFFERENTIATORS.map((d) => (
              <div key={d.n} className="flex gap-[14px]">
                <div className="min-w-5 pt-[2px] font-display text-base text-landing-bronze">
                  {d.n}
                </div>
                <div>
                  <div className="text-[14.5px] font-bold text-landing-ink">
                    {d.t}
                  </div>
                  <div className="mt-1 text-pretty text-[13.5px] leading-[1.55] text-landing-body">
                    {d.b}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* The customer says it better than the copy above does. */}
          <div className="mt-6 border-l-2 border-landing-bronze pl-4">
            <div className="font-display text-[17px] italic leading-[1.4] text-landing-ink">
              &ldquo;{ANCHOR_REVIEW.quote}&rdquo;
            </div>
            <div className="mt-2 text-[12px] text-landing-muted">
              {ANCHOR_REVIEW.who}
            </div>
          </div>
        </div>

        {/* Second before/after */}
        <div className="mt-8 px-6">
          <div className={eyebrow}>{BEFORE_AFTER_PAIRS[1].eyebrow}</div>
          <div className="mt-[10px]">
            <BeforeAfterSlider pair={BEFORE_AFTER_PAIRS[1]} initial={55} />
          </div>
          <div className="mt-[10px] text-[12.5px] leading-[1.5] text-landing-muted">
            {BEFORE_AFTER_PAIRS[1].caption}
          </div>
        </div>

        {/* The rest of the reviews */}
        <div className="px-6 pt-7">
          <div className="flex items-center gap-2">
            <div className="text-sm tracking-[0.1em] text-landing-bronze">
              ★★★★★
            </div>
            <div className="text-[12.5px] text-landing-muted">
              {GOOGLE_RATING} on Google · {REVIEW_COUNT} reviews
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-[14px]">
            {REVIEWS.slice(2).map((r, i) => reviewCard(r, `late-${i}`))}
          </div>
        </div>

        {/* Coverage */}
        <div className="px-6 pt-[26px]">
          <div className={eyebrow}>Where I work</div>
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
          <div className="mt-[10px] text-[12px] leading-[1.5] text-landing-muted">
            Nothing more than an hour from Hillsborough. That is not modesty —
            it is how the job stays clean and the timeline stays honest.
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

        {/* Sticky action bar */}
        <div className="sticky bottom-0 flex gap-[10px] bg-gradient-to-b from-landing-cream/0 via-landing-cream to-landing-cream px-4 pb-[18px] pt-3">
          <a
            href={PHONE_HREF}
            className="flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-xl border border-landing-ink/25 bg-landing-paper text-[14.5px] font-bold text-landing-ink"
          >
            Call Geza
          </a>
          <button
            type="button"
            onClick={start}
            className="min-h-[52px] flex-[1.2] rounded-xl bg-landing-ink font-grotesk text-[14.5px] font-bold text-landing-cream"
          >
            Fit check →
          </button>
        </div>
      </div>
    </div>
  );
}
