import React from 'react';
import Typo from '../../atoms/Typo';
import { css } from '@emotion/core';
import theme from '../../../theme';
import PropTypes from 'prop-types';

const ContentTitle = ({ position = 'center', text, ...props }) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: ${position};
        box-sizing: border-box;
        padding: ${theme.space}px 0 ${theme.space}px 0;
      `}
      {...props}
    >
      <Typo
        variant="h1"
        color={theme.colors.text.darkPrimary}
        css={css`
          transition: transform 300ms ease-in;
          &:hover {
            color: ${theme.colors.text.darkSecondary};
            transform: scale(1.1);
          }
        `}
      >
        {text}
      </Typo>
    </div>
  );
};

ContentTitle.propTypes = {
  position: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default ContentTitle;
