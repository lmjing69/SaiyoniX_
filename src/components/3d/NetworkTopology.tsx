"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function NetworkNodes() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse, viewport } = useThree();

  const N = 65;
  
// Pre-calculate positions and attributes for nodes
  const { sizes, isAccent, vectors } = useMemo(() => {
    const vectors: THREE.Vector3[] = [];
    const sizes = new Float32Array(N);
    const isAccent = BooleanArray(N);

    for (let i = 0; i < N; i++) {
      const size = Math.random() * 0.015 + 0.008;
      const accent = Math.random() < 0.15;
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 16;
      const z = (Math.random() - 0.5) * 10;
      
      vectors.push(new THREE.Vector3(x, y, z));
      sizes[i] = size;
      isAccent[i] = accent;
    }

    return { sizes, isAccent, vectors };
  }, [N]);

  // Pre-calculate line connections
  const { linePositions, lineColors } = useMemo(() => {
    const linePos = [];
    const lineCols = [];
    const colNormal = new THREE.Color("rgba(255,255,255,0.06)");
    const colAccent = new THREE.Color("rgba(240,168,48,0.15)");

    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const d = vectors[i].distanceTo(vectors[j]);
        if (d < 2.5) {
          linePos.push(
            vectors[i].x, vectors[i].y, vectors[i].z,
            vectors[j].x, vectors[j].y, vectors[j].z
          );
          
          const accentLine = isAccent[i] || isAccent[j];
          const color = accentLine ? colAccent : colNormal;
          
          lineCols.push(
            color.r, color.g, color.b,
            color.r, color.g, color.b
          );
        }
      }
    }

    return { 
      linePositions: new Float32Array(linePos),
      lineColors: new Float32Array(lineCols)
    };
  }, [N, vectors, isAccent]);

  let targetX = 0;
  let targetY = 0;

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      groupRef.current.rotation.x += 0.0005;

      targetX = (mouse.x * viewport.width) / 100;
      targetY = (mouse.y * viewport.height) / 100;

      groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05;
      groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Render Nodes */}
      {vectors.map((vec, i) => (
        <mesh key={i} position={vec}>
          {isAccent[i] ? (
            <octahedronGeometry args={[sizes[i], 0]} />
          ) : (
            <boxGeometry args={[sizes[i], sizes[i], sizes[i]]} />
          )}
          <meshBasicMaterial 
            color={isAccent[i] ? "#f0a830" : "rgba(255,255,255,0.15)"} 
            wireframe={true} 
            transparent={true} 
          />
        </mesh>
      ))}

      {/* Render Lines */}
      {linePositions.length > 0 && (
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={linePositions.length / 3}
              array={linePositions}
              itemSize={3}
              args={[linePositions, 3]}
            />
            <bufferAttribute
              attach="attributes-color"
              count={lineColors.length / 3}
              array={lineColors}
              itemSize={3}
              args={[lineColors, 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial vertexColors={true} transparent={true} />
        </lineSegments>
      )}
    </group>
  );
}

// Utility to create a boolean array, since JS doesn't have a built-in one like Float32Array
function BooleanArray(size: number) {
  const arr = new Array(size);
  for(let i = 0; i < size; i++) arr[i] = false;
  return arr;
}

export default function NetworkTopology() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 52 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <NetworkNodes />
      </Canvas>
    </div>
  );
}
