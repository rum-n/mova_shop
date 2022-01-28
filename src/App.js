import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Item from "./pages/Item";
import Category from "./pages/Category";
import Collection from "./pages/Collection";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/collection/:collectionId" element={<Collection />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/item/:itemId" element={<Item />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
