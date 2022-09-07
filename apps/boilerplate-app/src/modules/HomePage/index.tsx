import { Button } from 'ui';

import { MontyHome } from './components/MontyHome';

export const HomePage = () => {
  // if (test === null) {
  //   return <div></div>;
  // }

  // const test = "test333" + name;

  return (
    <div>
      <h1>Home</h1>
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
