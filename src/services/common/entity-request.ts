import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import { EntityRequestType, entityRequestType } from '../requests/models/entity-request-type';
import { RequestFrequency, requestFrequency } from './request-frequency';
import {
  TerminalIdentity,
  terminalIdentity,
  terminalIdentityRequest,
  terminalIdentityResponse,
} from './terminal-identity';
import {
  EntityRequestFormatting,
  entityRequestFormatting,
  entityRequestFormattingRequest,
  entityRequestFormattingResponse,
} from '../requests/models/entity-request-formatting';
import {
  EntityDataSourceOptions,
  entityDataSourceOptions,
  entityDataSourceOptionsRequest,
  entityDataSourceOptionsResponse,
} from './entity-data-source-options';
import { BaseRequest, baseRequest, baseRequestRequest, baseRequestResponse } from './base-request';
import { Id } from './id';
import { RequestUserSuppliedName } from './request-user-supplied-name';
import { RequestIdentifier } from './request-identifier';
import { Title } from './title';
import { Description } from './description';
import { Issued } from './issued';
import { Modified } from './modified';
import { LastRunDateTime } from './last-run-date-time';
import { NextRunDateTime } from './next-run-date-time';
import { Enabled } from './enabled';
import { AssociatedDataset } from './associated-dataset';

export interface EntityRequest extends BaseRequest {
  /** JSON-LD type */
  _type: 'EntityRequest';
  /** JSON-LD id */
  fieldList: Id;
  formatting?: EntityRequestFormatting | undefined;
  /** Options specific to entity requests for DL+ subscribers. */
  dataSourceOptions?: EntityDataSourceOptions | undefined;
}

export namespace EntityRequest {
  export type _Type = EntityRequestType;
  export type Formatting = EntityRequestFormatting;
}

/**
 * Cast schema for the EntityRequest model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const entityRequest = core.cast.identity<EntityRequest>();

/**
 * Cast schema for mapping API responses to the EntityRequest application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const entityRequestResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@context',
      '@id',
      '@type',
      'name',
      'identifier',
      'title',
      'frequency',
      'description',
      'universe',
      'trigger',
      'terminalIdentity',
      'issued',
      'modified',
      'lastRunDateTime',
      'nextRunDateTime',
      'enabled',
      'dataset',
      'fieldList',
      'formatting',
      'dataSourceOptions',
    ]);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@context':
        raw['@context'] == null ? raw['@context'] : contextResponse.parse(raw['@context']),
      '@id': raw['@id'],
      '@type': raw['@type'],
      name: raw['name'],
      identifier: raw['identifier'],
      title: raw['title'],
      frequency: raw['frequency'],
      description: raw['description'],
      universe: raw['universe'],
      trigger: raw['trigger'],
      terminalIdentity: raw['terminalIdentity'],
      issued: raw['issued'],
      modified: raw['modified'],
      lastRunDateTime: raw['lastRunDateTime'],
      nextRunDateTime: raw['nextRunDateTime'],
      enabled: raw['enabled'],
      dataset: raw['dataset'],
      fieldList: raw['fieldList'],
      formatting: raw['formatting'],
      dataSourceOptions: raw['dataSourceOptions'],
    };
  },
  [
    '@context',
    '@id',
    '@type',
    'identifier',
    'title',
    'frequency',
    'universe',
    'trigger',
    'issued',
    'modified',
    'dataset',
    'fieldList',
  ],
);

/**
 * Cast schema for mapping the EntityRequest application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const entityRequestRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
      '@id': raw['@id'],
      '@type': raw['@type'],
      name: raw['name'],
      identifier: raw['identifier'],
      title: raw['title'],
      frequency: raw['frequency'],
      description: raw['description'],
      universe: raw['universe'],
      trigger: raw['trigger'],
      terminalIdentity: raw['terminalIdentity'],
      issued: raw['issued'],
      modified: raw['modified'],
      lastRunDateTime: raw['lastRunDateTime'],
      nextRunDateTime: raw['nextRunDateTime'],
      enabled: raw['enabled'],
      dataset: raw['dataset'],
      fieldList: raw['fieldList'],
      formatting: raw['formatting'],
      dataSourceOptions: raw['dataSourceOptions'],
    };
  },
  [
    '@context',
    '@id',
    '@type',
    'identifier',
    'title',
    'frequency',
    'universe',
    'trigger',
    'issued',
    'modified',
    'dataset',
    'fieldList',
  ],
);
