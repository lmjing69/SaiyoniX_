import MotionFade from "@/components/MotionFade";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Founders",
    description: "Meet the founders behind SaiyoniX, united by a shared vision to build innovative and secure technology solutions.",
};

export default function Team() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-24">
            <MotionFade>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Our Founders
                </h1>

                <p className="text-gray-400 max-w-2xl">
                    SaiyoniX was founded by five individuals united by a shared vision to build
                    innovative, secure, and scalable technology solutions. Together, they drive
                    strategy, execution, and long-term growth.
                </p>
            </MotionFade>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
                <TeamCard
                    name="Lamjingba.Kh"
                    role="Founder"
                    responsibilities="Focuses on vision, strategy, and system architecture. Drives overall operations and ensures long-term sustainable growth."
                    skills={[
                        "Leadership",
                        "Strategic Planning",
                        "System Architecture",
                        "Full-Stack Development",
                        "Cybersecurity",
                    ]}
                />

                <TeamCard
                    name="Abinash.H"
                    role="Founder"
                    responsibilities="Leads all technical decisions, system architecture, and engineering standards."
                    skills={[
                        "System Design",
                        "Backend Engineering",
                        "Technology Strategy",
                        "APIs",
                        "Scalability",
                    ]}
                />


                <TeamCard
                    name="O.Bornison"
                    role="Founder"
                    responsibilities="Manages daily operations, internal processes, and workflow execution. Coordinates between teams to ensure efficient project delivery."
                    skills={[
                        "Operations Management",
                        "Process Optimization",
                        "Project Coordination",
                        "Execution Strategy",
                    ]}
                />

                <TeamCard
                    name="Sachindeva.A"
                    role="Founder"
                    responsibilities="Drives branding, marketing strategy, and public presence. Handles outreach, content strategy, and user engagement."
                    skills={[
                        "Brand Strategy",
                        "Digital Marketing",
                        "Content Strategy",
                        "Growth Marketing",
                    ]}
                />

                <TeamCard
                    name="K.Dhanaraj"
                    role="Founder"
                    responsibilities="Oversees financial planning, budgeting, and resource allocation. Manages financial sustainability and risk."
                    skills={[
                        "Financial Planning",
                        "Budgeting",
                        "Risk Management",
                        "Business Finance",
                    ]}
                />
            </div>
        </section>
    );
}

function TeamCard({
    name,
    role,
    image,
    responsibilities,
    skills,
}: {
    name: string;
    role: string;
    image?: string;
    responsibilities: string;
    skills: string[];
}) {
    return (
        <MotionFade>
            <div className="border border-gray-800 rounded-xl p-6 hover:border-cyan-400 transition">
                {image && (
                    <div className="mb-4">
                        <img
                            src={image}
                            alt={name}
                            className="w-24 h-24 rounded-full object-cover border-2 border-cyan-400"
                        />
                    </div>
                )}
                <h3 className="text-xl font-semibold text-white">{name}</h3>
                <p className="text-cyan-400 text-sm mt-1">{role}</p>

                <p className="text-gray-400 mt-4 leading-relaxed">
                    {responsibilities}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                    {skills.map((skill) => (
                        <span
                            key={skill}
                            className="text-xs px-3 py-1 rounded-full bg-gray-900 text-gray-300"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </MotionFade>
    );
}
