import { BaseError } from './BaseError';

export class UnprocessableEntity extends BaseError {
  constructor(details: any) {
    // used "unprocessable entity" status code
    super(details, 'Unprocessable Entity', 422);
  }
}
