import React from 'react';
import { css } from '@emotion/core';
import mediaQuery from '../../../theme/mediaQuery';

const Container = ({ children }) => {
  return (
    <div
      css={css`
        height: inherit;
        width: 100%;

        ${mediaQuery(2)} {
          width: 1000px;
          margin: 0 auto;
        }
      `}
    >
      {children}
    </div>
  );
};

export default Container;
