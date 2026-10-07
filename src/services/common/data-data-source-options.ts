import * as core from '../../core';
import {
  DataDlPlusOptions as _DataDlPlusOptions,
  dataDlPlusOptions,
  dataDlPlusOptionsRequest,
  dataDlPlusOptionsResponse,
} from './data-dl-plus-options';
import {
  DataDlOptions as _DataDlOptions,
  dataDlOptions,
  dataDlOptionsRequest,
  dataDlOptionsResponse,
} from './data-dl-options';

/**
 * Cast schema for the DataDataSourceOptions model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const dataDataSourceOptions = core.cast.identity<DataDataSourceOptions>();

/**
 * Options specific to data requests for DL+ subscribers.
 */
export type DataDataSourceOptions = DataDataSourceOptions.DataDlPlus | DataDataSourceOptions.DataDl;

export namespace DataDataSourceOptions {
  export interface DataDlPlus extends _DataDlPlusOptions {
    _type: 'DataDlPlus';
  }
  export interface DataDl extends _DataDlOptions {
    _type: 'DataDl';
  }
}

export const dataDataSourceOptionsResponse = core.cast.identity<DataDataSourceOptions>();

export const dataDataSourceOptionsRequest = core.cast.identity<DataDataSourceOptions>();
