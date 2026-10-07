import {
  GetRootRequestApiVersion,
  getRootRequestApiVersion,
} from '../common/get-root-request-api-version';
import { FieldListType, fieldListType } from '../common/field-list-type';
import {
  PostFieldListRequestBody,
  postFieldListRequestBody,
} from './models/post-field-list-request-body';
import { FieldListPatchPayload, fieldListPatchPayload } from '../common/field-list-patch-payload';

export interface GetFieldListsRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  pageSize?: number;
  type?: FieldListType;
  Authorization?: string;
  JWT?: string;
}

export interface PostFieldListRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
  body: PostFieldListRequestBody;
}

export interface GetFieldListRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  pageSize?: number;
  Authorization?: string;
  JWT?: string;
}

export interface PatchFieldListRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
  body: FieldListPatchPayload;
}

export interface DeleteFieldListRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface GetDeletedFieldListRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  pageSize?: number;
  Authorization?: string;
  JWT?: string;
}
