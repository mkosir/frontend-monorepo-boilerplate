import { useTheme } from '@mui/material';
import Tilt from 'react-parallax-tilt';
import { Button } from 'ui';

export type MontyHomeProps = {
  title: string;
  isTiltEnabled: boolean;
  onMontyHomeSelected: (isHome: boolean) => void;
};

type MontyHomeSelection = 'goat' | 'home';

export const MontyHome = ({ title, isTiltEnabled, onMontyHomeSelected }: MontyHomeProps) => {
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
    <Tilt tiltEnable={isTiltEnabled} tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.03} style={{ maxWidth: '400px' }}>
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#64b0ce17',
            margin: '14px',
            padding: '13px',
            borderRadius: '5px',
            boxShadow: '0 4px 8px 0 #3d9cc23b',
          }}
        >
          <h3>{title}</h3>
          <a href="https://en.wikipedia.org/wiki/Monty_Hall_problem" target="_blank" rel="noreferrer">
            Monty Home Problem
          </a>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '60%', marginTop: '12px' }}>
            <Button onClick={() => handleMontyHomeSelected('goat')}>Home 1</Button>
            <Button bgColor={theme.brand.green} onClick={() => handleMontyHomeSelected('home')}>
              Home 2
            </Button>
            <Button onClick={() => handleMontyHomeSelected('goat')}>Home 3</Button>
          </div>
        </div>
      </div>
    </Tilt>
  );
};
