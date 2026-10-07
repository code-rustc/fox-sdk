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
import { Catalogs, catalogsResponse } from '../common/catalogs';
import { Status, statusResponse } from '../common/status';
import { GetCatalogRequest, GetCatalogsRequest } from './request-params';
import { Catalog, catalogResponse } from '../common/catalog';

export declare namespace CatalogsClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for Catalogs operations.
 * Provides methods to interact with Catalogs-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class CatalogsClient extends BaseService {
  protected getCatalogsConfig?: Partial<BaseClientOptions>;

  protected getCatalogConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for getCatalogs.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetCatalogsConfig(config: Partial<BaseClientOptions>): this {
    this.getCatalogsConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getCatalog.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetCatalogConfig(config: Partial<BaseClientOptions>): this {
    this.getCatalogConfig = config;
    return this;
  }

  /**
 * Returns a collection of Bloomberg Data License catalogs, organized by Data License Account. DL REST API exposes the following [catalog](#tag/catalogs) resources (subject to access rights):
## Bloomberg Catalog
The Bloomberg catalog ([`/catalogs/bbg`](#tag/catalogs)) is visible to all DL REST API users.

### Bulk Datasets
The Bloomberg catalog contains Bulk datasets offered by Bloomberg Data License.

Access rights to these Bulk [datasets](#tag/datasets) are governed through Bloomberg Data License Bulk Agreements for the Account that issued the requestor's credentials.
Samples of the Bulk [datasets](#tag/datasets) are available to all DL REST API users.

### Metadata
The Bloomberg catalog exposes [Fields](#tag/fields) and [publishers](#tag/publishers) metadata describing all Data License products to all DL REST API users.

### Bloomberg Re-Usable Resources
The Bloomberg catalog also provides containers of "re-usable" [universes](#tag/universes) and [fieldLists](#tag/fieldLists). These resources may be referenced through a request submitted through an Account `catalog`

## Account Catalogs
An Account Catalog ([`/catalogs/{catalog}`](#tag/catalogs)) and the resources in it are accessible only to a requestor using credentials issued for Bloomberg Data License account that is subject to a metered usage agreement, such as a Master Data Schedule (MDS) agreement.

### Account Re-Usable Resources
Each Account Catalog allows DL REST API users to create and maintain user-defined reusable resources than can be used to request a [Custom dataset](#tag/datasets). These re-usable resources, or components, comprise: ([requests](#tag/requests), [universes](#tag/universes), [fieldLists](#tag/fieldLists) and [triggers](#tag/triggers)).

The Account Catalog also provides the Bloomberg Data License responses ([datasets](#tag/datasets) to these requests.

 * @param {CodeRustcApi.GetCatalogsRequest} request
 * @param {CatalogsClient.RequestOptions} [requestOptions] - Request-specific configuration.
 * @returns {HttpResponsePromise<CodeRustcApi.Catalogs | CodeRustcApi.Status>} - Success
 */
  getCatalogs(
    request: CodeRustcApi.GetCatalogsRequest,
    requestOptions?: CatalogsClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.Catalogs | CodeRustcApi.Status> {
    return HttpResponsePromise.fromPromise(this.__getCatalogs(request, requestOptions));
  }
  private async __getCatalogs(
    request: CodeRustcApi.GetCatalogsRequest,
    requestOptions?: CatalogsClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.Catalogs | CodeRustcApi.Status>> {
    const resolvedConfig = this.getResolvedConfig(this.getCatalogsConfig, requestOptions);
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
      .setPath('/catalogs/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: catalogsResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addResponse({
        schema: statusResponse,
        contentType: ContentType.Json,
        status: 303,
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
    return this.client.callWithRawResponse<CodeRustcApi.Catalogs | CodeRustcApi.Status>(_request);
  }

  /**
   * Both the [Bloomberg Catalog](#tag/catalogs) and an [Account Catalog](#tag/catalogs) comprise a collection of resource containers, comprising [datasets](#tag/datasets), [publishers](#tag/publishers), [fields](#tag/fields), [requests](#tag/requests), [universes](#tag/universes), [fieldLists](#tag/fieldLists) and [triggers](#tag/triggers).
   * @param {string} catalog - Catalog identifier. Must be either `bbg` or the customer's DL account number (e.g. `1234`).
   * @param {CodeRustcApi.GetCatalogRequest} request
   * @param {CatalogsClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.Catalog>} - Success
   */
  getCatalog(
    catalog: string,
    request: CodeRustcApi.GetCatalogRequest,
    requestOptions?: CatalogsClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.Catalog> {
    return HttpResponsePromise.fromPromise(this.__getCatalog(catalog, request, requestOptions));
  }
  private async __getCatalog(
    catalog: string,
    request: CodeRustcApi.GetCatalogRequest,
    requestOptions?: CatalogsClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.Catalog>> {
    const resolvedConfig = this.getResolvedConfig(this.getCatalogConfig, requestOptions);
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
      .setPath('/catalogs/{catalog}/')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: catalogResponse,
        contentType: ContentType.Json,
        status: 200,
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
      .build();
    return this.client.callWithRawResponse<CodeRustcApi.Catalog>(_request);
  }
}
