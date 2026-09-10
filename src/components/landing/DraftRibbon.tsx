/**
 * Shown on the lead page until tracking is configured, and not after.
 *
 * Geza has seen and answered every question about the page, and the photo
 * provenance is confirmed (2 September 2026). The one thing left between this
 * page and paid traffic is measurement: BathroomLead renders this ribbon while
 * TRACKING_READY (src/lib/analytics.ts) is false. Set NEXT_PUBLIC_GA_ID and
 * NEXT_PUBLIC_META_PIXEL_ID in Vercel, redeploy, and it disappears.
 */
export function DraftRibbon({ label }: { label: string }) {
  return (
    <div className="bg-[#7A2E2E] px-4 py-2 text-center font-grotesk text-[11px] leading-snug tracking-[0.08em] text-[#FFE8E2]">
      INTERNAL DRAFT · {label} · no tracking installed, not for paid traffic
    </div>
  );
}
