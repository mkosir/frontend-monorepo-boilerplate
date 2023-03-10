import { Box, Typography } from '@mui/material';

import { MontyHome } from './components/MontyHome';

export const HomePage = () => {
  return (
    <Box m={5}>
      <Typography variant="h5">Home Page</Typography>
      <MontyHome
        title="Home page (specific) feature"
        isTiltEnabled={true}
        sx={{ mt: 3 }}
        onMontyHomeSelected={(isHome) =>
          isHome ? console.log('Congrats') : console.log('Sorry, better luck next time')
        }
      />
    </Box>
  );
};
