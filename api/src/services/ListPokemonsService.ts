import { PaginateResult } from 'mongoose';
import Pokemons, { PokemonDocument } from '@schemas/Pokemons';

interface Request {
  page?: number;
  limit?: number;
}

class ListPokemonsService {
  async execute({
    page = 1,
    limit = 20,
  }: Request): Promise<PaginateResult<PokemonDocument>> {
    const pokemons = await Pokemons.paginate({}, { page, limit });
    return pokemons;
  }
}

export default ListPokemonsService;
