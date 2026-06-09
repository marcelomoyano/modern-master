import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export type LocationPageProps = {
    town: string;
    county: string;
    h1: string;
    intro: string;
    paragraphs: string[];
    trustSignals: { label: string; value: string }[];
    photos: { src: string; alt: string }[];
    schemaServiceArea: string;
};

export function LocationPage({
    town,
    h1,
    intro,
    paragraphs,
    trustSignals,
    photos,
    schemaServiceArea,
}: LocationPageProps) {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Home Remodeling",
        provider: { "@id": "https://modern-master.com/#business" },
        areaServed: { "@type": "City", name: schemaServiceArea },
        name: `Home Remodeling in ${town}, NJ`,
        url: `https://modern-master.com/${town.toLowerCase()}`,
    };

    return (
        <>
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <main className="min-h-screen bg-background-primary">
                <div className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-GOLD transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="font-sans text-sm tracking-widest uppercase">Back to Home</span>
                    </Link>

                    <div className="inline-flex items-center gap-2 text-accent-GOLD mb-4">
                        <MapPin className="w-4 h-4" />
                        <span className="font-sans text-xs tracking-[0.3em] uppercase">
                            Serving {town}, NJ
                        </span>
                    </div>

                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6 leading-tight">
                        {h1}
                    </h1>

                    <div className="h-[1px] w-16 bg-accent-GOLD mb-10" />

                    <p className="font-sans text-lg md:text-xl text-text-secondary font-light leading-relaxed max-w-3xl mb-12">
                        {intro}
                    </p>

                    {/* Body copy */}
                    <div className="max-w-3xl space-y-6 mb-16">
                        {paragraphs.map((p, i) => (
                            <p
                                key={i}
                                className="font-sans text-text-secondary leading-relaxed font-light"
                            >
                                {p}
                            </p>
                        ))}
                    </div>

                    {/* Trust signals */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                        {trustSignals.map((s, i) => (
                            <div
                                key={i}
                                className="bg-surface border border-white/5 p-5 text-center"
                            >
                                <div className="font-serif text-2xl md:text-3xl text-accent-GOLD mb-1">
                                    {s.value}
                                </div>
                                <div className="font-sans text-xs tracking-widest uppercase text-text-secondary">
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Photos */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
                        {photos.map((photo, i) => (
                            <div
                                key={i}
                                className="relative aspect-[4/3] overflow-hidden border border-white/5"
                            >
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="bg-surface border border-white/5 p-8 md:p-12 text-center">
                        <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-4">
                            Planning a remodel in {town}?
                        </h2>
                        <p className="font-sans text-text-secondary font-light max-w-xl mx-auto mb-8">
                            Tell us what you have in mind. We&apos;ll set up a free in-home
                            consultation and walk through what&apos;s possible.
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
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
