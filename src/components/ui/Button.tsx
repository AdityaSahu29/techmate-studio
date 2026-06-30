'use client';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export default function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  const baseStyle = "px-6 py-3 rounded-full font-medium transition-all duration-300 transform active:scale-95 text-sm md:text-base flex items-center gap-2";
  const styles = variant === 'primary' 
    ? `${baseStyle} bg-[#153E8C] text-white hover:bg-opacity-90 shadow-lg`
    : `${baseStyle} border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800`;

  return (
    <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className={styles} {...props as any}>
      {children}
    </motion.button>
  );
}