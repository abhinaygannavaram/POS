import React, { useState } from "react";

import { useSelector } from "react-redux";

import { Grid, Typography, TextField } from "@material-ui/core";

import ProductsItem from "./ProductsItem";

const ProductsList = (props) => {
  const [input, setInput] = useState("");

  let products = useSelector((state) => {
    return state.products;
  });

  //search functionality

  const handleSearchChange = (e) => {
    setInput(e.target.value);
  };

  if (input.length > 0) {
    products = products.filter((product) => {
      return product.name.toLowerCase().match(input.toLowerCase());
    });
  }

  return (
    <div>
      <hr />

      <Typography variant="inherit" component="h2" style={{ color: "teal" }}>
        Products List
      </Typography>

      {products.length === 0 ? (
        <div>
          <TextField
            style={{ width: "30%", marginBottom: "25px" }}
            variant="outlined"
            size="small"
            type="text"
            placeholder="Search by name..."
            onChange={handleSearchChange}
            value={input}
          />

          <Typography>No products found</Typography>
        </div>
      ) : (
        <div>
          <TextField
            style={{ width: "30%", marginBottom: "25px" }}
            variant="outlined"
            size="small"
            type="text"
            placeholder="Search by name..."
            onChange={handleSearchChange}
            value={input}
          />

          <Grid
            container
            spacing={2}
            style={{ overflowY: "scroll", maxHeight: "400px" }}
          >
            {products.map((product) => {
              return (
                <Grid item xs={12} sm={6} key={product._id}>
                  <ProductsItem {...product} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
