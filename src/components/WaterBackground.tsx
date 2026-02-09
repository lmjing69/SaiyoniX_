"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function WaterBackground() {
    const [drops, setDrops] = useState<any[]>([]);
    const [bubbles, setBubbles] = useState<any[]>([]);

    useEffect(() => {
        // Generate drops
        const initialDrops = Array.from({ length: 15 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 3 + Math.random() * 4,
        }));
        setDrops(initialDrops);

        // Generate bubbles
        const initialBubbles = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            size: 20 + Math.random() * 60,
            delay: Math.random() * 10,
            duration: 5 + Math.random() * 5,
        }));
        setBubbles(initialBubbles);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Falling drops - Minimal & Very Subtle */}
            {drops.map((drop) => (
                <div
                    key={`drop-${drop.id}`}
                    className="water-drop"
                    style={{
                        left: `${drop.left}%`,
                        top: '-100px',
                        animation: `float ${drop.duration}s ease-in-out infinite`,
                        animationDelay: `${drop.delay}s`,
                        width: '20px',  // Smaller
                        height: '30px', // Smaller
                        opacity: 0.15,  // Very faint
                        background: 'linear-gradient(135deg, rgba(224,242,254,0.5) 0%, rgba(186,230,253,0.3) 100%)', // Pale blue
                        boxShadow: 'none', // Remove heavy shadow
                        filter: 'blur(1px)', // Soften edges
                    }}
                />
            ))}

            {/* Rising bubbles - Very Slow & Faint */}
            {bubbles.map((bubble) => (
                <div
                    key={`bubble-${bubble.id}`}
                    className="water-bubble"
                    style={{
                        left: `${bubble.left}%`,
                        width: `${bubble.size}px`,
                        height: `${bubble.size}px`,
                        animation: `rise ${bubble.duration * 2}s linear infinite`, // Slower
                        animationDelay: `${bubble.delay}s`,
                        opacity: 0.1, // Almost invisible
                    }}
                />
            ))}

            {/* Background Gradient Mesh - Very Light Blue */}
            <div className="absolute inset-0 bg-white bg-[radial-gradient(#E0F2FE_1px,transparent_1px)] [background-size:40px_40px] opacity-40"></div>
        </div>
    );
}
