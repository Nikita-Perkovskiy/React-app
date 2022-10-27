import getProducts from "../../api/getProducts";

export const setProducts = (products) => {
  return {
    type: "SET_PRODUCTS",
    payload: products,
  };
};

export const fetchProducts = () => (dispatch) => {
  dispatch({
    type: "START_FETCH_PRODUCTS",
  });
  getProducts()
    .then((products) => {
      const action = loadedProducts(products);
      dispatch(action);
    })
    .catch(() => {
      dispatch(errorLoading());
    });
};

export const loadedProducts = (products) => {
  return {
    type: "LOADED_PRODUCTS",
    payload: products,
  };
};

export const errorLoading = () => ({
  type: "ERROR_LOADED_PRODUCTS",
});
