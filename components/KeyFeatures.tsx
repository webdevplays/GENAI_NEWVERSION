
import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Activity, FileCode, Bug } from 'lucide-react';

const features = [
  {
    title: "AI Storytelling (LLM)",
    sub: ["Real-time Player Inputs", "Dynamic Dialogue", "NPC Adaptation"],
    desc: "Powered by Large Language Models, arcs adapt to decisions and emotional states.",
    icon: <BrainCircuit size={40} />
  },
  {
    title: "Emotion-Driven Gameplay",
    sub: ["Emotional Metrics", "Alliance Shifts", "Personal Pathing"],
    desc: "Measures decisions based on confidence, frustration, and fear inputs.",
    icon: <Activity size={40} />
  },
  {
    title: "System Exploitation",
    sub: ["VIS Infrastructure Hacking", "High-Risk Breaches", "API Manipulation"],
    desc: "Bypass firewalls and exploit vulnerabilities using AI hacking abilities.",
    icon: <FileCode size={40} />
  },
  {
    title: "Cyber Security Overrides",
    sub: ["Prompt Injections", "Real-Time Injections", "Adaptive Sentinels"],
    desc: "Override system responses to access hidden data within the OverNet.",
    icon: <Bug size={40} />
  }
];

export const KeyFeatures: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div className="space-y-2">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white">Rebellion <span className="text-[#bf00ff]">Core</span></h2>
          <div className="h-1 w-32 bg-[#bf00ff]" />
        </div>
        <p className="text-[#bf00ff]/60 font-mono text-sm max-w-md md:text-right">
          Executing high-level operations across the fragmented data streams. 
          LLM Storytelling Engine: ONLINE.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {features.map((f, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col lg:flex-row gap-8 p-10 bg-black/40 border-r-4 border-b-4 border-transparent hover:border-[#bf00ff] hover:bg-[#bf00ff]/5 transition-all duration-300 relative group cursor-pointer"
          >
            <div className="text-[#bf00ff] group-hover:scale-110 transition-transform duration-500 mb-4 lg:mb-0">
              {f.icon}
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter group-hover:text-[#bf00ff] transition-colors">{f.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed italic">{f.desc}</p>
              <ul className="space-y-3">
                {f.sub.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[10px] font-mono text-[#bf00ff]/80 hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#bf00ff] rounded-full group-hover:animate-ping" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
