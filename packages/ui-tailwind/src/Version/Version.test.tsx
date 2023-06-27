import { screen, render } from '@testing-library/react';

import { Version } from '.';

describe('packages', () => {
  describe('ui', () => {
    describe('Version', () => {
      it('should render version component when version is passed', () => {
        render(<Version version="v1.0.18" />);

        expect(screen.getByText('v1.0.18')).toBeInTheDocument();
      });
    });
  });
});
