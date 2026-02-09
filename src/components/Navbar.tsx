"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
    ];

    const linkStyle = (href: string) =>
        `nav-link px-4 py-2 rounded-full transition-all ${pathname === href
            ? "text-neon-purple font-semibold"
            : "text-white/60 hover:text-white"
        }`;

    return (
        <nav className="sticky top-0 z-50 bg-dark-pure/95 backdrop-blur-sm border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex justify-between items-center">
                {/* LOGO */}
                <Link
                    href="/"
                    className="flex items-center text-xl sm:text-2xl font-bold group"
                >
                    <Image
                        src="/icon.png"
                        alt="SaiyoniX Logo"
                        width={40}
                        height={40}
                        className="w-8 h-8 sm:w-10 sm:h-10 mr-2"
                    />
                    <span className="text-white">Saiyo</span>
                    <span className="text-neon-purple">niX</span>
                </Link>

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className={linkStyle(link.href)}>
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* MOBILE HAMBURGER */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
                    aria-label="Toggle menu"
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
                        className="md:hidden bg-dark-card/95 backdrop-blur-md border-t border-white/5"
                    >
                        <div className="px-4 py-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`block px-4 py-3 rounded-lg transition-all ${pathname === link.href
                                            ? "bg-neon-purple/10 text-neon-purple font-semibold"
                                            : "text-white/60 hover:text-white hover:bg-white/5"
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


import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
    ];

    const linkStyle = (href: string) =>
        `nav-link px-4 py-2 rounded-xl transition-all ${pathname === href
            ? "bg-white/20 text-white font-semibold"
            : "text-white/95 hover:text-white hover:bg-white/10"
        }`;

    return (
        <nav className="sticky top-0 z-50 px-4 sm:px-6 lg:px-8 py-4 bg-[#1a1a2e] border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
                {/* LOGO */}
                <Link
                    href="/"
                    className="flex items-center text-lg sm:text-xl font-bold text-white hover:text-white transition-colors group"
                >
                    <Image
                        src="/icon.png"
                        alt="SaiyoniX Dragon Logo"
                        width={48}
                        height={48}
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                    />
                    <span>aiyoniX</span>
                </Link>

                {/* MOBILE HAMBURGER BUTTON */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden p-2 text-white/90 hover:text-white transition-colors"
                    aria-label="Toggle menu"
                >
                    <div className="space-y-1.5 w-6">
                        <motion.span
                            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="block h-0.5 bg-current rounded"
                        />
                        <motion.span
                            animate={open ? { opacity: 0 } : { opacity: 1 }}
                            className="block h-0.5 bg-current rounded"
                        />
                        <motion.span
                            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            className="block h-0.5 bg-current rounded"
                        />
                    </div>
                </button>

                {/* DESKTOP LINKS */}
                <div className="hidden md:flex space-x-1 lg:space-x-2">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className={linkStyle(link.href)}>
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden border-t border-white/20"
                    >
                        <div className="px-4 sm:px-6 py-4 space-y-2 bg-glass-light/50">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={`block text-center ${linkStyle(link.href)}`}
                                        onClick={() => setOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
