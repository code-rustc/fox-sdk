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
  GetBulkSamplesCollectionRequest,
  GetBulkSamplesContentRequest,
  HeadBulkSamplesContentRequest,
} from './request-params';
import { Status } from '../common/status';

export declare namespace BulkSamplesOngoingClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for BulkSamplesOngoing operations.
 * Provides methods to interact with BulkSamplesOngoing-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class BulkSamplesOngoingClient extends BaseService {
  protected getBulkSamplesCollectionConfig?: Partial<BaseClientOptions>;

  protected getBulkSamplesContentConfig?: Partial<BaseClientOptions>;

  protected headBulkSamplesContentConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for getBulkSamplesCollection.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetBulkSamplesCollectionConfig(config: Partial<BaseClientOptions>): this {
    this.getBulkSamplesCollectionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getBulkSamplesContent.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetBulkSamplesContentConfig(config: Partial<BaseClientOptions>): this {
    this.getBulkSamplesContentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headBulkSamplesContent.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadBulkSamplesContentConfig(config: Partial<BaseClientOptions>): this {
    this.headBulkSamplesContentConfig = config;
    return this;
  }

  /**
   * A collection of sample Bulk data generated in the last 7 days. Each sample file has a unique key.
   * @param {CodeRustcApi.GetBulkSamplesCollectionRequest} request
   * @param {BulkSamplesOngoingClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.ContentCollectionItem>} - success
   */
  getBulkSamplesCollection(
    request: CodeRustcApi.GetBulkSamplesCollectionRequest = {},
    requestOptions?: BulkSamplesOngoingClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.ContentCollectionItem> {
    return HttpResponsePromise.fromPromise(
      this.__getBulkSamplesCollection(request, requestOptions),
    );
  }
  private async __getBulkSamplesCollection(
    request: CodeRustcApi.GetBulkSamplesCollectionRequest = {},
    requestOptions?: BulkSamplesOngoingClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.ContentCollectionItem>> {
    const resolvedConfig = this.getResolvedConfig(
      this.getBulkSamplesCollectionConfig,
      requestOptions,
    );
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
      .setPath('/catalogs/bbg/content/bulk/samples')
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
   * A downloadable sample Bulk data file identified by the key.
   * @param {string} key - Key for the downloadable output file.
   * @param {CodeRustcApi.GetBulkSamplesContentRequest} request
   * @param {BulkSamplesOngoingClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<BinaryResponse>} - success
   */
  getBulkSamplesContent(
    key: string,
    request: CodeRustcApi.GetBulkSamplesContentRequest = {},
    requestOptions?: BulkSamplesOngoingClient.RequestOptions,
  ): HttpResponsePromise<BinaryResponse> {
    return HttpResponsePromise.fromPromise(
      this.__getBulkSamplesContent(key, request, requestOptions),
    );
  }
  private async __getBulkSamplesContent(
    key: string,
    request: CodeRustcApi.GetBulkSamplesContentRequest = {},
    requestOptions?: BulkSamplesOngoingClient.RequestOptions,
  ): Promise<WithRawResponse<BinaryResponse>> {
    const resolvedConfig = this.getResolvedConfig(this.getBulkSamplesContentConfig, requestOptions);
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
      .setPath('/catalogs/bbg/content/bulk/samples/{key}')
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
   * Returns the headers that would be returned if the specified Bulk sample data file were requested with the HTTP GET method.
   * @param {string} key - Key for the downloadable output file.
   * @param {CodeRustcApi.HeadBulkSamplesContentRequest} request
   * @param {BulkSamplesOngoingClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headBulkSamplesContent(
    key: string,
    request: CodeRustcApi.HeadBulkSamplesContentRequest = {},
    requestOptions?: BulkSamplesOngoingClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__headBulkSamplesContent(key, request, requestOptions),
    );
  }
  private async __headBulkSamplesContent(
    key: string,
    request: CodeRustcApi.HeadBulkSamplesContentRequest = {},
    requestOptions?: BulkSamplesOngoingClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(
      this.headBulkSamplesContentConfig,
      requestOptions,
    );
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
      .setPath('/catalogs/bbg/content/bulk/samples/{key}')
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
