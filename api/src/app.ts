import express, { NextFunction, Request, Response } from 'express';

import 'express-async-errors';
import '@config/database';

import cors from 'cors';
import morgan from 'morgan';

import routes from './routes';
import AppError from './errors/AppError';

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(morgan('dev'));
app.use(cors());
app.use('/api', routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

export default app;
