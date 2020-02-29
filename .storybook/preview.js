import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme/mainTheme';
import StoryRouter from 'storybook-react-router';

addDecorator(StoryRouter());
addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
