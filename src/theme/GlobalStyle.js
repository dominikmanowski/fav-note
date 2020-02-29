import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Quicksand:300,600&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    padding-left: 150px; 
    font-family: "Quicksand", sans-serif;
    font-size: 1.6rem;
    color: hsl(0, 0%, 15%);
  }
`;

export default GlobalStyle;
