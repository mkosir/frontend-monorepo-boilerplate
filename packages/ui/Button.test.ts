import { screen, render } from '@testing-library/react';

import { Button } from './Button';

describe('Packages - UI', () => {
  describe('Button', () => {
    it('should not calculate tilt when disabled', () => {
      render(<Button />);

      expect(screen.getByText('Boop')).toBeInTheDocument();
    });
  });
});
