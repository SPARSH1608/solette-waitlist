
import React, { useState } from 'react';
import WaitlistModal from './WaitlistModal';

const Hero: React.FC = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-110 opacity-60"
        >
          <source src="/assets/output.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Animated Solana Pulse */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9945FF]/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#14F195]/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 text-center w-full max-w-[1440px] px-6">

        {/* Upper Subtitle */}
        <div className="mb-12">
          <p className="text-sm md:text-lg font-medium tracking-[0.3em] uppercase opacity-80 max-w-2xl mx-auto leading-relaxed">
            Building cinematic gaming experiences through <br className="hidden md:block" />
            <span className="border-b border-white/30 cursor-pointer hover:border-white transition-all">Probable Fairness</span>,
            <span className="border-b border-white/30 cursor-pointer hover:border-white transition-all"> Solana speed</span> &
            <span className="border-b border-white/30 cursor-pointer hover:border-white transition-all"> DeFi Integration</span>.
          </p>
        </div>

        {/* Main Title - Inspired by 'GANG' style */}
        <div className="relative mb-8 md:mb-24">
          <h1 className="text-[20vw] md:text-[18vw] leading-[0.8] font-[900] uppercase italic tracking-tighter mix-blend-difference drop-shadow-2xl">
            SOLETTE
          </h1>
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-40">
            <div className="w-10 h-[1px] bg-white"></div>
            <div className="w-2 h-2 rounded-full border border-white"></div>
            <div className="w-10 h-[1px] bg-white"></div>
          </div>
        </div>

        {/* Bottom CTA / Tagline Area */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 w-full">

          <div className="text-left w-full md:max-w-xs order-2 md:order-1 flex flex-col items-center md:items-start">
            <h3 className="text-lg md:text-2xl font-black uppercase tracking-tighter mb-2 text-center md:text-left">
              Pure Speed. <br className="hidden md:block" /> Pure Luck.
            </h3>
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] opacity-60 mb-6">
              Powered by Solana L1
            </p>
          </div>

          <div className="text-center md:text-right order-1 md:order-2 w-full md:w-auto flex flex-col items-center md:items-end">
            <div className="mb-6 md:mb-4">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] opacity-40 block mb-2">Welcome to the future</span>
              <h2 className="text-xl md:text-4xl font-bold uppercase tracking-tight">
                WES WALKER <br />
                <span className="text-xs md:text-xl font-medium tracking-[0.2em] solana-text-gradient uppercase">On Solana L1</span>
              </h2>
            </div>
            <div className="flex flex-col items-center md:items-end gap-1">
              <p className="text-[10px] uppercase font-mono tracking-widest opacity-50 mb-6">BY SOLETTE LABS</p>

              <button
                onClick={() => setIsWaitlistOpen(true)}
                className="w-full md:w-auto px-8 py-4 bg-[#14F195] hover:bg-[#0fd985] text-black font-black uppercase tracking-[0.2em] rounded-full text-[10px] md:text-xs transition-all shadow-[0_0_40px_rgba(20,241,149,0.2)] hover:scale-105 active:scale-95 mb-8 md:mb-6"
              >
                Join The Waitlist
              </button>

              <div className="w-12 h-[1px] bg-white/20 mt-2 hidden md:block"></div>
              <button className="text-[10px] md:text-[13px] font-black uppercase tracking-[0.5em] mt-4 group flex items-center gap-2 hover:gap-4 transition-all">
                DISCOVER
                <span className="w-4 h-[2px] bg-white group-hover:w-8 transition-all"></span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Decorative Target Circles */}
      <div className="absolute top-24 left-24 opacity-20 hidden lg:block">
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="absolute w-full h-[1px] bg-white"></div>
          <div className="absolute h-full w-[1px] bg-white"></div>
          <div className="w-4 h-4 rounded-full border border-white"></div>
        </div>
      </div>
      <div className="absolute top-24 right-24 opacity-20 hidden lg:block">
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="absolute w-full h-[1px] bg-white"></div>
          <div className="absolute h-full w-[1px] bg-white"></div>
          <div className="w-4 h-4 rounded-full border border-white"></div>
        </div>
      </div>



      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </div >
  );
};

export default Hero;
