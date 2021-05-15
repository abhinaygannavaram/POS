import axios from "axios";

import swal from "sweetalert";

export const startBillsList = () => {
  return (dispatch) => {
    axios
      .get("http://dct-billing-app.herokuapp.com/api/bills", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      .then((response) => {
        const result = response.data;

        dispatch(getBills(result));
      })

      .catch((err) => {
        alert(err.message);
      });
  };
};

export const getBills = (bills) => {
  return {
    type: "GET_BILLS",

    payload: bills,
  };
};

export const startAddBill = (bill) => {
  return (dispatch) => {
    axios
      .post("http://dct-billing-app.herokuapp.com/api/bills", bill, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      .then((response) => {
        const result = response.data;

        console.log("added bill", result);

        if (result.hasOwnProperty("errors")) {
          swal({ title: result.message, icon: "error" });
        } else {
          dispatch(addBill(result));
        }
      })

      .catch((err) => {
        alert(err.message);
      });
  };
};

export const addBill = (bill) => {
  return {
    type: "ADD_BILL",

    payload: bill,
  };
};

export const startDeleteBill = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://dct-billing-app.herokuapp.com/api/bills/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      .then((response) => {
        const result = response.data;

        dispatch(deleteBill(result._id));

        swal("Poof! bill has been deleted!", {
          icon: "success",
        });
      })

      .catch((err) => {
        alert(err.message);
      });
  };
};

export const deleteBill = (id) => {
  return {
    type: "DELETE_BILL",

    payload: id,
  };
};
