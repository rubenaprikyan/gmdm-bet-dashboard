import { Router } from 'express';
import events from '@/routes/events';
import users from '@/routes/users';

const routes: Record<string, Router> = {
  [events.RESOURCE_NAME]: events.router,
  [users.RESOURCE_NAME]: users.router,
};

export default routes;
