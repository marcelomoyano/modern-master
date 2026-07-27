import Link from "next/link";

/**
 * Internal-only banner. These pages carry pricing, capacity and testimonial
 * copy that Geza has not signed off on yet (see the UNVERIFIED block in
 * copy.ts), so nobody should mistake a preview link for a live page.
 *
 * Delete this component and its two usages when the copy is confirmed.
 */
export function DraftRibbon({ label }: { label: string }) {
  return (
    <div className="bg-[#7A2E2E] px-4 py-2 text-center font-grotesk text-[11px] leading-snug tracking-[0.08em] text-[#FFE8E2]">
      INTERNAL DRAFT · {label} · pricing, review quotes &amp; credentials pending
      sign-off ·{" "}
      <Link href="/landing" className="underline underline-offset-2">
        both options
      </Link>
    </div>
  );
}
