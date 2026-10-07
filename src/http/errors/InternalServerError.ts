import { CodeRustcApiError } from './throwable-error';
import { RawResponse } from '../utils/fetcher';

export class InternalServerError extends CodeRustcApiError {
  constructor(body?: unknown, rawResponse?: RawResponse) {
    super({ message: 'InternalServerError', statusCode: 500, body, rawResponse });
    Object.setPrototypeOf(this, new.target.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.name = 'InternalServerError';
  }
}
