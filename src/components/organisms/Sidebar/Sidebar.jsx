import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import IconButton from 'components/atoms/IconButton';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logoIcon from 'assets/icons/logo.svg';
import PageContext from 'context';

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : theme.note};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

const StyledLogoutButton = styled(IconButton)`
  margin-top: auto;
`;

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Sidebar = () => {
  const pageType = useContext(PageContext);
  return (
    <StyledWrapper activeColor={pageType}>
      <StyledLogoLink to="/" />
      <StyledLinksList>
        <li>
          <IconButton
            as={NavLink}
            to="/notes"
            icon={penIcon}
            activeclass="active"
          />
        </li>
        <li>
          <IconButton
            as={NavLink}
            to="/twitters"
            icon={twitterIcon}
            activeclass="active"
          />
        </li>
        <li>
          <IconButton
            as={NavLink}
            to="/articles"
            icon={bulbIcon}
            activeclass="active"
          />
        </li>
      </StyledLinksList>
      <StyledLogoutButton as={NavLink} to="/login" icon={logoutIcon} />
    </StyledWrapper>
  );
};

export default Sidebar;
