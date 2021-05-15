import React from "react";

import { useDispatch } from "react-redux";

import { Typography } from "@material-ui/core";

import ProductsForm from "./ProductsForm";

import { startEditProduct } from "../../actions/usersAction";

const EditProduct = (props) => {
  const dispatch = useDispatch();

  const { id, name, price, handleToggle } = props;

  const onSuccess = () => {
    handleToggle();
  };

  const formSubmit = (product) => {
    dispatch(startEditProduct(product, id, onSuccess));
  };

  return (
    <div>
      <Typography
        variant="b"
        component="h3"
        style={{ color: "teal", marginBottom: "20px" }}
      >
        Edit Product
      </Typography>

      <ProductsForm id={id} name={name} price={price} formSubmit={formSubmit} />
    </div>
  );
};

export default EditProduct;
