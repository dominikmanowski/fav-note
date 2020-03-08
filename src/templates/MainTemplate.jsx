import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyle from 'theme/GlobalStyle';
import theme from 'theme/mainTheme';
import PageContext from 'context';

const MainTemplate = ({ children }) => {
  const location = useLocation();
  const [cardType, setCardType] = useState('notes');

  useEffect(() => {
    const pageTypes = ['twitters', 'notes', 'articles'];
    const { pathname } = location;
    const [currentPage] = pageTypes.filter(page => pathname.includes(page));
    setCardType(currentPage);
  }, [location]);

  return (
    <PageContext.Provider value={cardType}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </PageContext.Provider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
