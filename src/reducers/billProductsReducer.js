const billProdInitialValue = [];

const billProductsReducer = (state = billProdInitialValue, action) => {
  switch (action.type) {
    case "ADD_BILLPRODUCTS": {
      return [...action.payload];
    }

    case "REMOVE_BILLPRODUCTS": {
      return billProdInitialValue;
    }

    default: {
      return state;
    }
  }
};

export default billProductsReducer;
