import React from 'react';

const CommunitySection: React.FC = () => {
  return (
    <section className="relative min-h-[800px] w-full bg-black overflow-hidden flex items-center py-24 px-6 md:px-24">

      {/* FULL BACKGROUND IMAGE INTEGRATION */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/image.jpeg"
          className="w-full md:ml-16 h-full object-cover opacity-40 md:opacity-100"
          alt="Community Experience"
        />
        {/* Gradients for blending and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-24">

        {/* Left Side: Content Area */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl md:text-8xl font-black italic tracking-tighter text-white mb-10 leading-[0.9]">
            Spin. Watch.<br />
            Bet. Own.
          </h2>

          <p className="text-base md:text-lg font-medium tracking-widest uppercase opacity-40 mb-12 leading-relaxed max-w-md">
            Join the most vibrant community in the Solana ecosystem. Play, share, and win together in real-time.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            {/* App Store Button */}
            <button className="flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-3 rounded-2xl hover:bg-white hover:text-black transition-all group w-full sm:w-auto shadow-[0_0_30px_rgba(255,0,0,0.15)] hover:shadow-[0_0_50px_rgba(255,0,0,0.3)]">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current group-hover:fill-black fill-white transition-colors">
                <path d="M18.71,19.5C17.88,20.74 17.03,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] uppercase opacity-40 font-bold tracking-widest">Download on the</p>
                <p className="text-sm font-black text-white group-hover:text-black transition-colors">App Store</p>
              </div>
            </button>

            {/* Google Play Button */}
            <button className="flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-3 rounded-2xl hover:bg-white hover:text-black transition-all group w-full sm:w-auto shadow-[0_0_30px_rgba(255,0,0,0.15)] hover:shadow-[0_0_50px_rgba(255,0,0,0.3)]">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current group-hover:fill-black fill-white transition-colors">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.81,16.23C19.46,16.59 19.46,17.41 18.81,17.77L16.81,18.88L14.4,12.69L16.81,15.12M4.27,2.15L14.4,12L4.27,21.85L4.27,2.15M14.4,12L16.81,8.88L18.81,9.99C19.46,10.35 19.46,11.17 18.81,11.53L16.81,12.64L14.4,12" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] uppercase opacity-40 font-bold tracking-widest">Get it on</p>
                <p className="text-sm font-black text-white group-hover:text-black transition-colors">Google Play</p>
              </div>
            </button>
          </div>
        </div>

        {/* Right Area acts as a spacer for the background activity */}
        <div className="flex-1 min-h-[500px] hidden md:block"></div>

      </div>
    </section>
  );
};

export default CommunitySection;
