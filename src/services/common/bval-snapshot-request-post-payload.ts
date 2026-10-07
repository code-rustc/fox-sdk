import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  BvalSnapshotRequestPostPayloadType,
  bvalSnapshotRequestPostPayloadType,
} from '../requests/models/bval-snapshot-request-post-payload-type';
import {
  BvalSnapshotRequestPostPayloadUniverse,
  bvalSnapshotRequestPostPayloadUniverse,
  bvalSnapshotRequestPostPayloadUniverseRequest,
  bvalSnapshotRequestPostPayloadUniverseResponse,
} from '../requests/models/bval-snapshot-request-post-payload-universe';
import {
  BvalSnapshotRequestPostPayloadFieldList,
  bvalSnapshotRequestPostPayloadFieldList,
  bvalSnapshotRequestPostPayloadFieldListRequest,
  bvalSnapshotRequestPostPayloadFieldListResponse,
} from '../requests/models/bval-snapshot-request-post-payload-field-list';
import {
  BvalSnapshotRequestPostPayloadTrigger,
  bvalSnapshotRequestPostPayloadTrigger,
  bvalSnapshotRequestPostPayloadTriggerRequest,
  bvalSnapshotRequestPostPayloadTriggerResponse,
} from '../requests/models/bval-snapshot-request-post-payload-trigger';
import {
  TerminalIdentity,
  terminalIdentity,
  terminalIdentityRequest,
  terminalIdentityResponse,
} from './terminal-identity';
import {
  BvalSnapshotRequestPostPayloadFormatting,
  bvalSnapshotRequestPostPayloadFormatting,
  bvalSnapshotRequestPostPayloadFormattingRequest,
  bvalSnapshotRequestPostPayloadFormattingResponse,
} from '../requests/models/bval-snapshot-request-post-payload-formatting';
import { BvalSnapshotTier, bvalSnapshotTier } from './bval-snapshot-tier';
import {
  BvalPricingSourceOptions,
  bvalPricingSourceOptions,
  bvalPricingSourceOptionsRequest,
  bvalPricingSourceOptionsResponse,
} from './bval-pricing-source-options';
import { RequestUserSuppliedName } from './request-user-supplied-name';
import { RequestIdentifier } from './request-identifier';
import { RequestTitle } from './request-title';
import { Description } from './description';

/**
 * The POST payload required to create a new request. This has a subset of properties of BvalSnapshotRequest.
 */
export interface BvalSnapshotRequestPostPayload {
  /** The JSON-LD context. */
  '@context'?: Context | undefined;
  /** JSON-LD type */
  _type: 'BvalSnapshotRequest';
  /** The name of the request to create custom dataset. If you do not provide a `title`, you must provide a `name`. For more: [Request Details](https://developer.bloomberg.com/portal/products/dl?chapterId=4565#ds152). */
  name?: RequestUserSuppliedName | undefined;
  /** The unique identifier for the request. If not supplied, one will be generated on the user's behalf. For more: [Handling ID Limitations](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4749&entityType=document#advanced_concepts-handling_id_limitations). */
  identifier?: RequestIdentifier | undefined;
  /** Title of the request to create custom dataset. If you do not provide a `name`, you must provide a `title`. For more: [Request Details](https://developer.bloomberg.com/portal/products/dl?chapterId=4565#ds152). */
  title?: RequestTitle | undefined;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description?: Description | undefined;
  universe: BvalSnapshotRequestPostPayloadUniverse;
  fieldList: BvalSnapshotRequestPostPayloadFieldList;
  trigger: BvalSnapshotRequestPostPayloadTrigger;
  /** Clients whose firms subscribe to the BLOOMBERG PROFESSIONAL service have the option of linking their data license account to their BLOOMBERG terminal to take advantage of personal defaults (for example a contributor pricing source). Linking your Data License requests to a Bloomberg Terminal that has been cancelled or moved may impact data in the response. Users should to be aware of any changes to the linked Bloomberg Terminals at all times. If a Bloomberg terminal becomes cancelled users should remove any links to it from their Data License requests immediately.
   */
  terminalIdentity?: TerminalIdentity | undefined;
  formatting?: BvalSnapshotRequestPostPayloadFormatting | undefined;
  /** You should expect the response for a Tier 1 within 45 minutes of the snapshot time, and a Tier 2 snapshot within 3 hours. */
  snapshotTier: BvalSnapshotTier;
  /** Pricing Source options for BVAL snapshot requests. */
  pricingSourceOptions?: BvalPricingSourceOptions | undefined;
}

export namespace BvalSnapshotRequestPostPayload {
  export type _Type = BvalSnapshotRequestPostPayloadType;
  export type Universe = BvalSnapshotRequestPostPayloadUniverse;
  export type FieldList = BvalSnapshotRequestPostPayloadFieldList;
  export type Trigger = BvalSnapshotRequestPostPayloadTrigger;
  export type Formatting = BvalSnapshotRequestPostPayloadFormatting;
}

/**
 * Cast schema for the BvalSnapshotRequestPostPayload model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const bvalSnapshotRequestPostPayload = core.cast.identity<BvalSnapshotRequestPostPayload>();

/**
 * Cast schema for mapping API responses to the BvalSnapshotRequestPostPayload application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const bvalSnapshotRequestPostPayloadResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@context',
      '@type',
      'name',
      'identifier',
      'title',
      'description',
      'universe',
      'fieldList',
      'trigger',
      'terminalIdentity',
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
      '@type': raw['@type'],
      name: raw['name'],
      identifier: raw['identifier'],
      title: raw['title'],
      description: raw['description'],
      universe: raw['universe'],
      fieldList: raw['fieldList'],
      trigger: raw['trigger'],
      terminalIdentity: raw['terminalIdentity'],
      formatting: raw['formatting'],
      snapshotTier: raw['snapshotTier'],
      pricingSourceOptions:
        raw['pricingSourceOptions'] == null
          ? raw['pricingSourceOptions']
          : bvalPricingSourceOptionsResponse.parse(raw['pricingSourceOptions']),
    };
  },
  ['@type', 'universe', 'fieldList', 'trigger', 'snapshotTier'],
);

/**
 * Cast schema for mapping the BvalSnapshotRequestPostPayload application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const bvalSnapshotRequestPostPayloadRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
      '@type': raw['@type'],
      name: raw['name'],
      identifier: raw['identifier'],
      title: raw['title'],
      description: raw['description'],
      universe: raw['universe'],
      fieldList: raw['fieldList'],
      trigger: raw['trigger'],
      terminalIdentity: raw['terminalIdentity'],
      formatting: raw['formatting'],
      snapshotTier: raw['snapshotTier'],
      pricingSourceOptions:
        raw['pricingSourceOptions'] == null
          ? raw['pricingSourceOptions']
          : bvalPricingSourceOptionsRequest.parse(raw['pricingSourceOptions']),
    };
  },
  ['@type', 'universe', 'fieldList', 'trigger', 'snapshotTier'],
);
