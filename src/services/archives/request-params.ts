import {
  GetRootRequestApiVersion,
  getRootRequestApiVersion,
} from '../common/get-root-request-api-version';
import { ArchiveStatus, archiveStatus } from '../common/archive-status';

export interface GetArchivesRequest {
  'api-version': GetRootRequestApiVersion;
  status?: ArchiveStatus;
  startSnapshotDate?: string;
  endSnapshotDate?: string;
  startIssued?: string;
  endIssued?: string;
  page?: number;
  pageSize?: number;
  Authorization?: string;
  JWT?: string;
}

export interface GetArchiveRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}
