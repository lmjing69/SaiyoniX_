import Link from "next/link";
import MotionFade from "@/components/MotionFade";
import WaterBackground from "@/components/WaterBackground";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Driving digital transformation through intelligent systems, secure infrastructure, and scalable technology solutions.",
};

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden text-slate-800">
      <WaterBackground />

      {/* HERO SECTION - Clean & Professional */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
        <div className="flex-1 text-left">
          <MotionFade>
            <div className="inline-block px-4 py-2 rounded-full bg-water-surface border border-water-border text-water-text text-sm font-semibold mb-6">
              💧 Flowing with Innovation
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
              Building <span className="text-water-primary">Liquid Digital</span><br />
              Solutions for Growth
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              We engineer adaptive platforms, intelligent systems, and secure infrastructure that evolve with your business needs.
            </p>

            <div className="flex gap-4">
              <Link href="/contact" className="btn-primary shadow-lg shadow-water-primary/20">
                Start a Conversation
              </Link>
              <Link href="/projects" className="btn-secondary">
                View Our Work
              </Link>
            </div>
          </MotionFade>
        </div>

        {/* Hero Illustration / Graphic Placeholder */}
        <div className="flex-1 relative">
          <div className="relative w-full aspect-square max-w-lg mx-auto bg-water-surface rounded-full border border-water-border p-8 animate-float">
            <div className="absolute inset-0 bg-gradient-shimmer opacity-50 rounded-full"></div>
            <div className="flex items-center justify-center h-full text-water-primary/20 text-9xl">
              🌊
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - Grid Layout */}
      <section className="py-24 px-6 bg-slate-50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <MotionFade>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Capabilities
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Comprehensive technology services designed to scale.
              </p>
            </div>
          </MotionFade>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Platforms",
                desc: "Custom web and mobile applications ensuring seamless user experiences.",
                icon: "🚀"
              },
              {
                title: "Data Intelligence",
                desc: "Turning raw data into actionable insights through advanced analytics.",
                icon: "📊"
              },
              {
                title: "Secure Infrastructure",
                desc: "Robust security protocols to protect your most valuable digital assets.",
                icon: "🛡️"
              }
            ].map((service, i) => (
              <MotionFade key={i}>
                <div className="clean-card group h-full">
                  <div className="w-12 h-12 bg-water-surface rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
              </MotionFade>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS - Alternating Layout */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Selected Work</h2>
              <p className="text-slate-600">Recent projects delivering real impact.</p>
            </div>
            <Link href="/projects" className="text-water-primary font-semibold hover:text-water-hover hidden sm:block">
              View All Projects →
            </Link>
          </div>

          <div className="space-y-20">
            {[1, 2].map((item) => (
              <MotionFade key={item}>
                <div className="group clean-card p-0 overflow-hidden flex flex-col md:flex-row">
                  <div className="md:w-1/2 bg-slate-100 min-h-[300px] flex items-center justify-center text-slate-300 text-6xl">
                    placeholder
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Project Title {item}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      A brief description of this project, focusing on the challenge solved and the technology used to achieve the results.
                    </p>
                    <span className="text-water-primary font-medium group-hover:underline cursor-pointer">
                      Read Case Study
                    </span>
                  </div>
                </div>
              </MotionFade>
            ))}
          </div>

          <div className="text-center mt-12 sm:hidden">
            <Link href="/projects" className="text-water-primary font-semibold hover:text-water-hover">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 bg-water-surface relative border-t border-water-border">
        <div className="max-w-4xl mx-auto text-center">
          <MotionFade>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
              Ready to modernize your infrastructure?
            </h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
              Let's build a solution that adapts to your needs and scales with your vision.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4 shadow-xl shadow-water-primary/20">
              Get In Touch
            </Link>
          </MotionFade>
        </div>
      </section>

    </main>
  );
}
