import React from "react";

import { Grid, Typography, List, Paper, ListItem } from "@material-ui/core";

import ArrowForwardSharpIcon from "@material-ui/icons/ArrowForwardSharp";

import EmojiPeopleSharpIcon from "@material-ui/icons/EmojiPeopleSharp";

import CopyrightIcon from "@material-ui/icons/Copyright";

import photo from "./billing-photo.jpg";

const Home = (props) => {
  return (
    <div style={{ textAlign: "center", margin: "80px 80px 20px 80px" }}>
      <Paper elevation={8}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <h1>
              Hello User
              <EmojiPeopleSharpIcon />
              ...
            </h1>

            <h2>If you are new to this App, follow the steps bellow: </h2>

            <br />

            <List component="ul">
              <ListItem>
                <ArrowForwardSharpIcon /> Register your account.
              </ListItem>

              <ListItem>
                <ArrowForwardSharpIcon /> Login with your credentials.
              </ListItem>

              <ListItem>
                <ArrowForwardSharpIcon /> After login, a dashboard page will
                appear.
              </ListItem>

              <ListItem>
                <ArrowForwardSharpIcon /> Add new customers and products in the
                respective links.
              </ListItem>

              <ListItem>
                <ArrowForwardSharpIcon /> Create bill for the customers visited.
              </ListItem>

              <ListItem>
                <ArrowForwardSharpIcon /> Click "bill" link from the bills list
                to see a particular bill.
              </ListItem>

              <ListItem>
                <ArrowForwardSharpIcon /> Click "Print Bill" to print/save the
                bill.
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={6}>
            <img
              src={photo}
              style={{ width: "400px", height: "300px" }}
              alt=""
            ></img>
          </Grid>
        </Grid>
      </Paper>

      <Typography style={{ marginTop: "50px" }}>
        <CopyrightIcon />
        2021, Created by Abhinay G.
      </Typography>
    </div>
  );
};

export default Home;
