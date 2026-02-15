
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const possibleLogs = [
    "Initializing Neural Interface...",
    "Scanning BIOS 0x9942...",
    "Injecting OverNet Fragments...",
    "Bypassing Corporate Sentinels...",
    "Syncing with 'The Seed'...",
    "Decrypting Gene Core Modules...",
    "Establishing Secure Rebellion Channel...",
    "Accessing Sector 7-G...",
    "GEN Ai ONLINE."
  ];

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 15;
      if (currentProgress > 100) {
        currentProgress = 100;
        clearInterval(interval);
      }
      setProgress(currentProgress);
      
      // Add logs based on progress
      const logIndex = Math.floor((currentProgress / 100) * possibleLogs.length);
      if (logIndex < possibleLogs.length) {
         setLogs(prev => {
            if (prev.includes(possibleLogs[logIndex])) return prev;
            return [...prev, possibleLogs[logIndex]].slice(-4);
         });
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6 font-mono"
    >
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <motion.h2 
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 0.1 }}
            className="text-2xl font-black text-[#bf00ff] uppercase tracking-[0.5em]"
          >
            BOOTING_GEN_Ai
          </motion.h2>
          <div className="text-[10px] text-white/40 uppercase tracking-widest">Protocol: Rebellion_Core</div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs text-[#bf00ff] font-bold">
             <span>System Status</span>
             <span>{Math.floor(progress)}%</span>
          </div>
          <div className="w-full h-1 bg-white/10 relative overflow-hidden">
             <motion.div 
               initial={{ width: 0 }}
               animate={{ width: `${progress}%` }}
               className="absolute top-0 left-0 h-full bg-[#bf00ff] shadow-[0_0_10px_#bf00ff]"
             />
          </div>
        </div>

        <div className="h-24 overflow-hidden border-l border-[#bf00ff]/20 pl-4 space-y-1">
           {logs.map((log, i) => (
             <div key={i} className="text-[10px] text-[#bf00ff]/70 animate-in fade-in slide-in-from-left-2">
               {">"} {log}
             </div>
           ))}
        </div>

        <div className="text-center pt-10">
           <div className="inline-block px-4 py-1 border border-white/20 text-[8px] text-white/40 uppercase animate-pulse">
              Security Override Enabled
           </div>
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#bf00ff 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />
    </motion.div>
  );
};
