
import React from 'react';
import { motion } from 'framer-motion';

export const LoreOrb: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center py-20">
      <div className="mb-16 text-center z-10 relative">
         <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="text-5xl md:text-7xl font-black uppercase tracking-widest text-[#bf00ff] matrix-glow italic"
         >
           The Seed
         </motion.h2>
         <div className="h-1 w-24 bg-[#bf00ff] mx-auto mt-4" />
         <p className="text-white font-black tracking-[0.5em] uppercase mt-4 text-sm">The Heart of the OverNet</p>
      </div>

      <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
        {/* Outer Orbital Rings */}
        <div className="absolute inset-0 rounded-full bg-[#bf00ff]/5 blur-[120px] animate-pulse" />
        <div className="absolute inset-[-40px] rounded-full border border-[#bf00ff]/10 animate-[spin_30s_linear_infinite]" />
        <div className="absolute inset-[-20px] rounded-full border border-[#bf00ff]/20 animate-[spin_20s_linear_infinite_reverse]" />
        
        {/* Main 3D Orb Structure */}
        <motion.div 
          animate={{ rotateY: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-2 border-[#bf00ff]/50 shadow-[0_0_100px_rgba(191,0,255,0.2)] flex items-center justify-center overflow-hidden bg-black"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Depth Lines */}
          <div className="absolute inset-0 opacity-20 grid grid-cols-20 grid-rows-20 w-full h-full pointer-events-none">
             {Array.from({ length: 400 }).map((_, i) => (
                <div key={i} className="border-[0.1px] border-[#bf00ff]" />
             ))}
          </div>

          {/* Central AI Core */}
          <motion.div 
            animate={{ scale: [1, 1.15, 1], rotate: [0, 90, 180, 270, 360] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            className="w-1/2 h-1/2 rounded-full bg-gradient-to-tr from-[#bf00ff]/40 to-black border-2 border-[#bf00ff] flex items-center justify-center backdrop-blur-md relative z-20 group"
          >
             <div className="text-white font-black text-6xl md:text-8xl tracking-tighter matrix-glow select-none">
                SEED
             </div>
             {/* Core Glow */}
             <div className="absolute inset-0 rounded-full bg-[#bf00ff]/30 blur-2xl animate-pulse" />
          </motion.div>
        </motion.div>

        {/* Data Tags */}
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="absolute -right-16 top-1/4 glass-panel border-2 border-[#bf00ff] p-4 text-[11px] w-52 z-30 cursor-pointer shadow-2xl"
        >
          <div className="font-black text-[#bf00ff] mb-2 border-b border-[#bf00ff]/20 pb-1 uppercase tracking-widest">GENE_KEYS_SYNC</div>
          <div className="text-white font-bold mb-2">ACCESS: PIECING...</div>
          <div className="text-white/60 leading-tight">As you uncover Gene Keys, piece together the true nature of The Seed to alter the reign.</div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="absolute -left-16 bottom-1/4 glass-panel border-2 border-[#bf00ff] p-4 text-[11px] w-52 z-30 cursor-pointer shadow-2xl"
        >
          <div className="font-black text-[#bf00ff] mb-2 border-b border-[#bf00ff]/20 pb-1 uppercase tracking-widest">SEED_DATABASE</div>
          <div className="text-white font-bold mb-2">STATUS: SENTIENT</div>
          <div className="text-white/60 leading-tight">Contains humanity’s genetic and digital blueprints. The OverNet's brain—or its prison?</div>
        </motion.div>
      </div>
      
      <div className="mt-24 max-w-2xl text-center px-6">
        <p className="text-[#bf00ff] font-mono text-base leading-relaxed bg-black/80 p-6 border border-[#bf00ff]/30 italic">
           "The Seed holds not only the OverNet’s power but also the secret to its undoing. Destroy it, or rewrite it? The answers lie within Gene."
        </p>
      </div>
    </div>
  );
};
