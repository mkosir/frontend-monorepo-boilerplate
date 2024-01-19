import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from 'config-mui';

// import { baseStorybookPreviewMui } from 'config-storybook';

// Uncomment when issue is fixed - https://github.com/storybookjs/storybook/issues/23604
// export default baseStorybookPreviewMui;

// eslint-disable-next-line import/no-default-export
export default {
  decorators: [
    // @ts-expect-error Remove when issue is fixed - https://github.com/storybookjs/storybook/issues/23604
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
};
