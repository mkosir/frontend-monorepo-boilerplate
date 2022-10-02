import { Story, Meta } from '@storybook/react';

import { Version, VersionProps } from '.';

export default {
  component: Version,
  title: 'Version',
} as Meta;

const base: VersionProps = {
  version: 'v1.0.18',
};

const Template: Story<VersionProps> = (args) => <Version {...base} {...args} />;

export const Production = Template.bind({});
Production.args = base;
Production.storyName = 'Production (tag)';

export const Stage = Template.bind({});
const StageArgs: VersionProps = {
  version: 'Main [f076db8]',
};
Stage.args = StageArgs;
Stage.storyName = 'Stage (branch & commit)';

export const LocalDev = Template.bind({});
const LocalArgs: VersionProps = {
  version: 'Local build',
};
LocalDev.args = LocalArgs;
