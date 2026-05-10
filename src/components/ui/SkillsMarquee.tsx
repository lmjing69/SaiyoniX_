"use client";

import React from 'react';
import Image from 'next/image';

const SKILLS = [
  { name: "Java", logo: "https://cdn.jsdelivr.net/npm/simple-icons@13/icons/java.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/npm/simple-icons@13/icons/cplusplus.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/npm/simple-icons@13/icons/python.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/npm/simple-icons@13/icons/react.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/npm/simple-icons@13/icons/nextdotjs.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/npm/simple-icons@13/icons/typescript.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/npm/simple-icons@13/icons/nodedotjs.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/npm/simple-icons@13/icons/docker.svg" },
  { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/npm/simple-icons@13/icons/kubernetes.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/npm/simple-icons@13/icons/postgresql.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/npm/simple-icons@13/icons/amazonaws.svg" },
  { name: "Rust", logo: "https://cdn.jsdelivr.net/npm/simple-icons@13/icons/rust.svg" },
  { name: "Go", logo: "https://cdn.jsdelivr.net/npm/simple-icons@13/icons/go.svg" },
  { name: "C", logo: "https://cdn.jsdelivr.net/npm/simple-icons@13/icons/c.svg" },
];

export default function SkillsMarquee() {
  return (
    <section className="border-y border-white/5 bg-bg py-12 md:py-16 overflow-hidden group">
      <style jsx>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 8s linear infinite;
        }
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
      <div className="flex whitespace-nowrap animate-scroll">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex shrink-0 items-center gap-12 md:gap-20 px-6 md:px-10">
            {SKILLS.map((skill) => (
              <div 
                key={skill.name} 
                className="flex flex-col items-center gap-3 md:gap-4 transition-opacity duration-300 opacity-40 hover:opacity-100"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 relative">
                  <img 
                    src={skill.logo} 
                    alt={skill.name} 
                    className="w-full h-full object-contain brightness-0 invert" 
                  />
                </div>
                <span className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-text-2">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
