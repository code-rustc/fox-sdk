import { CodeRustcApiError } from './throwable-error';
import { RawResponse } from '../utils/fetcher';

export class ForbiddenError extends CodeRustcApiError {
  constructor(body?: unknown, rawResponse?: RawResponse) {
    super({ message: 'ForbiddenError', statusCode: 403, body, rawResponse });
    Object.setPrototypeOf(this, new.target.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.name = 'ForbiddenError';
  }
}
