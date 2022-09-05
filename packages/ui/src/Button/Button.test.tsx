import { screen, render } from '@testing-library/react';

import { Button } from '.';

describe('packages', () => {
  describe('ui', () => {
    describe('Button', () => {
      it('should render button when no props are present', () => {
        render(<Button />);

        expect(screen.getByText('Boop')).toBeInTheDocument();
      });
    });
  });
});
