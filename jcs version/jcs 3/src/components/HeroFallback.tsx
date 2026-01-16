
import React from 'react';

const HeroFallback = () => {
  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
      <div className="relative">
        {/* Animated background shapes matching the new color scheme */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-purple-600 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-blue-600 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-5 right-5 w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg opacity-25 animate-spin"></div>
        
        {/* Main decorative element with darker purple theme */}
        <div className="w-64 h-64 bg-gradient-to-br from-purple-800/20 to-black/20 rounded-full border border-white/10 flex items-center justify-center">
          <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroFallback;
