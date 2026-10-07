import * as core from '../../core';
import type * as CodeRustcApi from '../../api';
import { BaseService } from '../base-service';
import { BaseClientOptions, BaseRequestOptions, ContentType, HttpResponse } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { CodeRustcApiError } from '../../http/errors/throwable-error';
import { SseStream } from '../../http/utils/sse-stream';
import { HttpResponsePromise, WithRawResponse } from '../../http/response-promise';
import { Supplier, resolveHeaders } from '../../http/utils/supplier';
import { CodeRustcApiEnvironment } from '../../http/environment';
import { GetSseResponse, getSseResponseResponse } from './models/get-sse-response';
import { Status } from '../common/status';
import { GetContentSseRequest, GetSseRequest } from './request-params';
import {
  GetContentSseResponse,
  getContentSseResponseResponse,
} from './models/get-content-sse-response';
import { GetContentSseRequestCollection } from './models/get-content-sse-request-collection';

export declare namespace NotificationsClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for Notifications operations.
 * Provides methods to interact with Notifications-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class NotificationsClient extends BaseService {
  protected getSseConfig?: Partial<BaseClientOptions>;

  protected getContentSseConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for getSse.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetSseConfig(config: Partial<BaseClientOptions>): this {
    this.getSseConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getContentSse.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetContentSseConfig(config: Partial<BaseClientOptions>): this {
    this.getContentSseConfig = config;
    return this;
  }

  /**
 * # OverviewAn event stream providing [W3C Server-Sent Event (SSE)](https://www.w3.org/TR/eventsource/) push-notifications of Bloomberg Data License Platform activity.

# Heartbeat Notifications
The notification API will periodically send out empty notifications that do not have any content to keep the connection alive. These `heartbeat` notifications can be ignored.

# Distribution Availability Notifications
DL REST API publishes a [`Distribution`](#tag/distributions) availability notification event immediately when a distribution is published to the Bloomberg Catalog or Account Catalog, where the distribution is accessible using the credentials of the user who is subscribed to the event stream. Dataset availability notifications contain a JSON-LD payload, where the `@type` property value is set to `DistributionPublishedActivity`, and include additional metadata that allows a handler to process the notification.

## Duplicate Notifications
We recommend that client processes handle the receipt of duplicate or out-of-sequence notifications. Each notification includes a `digestValue` which should be used to verify if the `Distribution` has already been processed. If the `digestValue` indicates the `Distribution` has not been seen previously, the handler should then check the `endedAtTime` timestamp. If `endedAtTime` is earlier than the most recently processed timestamp for the same `Distribution`, this indicates that a notification for a more recent version of the `Distribution` has already been processed.

# Disconnections
Client applications may periodically get disconnected from the notification service. When reconnecting, clients can send a `Last-Event-ID` header, as described in the SSE specification, to receive notifications that they may have missed. The `Last-Event-ID` parameter should be the most recently received SSE `id`, not the `identifier` within the notification payload. Upon reconnection, the notification service will use the `Last-Event-ID` to determine the last notification the client received, and start sending notifications from that point onward. `Last-Event-ID`s are valid for 48 hours; if a `Last-Event-ID` is received for a notification issued more than 48 hours ago, it will be ignored and the client will only receive new notifications.

# Media Format
Notifications will always be returned in an HTTP response with a `Content-Type` of `text/event-stream`, per the [SSE specification](https://www.w3.org/TR/eventsource/). The documentation provided for `application/ld+json` only documents the `data` field and is provided solely for viewing the notification content at [https://data.bloomberg.com/docs/HAPI/](https://data.bloomberg.com/docs/HAPI/); please download the full OpenAPI specification to view the schema for the entire SSE.

# Connection Limits
Each client can have up to 16 concurrent connections. Any connection exceeding this limit will be rejected with HTTP response status 429 - Too Many Requests.

 * @param {CodeRustcApi.GetSseRequest} request
 * @param {NotificationsClient.RequestOptions} [requestOptions] - Request-specific configuration.
 * @returns {HttpResponsePromise<CodeRustcApi.GetSseResponse>} - Success
 */
  getSse(
    request: CodeRustcApi.GetSseRequest = {},
    requestOptions?: NotificationsClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.GetSseResponse> {
    return HttpResponsePromise.fromPromise(this.__getSse(request, requestOptions));
  }
  private async __getSse(
    request: CodeRustcApi.GetSseRequest = {},
    requestOptions?: NotificationsClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.GetSseResponse>> {
    const resolvedConfig = this.getResolvedConfig(this.getSseConfig, requestOptions);
    const resolvedBaseUrl = await Supplier.get(
      resolvedConfig.baseUrl ??
        (
          (await Supplier.get(resolvedConfig.environment)) ??
          (await Supplier.get(resolvedConfig.codeRustcApiEnvironment)) ??
          CodeRustcApiEnvironment.Production
        ).api,
    );
    const resolvedHeaders = await resolveHeaders(resolvedConfig.headers);
    const _request = new RequestBuilder()
      .setConfig({ ...resolvedConfig, headers: resolvedHeaders })
      .setBaseUrl(resolvedBaseUrl)
      .setMethod('GET')
      .setPath('/notifications/sse')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getSseResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addHeaderParam({
        key: 'Last-Event-ID',
        value: request['Last-Event-ID'],
      })
      .addHeaderParam({
        key: 'Authorization',
        value: request.Authorization,
      })
      .addHeaderParam({
        key: 'JWT',
        value: request.JWT,
      })
      .build();
    return this.client.callWithRawResponse<CodeRustcApi.GetSseResponse>(_request);
  }

  /**
 * # Overview An event stream providing [W3C Server-Sent Event (SSE)](https://www.w3.org/TR/eventsource/) push-notifications of Bloomberg Data License Platform activity.

 # Heartbeat Notifications
 The notification API will periodically send out empty notifications that do not have any content to keep the connection alive. These `heartbeat` notifications can be ignored.

 # Distribution Availability Notifications
 DL REST API publishes a `ContentDelivered` notification event immediately when an output file is generated. The output file is accessible using the credentials of the user who is subscribed to the event stream. The notifications have an `event` property whose value is set to `ContentDelivered`, and include additional metadata that allows a handler to process the notification.

 ## Duplicate Notifications
 We recommend that client processes handle the receipt of duplicate or out-of-sequence notifications. Each notification includes a `Digest` which should be used to verify if the output file has already been processed.

 # Disconnections
 Client applications may periodically get disconnected from the notification service. When reconnecting, clients can send a `Last-Event-ID` header, as described in the SSE specification, to receive notifications that they may have missed. The `Last-Event-ID` parameter should be the most recently received SSE `id`, not the `identifier` within the notification payload. Upon reconnection, the notification service will use the `Last-Event-ID` to determine the last notification the client received, and start sending notifications from that point onward. `Last-Event-ID`s are valid for 48 hours; if a `Last-Event-ID` is received for a notification issued more than 48 hours ago, it will be ignored and the client will only receive new notifications.

 # Media Format
 Notifications will always be returned in an HTTP response with a `Content-Type` of `text/event-stream`, per the [SSE specification](https://www.w3.org/TR/eventsource/). Please download the full OpenAPI specification to view the schema for the entire SSE.

 # Connection Limits
 Each client can have up to 16 concurrent connections. Any connection exceeding this limit will be rejected with HTTP response status 429 - Too Many Requests.

 * @param {GetContentSseRequestCollection} collection - 
 * @param {GetContentSseRequest} request
 * @param {NotificationsClient.RequestOptions} [requestOptions] - Request-specific configuration.
 * @returns {HttpResponsePromise<SseStream<GetContentSseResponse>>} - Success
 */
  public getContentSse(
    collection: GetContentSseRequestCollection,
    request: GetContentSseRequest = {},
    requestOptions?: NotificationsClient.RequestOptions,
  ): HttpResponsePromise<SseStream<GetContentSseResponse>> {
    return HttpResponsePromise.fromPromise(
      this.__getContentSse(collection, request, requestOptions),
    );
  }
  private async __getContentSse(
    collection: GetContentSseRequestCollection,
    request: GetContentSseRequest = {},
    requestOptions?: NotificationsClient.RequestOptions,
  ): Promise<WithRawResponse<SseStream<GetContentSseResponse>>> {
    const resolvedConfig = this.getResolvedConfig(this.getContentSseConfig, requestOptions);
    const resolvedBaseUrl = await Supplier.get(
      resolvedConfig.baseUrl ??
        (
          (await Supplier.get(resolvedConfig.environment)) ??
          (await Supplier.get(resolvedConfig.codeRustcApiEnvironment)) ??
          CodeRustcApiEnvironment.Production
        ).api,
    );
    const resolvedHeaders = await resolveHeaders(resolvedConfig.headers);
    const _request = new RequestBuilder()
      .setConfig({ ...resolvedConfig, headers: resolvedHeaders })
      .setBaseUrl(resolvedBaseUrl)
      .setMethod('GET')
      .setPath('/notifications/content/{collection}')
      .setRequestSchema(core.cast.identity<unknown>())
      .setEventShape({ type: 'sse' })
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getContentSseResponseResponse,
        contentType: ContentType.EventStream,
        status: 200,
      })
      .addPathParam({
        key: 'collection',
        value: collection,
      })
      .addHeaderParam({
        key: 'Last-Event-ID',
        value: request['Last-Event-ID'],
      })
      .addHeaderParam({
        key: 'Authorization',
        value: request.Authorization,
      })
      .addHeaderParam({
        key: 'JWT',
        value: request.JWT,
      })
      .addHeaderParam({ key: 'Accept', value: 'text/event-stream' })
      .build();
    return this.client.openStream<GetContentSseResponse>(_request);
  }
}
