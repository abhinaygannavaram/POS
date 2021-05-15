const billCusInitialValue = {};

const billCustomerReducer = (state = billCusInitialValue, action) => {
  switch (action.type) {
    case "ADD_CUSTOMEROBJ": {
      return { ...action.payload };
    }

    case "REMOVE_CUSTOMEROBJ": {
      return billCusInitialValue;
    }

    default: {
      return state;
    }
  }
};

export default billCustomerReducer;
