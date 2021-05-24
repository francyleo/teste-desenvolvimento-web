import { Router } from 'express';

import pokemons from './pokemons.routes';

const routes = Router();

routes.use('/pokemons', pokemons);

export default routes;
