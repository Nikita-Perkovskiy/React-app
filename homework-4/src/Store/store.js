import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./products/reducer";
import modalReducer from "./modal/reducer";
import basketReducer from "./basket/reducer";
import favoritesReducer from "./favorites/reducer";
import { selectedProductReducer } from "./products/reducer";
import { syncLS, getProductsFromLS } from "./helpers";

const lsFavorites = getProductsFromLS("LS Favorites");
const lsBasket = getProductsFromLS("LS Basket");

const initialState = {
  products: [],
  showModal: false,
  basketProducts: lsBasket,
  favProducts: lsFavorites,
  productToBasket: {},
};

const reducer = combineReducers({
  products: productsReducer,
  showModal: modalReducer,
  basket: basketReducer,
  favorites: favoritesReducer,
  selectedProduct: selectedProductReducer,
});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(thunk, syncLS), devTools)
);

export default store;
