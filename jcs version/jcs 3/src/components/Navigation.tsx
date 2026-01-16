
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          {/* Exact logo recreation from the image */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 flex flex-col items-center justify-center text-white font-bold relative">
            <div className="text-sm leading-tight">JCS</div>
            <div className="text-xs leading-tight">INFINITY</div>
            <div className="absolute bottom-2 flex items-center space-x-1">
              <span className="text-xs">&lt;</span>
              <span className="text-lg">∞</span>
              <span className="text-xs">&gt;</span>
            </div>
            <div className="absolute bottom-1 w-4 h-0.5 bg-white/60"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-xl">JCS INFINITY</span>
            <span className="text-white/60 text-xs">Code Club</span>
          </div>
        </Link>
        
        <div className="flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-white/80 hover:text-white transition-colors ${isActive('/') ? 'text-white' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/blog" 
            className={`text-white/80 hover:text-white transition-colors ${isActive('/blog') ? 'text-white' : ''}`}
          >
            Blog
          </Link>
          <Link 
            to="/profile" 
            className={`text-white/80 hover:text-white transition-colors ${isActive('/profile') ? 'text-white' : ''}`}
          >
            Profile
          </Link>
          <Link 
            to="/login" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
