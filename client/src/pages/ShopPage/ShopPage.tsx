import React, { Fragment, useEffect } from 'react';
import {
  selectProductCategory,
  selectProductFilter
} from '../../store/products/productsActions';
import { Routes } from '../../config/routes';
import {
  PRODUCT_CATEGORY_ID_SKIRTS,
  PRODUCT_CATEGORY_ID_TSHIRTS
} from '../../config/appConstants';
import { useDispatch } from 'react-redux';
import { useCategory } from './hooks/useProductCategory';
import { ShopHeader } from './components/ShopHeader/ShopHeader';
import { SortSelect } from '../../shared/components/Products/SortSelect/SortSelect';
import { ProductsList } from '../../shared/components/Products/ProductsList/ProductsList';
import { ProductsFilterBar } from '../../shared/components/Products/ProductsFilterBar/ProductsFiltersBar';

export const ShopPage: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const currentRoute = window.location.pathname as Routes;
  const categoryId = useCategory(currentRoute);

  useEffect(() => {
    dispatch(selectProductCategory(categoryId));
  }, [currentRoute]);

  const shopPageFilters = (
    <Fragment>
      <button onClick={() => dispatch(selectProductCategory(null))}>All</button>
      <button
        onClick={() =>
          dispatch(selectProductCategory(PRODUCT_CATEGORY_ID_SKIRTS))
        }
      >
        Skirts
      </button>
      <button
        onClick={() =>
          dispatch(selectProductCategory(PRODUCT_CATEGORY_ID_TSHIRTS))
        }
      >
        T-Shirts
      </button>
    </Fragment>
  );

  const shopCategoryPageFilters = (
    <Fragment>
      <button onClick={() => dispatch(selectProductFilter(null))}>All</button>
      <button onClick={() => dispatch(selectProductFilter('sale'))}>
        On sale
      </button>
      <button onClick={() => dispatch(selectProductFilter('new'))}>
        New releases
      </button>
    </Fragment>
  );

  return (
    <Fragment>
      <ShopHeader route={currentRoute} />
      <section className="shop-page__products">
        <div className="shop-page__controls">
          <ProductsFilterBar>
            {currentRoute === Routes.SHOP_PAGE
              ? shopPageFilters
              : shopCategoryPageFilters}
          </ProductsFilterBar>
          <SortSelect />
        </div>
        <ProductsList />
      </section>
    </Fragment>
  );
};
