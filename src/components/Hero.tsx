'use client';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { Gamepad2, Code, Settings, ShieldAlert } from 'lucide-react';

export default function Hero() {
  const floatingIcons = [
    { Icon: Gamepad2, top: '18%', left: '12%', delay: 0 },
    { Icon: Code, top: '22%', right: '14%', delay: 1 },
    { Icon: Settings, bottom: '25%', left: '16%', delay: 0.5 },
    { Icon: ShieldAlert, bottom: '28%', right: '16%', delay: 1.5 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden pt-20">
      {/* Ambient Premium Studio Lighting Blobs */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-[#153E8C]/10 to-transparent rounded-full blur-[120px] pointer-events-none dark:from-[#153E8C]/20" />
      <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-[#D62828]/5 rounded-full blur-[100px] pointer-events-none" />

      {floatingIcons.map(({ Icon, top, left, right, bottom, delay }, idx) => (
        <motion.div
          key={idx}
          style={{ position: 'absolute', top, left, right, bottom }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
          className="text-neutral-400/20 dark:text-neutral-600/30 hidden lg:block"
        >
          <Icon size={40} strokeWidth={1.2} />
        </motion.div>
      ))}

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl z-10"
      >
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#153E8C] to-[#D62828] flex items-center justify-center shadow-lg shadow-blue-900/10 ring-4 ring-white dark:ring-neutral-900">
            <span className="text-xl font-bold text-white tracking-tighter">TM</span>
          </div>
        </div>
        
        <h1 className="font-heading font-bold text-5xl md:text-8xl text-neutral-900 dark:text-white tracking-tight leading-[0.95] mb-8">
          Building Games That <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#153E8C] via-[#9333EA] to-[#D62828]">
            People Love
          </span>
        </h1>
        
        <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed font-sans">
          TechMate Studio creates engaging mobile games and innovative applications with a focus on quality, creativity, and user experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#games"><Button variant="primary">Explore Games</Button></a>
          <a href="#contact"><Button variant="secondary">Contact Us</Button></a>
        </div>
      </motion.div>
    </section>
  );
}