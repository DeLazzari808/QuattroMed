'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Luciano Hollanda',
    location: 'Curitiba/PR',
    text: 'Sempre deixei consultas para depois pelo custo. Com a QuatroMed, o atendimento foi imediato e barato. Salvou minha rotina!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'João Pedro',
    location: 'São Paulo/SP',
    text: 'A experiência de telemedicina me surpreendeu. Médico atencioso e plataforma intuitiva. Valeu cada centavo.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Eliane Rocha',
    location: 'Belo Horizonte/MG',
    text: 'Minha família toda usa e recomenda. A segurança de ter um médico disponível 24h não tem preço.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Carlos Mendes',
    location: 'Rio de Janeiro/RJ',
    text: 'Excelente custo-benefício. Resolvi meu problema sem sair de casa. Startup nota 10!',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
  },
];

export const Testimonials = () => {
  // Triple the items for smooth infinite loop
  const infiniteItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#f8fafb' }}>
      {/* Decorative Logo Pattern - Hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        {/* Top center - medium */}
        <img 
          src="/images/ICONE-B.png" 
          alt="" 
          className="absolute w-[200px] md:w-[300px] h-[200px] md:h-[300px] object-contain"
          style={{ top: '-10%', left: '50%', transform: 'translateX(-50%)', opacity: 0.1, filter: 'invert(1) brightness(0.7)' }}
        />
        {/* Bottom left - large */}
        <img 
          src="/images/ICONE-B.png" 
          alt="" 
          className="absolute w-[250px] md:w-[400px] h-[250px] md:h-[400px] object-contain"
          style={{ bottom: '-10%', left: '-10%', opacity: 0.12, filter: 'invert(1) brightness(0.7)' }}
        />
        {/* Bottom right - medium */}
        <img 
          src="/images/ICONE-B.png" 
          alt="" 
          className="absolute w-[150px] md:w-[250px] h-[150px] md:h-[250px] object-contain"
          style={{ bottom: '10%', right: '5%', opacity: 0.1, filter: 'invert(1) brightness(0.7)' }}
        />
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(32, 118, 129, 0.2), transparent)' }}></div>
      
      <Container>
        <div className="text-center mb-10 sm:mb-16 lg:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 block font-modelica"
            style={{ color: '#207681' }}
          >
            NOSSAS REVIEWS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight font-modelica"
            style={{ color: '#003B46' }}
          >
            O que nossos clientes <br className="hidden sm:block" />
            <span className="text-neutral-400">estão falando</span>
          </motion.h2>
        </div>
      </Container>

      {/* Infinite Horizontal Scroll */}
      <div className="relative flex overflow-hidden py-6 sm:py-10">
        <motion.div 
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ 
            ease: "linear", 
            duration: 40, // Slower for premium feel
            repeat: Infinity 
          }}
          className="flex gap-4 sm:gap-6 lg:gap-10 whitespace-nowrap"
        >
          {infiniteItems.map((t, idx) => (
            <div 
              key={idx}
              className="w-[280px] sm:w-[350px] lg:w-[450px] flex-shrink-0 bg-white p-5 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl lg:rounded-3xl border transition-all duration-500 hover:shadow-xl group"
              style={{ borderColor: 'rgba(0, 59, 70, 0.1)' }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 lg:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden border" style={{ borderColor: 'rgba(32, 118, 129, 0.2)' }}>
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-lg font-modelica" style={{ color: '#003B46' }}>{t.name}</h4>
                  <p className="text-[8px] sm:text-[10px] lg:text-xs font-bold uppercase tracking-widest font-modelica" style={{ color: '#207681' }}>{t.location}</p>
                </div>
                <div className="ml-auto">
                  <img src="/images/ICONE-C.png" alt="Icon" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                </div>
              </div>

              <Quote className="mb-3 sm:mb-4 opacity-10" size={24} style={{ color: '#003B46' }} />
              <p className="text-neutral-600 font-medium whitespace-normal leading-relaxed text-xs sm:text-sm lg:text-base font-modelica">
                "{t.text}"
              </p>
            </div>
          ))}
        </motion.div>

        {/* Faded edges */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 lg:w-64 bg-gradient-to-r from-[#f8fafb] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 lg:w-64 bg-gradient-to-l from-[#f8fafb] to-transparent z-10"></div>
      </div>
    </section>
  );
};
