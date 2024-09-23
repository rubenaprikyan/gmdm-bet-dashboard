import { BaseError } from './BaseError';

export class InternalServerError extends BaseError {
  constructor(details: any) {
    super(details, 'Internal Server Error', 500);
  }
}
