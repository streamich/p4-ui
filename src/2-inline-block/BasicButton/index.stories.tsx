import * as React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {BasicButton as Component} from '.';
import IconSvgClose from '../../icons/svg/Close';

const meta: Meta<typeof Component> = {
  title: '2. Inline Block/BasicButton',
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
    children: <IconSvgClose />,
    fill: true,
  },
};

export const Stretched: StoryObj<typeof meta> = {
  args: {
    children: 'Hello',
    fill: true,
    width: 'auto',
    compact: true,
  },
};
