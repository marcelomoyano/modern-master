import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="inline-block mb-4">
                            <Image
                                src="/logo.png"
                                alt="Modern Master"
                                width={180}
                                height={79}
                                className="h-14 w-auto"
                            />
                        </Link>
                        <p className="font-sans text-text-secondary font-light max-w-sm mb-6">
                            Premium home remodeling in Central New Jersey. Specializing in luxury bathrooms, kitchens, and full interior transformations.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 border border-white/10 text-text-secondary hover:text-accent-GOLD hover:border-accent-GOLD transition-all">
                                <Instagram className="w-5 h-5" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="#" className="p-2 border border-white/10 text-text-secondary hover:text-accent-GOLD hover:border-accent-GOLD transition-all">
                                <Facebook className="w-5 h-5" />
                                <span className="sr-only">Facebook</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-sans text-sm tracking-widest uppercase text-text-primary mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#services" className="font-sans text-text-secondary hover:text-accent-GOLD transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className="font-sans text-text-secondary hover:text-accent-GOLD transition-colors">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="font-sans text-text-secondary hover:text-accent-GOLD transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="font-sans text-text-secondary hover:text-accent-GOLD transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h4 className="font-sans text-sm tracking-widest uppercase text-text-primary mb-6">Contact</h4>
                        <ul className="space-y-4 font-sans text-text-secondary">
                            <li>
                                <a href="tel:+17326949197" className="hover:text-accent-GOLD transition-colors">
                                    (732) 694-9197
                                </a>
                            </li>
                            <li>
                                <a href="mailto:Geza@Modern-Master.com" className="hover:text-accent-GOLD transition-colors">
                                    Geza@Modern-Master.com
                                </a>
                            </li>
                            <li>69 Nostrand Rd, Hillsborough NJ 08844</li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs font-sans text-text-secondary uppercase tracking-wider">
                    <p>&copy; {currentYear} Modern Master. All Rights Reserved.</p>
                    <div className="flex items-center gap-6">
                        <p>Serving Northern & Central New Jersey</p>
                        <iframe
                            style={{ border: 0, height: 171, width: 81 }}
                            src="https://seal-newjersey.bbb.org/frame/blue-seal-81-171-bbb-90231494.png?chk=DA61AB973B"
                            title="BBB Accredited Business"
                        />
                    </div>
                </div>

            </div>
        </footer>
    );
}
