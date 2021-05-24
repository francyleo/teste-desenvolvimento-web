import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import PokemonCard from '../../components/PokemonCard';
import Input from '../../components/Input';
import IPokemon from '../../@types/Pokemon.interface';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';
import api from '../../service/api';

const Hero: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  useEffect(() => {
    async function getPokemons(): Promise<void> {
      const { data } = await api.get('/pokemons');
      const pokemonsData: IPokemon[] = data.docs;
      setPokemons(pokemonsData);
    }

    getPokemons();
  }, []);

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
          <div className="col-12 col-lg-4 mb-5" key={pokemon.id}>
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Hero;
