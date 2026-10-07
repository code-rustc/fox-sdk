import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  BvalSnapshotRequestType,
  bvalSnapshotRequestType,
} from '../requests/models/bval-snapshot-request-type';
import { RequestFrequency, requestFrequency } from './request-frequency';
import {
  TerminalIdentity,
  terminalIdentity,
  terminalIdentityRequest,
  terminalIdentityResponse,
} from './terminal-identity';
import {
  BvalSnapshotRequestFormatting,
  bvalSnapshotRequestFormatting,
  bvalSnapshotRequestFormattingRequest,
  bvalSnapshotRequestFormattingResponse,
} from '../requests/models/bval-snapshot-request-formatting';
import { BvalSnapshotTier, bvalSnapshotTier } from './bval-snapshot-tier';
import {
  BvalPricingSourceOptions,
  bvalPricingSourceOptions,
  bvalPricingSourceOptionsRequest,
  bvalPricingSourceOptionsResponse,
} from './bval-pricing-source-options';
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

export interface BvalSnapshotRequest extends BaseRequest {
  /** JSON-LD type */
  _type: 'BvalSnapshotRequest';
  /** JSON-LD id */
  fieldList: Id;
  formatting?: BvalSnapshotRequestFormatting | undefined;
  /** You should expect the response for a Tier 1 within 45 minutes of the snapshot time, and a Tier 2 snapshot within 3 hours. */
  snapshotTier: BvalSnapshotTier;
  /** Pricing Source options for BVAL snapshot requests. */
  pricingSourceOptions?: BvalPricingSourceOptions | undefined;
}

export namespace BvalSnapshotRequest {
  export type _Type = BvalSnapshotRequestType;
  export type Formatting = BvalSnapshotRequestFormatting;
}

/**
 * Cast schema for the BvalSnapshotRequest model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const bvalSnapshotRequest = core.cast.identity<BvalSnapshotRequest>();

/**
 * Cast schema for mapping API responses to the BvalSnapshotRequest application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const bvalSnapshotRequestResponse = core.cast.object(
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
      'snapshotTier',
      'pricingSourceOptions',
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
      snapshotTier: raw['snapshotTier'],
      pricingSourceOptions:
        raw['pricingSourceOptions'] == null
          ? raw['pricingSourceOptions']
          : bvalPricingSourceOptionsResponse.parse(raw['pricingSourceOptions']),
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
    'snapshotTier',
  ],
);

/**
 * Cast schema for mapping the BvalSnapshotRequest application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const bvalSnapshotRequestRequest = core.cast.object(
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
      snapshotTier: raw['snapshotTier'],
      pricingSourceOptions:
        raw['pricingSourceOptions'] == null
          ? raw['pricingSourceOptions']
          : bvalPricingSourceOptionsRequest.parse(raw['pricingSourceOptions']),
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
    'snapshotTier',
  ],
);
