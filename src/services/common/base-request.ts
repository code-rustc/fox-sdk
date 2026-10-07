import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import { RequestFrequency, requestFrequency } from './request-frequency';
import {
  TerminalIdentity,
  terminalIdentity,
  terminalIdentityRequest,
  terminalIdentityResponse,
} from './terminal-identity';
import { Id } from './id';
import { Type_ } from './type';
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

export interface BaseRequest {
  /** The JSON-LD context. */
  '@context': Context;
  /** JSON-LD id */
  '@id': Id;
  /** JSON-LD type */
  '@type': Type_;
  /** The name of the request to create custom dataset. If you do not provide a `title`, you must provide a `name`. For more: [Request Details](https://developer.bloomberg.com/portal/products/dl?chapterId=4565#ds152). */
  name?: RequestUserSuppliedName | undefined;
  /** The unique identifier for the request. If not supplied, one will be generated on the user's behalf. For more: [Handling ID Limitations](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4749&entityType=document#advanced_concepts-handling_id_limitations). */
  identifier: RequestIdentifier;
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title: Title;
  /** Request frequency as defined by its trigger */
  frequency: RequestFrequency;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description?: Description | undefined;
  /** JSON-LD id */
  universe: Id;
  /** JSON-LD id */
  trigger: Id;
  /** Clients whose firms subscribe to the BLOOMBERG PROFESSIONAL service have the option of linking their data license account to their BLOOMBERG terminal to take advantage of personal defaults (for example a contributor pricing source). Linking your Data License requests to a Bloomberg Terminal that has been cancelled or moved may impact data in the response. Users should to be aware of any changes to the linked Bloomberg Terminals at all times. If a Bloomberg terminal becomes cancelled users should remove any links to it from their Data License requests immediately.
   */
  terminalIdentity?: TerminalIdentity | undefined;
  /** Dublin Core Metadata Terms, see 'issued' */
  issued: Issued;
  /** Dublin Core Metadata Terms, see 'modified' */
  modified: Modified;
  /** The datetime of the last execution of this request. */
  lastRunDateTime?: LastRunDateTime | undefined;
  /** The datetime of the next scheduled execution of this request. Only provided for scheduled recurring requests. */
  nextRunDateTime?: NextRunDateTime | undefined;
  /** Whether the request is enabled or not. It is set to true by default. This attribute only exists for recurring requests. Once set to false, it cannot be reverted back to true, and the corresponding request is permanently disabled. */
  enabled?: Enabled | undefined;
  /** An IRI to the dataset the request is associated with */
  dataset: AssociatedDataset;
}

/**
 * Cast schema for the BaseRequest model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const baseRequest = core.cast.identity<BaseRequest>();

/**
 * Cast schema for mapping API responses to the BaseRequest application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const baseRequestResponse = core.cast.object(
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
 * Cast schema for mapping the BaseRequest application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const baseRequestRequest = core.cast.object(
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
