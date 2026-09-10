import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Phone, Mail, MapPin, Check } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
    GOOGLE_RATING,
    REVIEW_COUNT,
    SEALS,
} from "@/components/landing/copy";

/**
 * A review or testimonial, quoted verbatim. Every one of these must trace to
 * docs/google-reviews.md — the Google Business Profile, or a written
 * testimonial Geza forwarded with permission. Never paraphrase one, and never
 * attribute a review to a town it did not come from.
 */
export type TownReview = {
    quote: string;
    name: string;
    source: "Google review" | "Written testimonial";
};

/**
 * A before/after pair with a *confirmed* town. Only pass these to the page of
 * the town the job was actually in — a photo captioned with the wrong town is
 * a fabricated claim, however good the photo is.
 */
export type TownBeforeAfter = {
    before: string;
    after: string;
    beforeAlt: string;
    afterAlt: string;
    beforePosition?: string;
    caption: string;
};

export type LocationPageProps = {
    town: string;
    /** URL path segment. Explicit, because "Monmouth Junction" is not a slug. */
    slug: string;
    h1: string;
    subhead: string;
    metaDescription: string;
    heroImage: string;
    /**
     * Describe the photo. Only name the town if the job in the photo was
     * actually there — most hero photos are not from the town of the page.
     */
    heroAlt: string;
    bodyImage: string;
    bodyImageAlt: string;
    paragraphs: string[];
    services: string[];
    /** Other towns in the service area. Linked when they have a page. */
    nearby: { name: string; href?: string }[];
    photos: { src: string; alt: string }[];
    schemaImage: string;
    /** Real reviews from this town. The section is omitted when empty. */
    reviews?: TownReview[];
    /** Confirmed local jobs. Replaces the generic photo strip when present. */
    beforeAfter?: TownBeforeAfter[];
};

const SITE_URL = "https://modern-master.com";

