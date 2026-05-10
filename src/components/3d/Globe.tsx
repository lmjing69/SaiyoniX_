"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Globe() {
  const mountRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!mountRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;

    const W = () => mountRef.current?.offsetWidth || 1;
    const H = () => mountRef.current?.offsetHeight || 1;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W(), H());

    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(40, W() / H(), 0.1, 1000);
    cam.position.z = 2.7;

    const root = new THREE.Group();
    scene.add(root);

    const R = 1;

    // Occluder
    root.add(
      new THREE.Mesh(
        new THREE.SphereGeometry(R * 0.985, 56, 56),
        new THREE.MeshBasicMaterial({ color: 0x02020a })
      )
    );

    // Atmosphere
    const atmGeo = new THREE.SphereGeometry(R * 1.06, 56, 56);
    const atmMat = new THREE.MeshBasicMaterial({
      color: 0x0a0820,
      transparent: true,
      opacity: 0.45,
      side: THREE.BackSide,
    });
    root.add(new THREE.Mesh(atmGeo, atmMat));

    // Equator Ring
    const ringGeo = new THREE.TorusGeometry(R * 1.01, 0.002, 8, 200);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xf0a830,
      transparent: true,
      opacity: 0.35,
    });
    const eqRing = new THREE.Mesh(ringGeo, ringMat);
    eqRing.rotation.x = Math.PI / 2;
    root.add(eqRing);

    function makeTex(col: string, r = 32) {
      const c = document.createElement('canvas');
      c.width = c.height = r * 2;
      const x = c.getContext('2d');
      if (x) {
        const g = x.createRadialGradient(r, r, 0, r, r, r * 0.9);
        g.addColorStop(0, col);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        x.fillStyle = g;
        x.fillRect(0, 0, r * 2, r * 2);
      }
      return new THREE.CanvasTexture(c);
    }

    // Particles
    const N = 5500;
    const ppos = [];
    const pcol = [];
    const psiz = [];
    for (let i = 0; i < N; i++) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / N);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      ppos.push(
        R * Math.sin(phi) * Math.cos(theta),
        R * Math.cos(phi),
        R * Math.sin(phi) * Math.sin(theta)
      );
      const amber = Math.random() > 0.76;
      if (amber) {
        pcol.push(0.96, 0.68, 0.2);
        psiz.push(0.022);
      } else {
        pcol.push(0.2, 0.2, 0.28);
        psiz.push(0.01);
      }
    }
    const ptGeo = new THREE.BufferGeometry();
    ptGeo.setAttribute('position', new THREE.Float32BufferAttribute(ppos, 3));
    ptGeo.setAttribute('color', new THREE.Float32BufferAttribute(pcol, 3));
    const ptMat = new THREE.PointsMaterial({
      map: makeTex('rgba(240,168,48,1)'),
      size: 0.022,
      vertexColors: true,
      transparent: true,
      opacity: 0.88,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    root.add(new THREE.Points(ptGeo, ptMat));

    // Hubs
    function ll(lat: number, lng: number) {
      const phi = (90 - lat) * Math.PI / 180;
      const theta = (lng + 180) * Math.PI / 180;
      return new THREE.Vector3(
        -R * Math.sin(phi) * Math.cos(theta),
        R * Math.cos(phi),
        R * Math.sin(phi) * Math.sin(theta)
      );
    }
    const cities: [number, number][] = [
      [40.7, -74], [51.5, -0.1], [35.7, 139.7], [1.3, 103.8], [25.2, 55.3],
      [-23.5, -46.6], [19.1, 72.9], [-33.9, 151.2], [50.1, 8.7], [37.8, -122.4],
      [55.7, 37.6], [39.9, 116.4], [28.6, 77.2], [-1.3, 36.8], [41, 28.9], [-33.9, 18.4]
    ];
    const cvecs = cities.map(c => ll(c[0], c[1]));

    const hbGeo = new THREE.BufferGeometry();
    const hubPts: number[] = [];
    cvecs.forEach(v => hubPts.push(v.x, v.y, v.z));
    
    hbGeo.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(hubPts, 3)
    );
    root.add(
      new THREE.Points(
        hbGeo,
        new THREE.PointsMaterial({
          map: makeTex('rgba(240,168,48,1)', 48),
          size: 0.072,
          transparent: true,
          opacity: 0.95,
          sizeAttenuation: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        })
      )
    );

    // Arcs
    const ARC_CONNS = [
      [0, 1], [0, 9], [0, 5], [1, 7], [1, 8], [2, 3], [2, 11], [3, 4], [3, 6],
      [4, 6], [5, 9], [6, 12], [8, 1], [8, 4], [10, 8], [10, 1], [11, 2], [13, 12],
      [14, 1], [14, 8], [15, 4], [15, 7]
    ];
    const arcGroup = new THREE.Group();
    root.add(arcGroup);
    const arcs = ARC_CONNS.map(([a, b]) => {
      const from = cvecs[a];
      const to = cvecs[b];
      const mid = from.clone().lerp(to, 0.5).normalize().multiplyScalar(R * 1.55);
      const curve = new THREE.QuadraticBezierCurve3(from, mid, to);
      const pts = curve.getPoints(80);
      const mat = new THREE.LineBasicMaterial({
        color: 0xf0a830,
        transparent: true,
        opacity: 0,
        depthWrite: false,
      });
      const line = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([pts[0]]),
        mat
      );
      arcGroup.add(line);
      return { line, pts, mat, prog: Math.random() * 0.9, speed: 0.0032 + Math.random() * 0.005 };
    });

    let drag = false,
      rotX = 0.22,
      rotY = 0,
      tX = 0.22,
      tY = 0,
      px = 0,
      py = 0,
      auto = true;

    const onPointerDown = (e: PointerEvent) => {
      drag = true;
      auto = false;
      px = e.clientX;
      py = e.clientY;
      canvas.setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!drag) return;
      tY += (e.clientX - px) * 0.006;
      tX += (e.clientY - py) * 0.005;
      tX = Math.max(-0.7, Math.min(0.7, tX));
      px = e.clientX;
      py = e.clientY;
    };
    const onPointerUp = () => {
      drag = false;
      setTimeout(() => (auto = true), 2500);
    };

    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerup', onPointerUp);

    const onScroll = () => {
      if (!auto) return;
      const progress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      tX = 0.22 + progress * 0.3;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    let t = 0;
    let isUnmounted = false;
    let reqId: number;
    const frame = () => {
      if (isUnmounted) return;
      reqId = requestAnimationFrame(frame);
      t += 0.007;
      if (auto) tY += 0.0028;
      rotX += (tX - rotX) * 0.065;
      rotY += (tY - rotY) * 0.038;
      root.rotation.x = rotX;
      root.rotation.y = rotY;
      eqRing.rotation.x = Math.PI / 2 + rotX * 0.05;

      arcs.forEach(a => {
        a.prog += a.speed;
        if (a.prog > 1.45) a.prog = -Math.random() * 0.4;
        const p = a.prog;
        const fi = Math.min(p / 0.3, 1);
        const fo = p > 0.8 ? Math.max(0, (1.45 - p) / 0.45) : 1;
        a.mat.opacity = fi * fo * 0.78;
        if (p > 0 && p <= 1) {
          const n = Math.max(2, Math.floor(p * a.pts.length));
          const g = new THREE.BufferGeometry().setFromPoints(a.pts.slice(0, n));
          a.line.geometry.dispose();
          a.line.geometry = g;
        }
      });

      root.scale.setScalar(1 + Math.sin(t * 0.7) * 0.012);
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
      window.removeEventListener('scroll', onScroll);
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerup', onPointerUp);
      cancelAnimationFrame(reqId);
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} className="w-full h-full relative">
      <canvas ref={canvasRef} className="w-full h-full block cursor-grab active:cursor-grabbing touch-none" />
    </div>
  );
}
