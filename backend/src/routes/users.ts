import express from 'express';
import CustomDataSource from '@/database/data-source';
import UsersController from '@/controllers/UsersController';
import throwable from '@/modules/exceptions/throwable';

/**
 * RESOURCE_NAME used as the rest api principle
 */
const RESOURCE_NAME = '/users';
const router = express.Router();

const dataSource = CustomDataSource.getInstance();
const usersController = new UsersController(dataSource);

// implement the routes
router.post(
  '/login',
  // passing through arrow function to not bind the context
  throwable(ctx => usersController.login(ctx)),
);

export default {
  RESOURCE_NAME,
  router,
};
