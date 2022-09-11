// PostCSS plugins - https://tailwindcss.com/docs/using-with-preprocessors

// Specifying the config is not necessary in most cases, included as an example of sharing same config across the entire monorepo

/* eslint-disable @typescript-eslint/no-unsafe-assignment  */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('tailwind-config/tailwind.config.js');

module.exports = {
  plugins: {
    tailwindcss: { config },
    autoprefixer: {},
  },
};
