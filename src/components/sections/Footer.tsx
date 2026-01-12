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
        background: 'linear-gradient(135deg, #163e51 0%, #378090 100%)'
      }}
    >
      <Container>
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 pb-6 border-b border-white/10">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/images/ICONE-B.png" alt="QuatroMed" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold text-white font-modelica">QuatroMed</span>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            <Link href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors font-modelica">
              Termos de uso
            </Link>
            <Link href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors font-modelica">
              Política de privacidade
            </Link>
            <Link href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors font-modelica">
              Contato
            </Link>
          </nav>

          {/* CTA Button */}
          <Link 
            href="#planos"
            className="flex items-center gap-2 px-6 py-3 bg-white text-[#003B46] font-bold text-sm rounded-lg hover:bg-white/90 transition-all group font-modelica"
          >
            COMEÇAR AGORA
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-6">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Link href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
              <Youtube size={18} className="text-white" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
              <Instagram size={18} className="text-white" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
              <Linkedin size={18} className="text-white" />
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-white/60 text-sm text-center lg:text-right font-modelica">
            Copyright © 2010-{currentYear} Quatromed Telemedicina Brasil LTDA
          </p>
        </div>
      </Container>
    </footer>
  );
};
