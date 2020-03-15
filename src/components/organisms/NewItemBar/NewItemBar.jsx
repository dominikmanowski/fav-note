import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import PageContext from 'context';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  border-left: 10px solid ${({ theme, activeColor }) => theme[activeColor]};
  z-index: 9999;
  position: fixed;
  display: flex;
  padding: 100px 90px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  border-radius: 20px;
  height: 30vh;
`;

const StyledInput = styled(Input)`
  margin-top: 30px;
`;

const NewItemBar = ({ isVisible }) => {
  const pageType = useContext(PageContext);
  return (
    <StyledWrapper isVisible={isVisible} activeColor={pageType}>
      <Heading big>Create new {pageType}</Heading>
      <StyledInput placeholder="title" />
      {pageType === 'twitters' && <StyledInput placeholder="twitter name" />}
      {pageType === 'articles' && <StyledInput placeholder="link" />}
      <StyledTextArea as="textarea" placeholder="description" />
      <Button activeColor={pageType}>Add Note</Button>
    </StyledWrapper>
  );
};

NewItemBar.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default NewItemBar;
