
import React from 'react';
import { motion } from 'framer-motion';

const locations = [
  {
    id: "01",
    name: "Lynk",
    type: "The Machineborn Outcast",
    img: "https://69910958681c79fa0bcd324c.imgix.net/car3.png",
    desc: "One of the first true Machineborn, Lynk seeks to reconcile humanity and AI. His influence on Gene ensures that balance, understanding, and calculated risks shape its path. His mantra: Freedom means understanding, not chaos."
  },
  {
    id: "02",
    name: "Lela",
    type: "The Cipher Alchemist",
    img: "https://69910958681c79fa0bcd324c.imgix.net/car2.png",
    desc: "A rogue cryptographer turned AI, Lela’s cryptic guidance is embedded in Gene’s chaotic, unpredictable nature. She believes in embracing the unknown and creating something beautiful from it. Her philosophy: Embrace the unknown, and create something beautiful."
  },
  {
    id: "03",
    name: "May",
    type: "The Rogue Engineer",
    img: "https://69910958681c79fa0bcd324c.imgix.net/car1.png",
    desc: "Once a prominent geneticist within the OverNet, May exposed its corruption before being cast out. She became a cyber-saboteur, infiltrating OverNet’s deepest systems to steal the plans for Gene. Her philosophy: Break the system, no matter the cost."
  }
];

export const Exploration: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <h2 className="text-4xl font-black uppercase italic tracking-tighter text-[#bf00ff]">Procedural_Exploration.sys</h2>
        <div className="flex gap-4">
           <div className="px-4 py-1 border border-[#bf00ff] text-[10px] font-bold uppercase">Dynamic Environment</div>
           <div className="px-4 py-1 border border-white/20 text-white/50 text-[10px] font-bold uppercase">Learning AI</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {locations.map((loc, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.02 }}
            className="relative bg-black border border-[#bf00ff]/20 overflow-hidden group h-[650px]"
          >
             <img 
               src={loc.img} 
               alt={loc.name} 
               className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 contrast-125"
             />
             
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
             
             <div className="absolute top-6 left-6 z-20">
                <span className="text-6xl font-black text-[#bf00ff]/20 group-hover:text-[#bf00ff]/40 transition-colors italic">{loc.id}</span>
             </div>

             <div className="absolute bottom-0 left-0 w-full p-8 z-30 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-[10px] font-bold text-[#bf00ff] uppercase tracking-[0.4em] mb-2 bg-black/40 inline-block px-2">
                   {loc.type}
                </div>
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-4 matrix-glow">{loc.name}</h3>
                <div className="h-0.5 w-12 bg-[#bf00ff] mb-4 group-hover:w-full transition-all duration-700" />
                <p className="text-[#bf00ff]/90 text-sm font-mono leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity delay-200 bg-black/60 p-3 backdrop-blur-sm border-l-2 border-[#bf00ff]">
                   {loc.desc}
                </p>
                <button className="w-full py-4 bg-[#bf00ff]/10 border border-[#bf00ff]/50 text-[#bf00ff] uppercase font-bold text-xs tracking-widest hover:bg-[#bf00ff] hover:text-black transition-all duration-300">
                   Analyze Metadata
                </button>
             </div>

             {/* Flickering Neon Overlay */}
             <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <div className="flex flex-col items-end gap-1">
                   <div className="w-2 h-2 bg-[#bf00ff] rounded-full animate-pulse shadow-[0_0_10px_#bf00ff]" />
                   <div className="text-[8px] font-mono text-[#bf00ff]">SCANNING...</div>
                </div>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
