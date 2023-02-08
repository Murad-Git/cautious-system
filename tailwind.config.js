/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5BA4A4',
        'neutral-bg': '#EFFAFA',
        'neutral-filter-table': '#EEF6F6',
        'neutral-dark': '#7B8E8E',
        'neutral-very-dark': '#2C3A3A',
        dark: '#222222',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
