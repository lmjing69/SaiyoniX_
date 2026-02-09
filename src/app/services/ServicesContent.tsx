"use client";

import { useState } from "react";
import MotionFade from "@/components/MotionFade";
import Image from "next/image";

export default function ServicesContent() {
    const [activeService, setActiveService] = useState<any>(null);

    const service = {
        title: "Software Solutions",
        image: "/services/software.jpg",
        what:
            "Custom software platforms designed to streamline processes, manage data efficiently, and improve user interaction.",
        problems: [
            "Manual workflows",
            "Unstructured digital systems",
            "Information accessibility issues",
        ],
        forWhom: [
            "Organizations",
            "Institutions",
            "Small and medium enterprises",
            "Public & private sector users",
        ],
    };

    return (
        <section className="max-w-6xl mx-auto px-6 py-20">
            {/* INTRO */}
            <MotionFade>
                <h1 className="text-4xl font-bold text-white mb-6">
                    Our Services & Solutions
                </h1>

                <p className="text-gray-400 max-w-3xl mb-16 leading-relaxed">
                    SaiyoniX delivers technology solutions focused on practical
                    implementation, scalability, and responsible system design.
                </p>
            </MotionFade>

            {/* SINGLE SERVICE CARD */}
            <div className="flex justify-center">
                <div
                    onClick={() => setActiveService(service)}
                    className="cursor-pointer border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-400 transition max-w-md w-full"
                >
                    <div className="h-52 overflow-hidden">
                        <Image
                            src={service.image}
                            alt={service.title}
                            width={600}
                            height={300}
                            className="w-full h-full object-cover hover:scale-110 transition duration-500"
                        />
                    </div>

                    <div className="p-6 text-center">
                        <h3 className="text-xl font-semibold text-cyan-400">
                            {service.title}
                        </h3>
                        <p className="text-gray-500 text-sm mt-2">
                            Click to view details →
                        </p>
                    </div>
                </div>
            </div>

            {/* MODAL POPUP */}
            {activeService && (
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                    onClick={() => setActiveService(null)}
                >
                    <div
                        className="bg-gray-900 border border-gray-800 rounded-xl p-8 max-w-lg w-full mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
                            {activeService.title}
                        </h2>

                        <div className="space-y-4 text-gray-400">
                            <div>
                                <p className="text-white font-medium mb-1">What it is</p>
                                <p>{activeService.what}</p>
                            </div>

                            <div>
                                <p className="text-white font-medium mb-1">
                                    Problems it addresses
                                </p>
                                <ul className="list-disc list-inside space-y-1">
                                    {activeService.problems.map((p: string) => (
                                        <li key={p}>{p}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <p className="text-white font-medium mb-1">Who it is for</p>
                                <ul className="list-disc list-inside space-y-1">
                                    {activeService.forWhom.map((f: string) => (
                                        <li key={f}>{f}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <button
                            onClick={() => setActiveService(null)}
                            className="mt-6 px-6 py-2 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
