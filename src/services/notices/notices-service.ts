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
import { Notices, noticesResponse } from '../common/notices';
import { Status } from '../common/status';
import { GetNoticesRequest, SecuritiesByNoticeIdRequest } from './request-params';
import { Notice, noticeResponse } from '../common/notice';
import {
  SecuritiesByNoticeIdResponse,
  securitiesByNoticeIdResponseResponse,
} from './models/securities-by-notice-id-response';

export declare namespace NoticesClient {
  export type Options = Partial<BaseClientOptions>;
  export interface RequestOptions extends BaseRequestOptions {}
}

/**
 * Client for Notices operations.
 * Provides methods to interact with Notices-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class NoticesClient extends BaseService {
  protected getNoticesConfig?: Partial<BaseClientOptions>;

  protected getNoticeConfig?: Partial<BaseClientOptions>;

  protected getNoticeAttachmentConfig?: Partial<BaseClientOptions>;

  protected securitiesByNoticeIdConfig?: Partial<BaseClientOptions>;

  /**
   * Sets method-level configuration for getNotices.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetNoticesConfig(config: Partial<BaseClientOptions>): this {
    this.getNoticesConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getNotice.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetNoticeConfig(config: Partial<BaseClientOptions>): this {
    this.getNoticeConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for getNoticeAttachment.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setGetNoticeAttachmentConfig(config: Partial<BaseClientOptions>): this {
    this.getNoticeAttachmentConfig = config;
    return this;
  }

  /**
   * Sets method-level configuration for securitiesByNoticeId.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setSecuritiesByNoticeIdConfig(config: Partial<BaseClientOptions>): this {
    this.securitiesByNoticeIdConfig = config;
    return this;
  }

  /**
 * When retrieving notices, pass optional parameters to filter by specific fields, search by text, paginate result sets and specify sorting. For searches, provide a string containing one or more valid values separated by commas. The response contains a limited summary of details for each notification and the other `/notices/*` endpoints should be used to obtain further notice details such as related fields, securities, exchanges, supporting attachments, etc. Pagination is cursor based. Each response will have a `next` value that can be used to move forward through the dataset.
Note that the responses containing notices data will contain two separate ids. `refId` is the Reference ID that is used to identify a planned change or enhancement. Many notices may be published corresponding to one `refId` outlining impact to separate products. Additionally, if a notice is revised, a new `id` will be created but the `refId` will remain the same. Please do not store the notice `id` values long term and instead rely on `refId` and `products` information to track changes or enhancements to products.

`/notices/{noticeId}` can be used to retrieve all the Notice details. Each notice `id` is included in the response when fetching notices.

`/notices/{noticeId}/attachments/{attachmentKey}` Notices with attachments include attachment `attachmentKey` information in the response.

`/notices/{noticeId}/securities` Notices with large list of securities require additional requests to fetch the entire list.

Notices for the following products are available and can be filtered by the `products` parameter:

|Value                      |Main Product               |Sub Product                |
|---------------------------|---------------------------|---------------------------|
|DLBU                       |Data License               |Bulk                       |
|DLPS                       |Data License               |Per Security               |
|DLPLUS                     |Data License               |Data License Plus          |
|BVAL_CASH                  |Pricing - BVAL Evaluated   |BVAL - Fixed Income        |
|BVAL_OTC                   |Pricing - BVAL Evaluated   |BVAL - Derivatives         |
|B-PIPE                     |B-PIPE                     |                           |
|DATA_DISTRIBUTION_PLATFORM |Data Distribution Platform |
|SAPI                       |Server API                 |                           |

 * @param {CodeRustcApi.GetNoticesRequest} request
 * @param {NoticesClient.RequestOptions} [requestOptions] - Request-specific configuration.
 * @returns {HttpResponsePromise<CodeRustcApi.Notices>} - success
 */
  getNotices(
    request: CodeRustcApi.GetNoticesRequest = {},
    requestOptions?: NoticesClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.Notices> {
    return HttpResponsePromise.fromPromise(this.__getNotices(request, requestOptions));
  }
  private async __getNotices(
    request: CodeRustcApi.GetNoticesRequest = {},
    requestOptions?: NoticesClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.Notices>> {
    const resolvedConfig = this.getResolvedConfig(this.getNoticesConfig, requestOptions);
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
      .setPath('/notices')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: noticesResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addQueryParam({
        key: 'products',
        value: request.products,
        explode: false,
      })
      .addQueryParam({
        key: 'refIds',
        value: request.refIds,
        explode: false,
      })
      .addQueryParam({
        key: 'publishedStartDate',
        value: request.publishedStartDate,
      })
      .addQueryParam({
        key: 'publishedEndDate',
        value: request.publishedEndDate,
      })
      .addQueryParam({
        key: 'effectiveStartDate',
        value: request.effectiveStartDate,
      })
      .addQueryParam({
        key: 'effectiveEndDate',
        value: request.effectiveEndDate,
      })
      .addQueryParam({
        key: 'revisedOnly',
        value: request.revisedOnly,
      })
      .addQueryParam({
        key: 'cancelledOnly',
        value: request.cancelledOnly,
      })
      .addQueryParam({
        key: 'changeCategories',
        value: request.changeCategories,
        explode: false,
      })
      .addQueryParam({
        key: 'changeDrivers',
        value: request.changeDrivers,
        explode: false,
      })
      .addQueryParam({
        key: 'impacts',
        value: request.impacts,
        explode: false,
      })
      .addQueryParam({
        key: 'distributionNames',
        value: request.distributionNames,
        explode: false,
      })
      .addQueryParam({
        key: 'packageCodes',
        value: request.packageCodes,
        explode: false,
      })
      .addQueryParam({
        key: 'dataLicenseThemes',
        value: request.dataLicenseThemes,
        explode: false,
      })
      .addQueryParam({
        key: 'domains',
        value: request.domains,
        explode: false,
      })
      .addQueryParam({
        key: 'eids',
        value: request.eids,
        explode: false,
      })
      .addQueryParam({
        key: 'fields',
        value: request.fields,
        explode: false,
      })
      .addQueryParam({
        key: 'assetClasses',
        value: request.assetClasses,
        explode: false,
      })
      .addQueryParam({
        key: 'bbgids',
        value: request.bbgids,
        explode: false,
      })
      .addQueryParam({
        key: 'bbUniques',
        value: request.bbUniques,
        explode: false,
      })
      .addQueryParam({
        key: 'parsekeyables',
        value: request.parsekeyables,
        explode: false,
      })
      .addQueryParam({
        key: 'regions',
        value: request.regions,
        explode: false,
      })
      .addQueryParam({
        key: 'onlyFirmTargeted',
        value: request.onlyFirmTargeted,
      })
      .addQueryParam({
        key: 'keywords',
        value: request.keywords,
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
        key: 'sortDirection',
        value: request.sortDirection,
      })
      .addQueryParam({
        key: 'sortField',
        value: request.sortField,
      })
      .build();
    return this.client.callWithRawResponse<CodeRustcApi.Notices>(_request);
  }

  /**
   * Fetch all the details of a single notice. Each notice `id` can be found in the response of `/notices`
   * @param {number} noticeId - ID of the notification
   * @param {NoticesClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.Notice>} - success
   */
  getNotice(
    noticeId: number,
    requestOptions?: NoticesClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.Notice> {
    return HttpResponsePromise.fromPromise(this.__getNotice(noticeId, requestOptions));
  }
  private async __getNotice(
    noticeId: number,
    requestOptions?: NoticesClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.Notice>> {
    const resolvedConfig = this.getResolvedConfig(this.getNoticeConfig, requestOptions);
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
      .setPath('/notices/{noticeId}')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: noticeResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'noticeId',
        value: noticeId,
      })
      .build();
    return this.client.callWithRawResponse<CodeRustcApi.Notice>(_request);
  }

  /**
   * Download the attached file for a single notice. Notices with attachments include attachment `key` information in the response of `/notices` and `/notices/{noticeId}`
   * @param {number} noticeId - ID of the notification containing the requested attachment
   * @param {string} attachmentKey - Attachment key for the downloadable supporting documents for notices
   * @param {NoticesClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<BinaryResponse>} - success
   */
  getNoticeAttachment(
    noticeId: number,
    attachmentKey: string,
    requestOptions?: NoticesClient.RequestOptions,
  ): HttpResponsePromise<BinaryResponse> {
    return HttpResponsePromise.fromPromise(
      this.__getNoticeAttachment(noticeId, attachmentKey, requestOptions),
    );
  }
  private async __getNoticeAttachment(
    noticeId: number,
    attachmentKey: string,
    requestOptions?: NoticesClient.RequestOptions,
  ): Promise<WithRawResponse<BinaryResponse>> {
    const resolvedConfig = this.getResolvedConfig(this.getNoticeAttachmentConfig, requestOptions);
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
      .setPath('/notices/{noticeId}/attachments/{attachmentKey}')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: core.cast.identity<unknown>(),
        contentType: ContentType.Binary,
        status: 200,
      })
      .addPathParam({
        key: 'noticeId',
        value: noticeId,
      })
      .addPathParam({
        key: 'attachmentKey',
        value: attachmentKey,
      })
      .build();
    return this.client.callWithRawResponse<BinaryResponse>(_request);
  }

  /**
   * Fetch securities by page for a given notice. Supply the page in URL query parameters. The response will contain up to 5,000 securities.
   * @param {number} noticeId - ID of the notification containing the requested securities
   * @param {CodeRustcApi.SecuritiesByNoticeIdRequest} request
   * @param {NoticesClient.RequestOptions} [requestOptions] - Request-specific configuration.
   * @returns {HttpResponsePromise<CodeRustcApi.SecuritiesByNoticeIdResponse>} - success
   */
  securitiesByNoticeId(
    noticeId: number,
    request: CodeRustcApi.SecuritiesByNoticeIdRequest = {},
    requestOptions?: NoticesClient.RequestOptions,
  ): HttpResponsePromise<CodeRustcApi.SecuritiesByNoticeIdResponse> {
    return HttpResponsePromise.fromPromise(
      this.__securitiesByNoticeId(noticeId, request, requestOptions),
    );
  }
  private async __securitiesByNoticeId(
    noticeId: number,
    request: CodeRustcApi.SecuritiesByNoticeIdRequest = {},
    requestOptions?: NoticesClient.RequestOptions,
  ): Promise<WithRawResponse<CodeRustcApi.SecuritiesByNoticeIdResponse>> {
    const resolvedConfig = this.getResolvedConfig(this.securitiesByNoticeIdConfig, requestOptions);
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
      .setPath('/notices/{noticeId}/securities')
      .setRequestSchema(core.cast.identity<unknown>())
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: securitiesByNoticeIdResponseResponse,
        contentType: ContentType.Json,
        status: 200,
      })
      .addPathParam({
        key: 'noticeId',
        value: noticeId,
      })
      .addQueryParam({
        key: 'page',
        value: request.page,
      })
      .build();
    return this.client.callWithRawResponse<CodeRustcApi.SecuritiesByNoticeIdResponse>(_request);
  }
}
