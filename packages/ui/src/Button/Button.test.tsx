import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from '.';

describe('packages', () => {
  describe('ui', () => {
    describe('Button', () => {
      it('should render button with text content when passed in props', () => {
        const onClick = jest.fn();
        const btnContent = 'Click Me';

        render(<Button onClick={onClick}>{btnContent}</Button>);

        expect(screen.getByRole('button', { name: btnContent })).toBeInTheDocument();
        expect(onClick).not.toBeCalled();
      });

      it('should call onClick prop when clicked', async () => {
        const onClick = jest.fn();
        const btnContent = 'Click Me';

        render(<Button onClick={onClick}>{btnContent}</Button>);

        const button = screen.getByRole('button', { name: btnContent });
        await userEvent.click(button);

        expect(onClick).toBeCalled();
      });
    });
  });
});
