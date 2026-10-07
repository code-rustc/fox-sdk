import {
  GetProductsRequestThemes,
  getProductsRequestThemes,
} from './models/get-products-request-themes';

export interface GetProductsRequest {
  productCodes?: number;
  themes?: GetProductsRequestThemes;
  page?: number;
  pageSize?: number;
  Authorization?: string;
  JWT?: string;
}
