import { colors, createTheme } from '@mui/material';

export const theme = createTheme({
  brand: {
    blue: colors.blue[100],
    green: colors.green[400],
  },

  palette: {
    secondary: { main: '#1a9191' },
    // neutral: { main: '#FF5733' },
  },
});
