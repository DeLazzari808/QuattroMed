'use client';

import React, { useState, useEffect } from 'react';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Nossa solução', href: '#solucao' },
    { name: 'Como funciona', href: '#como-funciona' },
    { name: 'Acesso', href: '#planos' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${isScrolled
          ? 'py-4'
          : 'py-6'
        }`}
    >
      <div className={`relative transition-all duration-500 px-4 sm:px-6 py-2 flex items-center justify-between ${isScrolled
          ? 'bg-white/95 backdrop-blur-xl border border-accent/30 shadow-pill rounded-full max-w-screen-lg w-[92%] sm:w-[95%] mx-auto gap-4 sm:gap-6'
          : 'container mx-auto bg-transparent border-transparent w-full'
        }`}>
        <Link href="/" className="hover:scale-105 transition-transform duration-300 shrink-0">
          <Logo variant="full" theme={isScrolled ? 'dark' : 'light'} size={isScrolled ? 'sm' : 'md'} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-xs font-bold transition-all duration-300 relative group tracking-widest uppercase font-modelica ${isScrolled ? 'text-[#1A4B5C] hover:text-[#2A5F72]' : 'text-white hover:text-[#D4A84B]'
                }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full`}
                style={{ backgroundColor: isScrolled ? '#2A5F72' : '#D4A84B' }}
              ></span>
            </Link>
          ))}
          <Button
            variant="outline"
            size="sm"
            className={`transition-all duration-300 px-6 font-bold text-[10px] tracking-tighter rounded-full border-2 font-modelica ${isScrolled
                ? 'border-[#1A4B5C] text-[#1A4B5C] hover:bg-[#1A4B5C] hover:text-white py-2'
                : 'border-[#D4A84B] text-white hover:bg-[#D4A84B] hover:text-[#1A4B5C]'
              }`}
            onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            VER VALOR DO ACESSO
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-full transition-colors ${isScrolled ? 'bg-[#1A4B5C]/5 border border-[#1A4B5C]/10' : 'bg-white/5 border border-white/10'
            }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-[#1A4B5C]' : 'text-white'} size={20} />
          ) : (
            <Menu className={isScrolled ? 'text-[#1A4B5C]' : 'text-white'} size={20} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-full left-0 right-0 px-4 pt-2 md:hidden flex justify-center"
          >
            <div className="bg-white/95 backdrop-blur-3xl border border-accent/20 rounded-[2rem] p-6 shadow-2xl w-full max-w-sm">
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-primary text-xl font-bold tracking-tighter uppercase border-b border-primary/5 pb-4 hover:text-accent transition-colors font-modelica"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full mt-4 font-bold font-modelica"
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  VER VALOR DO ACESSO
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
