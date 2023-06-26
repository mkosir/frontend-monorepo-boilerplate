import { Meta, StoryObj } from '@storybook/react';

import { Version } from '.';

export default {
  component: Version,
} satisfies Meta<typeof Version>;

type Story = StoryObj<typeof Version>;

export const Production: Story = {
  args: { version: 'v1.0.18' },
  name: 'Production (git tag)',
};

export const Stage: Story = {
  args: { version: 'Main [f076db8]' },
  name: 'Stage (git branch & commit)',
};

export const Local: Story = {
  args: { version: 'Local build' },
  name: 'Local development',
};
