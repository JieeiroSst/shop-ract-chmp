import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";

import ProductContainer from "./containers/ProductContainer";
import CartContainer from "./containers/cartContainer";
import MesageContainer from "./containers/messageContainer";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />

          <main id="mainContainer">
            <div class="container">
              <ProductContainer />
              <MesageContainer />
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
