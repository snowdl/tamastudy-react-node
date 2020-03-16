import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import mediaQuery from '../../../theme/mediaQuery';
import theme from '../../../theme';
import { ReactComponent as Logo } from '../../../assets/images/logo/nike.svg';
import { PowerSettingsNew, AspectRatio } from '@material-ui/icons';
import Typo from '../../atoms/Typo';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  ${mediaQuery(2)} {
    width: 1000px;
    height: inherit;
    margin: 0 auto;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: ${theme.space}px ${theme.space}px ${theme.space}px ${theme.space}px;
`;

const LogoBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const LogoSize = styled.div`
  width: 10rem;
`;

const HeaderMenuBox = styled.div`
  display: flex;
`;

const AuthBox = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem 1rem 2rem;
  cursor: pointer;
`;

const AuthTypo = styled(Typo)`
  margin-left: ${theme.space}px;
`;

const LoginLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

const HeaderPresenter = ({ isLoggedIn, handleLogOutFn }) => {
  return (
    <Container>
      <Header>
        <LogoBox>
          <LogoSize>
            <Logo />
          </LogoSize>
          <Typo variant="h2">TokyoTamaStudy</Typo>
        </LogoBox>

        <HeaderMenuBox>
          <AuthBox onClick={isLoggedIn ? () => handleLogOutFn() : undefined}>
            {isLoggedIn ? <PowerSettingsNew /> : <AspectRatio />}
            <AuthTypo variant="body2">
              {isLoggedIn ? <span>Logout</span> : <LoginLink to="/login">LogIn</LoginLink>}
            </AuthTypo>
          </AuthBox>
        </HeaderMenuBox>
      </Header>
    </Container>
  );
};

HeaderPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleLogOutFn: PropTypes.func,
};

export default HeaderPresenter;
