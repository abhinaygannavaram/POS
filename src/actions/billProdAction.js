export const addCusObj = (cus) => {
  return {
    type: "ADD_CUSTOMEROBJ",

    payload: cus,
  };
};

export const removeCusObj = () => {
  return {
    type: "REMOVE_CUSTOMEROBJ",
  };
};

export const addBillProd = (prod) => {
  return {
    type: "ADD_BILLPRODUCTS",

    payload: prod,
  };
};

export const removeBillProd = () => {
  return {
    type: "REMOVE_BILLPRODUCTS",
  };
};
