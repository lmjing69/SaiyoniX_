"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useState, useEffect } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "motion/react";

import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const navigate = useCallback((href: string) => {
    if (href === pathname) {
      setMenuOpen(false);
      return;
    }
    setMenuOpen(false);
    const wipe = document.getElementById("PT-WIPE");
    if (!wipe) { router.push(href); return; }
    gsap.to(wipe, {
      scaleY: 1,
      duration: 0.42,
      ease: "power3.in",
      transformOrigin: "bottom",
      onComplete: () => {
        router.push(href);
        gsap.to(wipe, {
          scaleY: 0,
          duration: 0.52,
          ease: "power3.out",
          transformOrigin: "top",
          delay: 0.12,
        });
      },
    });
  }, [pathname, router]);

  return (
    <>
      {/* Page wipe overlay */}
      <div
        id="PT-WIPE"
        className="fixed inset-0 z-900 bg-bg scale-y-0 pointer-events-none"
        style={{ transformOrigin: "bottom" }}
      />

      <nav className={`fixed top-0 left-0 right-0 z-500 px-6 md:px-14 py-5 md:py-6 flex items-center justify-between transition-all duration-500 ${pathname === "/" ? "bg-transparent" : "bg-bg/80 backdrop-blur-3xl border-b border-white/5"}`}>
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3 font-display font-bold text-[13.5px] tracking-widest text-(--text-1) hover:text-(--text-0) transition-colors"
        >
          <div className="w-[50px] h-[50px] md:w-[65px] md:h-[65px] relative flex items-center justify-center -ml-2">
            <Image src="/logo.png" alt="SaiyoniX Logo" fill className="object-contain mix-blend-screen invert hue-rotate-180 opacity-90" priority />
          </div>
          SAIYONIX
        </button>

        {/* Desktop pill nav */}
        <div className="hidden md:flex bg-[rgba(10,10,14,.75)] backdrop-blur-[18px] border border-(--border) rounded-full p-1.5 gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => navigate(l.href)}
              className={`px-5 py-2 rounded-full text-[13.5px] capitalize transition-all duration-300 ${
                pathname === l.href
                  ? "bg-white/10 text-(--text-1)"
                  : "text-(--text-2) hover:text-(--text-1)"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate("/contact")}
          className="hidden md:flex items-center gap-2 px-6 py-2.5 border border-(--border-md) rounded-full bg-[rgba(10,10,14,.5)] backdrop-blur-xl text-[13.5px] font-medium transition-all hover:border-(--amber) hover:bg-(--amber-bg) group"
        >
          Contact Us
          <span className="text-[12px] transition-transform group-hover:translate-x-1">→</span>
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-(--text-2) p-2 z-501 relative"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2 bg-text-1" : ""}`} />
          <div className={`w-5 h-0.5 bg-current mb-1.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2 bg-text-1" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-400 bg-bg/98 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {NAV_LINKS.map((l, i) => (
              <motion.button
                key={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                onClick={() => navigate(l.href)}
                className={`font-display text-[32px] font-bold tracking-tight transition-colors ${
                  pathname === l.href ? "text-(--amber)" : "text-(--text-2) hover:text-(--text-1)"
                }`}
              >
                {l.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + NAV_LINKS.length * 0.1, duration: 0.5 }}
              onClick={() => navigate("/contact")}
              className="mt-4 bg-(--amber) text-[#040407] px-10 py-4 rounded-xl font-bold text-[16px]"
            >
              Contact Us →
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
