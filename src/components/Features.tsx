'use client';
import { motion } from 'framer-motion';
import { Gamepad2, Smartphone, Zap, Paintbrush, RefreshCw, ShieldCheck } from 'lucide-react';

const features = [
  { icon: Gamepad2, title: "Game Development", desc: "Immersive experiences and intuitive mechanics." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Sleek utility tools matching platform paradigms." },
  { icon: Zap, title: "Performance Optimized", desc: "Engineered cleanly for optimal low-overhead execution." },
  { icon: Paintbrush, title: "Modern UI Design", desc: "Apple-level minimalism meets raw gameplay styling." },
  { icon: RefreshCw, title: "Continuous Updates", desc: "Iterative enhancements guided completely by metrics." },
  { icon: ShieldCheck, title: "User Privacy First", desc: "Strict standard data security practices across apps." },
];

export default function Features() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0E1117]/30 hover:border-blue-500/40 transition-colors group"
          >
            <feat.icon className="text-neutral-700 dark:text-neutral-400 group-hover:text-[#153E8C] transition-colors mb-4" size={28} />
            <h3 className="font-semibold text-lg dark:text-white mb-2">{feat.title}</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}