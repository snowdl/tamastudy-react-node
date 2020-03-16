import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../../components/organisms/LoginForm';

const Login = ({ handleLogInFn }) => {
  return <LoginForm handleLogInFn={handleLogInFn} />;
};

Login.propTypes = {
  handleLogInFn: PropTypes.func,
};

export default Login;
