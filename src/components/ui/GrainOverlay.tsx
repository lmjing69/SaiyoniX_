"use client";

export default function GrainOverlay() {
  return (
    <>
      <div id="grain" className="pointer-events-none fixed z-9990 opacity-[0.028]" />
      <style jsx>{`
        #grain {
          inset: -100%;
          width: 300%;
          height: 300%;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
          animation: grain 6s steps(8) infinite;
        }
        @keyframes grain {
          0% { transform: translate(0, 0); }
          12% { transform: translate(-4%, -6%); }
          25% { transform: translate(-9%, 4%); }
          37% { transform: translate(6%, -8%); }
          50% { transform: translate(-3%, 12%); }
          62% { transform: translate(12%, -2%); }
          75% { transform: translate(-8%, 6%); }
          87% { transform: translate(5%, -4%); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </>
  );
}
