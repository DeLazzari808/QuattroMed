'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
    const benefits = [
      'Consultas por vídeo, celular ou computador',
      'Médicos qualificados e registrados',
      'Sem mensalidades abusivas',
      'Atendimento médico online 24 horas, todos os dias',
    ];

  const stats = [
    { label: 'Anos de experiência', value: '5+' },
    { label: 'Pacientes atendidos no Brasil inteiro', value: '4.000+' },
    { label: 'Médicos registrados na nossa plataforma', value: '250+' },
  ];

  return (
    <section className="relative h-screen flex items-center pt-20 overflow-hidden" style={{ backgroundColor: '#003B46' }}>
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/vitaly-gariev-WCYU_DhNn7U-unsplash.jpg"
          alt="Médico Profissional QuatroMed"
          className="w-full h-full object-cover brightness-110"
          style={{ objectPosition: '85% center' }}
        />
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to right, rgba(0, 59, 70, 0.9) 0%, rgba(0, 59, 70, 0.6) 35%, rgba(0, 59, 70, 0.2) 60%, transparent 100%)'
          }}
        ></div>
      </div>

      <Container className="relative z-20 h-full flex flex-col py-6">
        <div className="max-w-3xl flex-1 flex flex-col justify-center pb-32 lg:pb-40">
          {/* Main Content Area */}
          <div className="space-y-5 lg:space-y-6">
            {/* Título Principal - Bw Modelica Bold */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[1.85rem] md:text-[2.25rem] lg:text-[2.75rem] xl:text-[3.25rem] font-bold leading-[1.1] tracking-[-0.02em] text-white max-w-[600px] font-modelica"
            >
              Atendimento médico online 24h, <br />
              por um valor que <br />
              cabe no seu bolso.
            </motion.h1>

            {/* Subtítulo - Bw Modelica Medium + Light */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-[500px] space-y-0.5"
            >
              <p className="text-[15px] md:text-base lg:text-lg text-white font-medium leading-[1.45] font-modelica">
                Consultas médicas online a partir de valores acessíveis para todo o Brasil.
              </p>
              <p className="text-[15px] md:text-base lg:text-lg text-white/70 font-normal leading-[1.45] font-modelica">
                Atendimento médico online 24 horas, todos os dias.
              </p>
            </motion.div>

            {/* Lista de benefícios - Bw Modelica Regular */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2 lg:space-y-2.5 pt-1"
            >
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2.5 text-white">
                  <div className="shrink-0">
                    <Check className="w-[18px] h-[18px] text-accent" strokeWidth={2.5} />
                  </div>
                  <span className="text-[14px] md:text-[15px] lg:text-base font-normal font-modelica">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* Botão CTA - Bw Modelica Bold */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-8 lg:pt-10"
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="border-accent/50 text-white hover:bg-accent hover:text-primary px-10 py-5 text-[14px] md:text-[15px] font-bold rounded-2xl transition-all duration-500 hover:scale-105 font-modelica"
              >
                Ver valor do acesso
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar - Bottom Right */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-10 -right-16 lg:-right-24 w-full max-w-[600px] lg:max-w-[950px] z-30"
        >
          <div 
            className="backdrop-blur-md rounded-[2rem] p-6 lg:p-8 overflow-hidden relative"
            style={{ 
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
            }}
          >
            
            <div className="grid grid-cols-3 gap-2 lg:gap-4 items-start relative z-10">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center flex flex-col items-center space-y-1">
                  {/* Números - Bw Modelica Bold (Alinhamento fixo no topo) */}
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-[-0.02em] font-modelica leading-none">
                    {stat.value}
                  </div>
                  {/* Labels - Bw Modelica Semibold Uppercase (Linha única) */}
                  <div className="text-[7.5px] md:text-[9px] lg:text-[10.5px] text-white font-semibold uppercase tracking-[0.05em] whitespace-nowrap font-modelica opacity-90">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
