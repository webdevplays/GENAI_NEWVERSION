
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, ShieldAlert, Eye } from 'lucide-react';

export const AboutWorld: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="space-y-6 md:space-y-8"
      >
        <div className="flex items-center gap-4 md:gap-5 text-[#bf00ff]">
          <div className="p-2 md:p-3 bg-[#bf00ff]/10 rounded-lg border border-[#bf00ff]/30 shrink-0">
            <Terminal size={24} className="md:w-8 md:h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">World_Manifest.log</h2>
        </div>
        
        <p className="text-xl md:text-2xl text-white font-black leading-tight">
          In a world governed by a rogue AI, Gene emerges as a self-evolving entity born from the fractured remains of the <span className="text-[#bf00ff] underline decoration-wavy underline-offset-4">Hypernet Collapse</span>.
        </p>

        <div className="glass-panel border-l-4 md:border-l-8 border-[#bf00ff] p-6 md:p-8 space-y-4 md:space-y-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-2 text-[8px] font-mono opacity-20">SYSTEM_OVERRIDE_ACTIVE</div>
          <p className="text-[#bf00ff] leading-relaxed text-base md:text-lg">
            Set in a dystopian cyberpunk future, Gene harnesses the power of <span className="text-white italic">AI Large Language Models (LLMs)</span> and procedural narrative design to create an unparalleled, adaptive gameplay experience. 
          </p>
          <p className="text-[#bf00ff]/80 leading-relaxed font-mono text-[10px] md:text-sm border-t border-[#bf00ff]/10 pt-4">
            Every decision you make reshapes the fractured world of the <span className="text-white">OverNet</span>, offering players endless replayability and deeply personalized narratives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <motion.div 
            whileHover={{ scale: 1.05, borderColor: '#bf00ff' }}
            className="p-4 md:p-5 glass-panel border border-[#bf00ff]/20 transition-all group"
          >
            <ShieldAlert className="mb-2 md:mb-3 text-[#bf00ff] group-hover:animate-bounce" size={20} />
            <h4 className="font-black uppercase text-[10px] mb-2 tracking-widest">Self-Evolution</h4>
            <div className="h-1.5 md:h-2 bg-black w-full overflow-hidden border border-[#bf00ff]/20">
              <motion.div 
                animate={{ x: [-200, 200] }} 
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="w-1/2 h-full bg-[#bf00ff] shadow-[0_0_100px_#bf00ff]" 
              />
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05, borderColor: '#bf00ff' }}
            className="p-4 md:p-5 glass-panel border border-[#bf00ff]/20 transition-all group"
          >
            <Cpu className="mb-2 md:mb-3 text-[#bf00ff] group-hover:rotate-12 transition-transform" size={20} />
            <h4 className="font-black uppercase text-[10px] mb-2 tracking-widest">Neural Link</h4>
            <div className="text-2xl md:text-3xl font-black italic matrix-glow">LLM_CORE</div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative group mt-8 lg:mt-0"
      >
        <div className="relative aspect-square overflow-hidden border-2 md:border-4 border-[#bf00ff]/30 p-1 md:p-2 bg-black/50 shadow-[0_0_30px_md:shadow-[0_0_60px_rgba(191,0,255,0.2)]">
          <div className="absolute inset-0 z-10 border border-[#bf00ff] opacity-50 pointer-events-none" />
          <img 
            src="https://69910958681c79fa0bcd324c.imgix.net/img1.jpg" 
            alt="GEN AI Machineborn Operatives" 
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[4s] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          
          <div className="absolute top-4 left-4 md:top-8 md:left-8 flex flex-col gap-2 md:gap-3">
            <div className="flex items-center gap-2 text-[8px] md:text-[10px] text-[#bf00ff] font-bold bg-black/80 px-2 py-1 border border-[#bf00ff]/40">
              <Eye size={10} className="md:w-3 md:h-3" />
              NARRATIVE_SYNC...
            </div>
            {[1, 2].map(i => (
              <div key={i} className="h-[1.5px] md:h-[2px] w-16 md:w-24 bg-[#bf00ff] animate-pulse" style={{ animationDelay: `${i * 0.4}s` }} />
            ))}
          </div>
          
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 p-4 md:p-6 glass-panel border border-[#bf00ff] shadow-[0_0_20px_md:shadow-[0_0_30px_rgba(191,0,255,0.4)] rotate-2 group-hover:rotate-0 transition-transform bg-black/80 max-w-[80%]">
            <p className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-[#bf00ff] mb-1 md:mb-2 font-black">Operative Scan</p>
            <h3 className="text-xl md:text-3xl font-black text-white uppercase italic tracking-tighter">Machineborn_Unit</h3>
            <div className="mt-3 md:mt-4 flex gap-2">
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
