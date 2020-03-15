import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import PageContext from 'context';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import IconButton from 'components/atoms/IconButton';
import plusIcon from 'assets/icons/plus.svg';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';

const StyledWrapper = styled.div`
  position: relative;
  padding: 25px 150px 25px 70px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  &::first-letter {
    text-transform: uppercase;
  }
`;
const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-size: ${({ theme }) => theme.bold};
`;

const StyledIconButton = styled(IconButton)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  background-size: 35%;
  border-radius: 50px;
  z-index: 10000;
  transform: rotate(${({ isVisible }) => (isVisible ? '135deg' : '0')});
  transition: transform 0.25s ease-in-out;

  &:focus {
    outline: 0;
  }
`;

const GridTemplate = ({ children }) => {
  const pageType = useContext(PageContext);
  const [isNewItemBarVisible, setNewItemBarVisible] = useState(false);
  const handleNewItemBarToggle = () =>
    setNewItemBarVisible(prevState => !prevState);
  return (
    <UserPageTemplate>
      <StyledWrapper>
        <StyledPageHeader>
          <Input search placeholder="Search" />
          <StyledHeading big>{pageType}</StyledHeading>
          <StyledParagraph>6 {pageType}</StyledParagraph>
        </StyledPageHeader>
        <StyledGrid>{children}</StyledGrid>
        <StyledIconButton
          onClick={handleNewItemBarToggle}
          icon={plusIcon}
          activeColor={pageType}
          isVisible={isNewItemBarVisible}
        />
        <NewItemBar isVisible={isNewItemBarVisible} />
      </StyledWrapper>
    </UserPageTemplate>
  );
};

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default GridTemplate;
