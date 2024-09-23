import { BaseError } from './BaseError';

export class AuthorizationError extends BaseError {
  constructor(details: any) {
    super(details, 'Unauthorized', 401);
  }
}
