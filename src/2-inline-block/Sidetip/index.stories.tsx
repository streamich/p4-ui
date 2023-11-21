import type {Meta, StoryObj} from '@storybook/react';
import {Sidetip as Component} from '.';

const meta: Meta<typeof Text> = {
  title: '2. Inline Block/Sidetip',
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
    children: 'Contents',
  },
};
