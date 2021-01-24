import React, { Component, Fragment } from "react";
import { IProduct } from "../../../../../server/src/product/Product";
import { fetchProducts, selectProductCategory, selectProductFilter, selectProductSortOrder } from "../../../store/products/productsActions";
import { IProductsState } from '../../../store/products/productsReducer';

interface ShopPageComponentProps {
  productsState: IProductsState;
  displayFetchMoreBtn: boolean;
  fetchProducts: typeof fetchProducts;
  selectProductSortOrder: typeof selectProductSortOrder;
  selectProductFilter: typeof selectProductFilter;
  selectProductCategory: typeof selectProductCategory;
}

export default class ShopPageComponent extends Component<
  ShopPageComponentProps
> {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    console.log(this.props.productsState);
    return (
      <Fragment>
        <div>Shop page</div>
        <div>{JSON.stringify(this.props.productsState)}</div>
        {this.props.displayFetchMoreBtn && <button onClick={() => this.props.fetchProducts()}>Fetch more</button>}
        <button onClick={() => this.props.selectProductCategory(1)}>Load skirts</button>
        <button onClick={() => this.props.selectProductCategory(2)}>Load Tshirts</button>
        <button onClick={() => this.props.selectProductCategory(3)}>Load coats</button>
        <button onClick={() => this.props.selectProductFilter("sale")}>Show on sale</button>
        <button onClick={() => this.props.selectProductSortOrder("price-desc")}>Sort by price desc</button>
      </Fragment>
    );
    
  }
}
