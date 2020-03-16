import React from 'react';
import { css } from '@emotion/core';
import mediaQuery from '../../../../theme/mediaQuery';

const Slider = () => {
  return (
    <div
      css={css`
        width: 100%;
        height: 180px;
        background-color: grey;
        ${mediaQuery(2)} {
          width: 1000px;
          margin: 0 auto;
        }
      `}
    />
  );
};

export default Slider;
