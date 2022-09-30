import { create } from '@storybook/theming';

import { getVersionInfo } from '../version/getVersionInfo';

export const theme = create({
  base: 'light',
  brandTitle: `Turborepo Boilerplate - UI ${getVersionInfo()}`,
  brandUrl: 'https://github.com/mkosir/turborepo-boilerplate',
});
