# QuatroMed Telemedicina Brasil

Landing Page profissional de alta conversão para a **QuatroMed**, plataforma de telemedicina brasileira.

![QuatroMed](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-ff0055?style=for-the-badge&logo=framer)

## Stack Tecnológica

- **Next.js 15** - App Router com Server Components
- **TypeScript** - Tipagem estrita sem `any`
- **Tailwind CSS** - Design System customizado
- **Framer Motion** - Animações fluidas e profissionais
- **Lucide React** - Ícones modernos e leves

## Design System

### Paleta de Cores
```typescript
primary: {
  DEFAULT: '#004AAD',  // Azul Médico Profundo
  dark: '#00337C',
  light: '#3B82F6',
}
accent: {
  DEFAULT: '#D4AF37',  // Dourado Soft Premium
}
```

### Princípios de Design
- **Médico & Confiável** - Cores e tipografia transmitem profissionalismo
- **Conversão Otimizada** - CTAs estratégicos em toda a página
- **Mobile-First** - Totalmente responsivo (320px a 4K)
- **Acessibilidade AAA** - Contraste, ARIA labels, navegação por teclado

## Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx          # Layout global + SEO
│   ├── page.tsx            # Orquestração das seções
│   └── globals.css         # Estilos globais + animações
├── components/
│   ├── ui/                 # Componentes base reutilizáveis
│   │   ├── Button.tsx      # Botão com variants e loading state
│   │   ├── Container.tsx   # Container responsivo
│   │   ├── Logo.tsx        # Logo SVG profissional
│   │   └── AnimatedSection.tsx  # Wrapper de animação
│   └── sections/           # Seções da Landing Page
│       ├── Header.tsx      # Navbar fixo com scroll effect
│       ├── Hero.tsx        # Hero com social proof
│       ├── Problems.tsx    # Problemas do mercado
│       ├── Solution.tsx    # Solução QuatroMed
│       ├── HowItWorks.tsx  # Como funciona (4 passos)
│       ├── Pricing.tsx     # Cards de preços (3 planos)
│       ├── Testimonials.tsx # Carrossel de depoimentos
│       ├── FAQ.tsx         # Perguntas frequentes
│       ├── CTASection.tsx  # CTA final
│       └── Footer.tsx      # Footer completo
├── constants/
│   └── index.ts            # Constantes do sistema
└── types/
    └── index.ts            # Tipos TypeScript

tailwind.config.ts          # Configuração do Tailwind
```

## Features Implementadas

### Hero Section
- Background com gradiente médico e imagem profissional
- Título impactante seguindo a identidade visual
- Checklist de benefícios diretos
- CTA primário em estilo outline premium
- Floating Stats Bar com glassmorphism

### Pricing Section
- Toggle Mensal/Anual com desconto visual
- 3 Cards de planos (Individual, Família, Empresarial)
- Card "Família" em destaque com glow dourado
- Badges minimalistas de identificação
- Trust badges no rodapé

### Testimonials Carousel
- Scroll infinito horizontal
- Design clean com cards brancos e sombras suaves
- 4 depoimentos reais de clientes
- Animações fluídas e orgânicas

### FAQ Accordion
- Design em cápsulas premium
- Expansão suave com animação
- Ícones contextuais minimalistas

### Header/Navbar
- Estilo Floating Pill ao scroll
- Logo adaptável (Full vs Icon)
- Transição suave de transparência para vidro branco

### Animações e Micro-interações
- Framer Motion para entradas suaves em todas as seções
- Hover effects refinados em todos os elementos interativos
- Foco total em performance (60fps)

### Acessibilidade
- Labels ARIA e semântica HTML5 completa
- Contraste de cores AAA para máxima legibilidade
- Navegação por teclado otimizada

## Como Rodar

### Desenvolvimento
```bash
npm install
npm run dev
```
Acesse: [http://localhost:3000](http://localhost:3000)

### Produção
```bash
npm run build
npm start
```

## Licença

© 2010-2025 QuatroMed Telemedicina Brasil LTDA

**Desenvolvido com atenção aos mínimos detalhes.**
