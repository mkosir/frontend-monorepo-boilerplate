import { ThemeProvider, CssBaseline } from '@mui/material';
import { Preview } from '@storybook/react';
import { theme } from 'config-mui';

export const baseStorybookPreview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      // Description toggle
      // expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const baseStorybookPreviewMui: Preview = {
  ...baseStorybookPreview,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
};
