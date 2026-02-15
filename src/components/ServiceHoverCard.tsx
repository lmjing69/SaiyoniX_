"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ServiceHoverCardProps {
    title: string;
    imageSrc: string;
}

export default function ServiceHoverCard({
    title,
    imageSrc,
}: ServiceHoverCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    // Handle touch interactions for mobile
    const handleTouch = () => {
        setIsHovered(!isHovered);
    };

    return (
        <div
            className="relative h-24 sm:h-32"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleTouch}
        >
            <div className="relative w-full h-full">
                {/* Default State: Simple Bordered Card */}
                <div
                    className={`absolute inset-0 z-10 flex items-center justify-center p-4 border rounded-xl transition-all duration-300 ${isHovered
                        ? "border-blue-500 bg-slate-50 border-opacity-0"
                        : "border-slate-300 bg-white hover:border-blue-500 hover:shadow-md"
                        }`}
                >
                    <span
                        className={`text-center font-bold transition-colors duration-300 ${isHovered ? "text-blue-600 opacity-0" : "text-slate-800"
                            }`}
                    >
                        {title}
                    </span>
                </div>

                {/* Hover/Active State: Pop-up Card */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1.05, y: -20 }}
                            exit={{ opacity: 0, scale: 0.9, y: 10 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="absolute left-0 bottom-0 w-full z-50 rounded-xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-blue-300 bg-white"
                            style={{ minHeight: "200px" }}
                        >
                            {/* Image Area */}
                            <div className="relative h-32 w-full overflow-hidden">
                                <Image
                                    src={imageSrc}
                                    alt={title}
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                            </div>

                            {/* Text Area */}
                            <div className="p-4 bg-white absolute bottom-0 w-full border-t border-slate-200">
                                <h3 className="text-blue-700 font-bold text-sm mb-1">{title}</h3>
                                <div className="h-0.5 w-8 bg-blue-600 mb-2 rounded-full" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
