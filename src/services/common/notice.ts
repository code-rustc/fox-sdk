import * as core from '../../core';
import { AssetClass, assetClass } from './asset-class';
import {
  NoticeAttachmentsItem,
  noticeAttachmentsItem,
  noticeAttachmentsItemRequest,
  noticeAttachmentsItemResponse,
} from '../notices/models/notice-attachments-item';
import { ChangeCategory, changeCategory } from './change-category';
import { ChangeDriver, changeDriver } from './change-driver';
import { DataLicenseTheme, dataLicenseTheme } from './data-license-theme';
import {
  NoticeEffectiveDate,
  noticeEffectiveDate,
  noticeEffectiveDateRequest,
  noticeEffectiveDateResponse,
} from '../notices/models/notice-effective-date';
import { NoticeImpact, noticeImpact } from './notice-impact';
import {
  NoticeProductsItem,
  noticeProductsItem,
  noticeProductsItemRequest,
  noticeProductsItemResponse,
} from '../notices/models/notice-products-item';
import { Region, region } from './region';
import {
  NoticeRevisionStatus,
  noticeRevisionStatus,
} from '../notices/models/notice-revision-status';
import {
  NoticeEidsItem,
  noticeEidsItem,
  noticeEidsItemRequest,
  noticeEidsItemResponse,
} from '../notices/models/notice-eids-item';
import {
  NoticeExchangesItem,
  noticeExchangesItem,
  noticeExchangesItemRequest,
  noticeExchangesItemResponse,
} from '../notices/models/notice-exchanges-item';
import {
  NoticeFieldsItem,
  noticeFieldsItem,
  noticeFieldsItemRequest,
  noticeFieldsItemResponse,
} from '../notices/models/notice-fields-item';
import { Securities, securities, securitiesRequest, securitiesResponse } from './securities';
import {
  PartialNotice,
  partialNotice,
  partialNoticeRequest,
  partialNoticeResponse,
} from './partial-notice';
import { NoticeAttachments } from './notice-attachments';
import { NoticeProducts } from './notice-products';
import { NoticeEids } from './notice-eids';
import { NoticeExchanges } from './notice-exchanges';
import { NoticeFields } from './notice-fields';

export interface Notice extends PartialNotice {
  /** Notices with attachments will contain the name and key of each file */
  attachments?: NoticeAttachmentsItem[] | undefined;
  /** The effective date range */
  effectiveDate?: NoticeEffectiveDate | undefined;
  /** List of products */
  products?: NoticeProductsItem[] | undefined;
  /** The status provided for the revision */
  revisionStatus?: NoticeRevisionStatus | undefined;
  /** List of EIDs containing current impacted and/or new EIDs */
  eids?: NoticeEidsItem[] | undefined;
  /** List of exchanges containing current impacted and/or new exchanges */
  exchanges?: NoticeExchangesItem[] | undefined;
  /** List of fields */
  fields?: NoticeFieldsItem[] | undefined;
  /** Page of securities data associated with the notice */
  securities?: Securities | undefined;
}

export namespace Notice {
  export type Attachments = NoticeAttachments;
  export interface EffectiveDate {
    end?: NoticeEffectiveDate['end'];
    start?: NoticeEffectiveDate['start'];
    isTentative?: NoticeEffectiveDate['isTentative'];
  }
  export type Products = NoticeProducts;
  export type RevisionStatus = NoticeRevisionStatus;
  export type Eids = NoticeEids;
  export type Exchanges = NoticeExchanges;
  export type Fields = NoticeFields;
}

