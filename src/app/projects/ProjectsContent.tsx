"use client";

import MotionFade from "@/components/MotionFade";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function ProjectsContent() {
    const [activeProject, setActiveProject] = useState<any>(null);

    const projects = [
        {
            title: "Praja.AI",
            summary:
                "An AI-powered civic platform designed to improve citizen grievance reporting workflows.",
            problem:
                "Traditional grievance systems are fragmented, slow, and lack transparency.",
            solution:
                "AI-assisted reporting platform with structured workflows and backend APIs.",
            stack: ["Next.js", "Maps", "Backend APIs"],
            status: "In Development",
            link: "https://github.com/AbinashHeishnam/Nagrik.AI.git",
        },
        {
            title: "AI Handwriting to Text",
            summary:
                "An OCR-based system converting handwritten content into structured digital text.",
            problem:
                "Manual transcription is slow, error-prone, and difficult to scale.",
            solution:
                "Machine-learning OCR pipeline producing clean digital text output.",
            stack: ["Python", "OCR", "Machine Learning"],
            status: "Prototype",
            link: "",
        },
    ];

    return (
        <section className="max-w-6xl mx-auto px-6 py-24">
            <MotionFade>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                    Projects
                </h1>

                <p className="text-slate-600 max-w-3xl leading-relaxed text-lg">
                    A selection of real-world systems and tools developed under SaiyoniX.
                    Each project focuses on solving practical problems through secure,
                    scalable technology.
                </p>
            </MotionFade>

            {/* PROJECT CARDS */}
            <div className="grid md:grid-cols-2 gap-8 mt-16">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        onClick={() => setActiveProject(project)}
                        className="cursor-pointer bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-400 hover:shadow-xl transition-all duration-300 group"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                                {project.title}
                            </h3>

                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                                {project.status}
                            </span>
                        </div>

                        <p className="text-slate-600 mb-6 leading-relaxed">
                            {project.summary}
                        </p>

                        <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
                            View Details <span>→</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* PROJECT MODAL */}
            {activeProject && (
                <div
                    className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    onClick={() => setActiveProject(null)}
                >
                    <div
                        className="bg-white border border-slate-200 rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl transform transition-all scale-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-start mb-6">
                            <h2 className="text-3xl font-bold text-slate-900">
                                {activeProject.title}
                            </h2>
                            <button
                                onClick={() => setActiveProject(null)}
                                className="text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="space-y-6 text-slate-600">
                            <p className="text-lg">{activeProject.summary}</p>

                            <div className="grid sm:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <div>
                                    <p className="text-slate-900 font-bold mb-2 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                        Problem
                                    </p>
                                    <p className="text-sm leading-relaxed">{activeProject.problem}</p>
                                </div>

                                <div>
                                    <p className="text-slate-900 font-bold mb-2 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                        Solution
                                    </p>
                                    <p className="text-sm leading-relaxed">{activeProject.solution}</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-slate-900 font-bold mb-3">
                                    Tech Stack
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {activeProject.stack.map((tech: string) => (
                                        <span
                                            key={tech}
                                            className="text-sm font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {activeProject.link && (
                                <div className="pt-4 border-t border-slate-100">
                                    <Link
                                        href={activeProject.link}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white! rounded-xl font-semibold hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        View Repository
                                    </Link>
                                </div>
                            )}
                        </div>

                        <div className="mt-8 flex justify-end">
                            <button
                                onClick={() => setActiveProject(null)}
                                className="px-6 py-2.5 border border-slate-300 rounded-xl text-slate-600 font-medium hover:bg-slate-50 hover:text-slate-900 transition"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
