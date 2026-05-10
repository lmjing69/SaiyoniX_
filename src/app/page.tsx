"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import MagneticButton from "@/components/ui/MagneticButton";
import InfrastructureTerminal from "@/components/ui/InfrastructureTerminal";
import BackgroundCode from "@/components/ui/BackgroundCode";
import SkillsMarquee from "@/components/ui/SkillsMarquee";

const EarthGlobe = dynamic(() => import("@/components/3d/EarthGlobe"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

function usePageNavigate() {
  const router = useRouter();
  return useCallback((href: string) => {
    const wipe = document.getElementById("PT-WIPE");
    if (!wipe) { router.push(href); return; }
    gsap.to(wipe, {
      scaleY: 1, duration: 0.42, ease: "power3.in", transformOrigin: "bottom",
      onComplete: () => {
        router.push(href);
        gsap.to(wipe, { scaleY: 0, duration: 0.52, ease: "power3.out", transformOrigin: "top", delay: 0.12 });
      },
    });
  }, [router]);
}

export default function Home() {
  const navigate = usePageNavigate();

  useEffect(() => {
    const reveals = document.querySelectorAll(".rv");
    reveals.forEach((el) =>
      ScrollTrigger.create({ trigger: el, start: "top 86%", onEnter: () => el.classList.add("on-view") })
    );
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center overflow-hidden grid-overlay">
        <Image
          src="https://images.unsplash.com/photo-1639322537228-f710d846310a"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.18] saturate-[0.5] -z-20"
          alt="Technical infrastructure background"
        />
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-bg via-transparent to-transparent opacity-60 -z-10" />
        
        {/* Animated Background Code */}
        <BackgroundCode />

        <div className="w-full h-full px-4 sm:px-8 lg:px-24 grid lg:grid-cols-[1.2fr_1fr] items-center relative z-10 gap-12 lg:gap-0">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left max-w-[800px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-mono text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-(--amber) mb-4 sm:mb-6"
            >
              Saiyonix Systems Corp
            </motion.div>

            <h1 className="font-display text-[12vw] sm:text-6xl lg:text-[5.8vw] font-extrabold leading-[1.0] tracking-tight mb-6 sm:mb-8">
              <span className="block overflow-hidden pb-1 sm:pb-2">
                <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="inline-block text-white">Engineering</motion.span>
              </span>
              <span className="block overflow-hidden pb-1 sm:pb-2">
                <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="inline-block text-text-2">the Systems</motion.span>
              </span>
              <span className="block overflow-hidden pb-1 sm:pb-2">
                <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="inline-block text-white">of Tomorrow.</motion.span>
              </span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.8, duration: 0.7 }}
              className="text-sm sm:text-base md:text-xl text-text-1 leading-relaxed max-w-xl mb-8 sm:mb-12 font-medium"
            >
              Building secure infrastructure, intelligent automation, and scalable platforms for elite enterprise ecosystems. Architecture that scales with your ambition.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 1, duration: 0.6 }} 
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-8 w-full sm:w-auto"
            >
              <MagneticButton
                onClick={() => navigate("/services")}
                className="bg-(--amber) text-[#040407] w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-sm sm:text-base transition-all hover:bg-(--amber-light) flex items-center justify-center gap-2 shadow-xl shadow-(--amber)/10"
              >
                Deploy Solutions <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </MagneticButton>
              <button 
                onClick={() => navigate("/projects")} 
                className="text-text-1 hover:text-white transition-colors px-6 py-4 text-sm sm:text-base font-semibold relative group text-center"
              >
                View our work
                <span className="absolute bottom-3 left-6 right-6 h-px bg-(--amber) scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: 3D Globe */}
          <div className="relative w-full h-[60vw] lg:h-full flex items-center justify-center lg:hidden lg:!flex">
            <div className="w-[100%] lg:w-[120%] aspect-square relative group">
              <EarthGlobe />
              {/* Interaction Hint */}
              <motion.div 
                initial={{ opacity: 0.6 }} 
                animate={{ opacity: 0 }} 
                transition={{ delay: 3, duration: 1 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  Drag to rotate
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 font-mono text-[9px] tracking-[0.25em] uppercase text-text-3">
          Scroll to explore
          <div className="w-7 h-7 border border-white/10 rounded-full flex items-center justify-center animate-bounce">
            <ArrowRight className="w-3 h-3 rotate-90" />
          </div>
        </motion.div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="border-y border-white/5 py-5 overflow-hidden bg-bg">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0">
              {["Intelligent Infrastructure","Connected Ecosystems","Autonomous Workflows","Enterprise Architecture","AI-Assisted Systems","Edge Deployment","Operational Intelligence","Scalable Platforms"].map((t) => (
                <div key={t} className="flex items-center gap-4 md:gap-7 px-4 md:px-7 font-display text-[9px] md:text-[11px] font-bold tracking-[0.14em] uppercase text-text-2 hover:text-white transition-all duration-300 group cursor-default">
                  {t}<div className="w-1 h-1 rounded-full bg-(--amber) opacity-70 group-hover:scale-150 group-hover:opacity-100 transition-transform" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── METHODOLOGY ── */}
      <section className="grid md:grid-cols-3 border-t border-white/5 bg-bg relative overflow-hidden">
        {[
          { 
            idx: "01", 
            title: "Diagnose", 
            accent: "system", 
            body: "Every engagement begins with a deep audit of your operational architecture. We trace dependencies, failure points, and inefficiencies before a single line of code is written.",
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
          },
          { 
            idx: "02", 
            title: "Engineer", 
            accent: "decades", 
            body: "Architecture that scales, adapts, and survives organizational change. No shortcuts, no templates. Every system is designed from first principles around your operational reality.",
            img: "https://images.unsplash.com/photo-1518770660439-4636190af475" 
          },
          { 
            idx: "03", 
            title: "Operate", 
            accent: "silence", 
            body: "The best infrastructure is the kind you never think about. We measure success by the silence of a system running so smoothly it becomes invisible.",
            img: "https://images.unsplash.com/photo-1597733336794-12d05021d510" 
          },
        ].map((item, i) => (
          <div key={i} className="group p-6 md:p-14 border-r border-white/5 relative overflow-hidden transition-all duration-700 hover:bg-surface-1 min-h-[350px] md:min-h-[400px] flex flex-col justify-end">
            {/* Background Image */}
            <Image 
              src={item.img} 
              fill 
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover opacity-[0.05] group-hover:opacity-[0.15] transition-opacity duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110"
              alt={item.title}
            />
            <div className="absolute inset-0 bg-linear-to-t from-bg via-transparent to-transparent opacity-60" />
            
            <div className="relative z-10">
              <div className="font-mono text-[10.5px] text-accent/50 tracking-widest mb-8 md:mb-11 uppercase">{item.idx} // {item.title}</div>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold leading-tight tracking-tight mb-4 md:mb-5 text-white">
                We {i === 0 ? "map" : i === 1 ? "build for" : "measure success by"}{" "}
                <span className="text-(--amber)">{item.accent},</span>{" "}
                {i === 0 ? "not just the problem." : i === 1 ? "not demos." : "not noise."}
              </h3>
              <p className="text-sm text-text-1 leading-relaxed max-w-[320px] mb-4 opacity-100 transition-opacity duration-500">{item.body}</p>
              <div className="h-0.5 w-0 bg-linear-to-r from-transparent to-(--amber) group-hover:w-full transition-all duration-700 mt-6" />
            </div>
          </div>
        ))}
      </section>

      {/* ── CODE TERMINAL ── */}
      <section className="py-16 md:py-32 relative overflow-hidden border-t border-white/5">
        <Image 
          src="https://images.unsplash.com/photo-1639322537228-f710d846310a"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.08] grayscale brightness-50"
          alt="Technical infrastructure background"
        />

        <div className="absolute inset-0 bg-linear-to-t from-bg via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 bg-radial-accent opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div className="rv">
            <div className="inline-flex items-center gap-2 text-(--amber) font-mono text-[10.5px] tracking-[0.16em] uppercase mb-4 md:mb-6">
              <span className="w-5 h-px bg-(--amber)" /> Developer Experience
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.05] tracking-tight mb-4 md:mb-6 text-white">
              Precision software<br />engineered for scale.
            </h2>
            <p className="text-text-1 text-[14px] md:text-[15px] leading-[1.8] max-w-md mb-8 md:mb-10">
              Deploy complex edge architecture, scale ML pipelines, and connect distributed silos using tools built for engineers with a code-first ethos in everything we ship.
            </p>
            <ul className="space-y-4 mb-8 md:mb-10">
              {["Zero-downtime orchestration", "Defense-grade data pipelines", "Real-time state synchronization"].map((feat) => (
                <li key={feat} className="flex items-center gap-3 text-text-1 text-sm font-medium">
                  <div className="w-4 h-4 rounded-full border border-(--amber)/30 bg-(--amber)/10 flex items-center justify-center text-(--amber) shrink-0">
                    <svg width="8" height="8" viewBox="0 0 14 14" fill="none"><path d="M1 7L4.5 11L13 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  {feat}
                </li>
              ))}
            </ul>
          </div>
          <div className="rv d2 z-10 w-full overflow-visible">
            <InfrastructureTerminal />
          </div>
        </div>
      </section>

      {/* ── SERVICES STRIP ── */}
      <section className="py-16 md:py-32 overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-20 mb-12 md:mb-16 flex justify-between items-end text-white">
          <div className="rv">
            <div className="flex items-center gap-2 font-mono text-[10.5px] tracking-[0.16em] uppercase text-(--amber) mb-4">
              <div className="w-5 h-px bg-(--amber)" /> Services
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[1.04] tracking-tight">What we<br />engineer.</h2>
          </div>
          <button onClick={() => navigate("/services")} className="rv d2 text-text-2 hover:text-text-0 transition-colors border-b border-(--amber)/0 hover:border-(--amber) pb-1 text-sm font-medium hidden sm:block">
            All services →
          </button>
        </div>
        <div className="flex gap-4 md:gap-5 px-4 md:px-8 lg:px-20 overflow-x-auto pb-10 no-scrollbar cursor-grab snap-x snap-mandatory">
          {[
            { n: "01", t: "Intelligent Infrastructure", p: "Cloud-native, edge-optimized systems built for zero-downtime scale. Deployed globally.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
            { n: "02", t: "Connected Ecosystems", p: "API platforms that bind disconnected systems into one coherent operational network.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa" },
            { n: "03", t: "AI-Assisted Workflows", p: "ML-ops frameworks that reduce operational load and amplify decision-making precision.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995" },
            { n: "04", t: "Enterprise Architecture", p: "System design at organizational level — modular, secure, and built for real growth.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b" },
            { n: "05", t: "Custom Mobile Applications", p: "High-performance, cross-platform mobile systems engineered for complex enterprise needs.", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c" },
          ].map((s, i) => (
            <div key={i} className="w-[85vw] sm:w-[60vw] md:w-[420px] shrink-0 snap-center bg-surface-2 border border-white/10 rounded-2xl overflow-hidden group hover:border-accent/30 transition-all duration-500 shadow-2xl">
              <div className="h-56 md:h-64 overflow-hidden relative border-b border-white/5">
                <Image 
                  src={s.img} 
                  fill 
                  sizes="(max-width: 768px) 85vw, 420px"
                  className="object-cover brightness-[0.4] contrast-[1.1] saturate-[0.5] transition-all duration-1000 group-hover:scale-110 group-hover:brightness-[0.7] group-hover:saturate-[0.8]" 
                  alt={s.t} 
                  priority={i < 2}
                />
                <div className="absolute inset-0 bg-linear-to-t from-bg via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-6 md:p-8 pb-8 md:pb-10 relative text-white">
                <div className="font-mono text-[10px] text-accent/60 tracking-widest mb-3 md:mb-4 uppercase">{s.n} — Engineering Unit</div>
                <h3 className="font-display text-xl md:text-2xl font-bold mb-2 md:mb-3 text-white group-hover:text-accent transition-colors">{s.t}</h3>
                <p className="text-[13px] md:text-[14px] text-text-2 leading-relaxed line-clamp-2">{s.p}</p>
                <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 w-8 md:w-10 h-8 md:h-10 rounded-full border border-white/10 flex items-center justify-center text-text-3 transition-all duration-500 group-hover:border-accent group-hover:text-accent group-hover:rotate-45">
                  <ArrowRight className="w-3 md:w-4 h-3 md:h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="px-4 md:hidden mt-4">
          <button onClick={() => navigate("/services")} className="w-full text-center text-text-1 hover:text-white transition-colors border border-white/10 rounded-xl py-4 text-sm font-medium">
            Explore All Services →
          </button>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="py-16 md:py-32 border-t border-white/5 relative overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.12] grayscale contrast-125 transition-all duration-1000"
          alt="Global systems connectivity"
        />
        <div className="absolute inset-0 bg-linear-to-t from-bg via-transparent to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-20 text-center relative z-10 text-white">
          <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-(--amber) mb-6 md:mb-8 rv">Our Philosophy</div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-8xl font-extrabold leading-[1.02] tracking-tight mb-8 md:mb-12">
            <span className="block rv">The world</span>
            <span className="block rv d1 text-(--amber)">is made of</span>
            <span className="block rv d2 text-(--amber)">broken systems.</span>
            <span className="block rv d3 text-text-1">We fix them.</span>
          </h2>
          <div className="max-w-[600px] mx-auto rv d4">
            <p className="text-base sm:text-lg md:text-[17px] text-text-1 leading-[1.75]">
              Schools. Hospitals. Enterprises. Governments. Most systems that hold civilization together are inefficient, disconnected, and chaotic — not because the problems are unsolvable, but because nobody has applied the right level of engineering intelligence to them.
            </p>
          </div>
        </div>
      </section>

      {/* ── SKILLS MARQUEE ── */}
      <SkillsMarquee />

      {/* ── SELECTED WORK ── */}
      <section className="py-16 md:py-32 overflow-hidden bg-surface-1/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-20 mb-12 md:mb-16 flex justify-between items-end text-white">
          <div className="rv">
            <div className="flex items-center gap-2 font-mono text-[10.5px] tracking-[0.16em] uppercase text-(--amber) mb-4">
              <div className="w-5 h-px bg-(--amber)" /> Selected Work
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight">Systems engineered.<br />Problems eliminated.</h2>
          </div>
          <button onClick={() => navigate("/projects")} className="hidden sm:block text-text-1 hover:text-text-0 transition-colors text-sm font-medium underline underline-offset-8">
            All projects
          </button>
        </div>
        <div className="flex gap-4 md:gap-6 px-4 md:px-8 lg:px-20 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory">
          {[
            { wide: true, t: "NexusGrid — Global Edge Orchestration", tag: "Infrastructure", p: "12,000+ nodes, 34 regions. 78% latency reduction.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71" },
            { t: "ArcOS — Autonomous Operations", tag: "AI Systems", p: "AI-driven workflow for 2,400-person organization.", img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e" },
            { t: "VaultLayer — Enterprise Mesh", tag: "Architecture", p: "18 internal systems unified into one data mesh.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa" },
          ].map((proj, i) => (
            <div key={i} className={`shrink-0 rounded-2xl overflow-hidden border border-white/5 bg-surface-2 group transition-all duration-500 hover:border-white/10 snap-center ${proj.wide ? "w-[85vw] sm:w-[75vw] md:w-[680px]" : "w-[85vw] sm:w-[60vw] md:w-[520px]"}`}>
              <div className="h-56 md:h-72 overflow-hidden relative border-b border-white/5">
                <Image 
                  src={proj.img} 
                  fill 
                  sizes="(max-width: 768px) 85vw, 680px"
                  className="object-cover brightness-[0.4] saturate-[0.35] group-hover:brightness-[0.55] transition-all duration-700 group-hover:scale-105" 
                  alt={proj.t} 
                />
                <div className="absolute inset-0 bg-linear-to-t from-bg via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-6 md:p-10 relative text-white">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-(--amber-bg) border border-(--amber-rim) rounded-full text-(--amber) text-[11px] font-medium mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-(--amber) animate-pulse" /> {proj.tag}
                </div>
                <h3 className={`font-display font-bold text-white mb-2 md:mb-3 ${proj.wide ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>{proj.t}</h3>
                <p className="text-xs sm:text-sm text-text-1 leading-relaxed max-w-[480px]">{proj.p}</p>
                <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 w-8 md:w-10 h-8 md:h-10 border border-white/10 rounded-full flex items-center justify-center text-text-2 group-hover:border-(--amber) group-hover:text-(--amber) group-hover:rotate-45 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="px-4 sm:hidden mt-4">
          <button onClick={() => navigate("/projects")} className="w-full text-center text-text-1 hover:text-white transition-colors border border-white/10 rounded-xl py-4 text-sm font-medium">
            View All Projects →
          </button>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 md:px-8 lg:px-20 py-12 md:py-24 max-w-7xl mx-auto relative overflow-hidden">
        <div className="bg-surface-1 border border-white/10 rounded-3xl p-8 sm:p-12 md:p-24 text-center relative overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover opacity-[0.12] brightness-50 mix-blend-overlay"
            alt="Advanced systems background"
          />
          <div className="absolute inset-0 bg-linear-to-t from-bg via-transparent to-transparent opacity-60" />
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[200%] max-w-[800px] aspect-square bg-(--amber)/6.5 rounded-full blur-[100px] -z-10" />
          <div className="inline-flex items-center gap-3 font-mono text-[9px] md:text-[10.5px] tracking-[0.18em] uppercase text-(--amber) mb-6 md:mb-8">
            <div className="w-4 md:w-6 h-px bg-(--amber)" /> Start building <div className="w-4 md:w-6 h-px bg-(--amber)" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.07] mb-4 md:mb-6 text-white">
            Engineer your<br />tomorrow — today.
          </h2>
          <p className="text-text-1 text-sm sm:text-base md:text-lg max-w-[520px] mx-auto mb-8 md:mb-11 leading-relaxed">
            Let&apos;s architect something that outlasts the problem. Tell us what you&apos;re building and we&apos;ll show you how to make it intelligent, scalable, and precise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton onClick={() => navigate("/contact")} className="w-full sm:w-auto bg-(--amber) text-[#040407] px-8 sm:px-10 py-4 rounded-xl font-bold transition-all hover:bg-(--amber-light)">
              Start a Project →
            </MagneticButton>
            <button onClick={() => navigate("/about")} className="w-full sm:w-auto text-text-1 hover:text-text-0 px-6 py-4 transition-colors font-medium relative group">
              Learn more
              <span className="absolute bottom-3 left-6 right-6 h-px bg-text-1 scale-x-0 group-hover:scale-x-100 transition-transform hidden sm:block" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
