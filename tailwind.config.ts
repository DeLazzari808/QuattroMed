import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A4B5C', // Azul Petróleo (ID Visual QuatroMed)
          dark: '#153D4A',
          light: '#2A5F72',
          muted: '#E8F4F7',
        },
        accent: {
          DEFAULT: '#D4A84B', // Dourado Mostarda (ID Visual QuatroMed)
          light: '#E4C06B',
          dark: '#B8923D',
        },
        neutral: {
          50: '#FDFDFD',
          100: '#F8FAFC',
          200: '#F1F5F9',
          600: '#475569',
          900: '#0F172A',
        },
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(26, 75, 92, 0.1)',
        'premium-hover': '0 20px 40px -15px rgba(26, 75, 92, 0.15)',
        'gold-glow': '0 0 15px rgba(212, 168, 75, 0.2)',
        'pill': '0 4px 20px -5px rgba(0, 0, 0, 0.05)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-dm-sans)', 'sans-serif'],
        modelica: ['"Bw Modelica"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'medical-gradient': 'linear-gradient(135deg, #1A4B5C 0%, #153D4A 100%)',
        'clean-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #E8F4F7 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;

