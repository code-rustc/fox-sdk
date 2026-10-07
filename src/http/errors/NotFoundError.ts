import { CodeRustcApiError } from './throwable-error';
import { RawResponse } from '../utils/fetcher';

export class NotFoundError extends CodeRustcApiError {
  constructor(body?: unknown, rawResponse?: RawResponse) {
    super({ message: 'NotFoundError', statusCode: 404, body, rawResponse });
    Object.setPrototypeOf(this, new.target.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.name = 'NotFoundError';
  }
}
