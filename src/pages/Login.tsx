import React, { useState } from 'react';
import Navigation from '../components/Navigation';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-purple-600">
      <Navigation />

      <div className="pt-24 flex items-center justify-center px-4 pb-16">
        <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-8 w-full max-w-md shadow-xl">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              {isSignUp ? 'Create Your Account' : 'Welcome Back'}
            </h1>
            <p className="text-sm text-gray-300">
              {isSignUp
                ? 'Sign up to join the JCS Code Club.'
                : 'Log in to your JCS Infinity account.'}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {isSignUp && (
              <div>
                <label className="block text-white text-sm mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            )}

            <div>
              <label className="block text-white text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-white text-sm mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {!isSignUp && (
              <div className="flex justify-between text-sm text-gray-300">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <a href="#" className="text-purple-400 hover:text-purple-300">
                  Forgot Password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 mt-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              {isSignUp ? 'Create Account' : 'Log In'}
            </button>
          </form>

          {/* Toggle */}
          <div className="mt-6 text-center text-sm text-gray-300">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-purple-400 hover:text-purple-300 ml-1 font-medium"
            >
              {isSignUp ? 'Log In' : 'Sign Up'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
