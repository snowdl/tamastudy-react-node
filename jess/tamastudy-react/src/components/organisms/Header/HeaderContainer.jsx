import React from 'react';
import PropTypes from 'prop-types';
import HeaderPresenter from './HeaderPresenter';

const HeaderContainer = ({ isLoggedIn, handleLogOutFn }) => {
  return <HeaderPresenter isLoggedIn={isLoggedIn} handleLogOutFn={handleLogOutFn} />;
};

HeaderContainer.propTypes = {
  handleLogOutFn: PropTypes.func,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default HeaderContainer;
