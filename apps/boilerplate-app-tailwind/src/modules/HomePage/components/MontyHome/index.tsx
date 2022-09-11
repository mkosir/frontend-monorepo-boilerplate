import Tilt from 'react-parallax-tilt';
import { Button } from 'ui-tailwind';

export type MontyHomeProps = {
  title: string;
  isTiltEnabled: boolean;
  onMontyHomeSelected: (isHome: boolean) => void;
};

type MontyHomeSelection = 'goat' | 'home';

export const MontyHome = ({ title, isTiltEnabled, onMontyHomeSelected }: MontyHomeProps) => {
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
      <div
        className="flex min-h-screen flex-col items-center justify-center py-2 bg-green-600"
        style={{
          backgroundColor: '#64b0ce17',
          margin: '14px',
          padding: '13px',
          borderRadius: '5px',
          boxShadow: '0 4px 8px 0 #3d9cc23b',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2>{title}</h2>
          <a href="https://en.wikipedia.org/wiki/Monty_Hall_problem" target="_blank" rel="noreferrer">
            Monty Home Problem
          </a>
          <div style={{ display: 'flex' }}>
            <Button text="Home 1" onClick={() => handleMontyHomeSelected('goat')} />
            <Button text="Home 2" onClick={() => handleMontyHomeSelected('home')} />
            <Button text="Home 3" onClick={() => handleMontyHomeSelected('goat')} />
          </div>
        </div>
      </div>
    </Tilt>
  );
};
