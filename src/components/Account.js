import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { startUserAccount } from "../actions/usersAction";

import { Container, Typography, Paper } from "@material-ui/core";

import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";

const Account = (props) => {
  const user = useSelector((state) => {
    return state.account;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startUserAccount());
  }, []);

  return (
    <Container align="center">
      <Paper
        elevation={12}
        style={{
          backgroundColor: "teal",
          width: "400px",
          height: "200px",
          marginTop: "20px",
        }}
      >
        <Typography style={{ color: "turquoise" }} variant="b" component="h2">
          User Account
        </Typography>

        <AccountCircleSharpIcon style={{ color: "turquoise" }} />

        <div
          style={{
            color: "turquoise",
            textAlign: "left",
            position: "absolute",
            marginLeft: "100px",
            marginTop: "10px",
          }}
        >
          <Typography>
            {" "}
            <b>Username</b> - {user.username}{" "}
          </Typography>

          <Typography>
            {" "}
            <b>Email</b> - {user.email}{" "}
          </Typography>

          <Typography>
            {" "}
            <b>BusinessName</b> - {user.businessName}
          </Typography>

          <Typography>
            {" "}
            <b>Address</b> - {user.address}
          </Typography>
        </div>
      </Paper>
    </Container>
  );
};

export default Account;
