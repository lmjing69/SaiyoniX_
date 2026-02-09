import Link from "next/link";
import MotionFade from "@/components/MotionFade";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Driving digital transformation through intelligent systems, secure infrastructure, and scalable technology solutions.",
};

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* HERO SECTION - PROJECT TWELVE Style */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
        {/* 3D Glowing Sphere Background */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="relative w-[600px] h-[600px]">
            {/* Primary Purple Glow */}
            <div className="absolute inset-0 bg-gradient-radial from-neon-purple/40 via-neon-purple/10 to-transparent rounded-full blur-3xl gentle-float"></div>
            {/* Secondary Pink Glow */}
            <div className="absolute inset-0 bg-gradient-radial from-neon-pink/30 via-neon-pink/5 to-transparent rounded-full blur-2xl slow-rotate"></div>
            {/* Tertiary Cyan Accent */}
            <div className="absolute inset-20 bg-gradient-radial from-neon-cyan/20 via-transparent to-transparent rounded-full blur-xl pulse-soft"></div>
          </div>
        </div>

        {/* Content */}
        <MotionFade>
          <div className="relative z-10 text-center fade-slide-up">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight">
              <span className="text-white">SAIYO</span>
              <span className="text-neon-purple text-glow">NIX</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Driving digital transformation through<br />
              intelligent systems and scalable solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/projects" className="btn-neon">
                Explore Our Work
              </Link>
              <Link href="/contact" className="text-white/60 hover:text-white transition-colors px-8 py-4">
                Get In Touch →
              </Link>
            </div>
          </div>
        </MotionFade>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/30 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <MotionFade>
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
              <span className="gradient-text">What We Do</span>
            </h2>
          </MotionFade>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Platforms",
                desc: "Custom web and mobile applications built with cutting-edge technology",
                icon: "🚀"
              },
              {
                title: "AI & Automation",
                desc: "Intelligent systems that streamline operations and enhance productivity",
                icon: "🤖"
              },
              {
                title: "Cybersecurity",
                desc: "Enterprise-grade security solutions to protect your digital assets",
                icon: "🔒"
              }
            ].map((service, i) => (
              <MotionFade key={i}>
                <div className="premium-card group text-center">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/50 leading-relaxed">{service.desc}</p>
                </div>
              </MotionFade>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/services" className="btn-neon">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="relative py-32 px-6">
        {/* Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-neon-pink/20 via-transparent to-transparent blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <MotionFade>
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
              Featured <span className="text-neon-pink text-glow-pink">Projects</span>
            </h2>
            <p className="text-white/50 text-center text-xl mb-20 max-w-2xl mx-auto">
              Real-world platforms and systems built under SaiyoniX
            </p>
          </MotionFade>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((project) => (
              <MotionFade key={project}>
                <div className="premium-card group">
                  <div className="aspect-video bg-dark-elevated rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                    <div className="text-6xl opacity-20 group-hover:opacity-40 transition-opacity">💎</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Project {project}</h3>
                  <p className="text-white/50 mb-4">Innovative solution delivering exceptional results</p>
                  <button className="text-neon-purple hover:text-neon-pink transition-colors font-semibold">
                    View Case Study →
                  </button>
                </div>
              </MotionFade>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/projects" className="text-white/60 hover:text-white transition-colors text-lg">
              See All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <MotionFade>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Ready to Build<br />
              <span className="gradient-text">Something Amazing?</span>
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Let's transform your vision into reality with cutting-edge technology
            </p>
            <Link href="/contact" className="btn-neon">
              Start Your Project
            </Link>
          </MotionFade>
        </div>
      </section>

    </main>
  );
}

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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Welcome to <span className="gradient-text">SaiyoniX</span>
          </h1>

          <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed">
            Driving digital transformation through intelligent systems,
            secure infrastructure, and scalable technology solutions.
            We turn ideas into real, working platforms that evolve with
            real-world needs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link
              href="/projects"
              className="btn-primary group px-8 py-4 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-all"
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
              className="px-8 py-4 border-2 border-white/20 rounded-lg text-white hover:border-white/40 hover:bg-white/30/10 transition-all"
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
            <div className="professional-card p-6 sm:p-8 rounded-xl bg-glass-light/50 backdrop-blur">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-white/90 text-sm sm:text-base">
                {item.desc}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </section>


      {/* ABOUT SNAPSHOT */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <MotionFade>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
            About SaiyoniX
          </h2>

          <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-8">
            SaiyoniX is a technology-driven collective focused on building
            secure, intelligent, and scalable digital systems. We design
            platforms that adapt alongside evolving operational,
            institutional, and business needs.
          </p>

          <Link href="/about" className="inline-block text-white hover:text-accent-500 transition-colors font-medium">
            Learn more →
          </Link>
        </MotionFade>
      </section>


      {/* FEATURED SERVICE */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">
              Software & Platform Development
            </h2>

            <p className="text-white/90 mb-6 leading-relaxed">
              Custom-built platforms, dashboards, automation tools,
              and digital infrastructure engineered for performance,
              security, and long-term scalability.
            </p>

            <Link
              href="/services"
              className="btn-primary inline-block px-8 py-4 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-all"
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
      <section className="text-center py-20">
        <h2 className="text-3xl font-semibold text-white mb-4">
          Have an Idea or Project?
        </h2>

        <p className="text-white/90 mb-8">
          Let’s explore how technology can support your goals.
        </p>

        <Link
          href="/contact"
          className="btn-primary px-8 py-4 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-all"
        >
          Discuss Your Project
        </Link>
      </section>


      {/* PROJECTS PREVIEW */}
      <section className="max-w-6xl mx-auto px-6 text-center">
        <MotionFade>
          <h2 className="text-3xl font-semibold text-white mb-6">
            Selected Projects
          </h2>

          <p className="text-white/90 mb-10">
            Real-world platforms, experiments, and systems built
            under SaiyoniX.
          </p>
        </MotionFade>

        <Link
          href="/projects"
          className="px-6 py-3 border border-white/20 rounded-lg text-white/90 hover:border-white/40 hover:text-white transition-all"
        >
          View Projects →
        </Link>
      </section>


      {/* TEAM SNAPSHOT */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <MotionFade>
          <h2 className="text-3xl font-semibold text-white mb-6">
            Leadership
          </h2>

          <p className="text-white/90 leading-relaxed">
            SaiyoniX is driven by a focused leadership team responsible
            for strategy, engineering, operations, and sustainable
            technological growth.
          </p>

          <Link
            href="/about#team"
            className="text-white hover:text-accent-500 transition-colors mt-4 inline-block"
          >
            Meet the team →
          </Link>

        </MotionFade>
      </section>


      {/* FINAL CTA */}
      <section className="text-center max-w-4xl mx-auto px-6">
        <MotionFade>
          <h2 className="text-3xl font-semibold text-white mb-6">
            Let’s Build Something Meaningful
          </h2>

          <p className="text-white/90 mb-10">
            Whether it's a business platform, automation system,
            or innovative tech concept — SaiyoniX is ready to
            collaborate.
          </p>

          <Link
            href="/contact"
            className="btn-primary px-8 py-4 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-all"
          >
            Start a Conversation
          </Link>
        </MotionFade>
      </section>

    </main>
  );
}
