import { Router } from 'express';
import events from '@/routes/events';

const routes: Record<string, Router> = {
  [events.RESOURCE_NAME]: events.router,
};

export default routes;
