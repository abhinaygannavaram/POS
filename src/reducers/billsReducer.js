const billsInitialValue = [];

const billsReducer = (state = billsInitialValue, action) => {
  switch (action.type) {
    case "GET_BILLS": {
      return [...action.payload].reverse();
    }

    case "ADD_BILL": {
      return [{ ...action.payload }, ...state];
    }

    case "DELETE_BILL": {
      return state.filter((bill) => action.payload !== bill._id);
    }

    default: {
      return state;
    }
  }
};

export default billsReducer;
