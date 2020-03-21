import { css } from '@emotion/core';
import { ReactComponent as Logo } from '../../../assets/images/logo/nike.svg';
import { PowerSettingsNew } from '@material-ui/icons';
import { useTheme } from 'emotion-theming';
import React, { useState } from 'react';
import SideNav from '../SideNav';
import Typo from '../../atoms/Typo';
import Container from '../../atoms/Container';

const Header = () => {
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      <header
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
          padding: 2rem 2rem 2rem 0;
        `}
      >
        <div
          onClick={() => setIsModalOpen(true)}
          css={css`
            cursor: pointer;
            display: flex;
            align-items: center;
          `}
        >
          <div
            css={css`
              width: 10rem;
            `}
          >
            <Logo />
          </div>
          <Typo variant="h2">TokyoTamaStudy</Typo>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
            padding: 1rem 2rem 1rem 2rem;
            cursor: pointer;
          `}
        >
          <PowerSettingsNew />
          <Typo
            variant="body2"
            css={css`
              margin-left: ${theme.space}px;
            `}
          >
            Logout
          </Typo>
        </div>
      </header>
      <SideNav isModalOpen={isModalOpen} onClickBackdrop={() => setIsModalOpen(false)} />
    </Container>
  );
};

export default Header;
