import {
  GetRootRequestApiVersion,
  getRootRequestApiVersion,
} from '../common/get-root-request-api-version';
import { UniversePostPayload, universePostPayload } from '../common/universe-post-payload';
import {
  GetUniverseRequestRequestType,
  getUniverseRequestRequestType,
} from './models/get-universe-request-request-type';
import { UniversePatchPayload, universePatchPayload } from '../common/universe-patch-payload';

export interface GetUniversesRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  pageSize?: number;
  Authorization?: string;
  JWT?: string;
}

export interface PostUniverseRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
  body: UniversePostPayload;
}

export interface GetUniverseRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  pageSize?: number;
  requestType?: GetUniverseRequestRequestType;
  Authorization?: string;
  JWT?: string;
}

export interface PatchUniverseRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
  body: UniversePatchPayload;
}

export interface DeleteUniverseRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface GetDeletedUniverseRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  pageSize?: number;
  requestType?: GetUniverseRequestRequestType;
  Authorization?: string;
  JWT?: string;
}
