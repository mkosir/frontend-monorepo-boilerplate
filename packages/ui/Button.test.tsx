import { screen, render } from '@testing-library/react';

import { Button } from './Button';

describe('Packages - UI', () => {
  describe('Button', () => {
    it('should render button when no props are present', () => {
      render(<Button />);

      expect(screen.getByText('Boop')).toBeInTheDocument();
    });
  });
});
