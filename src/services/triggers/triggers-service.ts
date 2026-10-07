import * as core from '../../core';
import type * as CodeRustcApi from '../../api';
import { BaseService } from '../base-service';
import { BaseClientOptions, BaseRequestOptions, ContentType, HttpResponse } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { CodeRustcApiError } from '../../http/errors/throwable-error';
import { HttpResponsePromise, WithRawResponse } from '../../http/response-promise';
import { Supplier, resolveHeaders } from '../../http/utils/supplier';
import { CodeRustcApiEnvironment } from '../../http/environment';
import { TriggerCollection, triggerCollectionResponse } from '../common/trigger-collection';
import { Status, statusResponse } from '../common/status';
import {
  DeleteTriggerRequest,
  GetDeletedTriggerRequest,
  GetTriggerRequest,
  GetTriggersRequest,
  PatchTriggerRequest,
  PostTriggerRequest,
} from './request-params';
import { TriggerPostPayload, triggerPostPayloadRequest } from '../common/trigger-post-payload';
import { PolymorphicTrigger, polymorphicTriggerResponse } from '../common/polymorphic-trigger';
import { TriggerPatchPayload, triggerPatchPayloadRequest } from '../common/trigger-patch-payload';
import {
  PolymorphicDeletedTrigger,
  polymorphicDeletedTriggerResponse,
} from '../common/polymorphic-deleted-trigger';

