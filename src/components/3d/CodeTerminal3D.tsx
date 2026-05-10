"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const TERMINAL_STEPS = [
  { text: "Initializing edge nodes...", delay: 800 },
  { text: "Scaling orchestration layer...", delay: 1200 },
  { text: "AI pipeline synchronized", delay: 900 },
  { text: "Global deployment complete", delay: 0 },
];

export default function CodeTerminal3D() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isDeploying, setIsDeploying] = useState(false);
  const [step, setStep] = useState(-1);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const handleDeploy = () => {
    if (isDeploying) return;
    setIsDeploying(true);
    setStep(0);
  };

  useEffect(() => {
    if (!isDeploying || step >= TERMINAL_STEPS.length - 1) return;

    const timer = setTimeout(() => {
      setStep(prev => prev + 1);
    }, TERMINAL_STEPS[step]?.delay || 1000);

    return () => clearTimeout(timer);
  }, [isDeploying, step]);

  return (
    <div 
      className="w-full max-w-2xl mx-auto cursor-crosshair [perspective:1200px]"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <motion.div
        ref={cardRef}
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="bg-[#0d0f14]/85 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_48px_120px_rgba(0,0,0,.7),0_0_0_1px_rgba(255,255,255,0.06)] relative"
      >
        {/* Dynamic Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent opacity-50 pointer-events-none" style={{ transform: 'translateZ(1px)' }} />

        {/* Header */}
        <div style={{ transform: 'translateZ(20px)' }} className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-[#12141a]/95">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
          </div>
          <div className="font-mono text-[10px] text-text-3 tracking-widest uppercase">saiyonix-deploy.ts</div>
          <div className="font-mono text-[10px] text-accent/80 tracking-widest flex items-center gap-2">
            <span className={`w-1.5 h-1.5 rounded-full bg-accent ${isDeploying ? 'animate-pulse' : 'opacity-40'}`} /> CPU {isDeploying ? '24%' : '02%'}
          </div>
        </div>
        
        {/* Code Editor */}
        <div style={{ transform: 'translateZ(40px)' }} className="p-6 md:p-10 font-mono text-[12px] md:text-[13.5px] leading-[1.8] text-[#abb2bf] overflow-hidden">
          <div className="flex gap-4"><span className="w-6 text-white/10 text-right select-none text-[11px]">1</span><span className="flex gap-2"><span className="text-[#c678dd]">import</span> {'{'} <span className="text-[#61afef]">SaiyonixCloud</span> {'}'} <span className="text-[#c678dd]">from</span> <span className="text-[#98c379]">&apos;@saiyonix/core&apos;</span></span></div>
          <div className="flex gap-4"><span className="w-6 text-white/10 text-right select-none text-[11px]">2</span></div>
          <div className="flex gap-4"><span className="w-6 text-white/10 text-right select-none text-[11px]">3</span><span className="flex gap-2"><span className="text-[#c678dd]">const</span> <span className="text-[#e5c07b]">infrastructure</span> <span className="text-[#56b6c2]">=</span> <span className="text-[#c678dd]">new</span> <span className="text-[#e5c07b]">SaiyonixCloud</span>({'{'}</span></div>
          <div className="flex gap-4"><span className="w-6 text-white/10 text-right select-none text-[11px]">4</span><span>  region: <span className="text-[#98c379]">&apos;global-edge&apos;</span>,</span></div>
          <div className="flex gap-4"><span className="w-6 text-white/10 text-right select-none text-[11px]">5</span><span>  autoScale: <span className="text-[#d19a66]">true</span>,</span></div>
          <div className="flex gap-4"><span className="w-6 text-white/10 text-right select-none text-[11px]">6</span><span className="text-white/20">// Continuous sync enabled</span></div>
          <div className="flex gap-4"><span className="w-6 text-white/10 text-right select-none text-[11px]">7</span><span>{'}'});</span></div>
          <div className="flex gap-4"><span className="w-6 text-white/10 text-right select-none text-[11px]">8</span></div>
          <div className="flex gap-4"><span className="w-6 text-white/10 text-right select-none text-[11px]">9</span>
            {isDeploying ? (
               <span className="text-[#c678dd]">await <span className="text-[#61afef]">infrastructure.deploy</span>();</span>
            ) : (
              <button 
                onClick={handleDeploy}
                className="text-[#61afef] hover:text-[#98c379] transition-colors flex items-center gap-1 group/btn"
              >
                <span className="text-[#c678dd]">await</span> infrastructure.deploy();
                <span className="text-[10px] bg-[#98c379]/10 text-[#98c379] px-2 py-0.5 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity">Execute</span>
              </button>
            )}
          </div>
        </div>
        
        {/* Terminal Output */}
        <div style={{ transform: 'translateZ(60px)' }} className="bg-[#090a0d]/90 p-6 md:p-8 border-t border-white/5 font-mono text-[11px] md:text-[12px] min-h-[160px]">
          <div className="text-white/20 mb-4 text-[9px] tracking-[0.2em] uppercase flex items-center justify-between">
            <span>Terminal Output</span>
            {isDeploying && <span className="text-accent animate-pulse">Running...</span>}
          </div>
          <div className="space-y-2">
            {!isDeploying && (
              <div className="text-white/30 italic">Waiting for deployment command...</div>
            )}
            <AnimatePresence>
              {TERMINAL_STEPS.map((s, i) => (
                step >= i && (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3"
                  >
                    <span className={i === step && i !== TERMINAL_STEPS.length - 1 ? "text-accent" : "text-[#98c379]"}>
                      {i < step || i === TERMINAL_STEPS.length - 1 ? '✓' : '⟳'}
                    </span>
                    <span className={i === TERMINAL_STEPS.length - 1 ? "text-white" : "text-[#98c379]/80"}>{s.text}</span>
                    {i === step && i !== TERMINAL_STEPS.length - 1 && (
                      <span className="w-1.5 h-3 bg-accent animate-pulse" />
                    )}
                  </motion.div>
                )
              ))}
            </AnimatePresence>
            {step === TERMINAL_STEPS.length - 1 && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="mt-4 pt-4 border-t border-white/5 text-accent/60 text-[10px] tracking-widest uppercase"
              >
                SAIYONIX CORE SYNCED SUCCESSFULLY
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
