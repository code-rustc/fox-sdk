import * as core from '../../../core';
import {
  ErrorSourceBody as _ErrorSourceBody,
  errorSourceBody,
  errorSourceBodyRequest,
  errorSourceBodyResponse,
} from '../../common/error-source-body';
import {
  ErrorSourceQuery as _ErrorSourceQuery,
  errorSourceQuery,
  errorSourceQueryRequest,
  errorSourceQueryResponse,
} from '../../common/error-source-query';

/**
 * Cast schema for the ErrorSource model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const errorSource = core.cast.identity<ErrorSource>();

export type ErrorSource = ErrorSource.Body | ErrorSource.Query;

export namespace ErrorSource {
  export interface Body extends _ErrorSourceBody {
    location: 'body';
  }
  export interface Query extends _ErrorSourceQuery {
    location: 'query';
  }
}

export const errorSourceResponse = core.cast.identity<ErrorSource>();

export const errorSourceRequest = core.cast.identity<ErrorSource>();
