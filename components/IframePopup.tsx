
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Globe } from 'lucide-react';

interface IframePopupProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title?: string;
}

export const IframePopup: React.FC<IframePopupProps> = ({ isOpen, onClose, url, title = "OverNet_Interface::Ghost_Node" }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full h-full max-w-7xl bg-black border-2 border-[#bf00ff] shadow-[0_0_100px_rgba(191,0,255,0.4)] overflow-hidden flex flex-col"
          >
            {/* Header / Title Bar */}
            <div className="bg-[#bf00ff] text-black px-6 py-3 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-4">
                <Globe size={18} className="animate-spin-slow" />
                <span className="text-xs font-black uppercase tracking-[0.3em]">{title}</span>
                <div className="hidden sm:flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full">
                    <ShieldCheck size={12} />
                    <span className="text-[10px] font-bold">SECURE_TUNNEL_ACTIVE</span>
                </div>
              </div>
              <button 
                onClick={onClose} 
                className="hover:scale-125 hover:rotate-90 transition-all duration-300 p-1"
              >
                <X size={24} />
              </button>
            </div>

            {/* Iframe Container */}
            <div className="flex-1 relative bg-black">
              <div className="absolute inset-0 pointer-events-none border-2 border-[#bf00ff]/20 z-10" />
              <iframe 
                src={url} 
                className="w-full h-full border-none"
                title="OverNet Interface"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
              
              {/* Decorative scanline overlay (subtle) */}
              <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
            </div>

            {/* Footer Bar */}
            <div className="bg-black border-t border-[#bf00ff]/30 px-6 py-2 flex justify-between items-center text-[10px] font-mono shrink-0">
              <div className="text-[#bf00ff]/50">LATENCY: 1.2ms | PACKETS: 100% SYNC</div>
              <div className="text-[#bf00ff] animate-pulse">SYSTEM_STABLE // NO_LEAKS_DETECTED</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
