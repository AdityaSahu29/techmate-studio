'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto text-center">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2 className="text-xs tracking-widest text-[#D62828] font-bold uppercase mb-4">Who We Are</h2>
        <p className="text-2xl md:text-4xl dark:text-white font-medium leading-relaxed max-w-4xl mx-auto">
          TechMate Studio is an independent software and game development studio focused on creating polished mobile games and innovative applications. We combine creativity, technology, and user-focused design to deliver enjoyable digital experiences.
        </p>
      </motion.div>
    </section>
  );
}