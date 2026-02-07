import Link from "next/link";
import MotionFade from "@/components/MotionFade";

export default function Home() {
  return (
    <main className="space-y-32 pb-32">

      {/* HERO SECTION */}
      <section className="text-center pt-32 max-w-4xl mx-auto px-6">
        <MotionFade>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to SaiyoniX
          </h1>

          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Driving digital transformation through intelligent systems,
            secure infrastructure, and scalable technology solutions.
            We turn ideas into real, working platforms that evolve with
            real-world needs.
          </p>

          <div className="flex justify-center gap-6">
            <Link
              href="/projects"
              className="px-6 py-3 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition"
            >
              Explore Our Work
            </Link>

            <Link
              href="/about"
              className="px-6 py-3 border border-gray-700 rounded-lg text-white hover:border-cyan-400 transition"
            >
              Who We Are
            </Link>
          </div>
        </MotionFade>
      </section>


      {/* CREDIBILITY */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
        {[
          { title: "Secure", desc: "Security-first system design" },
          { title: "Scalable", desc: "Built for future growth" },
          { title: "AI Driven", desc: "Automation & intelligence focus" },
          { title: "Practical", desc: "Real-world usable solutions" },
        ].map((item) => (
          <div key={item.title}>
            <h3 className="text-2xl font-bold text-cyan-400">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              {item.desc}
            </p>
          </div>
        ))}
      </section>


      {/* ABOUT SNAPSHOT */}
      <section className="max-w-5xl mx-auto px-6 text-center">
        <MotionFade>
          <h2 className="text-3xl font-semibold text-white mb-4">
            About SaiyoniX
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            SaiyoniX is a technology-driven collective focused on building
            secure, intelligent, and scalable digital systems. We design
            platforms that adapt alongside evolving operational,
            institutional, and business needs.
          </p>

          <Link href="/about" className="text-cyan-400 hover:underline">
            Learn more →
          </Link>
        </MotionFade>
      </section>


      {/* FEATURED SERVICE */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-white mb-4">
            Software & Platform Development
          </h2>

          <p className="text-gray-400 mb-6 leading-relaxed">
            Custom-built platforms, dashboards, automation tools,
            and digital infrastructure engineered for performance,
            security, and long-term scalability.
          </p>

          <Link
            href="/services"
            className="px-6 py-3 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition"
          >
            Explore Services
          </Link>
        </div>

        <div className="border border-gray-800 rounded-xl overflow-hidden h-64">
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

        <p className="text-gray-400 mb-8">
          Let’s explore how technology can support your goals.
        </p>

        <Link
          href="/contact"
          className="px-8 py-4 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition"
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

          <p className="text-gray-400 mb-10">
            Real-world platforms, experiments, and systems built
            under SaiyoniX.
          </p>
        </MotionFade>

        <Link
          href="/projects"
          className="px-6 py-3 border border-gray-700 rounded-lg hover:border-cyan-400 transition"
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

          <p className="text-gray-400 leading-relaxed">
            SaiyoniX is driven by a focused leadership team responsible
            for strategy, engineering, operations, and sustainable
            technological growth.
          </p>

          <Link
            href="/about#team"
            className="text-cyan-400 hover:underline mt-4 inline-block"
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

          <p className="text-gray-400 mb-10">
            Whether it's a business platform, automation system,
            or innovative tech concept — SaiyoniX is ready to
            collaborate.
          </p>

          <Link
            href="/contact"
            className="px-8 py-4 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition"
          >
            Start a Conversation
          </Link>
        </MotionFade>
      </section>

    </main>
  );
}
