import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './Heading';

storiesOf('Atoms/Heading', module)
  .add('Normal', () => <Heading>Normal Heading</Heading>)
  .add('Big', () => <Heading big>Big heading</Heading>);
