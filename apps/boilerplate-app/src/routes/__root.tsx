import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import { Version } from 'ui-tailwind';
import { getVersionInfo } from 'utils-version';

import { Status404Page } from 'modules';

export const Route = createRootRoute({
  component: () => (
    <>
      <Helmet>
        <meta name="version" content={getVersionInfo()} />
      </Helmet>
      <div className="mb-5 mt-3 text-center">
        <div className="text-lg font-medium">Monorepo Boilerplate - App (Vite/Tailwind)</div>
        <div className="flex gap-4 justify-center text-blue-900">
          <Link to="/" className="hover:text-blue-950 [&.active]:font-bold">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-950 [&.active]:font-bold">
            About
          </Link>
        </div>
        <Version version={getVersionInfo()} />
      </div>
      <div className="p-5">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: () => <Status404Page />,
});

const TanStackRouterDevtoolsLazy = import.meta.env.PROD
  ? () => null
  : lazy(() =>
      import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools,
      })),
    );

const TanStackRouterDevtools = () => (
  <Suspense>
    <TanStackRouterDevtoolsLazy />
  </Suspense>
);
