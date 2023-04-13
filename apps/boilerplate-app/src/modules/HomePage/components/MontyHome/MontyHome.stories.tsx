import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { MontyHome, MontyHomeProps } from '.';

const baseArgs: MontyHomeProps = {
  title: 'Home page (specific) feature',
  isTiltEnabled: true,
  sx: undefined,
  onMontyHomeSelected: action('onMontyHomeSelected'),
};

export default {
  component: MontyHome,
  args: baseArgs,
} satisfies Meta<typeof MontyHome>;

type Story = StoryObj<typeof MontyHome>;

export const Default: Story = {};

export const TiltDisabled: Story = {
  args: { isTiltEnabled: false },
};
