"use client";

import Link from "next/link";
import { Mail, Phone, MessageSquare, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Footer() {
  const [showPhoneOptions, setShowPhoneOptions] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowPhoneOptions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <footer className="border-t border-(--border) pt-[80px] px-8 md:px-[80px] pb-[60px] bg-bg relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pb-[80px] border-b border-(--border) mb-[40px]">
          {/* Branding / Description Area */}
          <div className="flex flex-col items-start text-left">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 border border-white/10 rounded-lg flex items-center justify-center font-extrabold text-[13px] text-(--amber)">
                  S
                </div>
                <span className="font-display font-bold text-[16px] tracking-widest text-white">SAIYONIX</span>
             </div>
             <p className="text-[13px] text-text-3 leading-relaxed max-w-[280px]">
               Engineering high-performance systems for elite enterprise ecosystems. Architecture that outlasts the problem.
             </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-(--amber) mb-[28px]">Quick Links</div>
            <ul className="flex flex-col gap-[14px]">
              <li><Link href="/services" className="text-[15px] text-text-2 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/projects" className="text-[15px] text-text-2 hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/about" className="text-[15px] text-text-2 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-[15px] text-text-2 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col relative">
            <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-(--amber) mb-[28px]">Connect</div>
            <p className="text-[18px] md:text-[20px] font-display font-bold text-white leading-tight mb-6">
              Let&apos;s build the future together.
            </p>
            <div className="flex flex-col gap-4 mt-2">
              <div className="relative" ref={menuRef}>
                <button 
                  onClick={() => setShowPhoneOptions(!showPhoneOptions)}
                  className="flex items-center gap-3 text-text-2 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-(--amber)/50 transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[14px] font-medium">+91 90896 69444</span>
                </button>

                <AnimatePresence>
                  {showPhoneOptions && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-full left-0 mb-4 w-64 bg-[#0d121f]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-2 z-50"
                    >
                      <div className="p-3 border-b border-white/5 mb-1 flex justify-between items-center">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-text-3">Communication Port</span>
                        <button onClick={() => setShowPhoneOptions(false)} className="text-text-3 hover:text-white"><X className="w-3 h-3" /></button>
                      </div>
                      <div className="flex flex-col gap-1">
                        <a 
                          href="tel:+919089669444"
                          onClick={() => setShowPhoneOptions(false)}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-text-2 hover:text-white transition-colors group/opt"
                        >
                          <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 group-hover/opt:bg-amber-500/20">
                            <Phone className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs font-bold uppercase tracking-tight">Direct Voice Call</span>
                            <span className="text-[10px] opacity-40">Establish audio link</span>
                          </div>
                        </a>
                        <a 
                          href="https://wa.me/919089669444?text=Hello%20Saiyonix%2C%20I%27m%20interested%20in%20a%20technical%20consultation%20to%20engineer%20high-performance%20solutions%20for%20my%20business%20needs."
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setShowPhoneOptions(false)}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-text-2 hover:text-white transition-colors group/opt"
                        >
                          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover/opt:bg-emerald-500/20">
                            <MessageSquare className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs font-bold uppercase tracking-tight">WhatsApp Ingest</span>
                            <span className="text-[10px] opacity-40">Start technical briefing</span>
                          </div>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a href="mailto:contact@saiyonix.in" className="flex items-center gap-3 text-text-2 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-(--amber)/50 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="text-[14px] font-medium">contact@saiyonix.in</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="text-[13px] text-text-3 font-mono">
            © 2026 SaiyoniX. All rights reserved.
          </div>
          <div className="flex gap-[32px]">
            <Link href="/privacy-policy" className="text-[13px] text-text-3 hover:text-white transition-colors font-medium">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-[13px] text-text-3 hover:text-white transition-colors font-medium">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