/**
 * Cast schema for the Notice model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const notice = core.cast.identity<Notice>();

/**
 * Cast schema for mapping API responses to the Notice application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const noticeResponse = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  const __declaredKeys = new Set<string>([
    'assetClasses',
    'attachments',
    'distributionNames',
    'changeCategory',
    'changeDriver',
    'clientAction',
    'dataLicenseThemes',
    'description',
    'effectiveDate',
    'id',
    'impact',
    'noticeTitle',
    'products',
    'publishedDate',
    'refId',
    'regions',
    'revisionDate',
    'revisionNotes',
    'revisionStatus',
    'eids',
    'exchanges',
    'fields',
    'securities',
  ]);
  const __extras: { [key: string]: unknown } = {};
  for (const __key of globalThis.Object.keys(raw as object)) {
    if (!__declaredKeys.has(__key)) {
      __extras[__key] = (raw as { [key: string]: unknown })[__key];
    }
  }
  return {
    ...__extras,
    assetClasses: raw['assetClasses'],
    attachments: Array.isArray(raw['attachments'])
      ? (raw['attachments'] as any[]).map((v: any) =>
          v == null ? v : noticeAttachmentsItemResponse.parse(v),
        )
      : (raw['attachments'] as any),
    distributionNames: raw['distributionNames'],
    changeCategory: raw['changeCategory'],
    changeDriver: raw['changeDriver'],
    clientAction: raw['clientAction'],
    dataLicenseThemes: raw['dataLicenseThemes'],
    description: raw['description'],
    effectiveDate:
      raw['effectiveDate'] == null
        ? raw['effectiveDate']
        : noticeEffectiveDateResponse.parse(raw['effectiveDate']),
    id: raw['id'],
    impact: raw['impact'],
    noticeTitle: raw['noticeTitle'],
    products: Array.isArray(raw['products'])
      ? (raw['products'] as any[]).map((v: any) =>
          v == null ? v : noticeProductsItemResponse.parse(v),
        )
      : (raw['products'] as any),
    publishedDate: raw['publishedDate'],
    refId: raw['refId'],
    regions: raw['regions'],
    revisionDate: raw['revisionDate'],
    revisionNotes: raw['revisionNotes'],
    revisionStatus: raw['revisionStatus'],
    eids: Array.isArray(raw['eids'])
      ? (raw['eids'] as any[]).map((v: any) => (v == null ? v : noticeEidsItemResponse.parse(v)))
      : (raw['eids'] as any),
    exchanges: Array.isArray(raw['exchanges'])
      ? (raw['exchanges'] as any[]).map((v: any) =>
          v == null ? v : noticeExchangesItemResponse.parse(v),
        )
      : (raw['exchanges'] as any),
    fields: Array.isArray(raw['fields'])
      ? (raw['fields'] as any[]).map((v: any) =>
          v == null ? v : noticeFieldsItemResponse.parse(v),
        )
      : (raw['fields'] as any),
    securities:
      raw['securities'] == null ? raw['securities'] : securitiesResponse.parse(raw['securities']),
  };
}, []);

/**
 * Cast schema for mapping the Notice application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const noticeRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return {
    assetClasses: raw['assetClasses'],
    attachments: Array.isArray(raw['attachments'])
      ? (raw['attachments'] as any[]).map((v: any) =>
          v == null ? v : noticeAttachmentsItemRequest.parse(v),
        )
      : (raw['attachments'] as any),
    distributionNames: raw['distributionNames'],
    changeCategory: raw['changeCategory'],
    changeDriver: raw['changeDriver'],
    clientAction: raw['clientAction'],
    dataLicenseThemes: raw['dataLicenseThemes'],
    description: raw['description'],
    effectiveDate:
      raw['effectiveDate'] == null
        ? raw['effectiveDate']
        : noticeEffectiveDateRequest.parse(raw['effectiveDate']),
    id: raw['id'],
    impact: raw['impact'],
    noticeTitle: raw['noticeTitle'],
    products: Array.isArray(raw['products'])
      ? (raw['products'] as any[]).map((v: any) =>
          v == null ? v : noticeProductsItemRequest.parse(v),
        )
      : (raw['products'] as any),
    publishedDate: raw['publishedDate'],
    refId: raw['refId'],
    regions: raw['regions'],
    revisionDate: raw['revisionDate'],
    revisionNotes: raw['revisionNotes'],
    revisionStatus: raw['revisionStatus'],
    eids: Array.isArray(raw['eids'])
      ? (raw['eids'] as any[]).map((v: any) => (v == null ? v : noticeEidsItemRequest.parse(v)))
      : (raw['eids'] as any),
    exchanges: Array.isArray(raw['exchanges'])
      ? (raw['exchanges'] as any[]).map((v: any) =>
          v == null ? v : noticeExchangesItemRequest.parse(v),
        )
      : (raw['exchanges'] as any),
    fields: Array.isArray(raw['fields'])
      ? (raw['fields'] as any[]).map((v: any) => (v == null ? v : noticeFieldsItemRequest.parse(v)))
      : (raw['fields'] as any),
    securities:
      raw['securities'] == null ? raw['securities'] : securitiesRequest.parse(raw['securities']),
  };
}, []);
