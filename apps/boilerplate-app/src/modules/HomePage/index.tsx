import { MontyHome } from './components/MontyHome';

export const HomePage = () => {
  return (
    <div>
      <div className="mb-3 text-lg font-medium">Home Page</div>
      <MontyHome title="Home page (scoped) feature" isTiltEnabled={true} />
    </div>
  );
};
