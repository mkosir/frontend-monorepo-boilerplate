import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DoorNo, MontyHome } from '.';

describe('apps', () => {
  describe('boilerplate-app', () => {
    describe('HomePage', () => {
      describe('components', () => {
        describe('MontyHome', () => {
          it('should render title, subtitle and buttons when props are passed', () => {
            const onMontyHomeSelected = jest.fn();

            render(
              <MontyHome
                title="Home page (scoped) feature"
                openDoorNo={null}
                message={null}
                isTiltEnabled={false}
                onMontyHomeSelected={onMontyHomeSelected}
              />,
            );

            const buttons = screen.getAllByRole('button');

            expect(screen.getByText('Home page (scoped) feature')).toBeInTheDocument();
            expect(screen.getByText('Monty Home Problem')).toBeInTheDocument();
            expect(buttons.length).toBe(3);
            expect(onMontyHomeSelected).not.toBeCalled();
          });

          it('should call prop with truthful argument when correct home button is clicked', async () => {
            const onMontyHomeSelected = jest.fn();

            render(
              <MontyHome
                title="Home page (scoped) feature"
                openDoorNo={null}
                message={null}
                isTiltEnabled={false}
                onMontyHomeSelected={onMontyHomeSelected}
              />,
            );

            const buttonHome2 = screen.getByRole('button', { name: 'Home 2' });
            await userEvent.click(buttonHome2);

            expect(onMontyHomeSelected).toBeCalledWith<[DoorNo]>(2);
          });
        });
      });
    });
  });
});
