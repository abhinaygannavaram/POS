import React from "react";

import ReactDOM from "react-dom";

import "./index.css";

import App from "./App";

import configureStore from "./store/configureStore";

import {
  startProductsList,
  startUserAccount,
  startCustomersList,
} from "./actions/usersAction";

import { startBillsList } from "./actions/billsAction";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

const store = configureStore();

// console.log(store)

console.log("state", store.getState());

store.subscribe(() => {
  console.log("state updated", store.getState());
});

//handle page reload

if (localStorage.getItem("token")) {
  store.dispatch(startUserAccount());

  store.dispatch(startProductsList());

  store.dispatch(startCustomersList());

  store.dispatch(startBillsList());
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
