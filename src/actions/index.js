import * as types from "../constants/ActionType";

export const addToCart = (product, quantity) => {
  return {
    type: types.ADD_TO_CART,
    product,
    quantity,
  };
};

export const changeMesage = (message) => {
  return {
    type: types.CHANGE_MESSAGE,
    message,
  };
};
