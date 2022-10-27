export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case "START_FETCH_PRODUCTS": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "LOADED_PRODUCTS": {
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    }
    case "ERROR_LOADED_PRODUCTS": {
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    }
    default: {
      return state;
    }
  }
};

export const selectedProductReducer = (state = [], action) => {
  switch (action.type) {
    case "SELECTED_PRODUCT": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
