const productsInitialValue = [];

const productsReducer = (state = productsInitialValue, action) => {
  switch (action.type) {
    case "GET_PRODUCTS": {
      return [...action.payload].reverse();
    }

    case "ADD_PRODUCT": {
      return [{ ...action.payload }, ...state];
    }

    case "EDIT_PRODUCT": {
      return state.map((p) => {
        if (p._id === action.payload._id) {
          return { ...p, ...action.payload };
        } else {
          return { ...p };
        }
      });
    }

    case "DELETE_PRODUCT": {
      return state.filter((product) => action.payload !== product._id);
    }

    default: {
      return state;
    }
  }
};

export default productsReducer;
