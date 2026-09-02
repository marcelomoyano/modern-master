"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";

// Real, named, and traceable. These replaced three invented quotes on
// 2 September 2026 — placeholder copy attributed to people who do not exist
// ("Sarah & Mark T.", "Emily R.", "James P."), two of them placed in towns
// Geza has since dropped. This component is not currently rendered anywhere,
// so none of that was ever public; it was one import away from being public,
// which is close enough.
//
// Sources: the first is a written testimonial Geza forwarded with permission,
// named by him on 2 September 2026. The other two are verbatim excerpts from
// the Google Business Profile. Full text for all three, plus the town
// attribution, is in docs/google-reviews.md. Do not add a fourth from memory.
const TESTIMONIALS = [
    {
        text: "Last year, I designed our master bathroom myself, and Geza brought my vision to life with incredible craftsmanship and attention to detail. We were so impressed that we had him return this year to complete the labor for my other personally designed bathrooms.",
        author: "Robin Mandel",
        location: "Monroe Township, NJ",
    },
    {
        text: "Geza Papp did an excellent job of giving our primary bathroom a beautiful spa-like feel with expertly installed tiles and glass door in the shower. His workmanship and attention to detail are top notch and we will definitely use him again for future projects.",
        author: "Sally Williams",
        location: "Hillsborough, NJ",
    },
    {
        text: "Quality and coordination excellent. Used them for 3 projects. Trust them for all of our renovations. There is not much he hasn't upgraded in our townhouse.",
        author: "Mark Berk",
        location: "Franklin Park, NJ",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Testimonials() {
    return (
        <section id="reviews" className="py-24 bg-background-secondary relative scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-serif text-4xl md:text-5xl text-text-primary mb-4"
                    >
                        What Homeowners Say
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "64px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="h-[1px] bg-accent-GOLD mx-auto mb-6"
                    />
                </div>

                {/* Testimonials Row / Carousel mapping */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {TESTIMONIALS.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-surface p-8 border border-white/5 relative group hover:border-accent-GOLD/20 transition-colors duration-500"
                        >
                            <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-accent-GOLD/10 transition-colors duration-500" />

                            <div className="flex space-x-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-accent-GOLD fill-accent-GOLD" />
                                ))}
                            </div>

                            <p className="font-sans text-text-secondary leading-relaxed font-light mb-8 italic min-h-[100px]">
                                &quot;{testimonial.text}&quot;
                            </p>

                            <div>
                                <p className="font-serif text-text-primary text-lg">
                                    {testimonial.author}
                                </p>
                                <p className="font-sans text-sm tracking-widest uppercase text-accent-GOLD mt-1">
                                    {testimonial.location}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Leave a Review CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-16 text-center"
                >
                    <p className="font-sans text-text-secondary font-light mb-6">
                        Worked with us? We&apos;d love to hear your story.
                    </p>
                    <Link
                        href="/review"
                        className="group inline-flex items-center gap-3 border border-accent-GOLD text-accent-GOLD font-sans font-medium px-8 py-4 uppercase tracking-widest text-sm hover:bg-accent-GOLD hover:text-background-primary transition-colors duration-300"
                    >
                        <Star className="w-4 h-4 fill-current" />
                        <span>Leave a Review on Google</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
