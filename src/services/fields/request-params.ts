import {
  GetRootRequestApiVersion,
  getRootRequestApiVersion,
} from '../common/get-root-request-api-version';
import {
  GetFieldsRequestProperties,
  getFieldsRequestProperties,
} from './models/get-fields-request-properties';

export interface GetFieldsRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  pageSize?: number;
  properties?: GetFieldsRequestProperties;
  sort?: string;
  q?: string;
  'DL:Bulk'?: string;
  dlCommercialModelCategory?: string;
  dlAvailableInGetHistory?: boolean;
  'Data License'?: string;
  'Platform: Static'?: string;
  'Platform: Streaming'?: string;
  'Platform: Terminal Required'?: string;
  'xsd:type'?: string;
  'YK: Commodity'?: string;
  'YK: Corporate'?: string;
  'YK: Currency'?: string;
  'YK: Equity'?: string;
  'YK: Index'?: string;
  'YK: Mortgage'?: string;
  'YK: Money Market'?: string;
  'YK: Municipal'?: string;
  'YK: Preferred'?: string;
  'YK: US Government'?: string;
  Authorization?: string;
  JWT?: string;
}

export interface GetFieldRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface GetFieldValuesRequest {
  page?: number;
  pageSize?: number;
  Authorization?: string;
  JWT?: string;
}

export interface GetFieldEnumsRequest {
  page?: number;
  pageSize?: number;
  Authorization?: string;
  JWT?: string;
}
