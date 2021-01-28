import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ProductsFilterBar } from '../../shared/components/Products/ProductsFilterBar/ProductsFiltersBar';
import { ProductsList } from '../../shared/components/Products/ProductsList/ProductsList';
import { IndexPageGallery } from './components/IndexPageGallery/IndexPageGallery';
import { selectProductFilter } from '../../store/products/productsActions';

export const IndexPage: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectProductFilter('sale'));
  }, []);

  return (
    <Fragment>
      <IndexPageGallery />
      <section className="index-page__products">
        <div className="index-page__controls">
          <ProductsFilterBar>
            <button
              className="label"
              onClick={() => dispatch(selectProductFilter('sale'))}
            >
              On sale
            </button>
            <button
              className="label"
              onClick={() => dispatch(selectProductFilter('new'))}
            >
              New releases
            </button>
          </ProductsFilterBar>
        </div>
        <ProductsList />
      </section>
    </Fragment>
  );
};
