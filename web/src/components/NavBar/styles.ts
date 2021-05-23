import styled from 'styled-components';

export const Container = styled.nav`
  max-width: 980px;
  height: 10vh;

  ul {
    list-style: none;

    li + li {
      margin-left: 32px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 30px;
`;
