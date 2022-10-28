const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_BASKET": {
      return [...state, action.payload];
    }
    case "REMOVE_FROM_BASKET": {
      return state.filter((elem) => elem.squ !== action.payload.squ);
    }
    case "CLEAN_BASKET": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
