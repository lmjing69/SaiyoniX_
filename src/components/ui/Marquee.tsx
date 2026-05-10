"use client";

import React from 'react';

export default function Marquee() {
  return (
    <div className="border-y border-white/5 py-5 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex shrink-0">
            {["Intelligent Infrastructure", "Connected Ecosystems", "Autonomous Workflows", "Enterprise Architecture", "AI-Assisted Systems", "Edge Deployment", "Operational Intelligence", "Scalable Platforms"].map((text) => (
              <div key={text} className="flex items-center gap-7 px-7 font-display text-[11px] font-bold tracking-[0.14em] uppercase text-(--text-2)">
                {text}
                <div className="w-1 h-1 rounded-full bg-(--amber) opacity-70" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
