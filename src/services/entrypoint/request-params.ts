import {
  GetRootRequestApiVersion,
  getRootRequestApiVersion,
} from '../common/get-root-request-api-version';

export interface GetRootRequest {
  'api-version': GetRootRequestApiVersion;
  JWT?: string;
  Authorization?: string;
}
