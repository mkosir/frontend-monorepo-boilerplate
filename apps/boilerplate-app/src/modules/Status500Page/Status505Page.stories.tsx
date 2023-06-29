import { Meta, StoryObj } from '@storybook/react';

import { Status500Page } from '.';

export default {
  component: Status500Page,
} satisfies Meta<typeof Status500Page>;

type Story = StoryObj<typeof Status500Page>;

export const Default: Story = {};
