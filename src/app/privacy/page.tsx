import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TRACKING_READY } from "@/lib/analytics";

/**
 * Required before a single Meta ad runs: Meta's Business Tools terms say a site
 * using their pixel has to tell visitors so. Google Analytics asks the same.
 *
 * Two things keep this page honest rather than decorative:
 *
 * 1. The tracking section renders only when TRACKING_READY is true. Until the
 *    two IDs are set in Vercel, neither tool loads, and a notice describing
 *    cookies that do not exist is just as wrong as no notice at all. Set the
 *    IDs and this section appears with them.
 * 2. Everything below was checked against the code that actually runs:
 *    src/components/Contact.tsx, src/components/landing/BathroomLead.tsx and
 *    src/lib/analytics.ts. If what we collect or send ever changes, this page
 *    changes in the same commit, and LAST_UPDATED moves.
 *
 * Deliberately short. Geza is a remodeler working inside an hour of his own
 * house, not an internet company, and the notice should read like it.
 */

const LAST_UPDATED = "8 October 2026";

const linkClass =
  "text-accent-GOLD underline underline-offset-4 hover:text-white transition-colors";

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background-primary pt-32 pb-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-4">
            Privacy <span className="italic text-accent-GOLD">Notice</span>
          </h1>
          <div className="h-[1px] w-16 bg-accent-GOLD mb-6" />
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-text-secondary mb-12">
            Last updated {LAST_UPDATED}
          </p>

          <div className="space-y-10 font-sans text-text-secondary font-light leading-relaxed">
            <p>
              Modern Master Remodeling LLC runs this website. We are a bathroom
              remodeling business in Hillsborough, New Jersey, and we work within
              about an hour of here. This page says what the site collects when
              you get in touch, what we do with it, and how to have it deleted.
            </p>

            <section>
              <h2 className="font-serif text-2xl text-text-primary mb-4">
                When you contact us
              </h2>
              <p className="mb-4">
                The contact form asks for your name, phone number, email address,
                the kind of project and your message. The bathroom fit check asks
                for your first name, mobile number, the kind of project, the
                budget range you pick, your town, and when you would like to
                start. With either, we also record how you reached the site — an
                ad, a link, or typing in the address — so we can tell which
                advertising is worth paying for.
              </p>
              <p>
                A service called Web3Forms delivers the form straight to our
                business email. We use what you send to reply to you about your
                project, and for nothing else. We do not sell it, rent it, or
                pass it to anyone for their own marketing. Call, text or email us
                directly and we get your number or address the same way any
                business would.
              </p>
            </section>

            {TRACKING_READY && (
              <section>
                <h2 className="font-serif text-2xl text-text-primary mb-4">
                  Advertising and measurement
                </h2>
                <p className="mb-4">
                  This site uses Google Analytics, which shows us how people use
                  the site, and the Meta Pixel, which tells us whether our
                  Facebook and Instagram ads lead to enquiries. Both set cookies
                  or similar technology in your browser, and both record actions
                  such as viewing a page, starting the fit check, sending a form,
                  and tapping our phone, text or email links.
                </p>
                <p className="mb-4">
                  When you send a form we tell Google the kind of project and the
                  budget range you chose, and we tell Meta the kind of project.{" "}
                  <strong className="font-normal text-text-primary">
                    We never send your name, phone number, email address or
                    street address to Google or Meta.
                  </strong>{" "}
                  Those stay in our inbox.
                </p>
                <p>
                  Google and Meta collect things like your IP address, browser
                  and device under their own policies —{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    className={linkClass}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.facebook.com/privacy/policy/"
                    className={linkClass}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Meta
                  </a>
                  .
                </p>
              </section>
            )}

            <section>
              <h2 className="font-serif text-2xl text-text-primary mb-4">
                Things on the page from other companies
              </h2>
              <p>
                Our contact section shows a Google Map, and every page shows our
                Better Business Bureau seal. Both load from those companies and
                may set cookies of their own when they do. The site is hosted by
                Vercel, which keeps the usual technical logs — IP addresses and
                which pages were requested — to run and protect it.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-text-primary mb-4">
                Your choices
              </h2>
              <p>
                You can block or delete cookies in your browser settings and the
                site will still work.{" "}
                {TRACKING_READY && (
                  <>
                    You can switch off Google Analytics everywhere with their{" "}
                    <a
                      href="https://tools.google.com/dlpage/gaoptout"
                      className={linkClass}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      opt-out add-on
                    </a>
                    , and control the ads you see in your{" "}
                    <a
                      href="https://www.facebook.com/adpreferences"
                      className={linkClass}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Meta ad preferences
                    </a>
                    .{" "}
                  </>
                )}
                To have an enquiry you sent us deleted, just ask — the details
                are below.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-text-primary mb-4">
                How long we keep it
              </h2>
              <p>
                We keep enquiries in our email while we discuss, quote and carry
                out the work, and afterwards as ordinary business records. If we
                change how any of this works, we will change this page and the
                date at the top.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-text-primary mb-4">
                Contact
              </h2>
              <address className="not-italic space-y-1">
                <div className="text-text-primary">
                  Modern Master Remodeling LLC
                </div>
                <div>69 Nostrand Rd, Hillsborough, NJ 08844</div>
                <div>
                  <a href="tel:+17326949197" className={linkClass}>
                    (732) 694-9197
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:geza@modern-master.com"
                    className={linkClass}
                  >
                    geza@modern-master.com
                  </a>
                </div>
              </address>
            </section>

            <div className="pt-4">
              <Link href="/" className={linkClass}>
                Back to the site
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
