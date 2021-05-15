import React from "react";

import { useDispatch } from "react-redux";

import { Typography } from "@material-ui/core";

import { startAddCustomer } from "../../actions/usersAction";

import CustomersForm from "./CustomersForm";

const AddCustomer = (props) => {
  const dispatch = useDispatch();

  const formSubmit = (Customer) => {
    dispatch(startAddCustomer(Customer));
  };

  return (
    <div>
      <hr />

      <Typography
        variant="inherit"
        component="h2"
        style={{ color: "teal", marginBottom: "20px" }}
      >
        Add a Customer
      </Typography>

      <CustomersForm formSubmit={formSubmit} />
    </div>
  );
};

export default AddCustomer;
