// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('config-tailwind/tailwind.config.js');

module.exports = {
  // prefix ui lib classes to avoid conflicting with the app
  // prefix: 'ui-',
  presets: [config],
};
