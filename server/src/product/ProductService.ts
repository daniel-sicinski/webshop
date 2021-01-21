import { IProductDao } from './ProductDao';
import { IProduct } from './Product';
import { IProductsQueryParams } from './models/IProductsQueryParams';
import { IPaginatedCollection } from '../db/models/PaginatedCollection';

export interface IProductService {
  getProducts(
    params: IProductsQueryParams
  ): Promise<IPaginatedCollection<IProduct>>;
}

export class ProductService {
  constructor(private productDao: IProductDao) {}

  async getProducts(
    params: IProductsQueryParams
  ): Promise<IPaginatedCollection<IProduct>> {
    return this.productDao.getProducts(params);
  }
}
