import React from 'react';
import { css } from '@emotion/core';
import Typo from '../../../atoms/Typo';
import theme from '../../../../theme';
import mediaQuery from '../../../../theme/mediaQuery';

const News = () => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        ${mediaQuery(2)} {
          width: 1000px;
          margin: 0 auto;
        }
      `}
    >
      <div
        css={css`
          width: 100%;
          height: 140px;
          background-color: grey;
          position: relative;
          &::after {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            content: '+';
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            background-color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            font-weight: 900;
            cursor: pointer;
          }
        `}
      ></div>
      <div
        css={css`
          flex-basis: 100px;
          margin-left: ${theme.space * 2}px;
          margin-right: ${theme.space}px;
          ${mediaQuery(2)} {
            margin-left: ${theme.space * 3}px;
            flex-basis: 300px;
          }
        `}
      >
        <Typo
          variant="body3"
          css={css`
            line-height: 1.5;
            letter-spacing: 0.5px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 8;
            -webkit-box-orient: vertical;
            word-wrap: break-word;
          `}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi impedit ratione expedita
          sunt libero accusantium illum labore vero modi quidem possimus odio qui architecto
          blanditiis, quae veniam tempore quas! Sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Commodi impedit ratione expedita sunt libero accusantium illum labore
          vero modi quidem possimus odio qui architecto blanditiis, quae veniam tempore quas! Sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi impedit ratione expedita
          sunt libero accusantium illum labore vero modi quidem possimus odio qui architecto
        </Typo>
      </div>
    </div>
  );
};

export default News;
