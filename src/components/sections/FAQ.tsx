'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Telemedicina é segura?',
    answer: 'Sim, seguimos todas as normas do CFM e LGPD.',
  },
  {
    question: 'Posso usar pelo celular?',
    answer: 'Sim, nossa plataforma é 100% responsiva e pode ser acessada de qualquer smartphone, tablet ou computador.',
  },
  {
    question: 'Tem fidelidade?',
    answer: 'Não, você pode cancelar seu acesso a qualquer momento sem taxas extras ou burocracia.',
  },
  {
    question: 'Quais especialidades são atendidas?',
    answer: 'Oferecemos atendimento médico online para orientar, avaliar sintomas e indicar próximos passos.',
  },
  {
    question: 'O atendimento psicológico está incluso?',
    answer: 'O atendimento psicológico online é opcional e contratado separadamente.',
  },
];

export const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative Logo Pattern - Hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        {/* Top left - large */}
        <img 
          src="/images/ICONE-B.png" 
          alt="" 
          className="absolute w-[200px] md:w-[350px] h-[200px] md:h-[350px] object-contain"
          style={{ top: '-8%', left: '-5%', opacity: 0.15, filter: 'invert(1) brightness(0.7)' }}
        />
        {/* Top right - medium */}
        <img 
          src="/images/ICONE-B.png" 
          alt="" 
          className="absolute w-[150px] md:w-[250px] h-[150px] md:h-[250px] object-contain"
          style={{ top: '8%', right: '8%', opacity: 0.12, filter: 'invert(1) brightness(0.7)' }}
        />
        {/* Bottom right - large */}
        <img 
          src="/images/ICONE-B.png" 
          alt="" 
          className="absolute w-[180px] md:w-[320px] h-[180px] md:h-[320px] object-contain"
          style={{ bottom: '-5%', right: '-3%', opacity: 0.15, filter: 'invert(1) brightness(0.7)' }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">
          {/* Left Side: Header */}
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-8 font-modelica"
              style={{ color: '#003B46' }}
            >
              Perguntas frequentes
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-neutral-900 font-bold text-sm sm:text-base lg:text-lg leading-relaxed max-w-md font-modelica"
            >
              Escolha a modalidade de acesso que melhor se adapte às suas necessidades. Sem taxas ocultas, sem surpresas — apenas preços transparentes para cuidar de você e da sua família.
            </motion.p>
          </div>

          {/* Right Side: Accordion */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] overflow-hidden transition-all duration-300"
                style={{ backgroundColor: '#f4f7f8' }}
              >
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 lg:p-8 text-left group font-modelica gap-3"
                >
                  <span 
                    className="text-base sm:text-lg lg:text-xl font-bold transition-colors"
                    style={{ color: '#003B46' }}
                  >
                    {faq.question}
                  </span>
                  <div 
                    className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 shadow-sm"
                    style={{ 
                      backgroundColor: openIdx === idx ? '#003B46' : 'transparent',
                      border: openIdx === idx ? 'none' : '2px solid #003B46',
                      color: openIdx === idx ? '#fff' : '#003B46'
                    }}
                  >
                    <ChevronDown 
                      size={18} 
                      className={`transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} 
                    />
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 text-neutral-600 text-sm lg:text-base font-medium max-w-lg font-modelica">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
