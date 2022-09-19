import { screen } from '@testing-library/react';
import { renderWithTheme } from 'test-utils';

import { HomePage } from '.';

describe('apps', () => {
  describe('boilerplate-website', () => {
    describe('HomePage', () => {
      it('should render home page when no props are present', () => {
        renderWithTheme(<HomePage />);

        expect(screen.getByText('Home')).toBeInTheDocument();
      });
    });
  });
});
