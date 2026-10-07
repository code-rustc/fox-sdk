export interface GetBlueprintsCollectionRequest {
  prefix?: string;
  limit?: number;
  next?: string;
  packageCodes?: number;
  Authorization?: string;
  JWT?: string;
}

export interface GetBlueprintsContentRequest {
  Authorization?: string;
  JWT?: string;
}

export interface HeadBlueprintsContentRequest {
  Authorization?: string;
  JWT?: string;
}
