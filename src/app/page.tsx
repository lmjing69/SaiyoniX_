import Link from "next/link";
import MotionFade from "@/components/MotionFade";
import AnimatedSection from "@/components/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Driving digital transformation through intelligent systems, secure infrastructure, and scalable technology solutions.",
};

export default function Home() {
  return (
    <main className="space-y-32 pb-32">

      {/* HERO SECTION */}
      <section className="relative text-center pt-32 max-w-4xl mx-auto px-6">

        <MotionFade>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-950 mb-6 tracking-tight">
            Welcome to <span className="gradient-text">SaiyoniX</span>
          </h1>

          <p className="text-slate-700 text-lg md:text-xl mb-10 leading-relaxed font-medium">
            Driving digital transformation through intelligent systems,
            secure infrastructure, and scalable technology solutions.
            We turn ideas into real, working platforms that evolve with
            real-world needs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link
              href="/projects"
              className="btn-primary group"
            >
              <span className="flex items-center justify-center gap-2">
                Explore Our Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>

            <Link
              href="/about"
              className="px-8 py-4 border-2 border-slate-300 rounded-lg text-slate-800 font-semibold hover:border-slate-500 hover:bg-slate-100 transition-all shadow-sm"
            >
              Who We Are
            </Link>
          </div>
        </MotionFade>
      </section>


      {/* CREDIBILITY */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
        {[
          { title: "Secure", desc: "Security-first system design", delay: 0 },
          { title: "Scalable", desc: "Built for future growth", delay: 0.1 },
          { title: "AI Driven", desc: "Automation & intelligence focus", delay: 0.2 },
          { title: "Practical", desc: "Real-world usable solutions", delay: 0.3 },
        ].map((item) => (
          <AnimatedSection key={item.title} delay={item.delay}>
            <div className="glass-card p-6 sm:p-8 rounded-xl backdrop-blur">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-700 text-sm sm:text-base font-medium">
                {item.desc}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </section>


      {/* ABOUT SNAPSHOT */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <MotionFade>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-950 mb-6">
            About SaiyoniX
          </h2>

          <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-8">
            SaiyoniX is a technology-driven collective focused on building
            secure, intelligent, and scalable digital systems. We design
            platforms that adapt alongside evolving operational,
            institutional, and business needs.
          </p>

          <Link href="/about" className="inline-block text-slate-800 hover:text-blue-700 transition-colors font-semibold border-b-2 border-slate-200 hover:border-blue-600 pb-1">
            Learn more →
          </Link>
        </MotionFade>
      </section>


      {/* FEATURED SERVICE */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <div>
            <h2 className="text-3xl font-semibold text-slate-950 mb-4">
              Software & Platform Development
            </h2>

            <p className="text-slate-700 mb-6 leading-relaxed font-medium">
              Custom-built platforms, dashboards, automation tools,
              and digital infrastructure engineered for performance,
              security, and long-term scalability.
            </p>

            <Link
              href="/services"
              className="btn-primary inline-block rounded-lg font-semibold transition-all"
            >
              Explore Services
            </Link>
          </div>
        </AnimatedSection>

        <div className="border border-white/20 rounded-xl overflow-hidden h-64">
          <img
            src="/services/software.jpg"
            alt="Software Platform Preview"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>
      </section>


      {/* MID CTA */}
      <section className="text-center py-20 bg-slate-100 rounded-3xl mx-6 border border-slate-200">
        <h2 className="text-3xl font-semibold text-slate-950 mb-4">
          Have an Idea or Project?
        </h2>

        <p className="text-slate-700 mb-8 font-medium">
          Let’s explore how technology can support your goals.
        </p>

        <Link
          href="/contact"
          className="btn-primary px-8 py-4 rounded-lg font-semibold transition-all"
        >
          Discuss Your Project
        </Link>
      </section>


      {/* PROJECTS PREVIEW */}
      <section className="max-w-6xl mx-auto px-6 text-center">
        <MotionFade>
          <h2 className="text-3xl font-semibold text-slate-950 mb-6">
            Selected Projects
          </h2>

          <p className="text-slate-700 mb-10 font-medium">
            Real-world platforms, experiments, and systems built
            under SaiyoniX.
          </p>
        </MotionFade>

        <Link
          href="/projects"
          className="px-6 py-3 border-2 border-slate-300 rounded-lg text-slate-700 hover:border-slate-500 hover:text-slate-950 transition-all font-semibold"
        >
          View Projects →
        </Link>
      </section>




      {/* FINAL CTA */}
      <section className="text-center max-w-4xl mx-auto px-6">
        <MotionFade>
          <h2 className="text-3xl font-semibold text-slate-950 mb-6">
            Let’s Build Something Meaningful
          </h2>

          <p className="text-slate-700 mb-10 font-medium">
            Whether it's a business platform, automation system,
            or innovative tech concept — SaiyoniX is ready to
            collaborate.
          </p>

          <Link
            href="/contact"
            className="btn-primary px-8 py-4 rounded-lg font-semibold transition-all"
          >
            Start a Conversation
          </Link>
        </MotionFade>
      </section>

    </main>
  );
}
