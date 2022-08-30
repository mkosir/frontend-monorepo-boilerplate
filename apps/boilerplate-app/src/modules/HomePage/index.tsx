import { Button } from 'ui';

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
      <Button />
    </div>
  );
};
