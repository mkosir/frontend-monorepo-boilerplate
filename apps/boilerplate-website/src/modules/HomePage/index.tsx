import { Button } from 'ui-tailwind';

export const HomePage = () => {
  return (
    <div className="m-5">
      <div className="text-md font-medium">Home Page</div>
      <Button onClick={() => console.log('Click')}>Click</Button>
    </div>
  );
};
