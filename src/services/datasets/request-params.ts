import {
  GetRootRequestApiVersion,
  getRootRequestApiVersion,
} from '../common/get-root-request-api-version';

export interface GetDatasetsRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  sort?: string;
  q?: string;
  subscribed?: boolean;
  moduleLevel1?: string;
  moduleLevel2?: string;
  moduleLevel3?: string;
  universeLabel?: string;
  universeSubsetLabel?: string;
  publisher?: string;
  Authorization?: string;
  JWT?: string;
}

export interface GetDatasetRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}
