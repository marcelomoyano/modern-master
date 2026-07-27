"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import type { BeforeAfterPair } from "./copy";

interface BeforeAfterSliderProps {
  pair: BeforeAfterPair;
  /** Tailwind height class, e.g. "h-[300px]" or "h-[520px]". */
  heightClass?: string;
  /** Rounded corners — the hero variant in Option B runs square. */
  roundedClass?: string;
  /** Where the handle starts, 0–100. */
  initial?: number;
  /** Chip styling differs on cream vs. dark backgrounds. */
  tone?: "light" | "dark";
  /** Load eagerly when this is the hero image. */
  priority?: boolean;
  /** Sizes hint for next/image. */
  sizes?: string;
  /**
   * BEFORE/AFTER corner chips. Off for the full-bleed hero, where they sit
   * under the scrim and collide with the masthead — the headline says "drag
   * it" there, so the labels aren't carrying the explanation.
   */
  showChips?: boolean;
}

/**
 * Drag-to-reveal before/after comparison.
 *
 * The visible handle is a decorative overlay; the actual control is a
 * full-bleed transparent range input on top. That gets pointer drag, touch
 * drag, arrow keys, Home/End and a screen-reader-announced value for free,
 * which the mockup's raw pointer handlers did not have.
 */
export function BeforeAfterSlider({
  pair,
  heightClass = "h-[300px]",
  roundedClass = "rounded-[14px]",
  initial = 50,
  tone = "light",
  priority = false,
  sizes = "(max-width: 430px) 100vw, 430px",
  showChips = true,
}: BeforeAfterSliderProps) {
  const [pos, setPos] = useState(initial);
  const [dragging, setDragging] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

  const chip =
    tone === "dark"
      ? "bg-black/60 text-landing-cream"
      : "bg-landing-ink/70 text-landing-cream";

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPos(Number(e.target.value));
  }, []);

  return (
    <div
      ref={frameRef}
      className={`relative w-full overflow-hidden select-none ${heightClass} ${roundedClass}`}
    >
      {/* AFTER sits underneath and is revealed as the handle moves left. */}
      <div className="absolute inset-0">
        <Image
          src={pair.after}
          alt={pair.afterAlt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
          style={{ objectPosition: pair.afterPosition ?? "center" }}
        />
      </div>

      {/* BEFORE is clipped from the right edge inward. */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - pos}% 0 0)`,
          transition: dragging ? "none" : "clip-path 220ms ease-out",
        }}
      >
        <Image
          src={pair.before}
          alt={pair.beforeAlt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
          style={{ objectPosition: pair.beforePosition ?? "center" }}
        />
      </div>

      {/* Divider + grip. Decorative only — the range input below is the control. */}
      <div
        className="pointer-events-none absolute top-0 bottom-0 w-[2px] bg-[#FFFDF9] shadow-[0_0_14px_rgba(0,0,0,0.45)]"
        style={{
          left: `${pos}%`,
          transition: dragging ? "none" : "left 220ms ease-out",
        }}
      />
      <div
        className="pointer-events-none absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FFFDF9] text-[13px] font-bold text-landing-ink shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
        style={{
          left: `${pos}%`,
          transition: dragging ? "none" : "left 220ms ease-out",
        }}
      >
        ↔
      </div>

      {showChips && (
        <>
          <div
            className={`pointer-events-none absolute left-3 top-3 rounded-[5px] px-[9px] py-[5px] text-[10.5px] tracking-[0.1em] ${chip}`}
          >
            BEFORE
          </div>
          <div
            className={`pointer-events-none absolute right-3 top-3 rounded-[5px] px-[9px] py-[5px] text-[10.5px] tracking-[0.1em] ${chip}`}
          >
            AFTER
          </div>
        </>
      )}

      <input
        type="range"
        min={0}
        max={100}
        step={0.5}
        value={pos}
        onChange={handleChange}
        onPointerDown={() => setDragging(true)}
        onPointerUp={() => setDragging(false)}
        onPointerCancel={() => setDragging(false)}
        onKeyDown={() => setDragging(false)}
        aria-label={`Reveal before and after: ${pair.eyebrow}. Slide left for the finished room, right for the original.`}
        aria-valuetext={`${Math.round(pos)}% before, ${Math.round(100 - pos)}% after`}
        // Zero-width thumbs so the track spans the full frame — otherwise the
        // native thumb inset stops the reveal short of both edges.
        // touch-action: pan-y keeps vertical page scrolling alive over the
        // image while horizontal drags still reach the slider.
        className="absolute inset-0 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0 touch-pan-y [&::-moz-range-thumb]:h-full [&::-moz-range-thumb]:w-0 [&::-moz-range-thumb]:border-0 [&::-webkit-slider-thumb]:h-full [&::-webkit-slider-thumb]:w-0 [&::-webkit-slider-thumb]:appearance-none"
      />
    </div>
  );
}
