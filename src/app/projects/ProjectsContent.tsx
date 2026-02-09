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
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                    Projects
                </h1>

                <p className="text-gray-400 max-w-3xl leading-relaxed">
                    A selection of real-world systems and tools developed under SaiyoniX.
                    Each project focuses on solving practical problems through secure,
                    scalable technology.
                </p>
            </MotionFade>

            {/* PROJECT CARDS */}
            <div className="grid md:grid-cols-2 gap-8 mt-20">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        onClick={() => setActiveProject(project)}
                        className="cursor-pointer border border-gray-800 rounded-xl p-6 hover:border-cyan-400 hover:bg-gray-900/30 transition"
                    >
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-xl font-semibold text-text-primary">
                                {project.title}
                            </h3>

                            <span className="text-xs px-3 py-1 rounded-full bg-gray-800 text-cyan-400">
                                {project.status}
                            </span>
                        </div>

                        <p className="text-gray-400 text-sm">
                            {project.summary}
                        </p>

                        <p className="text-gray-500 text-xs mt-3">
                            Click for full details →
                        </p>
                    </div>
                ))}
            </div>

            {/* PROJECT MODAL */}
            {activeProject && (
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                    onClick={() => setActiveProject(null)}
                >
                    <div
                        className="bg-gray-900 border border-gray-800 rounded-xl p-8 max-w-xl w-full mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
                            {activeProject.title}
                        </h2>

                        <div className="space-y-4 text-gray-400">
                            <p>{activeProject.summary}</p>

                            <div>
                                <p className="text-text-primary font-medium mb-1">
                                    Problem Addressed
                                </p>
                                <p>{activeProject.problem}</p>
                            </div>

                            <div>
                                <p className="text-text-primary font-medium mb-1">
                                    Solution
                                </p>
                                <p>{activeProject.solution}</p>
                            </div>

                            <div>
                                <p className="text-text-primary font-medium mb-1">
                                    Tech Stack
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {activeProject.stack.map((tech: string) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {activeProject.link && (
                                <Link
                                    href={activeProject.link}
                                    target="_blank"
                                    className="inline-block mt-4 px-6 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
                                >
                                    View Repository →
                                </Link>

                            )}
                        </div>

                        <button
                            onClick={() => setActiveProject(null)}
                            className="mt-6 px-6 py-2 border border-gray-700 rounded-lg text-text-primary hover:border-cyan-400 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
