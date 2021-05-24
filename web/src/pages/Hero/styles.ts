import styled from 'styled-components';

export const Container = styled.main`
  & > img {
    position: absolute;
    height: 50rem;
    top: -130px;
    right: -130px;
  }
`;

export const PaginationWrapper = styled.div`
  font-size: 1.6rem;
`;

export const NotFound = styled.span`
  font-size: 2rem;
`;
