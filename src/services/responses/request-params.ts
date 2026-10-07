export interface GetResponsesCollectionRequest {
  prefix?: string;
  limit?: number;
  next?: string;
  requestIdentifier?: string;
  requestName?: string;
  snapshotStartDateTime?: string;
  snapshotEndDateTime?: string;
  Authorization?: string;
  JWT?: string;
}

export interface GetResponsesContentRequest {
  Authorization?: string;
  JWT?: string;
}

export interface HeadResponsesContentRequest {
  Authorization?: string;
  JWT?: string;
}
