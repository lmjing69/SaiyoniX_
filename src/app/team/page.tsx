import MotionFade from "@/components/MotionFade";

export default function Team() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-24">
            <MotionFade>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Leadership Team
                </h1>

                <p className="text-gray-400 max-w-2xl">
                    SaiyoniX is led by a focused leadership team, each member responsible
                    for driving strategy, execution, and long-term growth across different
                    domains of the organization.
                </p>
            </MotionFade>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
                <TeamCard
                    name="Lmjing"
                    role="Chief Executive Officer (CEO)"
                    responsibilities="Defines the vision, strategy, and direction of SaiyoniX. Oversees overall operations, product alignment, decision-making, and ensures the company moves toward long-term sustainable growth."
                    skills={[
                        "Leadership",
                        "Strategic Planning",
                        "System Architecture",
                        "Full-Stack Development",
                        "Cybersecurity",
                    ]}
                />

                <TeamCard
                    name="Bubunash"
                    role="Chief Technology Officer (CTO)"
                    responsibilities="Leads all technical decisions and system architecture."
                    skills={[
                        "System Design",
                        "Backend Engineering",
                        "Technology Strategy",
                        "APIs",
                        "Scalability",
                    ]}
                />


                <TeamCard
                    name="Bonbon"
                    role="Chief Operating Officer (COO)"
                    responsibilities="Manages daily operations, internal processes, and workflow execution. Ensures projects are delivered efficiently while coordinating between technical, marketing, and financial teams."
                    skills={[
                        "Operations Management",
                        "Process Optimization",
                        "Project Coordination",
                        "Execution Strategy",
                    ]}
                />

                <TeamCard
                    name="Dachin"
                    role="Chief Marketing Officer (CMO)"
                    responsibilities="Drives branding, marketing strategy, and public presence of SaiyoniX. Responsible for outreach, content strategy, user engagement, and positioning the company in the market."
                    skills={[
                        "Brand Strategy",
                        "Digital Marketing",
                        "Content Strategy",
                        "Growth Marketing",
                    ]}
                />

                <TeamCard
                    name="Donchand"
                    role="Chief Financial Officer (CFO)"
                    responsibilities="Oversees financial planning, budgeting, and resource allocation. Manages financial risk, sustainability, and ensures responsible handling of company finances."
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
