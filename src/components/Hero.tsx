"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/photos/after/bathroom-after-3.jpg"
                    alt="Luxury modern master bathroom"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                {/* Gradient Overlay for Text Readability - Bottom Heavy */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-background-primary/60 to-background-primary/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-serif text-5xl md:text-7xl lg:text-8xl text-text-primary mb-6 leading-tight"
                >
                    Where Vision Meets Craftsmanship
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="font-sans text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto font-light"
                >
                    Premium home remodeling in Central New Jersey. 20+ years of
                    transforming spaces into something extraordinary.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <Link
                        href="#contact"
                        className="inline-block bg-accent-GOLD text-background-primary font-sans font-medium px-8 py-4 uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300"
                    >
                        Schedule Your Free Consultation
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-text-secondary"
            >
                <span className="text-xs uppercase tracking-widest mb-2 font-sans">
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-5 h-5 opacity-50" />
                </motion.div>
            </motion.div>
        </section>
    );
}
