import { Box, styled, alpha } from '@mui/material';

export const Content = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: theme.palette.text.primary,
  backgroundColor: alpha(theme.palette.primary.light, 0.17),
  [theme.breakpoints.down('tablet')]: {
    backgroundColor: theme.palette.warning.light,
  },
  padding: '25px',
  margin: '0 20px',
  maxWidth: '500px',
  borderRadius: '6px',
  boxShadow: theme.shadows[3],
}));
