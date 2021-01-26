import { IAppStore } from '../store';
import {
  IProductsAction,
  ProductsActionTypes,
  fetchProductsSuccess
} from './productsActions';
import {
  IProductsFilter,
  IProductsSortOption
} from '../../../../server/src/product/models/IProductsQueryParams';
import { IPaginatedCollection } from '../../../../server/src/db/models/PaginatedCollection';
import { IProduct } from '../../../../server/src/product/Product';
import { Middleware } from 'redux';

export const productsMiddleware: Middleware<{}, IAppStore> = (store) => (
  next
) => async (action) => {
  const productsAction: IProductsAction = action;
  const { dispatch } = store;

  next(action);

  const {
    pagesLoaded,
    selectedSortOption,
    selectedFilter,
    selectedCategoryId
  } = store.getState().products;

  if (
    productsAction.type === ProductsActionTypes.FETCH_PRODUCTS ||
    productsAction.type === ProductsActionTypes.SELECT_PRODUCT_CATEGORY ||
    productsAction.type === ProductsActionTypes.SELECT_PRODUCT_SORT_ORDER ||
    productsAction.type === ProductsActionTypes.SELECT_PRODUCT_FILTER
  ) {
    try {
      const products = await getProducts(
        pagesLoaded + 1,
        selectedCategoryId,
        selectedFilter,
        selectedSortOption
      );

      dispatch(fetchProductsSuccess(products));
    } catch (err) {
      console.log(err);
    }
  }
};

async function makeGetRequest<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  });

  return await response.json();
}

async function getProducts(
  page: number,
  categoryId: number | null,
  filter: IProductsFilter | null,
  sort: IProductsSortOption | null
): Promise<IPaginatedCollection<IProduct>> {
  const url = '/api/v1/products';

  const queryParams = { page, categoryId, filter, sort } as const;

  const queryString = (Object.keys(queryParams) as Array<
    keyof typeof queryParams
  >)
    .map((k) => {
      if (queryParams[k]) {
        return `${k}=${queryParams[k]}`;
      } else {
        return null;
      }
    })
    .filter((v) => v)
    .join('&');

  const urlWithQueryParams = `${url}?${queryString}`;

  return await makeGetRequest<IPaginatedCollection<IProduct>>(
    urlWithQueryParams
  );
}
