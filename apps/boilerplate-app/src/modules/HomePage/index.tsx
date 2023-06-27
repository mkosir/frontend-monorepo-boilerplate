import { Box, Typography } from '@mui/material';
import { Button } from 'ui';

import { MontyHome } from './components/MontyHome';

export const HomePage = () => {
  return (
    <Box m={5}>
      <Typography variant="h5">Home Page</Typography>
      <Button onClick={() => console.log('UI button')}>UI btn</Button>
      <MontyHome
        title="Home page (scoped) feature"
        isTiltEnabled={true}
        sx={{ mt: 3 }}
        onMontyHomeSelected={(isHome) =>
          isHome ? console.log('Congrats') : console.log('Sorry, better luck next time')
        }
      />
    </Box>
  );
};
