import {
  GetRootRequestApiVersion,
  getRootRequestApiVersion,
} from '../common/get-root-request-api-version';

export interface PublisherResourcesRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  sort?: string;
  q?: string;
  Authorization?: string;
  JWT?: string;
}

export interface PublisherMetadataRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}
