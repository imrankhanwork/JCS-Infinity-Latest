
import React, { useState } from 'react';
import Navigation from '../components/Navigation';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-purple-600">
      <Navigation />
      
      <div className="pt-24 flex items-center justify-center min-h-screen px-4">
        <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              {isSignUp ? 'Join the Club' : 'Welcome Back'}
            </h1>
            <p className="text-gray-300">
              {isSignUp ? 'Create your account to get started' : 'Sign in to your account'}
            </p>
          </div>
          
          <form className="space-y-6">
            {isSignUp && (
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
            )}
            
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Enter your password"
              />
            </div>
            
            {!isSignUp && (
              <div className="flex items-center justify-between">
                <label className="flex items-center text-white text-sm">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <a href="#" className="text-purple-400 text-sm hover:text-purple-300">
                  Forgot password?
                </a>
              </div>
            )}
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              {isSignUp ? 'Create Account' : 'Sign In'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-300">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-purple-400 hover:text-purple-300 ml-1 font-medium"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
