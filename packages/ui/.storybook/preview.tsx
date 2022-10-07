import { ThemeProvider, CssBaseline } from '@mui/material';
import { Story } from '@storybook/react';
import { theme } from 'config-mui';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    // Description toggle
    // expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withThemeDecorator = (Story: Story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);

export const decorators = [withThemeDecorator];
