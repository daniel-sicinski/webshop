import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IProduct } from '../../../../../../server/src/product/Product';
import { IAppStore } from '../../../../store/store';
import { ProductListItem } from '../ProductListItem/ProductListItem';
import { fetchProducts } from '../../../../store/products/productsActions';
import { Button } from '../../Button/Button';

export const ProductsList: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const products = useSelector<IAppStore, IProduct[]>(
    (state) => state.products.products
  );
  const isLoadMoreBtnVisible = useSelector<IAppStore, boolean>(
    (state) => state.products.pagesLoaded < state.products.totalPages
  );

  return (
    <div className="products-list">
      <div className="products-list__grid">
        {products.map((product) => (
          <ProductListItem product={product} key={product.id} />
        ))}
      </div>
      {isLoadMoreBtnVisible && (
        <Button
          classNames={['products-list__btn']}
          onClick={() => dispatch(fetchProducts())}
        >
          Load more
        </Button>
      )}
    </div>
  );
};
