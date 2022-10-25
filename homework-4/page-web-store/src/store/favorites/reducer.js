const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAVORITES": {
      const isFavorite = state.some((elem) => elem.squ === action.payload.squ);
      if (isFavorite) return state;
      return [...state, action.payload];
    }
    case "REMOVE_FAVORITES": {
      return state.filter((elem) => elem.squ !== action.payload.squ);
    }
    default: {
      return state;
    }
  }
};
export default reducer;
