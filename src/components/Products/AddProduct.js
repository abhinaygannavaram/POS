import React from "react";

import { useDispatch } from "react-redux";

import { Typography } from "@material-ui/core";

import { startAddProduct } from "../../actions/usersAction";

import ProductsForm from "./ProductsForm";

const AddProduct = (props) => {
  const dispatch = useDispatch();

  const formSubmit = (product) => {
    dispatch(startAddProduct(product));
  };

  return (
    <div>
      <hr />

      <Typography
        variant="inherit"
        component="h2"
        style={{ color: "teal", marginBottom: "20px" }}
      >
        Add a Product
      </Typography>

      <ProductsForm formSubmit={formSubmit} />
    </div>
  );
};

export default AddProduct;
