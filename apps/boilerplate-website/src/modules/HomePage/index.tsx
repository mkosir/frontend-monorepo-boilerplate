import { Box, Typography } from '@mui/material';
import { Button } from 'ui-mui';

export const HomePage = () => {
  return (
    <Box m={5}>
      <Typography variant="h5">Home Page</Typography>
      <Button onClick={() => console.log('Boop')}>Boop</Button>
    </Box>
  );
};
