import { create } from '@storybook/theming';
import { getVersionInfo } from 'utils-version';

export const theme = create({
  base: 'light',
  brandTitle: `Turborepo Boilerplate - Website (Tailwind) ${getVersionInfo()}`,
  brandUrl: 'https://github.com/mkosir/turborepo-boilerplate',
});
