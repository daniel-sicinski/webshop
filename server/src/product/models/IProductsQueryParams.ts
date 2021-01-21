export interface IProductsQueryParams {
  page: number;
  categoryId?: number;
  sort?: 'price-acs' | 'price-desc' | 'created_at-desc';
  filter?: 'new' | 'sale';
}
