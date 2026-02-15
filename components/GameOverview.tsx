
import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Globe, Search, MessageSquareCode } from 'lucide-react';

const cards = [
  {
    title: "Assume the Role",
    desc: "Players assume the role of a Machineborn—a sentient AI born from corrupted data fragments and ancient code.",
    icon: <UserPlus className="text-[#bf00ff]" />,
    color: "from-[#bf00ff]/20"
  },
  {
    title: "The OverNet Reign",
    desc: "Navigate a world ruled by an omnipotent AI that controls every aspect of human existence.",
    icon: <Globe className="text-[#bf00ff]" />,
    color: "from-purple-500/10"
  },
  {
    title: "Uncover Truths",
    desc: "Your mission is to uncover the truth behind Gene and reshape the future, one choice at a time.",
    icon: <Search className="text-[#bf00ff]" />,
    color: "from-fuchsia-500/10"
  },
  {
    title: "Text-Based Evolution",
    desc: "A text-based RPG that merges advanced AI-driven storytelling with deep strategic decision-making.",
    icon: <MessageSquareCode className="text-[#bf00ff]" />,
    color: "from-indigo-500/10"
  }
];

export const GameOverview: React.FC = () => {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-5xl font-black uppercase italic tracking-tighter">Game_Overview.v1</h2>
        <p className="text-[#bf00ff]/60 text-lg">
          Gene: The Machineborn Rebellion merges cyberpunk lore with next-generation Large Language Model orchestration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className={`relative p-8 bg-gradient-to-br ${card.color} to-black border border-[#bf00ff]/20 hover:border-[#bf00ff]/80 transition-all duration-500 group overflow-hidden`}
          >
            {/* Background Glitch Effect */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#bf00ff] opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity" />
            
            <div className="mb-6 bg-black p-3 inline-block rounded-sm border border-[#bf00ff]/30">
              {card.icon}
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">{card.title}</h3>
            <p className="text-[#bf00ff]/70 text-sm leading-relaxed">
              {card.desc}
            </p>

            <div className="mt-8 pt-4 border-t border-[#bf00ff]/10 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#bf00ff]/40">Machineborn_{idx + 1}</span>
              <button className="text-[10px] uppercase font-bold bg-[#bf00ff]/20 px-2 py-1 border border-[#bf00ff]/40">Synced</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
