import * as core from '../../core';
import type * as CodeRustcApi from '../../api';
import { BaseService } from '../base-service';
import {
  BaseClientOptions,
  BaseRequestOptions,
  BinaryResponse,
  ContentType,
  HttpResponse,
} from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { CodeRustcApiError } from '../../http/errors/throwable-error';
import { HttpResponsePromise, WithRawResponse } from '../../http/response-promise';
import { Supplier, resolveHeaders } from '../../http/utils/supplier';
import { CodeRustcApiEnvironment } from '../../http/environment';
import {
  ContentCollectionItem,
  contentCollectionItemResponse,
} from '../common/content-collection-item';
import { StatusV2 } from '../common/status-v2';
import {
  GetBulkCollectionRequest,
  GetBulkContentRequest,
  HeadBulkContentRequest,
} from './request-params';
import { Status } from '../common/status';

export declare namespace BulkOngoingClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for BulkOngoing operations.
 * Provides methods to interact with BulkOngoing-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class BulkOngoingClient extends BaseService {
  protected getBulkCollectionConfig?: Partial<BaseClientOptions>;

  protected getBulkContentConfig?: Partial<BaseClientOptions>;

  protected headBulkContentConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for getBulkCollection.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetBulkCollectionConfig(config: Partial<BaseClientOptions>): this {
    this.getBulkCollectionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getBulkContent.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetBulkContentConfig(config: Partial<BaseClientOptions>): this {
    this.getBulkContentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headBulkContent.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadBulkContentConfig(config: Partial<BaseClientOptions>): this {
    this.headBulkContentConfig = config;
    return this;
  }

  /**
   * A collection of downloadable Bulk data files generated in the last 7 days. Each file has a unique key.
   * @param {CodeRustcApi.GetBulkCollectionRequest} request
   * @param {BulkOngoingClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.ContentCollectionItem>} - success
   */
  getBulkCollection(
    request: CodeRustcApi.GetBulkCollectionRequest = {},
    requestOptions?: BulkOngoingClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.ContentCollectionItem> {
    return HttpResponsePromise.fromPromise(this.__getBulkCollection(request, requestOptions));
  }
  private async __getBulkCollection(
    request: CodeRustcApi.GetBulkCollectionRequest = {},
    requestOptions?: BulkOngoingClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.ContentCollectionItem>> {
    const resolvedConfig = this.getResolvedConfig(this.getBulkCollectionConfig, requestOptions);
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
      .setPath('/catalogs/bbg/content/bulk')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: contentCollectionItemResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addQueryParam({
        key: 'prefix',
        value: request.prefix,
      })
      .addQueryParam({
        key: 'limit',
        value: request.limit,
      })
      .addQueryParam({
        key: 'next',
        value: request.next,
      })
      .addQueryParam({
        key: 'packageCodes',
        value: request.packageCodes,
      })
      .addQueryParam({
        key: 'datasetNames',
        value: request.datasetNames,
      })
      .addQueryParam({
        key: 'fileExtensions',
        value: request.fileExtensions,
      })
      .addQueryParam({
        key: 'snapshotDate',
        value: request.snapshotDate,
      })
      .addQueryParam({
        key: 'snapshotStartDate',
        value: request.snapshotStartDate,
      })
      .addQueryParam({
        key: 'snapshotEndDate',
        value: request.snapshotEndDate,
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
    return this.client.callWithRawResponse<CodeRustcApi.ContentCollectionItem>(_request);
  }

  /**
   * A downloadable Bulk data file identified by the key.
   * @param {string} key - Key for the downloadable output file.
   * @param {CodeRustcApi.GetBulkContentRequest} request
   * @param {BulkOngoingClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<BinaryResponse>} - success
   */
  getBulkContent(
    key: string,
    request: CodeRustcApi.GetBulkContentRequest = {},
    requestOptions?: BulkOngoingClient.RequestOptions,
  ): HttpResponsePromise<BinaryResponse> {
    return HttpResponsePromise.fromPromise(this.__getBulkContent(key, request, requestOptions));
  }
  private async __getBulkContent(
    key: string,
    request: CodeRustcApi.GetBulkContentRequest = {},
    requestOptions?: BulkOngoingClient.RequestOptions,
  ): Promise<WithRawResponse<BinaryResponse>> {
    const resolvedConfig = this.getResolvedConfig(this.getBulkContentConfig, requestOptions);
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
      .setPath('/catalogs/bbg/content/bulk/{key}')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.identity<unknown>(),
        contentType: ContentType.Binary,
        status: 200,
      })
      .addPathParam({
        key: 'key',
        value: key,
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
    return this.client.callWithRawResponse<BinaryResponse>(_request);
  }

  /**
   * Returns the headers that would be returned if the specified Bulk data file were requested with the HTTP GET method.
   * @param {string} key - Key for the downloadable output file.
   * @param {CodeRustcApi.HeadBulkContentRequest} request
   * @param {BulkOngoingClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headBulkContent(
    key: string,
    request: CodeRustcApi.HeadBulkContentRequest = {},
    requestOptions?: BulkOngoingClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(this.__headBulkContent(key, request, requestOptions));
  }
  private async __headBulkContent(
    key: string,
    request: CodeRustcApi.HeadBulkContentRequest = {},
    requestOptions?: BulkOngoingClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.headBulkContentConfig, requestOptions);
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
      .setMethod('HEAD')
      .setPath('/catalogs/bbg/content/bulk/{key}')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addPathParam({
        key: 'key',
        value: key,
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
}
