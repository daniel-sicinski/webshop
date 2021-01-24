export type IProductsSortOption =
  | 'price-acs'
  | 'price-desc'
  | 'created_at-desc';

export type IProductsFilter = 'new' | 'sale';

export interface IProductsQueryParams {
  page: number;
  categoryId?: number;
  sort?: IProductsSortOption;
  filter?: IProductsFilter;
}
