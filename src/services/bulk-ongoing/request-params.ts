import {
  GetBulkCollectionRequestFileExtensions,
  getBulkCollectionRequestFileExtensions,
} from './models/get-bulk-collection-request-file-extensions';

export interface GetBulkCollectionRequest {
  prefix?: string;
  limit?: number;
  next?: string;
  packageCodes?: number;
  datasetNames?: string;
  fileExtensions?: GetBulkCollectionRequestFileExtensions;
  snapshotDate?: string;
  snapshotStartDate?: string;
  snapshotEndDate?: string;
  Authorization?: string;
  JWT?: string;
}

export interface GetBulkContentRequest {
  Authorization?: string;
  JWT?: string;
}

export interface HeadBulkContentRequest {
  Authorization?: string;
  JWT?: string;
}
