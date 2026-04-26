"use client"

import * as React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Services", url: "/services" },
    { title: "Projects", url: "/projects" },
    { title: "Contact", url: "/contact", isCta: true },
]

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isHeaderVisible, setIsHeaderVisible] = useState(true)
    const [isAtTop, setIsAtTop] = useState(true)
    const lastScrollY = useRef(0)
    const pathname = usePathname()

    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [isMenuOpen])

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY
            const atTop = currentY < 20
            setIsAtTop(atTop)

            if (currentY < 60) {
                setIsHeaderVisible(true)
            } else if (currentY > lastScrollY.current + 5) {
                setIsHeaderVisible(false)
            } else if (currentY < lastScrollY.current - 5) {
                setIsHeaderVisible(true)
            }

            lastScrollY.current = currentY
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const menuPanelVariants = {
        closed: { opacity: 0, y: -20, scale: 0.96 },
        open: { opacity: 1, y: 0, scale: 1 },
    }

    const headerVariants = {
        hidden: { y: -120, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    }

    return (
        <>
            {/* Logo - top-left, floating, no background */}
            <motion.div
                variants={headerVariants}
                initial="visible"
                animate={isHeaderVisible ? "visible" : "hidden"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-6 left-6 z-50"
            >
                <Link
                    href="/"
                    className="flex items-center gap-2 group"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <Image
                        src="/logo.png"
                        alt="SaiyoniX Logo"
                        width={40}
                        height={40}
                        className="w-10 h-10 transition-transform group-hover:scale-105"
                    />
                </Link>
            </motion.div>

            {/* Contact CTA - top-right, floating button, no background */}
            <motion.div
                variants={headerVariants}
                initial="visible"
                animate={isHeaderVisible ? "visible" : "hidden"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-6 right-6 z-50 hidden md:inline-flex"
            >
                <Link
                    href="/contact"
                    className="bg-blue-600 text-white text-sm font-semibold rounded-full px-5 py-2.5 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-105 active:scale-95 transition-all duration-200"
                >
                    Contact Us
                    <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </motion.div>

            {/* Navbar - center floating pill */}
            <motion.nav
                variants={headerVariants}
                initial="visible"
                animate={isHeaderVisible ? "visible" : "hidden"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center"
            >
                <div className="flex items-center bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-full px-2 py-1.5 shadow-xl shadow-slate-900/5">
                    {navItems.filter((i) => !i.isCta).map((item) => {
                        const isActive = pathname === item.url
                        return (
                            <Link
                                key={item.url}
                                href={item.url}
                                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                                    isActive
                                        ? "text-white bg-slate-950"
                                        : "text-slate-700 hover:text-slate-950"
                                }`}
                            >
                                {item.title}
                            </Link>
                        )
                    })}
                </div>
            </motion.nav>

            {/* Mobile hamburger - top-right when hidden on mobile */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: isAtTop ? 0 : 1, opacity: isAtTop ? 0 : 1 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="fixed top-6 right-6 z-50 md:hidden w-10 h-10 bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-full shadow-xl shadow-slate-900/5 flex items-center justify-center text-slate-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
            >
                <Menu className="w-5 h-5" />
            </motion.button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="fixed inset-0 bg-slate-950/20 backdrop-blur-md z-40 md:hidden"
                            onClick={() => setIsMenuOpen(false)}
                        />

                        <motion.div
                            variants={menuPanelVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                            className="fixed top-20 left-4 right-4 z-50 md:hidden"
                        >
                            <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl shadow-slate-900/10 overflow-hidden">
                                <nav className="py-3">
                                    {navItems.map((item, i) => {
                                        const isActive = pathname === item.url
                                        return (
                                            <motion.div
                                                key={item.url}
                                                initial={{ opacity: 0, x: -12 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.05, duration: 0.2 }}
                                            >
                                                <Link
                                                    href={item.url}
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className={`flex items-center px-6 py-4 text-base font-medium transition-colors ${
                                                        item.isCta
                                                            ? "text-blue-600 font-semibold border-t border-slate-100 mt-2"
                                                            : isActive
                                                                ? "text-white bg-slate-950"
                                                                : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
                                                    }`}
                                                >
                                                    {item.title}
                                                    {!item.isCta && (
                                                        <svg className="w-4 h-4 ml-auto text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    )}
                                                </Link>
                                            </motion.div>
                                        )
                                    })}
                                </nav>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}