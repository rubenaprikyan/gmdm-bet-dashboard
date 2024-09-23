import { Response, Request } from 'express';
import { SportsEvent } from '@/database/entities';

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export type BaseViewModel<T = any> = {
  data: T;
};

interface ContextualRequest extends Request {
  session?: {};
}

/**
 * Context with files
 */
export type Context = {
  req: ContextualRequest;
  res: Response;
};

export type BaseApiSuccessResponse = BaseViewModel;

export type BaseApiErrorResponse = {
  error: {
    message: string;
    details?: unknown;
  };
};

export type ApiListViewModel<TData> = BaseApiSuccessResponse & {
  data: TData[];
  pagination: {
    total: number;
    skip: number;
    take: number;
  };
};

export type ApiResourceViewModel<TData> = BaseApiSuccessResponse &
  BaseApiErrorResponse & {
    data: TData;
  };

export interface BaseListRequestArgs {
  skip: number;
  take: number;
}

export type ServiceBaseListResponse<T> = Promise<{
  data: T[];
  count: number;
  skip: number;
  take: number;
}>;
