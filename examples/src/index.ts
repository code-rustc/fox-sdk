import { CodeRustcApiClient } from 'bloomberg-data-license';

(async () => {
  const api = new CodeRustcApiClient({});

  const getProductsRequestThemes = 'Company Data';

  const data = await api.products.getProducts({
    productCodes: 111643,
    themes: getProductsRequestThemes,
    page: 5,
    pageSize: 7,
    Authorization: 'Authorization',
    JWT: 'JWT',
  });

  console.log(data);
})();
