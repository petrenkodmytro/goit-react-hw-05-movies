import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLinkBack = styled(NavLink)`
  width: 150px;
  text-align: center;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 0;
  border-radius: 5px;
  border: none;
  text-decoration: none;
  background-color: ${p => p.theme.colors.accentLight};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accentDark};
    color: #fff;
    box-shadow: -2px -2px 5px #fff,
      2px 2px 5px ${p => p.theme.colors.accentDark};
  }
`;
