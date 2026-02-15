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
        `nav-link px-4 py-2 rounded-xl transition-all ${pathname === href
            ? "bg-slate-100 text-slate-950 font-bold shadow-sm border border-slate-200"
            : "text-slate-700 hover:text-slate-950 hover:bg-slate-50 font-medium"
        }`;

    return (
        <nav className="sticky top-0 z-50 px-4 sm:px-6 lg:px-8 py-4 navbar-glass">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex justify-between items-center">
                {/* LOGO */}
                <Link
                    href="/"
                    onClick={() => {
                        setOpen(false);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="flex items-center text-lg sm:text-xl font-bold text-slate-900 hover:text-slate-700 transition-colors group"
                >
                    <Image
                        src="/saiyonix-logo.png"
                        alt="SaiyoniX Logo"
                        width={48}
                        height={48}
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 -mr-1"
                    />
                    <span>aiyoniX</span>
                </Link>

                {/* MOBILE HAMBURGER BUTTON */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden p-2 text-slate-700 hover:text-slate-950 transition-colors"
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
                        <Link
                            key={link.href}
                            href={link.href}
                            className={linkStyle(link.href)}
                            onClick={() => {
                                if (link.href === "/") {
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }
                            }}
                        >
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
                        className="md:hidden overflow-hidden border-t border-slate-200"
                    >
                        <div className="px-4 sm:px-6 py-4 space-y-2 bg-white/95 shadow-lg">
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
                                        onClick={() => {
                                            setOpen(false);
                                            if (link.href === "/") {
                                                window.scrollTo({ top: 0, behavior: "smooth" });
                                            }
                                        }}
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
