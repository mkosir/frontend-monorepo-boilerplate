import { Box, Typography } from '@mui/material';

export const Status500Page = () => {
  return (
    <Box textAlign="center" mt={24}>
      <Typography variant="title2">500</Typography>
      <Typography variant="h6" mt={1} mb={2}>
        Something went wrong
      </Typography>
      <img src="/assets/teddy-bear.png" alt="something went wrong" width={250} />
    </Box>
  );
};
