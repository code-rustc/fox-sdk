import {
  GetRootRequestApiVersion,
  getRootRequestApiVersion,
} from '../common/get-root-request-api-version';
import { RequestPostPayload, requestPostPayload } from '../common/request-post-payload';
import { RequestPatchPayload, requestPatchPayload } from '../common/request-patch-payload';

export interface GetRequestsRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  pageSize?: number;
  name?: string;
  enabled?: boolean;
  universeIdentifier?: string;
  fieldListIdentifier?: string;
  triggerIdentifier?: string;
  Authorization?: string;
  JWT?: string;
}

export interface PostRequestRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
  body: RequestPostPayload;
}

export interface GetRequestRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface PatchRequestRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
  body: RequestPatchPayload;
}

export interface GetUniverseByRequestRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  pageSize?: number;
  Authorization?: string;
  JWT?: string;
}

export interface GetFieldListByRequestRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  pageSize?: number;
  Authorization?: string;
  JWT?: string;
}

export interface GetTriggerByRequestRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}