export declare namespace TriggersClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for Triggers operations.
 * Provides methods to interact with Triggers-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class TriggersClient extends BaseService {
  protected getTriggersConfig?: Partial<BaseClientOptions>;

  protected postTriggerConfig?: Partial<BaseClientOptions>;

  protected getTriggerConfig?: Partial<BaseClientOptions>;

  protected patchTriggerConfig?: Partial<BaseClientOptions>;

  protected deleteTriggerConfig?: Partial<BaseClientOptions>;

  protected getDeletedTriggerConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for getTriggers.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetTriggersConfig(config: Partial<BaseClientOptions>): this {
    this.getTriggersConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for postTrigger.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setPostTriggerConfig(config: Partial<BaseClientOptions>): this {
    this.postTriggerConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getTrigger.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetTriggerConfig(config: Partial<BaseClientOptions>): this {
    this.getTriggerConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for patchTrigger.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setPatchTriggerConfig(config: Partial<BaseClientOptions>): this {
    this.patchTriggerConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteTrigger.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteTriggerConfig(config: Partial<BaseClientOptions>): this {
    this.deleteTriggerConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getDeletedTrigger.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetDeletedTriggerConfig(config: Partial<BaseClientOptions>): this {
    this.getDeletedTriggerConfig = config;
    return this;
  }

  /**
   * A collection of triggers within a specific catalog.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {CodeRustcApi.GetTriggersRequest} request
   * @param {TriggersClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.TriggerCollection | CodeRustcApi.Status>} - success
   */
  getTriggers(
    catalog: string,
    request: CodeRustcApi.GetTriggersRequest,
    requestOptions?: TriggersClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.TriggerCollection | CodeRustcApi.Status> {
    return HttpResponsePromise.fromPromise(this.__getTriggers(catalog, request, requestOptions));
  }
  private async __getTriggers(
    catalog: string,
    request: CodeRustcApi.GetTriggersRequest,
    requestOptions?: TriggersClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.TriggerCollection | CodeRustcApi.Status>> {
    const resolvedConfig = this.getResolvedConfig(this.getTriggersConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/triggers/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: triggerCollectionResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addResponse({
        schema: statusResponse,
        contentType: ContentType.Json,
        status: 303,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addQueryParam({
        key: 'page',
        value: request.page,
      })
      .addQueryParam({
        key: 'pageSize',
        value: request.pageSize,
      })
      .addHeaderParam({
        key: 'api-version',
        value: request['api-version'],
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
    return this.client.callWithRawResponse<CodeRustcApi.TriggerCollection | CodeRustcApi.Status>(
      _request,
    );
  }

  /**
 * Create a new trigger resource. Requires an identifier (the name, used to construct the URI, must begin with a letter and consist only of alphanumeric characters), title (short description) and the contents
| Trigger @type | Action | Time Zone | Time Behavior | Frequency | Scheduling Behavior |
| --- | --- | --- | --- | --- | --- |
| ScheduledTrigger | Execute a DataRequest, HistoryRequest, or ActionsRequest | Billing region of requesting account. | If `startTime` is omitted and `startDate` is in the future, the request is scheduled for 00:00. If `startTime` is omitted and `startDate` is in the past, the request is scheduled immediately. |Once | If `startDate` and `startTime` have passed, execution is scheduled immediately. Otherwise request is scheduled for `startDate` and `startTime`. |
| | | | | Recurring |  If `startDate` has passed, request submission will fail. Otherwise schedule begins at `startDate` and `startTime`. If `startDate` is omitted, it defaults to the next date for the `frequency`. |
| SubmitTrigger | Execute a DataRequest, HistoryRequest, ActionsRequest, or TickHistoryRequest | Billing region of requesting account. | The request is scheduled for immediate execution. |Once | The request is scheduled for immediate execution. |
| BvalSnapshotTrigger | Execute a BvalSnapshotRequest| `snapshotTimeZoneName` must be a valid [IANA](https://www.iana.org/time-zones) Time Zone Name and [BVAL snapshot timezone](/#section/Features/BVAL-Evaluated-Pricing) | `snapshotTime` must be a valid BVAL [snapshot time](/#section/Features/BVAL-Evaluated-Pricing) within `snapshotTimeZoneName`| Any | If  [cutoff](/#section/Features/BVAL-Evaluated-Pricing) has passed for the `snapshotDate` and `snapshotTime` provided, the request will be rejected. If `snapshotDate` is omitted the request will be scheduled for the next available `snapshotDate`.  |
| PricingSnapshotTrigger | Execute a PricingSnapshotRequest | Pricing Snapshots are only supported in the Billing region of the requesting account. | `snapshotTime` must be, 0, 15, 30, or 45 minutes past the hour.  | Any | If [cutoff](/#section/Features/Pricing-Snapshots) has passed for the `snapshotDate` and `snapshotTime` provided, the request will be rejected. If `snapshotDate` is omitted the request will be scheduled for the next available `snapshotDate`. |

 * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
 * @param {CodeRustcApi.PostTriggerRequest} request
 * @param {TriggersClient.RequestOptions} [requestOptions] - Request-specific configuration.
 * @returns {HttpResponsePromise<CodeRustcApi.Status>} - Created
 */
  postTrigger(
    catalog: string,
    request: CodeRustcApi.PostTriggerRequest,
    requestOptions?: TriggersClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.Status> {
    return HttpResponsePromise.fromPromise(this.__postTrigger(catalog, request, requestOptions));
  }
  private async __postTrigger(
    catalog: string,
    request: CodeRustcApi.PostTriggerRequest,
    requestOptions?: TriggersClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.Status>> {
    const resolvedConfig = this.getResolvedConfig(this.postTriggerConfig, requestOptions);
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
      .setMethod('POST')
      .setPath('/catalogs/{catalog}/triggers/')
      .setRequestSchema(triggerPostPayloadRequest)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: statusResponse,
        contentType: ContentType.Json,
        status: 201,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addHeaderParam({
        key: 'api-version',
        value: request['api-version'],
      })
      .addHeaderParam({
        key: 'Authorization',
        value: request.Authorization,
      })
      .addHeaderParam({
        key: 'JWT',
        value: request.JWT,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(request.body)
      .build();
    return this.client.callWithRawResponse<CodeRustcApi.Status>(_request);
  }

  /**
   * A trigger resource
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} triggerIdentifier - Trigger identifier.
   * @param {CodeRustcApi.GetTriggerRequest} request
   * @param {TriggersClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.PolymorphicTrigger>} - success
   */
  getTrigger(
    catalog: string,
    triggerIdentifier: string,
    request: CodeRustcApi.GetTriggerRequest,
    requestOptions?: TriggersClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.PolymorphicTrigger> {
    return HttpResponsePromise.fromPromise(
      this.__getTrigger(catalog, triggerIdentifier, request, requestOptions),
    );
  }
  private async __getTrigger(
    catalog: string,
    triggerIdentifier: string,
    request: CodeRustcApi.GetTriggerRequest,
    requestOptions?: TriggersClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.PolymorphicTrigger>> {
    const resolvedConfig = this.getResolvedConfig(this.getTriggerConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/triggers/{triggerIdentifier}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: polymorphicTriggerResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addPathParam({
        key: 'triggerIdentifier',
        value: triggerIdentifier,
      })
      .addHeaderParam({
        key: 'api-version',
        value: request['api-version'],
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
    return this.client.callWithRawResponse<CodeRustcApi.PolymorphicTrigger>(_request);
  }

  /**
   * Triggers that are referenced by active recurring requests CAN NOT be updated and will return a status code of 400.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} triggerIdentifier - Trigger identifier.
   * @param {CodeRustcApi.PatchTriggerRequest} request
   * @param {TriggersClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success - no content
   */
  patchTrigger(
    catalog: string,
    triggerIdentifier: string,
    request: CodeRustcApi.PatchTriggerRequest,
    requestOptions?: TriggersClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__patchTrigger(catalog, triggerIdentifier, request, requestOptions),
    );
  }
  private async __patchTrigger(
    catalog: string,
    triggerIdentifier: string,
    request: CodeRustcApi.PatchTriggerRequest,
    requestOptions?: TriggersClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.patchTriggerConfig, requestOptions);
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
      .setMethod('PATCH')
      .setPath('/catalogs/{catalog}/triggers/{triggerIdentifier}/')
      .setRequestSchema(triggerPatchPayloadRequest)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 204,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addPathParam({
        key: 'triggerIdentifier',
        value: triggerIdentifier,
      })
      .addHeaderParam({
        key: 'api-version',
        value: request['api-version'],
      })
      .addHeaderParam({
        key: 'Authorization',
        value: request.Authorization,
      })
      .addHeaderParam({
        key: 'JWT',
        value: request.JWT,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(request.body)
      .build();
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * Triggers that are referenced by active recurring requests CAN NOT be deleted and will return a status code of 400
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} triggerIdentifier - Trigger identifier.
   * @param {CodeRustcApi.DeleteTriggerRequest} request
   * @param {TriggersClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success - no content
   */
  deleteTrigger(
    catalog: string,
    triggerIdentifier: string,
    request: CodeRustcApi.DeleteTriggerRequest,
    requestOptions?: TriggersClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__deleteTrigger(catalog, triggerIdentifier, request, requestOptions),
    );
  }
  private async __deleteTrigger(
    catalog: string,
    triggerIdentifier: string,
    request: CodeRustcApi.DeleteTriggerRequest,
    requestOptions?: TriggersClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.deleteTriggerConfig, requestOptions);
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
      .setMethod('DELETE')
      .setPath('/catalogs/{catalog}/triggers/{triggerIdentifier}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 204,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addPathParam({
        key: 'triggerIdentifier',
        value: triggerIdentifier,
      })
      .addHeaderParam({
        key: 'api-version',
        value: request['api-version'],
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
    return this.client.callWithRawResponse<void>(_request);
  }

  /**
   * A trigger that has been deleted.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} triggerUuid - Trigger unique identifier.
   * @param {CodeRustcApi.GetDeletedTriggerRequest} request
   * @param {TriggersClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.PolymorphicDeletedTrigger>} - success
   */
  getDeletedTrigger(
    catalog: string,
    triggerUuid: string,
    request: CodeRustcApi.GetDeletedTriggerRequest,
    requestOptions?: TriggersClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.PolymorphicDeletedTrigger> {
    return HttpResponsePromise.fromPromise(
      this.__getDeletedTrigger(catalog, triggerUuid, request, requestOptions),
    );
  }
  private async __getDeletedTrigger(
    catalog: string,
    triggerUuid: string,
    request: CodeRustcApi.GetDeletedTriggerRequest,
    requestOptions?: TriggersClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.PolymorphicDeletedTrigger>> {
    const resolvedConfig = this.getResolvedConfig(this.getDeletedTriggerConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/deleted/triggers/{triggerUUID}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: polymorphicDeletedTriggerResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addPathParam({
        key: 'triggerUUID',
        value: triggerUuid,
      })
      .addHeaderParam({
        key: 'api-version',
        value: request['api-version'],
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
    return this.client.callWithRawResponse<CodeRustcApi.PolymorphicDeletedTrigger>(_request);
  }
}
