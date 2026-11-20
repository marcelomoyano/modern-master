"use client";

import { CalendarClock, Phone } from "lucide-react";
import { BOOKING_COPY, BOOKING_READY, BOOKING_URL } from "@/lib/booking";
import { trackBookingClick } from "@/lib/analytics";

/**
 * The booking panel for the main site.
 *
 * It exists because of a specific failure, not as a feature: most enquiries
 * arrive in the evening, Geza is on a job with tools running, he calls back
 * the next afternoon and by then the homeowner has spoken to somebody else.
 * Two of his four Facebook enquiries in November went quiet exactly that way.
 * A booked time removes the phone tag from both sides.
 *
 * It is deliberately offered *alongside* the phone number rather than instead
 * of it. Someone standing in a bathroom with a leak wants to ring a person
 * now, and that call is the most valuable one the site produces — it is not
 * getting demoted to a calendar link. Booking is for the other visitor, the
 * one reading at ten at night who would otherwise close the tab.
 *
 * Renders nothing at all until BOOKING_URL is filled in. See src/lib/booking.ts.
 */
export function BookCall() {
    if (!BOOKING_READY) return null;

    return (
        <div className="border border-white/10 bg-surface p-6 md:p-8">
            <div className="flex items-start space-x-4">
                <div className="p-2 border border-white/5 bg-background-primary text-accent-GOLD mt-1">
                    <CalendarClock className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="font-serif text-2xl text-text-primary">
                        Book a time to talk
                    </h3>
                    <p className="font-sans text-text-secondary font-light leading-relaxed mt-2">
                        {BOOKING_COPY.why}
                    </p>
                </div>
            </div>

            <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackBookingClick("homepage_contact")}
                className="block w-full bg-accent-GOLD text-background-primary font-sans font-medium px-8 py-4 mt-6 uppercase tracking-widest text-sm text-center hover:bg-white transition-colors duration-300"
            >
                {BOOKING_COPY.cta}
            </a>

            <p className="font-sans text-sm text-text-secondary font-light mt-4">
                {BOOKING_COPY.nature} Geza takes it himself — never a call
                center.
            </p>

            <div className="flex items-center space-x-2 mt-5 pt-5 border-t border-white/5">
                <Phone className="w-4 h-4 text-accent-GOLD shrink-0" />
                <p className="font-sans text-sm text-text-secondary font-light">
                    Would rather talk now?{" "}
                    <a
                        href="tel:+17326949197"
                        className="text-text-primary hover:text-accent-GOLD transition-colors"
                    >
                        (732) 694-9197
                    </a>
                </p>
            </div>
        </div>
    );
}
