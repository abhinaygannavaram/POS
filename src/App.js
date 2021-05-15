import React, { useState, useEffect } from "react";

import NavBar from "./components/NavBar";

import Container from "@material-ui/core/Container";

const App = (props) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const [showBill, setShowBill] = useState(false);

  const handleAuth = () => {
    setUserLoggedIn(!userLoggedIn);
  };

  const handleShowBill = () => {
    setShowBill(!showBill);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      handleAuth();
    }
  }, []);

  return (
    <Container component="main">
      <div>
        <h2 style={{ textAlign: "center", color: "teal" }}>Billing App</h2>

        <NavBar
          userLoggedIn={userLoggedIn}
          handleAuth={handleAuth}
          showBill={showBill}
          handleShowBill={handleShowBill}
        />
      </div>
    </Container>
  );
};

export default App;
