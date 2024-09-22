import { Response } from 'express';

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export type BaseViewModel<T = any> = {
  data: T;
};

interface ContextualRequest {
  session: {};
}

/**
 * Context with files
 */
export type Context = {
  req: ContextualRequest;
  res: Response;
};
