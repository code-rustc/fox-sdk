import {
  GetBulkSamplesCollectionRequestFileExtensions,
  getBulkSamplesCollectionRequestFileExtensions,
} from './models/get-bulk-samples-collection-request-file-extensions';

export interface GetBulkSamplesCollectionRequest {
  prefix?: string;
  limit?: number;
  next?: string;
  datasetNames?: string;
  fileExtensions?: GetBulkSamplesCollectionRequestFileExtensions;
  snapshotDate?: string;
  snapshotStartDate?: string;
  snapshotEndDate?: string;
  Authorization?: string;
  JWT?: string;
}

export interface GetBulkSamplesContentRequest {
  Authorization?: string;
  JWT?: string;
}

export interface HeadBulkSamplesContentRequest {
  Authorization?: string;
  JWT?: string;
}
