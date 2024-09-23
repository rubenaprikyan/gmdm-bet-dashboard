import 'module-alias/register';

import express from 'express';
import cors from 'cors';

import CustomDataSource from './database/data-source';
import errorHandler from '@/middlewares/errorHandler';
import { crossOrigin } from '@/middlewares/crossOrigin';

import { dbConfig, serverConfig } from './config';
import registerRoutes from '@/routes';
import logger from '@/modules/logger';

const app = express();

/**
 * Middlewares
 */
app.use(
  cors({
    // @ts-expect-error // not provided proper typing from lib
    origin: crossOrigin,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Routes
 */
registerRoutes(app);

app.get('/ping', (req, res) => {
  res.status(200).json({ data: 'pong' });
});

/**
 * Error handler
 */
app.use(errorHandler);

CustomDataSource.initialize({
  log: [dbConfig.logLevel],
})
  .then(async () => {
    logger.success('Data Source has been initialized!');
  })
  .catch((error: Error) => logger.error(error, 'ERROR INITIALIZING DATA SOURCE'))
  .finally(() => {
    app.listen(serverConfig.port, () => {
      logger.success('Server listens port ', serverConfig.port);
    });
  });
