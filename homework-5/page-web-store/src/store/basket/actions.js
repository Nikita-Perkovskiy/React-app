export const addToBasket = (product) => {
  return {
    type: "ADD_TO_BASKET",
    payload: product,
  };
};

export const removeFromBasket = (product) => {
  return {
    type: "REMOVE_FROM_BASKET",
    payload: product,
  };
};

export const cleanBasket = () => {
  return {
    type: "CLEAN_BASKET",
    payload: [],
  };
};
