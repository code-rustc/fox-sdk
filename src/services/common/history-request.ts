import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import { HistoryRequestType, historyRequestType } from '../requests/models/history-request-type';
import { RequestFrequency, requestFrequency } from './request-frequency';
import {
  TerminalIdentity,
  terminalIdentity,
  terminalIdentityRequest,
  terminalIdentityResponse,
} from './terminal-identity';
import {
  HistoryRuntimeOptions,
  historyRuntimeOptions,
  historyRuntimeOptionsRequest,
  historyRuntimeOptionsResponse,
} from './history-runtime-options';
import {
  HistoryRequestFormatting,
  historyRequestFormatting,
  historyRequestFormattingRequest,
  historyRequestFormattingResponse,
} from '../requests/models/history-request-formatting';
import {
  HistoryPricingSourceOptions,
  historyPricingSourceOptions,
  historyPricingSourceOptionsRequest,
  historyPricingSourceOptionsResponse,
} from './history-pricing-source-options';
import {
  FundamentalsOptions,
  fundamentalsOptions,
  fundamentalsOptionsRequest,
  fundamentalsOptionsResponse,
} from './fundamentals-options';
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

export interface HistoryRequest extends BaseRequest {
  /** JSON-LD type */
  _type: 'HistoryRequest';
  /** JSON-LD id */
  fieldList: Id;
  /** Options specific to history data requests. */
  runtimeOptions?: HistoryRuntimeOptions | undefined;
  formatting?: HistoryRequestFormatting | undefined;
  pricingSourceOptions?: HistoryPricingSourceOptions | undefined;
  /** Fundamentals options specific to history data requests. */
  fundamentalsOptions?: FundamentalsOptions | undefined;
}

export namespace HistoryRequest {
  export type _Type = HistoryRequestType;
  export type Formatting = HistoryRequestFormatting;
}

/**
 * Cast schema for the HistoryRequest model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const historyRequest = core.cast.identity<HistoryRequest>();

/**
 * Cast schema for mapping API responses to the HistoryRequest application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const historyRequestResponse = core.cast.object(
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
      'runtimeOptions',
      'formatting',
      'pricingSourceOptions',
      'fundamentalsOptions',
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
      runtimeOptions:
        raw['runtimeOptions'] == null
          ? raw['runtimeOptions']
          : historyRuntimeOptionsResponse.parse(raw['runtimeOptions']),
      formatting: raw['formatting'],
      pricingSourceOptions:
        raw['pricingSourceOptions'] == null
          ? raw['pricingSourceOptions']
          : historyPricingSourceOptionsResponse.parse(raw['pricingSourceOptions']),
      fundamentalsOptions:
        raw['fundamentalsOptions'] == null
          ? raw['fundamentalsOptions']
          : fundamentalsOptionsResponse.parse(raw['fundamentalsOptions']),
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
 * Cast schema for mapping the HistoryRequest application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const historyRequestRequest = core.cast.object(
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
      runtimeOptions:
        raw['runtimeOptions'] == null
          ? raw['runtimeOptions']
          : historyRuntimeOptionsRequest.parse(raw['runtimeOptions']),
      formatting: raw['formatting'],
      pricingSourceOptions:
        raw['pricingSourceOptions'] == null
          ? raw['pricingSourceOptions']
          : historyPricingSourceOptionsRequest.parse(raw['pricingSourceOptions']),
      fundamentalsOptions:
        raw['fundamentalsOptions'] == null
          ? raw['fundamentalsOptions']
          : fundamentalsOptionsRequest.parse(raw['fundamentalsOptions']),
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
