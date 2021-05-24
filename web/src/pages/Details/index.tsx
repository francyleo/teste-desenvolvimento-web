import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { Container, About, Status } from './styles';

import TesteAvatar from '../../assets/eevee.png';
import api from '../../service/api';

const Details: React.FC = () => {
  const routerMatch = useRouteMatch<{ id: string }>();

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    async function getPokemon(): Promise<void> {
      const pokemonId = routerMatch.params.id;
      const data = await api.get(`pokemons/${pokemonId}`);

      setPokemon(data);
    }
    getPokemon();
  }, [routerMatch]);

  return (
    <Container className="container">
      <div className="d-flex flex-column mt-5">
        <img src={TesteAvatar} alt="avatar" className="align-self-center" />

        <About className="row p-5">
          <div className="d-flex justify-content-center col-12 mt-5">
            <h2 className="border-bottom border-primary">About</h2>
          </div>
          <h1>
            <strong>Pipachu</strong>
          </h1>
          <div className="col-1 mt-4">
            <Status type="atk">
              <strong className="mr-2">atk</strong>
              <span>12</span>
            </Status>
            <Status type="def">
              <strong>def</strong>
              <span>12</span>
            </Status>
            <Status type="sta">
              <strong>sta</strong>
              <span>12</span>
            </Status>
          </div>
        </About>
      </div>
    </Container>
  );
};

export default Details;
