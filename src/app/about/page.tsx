
import MotionFade from "@/components/MotionFade";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
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

                <p className="text-white/90 leading-relaxed mb-6">
                    SaiyoniX is a technology-driven collective focused on building
                    intelligent, secure, and scalable digital systems.
                </p>
            </MotionFade>

            <p className="text-white/90 leading-relaxed mb-6">
                The name <span className="text-white font-semibold">SaiyoniX</span> is
                inspired by the Manipuri word{" "}
                <span className="text-white font-semibold">Saiyon</span>, representing
                transformation, evolution, and growth. In a modern technology context,
                this philosophy reflects our commitment to disruptive innovation and
                continuous improvement.
            </p>

            <p className="text-white/90 leading-relaxed mb-12">
                We believe technology should never remain static. Every system we build
                is designed to adapt, scale, and evolve alongside real-world needs.
            </p>

            {/* MISSION & VISION */}
            <div className="grid md:grid-cols-2 gap-10 mb-20">
                <div className="border border-white/20 rounded-xl p-6">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        Our Mission
                    </h2>
                    <p className="text-white/90 leading-relaxed">
                        To engineer intelligent, secure, and future-ready digital systems
                        while fostering a culture of learning, execution, and technical
                        excellence.
                    </p>
                </div>

                <div className="border border-white/20 rounded-xl p-6">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        Our Vision
                    </h2>
                    <p className="text-white/90 leading-relaxed">
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

                <p className="text-white/90 leading-relaxed">
                    SaiyoniX is a technology-driven collective focused on building
                    intelligent, secure, and scalable digital systems. We design and
                    develop websites across all categories, tailored to real-world
                    business and operational needs.
                </p>

                <p className="text-white/90 leading-relaxed mt-4">
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

                <p className="text-white/90 leading-relaxed">
                    SaiyoniX systems are engineered with long-term growth in mind. From
                    the earliest design decisions to deployment architecture, we
                    prioritize adaptability, performance, and maintainability.
                </p>

                <p className="text-white/90 leading-relaxed mt-4">
                    As client needs evolve, our systems evolve with them — reducing
                    rebuild costs, improving longevity, and supporting future expansion.
                </p>
            </section>

            {/* BEHIND THE SCENES */}
            <section className="mb-24">
                <h2 className="text-4xl font-semibold text-white mb-6">
                    Behind the Scenes
                </h2>

                <div className="border border-white/20 rounded-2xl p-8 bg-linear-to-br from-white/5 to-transparent backdrop-blur-sm">
                    <p className="text-white/90 leading-relaxed mb-6">
                        SaiyoniX operates as a technology collective, built on collaboration,
                        innovation, and a deep commitment to technical excellence. We're not just
                        developers—we're problem solvers, architects, and engineers who believe
                        in building systems that last.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                            <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                                Our Process
                            </h3>
                            <p className="text-white/80 text-sm leading-relaxed">
                                Every project begins with understanding the problem. We map requirements,
                                design architecture, and iterate rapidly—ensuring what we build aligns
                                with real-world needs.
                            </p>
                        </div>

                        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                            <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                                Our Culture
                            </h3>
                            <p className="text-white/80 text-sm leading-relaxed">
                                We operate lean, move fast, and prioritize learning. Continuous
                                improvement isn't a slogan—it's how we work. We challenge assumptions
                                and embrace better solutions.
                            </p>
                        </div>

                        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                            <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                                Our Commitment
                            </h3>
                            <p className="text-white/80 text-sm leading-relaxed">
                                Security, scalability, and maintainability aren't optional. Every line
                                of code, every system we design, and every decision we make is guided
                                by these principles.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-white/10 pt-6">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Meet the Founders
                        </h3>
                        <div className="space-z-1">
                            {[
                                {
                                    name: "Lamjingba.Kh",
                                    focus:     "Vision, Strategy, System Architecture",
                                    
                                },
                                {
                                    name: "Abinash.H",
                                    focus: "Technical Decisions, Engineering Excellence",
                                   
                                },
                                {
                                    name: "O.Bornison",
                                    focus: "Operations, Execution & Coordination",
                                   
                                },
                                {
                                    name: "Sachindeva.A",
                                    focus: "Branding, Marketing & Outreach",
                                   
                                },
                                {
                                    name: "K.Dhanaraj",
                                    focus: "Financial Planning & Sustainability",
                                   
                                },
                            ].map((founder, index) => (
                                <div key={index} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 group py-3 border-b border-white/5 last:border-0">
                                    <div className="flex items-center gap-3 min-w-[180px]">
                                        <div className="h-px w-4 bg-cyan-500/50 group-hover:w-8 transition-all duration-300" />
                                        <span className="text-white/90 font-medium group-hover:text-cyan-400 transition-colors">
                                            {founder.name}
                                        </span>
                                    </div>
                                    <div className="text-white/40 hidden sm:block">
                                        <span className="text-white/50 text-xs italic">
                                            {founder.focus}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
