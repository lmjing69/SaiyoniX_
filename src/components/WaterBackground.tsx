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
            {/* Falling drops */}
            {drops.map((drop) => (
                <div
                    key={`drop-${drop.id}`}
                    className="water-drop"
                    style={{
                        left: `${drop.left}%`,
                        top: '-100px',
                        animation: `float ${drop.duration}s ease-in-out infinite`,
                        animationDelay: `${drop.delay}s`,
                        width: '40px',
                        height: '60px',
                    }}
                />
            ))}

            {/* Rising bubbles */}
            {bubbles.map((bubble) => (
                <div
                    key={`bubble-${bubble.id}`}
                    className="bubble"
                    style={{
                        left: `${bubble.left}%`,
                        width: `${bubble.size}px`,
                        height: `${bubble.size}px`,
                        animation: `rise ${bubble.duration}s linear infinite`,
                        animationDelay: `${bubble.delay}s`,
                    }}
                />
            ))}

            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 bg-gradient-water opacity-30 mix-blend-overlay"></div>
        </div>
    );
}
