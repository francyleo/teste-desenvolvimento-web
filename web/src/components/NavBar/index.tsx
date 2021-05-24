import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, NavWraper, Title } from './styles';

const NavBar: React.FC = () => (
  <Container className="d-flex justify-content-center">
    <NavWraper className="d-flex flex-grow-1 justify-content-between align-items-center">
      <Title>Pokedex</Title>
      <ul className="d-flex align-items-center">
        <li className="text-uppercase">
          <NavLink to="/" className="text-decoration-none text-black">
            Home
          </NavLink>
        </li>
        <li className="text-uppercase">
          <NavLink to="/upload" className="text-decoration-none text-black">
            Upload Pokemons
          </NavLink>
        </li>
      </ul>
    </NavWraper>
  </Container>
);

export default NavBar;
