import { MontyHome } from './components/MontyHome';

export const HomePage = () => {
  return (
    <div className="m-5">
      <h1 className="font-medium leading-tight text-xl text-black">Home Page</h1>
      <MontyHome
        title="Home page (specific) feature"
        isTiltEnabled={true}
        className="mt-5"
        onMontyHomeSelected={(isHome) =>
          isHome ? console.log('Congrats') : console.log('Sorry, better luck next time')
        }
      />
    </div>
  );
};
