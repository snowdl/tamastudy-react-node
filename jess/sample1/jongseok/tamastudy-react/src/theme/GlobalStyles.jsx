import { Global, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import React from 'react';
import mediaQuery from './mediaQuery';
import 'normalize.css';
import './font-family.css';
import 'swiper/css/swiper.css';

const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
        }
        html {
          font-size: 62.5%;

          ${mediaQuery(0)} {
            font-size: 45%;
          }

          ${mediaQuery(1)} {
            font-size: 50%;
          }

          ${mediaQuery(2)} {
            font-size: 62.5%;
          }

          ${mediaQuery(3)} {
            font-size: 75%;
          }
        }

        body > * {
          font-family: 'Nanum Gothic';
          all: unset;
        }

        .main-pagination .swiper-pagination-bullet {
          width: 1.5rem;
          height: 1.5rem;
          &-active {
            background-color: ${theme.colors.main.primary};
          }
        }
      `}
    />
  );
};
export default GlobalStyles;
