export interface GetSseRequest {
  'Last-Event-ID'?: string;
  Authorization?: string;
  JWT?: string;
}

export interface GetContentSseRequest {
  'Last-Event-ID'?: string;
  Authorization?: string;
  JWT?: string;
}
