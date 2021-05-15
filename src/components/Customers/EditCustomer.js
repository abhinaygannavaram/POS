import React from "react";

import { useDispatch } from "react-redux";

import { Typography } from "@material-ui/core";

import CustomersForm from "./CustomersForm";

import { startEditCustomer } from "../../actions/usersAction";

const EditCustomer = (props) => {
  const dispatch = useDispatch();

  const { id, name, mobile, email, handleToggle } = props;

  const onSuccess = () => {
    handleToggle();
  };

  const formSubmit = (customer) => {
    dispatch(startEditCustomer(customer, id, onSuccess));
  };

  return (
    <div>
      <Typography
        variant="b"
        component="h3"
        style={{ color: "teal", marginBottom: "20px" }}
      >
        Edit Customer
      </Typography>

      <CustomersForm
        id={id}
        name={name}
        mobile={mobile}
        email={email}
        formSubmit={formSubmit}
      />
    </div>
  );
};

export default EditCustomer;
