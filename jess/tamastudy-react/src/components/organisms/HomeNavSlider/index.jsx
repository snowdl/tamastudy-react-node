import React from 'react';
import { css } from '@emotion/core';
import NavTagItem from '../../molecules/NavTagItem';
import theme from '../../../theme';

const HomeNavSlider = ({ ...props }) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: ${theme.space}px ${theme.space}px ${theme.space}px ${theme.space}px;
        width: calc(100% - ${theme.space}px);
        overflow: hidden;
      `}
      {...props}
    >
      <div>
        <div
          css={css`
            display: flex;
            width: 100vw;
            overflow-x: scroll;
            &::-webkit-scrollbar {
              display: none;
            }
          `}
        >
          <NavTagItem variant="Android" title="dsfklfjkdlsfjklsdjflksdjflsdfsdflsdj" />
          <NavTagItem variant="Apple" title="dsfklfjkdlsfjklsdjflksdjflsdfsdflsdj" />
          <NavTagItem variant="Brightness2" title="dsfklfjkdlsfjklsdjflksdjflsdfsdflsdj" />
          <NavTagItem variant="BlurCircular" title="dsfklfjkdlsfjklsdjflksdjflsdfsdflsdj" />
          <NavTagItem variant="BatteryStd" title="dsfklfjkdlsfjklsdjflksdjflsdfsdflsdj" />
          <NavTagItem variant="BatteryStd" title="dsfklfjkdlsfjklsdjflksdjflsdfsdflsdj" />
          <NavTagItem variant="BatteryStd" title="dsfklfjkdlsfjklsdjflksdjflsdfsdflsdj" />
          <NavTagItem variant="BatteryStd" title="dsfklfjkdlsfjklsdjflksdjflsdfsdflsdj" />
          <NavTagItem variant="BatteryStd" title="dsfklfjkdlsfjklsdjflksdjflsdfsdflsdj" />
          <NavTagItem variant="BatteryStd" title="dsfklfjkdlsfjklsdjflksdjflsdfsdflsdj" />
          <NavTagItem variant="BatteryStd" title="dsfklfjkdlsfjklsdjflksdjflsdfsdflsdj" />
          <NavTagItem variant="BatteryStd" title="dsfklfjkdlsfjklsdjflksdjflsdfsdflsdj" />
          <NavTagItem variant="BatteryStd" title="dsfklfjkdlsfjklsdjflksdjflsdfsdflsdj" />
          <NavTagItem variant="BatteryStd" title="dsfklfjkdlsfjklsdjflksdjflsdfsdflsdj" />
          <NavTagItem variant="BatteryStd" title="dsfklfjkdlsfjklsdjflksdjflsdfsdflsdj" />
          <NavTagItem variant="BatteryStd" title="dsfklfjkdlsfjklsdjflksdjflsdfsdflsdj" />
          <NavTagItem variant="BatteryStd" title="dsfklfjkdlsfjklsdjflksdjflsdfsdflsdj" />
        </div>
      </div>
    </div>
  );
};

export default HomeNavSlider;
