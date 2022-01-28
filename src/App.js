import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Item from "./components/item/Item";
import Cart from "./components/cart/Cart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/collection/:collectionId" component={} /> */}
        {/* <Route path="/category/:categoryId" component={} /> */}
        <Route path="/item/:itemId" component={Item} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
