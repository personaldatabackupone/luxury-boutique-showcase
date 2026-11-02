import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          950: '#0a0a0a',
          900: '#121212',
          850: '#18181b',
          800: '#242426',
          700: '#3f3f46',
          500: '#71717a',
          400: '#a1a1aa',
          300: '#d4d4d8',
          200: '#e4e4e7',
          100: '#f4f4f5',
          50: '#fafafa',
        },
        gold: {
          100: '#fdf8eb',
          200: '#faedd0',
          300: '#f5dc9f',
          400: '#e9be64',
          500: '#d4af37',
          600: '#b8942b',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        luxury: '0.35em',
      },
      boxShadow: {
        'luxury-subtle': '0 10px 30px -10px rgba(0, 0, 0, 0.45)',
        'luxury-glow': '0 0 35px -5px rgba(212, 175, 55, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;