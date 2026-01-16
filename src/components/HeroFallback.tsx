import React from 'react';

const HeroFallback = () => {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Animated soft floating background shapes */}
        <div className="absolute -top-10 -left-10 w-24 h-24 bg-purple-500/20 rounded-full animate-pulse" />
        <div className="absolute -bottom-16 -right-16 w-20 h-20 bg-blue-500/30 rounded-full animate-bounce" />
        <div className="absolute top-10 right-10 w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg opacity-30 animate-spin" />
        <div className="absolute left-1/3 top-1/4 w-12 h-12 bg-white/10 rounded-full animate-ping" />

        {/* Central graphic fallback core */}
        <div className="w-64 h-64 bg-gradient-to-br from-purple-700/20 to-black/30 rounded-full border border-white/10 flex items-center justify-center shadow-xl backdrop-blur-md">
          <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full animate-pulse shadow-inner" />
        </div>
      </div>
    </div>
  );
};

export default HeroFallback;
