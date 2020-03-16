import React, { useState } from 'react';
import LoginFormPresenter from './LoginFormPresenter';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const LoginFormContainer = ({ history, handleLogInFn }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = () => {
    if (loginData.email.length > 5 && loginData.password.length > 2) {
      handleLogInFn();
      history.push('/');
    }
  };

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  return (
    <LoginFormPresenter
      loginData={loginData}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
};

LoginFormContainer.propTypes = {
  logInFn: PropTypes.func,
};

export default withRouter(LoginFormContainer);
