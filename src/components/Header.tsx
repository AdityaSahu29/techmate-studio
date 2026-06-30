'use client';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Games', href: '#games' },
    { name: 'Apps', href: '#apps' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50 rounded-full glass-panel shadow-lg transition-all duration-300">
      <div className="px-6 py-3 flex justify-between items-center">
        {/* Studio Identifier */}
        <a href="#home" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#153E8C] to-[#D62828] flex items-center justify-center shadow-md">
            <span className="text-xs font-bold text-white tracking-tighter">TM</span>
          </div>
          <span className="font-bold text-sm tracking-tight text-neutral-950 dark:text-white">TechMate Studio</span>
        </a>

        {/* Mid-tier Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-xs font-medium tracking-wide uppercase text-neutral-600 dark:text-neutral-400 hover:text-[#153E8C] dark:hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Utility Controller Options */}
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 text-neutral-700 dark:text-neutral-300 transition-colors cursor-pointer">
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-neutral-700 dark:text-neutral-300">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full glass-panel rounded-3xl p-6 shadow-xl flex flex-col gap-4">
          {links.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 block py-1">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}