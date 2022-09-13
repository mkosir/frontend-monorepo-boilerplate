import { Button } from 'ui-tailwind';

import { MontyHome } from './components/MontyHome';

export const HomePage = () => {
  return (
    <div>
      <h1 className="text-brandRed bg-primary-500">Home</h1>
      <Button text="Echo" onClick={() => console.log('Echo')} />
      <MontyHome
        title="Home page (specific) feature"
        isTiltEnabled={true}
        onMontyHomeSelected={(isHome) =>
          isHome ? console.log('Congrats') : console.log('Sorry, better luck next time')
        }
      />
    </div>
  );
};
