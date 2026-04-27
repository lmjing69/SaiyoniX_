"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ── Orb node, properly placed at angle + radius ── */
const OrbNode = ({
    size = 6,
    delay = 0,
    angle = 0,
    radius = 40,
    color = "#60a5fa",
    glowColor = "rgba(96,165,250,0.6)",
}: {
    size?: number;
    delay?: number;
    angle?: number;
    radius?: number;
    color?: string;
    glowColor?: string;
}) => {
    const rad = (angle * Math.PI) / 180;
    const x = Math.cos(rad) * radius;
    const y = Math.sin(rad) * radius;

    return (
        <motion.div
            animate={{ y: [y, y - 7, y] }}
            transition={{ duration: 3.5, delay, repeat: Infinity, ease: "easeInOut" }}
            style={{
                position: "absolute",
                width: size,
                height: size,
                borderRadius: "50%",
                background: color,
                boxShadow: `0 0 ${size * 2.5}px ${glowColor}`,
                left: "50%",
                top: "50%",
                marginLeft: x - size / 2,
                marginTop: y - size / 2,
            }}
        />
    );
};

/* ── Floating metric card ── */
const MetricCard = ({
    value,
    label,
    delay,
    style,
}: {
    value: string;
    label: string;
    delay: number;
    style: React.CSSProperties;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
            position: "absolute",
            backdropFilter: "blur(16px)",
            background: "rgba(15,23,42,0.75)",
            border: "1px solid rgba(148,163,184,0.12)",
            borderRadius: 14,
            padding: "12px 18px",
            ...style,
        }}
    >
        <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 22, fontWeight: 800, color: "#f8fafc", lineHeight: 1.1 }}>
            {value}
        </div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#64748b", marginTop: 3, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            {label}
        </div>
    </motion.div>
);

/* ── Animated background grid ── */
const GridBackground = () => (
    <div
        style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
                linear-gradient(rgba(148,163,184,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(148,163,184,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
        }}
    />
);

/* ── Grain texture overlay ── */
const GrainOverlay = () => (
    <div
        style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 100,
            opacity: 0.025,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
    />
);

/* ── Tech badge ── */
const TechBadge = ({ label, delay }: { label: string; delay: number }) => (
    <motion.span
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay }}
        style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "rgba(30,41,59,0.8)",
            border: "1px solid rgba(148,163,184,0.1)",
            borderRadius: 6,
            padding: "4px 10px",
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            color: "#94a3b8",
            letterSpacing: "0.04em",
        }}
    >
        <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#3b82f6", display: "inline-block" }} />
        {label}
    </motion.span>
);

