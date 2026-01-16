import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 flex flex-col items-center justify-center text-white font-bold relative shadow-lg group-hover:scale-105 transition-transform">
            <div className="text-sm leading-tight">JCS</div>
            <div className="text-xs leading-tight">INFINITY</div>
            <div className="absolute bottom-2 flex items-center space-x-1 text-white/80 text-xs">
              <span>&lt;</span>
              <span className="text-lg font-light">∞</span>
              <span>&gt;</span>
            </div>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-white font-bold text-lg md:text-xl">JCS INFINITY</span>
            <span className="text-white/60 text-xs md:text-sm">Code Club</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden sm:flex items-center space-x-6 md:space-x-8">
          <Link
            to="/"
            className={`text-white/80 hover:text-white transition-colors ${
              isActive('/') ? 'text-white font-semibold' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="/blog"
            className={`text-white/80 hover:text-white transition-colors ${
              isActive('/blog') ? 'text-white font-semibold' : ''
            }`}
          >
            Blog
          </Link>
          <Link
            to="/profile"
            className={`text-white/80 hover:text-white transition-colors ${
              isActive('/profile') ? 'text-white font-semibold' : ''
            }`}
          >
            Profile
          </Link>
          <Link
            to="/login"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
