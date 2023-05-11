import styled from 'styled-components';

export const ListReviews = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ItemReview = styled.li`
  border-bottom: solid 1px ${p => p.theme.colors.accentDark};
  padding-bottom: 10px;
`;

export const AuthorReview = styled.li`
  font-weight: 700;
  margin-bottom: 5px;
`;

export const LinkDitails = styled.a`
  display: inline-block;
  font-style: italic;
  margin-top: 5px;
`;
