"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MessageSquare, X, Facebook, Instagram, Github, Linkedin } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "@/components/ui/Logo";
import { usePageTransition } from "@/components/ui/PageTransition";

export default function Footer() {
  const pathname = usePathname();
  const { navigate } = usePageTransition();
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
    <footer className="border-t border-(--border) pt-[80px] px-6 md:px-[80px] pb-[60px] bg-bg relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pb-[80px] border-b border-(--border) mb-[40px]">
          {/* Branding / Description Area */}
          <div className="flex flex-col items-start text-left">
             <Logo 
               size={42} 
               className="mb-6 scale-90 -ml-2 origin-left" 
               onClick={() => navigate("/")}
             />
             <p className="text-[13px] text-text-3 leading-relaxed max-w-[280px]">
               Engineering high-performance systems for elite enterprise ecosystems. Architecture that outlasts the problem.
             </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-(--amber) mb-[28px]">Quick Links</div>
            <ul className="flex flex-col gap-[14px]">
              <li><button onClick={() => navigate("/services")} className="text-[15px] text-text-2 hover:text-white transition-colors text-left">Services</button></li>
              <li><button onClick={() => navigate("/projects")} className="text-[15px] text-text-2 hover:text-white transition-colors text-left">Projects</button></li>
              <li><button onClick={() => navigate("/about")} className="text-[15px] text-text-2 hover:text-white transition-colors text-left">About Us</button></li>
              <li><button onClick={() => navigate("/contact")} className="text-[15px] text-text-2 hover:text-white transition-colors text-left">Contact</button></li>
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

              {/* Social Media Links */}
              <div className="flex items-center gap-4 mt-6">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61560482303665", label: "Facebook", color: "hover:text-blue-500" },
                  { icon: Instagram, href: "https://www.instagram.com/saiyonix_pvt.ltd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram", color: "hover:text-pink-500" },
                  { icon: Github, href: "https://github.com/lmjing69/SaiyoniX_", label: "GitHub", color: "hover:text-white" },
                  { icon: Linkedin, href: "https://linkedin.com/company/saiyonix", label: "LinkedIn", color: "hover:text-blue-400" },
                  { 
                    icon: () => (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-2.578l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.187-1.622c1.736.946 3.682 1.444 5.654 1.446h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    ), 
                    href: "https://wa.me/919089669444?text=Hello%20Saiyonix%2C%20I%27m%20interested%20in%20a%20technical%20consultation%20to%20engineer%20high-performance%20solutions%20for%20my%20business%20needs.", 
                    label: "WhatsApp", 
                    color: "hover:text-emerald-400" 
                  },
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                    className={`w-10 h-10 rounded-xl bg-white/3 border border-white/10 flex items-center justify-center text-text-3 ${social.color} transition-colors duration-300 relative overflow-hidden group/social`}
                  >
                    {/* Interaction Glow */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/social:opacity-100 transition-opacity" />
                    <social.icon className="w-5 h-5 relative z-10" />
                    
                    {/* Bottom Border Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-current scale-x-0 group-hover/social:scale-x-100 transition-transform origin-center" />
                  </motion.a>
                ))}
              </div>
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
