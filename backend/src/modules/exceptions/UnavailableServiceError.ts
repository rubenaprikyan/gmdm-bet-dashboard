import { BaseError } from './BaseError';

export class UnavailableServiceError extends BaseError {
  constructor(details: any) {
    super(details, 'Unavailable Service', 503);
  }
}
