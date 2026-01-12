// Site Configuration
export const SITE_CONFIG = {
  name: 'QuatroMed Telemedicina Brasil',
  description: 'Acesso médico online sempre que você precisar',
  url: 'https://quatromed.com.br',
  email: 'contato@quatromed.com.br',
  phone: '+55 (11) 9999-9999',
  whatsapp: '+5511999999999',
  social: {
    instagram: 'https://instagram.com/quatromed',
    linkedin: 'https://linkedin.com/company/quatromed',
  },
} as const;

// Pricing Plans
export const PRICING_PLANS = {
  monthly: {
    individual: 29.99,
    family: 69.99,
    enterprise: 'custom',
  },
  annual: {
    individual: 24.99,
    family: 59.99,
    enterprise: 'custom',
  },
} as const;

// Animation Defaults
export const ANIMATION_CONFIG = {
  duration: 0.6,
  staggerDelay: 0.1,
  easing: [0.6, -0.05, 0.01, 0.99],
} as const;

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

