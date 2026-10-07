import { CodeRustcApiError } from './throwable-error';
import { RawResponse } from '../utils/fetcher';

export class UnauthorizedError extends CodeRustcApiError {
  constructor(body?: unknown, rawResponse?: RawResponse) {
    super({ message: 'UnauthorizedError', statusCode: 401, body, rawResponse });
    Object.setPrototypeOf(this, new.target.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.name = 'UnauthorizedError';
  }
}
