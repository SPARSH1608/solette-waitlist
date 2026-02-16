
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black px-6 md:px-12 lg:px-24 pb-24 pt-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Box Inspired by Graphy UI */}
        <div className="bg-neutral-900/40 border border-white/5 rounded-[40px] p-8 md:p-16 backdrop-blur-sm">

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

            {/* Left Column: Branding and Socials */}
            <div className="flex-1 space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full solana-gradient flex items-center justify-center font-black text-black text-sm">S</div>
                <span className="text-2xl font-bold tracking-tighter uppercase">Solette</span>
              </div>

              <p className="text-sm md:text-base opacity-50 max-w-sm leading-relaxed font-medium">
                Solette empowers players to experience the ultimate fusion of cinematic gaming and Solana L1 speed. Real stakes, proven fairness, and instant rewards.
              </p>

              <div className="flex items-center gap-6">
                {/* Mock Social Icons */}
                <a href="#" className="opacity-40 hover:opacity-100 hover:text-[#14F195] transition-all">
                  <span className="text-xs font-bold tracking-widest uppercase">X</span>
                </a>
                <a href="#" className="opacity-40 hover:opacity-100 hover:text-[#14F195] transition-all">
                  <span className="text-xs font-bold tracking-widest uppercase">Discord</span>
                </a>
                <a href="#" className="opacity-40 hover:opacity-100 hover:text-[#14F195] transition-all">
                  <span className="text-xs font-bold tracking-widest uppercase">Insta</span>
                </a>
                <a href="#" className="opacity-40 hover:opacity-100 hover:text-[#14F195] transition-all">
                  <span className="text-xs font-bold tracking-widest uppercase">Github</span>
                </a>
              </div>
            </div>

            {/* Right Column: Link Groups */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">

              {/* Product */}
              <div className="space-y-6">
                <h4 className="text-sm font-black uppercase tracking-widest">App</h4>
                <ul className="space-y-4 text-sm font-medium opacity-50">
                  <li><a href="#" className="hover:opacity-100 hover:text-white transition-all">Features</a></li>
                  <li><a href="#" className="hover:opacity-100 hover:text-white transition-all">Solana L1</a></li>
                  <li><a href="#" className="hover:opacity-100 hover:text-white transition-all">Fairness</a></li>
                  <li><a href="#" className="hover:opacity-100 hover:text-white transition-all">Lobby</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div className="space-y-6">
                <h4 className="text-sm font-black uppercase tracking-widest">Support</h4>
                <ul className="space-y-4 text-sm font-medium opacity-50">
                  <li><a href="#" className="hover:opacity-100 hover:text-white transition-all">Documentation</a></li>
                  <li><a href="#" className="hover:opacity-100 hover:text-white transition-all">Tutorials</a></li>
                  <li><a href="#" className="hover:opacity-100 hover:text-white transition-all">Security</a></li>
                  <li><a href="#" className="hover:opacity-100 hover:text-white transition-all">Help Center</a></li>
                </ul>
              </div>

              {/* Company */}
              <div className="space-y-6">
                <h4 className="text-sm font-black uppercase tracking-widest">Company</h4>
                <ul className="space-y-4 text-sm font-medium opacity-50">
                  <li><a href="#" className="hover:opacity-100 hover:text-white transition-all">About</a></li>
                  <li><a href="#" className="hover:opacity-100 hover:text-white transition-all">Careers</a></li>
                  <li><a href="#" className="hover:opacity-100 hover:text-white transition-all">Contact</a></li>
                  <li><a href="#" className="hover:opacity-100 hover:text-white transition-all">Partners</a></li>
                </ul>
              </div>

            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-white/5 my-12"></div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-xs opacity-30 font-medium">
              &copy; {new Date().getFullYear()} Solette Labs. All rights reserved.
            </p>

            <div className="flex items-center gap-8 text-xs font-medium opacity-40">
              <a href="#" className="hover:opacity-100 hover:underline transition-all underline-offset-4">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 hover:underline transition-all underline-offset-4">Terms of Service</a>
              <a href="#" className="hover:opacity-100 hover:underline transition-all underline-offset-4">Cookie Settings</a>
            </div>
          </div>

        </div>

        {/* Cinematic Branding background text */}
        <div className="mt-24 pointer-events-none select-none">
          <h2 className="text-[12vw] font-black uppercase text-white/[0.02] tracking-tighter leading-none text-center italic">
            SOLETTE
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
