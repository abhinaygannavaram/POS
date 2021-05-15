const lineItemsInitialValue = [];

const lineItemsReducer = (state = lineItemsInitialValue, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      return [{ ...action.payload }, ...state];
    }

    case "REMOVE_ITEM": {
      return state.filter((item) => action.payload !== item.prodId);
    }

    case "RESET_ITEMS": {
      return lineItemsInitialValue;
    }

    case "DECREMENT_QUANTITY": {
      return state.map((item) => {
        if (item.prodId === action.payload && item.quantity >= 2) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return { ...item };
        }
      });
    }

    case "INCREMENT_QUANTITY": {
      return state.map((item) => {
        if (item.prodId === action.payload && item.quantity >= 1) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return { ...item };
        }
      });
    }

    default: {
      return state;
    }
  }
};

export default lineItemsReducer;
