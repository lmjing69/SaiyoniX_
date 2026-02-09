"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
    ];

    const linkStyle = (href: string) =>
        `nav-link px-4 py-2 rounded-full transition-all duration-300 relative overflow-hidden group ${pathname === href
            ? "text-water-deep font-bold bg-white/40 shadow-inner"
            : "text-water-shadow/80 hover:text-water-deep hover:bg-white/30"
        }`;

    return (
        <nav
            className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
                {/* LOGO */}
                <Link
                    href="/"
                    className="flex items-center text-2xl font-bold group"
                >
                    <div className="relative w-10 h-10 mr-2 drop-shadow-md group-hover:scale-110 transition-transform duration-500">
                        <Image
                            src="/icon.png"
                            alt="SaiyoniX Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-water-deep drop-shadow-sm">Saiyo</span>
                    <span className="text-water-blue wave-text">niX</span>
                </Link>

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-sm p-1.5 rounded-full border border-white/20 shadow-sm">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className={linkStyle(link.href)}>
                            <span className="relative z-10">{link.label}</span>
                            {/* Hover Ripple Effect */}
                            <span className="absolute inset-0 bg-water-light/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-500 ease-out origin-center opacity-0 group-hover:opacity-100"></span>
                        </Link>
                    ))}
                </div>

                {/* MOBILE HAMBURGER */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden p-2 text-water-deep hover:bg-white/20 rounded-full transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {open ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/80 backdrop-blur-xl border-t border-white/30 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`block px-4 py-3 rounded-xl transition-all ${pathname === link.href
                                            ? "bg-water-blue/10 text-water-deep font-bold border border-water-blue/20"
                                            : "text-water-shadow/70 hover:text-water-deep hover:bg-white/40"
                                        }`}
                                    onClick={() => setOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
