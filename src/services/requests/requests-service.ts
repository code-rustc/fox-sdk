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
import { RequestCollection, requestCollectionResponse } from '../common/request-collection';
import { Status, statusResponse } from '../common/status';
import {
  GetFieldListByRequestRequest,
  GetRequestRequest,
  GetRequestsRequest,
  GetTriggerByRequestRequest,
  GetUniverseByRequestRequest,
  PatchRequestRequest,
  PostRequestRequest,
} from './request-params';
import { RequestPostPayload, requestPostPayloadRequest } from '../common/request-post-payload';
import {
  RequestCreatedStatus,
  requestCreatedStatusResponse,
} from '../common/request-created-status';
import { GetRequestResponse, getRequestResponseResponse } from './models/get-request-response';
import { RequestPatchPayload, requestPatchPayloadRequest } from '../common/request-patch-payload';
import { Universe, universeResponse } from '../common/universe';
import {
  GetFieldListByRequestResponse,
  getFieldListByRequestResponseResponse,
} from './models/get-field-list-by-request-response';
import {
  GetTriggerByRequestResponse,
  getTriggerByRequestResponseResponse,
} from './models/get-trigger-by-request-response';

export declare namespace RequestsClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for Requests operations.
 * Provides methods to interact with Requests-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class RequestsClient extends BaseService {
  protected getRequestsConfig?: Partial<BaseClientOptions>;

  protected postRequestConfig?: Partial<BaseClientOptions>;

  protected getRequestConfig?: Partial<BaseClientOptions>;

  protected patchRequestConfig?: Partial<BaseClientOptions>;

  protected getUniverseByRequestConfig?: Partial<BaseClientOptions>;

  protected getFieldListByRequestConfig?: Partial<BaseClientOptions>;

  protected getTriggerByRequestConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for getRequests.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetRequestsConfig(config: Partial<BaseClientOptions>): this {
    this.getRequestsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for postRequest.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setPostRequestConfig(config: Partial<BaseClientOptions>): this {
    this.postRequestConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getRequest.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetRequestConfig(config: Partial<BaseClientOptions>): this {
    this.getRequestConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for patchRequest.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setPatchRequestConfig(config: Partial<BaseClientOptions>): this {
    this.patchRequestConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getUniverseByRequest.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetUniverseByRequestConfig(config: Partial<BaseClientOptions>): this {
    this.getUniverseByRequestConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getFieldListByRequest.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetFieldListByRequestConfig(config: Partial<BaseClientOptions>): this {
    this.getFieldListByRequestConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getTriggerByRequest.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetTriggerByRequestConfig(config: Partial<BaseClientOptions>): this {
    this.getTriggerByRequestConfig = config;
    return this;
  }

  /**
   * A collection of dataset requests within a catalog
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {CodeRustcApi.GetRequestsRequest} request
   * @param {RequestsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.RequestCollection | CodeRustcApi.Status>} - success
   */
  getRequests(
    catalog: string,
    request: CodeRustcApi.GetRequestsRequest,
    requestOptions?: RequestsClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.RequestCollection | CodeRustcApi.Status> {
    return HttpResponsePromise.fromPromise(this.__getRequests(catalog, request, requestOptions));
  }
  private async __getRequests(
    catalog: string,
    request: CodeRustcApi.GetRequestsRequest,
    requestOptions?: RequestsClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.RequestCollection | CodeRustcApi.Status>> {
    const resolvedConfig = this.getResolvedConfig(this.getRequestsConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/requests/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: requestCollectionResponse,
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
      .addQueryParam({
        key: 'name',
        value: request.name,
      })
      .addQueryParam({
        key: 'enabled',
        value: request.enabled,
      })
      .addQueryParam({
        key: 'universeIdentifier',
        value: request.universeIdentifier,
      })
      .addQueryParam({
        key: 'fieldListIdentifier',
        value: request.fieldListIdentifier,
      })
      .addQueryParam({
        key: 'triggerIdentifier',
        value: request.triggerIdentifier,
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
    return this.client.callWithRawResponse<CodeRustcApi.RequestCollection | CodeRustcApi.Status>(
      _request,
    );
  }

  /**
 * A custom dataset request requires an identifier (the name, used to construct the URI, must begin with a letter and consist only of alphanumeric characters), title (short description) and the contents for a request.</p>
A request can define all dataset configuration including `universe`, `fieldList` and `trigger` details inside a single POST body.
In this scenario these elements are not reusable and are available to the new request only.
Optionally a request can be linked using IRIs to reusable [universe](#tag/universes), [fieldList](#tag/fieldLists) and [trigger](#tag/triggers) resources in either the `bbg` or client catalog.
Bloomberg provides lists of curated reusable universe and fieldList resources, a client can also define their own custom resources for reuse (see "with linked resource" examples for further context).

| Request @type | Description | Universe Evaluation | Security Level Overrides | Required FieldList @type | Required Trigger @type |
| --- | --- | --- | --- | -- | -- |
| DataRequest | A DataRequest generates output at a point in time for a Universe and FieldList on an ad-hoc or scheduled basis. | Execution time | Supported | DataFieldList | SubmitTrigger, ScheduledTrigger |
| HistoryRequest | A HistoryRequest retrieves historical data fields for a Universe and FieldList within the given date range on an ad-hoc or scheduled basis. | Execution time | Supported | HistoryFieldList | SubmitTrigger, ScheduledTrigger |
| ActionsRequest | An ActionsRequest retrieves corporate actions for a Universe, within a specified range of dates. | Execution time | Not supported | Not applicable | SubmitTrigger, ScheduledTrigger |
| BvalSnapshotRequest | A BvalSnapshotRequest schedules the snapshot and delivery of BVAL Evaluated Prices for a Universe. You can request a snapshot for [these times](/#section/Features/BVAL-Evaluated-Pricing). Response delivery times depend upon the `snapshotTier` you select.| BVAL securities are validated at approximately 00:00 (midnight) NY time. For BVAL (tier-1 and tier-2) scheduled requests, if users want to update the universe of securities, they will need to PATCH the saved universe prior to 00:00 (midnight) NY time in order for the changes to be reflected in the next scheduled BVAL snapshot runtime. | Pricing Source only | BvalSnapshotFieldList | BvalSnapshotTrigger |
| PricingSnapshotRequest | A PricingSnapshotRequest provides a precise point in time snapshot of market prices for any instrument, available at 15 minute intervals throughout the day. The response will be delivered shortly after the snapshot time requested, subject to an embargo period for the requested instruments (see [Exchange Delay](https://data.bloomberg.com/catalogs/bbg/fields/exchangeDelay/)). | For requests submitted on `snapshotDate`, universe is evaluated at snapshot [cutoff](/#section/Features/Pricing-Snapshots). For requests submitted for a future `snapshotDate`, the universe is evaluated at midnight EDST on that `snapshotDate`. | Pricing Source only | Not applicable | PricingSnapshotTrigger |
| TickHistoryRequest | A TickHistoryRequest retrieves intraday prices for executed trades, bid/ask quotes, or both. You can submit requests for either ticks or bars (i.e., an open, high, low, and close price per period) within any time or date range. | Execution time | Not supported | Not applicable | SubmitTrigger, ScheduledTrigger |
| EntityRequest | An EntityRequest retrieves entity-level reference data. | Execution time | Not supported | EntityFieldList | SubmitTrigger, ScheduledTrigger |

Security level overrides are ignored where not supported.

 * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
 * @param {CodeRustcApi.PostRequestRequest} request
 * @param {RequestsClient.RequestOptions} [requestOptions] - Request-specific configuration.
 * @returns {HttpResponsePromise<CodeRustcApi.RequestCreatedStatus>} - Created
 */
  postRequest(
    catalog: string,
    request: CodeRustcApi.PostRequestRequest,
    requestOptions?: RequestsClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.RequestCreatedStatus> {
    return HttpResponsePromise.fromPromise(this.__postRequest(catalog, request, requestOptions));
  }
  private async __postRequest(
    catalog: string,
    request: CodeRustcApi.PostRequestRequest,
    requestOptions?: RequestsClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.RequestCreatedStatus>> {
    const resolvedConfig = this.getResolvedConfig(this.postRequestConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/requests/')
      .setRequestSchema(requestPostPayloadRequest)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: requestCreatedStatusResponse,
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
    return this.client.callWithRawResponse<CodeRustcApi.RequestCreatedStatus>(_request);
  }

  /**
   * A request resource
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} requestIdentifier - Request Identifier
   * @param {CodeRustcApi.GetRequestRequest} request
   * @param {RequestsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.GetRequestResponse>} - success
   */
  getRequest(
    catalog: string,
    requestIdentifier: string,
    request: CodeRustcApi.GetRequestRequest,
    requestOptions?: RequestsClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.GetRequestResponse> {
    return HttpResponsePromise.fromPromise(
      this.__getRequest(catalog, requestIdentifier, request, requestOptions),
    );
  }
  private async __getRequest(
    catalog: string,
    requestIdentifier: string,
    request: CodeRustcApi.GetRequestRequest,
    requestOptions?: RequestsClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.GetRequestResponse>> {
    const resolvedConfig = this.getResolvedConfig(this.getRequestConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/requests/{requestIdentifier}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getRequestResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addPathParam({
        key: 'requestIdentifier',
        value: requestIdentifier,
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
    return this.client.callWithRawResponse<CodeRustcApi.GetRequestResponse>(_request);
  }

  /**
   * Update or disable a request.<p>The request's universe can be patched here; if, and only if, the request's universe is not a universe resource and then, can only be patched to another request level universe.</p>
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} requestIdentifier - Request Identifier
   * @param {CodeRustcApi.PatchRequestRequest} request
   * @param {RequestsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success - no content
   */
  patchRequest(
    catalog: string,
    requestIdentifier: string,
    request: CodeRustcApi.PatchRequestRequest,
    requestOptions?: RequestsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__patchRequest(catalog, requestIdentifier, request, requestOptions),
    );
  }
  private async __patchRequest(
    catalog: string,
    requestIdentifier: string,
    request: CodeRustcApi.PatchRequestRequest,
    requestOptions?: RequestsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.patchRequestConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/requests/{requestIdentifier}/')
      .setRequestSchema(requestPatchPayloadRequest)
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
        key: 'requestIdentifier',
        value: requestIdentifier,
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
   * The universe for a specific Per Security request
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} requestIdentifier - Request Identifier
   * @param {CodeRustcApi.GetUniverseByRequestRequest} request
   * @param {RequestsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.Universe>} - success
   */
  getUniverseByRequest(
    catalog: string,
    requestIdentifier: string,
    request: CodeRustcApi.GetUniverseByRequestRequest,
    requestOptions?: RequestsClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.Universe> {
    return HttpResponsePromise.fromPromise(
      this.__getUniverseByRequest(catalog, requestIdentifier, request, requestOptions),
    );
  }
  private async __getUniverseByRequest(
    catalog: string,
    requestIdentifier: string,
    request: CodeRustcApi.GetUniverseByRequestRequest,
    requestOptions?: RequestsClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.Universe>> {
    const resolvedConfig = this.getResolvedConfig(this.getUniverseByRequestConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/requests/{requestIdentifier}/universe/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: universeResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addPathParam({
        key: 'requestIdentifier',
        value: requestIdentifier,
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
    return this.client.callWithRawResponse<CodeRustcApi.Universe>(_request);
  }

  /**
   * The field list for a specific Per Security request
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} requestIdentifier - Request Identifier
   * @param {CodeRustcApi.GetFieldListByRequestRequest} request
   * @param {RequestsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.GetFieldListByRequestResponse>} - success
   */
  getFieldListByRequest(
    catalog: string,
    requestIdentifier: string,
    request: CodeRustcApi.GetFieldListByRequestRequest,
    requestOptions?: RequestsClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.GetFieldListByRequestResponse> {
    return HttpResponsePromise.fromPromise(
      this.__getFieldListByRequest(catalog, requestIdentifier, request, requestOptions),
    );
  }
  private async __getFieldListByRequest(
    catalog: string,
    requestIdentifier: string,
    request: CodeRustcApi.GetFieldListByRequestRequest,
    requestOptions?: RequestsClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.GetFieldListByRequestResponse>> {
    const resolvedConfig = this.getResolvedConfig(this.getFieldListByRequestConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/requests/{requestIdentifier}/fieldList/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getFieldListByRequestResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addPathParam({
        key: 'requestIdentifier',
        value: requestIdentifier,
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
    return this.client.callWithRawResponse<CodeRustcApi.GetFieldListByRequestResponse>(_request);
  }

  /**
   * The trigger for a specific Per Security request
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} requestIdentifier - Request Identifier
   * @param {CodeRustcApi.GetTriggerByRequestRequest} request
   * @param {RequestsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.GetTriggerByRequestResponse>} - success
   */
  getTriggerByRequest(
    catalog: string,
    requestIdentifier: string,
    request: CodeRustcApi.GetTriggerByRequestRequest,
    requestOptions?: RequestsClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.GetTriggerByRequestResponse> {
    return HttpResponsePromise.fromPromise(
      this.__getTriggerByRequest(catalog, requestIdentifier, request, requestOptions),
    );
  }
  private async __getTriggerByRequest(
    catalog: string,
    requestIdentifier: string,
    request: CodeRustcApi.GetTriggerByRequestRequest,
    requestOptions?: RequestsClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.GetTriggerByRequestResponse>> {
    const resolvedConfig = this.getResolvedConfig(this.getTriggerByRequestConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/requests/{requestIdentifier}/trigger/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getTriggerByRequestResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addPathParam({
        key: 'requestIdentifier',
        value: requestIdentifier,
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
    return this.client.callWithRawResponse<CodeRustcApi.GetTriggerByRequestResponse>(_request);
  }
}
