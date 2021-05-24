import React, { HTMLAttributes, useCallback } from 'react';

import { useHistory } from 'react-router-dom';
import { Container, Name, PokeID, Type } from './styles';

import TesteAvatar from '../../assets/eevee.png';

interface PokemonCardProps extends HTMLAttributes<HTMLDivElement> {
  pokemon: {
    id: number;
    name: string;
  };
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const history = useHistory();

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
        <Type className="text-center py-1 px-3">Lighting</Type>
        <Type className="text-center py-1 px-3">Fire</Type>
      </div>
      <div className="d-flex flex-grow-1 justify-content-end">
        <img className="align-self-end" src={TesteAvatar} alt="Avatar" />
      </div>
    </Container>
  );
};

export default PokemonCard;
