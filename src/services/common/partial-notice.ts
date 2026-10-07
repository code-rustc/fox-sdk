import * as core from '../../core';
import { AssetClass, assetClass } from './asset-class';
import {
  PartialNoticeAttachmentsItem,
  partialNoticeAttachmentsItem,
  partialNoticeAttachmentsItemRequest,
  partialNoticeAttachmentsItemResponse,
} from '../notices/models/partial-notice-attachments-item';
import { ChangeCategory, changeCategory } from './change-category';
import { ChangeDriver, changeDriver } from './change-driver';
import { DataLicenseTheme, dataLicenseTheme } from './data-license-theme';
import {
  PartialNoticeEffectiveDate,
  partialNoticeEffectiveDate,
  partialNoticeEffectiveDateRequest,
  partialNoticeEffectiveDateResponse,
} from '../notices/models/partial-notice-effective-date';
import { NoticeImpact, noticeImpact } from './notice-impact';
import {
  PartialNoticeProductsItem,
  partialNoticeProductsItem,
  partialNoticeProductsItemRequest,
  partialNoticeProductsItemResponse,
} from '../notices/models/partial-notice-products-item';
import { Region, region } from './region';
import {
  PartialNoticeRevisionStatus,
  partialNoticeRevisionStatus,
} from '../notices/models/partial-notice-revision-status';
import { PartialNoticeAttachments } from './partial-notice-attachments';
import { PartialNoticeProducts } from './partial-notice-products';

/**
 * Basic information for a notice
 */
export interface PartialNotice {
  /** List of asset classes */
  assetClasses?: AssetClass[] | undefined;
  /** Notices with attachments will contain the name and key of each file */
  attachments?: PartialNoticeAttachmentsItem[] | undefined;
  /** List of Bulk Datasets distribution names */
  distributionNames?: string[] | undefined;
  /** List of change categories */
  changeCategory?: ChangeCategory[] | undefined;
  changeDriver?: ChangeDriver | undefined;
  /** The client action */
  clientAction?: string | undefined;
  /** List of data license content classes */
  dataLicenseThemes?: DataLicenseTheme[] | undefined;
  /** Notice Description */
  description?: string | undefined;
  /** The effective date range */
  effectiveDate?: PartialNoticeEffectiveDate | undefined;
  /** The notice identifier. Note that a new identifier is generated for each revision to a notice - use refId, relevant products, and revision information to track notice revisions */
  id?: number | undefined;
  impact?: NoticeImpact | undefined;
  /** The title */
  noticeTitle?: string | undefined;
  /** List of products */
  products?: PartialNoticeProductsItem[] | undefined;
  /** Published date of the notice */
  publishedDate?: string | undefined;
  /** Reference IDs represent a collection of notice IDs */
  refId?: number | undefined;
  /** List of Regions */
  regions?: Region[] | undefined;
  /** The date the notice was revised */
  revisionDate?: string | undefined;
  /** Reason for the notice revision */
  revisionNotes?: string | undefined;
  /** The status provided for the revision */
  revisionStatus?: PartialNoticeRevisionStatus | undefined;
}

export namespace PartialNotice {
  export type Attachments = PartialNoticeAttachments;
  export interface EffectiveDate {
    end?: PartialNoticeEffectiveDate['end'];
    start?: PartialNoticeEffectiveDate['start'];
    isTentative?: PartialNoticeEffectiveDate['isTentative'];
  }
  export type Products = PartialNoticeProducts;
  export type RevisionStatus = PartialNoticeRevisionStatus;
}

/**
 * Cast schema for the PartialNotice model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const partialNotice = core.cast.identity<PartialNotice>();

/**
 * Cast schema for mapping API responses to the PartialNotice application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const partialNoticeResponse = core.cast.object((raw: any): any => {
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
          v == null ? v : partialNoticeAttachmentsItemResponse.parse(v),
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
        : partialNoticeEffectiveDateResponse.parse(raw['effectiveDate']),
    id: raw['id'],
    impact: raw['impact'],
    noticeTitle: raw['noticeTitle'],
    products: Array.isArray(raw['products'])
      ? (raw['products'] as any[]).map((v: any) =>
          v == null ? v : partialNoticeProductsItemResponse.parse(v),
        )
      : (raw['products'] as any),
    publishedDate: raw['publishedDate'],
    refId: raw['refId'],
    regions: raw['regions'],
    revisionDate: raw['revisionDate'],
    revisionNotes: raw['revisionNotes'],
    revisionStatus: raw['revisionStatus'],
  };
}, []);

/**
 * Cast schema for mapping the PartialNotice application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const partialNoticeRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return {
    assetClasses: raw['assetClasses'],
    attachments: Array.isArray(raw['attachments'])
      ? (raw['attachments'] as any[]).map((v: any) =>
          v == null ? v : partialNoticeAttachmentsItemRequest.parse(v),
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
        : partialNoticeEffectiveDateRequest.parse(raw['effectiveDate']),
    id: raw['id'],
    impact: raw['impact'],
    noticeTitle: raw['noticeTitle'],
    products: Array.isArray(raw['products'])
      ? (raw['products'] as any[]).map((v: any) =>
          v == null ? v : partialNoticeProductsItemRequest.parse(v),
        )
      : (raw['products'] as any),
    publishedDate: raw['publishedDate'],
    refId: raw['refId'],
    regions: raw['regions'],
    revisionDate: raw['revisionDate'],
    revisionNotes: raw['revisionNotes'],
    revisionStatus: raw['revisionStatus'],
  };
}, []);
