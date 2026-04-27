"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const OrbNode = ({ size = 6, delay = 0 }: { size?: number; delay?: number }) => (
    <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4 + delay, delay, repeat: Infinity, ease: "easeInOut" }}
        className="absolute rounded-full"
        style={{
            width: size,
            height: size,
            left: "50%",
            top: "50%",
            marginLeft: -size / 2,
            marginTop: -size / 2,
        }}
    />
);

export default function HeroContent() {
    return (
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full min-h-screen">
            {/* Left: Text Content */}
            <div className="text-left max-w-2xl pt-24 lg:pt-0">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-[11px] font-semibold tracking-[0.25em] uppercase text-blue-600 mb-6"
                >
                    SaiyoniX Technology Collective
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-950 mb-6 tracking-tight leading-[1.05]"
                >
                    We Build Systems That{" "}
                    <span className="gradient-text">Scale.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-slate-600 text-lg leading-relaxed mb-10 max-w-lg font-medium"
                >
                    Intelligent, secure platforms engineered for real-world demands.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start"
                >
                    <Link
                        href="/projects"
                        className="btn-primary group"
                    >
                        <span className="flex items-center justify-center gap-2">
                            Explore Our Work
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </Link>

                    <Link
                        href="/about"
                        className="px-8 py-4 border border-slate-300 rounded-xl text-slate-700 font-semibold hover:border-slate-400 hover:bg-slate-50/80 hover:text-slate-900 transition-all duration-200 text-center backdrop-blur-sm"
                    >
                        Who We Are
                    </Link>
                </motion.div>
            </div>

            {/* Right: Visual Container */}
            <div className="hidden lg:flex items-center justify-center pt-24 lg:pt-0">
                <div className="relative w-full max-w-md aspect-square">
                    {/* Ambient glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] rounded-full" />

                    {/* Outer container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="relative w-full h-full rounded-4xl bg-white border border-slate-200 shadow-2xl shadow-slate-200/60 overflow-hidden"
                    >
                        {/* Inner frame */}
                        <div className="absolute inset-6 rounded-2xl border border-slate-200/60 bg-linear-to-br from-slate-100/50 to-transparent" />

                        {/* Grid lines */}
                        <div className="absolute inset-0 opacity-[0.03]" style={{
                            backgroundImage: `linear-gradient(rgba(59,130,246,0.5)_1px,transparent_1px), linear-gradient(90deg,rgba(59,130,246,0.5)_1px,transparent_1px)`,
                            backgroundSize: "40px 40px"
                        }} />

                        {/* Center: Orbital System */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="absolute w-24 h-24 rounded-full bg-blue-500/10 blur-2xl" />

                            <div className="relative w-14 h-14">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 rounded-full border border-blue-200/40"
                                    style={{ borderStyle: "dashed" }}
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-2 rounded-full border border-blue-300/30"
                                    style={{ borderStyle: "dotted" }}
                                />
                                <div className="absolute inset-4 rounded-full bg-linear-to-br from-blue-100 to-blue-200 shadow-inner shadow-blue-200/50" />
                            </div>

                            <OrbNode size={6} delay={0} />
                            <OrbNode size={4} delay={1.2} />
                            <OrbNode size={5} delay={2.4} />
                            <OrbNode size={4} delay={0.8} />
                            <OrbNode size={6} delay={3.2} />
                            <OrbNode size={3} delay={1.8} />
                        </div>

                        {/* Corner accents */}
                        <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-slate-300/40 rounded-tl-lg" />
                        <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-slate-300/40 rounded-tr-lg" />
                        <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-slate-300/40 rounded-bl-lg" />
                        <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-slate-300/40 rounded-br-lg" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}