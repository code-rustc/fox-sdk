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
  BulkPackageCollection,
  bulkPackageCollectionResponse,
} from '../common/bulk-package-collection';
import { Status } from '../common/status';
import { GetPackagesRequest } from './request-params';

export declare namespace PackagesClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for Packages operations.
 * Provides methods to interact with Packages-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class PackagesClient extends BaseService {
  protected getPackagesConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for getPackages.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetPackagesConfig(config: Partial<BaseClientOptions>): this {
    this.getPackagesConfig = config;
    return this;
  }

  /**
 * A collection of Data Licence Bulk packages with optional filtering.
A rich description of the package content in html format can be found in the products/formattedDescription field.

 * @param {CodeRustcApi.GetPackagesRequest} request
 * @param {PackagesClient.RequestOptions} [requestOptions] - Request-specific configuration.
 * @returns {HttpResponsePromise<CodeRustcApi.BulkPackageCollection>} - Success
 */
  getPackages(
    request: CodeRustcApi.GetPackagesRequest = {},
    requestOptions?: PackagesClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.BulkPackageCollection> {
    return HttpResponsePromise.fromPromise(this.__getPackages(request, requestOptions));
  }
  private async __getPackages(
    request: CodeRustcApi.GetPackagesRequest = {},
    requestOptions?: PackagesClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.BulkPackageCollection>> {
    const resolvedConfig = this.getResolvedConfig(this.getPackagesConfig, requestOptions);
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
      .setPath('/catalogs/bbg/bulk/packages')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: bulkPackageCollectionResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addQueryParam({
        key: 'packageCodes',
        value: request.packageCodes,
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
        key: 'Authorization',
        value: request.Authorization,
      })
      .addHeaderParam({
        key: 'JWT',
        value: request.JWT,
      })
      .build();
    return this.client.callWithRawResponse<CodeRustcApi.BulkPackageCollection>(_request);
  }
}
