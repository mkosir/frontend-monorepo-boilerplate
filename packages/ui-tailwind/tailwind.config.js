import config from 'config-tailwind/tailwind.config.js';

const tailwindConfig = {
  // prefix ui lib classes to avoid conflicting with the app
  // prefix: 'ui-',
  presets: [config],
};

// eslint-disable-next-line import/no-default-export
export default tailwindConfig;
