import { Box, Link, SxProps, Typography, useTheme } from '@mui/material';
import Tilt from 'react-parallax-tilt';
import { Button } from 'ui';

import { TiltContent } from './styled';

export type MontyHomeProps = {
  title: string;
  isTiltEnabled: boolean;
  sx?: SxProps;
  onMontyHomeSelected: (isHome: boolean) => void;
};

type MontyHomeSelection = 'goat' | 'home';

export const MontyHome = ({ title, isTiltEnabled, sx, onMontyHomeSelected }: MontyHomeProps) => {
  const theme = useTheme();

  const handleMontyHomeSelected = (montyHomeSelection: MontyHomeSelection) => {
    if (montyHomeSelection === 'home') {
      console.log('Always go with option 2!');
      onMontyHomeSelected(true);
      return;
    }

    console.log('Maaah!');
    onMontyHomeSelected(false);
  };

  return (
    <Tilt tiltEnable={isTiltEnabled} tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.03} style={{ maxWidth: '600px' }}>
      <TiltContent sx={sx}>
        <Typography variant="h6">{title}</Typography>
        <Link href="https://en.wikipedia.org/wiki/Monty_Hall_problem" target="_blank" rel="noreferrer">
          Monty Home Problem
        </Link>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '60%', marginTop: 2 }}>
          <Button onClick={() => handleMontyHomeSelected('goat')}>Home 1</Button>
          <Button bgColor={theme.brand.green} onClick={() => handleMontyHomeSelected('home')}>
            Home 2
          </Button>
          <Button onClick={() => handleMontyHomeSelected('goat')}>Home 3</Button>
        </Box>
      </TiltContent>
    </Tilt>
  );
};
