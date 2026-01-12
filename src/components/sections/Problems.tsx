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
      
      {/* Decorative Logo Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left - partially hidden */}
        <img 
          src="/images/ICONE-B.png" 
          alt="" 
          className="absolute w-[300px] h-[300px] object-contain"
          style={{ top: '-12%', left: '-8%', opacity: 0.12, filter: 'invert(1) brightness(0.7)' }}
        />
        {/* Top right - far corner */}
        <img 
          src="/images/ICONE-B.png" 
          alt="" 
          className="absolute w-[280px] h-[280px] object-contain"
          style={{ top: '-10%', right: '-6%', opacity: 0.12, filter: 'invert(1) brightness(0.7)' }}
        />
        {/* Bottom left - far corner */}
        <img 
          src="/images/ICONE-B.png" 
          alt="" 
          className="absolute w-[350px] h-[350px] object-contain"
          style={{ bottom: '-15%', left: '-10%', opacity: 0.14, filter: 'invert(1) brightness(0.7)' }}
        />
        {/* Bottom right - far corner */}
        <img 
          src="/images/ICONE-B.png" 
          alt="" 
          className="absolute w-[320px] h-[320px] object-contain"
          style={{ bottom: '-12%', right: '-8%', opacity: 0.14, filter: 'invert(1) brightness(0.7)' }}
        />
      </div>
      
      <Container className="relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-8 lg:mb-12">
          <AnimatedSection>
            <span 
              className="font-bold text-xs uppercase tracking-[0.3em] mb-4 block font-modelica"
              style={{ color: '#207681' }}
            >
              Análise de Mercado
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-[1.1] mb-6 font-modelica" style={{ color: '#003B46' }}>
              A saúde tradicional no Brasil{' '}
              <span className="text-neutral-400">precisa de uma evolução.</span>
            </h2>
            <p className="text-base lg:text-lg text-neutral-600 max-w-2xl leading-relaxed font-modelica">
              Enfrentar filas e preços abusivos não deve ser a regra. A{' '}
              <span className="font-bold" style={{ color: '#003B46' }}>QuatroMed</span>{' '}
              redesenhou o acesso à saúde para ser digital, ágil e justo.
            </p>
          </AnimatedSection>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {/* Card 1: Large */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 rounded-2xl lg:rounded-3xl p-6 lg:p-8 relative overflow-hidden group transition-all duration-300 hover:shadow-xl"
            style={{ 
              backgroundColor: '#003B46',
            }}
          >
            <div className="relative z-10">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <Ban className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 font-modelica">
                Filas Intermináveis
              </h3>
              <p className="text-white/70 max-w-md text-base lg:text-lg leading-relaxed font-modelica">
                O tempo de espera por especialistas no sistema público pode comprometer tratamentos urgentes.
              </p>
            </div>
            {/* Background Icon */}
            <div className="absolute right-6 bottom-6 opacity-10 group-hover:opacity-15 transition-opacity">
              <Users size={140} className="text-white" />
            </div>
          </motion.div>

          {/* Card 2: Small - Highlighted */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl lg:rounded-3xl p-6 lg:p-8 relative overflow-hidden group transition-all duration-300 hover:shadow-xl border-2"
            style={{ 
              backgroundColor: 'white',
              borderColor: '#D4AF37',
            }}
          >
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
            >
              <DollarSign className="w-6 h-6" style={{ color: '#D4AF37' }} />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold mb-3 font-modelica" style={{ color: '#003B46' }}>
              Custos Elevados
            </h3>
            <p className="text-neutral-600 text-sm lg:text-base leading-relaxed font-modelica">
              Planos tradicionais com mensalidades que não cabem no orçamento familiar brasileiro.
            </p>
          </motion.div>

          {/* Card 3: Small */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl lg:rounded-3xl p-6 lg:p-8 relative overflow-hidden group transition-all duration-300 hover:shadow-xl"
            style={{ 
              backgroundColor: 'white',
              border: '1px solid rgba(0, 59, 70, 0.1)',
            }}
          >
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: 'rgba(0, 59, 70, 0.05)' }}
            >
              <Clock className="w-6 h-6" style={{ color: '#207681' }} />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold mb-3 font-modelica" style={{ color: '#003B46' }}>
              Perda de Produtividade
            </h3>
            <p className="text-neutral-600 text-sm lg:text-base leading-relaxed font-modelica">
              Horas gastas em deslocamentos e esperas em clínicas físicas lotadas.
            </p>
          </motion.div>

          {/* Card 4: Large */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 rounded-2xl lg:rounded-3xl p-6 lg:p-8 relative overflow-hidden group transition-all duration-300 hover:shadow-xl"
            style={{ 
              backgroundColor: '#207681',
            }}
          >
            <div className="relative z-10">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              >
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 font-modelica">
                Consultas Inacessíveis
              </h3>
              <p className="text-white/70 max-w-md text-base lg:text-lg leading-relaxed font-modelica">
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

