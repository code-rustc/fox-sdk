import {
  GetRootRequestApiVersion,
  getRootRequestApiVersion,
} from '../common/get-root-request-api-version';
import { TriggerPostPayload, triggerPostPayload } from '../common/trigger-post-payload';
import { TriggerPatchPayload, triggerPatchPayload } from '../common/trigger-patch-payload';

export interface GetTriggersRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  pageSize?: number;
  Authorization?: string;
  JWT?: string;
}

export interface PostTriggerRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
  body: TriggerPostPayload;
}

export interface GetTriggerRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface PatchTriggerRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
  body: TriggerPatchPayload;
}

export interface DeleteTriggerRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface GetDeletedTriggerRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}
