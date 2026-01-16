'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="py-8 lg:py-10 overflow-hidden relative"
      style={{
        background: 'linear-gradient(135deg, #153D4A 0%, #2A5F72 100%)'
      }}
    >
      <Container>
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8 pb-4 sm:pb-6 border-b border-white/10">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/images/ICONE-B.png" alt="QuatroMed" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
            <span className="text-lg sm:text-xl font-bold text-white font-modelica">QuatroMed</span>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-10">
            <Link href="#" className="text-white/80 hover:text-white text-xs sm:text-sm font-medium transition-colors font-modelica">
              Termos de uso
            </Link>
            <Link href="#" className="text-white/80 hover:text-white text-xs sm:text-sm font-medium transition-colors font-modelica">
              Política de privacidade
            </Link>
            <Link href="#" className="text-white/80 hover:text-white text-xs sm:text-sm font-medium transition-colors font-modelica">
              Contato
            </Link>
          </nav>

          {/* CTA Button */}
          <Link 
            href="#planos"
            className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-[#1A4B5C] font-bold text-xs sm:text-sm rounded-lg hover:bg-white/90 transition-all group font-modelica"
          >
            COMEÇAR AGORA
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-4 sm:pt-6">
          {/* Social Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
              <Youtube size={16} className="text-white" />
            </Link>
            <Link href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
              <Instagram size={16} className="text-white" />
            </Link>
            <Link href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
              <Linkedin size={16} className="text-white" />
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-white/60 text-xs sm:text-sm text-center lg:text-right font-modelica">
            Copyright © 2010-{currentYear} Quatromed Telemedicina Brasil LTDA
          </p>
        </div>
      </Container>
    </footer>
  );
};
