const customersInitialValue = [];

const customersReducer = (state = customersInitialValue, action) => {
  switch (action.type) {
    case "GET_CUSTOMERS": {
      return [...action.payload].reverse();
    }

    case "ADD_CUSTOMER": {
      return [{ ...action.payload }, ...state];
    }

    case "EDIT_CUSTOMER": {
      return state.map((c) => {
        if (c._id === action.payload._id) {
          return { ...c, ...action.payload };
        } else {
          return { ...c };
        }
      });
    }

    case "DELETE_CUSTOMER": {
      return state.filter((customer) => action.payload !== customer._id);
    }

    default: {
      return state;
    }
  }
};

export default customersReducer;
