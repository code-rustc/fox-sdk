import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import {
  PricingSnapshotRequestPostPayloadType,
  pricingSnapshotRequestPostPayloadType,
} from '../requests/models/pricing-snapshot-request-post-payload-type';
import {
  PricingSnapshotRequestPostPayloadUniverse,
  pricingSnapshotRequestPostPayloadUniverse,
  pricingSnapshotRequestPostPayloadUniverseRequest,
  pricingSnapshotRequestPostPayloadUniverseResponse,
} from '../requests/models/pricing-snapshot-request-post-payload-universe';
import {
  PricingSnapshotRequestPostPayloadTrigger,
  pricingSnapshotRequestPostPayloadTrigger,
  pricingSnapshotRequestPostPayloadTriggerRequest,
  pricingSnapshotRequestPostPayloadTriggerResponse,
} from '../requests/models/pricing-snapshot-request-post-payload-trigger';
import {
  PricingSnapshotRequestPostPayloadFormatting,
  pricingSnapshotRequestPostPayloadFormatting,
  pricingSnapshotRequestPostPayloadFormattingRequest,
  pricingSnapshotRequestPostPayloadFormattingResponse,
} from '../requests/models/pricing-snapshot-request-post-payload-formatting';
import {
  PricingSnapshotPricingSourceOptions,
  pricingSnapshotPricingSourceOptions,
  pricingSnapshotPricingSourceOptionsRequest,
  pricingSnapshotPricingSourceOptionsResponse,
} from './pricing-snapshot-pricing-source-options';
import {
  TerminalIdentity,
  terminalIdentity,
  terminalIdentityRequest,
  terminalIdentityResponse,
} from './terminal-identity';
import {
  PricingSnapshotRuntimeOptions,
  pricingSnapshotRuntimeOptions,
  pricingSnapshotRuntimeOptionsRequest,
  pricingSnapshotRuntimeOptionsResponse,
} from './pricing-snapshot-runtime-options';
import { RequestUserSuppliedName } from './request-user-supplied-name';
import { RequestIdentifier } from './request-identifier';
import { RequestTitle } from './request-title';
import { Description } from './description';

export interface PricingSnapshotRequestPostPayload {
  /** The JSON-LD context. */
  '@context'?: Context | undefined;
  /** JSON-LD type */
  _type: 'PricingSnapshotRequest';
  /** The name of the request to create custom dataset. If you do not provide a `title`, you must provide a `name`. For more: [Request Details](https://developer.bloomberg.com/portal/products/dl?chapterId=4565#ds152). */
  name?: RequestUserSuppliedName | undefined;
  /** The unique identifier for the request. If not supplied, one will be generated on the user's behalf. For more: [Handling ID Limitations](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4749&entityType=document#advanced_concepts-handling_id_limitations). */
  identifier?: RequestIdentifier | undefined;
  /** Title of the request to create custom dataset. If you do not provide a `name`, you must provide a `title`. For more: [Request Details](https://developer.bloomberg.com/portal/products/dl?chapterId=4565#ds152). */
  title?: RequestTitle | undefined;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description?: Description | undefined;
  universe: PricingSnapshotRequestPostPayloadUniverse;
  trigger: PricingSnapshotRequestPostPayloadTrigger;
  formatting?: PricingSnapshotRequestPostPayloadFormatting | undefined;
  pricingSourceOptions?: PricingSnapshotPricingSourceOptions | undefined;
  /** Clients whose firms subscribe to the BLOOMBERG PROFESSIONAL service have the option of linking their data license account to their BLOOMBERG terminal to take advantage of personal defaults (for example a contributor pricing source). Linking your Data License requests to a Bloomberg Terminal that has been cancelled or moved may impact data in the response. Users should to be aware of any changes to the linked Bloomberg Terminals at all times. If a Bloomberg terminal becomes cancelled users should remove any links to it from their Data License requests immediately.
   */
  terminalIdentity?: TerminalIdentity | undefined;
  /** Options specific to pricing snapshot requests. */
  runtimeOptions?: PricingSnapshotRuntimeOptions | undefined;
}

export namespace PricingSnapshotRequestPostPayload {
  export type _Type = PricingSnapshotRequestPostPayloadType;
  export type Universe = PricingSnapshotRequestPostPayloadUniverse;
  export type Trigger = PricingSnapshotRequestPostPayloadTrigger;
  export type Formatting = PricingSnapshotRequestPostPayloadFormatting;
}

/**
 * Cast schema for the PricingSnapshotRequestPostPayload model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const pricingSnapshotRequestPostPayload =
  core.cast.identity<PricingSnapshotRequestPostPayload>();

/**
 * Cast schema for mapping API responses to the PricingSnapshotRequestPostPayload application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const pricingSnapshotRequestPostPayloadResponse = core.cast.object(
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
      'trigger',
      'formatting',
      'pricingSourceOptions',
      'terminalIdentity',
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
      '@type': raw['@type'],
      name: raw['name'],
      identifier: raw['identifier'],
      title: raw['title'],
      description: raw['description'],
      universe: raw['universe'],
      trigger: raw['trigger'],
      formatting: raw['formatting'],
      pricingSourceOptions:
        raw['pricingSourceOptions'] == null
          ? raw['pricingSourceOptions']
          : pricingSnapshotPricingSourceOptionsResponse.parse(raw['pricingSourceOptions']),
      terminalIdentity: raw['terminalIdentity'],
      runtimeOptions:
        raw['runtimeOptions'] == null
          ? raw['runtimeOptions']
          : pricingSnapshotRuntimeOptionsResponse.parse(raw['runtimeOptions']),
    };
  },
  ['@type', 'universe', 'trigger'],
);

/**
 * Cast schema for mapping the PricingSnapshotRequestPostPayload application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const pricingSnapshotRequestPostPayloadRequest = core.cast.object(
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
      trigger: raw['trigger'],
      formatting: raw['formatting'],
      pricingSourceOptions:
        raw['pricingSourceOptions'] == null
          ? raw['pricingSourceOptions']
          : pricingSnapshotPricingSourceOptionsRequest.parse(raw['pricingSourceOptions']),
      terminalIdentity: raw['terminalIdentity'],
      runtimeOptions:
        raw['runtimeOptions'] == null
          ? raw['runtimeOptions']
          : pricingSnapshotRuntimeOptionsRequest.parse(raw['runtimeOptions']),
    };
  },
  ['@type', 'universe', 'trigger'],
);
