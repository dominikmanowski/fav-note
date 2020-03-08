import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';
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
  border: 5px solid ${({ theme }) => theme.twitters};
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

const Card = ({
  id,
  cardType,
  title,
  created,
  twitterName,
  articleUrl,
  content,
  removeItem,
}) => {
  const [redirect, setRedirect] = useState(false);

  const handleClick = () => setRedirect(true);

  return redirect ? (
    <Redirect to={`${cardType}/${id}`} />
  ) : (
    <StyledWrapper onClick={handleClick}>
      <InnerWrapper activeColor={cardType}>
        <StyledHeading>{title}</StyledHeading>
        <DateInfo>{created}</DateInfo>
        {cardType === 'twitters' && (
          <StyledAvatar src={`https://avatars.io/twitter/${twitterName}`} />
        )}
        {cardType === 'articles' && <StyledLinkButton href={articleUrl} />}
      </InnerWrapper>
      <InnerWrapper flex>
        <Paragraph>{content}</Paragraph>
        <Button secondary onClick={() => removeItem(cardType, id)}>
          Remove
        </Button>
      </InnerWrapper>
    </StyledWrapper>
  );
};

Card.defaultProps = {
  cardType: 'notes',
  twitterName: null,
  articleUrl: null,
};

Card.propTypes = {
  cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
});

export default connect(null, mapDispatchToProps)(Card);
