import React, { Suspense } from 'react';
import { FcHome } from 'react-icons/fc';
import { BiCameraMovie } from 'react-icons/bi';
import { IoIosPeople } from 'react-icons/io';
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
        <p>My Movie App</p>
        <NavWrapper>
          <StyledNavLink to="/">
            <FcHome />
            Home
          </StyledNavLink>
          <StyledNavLink to="/movies">
            <BiCameraMovie />
            Movies
          </StyledNavLink>
          <StyledNavLink to="/actors">
            <IoIosPeople />
            Actors
          </StyledNavLink>
        </NavWrapper>
      </Header>

      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          {/* вказати де саме в компоненті батьківського маршруту ми хочемо рендерувати дочірні маршрути */}
          <Outlet />
        </Suspense>
      </Main>

      <Footer>
        <Author>Developed by Dmytro Petrenko</Author>
      </Footer>
    </Wrapper>
  );
};
