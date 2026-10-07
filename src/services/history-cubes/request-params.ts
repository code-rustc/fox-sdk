export interface GetHistoryCubesCollectionRequest {
  prefix?: string;
  limit?: number;
  next?: string;
  packageCodes?: number;
  datasetNames?: string;
  snapshotStartDate?: string;
  snapshotEndDate?: string;
  Authorization?: string;
  JWT?: string;
}

export interface GetHistoryCubesContentRequest {
  Authorization?: string;
  JWT?: string;
}

export interface HeadHistoryCubeContentRequest {
  Authorization?: string;
  JWT?: string;
}
