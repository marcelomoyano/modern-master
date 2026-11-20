/**
 * The booking link, and the single switch that turns booking on site-wide.
 *
 * WHERE THE CALENDAR LIVES
 * Booking runs on Geza's own Google Calendar, not on a new service. The domain
 * resolves to Google mail (Google MX, an SPF include for _spf.google.com and a
 * DKIM key on the google._domainkey selector), which means
 * geza@modern-master.com is a Google Workspace account and already includes
 * Calendar appointment schedules. Three reasons that is the right answer here:
 * it costs nothing on top of what he already pays, it syncs to the phone
 * already in his pocket, and he can close out a day from that phone while
 * standing in someone's bathroom.
 *
 * WHY THE URL IS PASTED IN BY HAND
 * An appointment schedule cannot be created through an API. It is made once in
 * the Google Calendar interface, signed in as geza@modern-master.com, and it
 * hands back a share link of the form https://calendar.app.google/<id>. That
 * link is the only thing missing below.
 *
 * WHAT HAPPENS UNTIL THEN
 * BOOKING_URL is empty, BOOKING_READY is false, and every booking button in
 * the app stops rendering. The site keeps exactly the behaviour it has today —
 * "I'll call you within one business day" — rather than shipping a button that
 * goes nowhere. No placeholder URL ships, which is the same rule the rest of
 * the copy follows.
 *
 * TO TURN IT ON
 * Paste the calendar.app.google link into BOOKING_URL and deploy. Nothing else
 * needs touching: the landing page, the homepage and the tracking all read
 * from here.
 */

/**
 * A Google appointment schedule share link. Validated rather than trusted,
 * because an empty string and a mistyped string should both switch booking
 * off, not render a dead button for a homeowner to tap.
 */
const BOOKING_PATTERN = /^https:\/\/calendar\.app\.google\/[A-Za-z0-9_-]{6,}$/;

const raw = "";

export const BOOKING_URL = BOOKING_PATTERN.test(raw) ? raw : "";

/** Read by every component that offers a booking button. */
export const BOOKING_READY = BOOKING_URL.length > 0;

/**
 * A phone call, not a home visit, and the copy says so everywhere.
 *
 * Geza can build about two bathrooms a month and he drives to every quote. A
 * booking page that handed out site visits would fill his week with driving
 * for jobs he would have declined on the phone in four minutes. So the slot is
 * short, it is a call, and the home visit stays where it belongs: after he has
 * heard the budget and the scope and decided the job is worth the trip.
 */
export const CONSULT_MINUTES = 15;

export const BOOKING_COPY = {
  /** Button label. Says the length, so nobody expects an afternoon. */
  cta: `Book a ${CONSULT_MINUTES}-minute call`,
  /** The one line that prevents the main misunderstanding. */
  nature: `A ${CONSULT_MINUTES}-minute phone call, not a home visit.`,
  /** Why booking beats waiting for a callback, from the homeowner's side. */
  why: "Pick a time that suits you and Geza calls you then — no phone tag, no waiting on a callback while he's on site.",
} as const;
