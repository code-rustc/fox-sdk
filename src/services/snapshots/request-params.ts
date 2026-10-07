import {
  GetRootRequestApiVersion,
  getRootRequestApiVersion,
} from '../common/get-root-request-api-version';

export interface GetSnapshotsRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  startIssued?: string;
  endIssued?: string;
  Authorization?: string;
  JWT?: string;
}

export interface GetSnapshotRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}
