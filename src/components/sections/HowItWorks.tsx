'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { motion } from 'framer-motion';

const steps = [
  { number: 1, text: 'Escolha seu acesso.' },
  { number: 2, text: 'Faça o cadastro em poucos minutos.' },
  { number: 3, text: 'Seja atendido rapidamente.' },
  { number: 4, text: 'Fale com o médico por vídeo.' },
];

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 lg:py-28 relative overflow-hidden bg-white">
      <Container className="relative z-10">
        {/* Header */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16 font-modelica"
          style={{ color: '#003B46' }}
        >
          Fale com um médico quando precisar, <br /> sem filas e sem carência.
        </motion.h2>

        {/* Main Content: Steps Card + Phone Mockup */}
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-5xl mx-auto relative">
          {/* Left: Steps Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative z-20 lg:mr-[-80px] order-1 lg:order-1"
          >
            <div 
              className="backdrop-blur-md rounded-[2rem] lg:rounded-[2.5rem] px-6 lg:px-8 py-10 lg:py-12 border-2 max-w-md"
              style={{ 
                borderColor: '#D4AF37',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.3) 100%)',
                boxShadow: '0 8px 32px rgba(0, 59, 70, 0.06), 0 2px 8px rgba(0, 0, 0, 0.02)'
              }}
            >
              <div className="space-y-7">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    {/* Circled Number */}
                    <div 
                      className="w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0 font-bold text-lg font-modelica"
                      style={{ borderColor: '#D4AF37', color: '#D4AF37' }}
                    >
                      {step.number}
                    </div>
                    {/* Step Text */}
                    <p 
                      className="text-lg lg:text-xl font-bold pt-1.5 font-modelica"
                      style={{ color: '#003B46' }}
                    >
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom tagline */}
              <p 
                className="mt-10 text-base lg:text-lg font-medium italic font-modelica"
                style={{ color: '#D4AF37' }}
              >
                Pronto. Sem fila, sem deslocamento.
              </p>
            </div>
            
            {/* Logo OUTSIDE and BELOW the card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="-mt-28 flex justify-start max-w-md pl-8"
            >
              <img 
                src="/images/LOGO-1.png" 
                alt="QuatroMed - Telemedicina Brasil"
                className="h-56 lg:h-80 w-auto object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Right: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center relative z-10 order-2 lg:order-2 mt-8 lg:mt-0"
          >
            <div className="relative w-[280px] lg:w-[340px]">
              {/* Phone Frame */}
              <div className="relative bg-neutral-900 rounded-[3rem] p-2 shadow-2xl">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-neutral-900 rounded-b-2xl z-20"></div>
                
                {/* Phone Screen */}
                <div 
                  className="rounded-[2.5rem] overflow-hidden aspect-[9/19]"
                  style={{ 
                    background: 'linear-gradient(180deg, #163e51 0%, #378090 100%)'
                  }}
                >
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-8 pt-4 text-white/60 text-xs font-modelica">
                    <span className="font-medium">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 border border-white/60 rounded-sm">
                        <div className="w-2/3 h-full bg-white/60 rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  {/* App Content - Logo/Icon */}
                  <div className="flex items-center justify-center h-full -mt-8">
                    <img 
                      src="/images/ICONE-C.png" 
                      alt="QuatroMed Logo"
                      className="w-32 h-32 lg:w-40 lg:h-40 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
