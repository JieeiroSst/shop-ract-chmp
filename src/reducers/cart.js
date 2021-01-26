import * as types from "../constants/ActionType";

const data = JSON.parse(localStorage.getItem("CART"));

const initalSate = data ? data : [];

const carts = (state = initalSate, action) => {
  const { product, quantity } = action;
  let index = -1;
  switch (action.type) {
    case types.ADD_TO_CART:
      index = findProductcart(state, product);
      console.log(index);
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({
          product,
          quantity,
        });
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    default:
      return [...state];
  }
};

const findProductcart = (cart, product) => {
  let index = -1;
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        index = i;
        break;
      }
    }
  }
  return index;
};

export default carts;
