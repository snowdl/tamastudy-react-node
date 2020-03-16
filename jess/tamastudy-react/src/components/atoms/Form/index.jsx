import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.form`
  width: 100%;
`;

const Form = ({ onSubmit, className, children }) => {
  return (
    <Container
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
      className={className}
    >
      {children}
    </Container>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.any,
};

export default Form;
