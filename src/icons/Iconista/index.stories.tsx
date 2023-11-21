import type {Meta, StoryObj} from '@storybook/react';
import {Iconista as Component} from '.';

const meta: Meta<typeof Text> = {
  title: 'Icons/Iconista',
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
    set: 'atlaskit',
    icon: 'code',
    width: 32,
    height: 32,
  },
};
