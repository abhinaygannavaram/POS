import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import accountReducer from "../reducers/accountReducer";

import billCustomerReducer from "../reducers/billCustomerReducer";

import billProductsReducer from "../reducers/billProductsReducer";

import billsReducer from "../reducers/billsReducer";

import billTotalReducer from "../reducers/billTotalReducer";

import customersReducer from "../reducers/customersReducer";

import lineItemsReducer from "../reducers/lineItemsReducer";

import productsReducer from "../reducers/productsReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      lineItems: lineItemsReducer,

      account: accountReducer,

      products: productsReducer,

      customers: customersReducer,

      bills: billsReducer,

      customerObj: billCustomerReducer,

      productsBought: billProductsReducer,

      billTotal: billTotalReducer,
    }),
    applyMiddleware(thunk)
  );

  return store;
};

export default configureStore;
