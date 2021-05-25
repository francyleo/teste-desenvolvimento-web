import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import debounce from 'lodash/debounce';

import ReactPaginate from 'react-paginate';
import PokemonCard from '../../components/PokemonCard';
import Input from '../../components/Input';
import IPokemon from '../../@types/Pokemon.interface';

import { Container, NotFound, NavPagination } from './styles';

import Logo from '../../assets/logo.svg';
import api from '../../service/api';
import IFilter, { IPagination } from '../../@types/Filters.interface';

const Hero: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [pagination, setPagination] = useState<IPagination>({
    hasPrevPage: false,
    hasNextPage: false,
    page: 1,
  } as IPagination);

  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const debounced = useRef(debounce(cb => cb(), 1000));
  const handleSearch = useCallback(async () => {
    setLoading(true);
    const { data } = await api.get('/pokemons', { params: { name: search } });
    const { docs, ...paginationData } = data;
    const pokemonsData: IPokemon[] = docs;

    setPagination(paginationData);
    setPokemons(pokemonsData);
    setLoading(false);
  }, [search]);

  const handleInputChange = useCallback(
    (value: string) => {
      setSearch(value);
      setPagination({
        ...pagination,
        page: 1,
      });
      debounced.current(handleSearch);
    },
    [debounced, handleSearch, pagination],
  );

  const handlePaginate = useCallback(
    (page = 1) => {
      setPagination({
        ...pagination,
        page,
      });

      handleSearch();
    },
    [handleSearch, pagination],
  );

  useEffect(() => {
    async function getAllPokemons(): Promise<void> {
      const { data } = await api.get('/pokemons', { params: { name: search } });
      const { docs, ...paginationData } = data;
      const pokemonsData: IPokemon[] = docs;

      setPagination(paginationData);
      setPokemons(pokemonsData);
    }

    getAllPokemons();
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
          onChange={input => handleInputChange(input.target.value)}
        />
      </div>

      <div className="row mt-5">
        {pokemons.map(pokemon => (
          <div className="col-12 col-lg-4 mb-5" key={pokemon.id}>
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          </div>
        ))}

        {pokemons.length === 0 && !loading && (
          <NotFound className="text-center">
            Not found with
            <strong>{` ${search} `}</strong>
            name 😢
          </NotFound>
        )}
      </div>

      <NavPagination>
        <ReactPaginate
          containerClassName="mx-auto my-4"
          onPageChange={({ selected }) => handlePaginate(selected)}
          pageCount={pagination.totalPages}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          initialPage={1}
        />
      </NavPagination>
    </Container>
  );
};

export default Hero;
