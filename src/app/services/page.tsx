export default function Services() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-white mb-10">What We Do</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <Service
          title="Cybersecurity & Ethical Hacking"
          desc="Security-first system design, vulnerability research, and ethical hacking."
        />
        <Service
          title="AI & Automation"
          desc="Intelligent assistants, OCR systems, and workflow automation."
        />
        <Service
          title="Web & Software Engineering"
          desc="Scalable full-stack applications and backend systems."
        />
        <Service
          title="Research & Innovation"
          desc="Experimental builds and proof-of-concept development."
        />
      </div>
    </section>
  );
}

function Service({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border border-gray-800 rounded-xl p-6">
      <h3 className="text-xl text-cyan-400 font-semibold">{title}</h3>
      <p className="mt-2 text-gray-400">{desc}</p>
    </div>
  );
}
