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

      keyframes: {
        'text-appear': {
          '0%': { opacity: 0, transform: 'translateY(-50%)' },
          '100%': { opacity: 1, transform: 'translateY(0%)' },
        },
      },
      animation: {
        'text-appear': 'text-appear 2.5s 1',
      },
    },
  },

  plugins: [],
};
