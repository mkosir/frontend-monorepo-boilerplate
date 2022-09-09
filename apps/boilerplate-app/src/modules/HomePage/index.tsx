import { Button } from 'ui';

import { MontyHome } from './components/MontyHome';

export const HomePage = () => {
  // const test = "test333" + 1;

  // if (test === null) {
  //   return <div></div>;
  // }

  return (
    <div>
      <h1>Home2</h1>
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
