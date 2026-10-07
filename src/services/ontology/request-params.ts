import {
  GetRootRequestApiVersion,
  getRootRequestApiVersion,
} from '../common/get-root-request-api-version';

export interface GetOntologyRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}
