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
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    window.addEventListener("mousemove", e => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    });

    const render = () => {
      t += 0.008;

      // soft trail fade instead of hard clear
      ctx.fillStyle = "rgba(2,6,23,0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      blobs.current.forEach((b, i) => {
        // inertia cursor follow
        b.x += (mouse.current.x - b.x) * b.speed;
        b.y += (mouse.current.y - b.y) * b.speed;

        // floating ambient motion
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

        const hue = 220 + Math.sin(t + i) * 50;

        g.addColorStop(0, `hsla(${hue},80%,65%,0.38)`);
        g.addColorStop(0.45, `hsla(${hue + 30},80%,60%,0.22)`);
        g.addColorStop(1, "transparent");

        ctx.fillStyle = g;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // subtle cinematic grain
      const noise = ctx.createImageData(canvas.width, canvas.height);
      for (let i = 0; i < noise.data.length; i += 4) {
        const n = Math.random() * 10;
        noise.data[i] = n;
        noise.data[i + 1] = n;
        noise.data[i + 2] = n;
        noise.data[i + 3] = 12;
      }
      ctx.putImageData(noise, 0, 0);

      requestAnimationFrame(render);
    };

    render();

    return () => window.removeEventListener("resize", resize);
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
