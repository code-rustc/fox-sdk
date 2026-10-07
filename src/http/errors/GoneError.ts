import { CodeRustcApiError } from './throwable-error';
import { RawResponse } from '../utils/fetcher';
import { Status } from '../../services/common/status';

export class GoneError extends CodeRustcApiError {
  public declare readonly body: Status;

  constructor(body: Status, rawResponse?: RawResponse) {
    super({ message: 'GoneError', statusCode: 410, body, rawResponse });
    Object.setPrototypeOf(this, new.target.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.name = 'GoneError';
  }
}
