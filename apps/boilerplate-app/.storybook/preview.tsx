import { ThemeProvider, CssBaseline } from '@mui/material';
import { Story } from '@storybook/react';
import { theme } from 'config-mui';
import { baseParameters } from 'config-storybook';

export const parameters = baseParameters;

const withThemeDecorator = (Story: Story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);

export const decorators = [withThemeDecorator];
