import { BaseError } from './BaseError';

export class BadRequest extends BaseError {
  constructor(details: any) {
    super(details, 'Bad Request', 400);
  }
}
