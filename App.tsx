
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import PlaySection from './components/PlaySection';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#14F195] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <FeatureSection />
        <CommunitySection />
        {/* <PlaySection /> */}
      </main>
      <Footer />

      {/* Scroll indicator for potential future content */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40 pointer-events-none">
        <div className="w-px h-12 bg-white mx-auto"></div>
      </div>
    </div>
  );
};

export default App;
