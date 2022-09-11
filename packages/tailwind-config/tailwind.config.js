// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brandBlue: colors.blue[500],
        brandRed: colors.red[500],
      },
    },
  },
  plugins: [],
};
