"use client";

import { useEffect, useRef } from "react";

export default function TechBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let particles: Particle[] = [];
        let animationFrameId: number;

        // Configuration
        const particleCount = Math.min(Math.floor((width * height) / 15000), 100); // Responsive count
        const connectionDistance = 150;
        const mouseDistance = 200;

        // Mouse state
        const mouse = { x: 0, y: 0, isActive: false };

        // Resize handler
        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initParticles();
        };

        // Mouse handlers
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.isActive = true;
        };

        const handleMouseLeave = () => {
            mouse.isActive = false;
        };

        // Particle Class
        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5; // Slow movement
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                // Tech colors: Cyan, Blue, and subtle White
                const colors = ["rgba(6, 182, 212, ", "rgba(59, 130, 246, ", "rgba(255, 255, 255, "];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                // Move
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Mouse interaction (flee/attract)
                if (mouse.isActive) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouseDistance) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouseDistance - distance) / mouseDistance;
                        const directionX = forceDirectionX * force * 0.5;
                        const directionY = forceDirectionY * force * 0.5;

                        // Simple attraction
                        this.vx += directionX * 0.05;
                        this.vy += directionY * 0.05;
                    }
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color + "0.5)"; // Base opacity
                ctx.fill();
            }
        }

        // Initialize particles
        const initParticles = () => {
            particles = [];
            const count = Math.min(Math.floor((width * height) / 15000), 100);
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        };

        // Animation Loop
        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        const opacity = 1 - distance / connectionDistance;
                        ctx.strokeStyle = `rgba(6, 182, 212, ${opacity * 0.15})`; // Low opacity Cyan lines
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Update and draw particles
            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        // Setup
        canvas.width = width;
        canvas.height = height;
        initParticles();
        animate();

        // Event Listeners
        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseout", handleMouseLeave);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseout", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] pointer-events-none bg-black"
            style={{ background: "transparent" }} // Let CSS handles bg color if needed
        />
    );
}
