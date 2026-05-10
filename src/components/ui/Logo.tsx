"use client";

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 48 }: LogoProps) {
  return (
    <div className={`flex items-center gap-4 group cursor-pointer ${className}`}>
      <div className="relative" style={{ width: size, height: size }}>
        {/* Your "Living" Logo Image */}
        <div className="relative w-full h-full z-10 flex items-center justify-center p-1 overflow-visible">
          <Image 
            src="/finallogo.png" 
            alt="SAIYONIX Logo" 
            fill
            className="object-contain mix-blend-screen invert hue-rotate-180 drop-shadow-[0_0_12px_rgba(240,168,48,0.5)] transition-transform duration-500 group-hover:scale-110"
            priority
          />
        </div>

        {/* Technical Core Effects (Surrounding your logo) */}
        {/* 1. Orbiting Sync Ring */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-10px] border border-accent/20 rounded-full border-dashed z-0 opacity-40 group-hover:opacity-100 transition-opacity"
        />

        {/* 2. Background Processing Glow */}
        <div className="absolute inset-[-12px] bg-accent/5 blur-[20px] rounded-full z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* 3. Outer Data Nodes (Minimalist points) */}
        <motion.div 
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-accent rounded-full z-20"
        />
        <motion.div 
          animate={{ opacity: [0.8, 0.4, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-accent rounded-full z-20"
        />
      </div>
      
      <div className="flex flex-col">
        <span className="font-display font-extrabold text-[20px] tracking-[0.18em] text-white leading-none group-hover:text-accent transition-colors duration-500">
          SAIYONIX
        </span>
        <div className="flex items-center gap-2 mt-2">
          <span className="h-px w-3 bg-accent/40" />
          <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-text-3 group-hover:text-text-2 transition-colors">
            Core Systems
          </span>
        </div>
      </div>
    </div>
  );
}
