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
        `nav-link px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${pathname === href
            ? "text-water-primary bg-water-surface"
            : "text-slate-600 hover:text-water-primary hover:bg-slate-50"
        }`;

    return (
        <nav
            className={`sticky top-0 z-50 transition-all duration-300 border-b ${scrolled
                    ? "bg-white/90 backdrop-blur-md border-slate-200 shadow-sm py-3"
                    : "bg-white border-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
                {/* LOGO */}
                <Link
                    href="/"
                    className="flex items-center text-xl font-bold group"
                >
                    <div className="relative w-8 h-8 mr-2">
                        <Image
                            src="/icon.png"
                            alt="SaiyoniX Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-slate-900">Saiyo</span>
                    <span className="text-water-primary">niX</span>
                </Link>

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className={linkStyle(link.href)}>
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* MOBILE HAMBURGER */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
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
                        className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`block px-4 py-3 rounded-md transition-all ${pathname === link.href
                                            ? "bg-water-surface text-water-primary font-semibold"
                                            : "text-slate-600 hover:text-water-primary hover:bg-slate-50"
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
