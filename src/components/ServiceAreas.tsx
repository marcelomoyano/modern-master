"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const AREAS: { name: string; href?: string }[] = [
    { name: "Hillsborough" },
    { name: "Princeton", href: "/princeton" },
    { name: "Warren", href: "/warren" },
    { name: "Morristown", href: "/morristown" },
    { name: "Flemington" },
    { name: "Bridgewater" },
    { name: "Somerset" },
    { name: "Bernardsville" },
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
                                We bring master craftsmanship to homes across Somerset, Hunterdon, and Morris counties.
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
