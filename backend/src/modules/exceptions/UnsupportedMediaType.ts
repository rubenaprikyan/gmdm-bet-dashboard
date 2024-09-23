import { BaseError } from './BaseError';

export class UnsupportedMediaType extends BaseError {
  constructor(details: any) {
    super(details, 'Unsupported media type', 415);
  }
}
