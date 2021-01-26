import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IProductsSortOption } from '../../../../../../server/src/product/models/IProductsQueryParams';
import { selectProductSortOrder } from '../../../../store/products/productsActions';
import { IAppStore } from '../../../../store/store';

export const SortSelect: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const selectedSortOption =
    useSelector<IAppStore, IProductsSortOption | null>(
      (state) => state.products.selectedSortOption
    ) || '';

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      selectProductSortOrder((e.target.value as IProductsSortOption) || null)
    );
  };

  return (
    <div className="sort-select">
      <select
        name="sort-select"
        id="sort-select"
        value={selectedSortOption}
        onChange={handleOnChange}
      >
        <option value="">Default sorting</option>
        <option value="price-asc">Price: ascending</option>
        <option value="price-desc">Price: descending</option>
        <option value="created_at-desc">Newest to oldest</option>
      </select>
    </div>
  );
};
