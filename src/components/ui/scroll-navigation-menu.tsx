"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface MenuItem {
    title: string
    url: string
}

const menuItems: MenuItem[] = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Services", url: "/services" },
    { title: "Projects", url: "/projects" },
    { title: "Contact", url: "/contact" },
]

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [hoveredItem, setHoveredItem] = useState<string | null>(null)

    const { scrollY } = useScroll()
    const pathname = usePathname()

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 100)
    })

    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    const menuVariants = {
        closed: {
            opacity: 0,
            scale: 0.8,
            y: -50,
            transition: {
                type: "spring" as const,
                stiffness: 300,
                damping: 30,
                when: "afterChildren" as const,
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                stiffness: 300,
                damping: 30,
                when: "beforeChildren" as const,
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        closed: { y: 20, opacity: 0, scale: 0.8 },
        open: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { type: "spring" as const, stiffness: 400, damping: 25 }
        }
    }

    const linkStyle = (href: string) =>
        pathname === href
            ? "bg-slate-100 text-slate-950 font-bold shadow-sm border border-slate-200"
            : "text-slate-700 hover:text-slate-950 hover:bg-slate-50 font-medium"

    return (
        <>
            {/* Full Navbar - visible when not scrolled */}
            <motion.nav
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: isScrolled ? -120 : 0, opacity: isScrolled ? 0 : 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4"
            >
                <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/10 border border-white/20 px-4 sm:px-6 py-3">
                    <div className="flex items-center justify-between h-14">
                        {/* Logo */}
                        <Link href="/" className="flex items-center text-lg sm:text-xl font-bold text-slate-900 hover:text-slate-700 transition-colors group">
                            <Image
                                src="/logo.png"
                                alt="SaiyoniX Logo"
                                width={48}
                                height={48}
                                className="w-10 h-10 md:w-12 md:h-12 transition-transform group-hover:scale-110"
                            />
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                            {menuItems.map((item) => (
                                <motion.div
                                    key={item.url}
                                    className="relative"
                                    onMouseEnter={() => setHoveredItem(item.url)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        href={item.url}
                                        className={`flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all ${linkStyle(item.url)}`}
                                        onClick={() => {
                                            if (item.url === "/") {
                                                window.scrollTo({ top: 0, behavior: "smooth" })
                                            }
                                        }}
                                    >
                                        {item.title}
                                    </Link>
                                    {hoveredItem === item.url && (
                                        <motion.div
                                            layoutId="navbar-hover"
                                            className="absolute inset-0 bg-slate-200/50 rounded-xl -z-10"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        />
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile hamburger */}
                        <div className="md:hidden">
                            <motion.button
                                onClick={toggleMenu}
                                className="p-2 text-slate-700 hover:text-slate-950 rounded-lg hover:bg-slate-100 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Menu className="w-6 h-6" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Floating Hamburger - visible when scrolled */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: isScrolled ? 1 : 0, opacity: isScrolled ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onClick={toggleMenu}
                className="fixed top-6 right-6 z-50 w-14 h-14 bg-slate-800 text-white rounded-full shadow-lg flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
            >
                <Menu className="w-6 h-6" />
            </motion.button>

            {/* Floating Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40"
                            onClick={toggleMenu}
                        />

                        <motion.div
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
                        >
                            <div className="relative bg-white border border-slate-200 rounded-3xl p-8 shadow-2xl min-w-[300px]">
                                <motion.button
                                    onClick={toggleMenu}
                                    className="absolute top-4 right-4 p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-full transition-colors"
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <X className="w-5 h-5" />
                                </motion.button>

                                <div className="space-y-4 mt-8">
                                    {menuItems.map((item) => (
                                        <motion.div
                                            key={item.url}
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.05, x: 10 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Link
                                                href={item.url}
                                                onClick={toggleMenu}
                                                className={`flex items-center space-x-4 p-4 rounded-xl hover:bg-slate-100 transition-colors group ${linkStyle(item.url)}`}
                                            >
                                                <span className={`text-base font-medium group-hover:text-blue-700 ${pathname === item.url ? "text-blue-700 font-bold" : "text-slate-700"}`}>
                                                    {item.title}
                                                </span>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    className="absolute -top-2 -left-2 w-4 h-4 bg-blue-500 rounded-full"
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <motion.div
                                    className="absolute -bottom-2 -right-2 w-3 h-3 bg-blue-400 rounded-full"
                                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}