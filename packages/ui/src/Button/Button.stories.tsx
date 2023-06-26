import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from '.';

const baseArgs: ButtonProps = {
  children: 'Click Me',
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
