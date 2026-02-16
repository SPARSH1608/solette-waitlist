import React, { useState, useEffect, useRef } from 'react';

const FeatureSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [rotation, setRotation] = useState(0);
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch('/api/waitlist/count');
        const data = await res.json();
        setWaitlistCount(data.count);
      } catch (err) {
        console.error('Failed to fetch waitlist count');
      }
    };

    fetchCount();
    // Refresh count every 30 seconds
    const interval = setInterval(fetchCount, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate progress starting from the moment the top edge enters the bottom of viewport
      // to the moment the bottom edge leaves the top of viewport.
      const startTrigger = viewportHeight;
      const endTrigger = -rect.height;
      const currentPos = rect.top;

      // Normalize progress to 0-1 range
      const scrollProgress = Math.min(Math.max(0, (startTrigger - currentPos) / (startTrigger - endTrigger)), 1);

      // Double the rotation intensity (720 degrees) for immediate visual impact
      setRotation(scrollProgress * 360);
    };

    // Use passive scroll listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call to set state if already in view
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated chip data with specific colors and values
  const chips = [
    { id: 1, top: '10%', left: '5%', size: 'w-24 h-24', text: 'WEB3', color: 'emerald' },
    { id: 2, top: '25%', left: '15%', size: 'w-16 h-16', text: 'SOL', color: 'white' },
    { id: 3, top: '45%', left: '12%', size: 'w-20 h-20', text: 'FAST', color: 'red' },
    { id: 4, top: '70%', left: '8%', size: 'w-32 h-32', text: 'HIGH', color: 'white' },
    { id: 5, top: '85%', left: '20%', size: 'w-16 h-16', text: 'PAY', color: 'red' },

    { id: 6, top: '5%', right: '10%', size: 'w-20 h-20', text: 'WIN', color: 'emerald' },
    { id: 7, top: '20%', right: '5%', size: 'w-28 h-28', text: 'BET', color: 'white' },
    { id: 8, top: '40%', right: '15%', size: 'w-14 h-14', text: 'P2P', color: 'red' },
    { id: 9, top: '65%', right: '8%', size: 'w-36 h-36', text: 'SECURE', color: 'emerald' },
    { id: 10, top: '88%', right: '18%', size: 'w-24 h-24', text: 'GAS', color: 'white' },

    // Abstract chips for depth
    { id: 11, top: '15%', left: '30%', size: 'w-12 h-12', text: '', color: 'red' },
    { id: 12, top: '80%', right: '35%', size: 'w-10 h-10', text: '', color: 'emerald' },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'red': return 'border-red-500/40 text-red-500';
      case 'emerald': return 'border-[#14F195]/40 text-[#14F195]';
      case 'white': return 'border-white/20 text-white';
      default: return 'border-white/20 text-white';
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden py-32"
    >

      {/* FULL BACKGROUND IMAGE INTEGRATION WITH ROTATION */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/components/assets/image(1).jpeg"
          className="w-full h-full object-cover opacity-40 md:opacity-60 will-change-transform"
          style={{
            transform: `scale(2.2) rotate(${rotation}deg)`
          }}
          alt="Roulette Feature"
        />
        {/* Gradients for blending and readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60"></div>
      </div>

      {/* Floating Roulette Chips */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {chips.map((chip) => (
          <div
            key={chip.id}
            className={`absolute rounded-full border-4 border-dashed flex items-center justify-center transition-transform duration-1000 animate-pulse ${chip.size} ${getColorClasses(chip.color)} shadow-[0_0_20px_rgba(0,0,0,0.5)]`}
            style={{
              top: chip.top,
              left: chip.left,
              right: chip.right,
              animationDelay: `${chip.id * 0.5}s`,
              transform: `translateY(${Math.sin(chip.id) * 20}px)`
            }}
          >
            {/* Inner Ring to complete the chip look */}
            <div className={`absolute inset-2 rounded-full border-2 border-current opacity-20`}></div>

            {chip.text && (
              <span className="text-[8px] md:text-[10px] font-black tracking-widest opacity-80 uppercase text-center px-2 z-10">
                {chip.text}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Central Content Block */}
      <div className="relative z-20 text-center max-w-2xl px-6 flex flex-col items-center">
        {/* Stylized Logo Icon */}
        <div className="mb-8 flex flex-col items-center">
          <div className="w-16 h-16 relative flex items-center justify-center">
            {/* Center Dot */}
            <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"></div>
            {/* Surrounding Dots */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white opacity-80"></div>
            <div className="absolute bottom-1 left-1 w-3 h-3 rounded-full bg-white opacity-80"></div>
            <div className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-white opacity-80"></div>
            {/* Connection lines */}
            <div className="absolute w-[2px] h-6 bg-gradient-to-t from-white to-transparent -top-2"></div>
          </div>
        </div>

        <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter mb-6 text-white uppercase leading-[0.9]">
          High Stakes.<br />High Speed.
        </h2>

        <p className="text-base md:text-lg font-medium tracking-widest uppercase opacity-40 mb-12 leading-relaxed max-w-xl">
          Solette is not just a game; it's a financial instrument of entertainment.
          Experience real-time roulette with Solana's sub-second finality.
        </p>

        <button className="px-10 py-4 bg-[#14F195] hover:bg-[#0fd985] text-black font-black uppercase tracking-[0.2em] rounded-full text-sm transition-all shadow-[0_0_40px_rgba(20,241,149,0.3)] hover:scale-105 active:scale-95">
          Enter The Lobby
        </button>

        <div className="mt-16 flex flex-col items-center gap-6">
          <div className="flex items-center gap-8 opacity-20">
            <span className="text-[10px] font-mono tracking-widest uppercase">Verified Fairness</span>
            <div className="w-1 h-1 rounded-full bg-white"></div>
            <span className="text-[10px] font-mono tracking-widest uppercase">Instant Withdrawals</span>
            <div className="w-1 h-1 rounded-full bg-white"></div>
            <span className="text-[10px] font-mono tracking-widest uppercase">Zero Gas UX</span>
          </div>

          {waitlistCount !== null && (
            <div className="group relative flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-md animate-fade-in transition-all hover:bg-white/10">
              <div className="w-2 h-2 rounded-full bg-[#14F195] animate-pulse shadow-[0_0_10px_#14F195]"></div>
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-white/60">
                <span className="text-white text-lg tabular-nums mr-2">{waitlistCount.toLocaleString()}+</span>
                Early Adopters In Waitlist
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom section gradient bridge */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default FeatureSection;
