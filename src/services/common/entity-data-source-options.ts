import * as core from '../../core';
import {
  EntityDlPlusOptions as _EntityDlPlusOptions,
  entityDlPlusOptions,
  entityDlPlusOptionsRequest,
  entityDlPlusOptionsResponse,
} from './entity-dl-plus-options';
import {
  EntityDlOptions as _EntityDlOptions,
  entityDlOptions,
  entityDlOptionsRequest,
  entityDlOptionsResponse,
} from './entity-dl-options';

/**
 * Cast schema for the EntityDataSourceOptions model — a bare identity (see cast.ts): no
 * rename is ever needed on a union/complex model across the real serde-off roster.
 */
export const entityDataSourceOptions = core.cast.identity<EntityDataSourceOptions>();

/**
 * Options specific to entity requests for DL+ subscribers.
 */
export type EntityDataSourceOptions =
  | EntityDataSourceOptions.EntityDlPlus
  | EntityDataSourceOptions.EntityDl;

export namespace EntityDataSourceOptions {
  export interface EntityDlPlus extends _EntityDlPlusOptions {
    _type: 'EntityDlPlus';
  }
  export interface EntityDl extends _EntityDlOptions {
    _type: 'EntityDl';
  }
}

export const entityDataSourceOptionsResponse = core.cast.identity<EntityDataSourceOptions>();

export const entityDataSourceOptionsRequest = core.cast.identity<EntityDataSourceOptions>();
