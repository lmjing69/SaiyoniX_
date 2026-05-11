"use client";

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: number;
}

/**
 * Official Brand Logo: PNG Restoration
 * 
 * This component uses the original 'finallogo.png' file from the assets folder.
 * It applies a specialized blend mode to ensure it integrates with the dark theme
 * while maintaining the premium interactive effects.
 */
export default function Logo({ className = "", size = 56 }: LogoProps) {
  return (
    <div className={`flex items-center gap-4 group cursor-pointer ${className}`}>
      <div className="relative hover:scale-110 transition-transform duration-500" style={{ width: size, height: size }}>
        {/* Your Original Image Asset from Assets Folder */}
        <div className="relative w-full h-full z-10 flex items-center justify-center p-1 overflow-visible">
          <Image 
            src="/assets/finallogo.png" 
            alt="SAIYONIX Logo" 
            fill
            sizes="56px"
            className="object-contain"
            priority
          />
        </div>

        {/* Keeping the premium atmosphere around YOUR logo */}
        {/* 1. Orbiting Sync Ring */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-10px] border border-accent/20 rounded-full border-dashed z-0 opacity-40 group-hover:opacity-100 transition-opacity"
        />

        {/* 2. Interaction Flare */}
        <div className="absolute inset-[-15px] bg-accent/5 blur-[25px] rounded-full z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
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
