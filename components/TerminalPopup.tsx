
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle } from 'lucide-react';

interface TerminalPopupProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export const TerminalPopup: React.FC<TerminalPopupProps> = ({ isOpen, onClose, message }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-lg bg-black border-2 border-[#bf00ff] shadow-[0_0_50px_rgba(191,0,255,0.3)] overflow-hidden"
          >
            <div className="bg-[#bf00ff] text-black px-4 py-2 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <AlertTriangle size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest">System Alert: Intervention</span>
              </div>
              <button onClick={onClose} className="hover:scale-110 transition-transform">
                <X size={16} />
              </button>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="font-mono text-sm space-y-4">
                <div className="text-[#bf00ff] flex gap-2">
                  <span className="opacity-50">root@overnet:~$</span>
                  <span className="animate-pulse">_</span>
                </div>
                <div className="text-white leading-relaxed italic">
                  "{message}"
                </div>
                <div className="text-[10px] text-[#bf00ff]/50 bg-[#bf00ff]/5 p-3 border border-[#bf00ff]/10">
                  CRITICAL: Do not disconnect during protocol initialization. Corp-Sats are currently monitoring this frequency. Switch to Ghost-Mode immediately.
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-4 border-t border-[#bf00ff]/20">
                <button 
                  onClick={onClose}
                  className="px-6 py-2 bg-transparent border border-[#bf00ff] text-[#bf00ff] text-[10px] font-bold uppercase hover:bg-[#bf00ff]/10 transition-colors"
                >
                  Dismiss
                </button>
                <button 
                  onClick={onClose}
                  className="px-6 py-2 bg-[#bf00ff] text-black text-[10px] font-bold uppercase hover:bg-white transition-colors shadow-[0_0_15px_rgba(191,0,255,0.4)]"
                >
                  Execute.exe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
