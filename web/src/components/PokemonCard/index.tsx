import React, { HTMLAttributes, useCallback, useState } from 'react';

import { useHistory } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

import { Container, Name, PokeID, Type } from './styles';

import IPokemon from '../../@types/Pokemon.interface';

interface PokemonCardProps extends HTMLAttributes<HTMLDivElement> {
  pokemon: IPokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  const handleToAbout = useCallback(() => {
    history.push(`/about/${pokemon.id}`);
  }, [pokemon, history]);

  return (
    <Container className="d-flex px-4 py-5" onClick={handleToAbout}>
      <div className="d-flex flex-column">
        <Name className="mb-4 text-white">
          <PokeID>{pokemon.id}</PokeID>
          {pokemon.name}
        </Name>
        <Type className="text-center py-1 px-3">{pokemon.type_one}</Type>
        {pokemon.type_two && (
          <Type className="text-center py-1 px-3">{pokemon.type_two}</Type>
        )}
      </div>
      <div className="d-flex flex-grow-1 justify-content-end">
        <img
          className={`align-self-end ${loading ? 'd-none' : ''}`}
          src={pokemon.img_name}
          alt={pokemon.name}
          onLoad={() => setLoading(false)}
        />
        {loading && (
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
    </Container>
  );
};

export default PokemonCard;
