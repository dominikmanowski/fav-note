import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph';
import Heading from 'components/atoms/Heading';
import Button from 'components/atoms/Button';
import LinkIcon from 'assets/icons/link.svg';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => theme[activeColor]};

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 10px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 10px 0 0;
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitter};
  border-radius: 50%;
  position: absolute;
  top: 25px;
  right: 25px;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50%;
  background: white url(${LinkIcon});
  background-size: 50%;
  background-position: 50%;
  background-repeat: no-repeat;
  position: absolute;
  transform: translateY(-50%);
  right: 25px;
  top: 50%;
`;

const Card = ({ cardType }) => (
  <StyledWrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>Hello World</StyledHeading>
      <DateInfo>3 days</DateInfo>
      {cardType === 'twitter' && (
        <StyledAvatar src="https://avatars.io/twitter/mowinik" />
      )}
      {cardType === 'article' && <StyledLinkButton href="https://google.com" />}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet a
        neque provident tempore non optio itaque labore dolor suscipit voluptate
        quis recusandae perferendis perspiciatis ipsa ut quasi beatae id amet,
        sed voluptatem quod? Sequi velit officiis corrupti molestias ullam ipsum
        laudantium, nisi in accusantium eaque excepturi, voluptate animi
        incidunt ut?
      </Paragraph>
      <Button secondary>Remove</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.defaultProps = {
  cardType: 'note',
};

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

export default Card;
