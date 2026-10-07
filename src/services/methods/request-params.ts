import {
  GetRootRequestApiVersion,
  getRootRequestApiVersion,
} from '../common/get-root-request-api-version';

export interface HeadRootRequest {
  'api-version': GetRootRequestApiVersion;
  JWT?: string;
  Authorization?: string;
}

export interface OptionsRootRequest {
  'api-version': GetRootRequestApiVersion;
  JWT?: string;
  Authorization?: string;
}

export interface HeadOntologyRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface OptionsOntologyRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface HeadCatalogsRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface OptionsCatalogsRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface HeadCatalogRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface OptionsCatalogRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface HeadDatasetsRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  q?: string;
  subscribed?: boolean;
  moduleLevel1?: string;
  moduleLevel2?: string;
  moduleLevel3?: string;
  universeLabel?: string;
  universeSubsetLabel?: string;
  publisher?: string;
  Authorization?: string;
  JWT?: string;
}

export interface OptionsDatasetsRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  q?: string;
  subscribed?: boolean;
  moduleLevel1?: string;
  moduleLevel2?: string;
  moduleLevel3?: string;
  universeLabel?: string;
  universeSubsetLabel?: string;
  publisher?: string;
  Authorization?: string;
  JWT?: string;
}

export interface HeadDatasetRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface OptionsDatasetRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface HeadArchivesRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface OptionsArchivesRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface HeadArchiveRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface OptionsArchiveRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface HeadSnapshotsRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  Authorization?: string;
  JWT?: string;
}

export interface OptionsSnapshotsRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  Authorization?: string;
  JWT?: string;
}

export interface HeadSnapshotRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface OptionsSnapshotRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface HeadDistributionsRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface OptionsDistributionsRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface HeadDistributionRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface OptionsDistributionRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface HeadCatalogsBbgPublishersRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface OptionsCatalogsBbgPublishersRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface HeadCatalogsBbgPublishersPublisherNameRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface OptionsCatalogsBbgPublishersPublisherNameRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface HeadUniversesRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  Authorization?: string;
  JWT?: string;
}

export interface OptionsUniversesRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  Authorization?: string;
  JWT?: string;
}

export interface HeadUniverseRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface OptionsUniverseRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface HeadFieldListsRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  Authorization?: string;
  JWT?: string;
}

export interface OptionsFieldListsRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  Authorization?: string;
  JWT?: string;
}

export interface HeadFieldListRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface OptionsFieldListRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface HeadTriggersRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  Authorization?: string;
  JWT?: string;
}

export interface OptionsTriggersRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  Authorization?: string;
  JWT?: string;
}

export interface HeadTriggerRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface OptionsTriggerRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface HeadRequestsRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  Authorization?: string;
  JWT?: string;
}

export interface OptionsRequestsRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  Authorization?: string;
  JWT?: string;
}

export interface HeadRequestRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface OptionsRequestRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface HeadRequestUniverseListRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  pageSize?: number;
  Authorization?: string;
  JWT?: string;
}

export interface OptionsRequestUniverseRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  pageSize?: number;
  Authorization?: string;
  JWT?: string;
}

export interface HeadRequestFieldListRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  pageSize?: number;
  Authorization?: string;
  JWT?: string;
}

export interface OptionsRequestFieldListRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  pageSize?: number;
  Authorization?: string;
  JWT?: string;
}

export interface HeadRequestTriggerRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface OptionsRequestTriggerRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface HeadFieldsRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  q?: string;
  'DL:Bulk'?: string;
  dlCommercialModelCategory?: string;
  dlAvailableInGetHistory?: boolean;
  'Data License'?: string;
  'Platform: Static'?: string;
  'Platform: Streaming'?: string;
  'Platform: Terminal Required'?: string;
  'xsd:type'?: string;
  'YK: Commodity'?: string;
  'YK: Corporate'?: string;
  'YK: Currency'?: string;
  'YK: Equity'?: string;
  'YK: Index'?: string;
  'YK: Mortgage'?: string;
  'YK: Money Market'?: string;
  'YK: Municipal'?: string;
  'YK: Preferred'?: string;
  'YK: US Government'?: string;
  Authorization?: string;
  JWT?: string;
}

export interface OptionsFieldsRequest {
  'api-version': GetRootRequestApiVersion;
  page?: number;
  q?: string;
  'DL:Bulk'?: string;
  dlCommercialModelCategory?: string;
  dlAvailableInGetHistory?: boolean;
  'Data License'?: string;
  'Platform: Static'?: string;
  'Platform: Streaming'?: string;
  'Platform: Terminal Required'?: string;
  'xsd:type'?: string;
  'YK: Commodity'?: string;
  'YK: Corporate'?: string;
  'YK: Currency'?: string;
  'YK: Equity'?: string;
  'YK: Index'?: string;
  'YK: Mortgage'?: string;
  'YK: Money Market'?: string;
  'YK: Municipal'?: string;
  'YK: Preferred'?: string;
  'YK: US Government'?: string;
  Authorization?: string;
  JWT?: string;
}

export interface HeadFieldRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}

export interface OptionsFieldRequest {
  'api-version': GetRootRequestApiVersion;
  Authorization?: string;
  JWT?: string;
}
