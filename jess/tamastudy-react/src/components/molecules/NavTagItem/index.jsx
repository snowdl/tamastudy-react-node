import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import * as Icons from '@material-ui/icons';
import Typo from '../../atoms/Typo';

const NavTagItem = ({ variant = 'Apple', title = 'no data', ...props }) => {
  const theme = useTheme();

  const IconTag = Icons[variant];

  return (
    <div
      css={css`
        flex: none;
        width: 160px;
        height: 60px;
        &:nth-of-type(2n) {
          background-color: ${theme.colors.main.secondary};
        }
        &:nth-of-type(2n - 1) {
          background-color: ${theme.colors.main.tertiary};
        }
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        box-shadow: 2px 2px 10px -5px rgba(133, 133, 133, 0.59);
        &:not(:last-of-type) {
          margin-right: ${theme.space}px;
        }
      `}
      {...props}
    >
      <IconTag style={{ fontSize: 30 }} />
      <div
        css={css`
          margin-left: 3rem;
          text-align: center;
        `}
      >
        <Typo
          variant="body3"
          css={css`
            width: 50px;
            overflow: hidden;
            word-wrap: break-word;
          `}
        >
          {title}
        </Typo>
      </div>
    </div>
  );
};

export default NavTagItem;
