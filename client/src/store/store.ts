import { createStore, combineReducers, applyMiddleware } from "redux";
import { productsReducer } from "./products/productsReducer";
import { productsMiddleware } from "./products/productsMiddleware";

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer, applyMiddleware(productsMiddleware));

export type IAppStore = ReturnType<typeof rootReducer>;
export default store;
