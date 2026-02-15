"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const mouse = useRef({ x: 0, y: 0 });
    const blobs = useRef([
        { x: 0, y: 0, speed: 0.08, size: 360 },
        { x: 0, y: 0, speed: 0.05, size: 500 },
        { x: 0, y: 0, speed: 0.025, size: 680 }
    ]);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        let animationFrameId: number;
        let t = 0;

        // Create noise pattern once
        const noiseCanvas = document.createElement("canvas");
        noiseCanvas.width = 100;
        noiseCanvas.height = 100;
        const nCtx = noiseCanvas.getContext("2d")!;
        const noiseData = nCtx.createImageData(100, 100);
        for (let i = 0; i < noiseData.data.length; i += 4) {
            const n = Math.random() * 255;
            noiseData.data[i] = n;
            noiseData.data[i + 1] = n;
            noiseData.data[i + 2] = n;
            noiseData.data[i + 3] = 12; // Low opacity
        }
        nCtx.putImageData(noiseData, 0, 0);
        const noisePattern = ctx.createPattern(noiseCanvas, "repeat");

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };
        window.addEventListener("mousemove", handleMouseMove);

        const render = () => {
            t += 0.005;

            // Soft trail fade - Light theme
            ctx.fillStyle = "rgba(255,255,255,0.3)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            blobs.current.forEach((b, i) => {
                // Magnetic cursor force (Smooth inertia)
                b.x += (mouse.current.x - b.x) * b.speed;
                b.y += (mouse.current.y - b.y) * b.speed;

                // Floating ambient motion
                const floatX = Math.sin(t + i * 2) * 25;
                const floatY = Math.cos(t * 1.2 + i * 3) * 25;

                const g = ctx.createRadialGradient(
                    b.x + floatX,
                    b.y + floatY,
                    0,
                    b.x + floatX,
                    b.y + floatY,
                    b.size
                );

                // Darker blue hues for visibility on light background
                const hue = 210 + Math.sin(t + i) * 30;

                // Subtle gradient
                g.addColorStop(0, `hsla(${hue},85%,60%,0.2)`);
                g.addColorStop(0.5, `hsla(${hue + 20},85%,70%,0.1)`);
                g.addColorStop(1, "transparent");

                ctx.fillStyle = g;
                // Blend mode multiply helps on light backgrounds for "inking" effect, 
                // but standard source-over is safer for performance/predictability.
                // Using darker halo for visibility.
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            });

            // Noise Overlay - adjusted for light theme
            if (noisePattern) {
                ctx.fillStyle = noisePattern;
                ctx.globalCompositeOperation = "multiply"; // Better for noise on light bg
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.globalCompositeOperation = "source-over";
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{
                zIndex: 0,
                opacity: 0.95
            }}
        />
    );
}
