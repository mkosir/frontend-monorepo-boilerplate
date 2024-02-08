import { createLazyFileRoute } from '@tanstack/react-router';

import { AboutPage } from 'modules';

export const Route = createLazyFileRoute('/about')({
  component: AboutPage,
});
