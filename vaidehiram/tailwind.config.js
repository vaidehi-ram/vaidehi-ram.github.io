/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#1a1528',
          700: '#342f45',
          500: '#5c5670',
        },
        cream: '#faf8f5',
        rose: {
          soft: '#fdeef2',
          DEFAULT: '#e8a0b4',
          deep: '#c75b7a',
        },
        sage: {
          soft: '#eef4ef',
          DEFAULT: '#8fb996',
          deep: '#5a8564',
        },
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
