"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Link from "next/link";
import { useImagePreloader } from "./useImagePreloader";
import SceneSequence from "./SceneSequence";

export default function HeroCinematic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out the scroll progress for cinematic feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Preload sequences
  const seq1 = useImagePreloader("/sequence-dev-1", 84);
  const seq2 = useImagePreloader("/sequence-dev-2", 36);

  // Scene progress mapping
  // Scene 1 & 2 use seq1 (frames 1-84)
  // Scene 1: 0 -> 0.35
  // Scene 2: 0.35 -> 0.7
  // So seq1 progress is 0 -> 1 over 0 -> 0.7 total progress
  const seq1Progress = useTransform(smoothProgress, [0, 0.7], [0, 1]);
  
  // Scene 3 uses seq2 (frames 1-36)
  // Scene 3: 0.7 -> 1
  const seq2Progress = useTransform(smoothProgress, [0.7, 1], [0, 1]);

  // Text Animations
  const text1Opacity = useTransform(smoothProgress, [0, 0.1, 0.25, 0.35], [0, 1, 1, 0]);
  const text1Y = useTransform(smoothProgress, [0, 0.1, 0.25, 0.35], [20, 0, 0, -20]);

  const text2Opacity = useTransform(smoothProgress, [0.35, 0.45, 0.6, 0.7], [0, 1, 1, 0]);
  const text2Y = useTransform(smoothProgress, [0.35, 0.45, 0.6, 0.7], [20, 0, 0, -20]);

  const text3Opacity = useTransform(smoothProgress, [0.7, 0.8, 0.9, 1], [0, 1, 1, 1]);
  const text3Y = useTransform(smoothProgress, [0.7, 0.8, 0.9, 1], [20, 0, 0, 0]);

  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const l = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    setLenis(l);

    function raf(time: number) {
      l.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      l.destroy();
    };
  }, []);

  // Map MotionValue to number for SceneSequence
  const [s1Prog, setS1Prog] = useState(0);
  const [s2Prog, setS2Prog] = useState(0);
  const [totalProg, setTotalProg] = useState(0);

  useEffect(() => {
    const unsub1 = seq1Progress.on("change", (v) => setS1Prog(v));
    const unsub2 = seq2Progress.on("change", (v) => setS2Prog(v));
    const unsubTotal = smoothProgress.on("change", (v) => setTotalProg(v));
    return () => {
      unsub1();
      unsub2();
      unsubTotal();
    };
  }, [seq1Progress, seq2Progress, smoothProgress]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[#050505] overflow-clip">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        {/* Background Sequences */}
        <div className="absolute inset-0 z-0">
          <SceneSequence 
            images={seq1.images} 
            progress={s1Prog} 
            isActive={totalProg < 0.7} 
          />
          <SceneSequence 
            images={seq2.images} 
            progress={s2Prog} 
            isActive={totalProg >= 0.7} 
          />
          
          {/* Optional Lighting Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent opacity-60" />
          <div className="absolute inset-0 bg-linear-to-r from-[#050505]/40 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-2xl text-left">
            {/* Scene 1 Text */}
            <motion.div
              style={{ opacity: text1Opacity, y: text1Y }}
              className="absolute inset-0 flex flex-col justify-center pointer-events-none"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white">
                Building secure.<br />
                <span className="text-blue-400">Scalable.</span><br />
                Intelligent systems.
              </h1>
            </motion.div>

            {/* Scene 2 Text */}
            <motion.div
              style={{ opacity: text2Opacity, y: text2Y }}
              className="absolute inset-0 flex flex-col justify-center pointer-events-none"
            >
              <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white">
                We build software that<br />
                <span className="text-emerald-400">powers progress.</span>
              </h2>
            </motion.div>

            {/* Scene 3 Text */}
            <motion.div
              style={{ opacity: text3Opacity, y: text3Y }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
                From backend systems to<br />
                seamless experiences,<br />
                we craft digital products<br />
                <span className="text-purple-400">that matter.</span>
              </h2>
              <Link
                href="/services"
                className="group w-fit flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-neutral-100 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
              >
                Explore Our Work
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: useTransform(smoothProgress, [0, 0.05], [1, 0]) }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-sm font-medium tracking-widest uppercase opacity-40">Scroll</span>
          <div className="w-px h-12 bg-linear-to-b from-white/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
