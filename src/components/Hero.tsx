import React, { useState, useEffect } from 'react';
import Hero3D from './Hero3D';
import HeroFallback from './HeroFallback';

const Hero = () => {
  const [use3D, setUse3D] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      setUse3D(false);
    }
  }, []);

  const handleError = () => {
    console.warn('3D Hero failed, switching to fallback');
    setHasError(true);
    setUse3D(false);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-purple-900 to-purple-600 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        {use3D && !hasError ? (
          <React.Suspense fallback={<HeroFallback />}>
            <div onError={handleError}>
              <Hero3D />
            </div>
          </React.Suspense>
        ) : (
          <HeroFallback />
        )}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
          Welcome to JCS Infinity
        </h1>
        <h2 className="text-2xl md:text-3xl font-light mb-6 text-white/90">
          Where code meets creativity.
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Discover a passionate student developer community. Build projects, collaborate, attend events, and grow together in the world of tech.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#events"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Upcoming Events
          </a>
          <a
            href="/blog"
            className="border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
          >
            Explore Blog
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
