import React, { useState } from "react";

import { TextField, Button, Grid, Typography } from "@material-ui/core";

import validator from "validator";

const CustomersForm = (props) => {
  const {
    formSubmit,
    name: customerName,
    mobile: customerMobile,
    email: customerEmail,
  } = props;

  const [name, setName] = useState(customerName ? customerName : "");

  const [mobile, setMobile] = useState(customerMobile ? customerMobile : "");

  const [email, setEmail] = useState(customerEmail ? customerEmail : "");

  const [formErrors, setFormErrors] = useState({});

  const errors = {};

  const runValidations = () => {
    //name

    if (name.trim().length === 0) {
      errors.name = "name cannot be blank";
    }

    //mobile

    if (mobile.trim().length === 0) {
      errors.mobile = "mobile cannot be blank";
    }

    //email

    if (email.trim().length === 0) {
      errors.email = "email cannot be blank";
    } else if (!validator.isEmail(email)) {
      errors.email = "invalid email format";
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    runValidations();

    if (Object.keys(errors).length === 0) {
      setFormErrors({});

      const formData = {
        name: name,

        mobile: mobile,

        email: email,
      };

      formSubmit(formData);

      setName("");

      setMobile("");

      setEmail("");
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
              label="mobile"
              value={mobile}
              onChange={handleMobileChange}
            />

            {formErrors.mobile && (
              <Typography style={{ color: "red" }}>
                {" "}
                {formErrors.mobile}{" "}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              size="small"
              type="email"
              label="email"
              value={email}
              onChange={handleEmailChange}
            />

            {formErrors.email && (
              <Typography style={{ color: "red" }}>
                {" "}
                {formErrors.email}{" "}
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
              {customerName ? "Save" : "Add"}{" "}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CustomersForm;
