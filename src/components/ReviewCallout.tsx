"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function ReviewCallout() {
    return (
        <section className="bg-background-secondary border-t border-white/5 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center md:text-left"
                >
                    <div className="flex items-center gap-2">
                        {[0, 1, 2, 3, 4].map((i) => (
                            <Star
                                key={i}
                                className="w-4 h-4 text-accent-GOLD"
                                fill="currentColor"
                            />
                        ))}
                    </div>

                    <p className="font-sans text-sm md:text-base text-text-secondary font-light">
                        Worked with us?{" "}
                        <span className="text-text-primary">
                            Your honest words help other homeowners find craftsmanship they can trust.
                        </span>
                    </p>

                    <Link
                        href="/review"
                        className="font-sans text-xs tracking-[0.3em] uppercase text-accent-GOLD hover:text-white transition-colors whitespace-nowrap border-b border-accent-GOLD/40 hover:border-white pb-0.5"
                    >
                        Share Your Experience
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
