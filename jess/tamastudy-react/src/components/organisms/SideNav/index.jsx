import { css } from '@emotion/core';
import React from 'react';
import Backdrop from '../../atoms/Backdrop';
import Modal from '../../atoms/Modal';

const SideNav = ({ isModalOpen, onClickBackdrop }) => {
  return (
    <>
      {isModalOpen && <Backdrop onClick={onClickBackdrop} />}
      <Modal>
        <div
          css={css`
            z-index: 11;
            position: fixed;
            left: 0;
            top: 0;
            z-index: 100;
            height: 100vh;
            width: 40%;
            background: white;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
            transition: all 200ms ease-in-out;
            transform: ${isModalOpen ? `translateX(0%)` : `translateX(-100%)`};
            opacity: ${isModalOpen ? 1 : 0.5};
          `}
        >
          content portal2
        </div>
      </Modal>
    </>
  );
};

export default SideNav;