export function LocationPage({
    town,
    slug,
    h1,
    subhead,
    metaDescription,
    heroImage,
    heroAlt,
    bodyImage,
    bodyImageAlt,
    paragraphs,
    services,
    nearby,
    photos,
    schemaImage,
    reviews = [],
    beforeAfter = [],
}: LocationPageProps) {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: `${town}, NJ`, item: `${SITE_URL}/${slug}` },
        ],
    };

    // No Review or AggregateRating markup, deliberately. Google does not show
    // review stars for a business marking up reviews of itself, and asks that
    // reviews collected on another site (these are from Google Business
    // Profile) not be re-marked-up at all. The reviews render as plain text.
    const pageSchema = {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "@id": `${SITE_URL}/${slug}#business`,
        name: `Modern Master — Remodeling in ${town}, NJ`,
        description: metaDescription,
        url: `${SITE_URL}/${slug}`,
        telephone: "+1-732-694-9197",
        email: "geza@modern-master.com",
        image: `${SITE_URL}${schemaImage}`,
        logo: `${SITE_URL}/logo.png`,
        priceRange: "$$$",
        address: {
            "@type": "PostalAddress",
            streetAddress: "69 Nostrand Rd",
            addressLocality: "Hillsborough",
            addressRegion: "NJ",
            postalCode: "08844",
            addressCountry: "US",
        },
        areaServed: { "@type": "City", name: town, addressRegion: "NJ" },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "18:00",
            },
        ],
    };

    return (
        <>
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <main className="min-h-screen bg-background-primary">
                {/* Hero */}
                <section className="relative h-[80vh] min-h-[600px] w-full flex items-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={heroImage}
                            alt={heroAlt}
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-background-primary/70 to-background-primary/40" />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-GOLD transition-colors mb-12"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span className="font-sans text-xs tracking-[0.3em] uppercase">Back to Home</span>
                        </Link>

                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 text-accent-GOLD mb-6">
                                <MapPin className="w-4 h-4" />
                                <span className="font-sans text-xs tracking-[0.4em] uppercase">
                                    Serving {town}, NJ
                                </span>
                            </div>

                            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-text-primary mb-6 leading-tight">
                                {h1}
                            </h1>

                            <div className="h-[1px] w-16 bg-accent-GOLD mb-8" />

                            <p className="font-sans text-lg md:text-xl text-text-secondary font-light leading-relaxed mb-10 max-w-2xl">
                                {subhead}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#consult"
                                    className="inline-block bg-accent-GOLD text-background-primary font-sans font-medium px-8 py-4 uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300 text-center"
                                >
                                    Schedule Free Consultation
                                </a>
                                <a
                                    href="tel:+17326949197"
                                    className="inline-flex items-center justify-center gap-3 border border-accent-GOLD text-accent-GOLD font-sans font-medium px-8 py-4 uppercase tracking-widest text-sm hover:bg-accent-GOLD hover:text-background-primary transition-colors duration-300"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>(732) 694-9197</span>
                                </a>
                            </div>

                            <p className="mt-8 font-sans text-xs tracking-[0.2em] uppercase text-text-secondary">
                                {SEALS.join("  ·  ")}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Body — narrative section, About.tsx style */}
                <section className="py-24 bg-background-secondary relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-6 leading-tight">
                                    Built for {town} Homes <br />
                                    <span className="text-accent-GOLD italic">By the Craftsman Himself</span>
                                </h2>

                                <div className="h-[1px] w-16 bg-accent-GOLD mb-8" />

                                <div className="space-y-6 font-sans text-text-secondary leading-relaxed font-light text-lg">
                                    {paragraphs.map((p, i) => (
                                        <p key={i}>{p}</p>
                                    ))}

                                    <blockquote className="border-l-2 border-accent-GOLD pl-6 mt-8 py-2">
                                        <p className="font-serif text-xl md:text-2xl text-text-primary italic">
                                            &quot;Your home deserves a craftsman, not a contractor.&quot;
                                        </p>
                                        <footer className="mt-4 font-sans text-sm tracking-widest uppercase text-accent-GOLD">
                                            — Geza, Founder
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>

                            <div className="relative h-[600px] w-full hidden lg:block">
                                <div className="absolute inset-0 border border-white/10 translate-x-4 translate-y-4" />
                                <div className="absolute inset-0 z-10">
                                    <Image
                                        src={bodyImage}
                                        alt={bodyImageAlt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-background-primary/10 mix-blend-multiply" />
                                </div>
                                <div className="absolute -bottom-6 -left-6 z-20 w-24 h-24 border-b-2 border-l-2 border-accent-GOLD" />
                                <div className="absolute -top-6 -right-6 z-20 w-24 h-24 border-t-2 border-r-2 border-accent-GOLD opacity-50" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services offered in this town */}
                <section className="py-24 bg-background-primary relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-4">
                                Services Offered in <span className="italic text-accent-GOLD">{town}</span>
                            </h2>
                            <div className="h-[1px] w-16 bg-accent-GOLD mx-auto" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto gap-4">
                            {services.map((s, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-4 bg-surface border border-white/5 p-6 hover:border-accent-GOLD/30 transition-colors"
                                >
                                    <Check className="w-5 h-5 text-accent-GOLD flex-shrink-0 mt-0.5" />
                                    <span className="font-sans text-text-primary">{s}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Reviews from this town — the proof that makes a town page more than a template */}
                {reviews.length > 0 && (
                    <section className="py-24 bg-background-secondary relative">
                        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-4">
                                    What {town} Homeowners <span className="italic text-accent-GOLD">Say</span>
                                </h2>
                                <div className="h-[1px] w-16 bg-accent-GOLD mx-auto mb-6" />
                                <p className="font-sans text-text-secondary font-light">
                                    In their own words. Modern Master holds {GOOGLE_RATING} stars
                                    across {REVIEW_COUNT} Google reviews.
                                </p>
                            </div>

                            <div className="flex flex-col gap-6">
                                {reviews.map((r) => (
                                    <figure
                                        key={r.name}
                                        className="bg-surface border border-white/5 p-8 md:p-10"
                                    >
                                        <blockquote className="font-serif text-lg md:text-xl text-text-primary italic leading-relaxed">
                                            &ldquo;{r.quote}&rdquo;
                                        </blockquote>
                                        <figcaption className="mt-6 font-sans text-xs tracking-[0.3em] uppercase text-accent-GOLD">
                                            {r.name} &middot; {town}
                                            <span className="text-text-secondary"> &middot; {r.source}</span>
                                        </figcaption>
                                    </figure>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Photos: confirmed local before/afters when we have them, a general selection when we don't */}
                <section className={`py-24 relative ${reviews.length > 0 ? "bg-background-primary" : "bg-background-secondary"}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-4">
                                {beforeAfter.length > 0 ? (
                                    <>
                                        Finished in <span className="italic text-accent-GOLD">{town}</span>
                                    </>
                                ) : (
                                    <>
                                        Recent <span className="italic text-accent-GOLD">Work</span>
                                    </>
                                )}
                            </h2>
                            <div className="h-[1px] w-16 bg-accent-GOLD mx-auto mb-6" />
                            <p className="font-sans text-text-secondary font-light">
                                {beforeAfter.length > 0
                                    ? `Before and after, from jobs in ${town}.`
                                    : "A selection of completed projects from across our service area."}
                            </p>
                        </div>

                        {beforeAfter.map((pair) => (
                            <div key={pair.after} className="mb-16">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {(
                                        [
                                            ["Before", pair.before, pair.beforeAlt, pair.beforePosition],
                                            ["After", pair.after, pair.afterAlt, undefined],
                                        ] as const
                                    ).map(([label, src, alt, position]) => (
                                        <div
                                            key={label}
                                            className="relative aspect-[4/5] overflow-hidden border border-white/5"
                                        >
                                            <Image
                                                src={src}
                                                alt={alt}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="object-cover"
                                                style={position ? { objectPosition: position } : undefined}
                                            />
                                            <span className="absolute top-4 left-4 bg-background-primary/80 px-3 py-1 font-sans text-xs tracking-[0.3em] uppercase text-accent-GOLD">
                                                {label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-4 font-sans text-text-secondary font-light">
                                    {pair.caption}
                                </p>
                            </div>
                        ))}

                        {beforeAfter.length === 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                            {photos.map((photo, i) => (
                                <div
                                    key={i}
                                    className="relative aspect-[4/3] overflow-hidden border border-white/5 group"
                                >
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                        )}

                        <div className="text-center">
                            <Link
                                href="/portfolio"
                                className="inline-flex items-center gap-3 border border-accent-GOLD text-accent-GOLD font-sans font-medium px-8 py-4 uppercase tracking-widest text-sm hover:bg-accent-GOLD hover:text-background-primary transition-colors duration-300"
                            >
                                <span>View Full Portfolio</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section
                    id="consult"
                    className={`py-24 relative scroll-mt-24 ${reviews.length > 0 ? "bg-background-secondary" : "bg-background-primary"}`}
                >
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-surface border border-white/5 p-10 md:p-16 text-center relative">
                            <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-accent-GOLD opacity-50" />
                            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-accent-GOLD" />

                            <p className="font-sans text-xs tracking-[0.4em] uppercase text-accent-GOLD mb-6">
                                Ready to Begin
                            </p>
                            <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-6 leading-tight">
                                Transform Your {town} Home
                            </h2>
                            <p className="font-sans text-text-secondary font-light leading-relaxed mb-10 max-w-xl mx-auto">
                                Schedule your free consultation today. We&apos;ll walk through your space
                                together — no pressure, no salespeople, just an honest conversation about
                                what&apos;s possible.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="tel:+17326949197"
                                    className="inline-flex items-center justify-center gap-3 bg-accent-GOLD text-background-primary font-sans font-medium px-8 py-4 uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>(732) 694-9197</span>
                                </a>
                                <a
                                    href="mailto:geza@modern-master.com?subject=Consultation%20Request"
                                    className="inline-flex items-center justify-center gap-3 border border-accent-GOLD text-accent-GOLD font-sans font-medium px-8 py-4 uppercase tracking-widest text-sm hover:bg-accent-GOLD hover:text-background-primary transition-colors duration-300"
                                >
                                    <Mail className="w-4 h-4" />
                                    <span>Email Geza</span>
                                </a>
                            </div>

                            <p className="font-sans text-xs text-text-secondary/60 mt-10 tracking-wider">
                                Also working in{" "}
                                {nearby.map((t, i) => (
                                    <span key={t.name}>
                                        {t.href ? (
                                            <Link
                                                href={t.href}
                                                className="underline decoration-accent-GOLD/40 underline-offset-4 hover:text-accent-GOLD transition-colors"
                                            >
                                                {t.name}
                                            </Link>
                                        ) : (
                                            t.name
                                        )}
                                        {i < nearby.length - 2 ? ", " : i === nearby.length - 2 ? " and " : "."}
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
