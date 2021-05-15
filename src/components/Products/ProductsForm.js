import React, { useState } from "react";

import { TextField, Button, Grid, Typography } from "@material-ui/core";

const ProductsForm = (props) => {
  const { formSubmit, name: productName, price: productPrice } = props;

  const [name, setName] = useState(productName ? productName : "");

  const [price, setPrice] = useState(productPrice ? productPrice : "");

  const [formErrors, setFormErrors] = useState({});

  const errors = {};

  const runValidations = () => {
    //name

    if (name.trim().length === 0) {
      errors.name = "name cannot be blank";
    }

    //price

    if (price.trim().length === 0) {
      errors.price = "price cannot be blank";
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    runValidations();

    if (Object.keys(errors).length === 0) {
      setFormErrors({});

      const formData = {
        name: name,

        price: price,
      };

      formSubmit(formData);

      setName("");

      setPrice("");
    } else {
      console.log("register form errors", errors);

      setFormErrors(errors);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              size="small"
              type="text"
              label="name"
              value={name}
              onChange={handleNameChange}
            />

            {formErrors.name && (
              <Typography style={{ color: "red" }}>
                {" "}
                {formErrors.name}{" "}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              size="small"
              type="text"
              label="price"
              value={price}
              onChange={handlePriceChange}
            />

            {formErrors.price && (
              <Typography style={{ color: "red" }}>
                {" "}
                {formErrors.price}{" "}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              size="small"
              variant="contained"
              color="primary"
            >
              {" "}
              {productName ? "Save" : "add"}{" "}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default ProductsForm;
