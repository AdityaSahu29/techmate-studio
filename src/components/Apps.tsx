'use client';
import { Layers } from 'lucide-react';

export default function Apps() {
  return (
    <section id="apps" className="py-24 px-6 bg-neutral-100/50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold dark:text-white mb-12">Applications</h2>
        <div className="max-w-md mx-auto rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 bg-white dark:bg-[#0E1117]/50 flex flex-col items-center shadow-sm">
          <Layers className="text-[#153E8C] mb-4" size={40} />
          <h3 className="font-semibold text-xl dark:text-white mb-2">Utility & Innovation Tools</h3>
          <span className="text-xs font-bold tracking-widest text-[#153E8C] bg-[#153E8C]/10 px-4 py-1.5 rounded-full uppercase">Coming Soon</span>
        </div>
      </div>
    </section>
  );
}