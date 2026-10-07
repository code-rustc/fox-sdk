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
  BulkProductCollection,
  bulkProductCollectionResponse,
} from '../common/bulk-product-collection';
import { Status } from '../common/status';
import { GetProductsRequest } from './request-params';

export declare namespace ProductsClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for Products operations.
 * Provides methods to interact with Products-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class ProductsClient extends BaseService {
  protected getProductsConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for getProducts.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetProductsConfig(config: Partial<BaseClientOptions>): this {
    this.getProductsConfig = config;
    return this;
  }

  /**
 * A collection of Data Licence Bulk products with optional filtering.
A product is a collection of related Data License Bulk packages identified by a single `productCode`.

 * @param {CodeRustcApi.GetProductsRequest} request
 * @param {ProductsClient.RequestOptions} [requestOptions] - Request-specific configuration.
 * @returns {HttpResponsePromise<CodeRustcApi.BulkProductCollection>} - Success
 */
  getProducts(
    request: CodeRustcApi.GetProductsRequest = {},
    requestOptions?: ProductsClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.BulkProductCollection> {
    return HttpResponsePromise.fromPromise(this.__getProducts(request, requestOptions));
  }
  private async __getProducts(
    request: CodeRustcApi.GetProductsRequest = {},
    requestOptions?: ProductsClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.BulkProductCollection>> {
    const resolvedConfig = this.getResolvedConfig(this.getProductsConfig, requestOptions);
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
      .setPath('/catalogs/bbg/products')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: bulkProductCollectionResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addQueryParam({
        key: 'productCodes',
        value: request.productCodes,
      })
      .addQueryParam({
        key: 'themes',
        value: request.themes,
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
    return this.client.callWithRawResponse<CodeRustcApi.BulkProductCollection>(_request);
  }
}
