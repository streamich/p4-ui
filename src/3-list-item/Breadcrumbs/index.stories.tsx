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
      <Breadcrumb key={1}>Home</Breadcrumb>,
      <Breadcrumb key={2}>Products</Breadcrumb>,
      <Breadcrumb key={3}>Category</Breadcrumb>,
      <Breadcrumb key={4}>Product</Breadcrumb>,
    ],
  },
};
