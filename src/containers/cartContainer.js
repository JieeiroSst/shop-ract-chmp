import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "../components/cart";
import * as types from "../constants/Message";
import CartResult from "../components/CartResult";
import CartItem from "../components/cartItem";
import { removePrduct } from "../actions";
class CartContainer extends Component {
  render() {
    const { cart } = this.props;
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showtotalAmount(cart)}
      </Cart>
    );
  }

  showtotalAmount = (cart) => {
    let result = null;

    if (cart.length > 0) {
      result = <CartResult cart={cart}></CartResult>;
    }
    return result;
  };
  showCartItem = (cart) => {
    let result = types.MSG_CART_EMPTY;

    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            index={index}
            removeProductInCart={this.props.removeProductInCart}
          ></CartItem>
        );
      });
    }
    return result;
  };
}

CartContainer.protoTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        raiting: PropTypes.number.isRequired,
      }),
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispathToProps = (dispath, props) => {
  return {
    removeProductInCart: (product) => {
      dispath(removePrduct(product));
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(CartContainer);
