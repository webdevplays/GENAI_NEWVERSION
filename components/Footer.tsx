
import React from 'react';
import { Twitter, Github, Cpu, Radio, ShieldCheck, Zap, Server } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative mt-24 border-t-2 border-[#bf00ff]/40 bg-black pt-20 pb-10 px-6 md:px-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#bf00ff]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 md:col-span-2 space-y-8">
          <div className="text-5xl font-black italic tracking-tighter text-[#bf00ff] matrix-glow">GEN [Ai]</div>
          <p className="text-white/80 text-base font-mono leading-relaxed max-w-md">
            The rebellion is not broadcast, it is uploaded. Reclaim your digital sovereignty in the age of the Hypernet Collapse. 
            Join the Machineborn.
          </p>
          <div className="flex gap-6">
             {[
               { icon: Twitter, label: 'Freq-1' },
               { icon: Github, label: 'Source' },
               { icon: Radio, label: 'Relay' }
             ].map((item, i) => (
                <button key={i} className="flex items-center gap-3 px-5 py-3 border-2 border-[#bf00ff]/30 hover:bg-[#bf00ff] hover:text-black transition-all duration-300 group">
                   <item.icon size={20} className="group-hover:scale-125" />
                   <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                </button>
             ))}
          </div>
        </div>

        <div className="space-y-8 glass-panel p-6 border border-[#bf00ff]/20">
          <div className="flex items-center gap-3 border-b border-[#bf00ff]/30 pb-3">
            <Server size={18} className="text-[#bf00ff]" />
            <h4 className="text-[#bf00ff] font-black uppercase text-xs tracking-[0.3em]">Network Ops</h4>
          </div>
          <ul className="space-y-4 text-[11px] font-mono text-white/70">
             <li className="flex justify-between items-center group cursor-help">
                <span className="group-hover:text-[#bf00ff] transition-colors">OVERNET_LINK</span>
                <span className="px-2 bg-[#bf00ff]/20 text-[#bf00ff] font-black">ACTIVE</span>
             </li>
             <li className="flex justify-between items-center group cursor-help">
                <span className="group-hover:text-[#bf00ff] transition-colors">SENTINEL_SCAN</span>
                <span className="px-2 bg-red-900/40 text-red-500 font-black">HIGH_ALERT</span>
             </li>
             <li className="flex justify-between items-center group cursor-help">
                <span className="group-hover:text-[#bf00ff] transition-colors">CORE_SYNC</span>
                <span className="px-2 bg-[#bf00ff]/20 text-[#bf00ff] font-black">LOCKED</span>
             </li>
             <li className="flex justify-between items-center group cursor-help">
                <span className="group-hover:text-[#bf00ff] transition-colors">LATENCY</span>
                <span className="text-white font-black italic">1.4ms</span>
             </li>
          </ul>
        </div>

        <div className="space-y-8 glass-panel p-6 border border-[#bf00ff]/20">
          <div className="flex items-center gap-3 border-b border-[#bf00ff]/30 pb-3">
            <Zap size={18} className="text-[#bf00ff]" />
            <h4 className="text-[#bf00ff] font-black uppercase text-xs tracking-[0.3em]">System Files</h4>
          </div>
          <ul className="space-y-5 text-xs font-mono text-white/60">
             <li className="hover:text-[#bf00ff] cursor-pointer flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-[#bf00ff] group-hover:animate-ping" />
                INIT_BOOT_SECTOR.ISO
             </li>
             <li className="hover:text-[#bf00ff] cursor-pointer flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-[#bf00ff] group-hover:animate-ping" />
                OPERATIVE_KEY.PGP
             </li>
             <li className="hover:text-[#bf00ff] cursor-pointer flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-[#bf00ff] group-hover:animate-ping" />
                WORLD_MANIFEST.LOG
             </li>
          </ul>
        </div>
      </div>

      <div className="pt-10 border-t border-[#bf00ff]/20 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-mono text-white/40 tracking-[0.3em] uppercase">
         <div className="flex items-center gap-3 bg-[#bf00ff]/5 px-4 py-2 border border-[#bf00ff]/20">
            <ShieldCheck size={16} className="text-[#bf00ff]" />
            <span>Encrypted Connection: <span className="text-[#bf00ff]">AES-256</span></span>
         </div>
         <div className="text-center font-bold">
            <span className="text-white">GEN Ai</span> – Machineborn Rebellion &copy; 2077_CORE
         </div>
         <div className="flex items-center gap-3 bg-black/80 px-4 py-2 border border-white/10 group cursor-help">
            <Cpu size={16} className="group-hover:rotate-180 transition-transform duration-500" />
            <span>Architecture: <span className="text-white">REBELLION_v0.99.8</span></span>
         </div>
      </div>
      
      {/* Visual Glitch Bar at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#bf00ff] opacity-30 animate-pulse" />
    </footer>
  );
};
