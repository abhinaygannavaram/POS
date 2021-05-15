import React, { useState } from "react";

import { useSelector } from "react-redux";

import { Grid, Typography, TextField } from "@material-ui/core";

import BillsItem from "./BillsItem";

const BillsList = (props) => {
  // const [input, setInput] = useState('')

  const { handleShowBill } = props;

  let bills = useSelector((state) => {
    return state.bills;
  });

  //search functionality

  // const handleSearchChange = (e) => {

  //     setInput(e.target.value)

  // }

  // if(input.length>0){

  //     bills = bills.filter((bill)=>{

  //     return bill.name.toLowerCase().match(input.toLowerCase())

  //     })

  // }

  return (
    <div>
      <hr />

      <Typography
        variant="inherit"
        component="h2"
        style={{ color: "teal", marginBottom: "20px" }}
      >
        Bills List
      </Typography>

      {bills.length === 0 ? (
        <div>
          {/* <TextField  

                       style={{width: '30%', marginBottom : '25px'}}

                       variant="outlined"

                       size="small"

                       type = "text" 

                       placeholder = "Search by name..." 

                       onChange = {handleSearchChange} 

                       value = {input}

                    /> */}

          <Typography>No bills found</Typography>
        </div>
      ) : (
        <div>
          {/* <TextField  

                       style={{width: '30%', marginBottom : '25px'}}

                       variant="outlined"

                       size="small"

                       type = "text" 

                       placeholder = "Search by name..." 

                       onChange = {handleSearchChange} 

                       value = {input}

                /> */}

          <Grid
            container
            spacing={2}
            style={{ overflowY: "scroll", maxHeight: "400px" }}
          >
            {bills.map((bill) => {
              return (
                <Grid item xs={12} sm={12} key={bill._id}>
                  <BillsItem {...bill} handleShowBill={handleShowBill} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default BillsList;
