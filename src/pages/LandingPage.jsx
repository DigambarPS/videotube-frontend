import React from 'react';
import { Link } from 'react-router-dom';
import { HiSparkles } from 'react-icons/hi2';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      {/* Main Hero Section */}
      <main className="max-w-4xl mx-auto px-6 text-center my-auto py-12">
        <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 mb-6 shadow-inner">
          <HiSparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>The next-generation independent video ecosystem</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Share your vision, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
            connect with the world.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          VidRepublic is a modern platform built for creators to publish high-definition content, engage with vibrant communities, and stream seamlessly anywhere.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/register" 
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center"
          >
            Register
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-6 text-center text-xs text-slate-600 border-t border-slate-900">
        &copy; {new Date().getFullYear()} VidRepublic. Built for creators and developers.
      </footer>

    </div>
  );
};

export default LandingPage;