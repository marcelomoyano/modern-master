"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
    return (
        <section id="about" className="py-24 bg-background-secondary relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-serif text-4xl md:text-5xl text-text-primary mb-6 leading-tight">
                            Craftsmanship <br />
                            <span className="text-accent-GOLD italic">Is Personal</span>
                        </h2>

                        <div className="h-[1px] w-16 bg-accent-GOLD mb-8" />

                        <div className="space-y-6 font-sans text-text-secondary leading-relaxed font-light text-lg">
                            <p>
                                For over 20 years, I&apos;ve been transforming homes across Central New Jersey.
                                Modern Master wasn&apos;t built on volume—it was built on a singular focus:
                                delivering uncompromising quality in every corner, cut, and finish.
                            </p>

                            <p>
                                I&apos;m not a sales guy who disappears after the contract is signed.
                                When you hire Modern Master, you get me on the job site. I personally
                                oversee and execute the work, ensuring the vision we discuss becomes
                                the stunning reality you walk into.
                            </p>

                            <p>
                                From meticulous preparation to the final polished fixture, every project
                                gets the attention it deserves. Fully licensed, insured, and trusted by
                                homeowners who understand the difference between good enough and perfect.
                            </p>

                            <blockquote className="border-l-2 border-accent-GOLD pl-6 mt-8 py-2">
                                <p className="font-serif text-xl md:text-2xl text-text-primary italic">
                                    &quot;Your home deserves a craftsman, not a contractor.&quot;
                                </p>
                                <footer className="mt-4 font-sans text-sm tracking-widest uppercase text-accent-GOLD">
                                    — Geza, Founder
                                </footer>
                            </blockquote>
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[600px] w-full"
                    >
                        <div className="absolute inset-0 border border-white/10 translate-x-4 translate-y-4" />
                        <div className="absolute inset-0 z-10">
                            <Image
                                src="/photos/before/house-before-4.jpg" // Using a prep photo to show the craftsman at work feel
                                alt="Craftsmanship and preparation"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            {/* Overlay for artistic effect */}
                            <div className="absolute inset-0 bg-background-primary/20 mix-blend-multiply" />
                        </div>

                        {/* Decorative Corner Element */}
                        <div className="absolute -bottom-6 -left-6 z-20 w-24 h-24 border-b-2 border-l-2 border-accent-GOLD" />
                        <div className="absolute -top-6 -right-6 z-20 w-24 h-24 border-t-2 border-r-2 border-accent-GOLD opacity-50" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
