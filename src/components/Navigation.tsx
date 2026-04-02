"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 w-full z-50 transition-colors duration-300 ease-in-out border-b border-transparent text-text-primary",
                    isScrolled
                        ? "bg-background-primary/95 backdrop-blur-md border-white/10 shadow-lg"
                        : "bg-transparent"
                )}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link href="/" className="flex-shrink-0">
                            <Image
                                src="/logo.png"
                                alt="Modern Master"
                                width={180}
                                height={79}
                                className="h-14 w-auto"
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex flex-1 justify-center space-x-8">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="font-sans text-sm tracking-wide hover:text-accent-GOLD transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Phone Number CTA - Desktop */}
                        <div className="hidden md:flex items-center">
                            <a
                                href="tel:+17326949197"
                                className="flex items-center space-x-2 text-sm font-medium tracking-wider group"
                            >
                                <Phone className="w-4 h-4 text-accent-GOLD group-hover:scale-110 transition-transform" />
                                <span className="group-hover:text-accent-GOLD transition-colors">
                                    (732) 694-9197
                                </span>
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden items-center">
                            <button
                                type="button"
                                className="text-text-primary hover:text-accent-GOLD transition-colors p-2"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-background-primary pt-20 px-4 flex flex-col"
                    >
                        <nav className="flex flex-col space-y-6 mt-8">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-serif text-center hover:text-accent-GOLD transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-8 flex justify-center border-t border-white/10 mt-8">
                                <a
                                    href="tel:+17326949197"
                                    className="flex items-center space-x-3 text-lg font-medium text-accent-GOLD"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span>(732) 694-9197</span>
                                </a>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
