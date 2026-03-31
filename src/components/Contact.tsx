"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Thank you for your inquiry. Geza will be in touch shortly.");
            const target = e.target as HTMLFormElement;
            target.reset();
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 bg-background-primary relative">
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
                        Ready to Transform Your Space?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-sans text-lg text-text-secondary font-light max-w-2xl mx-auto"
                    >
                        Schedule your free consultation today. Let&apos;s discuss your vision.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-surface p-8 md:p-10 border border-white/5"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="font-sans text-sm tracking-widest uppercase text-text-secondary">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full bg-background-primary border border-white/10 px-4 py-3 text-text-primary focus:outline-none focus:border-accent-GOLD transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="font-sans text-sm tracking-widest uppercase text-text-secondary">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        required
                                        className="w-full bg-background-primary border border-white/10 px-4 py-3 text-text-primary focus:outline-none focus:border-accent-GOLD transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="font-sans text-sm tracking-widest uppercase text-text-secondary">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full bg-background-primary border border-white/10 px-4 py-3 text-text-primary focus:outline-none focus:border-accent-GOLD transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="project" className="font-sans text-sm tracking-widest uppercase text-text-secondary">Project Type</label>
                                <select
                                    id="project"
                                    required
                                    className="w-full bg-background-primary border border-white/10 px-4 py-3 text-text-secondary focus:outline-none focus:border-accent-GOLD transition-colors appearance-none"
                                >
                                    <option value="">Select a project type...</option>
                                    <option value="bathroom">Bathroom Remodel</option>
                                    <option value="kitchen">Kitchen Remodel</option>
                                    <option value="basement">Basement Finish</option>
                                    <option value="flooring">Flooring Installation</option>
                                    <option value="carpentry">Carpentry / Custom Trim</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="font-sans text-sm tracking-widest uppercase text-text-secondary">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    className="w-full bg-background-primary border border-white/10 px-4 py-3 text-text-primary focus:outline-none focus:border-accent-GOLD transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-accent-GOLD text-background-primary font-sans font-medium px-8 py-4 uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Sending..." : "Request Consultation"}
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col justify-center space-y-10"
                    >
                        <div>
                            <h3 className="font-serif text-2xl text-text-primary mb-6">Contact Information</h3>
                            <p className="font-sans text-text-secondary font-light leading-relaxed mb-8">
                                Every great project starts with a conversation. Reach out today to discuss your vision, and we&apos;ll schedule a time to walk through your space together.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="p-2 border border-white/5 bg-surface text-accent-GOLD mt-1">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-sans text-sm tracking-widest uppercase text-text-secondary mb-1">Phone</p>
                                    <a href="tel:+17326949197" className="font-serif text-xl text-text-primary hover:text-accent-GOLD transition-colors">
                                        (732) 694-9197
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-2 border border-white/5 bg-surface text-accent-GOLD mt-1">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-sans text-sm tracking-widest uppercase text-text-secondary mb-1">Email</p>
                                    <a href="mailto:Geza@Modern-Master.com" className="font-serif text-xl text-text-primary hover:text-accent-GOLD transition-colors">
                                        Geza@Modern-Master.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-2 border border-white/5 bg-surface text-accent-GOLD mt-1">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-sans text-sm tracking-widest uppercase text-text-secondary mb-1">Address</p>
                                    <p className="font-serif text-xl text-text-primary">
                                        69 Nostrand Rd, Hillsborough NJ 08844
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-2 border border-white/5 bg-surface text-accent-GOLD mt-1">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-sans text-sm tracking-widest uppercase text-text-secondary mb-1">Business Hours</p>
                                    <p className="font-serif text-xl text-text-primary">
                                        Mon - Fri: 8:00 AM - 6:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Map */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-16 border border-white/5 overflow-hidden"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.5!2d-74.636!3d40.496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3eb1e0f3b2b1d%3A0x0!2s69+Nostrand+Rd%2C+Hillsborough+Township%2C+NJ+08844!5e0!3m2!1sen!2sus!4v1"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Modern Master Location"
                        className="w-full"
                    />
                </motion.div>
            </div>
        </section>
    );
}
