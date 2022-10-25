export const syncLS = (store) => {
  return function (next) {
    return function (action) {
      if (
        action.type === "ADD_FAVORITES" ||
        action.type === "REMOVE_FAVORITES"
      ) {
        const result = next(action);
        localStorage.setItem(
          "LS Favorites",
          JSON.stringify(store.getState().favorites)
        );
        return result;
      }
      if (
        action.type === "ADD_TO_BASKET" ||
        action.type === "REMOVE_FROM_BASKET"
      ) {
        const result = next(action);
        localStorage.setItem(
          "LS Basket",
          JSON.stringify(store.getState().basket)
        );
        return result;
      }
      return next(action);
    };
  };
};

export const getProductsFromLS = (key) => {
  const lsProducts = localStorage.getItem(key);
  if (!lsProducts) return [];
  try {
    const value = JSON.parse(lsProducts);
    return value;
  } catch (e) {
    return [];
  }
};
