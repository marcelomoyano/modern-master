"use client";

import { motion, Variants } from "framer-motion";
import {
    Bath,
    ChefHat,
    Home,
    SplitSquareHorizontal,
} from "lucide-react";

const SERVICES = [
    {
        title: "Bathroom Remodeling",
        description: "Spa-worthy bathrooms designed for daily luxury.",
        icon: Bath,
    },
    {
        title: "Kitchen Remodeling",
        description: "The heart of your home, reimagined.",
        icon: ChefHat, // Using ChefHat as a proxy for kitchen/cooking
    },
    {
        title: "Finish Basement",
        description: "Unlock your home's hidden potential.",
        icon: Home,
    },
    {
        title: "Floor Installation",
        description: "From hardwood to tile, installed with precision.",
        icon: SplitSquareHorizontal, // Proxy for flooring tiles/planks
    },
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Services() {
    return (
        <section id="services" className="py-24 bg-background-primary relative">
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
                        Our Expertise
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "64px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="h-[1px] bg-accent-GOLD mx-auto"
                    />
                </div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                >
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group bg-surface p-8 border border-white/5 hover:border-accent-GOLD/50 transition-colors duration-300 flex flex-col items-start"
                        >
                            <div className="mb-6 p-3 bg-background-primary rounded-sm border border-white/5 group-hover:border-accent-GOLD/30 transition-colors duration-300">
                                <service.icon className="w-6 h-6 text-accent-GOLD" />
                            </div>
                            <h3 className="font-serif text-2xl text-text-primary mb-3">
                                {service.title}
                            </h3>
                            <p className="font-sans text-text-secondary leading-relaxed font-light">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
