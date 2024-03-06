import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { MontyHome } from '.';

describe('apps', () => {
  describe('boilerplate-app', () => {
    describe('HomePage', () => {
      describe('components', () => {
        describe('MontyHome', () => {
          it('should render title, subtitle and buttons when props are passed', () => {
            render(<MontyHome title="Home page (scoped) feature" isTiltEnabled={false} />);

            const buttons = screen.getAllByRole('button');

            expect(screen.getByText('Home page (scoped) feature')).toBeInTheDocument();
            expect(screen.getByText('Monty Home Problem')).toBeInTheDocument();
            expect(buttons.length).toBe(3);
          });

          it('should lose the game when incorrect doors are selected', async () => {
            render(<MontyHome title="Home page (scoped) feature" isTiltEnabled={false} />);

            const buttonsInitial = screen.getAllByRole('button');
            expect(buttonsInitial.length).toBe(3);

            const goatButton = screen.getByRole('button', { name: 'Home 1' });
            await userEvent.click(goatButton);

            const buttonsFirstPick = screen.getAllByRole('button');
            expect(buttonsFirstPick.length).toBe(2);

            expect(screen.getByRole('button', { name: 'Home 1' })).toBeInTheDocument();
            expect(screen.getByRole('button', { name: 'Home 2' })).toBeInTheDocument();
            expect(screen.getByText('🐐')).toBeInTheDocument();

            await userEvent.click(goatButton);

            const buttonsSecondPick = screen.queryAllByRole('button');
            expect(buttonsSecondPick.length).toBe(0);

            expect(screen.getByText('Sorry, better luck next time. Baaa 🐐')).toBeInTheDocument();
          });

          it('should won the game when correct doors are selected', async () => {
            render(<MontyHome title="Home page (scoped) feature" isTiltEnabled={false} />);

            const buttonsInitial = screen.getAllByRole('button');
            expect(buttonsInitial.length).toBe(3);

            const carButton = screen.getByRole('button', { name: 'Home 2' });
            await userEvent.click(carButton);

            const buttonsFirstPick = screen.getAllByRole('button');
            expect(buttonsFirstPick.length).toBe(2);

            expect(screen.getByText('🐐')).toBeInTheDocument();

            await userEvent.click(carButton);

            const buttonsSecondPick = screen.queryAllByRole('button');
            expect(buttonsSecondPick.length).toBe(0);

            expect(screen.getByText('Congrats! 🚗')).toBeInTheDocument();
          });
        });
      });
    });
  });
});
