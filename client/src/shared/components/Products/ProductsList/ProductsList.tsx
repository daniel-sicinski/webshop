import React from 'react';
import { useSelector } from 'react-redux';
import { IProduct } from '../../../../../../server/src/product/Product';
import { IAppStore } from '../../../../store/store';
import { ProductListItem } from '../ProductListItem/ProductListItem';

export const ProductsList: React.FunctionComponent = () => {
  const products = useSelector<IAppStore, IProduct[]>(
    (state) => state.products.products
  );

  return (
    <div className="products-list">
      {products.map((product) => (
        <ProductListItem product={product} key={product.id} />
      ))}
    </div>
  );
};
