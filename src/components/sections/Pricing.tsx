'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';

export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Acesso individual',
      price: isAnnual ? '24,99' : '29,99',
      description: 'Ideal para quem quer cuidar da própria saúde sem pagar caro.',
      features: [
        'Atendimento médico online 24 horas, todos os dias.',
        'Orientação médica, avaliação de sintomas e próximos passos.',
        'Sem filas, sem carência e sem complicação.',
        'Sem taxa de adesão.',
      ],
      buttonText: 'QUERO ESSE ACESSO',
      highlight: false,
    },
    {
      name: 'Acesso família',
      price: isAnnual ? '58,99' : '69,99',
      description: 'Mais proteção para quem você ama, pagando menos por pessoa.',
      features: [
        'Atendimento para até X pessoas.',
        'Economia mensal em relação ao acesso individual.',
        'Orientação médica, avaliação de sintomas e próximos passos.',
        'Atendimento médico online 24 horas para toda a família.',
      ],
      buttonText: 'QUERO PROTEGER MINHA FAMÍLIA',
      highlight: true,
    },
    {
      name: 'Acesso empresarial',
      price: 'XX',
      description: 'Saúde acessível para seus colaboradores, com mais produtividade.',
      features: [
        'Atendimento médico online para a equipe.',
        'Fácil contratação e gestão.',
        'Ideal para pequenas e médias empresas.',
      ],
      buttonText: 'SOLICITAR PROPOSTA',
      highlight: false,
    },
  ];

  return (
    <section 
      id="planos" 
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #0f3541 0%, #1a5568 50%, #2a7a8f 100%)'
      }}
    >
      <Container className="relative z-10">
        {/* Header */}
        <div className="text-left mb-12 lg:mb-16">
          <AnimatedSection>
            <h2 
              className="text-4xl md:text-5xl lg:text-7xl font-medium mb-8 leading-[1.1] font-modelica"
              style={{ color: '#c58511' }}
            >
              Cuide da sua saúde e da sua família <br />
              <span className="font-black block mt-2">com mais tranquilidade.</span>
            </h2>
            
            <div className="max-w-3xl space-y-6 text-white text-base md:text-lg lg:text-xl font-medium leading-relaxed font-modelica">
              <p>
                Facilitar o acesso ao cuidado médico com valores acessíveis, simples e sem filas, sem carência e sem complicação.
              </p>
              <p>
                Escolha abaixo a modalidade de acesso ideal para a sua realidade e comece a cuidar da sua saúde hoje mesmo.
              </p>
            </div>

            {/* Toggle - Design Melhorado */}
            <div className="flex items-center justify-center gap-3 mt-10">
              <span 
                className={`text-base font-semibold transition-all duration-300 font-modelica ${
                  !isAnnual ? 'text-white' : 'text-white/40'
                }`}
              >
                Mensal
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`w-16 h-8 rounded-full relative p-1 transition-all duration-300 ${
                  isAnnual 
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-400' 
                    : 'bg-white/15 border border-white/20'
                }`}
                aria-label="Alternar para anual"
              >
                <motion.div 
                  animate={{ x: isAnnual ? 32 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className={`w-6 h-6 rounded-full shadow-md transition-colors duration-300 ${
                    isAnnual ? 'bg-white' : 'bg-white'
                  }`}
                />
              </button>
              <div className="flex items-center gap-2">
                <span 
                  className={`text-base font-semibold transition-all duration-300 font-modelica ${
                    isAnnual ? 'text-amber-400' : 'text-white/40'
                  }`}
                >
                  Anual
                </span>
                {isAnnual && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-xs font-bold bg-green-500 text-white px-2 py-0.5 rounded-full"
                  >
                    -17%
                  </motion.span>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <motion.div 
                whileHover={{ y: plan.highlight ? 0 : -8, scale: plan.highlight ? 1.02 : 1.01 }}
                transition={{ duration: 0.3 }}
                className={`group relative h-full flex flex-col rounded-3xl transition-all duration-500 overflow-hidden ${
                  plan.highlight 
                    ? 'shadow-2xl shadow-amber-500/20 z-20'
                    : 'bg-white shadow-xl hover:shadow-2xl'
                }`}
                style={plan.highlight ? {
                  background: 'linear-gradient(160deg, #b8962b 0%, #d4af37 30%, #e8c548 70%, #d4af37 100%)'
                } : {}}
              >
                {/* Highlight Badge */}
                {plan.highlight && (
                  <div className="absolute -top-0 left-1/2 -translate-x-1/2">
                    <div className="bg-white text-amber-700 text-xs font-bold px-4 py-1.5 rounded-b-lg shadow-lg">
                      MAIS POPULAR
                    </div>
                  </div>
                )}

                <div className="flex flex-col h-full p-8 lg:p-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <img 
                      src={plan.highlight ? '/images/ICONE-B.png' : '/images/ICONE-P.png'} 
                      alt="Icon" 
                      className="w-12 h-12 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 
                    className={`text-sm font-semibold uppercase tracking-wide mb-2 font-modelica ${
                      plan.highlight ? 'text-white/80' : 'text-teal-700'
                    }`}
                  >
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1 font-modelica">
                      <span className={`text-lg font-bold ${plan.highlight ? 'text-white' : 'text-neutral-800'}`}>
                        R$
                      </span>
                      <span 
                        className={`text-5xl lg:text-6xl font-black tracking-tight ${
                          plan.highlight ? 'text-white' : 'text-neutral-900'
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span className={`text-base font-medium ${plan.highlight ? 'text-white/70' : 'text-neutral-500'}`}>
                        /mês
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p 
                    className={`text-sm lg:text-base mb-8 leading-relaxed font-modelica ${
                      plan.highlight ? 'text-white/85' : 'text-neutral-600'
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Divider */}
                  <div className={`w-full h-px mb-6 ${plan.highlight ? 'bg-white/20' : 'bg-neutral-200'}`} />

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <span 
                          className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                            plan.highlight ? 'bg-white' : 'bg-teal-600'
                          }`}
                        />
                        <span 
                          className={`text-sm leading-relaxed font-modelica ${
                            plan.highlight ? 'text-white/90' : 'text-neutral-700'
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full font-bold py-4 rounded-xl text-sm font-modelica transition-all duration-300 ${
                      plan.highlight 
                        ? 'bg-[#0f3541] text-white hover:bg-[#164a5a] shadow-lg shadow-black/20' 
                        : 'bg-white text-neutral-700 border-2 border-[#0f3541] hover:bg-[#0f3541] hover:text-white'
                    }`}
                  >
                    {plan.buttonText}
                  </motion.button>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
};
