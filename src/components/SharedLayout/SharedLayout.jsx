import React from 'react';
import {  Author, Footer, Main, Wrapper } from './SharedLayout.styled';
import { NavLink, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <Wrapper>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>

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
