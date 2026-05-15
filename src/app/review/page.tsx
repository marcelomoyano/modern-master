"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Star, ExternalLink, Mail } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

// TODO: Replace with the real Google review link from Google Business Profile
// → Dashboard → "Get more reviews" → copy share link.
// Looks like: https://g.page/r/XXXXXXXXXXXXXXXX/review
//          or https://search.google.com/local/writereview?placeid=XXXXXXXXXXXX
const GOOGLE_REVIEW_URL = "https://g.page/r/REPLACE_ME/review";

export default function ReviewPage() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-background-primary relative overflow-hidden">
                {/* Subtle radial accent */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,169,110,0.08),_transparent_60%)] pointer-events-none" />

                <div className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-GOLD transition-colors mb-12"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="font-sans text-sm tracking-widest uppercase">Back to Home</span>
                    </Link>

                    {/* Header */}
                    <div className="text-center">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="font-sans text-sm tracking-[0.4em] uppercase text-accent-GOLD mb-6"
                        >
                            A Note from Geza
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="font-serif text-4xl md:text-6xl text-text-primary mb-6 leading-tight"
                        >
                            Thank you for trusting us
                            <span className="block text-accent-GOLD italic mt-2">with your home.</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "64px" }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="h-[1px] bg-accent-GOLD mx-auto mb-10"
                        />

                        {/* Star Display */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                            className="flex justify-center gap-2 mb-10"
                        >
                            {[0, 1, 2, 3, 4].map((i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.6 + i * 0.12,
                                        type: "spring",
                                        stiffness: 200,
                                    }}
                                >
                                    <Star
                                        className="w-10 h-10 md:w-12 md:h-12 text-accent-GOLD"
                                        fill="currentColor"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.3 }}
                            className="font-sans text-lg md:text-xl text-text-secondary font-light leading-relaxed max-w-2xl mx-auto mb-4"
                        >
                            Every project we take on is personal. If our work has earned your confidence,
                            a few honest words on Google would mean the world to us — and help other
                            homeowners find craftsmanship they can trust.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1.5 }}
                            className="font-sans text-sm text-text-secondary/70 italic mb-12"
                        >
                            It only takes about a minute.
                        </motion.p>

                        {/* Primary CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.7 }}
                        >
                            <a
                                href={GOOGLE_REVIEW_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 bg-accent-GOLD text-background-primary font-sans font-medium px-10 py-5 uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300"
                            >
                                <span>Leave a Google Review</span>
                                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Divider */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 2 }}
                        className="my-20 flex items-center gap-6 max-w-md mx-auto"
                    >
                        <div className="flex-1 h-[1px] bg-white/10" />
                        <span className="font-sans text-xs tracking-[0.3em] uppercase text-text-secondary/60">
                            Or
                        </span>
                        <div className="flex-1 h-[1px] bg-white/10" />
                    </motion.div>

                    {/* Private feedback fallback */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 2.1 }}
                        className="text-center bg-surface border border-white/5 p-8 md:p-10"
                    >
                        <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-4">
                            Something fall short?
                        </h2>
                        <p className="font-sans text-text-secondary font-light leading-relaxed max-w-xl mx-auto mb-6">
                            If anything about your experience wasn&apos;t five stars, please tell Geza
                            directly first — we&apos;ll make it right.
                        </p>
                        <a
                            href="mailto:Geza@Modern-Master.com?subject=Project%20Feedback"
                            className="inline-flex items-center gap-3 border border-accent-GOLD text-accent-GOLD font-sans font-medium px-8 py-3 uppercase tracking-widest text-sm hover:bg-accent-GOLD hover:text-background-primary transition-colors duration-300"
                        >
                            <Mail className="w-4 h-4" />
                            <span>Email Geza Directly</span>
                        </a>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </>
    );
}
