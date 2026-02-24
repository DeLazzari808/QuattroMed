'use client';

import React from 'react';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=5541999798027&text=Ol%C3%A1%2C+gostaria+de+falar+com+um+especialista&type=phone_number&app_absent=0';

export const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
    >
      <svg viewBox="0 0 32 32" fill="white" className="w-7 h-7">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.914 15.914 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.302 22.602c-.39 1.1-1.932 2.014-3.168 2.28-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.826-6.812-8.064-7.128-.232-.316-1.93-2.57-1.93-4.9 0-2.33 1.222-3.476 1.656-3.95.39-.426 1.024-.618 1.63-.618.196 0 .374.01.532.018.468.02.702.048 1.012.784.386.918 1.328 3.248 1.444 3.484.118.236.236.548.078.864-.148.324-.276.524-.512.806-.236.282-.498.63-.71.846-.236.236-.482.492-.206.962.276.47 1.226 2.022 2.634 3.276 1.81 1.612 3.334 2.112 3.806 2.348.47.236.746.196 1.022-.118.276-.316 1.186-1.376 1.502-1.85.316-.47.632-.392 1.062-.236.434.158 2.76 1.302 3.232 1.54.47.236.786.354.904.55.116.196.116 1.14-.274 2.24z" />
      </svg>
    </a>
  );
};
