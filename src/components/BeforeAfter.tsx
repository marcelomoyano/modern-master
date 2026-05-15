"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface BeforeAfterPair {
    before: string;
    after: string;
    title: string;
}

type ViewMode = "auto" | "before" | "after";

const PAIRS: BeforeAfterPair[] = [
    {
        before: "/photos/before/IMG_1023.jpg",
        after: "/photos/after/bathroom-after-2.jpg",
        title: "Luxury Master Bathroom",
    },
    {
        before: "/photos/before/IMG_9563.jpeg",
        after: "/photos/after/IMG_0134.jpeg",
        title: "Full Bathroom Remodel",
    }
];

export function BeforeAfter() {
    const [activePairIndex, setActivePairIndex] = useState(0);
    const [animationKey, setAnimationKey] = useState(0);
    const [mode, setMode] = useState<ViewMode>("auto");

    useEffect(() => {
        setAnimationKey((k) => k + 1);
        setMode("auto");
    }, [activePairIndex]);

    const pair = PAIRS[activePairIndex];

    const handleLabelClick = (label: "before" | "after") => {
        setMode((current) => (current === label ? "auto" : label));
        if (mode === label) {
            setAnimationKey((k) => k + 1);
        }
    };

    const beforeClipPath =
        mode === "before"
            ? "inset(0 0% 0 0)"
            : mode === "after"
                ? "inset(0 100% 0 0)"
                : undefined;

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

                {/* Reveal Container */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full aspect-video md:aspect-[21/9] max-h-[70vh] select-none overflow-hidden border border-white/10"
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
                        <button
                            type="button"
                            onClick={() => handleLabelClick("after")}
                            aria-pressed={mode === "after"}
                            className={`absolute bottom-4 right-4 backdrop-blur-sm px-4 py-2 border font-sans text-sm tracking-widest uppercase z-30 transition-all duration-300 cursor-pointer ${mode === "after"
                                ? "bg-accent-GOLD/20 border-accent-GOLD text-accent-GOLD"
                                : "bg-background-primary/80 border-white/10 text-text-primary hover:border-accent-GOLD hover:text-accent-GOLD"
                                }`}
                        >
                            After
                        </button>
                    </div>

                    {/* Before Image (Animated reveal or static) */}
                    {mode === "auto" ? (
                        <motion.div
                            key={`before-${animationKey}`}
                            className="absolute inset-0 w-full h-full"
                            initial={{ clipPath: "inset(0 0% 0 0)" }}
                            animate={{
                                clipPath: [
                                    "inset(0 0% 0 0)",
                                    "inset(0 0% 0 0)",
                                    "inset(0 100% 0 0)",
                                    "inset(0 100% 0 0)",
                                    "inset(0 0% 0 0)",
                                ],
                            }}
                            transition={{
                                duration: 8,
                                times: [0, 0.15, 0.5, 0.65, 1],
                                ease: "easeInOut",
                                repeat: Infinity,
                            }}
                        >
                            <Image
                                src={pair.before}
                                alt={`${pair.title} Before`}
                                fill
                                className="object-cover"
                                sizes="100vw"
                                priority
                            />
                            <button
                                type="button"
                                onClick={() => handleLabelClick("before")}
                                aria-pressed={false}
                                className="absolute bottom-4 left-4 bg-background-primary/80 backdrop-blur-sm px-4 py-2 border border-white/10 text-text-primary font-sans text-sm tracking-widest uppercase z-30 transition-all duration-300 cursor-pointer hover:border-accent-GOLD hover:text-accent-GOLD"
                            >
                                Before
                            </button>
                        </motion.div>
                    ) : (
                        <div
                            className="absolute inset-0 w-full h-full transition-[clip-path] duration-500 ease-in-out"
                            style={{ clipPath: beforeClipPath }}
                        >
                            <Image
                                src={pair.before}
                                alt={`${pair.title} Before`}
                                fill
                                className="object-cover"
                                sizes="100vw"
                                priority
                            />
                            <button
                                type="button"
                                onClick={() => handleLabelClick("before")}
                                aria-pressed={mode === "before"}
                                className={`absolute bottom-4 left-4 backdrop-blur-sm px-4 py-2 border font-sans text-sm tracking-widest uppercase z-30 transition-all duration-300 cursor-pointer ${mode === "before"
                                    ? "bg-accent-GOLD/20 border-accent-GOLD text-accent-GOLD"
                                    : "bg-background-primary/80 border-white/10 text-text-primary hover:border-accent-GOLD hover:text-accent-GOLD"
                                    }`}
                            >
                                Before
                            </button>
                        </div>
                    )}

                    {/* Animated Sweep Line — only during auto mode */}
                    {mode === "auto" && (
                        <motion.div
                            key={`line-${animationKey}`}
                            className="absolute top-0 bottom-0 w-[2px] bg-accent-GOLD pointer-events-none z-20 shadow-[0_0_20px_rgba(212,175,55,0.6)]"
                            initial={{ left: "100%" }}
                            animate={{
                                left: ["100%", "100%", "0%", "0%", "100%"],
                            }}
                            transition={{
                                duration: 8,
                                times: [0, 0.15, 0.5, 0.65, 1],
                                ease: "easeInOut",
                                repeat: Infinity,
                            }}
                            style={{ transform: "translateX(-50%)" }}
                        />
                    )}
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
