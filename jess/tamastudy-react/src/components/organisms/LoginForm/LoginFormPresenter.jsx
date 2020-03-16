import React from 'react';
import Form from '../../atoms/Form';
import Input from '../../atoms/Input';
import Submit from '../../atoms/Submit';
import PropTypes from 'prop-types';

const LoginFormPresenter = ({ handleSubmit, handleChange, loginData, className, ...props }) => {
  return (
    <Form onSubmit={handleSubmit} className={className} {...props}>
      <Input
        onChange={handleChange}
        type={'text'}
        placeholder={'EMAIL'}
        value={loginData.email}
        name={'email'}
      />
      <Input
        onChange={handleChange}
        type={'password'}
        placeholder={'PASSWORD'}
        value={loginData.password}
        name={'password'}
      />
      <Submit
        type={'submit'}
        btnText={'로그인'}
        disabled={loginData.email.length < 5 && loginData.password.length < 2}
      />
    </Form>
  );
};

LoginFormPresenter.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  loginData: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default LoginFormPresenter;
