import * as core from '../../core';
import { Context, context, contextRequest, contextResponse } from './context';
import { HistoryFieldListType, historyFieldListType } from './history-field-list-type';
import {
  HistoryFieldListInputItem,
  historyFieldListInputItem,
  historyFieldListInputItemRequest,
  historyFieldListInputItemResponse,
} from './history-field-list-input-item';
import { PostComponentIdentifier } from './post-component-identifier';
import { Title } from './title';
import { Description } from './description';
import { HistoryFieldListInputItems } from './history-field-list-input-items';

/**
 * The POST payload required to create a new field list. This has a subset of properties of FieldList.
 */
export interface HistoryFieldListPostPayload {
  /** The JSON-LD context. */
  '@context'?: Context | undefined;
  /** JSON-LD type */
  '@type': HistoryFieldListType;
  /** The unique identifier for the reusable resource (i.e., universe, field list, or trigger) that you want to create. For more: [Creating Reusable Resources](https://developer.bloomberg.com/portal/documents/per_security/getting_started_with_rest_api?chapterId=4743). */
  identifier: PostComponentIdentifier;
  /** The name, which may not be unique, for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  title: Title;
  /** The description for the item in the response. For more: [Data License](https://developer.bloomberg.com/portal/products/dl). */
  description?: Description | undefined;
  /** A list of field name IRIs conforming to `https://api.bloomberg.com/eap/catalogs/bbg/fields/{field}`, with optional history-specific properties. */
  contains: HistoryFieldListInputItems;
}

/**
 * Cast schema for the HistoryFieldListPostPayload model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const historyFieldListPostPayload = core.cast.identity<HistoryFieldListPostPayload>();

/**
 * Cast schema for mapping API responses to the HistoryFieldListPostPayload application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const historyFieldListPostPayloadResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      '@context',
      '@type',
      'identifier',
      'title',
      'description',
      'contains',
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
      identifier: raw['identifier'],
      title: raw['title'],
      description: raw['description'],
      contains: raw['contains'],
    };
  },
  ['@type', 'identifier', 'title', 'contains'],
);

/**
 * Cast schema for mapping the HistoryFieldListPostPayload application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const historyFieldListPostPayloadRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      '@context': raw['@context'] == null ? raw['@context'] : contextRequest.parse(raw['@context']),
      '@type': raw['@type'],
      identifier: raw['identifier'],
      title: raw['title'],
      description: raw['description'],
      contains: raw['contains'],
    };
  },
  ['@type', 'identifier', 'title', 'contains'],
);
