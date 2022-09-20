import { Box } from '@mui/material';

export const Status404Page = () => {
  return (
    <Box textAlign="center" mt={24}>
      <h2>404</h2>
      <h4>Page not found</h4>
      <img src="/error-400.png" alt="page not found" width={200} />
    </Box>
  );
};
