import { createStore, combineReducers, applyMiddleware } from 'redux';
import { productsReducer } from './products/productsReducer';
import { productsMiddleware } from './products/productsMiddleware';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(productsMiddleware))
);

export type IAppStore = ReturnType<typeof rootReducer>;
export default store;
