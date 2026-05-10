"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div 
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-9999 bg-bg flex flex-col items-center justify-center gap-12"
    >
      <div className="text-text-2 font-display font-extrabold text-[13px] tracking-[0.28em] uppercase">
        Saiyonix Systems
      </div>
      <div className="w-[240px] h-px bg-white/5 relative overflow-hidden">
        <motion.div 
          className="absolute inset-y-0 left-0 bg-accent"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="font-mono text-[11px] tracking-widest text-text-2 tabular-nums">
        {Math.floor(progress).toString().padStart(3, '0')}
      </div>
    </motion.div>
  );
}
