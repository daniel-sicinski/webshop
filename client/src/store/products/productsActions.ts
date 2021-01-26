import { IProduct } from '../../../../server/src/product/Product';
import { IPaginatedCollection } from '../../../../server/src/db/models/PaginatedCollection';
import {
  IProductsSortOption,
  IProductsFilter
} from '../../../../server/src/product/models/IProductsQueryParams';
import {
  makeAction,
  IActionUnion,
  makeActionWithPayload
} from '../utils/actionsUtils';

export enum ProductsActionTypes {
  FETCH_PRODUCTS = 'PRODUCTS/FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS = 'PRODUCTS/FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAIL = 'PRODUCTS/FETCH_PRODUCTS_FAIL',
  SELECT_PRODUCT_CATEGORY = 'PRODUCTS/SELECT_PRODUCT_CATEGORY',
  SELECT_PRODUCT_SORT_ORDER = 'PRODUCTS/SELECT_PRODUCT_SORT_ORDER',
  SELECT_PRODUCT_FILTER = 'PRODUCTS/SELECT_PRODUCT_FILTER'
}

export const fetchProducts = makeAction<ProductsActionTypes.FETCH_PRODUCTS>(
  ProductsActionTypes.FETCH_PRODUCTS
);

export const fetchProductsSuccess = makeActionWithPayload<
  ProductsActionTypes.FETCH_PRODUCTS_SUCCESS,
  IPaginatedCollection<IProduct>
>(ProductsActionTypes.FETCH_PRODUCTS_SUCCESS);

export const fetchProductsFail = makeActionWithPayload<
  ProductsActionTypes.FETCH_PRODUCTS_FAIL,
  string
>(ProductsActionTypes.FETCH_PRODUCTS_FAIL);

export const selectProductCategory = makeActionWithPayload<
  ProductsActionTypes.SELECT_PRODUCT_CATEGORY,
  number | null
>(ProductsActionTypes.SELECT_PRODUCT_CATEGORY);

export const selectProductSortOrder = makeActionWithPayload<
  ProductsActionTypes.SELECT_PRODUCT_SORT_ORDER,
  IProductsSortOption | null
>(ProductsActionTypes.SELECT_PRODUCT_SORT_ORDER);

export const selectProductFilter = makeActionWithPayload<
  ProductsActionTypes.SELECT_PRODUCT_FILTER,
  IProductsFilter | null
>(ProductsActionTypes.SELECT_PRODUCT_FILTER);

const acitons = {
  fetchProducts,
  fetchProductsSuccess,
  fetchProductsFail,
  selectProductCategory,
  selectProductSortOrder,
  selectProductFilter
};

export type IProductsAction = IActionUnion<typeof acitons>;
