import Link from 'next/link';

import { Paths } from 'common/consts/paths';

export const Status404Page = () => {
  return (
    <div className="mt-24 text-center">
      <div className="text-xl font-medium">404ddd</div>
      <div className="text-md mb-4 mt-1 font-medium">Page not found</div>
      <img src="/assets/missing-piece.png" alt="404 page" className="mx-auto mb-10 w-40" />
      <Link href={Paths.home} className=" text-blue-400 hover:text-blue-500 hover:underline">
        Home
      </Link>
    </div>
  );
};
