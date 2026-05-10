"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function EarthGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!mountRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const mount = mountRef.current;
    const W = () => mount.offsetWidth || 1;
    const H = () => mount.offsetHeight || 1;

    const renderer = new THREE.WebGLRenderer({ 
      canvas, 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance" 
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W(), H());

    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(45, W() / H(), 0.1, 1000);
    cam.position.z = 4;

    const controls = new OrbitControls(cam, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.2;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.8;

    const root = new THREE.Group();
    scene.add(root);

    // ── Sphere Core (Subtle Glow) ──────────────────────────────────────────
    const coreGeo = new THREE.SphereGeometry(1.48, 64, 64);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xf0a830,
      transparent: true,
      opacity: 0.03,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    root.add(core);

    // ── Particle System (Nodes) ──────────────────────────────────────────────
    const N_TOTAL = 600; 
    const radius = 1.5;
    const ppos = new Float32Array(N_TOTAL * 3);
    const colors = new Float32Array(N_TOTAL * 3);
    const accentColor = new THREE.Color(0xf0a830);

    for (let i = 0; i < N_TOTAL; i++) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / N_TOTAL);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);

      ppos[i * 3] = x;
      ppos[i * 3 + 1] = y;
      ppos[i * 3 + 2] = z;

      colors[i * 3] = accentColor.r;
      colors[i * 3 + 1] = accentColor.g;
      colors[i * 3 + 2] = accentColor.b;
    }

    const ptGeo = new THREE.BufferGeometry();
    ptGeo.setAttribute('position', new THREE.BufferAttribute(ppos, 3));
    ptGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const ptMat = new THREE.PointsMaterial({
      size: 0.045, 
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(ptGeo, ptMat);
    root.add(points);

    // ── Neural Network (Lines) ────────────────────────────────────────────────
    const lineIndices: number[] = [];
    const maxDistance = 0.42;

    for (let i = 0; i < N_TOTAL; i++) {
      const p1 = new THREE.Vector3(ppos[i * 3], ppos[i * 3 + 1], ppos[i * 3 + 2]);
      for (let j = i + 1; j < N_TOTAL; j++) {
        const p2 = new THREE.Vector3(ppos[j * 3], ppos[j * 3 + 1], ppos[j * 3 + 2]);
        if (p1.distanceTo(p2) < maxDistance) {
          lineIndices.push(i, j);
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(ppos, 3));
    lineGeo.setIndex(lineIndices);

    const lineMat = new THREE.LineBasicMaterial({
      color: 0xf0a830,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });

    const lines = new THREE.LineSegments(lineGeo, lineMat);
    root.add(lines);

    // ── Render loop ───────────────────────────────────────────────────────────
    let isUnmounted = false;
    let reqId: number;

    const frame = () => {
      if (isUnmounted) return;
      reqId = requestAnimationFrame(frame);
      controls.update();
      renderer.render(scene, cam);
    };
    frame();

    const onResize = () => {
      if (isUnmounted) return;
      cam.aspect = W() / H();
      cam.updateProjectionMatrix();
      renderer.setSize(W(), H());
    };
    window.addEventListener('resize', onResize);

    return () => {
      isUnmounted = true;
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(reqId);
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} className="w-full h-full relative cursor-grab active:cursor-grabbing group">
      <canvas
        ref={canvasRef}
        className="w-full h-full block touch-none"
      />
      <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-full scale-90 opacity-0 group-active:opacity-100 group-active:scale-100 transition-all duration-500" />
    </div>
  );
}
