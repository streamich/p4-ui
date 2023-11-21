import * as React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {TopNav as Component} from '.';

const meta: Meta<typeof Text> = {
  title: '5. Block/TopNav',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    children: 'Children ...',
  },
};
