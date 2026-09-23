/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        cuy: {
          red: '#BE0B2B',
          darkred: '#7F081B',
          crimson: '#D91A3C',
          gold: '#F5BE2C',
          darkgold: '#D69E14',
          softpink: '#FFEAEA',
          glass: 'rgba(255, 255, 255, 0.08)',
          glassBorder: 'rgba(255, 255, 255, 0.18)',
        },
      },
      boxShadow: {
        'glow-red': '0 0 50px -10px rgba(220, 20, 60, 0.45)',
        'glow-gold': '0 0 35px -5px rgba(245, 190, 44, 0.35)',
        'phone-frame':
          '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px rgba(190, 11, 43, 0.5)',
      },
      animation: {
        'float-slow': 'float 5s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'pulse-soft': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};