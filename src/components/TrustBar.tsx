"use client";

import { motion, Variants } from "framer-motion";

const STATS = [
    { value: "20+", label: "Years of Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "5 ★", label: "Google Rating" },
    { value: "100%", label: "Licensed & Insured" },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function TrustBar() {
    return (
        <section className="bg-surface py-16 border-b border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
                >
                    {STATS.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="text-center flex flex-col items-center justify-center space-y-2"
                        >
                            <span className="font-serif text-4xl md:text-5xl text-accent-GOLD">
                                {stat.value}
                            </span>
                            <span className="font-sans text-xs md:text-sm uppercase tracking-widest text-text-secondary">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
