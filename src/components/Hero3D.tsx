import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// 3D glowing rotating sphere with orbiting ring
const InfinityCore = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (sphereRef.current) {
      sphereRef.current.rotation.y = t * 0.3;
      sphereRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.5;
      ringRef.current.rotation.x = Math.PI / 4;
    }
  });

  return (
    <group>
      {/* Glowing central sphere */}
      <mesh ref={sphereRef} scale={2.4}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#a855f7"
          metalness={0.8}
          roughness={0.2}
          emissive="#7c3aed"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Rotating energy ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[3, 0.1, 16, 100]} />
        <meshStandardMaterial
          color="#60a5fa"
          emissive="#3b82f6"
          emissiveIntensity={0.3}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Floating tech particles */}
      <TechParticle position={[-4, 2, 1]} color="#8b5cf6" />
      <TechParticle position={[4, -2, -1]} color="#3b82f6" />
      <TechParticle position={[2, 3, 2]} color="#a855f7" />
      <TechParticle position={[-3, -1, -2]} color="#6366f1" />
    </group>
  );
};

// Small rotating particles around the core
const TechParticle = ({
  position,
  color,
}: {
  position: [number, number, number];
  color: string;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(t + position[0]) * 0.5;
      meshRef.current.rotation.x = t * 0.8;
      meshRef.current.rotation.y = t * 0.6;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
    </mesh>
  );
};

// The full scene with lights and orbit control
const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      <InfinityCore />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
};

const Hero3D = () => {
  return (
    <div className="w-full h-full opacity-30">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          className="!absolute !inset-0"
          gl={{ antialias: true, alpha: true }}
          onCreated={({ gl }) => {
            gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Hero3D;
