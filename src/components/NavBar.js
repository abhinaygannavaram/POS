import React from "react";

import { Link, Route, withRouter } from "react-router-dom";

import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";

import DashboardSharpIcon from "@material-ui/icons/DashboardSharp";

import PeopleSharpIcon from "@material-ui/icons/PeopleSharp";

import StoreSharpIcon from "@material-ui/icons/StoreSharp";

import AttachMoneySharpIcon from "@material-ui/icons/AttachMoneySharp";

import ExitToAppSharpIcon from "@material-ui/icons/ExitToAppSharp";

import LockOpenSharpIcon from "@material-ui/icons/LockOpenSharp";

import PersonAddSharpIcon from "@material-ui/icons/PersonAddSharp";

import HomeSharpIcon from "@material-ui/icons/HomeSharp";

import swal from "sweetalert";

import Home from "./Home";

import Register from "./Register";

import Login from "./Login";

import Account from "./Account";

import DashBoard from "./DashBoard";

import ProductsContainer from "./Products/ProductsContainer";

import CustomersContainer from "./Customers/CustomersContainer";

import BillsContainer from "./Billings/BillsContainer";

import ShowBill from "./Billings/ShowBill";

const useStyles = makeStyles((theme) => ({
  appBarDiv: {
    backgroundColor: "teal",
  },

  toolbarDiv: {
    margin: "auto",
  },

  buttonUi: {
    color: "turquoise",
  },
}));

const NavBar = (props) => {
  const { userLoggedIn, handleAuth, handleShowBill } = props;

  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appBarDiv} position="static">
        <Toolbar className={classes.toolbarDiv}>
          <div>
            {userLoggedIn ? (
              <>
                <Button
                  className={classes.buttonUi}
                  component={Link}
                  to="/account"
                >
                  <AccountCircleSharpIcon />
                  My Account
                </Button>{" "}
                |
                <Button
                  className={classes.buttonUi}
                  component={Link}
                  to="/dashboard"
                >
                  <DashboardSharpIcon />
                  Dashboard
                </Button>{" "}
                |
                <Button
                  className={classes.buttonUi}
                  component={Link}
                  to="/customers"
                >
                  <PeopleSharpIcon />
                  Customers
                </Button>{" "}
                |
                <Button
                  className={classes.buttonUi}
                  component={Link}
                  to="/products"
                >
                  <StoreSharpIcon />
                  Products
                </Button>{" "}
                |
                <Button
                  className={classes.buttonUi}
                  component={Link}
                  to="/billing"
                >
                  <AttachMoneySharpIcon />
                  Billing
                </Button>{" "}
                |
                <Button
                  style={{ color: "mediumaquamarine" }}
                  onClick={() => {
                    swal({
                      title: "Are you sure?",

                      text: "this will logout from your page!",

                      icon: "warning",

                      buttons: true,

                      dangerMode: true,
                    }).then((isLoggedOut) => {
                      if (isLoggedOut) {
                        localStorage.removeItem("token");

                        swal("successfully logged out", {
                          icon: "success",
                        });

                        handleAuth();

                        props.history.push("/");
                      }
                    });
                  }}
                >
                  <ExitToAppSharpIcon />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button className={classes.buttonUi} component={Link} to="/">
                  <HomeSharpIcon />
                  Home
                </Button>{" "}
                |
                <Button
                  className={classes.buttonUi}
                  component={Link}
                  to="/register"
                >
                  <PersonAddSharpIcon />
                  Register
                </Button>{" "}
                |
                <Button
                  style={{ color: "mediumaquamarine" }}
                  component={Link}
                  to="/login"
                >
                  <LockOpenSharpIcon />
                  Login
                </Button>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>

      <Route path="/" component={Home} exact={true} />

      <Route path="/register" component={Register} />

      <Route
        path="/login"
        render={(props) => {
          return <Login {...props} handleAuth={handleAuth} />;
        }}
      />

      <Route
        path="/dashboard"
        render={(props) => {
          return <DashBoard {...props} handleAuth={handleAuth} />;
        }}
      />

      <Route path="/products" component={ProductsContainer} />

      <Route path="/account" component={Account} />

      <Route path="/customers" component={CustomersContainer} />

      <Route
        path="/billing"
        render={(props) => {
          return <BillsContainer {...props} handleShowBill={handleShowBill} />;
        }}
      />

      <Route
        path="/showBill"
        render={(props) => {
          return <ShowBill {...props} handleShowBill={handleShowBill} />;
        }}
      />
    </div>
  );
};

const WrappedComponent = withRouter(NavBar);

export default WrappedComponent;
