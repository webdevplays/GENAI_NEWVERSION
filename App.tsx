
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MatrixRain } from './components/MatrixRain';
import { Hero } from './components/Hero';
import { AboutWorld } from './components/AboutWorld';
import { GameOverview } from './components/GameOverview';
import { KeyFeatures } from './components/KeyFeatures';
import { LoreOrb } from './components/LoreOrb';
import { Exploration } from './components/Exploration';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { CustomCursor } from './components/CustomCursor';
import { TerminalPopup } from './components/TerminalPopup';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalMessage, setTerminalMessage] = useState("");

  useEffect(() => {
    // Initial loading simulation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  const triggerTerminal = (message: string) => {
    setTerminalMessage(message);
    setTerminalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-black text-[#bf00ff] overflow-hidden selection:bg-[#bf00ff] selection:text-black">
      <AnimatePresence>
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10"
        >
          {/* Background Layers */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <MatrixRain />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
            <div className="absolute inset-0 scanline pointer-events-none" />
          </div>

          <CustomCursor />

          <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex items-center gap-4 text-2xl font-black tracking-tighter matrix-glow cursor-pointer group"
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-[#bf00ff]/30 shadow-[0_0_15px_rgba(191,0,255,0.4)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-90 bg-black overflow-hidden">
                {/* Custom SVG Logo mimicking the Machineborn Iris */}
                <svg viewBox="0 0 100 100" className="w-full h-full p-0.5">
                  <defs>
                    <radialGradient id="irisGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#000000" />
                      <stop offset="40%" stopColor="#4a0072" />
                      <stop offset="80%" stopColor="#bf00ff" />
                      <stop offset="100%" stopColor="#1a0025" />
                    </radialGradient>
                  </defs>
                  <circle cx="50" cy="50" r="48" fill="url(#irisGrad)" />
                  <circle cx="50" cy="50" r="14" fill="#000" />
                  
                  {/* Outer Geometric Guides */}
                  <g stroke="white" strokeWidth="1.5" fill="none" opacity="0.8">
                    {/* Triangles */}
                    <path d="M50 12 L44 22 L56 22 Z" />
                    <path d="M50 88 L44 78 L56 78 Z" />
                    <path d="M12 50 L22 44 L22 56 Z" />
                    <path d="M88 50 L78 44 L78 56 Z" />
                    
                    {/* Brackets */}
                    <path d="M30 20 L20 20 L20 30" />
                    <path d="M70 20 L80 20 L80 30" />
                    <path d="M30 80 L20 80 L20 70" />
                    <path d="M70 80 L80 80 L80 70" />
                  </g>
                  
                  {/* Subtle scanned lines overlay */}
                  <g opacity="0.2">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <line key={i} x1="0" y1={10 * i} x2="100" y2={10 * i} stroke="#bf00ff" strokeWidth="0.5" />
                    ))}
                  </g>
                </svg>
              </div>
              <span className="hidden sm:inline">GEN [Ai]</span>
            </motion.div>
            <div className="flex gap-8 text-xs uppercase tracking-[0.2em] font-bold">
              {['Nexus', 'Chronicle', 'Protocol', 'Exploits'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-white transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#bf00ff] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </nav>

          <main className="relative scroll-smooth">
            <Hero onAction={() => triggerTerminal("ACCESS_GRANTED: Initializing Neural Link...")} />
            
            <section id="nexus" className="relative py-24 px-4 md:px-20 bg-black/40 backdrop-blur-sm">
              <AboutWorld />
            </section>

            <section id="chronicle" className="relative py-24 px-4 md:px-20 bg-black/60">
              <GameOverview />
            </section>

            <section id="protocol" className="relative py-24 px-4 md:px-20">
              <KeyFeatures />
            </section>

            <section className="relative py-32 px-4 flex flex-col items-center justify-center overflow-hidden">
               <LoreOrb />
            </section>

            <section id="exploits" className="relative py-24 px-4 md:px-20 bg-black/60">
              <Exploration />
            </section>

            <Footer />
          </main>

          <TerminalPopup 
            isOpen={terminalOpen} 
            onClose={() => setTerminalOpen(false)} 
            message={terminalMessage}
          />
        </motion.div>
      )}
    </div>
  );
};

export default App;
