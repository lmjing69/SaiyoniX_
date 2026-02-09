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
                        ? "border-cyan-400 bg-gray-900/80 border-opacity-0"
                        : "border-gray-800 bg-black hover:border-cyan-400/50"
                        }`}
                >
                    <span
                        className={`text-center font-medium transition-colors duration-300 ${isHovered ? "text-cyan-400 opacity-0" : "text-white"
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
                            className="absolute left-0 bottom-0 w-full z-50 rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/20 border border-cyan-400 bg-gray-900"
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
                                <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent opacity-80" />
                            </div>

                            {/* Text Area */}
                            <div className="p-4 bg-gray-900 absolute bottom-0 w-full">
                                <h3 className="text-cyan-400 font-bold text-sm mb-1">{title}</h3>
                                <div className="h-0.5 w-8 bg-cyan-500 mb-2 rounded-full" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
