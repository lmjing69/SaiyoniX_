"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const TERMINAL_STEPS = [
  { text: "Initializing edge nodes...", delay: 800 },
  { text: "Scaling orchestration layer...", delay: 1200 },
  { text: "AI pipeline synchronized", delay: 900 },
  { text: "Global deployment complete", delay: 0 },
];

export default function InfrastructureTerminal() {
  const [step, setStep] = useState(0);
  const [isDeploying, setIsDeploying] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (!isDeploying) return;

    let currentStep = 0;
    
    const advanceStep = () => {
      if (currentStep < TERMINAL_STEPS.length - 1) {
        setTimeout(() => {
          currentStep++;
          setStep(currentStep);
          advanceStep();
        }, TERMINAL_STEPS[currentStep].delay);
      }
    };

    advanceStep();
  }, [isDeploying]);

  return (
    <ScrollReveal delayClass="d3" className="w-full max-w-2xl mx-auto perspective-distant">
      <motion.div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="bg-[#0b0c12] border border-white/10 rounded-[20px] overflow-hidden shadow-[0_48px_120px_rgba(0,0,0,.8),0_0_0_1px_rgba(255,255,255,0.05)] relative"
      >
        <div style={{ transform: 'translateZ(20px)' }} className="px-[18px] py-[13px] border-b border-white/5 flex items-center justify-between bg-[#0e1018]">
          <div className="flex gap-[6px]">
            <span className="w-[10px] h-[10px] rounded-full bg-[#ff5f56] border border-black/10" />
            <span className="w-[10px] h-[10px] rounded-full bg-[#ffbd2e] border border-black/10" />
            <span className="w-[10px] h-[10px] rounded-full bg-[#27c93f] border border-black/10" />
          </div>
          <div className="font-mono text-[10px] text-(--text-3) tracking-widest uppercase">saiyonix-deploy.ts</div>
          <div className="font-mono text-[10px] text-(--amber) flex items-center gap-[5px]">
            <div className={`w-[5px] h-[5px] rounded-full bg-(--amber) ${isDeploying ? 'animate-pulse' : 'opacity-40'}`} />
            CPU {isDeploying ? '18%' : '02%'}
          </div>
        </div>
        
        <div style={{ transform: 'translateZ(40px)' }} className="px-[20px] md:px-[32px] pt-[24px] pb-[20px] font-mono text-[12.5px] md:text-[13.5px] leading-[1.8]">
          <div className="flex gap-[14px] text-white/80"><span className="text-white/10 min-w-[18px] text-right text-[11px] select-none">1</span><span><span className="text-[#c678dd]">import</span> {"{ "} <span className="text-[#61afef]">SaiyonixCloud</span> {" }"} <span className="text-[#c678dd]">from</span> <span className="text-[#98c379]">&apos;@saiyonix/core&apos;</span></span></div>
          <div className="flex gap-[14px]"><span className="text-white/10 min-w-[18px] text-right text-[11px] select-none">2</span><span></span></div>
          <div className="flex gap-[14px] text-white/80"><span className="text-white/10 min-w-[18px] text-right text-[11px] select-none">3</span><span><span className="text-[#c678dd]">const</span> <span className="text-[#e5c07b]">infrastructure</span> = <span className="text-[#c678dd]">new</span> <span className="text-[#e5c07b]">SaiyonixCloud</span>{"({"}</span></div>
          <div className="flex gap-[14px] text-white/80"><span className="text-white/10 min-w-[18px] text-right text-[11px] select-none">4</span><span>&nbsp;&nbsp;<span className="text-[#d19a66]">region</span>: <span className="text-[#98c379]">&apos;global-edge&apos;</span>,</span></div>
          <div className="flex gap-[14px] text-white/80"><span className="text-white/10 min-w-[18px] text-right text-[11px] select-none">5</span><span>&nbsp;&nbsp;<span className="text-[#d19a66]">autoScale</span>: <span className="text-[#d19a66]">true</span>,</span></div>
          <div className="flex gap-[14px] text-white/20"><span className="text-white/10 min-w-[18px] text-right text-[11px] select-none">6</span><span>// Adaptive intelligence active</span></div>
          <div className="flex gap-[14px] text-white/80"><span className="text-white/10 min-w-[18px] text-right text-[11px] select-none">7</span><span>{"});"}</span></div>
          <div className="flex gap-[14px]"><span className="text-white/10 min-w-[18px] text-right text-[11px] select-none">8</span><span></span></div>
          <div className="flex gap-[14px]"><span className="text-white/10 min-w-[18px] text-right text-[11px] select-none">9</span><span>
            {!isDeploying ? (
              <button onClick={() => setIsDeploying(true)} className="text-[#61afef] hover:text-[#98c379] transition-all cursor-pointer outline-none relative z-20 group/btn">
                <span className="text-[#c678dd]">await</span> infrastructure.deploy();
                <span className="ml-2 text-[10px] bg-[#98c379]/10 text-[#98c379] px-2 py-0.5 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity uppercase tracking-tighter">Click to Execute</span>
              </button>
            ) : (
              <span className="text-[#98c379]"><span className="text-[#c678dd]">await</span> infrastructure.deploy();</span>
            )}
          </span></div>
        </div>

        <div style={{ transform: 'translateZ(60px)' }} className="bg-[#090a0d]/90 border-t border-(--border) px-[20px] md:px-[32px] pt-[18px] pb-[20px] min-h-[160px]">
          <div className="font-mono text-[9.5px] tracking-[.13em] uppercase text-white/20 mb-[14px] flex justify-between items-center">
            <span>Terminal Core</span>
            {isDeploying && <span className="text-(--amber) animate-pulse text-[8px]">Processing Payload...</span>}
          </div>
          
          {!isDeploying ? (
            <div className="font-mono text-[11.5px] text-white/30 mb-[5px] flex gap-[8px] items-center">
              <span className="text-[#61afef] animate-pulse">❯</span> Inactive. Waiting for command string...
              <span className="inline-block w-[7px] h-[12px] bg-white/20 align-text-bottom animate-[blink_.9s_step-end_infinite]" />
            </div>
          ) : (
            <div className="space-y-1.5">
              <AnimatePresence>
                {TERMINAL_STEPS.map((s, i) => (
                  step >= i && (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`font-mono text-[11.5px] md:text-[12.5px] ${i === TERMINAL_STEPS.length - 1 && step >= i ? 'text-white font-bold' : 'text-[#98c379]/90'} flex gap-[12px] items-center`}
                    >
                      <span className={step === i && i !== TERMINAL_STEPS.length - 1 ? "text-(--amber)" : ""}>
                        {step > i || i === TERMINAL_STEPS.length - 1 ? '✓' : '⟳'}
                      </span>
                      {s.text}
                      {step === i && i !== TERMINAL_STEPS.length - 1 && (
                        <span className="inline-block w-[6px] h-[10px] bg-[#98c379] align-middle animate-pulse" />
                      )}
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
              {step === TERMINAL_STEPS.length - 1 && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="mt-6 pt-4 border-t border-white/5 text-(--amber) text-[9px] tracking-[0.3em] uppercase font-bold"
                >
                  [ SYSTEM SYNC COMPLETE ]
                </motion.div>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </ScrollReveal>
  );
}
