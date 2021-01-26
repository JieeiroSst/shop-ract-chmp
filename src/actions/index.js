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

export const removePrduct = (product) => {
  return {
    type: types.REMOVE_CART_PRODUCT,
    product,
  };
};
