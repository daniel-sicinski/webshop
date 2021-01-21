import query from '../db';
import { IProduct } from './Product';
import { IProductsQueryParams } from './models/IProductsQueryParams';
import Config from '../config';
import { QueryBuilder } from '../QueryBuilder';
import {
  IPaginatedCollection,
  buildPaginatedCollection
} from '../db/models/PaginatedCollection';
import { QueryResult } from 'pg';

export interface IProductDao {
  getProducts(
    params: IProductsQueryParams
  ): Promise<IPaginatedCollection<IProduct>>;
}

export class ProductDao {
  async getProducts(
    params: IProductsQueryParams
  ): Promise<IPaginatedCollection<IProduct>> {
    const { page, categoryId, sort, filter } = params;
    const queryBuilder = new QueryBuilder();

    const offset = (page - 1) * Config.PRODUCTS_PER_PAGE;
    const limit = Config.PRODUCTS_PER_PAGE;

    queryBuilder.offset(offset);
    queryBuilder.limit(limit);

    if (categoryId) {
      queryBuilder.where('category_id=' + categoryId);
    }

    if (filter) {
      queryBuilder.where(this.getFilterWhereClauseCondition(filter));
    }

    if (sort) {
      queryBuilder.orderBy(this.getOrderByClause(sort));
    }

    queryBuilder.select([
      'product_id',
      'category_id',
      'p.name as product_name',
      'price',
      'description',
      'sale_percent',
      'created_at',
      'c.name as category_name',
      'array_agg(symbol) as size_symbols',
      'array_agg(size_id) as size_ids',
      'count(*) over () as total'
    ]);

    queryBuilder.from([
      'product p',
      'join category c using (category_id)',
      'join product_size ps using (product_id)',
      'join size s using (size_id)'
    ]);

    queryBuilder.groupBy([
      'product_id',
      'category_id',
      'p.name',
      'price',
      'description',
      'sale_percent',
      'created_at',
      'c.name'
    ]);

    const queryResult = await query(queryBuilder.buildQuery());

    const products = queryResult.rows.map((productRow) => {
      const sizes = productRow.size_ids.map((id: number, i: number) => ({
        id,
        symbol: productRow.size_symbols[i]
      }));

      return {
        id: productRow.product_id,
        name: productRow.product_name,
        price: productRow.price,
        description: productRow.description,
        salePercent: productRow.sale_percent,
        createdAt: productRow.created_at,
        sizes,
        category: {
          id: productRow.category_id,
          name: productRow.category_name
        }
      };
    });

    const totalPages = this.getResultsTotalPages(
      queryResult,
      Config.PRODUCTS_PER_PAGE
    );

    return buildPaginatedCollection(products, totalPages, page);
  }

  private getOrderByClause(
    sort: 'price-acs' | 'price-desc' | 'created_at-desc'
  ) {
    return sort.replace('-', ' ');
  }

  private getFilterWhereClauseCondition(filter: 'new' | 'sale') {
    switch (filter) {
      case 'new':
        return this.getFilterNewWhereClauseCondition();
      case 'sale':
        return this.getFilterSaleWhereClauseCondition();
    }
  }

  private getFilterNewWhereClauseCondition() {
    return `created_at > now() - interval '${Config.NEW_PRODUCT_DAY_THRESHOLD} days'`;
  }

  private getFilterSaleWhereClauseCondition() {
    return 'sale_percent > 0';
  }

  private getResultsTotalPages(
    queryResults: QueryResult<any>,
    resultsPerPage: number
  ) {
    const totalResults: number = queryResults.rows[0]?.total;
    let totalPages = 1;
    if (totalResults) {
      totalPages = Math.ceil(totalResults / resultsPerPage);
    }
    return totalPages;
  }
}
