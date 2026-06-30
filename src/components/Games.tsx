'use client';
import { motion } from 'framer-motion';
import { Play, ArrowUpRight } from 'lucide-react';
import Button from './ui/Button';

export default function Games() {
  return (
    <section id="games" className="py-32 px-6 max-w-7xl mx-auto relative">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#153E8C]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="mb-20 text-center md:text-left">
        <span className="text-xs font-bold tracking-widest text-[#153E8C] uppercase bg-[#153E8C]/10 px-3 py-1 rounded-full">Our Portfolio</span>
        <h2 className="text-4xl md:text-6xl font-bold dark:text-white mt-4 tracking-tight">Featured Projects</h2>
        <p className="text-neutral-500 dark:text-neutral-400 mt-2 max-w-xl">Crafted with precision, built for cross-platform entertainment.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Game 1: Pen Fight Premium Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.4 }}
          className="rounded-[32px] border border-neutral-200/60 dark:border-white/5 bg-white/40 dark:bg-[#0E1117]/40 backdrop-blur-xl p-8 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:border-[#153E8C]/20 dark:hover:border-white/10 transition-all duration-300 group"
        >
          <div>
            <div className="w-full h-56 bg-gradient-to-br from-slate-900 via-neutral-900 to-black rounded-2xl mb-8 flex flex-col items-center justify-center border border-neutral-800 relative overflow-hidden shadow-inner">
              <div className="absolute inset-0 bg-[radial-gradient(#153E8C_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
              <span className="font-bold text-4xl text-white tracking-widest group-hover:scale-105 transition-transform duration-500 z-10 font-heading">PEN FIGHT</span>
              <span className="text-[10px] text-neutral-500 font-mono mt-2 uppercase tracking-widest z-10">Physics Engine v1.0</span>
            </div>
            
            <span className="text-[11px] font-bold tracking-wider text-[#D62828] uppercase bg-[#D62828]/10 px-3 py-1 rounded-full">Physics Multiplayer Game</span>
            <h3 className="text-2xl font-bold mt-4 mb-2 dark:text-white flex items-center gap-2">Pen Fight <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400"/></h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-8">
              Relive the nostalgic classroom pen fighting game with realistic physics, local multiplayer, competitive AI modes, and ranking brackets.
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="primary"><Play size={16} fill="currentColor"/> Google Play</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </motion.div>

        {/* Premium Placeholder Card */}
        <div className="rounded-[32px] border border-dashed border-neutral-300 dark:border-neutral-800 bg-neutral-100/10 dark:bg-neutral-900/10 flex flex-col items-center justify-center p-8 text-center text-neutral-400 min-h-[450px]">
          <div className="w-12 h-12 rounded-full border border-dashed border-neutral-400 dark:border-neutral-700 flex items-center justify-center mb-4 animate-spin-[spin_8s_linear_infinite]">
            <span className="text-xl font-light">+</span>
          </div>
          <p className="font-medium text-lg dark:text-neutral-300">Project Pipeline Active</p>
          <p className="text-xs max-w-xs mt-1 text-neutral-500">More experiences are currently cooking in our design sandbox.</p>
        </div>
      </div>
    </section>
  );
}