# Turning booking on

**Status:** the site is built and deployed-ready, but booking is **off**. It
switches on when one link is pasted into `src/lib/booking.ts`. Until then every
booking button is simply not rendered and the site behaves exactly as it does
today ("I'll call within one business day"). Nothing is half-shipped.

---

## Why Google Calendar and not a booking service

`modern-master.com` has Google MX records, an SPF include for `_spf.google.com`
and a DKIM key on the `google._domainkey` selector. That combination means
`geza@modern-master.com` is a **Google Workspace** account, not a free Gmail
with a custom domain — so Calendar **appointment schedules** are already
included.

That matters for three reasons, all of them about Geza rather than about us:

- It costs nothing on top of what he already pays.
- It syncs to the phone already in his pocket. No new app to install, and we
  already learned with the Business Suite app that "he'll install it" is not
  free.
- He can block out a day from that phone while standing in someone's bathroom.

A paid booking service would do the same job and give him a fourth login.

## The step only Geza's account can do

There is no API for creating an appointment schedule. It has to be made once in
the Google Calendar interface, signed in as `geza@modern-master.com`.

**Calendar → Create → Appointment schedule.** The settings that matter:

| Setting | Value | Why |
|---|---|---|
| Title | `Bathroom consultation — phone call` | The homeowner sees this. "Phone call" stops them expecting a visit. |
| Duration | **15 minutes** | Long enough to hear scope and budget, short enough that a bad fit costs him a quarter of an hour instead of a drive. |
| Availability | Evenings and one weekend window | Homeowners research at night. Keep it off his working hours or he will be taking calls over a tile saw. |
| Buffer time | 15 min after | Back-to-back calls while he's on a job site is how he ends up late for both. |
| Max bookings per day | **3** | He builds two bathrooms a month. The calendar must not outrun what he can sell. |
| Minimum notice | 12 hours | Stops someone booking a slot that starts while he's driving. |
| Booking window | 3 weeks out | Beyond that people forget they booked. |

**Booking form — add these questions.** This is the part that makes it a
qualifying tool rather than a calendar:

1. *Which town is the bathroom in?* (short answer)
2. *What are we building?* — same five options as the fit check
3. *What budget have you set aside?* — **the same six bands as the Meta form
   and the website**, from `BUDGET_OPTIONS` in
   `src/components/landing/copy.ts`. Identical wording in all three places, so
   an enquiry reads the same however it arrived.
4. *Your phone number* (required — the call goes out, it doesn't come in)

Then copy the share link. It looks like `https://calendar.app.google/XXXXXXXX`.

## Switching it on

1. Paste the link into `raw` in `src/lib/booking.ts`.
2. Deploy. That is the whole change — the landing page, the homepage and the
   tracking all read from that one file.

## Then, outside the codebase

- **Google Business Profile → Bookings** — add the same link. That puts a
  "Book" button directly in his map listing, which is where the 16 free calls
  in the last six months came from. Highest-leverage single step here.
- **Google Ads**, when it starts: the booking page is a second conversion
  alongside the call, so a campaign has something to optimise towards at 10pm
  when nobody answers a phone.

## What to watch after it's live

GA4 gets a `booking_click` event and Meta gets a `Schedule` event, both tagged
with where the tap came from. Compare taps against bookings that actually land
in his calendar: **many taps and few bookings means the calendar is showing no
usable times**, which is a configuration problem and fixable, not a demand
problem. That gap is invisible without the event, which is why it's there.

## The honest risk

Booking moves the failure from "he didn't answer" to "he didn't keep his
calendar current". That is a better failure — it's visible, and it's his to
fix — but it is not no failure. If he stops maintaining availability, the site
starts handing out times he can't make, which is worse than the callback promise
it replaced. Worth one check-in a fortnight for the first couple of months.
