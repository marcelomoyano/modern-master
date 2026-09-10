/**
 * Every measurement event the site sends goes through this file.
 *
 * Nothing here does anything until the two IDs exist. They come from
 * accounts that belong to Geza, not to us — a GA4 property and a Meta pixel
 * in his own Business Portfolio — and are set in Vercel as environment
 * variables. With neither set, every function below is a no-op, the scripts
 * never load, and the lead page keeps its "not for paid traffic" ribbon.
 *
 * Never send personal details to either platform: no name, phone, email or
 * address. Those go to Geza's inbox through Web3Forms and nowhere else.
 */

const GA_PATTERN = /^G-[A-Z0-9]{4,}$/;
const PIXEL_PATTERN = /^\d{6,20}$/;

// Validated because both IDs are interpolated into inline scripts in
// app/layout.tsx. A mistyped value in Vercel should switch tracking off,
// not inject whatever was pasted.
const rawGa = process.env.NEXT_PUBLIC_GA_ID?.trim();
const rawPixel = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim();

export const GA_ID = rawGa && GA_PATTERN.test(rawGa) ? rawGa : undefined;
export const META_PIXEL_ID =
  rawPixel && PIXEL_PATTERN.test(rawPixel) ? rawPixel : undefined;

/**
 * True once both are configured. The lead page reads this to decide whether
 * it is ready for paid traffic: an ad campaign with no conversion signal
 * spends Geza's money with nothing to optimise against.
 */
export const TRACKING_READY = Boolean(GA_ID && META_PIXEL_ID);

type Params = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

function ga(event: string, params: Params = {}) {
  if (typeof window !== "undefined") window.gtag?.("event", event, params);
}

function meta(kind: "track" | "trackCustom", event: string, params?: Params) {
  if (typeof window !== "undefined") window.fbq?.(kind, event, params);
}

/** First tap on "Start the fit check". Measures how many start vs finish. */
export function trackFitCheckStart() {
  ga("form_start", { form_name: "bathroom_fit_check" });
  meta("trackCustom", "FitCheckStart");
}

/**
 * A form was sent and Web3Forms accepted it.
 *
 * Only a qualified enquiry is reported to Meta as a standard "Lead". An
 * enquiry below Geza's floor is reported under its own name instead. Meta
 * optimises a campaign towards whatever event it is told is a lead, and he can
 * take about 24 bathrooms a year — teaching the algorithm to find more $4,000
 * enquiries would fill his phone with calls he has to decline. GA4 still
 * counts both, with `qualified` on the event, so nothing is hidden.
 */
export function trackLead({
  form,
  qualified,
  scope,
  budget,
}: {
  form: "bathroom_fit_check" | "homepage_contact";
  qualified: boolean;
  scope?: string;
  budget?: string;
}) {
  ga("generate_lead", {
    form_name: form,
    qualified,
    ...(scope ? { project_scope: scope } : {}),
    ...(budget ? { budget_band: budget } : {}),
  });
  if (qualified) {
    meta("track", "Lead", {
      content_name: form,
      ...(scope ? { content_category: scope } : {}),
    });
  } else {
    meta("trackCustom", "LeadUnderBudget", { content_name: form });
  }
}

/**
 * A tap on a phone, text or email link, anywhere on the site. For a
 * contractor most enquiries are a phone call, and a call never touches a form.
 */
export function trackContactClick(method: "phone" | "sms" | "email") {
  const page = typeof window !== "undefined" ? window.location.pathname : "";
  ga("contact_click", { method, page_path: page });
  meta("track", "Contact", { content_name: method, content_category: page });
}

/** A page view after a client-side navigation. The first one fires on load. */
export function trackPageView() {
  meta("track", "PageView");
}

/**
 * Where this visitor came from, as one line for the lead email — so Geza can
 * see which ad produced an enquiry without opening an analytics dashboard.
 * Reads the UTM tags an ad link carries; Meta adds `fbclid` to every ad click.
 */
export function leadSource(): string {
  if (typeof window === "undefined") return "unknown";
  const q = new URLSearchParams(window.location.search);
  const parts = ["utm_source", "utm_medium", "utm_campaign", "utm_content"]
    .map((k) => q.get(k))
    .filter((v): v is string => Boolean(v));
  if (parts.length) return parts.join(" / ");
  if (q.has("fbclid")) return "Facebook (ad click, no campaign tags)";
  if (q.has("gclid")) return "Google Ads";
  if (document.referrer) {
    try {
      return `Referred by ${new URL(document.referrer).hostname}`;
    } catch {
      /* fall through */
    }
  }
  return "Direct or unknown";
}
