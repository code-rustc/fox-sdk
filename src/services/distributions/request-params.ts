import {
  GetRootRequestApiVersion,
  getRootRequestApiVersion,
} from '../common/get-root-request-api-version';
import { DistributionType, distributionType } from '../common/distribution-type';

export interface GetDistributionsRequest {
  'api-version': GetRootRequestApiVersion;
  type?: DistributionType | DistributionType[];
  Authorization?: string;
  JWT?: string;
}

export interface GetDistributionRequest {
  'api-version': GetRootRequestApiVersion;
  Range?: string;
  Authorization?: string;
  JWT?: string;
}
