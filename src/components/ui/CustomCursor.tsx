"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only hide system cursor if we are on a device likely using a mouse
    const isTouchOnly = 'ontouchstart' in window && navigator.maxTouchPoints > 0 && window.matchMedia("(pointer: coarse)").matches;
    
    if (isTouchOnly) {
      if (dotRef.current) dotRef.current.style.display = 'none';
      if (ringRef.current) ringRef.current.style.display = 'none';
      return;
    }

    // Hide system cursor globally when custom cursor is active
    document.body.style.cursor = 'none';
    const buttons = document.querySelectorAll('a, button');
    buttons.forEach(b => (b as HTMLElement).style.cursor = 'none');

    const onMouseMove = (e: MouseEvent) => {
      if (dotRef.current && ringRef.current) {
        gsap.to(dotRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "none"
        });
        gsap.to(ringRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <>
      <div 
        ref={dotRef} 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-accent rounded-full pointer-events-none z-9000 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
      <div 
        ref={ringRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-accent/40 rounded-full pointer-events-none z-8999 -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color] duration-300"
      />
    </>
  );
}
