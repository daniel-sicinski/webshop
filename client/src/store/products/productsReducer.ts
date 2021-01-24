import { IProduct } from "../../../../server/src/product/Product";
import {
  IProductsSortOption,
  IProductsFilter,
} from "../../../../server/src/product/models/IProductsQueryParams";
import { ProductsActionTypes, IProductsAction } from "./productsActions";

export interface IProductsState {
  products: IProduct[];
  loading: boolean;
  loadingErrorMessage: string | null;
  pagesLoaded: number;
  totalPages: number;
  selectedCategoryId: number | null;
  selectedSortOption: IProductsSortOption | null;
  selectedFilter: IProductsFilter | null;
}

const initialState: IProductsState = {
  products: [],
  loading: false,
  loadingErrorMessage: null,
  pagesLoaded: 0,
  totalPages: 0,
  selectedCategoryId: null,
  selectedSortOption: null,
  selectedFilter: null,
};

export const productsReducer = (
  state = initialState,
  action: IProductsAction
): IProductsState => {
  switch (action.type) {
    case ProductsActionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: [...state.products, ...action.payload.data],
        loading: false,
        pagesLoaded: state.pagesLoaded + 1,
        totalPages: action.payload.totalPages,
      };
    case ProductsActionTypes.FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        loadingErrorMessage: action.payload,
      };
    case ProductsActionTypes.SELECT_PRODUCT_CATEGORY:
      return {
        ...state,
        selectedCategoryId: action.payload,
        products: [],
        pagesLoaded: 0,
        totalPages: 0,
        selectedSortOption: null,
        selectedFilter: null,
      };
    case ProductsActionTypes.SELECT_PRODUCT_FILTER:
      return {
        ...state,
        selectedFilter: action.payload,
        products: [],
        pagesLoaded: 0,
        totalPages: 0,
        selectedSortOption: null,
      };
    case ProductsActionTypes.SELECT_PRODUCT_SORT_ORDER:
      return {
        ...state,
        selectedSortOption: action.payload,
        products: [],
        pagesLoaded: 0,
        totalPages: 0,
      };
    default:
      return state;
  }
};
