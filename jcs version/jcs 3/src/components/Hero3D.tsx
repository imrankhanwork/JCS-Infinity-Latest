
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const EarthLikeSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.5;
      ringRef.current.rotation.x = Math.PI / 4;
    }
  });

  return (
    <group>
      {/* Main sphere with vibrant colors */}
      <mesh ref={meshRef} scale={2.5}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial 
          color="#8B5CF6" 
          roughness={0.2} 
          metalness={0.8}
          emissive="#4C1D95"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Outer ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[3, 0.1, 16, 100]} />
        <meshStandardMaterial 
          color="#3B82F6" 
          emissive="#1E40AF"
          emissiveIntensity={0.2}
          transparent={true}
          opacity={0.7}
        />
      </mesh>
      
      {/* Floating particles */}
      <FloatingParticle position={[-4, 2, 1]} color="#8B5CF6" />
      <FloatingParticle position={[4, -2, -1]} color="#3B82F6" />
      <FloatingParticle position={[2, 3, 2]} color="#A855F7" />
      <FloatingParticle position={[-3, -1, -2]} color="#6366F1" />
    </group>
  );
};

const FloatingParticle = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.8;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.6;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={0.3}
      />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
      <EarthLikeSphere />
      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={0.5} 
        enablePan={false}
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
