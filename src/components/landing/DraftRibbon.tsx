/**
 * Internal-only banner.
 *
 * The reviews, towns, rating and capacity on this page are all real as of
 * 27 August 2026. What is still missing is Geza's sign-off on the page itself,
 * the provenance of the two before/after photos, and any analytics at all —
 * there is no GA4 tag and no Meta pixel in production, so this page must not
 * take paid traffic yet.
 *
 * Delete this component and its usage when those are cleared.
 */
export function DraftRibbon({ label }: { label: string }) {
  return (
    <div className="bg-[#7A2E2E] px-4 py-2 text-center font-grotesk text-[11px] leading-snug tracking-[0.08em] text-[#FFE8E2]">
      INTERNAL DRAFT · {label} · no tracking installed, not for paid traffic
    </div>
  );
}
