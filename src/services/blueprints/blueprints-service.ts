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
  GetBlueprintsCollectionRequest,
  GetBlueprintsContentRequest,
  HeadBlueprintsContentRequest,
} from './request-params';

export declare namespace BlueprintsClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for Blueprints operations.
 * Provides methods to interact with Blueprints-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class BlueprintsClient extends BaseService {
  protected getBlueprintsCollectionConfig?: Partial<BaseClientOptions>;

  protected getBlueprintsContentConfig?: Partial<BaseClientOptions>;

  protected headBlueprintsContentConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for getBlueprintsCollection.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetBlueprintsCollectionConfig(config: Partial<BaseClientOptions>): this {
    this.getBlueprintsCollectionConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getBlueprintsContent.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetBlueprintsContentConfig(config: Partial<BaseClientOptions>): this {
    this.getBlueprintsContentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for headBlueprintsContent.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setHeadBlueprintsContentConfig(config: Partial<BaseClientOptions>): this {
    this.headBlueprintsContentConfig = config;
    return this;
  }

  /**
   * A collection of Blueprint data files each describing a specific product package.
   * @param {CodeRustcApi.GetBlueprintsCollectionRequest} request
   * @param {BlueprintsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.ContentCollectionItem>} - success
   */
  getBlueprintsCollection(
    request: CodeRustcApi.GetBlueprintsCollectionRequest = {},
    requestOptions?: BlueprintsClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.ContentCollectionItem> {
    return HttpResponsePromise.fromPromise(this.__getBlueprintsCollection(request, requestOptions));
  }
  private async __getBlueprintsCollection(
    request: CodeRustcApi.GetBlueprintsCollectionRequest = {},
    requestOptions?: BlueprintsClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.ContentCollectionItem>> {
    const resolvedConfig = this.getResolvedConfig(
      this.getBlueprintsCollectionConfig,
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
      .setPath('/catalogs/bbg/content/blueprints')
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
   * A downloadable Blueprints data file identified by the key.
   * @param {string} key - Key for the downloadable output file.
   * @param {CodeRustcApi.GetBlueprintsContentRequest} request
   * @param {BlueprintsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<string>} - success
   */
  getBlueprintsContent(
    key: string,
    request: CodeRustcApi.GetBlueprintsContentRequest = {},
    requestOptions?: BlueprintsClient.RequestOptions,
  ): HttpResponsePromise<string> {
    return HttpResponsePromise.fromPromise(
      this.__getBlueprintsContent(key, request, requestOptions),
    );
  }
  private async __getBlueprintsContent(
    key: string,
    request: CodeRustcApi.GetBlueprintsContentRequest = {},
    requestOptions?: BlueprintsClient.RequestOptions,
  ): Promise<WithRawResponse<string>> {
    const resolvedConfig = this.getResolvedConfig(this.getBlueprintsContentConfig, requestOptions);
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
      .setPath('/catalogs/bbg/content/blueprints/{key}')
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
   * Returns the headers that would be returned if the specified Blueprints data file were requested with the HTTP GET method.
   * @param {string} key - Key for the downloadable output file.
   * @param {CodeRustcApi.HeadBlueprintsContentRequest} request
   * @param {BlueprintsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success response
   */
  headBlueprintsContent(
    key: string,
    request: CodeRustcApi.HeadBlueprintsContentRequest = {},
    requestOptions?: BlueprintsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__headBlueprintsContent(key, request, requestOptions),
    );
  }
  private async __headBlueprintsContent(
    key: string,
    request: CodeRustcApi.HeadBlueprintsContentRequest = {},
    requestOptions?: BlueprintsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.headBlueprintsContentConfig, requestOptions);
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
      .setPath('/catalogs/bbg/content/blueprints/{key}')
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
