import { Meta, StoryObj } from '@storybook/react';

import { MontyHome, MontyHomeProps } from '.';

const baseArgs: MontyHomeProps = {
  title: 'Home page (scoped) feature',
  isTiltEnabled: true,
};

export default {
  component: MontyHome,
  args: baseArgs,
} satisfies Meta<typeof MontyHome>;

type Story = StoryObj<typeof MontyHome>;

export const Default: Story = {};

export const CustomTitle: Story = {
  args: { title: 'Choose wisely' },
};

export const TiltDisabled: Story = {
  args: { isTiltEnabled: false },
};
