import Link from "next/link";
import MotionFade from "@/components/MotionFade";
import WaterBackground from "@/components/WaterBackground";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Flowing with innovation - digital transformation through intelligent systems.",
};

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden text-water-shadow">
      <WaterBackground />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 z-10">
        <MotionFade>
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 wave-text drop-shadow-lg">
              SAIYONIX
            </h1>

            <p className="text-xl md:text-2xl text-water-deep/80 mb-12 max-w-2xl mx-auto font-medium">
              Flowing with innovation, adapting to change.<br />
              Building liquid digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/projects" className="btn-water">
                Dive Deeper
              </Link>
              <Link href="/contact" className="text-water-deep hover:text-water-blue font-semibold transition-colors px-6 py-3 bg-white/40 backdrop-blur rounded-full hover:bg-white/60">
                Start Flowing →
              </Link>
            </div>
          </div>
        </MotionFade>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-water-deep/50 animate-bounce">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="relative py-32 px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <MotionFade>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-water-deep">
              Liquid Solutions
            </h2>
          </MotionFade>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fluid Platforms",
                desc: "Adaptive web and mobile apps that reshape to user needs",
                icon: "💧"
              },
              {
                title: "Deep Intelligence",
                desc: "AI systems that flow through your data to find insights",
                icon: "🧠"
              },
              {
                title: "Secure Flow",
                desc: "Enterprise security that adapts to emerging threats",
                icon: "🛡️"
              }
            ].map((service, i) => (
              <MotionFade key={i}>
                <div className="liquid-card group text-center p-8">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform drop-shadow-md">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-water-deep mb-4">{service.title}</h3>
                  <p className="text-water-shadow/70 leading-relaxed">{service.desc}</p>
                </div>
              </MotionFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-32 px-6 z-10 text-center">
        <div className="max-w-4xl mx-auto bg-white/30 backdrop-blur-md rounded-3xl p-12 border border-white/50 shadow-xl">
          <MotionFade>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-water-deep">
              Ready to Shape the Future?
            </h2>
            <p className="text-xl text-water-shadow/80 mb-12 max-w-2xl mx-auto">
              Like water, we adapt to any challenge. Let's create something fluid together.
            </p>
            <Link href="/contact" className="btn-water text-lg px-10 py-4">
              Get In Touch
            </Link>
          </MotionFade>
        </div>
      </section>

    </main>
  );
}
