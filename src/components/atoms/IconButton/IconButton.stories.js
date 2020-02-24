import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import IconButton from './IconButton';

const YellowBackground = styled.div`
  background-color: ${({ theme }) => theme.note};
  display: grid;
  place-items: center;
  width: 500px;
  height: 500px;
`;

storiesOf('Atoms/IconButton', module)
  .addDecorator(story => <YellowBackground>{story()}</YellowBackground>)
  .add('Bulb', () => <IconButton active icon={bulbIcon} />)
  .add('Logout', () => <IconButton icon={logoutIcon} />)
  .add('Pen', () => <IconButton icon={penIcon} />)
  .add('Plus', () => <IconButton icon={plusIcon} />)
  .add('Twitter', () => <IconButton icon={twitterIcon} />);
