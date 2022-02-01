import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import "./styles.css";

import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  const CartButton = styled(Button)(({ theme }) => ({
    marginRight: "5rem",
    border: "2px solid black",
    fontWeight: "600",
    fontSize: "1  rem",
    backgroundColor: "#ffffff",
    "&:hover": {
      backgroundColor: purple[400],
    },
  }));

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item;
    });
    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <nav>
      <NavLink to="/">
        <div className="logo">
          <h1>
            <span>MOVA</span> SHOP
          </h1>
        </div>
      </NavLink>
      <CartButton variant="outlined" href="/cart">
        Cart{" "}
        <span className={cartCount > 0 ? "cart-count" : "hide-count"}>
          {cartCount}
        </span>
      </CartButton>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
