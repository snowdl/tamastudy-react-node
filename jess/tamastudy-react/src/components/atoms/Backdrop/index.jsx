import { css } from '@emotion/core';
import React from 'react';
import ReactDOM from 'react-dom';

const Backdrop = ({ onClick }) => {
  return ReactDOM.createPortal(
    <div
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.75);
        z-index: 10;
      `}
      onClick={onClick}
    />,
    document.getElementById('backdrop-hook'),
  );
};

export default Backdrop;
