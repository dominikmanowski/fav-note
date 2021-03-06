import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar';

const UserPageTemplate = ({ children }) => (
  <>
    <Sidebar />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOf([PropTypes.element, PropTypes.node]).isRequired,
};

export default UserPageTemplate;
