import Tilt from 'react-parallax-tilt';
import { Button } from 'ui-tailwind';

export type MontyHomeProps = {
  title: string;
  isTiltEnabled: boolean;
  className?: string;
  onMontyHomeSelected: (isHome: boolean) => void;
};

type MontyHomeSelection = 'goat' | 'home';

export const MontyHome = ({ title, isTiltEnabled, className, onMontyHomeSelected }: MontyHomeProps) => {
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
    <Tilt tiltEnable={isTiltEnabled} tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.03} className="max-w-lg">
      <div className={`${className ?? ''} bg-blue-50 p-12 rounded-lg shadow-lg flex flex-col items-center`}>
        <h2>{title}</h2>
        <a
          href="https://en.wikipedia.org/wiki/Monty_Hall_problem"
          target="_blank"
          rel="noreferrer"
          className="my-1 no-underline hover:underline text-blue-600 hover:text-blue-800 visited:text-blue-600"
        >
          Monty Home Problem
        </a>
        <div className="flex space-x-5 mt-4">
          <Button text="Home 1" onClick={() => handleMontyHomeSelected('goat')} />
          <Button text="Home 2" onClick={() => handleMontyHomeSelected('home')} />
          <Button text="Home 3" onClick={() => handleMontyHomeSelected('goat')} />
        </div>
      </div>
    </Tilt>
  );
};
