import React from 'react';
import { css, keyframes } from '@emotion/core';
import Typo from '../../../atoms/Typo';
import theme from '../../../../theme';
import mediaQuery from '../../../../theme/mediaQuery';

const shakeIcon = keyframes`
  0%, 50% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(23deg);
  }
  75% {
    transform: rotate(-23deg);
  }
`;

const Intro = () => {
  return (
    <div
      css={css`
        ${mediaQuery(1)} {
          display: flex;
          justify-content: space-around;
        }
        ${mediaQuery(2)} {
          width: 1000px;
          margin: 0 auto;
          justify-content: space-between;
        }
      `}
    >
      {DATA.map((data) => {
        const { src, text } = data;
        return (
          <div
            key={src}
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              margin: ${theme.space * 6}px 0;
            `}
          >
            <div
              css={css`
                width: 40px;
                margin-bottom: ${theme.space * 2}px;
                &:hover {
                  animation: ${shakeIcon} 1000ms linear infinite;
                  animation-fill-mode: forwards;
                }
              `}
            >
              <img
                css={css`
                  width: 100%;
                  height: 100%;
                  object-fit: fill;
                `}
                src={src}
                alt="sample"
              />
            </div>
            <div
              css={css`
                width: 202px;
                word-break: break-all;
                ${mediaQuery(2)} {
                  width: 276px;
                }
              `}
            >
              <Typo
                variant="body2"
                css={css`
                  line-height: 1.5;
                  letter-spacing: 0.4px;
                `}
              >
                {text}
              </Typo>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Intro;

const DATA = [
  {
    src: 'https://cdns.iconmonstr.com/wp-content/assets/preview/2019/240/iconmonstr-bus-4.png',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus beatae accusantium, quas maxime, a, suscipit dolore perferendis quasi iure sed laboriosam unde dolorem deleniti explicabo ea exercitationem fugit repudiandae animi.',
  },
  {
    src: 'https://cdns.iconmonstr.com/wp-content/assets/preview/2019/240/iconmonstr-party-15.png',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus beatae accusantium, quas maxime, a, suscipit dolore perferendis quasi iure sed laboriosam unde dolorem deleniti explicabo ea exercitationem fugit repudiandae animi.',
  },
  {
    src: 'https://cdns.iconmonstr.com/wp-content/assets/preview/2019/240/iconmonstr-cat-2.png',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus beatae accusantium, quas maxime, a, suscipit dolore perferendis quasi iure sed laboriosam unde dolorem deleniti explicabo ea exercitationem fugit repudiandae animi.',
  },
];
