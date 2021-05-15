import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { removeCusObj, removeBillProd } from "../../actions/billProdAction";

import { removeBillTotal } from "../../actions/billTotalAction";

import PrintIcon from "@material-ui/icons/Print";

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

// function printDiv() {

//     var divContents = document.getElementById("GFG").innerHTML;

//             var a = window.open('', '', 'height=1500, width=1500');

//             a.document.write('<html>');

//             a.document.write('<body style = "height=:1500, width:1500" > <h1>Div contents are <br>');

//             a.document.write(divContents);

//             a.document.write('</body></html>');

//             a.document.close();

//             a.print();

// }

const ShowBill = (props) => {
  let dispatch = useDispatch();

  const { handleShowBill } = props;

  const customerObj = useSelector((state) => {
    return state.customerObj;
  });

  const productsBought = useSelector((state) => {
    return state.productsBought;
  });

  const total = useSelector((state) => {
    return state.billTotal;
  });

  const handleBtn = () => {
    dispatch(removeCusObj());

    dispatch(removeBillProd());

    dispatch(removeBillTotal());

    handleShowBill();

    props.history.push("/billing");
  };

  return (
    <div>
      <Typography variant="h4" align="center" style={{ color: "teal" }}>
        Bill INVOICE
      </Typography>

      <Card elevation={10}>
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
                {productsBought &&
                  productsBought.map((product) => {
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

            <Typography variant="h5" align="right" component="h3">
              <b>Total: ₹{total}</b>
            </Typography>

            <Typography
              align="center"
              variant="body2"
              color="textPrimary"
              component="p"
            >
              Note: Products once sold cannot be returned!
            </Typography>

            <Typography
              align="center"
              variant="body2"
              color="textPrimary"
              component="p"
            >
              ***Thank You!...Visit Again!***
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button variant="contained" color="secondary" onClick={handleBtn}>
            back
          </Button>

          <Button
            variant="contained"
            color="primary"
            startIcon={<PrintIcon />}
            onClick={() => {
              window.print();
            }}
          >
            Print Bill
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ShowBill;
