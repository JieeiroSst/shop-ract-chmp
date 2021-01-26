import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../components/products";
import Product from "../components/product";
import PropTypes from "prop-types";
import { addToCart, changeMesage } from "../actions";

class ProductsContainer extends Component {
  showProducts = (products) => {
    const { addToCart, onChangeMessage } = this.props;
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <Product
            key={index}
            product={product}
            addToCart={addToCart}
            onChangeMessage={onChangeMessage}
          />
        );
      });
    }
    return result;
  };
  render() {
    const { products } = this.props;
    return <Products>{this.showProducts(products)}</Products>;
  }
}

ProductsContainer.protoTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      raiting: PropTypes.number.isRequired,
    })
  ).isRequired,
  onChangeMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispathToProps = (dispatch, props) => {
  return {
    addToCart: (product) => {
      dispatch(addToCart(product, 1));
    },
    onChangeMessage: (message) => {
      dispatch(changeMesage(message));
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(ProductsContainer);
