import React from 'react';
import { FcHome } from 'react-icons/fc';
import { BiCameraMovie } from 'react-icons/bi';
import {
  Author,
  Footer,
  Header,
  Main,
  NavWrapper,
  StyledNavLink,
  Wrapper,
} from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <Wrapper>
      <Header>
        <NavWrapper>
          <StyledNavLink to="/">
            <FcHome />
            Home
          </StyledNavLink>
          <StyledNavLink to="/movies">
            <BiCameraMovie />
            Movies
          </StyledNavLink>
        </NavWrapper>
      </Header>

      <Main>
        {/* вказати де саме в компоненті батьківського маршруту ми хочемо рендерувати дочірні маршрути */}
        <Outlet />
      </Main>

      <Footer>
        <Author>Developed by Dmytro Petrenko</Author>
      </Footer>
    </Wrapper>
  );
};
