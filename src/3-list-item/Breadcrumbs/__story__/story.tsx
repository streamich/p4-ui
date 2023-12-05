import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Breadcrumbs from '..';
import {AvatarLabel} from '../../../atoms/AvatarLabel';

storiesOf('Molecules|Breadcrumbs', module)
  .add('Default', () => (
    <div style={{padding: 32}}>
      <Breadcrumbs
        crumbs={[
          {
            children: 'Home',
            to: '/',
          },
          {
            children: 'Settings',
            to: '/settings',
          },
        ]}
      />
    </div>
  ))
  .add('With icons', () => (
    <div style={{padding: 32}}>
      <Breadcrumbs
        crumbs={[
          {
            children: 'Home',
            to: '/',
          },
          {
            children: <AvatarLabel width={24}>Test</AvatarLabel>,
            to: '/settings',
            noHover: true,
          },
        ]}
      />
    </div>
  ));
