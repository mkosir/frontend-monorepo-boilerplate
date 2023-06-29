import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { MontyHome, MontyHomeProps } from '.';

const baseArgs: MontyHomeProps = {
  title: 'Home page (scoped) feature',
  openDoorNo: null,
  message: null,
  isTiltEnabled: true,
  onMontyHomeSelected: action('onMontyHomeSelected'),
};

export default {
  component: MontyHome,
  args: baseArgs,
} satisfies Meta<typeof MontyHome>;

type Story = StoryObj<typeof MontyHome>;

export const Default: Story = {};

export const Win: Story = {
  args: { message: 'Congrats! 🚗' },
};

export const Loss: Story = {
  args: { message: 'Sorry, better luck next time. Baaa 🐐' },
};

export const TiltDisabled: Story = {
  args: { isTiltEnabled: false },
};
