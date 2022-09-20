import { Box } from '@mui/material';
import { Button } from 'ui';

export const AboutPage = () => {
  return (
    <Box m={5}>
      <h1>About</h1>
      <Button onClick={() => console.log('Boop')}>Boop</Button>
    </Box>
  );
};
