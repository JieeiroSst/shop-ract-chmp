import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Cart from "./components/cart";
import Message from "./components/message";

import ProductContainer from "./containers/ProductContainer";
import CartContainer from "./containers/cartContainer";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />

          <main id="mainContainer">
            <div class="container">
              <ProductContainer />
              <Message />
              <CartContainer />
            </div>
          </main>

          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
