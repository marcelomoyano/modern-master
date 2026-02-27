"use client";

import { useState, useRef, useEffect, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowLeftRight } from "lucide-react";

interface BeforeAfterPair {
    before: string;
    after: string;
    title: string;
}

const PAIRS: BeforeAfterPair[] = [
    {
        before: "/photos/before/house-before-1.jpg",
        after: "/photos/after/bathroom-after-1.jpg",
        title: "Master Ensuite Transformation",
    },
    {
        before: "/photos/before/house-before-2.jpg",
        after: "/photos/after/bathroom-after-2.jpg",
        title: "Luxury Guest Bathroom",
    }
];

export function BeforeAfter() {
    const [activePairIndex, setActivePairIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100
    const [isDragging, setIsDragging] = useState(false);

    // Auto-center slider when changing pairs
    useEffect(() => {
        setSliderPosition(50);
    }, [activePairIndex]);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = (x / rect.width) * 100;
        setSliderPosition(percent);
    };

    const handleMouseMove = (e: ReactMouseEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    const handleTouchMove = (e: ReactTouchEvent) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
    };

    const pair = PAIRS[activePairIndex];

    return (
        <section className="py-24 bg-background-secondary relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-serif text-4xl md:text-5xl text-text-primary mb-6"
                    >
                        The Transformation
                        <span className="block mt-4 h-[1px] w-16 bg-accent-GOLD mx-auto" />
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-sans text-lg text-text-secondary font-light max-w-2xl mx-auto mb-12"
                    >
                        Every project begins with care and ends with perfection.
                    </motion.p>
                </div>

                {/* Pair Navigation */}
                <div className="flex justify-center flex-wrap gap-4 mb-8">
                    {PAIRS.map((p, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActivePairIndex(idx)}
                            className={`px-6 py-2 font-sans text-sm tracking-wider uppercase transition-all duration-300 border ${idx === activePairIndex
                                ? "border-accent-GOLD text-accent-GOLD bg-accent-GOLD/10"
                                : "border-white/10 text-text-secondary hover:border-white/30"
                                }`}
                        >
                            Project {idx + 1}
                        </button>
                    ))}
                </div>

                {/* Slider Container */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full aspect-video md:aspect-[21/9] max-h-[70vh] cursor-ew-resize select-none overflow-hidden group border border-white/10"
                    ref={containerRef}
                    onMouseDown={() => setIsDragging(true)}
                    onMouseUp={() => setIsDragging(false)}
                    onMouseLeave={() => setIsDragging(false)}
                    onMouseMove={handleMouseMove}
                    onTouchStart={() => setIsDragging(true)}
                    onTouchEnd={() => setIsDragging(false)}
                    onTouchMove={handleTouchMove}
                >
                    {/* After Image (Background) */}
                    <div className="absolute inset-0 w-full h-full">
                        <Image
                            src={pair.after}
                            alt={`${pair.title} After`}
                            fill
                            className="object-cover"
                            sizes="100vw"
                            priority
                        />
                        {/* Label */}
                        <div className="absolute bottom-4 right-4 bg-background-primary/80 backdrop-blur-sm px-4 py-2 border border-white/10 text-text-primary font-sans text-sm tracking-widest uppercase z-10">
                            After
                        </div>
                    </div>

                    {/* Before Image (Clipped overlay) */}
                    <div
                        className="absolute inset-0 w-full h-full"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                        <Image
                            src={pair.before}
                            alt={`${pair.title} Before`}
                            fill
                            className="object-cover"
                            sizes="100vw"
                            priority
                        />
                        {/* Label */}
                        <div className="absolute bottom-4 left-4 bg-background-primary/80 backdrop-blur-sm px-4 py-2 border border-white/10 text-text-primary font-sans text-sm tracking-widest uppercase z-10">
                            Before
                        </div>
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-accent-GOLD pointer-events-none z-20"
                        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background-primary border-2 border-accent-GOLD flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                            <ArrowLeftRight className="w-5 h-5 text-accent-GOLD" />
                        </div>
                    </div>
                </motion.div>

                {/* Caption */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-8 font-sans text-sm md:text-base text-text-secondary font-light max-w-3xl mx-auto italic"
                >
                    &quot;We protect your home during every phase of construction — because attention to detail starts before the first tile is laid.&quot;
                </motion.p>
            </div>
        </section>
    );
}
