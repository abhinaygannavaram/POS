import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { startDeleteCustomer } from "../../actions/usersAction";

import EditIcon from "@material-ui/icons/Edit";

import DeleteIcon from "@material-ui/icons/Delete";

import swal from "sweetalert";

import EditCustomer from "./EditCustomer";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

const CustomersItem = (props) => {
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false);

  const { _id, name, mobile, email } = props;

  const handleToggle = () => {
    const result = !toggle;

    setToggle(result);
  };

  const handleRemove = (id) => {
    swal({
      title: "Are you sure?",

      text: "Once deleted, you will not be able to recover this customer!",

      icon: "warning",

      buttons: true,

      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(startDeleteCustomer(id));
      }
    });
  };

  // const handleModal = (id) => {

  //     startNoteModal(id)

  // }

  return (
    <div>
      {toggle ? (
        <div>
          <EditCustomer
            id={_id}
            name={name}
            mobile={mobile}
            email={email}
            handleToggle={handleToggle}
          />

          <Button onClick={handleToggle}> cancel </Button>
        </div>
      ) : (
        <Card elevation={4} style={{ color: "teal" }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="inherit" component="h1">
                {name}
              </Typography>

              <Typography variant="body2" component="p">
                mobile: +91 {mobile}
              </Typography>

              <Typography variant="body2" component="p">
                email: {email}
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <Button onClick={handleToggle} size="small" color="primary">
              <EditIcon fontSize="small" />
            </Button>

            <Button
              size="small"
              color="secondary"
              onClick={() => {
                handleRemove(_id);
              }}
            >
              <DeleteIcon fontSize="small" />
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};

export default CustomersItem;
