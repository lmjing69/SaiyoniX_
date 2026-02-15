
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
        <div className="min-h-screen bg-white">
            {/* HERO SECTION - Enhanced with stronger gradient and better spacing */}
            <section className="relative bg-linear-to-br from-blue-100 via-white to-purple-100 py-40 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-size-[24px_24px]"></div>
                <div className="max-w-6xl mx-auto relative z-10">
                    <MotionFade>
                        <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                            About SaiyoniX
                        </h1>
                        <p className="text-2xl text-blue-700 font-bold mb-8 tracking-tight">
                            Building the Future, One System at a Time
                        </p>
                        <p className="text-slate-700 leading-loose text-xl max-w-3xl">
                            SaiyoniX is a technology-driven collective focused on building
                            intelligent, secure, and scalable digital systems.
                        </p>
                    </MotionFade>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <section className="max-w-6xl mx-auto px-6">
                {/* ORIGIN STORY - Better spacing */}
                <div className="py-32">
                    <MotionFade>
                        <p className="text-slate-600 leading-loose text-lg mb-8">
                            The name <span className="text-slate-900 font-bold">SaiyoniX</span> is
                            inspired by the Manipuri word{" "}
                            <span className="text-slate-900 font-bold">Saiyon</span>, representing
                            transformation, evolution, and growth. In a modern technology context,
                            this philosophy reflects our commitment to disruptive innovation and
                            continuous improvement.
                        </p>

                        <p className="text-slate-600 leading-loose text-lg">
                            We believe technology should never remain static. Every system we build
                            is designed to adapt, scale, and evolve alongside real-world needs.
                        </p>
                    </MotionFade>
                </div>

                {/* MISSION & VISION - Enhanced with solid backgrounds and accent borders */}
                <div className="grid md:grid-cols-2 gap-10 mb-32">
                    <MotionFade delay={0.1}>
                        <div className="relative bg-white rounded-2xl p-12 shadow-2xl border-l-8 border-blue-600 group hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">
                                Our Mission
                            </h2>
                            <p className="text-slate-700 leading-loose text-lg">
                                To engineer intelligent, secure, and future-ready digital systems
                                while fostering a culture of learning, execution, and technical
                                excellence.
                            </p>
                        </div>
                    </MotionFade>

                    <MotionFade delay={0.2}>
                        <div className="relative bg-white rounded-2xl p-12 shadow-2xl border-l-8 border-purple-600 group hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                            <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">
                                Our Vision
                            </h2>
                            <p className="text-slate-700 leading-loose text-lg">
                                To evolve SaiyoniX into a recognized technology collective that
                                delivers impactful solutions and shapes how modern systems are
                                built, secured, and scaled.
                            </p>
                        </div>
                    </MotionFade>
                </div>

                {/* WHO WE ARE - Better spacing and typography */}
                <section className="mb-32">
                    <MotionFade>
                        <h2 className="text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                            Who We Are
                        </h2>

                        <p className="text-slate-600 leading-loose text-xl mb-6">
                            SaiyoniX is a technology-driven collective focused on building
                            intelligent, secure, and scalable digital systems. We design and
                            develop websites across all categories, tailored to real-world
                            business and operational needs.
                        </p>

                        <p className="text-slate-600 leading-loose text-xl">
                            Our work is guided by a simple belief — technology should never remain
                            static. Every system we build is designed to adapt, scale, and evolve
                            alongside changing requirements.
                        </p>
                    </MotionFade>
                </section>

                {/* WHAT WE BUILD - Improved grid and spacing */}
                <section className="mb-32">
                    <MotionFade>
                        <h2 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                            What We Build
                        </h2>
                        <p className="text-slate-600 leading-loose text-xl mb-16">
                            From concept to deployment, we craft digital experiences that drive results.
                        </p>
                    </MotionFade>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Business Websites", img: "/build_business_website_1770580729881.png" },
                            { title: "Portfolio & Personal Platforms", img: "/build_portfolio_platform_1770580746502.png" },
                            { title: "Web Applications", img: "/build_web_application_1770580763425.png" },
                            { title: "Admin Dashboards", img: "/build_admin_dashboard_1770580824450.png" },
                            { title: "Secure Backend Systems", img: "/build_secure_backend_1770580871896.png" },
                            { title: "API-Driven Platforms", img: "/build_api_platform_1770580902825.png" },
                            { title: "Scalable Frontends", img: "/build_scalable_frontend_1770580918762.png" },
                            { title: "Custom Client Solutions", img: "/build_custom_solution_1770580947858.png" },
                        ].map((item, index) => (
                            <MotionFade key={item.title} delay={index * 0.05}>
                                <ServiceHoverCard
                                    title={item.title}
                                    imageSrc={item.img}
                                />
                            </MotionFade>
                        ))}
                    </div>
                </section>

                {/* BUILT FOR SCALE - Light theme version */}
                <section className="mb-32">
                    <MotionFade>
                        <div className="bg-white rounded-3xl p-16 relative overflow-hidden shadow-2xl border-l-8 border-blue-600">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[24px_24px]"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h2 className="text-5xl font-bold mb-8 tracking-tight text-slate-900">
                                    Built for Scale
                                </h2>

                                <p className="text-slate-700 leading-loose text-xl mb-6">
                                    SaiyoniX systems are engineered with long-term growth in mind. From
                                    the earliest design decisions to deployment architecture, we
                                    prioritize adaptability, performance, and maintainability.
                                </p>

                                <p className="text-slate-700 leading-loose text-xl">
                                    As client needs evolve, our systems evolve with them — reducing
                                    rebuild costs, improving longevity, and supporting future expansion.
                                </p>
                            </div>
                        </div>
                    </MotionFade>
                </section>

                {/* BEHIND THE SCENES - Enhanced with white background and better spacing */}
                <section className="mb-32">
                    <MotionFade>
                        <h2 className="text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                            Behind the Scenes
                        </h2>

                        <div className="bg-white rounded-3xl p-12 border-2 border-slate-300 shadow-xl">
                            <p className="text-slate-700 leading-loose mb-12 text-xl">
                                SaiyoniX operates as a technology collective, built on collaboration,
                                innovation, and a deep commitment to technical excellence. We're not just
                                developers—we're problem solvers, architects, and engineers who believe
                                in building systems that last.
                            </p>

                            <div className="grid md:grid-cols-3 gap-10">
                                <MotionFade delay={0.1}>
                                    <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                                        <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                                            Our Process
                                        </h3>
                                        <p className="text-slate-700 leading-relaxed">
                                            Every project begins with understanding the problem. We map requirements,
                                            design architecture, and iterate rapidly—ensuring what we build aligns
                                            with real-world needs.
                                        </p>
                                    </div>
                                </MotionFade>

                                <MotionFade delay={0.2}>
                                    <div className="bg-purple-50 rounded-2xl p-8 border-2 border-purple-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                                        <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                                            Our Culture
                                        </h3>
                                        <p className="text-slate-700 leading-relaxed">
                                            We operate lean, move fast, and prioritize learning. Continuous
                                            improvement isn't a slogan—it's how we work. We challenge assumptions
                                            and embrace better solutions.
                                        </p>
                                    </div>
                                </MotionFade>

                                <MotionFade delay={0.3}>
                                    <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                                        <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                                            Our Commitment
                                        </h3>
                                        <p className="text-slate-700 leading-relaxed">
                                            Security, scalability, and maintainability aren't optional. Every line
                                            of code, every system we design, and every decision we make is guided
                                            by these principles.
                                        </p>
                                    </div>
                                </MotionFade>
                            </div>
                        </div>
                    </MotionFade>
                </section>
            </section>
        </div>
    );
}
