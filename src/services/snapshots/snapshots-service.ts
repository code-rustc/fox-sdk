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
import { Snapshots, snapshotsResponse } from '../common/snapshots';
import { Status, statusResponse } from '../common/status';
import { GetSnapshotRequest, GetSnapshotsRequest } from './request-params';
import { Snapshot, snapshotResponse } from '../common/snapshot';

export declare namespace SnapshotsClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for Snapshots operations.
 * Provides methods to interact with Snapshots-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class SnapshotsClient extends BaseService {
  protected getSnapshotsConfig?: Partial<BaseClientOptions>;

  protected getSnapshotConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for getSnapshots.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetSnapshotsConfig(config: Partial<BaseClientOptions>): this {
    this.getSnapshotsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getSnapshot.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetSnapshotConfig(config: Partial<BaseClientOptions>): this {
    this.getSnapshotConfig = config;
    return this;
  }

  /**
   * `snapshots` returns a collection of [snapshot](#tag/snapshots) resources, where each [snapshot](#tag/snapshots) describes a point in the publication time series for the [dataset](#tag/datasets), and may be downloaded as a full or sample [distributions](#tag/distributions).
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {string} dataset - Dataset identifier
   * @param {CodeRustcApi.GetSnapshotsRequest} request
   * @param {SnapshotsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.Snapshots | CodeRustcApi.Status>} - Success
   */
  getSnapshots(
    catalog: string,
    dataset: string,
    request: CodeRustcApi.GetSnapshotsRequest,
    requestOptions?: SnapshotsClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.Snapshots | CodeRustcApi.Status> {
    return HttpResponsePromise.fromPromise(
      this.__getSnapshots(catalog, dataset, request, requestOptions),
    );
  }
  private async __getSnapshots(
    catalog: string,
    dataset: string,
    request: CodeRustcApi.GetSnapshotsRequest,
    requestOptions?: SnapshotsClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.Snapshots | CodeRustcApi.Status>> {
    const resolvedConfig = this.getResolvedConfig(this.getSnapshotsConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/datasets/{dataset}/snapshots/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: snapshotsResponse,
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
        key: 'page',
        value: request.page,
      })
      .addQueryParam({
        key: 'startIssued',
        value: request.startIssued,
      })
      .addQueryParam({
        key: 'endIssued',
        value: request.endIssued,
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
    return this.client.callWithRawResponse<CodeRustcApi.Snapshots | CodeRustcApi.Status>(_request);
  }

  /**
 * A `snapshot` represents a publication of a [dataset](#tag/datasets).It contains a collection of [distributions](#tag/distributions) which are downloadable serializations of the `snapshots` as different content types.

 * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
 * @param {string} dataset - Dataset identifier
 * @param {string} snapshot - Dataset snapshot identifier
 * @param {CodeRustcApi.GetSnapshotRequest} request
 * @param {SnapshotsClient.RequestOptions} [requestOptions] - Request-specific configuration.
 * @returns {HttpResponsePromise<CodeRustcApi.Snapshot | CodeRustcApi.Status>} - Success
 */
  getSnapshot(
    catalog: string,
    dataset: string,
    snapshot: string,
    request: CodeRustcApi.GetSnapshotRequest,
    requestOptions?: SnapshotsClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.Snapshot | CodeRustcApi.Status> {
    return HttpResponsePromise.fromPromise(
      this.__getSnapshot(catalog, dataset, snapshot, request, requestOptions),
    );
  }
  private async __getSnapshot(
    catalog: string,
    dataset: string,
    snapshot: string,
    request: CodeRustcApi.GetSnapshotRequest,
    requestOptions?: SnapshotsClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.Snapshot | CodeRustcApi.Status>> {
    const resolvedConfig = this.getResolvedConfig(this.getSnapshotConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/datasets/{dataset}/snapshots/{snapshot}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: snapshotResponse,
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
      .addPathParam({
        key: 'snapshot',
        value: snapshot,
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
    return this.client.callWithRawResponse<CodeRustcApi.Snapshot | CodeRustcApi.Status>(_request);
  }
}
