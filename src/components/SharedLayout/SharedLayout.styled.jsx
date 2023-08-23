import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import bgImage from '../../images/bg-image-mob.jpg';

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 15px; */
  background-image: url(${bgImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  gap: 30px;
  border-bottom: solid 1px;
  margin-bottom: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  width: 100px;
  text-align: center;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 0;
  border-radius: 5px;
  border: none;
  text-decoration: none;
  color: ${p => p.theme.colors.main};
  background-color: ${p => p.theme.colors.accentLight};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accentDark};
    color: #fff;
    box-shadow: -2px -2px 5px #fff,
      2px 2px 5px ${p => p.theme.colors.accentDark};
  }
  &.active {
    color: #fff;
    background-color: ${p => p.theme.colors.accentDark};
  }

  @media screen and (min-width: 425px) {
    width: 120px;
  }
  @media screen and (min-width: 768px) {
    width: 150px;
  }
`;

export const Header = styled.header`
  width: 1280px;
  > p {
    text-align: center;
    margin-top: 10px;
    font-size: 24px;
    font-weight: 700;
  }
  /* display: flex;
  flex-direction: column  ;
  align-items: center; */
`;

export const Main = styled.main`
  flex: 1 1 auto;
  max-width: 1280px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Footer = styled.footer`
  /* padding-left: 20px; */
  margin-top: 20px;
`;

export const Author = styled.p`
  font-style: italic;
  font-size: 10px;
`;
