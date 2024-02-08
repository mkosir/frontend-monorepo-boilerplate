import { createLazyFileRoute } from '@tanstack/react-router';

import { HomePage } from 'modules';

export const Route = createLazyFileRoute('/')({
  component: HomePage,
});
