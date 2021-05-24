import { PaginateResult } from 'mongoose';
import Pokemons, { PokemonDocument } from '@schemas/Pokemons';

interface Request {
  page?: number;
  limit?: number;
  name?: string;
}

class ListPokemonsService {
  async execute({
    page = 1,
    limit = 20,
    name,
  }: Request): Promise<PaginateResult<PokemonDocument>> {
    const reg = new RegExp(`^${name}`, 'gi');
    const query = {} as any;
    if (name) query.name = reg;

    const pokemons = await Pokemons.paginate(query, { page, limit });
    return pokemons;
  }
}

export default ListPokemonsService;
