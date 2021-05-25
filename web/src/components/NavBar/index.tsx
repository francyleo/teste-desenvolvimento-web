import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import { Container, NavWraper, Title, Toggle } from './styles';

const NavBar: React.FC = () => {
  const [display, setDisplay] = useState(false);

  return (
    <Container>
      <Title>Pokedex</Title>
      <Toggle onClick={() => setDisplay(!display)}>
        <FaBars size={32} />
      </Toggle>
      <NavWraper display={display ? 'block' : 'none'}>
        <ul>
          <li className="text-uppercase">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-uppercase">
            <NavLink to="/upload">Upload Pokemons</NavLink>
          </li>
        </ul>
      </NavWraper>
      <div className="clearfix" />
    </Container>
  );
};

export default NavBar;
