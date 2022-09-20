import { Box, SxProps, useTheme } from '@mui/material';
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
        <h3>{title}</h3>
        <a href="https://en.wikipedia.org/wiki/Monty_Hall_problem" target="_blank" rel="noreferrer">
          Monty Home Problem
        </a>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '60%', marginTop: '12px' }}>
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
