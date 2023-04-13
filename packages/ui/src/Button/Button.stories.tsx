import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from '.';

const baseArgs: ButtonProps = {
  children: 'Click Me',
  isDisabled: false,
  size: 'medium',
  bgColor: undefined,
  onClick: action('onClick'),
};

export default {
  component: Button,
  args: baseArgs,
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const LongText: Story = {
  args: { children: 'Really Looooong Text' },
};

export const Disabled: Story = {
  args: { isDisabled: true },
};

export const RedBgColor: Story = {
  args: { bgColor: 'red' },
};
