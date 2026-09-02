"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

// Mirrors TOWNS in src/components/landing/copy.ts — same order, same list.
// Geza set it on 2 September 2026: the original eight minus Morristown and
// Somerset (both outside his one-hour rule), plus the towns from his
// screenshot, plus the towns his own Google reviews put him in.
// If you change one list, change the other, and areaServed in app/layout.tsx.
const AREAS: { name: string; href?: string }[] = [
    { name: "Hillsborough" },
    { name: "Montgomery" },
    { name: "Branchburg" },
    { name: "Bridgewater" },
    { name: "Flemington" },
    { name: "Far Hills" },
    { name: "Bernardsville" },
    { name: "Basking Ridge" },
    { name: "Warren", href: "/warren" },
    { name: "Princeton", href: "/princeton" },
    { name: "Franklin Park" },
    { name: "Monmouth Junction" },
    { name: "Monroe Township" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ServiceAreas() {
    return (
        <section className="py-20 bg-background-primary border-t border-b border-white/5 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Header */}
                    <div className="md:w-1/3 text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center justify-center p-3 bg-surface rounded-full mb-6 border border-white/5">
                                <MapPin className="w-6 h-6 text-accent-GOLD" />
                            </div>
                            <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-4">
                                Proudly Serving <br />
                                <span className="text-accent-GOLD italic">Central New Jersey</span>
                            </h2>
                            <p className="font-sans text-text-secondary font-light">
                                Every project is within an hour of Geza&apos;s own home in Hillsborough &mdash; across Somerset, Hunterdon, Mercer and Middlesex counties.
                            </p>
                        </motion.div>
                    </div>

                    {/* Area List Grid */}
                    <div className="md:w-2/3 w-full">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4"
                        >
                            {AREAS.map((area, index) => {
                                const inner = (
                                    <span className="font-sans text-text-primary text-sm tracking-wide">
                                        {area.name}
                                    </span>
                                );
                                const baseClass =
                                    "bg-surface border border-white/5 py-3 px-4 text-center hover:border-accent-GOLD/30 transition-colors block";
                                return (
                                    <motion.div key={index} variants={itemVariants}>
                                        {area.href ? (
                                            <Link href={area.href} className={baseClass}>
                                                {inner}
                                            </Link>
                                        ) : (
                                            <div className={baseClass}>{inner}</div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
