import { Box } from '@mui/material';
import { Button } from 'ui';

export const TermsAndConditionsPage = () => {
  return (
    <Box m={5}>
      <h1>Terms And Conditions</h1>
      <Button onClick={() => console.log('Boop')}>Boop</Button>
    </Box>
  );
};
