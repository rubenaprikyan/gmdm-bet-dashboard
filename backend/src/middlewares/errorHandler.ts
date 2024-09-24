import express from 'express';
import {
  BaseError,
  InternalServerError,
  UnavailableServiceError,
} from '@/modules/exceptions';

function normalizePrismaErrors(error: any) {
  // TODO move to readable enums
  const databaseConnectionErrors = [
    'P1000',
    'P1001',
    'P1002',
    'P1003',
    'P1008',
    'P1009',
    'P1010',
    'P1011',
  ];

  if (error?.name === 'PrismaClientKnownRequestError') {
    if (databaseConnectionErrors.includes(error.code)) {
      return new UnavailableServiceError('Database Service is Unavailable.');
    }
  }
}

function normalizeError(err: Error): BaseError {
  // if its already normalized error, just return
  if (err instanceof BaseError) {
    return err;
  }

  // normalize database errors
  const prismaError = normalizePrismaErrors(err);
  if (prismaError) {
    return prismaError;
  }

  // Here is the place to Normalize exceptions from
  //  other libraries, unexpected errors, etc.

  return new InternalServerError('Server crashed internally for unknown reason');
}

export const errorHandler = async (
  err: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  console.error(err); // TODO add proper logging
  next();
  // normalize errors, always it will be instanceof BaseError
  const error = normalizeError(err).getError();

  res.status(error.statusCode).json({
    error,
  });
};

export default errorHandler;
