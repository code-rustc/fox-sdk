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
import {
  ContentCollectionItem,
  contentCollectionItemResponse,
} from '../common/content-collection-item';
import { StatusV2 } from '../common/status-v2';
import { Status } from '../common/status';
import {
  GetHistoryCubesCollectionRequest,
  GetHistoryCubesContentRequest,
  HeadHistoryCubeContentRequest,
} from './request-params';

export declare namespace HistoryCubesClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for HistoryCubes operations.
 * Provides methods to interact with HistoryCubes-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class HistoryCubesClient extends BaseService {
  protected getHistoryCubesCollectionConfig?: Partial<BaseClientOptions>;

  protected getHistoryCubesContentConfig?: Partial<BaseClientOptions>;

  protected headHistoryCubeContentConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for getHistoryCubesCollection.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetHistoryCubesCollectionConfig(config: Partial<BaseClientOptions>): this {
    this.getHistoryCubesCollectionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getHistoryCubesContent.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetHistoryCubesContentConfig(config: Partial<BaseClientOptions>): this {
    this.getHistoryCubesContentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headHistoryCubeContent.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadHistoryCubeContentConfig(config: Partial<BaseClientOptions>): this {
    this.headHistoryCubeContentConfig = config;
    return this;
  }

  /**
   * A collection of downloadable History Cubes data files. Each file has a unique key.
   * @param {CodeRustcApi.GetHistoryCubesCollectionRequest} request
   * @param {HistoryCubesClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.ContentCollectionItem>} - success
   */
  getHistoryCubesCollection(
    request: CodeRustcApi.GetHistoryCubesCollectionRequest = {},
    requestOptions?: HistoryCubesClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.ContentCollectionItem> {
    return HttpResponsePromise.fromPromise(
      this.__getHistoryCubesCollection(request, requestOptions),
    );
  }
  private async __getHistoryCubesCollection(
    request: CodeRustcApi.GetHistoryCubesCollectionRequest = {},
    requestOptions?: HistoryCubesClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.ContentCollectionItem>> {
    const resolvedConfig = this.getResolvedConfig(
      this.getHistoryCubesCollectionConfig,
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
      .setPath('/catalogs/bbg/content/history/cubes')
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
   * A downloadable History Cubes data file identified by the key.
   * @param {string} key - Key for the downloadable output file.
   * @param {CodeRustcApi.GetHistoryCubesContentRequest} request
   * @param {HistoryCubesClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<string>} - success
   */
  getHistoryCubesContent(
    key: string,
    request: CodeRustcApi.GetHistoryCubesContentRequest = {},
    requestOptions?: HistoryCubesClient.RequestOptions,
  ): HttpResponsePromise<string> {
    return HttpResponsePromise.fromPromise(
      this.__getHistoryCubesContent(key, request, requestOptions),
    );
  }
  private async __getHistoryCubesContent(
    key: string,
    request: CodeRustcApi.GetHistoryCubesContentRequest = {},
    requestOptions?: HistoryCubesClient.RequestOptions,
  ): Promise<WithRawResponse<string>> {
    const resolvedConfig = this.getResolvedConfig(
      this.getHistoryCubesContentConfig,
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
      .setPath('/catalogs/bbg/content/history/cubes/{key}')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.identity<string>(),
        contentType: ContentType.Json,
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
    return this.client.callWithRawResponse<string>(_request);
  }

  /**
   * Returns the headers that would be returned if the specified History Cubes data file were requested with the HTTP GET method.
   * @param {string} key - Key for the downloadable output file.
   * @param {CodeRustcApi.HeadHistoryCubeContentRequest} request
   * @param {HistoryCubesClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headHistoryCubeContent(
    key: string,
    request: CodeRustcApi.HeadHistoryCubeContentRequest = {},
    requestOptions?: HistoryCubesClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__headHistoryCubeContent(key, request, requestOptions),
    );
  }
  private async __headHistoryCubeContent(
    key: string,
    request: CodeRustcApi.HeadHistoryCubeContentRequest = {},
    requestOptions?: HistoryCubesClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(
      this.headHistoryCubeContentConfig,
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
      .setPath('/catalogs/bbg/content/history/cubes/{key}')
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
