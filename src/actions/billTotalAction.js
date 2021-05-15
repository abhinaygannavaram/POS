export const billTotal = (total) => {
  return {
    type: "BILL_TOTAL",

    payload: total,
  };
};

export const removeBillTotal = () => {
  return {
    type: "REMOVE_BILL_TOTAL",
  };
};
