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
        <div className="text-left mb-10 lg:mb-16">
          <AnimatedSection>
            <h2 
              className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-medium mb-6 sm:mb-8 leading-[1.15] font-modelica"
              style={{ color: '#D4AF37' }}
            >
              Cuide da sua saúde e da sua família <span className="font-black sm:block sm:mt-2">com mais tranquilidade.</span>
            </h2>
            
            <div className="max-w-3xl space-y-4 sm:space-y-6 text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed font-modelica">
              <p>
                Facilitar o acesso ao cuidado médico com valores acessíveis, simples e sem filas, sem carência e sem complicação.
              </p>
              <p>
                Escolha abaixo a modalidade de acesso ideal para a sua realidade e comece a cuidar da sua saúde hoje mesmo.
              </p>
            </div>

            {/* Toggle - Design Melhorado */}
            <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mt-8 sm:mt-10">
              <span 
                className={`text-sm sm:text-base font-semibold transition-all duration-300 font-modelica ${
                  !isAnnual ? 'text-white' : 'text-white/40'
                }`}
              >
                Mensal
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`w-14 sm:w-16 h-7 sm:h-8 rounded-full relative p-1 transition-all duration-300 ${
                  isAnnual 
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#F4D03F]' 
                    : 'bg-white/15 border border-white/20'
                }`}
                aria-label="Alternar para anual"
              >
                <motion.div 
                  animate={{ x: isAnnual ? 26 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className={`w-5 sm:w-6 h-5 sm:h-6 rounded-full shadow-md transition-colors duration-300 ${
                    isAnnual ? 'bg-white' : 'bg-white'
                  }`}
                />
              </button>
              <div className="flex items-center gap-1 sm:gap-2">
                <span 
                  className={`text-sm sm:text-base font-semibold transition-all duration-300 font-modelica ${
                    isAnnual ? 'text-[#D4AF37]' : 'text-white/40'
                  }`}
                >
                  Anual
                </span>
                {isAnnual && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-[10px] sm:text-xs font-bold bg-green-500 text-white px-1.5 sm:px-2 py-0.5 rounded-full"
                  >
                    -17%
                  </motion.span>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 lg:gap-6 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1} className="flex-1">
              <motion.div 
                whileHover={{ y: plan.highlight ? 0 : -8, scale: plan.highlight ? 1.02 : 1.01 }}
                transition={{ duration: 0.3 }}
                className={`relative h-full flex flex-col rounded-2xl sm:rounded-3xl transition-all duration-500 overflow-hidden ${
                  plan.highlight 
                    ? 'shadow-2xl shadow-[#D4AF37]/30 z-20 ring-2 ring-[#D4AF37]/50'
                    : 'bg-white shadow-xl'
                }`}
                style={plan.highlight ? {
                  background: 'linear-gradient(160deg, #D4AF37 0%, #E8C548 40%, #D4AF37 100%)'
                } : {}}
              >
                {/* Highlight Badge */}
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-white text-[#D4AF37] text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-b-lg shadow-lg">
                      MAIS POPULAR
                    </div>
                  </div>
                )}

                <div className="flex flex-col h-full p-5 sm:p-6 lg:p-8 pt-8 sm:pt-10">
                  {/* Icon */}
                  <div className="mb-3 sm:mb-4">
                    <img 
                      src={plan.highlight ? '/images/ICONE-B.png' : '/images/ICONE-P.png'} 
                      alt="Icon" 
                      className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 
                    className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2 font-modelica ${
                      plan.highlight ? 'text-white' : 'text-teal-700'
                    }`}
                  >
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-2 sm:mb-3">
                    <div className="flex items-baseline gap-0.5 font-modelica">
                      <span className={`text-sm sm:text-base font-bold ${plan.highlight ? 'text-white' : 'text-neutral-800'}`}>
                        R$
                      </span>
                      <span 
                        className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${
                          plan.highlight ? 'text-white' : 'text-neutral-900'
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span className={`text-xs sm:text-sm font-medium ${plan.highlight ? 'text-white/80' : 'text-neutral-500'}`}>
                        /mês
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p 
                    className={`text-[11px] sm:text-xs lg:text-sm mb-4 sm:mb-5 leading-relaxed font-modelica ${
                      plan.highlight ? 'text-white/90' : 'text-neutral-600'
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Divider */}
                  <div className={`w-full h-px mb-3 sm:mb-4 ${plan.highlight ? 'bg-white/30' : 'bg-neutral-200'}`} />

                  {/* Features */}
                  <ul className="space-y-2 sm:space-y-3 mb-5 sm:mb-6 flex-grow">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span 
                          className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                            plan.highlight ? 'bg-white' : 'bg-teal-600'
                          }`}
                        />
                        <span 
                          className={`text-[11px] sm:text-xs leading-relaxed font-modelica ${
                            plan.highlight ? 'text-white' : 'text-neutral-700'
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
                    className={`w-full font-bold py-2.5 sm:py-3 rounded-xl text-[10px] sm:text-xs font-modelica transition-all duration-300 ${
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
