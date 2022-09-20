import { Box } from '@mui/material';

export const Status500Page = () => {
  return (
    <Box textAlign="center" mt={24}>
      <h2>500</h2>
      <h4>Something went wrong</h4>
      <img src="/error-500.png" alt="something went wrong" width={400} />
    </Box>
  );
};
