import { Button } from 'ui-tailwind';

import { MontyHome } from './components/MontyHome';

export const HomePage = () => {
  return (
    <div className="m-2">
      <h1 className="font-medium leading-tight text-xl text-blue-700">Home</h1>
      <Button text="Echo" className="my-2" onClick={() => console.log('Echo')} />
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
