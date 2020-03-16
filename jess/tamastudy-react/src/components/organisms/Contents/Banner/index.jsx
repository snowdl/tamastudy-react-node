import React from 'react';
import { css } from '@emotion/core';
import mediaQuery from '../../../../theme/mediaQuery';
import theme from '../../../../theme';

const DATA = [
  'https://brandavenue.r10s.jp/img/brand/1040.jpg',
  'https://brandavenue.r10s.jp/img/brand/8785.jpg',
  'https://brandavenue.r10s.jp/img/brand/1030.jpg',
  'https://brandavenue.r10s.jp/img/brand/7364.jpg',
  'https://brandavenue.r10s.jp/img/brand/8849.jpg',
  'https://brandavenue.r10s.jp/img/brand/7415.jpg',
];

const Banner = () => {
  return (
    <div
      css={css`
        box-sizing: border-box;
        padding: 0 ${theme.space}px;
        display: grid;
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        align-items: center;
        justify-content: center;
        align-content: center;
        grid-gap: ${theme.space}px;
        ${mediaQuery(2)} {
          width: 1000px;
          margin: 0 auto;
          padding: 0;
          grid-template-columns: repeat(6, minmax(160px, 1fr));
        }
      `}
    >
      {DATA.map((data) => (
        <div
          key={data}
          css={css`
            width: 100%;
            box-sizing: border-box;
            border: 1px solid ${theme.colors.base.grey};
            ${mediaQuery(2)} {
              width: 100%;
            }
          `}
        >
          <img
            src={data}
            alt="banner"
            css={css`
              width: 100%;
              height: 100%;
              object-fit: fill;
            `}
          />
        </div>
      ))}
    </div>
  );
};

export default Banner;
