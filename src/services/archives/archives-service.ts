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
import { Archive, archiveResponse } from '../common/archive';
import { Status, statusResponse } from '../common/status';
import { GetArchiveRequest, GetArchivesRequest } from './request-params';

export declare namespace ArchivesClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for Archives operations.
 * Provides methods to interact with Archives-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class ArchivesClient extends BaseService {
  protected getArchivesConfig?: Partial<BaseClientOptions>;

  protected getArchiveConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for getArchives.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetArchivesConfig(config: Partial<BaseClientOptions>): this {
    this.getArchivesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getArchive.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetArchiveConfig(config: Partial<BaseClientOptions>): this {
    this.getArchiveConfig = config;
    return this;
  }

  /**
   * `archives` returns a collection of [archive](#tag/archives) resources, where each [archive](#tag/archives) describes aggregated historical data for the [dataset](#tag/datasets), and a downloadable link.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} dataset - Dataset identifier
   * @param {CodeRustcApi.GetArchivesRequest} request
   * @param {ArchivesClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.Archive | CodeRustcApi.Status>} - Success
   */
  getArchives(
    catalog: string,
    dataset: string,
    request: CodeRustcApi.GetArchivesRequest,
    requestOptions?: ArchivesClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.Archive | CodeRustcApi.Status> {
    return HttpResponsePromise.fromPromise(
      this.__getArchives(catalog, dataset, request, requestOptions),
    );
  }
  private async __getArchives(
    catalog: string,
    dataset: string,
    request: CodeRustcApi.GetArchivesRequest,
    requestOptions?: ArchivesClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.Archive | CodeRustcApi.Status>> {
    const resolvedConfig = this.getResolvedConfig(this.getArchivesConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/datasets/{dataset}/archives/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: archiveResponse,
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
      .addPathParam({
        key: 'dataset',
        value: dataset,
      })
      .addQueryParam({
        key: 'status',
        value: request.status,
      })
      .addQueryParam({
        key: 'startSnapshotDate',
        value: request.startSnapshotDate,
      })
      .addQueryParam({
        key: 'endSnapshotDate',
        value: request.endSnapshotDate,
      })
      .addQueryParam({
        key: 'startIssued',
        value: request.startIssued,
      })
      .addQueryParam({
        key: 'endIssued',
        value: request.endIssued,
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
    return this.client.callWithRawResponse<CodeRustcApi.Archive | CodeRustcApi.Status>(_request);
  }

  /**
   * A downloadable serialization of [archive](#tag/archive) in formats such as Parquet(http://parquet.apache.org/documentation/latest/). Please note that for content encoding of Parquet only identity (Accept-Encoding = identity) is supported, but not gzip.
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} dataset - Dataset identifier
   * @param {string} archiveName - Archive name
   * @param {CodeRustcApi.GetArchiveRequest} request
   * @param {ArchivesClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<string | CodeRustcApi.Status>} - Success
   */
  getArchive(
    catalog: string,
    dataset: string,
    archiveName: string,
    request: CodeRustcApi.GetArchiveRequest,
    requestOptions?: ArchivesClient.RequestOptions,
  ): HttpResponsePromise<string | CodeRustcApi.Status> {
    return HttpResponsePromise.fromPromise(
      this.__getArchive(catalog, dataset, archiveName, request, requestOptions),
    );
  }
  private async __getArchive(
    catalog: string,
    dataset: string,
    archiveName: string,
    request: CodeRustcApi.GetArchiveRequest,
    requestOptions?: ArchivesClient.RequestOptions,
  ): Promise<WithRawResponse<string | CodeRustcApi.Status>> {
    const resolvedConfig = this.getResolvedConfig(this.getArchiveConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/datasets/{dataset}/archives/{archiveName}')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.identity<string>(),
        contentType: ContentType.Text,
        status: 200,
      })
      .addResponse({
        schema: core.cast.identity<string>(),
        contentType: ContentType.Text,
        status: 206,
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
      .addPathParam({
        key: 'dataset',
        value: dataset,
      })
      .addPathParam({
        key: 'archiveName',
        value: archiveName,
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
    return this.client.callWithRawResponse<string | CodeRustcApi.Status>(_request);
  }
}
