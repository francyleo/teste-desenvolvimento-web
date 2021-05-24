import { Request, Response, Router } from 'express';
import multer from 'multer';

import ListPokemonsService from '@services/ListPokemonsService';
import UploadListPokemonsService from '@services/UploadListPokemonsService';

import multerConfigs from '../config/multer';
import ShowListPokemonsService from '@services/ShowListPokemonsService';

const routes = Router();

routes.get('/', async (req: Request, res: Response) => {
  const { page, limit, name } = req.query;
  const paginate = {
    page: Number(page ?? 1),
    limit: Number(limit ?? 20),
    name: String(name ?? ''),
  };

  const listPokemons = new ListPokemonsService();
  const pokemons = await listPokemons.execute(paginate);

  res.json(pokemons);
});

routes.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const showPokemon = new ShowListPokemonsService();
  const pokemon = await showPokemon.execute({ id: Number(id) });

  res.json(pokemon);
});

routes.post(
  '/upload',
  multer(multerConfigs).single('file'),
  async (req: Request, res: Response) => {
    const uploadListPokemons = new UploadListPokemonsService();
    const report = await uploadListPokemons.execute(req.file);
    res.json(report);
  },
);

export default routes;
