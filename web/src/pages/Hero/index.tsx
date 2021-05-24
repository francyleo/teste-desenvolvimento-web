import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container } from './styles';
import Logo from '../../assets/logo.svg';
import PokemonCard from '../../components/PokemonCard';
import Input from '../../components/Input';

const Hero: React.FC = () => {
  const [pokemons] = useState([
    {
      id: 1,
      name: 'Pipachu',
    },
  ] as Array<{
    id: number;
    name: string;
  }>);

  return (
    <Container className="container">
      <img src={Logo} alt="Logo" />

      <div className="d-flex justify-content-center mt-5">
        <Input
          name="search"
          defaultValue=""
          placeholder="Buscar..."
          icon={FaSearch}
        />
      </div>

      <div className="row mt-5">
        {pokemons.map(pokemon => (
          <div className="col-3 mb-5">
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Hero;
