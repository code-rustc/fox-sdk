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
import { Status } from '../common/status';
import {
  GetResponsesCollectionRequest,
  GetResponsesContentRequest,
  HeadResponsesContentRequest,
} from './request-params';

export declare namespace ResponsesClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for Responses operations.
 * Provides methods to interact with Responses-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class ResponsesClient extends BaseService {
  protected getResponsesCollectionConfig?: Partial<BaseClientOptions>;

  protected getResponsesContentConfig?: Partial<BaseClientOptions>;

  protected headResponsesContentConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for getResponsesCollection.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetResponsesCollectionConfig(config: Partial<BaseClientOptions>): this {
    this.getResponsesCollectionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getResponsesContent.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetResponsesContentConfig(config: Partial<BaseClientOptions>): this {
    this.getResponsesContentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headResponsesContent.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadResponsesContentConfig(config: Partial<BaseClientOptions>): this {
    this.headResponsesContentConfig = config;
    return this;
  }

  /**
   * A collection of downloadable Per Security output data files generated in the last 7 days in the requested serialization format for a DL account. Each output file has a unique key.
   * @param {string} catalog - Catalog identifier. The customer's DL account number (e.g. `1234`).
   * @param {CodeRustcApi.GetResponsesCollectionRequest} request
   * @param {ResponsesClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.ContentCollectionItem>} - success
   */
  getResponsesCollection(
    catalog: string,
    request: CodeRustcApi.GetResponsesCollectionRequest = {},
    requestOptions?: ResponsesClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.ContentCollectionItem> {
    return HttpResponsePromise.fromPromise(
      this.__getResponsesCollection(catalog, request, requestOptions),
    );
  }
  private async __getResponsesCollection(
    catalog: string,
    request: CodeRustcApi.GetResponsesCollectionRequest = {},
    requestOptions?: ResponsesClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.ContentCollectionItem>> {
    const resolvedConfig = this.getResolvedConfig(
      this.getResponsesCollectionConfig,
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
      .setPath('/catalogs/{catalog}/content/responses')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: contentCollectionItemResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
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
        key: 'requestIdentifier',
        value: request.requestIdentifier,
      })
      .addQueryParam({
        key: 'requestName',
        value: request.requestName,
      })
      .addQueryParam({
        key: 'snapshotStartDateTime',
        value: request.snapshotStartDateTime,
      })
      .addQueryParam({
        key: 'snapshotEndDateTime',
        value: request.snapshotEndDateTime,
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
   * A downloadable Per Security output data file identified by the key.
   * @param {string} catalog - Catalog identifier. The customer's DL account number (e.g. `1234`).
   * @param {string} key - Key for the downloadable output file.
   * @param {CodeRustcApi.GetResponsesContentRequest} request
   * @param {ResponsesClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<BinaryResponse>} - success
   */
  getResponsesContent(
    catalog: string,
    key: string,
    request: CodeRustcApi.GetResponsesContentRequest = {},
    requestOptions?: ResponsesClient.RequestOptions,
  ): HttpResponsePromise<BinaryResponse> {
    return HttpResponsePromise.fromPromise(
      this.__getResponsesContent(catalog, key, request, requestOptions),
    );
  }
  private async __getResponsesContent(
    catalog: string,
    key: string,
    request: CodeRustcApi.GetResponsesContentRequest = {},
    requestOptions?: ResponsesClient.RequestOptions,
  ): Promise<WithRawResponse<BinaryResponse>> {
    const resolvedConfig = this.getResolvedConfig(this.getResponsesContentConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/content/responses/{key}')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.identity<unknown>(),
        contentType: ContentType.Binary,
        status: 200,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
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
   * Returns the headers that would be returned if the specified snapshot data file were requested with the HTTP GET method.
   * @param {string} catalog - Catalog identifier. The customer's DL account number (e.g. `1234`).
   * @param {string} key - Key for the downloadable output file.
   * @param {CodeRustcApi.HeadResponsesContentRequest} request
   * @param {ResponsesClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headResponsesContent(
    catalog: string,
    key: string,
    request: CodeRustcApi.HeadResponsesContentRequest = {},
    requestOptions?: ResponsesClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__headResponsesContent(catalog, key, request, requestOptions),
    );
  }
  private async __headResponsesContent(
    catalog: string,
    key: string,
    request: CodeRustcApi.HeadResponsesContentRequest = {},
    requestOptions?: ResponsesClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.headResponsesContentConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/content/responses/{key}')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.NEVER as unknown as core.cast.CastSchema<any, any>,
        contentType: ContentType.NoContent,
        status: 200,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
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
