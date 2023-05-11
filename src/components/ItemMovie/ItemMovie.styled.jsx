import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 350px;
  cursor: pointer;
  text-align: center;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  > p {
    padding-top: 8px;
    padding-bottom: 8px;
    color: ${p => p.theme.colors.accentDark};
    background-color: #fff;
    font-weight: 700;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;

  /* height: 200px; */
  /* object-fit: cover; */
`;
