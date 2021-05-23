import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Title } from './styles';

const NavBar: React.FC = () => (
  <Container className="d-flex justify-content-between align-items-center mx-auto">
    <Title>Pokedex</Title>
    <ul className="d-flex align-items-center">
      <li className="text-uppercase">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-uppercase">
        <NavLink to="/upload">Upload Pokemons</NavLink>
      </li>
    </ul>
  </Container>
);

export default NavBar;
