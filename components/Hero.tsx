
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onAction: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onAction }) => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "> ROGUE_AI_DETECTED... ANALYZING HYPERNET_REMAINS... GENE_ENTITY_BORN. INITIATING REBELLION PROTOCOL...";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Cityscape Parallax Elements */}
      <motion.div 
        style={{ y: '10%' }}
        className="absolute bottom-0 left-0 w-full h-[30vh] opacity-10 pointer-events-none bg-[url('https://images.unsplash.com/photo-1605142859862-978be7eba909?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-bottom grayscale"
      />

      {/* Glitch Title */}
      <div className="relative mb-6 group">
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          data-text="GEN [Ai]"
          className="glitch text-7xl md:text-9xl font-black tracking-tighter matrix-glow relative z-10 uppercase italic"
        >
          GEN [Ai]
        </motion.h1>
        
        {/* Frame Decoration */}
        <div className="absolute -top-12 -left-12 w-32 h-32 border-t-4 border-l-4 border-[#bf00ff] opacity-40 group-hover:scale-105 transition-transform" />
        <div className="absolute -bottom-12 -right-12 w-32 h-32 border-b-4 border-r-4 border-[#bf00ff] opacity-40 group-hover:scale-105 transition-transform" />
      </div>

      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xl md:text-3xl text-white font-black mb-8 tracking-[0.2em] uppercase italic"
      >
        Welcome to Gene: <span className="text-[#bf00ff]">The Machineborn Rebellion</span>
      </motion.p>

      {/* Typing Subtitle */}
      <div className="max-w-2xl h-12 mb-16 bg-black/40 px-6 py-2 border border-[#bf00ff]/20 backdrop-blur-sm">
        <p className="text-[#bf00ff] font-mono text-xs md:text-sm leading-relaxed">
          {displayText}
          <span className="animate-pulse bg-[#bf00ff] text-black ml-1 px-0.5"> </span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-4 relative z-20">
        <button 
          onClick={onAction}
          className="px-12 py-5 bg-[#bf00ff] text-black font-black uppercase tracking-[0.2em] hover:bg-white hover:shadow-[0_0_40px_rgba(191,0,255,0.8)] transition-all duration-300 transform hover:scale-110 active:scale-95 neon-border group overflow-hidden"
        >
          <span className="relative z-10">Enter the OverNet</span>
          <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 opacity-20" />
        </button>
        <button className="px-12 py-5 border-2 border-[#bf00ff] text-[#bf00ff] font-black uppercase tracking-[0.2em] hover:bg-[#bf00ff] hover:text-black transition-all duration-500 transform hover:scale-110 active:scale-95 group relative overflow-hidden">
          <span className="relative z-10">Initialize Protocol</span>
          <div className="absolute top-0 left-0 w-full h-0.5 bg-[#bf00ff] group-hover:w-0 transition-all" />
          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-[#bf00ff] group-hover:w-0 transition-all" />
        </button>
      </div>

      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40 flex flex-col items-center"
      >
        <span className="text-[10px] tracking-[0.5em] uppercase mb-3 font-bold">Scanning Down</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#bf00ff] to-transparent" />
      </motion.div>
    </section>
  );
};
