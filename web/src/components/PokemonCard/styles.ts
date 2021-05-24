import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  transition: 500ms;
  min-width: 300px;
  min-height: 100%;
  border-radius: 15px;
  cursor: pointer;

  & > div img {
    height: 10rem;
  }
`;

export const Name = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

export const PokeID = styled.span`
  &::before {
    content: '# ';
    font-size: 1.2rem;
    line-height: 2.4rem;
    vertical-align: top;
  }
  &::after {
    content: ' ';
  }
`;

export const Type = styled.span`
  font-size: 1.7rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 15px;

  & + & {
    margin-top: 10px;
  }
`;
