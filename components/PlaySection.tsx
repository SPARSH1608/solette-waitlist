
import React from 'react';

const PlaySection: React.FC = () => {
   return (
      <section className="relative min-h-screen w-full bg-black flex items-center justify-center py-24 px-6 overflow-hidden">
         {/* Background elements to mimic the cosmic feel of the reference */}
         <div className="absolute top-1/4 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#14F195]/5 rounded-full blur-[120px] pointer-events-none"></div>

         {/* Main Glassmorphism Container */}
         <div className="relative z-10 w-full max-w-5xl bg-[#111]/40 border border-white/5 backdrop-blur-2xl rounded-[40px] p-8 md:p-16 shadow-2xl flex flex-col items-center">

            {/* Header Text */}
            <div className="text-center mb-12">
               <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] opacity-40 mb-6">Secure Solana Gateway</p>
               <h2 className="text-4xl md:text-8xl font-black italic tracking-tighter text-white uppercase leading-[0.9]">To Enter<br />The Arena</h2>
            </div>

            {/* The Split View (QR & Info) */}
            <div className="w-full bg-white/5 border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">

               {/* Left Side: QR Code Area */}
               <div className="flex-1 flex flex-col items-center">
                  <h3 className="text-sm font-bold uppercase tracking-widest opacity-60 mb-8">Scan the QR code</h3>
                  <div className="relative p-6 bg-white/5 rounded-3xl border border-white/10 group">
                     {/* Corner Accents */}
                     <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#14F195] rounded-tl-lg"></div>
                     <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-[#14F195] rounded-tr-lg"></div>
                     <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-[#14F195] rounded-bl-lg"></div>
                     <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#14F195] rounded-br-lg"></div>

                     {/* Mock QR Code Styling */}
                     <div className="w-48 h-48 md:w-56 md:h-56 bg-white/10 flex flex-col gap-2 p-2 rounded-xl">
                        <div className="flex gap-2 h-1/3">
                           <div className="w-1/3 bg-[#14F195]/40 rounded-sm"></div>
                           <div className="w-2/3 bg-white/10 rounded-sm"></div>
                        </div>
                        <div className="flex gap-2 h-1/3">
                           <div className="w-2/3 bg-white/20 rounded-sm"></div>
                           <div className="w-1/3 bg-[#9945FF]/40 rounded-sm"></div>
                        </div>
                        <div className="flex gap-2 h-1/3">
                           <div className="w-1/2 bg-[#14F195]/30 rounded-sm"></div>
                           <div className="w-1/2 bg-white/10 rounded-sm"></div>
                        </div>
                        {/* Center Scan Line */}
                        <div className="absolute inset-x-0 h-[2px] bg-[#14F195] top-1/2 -translate-y-1/2 shadow-[0_0_15px_#14F195] animate-bounce"></div>
                     </div>
                  </div>
                  <p className="mt-6 text-[10px] font-mono tracking-widest opacity-30 text-center">COMPATIBLE WITH PHANTOM & SOLFLARE</p>
               </div>

               {/* Vertical Divider */}
               <div className="hidden md:flex flex-col items-center gap-4">
                  <div className="w-[1px] h-24 bg-gradient-to-t from-white/10 to-transparent"></div>
                  <span className="text-xs font-bold opacity-40">OR</span>
                  <div className="w-[1px] h-24 bg-gradient-to-b from-white/10 to-transparent"></div>
               </div>

               {/* Right Side: Direct Link/Status Area */}
               <div className="flex-1 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                     <div className="w-10 h-10 rounded-full bg-[#14F195] flex items-center justify-center text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                     </div>
                  </div>
                  <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-4">Direct Access Ready</h4>
                  <p className="text-sm font-medium tracking-widest uppercase opacity-40 mb-8 max-w-xs mx-auto leading-relaxed">
                     Your session is encrypted. Use the button below to launch the mobile experience directly.
                  </p>

                  <a href="#" className="flex items-center gap-3 text-[#14F195] hover:text-white transition-colors group">
                     <span className="text-sm font-black uppercase tracking-widest">Go to Web App</span>
                     <div className="w-8 h-8 rounded-full bg-[#14F195] flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                     </div>
                  </a>
               </div>

            </div>

            {/* Footer Disclaimer Style Text */}
            <div className="mt-12 max-w-3xl text-center">
               <p className="text-[10px] md:text-[11px] leading-relaxed opacity-40 font-medium tracking-wide">
                  By scanning the QR code or connecting your wallet, you consent to the blockchain validation process of Solette.
                  All transactions are finalized on the Solana L1 network. Gaming involves risk; please play responsibly.
                  Terms of service apply. <span className="text-white/60 underline cursor-pointer">Privacy Policy & Terms</span>.
               </p>
            </div>

         </div>

         {/* Decorative Orbs & Arrows outside the modal */}
         <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-20 mr-12 hidden lg:flex">
            {[...Array(6)].map((_, i) => (
               <svg key={i} className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
               </svg>
            ))}
         </div>
      </section>
   );
};

export default PlaySection;
