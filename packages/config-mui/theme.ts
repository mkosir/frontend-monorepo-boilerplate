import { colors, createTheme } from '@mui/material';

const customFontFamily = "'Roboto', 'Helvetica', 'Arial', sans-serif";

export const theme = createTheme({
  // Theme
  brand: {
    blue: colors.blue[800],
    green: colors.green[400],
  },

  // Palette
  palette: {
    secondary: { main: '#3289a8' },
    neutral: { main: '#FF5733' },
  },

  // Typography
  typography: {
    fontFamily: customFontFamily,

    title1: {
      fontSize: 24,
      fontWeight: 700,
    },
    title2: {
      fontSize: 22,
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
    MuiTypography: {
      defaultProps: {
        fontFamily: customFontFamily,
      },
    },

    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
