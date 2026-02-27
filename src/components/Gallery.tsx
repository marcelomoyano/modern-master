"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PORTFOLIO_IMAGES = [
    { src: "/photos/after/bathroom-after-1.jpg", alt: "Master Bathroom Renovation", span: "col-span-1 md:col-span-2 row-span-2" },
    { src: "/photos/after/bathroom-after-2.jpg", alt: "Modern Guest Bath", span: "col-span-1" },
    { src: "/photos/after/bathroom-after-4.jpg", alt: "Luxury Walk-in Shower", span: "col-span-1" },
    { src: "/photos/after/bathroom-after-3.jpg", alt: "Freestanding Tub Installation", span: "col-span-1 md:col-span-2" },
];

export function Gallery() {
    return (
        <section id="portfolio" className="py-24 bg-background-primary relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="font-serif text-4xl md:text-5xl text-text-primary mb-4"
                        >
                            Recent Work
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            whileInView={{ opacity: 1, width: "64px" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="h-[1px] bg-accent-GOLD"
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-6 md:mt-0"
                    >
                        <Link
                            href="#contact"
                            className="group flex items-center text-text-secondary hover:text-accent-GOLD transition-colors font-sans text-sm tracking-widest uppercase"
                        >
                            View Full Portfolio
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[300px]">
                    {PORTFOLIO_IMAGES.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative group overflow-hidden bg-surface ${img.span}`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-background-primary/0 group-hover:bg-background-primary/40 transition-colors duration-300 flex items-end justify-start p-6">
                                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <p className="font-sans text-sm tracking-widest uppercase text-accent-GOLD mb-1">
                                        Project
                                    </p>
                                    <h3 className="font-serif text-xl text-text-primary">
                                        {img.alt}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
