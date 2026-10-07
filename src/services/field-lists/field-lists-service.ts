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
import { FieldListCollection, fieldListCollectionResponse } from '../common/field-list-collection';
import { Status, statusResponse } from '../common/status';
import {
  DeleteFieldListRequest,
  GetDeletedFieldListRequest,
  GetFieldListRequest,
  GetFieldListsRequest,
  PatchFieldListRequest,
  PostFieldListRequest,
} from './request-params';
import {
  PostFieldListRequestBody,
  postFieldListRequestBodyRequest,
} from './models/post-field-list-request-body';
import {
  GetFieldListResponse,
  getFieldListResponseResponse,
} from './models/get-field-list-response';
import {
  FieldListPatchPayload,
  fieldListPatchPayloadRequest,
} from '../common/field-list-patch-payload';
import {
  GetDeletedFieldListResponse,
  getDeletedFieldListResponseResponse,
} from './models/get-deleted-field-list-response';

export declare namespace FieldListsClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for FieldLists operations.
 * Provides methods to interact with FieldLists-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class FieldListsClient extends BaseService {
  protected getFieldListsConfig?: Partial<BaseClientOptions>;

  protected postFieldListConfig?: Partial<BaseClientOptions>;

  protected getFieldListConfig?: Partial<BaseClientOptions>;

  protected patchFieldListConfig?: Partial<BaseClientOptions>;

  protected deleteFieldListConfig?: Partial<BaseClientOptions>;

  protected getDeletedFieldListConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for getFieldLists.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetFieldListsConfig(config: Partial<BaseClientOptions>): this {
    this.getFieldListsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for postFieldList.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setPostFieldListConfig(config: Partial<BaseClientOptions>): this {
    this.postFieldListConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getFieldList.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetFieldListConfig(config: Partial<BaseClientOptions>): this {
    this.getFieldListConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for patchFieldList.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setPatchFieldListConfig(config: Partial<BaseClientOptions>): this {
    this.patchFieldListConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for deleteFieldList.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setDeleteFieldListConfig(config: Partial<BaseClientOptions>): this {
    this.deleteFieldListConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getDeletedFieldList.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetDeletedFieldListConfig(config: Partial<BaseClientOptions>): this {
    this.getDeletedFieldListConfig = config;
    return this;
  }

  /**
   * A collection of field lists within a specific catalog.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {CodeRustcApi.GetFieldListsRequest} request
   * @param {FieldListsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.FieldListCollection | CodeRustcApi.Status>} - success
   */
  getFieldLists(
    catalog: string,
    request: CodeRustcApi.GetFieldListsRequest,
    requestOptions?: FieldListsClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.FieldListCollection | CodeRustcApi.Status> {
    return HttpResponsePromise.fromPromise(this.__getFieldLists(catalog, request, requestOptions));
  }
  private async __getFieldLists(
    catalog: string,
    request: CodeRustcApi.GetFieldListsRequest,
    requestOptions?: FieldListsClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.FieldListCollection | CodeRustcApi.Status>> {
    const resolvedConfig = this.getResolvedConfig(this.getFieldListsConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/fieldLists/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: fieldListCollectionResponse,
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
        key: 'type',
        value: request.type,
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
    return this.client.callWithRawResponse<CodeRustcApi.FieldListCollection | CodeRustcApi.Status>(
      _request,
    );
  }

  /**
   * Create a new field list resource. Requires an identifier (the name, used to construct the URI, must begin with a letter and consist only of alphanumeric characters), title (short description) and the contents.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {CodeRustcApi.PostFieldListRequest} request
   * @param {FieldListsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.Status>} - Created
   */
  postFieldList(
    catalog: string,
    request: CodeRustcApi.PostFieldListRequest,
    requestOptions?: FieldListsClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.Status> {
    return HttpResponsePromise.fromPromise(this.__postFieldList(catalog, request, requestOptions));
  }
  private async __postFieldList(
    catalog: string,
    request: CodeRustcApi.PostFieldListRequest,
    requestOptions?: FieldListsClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.Status>> {
    const resolvedConfig = this.getResolvedConfig(this.postFieldListConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/fieldLists/')
      .setRequestSchema(postFieldListRequestBodyRequest)
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
   * A field list resource.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} fieldListIdentifier - Field list identifier.
   * @param {CodeRustcApi.GetFieldListRequest} request
   * @param {FieldListsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.GetFieldListResponse>} - success
   */
  getFieldList(
    catalog: string,
    fieldListIdentifier: string,
    request: CodeRustcApi.GetFieldListRequest,
    requestOptions?: FieldListsClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.GetFieldListResponse> {
    return HttpResponsePromise.fromPromise(
      this.__getFieldList(catalog, fieldListIdentifier, request, requestOptions),
    );
  }
  private async __getFieldList(
    catalog: string,
    fieldListIdentifier: string,
    request: CodeRustcApi.GetFieldListRequest,
    requestOptions?: FieldListsClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.GetFieldListResponse>> {
    const resolvedConfig = this.getResolvedConfig(this.getFieldListConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/fieldLists/{fieldListIdentifier}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getFieldListResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addPathParam({
        key: 'fieldListIdentifier',
        value: fieldListIdentifier,
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
    return this.client.callWithRawResponse<CodeRustcApi.GetFieldListResponse>(_request);
  }

  /**
   * Field lists that have active requests referencing them CAN NOT be updated and will return a 400 status code.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} fieldListIdentifier - Field list identifier.
   * @param {CodeRustcApi.PatchFieldListRequest} request
   * @param {FieldListsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success - no content
   */
  patchFieldList(
    catalog: string,
    fieldListIdentifier: string,
    request: CodeRustcApi.PatchFieldListRequest,
    requestOptions?: FieldListsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__patchFieldList(catalog, fieldListIdentifier, request, requestOptions),
    );
  }
  private async __patchFieldList(
    catalog: string,
    fieldListIdentifier: string,
    request: CodeRustcApi.PatchFieldListRequest,
    requestOptions?: FieldListsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.patchFieldListConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/fieldLists/{fieldListIdentifier}/')
      .setRequestSchema(fieldListPatchPayloadRequest)
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
        key: 'fieldListIdentifier',
        value: fieldListIdentifier,
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
   * Field Lists that are referenced by active recurring requests CAN NOT be deleted and will return a status code of 400.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} fieldListIdentifier - Field list identifier.
   * @param {CodeRustcApi.DeleteFieldListRequest} request
   * @param {FieldListsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<void>} - Success - no content
   */
  deleteFieldList(
    catalog: string,
    fieldListIdentifier: string,
    request: CodeRustcApi.DeleteFieldListRequest,
    requestOptions?: FieldListsClient.RequestOptions,
  ): HttpResponsePromise<void> {
    return HttpResponsePromise.fromPromise(
      this.__deleteFieldList(catalog, fieldListIdentifier, request, requestOptions),
    );
  }
  private async __deleteFieldList(
    catalog: string,
    fieldListIdentifier: string,
    request: CodeRustcApi.DeleteFieldListRequest,
    requestOptions?: FieldListsClient.RequestOptions,
  ): Promise<WithRawResponse<void>> {
    const resolvedConfig = this.getResolvedConfig(this.deleteFieldListConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/fieldLists/{fieldListIdentifier}/')
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
        key: 'fieldListIdentifier',
        value: fieldListIdentifier,
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
   * A field list that has been deleted.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} fieldListUuid - Field list unique identifier.
   * @param {CodeRustcApi.GetDeletedFieldListRequest} request
   * @param {FieldListsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.GetDeletedFieldListResponse>} - success
   */
  getDeletedFieldList(
    catalog: string,
    fieldListUuid: string,
    request: CodeRustcApi.GetDeletedFieldListRequest,
    requestOptions?: FieldListsClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.GetDeletedFieldListResponse> {
    return HttpResponsePromise.fromPromise(
      this.__getDeletedFieldList(catalog, fieldListUuid, request, requestOptions),
    );
  }
  private async __getDeletedFieldList(
    catalog: string,
    fieldListUuid: string,
    request: CodeRustcApi.GetDeletedFieldListRequest,
    requestOptions?: FieldListsClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.GetDeletedFieldListResponse>> {
    const resolvedConfig = this.getResolvedConfig(this.getDeletedFieldListConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/deleted/fieldLists/{fieldListUUID}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: getDeletedFieldListResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'catalog',
        value: catalog,
      })
      .addPathParam({
        key: 'fieldListUUID',
        value: fieldListUuid,
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
    return this.client.callWithRawResponse<CodeRustcApi.GetDeletedFieldListResponse>(_request);
  }
}
