// React Core
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Material UI
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import "./styles.css";

// Redux
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cart: state.cart,
  };
};

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
    let items = [];
    cart.forEach((item) => {
      items.push(item);
      count = items.length;
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

export default connect(mapStateToProps, null)(Navbar);
