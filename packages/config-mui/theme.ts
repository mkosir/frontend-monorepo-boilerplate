import { colors, createTheme } from '@mui/material';

export const theme = createTheme({
  brand: {
    blue: colors.blue[100],
    green: colors.green[400],
  },

  palette: {
    secondary: { main: '#3289a8' },
    neutral: { main: '#FF5733' },
  },

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

  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
