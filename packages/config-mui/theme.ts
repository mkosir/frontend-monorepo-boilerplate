import { colors, createTheme } from '@mui/material';

export const theme = createTheme({
  // Theme
  brand: {
    blue: colors.blue[100],
    green: colors.green[400],
  },

  // Palette
  palette: {
    secondary: { main: '#3289a8' },
    neutral: { main: '#FF5733' },
  },

  // Typography
  typography: {
    title1: {
      fontSize: 24,
      fontWeight: 700,
    },
  },

  // Breakpoints
  breakpoints: {
    values: {
      // default
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      // added
      mobile: 0,
      tablet: 640,
      desktop: 1024,
    },
  },

  // Components
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
