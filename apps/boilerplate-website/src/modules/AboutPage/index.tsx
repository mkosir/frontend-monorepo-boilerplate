import { Button } from 'ui-tailwind';

export const AboutPage = () => {
  return (
    <div className="m-5">
      <div className="text-md font-medium">About Page</div>
      <Button onClick={() => console.log('Boop')}>Boop</Button>
    </div>
  );
};
