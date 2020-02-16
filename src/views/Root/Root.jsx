import React from 'react';
import Button from 'components/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <>
    <GlobalStyle />
    <h1>Hello</h1>
    <Button width="500px">Close / Save</Button>
    <Button>Close / Save</Button>
    <Button secondary>Close / Save</Button>
  </>
);

export default Root;