/* ══════════════════════════════════════════════
   MAIN HERO COMPONENT
══════════════════════════════════════════════ */
export default function HeroContent() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

    const rotateX = useTransform(springY, [-300, 300], [8, -8]);
    const rotateY = useTransform(springX, [-300, 300], [-8, 8]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
    };

    return (
        <>
            {/* ── Google Fonts ── */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

                * { box-sizing: border-box; }

                .hero-wrapper {
                    min-height: 100vh;
                    background: #050a14;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                }

                .gradient-text {
                    background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #38bdf8 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .btn-primary {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: linear-gradient(135deg, #3b82f6, #6366f1);
                    color: #fff;
                    padding: 14px 28px;
                    border-radius: 12px;
                    font-family: 'DM Sans', sans-serif;
                    font-weight: 600;
                    font-size: 15px;
                    text-decoration: none;
                    transition: all 0.25s ease;
                    box-shadow: 0 0 32px rgba(99,102,241,0.35), 0 1px 0 rgba(255,255,255,0.08) inset;
                    border: 1px solid rgba(255,255,255,0.1);
                    position: relative;
                    overflow: hidden;
                }

                .btn-primary::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, rgba(255,255,255,0.12), transparent);
                    opacity: 0;
                    transition: opacity 0.2s;
                }

                .btn-primary:hover::before { opacity: 1; }
                .btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 0 48px rgba(99,102,241,0.5), 0 8px 24px rgba(0,0,0,0.3);
                }

                .btn-secondary {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(15,23,42,0.6);
                    color: #94a3b8;
                    padding: 14px 28px;
                    border-radius: 12px;
                    font-family: 'DM Sans', sans-serif;
                    font-weight: 500;
                    font-size: 15px;
                    text-decoration: none;
                    border: 1px solid rgba(148,163,184,0.12);
                    transition: all 0.25s ease;
                    backdrop-filter: blur(12px);
                }

                .btn-secondary:hover {
                    border-color: rgba(148,163,184,0.25);
                    color: #e2e8f0;
                    transform: translateY(-2px);
                    background: rgba(30,41,59,0.7);
                }

                .status-dot {
                    width: 6px; height: 6px; border-radius: 50%;
                    background: #22c55e;
                    box-shadow: 0 0 8px rgba(34,197,94,0.8);
                    animation: pulse-dot 2s ease-in-out infinite;
                }

                @keyframes pulse-dot {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(0.8); }
                }

                @keyframes orbit-slow {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }

                @keyframes orbit-rev {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(-360deg); }
                }

                .ring-1 { animation: orbit-slow 18s linear infinite; }
                .ring-2 { animation: orbit-rev 12s linear infinite; }
                .ring-3 { animation: orbit-slow 28s linear infinite; }
            `}</style>

            <GrainOverlay />

            <div className="hero-wrapper" onMouseMove={handleMouseMove} ref={containerRef}>
                <GridBackground />

                {/* Ambient radial glows */}
                <div style={{ position: "absolute", top: "20%", left: "30%", width: 600, height: 600, background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: "10%", right: "20%", width: 400, height: 400, background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />

                {/* ── INNER LAYOUT ── */}
                <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", minHeight: "100vh" }}>

                    {/* ══ LEFT: Text ══ */}
                    <div style={{ paddingTop: 80 }}>

                        {/* Status bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(15,23,42,0.7)", border: "1px solid rgba(148,163,184,0.1)", borderRadius: 100, padding: "6px 14px 6px 10px", marginBottom: 28 }}
                        >
                            <span className="status-dot" />
                            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#64748b", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                                SaiyoniX Technology Collective
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 32 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                            style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(44px, 5.5vw, 76px)", fontWeight: 800, color: "#f8fafc", lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 24px" }}
                        >
                            We Build Systems
                            <br />
                            That{" "}
                            <span className="gradient-text">Scale.</span>
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.24, ease: [0.25, 0.1, 0.25, 1] }}
                            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: "#64748b", lineHeight: 1.7, marginBottom: 28, maxWidth: 440, fontWeight: 400 }}
                        >
                            Intelligent, secure platforms engineered for real-world demands —
                            APIs, AI pipelines, and cloud infrastructure built to last.
                        </motion.p>

                        {/* Tech stack badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.32 }}
                            style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}
                        >
                            {["Next.js", "TypeScript", "Rust", "Kubernetes", "LLMs"].map((t, i) => (
                                <TechBadge key={t} label={t} delay={0.35 + i * 0.06} />
                            ))}
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.44, ease: [0.25, 0.1, 0.25, 1] }}
                            style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap", marginBottom: 48 }}
                        >
                            <Link href="/projects" className="btn-primary">
                                Explore Our Work
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                            <Link href="/about" className="btn-secondary">
                                Who We Are
                            </Link>
                        </motion.div>

                        {/* Social proof */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            style={{ display: "flex", gap: 32, borderTop: "1px solid rgba(148,163,184,0.08)", paddingTop: 28 }}
                        >
                            {[
                                { value: "18+", label: "Products Shipped" },
                                { value: "4", label: "Countries" },
                                { value: "99.9%", label: "Uptime SLA" },
                            ].map(({ value, label }) => (
                                <div key={label}>
                                    <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 24, fontWeight: 800, color: "#f8fafc" }}>{value}</div>
                                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#475569", marginTop: 2, textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* ══ RIGHT: Visual Panel ══ */}
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: 80, position: "relative" }}>
                        <motion.div
                            style={{ rotateX, rotateY, transformPerspective: 1000 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            {/* Main card */}
                            <div style={{
                                width: 420,
                                height: 420,
                                borderRadius: 28,
                                background: "linear-gradient(145deg, rgba(15,23,42,0.95) 0%, rgba(8,15,30,0.98) 100%)",
                                border: "1px solid rgba(148,163,184,0.1)",
                                boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03) inset, 0 1px 0 rgba(255,255,255,0.06) inset",
                                position: "relative",
                                overflow: "hidden",
                            }}>
                                {/* Inner grid */}
                                <div style={{
                                    position: "absolute", inset: 0,
                                    backgroundImage: `linear-gradient(rgba(148,163,184,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.03) 1px, transparent 1px)`,
                                    backgroundSize: "32px 32px",
                                }} />

                                {/* Top bar: fake code header */}
                                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 48, borderBottom: "1px solid rgba(148,163,184,0.07)", display: "flex", alignItems: "center", padding: "0 20px", gap: 8 }}>
                                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(239,68,68,0.5)" }} />
                                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(234,179,8,0.5)" }} />
                                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(34,197,94,0.5)" }} />
                                    <span style={{ marginLeft: 12, fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#334155" }}>system.core — live</span>
                                    <span className="status-dot" style={{ marginLeft: "auto" }} />
                                </div>

                                {/* Orbital system */}
                                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>

                                    {/* Glow behind */}
                                    <div style={{ position: "absolute", width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)" }} />

                                    {/* Orbit rings */}
                                    <div className="ring-3" style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", border: "1px solid rgba(148,163,184,0.06)" }} />
                                    <div className="ring-1" style={{ position: "absolute", width: 148, height: 148, borderRadius: "50%", border: "1px dashed rgba(99,102,241,0.15)" }} />
                                    <div className="ring-2" style={{ position: "absolute", width: 96, height: 96, borderRadius: "50%", border: "1px dotted rgba(59,130,246,0.2)" }} />

                                    {/* Center core */}
                                    <div style={{ position: "relative", width: 48, height: 48, zIndex: 10 }}>
                                        <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "linear-gradient(135deg, #3b82f6, #6366f1)", boxShadow: "0 0 32px rgba(99,102,241,0.6), 0 0 64px rgba(99,102,241,0.3)" }} />
                                        <div style={{ position: "absolute", inset: 3, borderRadius: "50%", background: "linear-gradient(135deg, rgba(255,255,255,0.15), transparent)" }} />
                                    </div>

                                    {/* Properly placed orb nodes */}
                                    <OrbNode size={7}  angle={0}   radius={74} delay={0}    color="#60a5fa"  glowColor="rgba(96,165,250,0.7)" />
                                    <OrbNode size={5}  angle={60}  radius={74} delay={0.5}  color="#818cf8"  glowColor="rgba(129,140,248,0.7)" />
                                    <OrbNode size={6}  angle={120} radius={74} delay={1.0}  color="#38bdf8"  glowColor="rgba(56,189,248,0.7)" />
                                    <OrbNode size={5}  angle={180} radius={74} delay={1.5}  color="#818cf8"  glowColor="rgba(129,140,248,0.6)" />
                                    <OrbNode size={7}  angle={240} radius={74} delay={2.0}  color="#60a5fa"  glowColor="rgba(96,165,250,0.7)" />
                                    <OrbNode size={4}  angle={300} radius={74} delay={2.5}  color="#38bdf8"  glowColor="rgba(56,189,248,0.6)" />

                                    {/* Inner ring nodes */}
                                    <OrbNode size={4}  angle={30}  radius={48} delay={0.3}  color="#a78bfa"  glowColor="rgba(167,139,250,0.6)" />
                                    <OrbNode size={3}  angle={150} radius={48} delay={1.1}  color="#a78bfa"  glowColor="rgba(167,139,250,0.5)" />
                                    <OrbNode size={4}  angle={270} radius={48} delay={1.9}  color="#a78bfa"  glowColor="rgba(167,139,250,0.6)" />
                                </div>

                                {/* Corner accents */}
                                {[
                                    { top: 20, left: 20, borderTop: "1.5px solid rgba(99,102,241,0.3)", borderLeft: "1.5px solid rgba(99,102,241,0.3)" },
                                    { top: 20, right: 20, borderTop: "1.5px solid rgba(99,102,241,0.3)", borderRight: "1.5px solid rgba(99,102,241,0.3)" },
                                    { bottom: 20, left: 20, borderBottom: "1.5px solid rgba(99,102,241,0.3)", borderLeft: "1.5px solid rgba(99,102,241,0.3)" },
                                    { bottom: 20, right: 20, borderBottom: "1.5px solid rgba(99,102,241,0.3)", borderRight: "1.5px solid rgba(99,102,241,0.3)" },
                                ].map((s, i) => (
                                    <div key={i} style={{ position: "absolute", width: 16, height: 16, borderRadius: 2, ...s }} />
                                ))}

                                {/* Bottom label */}
                                <div style={{ position: "absolute", bottom: 18, left: "50%", transform: "translateX(-50%)", fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#1e3a5f", letterSpacing: "0.15em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                                    core.saiyon.ix / v3.1.0
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating metric cards */}
                        <MetricCard value="18+" label="Products Shipped" delay={0.7} style={{ top: "8%", right: "-14%", minWidth: 130 }} />
                        <MetricCard value="99.9%" label="Uptime SLA" delay={0.85} style={{ bottom: "22%", right: "-16%", minWidth: 130 }} />
                        <MetricCard value="4" label="Countries" delay={0.95} style={{ bottom: "8%", left: "-10%", minWidth: 110 }} />
                    </div>
                </div>
            </div>
        </>
    );
}