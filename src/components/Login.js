import React, { useState } from "react";

import { startLoginUser } from "../actions/usersAction";

import {
  TextField,
  Container,
  Link,
  Button,
  Grid,
  Typography,
  Avatar,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import validator from "validator";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),

    backgroundColor: theme.palette.secondary.main,

    marginLeft: theme.spacing(32),
  },
}));

const Login = (props) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [formErrors, setFormErrors] = useState({});

  const errors = {};

  const classes = useStyles();

  const onSuccess = () => {
    props.history.push("/dashboard");

    props.handleAuth();
  };

  const runValidations = () => {
    //password

    if (password.trim().length === 0) {
      errors.password = "password cannot be blank";
    }

    //email

    if (email.trim().length === 0) {
      errors.email = "email cannot be blank";
    } else if (!validator.isEmail(email)) {
      errors.email = "invalid email format";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    runValidations();

    if (Object.keys(errors).length === 0) {
      setFormErrors({});

      const formData = {
        email: email,

        password: password,
      };

      //if validations pass

      startLoginUser(formData, onSuccess); // api call
    } else {
      console.log("login form errors", errors);

      setFormErrors(errors);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <Container component="main" maxWidth="sm" style={{ textAlign: "center" }}>
      <div>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5" style={{ color: "teal" }}>
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            type="text"
            style={{ marginBottom: "10px" }}
            placeholder="enter email"
            value={email}
            onChange={handleChange}
            name="email"
          />

          {formErrors.email && (
            <span style={{ color: "red" }}> {formErrors.email} </span>
          )}

          <br />

          <TextField
            variant="outlined"
            type="password"
            style={{ marginBottom: "10px" }}
            placeholder="enter password"
            value={password}
            onChange={handleChange}
            name="password"
          />

          {formErrors.password && (
            <span style={{ color: "red" }}> {formErrors.password} </span>
          )}

          <br />

          <Button type="submit" variant="contained" color="primary">
            {" "}
            Sign in{" "}
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/register" style={{ color: "teal" }} variant="body2">
                Don't have an account? Sign up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Login;
