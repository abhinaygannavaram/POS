const billTotalInitialValue = "";

const billTotalReducer = (state = billTotalInitialValue, action) => {
  switch (action.type) {
    case "BILL_TOTAL": {
      return action.payload;
    }

    case "REMOVE_BILL_TOTAL": {
      return billTotalInitialValue;
    }

    default: {
      return state;
    }
  }
};

export default billTotalReducer;
