// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['src/**/*.{ts,tsx}', `${__dirname}/../ui-tailwind/**/*.{ts,tsx}`],

  theme: {
    extend: {
      colors: {
        brandRed: colors.red[500],
        brandGreen: colors.green[500],
      },
    },
  },
  plugins: [],
};
