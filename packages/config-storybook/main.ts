import type { StorybookConfig } from '@storybook/nextjs';

export const baseNextJsStorybookConfig: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  staticDirs: ['../public'],
  typescript: { reactDocgen: 'react-docgen-typescript' },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
};
