"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const TARGET_TEXT = "SaiyoniX";
const TERMINAL_LINES = [
    "> INITIALIZING KERNEL...",
    "> LOADING MODULES [x86_64]...",
    "> BYPASSING SECURITY PROTOCOLS...",
    "> ESTABLISHING NEURAL LINK...",
    "> SYSTEM READY.",
];

export default function SplashScreen() {
    const [complete, setComplete] = useState(false);
    const [lines, setLines] = useState<string[]>([]);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // 1. Terminal Sequence
        let lineIndex = 0;
        const lineInterval = setInterval(() => {
            if (lineIndex < TERMINAL_LINES.length) {
                setLines((prev) => [...prev, TERMINAL_LINES[lineIndex]]);
                lineIndex++;
            } else {
                clearInterval(lineInterval);
            }
        }, 400);

        // 2. Progress Bar
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + Math.random() * 5; // Random increments
            });
        }, 100);

        return () => {
            clearInterval(lineInterval);
            clearInterval(progressInterval);
        };
    }, []);

    useEffect(() => {
        // 3. Completion based on progress
        if (progress === 100) {
            const timeout = setTimeout(() => {
                setComplete(true);
            }, 1000); // Wait 1s after full load before exiting
            return () => clearTimeout(timeout);
        }
    }, [progress]);

    if (complete) return null;

    return (
        <AnimatePresence>
            {!complete && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 1.5,
                        filter: "blur(20px)",
                        transition: { duration: 0.8, ease: "circIn" }
                    }}
                    className="fixed inset-0 z-9999 bg-black flex flex-col items-center justify-center font-mono text-cyan-400 overflow-hidden"
                >
                    {/* BACKGROUND GRID */}
                    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                        style={{ backgroundImage: "linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
                    />

                    <div className="z-10 w-full max-w-lg px-6">
                        {/* TERMINAL OUTPUT */}
                        <div className="h-32 mb-8 text-xs md:text-sm text-gray-500 font-bold flex flex-col justify-end">
                            {lines.map((line, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="mb-1"
                                >
                                    {line}
                                </motion.div>
                            ))}
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.5 }}
                                className="text-cyan-500"
                            >
                                _
                            </motion.span>
                        </div>

                        {/* MAIN LOGO */}
                        <div className="text-5xl md:text-7xl font-bold tracking-widest text-center text-text-primary mb-2 h-20 flex items-center justify-center">
                            {TARGET_TEXT.slice(0, Math.ceil((progress / 100) * TARGET_TEXT.length))}
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.1 }}
                                className="text-cyan-500 ml-1 inline-block w-2 h-12 bg-cyan-500"
                            />
                        </div>

                        {/* PROGRESS BAR */}
                        <div className="w-full h-1 bg-gray-900 rounded-full mt-6 overflow-hidden relative">
                            <motion.div
                                className="h-full bg-cyan-400 shadow-[0_0_10px_#06b6d4]"
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                        <div className="flex justify-between text-xs text-gray-500 mt-2 font-bold">
                            <span>SYSTEM_BOOT</span>
                            <span>{Math.min(100, Math.floor(progress))}%</span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
