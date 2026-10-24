import type { Config } from 'tailwindcss';

// Paleta provisoria: harina, masa horneada y tomate. Se ajusta con los bocetos aprobados.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        flour: { DEFAULT: '#FBF6EC', deep: '#F3EAD7' },
        crust: { DEFAULT: '#C9852E', dark: '#8A5418' },
        tomato: { DEFAULT: '#B8321F', dark: '#8F2414' },
        ink: { DEFAULT: '#2B1D12', soft: '#5C4633' },
        basil: '#3F6B3A',
      },
      fontFamily: {
        display: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        sans: ['system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        warm: '0 10px 30px -12px rgba(74, 44, 16, 0.35)',
      },
    },
  },
  plugins: [],
} satisfies Config;
