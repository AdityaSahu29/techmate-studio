'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#153E8C] to-[#D62828]">404</h1>
        <p className="text-2xl dark:text-white font-medium mt-4 mb-2">Game Over • Level Not Found</p>
        <p className="text-neutral-500 dark:text-neutral-400 max-w-sm mb-8">The page configuration you are looking for has been moved or purged from memory space.</p>
        <Link href="/" className="inline-block"><Button variant="primary">Return Home</Button></Link>
      </motion.div>
    </div>
  );
}