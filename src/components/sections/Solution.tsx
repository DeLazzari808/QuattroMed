'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const Solution = () => {
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const doctors = [
    {
      name: 'João Guilherme',
      role: 'Clínico geral',
      image: '/images/MEDICO-1.png',
    },
    {
      name: 'Ana Júlia',
      role: 'Cardiologista',
      image: '/images/MEDICO-2.png',
    },
    {
      name: 'Paulo Henrique',
      role: 'Psicólogo',
      image: '/images/MEDICO-3.png',
    },
  ];

  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #163e51 0%, #378090 100%)'
      }}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 lg:mb-16 px-2">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight font-modelica">
              A <span className="font-black">QuatroMed</span> nasceu para mudar isso.
            </h2>
          </AnimatedSection>
        </div>

        {/* Doctor Cards */}
        <div className="relative group/carousel">
          {/* Mobile Navigation Arrows */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white sm:hidden -ml-2 border border-white/20 active:scale-95 transition-all"
            aria-label="Anterior"
          >
            <ArrowRight className="w-6 h-6 rotate-180" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white sm:hidden -mr-2 border border-white/20 active:scale-95 transition-all"
            aria-label="Próximo"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 pb-4 -mx-4 px-8 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 sm:mx-auto sm:px-0 sm:gap-6 lg:gap-8 mb-10 lg:mb-16 max-w-5xl"
          >
            {doctors.map((doc, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} className="min-w-[75vw] sm:min-w-0 snap-center first:pl-2 last:pr-2">
                <div
                  className="group relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden aspect-[3/4] shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-500"
                  style={{ background: 'linear-gradient(to right, #D4AF37, #F4D03F)' }}
                >
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Medical Cross Badge */}
                  <div className="absolute top-3 left-3 sm:top-5 sm:left-5">
                    <img src="/images/ICONE-B.png" alt="Icon" className="w-7 h-7 sm:w-10 sm:h-10 object-contain" />
                  </div>

                  {/* Name Badge at Bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-3 sm:p-5"
                    style={{
                      background: 'linear-gradient(to top, rgba(0, 59, 70, 0.95), rgba(0, 59, 70, 0.7) 60%, transparent)'
                    }}
                  >
                    <h4 className="text-sm sm:text-lg font-bold text-white mb-0 sm:mb-0.5 font-modelica">{doc.name}</h4>
                    <p className="text-white/70 text-xs sm:text-sm font-modelica">{doc.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <AnimatedSection className="text-center max-w-5xl mx-auto px-2">
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white/95 leading-relaxed mb-8 sm:mb-10 font-modelica">
            A <span className="font-bold text-white">Quatromed Telemedicina Brasil</span> oferece acesso rápido a médicos, com valores que cabem no bolso do brasileiro, sem filas, sem carência e sem complicação.
          </p>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-white border-none px-6 sm:px-12 py-4 sm:py-6 text-sm sm:text-lg lg:text-xl font-bold rounded-full shadow-[0_10px_25px_-5px_rgba(212,175,55,0.4)] hover:shadow-[0_20px_40px_-5px_rgba(212,175,55,0.5)] hover:scale-[1.05] active:scale-[0.98] transition-all duration-500 font-modelica group relative overflow-hidden"
              onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center gap-2 sm:gap-3 tracking-wide">
                <span className="hidden sm:inline">ESCOLHA A MODALIDADE DE ACESSO</span>
                <span className="sm:hidden">ESCOLHER ACESSO</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={3} />
              </span>

              {/* Shine reflection effect */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

              {/* Glow background */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};
