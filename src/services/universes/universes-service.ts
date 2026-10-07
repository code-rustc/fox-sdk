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
import { UniverseCollection, universeCollectionResponse } from '../common/universe-collection';
import { Status, statusResponse } from '../common/status';
import {
  DeleteUniverseRequest,
  GetDeletedUniverseRequest,
  GetUniverseRequest,
  GetUniversesRequest,
  PatchUniverseRequest,
  PostUniverseRequest,
} from './request-params';
import { UniversePostPayload, universePostPayloadRequest } from '../common/universe-post-payload';
import { Universe, universeResponse } from '../common/universe';
import {
  UniversePatchPayload,
  universePatchPayloadRequest,
} from '../common/universe-patch-payload';
import { DeletedUniverse, deletedUniverseResponse } from '../common/deleted-universe';

export declare namespace UniversesClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for Universes operations.
 * Provides methods to interact with Universes-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class UniversesClient extends BaseService {
  protected getUniversesConfig?: Partial<BaseClientOptions>;

  protected postUniverseConfig?: Partial<BaseClientOptions>;

  protected getUniverseConfig?: Partial<BaseClientOptions>;

  protected patchUniverseConfig?: Partial<BaseClientOptions>;

  protected deleteUniverseConfig?: Partial<BaseClientOptions>;

  protected getDeletedUniverseConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for getUniverses.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetUniversesConfig(config: Partial<BaseClientOptions>): this {
    this.getUniversesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for postUniverse.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setPostUniverseConfig(config: Partial<BaseClientOptions>): this {
    this.postUniverseConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getUniverse.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetUniverseConfig(config: Partial<BaseClientOptions>): this {
    this.getUniverseConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for patchUniverse.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setPatchUniverseConfig(config: Partial<BaseClientOptions>): this {
    this.patchUniverseConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteUniverse.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteUniverseConfig(config: Partial<BaseClientOptions>): this {
    this.deleteUniverseConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getDeletedUniverse.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetDeletedUniverseConfig(config: Partial<BaseClientOptions>): this {
    this.getDeletedUniverseConfig = config;
    return this;
  }

  /**
   * A collection of universes within a specific catalog.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {CodeRustcApi.GetUniversesRequest} request
   * @param {UniversesClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.UniverseCollection | CodeRustcApi.Status>} - success
   */
  getUniverses(
    catalog: string,
    request: CodeRustcApi.GetUniversesRequest,
    requestOptions?: UniversesClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.UniverseCollection | CodeRustcApi.Status> {
    return HttpResponsePromise.fromPromise(this.__getUniverses(catalog, request, requestOptions));
  }
  private async __getUniverses(
    catalog: string,
    request: CodeRustcApi.GetUniversesRequest,
    requestOptions?: UniversesClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.UniverseCollection | CodeRustcApi.Status>> {
    const resolvedConfig = this.getResolvedConfig(this.getUniversesConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/universes/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: universeCollectionResponse,
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
    return this.client.callWithRawResponse<CodeRustcApi.UniverseCollection | CodeRustcApi.Status>(
      _request,
    );
  }

  /**
   * Create a new universe resource. Requires an identifier (the name, used to construct the URI, must begin with a letter and consist only of alphanumeric characters), title (short description) and the contents.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {CodeRustcApi.PostUniverseRequest} request
   * @param {UniversesClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.Status>} - Created
   */
  postUniverse(
    catalog: string,
    request: CodeRustcApi.PostUniverseRequest,
    requestOptions?: UniversesClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.Status> {
    return HttpResponsePromise.fromPromise(this.__postUniverse(catalog, request, requestOptions));
  }
  private async __postUniverse(
    catalog: string,
    request: CodeRustcApi.PostUniverseRequest,
    requestOptions?: UniversesClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.Status>> {
    const resolvedConfig = this.getResolvedConfig(this.postUniverseConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/universes/')
      .setRequestSchema(universePostPayloadRequest)
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
   * Available content for the specified universe.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} universeIdentifier - Universe identifier.
   * @param {CodeRustcApi.GetUniverseRequest} request
   * @param {UniversesClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.Universe>} - success
   */
  getUniverse(
    catalog: string,
    universeIdentifier: string,
    request: CodeRustcApi.GetUniverseRequest,
    requestOptions?: UniversesClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.Universe> {
    return HttpResponsePromise.fromPromise(
      this.__getUniverse(catalog, universeIdentifier, request, requestOptions),
    );
  }
  private async __getUniverse(
    catalog: string,
    universeIdentifier: string,
    request: CodeRustcApi.GetUniverseRequest,
    requestOptions?: UniversesClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.Universe>> {
    const resolvedConfig = this.getResolvedConfig(this.getUniverseConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/universes/{universeIdentifier}/')
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
        key: 'universeIdentifier',
        value: universeIdentifier,
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
        key: 'requestType',
        value: request.requestType,
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
   * Please be aware that this will affect all requests that are actively referencing the universe being updated.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} universeIdentifier - Universe identifier.
   * @param {CodeRustcApi.PatchUniverseRequest} request
   * @param {UniversesClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success - no content
   */
  patchUniverse(
    catalog: string,
    universeIdentifier: string,
    request: CodeRustcApi.PatchUniverseRequest,
    requestOptions?: UniversesClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__patchUniverse(catalog, universeIdentifier, request, requestOptions),
    );
  }
  private async __patchUniverse(
    catalog: string,
    universeIdentifier: string,
    request: CodeRustcApi.PatchUniverseRequest,
    requestOptions?: UniversesClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.patchUniverseConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/universes/{universeIdentifier}/')
      .setRequestSchema(universePatchPayloadRequest)
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
        key: 'universeIdentifier',
        value: universeIdentifier,
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
   * Universes that are referenced by active recurring requests CAN NOT be deleted and will return a status code of 400.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} universeIdentifier - Universe identifier.
   * @param {CodeRustcApi.DeleteUniverseRequest} request
   * @param {UniversesClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success - no content
   */
  deleteUniverse(
    catalog: string,
    universeIdentifier: string,
    request: CodeRustcApi.DeleteUniverseRequest,
    requestOptions?: UniversesClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__deleteUniverse(catalog, universeIdentifier, request, requestOptions),
    );
  }
  private async __deleteUniverse(
    catalog: string,
    universeIdentifier: string,
    request: CodeRustcApi.DeleteUniverseRequest,
    requestOptions?: UniversesClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.deleteUniverseConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/universes/{universeIdentifier}/')
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
        key: 'universeIdentifier',
        value: universeIdentifier,
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
   * Universe that has been deleted.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} universeUuid - Universe unique identifier.
   * @param {CodeRustcApi.GetDeletedUniverseRequest} request
   * @param {UniversesClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.DeletedUniverse>} - success
   */
  getDeletedUniverse(
    catalog: string,
    universeUuid: string,
    request: CodeRustcApi.GetDeletedUniverseRequest,
    requestOptions?: UniversesClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.DeletedUniverse> {
    return HttpResponsePromise.fromPromise(
      this.__getDeletedUniverse(catalog, universeUuid, request, requestOptions),
    );
  }
  private async __getDeletedUniverse(
    catalog: string,
    universeUuid: string,
    request: CodeRustcApi.GetDeletedUniverseRequest,
    requestOptions?: UniversesClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.DeletedUniverse>> {
    const resolvedConfig = this.getResolvedConfig(this.getDeletedUniverseConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/deleted/universes/{universeUUID}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: deletedUniverseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addPathParam({
        key: 'universeUUID',
        value: universeUuid,
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
        key: 'requestType',
        value: request.requestType,
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
    return this.client.callWithRawResponse<CodeRustcApi.DeletedUniverse>(_request);
  }
}
