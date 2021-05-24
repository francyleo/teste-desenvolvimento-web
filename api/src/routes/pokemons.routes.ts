import { Request, Response, Router } from 'express';
import multer from 'multer';

import ListPokemonsService from '../services/ListPokemonsService';
import UploadListPokemonsService from '../services/UploadListPokemonsService';

import multerConfigs from '../config/multer';

const routes = Router();

routes.get('/', async (req: Request, res: Response) => {
  const { page = 1, limit = 20 } = req.query;

  const listPokemons = new ListPokemonsService();

  const pokemons = await listPokemons.execute({});

  res.json(pokemons);
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
