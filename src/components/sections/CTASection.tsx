'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const CTASection = () => {
  const trustItems = [
    { text: 'Atendimento Ágil' },
    { text: 'Privacidade Total' },
    { text: 'Cuidado Humano' },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" style={{ backgroundColor: 'rgba(32, 118, 129, 0.05)' }}></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" style={{ backgroundColor: 'rgba(212, 175, 55, 0.05)' }}></div>

      {/* Decorative Logo Pattern - Different positions from FAQ - Hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        {/* Left center - medium */}
        <img
          src="/images/ICONE-B.png"
          alt=""
          className="absolute w-[180px] md:w-[280px] h-[180px] md:h-[280px] object-contain"
          style={{ top: '50%', left: '-3%', transform: 'translateY(-50%)', opacity: 0.12, filter: 'invert(1) brightness(0.7)' }}
        />
        {/* Right top - small */}
        <img
          src="/images/ICONE-B.png"
          alt=""
          className="absolute w-[120px] md:w-[200px] h-[120px] md:h-[200px] object-contain"
          style={{ top: '5%', right: '3%', opacity: 0.10, filter: 'invert(1) brightness(0.7)' }}
        />
        {/* Bottom left - large */}
        <img
          src="/images/ICONE-B.png"
          alt=""
          className="absolute w-[240px] md:w-[380px] h-[240px] md:h-[380px] object-contain"
          style={{ bottom: '-10%', left: '15%', opacity: 0.14, filter: 'invert(1) brightness(0.7)' }}
        />
        {/* Right bottom - medium */}
        <img
          src="/images/ICONE-B.png"
          alt=""
          className="absolute w-[160px] md:w-[260px] h-[160px] md:h-[260px] object-contain"
          style={{ bottom: '10%', right: '-5%', opacity: 0.11, filter: 'invert(1) brightness(0.7)' }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-6 sm:p-10 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #153D4A 0%, #2A5F72 100%)' }}
          >
            {/* Inner Subtle Glow */}
            <div className="absolute top-0 right-0 w-32 sm:w-64 h-32 sm:h-64 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 space-y-5 sm:space-y-8 lg:space-y-10"
            >
              <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-1 sm:mb-2 font-modelica">
                <span className="text-white font-bold text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em]">Disponível Agora</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight font-modelica">
                Sua saúde merece <br className="hidden sm:block" />
                <span style={{ color: '#D4A84B' }} className="italic font-medium text-3xl sm:text-4xl md:text-6xl lg:text-8xl">essa evolução.</span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed font-modelica">
                Escolha a conveniência da telemedicina com a <strong className="text-white font-bold">excelência que você exige.</strong> Comece seu atendimento hoje.
              </p>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-12 mb-2 sm:mb-4">
                {trustItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 sm:gap-2.5 text-white/80 font-bold uppercase text-[7px] sm:text-[9px] tracking-widest font-modelica">
                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: '#D4A84B' }}></span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center pt-2 sm:pt-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-6 sm:px-10 lg:px-16 py-4 sm:py-6 lg:py-7 text-sm sm:text-base lg:text-lg font-bold transition-all duration-300 group rounded-full border-2 font-modelica"
                  style={{ borderColor: '#D4A84B', color: '#D4A84B', backgroundColor: 'transparent' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#D4A84B';
                    e.currentTarget.style.color = '#1A4B5C';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#D4A84B';
                  }}
                  onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  VER VALOR DO ACESSO
                  <ArrowRight className="ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" size={18} strokeWidth={3} />
                </Button>
              </div>

              <div className="pt-4 sm:pt-6 flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 opacity-40">
                <span className="text-[7px] sm:text-[9px] text-white font-bold uppercase tracking-widest font-modelica">Certificado CFM</span>
                <span className="text-[7px] sm:text-[9px] text-white font-bold uppercase tracking-widest font-modelica">100% Digital</span>
                <span className="text-[7px] sm:text-[9px] text-white font-bold uppercase tracking-widest font-modelica">Suporte 24h</span>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
