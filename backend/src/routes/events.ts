import express from 'express';
import CustomDataSource from '@/database/data-source';
import throwable from '@/modules/exceptions/throwable';

import SportsEventController from '@/controllers/SportsEventController';
import auth from '@/middlewares/auth';

/**
 * RESOURCE_NAME used as the rest api principle
 */
const RESOURCE_NAME = '/events';
const router = express.Router();

const dataSource = CustomDataSource.getInstance();
const sportsEventController = new SportsEventController(dataSource);

// implement the routes
router.get(
  '/',
  auth,
  // passing through arrow function to not bind the context
  throwable(ctx => sportsEventController.getAll(ctx)),
);

export default {
  RESOURCE_NAME,
  router,
};
