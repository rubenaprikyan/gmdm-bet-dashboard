import express from 'express';
import CustomDataSource from '@/database/data-source';
import throwable from '@/modules/exceptions/throwable';

import SportsEventController from '@/controllers/SportsEventController';

/**
 * RESOURCE_NAME used as the rest api principle
 */
const RESOURCE_NAME = '/events';
const router = express.Router();

const dataSource = CustomDataSource.getInstance();
const sportsEventController = new SportsEventController(dataSource);

// implement the routes
router.get('/', throwable(sportsEventController.getAll));

export default {
  RESOURCE_NAME,
  router,
};
