import { Box } from '@mui/material';
import { Button } from 'ui';

export const HomePage = () => {
  // const test = "test333" + 1;

  // if (test === null) {
  //   return <div></div>;
  // }

  return (
    <Box m={5}>
      <h1>Home</h1>
      <Button onClick={() => console.log('Boop')}>Boop</Button>
    </Box>
  );
};
