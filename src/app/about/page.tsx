
import MotionFade from "@/components/MotionFade";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import TeamCard from "@/components/TeamCard";
import ServiceHoverCard from "@/components/ServiceHoverCard";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about SaiyoniX, a technology-driven collective focused on secure, intelligent, and scalable digital systems.",
};

export default function About() {
    return (
        <section className="max-w-5xl mx-auto px-6 py-24">
            {/* INTRO */}
            <MotionFade>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                    About SaiyoniX
                </h1>

                <p className="text-slate-400 leading-relaxed mb-6">
                    SaiyoniX is a technology-driven collective focused on building
                    intelligent, secure, and scalable digital systems.
                </p>
            </MotionFade>

            <p className="text-slate-400 leading-relaxed mb-6">
                The name <span className="text-white font-semibold">SaiyoniX</span> is
                inspired by the Manipuri word{" "}
                <span className="text-white font-semibold">Saiyon</span>, representing
                transformation, evolution, and growth. In a modern technology context,
                this philosophy reflects our commitment to disruptive innovation and
                continuous improvement.
            </p>

            <p className="text-slate-400 leading-relaxed mb-12">
                We believe technology should never remain static. Every system we build
                is designed to adapt, scale, and evolve alongside real-world needs.
            </p>

            {/* MISSION & VISION */}
            <div className="grid md:grid-cols-2 gap-10 mb-20">
                <div className="border border-navy-700 rounded-xl p-6">
                    <h2 className="text-2xl font-semibold text-accent-400 mb-4">
                        Our Mission
                    </h2>
                    <p className="text-slate-400 leading-relaxed">
                        To engineer intelligent, secure, and future-ready digital systems
                        while fostering a culture of learning, execution, and technical
                        excellence.
                    </p>
                </div>

                <div className="border border-navy-700 rounded-xl p-6">
                    <h2 className="text-2xl font-semibold text-accent-400 mb-4">
                        Our Vision
                    </h2>
                    <p className="text-slate-400 leading-relaxed">
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

                <p className="text-slate-400 leading-relaxed">
                    SaiyoniX is a technology-driven collective focused on building
                    intelligent, secure, and scalable digital systems. We design and
                    develop websites across all categories, tailored to real-world
                    business and operational needs.
                </p>

                <p className="text-slate-400 leading-relaxed mt-4">
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
                        { title: "Business Websites", img: "/build_business_website_1770580729881.png" },
                        { title: "Portfolio & Personal Platforms", img: "/build_portfolio_platform_1770580746502.png" },
                        { title: "Web Applications", img: "/build_web_application_1770580763425.png" },
                        { title: "Admin Dashboards", img: "/build_admin_dashboard_1770580824450.png" },
                        { title: "Secure Backend Systems", img: "/build_secure_backend_1770580871896.png" },
                        { title: "API-Driven Platforms", img: "/build_api_platform_1770580902825.png" },
                        { title: "Scalable Frontends", img: "/build_scalable_frontend_1770580918762.png" },
                        { title: "Custom Client Solutions", img: "/build_custom_solution_1770580947858.png" },
                    ].map((item) => (
                        <ServiceHoverCard
                            key={item.title}
                            title={item.title}
                            imageSrc={item.img}
                        />
                    ))}
                </div>
            </section>

            {/* BUILT FOR SCALE */}
            <section className="mb-24">
                <h2 className="text-3xl font-semibold text-white mb-4">
                    Built for Scale
                </h2>

                <p className="text-slate-400 leading-relaxed">
                    SaiyoniX systems are engineered with long-term growth in mind. From
                    the earliest design decisions to deployment architecture, we
                    prioritize adaptability, performance, and maintainability.
                </p>

                <p className="text-slate-400 leading-relaxed mt-4">
                    As client needs evolve, our systems evolve with them — reducing
                    rebuild costs, improving longevity, and supporting future expansion.
                </p>
            </section>

            {/* TEAM SECTION */}
            <section id="team" className="max-w-6xl mx-auto px-6 py-24">
                <h2 className="text-4xl font-semibold text-white mb-6">
                    Our Team
                </h2>

                <p className="text-slate-400 max-w-3xl leading-relaxed mb-16">
                    SaiyoniX is driven by a focused team of individuals responsible for
                    strategy, technology, operations, and long-term sustainability.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    <TeamCard
                        name="Lamjingba.Kh"
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
                        name="Abinash.H"
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
                        name="O.Bornison"
                        role="Chief Operating Officer (COO)"
                        responsibilities="Manages operations, coordination, and execution across projects."
                        skills={[
                            "Operations Management",
                            "Process Optimization",
                            "Project Coordination",
                        ]}
                    />

                    <TeamCard
                        name="Sachindeva.A"
                        role="Chief Marketing Officer (CMO)"
                        responsibilities="Handles branding, outreach, and strategic communication."
                        skills={[
                            "Brand Strategy",
                            "Marketing",
                            "Content Strategy",
                        ]}
                    />

                    <TeamCard
                        name="K.Dhanaraj"
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
