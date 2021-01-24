import { connect } from "react-redux";
import { IAppStore } from "../../store/store";
import ShopPageComponent from "./components/ShopPageComponent";
import { fetchProducts, selectProductSortOrder, selectProductFilter, selectProductCategory } from '../../store/products/productsActions';
import { IProductsState } from '../../store/products/productsReducer';

const stateToProps = (state: IAppStore) => {
  return { productsState: state.products, displayFetchMoreBtn: displayFetchMoreBtn(state.products)};
};

function displayFetchMoreBtn(productsState: IProductsState) {
  return productsState.totalPages > 0 && productsState.pagesLoaded < productsState.totalPages;
}

export default connect(stateToProps, { fetchProducts, selectProductSortOrder, selectProductFilter, selectProductCategory })(ShopPageComponent);
