import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  PricingSnapshotRequestType,
  pricingSnapshotRequestType,
} from '../requests/models/pricing-snapshot-request-type';
import { RequestFrequency, requestFrequency } from './request-frequency';
import {
  TerminalIdentity,
  terminalIdentity,
  terminalIdentityRequest,
  terminalIdentityResponse,
} from './terminal-identity';
import {
  PricingSnapshotRequestFormatting,
  pricingSnapshotRequestFormatting,
  pricingSnapshotRequestFormattingRequest,
  pricingSnapshotRequestFormattingResponse,
} from '../requests/models/pricing-snapshot-request-formatting';
import {
  PricingSnapshotPricingSourceOptions,
  pricingSnapshotPricingSourceOptions,
  pricingSnapshotPricingSourceOptionsRequest,
  pricingSnapshotPricingSourceOptionsResponse,
} from './pricing-snapshot-pricing-source-options';
import {
  PricingSnapshotRuntimeOptions,
  pricingSnapshotRuntimeOptions,
  pricingSnapshotRuntimeOptionsRequest,
  pricingSnapshotRuntimeOptionsResponse,
} from './pricing-snapshot-runtime-options';
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

export interface PricingSnapshotRequest extends BaseRequest {
  /** JSON-LD type */
  _type: 'PricingSnapshotRequest';
  formatting?: PricingSnapshotRequestFormatting | undefined;
  pricingSourceOptions?: PricingSnapshotPricingSourceOptions | undefined;
  /** Options specific to pricing snapshot requests. */
  runtimeOptions?: PricingSnapshotRuntimeOptions | undefined;
}

export namespace PricingSnapshotRequest {
  export type _Type = PricingSnapshotRequestType;
  export type Formatting = PricingSnapshotRequestFormatting;
}

/**
 * Cast schema for the PricingSnapshotRequest model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const pricingSnapshotRequest = core.cast.identity<PricingSnapshotRequest>();

/**
 * Cast schema for mapping API responses to the PricingSnapshotRequest application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const pricingSnapshotRequestResponse = core.cast.object(
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
      'formatting',
      'pricingSourceOptions',
      'runtimeOptions',
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
      formatting: raw['formatting'],
      pricingSourceOptions:
        raw['pricingSourceOptions'] == null
          ? raw['pricingSourceOptions']
          : pricingSnapshotPricingSourceOptionsResponse.parse(raw['pricingSourceOptions']),
      runtimeOptions:
        raw['runtimeOptions'] == null
          ? raw['runtimeOptions']
          : pricingSnapshotRuntimeOptionsResponse.parse(raw['runtimeOptions']),
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
  ],
);

/**
 * Cast schema for mapping the PricingSnapshotRequest application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const pricingSnapshotRequestRequest = core.cast.object(
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
      formatting: raw['formatting'],
      pricingSourceOptions:
        raw['pricingSourceOptions'] == null
          ? raw['pricingSourceOptions']
          : pricingSnapshotPricingSourceOptionsRequest.parse(raw['pricingSourceOptions']),
      runtimeOptions:
        raw['runtimeOptions'] == null
          ? raw['runtimeOptions']
          : pricingSnapshotRuntimeOptionsRequest.parse(raw['runtimeOptions']),
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
  ],
);
