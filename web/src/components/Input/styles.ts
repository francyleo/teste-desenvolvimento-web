import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 20%;
  padding: 10px 20px;
  border-radius: 30px;
  align-items: center;
  min-width: 250px;
  max-width: 600px;

  background: #e3e3e3;
  border: 2px solid #e3e3e3;
  color: #999;
  transition: 500ms;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      width: 100%;
      color: #0da2f5;
      border: 2px solid #0da2f5;
    `}

  ${props =>
    props.isFilled &&
    css`
      width: 100%;
      color: #0da2f5;
    `}

  input {
    flex: 1;
    width: 100%;
    background: transparent;
    /* border: none; */
    border: 2px solid #000;
    outline: none;
    color: #000;
    font-size: 2rem;

    &::placeholder {
      color: #999;
    }

    & + input {
      margin-top: 8px;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
