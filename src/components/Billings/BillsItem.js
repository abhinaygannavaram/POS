import React from "react";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { startDeleteBill } from "../../actions/billsAction";

import { addCusObj, addBillProd } from "../../actions/billProdAction";

import { billTotal } from "../../actions/billTotalAction";

import DeleteIcon from "@material-ui/icons/Delete";

import swal from "sweetalert";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

const BillsItem = (props) => {
  const { handleShowBill } = props;

  let dispatch = useDispatch();

  const { _id, customer, lineItems, total } = props;

  const customerObj = useSelector((state) => {
    return state.customers.find((cus) => cus._id === customer);
  });

  const productsBought = useSelector((state) => {
    const arr = [];

    for (const item of lineItems) {
      const res = state.products.find((prod) => prod._id === item.product);

      arr.push({ ...res, ...item });
    }

    return arr;
  });

  const handleRemove = (id) => {
    swal({
      title: "Are you sure?",

      text: "Once deleted, you will not be able to recover this bill!",

      icon: "warning",

      buttons: true,

      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(startDeleteBill(id));
      }
    });
  };

  const handleBillBtn = () => {
    dispatch(addCusObj(customerObj));

    dispatch(addBillProd(productsBought));

    dispatch(billTotal(total));

    handleShowBill();
  };

  return (
    <div>
      <Card elevation={4}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <b>Name :</b> {customerObj && customerObj.name}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              Phn.No : +91 {customerObj && customerObj.mobile}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              Products Bought :
            </Typography>

            <Table border="2" size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>

                  <TableCell>Quantity</TableCell>

                  <TableCell>Price(in ₹)</TableCell>

                  <TableCell>Total price(in ₹)</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {productsBought.map((product) => {
                  return (
                    <TableRow key={product._id}>
                      <TableCell>{product.name}</TableCell>

                      <TableCell>{product.quantity}</TableCell>

                      <TableCell>{product.price}</TableCell>

                      <TableCell>{product.subTotal}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>

            <Typography
              variant="body2"
              align="right"
              color="textSecondary"
              component="p"
            >
              <b>Total: ₹{total}</b>
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button size="small" color="primary" onClick={handleBillBtn}>
            <Link to="/showBill">Bill</Link>
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
    </div>
  );
};

export default BillsItem;
