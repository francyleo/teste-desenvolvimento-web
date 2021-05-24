import Pokemons from '@schemas/Pokemons';

interface Request {
  page?: String | Number | undefined;
  limit?: String | Number | undefined;
}

class ListPokemonsService {
  async execute({ page, limit }: Request): Promise<void> {
    const pokemons = await Pokemons.find();
    return pokemons;
  }
}

export default ListPokemonsService;
