"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const CATEGORIES = [
    {
        id: "bathrooms",
        label: "Bathrooms",
        count: 15,
    },
    {
        id: "kitchens",
        label: "Kitchens",
        count: 3,
    },
    {
        id: "carpentry",
        label: "Carpentry & Trim",
        count: 14,
    },
    {
        id: "basements",
        label: "Basements",
        count: 14,
    },
    {
        id: "flooring",
        label: "Flooring",
        count: 10,
    },
    {
        id: "railings",
        label: "Railings & Balusters",
        count: 9,
    },
];

function getPhotos(categoryId: string, count: number) {
    return Array.from({ length: count }, (_, i) => {
        const num = String(i + 1).padStart(2, "0");
        const ext = categoryId === "carpentry" && (i === 8 || i === 9 || i === 10) ? "jpeg" : "jpg";
        return `/portfolio/${categoryId}/${num}.${ext}`;
    });
}

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState("bathrooms");
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    const photos = getPhotos(
        activeCategory,
        CATEGORIES.find((c) => c.id === activeCategory)!.count
    );

    return (
        <>
        <Navigation />
        <main className="min-h-screen bg-background-primary">
            {/* Header */}
            <div className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-GOLD transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="font-sans text-sm tracking-widest uppercase">Back to Home</span>
                </Link>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-serif text-4xl md:text-5xl text-text-primary mb-4"
                >
                    Our Portfolio
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "64px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="h-[1px] bg-accent-GOLD"
                />
            </div>

            {/* Category Tabs */}
            <div className="sticky top-20 z-30 bg-background-primary/95 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-1 overflow-x-auto py-4 scrollbar-hide">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`flex-shrink-0 px-5 py-2.5 font-sans text-sm tracking-wider uppercase transition-all duration-300 border ${
                                    activeCategory === cat.id
                                        ? "bg-accent-GOLD text-background-primary border-accent-GOLD"
                                        : "text-text-secondary border-white/10 hover:border-accent-GOLD/50 hover:text-text-primary"
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Photo Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="columns-1 sm:columns-2 lg:columns-3 gap-4"
                >
                    {photos.map((src, i) => (
                        <motion.div
                            key={src}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className="mb-4 break-inside-avoid cursor-pointer group"
                            onClick={() => setLightboxImage(src)}
                        >
                            <div className="relative overflow-hidden border border-white/5 group-hover:border-accent-GOLD/30 transition-colors duration-300">
                                <Image
                                    src={src}
                                    alt={`${CATEGORIES.find((c) => c.id === activeCategory)?.label} project ${i + 1}`}
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                        onClick={() => setLightboxImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                            onClick={() => setLightboxImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl max-h-[90vh] w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={lightboxImage}
                                alt="Portfolio photo"
                                width={1600}
                                height={1200}
                                className="w-full h-auto max-h-[90vh] object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
        <Footer />
        </>
    );
}
