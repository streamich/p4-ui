import type {Meta, StoryObj} from '@storybook/react';
import Component from './More';

const meta: Meta<typeof Text> = {
  title: 'Icons/SVG/More',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
  },
};
