import styled from 'styled-components';

type NavProps = {
  display: 'block' | 'none';
};

export const Container = styled.header`
  position: relative;
  max-width: 1200px;
  margin: 20px auto;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);

  @media (max-width: 1200px) {
    margin: 20px;
  }
`;

export const NavWraper = styled.nav<NavProps>`
  float: right;

  ul {
    margin: 0;
    padding: 0;
    display: flex;

    li {
      list-style: none;

      a {
        display: block;
        margin: 10px 0;
        padding: 10px 20px;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: bold;
        color: white;
        transition: 500ms;
      }
    }
  }

  @media (max-width: 619px) {
    display: ${props => props.display || 'none'};
    width: 100%;
    transition: 500ms;

    ul {
      display: block;
    }
  }
`;

export const Toggle = styled.div`
  display: none;
  @media (max-width: 619px) {
    display: block;
    width: 40px;
    height: 40px;
    margin: 10px;
    font-size: 3rem;
    float: right;
    cursor: pointer;
    text-align: center;
    color: white;
  }
`;

export const Title = styled.a`
  height: 60px;
  font-size: 3.6rem;
  line-height: 60px;
  padding: 0 20px;
  text-align: center;
  font-weight: 700;
  box-sizing: border-box;
  float: left;
  text-decoration: none;
  color: white;
`;
