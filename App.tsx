import React from 'react';
import { LogoBadge } from './components/LogoBadge';
import { LinkButton } from './components/LinkButton';
import { NAVIGATION_LINKS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Section - Hero Image */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen bg-slate-900 overflow-hidden">
        {/* Main Background Image 
            Updated to point to the local file in the public folder.
            Ensure your image is named 'profile.jpg' and placed in the public/ directory.
        */}
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-full h-full object-cover object-top opacity-95"
        />
        
        {/* Gradient Overlay for text readability (subtle) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/20 pointer-events-none" />

        {/* Logo Badge Overlay - Positioned bottom left */}
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 transform hover:scale-105 transition-transform duration-500 cursor-default">
          <LogoBadge />
        </div>
      </div>

      {/* Right Section - Navigation Links */}
      <div className="w-full md:w-1/2 min-h-[50vh] md:h-screen flex flex-col justify-center items-center p-6 md:p-16 bg-white overflow-y-auto">
        
        <div className="w-full max-w-md mb-8 text-center md:text-left animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Welcome
          </h1>
          <p className="text-gray-500 text-lg">
            Join your class group below.
          </p>
        </div>

        <nav className="w-full flex flex-col items-center gap-6">
          {NAVIGATION_LINKS.map((link) => (
            <LinkButton key={link.id} link={link} />
          ))}
        </nav>

        {/* Footer Info */}
        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Education Center.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default App;