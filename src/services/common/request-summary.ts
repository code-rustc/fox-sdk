import * as core from '../../core';
import { RequestSummaryType, requestSummaryType } from '../requests/models/request-summary-type';
import { RequestFrequency, requestFrequency } from './request-frequency';
import { Id } from './id';
import { Title } from './title';
import { Description } from './description';
import { Identifier } from './identifier';
import { Issued } from './issued';
import { Modified } from './modified';
import { RequestUserSuppliedName } from './request-user-supplied-name';
import { Enabled } from './enabled';
import { LastRunDateTime } from './last-run-date-time';
import { NextRunDateTime } from './next-run-date-time';

/**
 * Member item of data
 */
export interface RequestSummary {
  /** JSON-LD id */
  '@id': Id;
  /** JSON-LD type */
  '@type': RequestSummaryType;
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title: Title;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description?: Description | undefined;
  /** The unique identifier for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  identifier: Identifier;
  /** JSON-LD id */
  universe: Id;
  /** JSON-LD id */
  fieldList?: Id | undefined;
  /** JSON-LD id */
  trigger: Id;
  /** Dublin Core Metadata Terms, see 'issued' */
  issued: Issued;
  /** Dublin Core Metadata Terms, see 'modified' */
  modified: Modified;
  /** The name of the request to create custom dataset. If you do not provide a `title`, you must provide a `name`. For more: [Request Details](https://developer.bloomberg.com/portal/products/dl?chapterId=4565#ds152). */
  name?: RequestUserSuppliedName | undefined;
  /** Whether the request is enabled or not. It is set to true by default. This attribute only exists for recurring requests. Once set to false, it cannot be reverted back to true, and the corresponding request is permanently disabled. */
  enabled?: Enabled | undefined;
  /** Request frequency as defined by its trigger */
  frequency: RequestFrequency;
  /** The datetime of the last execution of this request. */
  lastRunDateTime?: LastRunDateTime | undefined;
  /** The datetime of the next scheduled execution of this request. Only provided for scheduled recurring requests. */
  nextRunDateTime?: NextRunDateTime | undefined;
}

export namespace RequestSummary {
  export type _Type = RequestSummaryType;
}

/**
 * Cast schema for the RequestSummary model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const requestSummary = core.cast.identity<RequestSummary>();

/**
 * Cast schema for mapping API responses to the RequestSummary application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const requestSummaryResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@id',
      '@type',
      'title',
      'description',
      'identifier',
      'universe',
      'fieldList',
      'trigger',
      'issued',
      'modified',
      'name',
      'enabled',
      'frequency',
      'lastRunDateTime',
      'nextRunDateTime',
    ]);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      '@id': raw['@id'],
      '@type': raw['@type'],
      title: raw['title'],
      description: raw['description'],
      identifier: raw['identifier'],
      universe: raw['universe'],
      fieldList: raw['fieldList'],
      trigger: raw['trigger'],
      issued: raw['issued'],
      modified: raw['modified'],
      name: raw['name'],
      enabled: raw['enabled'],
      frequency: raw['frequency'],
      lastRunDateTime: raw['lastRunDateTime'],
      nextRunDateTime: raw['nextRunDateTime'],
    };
  },
  ['@id', '@type', 'title', 'identifier', 'universe', 'trigger', 'issued', 'modified', 'frequency'],
);

/**
 * Cast schema for mapping the RequestSummary application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const requestSummaryRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@id': raw['@id'],
      '@type': raw['@type'],
      title: raw['title'],
      description: raw['description'],
      identifier: raw['identifier'],
      universe: raw['universe'],
      fieldList: raw['fieldList'],
      trigger: raw['trigger'],
      issued: raw['issued'],
      modified: raw['modified'],
      name: raw['name'],
      enabled: raw['enabled'],
      frequency: raw['frequency'],
      lastRunDateTime: raw['lastRunDateTime'],
      nextRunDateTime: raw['nextRunDateTime'],
    };
  },
  ['@id', '@type', 'title', 'identifier', 'universe', 'trigger', 'issued', 'modified', 'frequency'],
);
