import { Button } from 'ui';

import { ButtonsHome } from './components/ButtonsHome';

export const HomePage = () => {
  const name = 'test12';

  const test = `test333${name}` || 4;
  console.log('🔎 Log ~ HomePage ~ test', test);
  // if (test === null) {
  //   return <div></div>;
  // }

  // const test = "test333" + name;

  return (
    <div>
      <h1>Home</h1>
      <Button text="Boop" onClick={() => console.log('Boop')} />
      <ButtonsHome title="Home page feature - Buttons Stack" isTiltEnabled={true} />
    </div>
  );
};
