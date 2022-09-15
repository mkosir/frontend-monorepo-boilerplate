import { MontyHome } from './components/MontyHome';

export const HomePage = () => {
  // const test = "test333" + 1;

  // if (test === null) {
  //   return <div></div>;
  // }

  return (
    <div>
      <h1>Home Page</h1>
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
