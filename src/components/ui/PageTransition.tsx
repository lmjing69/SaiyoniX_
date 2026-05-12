"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState, createContext, useContext } from "react";
import { gsap } from "gsap";

interface PageTransitionContextType {
  navigate: (href: string) => void;
}

const PageTransitionContext = createContext<PageTransitionContextType | null>(null);

export function usePageTransition() {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error("usePageTransition must be used within a PageTransitionProvider");
  }
  return context;
}

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Reveal page on mount/pathname change
    const wipe = document.getElementById("PT-WIPE");
    if (wipe) {
      gsap.set(wipe, { scaleY: 1, transformOrigin: "top" });
      gsap.to(wipe, {
        scaleY: 0,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.1,
        onComplete: () => {
          setIsAnimating(false);
        }
      });
    }
  }, [pathname]);

  const navigate = useCallback((href: string) => {
    if (href === pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (isAnimating) return;
    setIsAnimating(true);

    const wipe = document.getElementById("PT-WIPE");
    if (!wipe) {
      router.push(href);
      return;
    }

    gsap.to(wipe, {
      scaleY: 1,
      duration: 0.5,
      ease: "power3.inOut",
      transformOrigin: "bottom",
      onComplete: () => {
        router.push(href);
      },
    });
  }, [pathname, router, isAnimating]);

  return (
    <PageTransitionContext.Provider value={{ navigate }}>
      {/* Wipe Overlay */}
      <div
        id="PT-WIPE"
        className="fixed inset-0 z-[9999] bg-bg scale-y-0 pointer-events-none"
        style={{ transformOrigin: "bottom" }}
      />
      {children}
    </PageTransitionContext.Provider>
  );
}
