import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { Container, About, Status } from './styles';
import api from '../../service/api';

import IPokemon from '../../@types/Pokemon.interface';

const Details: React.FC = () => {
  const routerMatch = useRouteMatch<{ id: string }>();

  const [pokemon, setPokemon] = useState<IPokemon>({} as IPokemon);

  useEffect(() => {
    async function getPokemon(): Promise<void> {
      const pokemonId = routerMatch.params.id;
      const { data } = await api.get(`pokemons/${pokemonId}`);
      const pokemonData: IPokemon = data;
      setPokemon(pokemonData);
    }
    getPokemon();
  }, [routerMatch]);

  return (
    <Container className="container">
      <div className="d-flex flex-column mt-5">
        <img
          src={pokemon.img_name}
          alt={pokemon.name}
          className="align-self-center"
        />
        <About className="row p-5">
          <div className="d-flex justify-content-center col-12 mt-5">
            <h2 className="border-bottom border-primary">About</h2>
          </div>
          <h1>
            <small>{`#${pokemon.id} `}</small>
            <strong>{pokemon.name}</strong>
          </h1>
          <div className="col-3 mt-4">
            <Status type="atk">
              <strong className="mr-2">atk</strong>
              <span>{pokemon.atk}</span>
            </Status>
            <Status type="def">
              <strong>def</strong>
              <span>{pokemon.def}</span>
            </Status>
            <Status type="sta">
              <strong>sta</strong>
              <span>{pokemon.sta}</span>
            </Status>
            <Status type="total">
              <strong>total</strong>
              <span>{pokemon.stat_total}</span>
            </Status>
            <Status>
              <strong>aquireable</strong>
              <span>{pokemon.aquireable}</span>
            </Status>
            <Status>
              <strong>family id</strong>
              <span>{pokemon.family_id}</span>
            </Status>
            <Status>
              <strong>hatchable</strong>
              <span>{pokemon.hatchable}</span>
            </Status>
            <Status>
              <strong>future evolve</strong>
              <span>{pokemon.future_evolve}</span>
            </Status>
            <Status>
              <strong>generation</strong>
              <span>{pokemon.generation}</span>
            </Status>
            <Status>
              <strong>100% CP @ 39</strong>
              <span>{pokemon.cp_39}</span>
            </Status>
            <Status>
              <strong>100% CP @ 40</strong>
              <span>{pokemon.cp_40}</span>
            </Status>
            <Status>
              <strong>nest</strong>
              <span>{pokemon.nest}</span>
            </Status>
            <Status>
              <strong>legendary</strong>
              <span>{pokemon.legendary}</span>
            </Status>
            <Status>
              <strong>pokedex</strong>
              <span>{pokemon.pokedex_string}</span>
            </Status>
            <Status>
              <strong>shiny</strong>
              <span>{pokemon.shiny}</span>
            </Status>
            <Status>
              <strong>spawns</strong>
              <span>{pokemon.spawns}</span>
            </Status>
            <Status>
              <strong>raidable</strong>
              <span>{pokemon.raidable}</span>
            </Status>
          </div>
        </About>
      </div>
    </Container>
  );
};

export default Details;
