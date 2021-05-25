import styled from 'styled-components';

export const Container = styled.main`
  & > img {
    position: absolute;
    height: 50rem;
    top: -130px;
    right: -130px;
  }
`;

export const NavPagination = styled.div`
  font-size: 1.6rem;

  ul {
    display: flex;
    justify-content: space-between;
    max-width: 500px;
    li {
      list-style: none;
      background: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(10px);
      padding: 5px 10px;
      border-radius: 5px;
      font-weight: bold;
      color: white;

      &.selected {
        border: 2px solid #0da2f5;
      }

      &.disabled {
        color: #aaa;
        background: rgba(255, 255, 255, 0.5);
      }

      a {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
      }
    }
  }
`;

export const NotFound = styled.span`
  font-size: 2rem;
`;
