import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const HeroSection = () => {
  const canvasRef = useRef();

  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300"></div>
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="space-y-8">
            <h1 className="font-['Helvetica'] text-4xl md:text-6xl font-bold tracking-[-0.01em] leading-tight">
              OGUZ, we believe in experiences not websites
            </h1>
            <div className="w-24 h-1 bg-black"></div>
          </div>
          <div className="h-96 lg:h-full rounded-2xl overflow-hidden shadow-2xl">
            <Canvas>
              <OrbitControls enableZoom={false} enablePan={false} autoRotate />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;