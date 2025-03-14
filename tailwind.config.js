/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Newsreader', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        customdarkblue: '#0D1117',
        customgreen: '#3FB950',
        customcyan: '#33B3AE',
      },
      screens: { sm: '480px', md: '768px', lg: '976px', xl: '1440pd' },
      animation: {
        bounce:
          'bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite',
      },
      keyframes: {
        bounce: {
          from: { transform: 'translateY(10px)' },
          to: { transform: 'translateY(0px)' },
        },
      },
    },
  },
  plugins: [],
};
