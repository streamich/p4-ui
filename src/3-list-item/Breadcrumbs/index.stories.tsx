import * as React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Breadcrumbs as Component} from '.';
import {Breadcrumb} from './Breadcrumb';

const meta: Meta<typeof Component> = {
  title: '3. List item/Breadcrumbs',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    crumbs: [
      <Breadcrumb>Home</Breadcrumb>,
      <Breadcrumb>Products</Breadcrumb>,
      <Breadcrumb>Category</Breadcrumb>,
      <Breadcrumb>Product</Breadcrumb>,
    ],
  },
};
