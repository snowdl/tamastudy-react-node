import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.input`
  width: 100%;
  height: 40px;
  font-size: 2rem;
  font-weight: 900;
  padding: 10px 20px;
  outline: none;
`;

const Input = ({
  onChange,
  type = 'text',
  placeholder = 'name',
  value,
  name,
  className,
  ...props
}) => {
  return (
    <Container
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      className={className}
      {...props}
    />
  );
};

Input.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  name: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
