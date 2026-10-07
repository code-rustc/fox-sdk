import { NoticeProduct, noticeProduct } from '../common/notice-product';
import { ChangeCategory, changeCategory } from '../common/change-category';
import { ChangeDriver, changeDriver } from '../common/change-driver';
import { NoticeImpact, noticeImpact } from '../common/notice-impact';
import { DataLicenseTheme, dataLicenseTheme } from '../common/data-license-theme';
import { AssetClass, assetClass } from '../common/asset-class';
import { Region, region } from '../common/region';
import {
  GetNoticesRequestSortDirection,
  getNoticesRequestSortDirection,
} from './models/get-notices-request-sort-direction';
import {
  GetNoticesRequestSortField,
  getNoticesRequestSortField,
} from './models/get-notices-request-sort-field';

export interface GetNoticesRequest {
  products?: NoticeProduct | NoticeProduct[];
  refIds?: number | number[];
  publishedStartDate?: string;
  publishedEndDate?: string;
  effectiveStartDate?: string;
  effectiveEndDate?: string;
  revisedOnly?: boolean;
  cancelledOnly?: boolean;
  changeCategories?: ChangeCategory | ChangeCategory[];
  changeDrivers?: ChangeDriver | ChangeDriver[];
  impacts?: NoticeImpact | NoticeImpact[];
  distributionNames?: string | string[];
  packageCodes?: number | number[];
  dataLicenseThemes?: DataLicenseTheme | DataLicenseTheme[];
  domains?: string | string[];
  eids?: number | number[];
  fields?: string | string[];
  assetClasses?: AssetClass | AssetClass[];
  bbgids?: string | string[];
  bbUniques?: string | string[];
  parsekeyables?: string | string[];
  regions?: Region | Region[];
  onlyFirmTargeted?: boolean;
  keywords?: string;
  limit?: number;
  next?: string;
  sortDirection?: GetNoticesRequestSortDirection;
  sortField?: GetNoticesRequestSortField;
}

export interface SecuritiesByNoticeIdRequest {
  page?: number;
}
