import styled from 'styled-components';

export const ListActors = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const ItemActor = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #fff;
`;

export const ImgActor = styled.img`
  max-width: 175px;
  object-fit: cover;
  margin-bottom: 5px;
  /* border: solid 1px */
`;

export const NameActor = styled.span`
  font-weight: 700;
  margin-bottom: 5px;
  max-width: 175px;
`;

export const CarecterActor = styled.span`
  font-style: italic;
  max-width: 175px;
  font-size: 14px;
`;
