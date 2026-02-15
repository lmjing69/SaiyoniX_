"use client";

import { useState } from "react";
import MotionFade from "@/components/MotionFade";
import Image from "next/image";

export default function ServicesContent() {
    const [activeService, setActiveService] = useState<any>(null);

    const services = [
        {
            title: "Modern Web Design",
            image: "/services/modern-web-design.png",
            what: "Stunning, user-centric designs that capture your brand's essence. We create visually immersive experiences that engage your audience from the very first click.",
            problems: ["Outdated aesthetics", "Poor user experience", "Low engagement rates"],
            forWhom: ["Creative Agencies", "Modern Brands", "Startups"]
        },
        {
            title: "Full-Stack Web Development",
            image: "/services/fullstack-development.png",
            what: "Robust, scalable, and high-performance web applications. We build the technical foundation your business needs to grow without limits.",
            problems: ["Slow load times", "Technical debt", "Scalability issues"],
            forWhom: ["Enterprises", "SaaS Companies", "E-commerce Platforms"]
        },
        {
            title: "AI-Engineered Websites",
            image: "/services/ai-engineered-websites.png",
            what: "Next-generation websites integrated with intelligent agents. Automate customer interactions, personalize content, and leverage data like never before.",
            problems: ["Static content", "Manual support", "Lack of personalization"],
            forWhom: ["Tech Innovators", "Forward-thinking Biz", "Service Providers"]
        },
        {
            title: "Custom Web Solutions",
            image: "/services/custom-web-solutions.png",
            what: "Tailored web-based tools and dashboards designed to solve your unique business challenges when off-the-shelf software falls short.",
            problems: ["Inefficient workflows", "Generic software limits", "Data fragmentation"],
            forWhom: ["Niche Industries", "Operations Teams", "Growing Businesses"]
        }
    ];

    return (

        <section className="max-w-7xl mx-auto px-6 py-20">
            {/* INTRO */}
            <MotionFade>
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Our Services & Solutions
                    </h1>

                    <p className="text-slate-700 text-lg max-w-3xl mx-auto leading-relaxed">
                        SaiyoniX delivers technology solutions focused on practical
                        implementation, scalability, and responsible system design.
                    </p>
                </div>
            </MotionFade>

            {/* SERVICES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                    <MotionFade key={index} delay={index * 0.1}>
                        <div
                            onClick={() => setActiveService(service)}
                            className="group cursor-pointer bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-400 hover:shadow-xl transition-all duration-300 w-full h-full flex flex-col"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <span className="text-white font-semibold tracking-wide bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm border border-white/30">View Details</span>
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 line-clamp-2 leading-relaxed text-sm">
                                        {service.what}
                                    </p>
                                </div>
                                <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                                    <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Learn more</span>
                                    <span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors text-slate-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </MotionFade>
                ))}
            </div>

            {/* MODAL POPUP */}
            {activeService && (
                <div
                    className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    onClick={() => setActiveService(null)}
                >
                    <div
                        className="bg-white border border-slate-200 rounded-2xl shadow-2xl p-8 max-w-lg w-full transform transition-all scale-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-start mb-6">
                            <h2 className="text-3xl font-bold text-slate-900">
                                {activeService.title}
                            </h2>
                            <button
                                onClick={() => setActiveService(null)}
                                className="text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="space-y-6 text-slate-700">
                            <div>
                                <p className="text-slate-900 font-bold text-lg mb-2">What it is</p>
                                <p className="leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100">
                                    {activeService.what}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <p className="text-slate-900 font-bold mb-2 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                        Problems Solved
                                    </p>
                                    <ul className="space-y-2">
                                        {activeService.problems.map((p: string) => (
                                            <li key={p} className="flex items-start text-sm">
                                                <svg className="w-4 h-4 text-slate-400 mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                                                </svg>
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <p className="text-slate-900 font-bold mb-2 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                        Who it is for
                                    </p>
                                    <ul className="space-y-2">
                                        {activeService.forWhom.map((f: string) => (
                                            <li key={f} className="flex items-start text-sm">
                                                <svg className="w-4 h-4 text-slate-400 mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end">
                            <button
                                onClick={() => setActiveService(null)}
                                className="px-6 py-2.5 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Close Details
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );

}
