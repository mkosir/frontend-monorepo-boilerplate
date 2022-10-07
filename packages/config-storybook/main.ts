import path from 'path';

import { StorybookConfig } from '@storybook/core-common';

export const baseStorybookConfig: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  staticDirs: ['../public'],
  typescript: { reactDocgen: 'react-docgen-typescript' },
  core: {
    builder: 'webpack5',
  },
  webpackFinal: (config) => {
    // Resolve absolute imports
    config.resolve?.modules?.push(path.resolve(process.cwd(), 'src'));

    return config;
  },
};
