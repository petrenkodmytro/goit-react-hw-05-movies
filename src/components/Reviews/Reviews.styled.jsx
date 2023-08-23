import styled from 'styled-components';

export const ListReviews = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
  background: linear-gradient(45deg, #cdceb7 0%, #dee3e3 50%, #e7ebda 100%);
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
