'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Clock, DollarSign, TrendingUp, Ban, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export const Problems = () => {
  const problems = [
    {
      icon: Ban,
      title: 'Filas Intermináveis',
      description: 'O tempo de espera por especialistas no sistema público pode comprometer tratamentos urgentes.',
      large: true,
      bgIcon: Users,
    },
    {
      icon: DollarSign,
      title: 'Custos Elevados',
      description: 'Planos tradicionais com mensalidades que não cabem no orçamento familiar brasileiro.',
      highlight: true,
    },
    {
      icon: Clock,
      title: 'Perda de Produtividade',
      description: 'Horas gastas em deslocamentos e esperas em clínicas físicas lotadas.',
    },
    {
      icon: TrendingUp,
      title: 'Consultas Inacessíveis',
      description: 'Valores abusivos em consultas particulares que impedem o cuidado preventivo regular.',
      large: true,
    },
  ];

  return (
    <section id="solucao" className="py-12 lg:py-16 relative overflow-hidden min-h-screen flex items-center" style={{ backgroundColor: '#f8fafb' }}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0, 59, 70, 0.03) 0%, transparent 50%),
                              radial-gradient(circle at 80% 80%, rgba(32, 118, 129, 0.03) 0%, transparent 50%)`
          }}
        />
      </div>

      {/* Decorative Logo Pattern - Hidden on mobile for cleaner look */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        {/* Top left - partially hidden */}
        <img
          src="/images/ICONE-B.png"
          alt=""
          className="absolute w-[200px] md:w-[300px] h-[200px] md:h-[300px] object-contain"
          style={{ top: '-12%', left: '-8%', opacity: 0.12, filter: 'invert(1) brightness(0.7)' }}
        />
        {/* Top right - far corner */}
        <img
          src="/images/ICONE-B.png"
          alt=""
          className="absolute w-[180px] md:w-[280px] h-[180px] md:h-[280px] object-contain"
          style={{ top: '-10%', right: '-6%', opacity: 0.12, filter: 'invert(1) brightness(0.7)' }}
        />
        {/* Bottom left - far corner */}
        <img
          src="/images/ICONE-B.png"
          alt=""
          className="absolute w-[220px] md:w-[350px] h-[220px] md:h-[350px] object-contain"
          style={{ bottom: '-15%', left: '-10%', opacity: 0.14, filter: 'invert(1) brightness(0.7)' }}
        />
        {/* Bottom right - far corner */}
        <img
          src="/images/ICONE-B.png"
          alt=""
          className="absolute w-[200px] md:w-[320px] h-[200px] md:h-[320px] object-contain"
          style={{ bottom: '-12%', right: '-8%', opacity: 0.14, filter: 'invert(1) brightness(0.7)' }}
        />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-8 lg:mb-12">
          <AnimatedSection>
            <span
              className="font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 block font-modelica"
              style={{ color: '#2A5F72' }}
            >
              Análise de Mercado
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-bold leading-[1.15] mb-4 sm:mb-6 font-modelica" style={{ color: '#2A5F72' }}>
              A saúde tradicional no Brasil{' '}
              <span className="text-neutral-400">precisa de uma evolução.</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-600 max-w-2xl leading-relaxed font-modelica">
              Enfrentar filas e preços abusivos não deve ser a regra. A{' '}
              <span className="font-bold" style={{ color: '#2A5F72' }}>QuatroMed</span>{' '}
              redesenhou o acesso à saúde para ser digital, ágil e justo.
            </p>
          </AnimatedSection>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5">
          {/* Card 1: Large - TEAL BACKGROUND (Originally Blue) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 md:col-span-2 rounded-2xl lg:rounded-3xl p-5 sm:p-6 lg:p-8 relative overflow-hidden shadow-lg"
            style={{
              backgroundColor: '#2A5F72',
            }}
          >
            <div className="relative z-10">
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-3 sm:mb-4"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <Ban className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 font-modelica">
                Filas Intermináveis
              </h3>
              <p className="text-white/70 max-w-md text-sm sm:text-base lg:text-lg leading-relaxed font-modelica">
                O tempo de espera por especialistas no sistema público pode comprometer tratamentos urgentes.
              </p>
            </div>
            {/* Background Icon */}
            <div className="absolute right-4 sm:right-6 bottom-4 sm:bottom-6 opacity-10">
              <Users size={100} className="text-white sm:hidden" />
              <Users size={140} className="text-white hidden sm:block" />
            </div>
          </motion.div>

          {/* Card 2: Small - Highlighted - WHITE BACKGROUND, TEAL TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl lg:rounded-3xl p-5 sm:p-6 lg:p-8 relative overflow-hidden border-2"
            style={{
              backgroundColor: 'white',
              borderColor: '#D4A84B',
            }}
          >
            <div
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-3 sm:mb-4"
              style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
            >
              <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#D4A84B' }} />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 font-modelica" style={{ color: '#2A5F72' }}>
              Custos Elevados
            </h3>
            <p className="text-neutral-600 text-sm lg:text-base leading-relaxed font-modelica">
              Planos tradicionais com mensalidades que não cabem no orçamento familiar brasileiro.
            </p>
          </motion.div>

          {/* Card 3: Small - WHITE BACKGROUND, TEAL TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl lg:rounded-3xl p-5 sm:p-6 lg:p-8 relative overflow-hidden"
            style={{
              backgroundColor: 'white',
              border: '1px solid rgba(0, 59, 70, 0.1)',
            }}
          >
            <div
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-3 sm:mb-4"
              style={{ backgroundColor: 'rgba(0, 59, 70, 0.05)' }}
            >
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#2A5F72' }} />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 font-modelica" style={{ color: '#2A5F72' }}>
              Perda de Produtividade
            </h3>
            <p className="text-neutral-600 text-sm lg:text-base leading-relaxed font-modelica">
              Horas gastas em deslocamentos e esperas em clínicas físicas lotadas.
            </p>
          </motion.div>

          {/* Card 4: Large - TEAL BACKGROUND (No Change) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="sm:col-span-2 md:col-span-2 rounded-2xl lg:rounded-3xl p-5 sm:p-6 lg:p-8 relative overflow-hidden"
            style={{
              backgroundColor: '#2A5F72',
            }}
          >
            <div className="relative z-10">
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-3 sm:mb-4"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              >
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 font-modelica">
                Consultas Inacessíveis
              </h3>
              <p className="text-white/70 max-w-md text-sm sm:text-base lg:text-lg leading-relaxed font-modelica">
                Valores abusivos em consultas particulares que impedem o cuidado preventivo regular.
              </p>
            </div>
            {/* Gradient decoration */}
            <div
              className="absolute right-0 top-0 w-1/2 h-full opacity-20"
              style={{
                background: 'linear-gradient(to left, rgba(255,255,255,0.1), transparent)'
              }}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

