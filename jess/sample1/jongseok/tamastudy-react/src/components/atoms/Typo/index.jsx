import React from 'react';
import { css } from '@emotion/core';
import theme from '../../../theme';

const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body1: 'p',
  body2: 'p',
  body3: 'p',
  caption: 'span',
  navTitle: 'h3',
};

const Typo = ({ variant, color, display, component, children, ...props }) => {
  const Component = component ?? defaultVariantMapping[variant];
  return (
    <Component
      css={
        (css`
          color: ${color};
          display: ${display};
        `,
        { ...theme.typo[variant] })
      }
      {...props}
    >
      {children}
    </Component>
  );
};

Typo.defaultProps = {
  variant: 'body3',
  color: theme.colors.base.black,
  display: 'block',
};

export default Typo;
