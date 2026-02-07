import MotionFade from "@/components/MotionFade";
import TeamCard from "@/components/TeamCard";

export default function About() {
    return (
        <section className="max-w-5xl mx-auto px-6 py-24">
            {/* INTRO */}
            <MotionFade>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                    About SaiyoniX
                </h1>

                <p className="text-gray-400 leading-relaxed mb-6">
                    SaiyoniX is a technology-driven collective focused on building
                    intelligent, secure, and scalable digital systems.
                </p>
            </MotionFade>

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

            {/* WHO WE ARE */}
            <section className="mb-24">
                <h2 className="text-3xl font-semibold text-white mb-4">
                    Who We Are
                </h2>

                <p className="text-gray-400 leading-relaxed">
                    SaiyoniX is a technology-driven collective focused on building
                    intelligent, secure, and scalable digital systems. We design and
                    develop websites across all categories, tailored to real-world
                    business and operational needs.
                </p>

                <p className="text-gray-400 leading-relaxed mt-4">
                    Our work is guided by a simple belief — technology should never remain
                    static. Every system we build is designed to adapt, scale, and evolve
                    alongside changing requirements.
                </p>
            </section>

            {/* WHAT WE BUILD */}
            <section className="mb-24">
                <h2 className="text-3xl font-semibold text-white mb-10">
                    What We Build
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        "Business Websites",
                        "Portfolio & Personal Platforms",
                        "Web Applications",
                        "Admin Dashboards",
                        "Secure Backend Systems",
                        "API-Driven Platforms",
                        "Scalable Frontends",
                        "Custom Client Solutions",
                    ].map((item) => (
                        <div
                            key={item}
                            className="border border-gray-800 rounded-xl p-6 hover:border-cyan-400 transition"
                        >
                            <p className="text-white font-medium">{item}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* BUILT FOR SCALE */}
            <section className="mb-24">
                <h2 className="text-3xl font-semibold text-white mb-4">
                    Built for Scale
                </h2>

                <p className="text-gray-400 leading-relaxed">
                    SaiyoniX systems are engineered with long-term growth in mind. From
                    the earliest design decisions to deployment architecture, we
                    prioritize adaptability, performance, and maintainability.
                </p>

                <p className="text-gray-400 leading-relaxed mt-4">
                    As client needs evolve, our systems evolve with them — reducing
                    rebuild costs, improving longevity, and supporting future expansion.
                </p>
            </section>

            {/* TEAM SECTION */}
            <section id="team" className="max-w-6xl mx-auto px-6 py-24">
                <h2 className="text-4xl font-semibold text-white mb-6">
                    Our Team
                </h2>

                <p className="text-gray-400 max-w-3xl leading-relaxed mb-16">
                    SaiyoniX is driven by a focused team of individuals responsible for
                    strategy, technology, operations, and long-term sustainability.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    <TeamCard
                        name="Lmjing"
                        role="Chief Executive Officer (CEO)"
                        responsibilities="Leads company vision, strategic direction, and overall execution of SaiyoniX."
                        skills={[
                            "Leadership",
                            "System Architecture",
                            "Full-Stack Development",
                            "Cybersecurity",
                            "Strategic Planning",
                        ]}
                    />

                    <TeamCard
                        name="Bubunash"
                        role="Chief Technology Officer (CTO)"
                        responsibilities="Oversees all technical decisions, architecture design, and engineering standards."
                        skills={[
                            "Backend Engineering",
                            "System Design",
                            "Scalability",
                            "APIs",
                            "Security",
                        ]}
                    />

                    <TeamCard
                        name="Bonbon"
                        role="Chief Operating Officer (COO)"
                        responsibilities="Manages operations, coordination, and execution across projects."
                        skills={[
                            "Operations Management",
                            "Process Optimization",
                            "Project Coordination",
                        ]}
                    />

                    <TeamCard
                        name="Dachin"
                        role="Chief Marketing Officer (CMO)"
                        responsibilities="Handles branding, outreach, and strategic communication."
                        skills={[
                            "Brand Strategy",
                            "Marketing",
                            "Content Strategy",
                        ]}
                    />

                    <TeamCard
                        name="Donchand"
                        role="Chief Financial Officer (CFO)"
                        responsibilities="Oversees financial planning, budgeting, and long-term sustainability."
                        skills={[
                            "Financial Planning",
                            "Budgeting",
                            "Risk Management",
                        ]}
                    />
                </div>
            </section>
        </section>
    );
}
