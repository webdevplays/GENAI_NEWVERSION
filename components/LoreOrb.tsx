
import React from 'react';
import { motion } from 'framer-motion';

export const LoreOrb: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center py-12 md:py-20 w-full overflow-hidden">
      <div className="mb-12 md:mb-16 text-center z-10 relative px-4">
         <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-wider md:tracking-widest text-[#bf00ff] matrix-glow italic"
         >
           The Seed
         </motion.h2>
         <div className="h-1 w-20 md:w-24 bg-[#bf00ff] mx-auto mt-4" />
         <p className="text-white font-black tracking-[0.2em] md:tracking-[0.5em] uppercase mt-4 text-[10px] sm:text-xs md:text-sm px-4">The Heart of the OverNet</p>
      </div>

      <div className="relative flex flex-col items-center">
        {/* Orbital Centerpiece */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px]">
          {/* Outer Orbital Rings */}
          <div className="absolute inset-0 rounded-full bg-[#bf00ff]/5 blur-[60px] md:blur-[120px] animate-pulse" />
          <div className="absolute inset-[-20px] md:inset-[-40px] rounded-full border border-[#bf00ff]/10 animate-[spin_30s_linear_infinite]" />
          <div className="absolute inset-[-10px] md:inset-[-20px] rounded-full border border-[#bf00ff]/20 animate-[spin_20s_linear_infinite_reverse]" />
          
          {/* Main 3D Orb Structure */}
          <motion.div 
            animate={{ rotateY: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-[#bf00ff]/50 shadow-[0_0_50px_rgba(191,0,255,0.2)] md:shadow-[0_0_100px_rgba(191,0,255,0.2)] flex items-center justify-center overflow-hidden bg-black"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Depth Lines */}
            <div className="absolute inset-0 opacity-20 grid grid-cols-10 md:grid-cols-20 grid-rows-10 md:grid-rows-20 w-full h-full pointer-events-none">
               {Array.from({ length: 100 }).map((_, i) => (
                  <div key={i} className="border-[0.1px] border-[#bf00ff]" />
               ))}
            </div>

            {/* Central AI Core */}
            <motion.div 
              animate={{ scale: [1, 1.15, 1], rotate: [0, 90, 180, 270, 360] }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
              className="w-1/2 h-1/2 rounded-full bg-gradient-to-tr from-[#bf00ff]/40 to-black border-2 border-[#bf00ff] flex items-center justify-center backdrop-blur-md relative z-20 group"
            >
               <div className="text-white font-black text-4xl sm:text-6xl md:text-8xl tracking-tighter matrix-glow select-none">
                  SEED
               </div>
               {/* Core Glow */}
               <div className="absolute inset-0 rounded-full bg-[#bf00ff]/30 blur-xl md:blur-2xl animate-pulse" />
            </motion.div>
          </motion.div>
        </div>

        {/* Data Tags - Repositioned for Mobile to prevent overflow */}
        <div className="mt-12 md:mt-0 flex flex-col md:block gap-6 px-6 w-full max-w-lg md:max-w-none">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="md:absolute md:-right-16 md:top-1/4 glass-panel border-2 border-[#bf00ff] p-4 text-[11px] w-full md:w-52 z-30 cursor-pointer shadow-2xl"
          >
            <div className="font-black text-[#bf00ff] mb-2 border-b border-[#bf00ff]/20 pb-1 uppercase tracking-widest">GENE_KEYS_SYNC</div>
            <div className="text-white font-bold mb-2">ACCESS: PIECING...</div>
            <div className="text-white/60 leading-tight">As you uncover Gene Keys, piece together the true nature of The Seed to alter the reign.</div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="md:absolute md:-left-16 md:bottom-1/4 glass-panel border-2 border-[#bf00ff] p-4 text-[11px] w-full md:w-52 z-30 cursor-pointer shadow-2xl"
          >
            <div className="font-black text-[#bf00ff] mb-2 border-b border-[#bf00ff]/20 pb-1 uppercase tracking-widest">SEED_DATABASE</div>
            <div className="text-white font-bold mb-2">STATUS: SENTIENT</div>
            <div className="text-white/60 leading-tight">Contains humanity’s genetic and digital blueprints. The OverNet's brain—or its prison?</div>
          </motion.div>
        </div>
      </div>
      
      <div className="mt-12 md:mt-24 max-w-2xl text-center px-6">
        <p className="text-[#bf00ff] font-mono text-sm md:text-base leading-relaxed bg-black/80 p-5 md:p-6 border border-[#bf00ff]/30 italic">
           "The Seed holds not only the OverNet’s power but also the secret to its undoing. Destroy it, or rewrite it? The answers lie within Gene."
        </p>
      </div>
    </div>
  );
};
