
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 md:px-12 py-8 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full solana-gradient flex items-center justify-center font-black text-black text-xs">S</div>
        <span className="text-xl font-bold tracking-tighter uppercase">Solette</span>
      </div>

      <div className="hidden md:flex gap-8 items-center text-xs font-medium uppercase tracking-[0.2em] opacity-70">
        <a href="#" className="hover:opacity-100 transition-opacity">Experience</a>
        <a href="#" className="hover:opacity-100 transition-opacity">Solana Integration</a>
        <a href="#" className="hover:opacity-100 transition-opacity">Security</a>
        <a href="#" className="hover:opacity-100 transition-opacity">Community</a>
      </div>

      <div>
        <button className="px-6 py-2 border border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
          Get App
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
