import styled from 'styled-components';

export const CardWrap = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 20px;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
`;

export const Info = styled.span`
  font-weight: 700;
`;

export const ImgMovie = styled.img`
  width: 150px;
  object-fit: cover;
  @media screen and (min-width: 425px) {
    width: 200px;
  }
  @media screen and (min-width: 768px) {
    width: 250px;
  }
`;

export const AddInfo = styled.div``;

export const TitleInfo = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 2px;
`;
