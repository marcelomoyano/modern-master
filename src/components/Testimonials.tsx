"use client";

import { motion, Variants } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
    {
        text: "Geza and his team transformed our master bathroom beyond what we imagined. From selecting the tile to the final trim, the attention to detail is truly unmatched.",
        author: "Sarah & Mark T.",
        location: "Hillsborough, NJ",
    },
    {
        text: "A friend recommended Modern Master for our bathroom renovation and I couldn't be happier. They delivered a luxurious master bath that completely exceeded our expectations.",
        author: "Emily R.",
        location: "Somerset, NJ",
    },
    {
        text: "After two bad experiences with other contractors, Modern Master restored our faith. They finished the basement and hardwood floors on time, within budget, and the craftsmanship speaks for itself.",
        author: "James P.",
        location: "Bridgewater, NJ",
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
        <section className="py-24 bg-background-secondary relative">
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
            </div>
        </section>
    );
}
