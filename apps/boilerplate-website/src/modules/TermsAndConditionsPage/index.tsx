import { Box, Typography } from '@mui/material';
import { Button } from 'ui-mui';

export const TermsAndConditionsPage = () => {
  return (
    <Box m={5}>
      <Typography variant="h5">Terms And Conditions Page</Typography>
      <Button onClick={() => console.log('Boop')}>Boop</Button>
    </Box>
  );
};
