import axios from "axios";

import swal from "sweetalert";

export const startRegisterUser = (formData, onSuccess) => {
  axios
    .post("http://dct-billing-app.herokuapp.com/api/users/register", formData)

    .then((response) => {
      const result = response.data;

      if (result.hasOwnProperty("errors")) {
        swal({ title: result.message, icon: "error" });
      } else {
        swal({ title: "successfully created an account", icon: "success" });

        console.log("regUser", result);

        onSuccess();
      }
    })

    .catch((err) => {
      alert(err.message);
    });
};

export const startLoginUser = (formData, onSuccess) => {
  axios
    .post("http://dct-billing-app.herokuapp.com/api/users/login", formData)

    .then((response) => {
      const result = response.data;

      if (result.hasOwnProperty("errors")) {
        swal({ title: result.errors, icon: "error" });
      } else {
        swal({ title: "successfully logged in", icon: "success" });

        console.log("login", result);

        localStorage.setItem("token", result.token);

        onSuccess();
      }
    })

    .catch((err) => {
      console.log(err.message);
    });
};

export const startUserAccount = () => {
  return (dispatch) => {
    axios
      .get("http://dct-billing-app.herokuapp.com/api/users/account", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      .then((response) => {
        const result = response.data;

        dispatch(userAccount(result));
      })

      .catch((err) => {
        console.log(err.message);
      });
  };
};

export const userAccount = (user) => {
  return {
    type: "USER_ACCOUNT",

    payload: user,
  };
};

export const startProductsList = () => {
  return (dispatch) => {
    axios
      .get("http://dct-billing-app.herokuapp.com/api/products", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      .then((response) => {
        const result = response.data;

        dispatch(getProducts(result));
      })

      .catch((err) => {
        alert(err.message);
      });
  };
};

export const getProducts = (products) => {
  return {
    type: "GET_PRODUCTS",

    payload: products,
  };
};

export const startAddProduct = (product) => {
  return (dispatch) => {
    axios
      .post("http://dct-billing-app.herokuapp.com/api/products", product, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      .then((response) => {
        const result = response.data;

        console.log("added product", result);

        if (result.hasOwnProperty("errors")) {
          swal({ title: result.message, icon: "error" });
        } else {
          dispatch(addProduct(result));
        }
      })

      .catch((err) => {
        alert(err.message);
      });
  };
};

export const addProduct = (product) => {
  return {
    type: "ADD_PRODUCT",

    payload: product,
  };
};

export const startEditProduct = (product, id, onSuccess) => {
  return (dispatch) => {
    axios
      .put(`http://dct-billing-app.herokuapp.com/api/products/${id}`, product, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      .then((response) => {
        const result = response.data;

        dispatch(editProduct(result));

        onSuccess();
      })

      .catch((err) => {
        alert(err.message);
      });
  };
};

export const editProduct = (product) => {
  return {
    type: "EDIT_PRODUCT",

    payload: product,
  };
};

export const startDeleteProduct = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://dct-billing-app.herokuapp.com/api/products/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      .then((response) => {
        const result = response.data;

        dispatch(deleteProduct(result._id));

        swal("Poof! product has been deleted!", {
          icon: "success",
        });
      })

      .catch((err) => {
        alert(err.message);
      });
  };
};

export const deleteProduct = (id) => {
  return {
    type: "DELETE_PRODUCT",

    payload: id,
  };
};

//----------------------------- Customers ------------------------------------------------------

export const startAddCustomer = (customer) => {
  return (dispatch) => {
    axios
      .post("http://dct-billing-app.herokuapp.com/api/customers", customer, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      .then((response) => {
        const result = response.data;

        console.log("added customer", result);

        if (result.hasOwnProperty("errors")) {
          swal({ title: result.message, icon: "error" });
        } else {
          dispatch(addCustomer(result));
        }
      })

      .catch((err) => {
        alert(err.message);
      });
  };
};

export const addCustomer = (customer) => {
  return {
    type: "ADD_CUSTOMER",

    payload: customer,
  };
};

export const startCustomersList = () => {
  return (dispatch) => {
    axios
      .get("http://dct-billing-app.herokuapp.com/api/customers", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      .then((response) => {
        const result = response.data;

        dispatch(getCustomers(result));
      })

      .catch((err) => {
        alert(err.message);
      });
  };
};

export const getCustomers = (customers) => {
  return {
    type: "GET_CUSTOMERS",

    payload: customers,
  };
};

export const startEditCustomer = (customer, id, onSuccess) => {
  return (dispatch) => {
    axios
      .put(
        `http://dct-billing-app.herokuapp.com/api/customers/${id}`,
        customer,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )

      .then((response) => {
        const result = response.data;

        dispatch(editCustomer(result));

        onSuccess();
      })

      .catch((err) => {
        alert(err.message);
      });
  };
};

export const editCustomer = (customer) => {
  return {
    type: "EDIT_CUSTOMER",

    payload: customer,
  };
};

export const startDeleteCustomer = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://dct-billing-app.herokuapp.com/api/customers/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })

      .then((response) => {
        const result = response.data;

        dispatch(deleteCustomer(result._id));

        swal("Poof! customer has been deleted!", {
          icon: "success",
        });
      })

      .catch((err) => {
        alert(err.message);
      });
  };
};

export const deleteCustomer = (id) => {
  return {
    type: "DELETE_CUSTOMER",

    payload: id,
  };
};
