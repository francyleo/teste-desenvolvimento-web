import Pokemons, { PokemonDocument } from '@schemas/Pokemons';
import AppError from 'errors/AppError';

interface Request {
  id: number;
}

class ShowListPokemonsService {
  async execute({ id }: Request): Promise<PokemonDocument> {
    const pokemon = await Pokemons.findOne({ id });

    if (!pokemon) throw new AppError('Pokemon not found.', 404);

    return pokemon;
  }
}

export default ShowListPokemonsService;
