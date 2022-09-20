import { Box, Typography } from '@mui/material';
import { Button } from 'ui';

export const HomePage = () => {
  // const test = "test333" + 1;

  // if (test === null) {
  //   return <div></div>;
  // }

  return (
    <Box m={5}>
      <Typography variant="h5">Home Page</Typography>
      <Button onClick={() => console.log('Boop')}>Boop</Button>
    </Box>
  );
};
