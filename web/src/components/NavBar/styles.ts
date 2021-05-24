import styled from 'styled-components';

export const Container = styled.header`
  height: 10vh;

  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
`;

export const NavWraper = styled.nav`
  max-width: 980px;

  ul {
    list-style: none;

    li {
      & + li {
        margin-left: 3.2rem;
      }
      a {
        font-size: 1.6rem;
        font-weight: bold;
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;
