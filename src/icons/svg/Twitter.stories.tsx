import type {Meta, StoryObj} from '@storybook/react';
import Component from './Twitter';

const meta: Meta<typeof Text> = {
  title: 'Icons/SVG/Twitter',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {},
};
