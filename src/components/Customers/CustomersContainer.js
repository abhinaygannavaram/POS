import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { startCustomersList } from "../../actions/usersAction";

import { Grid } from "@material-ui/core";

import CustomersList from "./CustomersList";

import AddCustomer from "./AddCustomer";

const CustomersContainer = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startCustomersList()); // api call - get all Customers
  }, []);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <CustomersList />
        </Grid>

        <Grid item xs={12} sm={4}>
          <AddCustomer />
        </Grid>
      </Grid>
    </div>
  );
};

export default CustomersContainer;
