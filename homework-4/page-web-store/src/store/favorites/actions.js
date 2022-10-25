export const addFavorites = (product) => {
  return {
    type: "ADD_FAVORITES",
    payload: product,
  };
};

export const removeFavorites = (product) => {
  return {
    type: "REMOVE_FAVORITES",
    payload: product,
  };
};
