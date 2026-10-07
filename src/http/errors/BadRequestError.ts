import { CodeRustcApiError } from './throwable-error';
import { RawResponse } from '../utils/fetcher';

export class BadRequestError extends CodeRustcApiError {
  constructor(body?: unknown, rawResponse?: RawResponse) {
    super({ message: 'BadRequestError', statusCode: 400, body, rawResponse });
    Object.setPrototypeOf(this, new.target.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.name = 'BadRequestError';
  }
}
