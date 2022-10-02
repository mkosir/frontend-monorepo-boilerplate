import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils-test';

import { Version } from '.';

describe('packages', () => {
  describe('ui', () => {
    describe('Version', () => {
      it('should render version component when version is passed', () => {
        renderWithTheme(<Version version="v1.0.18" />);

        expect(screen.getByText('v1.0.18')).toBeInTheDocument();
      });
    });
  });
});
