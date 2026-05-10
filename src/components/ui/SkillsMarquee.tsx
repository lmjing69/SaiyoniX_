"use client";

import React from 'react';

const SKILLS = [
  { name: "Java", logo: "https://cdn.simpleicons.org/java/white" },
  { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus/white" },
  { name: "Python", logo: "https://cdn.simpleicons.org/python/white" },
  { name: "React", logo: "https://cdn.simpleicons.org/react/white" },
  { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/white" },
  { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/white" },
  { name: "Docker", logo: "https://cdn.simpleicons.org/docker/white" },
  { name: "Kubernetes", logo: "https://cdn.simpleicons.org/kubernetes/white" },
  { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/white" },
  { name: "AWS", logo: "https://cdn.simpleicons.org/amazonaws/white" },
  { name: "Rust", logo: "https://cdn.simpleicons.org/rust/white" },
  { name: "Go", logo: "https://cdn.simpleicons.org/go/white" },
  { name: "C", logo: "https://cdn.simpleicons.org/c/white" },
];

export default function SkillsMarquee() {
  return (
    <section className="border-y border-white/5 bg-bg py-16 overflow-hidden group">
      <style jsx>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
      <div className="flex whitespace-nowrap animate-scroll">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex shrink-0 items-center gap-20 px-10">
            {SKILLS.map((skill) => (
              <div 
                key={skill.name} 
                className="flex flex-col items-center gap-4 transition-opacity duration-300 opacity-40 hover:opacity-100"
              >
                <img 
                  src={skill.logo} 
                  alt={skill.name} 
                  className="w-10 h-10 object-contain brightness-0 invert" 
                />
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-text-2">
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
