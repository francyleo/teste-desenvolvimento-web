import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import debounce from 'lodash/debounce';

import { Pagination } from 'react-bootstrap';
import PokemonCard from '../../components/PokemonCard';
import Input from '../../components/Input';
import IPokemon from '../../@types/Pokemon.interface';

import { Container, NotFound, PaginationWrapper } from './styles';

import Logo from '../../assets/logo.svg';
import api from '../../service/api';
import IFilter, { IPagination } from '../../@types/Filters.interface';

const Hero: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [pagination, setPagination] = useState<IPagination>({
    hasPrevPage: false,
    hasNextPage: false,
  } as IPagination);

  const [filters, setFilters] = useState<IFilter>({
    page: 1,
    limit: 20,
  } as IFilter);

  const handleSearch = useCallback(async () => {
    const { data } = await api.get('/pokemons', { params: filters });
    const { docs, ...paginationData } = data;
    const pokemonsData: IPokemon[] = docs;

    setPagination(paginationData);
    setPokemons(pokemonsData);
  }, [filters]);

  const debounced = useRef(
    debounce(() => {
      // Delay for digitation
      handleSearch();
    }, 2000),
  );

  const handleInputChange = useCallback(
    (value: string) => {
      setFilters({
        ...filters,
        name: value,
        page: 1,
      });

      debounced.current();
    },
    [debounced, filters],
  );

  const handlePaginate = useCallback(
    (page = 1) => {
      setFilters({
        ...filters,
        page,
      });

      handleSearch();
    },
    [handleSearch, filters],
  );

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  return (
    <Container className="container">
      <img src={Logo} alt="Logo" />

      <div className="d-flex justify-content-center mt-5">
        <Input
          name="search"
          defaultValue=""
          placeholder="Buscar..."
          icon={FaSearch}
          onChange={input => handleInputChange(input.target.value)}
        />
      </div>

      <div className="row mt-5">
        {pokemons.map(pokemon => (
          <div className="col-12 col-lg-4 mb-5" key={pokemon.id}>
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          </div>
        ))}

        {pokemons.length === 0 && (
          <NotFound className="text-center">
            Not found with
            <strong>{` ${filters.name} `}</strong>
            name 😢
          </NotFound>
        )}
      </div>
      <PaginationWrapper className="d-flex justify-content-center my-4">
        <Pagination>
          <Pagination.Prev disabled={!pagination.hasPrevPage} />
          {pagination.hasPrevPage && (
            <Pagination.Item
              onClick={() => handlePaginate(pagination.prevPage)}
            >
              {pagination.prevPage}
            </Pagination.Item>
          )}

          <Pagination.Item active>{filters.page}</Pagination.Item>

          {pagination.hasNextPage && (
            <Pagination.Item
              onClick={() => handlePaginate(pagination.nextPage)}
            >
              {pagination.nextPage}
            </Pagination.Item>
          )}

          <Pagination.Next
            onClick={() => handlePaginate(pagination.nextPage)}
            disabled={!pagination.hasNextPage}
          />
        </Pagination>
      </PaginationWrapper>
    </Container>
  );
};

export default Hero;
