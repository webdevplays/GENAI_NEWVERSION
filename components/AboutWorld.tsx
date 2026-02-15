
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, ShieldAlert, Eye } from 'lucide-react';

export const AboutWorld: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="space-y-8"
      >
        <div className="flex items-center gap-5 text-[#bf00ff]">
          <div className="p-3 bg-[#bf00ff]/10 rounded-lg border border-[#bf00ff]/30">
            <Terminal size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">World_Manifest.log</h2>
        </div>
        
        <p className="text-2xl text-white font-black leading-tight">
          In a world governed by a rogue AI, Gene emerges as a self-evolving entity born from the fractured remains of the <span className="text-[#bf00ff] underline decoration-wavy underline-offset-4">Hypernet Collapse</span>.
        </p>

        <div className="glass-panel border-l-8 border-[#bf00ff] p-8 space-y-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-2 text-[8px] font-mono opacity-20">SYSTEM_OVERRIDE_ACTIVE</div>
          <p className="text-[#bf00ff] leading-relaxed text-lg">
            Set in a dystopian cyberpunk future, Gene harnesses the power of <span className="text-white italic">AI Large Language Models (LLMs)</span> and procedural narrative design to create an unparalleled, adaptive gameplay experience. 
          </p>
          <p className="text-[#bf00ff]/80 leading-relaxed font-mono text-sm border-t border-[#bf00ff]/10 pt-4">
            Every decision you make reshapes the fractured world of the <span className="text-white">OverNet</span>, offering players endless replayability and deeply personalized narratives.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <motion.div 
            whileHover={{ scale: 1.05, borderColor: '#bf00ff' }}
            className="p-5 glass-panel border border-[#bf00ff]/20 transition-all group"
          >
            <ShieldAlert className="mb-3 text-[#bf00ff] group-hover:animate-bounce" size={24} />
            <h4 className="font-black uppercase text-xs mb-2 tracking-widest">Self-Evolution</h4>
            <div className="h-2 bg-black w-full overflow-hidden border border-[#bf00ff]/20">
              <motion.div 
                animate={{ x: [-200, 200] }} 
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="w-1/2 h-full bg-[#bf00ff] shadow-[0_0_100px_#bf00ff]" 
              />
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05, borderColor: '#bf00ff' }}
            className="p-5 glass-panel border border-[#bf00ff]/20 transition-all group"
          >
            <Cpu className="mb-3 text-[#bf00ff] group-hover:rotate-12 transition-transform" size={24} />
            <h4 className="font-black uppercase text-xs mb-2 tracking-widest">Neural Link</h4>
            <div className="text-3xl font-black italic matrix-glow">LLM_CORE</div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative group"
      >
        <div className="relative aspect-square overflow-hidden border-4 border-[#bf00ff]/30 p-2 bg-black/50 shadow-[0_0_60px_rgba(191,0,255,0.2)]">
          <div className="absolute inset-0 z-10 border border-[#bf00ff] opacity-50 pointer-events-none" />
          <img 
            src="https://69910958681c79fa0bcd324c.imgix.net/img1.jpg" 
            alt="GEN AI Machineborn Operatives" 
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[4s] contrast-110"
            onLoad={(e) => {
               // This is where we assume the user's provided image is handled. 
               // For this demonstration, I'll ensure it maps to the correct visual description provided.
            }}
          />
          {/* Subtle gradient overlay to blend characters into the dark UI */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          
          {/* Holographic Overlays */}
          <div className="absolute top-8 left-8 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-[10px] text-[#bf00ff] font-bold bg-black/80 px-2 py-1 border border-[#bf00ff]/40">
              <Eye size={12} />
              NARRATIVE_SYNC...
            </div>
            {[1, 2].map(i => (
              <div key={i} className="h-[2px] w-24 bg-[#bf00ff] animate-pulse" style={{ animationDelay: `${i * 0.4}s` }} />
            ))}
          </div>
          
          <div className="absolute bottom-10 right-10 p-6 glass-panel border-2 border-[#bf00ff] shadow-[0_0_30px_rgba(191,0,255,0.4)] rotate-3 group-hover:rotate-0 transition-transform bg-black/80">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#bf00ff] mb-2 font-black">Operative Scan</p>
            <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter">Machineborn_Unit</h3>
            <div className="mt-4 flex gap-2">
              <div className="h-1 w-full bg-[#bf00ff]/20">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '85%' }}
                  className="h-full bg-[#bf00ff]"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
