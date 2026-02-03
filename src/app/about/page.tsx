export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      {/* INTRO */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
        About SaiyoniX
      </h1>

      <p className="text-gray-400 leading-relaxed mb-6">
        SaiyoniX is a technology-driven collective focused on building
        intelligent, secure, and scalable digital systems.
      </p>

      <p className="text-gray-400 leading-relaxed mb-6">
        The name <span className="text-white font-semibold">SaiyoniX</span> is
        inspired by the Manipuri word{" "}
        <span className="text-white font-semibold">Saiyon</span>, representing
        transformation, evolution, and growth. In a modern technology context,
        this philosophy reflects our commitment to disruptive innovation and
        continuous improvement.
      </p>

      <p className="text-gray-400 leading-relaxed mb-12">
        We believe technology should never remain static. Every system we build
        is designed to adapt, scale, and evolve alongside real-world needs.
      </p>

      {/* MISSION & VISION */}
      <div className="grid md:grid-cols-2 gap-10 mb-20">
        <div className="border border-gray-800 rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-400 leading-relaxed">
            To engineer intelligent, secure, and future-ready digital systems
            while fostering a culture of learning, execution, and technical
            excellence.
          </p>
        </div>

        <div className="border border-gray-800 rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-400 leading-relaxed">
            To evolve SaiyoniX into a recognized technology collective that
            delivers impactful solutions and shapes how modern systems are
            built, secured, and scaled.
          </p>
        </div>
      </div>

      {/* TIMELINE */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-10">
          Our Evolution
        </h2>

        <div className="space-y-8 border-l border-gray-800 pl-6">
          <TimelineItem
            year="Phase 0"
            title="Foundation"
            desc="Formation of SaiyoniX as a collaborative tech initiative focused on real-world system building."
          />

          <TimelineItem
            year="Phase 1"
            title="Core Infrastructure"
            desc="Establishing a production-grade web presence, architecture, and development standards."
          />

          <TimelineItem
            year="Phase 2"
            title="Expansion & Projects"
            desc="Building and showcasing impactful projects across software, security, and automation."
          />

          <TimelineItem
            year="Phase 3"
            title="Scale & Recognition"
            desc="Growing SaiyoniX into a trusted platform for innovation, collaboration, and delivery."
          />
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  year,
  title,
  desc,
}: {
  year: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="relative pl-10">
      {/* Timeline Dot */}
      <div className="absolute left-0 top-2 w-3 h-3 bg-cyan-400 rounded-full"></div>

      {/* Phase Label */}
      <p className="text-sm font-semibold text-cyan-400 tracking-wide">
        {year}
      </p>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mt-1">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 mt-2 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

