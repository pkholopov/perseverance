/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      'nasalization': ['Nasalization', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

