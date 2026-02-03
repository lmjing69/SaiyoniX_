
import MotionFade from "@/components/MotionFade";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <MotionFade>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Projects
        </h1>
        <p className="text-gray-400 max-w-2xl">
          A selection of systems, tools, and experiments built under SaiyoniX,
          focused on real-world impact and scalable design.
        </p>
      </MotionFade>

      <div className="grid md:grid-cols-2 gap-8 mt-16">
        <ProjectCard
          title="Praja.AI"
          desc="Praja. is an AI-powered platform designed to streamline citizen grievance reporting and resolution for the Government of Manipur."
          stack={["Next.js", "Maps", "Backend APIs"]}
          status="In Development"
          link="https://github.com/AbinashHeishnam/Nagrik.AI.git"
        />

        <ProjectCard
          title="AI Handwriting to Text"
          desc="An OCR-based system converting handwritten content into digital text using AI."
          stack={["Python", "OCR", "ML"]}
          status="In Development"
          link=""
        />
      </div>
    </section>
  );
}

import Link from "next/link";

function ProjectCard({
  title,
  desc,
  stack,
  status,
  link,
}: {
  title: string;
  desc: string;
  stack: string[];
  status: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      target="_blank"
      className="block"
    >
      <div className="border border-gray-800 rounded-xl p-6 hover:border-cyan-400 hover:scale-[1.02] transition">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <span className="text-xs px-3 py-1 rounded-full bg-gray-800 text-cyan-400">
            {status}
          </span>
        </div>

        <p className="text-gray-400 mb-4">{desc}</p>

        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-gray-900 text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

