import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-purple-600 text-white px-4">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Welcome to <span className="text-purple-400">JCS Infinity</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-xl mx-auto">
          Learn. Connect. Contribute. Dive into our coding community and start your journey today.
        </p>

        <div className="flex justify-center gap-4 pt-6">
          <Link
            to="/home"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all font-medium text-white"
          >
            Enter Website
          </Link>
          <Link
            to="/login"
            className="px-6 py-3 rounded-lg border border-white/20 hover:border-purple-400 transition-all text-white"
          >
            Member Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
