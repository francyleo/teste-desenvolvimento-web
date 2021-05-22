import { Router } from 'express';

const routes = Router();

routes.get('/ping', (_, res) => res.json('OK'));

export default routes;
