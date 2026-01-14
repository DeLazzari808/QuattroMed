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
    <section className="relative min-h-screen flex items-center pt-20 pb-32 sm:pb-20 overflow-hidden" style={{ backgroundColor: '#003B46' }}>
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/vitaly-gariev-WCYU_DhNn7U-unsplash.jpg"
          alt="Médico Profissional QuatroMed"
          className="w-full h-full object-cover brightness-110"
          style={{ objectPosition: 'center center' }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to right, rgba(0, 59, 70, 0.95) 0%, rgba(0, 59, 70, 0.85) 40%, rgba(0, 59, 70, 0.6) 70%, rgba(0, 59, 70, 0.4) 100%)'
          }}
        ></div>
      </div>

      <Container className="relative z-20 h-full flex flex-col py-6">
        <div className="max-w-3xl flex-1 flex flex-col justify-center pb-20 sm:pb-28 lg:pb-24">
          {/* Main Content Area */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            {/* Título Principal - Bw Modelica Bold */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[1.6rem] sm:text-[1.85rem] md:text-[2.25rem] lg:text-[2.75rem] xl:text-[3.25rem] font-bold leading-[1.15] tracking-[-0.02em] text-white max-w-[600px] font-modelica"
            >
              Atendimento médico online 24h, <br className="hidden sm:block" />
              por um valor que <br className="hidden sm:block" />
              cabe no seu bolso.
            </motion.h1>

            {/* Subtítulo - Bw Modelica Medium + Light */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-[500px] space-y-0.5"
            >
              <p className="text-sm sm:text-[15px] md:text-base lg:text-lg text-white font-medium leading-[1.4] sm:leading-[1.45] font-modelica">
                Consultas médicas online a partir de valores acessíveis para todo o Brasil.
              </p>
              <p className="text-sm sm:text-[15px] md:text-base lg:text-lg text-white/70 font-normal leading-[1.4] sm:leading-[1.45] font-modelica">
                Atendimento médico online 24 horas, todos os dias.
              </p>
            </motion.div>

            {/* Lista de benefícios - Bw Modelica Regular */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-1.5 sm:space-y-2 lg:space-y-2.5"
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
              className="pt-6 sm:pt-8 lg:pt-10"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-accent/50 text-white hover:bg-accent hover:text-primary px-8 sm:px-10 py-4 sm:py-5 text-[14px] md:text-[15px] font-bold rounded-2xl transition-all duration-500 hover:scale-105 font-modelica"
                onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver valor do acesso
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar - Below Content on Mobile, Absolute on Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative sm:absolute sm:bottom-10 w-full sm:w-auto left-0 right-0 sm:left-auto sm:right-4 md:right-0 lg:-right-24 z-30 mt-8 sm:mt-0 px-4 sm:px-0 flex justify-center sm:block"
        >
          <div
            className="backdrop-blur-md rounded-2xl sm:rounded-[1.5rem] lg:rounded-[2rem] p-6 sm:p-4 lg:p-6 xl:p-8 overflow-hidden relative w-full sm:max-w-[500px] md:max-w-[600px] lg:max-w-[950px]"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
            }}
          >

            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-6 sm:gap-2 lg:gap-4 items-center sm:items-start relative z-10">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center flex flex-col items-center space-y-1 sm:space-y-1">
                  {/* Números - Bw Modelica Bold */}
                  <div className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white tracking-[-0.02em] font-modelica leading-none">
                    {stat.value}
                  </div>
                  {/* Labels - Bw Modelica Semibold Uppercase */}
                  <div className="text-xs sm:text-[7.5px] md:text-[9px] lg:text-[10.5px] text-white font-semibold uppercase tracking-widest sm:tracking-[0.05em] font-modelica opacity-90 leading-tight text-center whitespace-normal sm:whitespace-nowrap px-2 sm:px-0">
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
