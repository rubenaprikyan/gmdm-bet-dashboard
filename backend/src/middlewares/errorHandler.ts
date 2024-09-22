import express from 'express';
import { BaseError, InternalServerError } from '../modules/exceptions';

function normalizeError(err): BaseError {
  // if its already normalized error, just return
  if (err instanceof BaseError) {
    return err;
  }

  // Here is the place to Normalize exceptions from other libraries, unexpected errors, etc.


  return new InternalServerError('Server crashed internally for unknown reason');
}

export const errorHandler = async (
  err: Error,
  req: express.Request,
  res: express.Response,
  next,
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
