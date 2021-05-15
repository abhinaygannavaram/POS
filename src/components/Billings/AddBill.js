import React from "react";

import { useDispatch } from "react-redux";

import { Typography } from "@material-ui/core";

import { startAddBill } from "../../actions/billsAction";

import BillsForm from "./BillsForm";

const AddBill = (props) => {
  const dispatch = useDispatch();

  const formSubmit = (bill) => {
    dispatch(startAddBill(bill));
  };

  return (
    <div>
      <hr />

      <Typography
        variant="inherit"
        component="h2"
        style={{ color: "teal", marginBottom: "20px" }}
      >
        Add a Bill
      </Typography>

      <BillsForm formSubmit={formSubmit} />
    </div>
  );
};

export default AddBill;
