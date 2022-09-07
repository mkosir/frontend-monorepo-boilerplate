import { Button } from 'ui';

export const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <Button text="Boop" onClick={() => console.log('Boop')} />
    </div>
  );
};
