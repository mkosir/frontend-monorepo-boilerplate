/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{ts,tsx}', `${__dirname}/../ui-tailwind/**/*.{ts,tsx}`],
  // content: ['src/**/*.{ts,tsx}'],

  theme: {
    extend: {
      colors: {
        brandBlue: '#243c5a',
        brandGreen: '#449e48',
      },
    },
  },

  plugins: [],
};
