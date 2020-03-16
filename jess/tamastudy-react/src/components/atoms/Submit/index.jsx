import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Input from '../Input';
import theme from '../../../theme';

const Container = styled(Input)`
  border: 0;
  color: ${theme.colors.base.white};
  background-color: ${(props) =>
    props.disabled ? theme.colors.base.grey : theme.colors.main.primary};
  pointer-events: ${(props) => props.disabled && 'none'};
  cursor: ${(props) => !props.disabled && 'pointer'};
`;

const Submit = ({ btnText, disabled, className, ...props }) => {
  return <Container value={btnText} disabled={disabled} className={className} {...props} />;
};

Submit.propTypes = {
  btnText: PropTypes.string.isRequired,
  disabled: PropTypes.any,
  className: PropTypes.string,
};

export default Submit;
